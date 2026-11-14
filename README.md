# Loon 去广告合集

个人维护的 Loon 插件与脚本仓库，用于集中管理日常使用的去广告配置和辅助脚本。

内容随缘更新。

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
| HTTPDNS拦截器 | misc | [Block_HTTPDNS.plugin](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/block-httpdns/Block_HTTPDNS.plugin) |
| 广告平台拦截器 | misc | [BlockAdvertisers.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/block-advertisers/BlockAdvertisers.lpx) |
| 可莉广告过滤器 | misc | [Remove_ads_by_keli.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/remove-ads-by-keli/Remove_ads_by_keli.lpx) |
| DNS防泄露 | misc | [Prevent_DNS_Leaks.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/prevent-dns-leaks/Prevent_DNS_Leaks.lpx) |
| Skip Proxy and Real-IP Lists | misc | [SkipProxy.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/skip-proxy/SkipProxy.lpx) |
| Biliverse 增强模式 | video | [Biliverse.Enhanced.plugin](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/biliverse-enhanced/Biliverse.Enhanced.plugin) |
| WakeUp课程表去广告 | reading | [WakeupSchedule_remove_ads.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/reading/wakeup-schedule-remove-ads/WakeupSchedule_remove_ads.lpx) |
| YouTube 增强（gholts） | video | [youtube_gholts.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/video/youtube-gholts/youtube_gholts.lpx) |
| 比狸比狸过滤 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/bilibili-cleaner/plugin.lpx) |
| 节点 IP 质量检测 · 混合模式 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/ipquality-web-test/plugin.lpx) |
| 节点质量查询 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/node-quality-query/plugin.lpx) |
| 节点TCPing连通性测试 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/node-tcping/plugin.lpx) |
| Loon 订阅解析器 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/loon-parser/plugin.lpx) |
| YouTube | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/youtube/plugin.lpx) |
| 菜鸟 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-002/plugin.lpx) |
| 淘宝 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-003/plugin.lpx) |
| 节点 IP 质量检测 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/ip/plugin.lpx) |
| 节点检测工具 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-005/plugin.lpx) |
| X（Twitter） | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/x-twitter/plugin.lpx) |
| 蛋蛋不语VIP解锁 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/vip/plugin.lpx) |
| WPS | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/wps/plugin.lpx) |
| 知乎去广告 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-004/plugin.lpx) |
| 广告必须死 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-005-2/plugin.lpx) |
| One | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/one/plugin.lpx) |
|  iRingo: 🗺️ Maps | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/iringo-maps/plugin.lpx) |
| 🍿️ DualSubs: ▶️ YouTube | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/dualsubs-youtube/plugin.lpx) |
| 起点读书 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-004-2/plugin.lpx) |
| 起点读书签到 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-005-3/plugin.lpx) |
| X(Twitter)网页版去广告 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/x-twitter-2/plugin.lpx) |
| Reddit 自动翻译 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/reddit/plugin.lpx) |
| Reven | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/reven/plugin.lpx) |
| TilingSales_ad_remove.lpx | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/tilingsales-ad-remove-lpx/plugin.lpx) |
| App解锁合集 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/app/plugin.lpx) |
| 酷安 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-011/plugin.lpx) |
| YouTube去广告隐藏Shorts版@Aioneas | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/youtube-shorts-aioneas/plugin.lpx) |
| 酷安LV20 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/lv20/plugin.lpx) |
| 哲也同学 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-014/plugin.lpx) |
| Manager Tools | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/manager-tools/plugin.lpx) |
| 小黑盒去广告 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-016/plugin.lpx) |
| 中国移动 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-017/plugin.lpx) |
| 123云盘 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/123/plugin.lpx) |
| YouTube (Music) | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/youtube-music/plugin.lpx) |
| 微信 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-020/plugin.lpx) |
| Telegram | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/telegram/plugin.lpx) |
| 流媒体解锁测试 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-002-2/plugin.lpx) |
| 节点检测工具 𝕂 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-003-2/plugin.lpx) |
| 网络信息 𝕏 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-004-3/plugin.lpx) |
| 网易云音乐 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-005-4/plugin.lpx) |
| Loon Gallery | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/loon-gallery/plugin.lpx) |
| IPPure | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/ippure/plugin.lpx) |
| 闲鱼 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-008/plugin.lpx) |
| GitHub | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/github/plugin.lpx) |
| CMS Adblocker | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/cms-adblocker/plugin.lpx) |
| 广告拦截合集 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-011-2/plugin.lpx) |
| 医考帮去广告 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-012/plugin.lpx) |
| App/小程序-AD净化 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/app-ad/plugin.lpx) |
| 番茄小说 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-014-2/plugin.lpx) |
| 百度贴吧 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-015/plugin.lpx) |
| Reheji | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/reheji/plugin.lpx) |
| Script Hub: 重写 & 规则集转换 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/script-hub/plugin.lpx) |
|  iRingo: 📍 LocationService | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/iringo-locationservice/plugin.lpx) |
|  iRingo: 🌤 WeatherKit (Rewrite) | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/iringo-weatherkit-rewrite/plugin.lpx) |
| 菜鸟裹裹 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-020-2/plugin.lpx) |
| MyBlockAds | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/myblockads/plugin.lpx) |
| WebPage | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/webpage/plugin.lpx) |
| 微博 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-003-3/plugin.lpx) |
| 高德地图 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-004-4/plugin.lpx) |
| 小红书 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-005-5/plugin.lpx) |
| 美柚 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-006/plugin.lpx) |
| 美柚去广告 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-007/plugin.lpx) |
| 美图秀秀去广告 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-008-2/plugin.lpx) |
| 网络信息（离歌自用） | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-009/plugin.lpx) |
| 百度网页去广告 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-010/plugin.lpx) |
| 得物去广告 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-011-3/plugin.lpx) |
| 京东外卖去广告 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-012-2/plugin.lpx) |
| 饿了么 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-013/plugin.lpx) |
| 美团 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-014-3/plugin.lpx) |
| 美团 & 美团外卖 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-015-2/plugin.lpx) |
| 得物 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-016-2/plugin.lpx) |
| Soul去广告 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/soul/plugin.lpx) |
| 节点脚本工具合集 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-018/plugin.lpx) |
| 酷安全面净化 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-019/plugin.lpx) |
| 胖乖生活去广告 | misc | [plugin.lpx](https://raw.githubusercontent.com/138849070/loon-adblock-hub/main/plugins/misc/plugin-020-3/plugin.lpx) |
<!-- PLUGINS_TABLE_END -->

## 脚本

<!-- SCRIPTS_TABLE_START -->
| 名称 | 分类 | 链接 |
| --- | --- | --- |
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
