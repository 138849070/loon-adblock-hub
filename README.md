# Loon 去广告合集

个人维护的 Loon 插件与脚本仓库，用于集中管理日常使用的去广告配置和辅助脚本。

内容随缘更新。

## 分类概览

| 分类 | 插件总数 | 已启用 |
| --- | ---: | ---: |
| 影音娱乐 | 50 | 40 |
| 阅读学习 | 15 | 14 |
| 购物比价 | 12 | 12 |
| 出行地图 | 8 | 7 |
| 生活社交 | 45 | 44 |
| 工具与其他 | 79 | 67 |

另有 **24** 个独立脚本（签到 14、工具 7、其他 3），见 `scripts/` 与 [CATALOG.md](CATALOG.md)。

## 目录结构

```
plugins/         去广告插件（.plugin / .lpx），按分类分子目录
scripts/         独立脚本（.js），签到、查询、通知等任务
catalog.yaml     条目清单
links.md         订阅链接清单
```

插件所依赖的脚本与插件同目录存放，不单独拆分至 `scripts/`。

## 插件

<!-- PLUGINS_TABLE_START -->
| 名称 | 分类 | 链接 |
| --- | --- | --- |
| 65看 | 影音娱乐 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/65/plugin.lpx) |
| 7semao | 影音娱乐 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/7semao/plugin.lpx) |
| 91Porn 短视频 | 影音娱乐 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/91porn/plugin.lpx) |
| Biliverse 增强模式 | 影音娱乐 | [Biliverse.Enhanced.plugin](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/biliverse-enhanced/Biliverse.Enhanced.plugin) |
| byhz | 影音娱乐 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/byhz/plugin.lpx) |
| DualSubs: YouTube | 影音娱乐 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/dualsubs-youtube/plugin.lpx) |
| haijiao | 影音娱乐 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/haijiao/plugin.lpx) |
| hongxingshipin | 影音娱乐 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/hongxingshipin/plugin.lpx) |
| insav | 影音娱乐 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/insav-2/plugin.lpx) |
| insav 解锁 | 影音娱乐 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/insav/plugin.lpx) |
| jmshe | 影音娱乐 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/jmshe/plugin.lpx) |
| jtsp | 影音娱乐 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/jtsp/plugin.lpx) |
| luolidao | 影音娱乐 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/luolidao/plugin.lpx) |
| luping | 影音娱乐 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/luping/plugin.lpx) |
| MJGS | 影音娱乐 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/mjgs/plugin.lpx) |
| mmav | 影音娱乐 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/mmav/plugin.lpx) |
| Mr先生 + xvideos社区 + 泡芙短视频 + tiktok免费版 | 影音娱乐 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/mr-xvideos-tiktok/plugin.lpx) |
| mxshm | 影音娱乐 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/mxshm/plugin.lpx) |
| one2jj | 影音娱乐 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/one2jj/plugin.lpx) |
| porntube VIP 解锁 | 影音娱乐 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/porntube-vip/plugin.lpx) |
| txxxxx | 影音娱乐 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/txxxxx/plugin.lpx) |
| uua | 影音娱乐 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/uua/plugin.lpx) |
| xiaohuli | 影音娱乐 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/xiaohuli/plugin.lpx) |
| xv | 影音娱乐 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/xv/plugin.lpx) |
| yangtao | 影音娱乐 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/yangtao/plugin.lpx) |
| ydm | 影音娱乐 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/ydm/plugin.lpx) |
| ydm-淫荡猫 | 影音娱乐 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/ydm-3/plugin.lpx) |
| yeyan | 影音娱乐 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/yeyan/plugin.lpx) |
| YouTube (Music) | 影音娱乐 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/youtube-music/plugin.lpx) |
| YouTube 增强（gholts） | 影音娱乐 | [youtube_gholts.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/youtube-gholts/youtube_gholts.lpx) |
| YouTube去广告隐藏Shorts版@Aioneas | 影音娱乐 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/youtube-shorts-aioneas/plugin.lpx) |
| zukong | 影音娱乐 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/zukong/plugin.lpx) |
| 妻友社区解锁 | 影音娱乐 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/2966f7d1df7f46705623bc12109f6c2f/plugin.lpx) |
| 妻社 VIP解锁 | 影音娱乐 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/vip-3/plugin.lpx) |
| 快手去广告 | 影音娱乐 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/plugin-006-2/plugin.lpx) |
| 比狸比狸过滤 | 影音娱乐 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/bilibili-cleaner/plugin.lpx) |
| 流媒体解锁测试 | 影音娱乐 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/plugin-002-2/plugin.lpx) |
| 瓜子影视净化 | 影音娱乐 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/tilingsales-ad-remove-lpx/plugin.lpx) |
| 虎牙直播 | 影音娱乐 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/plugin-004-6/plugin.lpx) |
| 麻豆视频 + 快手萝莉 | 影音娱乐 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/plugin-013-3/plugin.lpx) |
| 18kmanhua | 阅读学习 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/reading/18kmanhua/plugin.lpx) |
| 18pcs | 阅读学习 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/reading/18pcs/plugin.lpx) |
| WakeUp课程表去广告 | 阅读学习 | [WakeupSchedule_remove_ads.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/reading/wakeup-schedule-remove-ads/WakeupSchedule_remove_ads.lpx) |
| 七猫小说 | 阅读学习 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/reading/plugin-010-2/plugin.lpx) |
| 七猫小说去广告 | 阅读学习 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/reading/plugin-017-2/plugin.lpx) |
| 医考帮去广告 | 阅读学习 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/reading/plugin-012/plugin.lpx) |
| 番茄小说 | 阅读学习 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/reading/plugin-014-2/plugin.lpx) |
| 番茄小说去广告 | 阅读学习 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/reading/plugin-009-2/plugin.lpx) |
| 番茄小说广告屏蔽 | 阅读学习 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/reading/plugin-012-4/plugin.lpx) |
| 知乎去广告 | 阅读学习 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/reading/plugin-004/plugin.lpx) |
| 腾讯新闻App去广告 | 阅读学习 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/reading/app-2/plugin.lpx) |
| 起点读书 | 阅读学习 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/reading/plugin-004-2/plugin.lpx) |
| 起点读书去广告 | 阅读学习 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/reading/plugin-015-3/plugin.lpx) |
| 起点读书签到 | 阅读学习 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/reading/plugin-005-3/plugin.lpx) |
| 京东去广告 | 购物比价 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/shopping/plugin-024/plugin.lpx) |
| 京东比价 | 购物比价 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/shopping/plugin-019-2/plugin.lpx) |
| 什么值得买去广告 | 购物比价 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/shopping/plugin-012-3/plugin.lpx) |
| 小红书 | 购物比价 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/shopping/plugin-005-5/plugin.lpx) |
| 小红书去广告 | 购物比价 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/shopping/plugin-016-4/plugin.lpx) |
| 得物 | 购物比价 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/shopping/plugin-016-2/plugin.lpx) |
| 得物去广告 | 购物比价 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/shopping/plugin-011-3/plugin.lpx) |
| 拼多多去广告 | 购物比价 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/shopping/plugin-019-3/plugin.lpx) |
| 淘宝 | 购物比价 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/shopping/plugin-003/plugin.lpx) |
| 淘宝去广告 | 购物比价 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/shopping/plugin-025/plugin.lpx) |
| 闲鱼 | 购物比价 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/shopping/plugin-008/plugin.lpx) |
| 闲鱼去广告 | 购物比价 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/shopping/plugin-022/plugin.lpx) |
| Apple天气增强 | 出行地图 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/travel/apple/plugin.lpx) |
| iRingo: LocationService | 出行地图 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/travel/iringo-locationservice/plugin.lpx) |
| iRingo: Maps | 出行地图 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/travel/iringo-maps/plugin.lpx) |
| iRingo: WeatherKit (Rewrite) | 出行地图 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/travel/iringo-weatherkit-rewrite/plugin.lpx) |
| 墨迹天气去广告 | 出行地图 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/travel/plugin-004-7/plugin.lpx) |
| 高德地图 | 出行地图 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/travel/plugin-004-4/plugin.lpx) |
| 高德地图去广告 | 出行地图 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/travel/plugin-027/plugin.lpx) |
| iTunes系列解锁 | 生活社交 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/itunes/plugin.lpx) |
| LINE 去广告 | 生活社交 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/line/plugin.lpx) |
| Outlook 去广告 | 生活社交 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/outlook/plugin.lpx) |
| QQ 空间广告净化 | 生活社交 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/qq/plugin.lpx) |
| QQ 链接解锁 | 生活社交 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/qq-2/plugin.lpx) |
| QQ 音乐去广告 | 生活社交 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/qq-3/plugin.lpx) |
| Reddit 自动翻译 | 生活社交 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/reddit/plugin.lpx) |
| Soul去广告 | 生活社交 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/soul/plugin.lpx) |
| Telegram 去广告 | 生活社交 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/telegram/plugin.lpx) |
| WPS 去广告 | 生活社交 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/wps/plugin.lpx) |
| X (Twitter) | 生活社交 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/x-twitter/plugin.lpx) |
| X (Twitter) 网页版去广告 | 生活社交 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/x-twitter-2/plugin.lpx) |
| 中国广电 | 生活社交 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-003-4/plugin.lpx) |
| 中国电信 | 生活社交 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-002-3/plugin.lpx) |
| 中国移动 | 生活社交 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-017/plugin.lpx) |
| 中国联通 | 生活社交 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-001/plugin.lpx) |
| 京东外卖去广告 | 生活社交 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-012-2/plugin.lpx) |
| 小黑盒去广告 | 生活社交 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-016/plugin.lpx) |
| 微信 | 生活社交 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-020/plugin.lpx) |
| 微信公众号去广告 | 生活社交 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-029/plugin.lpx) |
| 微信外部链接解锁 | 生活社交 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-005-8/plugin.lpx) |
| 微博 | 生活社交 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-003-3/plugin.lpx) |
| 微博去广告 | 生活社交 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-014-4/plugin.lpx) |
| 微博去广告&净化 | 生活社交 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-038/plugin.lpx) |
| 微博轻享版去广告 | 生活社交 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-013-2/plugin.lpx) |
| 瑞幸咖啡去广告 | 生活社交 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-018-2/plugin.lpx) |
| 百度贴吧 | 生活社交 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-015/plugin.lpx) |
| 百度贴吧去广告 | 生活社交 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-015-4/plugin.lpx) |
| 百度输入法去广告 | 生活社交 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-030/plugin.lpx) |
| 网易大神去广告 | 生活社交 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-020-4/plugin.lpx) |
| 网易邮箱大师去广告 | 生活社交 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-002-4/plugin.lpx) |
| 美团 | 生活社交 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-014-3/plugin.lpx) |
| 美团 & 美团外卖 | 生活社交 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-015-2/plugin.lpx) |
| 美图秀秀去广告 | 生活社交 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-008-2/plugin.lpx) |
| 美柚 | 生活社交 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-006/plugin.lpx) |
| 美柚去广告 | 生活社交 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-007/plugin.lpx) |
| 胖乖生活去广告 | 生活社交 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-020-3/plugin.lpx) |
| 菜鸟裹裹 | 生活社交 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-020-2/plugin.lpx) |
| 虎扑去广告 | 生活社交 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-003-5/plugin.lpx) |
| 酷安 | 生活社交 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-011/plugin.lpx) |
| 酷安LV20 | 生活社交 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/lv20/plugin.lpx) |
| 酷安去广告 | 生活社交 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-007-2/plugin.lpx) |
| 酷狗音乐去广告 | 生活社交 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-001-2/plugin.lpx) |
| 饿了么 | 生活社交 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-013/plugin.lpx) |
| 123云盘 | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/123/plugin.lpx) |
| 123云盘去广告 | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/123-2/plugin.lpx) |
| 1blocker | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/1blocker/plugin.lpx) |
| aiaiwang | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/aiaiwang/plugin.lpx) |
| App / 小程序广告净化 | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/app-ad/plugin.lpx) |
| App解锁合集 | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/app/plugin.lpx) |
| BoxJs | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/boxjs/plugin.lpx) |
| CMS Adblocker | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/cms-adblocker/plugin.lpx) |
| DNS防泄露 | 工具与其他 | [Prevent_DNS_Leaks.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/prevent-dns-leaks/Prevent_DNS_Leaks.lpx) |
| Fries: Block HTTPDNS | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/fries-block-httpdns/plugin.lpx) |
| GitHub | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/github/plugin.lpx) |
| Google搜索重定向 | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/google/plugin.lpx) |
| HTTPDNS拦截器 | 工具与其他 | [Block_HTTPDNS.plugin](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/block-httpdns/Block_HTTPDNS.plugin) |
| IPPure | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/ippure/plugin.lpx) |
| Loon Gallery | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/loon-gallery/plugin.lpx) |
| Loon 订阅解析器 | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/loon-parser/plugin.lpx) |
| Manager Tools | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/manager-tools/plugin.lpx) |
| MyBlockAds | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/myblockads/plugin.lpx) |
| NodeLinkCheck | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/nodelinkcheck/plugin.lpx) |
| One 解锁 | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/one/plugin.lpx) |
| peicaise | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/peicaise/plugin.lpx) |
| PushPlus微信推送广告 | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/pushplus/plugin.lpx) |
| Reheji | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/reheji/plugin.lpx) |
| Reven 解锁 | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/reven/plugin.lpx) |
| Script Hub: 重写与规则集转换 | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/script-hub/plugin.lpx) |
| Script-Hub | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/script-hub-2/plugin.lpx) |
| Skip Proxy and Real-IP Lists | 工具与其他 | [SkipProxy.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/skip-proxy/SkipProxy.lpx) |
| Sub-Store | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/sub-store/plugin.lpx) |
| WARP节点查询 | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/warp/plugin.lpx) |
| WebPage | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/webpage/plugin.lpx) |
| YDM系列通杀 | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/ydm-2/plugin.lpx) |
| 代理链路检测 | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-011-4/plugin.lpx) |
| 可莉广告过滤器 | 工具与其他 | [Remove_ads_by_keli.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/remove-ads-by-keli/Remove_ads_by_keli.lpx) |
| 哲也同学 | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-014/plugin.lpx) |
| 夸克去广告 | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-023/plugin.lpx) |
| 套路SM VIP解锁 | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/sm-vip/plugin.lpx) |
| 字母圈 | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-023-2/plugin.lpx) |
| 幻宇星球 VIP 解锁 | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/vip-2/plugin.lpx) |
| 广告平台拦截器 | 工具与其他 | [BlockAdvertisers.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/block-advertisers/BlockAdvertisers.lpx) |
| 广告必须死 | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-005-2/plugin.lpx) |
| 广告拦截合集 | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-011-2/plugin.lpx) |
| 广告联盟去广告 | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-016-3/plugin.lpx) |
| 微信 公众号文章广告净化 | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/55de85e516587f7cfd00ffd74df31c7b/plugin.lpx) |
| 微信小程序去广告 | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-026/plugin.lpx) |
| 快捷搜索 | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-034/plugin.lpx) |
| 拦截100 | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/100/plugin.lpx) |
| 插件仓库 | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-033/plugin.lpx) |
| 爱思助手 | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-005-7/plugin.lpx) |
| 百度系app广告屏蔽 | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/app-3/plugin.lpx) |
| 百度网页去广告 | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-010/plugin.lpx) |
| 网易云音乐 | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-005-4/plugin.lpx) |
| 网络信息 𝕏 | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-004-3/plugin.lpx) |
| 网络信息（离歌自用） | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-009/plugin.lpx) |
| 腾讯广告 | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-004-5/plugin.lpx) |
| 腾讯系 | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-005-6/plugin.lpx) |
| 节点 IP 质量检测 | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/ip/plugin.lpx) |
| 节点 IP 质量检测 · 混合模式 | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/ipquality-web-test/plugin.lpx) |
| 节点TCPing连通性测试 | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/node-tcping/plugin.lpx) |
| 节点检测工具 | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-005/plugin.lpx) |
| 节点检测工具 𝕂 | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-003-2/plugin.lpx) |
| 节点脚本工具合集 | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-018/plugin.lpx) |
| 节点质量查询 | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/node-quality-query/plugin.lpx) |
| 菜鸟 | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-002/plugin.lpx) |
| 菜鸟去广告 | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-032/plugin.lpx) |
| 蛋蛋不语VIP解锁 | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/vip/plugin.lpx) |
| 酷安全面净化 | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-019/plugin.lpx) |
| 预览qx一键导入资源 | 工具与其他 | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/qx/plugin.lpx) |
<!-- PLUGINS_TABLE_END -->

## 脚本

<!-- SCRIPTS_TABLE_START -->
| 名称 | 分类 | 链接 |
| --- | --- | --- |
| 91TS 签到 | checkin | [script.js](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/scripts/checkin/01-91ts/script.js) |
| BiliBili 每日任务 | checkin | [script.js](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/scripts/checkin/09-bilibilidailybonus/script.js) |
| Loon 每日任务 | checkin | [script.js](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/scripts/checkin/11-loon-daily-bonus/script.js) |
| MDSP 签到 | checkin | [script.js](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/scripts/checkin/04-mdsp/script.js) |
| PingMe 签到 | checkin | [script.js](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/scripts/checkin/19-pingmesignin/script.js) |
| WPS 签到 | checkin | [script.js](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/scripts/checkin/17-wps/script.js) |
| YDM 签到 | checkin | [script.js](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/scripts/checkin/10-ydm/script.js) |
| 喜马拉雅签到 | checkin | [script.js](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/scripts/checkin/12-ximalaya/script.js) |
| 大蓝书签到 | checkin | [script.js](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/scripts/checkin/15-dalanshu-checkin/script.js) |
| 微信读书签到 | checkin | [script.js](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/scripts/checkin/07-wxread/script.js) |
| 海角社区签到 | checkin | [script.js](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/scripts/checkin/08-haijiaoshequ/script.js) |
| 海角签到 | checkin | [script.js](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/scripts/checkin/13-haijiao/script.js) |
| 起点读书签到 | checkin | [script.js](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/scripts/checkin/05-qdreader-loon/script.js) |
| 露萍签到 | checkin | [script.js](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/scripts/checkin/03-luping/script.js) |
| Cookie 获取工具 | tools | [script.js](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/scripts/tools/14-get-cookie/script.js) |
| Script Hub 转换器 | tools | [script.js](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/scripts/tools/02-script-hub-loon/script.js) |
| WeTalk Loon 工具 | tools | [script.js](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/scripts/tools/wetalk-loon-js/script.js) |
| WeTalk Token 获取 | tools | [script.js](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/scripts/tools/wetalk-token-js/script.js) |
| WeTalk 工具 | tools | [script.js](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/scripts/tools/18-wetalk/script.js) |
| WeTalk 工具 | tools | [script.js](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/scripts/tools/we-talk-js/script.js) |
| WPS Cookie 获取 | tools | [script.js](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/scripts/tools/16-wps-cookie/script.js) |
| Step 脚本 | 工具与其他 | [script.js](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/scripts/misc/step-js/script.js) |
| YucheniOS 工具 | 工具与其他 | [script.js](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/scripts/misc/yuchenios-js/script.js) |
| 脚本示例 | 工具与其他 | [script.js](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/scripts/misc/script-example-js/script.js) |
<!-- SCRIPTS_TABLE_END -->

## 使用

在 [links.md](links.md) 或上方表格中找到需要的插件，复制对应的 Raw 链接，在 Loon 中依次点击「配置 → 插件 → 右上角加号 → 粘贴链接 → 保存」即可。

插件引用的脚本链接已重写为本仓库地址，无需单独添加。独立脚本需在 Loon 的脚本功能或对应任务中单独引用，不通过插件订阅添加。

## 维护

### 新增条目

在 `catalog.yaml` 的 `plugins` 或 `scripts` 列表末尾追加一条，格式参考现有示例：

```yaml
- name: 插件中文名
  slug: english-slug
  category: reading
  author: 昵称
  enabled: true
  files:
    - name: xxx.plugin
      origin: https://...   # Raw 链接，非网页链接
      backup: []
```

分类允许值：

| 类型 | 允许值 |
| ---- | ---- |
| 插件 | reading、travel、video、shopping、lifestyle、misc |
| 脚本 | checkin、query、notify、tools、misc |

若插件引用了其他脚本，将该脚本作为 files 中的一条一并添加，引用路径会自动重写。

### 说明

部分内容参考社区公开规则，在此致谢。
