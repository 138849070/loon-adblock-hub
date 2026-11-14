/*
作者: @mcdasheng (UI优化版)
脚本功能: ChatGPT解锁查询
[Script]
  generic script-path=https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-018/deps/ChatGPT.js, timeout=10, img-url=https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-018/deps/ChatGPT4.png
@params
  "ipinfo_token": https://ipinfo.io 官网自行申请 (可选)
@thanks
  @getSomeCats
*/

const $ = new Env("ChatGPT");

// ===================== Loon 原生 HTML 渲染器 (亮暗自适应 & 居中) =====================
function escape(value) {
  return String(value == null ? "" : value).replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
  });
}

// isSub 为 true 表示小字，自动启用亮灰/暗白模式反转
function text(value, size, weight, color, isSub = false) {
  const textColor = isSub ? "var(--sub-color)" : (color || "var(--sub-color)");
  return (
    '<span style="font-family:-apple-system,Helvetica;font-size:' +
    size +
    "px;font-weight:" +
    (weight || 400) +
    ";color:" +
    textColor +
    ';">' +
    escape(value) +
    "</span>"
  );
}

function paragraph(body) {
  return '<p style="margin:0 0 10px;line-height:1.4;text-align:center;">' + body + "</p>";
}

function documentHtml(body) {
  return (
    '<!doctype html><html lang="zh-CN"><head><meta charset="utf-8">' +
    '<style>' +
    ':root { --sub-color: #777777; } ' + // 亮模式：灰字
    '@media (prefers-color-scheme: dark) { :root { --sub-color: #ffffff; } } ' + // 暗模式：白字
    'body { margin:0; padding:8px 0; text-align:center; -webkit-user-select:none; }' +
    '</style></head><body>' +
    body +
    "</body></html>"
  );
}
// ==============================================================================

// 安全获取当前节点信息
const currentNode =
  typeof $environment !== "undefined" && $environment?.params?.node
    ? $environment.params.node
    : undefined;

const nodeName =
  (typeof $environment !== "undefined" &&
    ($environment?.params?.nodeInfo?.name || $environment?.params?.node)) ||
  "当前分流节点";

$.token = $.getdata("ipinfo_token") ? $.getdata("ipinfo_token") : "";

ChatGPT_Test()
  .catch((e) => $.logErr(e))
  .finally(async () => {
    $.log("ok");
    $.done();
  });

async function ChatGPT_Test() {
  // 安全获取 IP，即使接口超时/限流也不中断检测流程
  var ip = await getIp().catch(() => null);

  // prettier-ignore
  let chatGPT_regions = ["AL", "DZ", "AF", "AD", "AO", "AG", "AR", "AM", "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "BE", "BZ", "BJ", "BT", "BO", "BA", "BW", "BR", "BN", "BG", "BF", "BI", "CV", "KH", "CM", "CA", "CF", "TD", "CL", "CO", "KM", "CG", "CD", "CR", "CI", "HR", "CY", "CZ", "DK", "DJ", "DM", "DO", "EC", "EG", "SV", "GQ", "ER", "EE", "SZ", "ET", "FJ", "FI", "FR", "GA", "GM", "GE", "DE", "GH", "GR", "GD", "GT", "GN", "GW", "GY", "HT", "VA", "HN", "HU", "IS", "IN", "ID", "IQ", "IE", "IL", "IT", "JM", "JP", "JO", "KZ", "KE", "KI", "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU", "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MR", "MU", "MX", "FM", "MD", "MC", "MN", "ME", "MA", "MZ", "MM", "NA", "NR", "NP", "NL", "NZ", "NI", "NE", "NG", "MK", "NO", "OM", "PK", "PW", "PS", "PA", "PG", "PY", "PE", "PH", "PL", "PT", "QA", "RO", "RW", "KN", "LC", "VC", "WS", "SM", "ST", "SA", "SN", "RS", "SC", "SL", "SG", "SK", "SI", "SB", "SO", "ZA", "KR", "SS", "ES", "LK", "SR", "SE", "CH", "SD", "TW", "TJ", "TZ", "TH", "TL", "TG", "TO", "TT", "TN", "TR", "TM", "TV", "UG", "UA", "AE", "GB", "US", "UY", "UZ", "VU", "VN", "YE", "ZM", "ZW"];

  var options = {
    url: `https://chatgpt.com/cdn-cgi/trace`,
    headers: {
      "User-Agent": `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36`,
      "Content-Type": "text/json",
      Accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      "Accept-Encoding": "gzip, deflate, br",
    },
    ...(currentNode ? { node: currentNode } : {}),
    timeout: 6000,
  };

  return $.http.get(options).then(
    (resp) => {
      var body = resp.body;
      $.log(body);

      if (!body || body.indexOf("loc=") === -1) {
        throw new Error("无法获取有效的 trace 数据");
      }

      let lines = body.split("\n");
      let cf = lines.reduce((a, line) => {
        let [key, value] = line.split("=");
        if (key && value) a[key.trim()] = value.trim();
        return a;
      }, {});

      var gpt_warp = cf.warp === "plus" || cf.warp === "on";
      var unlockType = "";
      var statusColor = "#338276"; // 已解锁：统一绿色
      var statusTitle = "";
      var icon = "checkmark.shield.fill";

      if (gpt_warp) {
        unlockType = "WARP 解锁";
      } else if (ip && cf.ip == ip) {
        unlockType = "原生解锁";
      } else {
        unlockType = "代理解锁";
      }

      let regionEmoji = getCountryFlagEmoji(cf.loc);
      let isSupported = chatGPT_regions.indexOf(cf.loc) !== -1;

      if (isSupported) {
        statusTitle = "服务已解锁";
        statusColor = "#338276"; // 已解锁：绿色
      } else {
        statusTitle = "服务未解锁";
        statusColor = "#FFD166"; // 未解锁：黄色
        unlockType = "地区不支持";
        icon = "exclamationmark.shield.fill";
      }

      const regionDisplay = `${regionEmoji} ${cf.loc || "未知"}`;

      // ========== 构造精简比例 HTML 视图 ==========
      // 1. 顶部：节点名称 (小字自适应)
      var html = paragraph(text(nodeName, 12, 500, null, true));

      // 2. 状态主标题 (小一半后为 15px 加粗)
      var statusLines = [
        text("ChatGPT 服务状态", 11, 400, null, true),
        text(statusTitle, 15, 600, statusColor),
      ];
      html += paragraph(statusLines.join("<br>"));

      // 3. 详细信息：地区 & 解锁形式 (小一半后为 13px)
      var infoLines = [
        text("地区 · 类型", 11, 400, null, true),
        text(`${regionDisplay}  ·  ${unlockType}`, 13, 500, statusColor),
      ];
      html += paragraph(infoLines.join("<br>"));

      // 4. 底部汇总 (11px 浅字自适应)
      html += paragraph(text(`IP: ${cf.ip || "未知"} · WARP: ${cf.warp || "off"}`, 11, 400, null, true));

      let htmlMessage = documentHtml(html);
      let content = `${nodeName}\n${statusTitle}\n${regionDisplay} · ${unlockType}\nIP: ${cf.ip || "未知"}`;

      if (typeof $done !== "undefined") {
        $done({
          title: "ChatGPT 查询结果",
          htmlMessage: htmlMessage,
          content: content,
          icon: icon,
          "icon-color": statusColor,
        });
      }
    },
    (reason) => {
      $.log("🔴 ChatGPT 测试失败");
      $.log(reason?.error || reason);

      let errHtml = documentHtml(
        paragraph(text(nodeName, 12, 500, null, true)) +
          paragraph(text("检测失败", 15, 600, "#FFD166")) +
          paragraph(text(reason?.message || "网络请求超时或节点连接异常", 11, 400, null, true))
      );

      if (typeof $done !== "undefined") {
        $done({
          title: "ChatGPT 查询结果",
          htmlMessage: errHtml,
          content: `${nodeName}\n检测失败`,
          icon: "exclamationmark.triangle",
          "icon-color": "#FFD166",
        });
      }
    }
  );
}

// 获取国旗 Emoji 函数
function getCountryFlagEmoji(countryCode) {
  if (!countryCode) return "🏳️";
  if (countryCode.toUpperCase() === "TW") {
    countryCode = "WS";
  }
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

// 高可用 IP 查询函数（不限流，失败平滑降级）
async function getIp() {
  const targetUrl = $.token
    ? `https://ipinfo.io/json?token=${$.token}`
    : `https://api.ipify.org?format=json`;

  var options = {
    url: targetUrl,
    headers: {
      "User-Agent": `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36`,
      Accept: "application/json",
    },
    ...(currentNode ? { node: currentNode } : {}),
    timeout: 4000,
  };

  return $.http.get(options).then(
    (resp) => {
      try {
        var obj = JSON.parse(resp.body);
        if (obj && obj.ip) {
          return obj.ip;
        }
      } catch (e) {}
      return null;
    },
    () => null
  );
}

// prettier-ignore
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,a)=>{s.call(this,t,(t,s,r)=>{t?a(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.encoding="utf-8",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}getEnv(){return"undefined"!=typeof $environment&&$environment["surge-version"]?"Surge":"undefined"!=typeof $environment&&$environment["stash-version"]?"Stash":"undefined"!=typeof module&&module.exports?"Node.js":"undefined"!=typeof $task?"Quantumult X":"undefined"!=typeof $loon?"Loon":"undefined"!=typeof $rocket?"Shadowrocket":void 0}isNode(){return"Node.js"===this.getEnv()}isQuanX(){return"Quantumult X"===this.getEnv()}isSurge(){return"Surge"===this.getEnv()}isLoon(){return"Loon"===this.getEnv()}isShadowrocket(){return"Shadowrocket"===this.getEnv()}isStash(){return"Stash"===this.getEnv()}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const a=this.getdata(t);if(a)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,a)=>e(a))})}runScript(t,e){return new Promise(s=>{let a=this.getdata("@chavy_boxjs_userCfgs.httpapi");a=a?a.replace(/\n/g,"").trim():a;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[i,o]=a.split("@"),n={url:`http://${o}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":i,Accept:"*/*"},timeout:r};this.post(n,(t,e,a)=>s(a))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),a=!s&&this.fs.existsSync(e);if(!s&&!a)return{};{const a=s?t:e;try{return JSON.parse(this.fs.readFileSync(a))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),a=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):a?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const a=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of a)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,a)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[a+1])>>0==+e[a+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,a]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,a,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,a,r]=/^@(.*?)\.(.*?)$/.exec(e),i=this.getval(a),o=a?"null"===i?null:i||"{}":"{}";try{const e=JSON.parse(o);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),a)}catch(e){const i={};this.lodash_set(i,r,t),s=this.setval(JSON.stringify(i),a)}}else s=this.setval(t,e);return s}getval(t){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":return $persistentStore.read(t);case"Quantumult X":return $prefs.valueForKey(t);case"Node.js":return this.data=this.loaddata(),this.data[t];default:return this.data&&this.data[t]||null}}setval(t,e){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":return $persistentStore.write(t,e);case"Quantumult X":return $prefs.setValueForKey(t,e);case"Node.js":return this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0;default:return this.data&&this.data[e]||null}}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){switch(t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"],delete t.headers["content-type"],delete t.headers["content-length"]),t.params&&(t.url+="?"+this.queryStr(t.params)),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,a)=>{!t&&s&&(s.body=a,s.statusCode=s.status?s.status:s.statusCode,s.status=s.statusCode),e(t,s,a)});break;case"Quantumult X":this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:a,headers:r,body:i,bodyBytes:o}=t;e(null,{status:s,statusCode:a,headers:r,body:i,bodyBytes:o},i,o)},t=>e(t&&t.error||"UndefinedError"));break;case"Node.js":let s=require("iconv-lite");this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:a,statusCode:r,headers:i,rawBody:o}=t,n=s.decode(o,this.encoding);e(null,{status:a,statusCode:r,headers:i,rawBody:o,body:n},n)},t=>{const{message:a,response:r}=t;e(a,r,r&&s.decode(r.rawBody,this.encoding))})}}post(t,e=(()=>{})){const s=t.method?t.method.tocountryaleLowerCase():"post";switch(t.body&&t.headers&&!t.headers["Content-Type"]&&!t.headers["content-type"]&&(t.headers["content-type"]="application/x-www-form-urlencoded"),t.headers&&(delete t.headers["Content-Length"],delete t.headers["content-length"]),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient[s](t,(t,s,a)=>{!t&&s&&(s.body=a,s.statusCode=s.status?s.status:s.statusCode,s.status=s.statusCode),e(t,s,a)});break;case"Quantumult X":t.method=s,this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:a,headers:r,body:i,bodyBytes:o}=t;e(null,{status:s,statusCode:a,headers:r,body:i,bodyBytes:o},i,o)},t=>e(t&&t.error||"UndefinedError"));break;case"Node.js":let a=require("iconv-lite");this.initGotEnv(t);const{url:r,...i}=t;this.got[s](r,i).then(t=>{const{statusCode:s,statusCode:r,headers:i,rawBody:o}=t,n=a.decode(o,this.encoding);e(null,{status:s,statusCode:r,headers:i,rawBody:o,body:n},n)},t=>{const{message:s,response:r}=t;e(a,r,r&&a.decode(r.rawBody,this.encoding))})}}time(t,e=null){const s=e?new Date(e):new Date;let a={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in a)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?a[e]:("00"+a[e]).substr((""+a[e]).length)));return t}queryStr(t){let e="";for(const s in t){let a=t[s];null!=a&&""!==a&&("object"==typeof a&&(a=JSON.stringify(a)),e+=`${s}=${a}&`)}return e=e.substring(0,e.length-1),e}msg(e=t,s="",a="",r){const i=t=>{switch(typeof t){case void 0:return t;case"string":switch(this.getEnv()){case"Surge":case"Stash":default:return{url:t};case"Loon":case"Shadowrocket":return t;case"Quantumult X":return{"open-url":t};case"Node.js":return}case"object":switch(this.getEnv()){case"Surge":case"Stash":case"Shadowrocket":default:{let e=t.url||t.openUrl||t["open-url"];return{url:e}}case"Loon":{let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}case"Quantumult X":{let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl,a=t["update-pasteboard"]||t.updatePasteboard;return{"open-url":e,"media-url":s,"update-pasteboard":a}}case"Node.js":return}default:return}};if(!this.isMute)switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:$notification.post(e,s,a,i(r));break;case"Quantumult X":$notify(e,s,a,i(r));break;case"Node.js":}if(!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),a&&t.push(a),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":case"Quantumult X":default:this.log("",`❗️${this.name}, 错误!`,t);break;case"Node.js":this.log("",`❗️${this.name}, 错误!`,t.stack)}}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;switch(this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":case"Quantumult X":default:$done(t);break;case"Node.js":process.exit(1)}}}(t,e)}