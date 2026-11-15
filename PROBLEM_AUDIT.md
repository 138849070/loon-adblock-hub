<div align="center">

# 🩺 Loon 备份仓库 · 问题审计

**链接可用，不等于上游可用；能导入，也不等于能永远跟随。**

![插件](https://img.shields.io/badge/插件-209-6C5CE7?style=flat-square) ![上游异常或待确认](https://img.shields.io/badge/上游异常或待确认-134-E17055?style=flat-square) ![脚本失败](https://img.shields.io/badge/脚本失败-3-D63031?style=flat-square) ![规则失败](https://img.shields.io/badge/规则失败-12-D63031?style=flat-square)

</div>

## 🎯 结论先说

| 维度 | 结果 | 状态 |
| --- | --- | :---: |
| 插件总数 | 209（启用 184 / 未启用 25） | ✅ |
| 有上游 origin | 208 | ✅ 已配置 |
| 本地无上游 | 1 | ⚪ 静态 |
| 上游当前正常 | 74 | ✅ |
| 上游异常或待确认（均有仓库备份） | 134 | ⚠️ |
| 脚本 | 24 个已收录，另有 3 个未成功 | ⚠️ |
| 规则 | 36 个静态成功，12 个失败 | ⚠️ |

## ✅ 已解决

- 分类已从 `misc` 单一分类整理为 6 个中文分类；脚本整理为签到 / 工具 / 其他。
- 清除了 4 个含不可见 Unicode 私用区字符的名称。
- 2 个 hash 名称与 1 个带 `.lpx` 后缀的名称已改为可读名称。
- 208 个插件已配置上游 `origin`；本仓库 Raw 放入 `backup`，源站异常时自动回退。
- 18 个远程脚本已配置原始上游；6 个本地脚本保持仓库自身。
- 209 个插件文件与 24 个脚本文件均存在，0 缺失、0 零字节；208 条启用链接 0 broken。

## ⚠️ 仍需注意

### 1. 上游源异常或待确认（134 个）

其中 **95 个已确认异常**（403 / HTML 假页面 / SSL / 404），**39 个备用源尚未检测**。
这些条目 **已经能用**（仓库备份可用）；`update.py` 会优先尝试上游，失败时自动回退到仓库备份，不会影响 Loon 导入。

| 上游状态 | 数量 | 含义 |
| --- | ---: | --- |
| 403 / Cloudflare / 防盗链 | 60 | 已回退仓库备份 |
| 200 但返回 HTML 假页面 | 23 | 已回退仓库备份 |
| SSL / 网络错误 | 9 | 已回退仓库备份 |
| 404 | 3 | 已回退仓库备份 |
| 备用源未检测 | 39 | 已回退仓库备份 |

<details>
<summary><b>展开 134 个上游异常条目</b></summary>

#### 403 / Cloudflare / 防盗链（60）

| 名称 | 分类 | slug |
| --- | --- | --- |
| 知乎去广告 | reading | `plugin-004` |
| 广告必须死 | misc | `plugin-005-2` |
| iRingo: Maps | travel | `iringo-maps` |
| Manager Tools | misc | `manager-tools` |
| 小黑盒去广告 | lifestyle | `plugin-016` |
| 医考帮去广告 | reading | `plugin-012` |
| 美柚去广告 | lifestyle | `plugin-007` |
| 美图秀秀去广告 | lifestyle | `plugin-008-2` |
| 百度网页去广告 | misc | `plugin-010` |
| 得物去广告 | shopping | `plugin-011-3` |
| 京东外卖去广告 | lifestyle | `plugin-012-2` |
| Soul去广告 | lifestyle | `soul` |
| 胖乖生活去广告 | lifestyle | `plugin-020-3` |
| Apple天气增强 | travel | `apple` |
| LINE 去广告 | lifestyle | `line` |
| WARP节点查询 | misc | `warp` |
| 代理链路检测 | misc | `plugin-011-4` |
| 什么值得买去广告 | shopping | `plugin-012-3` |
| Google搜索重定向 | misc | `google` |
| 起点读书去广告 | reading | `plugin-015-3` |
| 京东比价 | shopping | `plugin-019-2` |
| 网易大神去广告 | lifestyle | `plugin-020-4` |
| 酷狗音乐去广告 | lifestyle | `plugin-001-2` |
| 网易邮箱大师去广告 | lifestyle | `plugin-002-4` |
| 虎扑去广告 | lifestyle | `plugin-003-5` |
| 墨迹天气去广告 | travel | `plugin-004-7` |
| 微信外部链接解锁 | lifestyle | `plugin-005-8` |
| 快手去广告 | video | `plugin-006-2` |
| 酷安去广告 | lifestyle | `plugin-007-2` |
| 微博轻享版去广告 | lifestyle | `plugin-013-2` |
| 微博去广告 | lifestyle | `plugin-014-4` |
| 百度贴吧去广告 | lifestyle | `plugin-015-4` |
| 小红书去广告 | shopping | `plugin-016-4` |
| 七猫小说去广告 | reading | `plugin-017-2` |
| 瑞幸咖啡去广告 | lifestyle | `plugin-018-2` |
| 拼多多去广告 | shopping | `plugin-019-3` |
| QQ 链接解锁 | lifestyle | `qq-2` |
| 123云盘去广告 | misc | `123-2` |
| 闲鱼去广告 | shopping | `plugin-022` |
| 夸克去广告 | misc | `plugin-023` |
| 京东去广告 | shopping | `plugin-024` |
| 淘宝去广告 | shopping | `plugin-025` |
| 微信小程序去广告 | misc | `plugin-026` |
| 高德地图去广告 | travel | `plugin-027` |
| QQ 音乐去广告 | lifestyle | `qq-3` |
| 微信公众号去广告 | lifestyle | `plugin-029` |
| 百度输入法去广告 | lifestyle | `plugin-030` |
| 菜鸟去广告 | misc | `plugin-032` |
| 插件仓库 | misc | `plugin-033` |
| 快捷搜索 | misc | `plugin-034` |
| BoxJs | misc | `boxjs` |
| Sub-Store | misc | `sub-store` |
| Script-Hub | misc | `script-hub-2` |
| 定时任务合集 | misc | `plugin-043` |
| iRingo: Location | travel | `iringo-location` |
| 自动加入TestFlight | misc | `testflight` |
| GitHub加速 | misc | `github-2` |
| YouTube双语翻译 | video | `youtube-2` |
| 哔哩哔哩去广告 | video | `plugin-059` |
| YouTube去广告 | video | `youtube-3` |

#### 200 但返回 HTML 假页面（23）

| 名称 | 分类 | slug |
| --- | --- | --- |
| 菜鸟 | misc | `plugin-002` |
| 淘宝 | shopping | `plugin-003` |
| X (Twitter) | lifestyle | `x-twitter` |
| 中国移动 | lifestyle | `plugin-017` |
| 123云盘 | misc | `123` |
| YouTube (Music) | video | `youtube-music` |
| 微信 | lifestyle | `plugin-020` |
| Telegram 去广告 | lifestyle | `telegram` |
| 流媒体解锁测试 | video | `plugin-002-2` |
| 节点检测工具 𝕂 | misc | `plugin-003-2` |
| 网络信息 𝕏 | misc | `plugin-004-3` |
| 网易云音乐 | misc | `plugin-005-4` |
| Loon Gallery | misc | `loon-gallery` |
| IPPure | misc | `ippure` |
| 闲鱼 | shopping | `plugin-008` |
| GitHub | misc | `github` |
| CMS Adblocker | misc | `cms-adblocker` |
| 广告拦截合集 | misc | `plugin-011-2` |
| Redirect | misc | `redirect` |
| AppStore Monitor | misc | `appstore-monitor` |
| TestFlight Monitor | misc | `testflight-monitor` |
| Swiftgram | lifestyle | `swiftgram` |
| AppleOS Monitor | misc | `appleos-monitor` |

#### SSL / 网络错误（9）

| 名称 | 分类 | slug |
| --- | --- | --- |
| 节点检测工具 | misc | `plugin-005` |
| MyBlockAds | misc | `myblockads` |
| WebPage | misc | `webpage` |
| 微博 | lifestyle | `plugin-003-3` |
| 高德地图 | travel | `plugin-004-4` |
| 小红书 | shopping | `plugin-005-5` |
| PingMe&WeTalk | misc | `pingme-wetalk` |
| 知乎 | reading | `plugin-053` |
| 哔哩哔哩 | video | `plugin-054` |

#### 404（3）

| 名称 | 分类 | slug |
| --- | --- | --- |
| iRingo: LocationService | travel | `iringo-locationservice` |
| 1blocker | misc | `1blocker` |
| 七猫小说 | reading | `plugin-010-2` |

#### 备用源未检测（39）

| 名称 | 分类 | slug |
| --- | --- | --- |
| YouTube 增强 v2 | video | `youtube-enhanced-2` |
| One 解锁 | misc | `one` |
| YouTube去广告隐藏Shorts版@Aioneas | video | `youtube-shorts-aioneas` |
| 酷安LV20 | lifestyle | `lv20` |
| Reheji | misc | `reheji` |
| 酷安全面净化 | misc | `plugin-019` |
| 预览qx一键导入资源 | misc | `qx` |
| 番茄小说去广告 | reading | `plugin-009-2` |
| luolidao | video | `luolidao` |
| yeyan | video | `yeyan` |
| 7semao | video | `7semao` |
| xv | video | `xv` |
| haijiao | video | `haijiao` |
| MJGS | video | `mjgs` |
| ydm | video | `ydm` |
| jtsp | video | `jtsp` |
| Mr先生 + xvideos社区 + 泡芙短视频 + tiktok免费版 | video | `mr-xvideos-tiktok` |
| byhz | video | `byhz` |
| 65看 | video | `65` |
| one2jj | video | `one2jj` |
| luping | video | `luping` |
| 麻豆视频 + 快手萝莉 | video | `plugin-013-3` |
| yangtao | video | `yangtao` |
| mxshm | video | `mxshm` |
| uua | video | `uua` |
| jmshe | video | `jmshe` |
| 18pcs | reading | `18pcs` |
| zukong | video | `zukong` |
| xiaohuli | video | `xiaohuli` |
| hongxingshipin | video | `hongxingshipin` |
| 字母圈 | misc | `plugin-023-2` |
| mmav | video | `mmav` |
| YDM系列通杀 | misc | `ydm-2` |
| 18kmanhua | reading | `18kmanhua` |
| peicaise | misc | `peicaise` |
| 91Porn 短视频 | video | `91porn` |
| aiaiwang | misc | `aiaiwang` |
| 网易云音乐去广告 | misc | `plugin-040` |
| 通杀 | misc | `plugin-061` |

</details>

### 2. 本地插件（1 个）

| 名称 | 分类 | slug | 说明 |
| --- | --- | --- | --- |
| **瓜子影视净化** | video | `tilingsales-ad-remove-lpx` | 无公开上游，保持静态 |

### 3. 未启用条目（25 个）

以下条目保留在仓库中，但默认不启用；需要时可在 `catalog.yaml` 将 `enabled` 改为 `true`。

| 名称 | 分类 | slug |
| --- | --- | --- |
| BiliBili: ADBlock | 影音娱乐 | `bilibili-adblock` |
| BiliBili: Global | 影音娱乐 | `bilibili-global` |
| BiliBili: Redirect | 影音娱乐 | `bilibili-redirect` |
| BiliBili每日等级任务 | 影音娱乐 | `bilibili` |
| YouTube 增强 v2 | 影音娱乐 | `youtube-enhanced-2` |
| YouTube去广告 | 影音娱乐 | `youtube-3` |
| YouTube双语翻译 | 影音娱乐 | `youtube-2` |
| 哔哩哔哩 | 影音娱乐 | `plugin-054` |
| 哔哩哔哩去广告 | 影音娱乐 | `plugin-059` |
| 哔哩哔哩增强 | 影音娱乐 | `plugin-055` |
| 知乎 | 阅读学习 | `plugin-053` |
| iRingo: Location | 出行地图 | `iringo-location` |
| Swiftgram | 生活社交 | `swiftgram` |
| AppleOS Monitor | 工具与其他 | `appleos-monitor` |
| AppStore Monitor | 工具与其他 | `appstore-monitor` |
| GitHub加速 | 工具与其他 | `github-2` |
| GLaDOS 自动签到 | 工具与其他 | `glados` |
| PingMe&WeTalk | 工具与其他 | `pingme-wetalk` |
| Redirect | 工具与其他 | `redirect` |
| TestFlight Monitor | 工具与其他 | `testflight-monitor` |
| 定时任务合集 | 工具与其他 | `plugin-043` |
| 广告拦截&净化合集(Rewrite V2) | 工具与其他 | `rewrite-v2` |
| 网易云音乐去广告 | 工具与其他 | `plugin-040` |
| 自动加入TestFlight | 工具与其他 | `testflight` |
| 通杀 | 工具与其他 | `plugin-061` |

### 4. 脚本未成功（3 个）

| 脚本 | 类型 | 失败原因 |
| --- | --- | --- |
| `天气.js` | 本地脚本 | 成功 |
| `06_PingMe` | 远程脚本 | SSLError(MaxRetryError("HTTPSConnectionPool(host='axhani.pag |
| `20_iios_checkin` | 远程脚本 | 404 |

已收录脚本 24 个：18 个远程上游、6 个本地。

### 5. 规则失败（12 个）

| 规则 | 状态 | 来源 |
| --- | --- | --- |
| `02_Maps` | 失败 HTTP 403 | [https://loonhub.wuyra.com/Lpx/Maps.lpx](https://loonhub.wuyra.com/Lpx/Maps.lpx) |
| `11_Apple-US` | 失败 HTTP 404 | [https://raw.githubusercontent.com/xpdigital/Apple-Rule/refs/heads/main/Apple-US.list](https://raw.githubusercontent.com/xpdigital/Apple-Rule/refs/heads/main/Apple-US.list) |
| `17_Apple_Global` | 失败 HTTP 403 | [https://loonhub.wuyra.com/Lsr/Apple_Global.lsr](https://loonhub.wuyra.com/Lsr/Apple_Global.lsr) |
| `19_1PasswordUS` | 失败 HTTP 403 | [https://loonhub.wuyra.com/Lsr/1PasswordUS.lsr](https://loonhub.wuyra.com/Lsr/1PasswordUS.lsr) |
| `20_HongKong` | 失败 HTTP 403 | [https://loonhub.wuyra.com/Lsr/HongKong.lsr](https://loonhub.wuyra.com/Lsr/HongKong.lsr) |
| `23_LAN_SPLITTER` | 失败 HTTP 403 | [https://kelee.one/Tool/Loon/Lsr/LAN_SPLITTER.lsr](https://kelee.one/Tool/Loon/Lsr/LAN_SPLITTER.lsr) |
| `24_SpeedtestChina` | 失败 HTTP 403 | [https://kelee.one/Tool/Loon/Lsr/SpeedtestChina.lsr](https://kelee.one/Tool/Loon/Lsr/SpeedtestChina.lsr) |
| `39_AI` | 失败 HTTP 403 | [https://kelee.one/Tool/Loon/Lsr/AI.lsr](https://kelee.one/Tool/Loon/Lsr/AI.lsr) |
| `40_SpeedtestInternational` | 失败 HTTP 403 | [https://kelee.one/Tool/Loon/Lsr/SpeedtestInternational.lsr](https://kelee.one/Tool/Loon/Lsr/SpeedtestInternational.lsr) |
| `46_LAN_SPLITTER` | 失败 HTTP 403 | [https://loonhub.wuyra.com/Lsr/LAN_SPLITTER](https://loonhub.wuyra.com/Lsr/LAN_SPLITTER) |
| `47_REGION_SPLITTER` | 失败 HTTP 403 | [https://kelee.one/Tool/Loon/Lsr/REGION_SPLITTER.lsr](https://kelee.one/Tool/Loon/Lsr/REGION_SPLITTER.lsr) |
| `48_Mainland` | 失败 HTTP 403 | [https://loonhub.wuyra.com/Lsr/Mainland.lsr](https://loonhub.wuyra.com/Lsr/Mainland.lsr) |

另有 36 个规则为静态备份，没有自动上游更新。

### 6. 同名重复（15 组）

同名插件来自不同 URL 的共有 15 组；为避免名称冲突，目录中仅保留一个主条目，其余 URL 见 [DUPLICATE_SOURCES.md](DUPLICATE_SOURCES.md)。

## 📎 附件

- [CATALOG.md](CATALOG.md) — 完整分类目录
- [DUPLICATE_SOURCES.md](DUPLICATE_SOURCES.md) — 同名重复 URL 对照
- [problem_plugins.csv](problem_plugins.csv) — 插件逐条审计
- [problem_scripts.csv](problem_scripts.csv) — 脚本逐条审计
- [problem_rules.csv](problem_rules.csv) — 规则逐条审计

---

<div align="center"><sub>审计口径：catalog.yaml + 备份文件 + 上游 URL 状态 · 2026-11-15</sub></div>
