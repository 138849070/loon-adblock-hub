/*************************************

项目名称：木工宝典
下载地址：https://t.cn/A6nSLzkO
更新日期：2024-11-04
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/api-wood\.kaying\.cc\/rest\/user url script-response-body https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/app/deps/mgbd.js

[mitm]
hostname = api-wood.kaying.cc

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023.data = {
  ...chxm1023.data,
  "remainDay" : "999",
  "vip" : {
    "desc" : "年会员",
    "value" : "YES",
    "code" : "YES"
  }
};

$done({body : JSON.stringify(chxm1023)});
