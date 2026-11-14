/*************************************

项目名称：IFTTT-工作流程和智能家居自动化
下载地址：https://t.cn/A6BoMYcc
更新日期：2025-03-17
脚本作者：@ddm1023
电报频道：https://t.me/ddm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/ifttt\.com\/api\/v\d\/graph url script-response-body https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/app/deps/IFTTT.js

[mitm]
hostname = ifttt.com

*************************************/


var ddm = JSON.parse($response.body);

const data = {"normalized_user_tier":"pro","applet_quota_slots_total":20,"user_subscriptions":[{"expires_at":"2099-09-09 09:09:09 -0700","id":"777777","status":"active","payment_type":"apple","plan_id":"pro"}],"permissions":{"multi_action":{"minimum_tier":"intermediate_pro","permitted":true},"multi_service_account":{"minimum_tier":"pro","permitted":true},"queries":{"minimum_tier":"pro","permitted":true},"filter_code":{"minimum_tier":"pro","permitted":true}},"applet_quota_slots_remaining":20,"tier":"pro"};

const updateUserSubscription = (target) => {
  if (target.user_subscriptions) {
    Object.assign(target, data);
  }
};

if (ddm.data.sessionSignInSso?.user) {
  updateUserSubscription(ddm.data.sessionSignInSso.user);
}

if (ddm.data.me) {
  updateUserSubscription(ddm.data.me);
}

$done({ body: JSON.stringify(ddm) });