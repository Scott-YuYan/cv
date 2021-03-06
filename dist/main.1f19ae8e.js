// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"main.js":[function(require,module,exports) {
var demo = document.querySelector("#demo");
var bodyStyle = document.querySelector("#bodyStyle");
var message = "\n/*\u4F60\u597D\uFF0C\u6211\u662F\u4E00\u540D\u524D\u7AEF\u65B0\u4EBA\n\u4E0B\u9762\u6211\u8981\u5F00\u59CB\u5199CSS\u4EE3\u7801\u4E86*/\n * {\n    margin:0;\n    padding:0;\n }\n \n * {\n     box-sizing:border-box;\n }\n\n *::after {\n    box-sizing:border-box;\n }\n\n *::before {\n    box-sizing:border-box;\n }\n\n #demo {\n    word-break: break-all;\n }\n\n #box{\n    width: 200px;\n    height:200px;\n    position:fixed;\n    margin:auto;\nleft:0;\nright:0;\ntop:0;\nbottom:0;\n    border:1px solid red;\n    border-radius:50%;\n    box-shadow:0 0 3px rgba(0,0,0,0.5);\n    border:none;\n    // \u8BBE\u7F6E\u80CC\u666F\u6E10\u53D8\n    background: rgb(255,255,255);\n    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);\n}\n/* CSS\u4F2A\u5143\u7D20*/\n #box::after{\n     content:'';\n     display:block;\n     position:absolute;\n     background:#fff;\n     width:50%;\n     height:50%;\n     top:0;\n     transform: translate(50%,0%);\n     border-radius:50%;\n     background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);\n }\n\n #box::before{\n    content:'';\n    display:block;\n    position:absolute;\n    width:50%;\n    height:50%;\n    background:#000;\n    transform: translate(50%,0%);\n    bottom:0;\n    border-radius:50%;\n    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);\n}\n\n@media (max-width:500px){\n       \n}\n";
var string = '';
var n = 0;

function oneTime() {
  if (n < message.length) {
    if (message[n] === '\n') {
      string += '<br>';
    } else if (message[n] === ' ') {
      string += '&nbsp;';
    } else {
      string += message[n];
    }

    demo.innerHTML = string;
    window.scrollTo(0, 9999);
    bodyStyle.innerHTML = message.substring(0, n);
    setTimeout(function () {
      n += 1;
      oneTime();
    }, 0);
  }
} // oneTime();


function caculateString(s) {
  var result = new Map();
  var arr = s.split('');
  arr.forEach(function (element) {
    if (result.get(element) === undefined) {
      result.set(element, 1);
    } else {
      var times = result.get(element) + 1;
      result.set(element, times);
    }
  });
  result.forEach(function (key, value) {
    console.log(key + '=' + value);
  });
} // caculateString.call(null,'hi im frank fang')


function fastSort(array) {
  for (var index = 0; index < array.length - 1; index++) {
    var minIndex = findMinIndex(array.slice(index)) + index;
    swap(array, index, minIndex);
  }

  return array;
}

function swap(array, beforeIndex, afterIndex) {
  var temp = array[beforeIndex];
  array[beforeIndex] = array[afterIndex];
  array[afterIndex] = temp;
}

function findMinIndex(array) {
  var minIndex = 0;

  for (var index = 1; index < array.length; index++) {
    var element = array[index];

    if (array[minIndex] > array[index]) {
      minIndex = index;
    }
  }

  return minIndex;
}

function quickSort(array) {
  if (array.length === 1 || array.length === 0) {
    return array;
  }

  var pivoteIndex = Math.floor(array.length / 2);
  var pivote = array.splice(pivoteIndex, 1)[0];
  var leftArr = [];
  var rightArr = [];

  for (var index = 0; index < array.length; index++) {
    if (array[index] < pivote) {
      leftArr.push(array[index]);
    } else {
      rightArr.push(array[index]);
    }
  }

  return quickSort(leftArr).concat([pivote], quickSort(rightArr));
}

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  var leftArr = array.slice(0, Math.floor(array.length / 2));
  var rightArr = array.slice(Math.floor(array.length / 2));
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  if (leftArr.length === 0) {
    return rightArr;
  }

  if (rightArr.length === 0) {
    return leftArr;
  }

  return leftArr[0] > rightArr[0] ? [rightArr[0]].concat(merge(leftArr, rightArr.slice(1))) : [leftArr[0]].concat(merge(leftArr.slice(1), rightArr));
}

function caculateSort(array) {
  var hashTable = {},
      max = 0,
      min = 0,
      result = [];

  for (var index = 0; index < array.length; index++) {
    if (!(array[index] in hashTable)) {
      hashTable[array[index]] = 1;
    } else {
      hashTable[array[index]] += 1;
    }

    if (array[index] > max) {
      max = array[index];
    }

    if (array[index] < min) {
      min = array[index];
    }
  }

  for (var _index = min; _index <= max; _index++) {
    if (_index in hashTable) {
      for (var j = 0; j < hashTable[j]; j++) {
        var element = array[j];
      }

      result.push(_index);
    }
  }

  return result;
}

var array = [-10, 2, 4, -1, -3, 8, -9];
console.log(caculateSort(array));
},{}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61245" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map