/*************************************

项目名称：小滴课堂
下载地址：https://t.cn/A6T1XX5Z
更新日期：2024-07-03
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]

^https:\/\/api-v2\.xdclass\.net\/api\/account\/v\d\/(detail|login) url script-response-body https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/app/deps/xdkt.js

[mitm]
hostname = api-v2.xdclass.net

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023.data = {
  ...chxm1023.data,
  "vipExpired" : "2099-09-09 09:09:09",
  "vipRank" : 1,
  "identityType" : "永久会员",
  "role" : "FOREVER_VIP"
};

$done({body : JSON.stringify(chxm1023)});
