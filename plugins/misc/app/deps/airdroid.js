/*************************************

项目名称：Airdroid Cast-无线投屏助手
下载地址：https://t.cn/A6TYOPUL
数据来源：@David_Hex01
更新日期：2025-01-08
脚本作者：@ddm1023
电报频道：https://t.me/ddm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/(pay|id-cast)\.airdroid\.cn\/(cast\/getUserPaymentInfo|user\/getuserinfo) url script-response-body https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/app/deps/airdroid.js

[mitm]
hostname = *.airdroid.cn

*************************************/


var chxm1023 = JSON.parse($response.body);
const vip = /cast\/getUserPaymentInfo/;
const user = /user\/getuserinfo/;

if(vip.test($request.url)){
  chxm1023.data = {
    ...chxm1023.data,
    "next_order_level": 2,
    "has_pay": 1,
    "subscription_fee_mode_id": 400081,
    "subscription_payment_method_desc": "Apple",
    "feature_type": 1,
    "subscription_start": "2023-09-09",
    "end_date": "2099-09-09",
    "subscription_next_payment": "2099-09-09",
    "name" : "AirDroid Cast Svip 1 Year",
    "end_date_ms": 4092599349000,
    "subscription_is_bundle": true,
    "is_subscription": 1,
    "user_type": 2,
    "order_level": 3,
    "apple_iap_product_id": "com.sandstudio.cp_castsource.vip_yearly",
    "subscription_payment_method": "Apple",
    "isPremium": 1,
    "cast_feature_type": 1,
    "vip": 1,
    "subscription_month": 12,
    "is_bundle": true,
    "is_recurring": 1,
    "level": 3
  };
}

if(user.test($request.url)){
  chxm1023.data = {
    ...chxm1023.data,
    "vip" : 1,
    "isPremium" : 1,
    "vip_starttime" : "2023-09-09 09:09:09",
    "cast_feature_type" : 1,
    "vip_endtime" : 4092599349000
  };
}

$done({body : JSON.stringify(chxm1023)});