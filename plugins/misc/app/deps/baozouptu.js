/*************************************

项目名称：暴走P图
下载地址：https://t.cn/A6WwGEm7
更新日期：2025-01-09
脚本作者：@ddm1023
电报频道：https://t.me/ddm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
https?:\/\/api\.intelimeditor\.com\/user\/loginByThirdPlatformApp url script-response-body https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/app/deps/baozouptu.js

[mitm]
hostname = api.intelimeditor.com

*************************************/


var ddm = JSON.parse($response.body);

ddm.data.lookVipCount = 3;
ddm.data.vipExpireTime = "4092599349000";

$done({body : JSON.stringify(ddm)});
