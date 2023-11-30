// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"gBWlm":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "dfad51b14bf444f7";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"h7u1C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Frame", ()=>(0, _frame.Frame));
parcelHelpers.export(exports, "ScatterPlot", ()=>(0, _scatterplot.ScatterPlot));
parcelHelpers.export(exports, "VectorPlot", ()=>(0, _vectorplot.VectorPlot));
parcelHelpers.export(exports, "Label", ()=>(0, _label.Label));
parcelHelpers.export(exports, "Greek", ()=>(0, _glyph.Greek));
parcelHelpers.export(exports, "getRandomPoints", ()=>(0, _data.getRandomPoints));
var _frame = require("./frame");
var _scatterplot = require("./plots/scatterplot");
var _vectorplot = require("./plots/vectorplot");
var _label = require("./label");
var _glyph = require("./glyph");
var _data = require("./data");

},{"./frame":"bCL66","./data":"6C1am","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./label":"dyAII","./plots/vectorplot":"83AEn","./plots/scatterplot":"kKQFI","./glyph":"8wG4Z"}],"bCL66":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Frame", ()=>Frame);
var _three = require("three");
var _orbitControls = require("three/examples/jsm/controls/OrbitControls");
var _axes = require("./axes");
class Frame extends (0, _three.Scene) {
    // TODO: at the moment only one size bc grid can only be squared
    // look into this for solution https://discourse.threejs.org/t/rectangular-gridhelper-possibility/37812
    constructor(canvas, size = 10){
        super();
        this.canvas = canvas;
        this.size = size;
        this.observer = new ResizeObserver(()=>this.update());
        this.scene = new (0, _three.Scene)();
        this.scene.background = new (0, _three.Color)(0xffffff);
        const { clientWidth, clientHeight } = canvas;
        this.renderer = new (0, _three.WebGLRenderer)({
            canvas
        });
        this.renderer.setSize(clientWidth, clientHeight);
        this.setCamera(clientWidth, clientHeight);
        this.setControls();
        this.setAxes();
        this.updateOnChanges();
        this.update();
    }
    setCamera(width, height) {
        this.camera = new (0, _three.PerspectiveCamera)(45, width / height, 0.1, 1000);
        this.camera.position.set(this.size * 1.5, this.size * 1.2, this.size * 2.5);
        this.scene.add(this.camera);
    }
    setControls() {
        this.controls = new (0, _orbitControls.OrbitControls)(this.camera, this.canvas);
        this.controls.target.set(0, 0, 0);
    }
    setAxes() {
        this.axes = new (0, _axes.Axes)(this.size, this.size, this.size);
        this.scene.add(this.axes.x);
        this.scene.add(this.axes.y);
        this.scene.add(this.axes.z);
        this.scene.add(this.axes.gridXY);
        this.scene.add(this.axes.gridXZ);
        this.scene.add(this.axes.gridYZ);
    }
    updateOnChanges() {
        this.controls.addEventListener("change", ()=>this.update());
        this.observer.observe(this.canvas);
    }
    update() {
        this.renderer.render(this.scene, this.camera);
    }
    capture() {
        const base64 = this.canvas.toDataURL("img/png");
    }
    async addPlot(plot) {
        this.scene.add(...plot.getDrawables());
        plot.getWritables().forEach((l)=>this.addLabel(l));
        this.update();
    }
    // private async addFallbackLabel(text: FallbackLabel) {
    //   this.scene.add(...text.getFrameable());
    //   this.update();
    // }
    addLabel(text) {
        this.scene.add(text);
        text.addEventListener("synccomplete", ()=>{
            this.update();
        });
    }
}

},{"three":"ktPTu","three/examples/jsm/controls/OrbitControls":"7mqRv","./axes":"2EXQV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2EXQV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UnitVector", ()=>UnitVector);
parcelHelpers.export(exports, "PlaneAxes", ()=>PlaneAxes);
parcelHelpers.export(exports, "Axes", ()=>Axes);
var _three = require("three");
const UnitVector = {
    i: new (0, _three.Vector3)(1, 0, 0),
    j: new (0, _three.Vector3)(0, 1, 0),
    k: new (0, _three.Vector3)(0, 0, 1)
};
const PlaneAxes = {
    xy: {
        normal: UnitVector.k,
        unit: {
            x: UnitVector.i,
            y: UnitVector.j
        }
    },
    xz: {
        normal: UnitVector.j,
        unit: {
            x: UnitVector.i,
            z: UnitVector.k
        }
    },
    yz: {
        normal: UnitVector.i,
        unit: {
            y: UnitVector.j,
            z: UnitVector.k
        }
    }
};
class Axis extends (0, _three.ArrowHelper) {
    constructor(direction, length){
        super(direction, new (0, _three.Vector3)(0, 0, 0), length);
    }
}
class Axes {
    constructor(lengthX, lengthY, lengthZ){
        this.lengthX = lengthX;
        this.lengthY = lengthY;
        this.lengthZ = lengthZ;
        this.x = new Axis(new (0, _three.Vector3)(1, 0, 0), this.lengthX * 1.1);
        this.y = new Axis(new (0, _three.Vector3)(0, 1, 0), this.lengthY * 1.1);
        this.z = new Axis(new (0, _three.Vector3)(0, 0, 1), this.lengthZ * 1.1);
        this.setGrids();
    }
    setGrids() {
        this.gridXZ = new (0, _three.GridHelper)(Math.max(this.lengthX, this.lengthZ));
        this.gridXZ.position.setX(this.lengthX / 2);
        this.gridXZ.position.setZ(this.lengthZ / 2);
        this.gridXY = new (0, _three.GridHelper)(Math.max(this.lengthX, this.lengthY));
        this.gridXY.position.setX(this.lengthX / 2);
        this.gridXY.position.setY(this.lengthY / 2);
        this.gridXY.rotateOnAxis(new (0, _three.Vector3)(1, 0, 0), Math.PI / 2);
        this.gridYZ = new (0, _three.GridHelper)(Math.max(this.lengthY, this.lengthZ));
        this.gridYZ.position.setY(this.lengthY / 2);
        this.gridYZ.position.setZ(this.lengthZ / 2);
        this.gridYZ.rotateOnAxis(new (0, _three.Vector3)(0, 0, 1), Math.PI / 2);
    }
}

},{"three":"ktPTu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6C1am":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getRandomPoints", ()=>getRandomPoints);
var _three = require("three");
const getRandomPoints = (n = 100, scale = 10)=>{
    const points = [];
    for(let index = 0; index < n; index++){
        const x = Math.random() * scale;
        const y = Math.random() * scale;
        const z = Math.random() * scale;
        points.push(new (0, _three.Vector3)(x, y, z));
    }
    return points;
};

},{"three":"ktPTu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dyAII":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Label", ()=>Label);
var _troikaThreeText = require("troika-three-text");
class Label extends (0, _troikaThreeText.Text) {
    constructor(position, params){
        super();
        this.text = params.text;
        this.fontSize = params.fontSize || 1;
        this.position.x = position.x;
        this.position.y = position.y;
        this.position.z = position.z;
        this.anchorX = params.anchorX || "center";
        this.anchorY = params.anchorY || "middle";
        this.color = params.color || 0x000000;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","troika-three-text":"7YS8r"}],"83AEn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "VectorPlot", ()=>VectorPlot);
var _three = require("three");
var _axes = require("../axes");
var _label = require("../label");
var _plot = require("../plot");
var _vectorplotConfig = require("./vectorplot.config");
class VectorPlot extends (0, _plot.Plot) {
    constructor(origin, target, config){
        super();
        this.origin = origin;
        this.target = target;
        this.config = new (0, _vectorplotConfig.VectorPlotConfigurationParams)(config);
        this.drawables.push(this.createVector(origin, target));
        for(const p in 0, _axes.PlaneAxes){
            const plane = p;
            const conf = this.config[plane];
            if (conf?.projection) {
                const projection = this.createProjection(plane, conf.projection.line);
                if (conf.projection.label) this.writables.push(this.createLineLabel(projection, conf.projection.label));
                this.drawables.push(projection);
            }
            if (conf?.component) {
                const component = this.createComponent(plane, conf.component.line);
                if (conf.component.label) this.writables.push(this.createLineLabel(component, conf.component.label));
                this.drawables.push(component);
            }
            if (conf?.projectionAngle) {
                const projectionAngle = this.createAngleToProjection(plane, conf.projectionAngle.line);
                if (conf.projectionAngle.label) this.writables.push(this.createLineLabel(projectionAngle, conf.projectionAngle.label));
                this.drawables.push(projectionAngle);
            }
        }
        if (this.config.angle) this.drawables.push(this.createAngleToTarget("y"));
    }
    createVector(origin, target) {
        const length = Math.abs(origin.distanceTo(target));
        return new (0, _three.ArrowHelper)(target.clone().normalize(), origin, length, this.config.color, length * 0.2, length * 0.1);
    }
    createAngleToProjection(planeIdx, config) {
        const plane = (0, _axes.PlaneAxes)[planeIdx];
        const planeNormal = plane.normal;
        const projectedVector = this.target.clone().projectOnPlane(planeNormal);
        const radius = projectedVector.distanceTo(this.origin) * 0.5;
        let initialRotation = 0;
        let angleToProjection = projectedVector.angleTo((0, _axes.UnitVector).i);
        if (planeIdx === "xz") {
            initialRotation = -Math.PI / 2;
            angleToProjection = projectedVector.angleTo((0, _axes.UnitVector).k);
        }
        if (planeIdx === "yz") {
            initialRotation = Math.PI / 2;
            angleToProjection = projectedVector.angleTo((0, _axes.UnitVector).j);
        }
        const curve = new (0, _three.EllipseCurve)(this.origin.x, this.origin.y, radius, radius, 0, angleToProjection, false, initialRotation);
        const { type: linetype, style: linestyle } = config;
        const LineMaterialType = linetype === "dashed" ? (0, _three.LineDashedMaterial) : (0, _three.LineBasicMaterial);
        const material = new LineMaterialType(linestyle);
        const geometry = new (0, _three.BufferGeometry)().setFromPoints(curve.getPoints(50));
        const rotation = new (0, _three.Quaternion)().setFromUnitVectors((0, _axes.UnitVector).k, plane.normal);
        geometry.applyQuaternion(rotation);
        return new (0, _three.Line)(geometry, material);
    }
    createAngleToTarget(axis) {
        const radius = this.target.clone().distanceTo(this.origin);
        const projectedVector = this.target.clone().projectOnPlane((0, _axes.UnitVector).j);
        const curve = new (0, _three.EllipseCurve)(this.origin.x, this.origin.y, radius, radius, 0, this.target.angleTo(projectedVector), false, 0);
        const material = new (0, _three.LineBasicMaterial)(this.config.angle);
        const geometry = new (0, _three.BufferGeometry)().setFromPoints(curve.getPoints(50));
        geometry.applyQuaternion(new (0, _three.Quaternion)().setFromAxisAngle((0, _axes.UnitVector).j, -(0, _axes.UnitVector).i.angleTo(projectedVector)));
        return new (0, _three.Line)(geometry, material);
    }
    createProjection(plane, config) {
        const { type: linetype, style: linestyle } = config;
        const LineMaterialType = linetype === "dashed" ? (0, _three.LineDashedMaterial) : (0, _three.LineBasicMaterial);
        const lineMaterial = new LineMaterialType(linestyle);
        const planeNormal = (0, _axes.PlaneAxes)[plane].normal;
        const projectedVector = this.target.clone().projectOnPlane(planeNormal);
        const projectionGeometry = new (0, _three.BufferGeometry)().setFromPoints([
            projectedVector,
            this.origin
        ]);
        return new (0, _three.Line)(projectionGeometry, lineMaterial).computeLineDistances();
    }
    createLineLabel(projection, config) {
        projection.geometry.computeBoundingBox();
        const bbox = projection.geometry.boundingBox;
        return new (0, _label.Label)(bbox.max, {
            ...config
        });
    }
    createComponent(plane, config) {
        const { type: linetype, style: linestyle } = config;
        const LineMaterialType = linetype === "dashed" ? (0, _three.LineDashedMaterial) : (0, _three.LineBasicMaterial);
        const lineMaterial = new LineMaterialType(linestyle);
        const planeNormal = (0, _axes.PlaneAxes)[plane].normal;
        const projectedVector = this.target.clone().projectOnPlane(planeNormal);
        const connectionGeometry = new (0, _three.BufferGeometry)().setFromPoints([
            projectedVector,
            this.target
        ]);
        return new (0, _three.Line)(connectionGeometry, lineMaterial).computeLineDistances();
    }
}

},{"three":"ktPTu","../axes":"2EXQV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../plot":"hsxxN","./vectorplot.config":"2jQnK","../label":"dyAII"}],"hsxxN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Plot", ()=>Plot);
class Plot {
    getDrawables() {
        return this.drawables;
    }
    getWritables() {
        return this.writables;
    }
    constructor(){
        this.drawables = [];
        this.writables = [];
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2jQnK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultSecondaryLine", ()=>defaultSecondaryLine);
parcelHelpers.export(exports, "VectorPlotConfigurationParams", ()=>VectorPlotConfigurationParams);
parcelHelpers.export(exports, "VectorPlotPlaneConfigParams", ()=>VectorPlotPlaneConfigParams);
parcelHelpers.export(exports, "LineConfigParams", ()=>LineConfigParams);
var _baseConfig = require("./base.config");
const defaultSecondaryLine = {
    line: {
        type: "dashed",
        style: {
            color: 0x000000,
            linewidth: 1,
            scale: 1,
            dashSize: 0.25,
            gapSize: 0.1
        }
    }
};
class VectorPlotConfigurationParams extends (0, _baseConfig.ConfigParams) {
    constructor(config){
        super();
        const { angle, color, xy, xz, yz } = config || {};
        this.color = color || 0x000000;
        if (angle) this.angle = this.valueOrDefault(angle, {
            color: 0x000000
        });
        if (xy) this.xy = new VectorPlotPlaneConfigParams(xy);
        if (xz) this.xz = new VectorPlotPlaneConfigParams(xz);
        if (yz) this.yz = new VectorPlotPlaneConfigParams(yz);
    }
}
class VectorPlotPlaneConfigParams extends (0, _baseConfig.ConfigParams) {
    constructor(plane){
        super();
        plane = this.valueOrDefault(plane, {
            projection: true,
            component: true,
            projectionAngle: true
        });
        const { component, projection, projectionAngle } = plane;
        if (projection) this.projection = new LineConfigParams(this.valueOrDefault(projection, defaultSecondaryLine));
        if (component) this.component = new LineConfigParams(this.valueOrDefault(component, defaultSecondaryLine));
        if (projectionAngle) this.projectionAngle = new LineConfigParams(this.valueOrDefault(projectionAngle, defaultSecondaryLine));
    }
}
class LineConfigParams extends (0, _baseConfig.ConfigParams) {
    constructor({ line, label }){
        super();
        this.line = line || defaultSecondaryLine.line;
        this.label = label;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./base.config":"aklxY"}],"aklxY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ConfigParams", ()=>ConfigParams);
class ConfigParams {
    valueOrDefault(value, defaultValue) {
        return value === true ? defaultValue : value;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kKQFI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ScatterPlot", ()=>ScatterPlot);
var _three = require("three");
var _plot = require("../plot");
class ScatterPlot extends (0, _plot.Plot) {
    constructor(points, pointRadius = 0.2){
        super();
        this.drawables = points.map((v)=>{
            const geometry = new (0, _three.SphereGeometry)(pointRadius);
            const material = new (0, _three.MeshBasicMaterial)({
                color: 0x00ff00
            });
            const obj = new (0, _three.Mesh)(geometry, material);
            obj.position.set(v.x, v.y, v.z);
            return obj;
        });
    }
}

},{"three":"ktPTu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../plot":"hsxxN"}],"8wG4Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Greek", ()=>Greek);
class Greek {
    static #_ = this.uppercaseHeta = "\u0370";
    static #_1 = this.lowercaseHeta = "\u0371";
    static #_2 = this.uppercaseArchaicSampi = "\u0372";
    static #_3 = this.lowercaseArchaicSampi = "\u0373";
    static #_4 = this.numeralSign = "\u0374";
    static #_5 = this.lowerNumeralSign = "\u0375";
    static #_6 = this.uppercasePamphylianDigamma = "\u0376";
    static #_7 = this.lowercasePamphylianDigamma = "\u0377";
    static #_8 = this.ypogegrammeni = "\u037A";
    static #_9 = this.smallReversedLunateSigmaSymbol = "\u037B";
    static #_10 = this.smallDottedLunateSigmaSymbol = "\u037C";
    static #_11 = this.smallReversedDottedLunateSigmaSymbol = "\u037D";
    static #_12 = this.questionMark = "\u037E";
    static #_13 = this.uppercaseYot = "\u037F";
    static #_14 = this.acuteaccent = "\u0384";
    static #_15 = this.diaeresiswithacuteaccent = "\u0385";
    static #_16 = this.uppercaseAwithacuteaccent = "\u0386";
    static #_17 = this.anoTeleia = "\u0387";
    static #_18 = this.uppercaseEpsilonwithacuteaccent = "\u0388";
    static #_19 = this.uppercaseEtawithacuteaccent = "\u0389";
    static #_20 = this.uppercaseIotawithacuteaccent = "\u038A";
    static #_21 = this.uppercaseOmicronwithacuteaccent = "\u038C";
    static #_22 = this.uppercaseUpsilonwithacuteaccent = "\u038E";
    static #_23 = this.uppercaseOmegawithacuteaccent = "\u038F";
    static #_24 = this.lowercaseIotawithdiaeresisandacuteaccent = "\u0390";
    static #_25 = this.uppercaseAlpha = "\u0391";
    static #_26 = this.uppercaseBeta = "\u0392";
    static #_27 = this.uppercaseGamma = "\u0393";
    static #_28 = this.uppercaseDelta = "\u0394";
    static #_29 = this.uppercaseEpsilon = "\u0395";
    static #_30 = this.uppercaseZeta = "\u0396";
    static #_31 = this.uppercaseEta = "\u0397";
    static #_32 = this.uppercaseTheta = "\u0398";
    static #_33 = this.uppercaseIota = "\u0399";
    static #_34 = this.uppercaseKappa = "\u039A";
    static #_35 = this.uppercaseLambda = "\u039B";
    static #_36 = this.uppercaseMu = "\u039C";
    static #_37 = this.uppercaseNu = "\u039D";
    static #_38 = this.uppercaseXi = "\u039E";
    static #_39 = this.uppercaseOmicron = "\u039F";
    static #_40 = this.uppercasePi = "\u03A0";
    static #_41 = this.uppercaseRho = "\u03A1";
    static #_42 = this.uppercaseSigma = "\u03A3";
    static #_43 = this.uppercaseTau = "\u03A4";
    static #_44 = this.uppercaseUpsilon = "\u03A5";
    static #_45 = this.uppercasePhi = "\u03A6";
    static #_46 = this.uppercaseChi = "\u03A7";
    static #_47 = this.uppercasePsi = "\u03A8";
    static #_48 = this.uppercaseOmega = "\u03A9";
    static #_49 = this.uppercaseIotawithdiaeresis = "\u03AA";
    static #_50 = this.uppercaseUpsilonwithdiaeresis = "\u03AB";
    static #_51 = this.lowercaseAlphawithacuteaccent = "\u03AC";
    static #_52 = this.lowercaseEpsilonwithacuteaccent = "\u03AD";
    static #_53 = this.lowercaseEtawithacuteaccent = "\u03AE";
    static #_54 = this.lowercaseIotawithacuteaccent = "\u03AF";
    static #_55 = this.lowercaseUpsilonwithdiaeresisandacuteaccent = "\u03B0";
    static #_56 = this.lowercaseAlpha = "\u03B1";
    static #_57 = this.lowercaseBeta = "\u03B2";
    static #_58 = this.lowercaseGamma = "\u03B3";
    static #_59 = this.lowercaseDelta = "\u03B4";
    static #_60 = this.lowercaseEpsilon = "\u03B5";
    static #_61 = this.lowercaseZeta = "\u03B6";
    static #_62 = this.lowercaseEta = "\u03B7";
    static #_63 = this.lowercaseTheta = "\u03B8";
    static #_64 = this.lowercaseIota = "\u03B9";
    static #_65 = this.lowercaseKappa = "\u03BA";
    static #_66 = this.lowercaseLambda = "\u03BB";
    static #_67 = this.lowercaseMu = "\u03BC";
    static #_68 = this.lowercaseNu = "\u03BD";
    static #_69 = this.lowercaseXi = "\u03BE";
    static #_70 = this.lowercaseOmicron = "\u03BF";
    static #_71 = this.lowercasePi = "\u03C0";
    static #_72 = this.lowercaseRho = "\u03C1";
    static #_73 = this.lowercaseFinalSigma = "\u03C2";
    static #_74 = this.lowercaseSigma = "\u03C3";
    static #_75 = this.lowercaseTau = "\u03C4";
    static #_76 = this.lowercaseUpsilon = "\u03C5";
    static #_77 = this.lowercasePhi = "\u03C6";
    static #_78 = this.lowercaseChi = "\u03C7";
    static #_79 = this.lowercasePsi = "\u03C8";
    static #_80 = this.lowercaseOmega = "\u03C9";
    static #_81 = this.lowercaseIotawithdiaeresis = "\u03CA";
    static #_82 = this.lowercaseUpsilonwithdiaeresis = "\u03CB";
    static #_83 = this.lowercaseOmicronwithacuteaccent = "\u03CC";
    static #_84 = this.lowercaseUpsilonwithacuteaccent = "\u03CD";
    static #_85 = this.lowercaseOmegawithacuteaccent = "\u03CE";
    static #_86 = this.uppercaseKaiSymbol = "\u03CF";
    static #_87 = this.betaSymbol = "\u03D0";
    static #_88 = this.thetaSymbol = "\u03D1";
    static #_89 = this.upsilonwithhookSymbol = "\u03D2";
    static #_90 = this.upsilonwithacuteandhookSymbol = "\u03D3";
    static #_91 = this.upsilonwithdiaeresisandhookSymbol = "\u03D4";
    static #_92 = this.phiSymbol = "\u03D5";
    static #_93 = this.piSymbol = "\u03D6";
    static #_94 = this.kaiSymbol = "\u03D7";
    static #_95 = this.letterQoppa = "\u03D8";
    static #_96 = this.lowercaseQoppa = "\u03D9";
    static #_97 = this.letterStigma = "\u03DA";
    static #_98 = this.lowercaseStigma = "\u03DB";
    static #_99 = this.letterDigamma = "\u03DC";
    static #_100 = this.lowercaseDigamma = "\u03DD";
    static #_101 = this.letterKoppa = "\u03DE";
    static #_102 = this.lowercaseKoppa = "\u03DF";
    static #_103 = this.letterSampi = "\u03E0";
    static #_104 = this.lowercaseSampi = "\u03E1";
    static #_105 = this.copticuppercaseShei = "\u03E2";
    static #_106 = this.copticlowercaseShei = "\u03E3";
    static #_107 = this.copticuppercaseFei = "\u03E4";
    static #_108 = this.copticlowercaseFei = "\u03E5";
    static #_109 = this.copticuppercaseKhei = "\u03E6";
    static #_110 = this.copticlowercaseKhei = "\u03E7";
    static #_111 = this.copticuppercaseHori = "\u03E8";
    static #_112 = this.copticlowercaseHori = "\u03E9";
    static #_113 = this.copticuppercaseGangia = "\u03EA";
    static #_114 = this.copticlowercaseGangia = "\u03EB";
    static #_115 = this.copticuppercaseShima = "\u03EC";
    static #_116 = this.copticlowercaseShima = "\u03ED";
    static #_117 = this.copticuppercaseDei = "\u03EE";
    static #_118 = this.copticlowercaseDei = "\u03EF";
    static #_119 = this.kappaSymbol = "\u03F0";
    static #_120 = this.rhoSymbol = "\u03F1";
    static #_121 = this.lunateSigmaSymbol = "\u03F2";
    static #_122 = this.letterYot = "\u03F3";
    static #_123 = this.uppercaseThetaSymbol = "\u03F4";
    static #_124 = this.lunateEpsilonSymbol = "\u03F5";
    static #_125 = this.reversedLunateEpsilonSymbol = "\u03F6";
    static #_126 = this.uppercaseSho = "\u03F7";
    static #_127 = this.lowercaseSho = "\u03F8";
    static #_128 = this.uppercaseLunateSigmaSymbol = "\u03F9";
    static #_129 = this.uppercaseSan = "\u03FA";
    static #_130 = this.lowercaseSan = "\u03FB";
    static #_131 = this.rhowithstrokeSymbol = "\u03FC";
    static #_132 = this.uppercaseReversedLunateSigmaSymbol = "\u03FD";
    static #_133 = this.uppercaseDottedLunateSigmaSymbol = "\u03FE";
    static #_134 = this.uppercaseReversedDottedLunateSigmaSymbol = "\u03FF";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["gBWlm","h7u1C"], "h7u1C", "parcelRequire9513")

//# sourceMappingURL=index.4bf444f7.js.map
