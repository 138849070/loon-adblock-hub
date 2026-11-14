/*************************************

项目名称：Tripsy-旅行规划者
下载地址：https://t.cn/A60jMYum
更新日期：2025-03-20
脚本作者：@ddm1023
电报频道：https://t.me/ddm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/firstclass\.tripsy\.app\/api\/v\d\/receipt\/update url script-response-body https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/app/deps/Tripsy.js

[mitm]
hostname = firstclass.tripsy.app

*************************************/


let ddm = {
  "is_premium" : true,
  "expiration_intent" : 0,
  "is_trial" : true,
  "subscription" : "premium.lifetime",
  "is_renew_active" : true,
  "expiration_date" : null,
  "is_introductory_offer" : true,
  "is_in_billing_retry_period" : false
};

$done({body : JSON.stringify(ddm)});