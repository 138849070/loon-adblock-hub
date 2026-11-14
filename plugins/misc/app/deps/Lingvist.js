/*************************************

项目名称：Lingvist-学习语言
下载地址：https://t.cn/A6I2PgqM
更新日期：2024-07-25
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/.*\.lingvist\.com\/.+\/user\/(sync|services) url script-response-body https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/app/deps/Lingvist.js

[mitm]
hostname = *.lingvist.com

*************************************/


var chxm1023 = JSON.parse($response.body);
const user = /user\/sync/;
const dysj = /services/;

if(user.test($request.url)){
  chxm1023.subscription = {
    "status" : "intro-trial",
    "expiration_ts" : "2099-09-09T09:09:09+00:00",
    "trial_available" : false,
    "on_hold" : false,
    "trial_duration" : "P9999D"
  };
}

if(dysj.test($request.url)){
  chxm1023.services = [
    {
      "service" : "unlimited",
      "is_infinite" : true,
      "active_since_ts" : "2024-07-12T18:03:13.653711Z",
      "subscription" : {
        "uuid" : "3b7e23fa-c89a-46af-8643-a738ad29ca6f",
        "period" : "P99Y",
        "next_billing_ts" : "2099-09-09T09:09:09Z",
        "is_recurring" : true,
        "group_name" : "unlimited",
        "free_trial_duration" : "P9999D",
        "is_on_one_time_discount" : false,
        "one_time_discount_duration" : null,
        "expiration_ts" : "2099-09-09T09:09:09Z",
        "price" : {
          "amount" : "348.000000",
          "currency" : "CNY",
          "schedule" : [
            {
              "amount" : "348.000000",
              "discount_percentage" : 0,
              "periods" : 9999,
              "name" : "permanent-full",
              "starting_from_ts" : "2099-09-09T09:09:09Z",
              "duration" : "P1Y"
            }
          ]
        },
        "is_on_permanent_discount" : false,
        "is_on_free_trial" : false,
        "permanent_discount_percentage" : null,
        "status" : "active",
        "one_time_discount_percentage" : null
      },
      "title" : "Lingvist 無限版，單年付費",
      "unlimited_bundle" : {

      },
      "duration" : "P99Y",
      "payment_provider" : "apple-in-app",
      "active_until_ts" : "2099-09-09T09:09:09.653711Z",
      "is_active" : true,
      "product_name" : "unlimited-12-months"
    }
  ];
}

$done({body : JSON.stringify(chxm1023)});
