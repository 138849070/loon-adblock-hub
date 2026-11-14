/*************************************

项目名称：乐拍
下载地址：https://t.cn/A6Qw3XCp
更新日期：2024-06-15
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/lepai-api\.faceqianyan\.com\/(apple\/product|account\/profile|faceFusion|toolCollection) url script-response-body https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/app/deps/lepai.js

[mitm]
hostname = lepai-api.faceqianyan.com

*************************************/


var chxm1023 = JSON.parse($response.body);
const vip = /(apple\/product|account\/profile)/;
const shuiyin = /(toolCollection|faceFusion)/;

if (vip.test($request.url)) {
  searchAndModify(chxm1023, 'pro', 1, 'load_subscribe_page', 0);
}

if (shuiyin.test($request.url)) {
  if (chxm1023.data && chxm1023.data.fusion_url) {
    chxm1023.data.fusion_url = chxm1023.data.fusion_url.replace("/image_watermark_lepai", "");
  }
  if (chxm1023.data && chxm1023.data.info && chxm1023.data.info.works_url) {
    chxm1023.data.info.works_url = chxm1023.data.info.works_url.replace("/filter_watermark_lepai", "");
  }
}

$done({ body: JSON.stringify(chxm1023) });

function searchAndModify(obj, ...args) { for (let i = 0; i < args.length; i += 2) { const key = args[i]; const value = args[i + 1]; for (var prop in obj) { if (obj.hasOwnProperty(prop)) { if (typeof obj[prop] === 'object' && obj[prop] !== null) { searchAndModify(obj[prop], ...args);} else if (prop === key) { obj[prop] = value; }}}}};
