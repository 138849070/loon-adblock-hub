/*************************************

项目名称：秒解析
下载地址：https://too.st/94O
更新日期：2024-03-30
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/tcb-api\.tencentcloudapi\.com\/web url script-response-body https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/app/deps/miaojiexi.js

[mitm]
hostname = tcb-api.tencentcloudapi.com

*************************************/


//获取当前时间戳
var currentTimeStamp = Date.now();
//获取response_data响应
var responseData = JSON.parse($response.body).data.response_data;
//解析response_data中的data字段
var data = JSON.parse(responseData).data;

//修改数据
data[0].jieshushijian = 4092599349000;
data[0].kaitongshijian = currentTimeStamp;
data[0].qixian = "永久免除所有广告";

//更新response_data中的data字段
responseData = JSON.stringify({ data: data });

//更新原始数据
var chxm1023 = JSON.parse($response.body);

chxm1023.data.response_data = responseData;

$done({ body: JSON.stringify(chxm1023) });
