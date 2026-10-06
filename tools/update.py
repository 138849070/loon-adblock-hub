#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Loon 去广告合集 · 内容更新脚本

读取 catalog.yaml，下载各条目文件，将外部引用重写为本仓库 Raw 地址，
生成 links.md 与 README 表格，并输出运行摘要（供 commit message 使用）。

仓库地址通过环境变量注入（本地缺省为 loon-adblock-hub/loon-adblock-hub）：
  GITHUB_REPOSITORY  owner/repo
  GITHUB_REF_NAME    main
"""

import hashlib
import os
import re
import sys
import time
from datetime import datetime
from pathlib import Path
from urllib.parse import urlparse

import requests
import yaml

# ---------------- 路径与常量 ----------------

ROOT = Path(__file__).resolve().parent.parent
CATALOG_PATH = ROOT / "catalog.yaml"
PLUGINS_DIR = ROOT / "plugins"
SCRIPTS_DIR = ROOT / "scripts"
LINKS_PATH = ROOT / "links.md"
README_PATH = ROOT / "README.md"
SUMMARY_PATH = ROOT / "tools" / "last_run_summary.txt"

DEPS_DIR_NAME = "deps"
DEPS_MANIFEST_NAME = "manifest.yaml"

REPO = (os.environ.get("GITHUB_REPOSITORY") or "loon-adblock-hub/loon-adblock-hub").strip().strip("/")
BRANCH = (os.environ.get("GITHUB_REF_NAME") or "main").strip().strip("/")
RAW_BASE = f"https://raw.githubusercontent.com/{REPO}/{BRANCH}"
REPO_NAME = REPO.split("/")[-1]

VALID_PLUGIN_CATEGORIES = {"reading", "travel", "video", "shopping", "lifestyle", "misc"}
VALID_SCRIPT_CATEGORIES = {"checkin", "query", "notify", "tools", "misc"}

TIMEOUT = 30
MAX_RETRIES = 3
MAX_DEPTH = 3
MIN_CONTENT_LEN = 10

USER_AGENT = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
)

# ---------------- URL 提取 ----------------

KEYED_URL_RE = re.compile(
    rb"(?:script-path|rule-path|subscription|icon|img-url)\s*=\s*([^\s,'\"<>`]+)"
)
RAW_URL_PREFIX_RE = re.compile(rb"(#!raw-url\s*=\s*)[^\s]+")
GENERIC_URL_RE = re.compile(rb"https?://[^\s'\"<>`]+")


def _clean_url_token(token: bytes) -> bytes:
    token = token.strip()
    while token and token[-1:] in b",;:!?)]}":
        token = token[:-1]
    return token


def extract_urls(content: bytes):
    """返回 (keyed, generic) 两个 URL 集合；generic 包含 keyed。"""
    keyed, generic = set(), set()
    for pattern in (KEYED_URL_RE, RAW_URL_PREFIX_RE):
        for m in pattern.finditer(content):
            token = _clean_url_token(m.group(1))
            if token.startswith((b"http://", b"https://")):
                keyed.add(token.decode("utf-8", "replace"))
    for m in GENERIC_URL_RE.finditer(content):
        token = _clean_url_token(m.group(0))
        if token.startswith((b"http://", b"https://")):
            generic.add(token.decode("utf-8", "replace"))
    generic |= keyed
    return keyed, generic


def is_http_url(url: str) -> bool:
    try:
        parsed = urlparse(url)
    except ValueError:
        return False
    return parsed.scheme in ("http", "https") and bool(parsed.netloc)


# ---------------- 文件读写 ----------------

def write_atomic(path: Path, data: bytes) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    tmp = path.with_name(path.name + ".tmp")
    tmp.write_bytes(data)
    os.replace(tmp, path)


def read_bytes(path: Path) -> bytes:
    try:
        return path.read_bytes()
    except OSError:
        return b""


# ---------------- 下载 ----------------

def download(url: str) -> bytes:
    """主文件下载：带重试与严格校验，失败抛异常。"""
    last_error = None
    for attempt in range(MAX_RETRIES):
        try:
            resp = requests.get(url, timeout=TIMEOUT, headers={"User-Agent": USER_AGENT})
            if resp.status_code != 200:
                raise RuntimeError(f"HTTP {resp.status_code}")
            body = resp.content
            ctype = (resp.headers.get("Content-Type") or "").lower()
            if len(body) <= MIN_CONTENT_LEN:
                raise RuntimeError("内容过短")
            if "text/html" in ctype:
                raise RuntimeError("返回 HTML 页面")
            if b"404 Not Found" in body or b"Not Found" in body:
                raise RuntimeError("内容为 404 页面")
            return body
        except Exception as exc:
            last_error = exc
            if attempt < MAX_RETRIES - 1:
                time.sleep(2 ** attempt)
    raise RuntimeError(f"下载失败：{last_error}")


def download_dep(url: str):
    """依赖下载：HTML 页面视为非文件引用（返回 None, None），其余错误返回 (None, err)。"""
    try:
        resp = requests.get(url, timeout=TIMEOUT, headers={"User-Agent": USER_AGENT})
    except Exception as exc:
        return None, exc
    if resp.status_code != 200:
        return None, RuntimeError(f"HTTP {resp.status_code}")
    body = resp.content
    ctype = (resp.headers.get("Content-Type") or "").lower()
    if "text/html" in ctype:
        return None, None
    if len(body) <= MIN_CONTENT_LEN:
        return None, RuntimeError("内容过短")
    if b"404 Not Found" in body or b"Not Found" in body:
        return None, RuntimeError("内容为 404 页面")
    return body, None


# ---------------- 本地 Raw 链接 ----------------

def is_already_local(url: str) -> bool:
    if url.startswith(RAW_BASE):
        return True
    if "raw.githubusercontent.com" in url and f"/{REPO_NAME}/" in url:
        return True
    return False


def raw_link(rel_path: Path) -> str:
    return f"{RAW_BASE}/{rel_path.relative_to(ROOT).as_posix()}"


# ---------------- deps 清单 ----------------

def load_manifest(deps_dir: Path) -> dict:
    p = deps_dir / DEPS_MANIFEST_NAME
    try:
        data = yaml.safe_load(p.read_text(encoding="utf-8")) or {}
        return data if isinstance(data, dict) else {}
    except (OSError, yaml.YAMLError):
        return {}


def save_manifest(deps_dir: Path, manifest: dict) -> None:
    text = yaml.safe_dump(manifest, allow_unicode=True, sort_keys=True)
    write_atomic(deps_dir / DEPS_MANIFEST_NAME, text.encode("utf-8"))


def dep_filename_for(url: str, deps_dir: Path) -> str:
    """返回该 URL 在 deps 目录中的文件名；跨次运行复用清单中的命名。"""
    manifest = load_manifest(deps_dir)
    existing = manifest.get(url)
    if existing:
        return existing
    used = set(manifest.values())
    for p in deps_dir.iterdir():
        if p.is_file() and p.name != DEPS_MANIFEST_NAME:
            used.add(p.name)
    path = urlparse(url).path
    base = Path(path).name
    if not base or base == DEPS_MANIFEST_NAME or len(base) > 120 or "." not in base:
        digest = hashlib.md5(url.encode("utf-8")).hexdigest()[:10]
        ext = Path(path).suffix
        base = digest + ext
    name, n = base, 2
    while name in used:
        stem, ext = os.path.splitext(base)
        name = f"{stem}-{n}{ext}"
        n += 1
    manifest[url] = name
    save_manifest(deps_dir, manifest)
    return name


# ---------------- 依赖发现与重写 ----------------

def rewrite(content: bytes, entry_dir: Path, mapping: dict, depth: int, stats: dict,
            self_raw: str = "") -> bytes:
    """重写 content 中的外部引用；依赖递归处理，最多 MAX_DEPTH 层。"""
    if depth > MAX_DEPTH:
        return content
    out = content
    # raw-url 指向文件自身，改写为本仓库内该文件的 Raw 地址
    if self_raw:
        out = RAW_URL_PREFIX_RE.sub(lambda m: m.group(1) + self_raw.encode("utf-8"), out)
    keyed, generic = extract_urls(out)
    if not generic:
        return out
    is_js = b"$httpClient" in out or b"$done" in out
    for url in sorted(generic, key=len, reverse=True):
        if is_already_local(url):
            continue
        if url in mapping:
            out = out.replace(url.encode("utf-8"), mapping[url].encode("utf-8"))
            continue
        # JS 中的普通 URL 是运行时接口，不当作文件依赖下载
        if is_js and url not in keyed:
            continue
        deps_dir = entry_dir / DEPS_DIR_NAME
        deps_dir.mkdir(parents=True, exist_ok=True)
        manifest = load_manifest(deps_dir)
        existing = manifest.get(url)
        if existing and (deps_dir / existing).exists():
            dep_path = deps_dir / existing
            mapping[url] = raw_link(dep_path)
            out = out.replace(url.encode("utf-8"), mapping[url].encode("utf-8"))
            continue
        body, err = download_dep(url)
        if body is None:
            if err:
                print(f"      依赖下载失败：{url}（{err}）")
                stats["failed"] += 1
            else:
                print(f"      跳过引用链接（非文件）：{url}")
            continue
        fname = dep_filename_for(url, deps_dir)
        dep_path = deps_dir / fname
        mapping[url] = raw_link(dep_path)
        new_body = rewrite(body, entry_dir, mapping, depth + 1, stats)
        write_atomic(dep_path, new_body)
        out = out.replace(url.encode("utf-8"), mapping[url].encode("utf-8"))
    return out


# ---------------- 校验 ----------------

def validate_catalog(catalog: dict) -> None:
    errors = []
    defaults = catalog.get("defaults") or {}
    seen = {"plugins": set(), "scripts": set()}
    seen_paths = {}
    for kind, valid_cats, base in (
        ("plugins", VALID_PLUGIN_CATEGORIES, PLUGINS_DIR),
        ("scripts", VALID_SCRIPT_CATEGORIES, SCRIPTS_DIR),
    ):
        default_cat = defaults.get("plugin_category" if kind == "plugins" else "script_category", "misc")
        entries = catalog.get(kind)
        if entries is None:
            continue
        if not isinstance(entries, list):
            errors.append(f"{kind} 必须是列表")
            continue
        for entry in entries:
            if not isinstance(entry, dict):
                errors.append(f"{kind} 中存在非对象条目")
                continue
            slug = entry.get("slug")
            if not slug:
                errors.append(f"{kind} 条目缺少 slug")
                continue
            if slug in seen[kind]:
                errors.append(f"{kind} 条目 slug 重复：{slug}")
            seen[kind].add(slug)
            cat = entry.get("category") or default_cat
            if cat not in valid_cats:
                errors.append(f"{kind}/{slug} 分类不合法：{cat}")
            files = entry.get("files")
            if not files:
                errors.append(f"{kind}/{slug} files 为空")
                continue
            for f in files:
                if not isinstance(f, dict):
                    errors.append(f"{kind}/{slug} files 中存在非对象项")
                    continue
                name = f.get("name")
                origin = f.get("origin")
                if not name:
                    errors.append(f"{kind}/{slug} 文件缺少 name")
                if not origin:
                    errors.append(f"{kind}/{slug} 文件 {name} 缺少 origin")
                elif not is_http_url(origin):
                    errors.append(f"{kind}/{slug} 文件 {name} origin 非法：{origin}")
                for u in (origin,) + tuple(f.get("backup") or ()):
                    if u and not is_http_url(u):
                        errors.append(f"{kind}/{slug} 文件 {name} backup 非法：{u}")
                if name:
                    key = str(base / cat / slug / name)
                    if key in seen_paths:
                        errors.append(f"条目路径冲突：{key}（{seen_paths[key]} 与 {kind}/{slug}）")
                    seen_paths[key] = f"{kind}/{slug}"
    if errors:
        print("catalog.yaml 校验失败：")
        for e in errors:
            print(f"  - {e}")
        sys.exit(1)


# ---------------- 映射表 ----------------

def build_mapping(catalog: dict) -> dict:
    mapping = {}
    defaults = catalog.get("defaults") or {}
    for kind, base in (("plugins", PLUGINS_DIR), ("scripts", SCRIPTS_DIR)):
        default_cat = defaults.get("plugin_category" if kind == "plugins" else "script_category", "misc")
        for entry in catalog.get(kind) or []:
            cat = entry.get("category") or default_cat
            slug = entry.get("slug")
            for f in entry.get("files") or []:
                name = f.get("name")
                if not (slug and name):
                    continue
                raw = f"{RAW_BASE}/{kind}/{cat}/{slug}/{name}"
                urls = [f.get("origin")] + list(f.get("backup") or [])
                for u in urls:
                    if u:
                        mapping[u] = raw
    return mapping


# ---------------- 条目处理 ----------------

def process_entry(kind: str, entry: dict, catalog: dict, mapping: dict, stats: dict) -> None:
    slug = entry.get("slug")
    if not slug:
        return
    if not entry.get("enabled", True):
        print(f"· 跳过（未启用）：{slug}")
        return
    defaults = catalog.get("defaults") or {}
    default_cat = defaults.get("plugin_category" if kind == "plugins" else "script_category", "misc")
    cat = entry.get("category") or default_cat
    base = PLUGINS_DIR if kind == "plugins" else SCRIPTS_DIR
    entry_dir = base / cat / slug
    entry_dir.mkdir(parents=True, exist_ok=True)
    for f in entry.get("files") or []:
        name = f.get("name")
        if not name:
            continue
        target = entry_dir / name
        self_raw = f"{RAW_BASE}/{kind}/{cat}/{slug}/{name}"
        urls = [f.get("origin")] + list(f.get("backup") or [])
        urls = [u for u in urls if u]
        body, used_url = None, None
        for u in urls:
            try:
                body = download(u)
                used_url = u
                break
            except Exception as exc:
                print(f"  下载失败：{u}（{exc}）")
        if body is None:
            print(f"× 失败：{slug}/{name}（所有来源均不可用）")
            stats["failed"] += 1
            continue
        print(f"· 已下载：{slug}/{name}（来源：{used_url}）")
        new_content = rewrite(body, entry_dir, mapping, 1, stats, self_raw=self_raw)
        old = read_bytes(target)
        if old == new_content:
            print(f"  = 保持原样：{slug}/{name}")
            stats["unchanged"] += 1
        else:
            write_atomic(target, new_content)
            if old:
                print(f"  ↑ 更新：{slug}/{name}")
                stats["updated"] += 1
            else:
                print(f"  + 新增：{slug}/{name}")
                stats["added"] += 1


# ---------------- 产物生成 ----------------

def generate_links(catalog: dict) -> None:
    defaults = catalog.get("defaults") or {}
    lines = ["# 订阅链接", "", "仓库内各条目的 Raw 订阅链接。", ""]
    for kind, title in (("plugins", "插件"), ("scripts", "脚本")):
        lines.append(f"## {title}")
        default_cat = defaults.get("plugin_category" if kind == "plugins" else "script_category", "misc")
        items = []
        for entry in catalog.get(kind) or []:
            if not entry.get("enabled", True):
                continue
            files = entry.get("files") or []
            if not files:
                continue
            first = files[0]
            name, slug = first.get("name"), entry.get("slug")
            cat = entry.get("category") or default_cat
            if not (name and slug):
                continue
            raw = f"{RAW_BASE}/{kind}/{cat}/{slug}/{name}"
            items.append(f"- [{entry.get('name') or slug}]({raw})")
        if items:
            lines.extend(items)
        else:
            lines.append("（暂无）")
        lines.append("")
    text = "\n".join(lines).rstrip() + "\n"
    encoded = text.encode("utf-8")
    if read_bytes(LINKS_PATH) != encoded:
        write_atomic(LINKS_PATH, encoded)
        print("· links.md 已更新")
    else:
        print("· links.md 保持原样")


def update_readme(catalog: dict) -> None:
    if not README_PATH.exists():
        print("警告：README.md 不存在，跳过表格更新")
        return
    old_text = README_PATH.read_text(encoding="utf-8")
    text = old_text
    defaults = catalog.get("defaults") or {}
    for marker, kind in (("PLUGINS_TABLE", "plugins"), ("SCRIPTS_TABLE", "scripts")):
        start, end = f"<!-- {marker}_START -->", f"<!-- {marker}_END -->"
        if start not in text or end not in text:
            print(f"警告：README 中未找到 {marker} 标记，跳过")
            continue
        default_cat = defaults.get("plugin_category" if kind == "plugins" else "script_category", "misc")
        rows = ["| 名称 | 分类 | 链接 |", "| --- | --- | --- |"]
        for entry in catalog.get(kind) or []:
            if not entry.get("enabled", True):
                continue
            files = entry.get("files") or []
            if not files:
                continue
            first = files[0]
            name, slug = first.get("name"), entry.get("slug")
            cat = entry.get("category") or default_cat
            if not (name and slug):
                continue
            raw = f"{RAW_BASE}/{kind}/{cat}/{slug}/{name}"
            rows.append(f"| {entry.get('name') or slug} | {cat} | [{name}]({raw}) |")
        block = "\n".join(rows)
        new_text, n = re.subn(
            re.escape(start) + r".*?" + re.escape(end),
            start + "\n" + block + "\n" + end,
            text,
            flags=re.S,
        )
        if n == 0:
            print(f"警告：README 中 {marker} 区块替换失败，跳过")
            continue
        text = new_text
    if text != old_text:
        write_atomic(README_PATH, text.encode("utf-8"))
        print("· README.md 表格已更新")
    else:
        print("· README.md 保持原样")


def write_summary(stats: dict) -> None:
    today = datetime.now().strftime("%Y-%m-%d")
    lines = [
        f"更新内容 {today}",
        "",
        f"新增：{stats['added']}",
        f"更新：{stats['updated']}",
        f"保持原样：{stats['unchanged']}",
        f"失败：{stats['failed']}",
    ]
    write_atomic(SUMMARY_PATH, ("\n".join(lines) + "\n").encode("utf-8"))


# ---------------- 入口 ----------------

def main() -> None:
    print("== Loon 去广告合集 · 内容更新 ==")
    print(f"仓库：{REPO}  分支：{BRANCH}")
    try:
        catalog = yaml.safe_load(CATALOG_PATH.read_text(encoding="utf-8")) or {}
    except OSError:
        print(f"错误：找不到 {CATALOG_PATH}")
        sys.exit(1)
    except yaml.YAMLError as exc:
        print(f"错误：catalog.yaml 解析失败：{exc}")
        sys.exit(1)
    if not isinstance(catalog, dict):
        print("错误：catalog.yaml 顶层必须是对象")
        sys.exit(1)
    validate_catalog(catalog)
    mapping = build_mapping(catalog)
    stats = {"added": 0, "updated": 0, "unchanged": 0, "failed": 0}
    for kind in ("plugins", "scripts"):
        for entry in catalog.get(kind) or []:
            process_entry(kind, entry, catalog, mapping, stats)
    generate_links(catalog)
    update_readme(catalog)
    write_summary(stats)
    print("== 摘要 ==")
    print(f"新增：{stats['added']}  更新：{stats['updated']}  保持原样：{stats['unchanged']}  失败：{stats['failed']}")


if __name__ == "__main__":
    main()
