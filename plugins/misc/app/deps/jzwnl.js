/*************************************

应用名称：吉真万年历
脚本功能：解锁会员
下载地址：https://is.gd/iejNna
更新日期：2026-01-17
脚本作者：@ddm1023
电报频道：https://t.me/ddm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/calendarsrv\.iwzwh\.com\/api\/.+\/user\/getvipinfo url script-response-body https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/app/deps/jzwnl.js

[mitm]
hostname = calendarsrv.iwzwh.com

*************************************/


var ddm = JSON.parse($response.body);

ddm.data = {
  "expires" : "2099-09-09 09:09:09",
  "vipLevel" : 1
};

$done({body : JSON.stringify(ddm)});