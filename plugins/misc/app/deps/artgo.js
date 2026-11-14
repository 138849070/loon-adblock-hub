/*************************************

项目名称：ARTGO 个性水印
下载地址：https://t.cn/A6Bzayhw
更新日期：2025-03-08
脚本作者：@ddm1023
电报频道：https://t.me/ddm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
http:\/\/api\.artgo\.ltd url script-response-body https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/app/deps/artgo.js

*************************************/


var body = $response.body.replace(/\"vipExpiredAt":\d+/g, '\"vipExpiredAt":4092599349000').replace(/\"userVipExpiredAt":\d+/g, '\"userVipExpiredAt":4092599349000').replace(/\"chargeType":\d+/g, '\"chargeType":0').replace(/\"downloadAfterPay":\d+/g, '\"downloadAfterPay":1');$done({body});