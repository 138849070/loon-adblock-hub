/**
 * 独立页面的三点按钮和底部操作菜单；嵌入页面由宿主提供对应界面。
 * Overflow trigger and bottom action sheet for standalone pages; embedded pages use host-provided chrome.
 */
class ActionMenu {
    #button;
    #layer;
    #items;
    #select;
    #document;
    #disabled = true;
    #key = event => {
        if (event.key === "Escape" && !this.#layer.hidden) {
            event.preventDefault();
            this.close();
            this.#button.focus();
        }
    };

    /**
     * 创建菜单，操作逻辑由调用方提供。
     * Create a menu whose actions are handled by the caller.
     * @param {(id: string) => void} select 菜单选择回调 / Selection callback.
     */
    constructor(select) {
        this.#document = document;
        this.#select = select;
        this.element = document.createElement("span");
        const triggerRoot = this.element.attachShadow({ mode: "open" });
        triggerRoot.innerHTML = `<style>
          :host{display:inline-flex;width:44px;height:44px;color:inherit}
          :host([hidden]){display:none!important}
          button{width:44px;height:44px;padding:10px;font:inherit;cursor:pointer;border:0;color:inherit;background:none}
          button:disabled{opacity:.4;cursor:default}
          button:focus-visible{outline:2px solid currentColor;outline-offset:-3px}
          svg{display:block;width:24px;height:24px;fill:currentColor}
        </style><button type="button" aria-label="更多操作" aria-haspopup="menu" aria-expanded="false"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="4" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="20" cy="12" r="2"/></svg></button>`;
        this.#button = triggerRoot.querySelector("button");
        this.#layer = document.createElement("span");
        const layerRoot = this.#layer.attachShadow({ mode: "open" });
        layerRoot.innerHTML = `<style>
          :host{position:fixed;inset:0;z-index:2147483647;color:var(--pp-text,CanvasText);font:16px/1.4 -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
          :host([hidden]){display:none!important}
          *,*::before,*::after{box-sizing:border-box}
          button{font:inherit;cursor:pointer;border:0;color:inherit;background:none}
          button:focus-visible{outline:2px solid var(--pp-accent,Highlight);outline-offset:-3px}
          #backdrop{position:absolute;inset:0;width:100%;height:100%;padding:0;background:#0008;animation:pp-fade-in .18s ease-out}
          #sheet{position:absolute;z-index:1;left:0;right:0;bottom:0;width:100%;max-width:540px;max-height:calc(100% - 24px);margin:auto;padding:8px 8px calc(8px + env(safe-area-inset-bottom));animation:pp-sheet-in .22s cubic-bezier(.2,.8,.2,1)}
          #items,#cancel{overflow:hidden;background:var(--pp-surface,Canvas);border:1px solid var(--pp-border,#8884);border-radius:14px;box-shadow:0 8px 28px #0004}
          #items{max-height:calc(100vh - 116px - env(safe-area-inset-bottom));overflow-y:auto;-webkit-overflow-scrolling:touch}
          #items button,#cancel{display:block;width:100%;min-height:54px;padding:14px 18px;text-align:center}
          #items button+button{border-top:1px solid var(--pp-border,#8884)}
          #items button[data-danger]{color:var(--pp-danger,#e45656)}
          #cancel{margin-top:8px;color:var(--pp-accent,Highlight);font-weight:600}
          @keyframes pp-fade-in{from{opacity:0}}
          @keyframes pp-sheet-in{from{transform:translateY(100%)}}
          @media (prefers-reduced-motion:reduce){#backdrop,#sheet{animation:none}}
        </style><button id="backdrop" type="button" tabindex="-1" aria-label="关闭菜单"></button><section id="sheet" role="dialog" aria-modal="true" aria-label="更多操作"><div id="items" role="menu"></div><button id="cancel" type="button">取消</button></section>`;
        this.#items = layerRoot.querySelector("#items");
        this.#button.onclick = () => (this.#layer.hidden ? this.open() : this.close());
        layerRoot.querySelector("#backdrop").onclick = () => {
            this.close();
            this.#button.focus();
        };
        layerRoot.querySelector("#cancel").onclick = () => {
            this.close();
            this.#button.focus();
        };
        this.#items.onkeydown = event => {
            const items = [...this.#items.children];
            const index = items.indexOf(layerRoot.activeElement);
            const offsets = { ArrowDown: 1, ArrowUp: -1 };
            if (event.key in offsets) {
                event.preventDefault();
                items[(index + offsets[event.key] + items.length) % items.length].focus();
            }
        };
        document.body.append(this.#layer);
        document.addEventListener("keydown", this.#key);
        this.update([]);
    }

    /**
     * 同步可用操作和忙碌状态，不重建菜单触发按钮。
     * Update actions and busy state without replacing the trigger button.
     * @param {Array<{id: string, label: string, destructive?: boolean}>} items 操作列表 / Actions.
     * @param {boolean} [disabled] 是否忙碌 / Whether operations are busy.
     * @returns {void} 无返回值 / No return value.
     */
    update(items, disabled = false) {
        this.close();
        this.#disabled = disabled || items.length === 0;
        this.#button.disabled = this.#disabled;
        this.#items.replaceChildren(
            ...items.map(item => {
                const button = this.#document.createElement("button");
                button.type = "button";
                button.setAttribute("role", "menuitem");
                button.textContent = item.label;
                button.toggleAttribute("data-danger", Boolean(item.destructive));
                button.onclick = () => {
                    this.close();
                    this.#select(item.id);
                };
                return button;
            }),
        );
    }

    /**
     * 打开当前操作菜单。
     * Open the current action sheet.
     * @returns {void} 无返回值 / No return value.
     */
    open() {
        if (this.#disabled) return;
        const style = getComputedStyle(this.element);
        for (const property of ["--pp-text", "--pp-surface", "--pp-border", "--pp-accent", "--pp-danger"]) {
            const value = style.getPropertyValue(property);
            if (value) this.#layer.style.setProperty(property, value);
        }
        this.#layer.hidden = false;
        this.#button.setAttribute("aria-expanded", "true");
        this.#items.firstElementChild.focus();
    }

    /**
     * 关闭菜单。
     * Close the menu.
     * @returns {void} 无返回值 / No return value.
     */
    close() {
        this.#layer.hidden = true;
        this.#button.setAttribute("aria-expanded", "false");
    }

    /**
     * 移除监听器与节点。
     * Remove listeners and elements.
     * @returns {void} 无返回值 / No return value.
     */
    destroy() {
        this.#document.removeEventListener("keydown", this.#key);
        this.#layer.remove();
        this.element.remove();
    }
}

/**
 * 模块文档容器：获取静态 HTML，并通过 iframe 数据属性传递页面资源输入。
 * Module document container: fetch static HTML and pass page resource inputs through iframe data attributes.
 */
class ModuleFrame extends EventTarget {
    #url;
    #options;
    #controller = new AbortController();
    #abort = () => this.destroy();
    #state;
    #change = event => {
        this.#state = { ...event.detail, actions: event.detail.actions ?? [] };
        this.dispatchEvent(new Event("change"));
    };
    #forward(type, event) {
        if (!this.dispatchEvent(new CustomEvent(type, { cancelable: true, detail: event.detail }))) event.preventDefault();
    }
    #confirmation = event => this.#forward("confirm", event);
    #notice = event => this.#forward("notice", event);
    #openURL = event => this.#forward("open-url", event);

    /**
     * 建立 iframe；调用方挂载 element 后调用 load。
     * Create the iframe; callers mount element and then call load.
     * @param {string | URL} url 模块请求地址 / Module request URL.
     * @param {{signal?: AbortSignal, headers?: HeadersInit}} [options] 请求选项 / Request options.
     */
    constructor(url, options = {}) {
        super();
        this.#url = new URL(url, document.baseURI);
        const match = /^\/settings\/([a-zA-Z0-9_-]+)\/?$/.exec(this.#url.pathname);
        if (!match) throw new TypeError("Open a concrete module URL");
        this.#options = { signal: options.signal };
        this.element = document.createElement("iframe");
        this.element.title = `${match[1]} 设置`;
        this.element.dataset.preferencePanes = "true";
        this.element.dataset.preferencePanesModule = match[1];
        this.element.dataset.preferencePanesBase = this.#url.href;
        const headers = new Headers(options.headers);
        for (const [header, property, kind] of [
            ["X-PreferencePanes-JSON", "preferencePanesJson", "BoxJS"],
            ["X-PreferencePanes-CSS", "preferencePanesStylesheet", "CSS"],
        ]) {
            if (!headers.has(header)) continue;
            const source = headers.get(header)?.trim();
            if (!source) {
                if (kind === "BoxJS") throw new TypeError("BoxJS resource URL is required");
                continue;
            }
            const resource = new URL(source, this.#url);
            if (!["http:", "https:"].includes(resource.protocol)) throw new TypeError(`${kind} resource must use HTTP(S)`);
            this.element.dataset[property] = resource.href;
        }
        this.element.addEventListener("preferencepanes:change", this.#change);
        this.element.addEventListener("preferencepanes:confirm", this.#confirmation);
        this.element.addEventListener("preferencepanes:notice", this.#notice);
        this.element.addEventListener("preferencepanes:open-url", this.#openURL);
        this.#state = { title: match[1], module: match[1], busy: false, canGoBack: true, actions: [] };
        options.signal?.addEventListener("abort", this.#abort, { once: true });
    }

    /**
     * 当前模块导航状态。
     * Current module navigation state.
     */
    get state() {
        return { ...this.#state };
    }

    /**
     * 获取原始 HTML；晚到响应在退出后不得重新挂载。
     * Fetch unmodified HTML; a late response must not remount after departure.
     * @returns {Promise<void>} HTML 已交给 iframe；表单状态通过 change 事件提供 / HTML assigned; form state is reported through change.
     */
    async load() {
        if (this.#options.signal?.aborted) this.destroy();
        const timer = setTimeout(() => this.#controller.abort(), 10000);
        try {
            const response = await fetch(this.#url, { method: "GET", cache: "no-store", credentials: "omit", signal: this.#controller.signal });
            if (response.status !== 200) throw new Error(`HTTP ${response.status}`);
            const html = await response.text();
            this.#controller.signal.throwIfAborted();
            this.element.srcdoc = html;
        } finally {
            clearTimeout(timer);
        }
    }

    /**
     * 使用 iframe 的联合历史返回；写入期间不导航。
     * Navigate joint iframe history back, except while a write is pending.
     * @returns {void} 无返回值 / No return value.
     */
    back() {
        if (!this.#state.busy && this.#state.canGoBack) this.element.contentWindow.history.back();
    }

    /**
     * 向模块发送菜单操作，不让宿主访问内部 DOM 或存储客户端。
     * Dispatch a menu action without host access to internal DOM or the storage client.
     * @param {string} id 当前可用操作 / Available action identifier.
     * @returns {void} 无返回值 / No return value.
     */
    perform(id) {
        if (this.#state.busy || !this.#state.actions.some(action => action.id === id)) throw new Error("Action is not available");
        this.element.dispatchEvent(new CustomEvent("preferencepanes:action", { detail: id }));
    }

    /**
     * 取消加载与事件订阅；节点保留到 Navigation 的退出动画结束。
     * Cancel loading and subscriptions; Navigation retains the node until its exit animation ends.
     * @returns {void} 无返回值 / No return value.
     */
    destroy() {
        this.#controller.abort();
        this.#options.signal?.removeEventListener("abort", this.#abort);
        this.element.removeEventListener("preferencepanes:change", this.#change);
        this.element.removeEventListener("preferencepanes:confirm", this.#confirmation);
        this.element.removeEventListener("preferencepanes:notice", this.#notice);
        this.element.removeEventListener("preferencepanes:open-url", this.#openURL);
    }
}

/**
 * 模块探测请求选项。
 * Options for a module probe request.
 * @typedef {object} ModuleProbeOptions
 * @property {typeof globalThis.fetch} [fetch] 可注入的 fetch / Injectable fetch.
 * @property {AbortSignal} [signal] 外部取消信号 / External cancellation signal.
 * @property {number} [timeout] 超时毫秒数，默认 3500 / Timeout in milliseconds, defaults to 3500.
 */

/**
 * 通过模块 API 的 HEAD 响应检测安装状态和业务版本。
 * Probe installation and business version from the module API HEAD response.
 * @param {string | URL} url 模块 API 地址 / Module API URL.
 * @param {ModuleProbeOptions} [options] 请求选项 / Request options.
 * @returns {Promise<Response>} 原始 HTTP 响应，可直接读取 status 和响应头 / Native HTTP response; read status and headers directly.
 */
async function probeModule(url, { fetch: request = globalThis.fetch, signal, timeout = 3500 } = {}) {
    const controller = new AbortController();
    const abort = () => controller.abort();
    if (signal?.aborted) abort();
    signal?.addEventListener("abort", abort, { once: true });
    const timer = setTimeout(() => controller.abort(), timeout);
    try {
        return await request(url, { method: "HEAD", cache: "no-store", credentials: "omit", signal: controller.signal });
    } finally {
        clearTimeout(timer);
        signal?.removeEventListener("abort", abort);
    }
}

/**
 * 模块入口的固定状态行，只通过 HEAD 探测安装状态和业务版本。
 * Fixed module status row, probing installation and business version with HEAD only.
 */
class ModuleStatus extends EventTarget {
    #element;
    #controller;
    #state = { status: "checking", version: null };

    /**
     * 绑定调用方提供的状态行。
     * Bind a caller-owned status row.
     * @param {HTMLElement} element 状态文字容器 / Status text container.
     */
    constructor(element) {
        super();
        this.#element = element;
        this.#render("checking");
    }

    /**
     * 当前安装状态与业务版本。
     * Current installation state and business version.
     */
    get state() {
        return { ...this.#state };
    }

    /**
     * 每次进入重新探测，取消旧请求并忽略其迟到结果。
     * Reprobe on entry, cancelling old requests and ignoring late results.
     * @param {string | URL} url 模块 API 地址 / Module API URL.
     * @param {ModuleProbeOptions} [options] 请求选项 / Request options.
     * @returns {Promise<Response | undefined>} 原始响应；被取消时无返回值 / Native response; undefined when cancelled.
     */
    async check(url, options = {}) {
        this.#controller?.abort();
        const controller = new AbortController();
        this.#controller = controller;
        const externalSignal = options.signal;
        const abort = () => controller.abort();
        if (externalSignal?.aborted) abort();
        externalSignal?.addEventListener("abort", abort, { once: true });
        this.#render("checking");
        try {
            const response = await probeModule(url, { ...options, signal: controller.signal });
            if (controller !== this.#controller) return response;
            const version = response.status === 200 ? response.headers.get("X-PreferencePanes-Version")?.trim() || null : null;
            this.#render(version ? "installed" : "missing", version);
            return response;
        } catch (error) {
            if (controller !== this.#controller) return;
            if (externalSignal?.aborted) throw error;
            this.#render("missing");
        } finally {
            externalSignal?.removeEventListener("abort", abort);
        }
    }

    /**
     * 更新状态标签，缺少版本时不伪造版本号。
     * Render the label without inventing a missing version.
     * @param {"checking" | "installed" | "missing"} status 状态 / State.
     * @param {string | null} [version] 业务版本 / Business version.
     * @returns {void} 无返回值 / No return value.
     */
    #render(status, version = null) {
        this.#state = { status, version: status === "installed" ? version : null };
        switch (status) {
            case "checking":
                this.#element.textContent = "检测中";
                break;
            case "installed":
                this.#element.textContent = version ?? "版本未知";
                break;
            case "missing":
                this.#element.textContent = "未安装";
                break;
        }
        this.#element.dataset.state = status;
        this.#element.title = this.#element.textContent;
        this.dispatchEvent(new Event("change"));
    }

    /**
     * 释放尚未完成的探测。
     * Release pending probes.
     * @returns {void} 无返回值 / No return value.
     */
    destroy() {
        this.#controller?.abort();
        this.#controller = undefined;
    }
}

/**
 * 同一文档内的主页/子页导航；iframe 各自的实例通过浏览器联合历史协作。
 * Navigate home/detail views within a document; iframe instances cooperate through joint browser history.
 */
class Navigation extends EventTarget {
    #container;
    #home;
    #create;
    #window;
    #key = null;
    #view;
    #retiring;
    #controller;
    #animation;
    #scroll = new WeakMap();
    #onHistory = () => this.#route();
    #onPageShow = event => {
        if (event.persisted) this.#route(true);
    };

    /**
     * 根视图始终保留；工厂按需提供子页，可用 signal 取消离开后的异步加载。
     * Retain the home view and create details on demand; signal cancels async work after departure.
     * @param {HTMLElement} container 由调用方布局的页面容器 / Caller-styled view container.
     * @param {HTMLElement} home 已创建的主页节点 / Existing home view.
     * @param {(key: string, signal: AbortSignal) => HTMLElement | undefined} create 子页工厂；未知路径返回 undefined / Detail factory; undefined for unknown routes.
     */
    constructor(container, home, create) {
        super();
        this.#container = container;
        this.#home = home;
        this.#create = create;
        this.#window = container.ownerDocument.defaultView;
        container.replaceChildren(home);
        this.#window.addEventListener("popstate", this.#onHistory);
        this.#window.addEventListener("hashchange", this.#onHistory);
        this.#window.addEventListener("pageshow", this.#onPageShow);
        this.#route();
    }

    /**
     * 当前子页键；空字符串表示主页。
     * Current detail key; empty means home.
     */
    get current() {
        return this.#key;
    }

    /**
     * 是否可以返回上一级或先前文档。
     * Whether a parent view or previous document is available.
     */
    get canGoBack() {
        return Boolean(this.#key) || this.#window.history.length > 1;
    }

    /**
     * 加入子页历史；使用文档自身 URL，避免 srcdoc 按宿主 base URL 跳转。
     * Push a detail using the document URL, avoiding srcdoc navigation against the host base URL.
     * @param {string} key 子页键 / Detail key.
     * @returns {void} 无返回值 / No return value.
     */
    open(key) {
        if (key === this.#key) return;
        const url = new URL(this.#window.location.href);
        url.hash = encodeURIComponent(key);
        this.#window.history.pushState({ ...this.#window.history.state, preferencePanesRoute: key }, "", url.href);
        this.#route();
    }

    /**
     * 沿浏览器联合历史返回，根页可退回宿主或上个文档。
     * Go back through joint history, including a host or previous document from home.
     * @returns {void} 无返回值 / No return value.
     */
    back() {
        if (this.canGoBack) this.#window.history.back();
    }

    /**
     * 解析 URL 并统一处理页面切换、加载取消与动画结束后的释放。
     * Resolve the URL and coordinate transitions, cancellation and release after animation.
     * @param {boolean} [reload] 从页面缓存恢复时重新创建子页 / Recreate a detail after bfcache restoration.
     * @returns {void} 无返回值 / No return value.
     */
    #route(reload = false) {
        const url = new URL(this.#window.location.href);
        let key;
        try {
            key = decodeURIComponent(url.hash.slice(1));
        } catch (error) {
            if (!(error instanceof URIError)) throw error;
            key = "";
        }
        if (!reload && key === this.#key) return;
        this.#controller?.abort();
        this.#controller = new AbortController();
        const next = key ? this.#create(key, this.#controller.signal) : undefined;
        if (!next) key = "";
        const history = this.#window.history;
        // 直接打开子页时建立一次主页历史；刷新不重复堆叠。
        // Seed home history once for direct details, without stacking entries on reload.
        if (url.hash && history.state?.preferencePanesRoute !== key) {
            url.hash = "";
            history.replaceState({ ...history.state, preferencePanesRoute: "" }, "", url.href);
            if (key) {
                url.hash = encodeURIComponent(key);
                history.pushState({ ...history.state, preferencePanesRoute: key }, "", url.href);
            }
        }
        const previous = this.#view;
        const position = previous ? this.#window.getComputedStyle(previous).transform : "none";
        this.#animation?.cancel();
        this.#retiring?.remove();
        this.#retiring = previous;
        if (previous) {
            this.#scroll.set(previous, previous.scrollTop);
            previous.inert = true;
        }
        this.#key = key;
        this.#view = next;
        this.#home.inert = Boolean(next);
        if (next) {
            next.inert = false;
            this.#container.append(next);
            next.scrollTop = this.#scroll.get(next) ?? 0;
        }
        const moving = next ?? previous;
        if (moving) {
            const animation = moving.animate([{ transform: next ? "translateX(100%)" : position }, { transform: next ? "translateX(0)" : "translateX(100%)" }], { duration: this.#window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 280, easing: "cubic-bezier(.22,.61,.36,1)", fill: "forwards" });
            this.#animation = animation;
            animation.onfinish = () => {
                if (this.#animation !== animation) return;
                this.#retiring?.remove();
                this.#retiring = undefined;
                animation.cancel();
                this.#animation = undefined;
            };
        }
        this.dispatchEvent(new Event("change"));
    }

    /**
     * 释放监听器、加载、动画和节点；调用方可重新创建导航。
     * Release listeners, loads, animations and nodes so callers can recreate navigation.
     * @returns {void} 无返回值 / No return value.
     */
    destroy() {
        this.#window.removeEventListener("popstate", this.#onHistory);
        this.#window.removeEventListener("hashchange", this.#onHistory);
        this.#window.removeEventListener("pageshow", this.#onPageShow);
        this.#controller?.abort();
        this.#animation?.cancel();
        this.#retiring?.remove();
        this.#view?.remove();
        this.#home.remove();
    }
}

export { ActionMenu, ModuleFrame, ModuleStatus, Navigation, probeModule };
