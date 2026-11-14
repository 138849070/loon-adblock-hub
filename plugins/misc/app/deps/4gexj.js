/*************************************

项目名称：Foodie/轻图/B612相机/甜盐相机
下载地址：https://t.cn/A6OnDkXP
下载地址：https://t.cn/A6OjOeJY
下载地址：https://t.cn/A6OmacYG
下载地址：https://t.cn/A6Omaf2D
更新日期：2025-01-08
脚本作者：@ddm1023
电报频道：https://t.me/ddm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/(purchase-.*-api|user-kaji-api)\.(yiruikecorp|b612kaji|tianyancam)\.com\/v\d\/purchase\/subscription\/subscriber\/status url script-response-body https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/app/deps/4gexj.js

[mitm]
hostname = purchase-*-api.*.com, user-kaji-api.b612kaji.com

*************************************/


var ddm = JSON.parse($response.body);
const Foodie = 'https://purchase-foodiecn-api.yiruikecorp.com';
const qingtu = 'https://purchase-qingtu-api.b612kaji.com';
const B612xj = 'https://user-kaji-api.b612kaji.com';
const tianyan = 'https://purchase-tianyan-api.tianyancam.com';

//Foodie
if ($request.url.indexOf(Foodie) != -1){
  id = "com.linecorp.Foodiecn.subscribe.oneyear";
}

//轻图
if ($request.url.indexOf(qingtu) != -1){
  id = "com.photovision.camera.subscribe.plan.oneyear";
}

//B612相机
if ($request.url.indexOf(B612xj) != -1){
  id = "com.campmobile.snowcamera.vip.oneyear";
}

//甜盐相机
if ($request.url.indexOf(tianyan) != -1){
  id = "com.yiruike.sodacn.subscribe.oneyear";
}

ddm = {  "result" : {    "products" : [      {        "managed" : false,        "status" : "ACTIVE",        "startDate" : 1666666666666,        "productId" : (id),        "expireDate" : 4092599349000      }    ],    "activated" : true  }};

$done({body : JSON.stringify(ddm)});
