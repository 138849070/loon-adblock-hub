/*************************************

项目名称：漫画台Lite
下载地址：#小程序://漫画台/NGyUMsmS3tlUbgI
更新日期：2025-01-08
脚本作者：@ddm1023
电报频道：https://t.me/ddm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/comic\.321mh\.com url script-response-body https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/app-ad/deps/donghuatai.js

[mitm]
hostname = comic.321mh.com

*************************************/


var body = $response.body;

body = body.replace(/\"isbuy":\d+/g, '\"isbuy":0');

body = body.replace(/\"is_vip":\d+/g, '\"is_vip":0');

body = body.replace(/\"islock":\d+/g, '\"islock":0');

body = body.replace(/\"price":\d+/g, '\"price":0');

body = body.replace(/\"download_price":\d+/g, '\"download_price":0');

$done({body});
