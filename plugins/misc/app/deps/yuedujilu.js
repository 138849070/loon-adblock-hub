/*************************************

项目名称：阅读记录
下载地址：https://t.cn/A6TEUZgw
更新日期：2024-04-22
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/app\.yidiansz\.com\/api\/v\d\/(app\/user\/info|banner) url script-response-body https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/app/deps/yuedujilu.js

[mitm]
hostname = app.yidiansz.com

*************************************/


var chxm1023 = JSON.parse($response.body);
const user = /app\/user\/info/;
const ad = /banner/;

if(user.test($request.url)){
  chxm1023.data = {
    ...chxm1023.data,
    "end_date" : "2099-09-09 09:09:09",
    "expires_date_s" : 4092599349000,
    "has_perpetual_vip" : 1,
    "member_type" : 4,
    "member_status" : 1
  };
}

if(ad.test($request.url)){
  chxm1023 = {};
}

$done({body : JSON.stringify(chxm1023)});