/*************************************

项目名称：Wallcraft-动态壁纸
下载地址：http://t.cn/A6iO7Eht
更新日期：2025-03-21
脚本作者：@ddm1023
电报频道：https://t.me/ddm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/billing-ios\.wallpaperscraft\.com\/v\d\/(verify_receipt|products)\/remove_ads url script-response-body https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/app/deps/Wall.js

[mitm]
hostname = billing-ios.wallpaperscraft.com

*************************************/


let ddm = JSON.parse($response.body), id = "com.wallpaperscraft.wallpapers.year.1.5baks";

if(/verify_receipt\/remove_ads/.test($request.url)){
  ddm.items["all_time"] = {
    "type" : "nonconsumable",
    "is_active" : true
  };
  ddm.items[id] = {
    "type" : "subscription",
    "already_used_introductory_price" : false,
    "is_active" : true
  };
}

if(/products\/remove_ads/.test($request.url)){
  ddm = {
    "items" : {
      "nonconsumables" : [
        "all_time"
      ],
      "subscriptions" : [
        id
      ]
    }
  };
}

$done({body : JSON.stringify(ddm)});