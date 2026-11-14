/*************************************

应用名称：智能抢答器
脚本功能：解锁会员
下载地址：https://t.cn/A6g6Zm0G
更新日期：2025-05-18
脚本作者：@ddm1023
电报频道：https://t.me/ddm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/qdq\.9sm\.net\/api\/userInfo\/getUserInfo url script-response-body https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/app/deps/znqdq.js

[mitm]
hostname = qdq.9sm.net

*************************************/


var ddm = JSON.parse($response.body);

ddm.data.expiredTime = "2099-09-09 09:09:09";
ddm.data.vipType = 1;

$done({body : JSON.stringify(ddm)});