/*************************************

项目名称：建工计算器
下载地址：https://t.cn/A68YJHGi
更新日期：2024-08-05
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用说明：先打开脚本再进去APP登录账号即可
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/calc\.kuaicad\.com\/authority\/verify_vip url script-response-body https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/app/deps/jgjsq.js

[mitm]
hostname = calc.kuaicad.com

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023.data = {
  ...chxm1023.data,
  "type" : 1,
  "expiresTime" : 4092599349000,
  "isExpires" : false
};

$done({body : JSON.stringify(chxm1023)});