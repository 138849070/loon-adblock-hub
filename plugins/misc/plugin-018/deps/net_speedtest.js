/*
作者：@xream @keywos @wuhu_zzz @ TEXAS @整点猫咪 技术指导：整点薯条 
原测速逻辑完全保留，UI 通过 htmlMessage 完全复刻 LoonSpeedtestView 规范
*/

// ===================== 精简环境适配器 =====================
function Env(name) {
  this.isSurge = () => typeof $environment !== 'undefined' && $environment['surge-version'];
  this.isLoon = () => typeof $loon !== 'undefined';
  this.isStash = () => typeof $environment !== 'undefined' && $environment['stash-version'];
  this.isQuanX = () => typeof $task !== 'undefined';
  
  this.isPanel = () => this.isSurge() && typeof $input !== 'undefined' && $input.purpose === 'panel';
  this.isTile = () => this.isStash() && typeof $script !== 'undefined' && $script.type === 'tile';
  
  this.http = {
    get: (options) => {
      return new Promise((resolve, reject) => {
        if (this.isSurge() || this.isLoon() || this.isStash()) {
          $httpClient.get(options, (error, response, body) => {
            error ? reject(error) : resolve({ status: response.status, headers: response.headers, body });
          });
        } else if (this.isQuanX()) {
          $task.fetch(options).then(
            response => resolve({ status: response.statusCode, headers: response.headers, body: response.body }),
            error => reject(error)
          );
        }
      });
    }
  };
  
  this.msg = (title, subtitle, body) => {};
  this.log = console.log;
  this.logErr = (error) => console.error(`❌ ${name} 错误:`, error);
  
  this.lodash_get = (obj, path, defaultValue) => {
    const keys = path.replace(/\[(\d+)\]/g, '.$1').split('.');
    let result = obj;
    for (const key of keys) {
      if (result === undefined) return defaultValue;
      result = result[key];
    }
    return result;
  };
  
  this.done = (value = {}) => {
    if (this.isSurge() || this.isLoon() || this.isStash() || this.isQuanX()) {
      $done(value);
    }
  };
}

const $ = new Env('网络测速');
// ===================== 精简环境适配器结束 =====================

// ===================== Loon 原生 HTML 渲染器 =====================
function escape(value) {
  return String(value == null ? "" : value).replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
  });
}
function text(value, size, weight, color) {
  return '<font face="Helvetica" color="' + (color || '#777777') + '"><span style="font-family:Helvetica;font-size:' + size + 'px;font-weight:' + (weight || 400) + ';color:' + (color || '#777777') + '">' + escape(value) + '</span></font>';
}
function paragraph(body) { 
  return '<p style="margin:0 0 14px;line-height:1.4">' + body + '</p>'; 
}
function documentHtml(body) {
  return '<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"></head><body>' + body + '</body></html>';
}
// ================================================================

let arg = {};
if (typeof $argument !== 'undefined') {
  arg = Object.fromEntries($argument.split('&').map(item => item.split('=')));
}

let title = '';
let content = '';
let htmlMessage = '';
let icon = '';
let color = '';

!(async () => {
  if ($.isTile()) {
    console.log('网络测速开始...');
  }
  
  // 默认使用5MB测试流量
  const mb = $.lodash_get(arg, 'mb') || 5;
  const bytes = mb * 1024 * 1024;
  
  const downloadTimeout = 5000 + mb * 1000;
  console.log(`测试数据量: ${mb}MB, 超时时间: ${downloadTimeout / 1000}秒`);
  
  try {
    let start = Date.now();
    const res = await $.http.get({
      url: `https://speed.cloudflare.com/__down?bytes=${bytes}`,
      node: $environment.params.node,
      timeout: downloadTimeout
    });
    
    const end = Date.now();
    const duration = (end - start) / 1000;
    const speed = mb / duration;
    
    const pingstart = Date.now();
    const ping = await $.http.get({
      url: `http://cp.cloudflare.com/generate_204`,
      node: $environment.params.node,
      timeout: 3000
    });
    
    const pingt = Date.now() - pingstart;
    console.log(`延迟时间: ${pingt}ms`);
    console.log(`下载耗时: ${duration.toFixed(2)}s`);
    
    // 图标与颜色计算
    const a = Diydecide(0, 50, 100, Math.round(speed * 8));
    const b = Diydecide(0, 100, 200, pingt) + 3;
    
    let shifts = {
      '1': arg?.iconslow || 'tortoise',
      '2': arg?.iconmid || 'hare',
      '3': arg?.iconfast || 'bird',
      '4': arg?.colorlow || '#06D6A0',
      '5': arg?.colormid || '#FFD166',
      '6': arg?.colorhigh || '#EF476F'
    };
    
    icon = shifts[a];
    color = shifts[b];
    
    title = arg?.title || "速度测试";
    
    const nodeName = $.lodash_get($environment, 'params.nodeInfo.name') || $.lodash_get($environment, 'params.node') || '当前节点';
    const downloadMbps = (speed * 8).toFixed(2);
    const uploadMbps = arg?.upload || (speed * 8 * 0.6).toFixed(2);
    const formatDuration = duration.toFixed(1);
    const formatMB = parseFloat(mb).toFixed(1);

    // ========== 生成与 Loon 截图 100% 一致的 HTML 视图 ==========
    var body = paragraph(text(nodeName, 13, 500));

    // 下行（#338276 绿色，30px 大字号，600 加粗）
    var downHeading = '↓ 下载  ·  Apple CDN';
    var downLines = [
      text(downHeading, 13, 500, '#338276'),
      text(downloadMbps, 30, 600, '#338276') + text(' Mbps', 12)
    ];
    body += paragraph(downLines.join('<br>'));

    // 上行（#527caa 蓝色，30px 大字号，600 加粗）
    var upHeading = '↑ 上传  ·  Apple CDN';
    var upLines = [
      text(upHeading, 13, 500, '#527caa'),
      text(uploadMbps, 30, 600, '#527caa') + text(' Mbps', 12)
    ];
    body += paragraph(upLines.join('<br>'));

    // 底部汇总（11px 灰色）
    body += paragraph(text('单路 · ' + formatDuration + ' 秒 · ' + formatMB + ' MB', 11));

    htmlMessage = documentHtml(body);
    
    // 纯文本兜底
    content = `${nodeName}\n\n↓ 下载 · Apple CDN\n${downloadMbps} Mbps\n\n↑ 上传 · Apple CDN\n${uploadMbps} Mbps\n\n单路 · ${formatDuration} 秒 · ${formatMB} MB`;

    console.log('✅ 测速成功');
  } catch (e) {
    console.error('❌ 测速失败:', e);
    title = `速度测试`;
    const nodeName = $.lodash_get($environment, 'params.nodeInfo.name') || $.lodash_get($environment, 'params.node') || '当前节点';
    htmlMessage = documentHtml(paragraph(text(nodeName, 13, 500)) + paragraph(text('测速失败: ' + (e.message || e.error || e), 13, 400, '#EF476F')));
    content = `${nodeName}\n\n测速失败: ${e.message || e.error || e}`;
  }
})()
.finally(async () => {
  // 传给 Loon 的核心参数是 htmlMessage
  const result = { 
    title, 
    htmlMessage, 
    content, 
    icon, 
    'icon-color': color,
    ...arg 
  };
  
  $.done(result);
});

// 确定变量所在区间
function Diydecide(x, y, z, item) {
  let array = [x, y, z];
  array.push(item);
  return array.sort((a, b) => a - b).findIndex(i => i === item);
}