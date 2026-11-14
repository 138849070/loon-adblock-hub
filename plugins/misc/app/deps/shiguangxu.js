/*************************************

项目名称：时光序-日程备忘清单
下载地址：https://t.cn/A68Fnq52
更新日期：2024-08-15
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/api\.weilaizhushou\.com\/base\/user\/vip\/getUserVip url script-response-body https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/app/deps/shiguangxu.js

[mitm]
hostname = api.weilaizhushou.com

*************************************/

var chxm1023 = JSON.parse($response.body);

chxm1023.data = {
  ...chxm1023.data,
  "isPopupAllLifeVip" : false,
  "vipState" : true,
  "allLifeVip" : true,
  "isVip" : true,
  "everVip" : true,
  "allLifeVipImage" : null,
  "isShowLimit" : false,
  "allLifeVipCornerIcon" : null
};

$done({body : JSON.stringify(chxm1023)});