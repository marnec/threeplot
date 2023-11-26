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
parcelHelpers.export(exports, "getRandomPoints", ()=>(0, _data.getRandomPoints));
var _frame = require("./frame");
var _scatterplot = require("./scatterplot");
var _vectorplot = require("./vectorplot");
var _data = require("./data");

},{"./frame":"bCL66","./scatterplot":"cqLjZ","./vectorplot":"hW4kC","./data":"6C1am","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bCL66":[function(require,module,exports) {
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
        this.camera.position.set(this.size * 2, this.size * 2, this.size * 2);
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
    addPlot(plot) {
        this.scene.add(...plot.getFrameable());
        this.update();
    }
}

},{"three":"ktPTu","three/examples/jsm/controls/OrbitControls":"7mqRv","./axes":"2EXQV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2EXQV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UnitVector", ()=>UnitVector);
parcelHelpers.export(exports, "AxesPlane", ()=>AxesPlane);
parcelHelpers.export(exports, "Axes", ()=>Axes);
var _three = require("three");
const UnitVector = {
    i: new (0, _three.Vector3)(1, 0, 0),
    j: new (0, _three.Vector3)(0, 1, 0),
    k: new (0, _three.Vector3)(0, 0, 1)
};
const AxesPlane = {
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

},{"three":"ktPTu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cqLjZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ScatterPlot", ()=>ScatterPlot);
var _three = require("three");
var _plot = require("./plot");
class ScatterPlot extends (0, _plot.Plot) {
    constructor(points, pointRadius = 0.2){
        super();
        this.points = points.map((v)=>{
            const geometry = new (0, _three.SphereGeometry)(pointRadius);
            const material = new (0, _three.MeshBasicMaterial)({
                color: 0x00ff00
            });
            const obj = new (0, _three.Mesh)(geometry, material);
            obj.position.set(v.x, v.y, v.z);
            return obj;
        });
    }
    getFrameable() {
        return this.points;
    }
}

},{"three":"ktPTu","./plot":"hsxxN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hsxxN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Plot", ()=>Plot);
class Plot {
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hW4kC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "VectorPlot", ()=>VectorPlot);
var _three = require("three");
var _plot = require("./plot");
var _axes = require("./axes");
class VectorPlot extends (0, _plot.Plot) {
    constructor(origin, target){
        super();
        this.origin = origin;
        this.target = target;
        this.drawables = [];
        this.drawables.push(this.createVector(origin, target));
        this.drawables.push(...this.createProjection("xy"));
        this.drawables.push(...this.createProjection("yz"));
        this.drawables.push(...this.createProjection("xz"));
        this.drawables.push(this.createAngleToProjection("xz"));
        this.drawables.push(this.createAngleToProjection("xy"));
        this.drawables.push(this.createAngleToProjection("yz"));
        this.drawables.push(this.createAngleToTarget("y"));
    }
    createVector(origin, target) {
        const length = Math.abs(origin.distanceTo(target));
        return new (0, _three.ArrowHelper)(target.clone().normalize(), origin, length, 0x000000, length * 0.2, length * 0.1);
    }
    createAngleToProjection(planeIdx) {
        const plane = (0, _axes.AxesPlane)[planeIdx];
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
        const material = new (0, _three.LineBasicMaterial)({
            color: 0x000000
        });
        const geometry = new (0, _three.BufferGeometry)().setFromPoints(curve.getPoints(50));
        const rotation = new (0, _three.Quaternion)().setFromUnitVectors((0, _axes.UnitVector).k, plane.normal);
        geometry.applyQuaternion(rotation);
        return new (0, _three.Line)(geometry, material);
    }
    createAngleToTarget(axis) {
        const radius = this.target.clone().distanceTo(this.origin);
        const projectedVector = this.target.clone().projectOnPlane((0, _axes.UnitVector).j);
        const curve = new (0, _three.EllipseCurve)(this.origin.x, this.origin.y, radius, radius, 0, this.target.angleTo(projectedVector), false, 0);
        const material = new (0, _three.LineBasicMaterial)({
            color: 0x000000
        });
        const geometry = new (0, _three.BufferGeometry)().setFromPoints(curve.getPoints(50));
        geometry.applyQuaternion(new (0, _three.Quaternion)().setFromAxisAngle((0, _axes.UnitVector).j, -(0, _axes.UnitVector).i.angleTo(projectedVector)));
        return new (0, _three.Line)(geometry, material);
    }
    createProjection(plane) {
        const lineMaterial = new (0, _three.LineDashedMaterial)({
            color: 0x000000,
            linewidth: 1,
            scale: 1,
            dashSize: 0.25,
            gapSize: 0.1
        });
        const planeNormal = (0, _axes.AxesPlane)[plane].normal;
        const projectedVector = this.target.clone().projectOnPlane(planeNormal);
        const projectionGeometry = new (0, _three.BufferGeometry)().setFromPoints([
            projectedVector,
            this.origin
        ]);
        const connectionGeometry = new (0, _three.BufferGeometry)().setFromPoints([
            projectedVector,
            this.target
        ]);
        return [
            new (0, _three.Line)(projectionGeometry, lineMaterial).computeLineDistances(),
            new (0, _three.Line)(connectionGeometry, lineMaterial).computeLineDistances()
        ];
    }
    getFrameable() {
        return this.drawables;
    }
}

},{"three":"ktPTu","./plot":"hsxxN","./axes":"2EXQV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6C1am":[function(require,module,exports) {
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

},{"three":"ktPTu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["gBWlm","h7u1C"], "h7u1C", "parcelRequire9513")

//# sourceMappingURL=index.4bf444f7.js.map
