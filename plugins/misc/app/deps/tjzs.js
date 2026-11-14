/*************************************

项目名称：推剧助手
下载地址：https://t.cn/A6Tfv8iZ
更新日期：2024-04-01
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/film-api\.startupfun\.vip\/api\/v\d\/(wallpaper\/generator|user\/point\/info) url script-response-body https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/app/deps/tjzs.js

[mitm]
hostname = film-api.startupfun.vip

*************************************/


var chxm1023 = JSON.parse($response.body);
const vip = /vip\/info/;
const point = /user\/point\/info/;
const bf = /check/;

if(vip.test($request.url)){
  chxm1023.vipDesc = "会员有效期至：2099-09-09 09:09";
  chxm1023.vipInfo.forEach(item => {
    if ('vipType' in item && 'vipStatus' in item && 'vipDesc' in item) {
      item.vipType = 1;
      item.vipStatus = 1;
      item.vipDesc = "会员有效期至：2099-09-09 09:09";
    }
    if ('mobile' in item) {
      item.mobile = "会员有效期至：2099-09-09 09:09";
    }
    if (item.userInfo) {
      item.userInfo.dailyRemaining = 99;
      item.userInfo.dailyLimit = 99;
      item.userInfo.permanentPoints = 99;
    }
  });
  
  chxm1023.mobile = "叮当猫の分享频道(年费会员)";
  chxm1023.queryTimes = 3;
  chxm1023.vipStatus = 1;
  chxm1023.isTrial = 1;
  chxm1023.coins = 99;
  chxm1023.isNewAwardTimes = 99;
}

if(point.test($request.url)){
  chxm1023.points = 999;
  chxm1023.permanentPoints = 999;
}

if(bf.test($request.url)){
  chxm1023.canGenerate = 1;
  chxm1023.needDuration = 0;
}

$done({ body: JSON.stringify(chxm1023) });