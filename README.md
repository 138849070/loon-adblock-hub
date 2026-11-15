<div align="center">

# 🧩 Loon 去广告合集

**把常用 Loon 插件、脚本与规则收在一处，干净、清楚、能长期维护。**

[![插件](https://img.shields.io/badge/插件-209-6C5CE7?style=for-the-badge)](CATALOG.md) [![脚本](https://img.shields.io/badge/脚本-24-00B894?style=for-the-badge)](CATALOG.md#脚本) [![启用](https://img.shields.io/badge/启用-184-FDCB6E?style=for-the-badge)](CATALOG.md) [![有上游](https://img.shields.io/badge/有上游-208-0984E3?style=for-the-badge)](#维护策略)

</div>

> **维护原则**：有上游源的条目跟随上游更新；没有上游的本地条目保持静态。
> 所有条目都保留仓库备份，源站异常时自动回退，不影响使用。

## ✨ 一眼看懂

| 项目 | 数量 | 说明 |
| --- | ---: | --- |
| 插件 | **209** | 覆盖视频、阅读、购物、出行、生活与工具 |
| 脚本 | **24** | 签到、查询、通知与实用工具 |
| 已启用 | **184** | 可直接导入使用 |
| 有上游 | **208** | 尽量跟随原始作者更新 |
| 本地条目 | **1** | 无公开上游，保留仓库版本 |

## 🚀 快速开始

1. **挑选**：打开 [CATALOG.md](CATALOG.md)，按分类找到需要的插件或脚本。
2. **导入**：点击条目右侧的 `Raw` 链接，在 Loon 中打开并导入。
3. **批量**：需要一次性复制多条订阅时，使用 [links.md](links.md)。

> 小提示：优先选择标有 `🟢 启用` 的条目；标有 `⚪ 停用` 的条目仅作备份保留。

## 🗂️ 分类导航

| 分类 | 插件 | 已启用 | 入口 | 说明 |
| --- | ---: | ---: | :---: | --- |
| 🎬 **影音娱乐** | 50 | 40 | [查看](CATALOG.md#video) | 视频、音乐、流媒体与 B 站 / YouTube 增强 |
| 📖 **阅读学习** | 15 | 14 | [查看](CATALOG.md#reading) | 小说、资讯、读书与学习类 |
| 🛒 **购物比价** | 12 | 12 | [查看](CATALOG.md#shopping) | 电商、比价与购物类 |
| 🧭 **出行地图** | 8 | 7 | [查看](CATALOG.md#travel) | 地图、天气与出行类 |
| 🌿 **生活社交** | 45 | 44 | [查看](CATALOG.md#lifestyle) | 社交、生活服务与常用 App |
| 🧰 **工具与其他** | 79 | 67 | [查看](CATALOG.md#misc) | 广告拦截、节点工具、系统工具与其他 |

## 🛠️ 维护策略

| 类型 | origin | backup | 行为 |
| --- | --- | --- | --- |
| 有上游 | 原始作者 / GitHub Raw | 本仓库 Raw | 自动跟随上游；源站异常时回退仓库备份 |
| 本地条目 | 本仓库 Raw | — | 无公开上游，保持静态 |

`tools/update.py` 会优先读取 `origin`；下载失败、返回 HTML 或非 200 时自动尝试 `backup`。

## 📦 目录结构

```text
plugins/
├── video/         影音娱乐
├── reading/       阅读学习
├── shopping/      购物比价
├── travel/        出行地图
├── lifestyle/     生活社交
└── misc/          工具与其他
scripts/
├── checkin/       签到任务
├── tools/         实用工具
└── misc/          其他脚本
catalog.yaml       条目清单
links.md           订阅链接清单
```

## 📚 完整目录

- [CATALOG.md](CATALOG.md) — 按分类浏览全部插件、脚本与 Raw 链接
- [links.md](links.md) — 纯订阅链接清单，方便批量复制
- [PROBLEM_AUDIT.md](PROBLEM_AUDIT.md) — 上游状态、失败项与遗留问题

<details>
<summary><b>📋 插件总表（209）</b></summary>

<!-- PLUGINS_TABLE_START -->
| 名称 | 分类 | 链接 |
| --- | --- | --- |
| 65看 | video | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/65/plugin.lpx) |
| 7semao | video | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/7semao/plugin.lpx) |
| 91Porn 短视频 | video | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/91porn/plugin.lpx) |
| Biliverse 增强模式 | video | [Biliverse.Enhanced.plugin](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/biliverse-enhanced/Biliverse.Enhanced.plugin) |
| byhz | video | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/byhz/plugin.lpx) |
| DualSubs: YouTube | video | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/dualsubs-youtube/plugin.lpx) |
| haijiao | video | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/haijiao/plugin.lpx) |
| hongxingshipin | video | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/hongxingshipin/plugin.lpx) |
| insav | video | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/insav-2/plugin.lpx) |
| insav 解锁 | video | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/insav/plugin.lpx) |
| jmshe | video | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/jmshe/plugin.lpx) |
| jtsp | video | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/jtsp/plugin.lpx) |
| luolidao | video | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/luolidao/plugin.lpx) |
| luping | video | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/luping/plugin.lpx) |
| MJGS | video | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/mjgs/plugin.lpx) |
| mmav | video | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/mmav/plugin.lpx) |
| Mr先生 + xvideos社区 + 泡芙短视频 + tiktok免费版 | video | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/mr-xvideos-tiktok/plugin.lpx) |
| mxshm | video | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/mxshm/plugin.lpx) |
| one2jj | video | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/one2jj/plugin.lpx) |
| porntube VIP 解锁 | video | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/porntube-vip/plugin.lpx) |
| txxxxx | video | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/txxxxx/plugin.lpx) |
| uua | video | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/uua/plugin.lpx) |
| xiaohuli | video | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/xiaohuli/plugin.lpx) |
| xv | video | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/xv/plugin.lpx) |
| yangtao | video | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/yangtao/plugin.lpx) |
| ydm | video | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/ydm/plugin.lpx) |
| ydm-淫荡猫 | video | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/ydm-3/plugin.lpx) |
| yeyan | video | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/yeyan/plugin.lpx) |
| YouTube (Music) | video | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/youtube-music/plugin.lpx) |
| YouTube 增强（gholts） | video | [youtube_gholts.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/youtube-gholts/youtube_gholts.lpx) |
| YouTube去广告隐藏Shorts版@Aioneas | video | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/youtube-shorts-aioneas/plugin.lpx) |
| zukong | video | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/zukong/plugin.lpx) |
| 妻友社区解锁 | video | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/2966f7d1df7f46705623bc12109f6c2f/plugin.lpx) |
| 妻社 VIP解锁 | video | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/vip-3/plugin.lpx) |
| 快手去广告 | video | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/plugin-006-2/plugin.lpx) |
| 比狸比狸过滤 | video | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/bilibili-cleaner/plugin.lpx) |
| 流媒体解锁测试 | video | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/plugin-002-2/plugin.lpx) |
| 瓜子影视净化 | video | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/tilingsales-ad-remove-lpx/plugin.lpx) |
| 虎牙直播 | video | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/plugin-004-6/plugin.lpx) |
| 麻豆视频 + 快手萝莉 | video | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/plugin-013-3/plugin.lpx) |
| 18kmanhua | reading | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/reading/18kmanhua/plugin.lpx) |
| 18pcs | reading | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/reading/18pcs/plugin.lpx) |
| WakeUp课程表去广告 | reading | [WakeupSchedule_remove_ads.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/reading/wakeup-schedule-remove-ads/WakeupSchedule_remove_ads.lpx) |
| 七猫小说 | reading | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/reading/plugin-010-2/plugin.lpx) |
| 七猫小说去广告 | reading | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/reading/plugin-017-2/plugin.lpx) |
| 医考帮去广告 | reading | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/reading/plugin-012/plugin.lpx) |
| 番茄小说 | reading | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/reading/plugin-014-2/plugin.lpx) |
| 番茄小说去广告 | reading | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/reading/plugin-009-2/plugin.lpx) |
| 番茄小说广告屏蔽 | reading | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/reading/plugin-012-4/plugin.lpx) |
| 知乎去广告 | reading | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/reading/plugin-004/plugin.lpx) |
| 腾讯新闻App去广告 | reading | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/reading/app-2/plugin.lpx) |
| 起点读书 | reading | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/reading/plugin-004-2/plugin.lpx) |
| 起点读书去广告 | reading | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/reading/plugin-015-3/plugin.lpx) |
| 起点读书签到 | reading | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/reading/plugin-005-3/plugin.lpx) |
| 京东去广告 | shopping | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/shopping/plugin-024/plugin.lpx) |
| 京东比价 | shopping | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/shopping/plugin-019-2/plugin.lpx) |
| 什么值得买去广告 | shopping | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/shopping/plugin-012-3/plugin.lpx) |
| 小红书 | shopping | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/shopping/plugin-005-5/plugin.lpx) |
| 小红书去广告 | shopping | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/shopping/plugin-016-4/plugin.lpx) |
| 得物 | shopping | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/shopping/plugin-016-2/plugin.lpx) |
| 得物去广告 | shopping | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/shopping/plugin-011-3/plugin.lpx) |
| 拼多多去广告 | shopping | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/shopping/plugin-019-3/plugin.lpx) |
| 淘宝 | shopping | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/shopping/plugin-003/plugin.lpx) |
| 淘宝去广告 | shopping | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/shopping/plugin-025/plugin.lpx) |
| 闲鱼 | shopping | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/shopping/plugin-008/plugin.lpx) |
| 闲鱼去广告 | shopping | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/shopping/plugin-022/plugin.lpx) |
| Apple天气增强 | travel | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/travel/apple/plugin.lpx) |
| iRingo: LocationService | travel | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/travel/iringo-locationservice/plugin.lpx) |
| iRingo: Maps | travel | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/travel/iringo-maps/plugin.lpx) |
| iRingo: WeatherKit (Rewrite) | travel | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/travel/iringo-weatherkit-rewrite/plugin.lpx) |
| 墨迹天气去广告 | travel | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/travel/plugin-004-7/plugin.lpx) |
| 高德地图 | travel | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/travel/plugin-004-4/plugin.lpx) |
| 高德地图去广告 | travel | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/travel/plugin-027/plugin.lpx) |
| iTunes系列解锁 | lifestyle | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/itunes/plugin.lpx) |
| LINE 去广告 | lifestyle | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/line/plugin.lpx) |
| Outlook 去广告 | lifestyle | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/outlook/plugin.lpx) |
| QQ 空间广告净化 | lifestyle | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/qq/plugin.lpx) |
| QQ 链接解锁 | lifestyle | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/qq-2/plugin.lpx) |
| QQ 音乐去广告 | lifestyle | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/qq-3/plugin.lpx) |
| Reddit 自动翻译 | lifestyle | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/reddit/plugin.lpx) |
| Soul去广告 | lifestyle | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/soul/plugin.lpx) |
| Telegram 去广告 | lifestyle | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/telegram/plugin.lpx) |
| WPS 去广告 | lifestyle | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/wps/plugin.lpx) |
| X (Twitter) | lifestyle | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/x-twitter/plugin.lpx) |
| X (Twitter) 网页版去广告 | lifestyle | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/x-twitter-2/plugin.lpx) |
| 中国广电 | lifestyle | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-003-4/plugin.lpx) |
| 中国电信 | lifestyle | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-002-3/plugin.lpx) |
| 中国移动 | lifestyle | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-017/plugin.lpx) |
| 中国联通 | lifestyle | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-001/plugin.lpx) |
| 京东外卖去广告 | lifestyle | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-012-2/plugin.lpx) |
| 小黑盒去广告 | lifestyle | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-016/plugin.lpx) |
| 微信 | lifestyle | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-020/plugin.lpx) |
| 微信公众号去广告 | lifestyle | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-029/plugin.lpx) |
| 微信外部链接解锁 | lifestyle | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-005-8/plugin.lpx) |
| 微博 | lifestyle | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-003-3/plugin.lpx) |
| 微博去广告 | lifestyle | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-014-4/plugin.lpx) |
| 微博去广告&净化 | lifestyle | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-038/plugin.lpx) |
| 微博轻享版去广告 | lifestyle | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-013-2/plugin.lpx) |
| 瑞幸咖啡去广告 | lifestyle | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-018-2/plugin.lpx) |
| 百度贴吧 | lifestyle | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-015/plugin.lpx) |
| 百度贴吧去广告 | lifestyle | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-015-4/plugin.lpx) |
| 百度输入法去广告 | lifestyle | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-030/plugin.lpx) |
| 网易大神去广告 | lifestyle | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-020-4/plugin.lpx) |
| 网易邮箱大师去广告 | lifestyle | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-002-4/plugin.lpx) |
| 美团 | lifestyle | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-014-3/plugin.lpx) |
| 美团 & 美团外卖 | lifestyle | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-015-2/plugin.lpx) |
| 美图秀秀去广告 | lifestyle | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-008-2/plugin.lpx) |
| 美柚 | lifestyle | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-006/plugin.lpx) |
| 美柚去广告 | lifestyle | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-007/plugin.lpx) |
| 胖乖生活去广告 | lifestyle | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-020-3/plugin.lpx) |
| 菜鸟裹裹 | lifestyle | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-020-2/plugin.lpx) |
| 虎扑去广告 | lifestyle | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-003-5/plugin.lpx) |
| 酷安 | lifestyle | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-011/plugin.lpx) |
| 酷安LV20 | lifestyle | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/lv20/plugin.lpx) |
| 酷安去广告 | lifestyle | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-007-2/plugin.lpx) |
| 酷狗音乐去广告 | lifestyle | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-001-2/plugin.lpx) |
| 饿了么 | lifestyle | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/lifestyle/plugin-013/plugin.lpx) |
| 123云盘 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/123/plugin.lpx) |
| 123云盘去广告 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/123-2/plugin.lpx) |
| 1blocker | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/1blocker/plugin.lpx) |
| aiaiwang | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/aiaiwang/plugin.lpx) |
| App / 小程序广告净化 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/app-ad/plugin.lpx) |
| App解锁合集 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/app/plugin.lpx) |
| BoxJs | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/boxjs/plugin.lpx) |
| CMS Adblocker | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/cms-adblocker/plugin.lpx) |
| DNS防泄露 | misc | [Prevent_DNS_Leaks.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/prevent-dns-leaks/Prevent_DNS_Leaks.lpx) |
| Fries: Block HTTPDNS | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/fries-block-httpdns/plugin.lpx) |
| GitHub | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/github/plugin.lpx) |
| Google搜索重定向 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/google/plugin.lpx) |
| HTTPDNS拦截器 | misc | [Block_HTTPDNS.plugin](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/block-httpdns/Block_HTTPDNS.plugin) |
| IPPure | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/ippure/plugin.lpx) |
| Loon Gallery | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/loon-gallery/plugin.lpx) |
| Loon 订阅解析器 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/loon-parser/plugin.lpx) |
| Manager Tools | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/manager-tools/plugin.lpx) |
| MyBlockAds | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/myblockads/plugin.lpx) |
| NodeLinkCheck | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/nodelinkcheck/plugin.lpx) |
| One 解锁 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/one/plugin.lpx) |
| peicaise | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/peicaise/plugin.lpx) |
| PushPlus微信推送广告 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/pushplus/plugin.lpx) |
| Reheji | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/reheji/plugin.lpx) |
| Reven 解锁 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/reven/plugin.lpx) |
| Script Hub: 重写与规则集转换 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/script-hub/plugin.lpx) |
| Script-Hub | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/script-hub-2/plugin.lpx) |
| Skip Proxy and Real-IP Lists | misc | [SkipProxy.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/skip-proxy/SkipProxy.lpx) |
| Sub-Store | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/sub-store/plugin.lpx) |
| WARP节点查询 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/warp/plugin.lpx) |
| WebPage | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/webpage/plugin.lpx) |
| YDM系列通杀 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/ydm-2/plugin.lpx) |
| 代理链路检测 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-011-4/plugin.lpx) |
| 可莉广告过滤器 | misc | [Remove_ads_by_keli.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/remove-ads-by-keli/Remove_ads_by_keli.lpx) |
| 哲也同学 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-014/plugin.lpx) |
| 夸克去广告 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-023/plugin.lpx) |
| 套路SM VIP解锁 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/sm-vip/plugin.lpx) |
| 字母圈 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-023-2/plugin.lpx) |
| 幻宇星球 VIP 解锁 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/vip-2/plugin.lpx) |
| 广告平台拦截器 | misc | [BlockAdvertisers.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/block-advertisers/BlockAdvertisers.lpx) |
| 广告必须死 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-005-2/plugin.lpx) |
| 广告拦截合集 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-011-2/plugin.lpx) |
| 广告联盟去广告 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-016-3/plugin.lpx) |
| 微信 公众号文章广告净化 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/55de85e516587f7cfd00ffd74df31c7b/plugin.lpx) |
| 微信小程序去广告 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-026/plugin.lpx) |
| 快捷搜索 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-034/plugin.lpx) |
| 拦截100 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/100/plugin.lpx) |
| 插件仓库 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-033/plugin.lpx) |
| 爱思助手 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-005-7/plugin.lpx) |
| 百度系app广告屏蔽 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/app-3/plugin.lpx) |
| 百度网页去广告 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-010/plugin.lpx) |
| 网易云音乐 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-005-4/plugin.lpx) |
| 网络信息 𝕏 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-004-3/plugin.lpx) |
| 网络信息（离歌自用） | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-009/plugin.lpx) |
| 腾讯广告 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-004-5/plugin.lpx) |
| 腾讯系 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-005-6/plugin.lpx) |
| 节点 IP 质量检测 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/ip/plugin.lpx) |
| 节点 IP 质量检测 · 混合模式 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/ipquality-web-test/plugin.lpx) |
| 节点TCPing连通性测试 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/node-tcping/plugin.lpx) |
| 节点检测工具 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-005/plugin.lpx) |
| 节点检测工具 𝕂 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-003-2/plugin.lpx) |
| 节点脚本工具合集 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-018/plugin.lpx) |
| 节点质量查询 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/node-quality-query/plugin.lpx) |
| 菜鸟 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-002/plugin.lpx) |
| 菜鸟去广告 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-032/plugin.lpx) |
| 蛋蛋不语VIP解锁 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/vip/plugin.lpx) |
| 酷安全面净化 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-019/plugin.lpx) |
| 预览qx一键导入资源 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/qx/plugin.lpx) |
<!-- PLUGINS_TABLE_END -->

</details>

<details>
<summary><b>🧩 脚本总表（24）</b></summary>

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
| Step 脚本 | misc | [script.js](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/scripts/misc/step-js/script.js) |
| YucheniOS 工具 | misc | [script.js](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/scripts/misc/yuchenios-js/script.js) |
| 脚本示例 | misc | [script.js](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/scripts/misc/script-example-js/script.js) |
<!-- SCRIPTS_TABLE_END -->

</details>

## 🙏 说明

本仓库仅做个人配置备份与整理，插件与脚本版权归原作者所有。
如果某个上游项目持续更新，请优先支持原作者；本仓库的 Raw 链接仅用于备份与回退。

<div align="center"><sub>Made for Loon · 持续整理中</sub></div>
