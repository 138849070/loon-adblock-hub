/*************************************

项目名称：听书助手
下载地址：https://too.st/9ux
更新日期：2024-04-15
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/www\.huojiwangluo\.cn\/ting\/user\/.* url script-response-body https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/app/deps/tingshuzhushou.js

[mitm]
hostname = www.huojiwangluo.cn

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023.vip_expire = 4092599349;
chxm1023.vip_state = 1;

$done({body : JSON.stringify(chxm1023)});