# Loon 备份仓库 · 问题审计与修复报告

> 生成时间：2026-11-14 15:55（Asia/Shanghai）  
> 仓库：https://github.com/138849070/loon-adblock-hub（main）  
> 范围：209 个插件、24 个脚本、48 条规则；数据来自本机完整备份与远程仓库树。

## 结论先行

仓库文件本身完整，**所有 209 个插件文件与 24 个脚本都存在**，启用的 Raw 链接 **0 条失效**。
真正的问题集中在“能否跟随上游更新”和少数源站不可用：**135 个插件目前只能使用本仓库备份**，不能自动跟随上游；脚本 3 个未成功；规则 12 条失败。

## 一、本次已经整理好的

| 项目 | 处理结果 |
| --- | --- |
| 分类 | 原来 misc 205、video 3、reading 1；现按用途分为 6 类：影音娱乐 50、阅读学习 15、购物比价 12、出行地图 8、生活社交 45、工具与其他 79 |
| 脚本分类 | 24 个脚本按用途分为 签到 14、工具 7、其他 3 |
| 名称乱码 | 清除 4 个 Unicode 私用区字符 `\uf8ff`；修复 2 个 hash 名称、1 个 `.lpx` 后缀名称 |
| 同名重复 | 当前 209 个插件名称全部唯一；历史 15 组同名重复的备用 URL 见 `DUPLICATE_SOURCES.md` |
| 目录结构 | 文件按 `plugins/<分类>/<slug>/`、`scripts/<分类>/<slug>/` 重新归档；旧 `misc` 目录中的依赖文件已一并迁移 |
| 文档 | 新增 `CATALOG.md`（按分类的精美目录）；`README.md`、`links.md` 已同步新路径 |

## 二、总览

| 指标 | 结果 | 说明 |
| --- | ---: | --- |
| 插件条目 | 209 | 启用 184，未启用 25 |
| 插件文件存在性 | 209 / 209 | 远程树核对，0 缺失、0 字节文件 |
| 启用插件 Raw 链接 | 208 / 208 | 全部存在；另有 1 个未启用条目不生成链接 |
| 可跟随上游的插件 | 74 | origin 指向原始上游，且已验证文件存在 |
| 不能跟随上游的插件 | 135 | origin 指向本仓库 Raw；见第二节 |
| 脚本 | 24 | 远程 18、本地 6；3 个未成功 |
| 规则 | 48 | 36 条静态备份可用、12 条失败 |

> 说明：`origin` 决定 `update.py` 从何处取新版本。自动导入时为保住文件可下载，135 个插件的 `origin` 被写成本仓库 Raw；它们仍然能正常订阅，但**不会随上游更新**。

## 三、不能跟随上游的插件（135 个）

按原始/备用源状态分组。完整机器可读清单见 `problem_plugins.csv`。

### 上游 403 / Cloudflare（60 个）

| 插件名 | slug | 分类 | 启用 |
| --- | --- | --- | :---: |
| YouTube去广告 | `youtube-3` | 影音娱乐 | 否 |
| YouTube双语翻译 | `youtube-2` | 影音娱乐 | 否 |
| 哔哩哔哩去广告 | `plugin-059` | 影音娱乐 | 否 |
| 快手去广告 | `plugin-006-2` | 影音娱乐 | 是 |
| 七猫小说去广告 | `plugin-017-2` | 阅读学习 | 是 |
| 医考帮去广告 | `plugin-012` | 阅读学习 | 是 |
| 知乎去广告 | `plugin-004` | 阅读学习 | 是 |
| 起点读书去广告 | `plugin-015-3` | 阅读学习 | 是 |
| 京东去广告 | `plugin-024` | 购物比价 | 是 |
| 京东比价 | `plugin-019-2` | 购物比价 | 是 |
| 什么值得买去广告 | `plugin-012-3` | 购物比价 | 是 |
| 小红书去广告 | `plugin-016-4` | 购物比价 | 是 |
| 得物去广告 | `plugin-011-3` | 购物比价 | 是 |
| 拼多多去广告 | `plugin-019-3` | 购物比价 | 是 |
| 淘宝去广告 | `plugin-025` | 购物比价 | 是 |
| 闲鱼去广告 | `plugin-022` | 购物比价 | 是 |
| Apple天气增强 | `apple` | 出行地图 | 是 |
| iRingo: Location | `iringo-location` | 出行地图 | 否 |
| iRingo: Maps | `iringo-maps` | 出行地图 | 是 |
| 墨迹天气去广告 | `plugin-004-7` | 出行地图 | 是 |
| 高德地图去广告 | `plugin-027` | 出行地图 | 是 |
| LINE 去广告 | `line` | 生活社交 | 是 |
| QQ 链接解锁 | `qq-2` | 生活社交 | 是 |
| QQ 音乐去广告 | `qq-3` | 生活社交 | 是 |
| Soul去广告 | `soul` | 生活社交 | 是 |
| 京东外卖去广告 | `plugin-012-2` | 生活社交 | 是 |
| 小黑盒去广告 | `plugin-016` | 生活社交 | 是 |
| 微信公众号去广告 | `plugin-029` | 生活社交 | 是 |
| 微信外部链接解锁 | `plugin-005-8` | 生活社交 | 是 |
| 微博去广告 | `plugin-014-4` | 生活社交 | 是 |
| 微博轻享版去广告 | `plugin-013-2` | 生活社交 | 是 |
| 瑞幸咖啡去广告 | `plugin-018-2` | 生活社交 | 是 |
| 百度贴吧去广告 | `plugin-015-4` | 生活社交 | 是 |
| 百度输入法去广告 | `plugin-030` | 生活社交 | 是 |
| 网易大神去广告 | `plugin-020-4` | 生活社交 | 是 |
| 网易邮箱大师去广告 | `plugin-002-4` | 生活社交 | 是 |
| 美图秀秀去广告 | `plugin-008-2` | 生活社交 | 是 |
| 美柚去广告 | `plugin-007` | 生活社交 | 是 |
| 胖乖生活去广告 | `plugin-020-3` | 生活社交 | 是 |
| 虎扑去广告 | `plugin-003-5` | 生活社交 | 是 |
| 酷安去广告 | `plugin-007-2` | 生活社交 | 是 |
| 酷狗音乐去广告 | `plugin-001-2` | 生活社交 | 是 |
| 123云盘去广告 | `123-2` | 工具与其他 | 是 |
| BoxJs | `boxjs` | 工具与其他 | 是 |
| GitHub加速 | `github-2` | 工具与其他 | 否 |
| Google搜索重定向 | `google` | 工具与其他 | 是 |
| Manager Tools | `manager-tools` | 工具与其他 | 是 |
| Script-Hub | `script-hub-2` | 工具与其他 | 是 |
| Sub-Store | `sub-store` | 工具与其他 | 是 |
| WARP节点查询 | `warp` | 工具与其他 | 是 |
| 代理链路检测 | `plugin-011-4` | 工具与其他 | 是 |
| 夸克去广告 | `plugin-023` | 工具与其他 | 是 |
| 定时任务合集 | `plugin-043` | 工具与其他 | 否 |
| 广告必须死 | `plugin-005-2` | 工具与其他 | 是 |
| 微信小程序去广告 | `plugin-026` | 工具与其他 | 是 |
| 快捷搜索 | `plugin-034` | 工具与其他 | 是 |
| 插件仓库 | `plugin-033` | 工具与其他 | 是 |
| 百度网页去广告 | `plugin-010` | 工具与其他 | 是 |
| 自动加入TestFlight | `testflight` | 工具与其他 | 否 |
| 菜鸟去广告 | `plugin-032` | 工具与其他 | 是 |

### 上游 200 但为 HTML 假页面（23 个）

| 插件名 | slug | 分类 | 启用 |
| --- | --- | --- | :---: |
| YouTube (Music) | `youtube-music` | 影音娱乐 | 是 |
| 流媒体解锁测试 | `plugin-002-2` | 影音娱乐 | 是 |
| 淘宝 | `plugin-003` | 购物比价 | 是 |
| 闲鱼 | `plugin-008` | 购物比价 | 是 |
| Swiftgram | `swiftgram` | 生活社交 | 否 |
| Telegram 去广告 | `telegram` | 生活社交 | 是 |
| X (Twitter) | `x-twitter` | 生活社交 | 是 |
| 中国移动 | `plugin-017` | 生活社交 | 是 |
| 微信 | `plugin-020` | 生活社交 | 是 |
| 123云盘 | `123` | 工具与其他 | 是 |
| AppStore Monitor | `appstore-monitor` | 工具与其他 | 否 |
| AppleOS Monitor | `appleos-monitor` | 工具与其他 | 否 |
| CMS Adblocker | `cms-adblocker` | 工具与其他 | 是 |
| GitHub | `github` | 工具与其他 | 是 |
| IPPure | `ippure` | 工具与其他 | 是 |
| Loon Gallery | `loon-gallery` | 工具与其他 | 是 |
| Redirect | `redirect` | 工具与其他 | 否 |
| TestFlight Monitor | `testflight-monitor` | 工具与其他 | 否 |
| 广告拦截合集 | `plugin-011-2` | 工具与其他 | 是 |
| 网易云音乐 | `plugin-005-4` | 工具与其他 | 是 |
| 网络信息 𝕏 | `plugin-004-3` | 工具与其他 | 是 |
| 节点检测工具 𝕂 | `plugin-003-2` | 工具与其他 | 是 |
| 菜鸟 | `plugin-002` | 工具与其他 | 是 |

### 上游 SSL / 网络错误（9 个）

| 插件名 | slug | 分类 | 启用 |
| --- | --- | --- | :---: |
| 哔哩哔哩 | `plugin-054` | 影音娱乐 | 否 |
| 知乎 | `plugin-053` | 阅读学习 | 否 |
| 小红书 | `plugin-005-5` | 购物比价 | 是 |
| 高德地图 | `plugin-004-4` | 出行地图 | 是 |
| 微博 | `plugin-003-3` | 生活社交 | 是 |
| MyBlockAds | `myblockads` | 工具与其他 | 是 |
| PingMe&WeTalk | `pingme-wetalk` | 工具与其他 | 否 |
| WebPage | `webpage` | 工具与其他 | 是 |
| 节点检测工具 | `plugin-005` | 工具与其他 | 是 |

### 上游 404（3 个）

| 插件名 | slug | 分类 | 启用 |
| --- | --- | --- | :---: |
| 七猫小说 | `plugin-010-2` | 阅读学习 | 是 |
| iRingo: LocationService | `iringo-locationservice` | 出行地图 | 是 |
| 1blocker | `1blocker` | 工具与其他 | 是 |

### 上游未检测（39 个）

| 插件名 | slug | 分类 | 启用 |
| --- | --- | --- | :---: |
| 65看 | `65` | 影音娱乐 | 是 |
| 7semao | `7semao` | 影音娱乐 | 是 |
| 91Porn 短视频 | `91porn` | 影音娱乐 | 是 |
| MJGS | `mjgs` | 影音娱乐 | 是 |
| Mr先生 + xvideos社区 + 泡芙短视频 + tiktok免费版 | `mr-xvideos-tiktok` | 影音娱乐 | 是 |
| YouTube 增强 v2 | `youtube-enhanced-2` | 影音娱乐 | 否 |
| YouTube去广告隐藏Shorts版@Aioneas | `youtube-shorts-aioneas` | 影音娱乐 | 是 |
| byhz | `byhz` | 影音娱乐 | 是 |
| haijiao | `haijiao` | 影音娱乐 | 是 |
| hongxingshipin | `hongxingshipin` | 影音娱乐 | 是 |
| jmshe | `jmshe` | 影音娱乐 | 是 |
| jtsp | `jtsp` | 影音娱乐 | 是 |
| luolidao | `luolidao` | 影音娱乐 | 是 |
| luping | `luping` | 影音娱乐 | 是 |
| mmav | `mmav` | 影音娱乐 | 是 |
| mxshm | `mxshm` | 影音娱乐 | 是 |
| one2jj | `one2jj` | 影音娱乐 | 是 |
| uua | `uua` | 影音娱乐 | 是 |
| xiaohuli | `xiaohuli` | 影音娱乐 | 是 |
| xv | `xv` | 影音娱乐 | 是 |
| yangtao | `yangtao` | 影音娱乐 | 是 |
| ydm | `ydm` | 影音娱乐 | 是 |
| yeyan | `yeyan` | 影音娱乐 | 是 |
| zukong | `zukong` | 影音娱乐 | 是 |
| 麻豆视频 + 快手萝莉 | `plugin-013-3` | 影音娱乐 | 是 |
| 18kmanhua | `18kmanhua` | 阅读学习 | 是 |
| 18pcs | `18pcs` | 阅读学习 | 是 |
| 番茄小说去广告 | `plugin-009-2` | 阅读学习 | 是 |
| 酷安LV20 | `lv20` | 生活社交 | 是 |
| One 解锁 | `one` | 工具与其他 | 是 |
| Reheji | `reheji` | 工具与其他 | 是 |
| YDM系列通杀 | `ydm-2` | 工具与其他 | 是 |
| aiaiwang | `aiaiwang` | 工具与其他 | 是 |
| peicaise | `peicaise` | 工具与其他 | 是 |
| 字母圈 | `plugin-023-2` | 工具与其他 | 是 |
| 网易云音乐去广告 | `plugin-040` | 工具与其他 | 否 |
| 通杀 | `plugin-061` | 工具与其他 | 否 |
| 酷安全面净化 | `plugin-019` | 工具与其他 | 是 |
| 预览qx一键导入资源 | `qx` | 工具与其他 | 是 |

### 无原始 URL（1 个）

| 插件名 | slug | 分类 | 启用 |
| --- | --- | --- | :---: |
| 瓜子影视净化 | `tilingsales-ad-remove-lpx` | 影音娱乐 | 是 |

## 四、上游源问题汇总

| 原始/备用源状态 | 数量 | 处理方式 |
| --- | ---: | --- |
| 上游403(Cloudflare/防盗链) | 60 | 保留本仓库备份；源站需登录/防盗链，无法直接同步 |
| 未检测 | 39 | 需人工打开原始源确认 |
| 上游200但为HTML假页面 | 23 | 源站已变成网页，不能作为插件源；保留备份 |
| 上游SSL/网络错误 | 9 | 网络或证书不可达；保留备份 |
| 上游404 | 3 | 源文件已删除；保留备份 |
| 无原始 URL | 1 | 本地插件，无上游 |

> 69 个可跟随上游的插件中：67 个 raw 返回 200；7 个 GitHub Contents API 确认文件存在但本次 raw 未测。

## 五、脚本问题

### 5.1 catalog 中的脚本（24 个）

| 脚本名 | slug | 类型 | 分类 | 状态 / 问题 |
| --- | --- | --- | --- | --- |
| WeTalk_Loon.js | `wetalk-loon-js` | 本地脚本 |  | 本地脚本无上游 |
| yuchenios.js | `yuchenios-js` | 本地脚本 |  | 本地脚本无上游 |
| We Talk.js | `we-talk-js` | 本地脚本 |  | 本地脚本无上游 |
| script_example.js | `script-example-js` | 本地脚本 |  | 本地脚本无上游 |
| step.js | `step-js` | 本地脚本 |  | 本地脚本无上游 |
| WeTalk Token.js | `wetalk-token-js` | 本地脚本 |  | 本地脚本无上游 |
| 02_script-hub.loon | `02-script-hub-loon` | 远程脚本 |  | origin 指向仓库自身，不能跟随上游 |
| 05_qdreader.loon | `05-qdreader-loon` | 远程脚本 |  | origin 指向仓库自身，不能跟随上游 |
| 03_luping | `03-luping` | 远程脚本 |  | origin 指向仓库自身，不能跟随上游 |
| 04_mdsp | `04-mdsp` | 远程脚本 |  | origin 指向仓库自身，不能跟随上游 |
| 01_91ts | `01-91ts` | 远程脚本 |  | origin 指向仓库自身，不能跟随上游 |
| 08_haijiaoshequ | `08-haijiaoshequ` | 远程脚本 |  | origin 指向仓库自身，不能跟随上游 |
| 12_ximalaya | `12-ximalaya` | 远程脚本 |  | origin 指向仓库自身，不能跟随上游 |
| 09_BiliBiliDailyBonus | `09-bilibilidailybonus` | 远程脚本 |  | origin 指向仓库自身，不能跟随上游 |
| 10_ydm | `10-ydm` | 远程脚本 |  | origin 指向仓库自身，不能跟随上游 |
| 14_get_cookie | `14-get-cookie` | 远程脚本 |  | origin 指向仓库自身，不能跟随上游 |
| 11_Loon_Daily_bonus | `11-loon-daily-bonus` | 远程脚本 |  | origin 指向仓库自身，不能跟随上游 |
| 18_WeTalk | `18-wetalk` | 远程脚本 |  | origin 指向仓库自身，不能跟随上游 |
| 07_~wxread | `07-wxread` | 远程脚本 |  | origin 指向仓库自身，不能跟随上游 |
| 15_dalanshu_checkin | `15-dalanshu-checkin` | 远程脚本 |  | origin 指向仓库自身，不能跟随上游 |
| 17_wps | `17-wps` | 远程脚本 |  | origin 指向仓库自身，不能跟随上游 |
| 16_wps.cookie | `16-wps-cookie` | 远程脚本 |  | origin 指向仓库自身，不能跟随上游 |
| 19_PingMeSignin | `19-pingmesignin` | 远程脚本 |  | origin 指向仓库自身，不能跟随上游 |
| 13_haijiao | `13-haijiao` | 远程脚本 |  | origin 指向仓库自身，不能跟随上游 |

### 5.2 未进入 catalog 的失败脚本（3 个）

| 脚本名 | 原始 URL | 状态 | 说明 |
| --- | --- | --- | --- |
| 天气.js | 本地文件 | 0 字节 | 空文件，无法执行；保留原文件 |
| 06_PingMe | `https://axhani.pages.dev/refs/heads/main/Loon/Plugin/PingMe.plugin` | SSL 失败 | 源站证书/连接不可用 |
| 20_iios_checkin | `https://raw.githubusercontent.com/ZenmoFeiShi/Qx/refs/heads/main/iios_checkin.js` | 404 | 源文件已删除 |

## 六、规则问题

规则共 48 条：36 条成功备份、12 条失败。`tools/update.py` 不识别 rules，因此规则只能作为静态备份，不进入自动更新流程。

### 6.1 失败规则（12 条）

| 规则名 | URL | 状态 | 大小 |
| --- | --- | --- | ---: |
| 02_Maps | https://loonhub.wuyra.com/Lpx/Maps.lpx | 失败 HTTP 403 | 5658 |
| 11_Apple-US | https://raw.githubusercontent.com/xpdigital/Apple-Rule/refs/heads/main/Apple-US.list | 失败 HTTP 404 | 14 |
| 17_Apple_Global | https://loonhub.wuyra.com/Lsr/Apple_Global.lsr | 失败 HTTP 403 | 5658 |
| 19_1PasswordUS | https://loonhub.wuyra.com/Lsr/1PasswordUS.lsr | 失败 HTTP 403 | 5658 |
| 20_HongKong | https://loonhub.wuyra.com/Lsr/HongKong.lsr | 失败 HTTP 403 | 5658 |
| 23_LAN_SPLITTER | https://kelee.one/Tool/Loon/Lsr/LAN_SPLITTER.lsr | 失败 HTTP 403 | 5658 |
| 24_SpeedtestChina | https://kelee.one/Tool/Loon/Lsr/SpeedtestChina.lsr | 失败 HTTP 403 | 5658 |
| 39_AI | https://kelee.one/Tool/Loon/Lsr/AI.lsr | 失败 HTTP 403 | 5658 |
| 40_SpeedtestInternational | https://kelee.one/Tool/Loon/Lsr/SpeedtestInternational.lsr | 失败 HTTP 403 | 5658 |
| 46_LAN_SPLITTER | https://loonhub.wuyra.com/Lsr/LAN_SPLITTER | 失败 HTTP 403 | 5658 |
| 47_REGION_SPLITTER | https://kelee.one/Tool/Loon/Lsr/REGION_SPLITTER.lsr | 失败 HTTP 403 | 5658 |
| 48_Mainland | https://loonhub.wuyra.com/Lsr/Mainland.lsr | 失败 HTTP 403 | 5658 |

### 6.2 静态备份规则（36 条）

均已下载成功，但不会自动跟随上游；明细见 `problem_rules.csv`。

## 七、同名重复与未单独收录（15 组）

这 15 组是“同名但不同 URL”的备用版本；当前 catalog 已保证名称唯一，不再产生歧义。为避免重复条目污染目录，未把每个 URL 都单独建条目；原始 URL 全部记录在 `DUPLICATE_SOURCES.md`，需要时可人工取用。

## 八、已解决 / 未解决一览

| 项目 | 状态 | 说明 |
| --- | :---: | --- |
| 分类全为 misc | ✅ 已解决 | 209 个插件、24 个脚本均已按用途分类 |
| 名称含 `\uf8ff` 乱码 | ✅ 已解决 | 4 个 iRingo 名称已清洗 |
| hash / 后缀名称 | ✅ 已解决 | 2 个 hash 名称、1 个 `.lpx` 后缀已修正 |
| 同名重复 | ✅ 已解决 | 当前名称唯一；15 组备用 URL 单独记录 |
| 插件文件 / Raw 链接 | ✅ 已解决 | 209 个文件存在，208 条启用 Raw 0 broken |
| origin 指向本仓库 | ❌ 未解决（135 个） | 上游多为 403/假页面/SSL/404/未检测，改为上游会直接更新失败；保留仓库备份 |
| 脚本 3 个未成功 | ❌ 未解决 | 空文件 1 个、SSL 1 个、404 1 个；见第五节 |
| 规则 12 个失败 | ❌ 未解决 | 11 个 403、1 个 404；规则无自动更新能力 |
| 规则自动更新 | ⚠️ 受限 | `update.py` 不支持 rules，需另行维护 |

## 九、附件

- `problem_plugins.csv`：209 个插件的逐条状态（可筛选）
- `problem_scripts.csv`：24 个脚本的逐条状态
- `problem_rules.csv`：48 条规则的逐条状态
- `DUPLICATE_SOURCES.md`：15 组同名重复的原始 URL 对照
- `CATALOG.md`：按分类整理的 209 个插件与 24 个脚本目录
