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
