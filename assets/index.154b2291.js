var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
const p$5 = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link2 of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link2);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link2) {
    if (link2.ep)
      return;
    link2.ep = true;
    const fetchOpts = getFetchOpts(link2);
    fetch(link2.href, fetchOpts);
  }
};
p$5();
function getAugmentedNamespace(n2) {
  if (n2.__esModule)
    return n2;
  var a2 = Object.defineProperty({}, "__esModule", { value: true });
  Object.keys(n2).forEach(function(k2) {
    var d2 = Object.getOwnPropertyDescriptor(n2, k2);
    Object.defineProperty(a2, k2, d2.get ? d2 : {
      enumerable: true,
      get: function() {
        return n2[k2];
      }
    });
  });
  return a2;
}
var react = { exports: {} };
var react_production_min = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l$3 = Symbol.for("react.element"), n$4 = Symbol.for("react.portal"), p$4 = Symbol.for("react.fragment"), q$4 = Symbol.for("react.strict_mode"), r$1 = Symbol.for("react.profiler"), t$4 = Symbol.for("react.provider"), u$2 = Symbol.for("react.context"), v$3 = Symbol.for("react.forward_ref"), w$2 = Symbol.for("react.suspense"), x$2 = Symbol.for("react.memo"), y$1 = Symbol.for("react.lazy"), z$3 = Symbol.iterator;
function A$3(a2) {
  if (a2 === null || typeof a2 !== "object")
    return null;
  a2 = z$3 && a2[z$3] || a2["@@iterator"];
  return typeof a2 === "function" ? a2 : null;
}
var B$2 = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, C$1 = Object.assign, D$1 = {};
function E$2(a2, b2, e2) {
  this.props = a2;
  this.context = b2;
  this.refs = D$1;
  this.updater = e2 || B$2;
}
E$2.prototype.isReactComponent = {};
E$2.prototype.setState = function(a2, b2) {
  if (typeof a2 !== "object" && typeof a2 !== "function" && a2 != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, a2, b2, "setState");
};
E$2.prototype.forceUpdate = function(a2) {
  this.updater.enqueueForceUpdate(this, a2, "forceUpdate");
};
function F$1() {
}
F$1.prototype = E$2.prototype;
function G$2(a2, b2, e2) {
  this.props = a2;
  this.context = b2;
  this.refs = D$1;
  this.updater = e2 || B$2;
}
var H$2 = G$2.prototype = new F$1();
H$2.constructor = G$2;
C$1(H$2, E$2.prototype);
H$2.isPureReactComponent = true;
var I$2 = Array.isArray, J$1 = Object.prototype.hasOwnProperty, K$2 = { current: null }, L$2 = { key: true, ref: true, __self: true, __source: true };
function M$2(a2, b2, e2) {
  var d2, c2 = {}, k2 = null, h2 = null;
  if (b2 != null)
    for (d2 in b2.ref !== void 0 && (h2 = b2.ref), b2.key !== void 0 && (k2 = "" + b2.key), b2)
      J$1.call(b2, d2) && !L$2.hasOwnProperty(d2) && (c2[d2] = b2[d2]);
  var g2 = arguments.length - 2;
  if (g2 === 1)
    c2.children = e2;
  else if (1 < g2) {
    for (var f2 = Array(g2), m2 = 0; m2 < g2; m2++)
      f2[m2] = arguments[m2 + 2];
    c2.children = f2;
  }
  if (a2 && a2.defaultProps)
    for (d2 in g2 = a2.defaultProps, g2)
      c2[d2] === void 0 && (c2[d2] = g2[d2]);
  return { $$typeof: l$3, type: a2, key: k2, ref: h2, props: c2, _owner: K$2.current };
}
function N$2(a2, b2) {
  return { $$typeof: l$3, type: a2.type, key: b2, ref: a2.ref, props: a2.props, _owner: a2._owner };
}
function O$2(a2) {
  return typeof a2 === "object" && a2 !== null && a2.$$typeof === l$3;
}
function escape(a2) {
  var b2 = { "=": "=0", ":": "=2" };
  return "$" + a2.replace(/[=:]/g, function(a3) {
    return b2[a3];
  });
}
var P$2 = /\/+/g;
function Q$2(a2, b2) {
  return typeof a2 === "object" && a2 !== null && a2.key != null ? escape("" + a2.key) : b2.toString(36);
}
function R$1(a2, b2, e2, d2, c2) {
  var k2 = typeof a2;
  if (k2 === "undefined" || k2 === "boolean")
    a2 = null;
  var h2 = false;
  if (a2 === null)
    h2 = true;
  else
    switch (k2) {
      case "string":
      case "number":
        h2 = true;
        break;
      case "object":
        switch (a2.$$typeof) {
          case l$3:
          case n$4:
            h2 = true;
        }
    }
  if (h2)
    return h2 = a2, c2 = c2(h2), a2 = d2 === "" ? "." + Q$2(h2, 0) : d2, I$2(c2) ? (e2 = "", a2 != null && (e2 = a2.replace(P$2, "$&/") + "/"), R$1(c2, b2, e2, "", function(a3) {
      return a3;
    })) : c2 != null && (O$2(c2) && (c2 = N$2(c2, e2 + (!c2.key || h2 && h2.key === c2.key ? "" : ("" + c2.key).replace(P$2, "$&/") + "/") + a2)), b2.push(c2)), 1;
  h2 = 0;
  d2 = d2 === "" ? "." : d2 + ":";
  if (I$2(a2))
    for (var g2 = 0; g2 < a2.length; g2++) {
      k2 = a2[g2];
      var f2 = d2 + Q$2(k2, g2);
      h2 += R$1(k2, b2, e2, f2, c2);
    }
  else if (f2 = A$3(a2), typeof f2 === "function")
    for (a2 = f2.call(a2), g2 = 0; !(k2 = a2.next()).done; )
      k2 = k2.value, f2 = d2 + Q$2(k2, g2++), h2 += R$1(k2, b2, e2, f2, c2);
  else if (k2 === "object")
    throw b2 = String(a2), Error("Objects are not valid as a React child (found: " + (b2 === "[object Object]" ? "object with keys {" + Object.keys(a2).join(", ") + "}" : b2) + "). If you meant to render a collection of children, use an array instead.");
  return h2;
}
function S$3(a2, b2, e2) {
  if (a2 == null)
    return a2;
  var d2 = [], c2 = 0;
  R$1(a2, d2, "", "", function(a3) {
    return b2.call(e2, a3, c2++);
  });
  return d2;
}
function T$2(a2) {
  if (a2._status === -1) {
    var b2 = a2._result;
    b2 = b2();
    b2.then(function(b3) {
      if (a2._status === 0 || a2._status === -1)
        a2._status = 1, a2._result = b3;
    }, function(b3) {
      if (a2._status === 0 || a2._status === -1)
        a2._status = 2, a2._result = b3;
    });
    a2._status === -1 && (a2._status = 0, a2._result = b2);
  }
  if (a2._status === 1)
    return a2._result.default;
  throw a2._result;
}
var U$2 = { current: null }, V$2 = { transition: null }, W$2 = { ReactCurrentDispatcher: U$2, ReactCurrentBatchConfig: V$2, ReactCurrentOwner: K$2 };
react_production_min.Children = { map: S$3, forEach: function(a2, b2, e2) {
  S$3(a2, function() {
    b2.apply(this, arguments);
  }, e2);
}, count: function(a2) {
  var b2 = 0;
  S$3(a2, function() {
    b2++;
  });
  return b2;
}, toArray: function(a2) {
  return S$3(a2, function(a3) {
    return a3;
  }) || [];
}, only: function(a2) {
  if (!O$2(a2))
    throw Error("React.Children.only expected to receive a single React element child.");
  return a2;
} };
react_production_min.Component = E$2;
react_production_min.Fragment = p$4;
react_production_min.Profiler = r$1;
react_production_min.PureComponent = G$2;
react_production_min.StrictMode = q$4;
react_production_min.Suspense = w$2;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$2;
react_production_min.cloneElement = function(a2, b2, e2) {
  if (a2 === null || a2 === void 0)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a2 + ".");
  var d2 = C$1({}, a2.props), c2 = a2.key, k2 = a2.ref, h2 = a2._owner;
  if (b2 != null) {
    b2.ref !== void 0 && (k2 = b2.ref, h2 = K$2.current);
    b2.key !== void 0 && (c2 = "" + b2.key);
    if (a2.type && a2.type.defaultProps)
      var g2 = a2.type.defaultProps;
    for (f2 in b2)
      J$1.call(b2, f2) && !L$2.hasOwnProperty(f2) && (d2[f2] = b2[f2] === void 0 && g2 !== void 0 ? g2[f2] : b2[f2]);
  }
  var f2 = arguments.length - 2;
  if (f2 === 1)
    d2.children = e2;
  else if (1 < f2) {
    g2 = Array(f2);
    for (var m2 = 0; m2 < f2; m2++)
      g2[m2] = arguments[m2 + 2];
    d2.children = g2;
  }
  return { $$typeof: l$3, type: a2.type, key: c2, ref: k2, props: d2, _owner: h2 };
};
react_production_min.createContext = function(a2) {
  a2 = { $$typeof: u$2, _currentValue: a2, _currentValue2: a2, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
  a2.Provider = { $$typeof: t$4, _context: a2 };
  return a2.Consumer = a2;
};
react_production_min.createElement = M$2;
react_production_min.createFactory = function(a2) {
  var b2 = M$2.bind(null, a2);
  b2.type = a2;
  return b2;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a2) {
  return { $$typeof: v$3, render: a2 };
};
react_production_min.isValidElement = O$2;
react_production_min.lazy = function(a2) {
  return { $$typeof: y$1, _payload: { _status: -1, _result: a2 }, _init: T$2 };
};
react_production_min.memo = function(a2, b2) {
  return { $$typeof: x$2, type: a2, compare: b2 === void 0 ? null : b2 };
};
react_production_min.startTransition = function(a2) {
  var b2 = V$2.transition;
  V$2.transition = {};
  try {
    a2();
  } finally {
    V$2.transition = b2;
  }
};
react_production_min.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
react_production_min.useCallback = function(a2, b2) {
  return U$2.current.useCallback(a2, b2);
};
react_production_min.useContext = function(a2) {
  return U$2.current.useContext(a2);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useDeferredValue = function(a2) {
  return U$2.current.useDeferredValue(a2);
};
react_production_min.useEffect = function(a2, b2) {
  return U$2.current.useEffect(a2, b2);
};
react_production_min.useId = function() {
  return U$2.current.useId();
};
react_production_min.useImperativeHandle = function(a2, b2, e2) {
  return U$2.current.useImperativeHandle(a2, b2, e2);
};
react_production_min.useInsertionEffect = function(a2, b2) {
  return U$2.current.useInsertionEffect(a2, b2);
};
react_production_min.useLayoutEffect = function(a2, b2) {
  return U$2.current.useLayoutEffect(a2, b2);
};
react_production_min.useMemo = function(a2, b2) {
  return U$2.current.useMemo(a2, b2);
};
react_production_min.useReducer = function(a2, b2, e2) {
  return U$2.current.useReducer(a2, b2, e2);
};
react_production_min.useRef = function(a2) {
  return U$2.current.useRef(a2);
};
react_production_min.useState = function(a2) {
  return U$2.current.useState(a2);
};
react_production_min.useSyncExternalStore = function(a2, b2, e2) {
  return U$2.current.useSyncExternalStore(a2, b2, e2);
};
react_production_min.useTransition = function() {
  return U$2.current.useTransition();
};
react_production_min.version = "18.1.0";
{
  react.exports = react_production_min;
}
var React = react.exports;
var client = {};
var reactDom = { exports: {} };
var reactDom_production_min = {};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(exports) {
  function f2(a2, b2) {
    var c2 = a2.length;
    a2.push(b2);
    a:
      for (; 0 < c2; ) {
        var d2 = c2 - 1 >>> 1, e2 = a2[d2];
        if (0 < g2(e2, b2))
          a2[d2] = b2, a2[c2] = e2, c2 = d2;
        else
          break a;
      }
  }
  function h2(a2) {
    return a2.length === 0 ? null : a2[0];
  }
  function k2(a2) {
    if (a2.length === 0)
      return null;
    var b2 = a2[0], c2 = a2.pop();
    if (c2 !== b2) {
      a2[0] = c2;
      a:
        for (var d2 = 0, e2 = a2.length, w2 = e2 >>> 1; d2 < w2; ) {
          var m2 = 2 * (d2 + 1) - 1, C2 = a2[m2], n2 = m2 + 1, x2 = a2[n2];
          if (0 > g2(C2, c2))
            n2 < e2 && 0 > g2(x2, C2) ? (a2[d2] = x2, a2[n2] = c2, d2 = n2) : (a2[d2] = C2, a2[m2] = c2, d2 = m2);
          else if (n2 < e2 && 0 > g2(x2, c2))
            a2[d2] = x2, a2[n2] = c2, d2 = n2;
          else
            break a;
        }
    }
    return b2;
  }
  function g2(a2, b2) {
    var c2 = a2.sortIndex - b2.sortIndex;
    return c2 !== 0 ? c2 : a2.id - b2.id;
  }
  if (typeof performance === "object" && typeof performance.now === "function") {
    var l2 = performance;
    exports.unstable_now = function() {
      return l2.now();
    };
  } else {
    var p2 = Date, q2 = p2.now();
    exports.unstable_now = function() {
      return p2.now() - q2;
    };
  }
  var r2 = [], t2 = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = typeof setTimeout === "function" ? setTimeout : null, E2 = typeof clearTimeout === "function" ? clearTimeout : null, F2 = typeof setImmediate !== "undefined" ? setImmediate : null;
  typeof navigator !== "undefined" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function G2(a2) {
    for (var b2 = h2(t2); b2 !== null; ) {
      if (b2.callback === null)
        k2(t2);
      else if (b2.startTime <= a2)
        k2(t2), b2.sortIndex = b2.expirationTime, f2(r2, b2);
      else
        break;
      b2 = h2(t2);
    }
  }
  function H2(a2) {
    B2 = false;
    G2(a2);
    if (!A2)
      if (h2(r2) !== null)
        A2 = true, I2(J2);
      else {
        var b2 = h2(t2);
        b2 !== null && K2(H2, b2.startTime - a2);
      }
  }
  function J2(a2, b2) {
    A2 = false;
    B2 && (B2 = false, E2(L2), L2 = -1);
    z2 = true;
    var c2 = y2;
    try {
      G2(b2);
      for (v2 = h2(r2); v2 !== null && (!(v2.expirationTime > b2) || a2 && !M2()); ) {
        var d2 = v2.callback;
        if (typeof d2 === "function") {
          v2.callback = null;
          y2 = v2.priorityLevel;
          var e2 = d2(v2.expirationTime <= b2);
          b2 = exports.unstable_now();
          typeof e2 === "function" ? v2.callback = e2 : v2 === h2(r2) && k2(r2);
          G2(b2);
        } else
          k2(r2);
        v2 = h2(r2);
      }
      if (v2 !== null)
        var w2 = true;
      else {
        var m2 = h2(t2);
        m2 !== null && K2(H2, m2.startTime - b2);
        w2 = false;
      }
      return w2;
    } finally {
      v2 = null, y2 = c2, z2 = false;
    }
  }
  var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
  function M2() {
    return exports.unstable_now() - Q2 < P2 ? false : true;
  }
  function R2() {
    if (O2 !== null) {
      var a2 = exports.unstable_now();
      Q2 = a2;
      var b2 = true;
      try {
        b2 = O2(true, a2);
      } finally {
        b2 ? S2() : (N2 = false, O2 = null);
      }
    } else
      N2 = false;
  }
  var S2;
  if (typeof F2 === "function")
    S2 = function() {
      F2(R2);
    };
  else if (typeof MessageChannel !== "undefined") {
    var T2 = new MessageChannel(), U2 = T2.port2;
    T2.port1.onmessage = R2;
    S2 = function() {
      U2.postMessage(null);
    };
  } else
    S2 = function() {
      D2(R2, 0);
    };
  function I2(a2) {
    O2 = a2;
    N2 || (N2 = true, S2());
  }
  function K2(a2, b2) {
    L2 = D2(function() {
      a2(exports.unstable_now());
    }, b2);
  }
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a2) {
    a2.callback = null;
  };
  exports.unstable_continueExecution = function() {
    A2 || z2 || (A2 = true, I2(J2));
  };
  exports.unstable_forceFrameRate = function(a2) {
    0 > a2 || 125 < a2 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a2 ? Math.floor(1e3 / a2) : 5;
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return y2;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return h2(r2);
  };
  exports.unstable_next = function(a2) {
    switch (y2) {
      case 1:
      case 2:
      case 3:
        var b2 = 3;
        break;
      default:
        b2 = y2;
    }
    var c2 = y2;
    y2 = b2;
    try {
      return a2();
    } finally {
      y2 = c2;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = function() {
  };
  exports.unstable_runWithPriority = function(a2, b2) {
    switch (a2) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a2 = 3;
    }
    var c2 = y2;
    y2 = a2;
    try {
      return b2();
    } finally {
      y2 = c2;
    }
  };
  exports.unstable_scheduleCallback = function(a2, b2, c2) {
    var d2 = exports.unstable_now();
    typeof c2 === "object" && c2 !== null ? (c2 = c2.delay, c2 = typeof c2 === "number" && 0 < c2 ? d2 + c2 : d2) : c2 = d2;
    switch (a2) {
      case 1:
        var e2 = -1;
        break;
      case 2:
        e2 = 250;
        break;
      case 5:
        e2 = 1073741823;
        break;
      case 4:
        e2 = 1e4;
        break;
      default:
        e2 = 5e3;
    }
    e2 = c2 + e2;
    a2 = { id: u2++, callback: b2, priorityLevel: a2, startTime: c2, expirationTime: e2, sortIndex: -1 };
    c2 > d2 ? (a2.sortIndex = c2, f2(t2, a2), h2(r2) === null && a2 === h2(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c2 - d2))) : (a2.sortIndex = e2, f2(r2, a2), A2 || z2 || (A2 = true, I2(J2)));
    return a2;
  };
  exports.unstable_shouldYield = M2;
  exports.unstable_wrapCallback = function(a2) {
    var b2 = y2;
    return function() {
      var c2 = y2;
      y2 = b2;
      try {
        return a2.apply(this, arguments);
      } finally {
        y2 = c2;
      }
    };
  };
})(scheduler_production_min);
{
  scheduler.exports = scheduler_production_min;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa = react.exports, ba = scheduler.exports;
function p$3(a2) {
  for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a2, c2 = 1; c2 < arguments.length; c2++)
    b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
  return "Minified React error #" + a2 + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var da = /* @__PURE__ */ new Set(), ea = {};
function fa(a2, b2) {
  ha(a2, b2);
  ha(a2 + "Capture", b2);
}
function ha(a2, b2) {
  ea[a2] = b2;
  for (a2 = 0; a2 < b2.length; a2++)
    da.add(b2[a2]);
}
var ia = !(typeof window === "undefined" || typeof window.document === "undefined" || typeof window.document.createElement === "undefined"), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
function na(a2) {
  if (ja.call(ma, a2))
    return true;
  if (ja.call(la, a2))
    return false;
  if (ka.test(a2))
    return ma[a2] = true;
  la[a2] = true;
  return false;
}
function oa(a2, b2, c2, d2) {
  if (c2 !== null && c2.type === 0)
    return false;
  switch (typeof b2) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d2)
        return false;
      if (c2 !== null)
        return !c2.acceptsBooleans;
      a2 = a2.toLowerCase().slice(0, 5);
      return a2 !== "data-" && a2 !== "aria-";
    default:
      return false;
  }
}
function pa(a2, b2, c2, d2) {
  if (b2 === null || typeof b2 === "undefined" || oa(a2, b2, c2, d2))
    return true;
  if (d2)
    return false;
  if (c2 !== null)
    switch (c2.type) {
      case 3:
        return !b2;
      case 4:
        return b2 === false;
      case 5:
        return isNaN(b2);
      case 6:
        return isNaN(b2) || 1 > b2;
    }
  return false;
}
function t$3(a2, b2, c2, d2, e2, f2, g2) {
  this.acceptsBooleans = b2 === 2 || b2 === 3 || b2 === 4;
  this.attributeName = d2;
  this.attributeNamespace = e2;
  this.mustUseProperty = c2;
  this.propertyName = a2;
  this.type = b2;
  this.sanitizeURL = f2;
  this.removeEmptyString = g2;
}
var z$2 = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a2) {
  z$2[a2] = new t$3(a2, 0, false, a2, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a2) {
  var b2 = a2[0];
  z$2[b2] = new t$3(b2, 1, false, a2[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a2) {
  z$2[a2] = new t$3(a2, 2, false, a2.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a2) {
  z$2[a2] = new t$3(a2, 2, false, a2, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a2) {
  z$2[a2] = new t$3(a2, 3, false, a2.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a2) {
  z$2[a2] = new t$3(a2, 3, true, a2, null, false, false);
});
["capture", "download"].forEach(function(a2) {
  z$2[a2] = new t$3(a2, 4, false, a2, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a2) {
  z$2[a2] = new t$3(a2, 6, false, a2, null, false, false);
});
["rowSpan", "start"].forEach(function(a2) {
  z$2[a2] = new t$3(a2, 5, false, a2.toLowerCase(), null, false, false);
});
var qa = /[\-:]([a-z])/g;
function ra(a2) {
  return a2[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a2) {
  var b2 = a2.replace(qa, ra);
  z$2[b2] = new t$3(b2, 1, false, a2, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a2) {
  var b2 = a2.replace(qa, ra);
  z$2[b2] = new t$3(b2, 1, false, a2, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a2) {
  var b2 = a2.replace(qa, ra);
  z$2[b2] = new t$3(b2, 1, false, a2, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a2) {
  z$2[a2] = new t$3(a2, 1, false, a2.toLowerCase(), null, false, false);
});
z$2.xlinkHref = new t$3("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a2) {
  z$2[a2] = new t$3(a2, 1, false, a2.toLowerCase(), null, true, true);
});
function sa(a2, b2, c2, d2) {
  var e2 = z$2.hasOwnProperty(b2) ? z$2[b2] : null;
  if (e2 !== null ? e2.type !== 0 : d2 || !(2 < b2.length) || b2[0] !== "o" && b2[0] !== "O" || b2[1] !== "n" && b2[1] !== "N")
    pa(b2, c2, e2, d2) && (c2 = null), d2 || e2 === null ? na(b2) && (c2 === null ? a2.removeAttribute(b2) : a2.setAttribute(b2, "" + c2)) : e2.mustUseProperty ? a2[e2.propertyName] = c2 === null ? e2.type === 3 ? false : "" : c2 : (b2 = e2.attributeName, d2 = e2.attributeNamespace, c2 === null ? a2.removeAttribute(b2) : (e2 = e2.type, c2 = e2 === 3 || e2 === 4 && c2 === true ? "" : "" + c2, d2 ? a2.setAttributeNS(d2, b2, c2) : a2.setAttribute(b2, c2)));
}
var ta = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ua = Symbol.for("react.element"), va = Symbol.for("react.portal"), wa = Symbol.for("react.fragment"), xa = Symbol.for("react.strict_mode"), za = Symbol.for("react.profiler"), Aa = Symbol.for("react.provider"), Ba = Symbol.for("react.context"), Ca = Symbol.for("react.forward_ref"), Da = Symbol.for("react.suspense"), Ea = Symbol.for("react.suspense_list"), Fa = Symbol.for("react.memo"), Ga = Symbol.for("react.lazy");
var Ha = Symbol.for("react.offscreen");
var Ia = Symbol.iterator;
function Ja(a2) {
  if (a2 === null || typeof a2 !== "object")
    return null;
  a2 = Ia && a2[Ia] || a2["@@iterator"];
  return typeof a2 === "function" ? a2 : null;
}
var A$2 = Object.assign, Ka;
function La(a2) {
  if (Ka === void 0)
    try {
      throw Error();
    } catch (c2) {
      var b2 = c2.stack.trim().match(/\n( *(at )?)/);
      Ka = b2 && b2[1] || "";
    }
  return "\n" + Ka + a2;
}
var Ma = false;
function Na(a2, b2) {
  if (!a2 || Ma)
    return "";
  Ma = true;
  var c2 = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b2)
      if (b2 = function() {
        throw Error();
      }, Object.defineProperty(b2.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect === "object" && Reflect.construct) {
        try {
          Reflect.construct(b2, []);
        } catch (l2) {
          var d2 = l2;
        }
        Reflect.construct(a2, [], b2);
      } else {
        try {
          b2.call();
        } catch (l2) {
          d2 = l2;
        }
        a2.call(b2.prototype);
      }
    else {
      try {
        throw Error();
      } catch (l2) {
        d2 = l2;
      }
      a2();
    }
  } catch (l2) {
    if (l2 && d2 && typeof l2.stack === "string") {
      for (var e2 = l2.stack.split("\n"), f2 = d2.stack.split("\n"), g2 = e2.length - 1, h2 = f2.length - 1; 1 <= g2 && 0 <= h2 && e2[g2] !== f2[h2]; )
        h2--;
      for (; 1 <= g2 && 0 <= h2; g2--, h2--)
        if (e2[g2] !== f2[h2]) {
          if (g2 !== 1 || h2 !== 1) {
            do
              if (g2--, h2--, 0 > h2 || e2[g2] !== f2[h2]) {
                var k2 = "\n" + e2[g2].replace(" at new ", " at ");
                a2.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a2.displayName));
                return k2;
              }
            while (1 <= g2 && 0 <= h2);
          }
          break;
        }
    }
  } finally {
    Ma = false, Error.prepareStackTrace = c2;
  }
  return (a2 = a2 ? a2.displayName || a2.name : "") ? La(a2) : "";
}
function Oa(a2) {
  switch (a2.tag) {
    case 5:
      return La(a2.type);
    case 16:
      return La("Lazy");
    case 13:
      return La("Suspense");
    case 19:
      return La("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a2 = Na(a2.type, false), a2;
    case 11:
      return a2 = Na(a2.type.render, false), a2;
    case 1:
      return a2 = Na(a2.type, true), a2;
    default:
      return "";
  }
}
function Pa(a2) {
  if (a2 == null)
    return null;
  if (typeof a2 === "function")
    return a2.displayName || a2.name || null;
  if (typeof a2 === "string")
    return a2;
  switch (a2) {
    case wa:
      return "Fragment";
    case va:
      return "Portal";
    case za:
      return "Profiler";
    case xa:
      return "StrictMode";
    case Da:
      return "Suspense";
    case Ea:
      return "SuspenseList";
  }
  if (typeof a2 === "object")
    switch (a2.$$typeof) {
      case Ba:
        return (a2.displayName || "Context") + ".Consumer";
      case Aa:
        return (a2._context.displayName || "Context") + ".Provider";
      case Ca:
        var b2 = a2.render;
        a2 = a2.displayName;
        a2 || (a2 = b2.displayName || b2.name || "", a2 = a2 !== "" ? "ForwardRef(" + a2 + ")" : "ForwardRef");
        return a2;
      case Fa:
        return b2 = a2.displayName || null, b2 !== null ? b2 : Pa(a2.type) || "Memo";
      case Ga:
        b2 = a2._payload;
        a2 = a2._init;
        try {
          return Pa(a2(b2));
        } catch (c2) {
        }
    }
  return null;
}
function Qa(a2) {
  var b2 = a2.type;
  switch (a2.tag) {
    case 24:
      return "Cache";
    case 9:
      return (b2.displayName || "Context") + ".Consumer";
    case 10:
      return (b2._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return a2 = b2.render, a2 = a2.displayName || a2.name || "", b2.displayName || (a2 !== "" ? "ForwardRef(" + a2 + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return b2;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Pa(b2);
    case 8:
      return b2 === xa ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof b2 === "function")
        return b2.displayName || b2.name || null;
      if (typeof b2 === "string")
        return b2;
  }
  return null;
}
function Ra(a2) {
  switch (typeof a2) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return a2;
    case "object":
      return a2;
    default:
      return "";
  }
}
function Sa(a2) {
  var b2 = a2.type;
  return (a2 = a2.nodeName) && a2.toLowerCase() === "input" && (b2 === "checkbox" || b2 === "radio");
}
function Ta(a2) {
  var b2 = Sa(a2) ? "checked" : "value", c2 = Object.getOwnPropertyDescriptor(a2.constructor.prototype, b2), d2 = "" + a2[b2];
  if (!a2.hasOwnProperty(b2) && typeof c2 !== "undefined" && typeof c2.get === "function" && typeof c2.set === "function") {
    var e2 = c2.get, f2 = c2.set;
    Object.defineProperty(a2, b2, { configurable: true, get: function() {
      return e2.call(this);
    }, set: function(a3) {
      d2 = "" + a3;
      f2.call(this, a3);
    } });
    Object.defineProperty(a2, b2, { enumerable: c2.enumerable });
    return { getValue: function() {
      return d2;
    }, setValue: function(a3) {
      d2 = "" + a3;
    }, stopTracking: function() {
      a2._valueTracker = null;
      delete a2[b2];
    } };
  }
}
function Ua(a2) {
  a2._valueTracker || (a2._valueTracker = Ta(a2));
}
function Va(a2) {
  if (!a2)
    return false;
  var b2 = a2._valueTracker;
  if (!b2)
    return true;
  var c2 = b2.getValue();
  var d2 = "";
  a2 && (d2 = Sa(a2) ? a2.checked ? "true" : "false" : a2.value);
  a2 = d2;
  return a2 !== c2 ? (b2.setValue(a2), true) : false;
}
function Wa(a2) {
  a2 = a2 || (typeof document !== "undefined" ? document : void 0);
  if (typeof a2 === "undefined")
    return null;
  try {
    return a2.activeElement || a2.body;
  } catch (b2) {
    return a2.body;
  }
}
function Xa(a2, b2) {
  var c2 = b2.checked;
  return A$2({}, b2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: c2 != null ? c2 : a2._wrapperState.initialChecked });
}
function Ya(a2, b2) {
  var c2 = b2.defaultValue == null ? "" : b2.defaultValue, d2 = b2.checked != null ? b2.checked : b2.defaultChecked;
  c2 = Ra(b2.value != null ? b2.value : c2);
  a2._wrapperState = { initialChecked: d2, initialValue: c2, controlled: b2.type === "checkbox" || b2.type === "radio" ? b2.checked != null : b2.value != null };
}
function Za(a2, b2) {
  b2 = b2.checked;
  b2 != null && sa(a2, "checked", b2, false);
}
function $a(a2, b2) {
  Za(a2, b2);
  var c2 = Ra(b2.value), d2 = b2.type;
  if (c2 != null)
    if (d2 === "number") {
      if (c2 === 0 && a2.value === "" || a2.value != c2)
        a2.value = "" + c2;
    } else
      a2.value !== "" + c2 && (a2.value = "" + c2);
  else if (d2 === "submit" || d2 === "reset") {
    a2.removeAttribute("value");
    return;
  }
  b2.hasOwnProperty("value") ? bb(a2, b2.type, c2) : b2.hasOwnProperty("defaultValue") && bb(a2, b2.type, Ra(b2.defaultValue));
  b2.checked == null && b2.defaultChecked != null && (a2.defaultChecked = !!b2.defaultChecked);
}
function cb$1(a2, b2, c2) {
  if (b2.hasOwnProperty("value") || b2.hasOwnProperty("defaultValue")) {
    var d2 = b2.type;
    if (!(d2 !== "submit" && d2 !== "reset" || b2.value !== void 0 && b2.value !== null))
      return;
    b2 = "" + a2._wrapperState.initialValue;
    c2 || b2 === a2.value || (a2.value = b2);
    a2.defaultValue = b2;
  }
  c2 = a2.name;
  c2 !== "" && (a2.name = "");
  a2.defaultChecked = !!a2._wrapperState.initialChecked;
  c2 !== "" && (a2.name = c2);
}
function bb(a2, b2, c2) {
  if (b2 !== "number" || Wa(a2.ownerDocument) !== a2)
    c2 == null ? a2.defaultValue = "" + a2._wrapperState.initialValue : a2.defaultValue !== "" + c2 && (a2.defaultValue = "" + c2);
}
var db = Array.isArray;
function eb(a2, b2, c2, d2) {
  a2 = a2.options;
  if (b2) {
    b2 = {};
    for (var e2 = 0; e2 < c2.length; e2++)
      b2["$" + c2[e2]] = true;
    for (c2 = 0; c2 < a2.length; c2++)
      e2 = b2.hasOwnProperty("$" + a2[c2].value), a2[c2].selected !== e2 && (a2[c2].selected = e2), e2 && d2 && (a2[c2].defaultSelected = true);
  } else {
    c2 = "" + Ra(c2);
    b2 = null;
    for (e2 = 0; e2 < a2.length; e2++) {
      if (a2[e2].value === c2) {
        a2[e2].selected = true;
        d2 && (a2[e2].defaultSelected = true);
        return;
      }
      b2 !== null || a2[e2].disabled || (b2 = a2[e2]);
    }
    b2 !== null && (b2.selected = true);
  }
}
function fb(a2, b2) {
  if (b2.dangerouslySetInnerHTML != null)
    throw Error(p$3(91));
  return A$2({}, b2, { value: void 0, defaultValue: void 0, children: "" + a2._wrapperState.initialValue });
}
function gb(a2, b2) {
  var c2 = b2.value;
  if (c2 == null) {
    c2 = b2.children;
    b2 = b2.defaultValue;
    if (c2 != null) {
      if (b2 != null)
        throw Error(p$3(92));
      if (db(c2)) {
        if (1 < c2.length)
          throw Error(p$3(93));
        c2 = c2[0];
      }
      b2 = c2;
    }
    b2 == null && (b2 = "");
    c2 = b2;
  }
  a2._wrapperState = { initialValue: Ra(c2) };
}
function hb(a2, b2) {
  var c2 = Ra(b2.value), d2 = Ra(b2.defaultValue);
  c2 != null && (c2 = "" + c2, c2 !== a2.value && (a2.value = c2), b2.defaultValue == null && a2.defaultValue !== c2 && (a2.defaultValue = c2));
  d2 != null && (a2.defaultValue = "" + d2);
}
function ib(a2) {
  var b2 = a2.textContent;
  b2 === a2._wrapperState.initialValue && b2 !== "" && b2 !== null && (a2.value = b2);
}
function jb(a2) {
  switch (a2) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function kb(a2, b2) {
  return a2 == null || a2 === "http://www.w3.org/1999/xhtml" ? jb(b2) : a2 === "http://www.w3.org/2000/svg" && b2 === "foreignObject" ? "http://www.w3.org/1999/xhtml" : a2;
}
var lb, mb = function(a2) {
  return typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction ? function(b2, c2, d2, e2) {
    MSApp.execUnsafeLocalFunction(function() {
      return a2(b2, c2, d2, e2);
    });
  } : a2;
}(function(a2, b2) {
  if (a2.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in a2)
    a2.innerHTML = b2;
  else {
    lb = lb || document.createElement("div");
    lb.innerHTML = "<svg>" + b2.valueOf().toString() + "</svg>";
    for (b2 = lb.firstChild; a2.firstChild; )
      a2.removeChild(a2.firstChild);
    for (; b2.firstChild; )
      a2.appendChild(b2.firstChild);
  }
});
function nb(a2, b2) {
  if (b2) {
    var c2 = a2.firstChild;
    if (c2 && c2 === a2.lastChild && c2.nodeType === 3) {
      c2.nodeValue = b2;
      return;
    }
  }
  a2.textContent = b2;
}
var ob = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, pb = ["Webkit", "ms", "Moz", "O"];
Object.keys(ob).forEach(function(a2) {
  pb.forEach(function(b2) {
    b2 = b2 + a2.charAt(0).toUpperCase() + a2.substring(1);
    ob[b2] = ob[a2];
  });
});
function qb(a2, b2, c2) {
  return b2 == null || typeof b2 === "boolean" || b2 === "" ? "" : c2 || typeof b2 !== "number" || b2 === 0 || ob.hasOwnProperty(a2) && ob[a2] ? ("" + b2).trim() : b2 + "px";
}
function rb(a2, b2) {
  a2 = a2.style;
  for (var c2 in b2)
    if (b2.hasOwnProperty(c2)) {
      var d2 = c2.indexOf("--") === 0, e2 = qb(c2, b2[c2], d2);
      c2 === "float" && (c2 = "cssFloat");
      d2 ? a2.setProperty(c2, e2) : a2[c2] = e2;
    }
}
var sb = A$2({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function tb(a2, b2) {
  if (b2) {
    if (sb[a2] && (b2.children != null || b2.dangerouslySetInnerHTML != null))
      throw Error(p$3(137, a2));
    if (b2.dangerouslySetInnerHTML != null) {
      if (b2.children != null)
        throw Error(p$3(60));
      if (typeof b2.dangerouslySetInnerHTML !== "object" || !("__html" in b2.dangerouslySetInnerHTML))
        throw Error(p$3(61));
    }
    if (b2.style != null && typeof b2.style !== "object")
      throw Error(p$3(62));
  }
}
function ub(a2, b2) {
  if (a2.indexOf("-") === -1)
    return typeof b2.is === "string";
  switch (a2) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var vb = null;
function wb(a2) {
  a2 = a2.target || a2.srcElement || window;
  a2.correspondingUseElement && (a2 = a2.correspondingUseElement);
  return a2.nodeType === 3 ? a2.parentNode : a2;
}
var xb = null, yb = null, zb = null;
function Ab(a2) {
  if (a2 = Bb(a2)) {
    if (typeof xb !== "function")
      throw Error(p$3(280));
    var b2 = a2.stateNode;
    b2 && (b2 = Cb(b2), xb(a2.stateNode, a2.type, b2));
  }
}
function Db(a2) {
  yb ? zb ? zb.push(a2) : zb = [a2] : yb = a2;
}
function Eb() {
  if (yb) {
    var a2 = yb, b2 = zb;
    zb = yb = null;
    Ab(a2);
    if (b2)
      for (a2 = 0; a2 < b2.length; a2++)
        Ab(b2[a2]);
  }
}
function Fb(a2, b2) {
  return a2(b2);
}
function Gb() {
}
var Hb = false;
function Ib(a2, b2, c2) {
  if (Hb)
    return a2(b2, c2);
  Hb = true;
  try {
    return Fb(a2, b2, c2);
  } finally {
    if (Hb = false, yb !== null || zb !== null)
      Gb(), Eb();
  }
}
function Jb(a2, b2) {
  var c2 = a2.stateNode;
  if (c2 === null)
    return null;
  var d2 = Cb(c2);
  if (d2 === null)
    return null;
  c2 = d2[b2];
  a:
    switch (b2) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (d2 = !d2.disabled) || (a2 = a2.type, d2 = !(a2 === "button" || a2 === "input" || a2 === "select" || a2 === "textarea"));
        a2 = !d2;
        break a;
      default:
        a2 = false;
    }
  if (a2)
    return null;
  if (c2 && typeof c2 !== "function")
    throw Error(p$3(231, b2, typeof c2));
  return c2;
}
var Kb = false;
if (ia)
  try {
    var Lb = {};
    Object.defineProperty(Lb, "passive", { get: function() {
      Kb = true;
    } });
    window.addEventListener("test", Lb, Lb);
    window.removeEventListener("test", Lb, Lb);
  } catch (a2) {
    Kb = false;
  }
function Mb(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b2.apply(c2, l2);
  } catch (n2) {
    this.onError(n2);
  }
}
var Nb = false, Ob = null, Pb = false, Qb = null, Rb = { onError: function(a2) {
  Nb = true;
  Ob = a2;
} };
function Sb(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  Nb = false;
  Ob = null;
  Mb.apply(Rb, arguments);
}
function Tb(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  Sb.apply(this, arguments);
  if (Nb) {
    if (Nb) {
      var l2 = Ob;
      Nb = false;
      Ob = null;
    } else
      throw Error(p$3(198));
    Pb || (Pb = true, Qb = l2);
  }
}
function Ub(a2) {
  var b2 = a2, c2 = a2;
  if (a2.alternate)
    for (; b2.return; )
      b2 = b2.return;
  else {
    a2 = b2;
    do
      b2 = a2, (b2.flags & 4098) !== 0 && (c2 = b2.return), a2 = b2.return;
    while (a2);
  }
  return b2.tag === 3 ? c2 : null;
}
function Vb(a2) {
  if (a2.tag === 13) {
    var b2 = a2.memoizedState;
    b2 === null && (a2 = a2.alternate, a2 !== null && (b2 = a2.memoizedState));
    if (b2 !== null)
      return b2.dehydrated;
  }
  return null;
}
function Wb(a2) {
  if (Ub(a2) !== a2)
    throw Error(p$3(188));
}
function Xb(a2) {
  var b2 = a2.alternate;
  if (!b2) {
    b2 = Ub(a2);
    if (b2 === null)
      throw Error(p$3(188));
    return b2 !== a2 ? null : a2;
  }
  for (var c2 = a2, d2 = b2; ; ) {
    var e2 = c2.return;
    if (e2 === null)
      break;
    var f2 = e2.alternate;
    if (f2 === null) {
      d2 = e2.return;
      if (d2 !== null) {
        c2 = d2;
        continue;
      }
      break;
    }
    if (e2.child === f2.child) {
      for (f2 = e2.child; f2; ) {
        if (f2 === c2)
          return Wb(e2), a2;
        if (f2 === d2)
          return Wb(e2), b2;
        f2 = f2.sibling;
      }
      throw Error(p$3(188));
    }
    if (c2.return !== d2.return)
      c2 = e2, d2 = f2;
    else {
      for (var g2 = false, h2 = e2.child; h2; ) {
        if (h2 === c2) {
          g2 = true;
          c2 = e2;
          d2 = f2;
          break;
        }
        if (h2 === d2) {
          g2 = true;
          d2 = e2;
          c2 = f2;
          break;
        }
        h2 = h2.sibling;
      }
      if (!g2) {
        for (h2 = f2.child; h2; ) {
          if (h2 === c2) {
            g2 = true;
            c2 = f2;
            d2 = e2;
            break;
          }
          if (h2 === d2) {
            g2 = true;
            d2 = f2;
            c2 = e2;
            break;
          }
          h2 = h2.sibling;
        }
        if (!g2)
          throw Error(p$3(189));
      }
    }
    if (c2.alternate !== d2)
      throw Error(p$3(190));
  }
  if (c2.tag !== 3)
    throw Error(p$3(188));
  return c2.stateNode.current === c2 ? a2 : b2;
}
function Yb(a2) {
  a2 = Xb(a2);
  return a2 !== null ? Zb(a2) : null;
}
function Zb(a2) {
  if (a2.tag === 5 || a2.tag === 6)
    return a2;
  for (a2 = a2.child; a2 !== null; ) {
    var b2 = Zb(a2);
    if (b2 !== null)
      return b2;
    a2 = a2.sibling;
  }
  return null;
}
var $b = ba.unstable_scheduleCallback, ac = ba.unstable_cancelCallback, bc = ba.unstable_shouldYield, cc$1 = ba.unstable_requestPaint, B$1 = ba.unstable_now, dc = ba.unstable_getCurrentPriorityLevel, ec = ba.unstable_ImmediatePriority, fc = ba.unstable_UserBlockingPriority, gc = ba.unstable_NormalPriority, hc = ba.unstable_LowPriority, ic = ba.unstable_IdlePriority, jc = null, kc = null;
function lc(a2) {
  if (kc && typeof kc.onCommitFiberRoot === "function")
    try {
      kc.onCommitFiberRoot(jc, a2, void 0, (a2.current.flags & 128) === 128);
    } catch (b2) {
    }
}
var nc = Math.clz32 ? Math.clz32 : mc, oc = Math.log, pc = Math.LN2;
function mc(a2) {
  a2 >>>= 0;
  return a2 === 0 ? 32 : 31 - (oc(a2) / pc | 0) | 0;
}
var qc = 64, rc = 4194304;
function sc(a2) {
  switch (a2 & -a2) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return a2 & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return a2 & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return a2;
  }
}
function tc(a2, b2) {
  var c2 = a2.pendingLanes;
  if (c2 === 0)
    return 0;
  var d2 = 0, e2 = a2.suspendedLanes, f2 = a2.pingedLanes, g2 = c2 & 268435455;
  if (g2 !== 0) {
    var h2 = g2 & ~e2;
    h2 !== 0 ? d2 = sc(h2) : (f2 &= g2, f2 !== 0 && (d2 = sc(f2)));
  } else
    g2 = c2 & ~e2, g2 !== 0 ? d2 = sc(g2) : f2 !== 0 && (d2 = sc(f2));
  if (d2 === 0)
    return 0;
  if (b2 !== 0 && b2 !== d2 && (b2 & e2) === 0 && (e2 = d2 & -d2, f2 = b2 & -b2, e2 >= f2 || e2 === 16 && (f2 & 4194240) !== 0))
    return b2;
  (d2 & 4) !== 0 && (d2 |= c2 & 16);
  b2 = a2.entangledLanes;
  if (b2 !== 0)
    for (a2 = a2.entanglements, b2 &= d2; 0 < b2; )
      c2 = 31 - nc(b2), e2 = 1 << c2, d2 |= a2[c2], b2 &= ~e2;
  return d2;
}
function uc(a2, b2) {
  switch (a2) {
    case 1:
    case 2:
    case 4:
      return b2 + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return b2 + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function vc(a2, b2) {
  for (var c2 = a2.suspendedLanes, d2 = a2.pingedLanes, e2 = a2.expirationTimes, f2 = a2.pendingLanes; 0 < f2; ) {
    var g2 = 31 - nc(f2), h2 = 1 << g2, k2 = e2[g2];
    if (k2 === -1) {
      if ((h2 & c2) === 0 || (h2 & d2) !== 0)
        e2[g2] = uc(h2, b2);
    } else
      k2 <= b2 && (a2.expiredLanes |= h2);
    f2 &= ~h2;
  }
}
function wc(a2) {
  a2 = a2.pendingLanes & -1073741825;
  return a2 !== 0 ? a2 : a2 & 1073741824 ? 1073741824 : 0;
}
function xc() {
  var a2 = qc;
  qc <<= 1;
  (qc & 4194240) === 0 && (qc = 64);
  return a2;
}
function yc(a2) {
  for (var b2 = [], c2 = 0; 31 > c2; c2++)
    b2.push(a2);
  return b2;
}
function zc(a2, b2, c2) {
  a2.pendingLanes |= b2;
  b2 !== 536870912 && (a2.suspendedLanes = 0, a2.pingedLanes = 0);
  a2 = a2.eventTimes;
  b2 = 31 - nc(b2);
  a2[b2] = c2;
}
function Ac(a2, b2) {
  var c2 = a2.pendingLanes & ~b2;
  a2.pendingLanes = b2;
  a2.suspendedLanes = 0;
  a2.pingedLanes = 0;
  a2.expiredLanes &= b2;
  a2.mutableReadLanes &= b2;
  a2.entangledLanes &= b2;
  b2 = a2.entanglements;
  var d2 = a2.eventTimes;
  for (a2 = a2.expirationTimes; 0 < c2; ) {
    var e2 = 31 - nc(c2), f2 = 1 << e2;
    b2[e2] = 0;
    d2[e2] = -1;
    a2[e2] = -1;
    c2 &= ~f2;
  }
}
function Bc(a2, b2) {
  var c2 = a2.entangledLanes |= b2;
  for (a2 = a2.entanglements; c2; ) {
    var d2 = 31 - nc(c2), e2 = 1 << d2;
    e2 & b2 | a2[d2] & b2 && (a2[d2] |= b2);
    c2 &= ~e2;
  }
}
var C = 0;
function Cc(a2) {
  a2 &= -a2;
  return 1 < a2 ? 4 < a2 ? (a2 & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
}
var Dc, Ec, Fc, Gc, Hc, Ic = false, Jc = [], Kc = null, Lc = null, Mc = null, Nc = /* @__PURE__ */ new Map(), Oc = /* @__PURE__ */ new Map(), Pc = [], Qc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Rc(a2, b2) {
  switch (a2) {
    case "focusin":
    case "focusout":
      Kc = null;
      break;
    case "dragenter":
    case "dragleave":
      Lc = null;
      break;
    case "mouseover":
    case "mouseout":
      Mc = null;
      break;
    case "pointerover":
    case "pointerout":
      Nc.delete(b2.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Oc.delete(b2.pointerId);
  }
}
function Sc(a2, b2, c2, d2, e2, f2) {
  if (a2 === null || a2.nativeEvent !== f2)
    return a2 = { blockedOn: b2, domEventName: c2, eventSystemFlags: d2, nativeEvent: f2, targetContainers: [e2] }, b2 !== null && (b2 = Bb(b2), b2 !== null && Ec(b2)), a2;
  a2.eventSystemFlags |= d2;
  b2 = a2.targetContainers;
  e2 !== null && b2.indexOf(e2) === -1 && b2.push(e2);
  return a2;
}
function Tc(a2, b2, c2, d2, e2) {
  switch (b2) {
    case "focusin":
      return Kc = Sc(Kc, a2, b2, c2, d2, e2), true;
    case "dragenter":
      return Lc = Sc(Lc, a2, b2, c2, d2, e2), true;
    case "mouseover":
      return Mc = Sc(Mc, a2, b2, c2, d2, e2), true;
    case "pointerover":
      var f2 = e2.pointerId;
      Nc.set(f2, Sc(Nc.get(f2) || null, a2, b2, c2, d2, e2));
      return true;
    case "gotpointercapture":
      return f2 = e2.pointerId, Oc.set(f2, Sc(Oc.get(f2) || null, a2, b2, c2, d2, e2)), true;
  }
  return false;
}
function Uc(a2) {
  var b2 = Vc(a2.target);
  if (b2 !== null) {
    var c2 = Ub(b2);
    if (c2 !== null) {
      if (b2 = c2.tag, b2 === 13) {
        if (b2 = Vb(c2), b2 !== null) {
          a2.blockedOn = b2;
          Hc(a2.priority, function() {
            Fc(c2);
          });
          return;
        }
      } else if (b2 === 3 && c2.stateNode.current.memoizedState.isDehydrated) {
        a2.blockedOn = c2.tag === 3 ? c2.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a2.blockedOn = null;
}
function Wc(a2) {
  if (a2.blockedOn !== null)
    return false;
  for (var b2 = a2.targetContainers; 0 < b2.length; ) {
    var c2 = Xc(a2.domEventName, a2.eventSystemFlags, b2[0], a2.nativeEvent);
    if (c2 === null) {
      c2 = a2.nativeEvent;
      var d2 = new c2.constructor(c2.type, c2);
      vb = d2;
      c2.target.dispatchEvent(d2);
      vb = null;
    } else
      return b2 = Bb(c2), b2 !== null && Ec(b2), a2.blockedOn = c2, false;
    b2.shift();
  }
  return true;
}
function Yc(a2, b2, c2) {
  Wc(a2) && c2.delete(b2);
}
function Zc() {
  Ic = false;
  Kc !== null && Wc(Kc) && (Kc = null);
  Lc !== null && Wc(Lc) && (Lc = null);
  Mc !== null && Wc(Mc) && (Mc = null);
  Nc.forEach(Yc);
  Oc.forEach(Yc);
}
function $c(a2, b2) {
  a2.blockedOn === b2 && (a2.blockedOn = null, Ic || (Ic = true, ba.unstable_scheduleCallback(ba.unstable_NormalPriority, Zc)));
}
function ad(a2) {
  function b2(b3) {
    return $c(b3, a2);
  }
  if (0 < Jc.length) {
    $c(Jc[0], a2);
    for (var c2 = 1; c2 < Jc.length; c2++) {
      var d2 = Jc[c2];
      d2.blockedOn === a2 && (d2.blockedOn = null);
    }
  }
  Kc !== null && $c(Kc, a2);
  Lc !== null && $c(Lc, a2);
  Mc !== null && $c(Mc, a2);
  Nc.forEach(b2);
  Oc.forEach(b2);
  for (c2 = 0; c2 < Pc.length; c2++)
    d2 = Pc[c2], d2.blockedOn === a2 && (d2.blockedOn = null);
  for (; 0 < Pc.length && (c2 = Pc[0], c2.blockedOn === null); )
    Uc(c2), c2.blockedOn === null && Pc.shift();
}
var bd = ta.ReactCurrentBatchConfig, cd = true;
function dd(a2, b2, c2, d2) {
  var e2 = C, f2 = bd.transition;
  bd.transition = null;
  try {
    C = 1, ed(a2, b2, c2, d2);
  } finally {
    C = e2, bd.transition = f2;
  }
}
function fd(a2, b2, c2, d2) {
  var e2 = C, f2 = bd.transition;
  bd.transition = null;
  try {
    C = 4, ed(a2, b2, c2, d2);
  } finally {
    C = e2, bd.transition = f2;
  }
}
function ed(a2, b2, c2, d2) {
  if (cd) {
    var e2 = Xc(a2, b2, c2, d2);
    if (e2 === null)
      gd(a2, b2, d2, hd, c2), Rc(a2, d2);
    else if (Tc(e2, a2, b2, c2, d2))
      d2.stopPropagation();
    else if (Rc(a2, d2), b2 & 4 && -1 < Qc.indexOf(a2)) {
      for (; e2 !== null; ) {
        var f2 = Bb(e2);
        f2 !== null && Dc(f2);
        f2 = Xc(a2, b2, c2, d2);
        f2 === null && gd(a2, b2, d2, hd, c2);
        if (f2 === e2)
          break;
        e2 = f2;
      }
      e2 !== null && d2.stopPropagation();
    } else
      gd(a2, b2, d2, null, c2);
  }
}
var hd = null;
function Xc(a2, b2, c2, d2) {
  hd = null;
  a2 = wb(d2);
  a2 = Vc(a2);
  if (a2 !== null)
    if (b2 = Ub(a2), b2 === null)
      a2 = null;
    else if (c2 = b2.tag, c2 === 13) {
      a2 = Vb(b2);
      if (a2 !== null)
        return a2;
      a2 = null;
    } else if (c2 === 3) {
      if (b2.stateNode.current.memoizedState.isDehydrated)
        return b2.tag === 3 ? b2.stateNode.containerInfo : null;
      a2 = null;
    } else
      b2 !== a2 && (a2 = null);
  hd = a2;
  return null;
}
function id$1(a2) {
  switch (a2) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (dc()) {
        case ec:
          return 1;
        case fc:
          return 4;
        case gc:
        case hc:
          return 16;
        case ic:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var jd = null, kd = null, ld = null;
function md() {
  if (ld)
    return ld;
  var a2, b2 = kd, c2 = b2.length, d2, e2 = "value" in jd ? jd.value : jd.textContent, f2 = e2.length;
  for (a2 = 0; a2 < c2 && b2[a2] === e2[a2]; a2++)
    ;
  var g2 = c2 - a2;
  for (d2 = 1; d2 <= g2 && b2[c2 - d2] === e2[f2 - d2]; d2++)
    ;
  return ld = e2.slice(a2, 1 < d2 ? 1 - d2 : void 0);
}
function nd(a2) {
  var b2 = a2.keyCode;
  "charCode" in a2 ? (a2 = a2.charCode, a2 === 0 && b2 === 13 && (a2 = 13)) : a2 = b2;
  a2 === 10 && (a2 = 13);
  return 32 <= a2 || a2 === 13 ? a2 : 0;
}
function od() {
  return true;
}
function pd() {
  return false;
}
function qd(a2) {
  function b2(b3, d2, e2, f2, g2) {
    this._reactName = b3;
    this._targetInst = e2;
    this.type = d2;
    this.nativeEvent = f2;
    this.target = g2;
    this.currentTarget = null;
    for (var c2 in a2)
      a2.hasOwnProperty(c2) && (b3 = a2[c2], this[c2] = b3 ? b3(f2) : f2[c2]);
    this.isDefaultPrevented = (f2.defaultPrevented != null ? f2.defaultPrevented : f2.returnValue === false) ? od : pd;
    this.isPropagationStopped = pd;
    return this;
  }
  A$2(b2.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var a3 = this.nativeEvent;
    a3 && (a3.preventDefault ? a3.preventDefault() : typeof a3.returnValue !== "unknown" && (a3.returnValue = false), this.isDefaultPrevented = od);
  }, stopPropagation: function() {
    var a3 = this.nativeEvent;
    a3 && (a3.stopPropagation ? a3.stopPropagation() : typeof a3.cancelBubble !== "unknown" && (a3.cancelBubble = true), this.isPropagationStopped = od);
  }, persist: function() {
  }, isPersistent: od });
  return b2;
}
var rd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a2) {
  return a2.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, sd = qd(rd), td = A$2({}, rd, { view: 0, detail: 0 }), ud = qd(td), vd, wd, xd, zd = A$2({}, td, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: yd, button: 0, buttons: 0, relatedTarget: function(a2) {
  return a2.relatedTarget === void 0 ? a2.fromElement === a2.srcElement ? a2.toElement : a2.fromElement : a2.relatedTarget;
}, movementX: function(a2) {
  if ("movementX" in a2)
    return a2.movementX;
  a2 !== xd && (xd && a2.type === "mousemove" ? (vd = a2.screenX - xd.screenX, wd = a2.screenY - xd.screenY) : wd = vd = 0, xd = a2);
  return vd;
}, movementY: function(a2) {
  return "movementY" in a2 ? a2.movementY : wd;
} }), Ad = qd(zd), Bd = A$2({}, zd, { dataTransfer: 0 }), Cd = qd(Bd), Dd = A$2({}, td, { relatedTarget: 0 }), Ed = qd(Dd), Fd = A$2({}, rd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Gd = qd(Fd), Hd = A$2({}, rd, { clipboardData: function(a2) {
  return "clipboardData" in a2 ? a2.clipboardData : window.clipboardData;
} }), Id = qd(Hd), Jd = A$2({}, rd, { data: 0 }), Kd = qd(Jd), Ld = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Md = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Nd = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Od(a2) {
  var b2 = this.nativeEvent;
  return b2.getModifierState ? b2.getModifierState(a2) : (a2 = Nd[a2]) ? !!b2[a2] : false;
}
function yd() {
  return Od;
}
var Pd = A$2({}, td, { key: function(a2) {
  if (a2.key) {
    var b2 = Ld[a2.key] || a2.key;
    if (b2 !== "Unidentified")
      return b2;
  }
  return a2.type === "keypress" ? (a2 = nd(a2), a2 === 13 ? "Enter" : String.fromCharCode(a2)) : a2.type === "keydown" || a2.type === "keyup" ? Md[a2.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: yd, charCode: function(a2) {
  return a2.type === "keypress" ? nd(a2) : 0;
}, keyCode: function(a2) {
  return a2.type === "keydown" || a2.type === "keyup" ? a2.keyCode : 0;
}, which: function(a2) {
  return a2.type === "keypress" ? nd(a2) : a2.type === "keydown" || a2.type === "keyup" ? a2.keyCode : 0;
} }), Qd = qd(Pd), Rd = A$2({}, zd, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Sd = qd(Rd), Td = A$2({}, td, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: yd }), Ud = qd(Td), Vd = A$2({}, rd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Wd = qd(Vd), Xd = A$2({}, zd, {
  deltaX: function(a2) {
    return "deltaX" in a2 ? a2.deltaX : "wheelDeltaX" in a2 ? -a2.wheelDeltaX : 0;
  },
  deltaY: function(a2) {
    return "deltaY" in a2 ? a2.deltaY : "wheelDeltaY" in a2 ? -a2.wheelDeltaY : "wheelDelta" in a2 ? -a2.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Yd = qd(Xd), Zd = [9, 13, 27, 32], $d = ia && "CompositionEvent" in window, ae$1 = null;
ia && "documentMode" in document && (ae$1 = document.documentMode);
var be$1 = ia && "TextEvent" in window && !ae$1, ce$1 = ia && (!$d || ae$1 && 8 < ae$1 && 11 >= ae$1), de$1 = String.fromCharCode(32), ee$1 = false;
function fe$1(a2, b2) {
  switch (a2) {
    case "keyup":
      return Zd.indexOf(b2.keyCode) !== -1;
    case "keydown":
      return b2.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function ge$1(a2) {
  a2 = a2.detail;
  return typeof a2 === "object" && "data" in a2 ? a2.data : null;
}
var he$1 = false;
function ie$1(a2, b2) {
  switch (a2) {
    case "compositionend":
      return ge$1(b2);
    case "keypress":
      if (b2.which !== 32)
        return null;
      ee$1 = true;
      return de$1;
    case "textInput":
      return a2 = b2.data, a2 === de$1 && ee$1 ? null : a2;
    default:
      return null;
  }
}
function je$1(a2, b2) {
  if (he$1)
    return a2 === "compositionend" || !$d && fe$1(a2, b2) ? (a2 = md(), ld = kd = jd = null, he$1 = false, a2) : null;
  switch (a2) {
    case "paste":
      return null;
    case "keypress":
      if (!(b2.ctrlKey || b2.altKey || b2.metaKey) || b2.ctrlKey && b2.altKey) {
        if (b2.char && 1 < b2.char.length)
          return b2.char;
        if (b2.which)
          return String.fromCharCode(b2.which);
      }
      return null;
    case "compositionend":
      return ce$1 && b2.locale !== "ko" ? null : b2.data;
    default:
      return null;
  }
}
var ke$1 = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function le(a2) {
  var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
  return b2 === "input" ? !!ke$1[a2.type] : b2 === "textarea" ? true : false;
}
function me$1(a2, b2, c2, d2) {
  Db(d2);
  b2 = ne$1(b2, "onChange");
  0 < b2.length && (c2 = new sd("onChange", "change", null, c2, d2), a2.push({ event: c2, listeners: b2 }));
}
var oe$1 = null, pe$1 = null;
function qe$1(a2) {
  re$1(a2, 0);
}
function se$1(a2) {
  var b2 = te$1(a2);
  if (Va(b2))
    return a2;
}
function ue$1(a2, b2) {
  if (a2 === "change")
    return b2;
}
var ve$1 = false;
if (ia) {
  var we$1;
  if (ia) {
    var xe$1 = "oninput" in document;
    if (!xe$1) {
      var ye = document.createElement("div");
      ye.setAttribute("oninput", "return;");
      xe$1 = typeof ye.oninput === "function";
    }
    we$1 = xe$1;
  } else
    we$1 = false;
  ve$1 = we$1 && (!document.documentMode || 9 < document.documentMode);
}
function ze$1() {
  oe$1 && (oe$1.detachEvent("onpropertychange", Ae$1), pe$1 = oe$1 = null);
}
function Ae$1(a2) {
  if (a2.propertyName === "value" && se$1(pe$1)) {
    var b2 = [];
    me$1(b2, pe$1, a2, wb(a2));
    Ib(qe$1, b2);
  }
}
function Be$1(a2, b2, c2) {
  a2 === "focusin" ? (ze$1(), oe$1 = b2, pe$1 = c2, oe$1.attachEvent("onpropertychange", Ae$1)) : a2 === "focusout" && ze$1();
}
function Ce$1(a2) {
  if (a2 === "selectionchange" || a2 === "keyup" || a2 === "keydown")
    return se$1(pe$1);
}
function De$1(a2, b2) {
  if (a2 === "click")
    return se$1(b2);
}
function Ee$1(a2, b2) {
  if (a2 === "input" || a2 === "change")
    return se$1(b2);
}
function Fe$1(a2, b2) {
  return a2 === b2 && (a2 !== 0 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
}
var Ge$1 = typeof Object.is === "function" ? Object.is : Fe$1;
function He$1(a2, b2) {
  if (Ge$1(a2, b2))
    return true;
  if (typeof a2 !== "object" || a2 === null || typeof b2 !== "object" || b2 === null)
    return false;
  var c2 = Object.keys(a2), d2 = Object.keys(b2);
  if (c2.length !== d2.length)
    return false;
  for (d2 = 0; d2 < c2.length; d2++) {
    var e2 = c2[d2];
    if (!ja.call(b2, e2) || !Ge$1(a2[e2], b2[e2]))
      return false;
  }
  return true;
}
function Ie(a2) {
  for (; a2 && a2.firstChild; )
    a2 = a2.firstChild;
  return a2;
}
function Je(a2, b2) {
  var c2 = Ie(a2);
  a2 = 0;
  for (var d2; c2; ) {
    if (c2.nodeType === 3) {
      d2 = a2 + c2.textContent.length;
      if (a2 <= b2 && d2 >= b2)
        return { node: c2, offset: b2 - a2 };
      a2 = d2;
    }
    a: {
      for (; c2; ) {
        if (c2.nextSibling) {
          c2 = c2.nextSibling;
          break a;
        }
        c2 = c2.parentNode;
      }
      c2 = void 0;
    }
    c2 = Ie(c2);
  }
}
function Ke(a2, b2) {
  return a2 && b2 ? a2 === b2 ? true : a2 && a2.nodeType === 3 ? false : b2 && b2.nodeType === 3 ? Ke(a2, b2.parentNode) : "contains" in a2 ? a2.contains(b2) : a2.compareDocumentPosition ? !!(a2.compareDocumentPosition(b2) & 16) : false : false;
}
function Le() {
  for (var a2 = window, b2 = Wa(); b2 instanceof a2.HTMLIFrameElement; ) {
    try {
      var c2 = typeof b2.contentWindow.location.href === "string";
    } catch (d2) {
      c2 = false;
    }
    if (c2)
      a2 = b2.contentWindow;
    else
      break;
    b2 = Wa(a2.document);
  }
  return b2;
}
function Me$1(a2) {
  var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
  return b2 && (b2 === "input" && (a2.type === "text" || a2.type === "search" || a2.type === "tel" || a2.type === "url" || a2.type === "password") || b2 === "textarea" || a2.contentEditable === "true");
}
function Ne$1(a2) {
  var b2 = Le(), c2 = a2.focusedElem, d2 = a2.selectionRange;
  if (b2 !== c2 && c2 && c2.ownerDocument && Ke(c2.ownerDocument.documentElement, c2)) {
    if (d2 !== null && Me$1(c2)) {
      if (b2 = d2.start, a2 = d2.end, a2 === void 0 && (a2 = b2), "selectionStart" in c2)
        c2.selectionStart = b2, c2.selectionEnd = Math.min(a2, c2.value.length);
      else if (a2 = (b2 = c2.ownerDocument || document) && b2.defaultView || window, a2.getSelection) {
        a2 = a2.getSelection();
        var e2 = c2.textContent.length, f2 = Math.min(d2.start, e2);
        d2 = d2.end === void 0 ? f2 : Math.min(d2.end, e2);
        !a2.extend && f2 > d2 && (e2 = d2, d2 = f2, f2 = e2);
        e2 = Je(c2, f2);
        var g2 = Je(c2, d2);
        e2 && g2 && (a2.rangeCount !== 1 || a2.anchorNode !== e2.node || a2.anchorOffset !== e2.offset || a2.focusNode !== g2.node || a2.focusOffset !== g2.offset) && (b2 = b2.createRange(), b2.setStart(e2.node, e2.offset), a2.removeAllRanges(), f2 > d2 ? (a2.addRange(b2), a2.extend(g2.node, g2.offset)) : (b2.setEnd(g2.node, g2.offset), a2.addRange(b2)));
      }
    }
    b2 = [];
    for (a2 = c2; a2 = a2.parentNode; )
      a2.nodeType === 1 && b2.push({ element: a2, left: a2.scrollLeft, top: a2.scrollTop });
    typeof c2.focus === "function" && c2.focus();
    for (c2 = 0; c2 < b2.length; c2++)
      a2 = b2[c2], a2.element.scrollLeft = a2.left, a2.element.scrollTop = a2.top;
  }
}
var Oe = ia && "documentMode" in document && 11 >= document.documentMode, Pe = null, Qe = null, Re$1 = null, Se$1 = false;
function Te$1(a2, b2, c2) {
  var d2 = c2.window === c2 ? c2.document : c2.nodeType === 9 ? c2 : c2.ownerDocument;
  Se$1 || Pe == null || Pe !== Wa(d2) || (d2 = Pe, "selectionStart" in d2 && Me$1(d2) ? d2 = { start: d2.selectionStart, end: d2.selectionEnd } : (d2 = (d2.ownerDocument && d2.ownerDocument.defaultView || window).getSelection(), d2 = { anchorNode: d2.anchorNode, anchorOffset: d2.anchorOffset, focusNode: d2.focusNode, focusOffset: d2.focusOffset }), Re$1 && He$1(Re$1, d2) || (Re$1 = d2, d2 = ne$1(Qe, "onSelect"), 0 < d2.length && (b2 = new sd("onSelect", "select", null, b2, c2), a2.push({ event: b2, listeners: d2 }), b2.target = Pe)));
}
function Ue(a2, b2) {
  var c2 = {};
  c2[a2.toLowerCase()] = b2.toLowerCase();
  c2["Webkit" + a2] = "webkit" + b2;
  c2["Moz" + a2] = "moz" + b2;
  return c2;
}
var Ve$1 = { animationend: Ue("Animation", "AnimationEnd"), animationiteration: Ue("Animation", "AnimationIteration"), animationstart: Ue("Animation", "AnimationStart"), transitionend: Ue("Transition", "TransitionEnd") }, We$1 = {}, Xe = {};
ia && (Xe = document.createElement("div").style, "AnimationEvent" in window || (delete Ve$1.animationend.animation, delete Ve$1.animationiteration.animation, delete Ve$1.animationstart.animation), "TransitionEvent" in window || delete Ve$1.transitionend.transition);
function Ye$1(a2) {
  if (We$1[a2])
    return We$1[a2];
  if (!Ve$1[a2])
    return a2;
  var b2 = Ve$1[a2], c2;
  for (c2 in b2)
    if (b2.hasOwnProperty(c2) && c2 in Xe)
      return We$1[a2] = b2[c2];
  return a2;
}
var Ze = Ye$1("animationend"), $e$1 = Ye$1("animationiteration"), af = Ye$1("animationstart"), bf = Ye$1("transitionend"), cf = /* @__PURE__ */ new Map(), df = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ef(a2, b2) {
  cf.set(a2, b2);
  fa(b2, [a2]);
}
for (var ff = 0; ff < df.length; ff++) {
  var gf = df[ff], hf = gf.toLowerCase(), jf = gf[0].toUpperCase() + gf.slice(1);
  ef(hf, "on" + jf);
}
ef(Ze, "onAnimationEnd");
ef($e$1, "onAnimationIteration");
ef(af, "onAnimationStart");
ef("dblclick", "onDoubleClick");
ef("focusin", "onFocus");
ef("focusout", "onBlur");
ef(bf, "onTransitionEnd");
ha("onMouseEnter", ["mouseout", "mouseover"]);
ha("onMouseLeave", ["mouseout", "mouseover"]);
ha("onPointerEnter", ["pointerout", "pointerover"]);
ha("onPointerLeave", ["pointerout", "pointerover"]);
fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var kf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), lf = new Set("cancel close invalid load scroll toggle".split(" ").concat(kf));
function mf(a2, b2, c2) {
  var d2 = a2.type || "unknown-event";
  a2.currentTarget = c2;
  Tb(d2, b2, void 0, a2);
  a2.currentTarget = null;
}
function re$1(a2, b2) {
  b2 = (b2 & 4) !== 0;
  for (var c2 = 0; c2 < a2.length; c2++) {
    var d2 = a2[c2], e2 = d2.event;
    d2 = d2.listeners;
    a: {
      var f2 = void 0;
      if (b2)
        for (var g2 = d2.length - 1; 0 <= g2; g2--) {
          var h2 = d2[g2], k2 = h2.instance, l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e2.isPropagationStopped())
            break a;
          mf(e2, h2, l2);
          f2 = k2;
        }
      else
        for (g2 = 0; g2 < d2.length; g2++) {
          h2 = d2[g2];
          k2 = h2.instance;
          l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e2.isPropagationStopped())
            break a;
          mf(e2, h2, l2);
          f2 = k2;
        }
    }
  }
  if (Pb)
    throw a2 = Qb, Pb = false, Qb = null, a2;
}
function D(a2, b2) {
  var c2 = b2[nf];
  c2 === void 0 && (c2 = b2[nf] = /* @__PURE__ */ new Set());
  var d2 = a2 + "__bubble";
  c2.has(d2) || (of(b2, a2, 2, false), c2.add(d2));
}
function pf(a2, b2, c2) {
  var d2 = 0;
  b2 && (d2 |= 4);
  of(c2, a2, d2, b2);
}
var qf = "_reactListening" + Math.random().toString(36).slice(2);
function rf(a2) {
  if (!a2[qf]) {
    a2[qf] = true;
    da.forEach(function(b3) {
      b3 !== "selectionchange" && (lf.has(b3) || pf(b3, false, a2), pf(b3, true, a2));
    });
    var b2 = a2.nodeType === 9 ? a2 : a2.ownerDocument;
    b2 === null || b2[qf] || (b2[qf] = true, pf("selectionchange", false, b2));
  }
}
function of(a2, b2, c2, d2) {
  switch (id$1(b2)) {
    case 1:
      var e2 = dd;
      break;
    case 4:
      e2 = fd;
      break;
    default:
      e2 = ed;
  }
  c2 = e2.bind(null, b2, c2, a2);
  e2 = void 0;
  !Kb || b2 !== "touchstart" && b2 !== "touchmove" && b2 !== "wheel" || (e2 = true);
  d2 ? e2 !== void 0 ? a2.addEventListener(b2, c2, { capture: true, passive: e2 }) : a2.addEventListener(b2, c2, true) : e2 !== void 0 ? a2.addEventListener(b2, c2, { passive: e2 }) : a2.addEventListener(b2, c2, false);
}
function gd(a2, b2, c2, d2, e2) {
  var f2 = d2;
  if ((b2 & 1) === 0 && (b2 & 2) === 0 && d2 !== null)
    a:
      for (; ; ) {
        if (d2 === null)
          return;
        var g2 = d2.tag;
        if (g2 === 3 || g2 === 4) {
          var h2 = d2.stateNode.containerInfo;
          if (h2 === e2 || h2.nodeType === 8 && h2.parentNode === e2)
            break;
          if (g2 === 4)
            for (g2 = d2.return; g2 !== null; ) {
              var k2 = g2.tag;
              if (k2 === 3 || k2 === 4) {
                if (k2 = g2.stateNode.containerInfo, k2 === e2 || k2.nodeType === 8 && k2.parentNode === e2)
                  return;
              }
              g2 = g2.return;
            }
          for (; h2 !== null; ) {
            g2 = Vc(h2);
            if (g2 === null)
              return;
            k2 = g2.tag;
            if (k2 === 5 || k2 === 6) {
              d2 = f2 = g2;
              continue a;
            }
            h2 = h2.parentNode;
          }
        }
        d2 = d2.return;
      }
  Ib(function() {
    var d3 = f2, e3 = wb(c2), g3 = [];
    a: {
      var h3 = cf.get(a2);
      if (h3 !== void 0) {
        var k3 = sd, m2 = a2;
        switch (a2) {
          case "keypress":
            if (nd(c2) === 0)
              break a;
          case "keydown":
          case "keyup":
            k3 = Qd;
            break;
          case "focusin":
            m2 = "focus";
            k3 = Ed;
            break;
          case "focusout":
            m2 = "blur";
            k3 = Ed;
            break;
          case "beforeblur":
          case "afterblur":
            k3 = Ed;
            break;
          case "click":
            if (c2.button === 2)
              break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k3 = Ad;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k3 = Cd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k3 = Ud;
            break;
          case Ze:
          case $e$1:
          case af:
            k3 = Gd;
            break;
          case bf:
            k3 = Wd;
            break;
          case "scroll":
            k3 = ud;
            break;
          case "wheel":
            k3 = Yd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k3 = Id;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k3 = Sd;
        }
        var w2 = (b2 & 4) !== 0, J2 = !w2 && a2 === "scroll", v2 = w2 ? h3 !== null ? h3 + "Capture" : null : h3;
        w2 = [];
        for (var x2 = d3, r2; x2 !== null; ) {
          r2 = x2;
          var F2 = r2.stateNode;
          r2.tag === 5 && F2 !== null && (r2 = F2, v2 !== null && (F2 = Jb(x2, v2), F2 != null && w2.push(sf(x2, F2, r2))));
          if (J2)
            break;
          x2 = x2.return;
        }
        0 < w2.length && (h3 = new k3(h3, m2, null, c2, e3), g3.push({ event: h3, listeners: w2 }));
      }
    }
    if ((b2 & 7) === 0) {
      a: {
        h3 = a2 === "mouseover" || a2 === "pointerover";
        k3 = a2 === "mouseout" || a2 === "pointerout";
        if (h3 && c2 !== vb && (m2 = c2.relatedTarget || c2.fromElement) && (Vc(m2) || m2[tf]))
          break a;
        if (k3 || h3) {
          h3 = e3.window === e3 ? e3 : (h3 = e3.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
          if (k3) {
            if (m2 = c2.relatedTarget || c2.toElement, k3 = d3, m2 = m2 ? Vc(m2) : null, m2 !== null && (J2 = Ub(m2), m2 !== J2 || m2.tag !== 5 && m2.tag !== 6))
              m2 = null;
          } else
            k3 = null, m2 = d3;
          if (k3 !== m2) {
            w2 = Ad;
            F2 = "onMouseLeave";
            v2 = "onMouseEnter";
            x2 = "mouse";
            if (a2 === "pointerout" || a2 === "pointerover")
              w2 = Sd, F2 = "onPointerLeave", v2 = "onPointerEnter", x2 = "pointer";
            J2 = k3 == null ? h3 : te$1(k3);
            r2 = m2 == null ? h3 : te$1(m2);
            h3 = new w2(F2, x2 + "leave", k3, c2, e3);
            h3.target = J2;
            h3.relatedTarget = r2;
            F2 = null;
            Vc(e3) === d3 && (w2 = new w2(v2, x2 + "enter", m2, c2, e3), w2.target = r2, w2.relatedTarget = J2, F2 = w2);
            J2 = F2;
            if (k3 && m2)
              b: {
                w2 = k3;
                v2 = m2;
                x2 = 0;
                for (r2 = w2; r2; r2 = uf(r2))
                  x2++;
                r2 = 0;
                for (F2 = v2; F2; F2 = uf(F2))
                  r2++;
                for (; 0 < x2 - r2; )
                  w2 = uf(w2), x2--;
                for (; 0 < r2 - x2; )
                  v2 = uf(v2), r2--;
                for (; x2--; ) {
                  if (w2 === v2 || v2 !== null && w2 === v2.alternate)
                    break b;
                  w2 = uf(w2);
                  v2 = uf(v2);
                }
                w2 = null;
              }
            else
              w2 = null;
            k3 !== null && vf(g3, h3, k3, w2, false);
            m2 !== null && J2 !== null && vf(g3, J2, m2, w2, true);
          }
        }
      }
      a: {
        h3 = d3 ? te$1(d3) : window;
        k3 = h3.nodeName && h3.nodeName.toLowerCase();
        if (k3 === "select" || k3 === "input" && h3.type === "file")
          var Z2 = ue$1;
        else if (le(h3))
          if (ve$1)
            Z2 = Ee$1;
          else {
            Z2 = Ce$1;
            var ya = Be$1;
          }
        else
          (k3 = h3.nodeName) && k3.toLowerCase() === "input" && (h3.type === "checkbox" || h3.type === "radio") && (Z2 = De$1);
        if (Z2 && (Z2 = Z2(a2, d3))) {
          me$1(g3, Z2, c2, e3);
          break a;
        }
        ya && ya(a2, h3, d3);
        a2 === "focusout" && (ya = h3._wrapperState) && ya.controlled && h3.type === "number" && bb(h3, "number", h3.value);
      }
      ya = d3 ? te$1(d3) : window;
      switch (a2) {
        case "focusin":
          if (le(ya) || ya.contentEditable === "true")
            Pe = ya, Qe = d3, Re$1 = null;
          break;
        case "focusout":
          Re$1 = Qe = Pe = null;
          break;
        case "mousedown":
          Se$1 = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Se$1 = false;
          Te$1(g3, c2, e3);
          break;
        case "selectionchange":
          if (Oe)
            break;
        case "keydown":
        case "keyup":
          Te$1(g3, c2, e3);
      }
      var ab;
      if ($d)
        b: {
          switch (a2) {
            case "compositionstart":
              var ca2 = "onCompositionStart";
              break b;
            case "compositionend":
              ca2 = "onCompositionEnd";
              break b;
            case "compositionupdate":
              ca2 = "onCompositionUpdate";
              break b;
          }
          ca2 = void 0;
        }
      else
        he$1 ? fe$1(a2, c2) && (ca2 = "onCompositionEnd") : a2 === "keydown" && c2.keyCode === 229 && (ca2 = "onCompositionStart");
      ca2 && (ce$1 && c2.locale !== "ko" && (he$1 || ca2 !== "onCompositionStart" ? ca2 === "onCompositionEnd" && he$1 && (ab = md()) : (jd = e3, kd = "value" in jd ? jd.value : jd.textContent, he$1 = true)), ya = ne$1(d3, ca2), 0 < ya.length && (ca2 = new Kd(ca2, a2, null, c2, e3), g3.push({ event: ca2, listeners: ya }), ab ? ca2.data = ab : (ab = ge$1(c2), ab !== null && (ca2.data = ab))));
      if (ab = be$1 ? ie$1(a2, c2) : je$1(a2, c2))
        d3 = ne$1(d3, "onBeforeInput"), 0 < d3.length && (e3 = new Kd("onBeforeInput", "beforeinput", null, c2, e3), g3.push({ event: e3, listeners: d3 }), e3.data = ab);
    }
    re$1(g3, b2);
  });
}
function sf(a2, b2, c2) {
  return { instance: a2, listener: b2, currentTarget: c2 };
}
function ne$1(a2, b2) {
  for (var c2 = b2 + "Capture", d2 = []; a2 !== null; ) {
    var e2 = a2, f2 = e2.stateNode;
    e2.tag === 5 && f2 !== null && (e2 = f2, f2 = Jb(a2, c2), f2 != null && d2.unshift(sf(a2, f2, e2)), f2 = Jb(a2, b2), f2 != null && d2.push(sf(a2, f2, e2)));
    a2 = a2.return;
  }
  return d2;
}
function uf(a2) {
  if (a2 === null)
    return null;
  do
    a2 = a2.return;
  while (a2 && a2.tag !== 5);
  return a2 ? a2 : null;
}
function vf(a2, b2, c2, d2, e2) {
  for (var f2 = b2._reactName, g2 = []; c2 !== null && c2 !== d2; ) {
    var h2 = c2, k2 = h2.alternate, l2 = h2.stateNode;
    if (k2 !== null && k2 === d2)
      break;
    h2.tag === 5 && l2 !== null && (h2 = l2, e2 ? (k2 = Jb(c2, f2), k2 != null && g2.unshift(sf(c2, k2, h2))) : e2 || (k2 = Jb(c2, f2), k2 != null && g2.push(sf(c2, k2, h2))));
    c2 = c2.return;
  }
  g2.length !== 0 && a2.push({ event: b2, listeners: g2 });
}
var wf = /\r\n?/g, xf = /\u0000|\uFFFD/g;
function yf(a2) {
  return (typeof a2 === "string" ? a2 : "" + a2).replace(wf, "\n").replace(xf, "");
}
function zf(a2, b2, c2) {
  b2 = yf(b2);
  if (yf(a2) !== b2 && c2)
    throw Error(p$3(425));
}
function Af() {
}
var Bf = null, Cf = null;
function Df(a2, b2) {
  return a2 === "textarea" || a2 === "noscript" || typeof b2.children === "string" || typeof b2.children === "number" || typeof b2.dangerouslySetInnerHTML === "object" && b2.dangerouslySetInnerHTML !== null && b2.dangerouslySetInnerHTML.__html != null;
}
var Ef = typeof setTimeout === "function" ? setTimeout : void 0, Ff = typeof clearTimeout === "function" ? clearTimeout : void 0, Gf = typeof Promise === "function" ? Promise : void 0, If = typeof queueMicrotask === "function" ? queueMicrotask : typeof Gf !== "undefined" ? function(a2) {
  return Gf.resolve(null).then(a2).catch(Hf);
} : Ef;
function Hf(a2) {
  setTimeout(function() {
    throw a2;
  });
}
function Jf(a2, b2) {
  var c2 = b2, d2 = 0;
  do {
    var e2 = c2.nextSibling;
    a2.removeChild(c2);
    if (e2 && e2.nodeType === 8)
      if (c2 = e2.data, c2 === "/$") {
        if (d2 === 0) {
          a2.removeChild(e2);
          ad(b2);
          return;
        }
        d2--;
      } else
        c2 !== "$" && c2 !== "$?" && c2 !== "$!" || d2++;
    c2 = e2;
  } while (c2);
  ad(b2);
}
function Kf(a2) {
  for (; a2 != null; a2 = a2.nextSibling) {
    var b2 = a2.nodeType;
    if (b2 === 1 || b2 === 3)
      break;
    if (b2 === 8) {
      b2 = a2.data;
      if (b2 === "$" || b2 === "$!" || b2 === "$?")
        break;
      if (b2 === "/$")
        return null;
    }
  }
  return a2;
}
function Lf(a2) {
  a2 = a2.previousSibling;
  for (var b2 = 0; a2; ) {
    if (a2.nodeType === 8) {
      var c2 = a2.data;
      if (c2 === "$" || c2 === "$!" || c2 === "$?") {
        if (b2 === 0)
          return a2;
        b2--;
      } else
        c2 === "/$" && b2++;
    }
    a2 = a2.previousSibling;
  }
  return null;
}
var Mf = Math.random().toString(36).slice(2), Nf = "__reactFiber$" + Mf, Of = "__reactProps$" + Mf, tf = "__reactContainer$" + Mf, nf = "__reactEvents$" + Mf, Pf = "__reactListeners$" + Mf, Qf = "__reactHandles$" + Mf;
function Vc(a2) {
  var b2 = a2[Nf];
  if (b2)
    return b2;
  for (var c2 = a2.parentNode; c2; ) {
    if (b2 = c2[tf] || c2[Nf]) {
      c2 = b2.alternate;
      if (b2.child !== null || c2 !== null && c2.child !== null)
        for (a2 = Lf(a2); a2 !== null; ) {
          if (c2 = a2[Nf])
            return c2;
          a2 = Lf(a2);
        }
      return b2;
    }
    a2 = c2;
    c2 = a2.parentNode;
  }
  return null;
}
function Bb(a2) {
  a2 = a2[Nf] || a2[tf];
  return !a2 || a2.tag !== 5 && a2.tag !== 6 && a2.tag !== 13 && a2.tag !== 3 ? null : a2;
}
function te$1(a2) {
  if (a2.tag === 5 || a2.tag === 6)
    return a2.stateNode;
  throw Error(p$3(33));
}
function Cb(a2) {
  return a2[Of] || null;
}
var Rf = [], Sf = -1;
function Tf(a2) {
  return { current: a2 };
}
function E$1(a2) {
  0 > Sf || (a2.current = Rf[Sf], Rf[Sf] = null, Sf--);
}
function G$1(a2, b2) {
  Sf++;
  Rf[Sf] = a2.current;
  a2.current = b2;
}
var Uf = {}, H$1 = Tf(Uf), Vf = Tf(false), Wf = Uf;
function Xf(a2, b2) {
  var c2 = a2.type.contextTypes;
  if (!c2)
    return Uf;
  var d2 = a2.stateNode;
  if (d2 && d2.__reactInternalMemoizedUnmaskedChildContext === b2)
    return d2.__reactInternalMemoizedMaskedChildContext;
  var e2 = {}, f2;
  for (f2 in c2)
    e2[f2] = b2[f2];
  d2 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = b2, a2.__reactInternalMemoizedMaskedChildContext = e2);
  return e2;
}
function Yf(a2) {
  a2 = a2.childContextTypes;
  return a2 !== null && a2 !== void 0;
}
function Zf() {
  E$1(Vf);
  E$1(H$1);
}
function $f(a2, b2, c2) {
  if (H$1.current !== Uf)
    throw Error(p$3(168));
  G$1(H$1, b2);
  G$1(Vf, c2);
}
function ag(a2, b2, c2) {
  var d2 = a2.stateNode;
  b2 = b2.childContextTypes;
  if (typeof d2.getChildContext !== "function")
    return c2;
  d2 = d2.getChildContext();
  for (var e2 in d2)
    if (!(e2 in b2))
      throw Error(p$3(108, Qa(a2) || "Unknown", e2));
  return A$2({}, c2, d2);
}
function bg(a2) {
  a2 = (a2 = a2.stateNode) && a2.__reactInternalMemoizedMergedChildContext || Uf;
  Wf = H$1.current;
  G$1(H$1, a2);
  G$1(Vf, Vf.current);
  return true;
}
function cg(a2, b2, c2) {
  var d2 = a2.stateNode;
  if (!d2)
    throw Error(p$3(169));
  c2 ? (a2 = ag(a2, b2, Wf), d2.__reactInternalMemoizedMergedChildContext = a2, E$1(Vf), E$1(H$1), G$1(H$1, a2)) : E$1(Vf);
  G$1(Vf, c2);
}
var dg = null, eg = false, fg = false;
function gg(a2) {
  dg === null ? dg = [a2] : dg.push(a2);
}
function hg(a2) {
  eg = true;
  gg(a2);
}
function ig() {
  if (!fg && dg !== null) {
    fg = true;
    var a2 = 0, b2 = C;
    try {
      var c2 = dg;
      for (C = 1; a2 < c2.length; a2++) {
        var d2 = c2[a2];
        do
          d2 = d2(true);
        while (d2 !== null);
      }
      dg = null;
      eg = false;
    } catch (e2) {
      throw dg !== null && (dg = dg.slice(a2 + 1)), $b(ec, ig), e2;
    } finally {
      C = b2, fg = false;
    }
  }
  return null;
}
var jg = ta.ReactCurrentBatchConfig;
function kg(a2, b2) {
  if (a2 && a2.defaultProps) {
    b2 = A$2({}, b2);
    a2 = a2.defaultProps;
    for (var c2 in a2)
      b2[c2] === void 0 && (b2[c2] = a2[c2]);
    return b2;
  }
  return b2;
}
var lg = Tf(null), mg = null, ng = null, og = null;
function pg() {
  og = ng = mg = null;
}
function qg(a2) {
  var b2 = lg.current;
  E$1(lg);
  a2._currentValue = b2;
}
function rg(a2, b2, c2) {
  for (; a2 !== null; ) {
    var d2 = a2.alternate;
    (a2.childLanes & b2) !== b2 ? (a2.childLanes |= b2, d2 !== null && (d2.childLanes |= b2)) : d2 !== null && (d2.childLanes & b2) !== b2 && (d2.childLanes |= b2);
    if (a2 === c2)
      break;
    a2 = a2.return;
  }
}
function sg(a2, b2) {
  mg = a2;
  og = ng = null;
  a2 = a2.dependencies;
  a2 !== null && a2.firstContext !== null && ((a2.lanes & b2) !== 0 && (tg = true), a2.firstContext = null);
}
function ug(a2) {
  var b2 = a2._currentValue;
  if (og !== a2)
    if (a2 = { context: a2, memoizedValue: b2, next: null }, ng === null) {
      if (mg === null)
        throw Error(p$3(308));
      ng = a2;
      mg.dependencies = { lanes: 0, firstContext: a2 };
    } else
      ng = ng.next = a2;
  return b2;
}
var vg = null, wg = false;
function xg(a2) {
  a2.updateQueue = { baseState: a2.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function yg(a2, b2) {
  a2 = a2.updateQueue;
  b2.updateQueue === a2 && (b2.updateQueue = { baseState: a2.baseState, firstBaseUpdate: a2.firstBaseUpdate, lastBaseUpdate: a2.lastBaseUpdate, shared: a2.shared, effects: a2.effects });
}
function zg(a2, b2) {
  return { eventTime: a2, lane: b2, tag: 0, payload: null, callback: null, next: null };
}
function Ag(a2, b2) {
  var c2 = a2.updateQueue;
  c2 !== null && (c2 = c2.shared, Bg(a2) ? (a2 = c2.interleaved, a2 === null ? (b2.next = b2, vg === null ? vg = [c2] : vg.push(c2)) : (b2.next = a2.next, a2.next = b2), c2.interleaved = b2) : (a2 = c2.pending, a2 === null ? b2.next = b2 : (b2.next = a2.next, a2.next = b2), c2.pending = b2));
}
function Cg(a2, b2, c2) {
  b2 = b2.updateQueue;
  if (b2 !== null && (b2 = b2.shared, (c2 & 4194240) !== 0)) {
    var d2 = b2.lanes;
    d2 &= a2.pendingLanes;
    c2 |= d2;
    b2.lanes = c2;
    Bc(a2, c2);
  }
}
function Dg(a2, b2) {
  var c2 = a2.updateQueue, d2 = a2.alternate;
  if (d2 !== null && (d2 = d2.updateQueue, c2 === d2)) {
    var e2 = null, f2 = null;
    c2 = c2.firstBaseUpdate;
    if (c2 !== null) {
      do {
        var g2 = { eventTime: c2.eventTime, lane: c2.lane, tag: c2.tag, payload: c2.payload, callback: c2.callback, next: null };
        f2 === null ? e2 = f2 = g2 : f2 = f2.next = g2;
        c2 = c2.next;
      } while (c2 !== null);
      f2 === null ? e2 = f2 = b2 : f2 = f2.next = b2;
    } else
      e2 = f2 = b2;
    c2 = { baseState: d2.baseState, firstBaseUpdate: e2, lastBaseUpdate: f2, shared: d2.shared, effects: d2.effects };
    a2.updateQueue = c2;
    return;
  }
  a2 = c2.lastBaseUpdate;
  a2 === null ? c2.firstBaseUpdate = b2 : a2.next = b2;
  c2.lastBaseUpdate = b2;
}
function Eg(a2, b2, c2, d2) {
  var e2 = a2.updateQueue;
  wg = false;
  var f2 = e2.firstBaseUpdate, g2 = e2.lastBaseUpdate, h2 = e2.shared.pending;
  if (h2 !== null) {
    e2.shared.pending = null;
    var k2 = h2, l2 = k2.next;
    k2.next = null;
    g2 === null ? f2 = l2 : g2.next = l2;
    g2 = k2;
    var n2 = a2.alternate;
    n2 !== null && (n2 = n2.updateQueue, h2 = n2.lastBaseUpdate, h2 !== g2 && (h2 === null ? n2.firstBaseUpdate = l2 : h2.next = l2, n2.lastBaseUpdate = k2));
  }
  if (f2 !== null) {
    var u2 = e2.baseState;
    g2 = 0;
    n2 = l2 = k2 = null;
    h2 = f2;
    do {
      var q2 = h2.lane, y2 = h2.eventTime;
      if ((d2 & q2) === q2) {
        n2 !== null && (n2 = n2.next = {
          eventTime: y2,
          lane: 0,
          tag: h2.tag,
          payload: h2.payload,
          callback: h2.callback,
          next: null
        });
        a: {
          var m2 = a2, w2 = h2;
          q2 = b2;
          y2 = c2;
          switch (w2.tag) {
            case 1:
              m2 = w2.payload;
              if (typeof m2 === "function") {
                u2 = m2.call(y2, u2, q2);
                break a;
              }
              u2 = m2;
              break a;
            case 3:
              m2.flags = m2.flags & -65537 | 128;
            case 0:
              m2 = w2.payload;
              q2 = typeof m2 === "function" ? m2.call(y2, u2, q2) : m2;
              if (q2 === null || q2 === void 0)
                break a;
              u2 = A$2({}, u2, q2);
              break a;
            case 2:
              wg = true;
          }
        }
        h2.callback !== null && h2.lane !== 0 && (a2.flags |= 64, q2 = e2.effects, q2 === null ? e2.effects = [h2] : q2.push(h2));
      } else
        y2 = { eventTime: y2, lane: q2, tag: h2.tag, payload: h2.payload, callback: h2.callback, next: null }, n2 === null ? (l2 = n2 = y2, k2 = u2) : n2 = n2.next = y2, g2 |= q2;
      h2 = h2.next;
      if (h2 === null)
        if (h2 = e2.shared.pending, h2 === null)
          break;
        else
          q2 = h2, h2 = q2.next, q2.next = null, e2.lastBaseUpdate = q2, e2.shared.pending = null;
    } while (1);
    n2 === null && (k2 = u2);
    e2.baseState = k2;
    e2.firstBaseUpdate = l2;
    e2.lastBaseUpdate = n2;
    b2 = e2.shared.interleaved;
    if (b2 !== null) {
      e2 = b2;
      do
        g2 |= e2.lane, e2 = e2.next;
      while (e2 !== b2);
    } else
      f2 === null && (e2.shared.lanes = 0);
    Fg |= g2;
    a2.lanes = g2;
    a2.memoizedState = u2;
  }
}
function Gg(a2, b2, c2) {
  a2 = b2.effects;
  b2.effects = null;
  if (a2 !== null)
    for (b2 = 0; b2 < a2.length; b2++) {
      var d2 = a2[b2], e2 = d2.callback;
      if (e2 !== null) {
        d2.callback = null;
        d2 = c2;
        if (typeof e2 !== "function")
          throw Error(p$3(191, e2));
        e2.call(d2);
      }
    }
}
var Hg = new aa.Component().refs;
function Ig(a2, b2, c2, d2) {
  b2 = a2.memoizedState;
  c2 = c2(d2, b2);
  c2 = c2 === null || c2 === void 0 ? b2 : A$2({}, b2, c2);
  a2.memoizedState = c2;
  a2.lanes === 0 && (a2.updateQueue.baseState = c2);
}
var Mg = { isMounted: function(a2) {
  return (a2 = a2._reactInternals) ? Ub(a2) === a2 : false;
}, enqueueSetState: function(a2, b2, c2) {
  a2 = a2._reactInternals;
  var d2 = Jg(), e2 = Kg(a2), f2 = zg(d2, e2);
  f2.payload = b2;
  c2 !== void 0 && c2 !== null && (f2.callback = c2);
  Ag(a2, f2);
  b2 = Lg(a2, e2, d2);
  b2 !== null && Cg(b2, a2, e2);
}, enqueueReplaceState: function(a2, b2, c2) {
  a2 = a2._reactInternals;
  var d2 = Jg(), e2 = Kg(a2), f2 = zg(d2, e2);
  f2.tag = 1;
  f2.payload = b2;
  c2 !== void 0 && c2 !== null && (f2.callback = c2);
  Ag(a2, f2);
  b2 = Lg(a2, e2, d2);
  b2 !== null && Cg(b2, a2, e2);
}, enqueueForceUpdate: function(a2, b2) {
  a2 = a2._reactInternals;
  var c2 = Jg(), d2 = Kg(a2), e2 = zg(c2, d2);
  e2.tag = 2;
  b2 !== void 0 && b2 !== null && (e2.callback = b2);
  Ag(a2, e2);
  b2 = Lg(a2, d2, c2);
  b2 !== null && Cg(b2, a2, d2);
} };
function Ng(a2, b2, c2, d2, e2, f2, g2) {
  a2 = a2.stateNode;
  return typeof a2.shouldComponentUpdate === "function" ? a2.shouldComponentUpdate(d2, f2, g2) : b2.prototype && b2.prototype.isPureReactComponent ? !He$1(c2, d2) || !He$1(e2, f2) : true;
}
function Og(a2, b2, c2) {
  var d2 = false, e2 = Uf;
  var f2 = b2.contextType;
  typeof f2 === "object" && f2 !== null ? f2 = ug(f2) : (e2 = Yf(b2) ? Wf : H$1.current, d2 = b2.contextTypes, f2 = (d2 = d2 !== null && d2 !== void 0) ? Xf(a2, e2) : Uf);
  b2 = new b2(c2, f2);
  a2.memoizedState = b2.state !== null && b2.state !== void 0 ? b2.state : null;
  b2.updater = Mg;
  a2.stateNode = b2;
  b2._reactInternals = a2;
  d2 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = e2, a2.__reactInternalMemoizedMaskedChildContext = f2);
  return b2;
}
function Pg(a2, b2, c2, d2) {
  a2 = b2.state;
  typeof b2.componentWillReceiveProps === "function" && b2.componentWillReceiveProps(c2, d2);
  typeof b2.UNSAFE_componentWillReceiveProps === "function" && b2.UNSAFE_componentWillReceiveProps(c2, d2);
  b2.state !== a2 && Mg.enqueueReplaceState(b2, b2.state, null);
}
function Qg(a2, b2, c2, d2) {
  var e2 = a2.stateNode;
  e2.props = c2;
  e2.state = a2.memoizedState;
  e2.refs = Hg;
  xg(a2);
  var f2 = b2.contextType;
  typeof f2 === "object" && f2 !== null ? e2.context = ug(f2) : (f2 = Yf(b2) ? Wf : H$1.current, e2.context = Xf(a2, f2));
  e2.state = a2.memoizedState;
  f2 = b2.getDerivedStateFromProps;
  typeof f2 === "function" && (Ig(a2, b2, f2, c2), e2.state = a2.memoizedState);
  typeof b2.getDerivedStateFromProps === "function" || typeof e2.getSnapshotBeforeUpdate === "function" || typeof e2.UNSAFE_componentWillMount !== "function" && typeof e2.componentWillMount !== "function" || (b2 = e2.state, typeof e2.componentWillMount === "function" && e2.componentWillMount(), typeof e2.UNSAFE_componentWillMount === "function" && e2.UNSAFE_componentWillMount(), b2 !== e2.state && Mg.enqueueReplaceState(e2, e2.state, null), Eg(a2, c2, e2, d2), e2.state = a2.memoizedState);
  typeof e2.componentDidMount === "function" && (a2.flags |= 4194308);
}
var Rg = [], Sg = 0, Tg = null, Ug = 0, Vg = [], Wg = 0, Xg = null, Yg = 1, Zg = "";
function $g(a2, b2) {
  Rg[Sg++] = Ug;
  Rg[Sg++] = Tg;
  Tg = a2;
  Ug = b2;
}
function ah(a2, b2, c2) {
  Vg[Wg++] = Yg;
  Vg[Wg++] = Zg;
  Vg[Wg++] = Xg;
  Xg = a2;
  var d2 = Yg;
  a2 = Zg;
  var e2 = 32 - nc(d2) - 1;
  d2 &= ~(1 << e2);
  c2 += 1;
  var f2 = 32 - nc(b2) + e2;
  if (30 < f2) {
    var g2 = e2 - e2 % 5;
    f2 = (d2 & (1 << g2) - 1).toString(32);
    d2 >>= g2;
    e2 -= g2;
    Yg = 1 << 32 - nc(b2) + e2 | c2 << e2 | d2;
    Zg = f2 + a2;
  } else
    Yg = 1 << f2 | c2 << e2 | d2, Zg = a2;
}
function bh(a2) {
  a2.return !== null && ($g(a2, 1), ah(a2, 1, 0));
}
function ch(a2) {
  for (; a2 === Tg; )
    Tg = Rg[--Sg], Rg[Sg] = null, Ug = Rg[--Sg], Rg[Sg] = null;
  for (; a2 === Xg; )
    Xg = Vg[--Wg], Vg[Wg] = null, Zg = Vg[--Wg], Vg[Wg] = null, Yg = Vg[--Wg], Vg[Wg] = null;
}
var dh = null, eh = null, I$1 = false, fh = null;
function gh(a2, b2) {
  var c2 = hh(5, null, null, 0);
  c2.elementType = "DELETED";
  c2.stateNode = b2;
  c2.return = a2;
  b2 = a2.deletions;
  b2 === null ? (a2.deletions = [c2], a2.flags |= 16) : b2.push(c2);
}
function ih(a2, b2) {
  switch (a2.tag) {
    case 5:
      var c2 = a2.type;
      b2 = b2.nodeType !== 1 || c2.toLowerCase() !== b2.nodeName.toLowerCase() ? null : b2;
      return b2 !== null ? (a2.stateNode = b2, dh = a2, eh = Kf(b2.firstChild), true) : false;
    case 6:
      return b2 = a2.pendingProps === "" || b2.nodeType !== 3 ? null : b2, b2 !== null ? (a2.stateNode = b2, dh = a2, eh = null, true) : false;
    case 13:
      return b2 = b2.nodeType !== 8 ? null : b2, b2 !== null ? (c2 = Xg !== null ? { id: Yg, overflow: Zg } : null, a2.memoizedState = { dehydrated: b2, treeContext: c2, retryLane: 1073741824 }, c2 = hh(18, null, null, 0), c2.stateNode = b2, c2.return = a2, a2.child = c2, dh = a2, eh = null, true) : false;
    default:
      return false;
  }
}
function jh(a2) {
  return (a2.mode & 1) !== 0 && (a2.flags & 128) === 0;
}
function kh(a2) {
  if (I$1) {
    var b2 = eh;
    if (b2) {
      var c2 = b2;
      if (!ih(a2, b2)) {
        if (jh(a2))
          throw Error(p$3(418));
        b2 = Kf(c2.nextSibling);
        var d2 = dh;
        b2 && ih(a2, b2) ? gh(d2, c2) : (a2.flags = a2.flags & -4097 | 2, I$1 = false, dh = a2);
      }
    } else {
      if (jh(a2))
        throw Error(p$3(418));
      a2.flags = a2.flags & -4097 | 2;
      I$1 = false;
      dh = a2;
    }
  }
}
function lh(a2) {
  for (a2 = a2.return; a2 !== null && a2.tag !== 5 && a2.tag !== 3 && a2.tag !== 13; )
    a2 = a2.return;
  dh = a2;
}
function mh(a2) {
  if (a2 !== dh)
    return false;
  if (!I$1)
    return lh(a2), I$1 = true, false;
  var b2;
  (b2 = a2.tag !== 3) && !(b2 = a2.tag !== 5) && (b2 = a2.type, b2 = b2 !== "head" && b2 !== "body" && !Df(a2.type, a2.memoizedProps));
  if (b2 && (b2 = eh)) {
    if (jh(a2)) {
      for (a2 = eh; a2; )
        a2 = Kf(a2.nextSibling);
      throw Error(p$3(418));
    }
    for (; b2; )
      gh(a2, b2), b2 = Kf(b2.nextSibling);
  }
  lh(a2);
  if (a2.tag === 13) {
    a2 = a2.memoizedState;
    a2 = a2 !== null ? a2.dehydrated : null;
    if (!a2)
      throw Error(p$3(317));
    a: {
      a2 = a2.nextSibling;
      for (b2 = 0; a2; ) {
        if (a2.nodeType === 8) {
          var c2 = a2.data;
          if (c2 === "/$") {
            if (b2 === 0) {
              eh = Kf(a2.nextSibling);
              break a;
            }
            b2--;
          } else
            c2 !== "$" && c2 !== "$!" && c2 !== "$?" || b2++;
        }
        a2 = a2.nextSibling;
      }
      eh = null;
    }
  } else
    eh = dh ? Kf(a2.stateNode.nextSibling) : null;
  return true;
}
function nh() {
  eh = dh = null;
  I$1 = false;
}
function oh(a2) {
  fh === null ? fh = [a2] : fh.push(a2);
}
function ph(a2, b2, c2) {
  a2 = c2.ref;
  if (a2 !== null && typeof a2 !== "function" && typeof a2 !== "object") {
    if (c2._owner) {
      c2 = c2._owner;
      if (c2) {
        if (c2.tag !== 1)
          throw Error(p$3(309));
        var d2 = c2.stateNode;
      }
      if (!d2)
        throw Error(p$3(147, a2));
      var e2 = d2, f2 = "" + a2;
      if (b2 !== null && b2.ref !== null && typeof b2.ref === "function" && b2.ref._stringRef === f2)
        return b2.ref;
      b2 = function(a3) {
        var b3 = e2.refs;
        b3 === Hg && (b3 = e2.refs = {});
        a3 === null ? delete b3[f2] : b3[f2] = a3;
      };
      b2._stringRef = f2;
      return b2;
    }
    if (typeof a2 !== "string")
      throw Error(p$3(284));
    if (!c2._owner)
      throw Error(p$3(290, a2));
  }
  return a2;
}
function qh(a2, b2) {
  a2 = Object.prototype.toString.call(b2);
  throw Error(p$3(31, a2 === "[object Object]" ? "object with keys {" + Object.keys(b2).join(", ") + "}" : a2));
}
function rh(a2) {
  var b2 = a2._init;
  return b2(a2._payload);
}
function sh(a2) {
  function b2(b3, c3) {
    if (a2) {
      var d3 = b3.deletions;
      d3 === null ? (b3.deletions = [c3], b3.flags |= 16) : d3.push(c3);
    }
  }
  function c2(c3, d3) {
    if (!a2)
      return null;
    for (; d3 !== null; )
      b2(c3, d3), d3 = d3.sibling;
    return null;
  }
  function d2(a3, b3) {
    for (a3 = /* @__PURE__ */ new Map(); b3 !== null; )
      b3.key !== null ? a3.set(b3.key, b3) : a3.set(b3.index, b3), b3 = b3.sibling;
    return a3;
  }
  function e2(a3, b3) {
    a3 = th(a3, b3);
    a3.index = 0;
    a3.sibling = null;
    return a3;
  }
  function f2(b3, c3, d3) {
    b3.index = d3;
    if (!a2)
      return b3.flags |= 1048576, c3;
    d3 = b3.alternate;
    if (d3 !== null)
      return d3 = d3.index, d3 < c3 ? (b3.flags |= 2, c3) : d3;
    b3.flags |= 2;
    return c3;
  }
  function g2(b3) {
    a2 && b3.alternate === null && (b3.flags |= 2);
    return b3;
  }
  function h2(a3, b3, c3, d3) {
    if (b3 === null || b3.tag !== 6)
      return b3 = uh(c3, a3.mode, d3), b3.return = a3, b3;
    b3 = e2(b3, c3);
    b3.return = a3;
    return b3;
  }
  function k2(a3, b3, c3, d3) {
    var f3 = c3.type;
    if (f3 === wa)
      return n2(a3, b3, c3.props.children, d3, c3.key);
    if (b3 !== null && (b3.elementType === f3 || typeof f3 === "object" && f3 !== null && f3.$$typeof === Ga && rh(f3) === b3.type))
      return d3 = e2(b3, c3.props), d3.ref = ph(a3, b3, c3), d3.return = a3, d3;
    d3 = vh$1(c3.type, c3.key, c3.props, null, a3.mode, d3);
    d3.ref = ph(a3, b3, c3);
    d3.return = a3;
    return d3;
  }
  function l2(a3, b3, c3, d3) {
    if (b3 === null || b3.tag !== 4 || b3.stateNode.containerInfo !== c3.containerInfo || b3.stateNode.implementation !== c3.implementation)
      return b3 = wh(c3, a3.mode, d3), b3.return = a3, b3;
    b3 = e2(b3, c3.children || []);
    b3.return = a3;
    return b3;
  }
  function n2(a3, b3, c3, d3, f3) {
    if (b3 === null || b3.tag !== 7)
      return b3 = xh(c3, a3.mode, d3, f3), b3.return = a3, b3;
    b3 = e2(b3, c3);
    b3.return = a3;
    return b3;
  }
  function u2(a3, b3, c3) {
    if (typeof b3 === "string" && b3 !== "" || typeof b3 === "number")
      return b3 = uh("" + b3, a3.mode, c3), b3.return = a3, b3;
    if (typeof b3 === "object" && b3 !== null) {
      switch (b3.$$typeof) {
        case ua:
          return c3 = vh$1(b3.type, b3.key, b3.props, null, a3.mode, c3), c3.ref = ph(a3, null, b3), c3.return = a3, c3;
        case va:
          return b3 = wh(b3, a3.mode, c3), b3.return = a3, b3;
        case Ga:
          var d3 = b3._init;
          return u2(a3, d3(b3._payload), c3);
      }
      if (db(b3) || Ja(b3))
        return b3 = xh(b3, a3.mode, c3, null), b3.return = a3, b3;
      qh(a3, b3);
    }
    return null;
  }
  function q2(a3, b3, c3, d3) {
    var e3 = b3 !== null ? b3.key : null;
    if (typeof c3 === "string" && c3 !== "" || typeof c3 === "number")
      return e3 !== null ? null : h2(a3, b3, "" + c3, d3);
    if (typeof c3 === "object" && c3 !== null) {
      switch (c3.$$typeof) {
        case ua:
          return c3.key === e3 ? k2(a3, b3, c3, d3) : null;
        case va:
          return c3.key === e3 ? l2(a3, b3, c3, d3) : null;
        case Ga:
          return e3 = c3._init, q2(a3, b3, e3(c3._payload), d3);
      }
      if (db(c3) || Ja(c3))
        return e3 !== null ? null : n2(a3, b3, c3, d3, null);
      qh(a3, c3);
    }
    return null;
  }
  function y2(a3, b3, c3, d3, e3) {
    if (typeof d3 === "string" && d3 !== "" || typeof d3 === "number")
      return a3 = a3.get(c3) || null, h2(b3, a3, "" + d3, e3);
    if (typeof d3 === "object" && d3 !== null) {
      switch (d3.$$typeof) {
        case ua:
          return a3 = a3.get(d3.key === null ? c3 : d3.key) || null, k2(b3, a3, d3, e3);
        case va:
          return a3 = a3.get(d3.key === null ? c3 : d3.key) || null, l2(b3, a3, d3, e3);
        case Ga:
          var f3 = d3._init;
          return y2(a3, b3, c3, f3(d3._payload), e3);
      }
      if (db(d3) || Ja(d3))
        return a3 = a3.get(c3) || null, n2(b3, a3, d3, e3, null);
      qh(b3, d3);
    }
    return null;
  }
  function m2(e3, g3, h3, k3) {
    for (var l3 = null, n3 = null, r2 = g3, m3 = g3 = 0, x2 = null; r2 !== null && m3 < h3.length; m3++) {
      r2.index > m3 ? (x2 = r2, r2 = null) : x2 = r2.sibling;
      var v2 = q2(e3, r2, h3[m3], k3);
      if (v2 === null) {
        r2 === null && (r2 = x2);
        break;
      }
      a2 && r2 && v2.alternate === null && b2(e3, r2);
      g3 = f2(v2, g3, m3);
      n3 === null ? l3 = v2 : n3.sibling = v2;
      n3 = v2;
      r2 = x2;
    }
    if (m3 === h3.length)
      return c2(e3, r2), I$1 && $g(e3, m3), l3;
    if (r2 === null) {
      for (; m3 < h3.length; m3++)
        r2 = u2(e3, h3[m3], k3), r2 !== null && (g3 = f2(r2, g3, m3), n3 === null ? l3 = r2 : n3.sibling = r2, n3 = r2);
      I$1 && $g(e3, m3);
      return l3;
    }
    for (r2 = d2(e3, r2); m3 < h3.length; m3++)
      x2 = y2(r2, e3, m3, h3[m3], k3), x2 !== null && (a2 && x2.alternate !== null && r2.delete(x2.key === null ? m3 : x2.key), g3 = f2(x2, g3, m3), n3 === null ? l3 = x2 : n3.sibling = x2, n3 = x2);
    a2 && r2.forEach(function(a3) {
      return b2(e3, a3);
    });
    I$1 && $g(e3, m3);
    return l3;
  }
  function w2(e3, g3, h3, k3) {
    var l3 = Ja(h3);
    if (typeof l3 !== "function")
      throw Error(p$3(150));
    h3 = l3.call(h3);
    if (h3 == null)
      throw Error(p$3(151));
    for (var n3 = l3 = null, m3 = g3, r2 = g3 = 0, x2 = null, v2 = h3.next(); m3 !== null && !v2.done; r2++, v2 = h3.next()) {
      m3.index > r2 ? (x2 = m3, m3 = null) : x2 = m3.sibling;
      var w3 = q2(e3, m3, v2.value, k3);
      if (w3 === null) {
        m3 === null && (m3 = x2);
        break;
      }
      a2 && m3 && w3.alternate === null && b2(e3, m3);
      g3 = f2(w3, g3, r2);
      n3 === null ? l3 = w3 : n3.sibling = w3;
      n3 = w3;
      m3 = x2;
    }
    if (v2.done)
      return c2(e3, m3), I$1 && $g(e3, r2), l3;
    if (m3 === null) {
      for (; !v2.done; r2++, v2 = h3.next())
        v2 = u2(e3, v2.value, k3), v2 !== null && (g3 = f2(v2, g3, r2), n3 === null ? l3 = v2 : n3.sibling = v2, n3 = v2);
      I$1 && $g(e3, r2);
      return l3;
    }
    for (m3 = d2(e3, m3); !v2.done; r2++, v2 = h3.next())
      v2 = y2(m3, e3, r2, v2.value, k3), v2 !== null && (a2 && v2.alternate !== null && m3.delete(v2.key === null ? r2 : v2.key), g3 = f2(v2, g3, r2), n3 === null ? l3 = v2 : n3.sibling = v2, n3 = v2);
    a2 && m3.forEach(function(a3) {
      return b2(e3, a3);
    });
    I$1 && $g(e3, r2);
    return l3;
  }
  function J2(a3, d3, f3, h3) {
    typeof f3 === "object" && f3 !== null && f3.type === wa && f3.key === null && (f3 = f3.props.children);
    if (typeof f3 === "object" && f3 !== null) {
      switch (f3.$$typeof) {
        case ua:
          a: {
            for (var k3 = f3.key, l3 = d3; l3 !== null; ) {
              if (l3.key === k3) {
                k3 = f3.type;
                if (k3 === wa) {
                  if (l3.tag === 7) {
                    c2(a3, l3.sibling);
                    d3 = e2(l3, f3.props.children);
                    d3.return = a3;
                    a3 = d3;
                    break a;
                  }
                } else if (l3.elementType === k3 || typeof k3 === "object" && k3 !== null && k3.$$typeof === Ga && rh(k3) === l3.type) {
                  c2(a3, l3.sibling);
                  d3 = e2(l3, f3.props);
                  d3.ref = ph(a3, l3, f3);
                  d3.return = a3;
                  a3 = d3;
                  break a;
                }
                c2(a3, l3);
                break;
              } else
                b2(a3, l3);
              l3 = l3.sibling;
            }
            f3.type === wa ? (d3 = xh(f3.props.children, a3.mode, h3, f3.key), d3.return = a3, a3 = d3) : (h3 = vh$1(f3.type, f3.key, f3.props, null, a3.mode, h3), h3.ref = ph(a3, d3, f3), h3.return = a3, a3 = h3);
          }
          return g2(a3);
        case va:
          a: {
            for (l3 = f3.key; d3 !== null; ) {
              if (d3.key === l3)
                if (d3.tag === 4 && d3.stateNode.containerInfo === f3.containerInfo && d3.stateNode.implementation === f3.implementation) {
                  c2(a3, d3.sibling);
                  d3 = e2(d3, f3.children || []);
                  d3.return = a3;
                  a3 = d3;
                  break a;
                } else {
                  c2(a3, d3);
                  break;
                }
              else
                b2(a3, d3);
              d3 = d3.sibling;
            }
            d3 = wh(f3, a3.mode, h3);
            d3.return = a3;
            a3 = d3;
          }
          return g2(a3);
        case Ga:
          return l3 = f3._init, J2(a3, d3, l3(f3._payload), h3);
      }
      if (db(f3))
        return m2(a3, d3, f3, h3);
      if (Ja(f3))
        return w2(a3, d3, f3, h3);
      qh(a3, f3);
    }
    return typeof f3 === "string" && f3 !== "" || typeof f3 === "number" ? (f3 = "" + f3, d3 !== null && d3.tag === 6 ? (c2(a3, d3.sibling), d3 = e2(d3, f3), d3.return = a3, a3 = d3) : (c2(a3, d3), d3 = uh(f3, a3.mode, h3), d3.return = a3, a3 = d3), g2(a3)) : c2(a3, d3);
  }
  return J2;
}
var yh = sh(true), zh = sh(false), Ah = {}, Bh = Tf(Ah), Ch = Tf(Ah), Dh = Tf(Ah);
function Eh(a2) {
  if (a2 === Ah)
    throw Error(p$3(174));
  return a2;
}
function Fh(a2, b2) {
  G$1(Dh, b2);
  G$1(Ch, a2);
  G$1(Bh, Ah);
  a2 = b2.nodeType;
  switch (a2) {
    case 9:
    case 11:
      b2 = (b2 = b2.documentElement) ? b2.namespaceURI : kb(null, "");
      break;
    default:
      a2 = a2 === 8 ? b2.parentNode : b2, b2 = a2.namespaceURI || null, a2 = a2.tagName, b2 = kb(b2, a2);
  }
  E$1(Bh);
  G$1(Bh, b2);
}
function Gh() {
  E$1(Bh);
  E$1(Ch);
  E$1(Dh);
}
function Hh(a2) {
  Eh(Dh.current);
  var b2 = Eh(Bh.current);
  var c2 = kb(b2, a2.type);
  b2 !== c2 && (G$1(Ch, a2), G$1(Bh, c2));
}
function Ih(a2) {
  Ch.current === a2 && (E$1(Bh), E$1(Ch));
}
var K$1 = Tf(0);
function Jh(a2) {
  for (var b2 = a2; b2 !== null; ) {
    if (b2.tag === 13) {
      var c2 = b2.memoizedState;
      if (c2 !== null && (c2 = c2.dehydrated, c2 === null || c2.data === "$?" || c2.data === "$!"))
        return b2;
    } else if (b2.tag === 19 && b2.memoizedProps.revealOrder !== void 0) {
      if ((b2.flags & 128) !== 0)
        return b2;
    } else if (b2.child !== null) {
      b2.child.return = b2;
      b2 = b2.child;
      continue;
    }
    if (b2 === a2)
      break;
    for (; b2.sibling === null; ) {
      if (b2.return === null || b2.return === a2)
        return null;
      b2 = b2.return;
    }
    b2.sibling.return = b2.return;
    b2 = b2.sibling;
  }
  return null;
}
var Kh = [];
function Lh() {
  for (var a2 = 0; a2 < Kh.length; a2++)
    Kh[a2]._workInProgressVersionPrimary = null;
  Kh.length = 0;
}
var Mh = ta.ReactCurrentDispatcher, Nh = ta.ReactCurrentBatchConfig, Oh = 0, L$1 = null, M$1 = null, N$1 = null, Ph = false, Qh = false, Rh = 0, Sh = 0;
function O$1() {
  throw Error(p$3(321));
}
function Th(a2, b2) {
  if (b2 === null)
    return false;
  for (var c2 = 0; c2 < b2.length && c2 < a2.length; c2++)
    if (!Ge$1(a2[c2], b2[c2]))
      return false;
  return true;
}
function Uh(a2, b2, c2, d2, e2, f2) {
  Oh = f2;
  L$1 = b2;
  b2.memoizedState = null;
  b2.updateQueue = null;
  b2.lanes = 0;
  Mh.current = a2 === null || a2.memoizedState === null ? Vh : Wh;
  a2 = c2(d2, e2);
  if (Qh) {
    f2 = 0;
    do {
      Qh = false;
      Rh = 0;
      if (25 <= f2)
        throw Error(p$3(301));
      f2 += 1;
      N$1 = M$1 = null;
      b2.updateQueue = null;
      Mh.current = Xh;
      a2 = c2(d2, e2);
    } while (Qh);
  }
  Mh.current = Yh;
  b2 = M$1 !== null && M$1.next !== null;
  Oh = 0;
  N$1 = M$1 = L$1 = null;
  Ph = false;
  if (b2)
    throw Error(p$3(300));
  return a2;
}
function Zh() {
  var a2 = Rh !== 0;
  Rh = 0;
  return a2;
}
function $h() {
  var a2 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  N$1 === null ? L$1.memoizedState = N$1 = a2 : N$1 = N$1.next = a2;
  return N$1;
}
function ai() {
  if (M$1 === null) {
    var a2 = L$1.alternate;
    a2 = a2 !== null ? a2.memoizedState : null;
  } else
    a2 = M$1.next;
  var b2 = N$1 === null ? L$1.memoizedState : N$1.next;
  if (b2 !== null)
    N$1 = b2, M$1 = a2;
  else {
    if (a2 === null)
      throw Error(p$3(310));
    M$1 = a2;
    a2 = { memoizedState: M$1.memoizedState, baseState: M$1.baseState, baseQueue: M$1.baseQueue, queue: M$1.queue, next: null };
    N$1 === null ? L$1.memoizedState = N$1 = a2 : N$1 = N$1.next = a2;
  }
  return N$1;
}
function bi(a2, b2) {
  return typeof b2 === "function" ? b2(a2) : b2;
}
function ci(a2) {
  var b2 = ai(), c2 = b2.queue;
  if (c2 === null)
    throw Error(p$3(311));
  c2.lastRenderedReducer = a2;
  var d2 = M$1, e2 = d2.baseQueue, f2 = c2.pending;
  if (f2 !== null) {
    if (e2 !== null) {
      var g2 = e2.next;
      e2.next = f2.next;
      f2.next = g2;
    }
    d2.baseQueue = e2 = f2;
    c2.pending = null;
  }
  if (e2 !== null) {
    f2 = e2.next;
    d2 = d2.baseState;
    var h2 = g2 = null, k2 = null, l2 = f2;
    do {
      var n2 = l2.lane;
      if ((Oh & n2) === n2)
        k2 !== null && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d2 = l2.hasEagerState ? l2.eagerState : a2(d2, l2.action);
      else {
        var u2 = {
          lane: n2,
          action: l2.action,
          hasEagerState: l2.hasEagerState,
          eagerState: l2.eagerState,
          next: null
        };
        k2 === null ? (h2 = k2 = u2, g2 = d2) : k2 = k2.next = u2;
        L$1.lanes |= n2;
        Fg |= n2;
      }
      l2 = l2.next;
    } while (l2 !== null && l2 !== f2);
    k2 === null ? g2 = d2 : k2.next = h2;
    Ge$1(d2, b2.memoizedState) || (tg = true);
    b2.memoizedState = d2;
    b2.baseState = g2;
    b2.baseQueue = k2;
    c2.lastRenderedState = d2;
  }
  a2 = c2.interleaved;
  if (a2 !== null) {
    e2 = a2;
    do
      f2 = e2.lane, L$1.lanes |= f2, Fg |= f2, e2 = e2.next;
    while (e2 !== a2);
  } else
    e2 === null && (c2.lanes = 0);
  return [b2.memoizedState, c2.dispatch];
}
function di(a2) {
  var b2 = ai(), c2 = b2.queue;
  if (c2 === null)
    throw Error(p$3(311));
  c2.lastRenderedReducer = a2;
  var d2 = c2.dispatch, e2 = c2.pending, f2 = b2.memoizedState;
  if (e2 !== null) {
    c2.pending = null;
    var g2 = e2 = e2.next;
    do
      f2 = a2(f2, g2.action), g2 = g2.next;
    while (g2 !== e2);
    Ge$1(f2, b2.memoizedState) || (tg = true);
    b2.memoizedState = f2;
    b2.baseQueue === null && (b2.baseState = f2);
    c2.lastRenderedState = f2;
  }
  return [f2, d2];
}
function ei() {
}
function fi(a2, b2) {
  var c2 = L$1, d2 = ai(), e2 = b2(), f2 = !Ge$1(d2.memoizedState, e2);
  f2 && (d2.memoizedState = e2, tg = true);
  d2 = d2.queue;
  gi(hi.bind(null, c2, d2, a2), [a2]);
  if (d2.getSnapshot !== b2 || f2 || N$1 !== null && N$1.memoizedState.tag & 1) {
    c2.flags |= 2048;
    ii(9, ji.bind(null, c2, d2, e2, b2), void 0, null);
    if (P$1 === null)
      throw Error(p$3(349));
    (Oh & 30) !== 0 || ki(c2, b2, e2);
  }
  return e2;
}
function ki(a2, b2, c2) {
  a2.flags |= 16384;
  a2 = { getSnapshot: b2, value: c2 };
  b2 = L$1.updateQueue;
  b2 === null ? (b2 = { lastEffect: null, stores: null }, L$1.updateQueue = b2, b2.stores = [a2]) : (c2 = b2.stores, c2 === null ? b2.stores = [a2] : c2.push(a2));
}
function ji(a2, b2, c2, d2) {
  b2.value = c2;
  b2.getSnapshot = d2;
  li(b2) && Lg(a2, 1, -1);
}
function hi(a2, b2, c2) {
  return c2(function() {
    li(b2) && Lg(a2, 1, -1);
  });
}
function li(a2) {
  var b2 = a2.getSnapshot;
  a2 = a2.value;
  try {
    var c2 = b2();
    return !Ge$1(a2, c2);
  } catch (d2) {
    return true;
  }
}
function mi(a2) {
  var b2 = $h();
  typeof a2 === "function" && (a2 = a2());
  b2.memoizedState = b2.baseState = a2;
  a2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: bi, lastRenderedState: a2 };
  b2.queue = a2;
  a2 = a2.dispatch = ni.bind(null, L$1, a2);
  return [b2.memoizedState, a2];
}
function ii(a2, b2, c2, d2) {
  a2 = { tag: a2, create: b2, destroy: c2, deps: d2, next: null };
  b2 = L$1.updateQueue;
  b2 === null ? (b2 = { lastEffect: null, stores: null }, L$1.updateQueue = b2, b2.lastEffect = a2.next = a2) : (c2 = b2.lastEffect, c2 === null ? b2.lastEffect = a2.next = a2 : (d2 = c2.next, c2.next = a2, a2.next = d2, b2.lastEffect = a2));
  return a2;
}
function oi() {
  return ai().memoizedState;
}
function pi(a2, b2, c2, d2) {
  var e2 = $h();
  L$1.flags |= a2;
  e2.memoizedState = ii(1 | b2, c2, void 0, d2 === void 0 ? null : d2);
}
function qi(a2, b2, c2, d2) {
  var e2 = ai();
  d2 = d2 === void 0 ? null : d2;
  var f2 = void 0;
  if (M$1 !== null) {
    var g2 = M$1.memoizedState;
    f2 = g2.destroy;
    if (d2 !== null && Th(d2, g2.deps)) {
      e2.memoizedState = ii(b2, c2, f2, d2);
      return;
    }
  }
  L$1.flags |= a2;
  e2.memoizedState = ii(1 | b2, c2, f2, d2);
}
function ri(a2, b2) {
  return pi(8390656, 8, a2, b2);
}
function gi(a2, b2) {
  return qi(2048, 8, a2, b2);
}
function si(a2, b2) {
  return qi(4, 2, a2, b2);
}
function ti(a2, b2) {
  return qi(4, 4, a2, b2);
}
function ui(a2, b2) {
  if (typeof b2 === "function")
    return a2 = a2(), b2(a2), function() {
      b2(null);
    };
  if (b2 !== null && b2 !== void 0)
    return a2 = a2(), b2.current = a2, function() {
      b2.current = null;
    };
}
function vi(a2, b2, c2) {
  c2 = c2 !== null && c2 !== void 0 ? c2.concat([a2]) : null;
  return qi(4, 4, ui.bind(null, b2, a2), c2);
}
function wi() {
}
function xi(a2, b2) {
  var c2 = ai();
  b2 = b2 === void 0 ? null : b2;
  var d2 = c2.memoizedState;
  if (d2 !== null && b2 !== null && Th(b2, d2[1]))
    return d2[0];
  c2.memoizedState = [a2, b2];
  return a2;
}
function yi(a2, b2) {
  var c2 = ai();
  b2 = b2 === void 0 ? null : b2;
  var d2 = c2.memoizedState;
  if (d2 !== null && b2 !== null && Th(b2, d2[1]))
    return d2[0];
  a2 = a2();
  c2.memoizedState = [a2, b2];
  return a2;
}
function zi(a2, b2, c2) {
  if ((Oh & 21) === 0)
    return a2.baseState && (a2.baseState = false, tg = true), a2.memoizedState = c2;
  Ge$1(c2, b2) || (c2 = xc(), L$1.lanes |= c2, Fg |= c2, a2.baseState = true);
  return b2;
}
function Ai(a2, b2) {
  var c2 = C;
  C = c2 !== 0 && 4 > c2 ? c2 : 4;
  a2(true);
  var d2 = Nh.transition;
  Nh.transition = {};
  try {
    a2(false), b2();
  } finally {
    C = c2, Nh.transition = d2;
  }
}
function Bi() {
  return ai().memoizedState;
}
function Ci(a2, b2, c2) {
  var d2 = Kg(a2);
  c2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
  Di(a2) ? Ei(b2, c2) : (Fi(a2, b2, c2), c2 = Jg(), a2 = Lg(a2, d2, c2), a2 !== null && Gi(a2, b2, d2));
}
function ni(a2, b2, c2) {
  var d2 = Kg(a2), e2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
  if (Di(a2))
    Ei(b2, e2);
  else {
    Fi(a2, b2, e2);
    var f2 = a2.alternate;
    if (a2.lanes === 0 && (f2 === null || f2.lanes === 0) && (f2 = b2.lastRenderedReducer, f2 !== null))
      try {
        var g2 = b2.lastRenderedState, h2 = f2(g2, c2);
        e2.hasEagerState = true;
        e2.eagerState = h2;
        if (Ge$1(h2, g2))
          return;
      } catch (k2) {
      } finally {
      }
    c2 = Jg();
    a2 = Lg(a2, d2, c2);
    a2 !== null && Gi(a2, b2, d2);
  }
}
function Di(a2) {
  var b2 = a2.alternate;
  return a2 === L$1 || b2 !== null && b2 === L$1;
}
function Ei(a2, b2) {
  Qh = Ph = true;
  var c2 = a2.pending;
  c2 === null ? b2.next = b2 : (b2.next = c2.next, c2.next = b2);
  a2.pending = b2;
}
function Fi(a2, b2, c2) {
  Bg(a2) ? (a2 = b2.interleaved, a2 === null ? (c2.next = c2, vg === null ? vg = [b2] : vg.push(b2)) : (c2.next = a2.next, a2.next = c2), b2.interleaved = c2) : (a2 = b2.pending, a2 === null ? c2.next = c2 : (c2.next = a2.next, a2.next = c2), b2.pending = c2);
}
function Gi(a2, b2, c2) {
  if ((c2 & 4194240) !== 0) {
    var d2 = b2.lanes;
    d2 &= a2.pendingLanes;
    c2 |= d2;
    b2.lanes = c2;
    Bc(a2, c2);
  }
}
var Yh = { readContext: ug, useCallback: O$1, useContext: O$1, useEffect: O$1, useImperativeHandle: O$1, useInsertionEffect: O$1, useLayoutEffect: O$1, useMemo: O$1, useReducer: O$1, useRef: O$1, useState: O$1, useDebugValue: O$1, useDeferredValue: O$1, useTransition: O$1, useMutableSource: O$1, useSyncExternalStore: O$1, useId: O$1, unstable_isNewReconciler: false }, Vh = { readContext: ug, useCallback: function(a2, b2) {
  $h().memoizedState = [a2, b2 === void 0 ? null : b2];
  return a2;
}, useContext: ug, useEffect: ri, useImperativeHandle: function(a2, b2, c2) {
  c2 = c2 !== null && c2 !== void 0 ? c2.concat([a2]) : null;
  return pi(4194308, 4, ui.bind(null, b2, a2), c2);
}, useLayoutEffect: function(a2, b2) {
  return pi(4194308, 4, a2, b2);
}, useInsertionEffect: function(a2, b2) {
  return pi(4, 2, a2, b2);
}, useMemo: function(a2, b2) {
  var c2 = $h();
  b2 = b2 === void 0 ? null : b2;
  a2 = a2();
  c2.memoizedState = [a2, b2];
  return a2;
}, useReducer: function(a2, b2, c2) {
  var d2 = $h();
  b2 = c2 !== void 0 ? c2(b2) : b2;
  d2.memoizedState = d2.baseState = b2;
  a2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a2, lastRenderedState: b2 };
  d2.queue = a2;
  a2 = a2.dispatch = Ci.bind(null, L$1, a2);
  return [d2.memoizedState, a2];
}, useRef: function(a2) {
  var b2 = $h();
  a2 = { current: a2 };
  return b2.memoizedState = a2;
}, useState: mi, useDebugValue: wi, useDeferredValue: function(a2) {
  return $h().memoizedState = a2;
}, useTransition: function() {
  var a2 = mi(false), b2 = a2[0];
  a2 = Ai.bind(null, a2[1]);
  $h().memoizedState = a2;
  return [b2, a2];
}, useMutableSource: function() {
}, useSyncExternalStore: function(a2, b2, c2) {
  var d2 = L$1, e2 = $h();
  if (I$1) {
    if (c2 === void 0)
      throw Error(p$3(407));
    c2 = c2();
  } else {
    c2 = b2();
    if (P$1 === null)
      throw Error(p$3(349));
    (Oh & 30) !== 0 || ki(d2, b2, c2);
  }
  e2.memoizedState = c2;
  var f2 = { value: c2, getSnapshot: b2 };
  e2.queue = f2;
  ri(hi.bind(null, d2, f2, a2), [a2]);
  d2.flags |= 2048;
  ii(9, ji.bind(null, d2, f2, c2, b2), void 0, null);
  return c2;
}, useId: function() {
  var a2 = $h(), b2 = P$1.identifierPrefix;
  if (I$1) {
    var c2 = Zg;
    var d2 = Yg;
    c2 = (d2 & ~(1 << 32 - nc(d2) - 1)).toString(32) + c2;
    b2 = ":" + b2 + "R" + c2;
    c2 = Rh++;
    0 < c2 && (b2 += "H" + c2.toString(32));
    b2 += ":";
  } else
    c2 = Sh++, b2 = ":" + b2 + "r" + c2.toString(32) + ":";
  return a2.memoizedState = b2;
}, unstable_isNewReconciler: false }, Wh = {
  readContext: ug,
  useCallback: xi,
  useContext: ug,
  useEffect: gi,
  useImperativeHandle: vi,
  useInsertionEffect: si,
  useLayoutEffect: ti,
  useMemo: yi,
  useReducer: ci,
  useRef: oi,
  useState: function() {
    return ci(bi);
  },
  useDebugValue: wi,
  useDeferredValue: function(a2) {
    var b2 = ai();
    return zi(b2, M$1.memoizedState, a2);
  },
  useTransition: function() {
    var a2 = ci(bi)[0], b2 = ai().memoizedState;
    return [a2, b2];
  },
  useMutableSource: ei,
  useSyncExternalStore: fi,
  useId: Bi,
  unstable_isNewReconciler: false
}, Xh = { readContext: ug, useCallback: xi, useContext: ug, useEffect: gi, useImperativeHandle: vi, useInsertionEffect: si, useLayoutEffect: ti, useMemo: yi, useReducer: di, useRef: oi, useState: function() {
  return di(bi);
}, useDebugValue: wi, useDeferredValue: function(a2) {
  var b2 = ai();
  return M$1 === null ? b2.memoizedState = a2 : zi(b2, M$1.memoizedState, a2);
}, useTransition: function() {
  var a2 = di(bi)[0], b2 = ai().memoizedState;
  return [a2, b2];
}, useMutableSource: ei, useSyncExternalStore: fi, useId: Bi, unstable_isNewReconciler: false };
function Hi(a2, b2) {
  try {
    var c2 = "", d2 = b2;
    do
      c2 += Oa(d2), d2 = d2.return;
    while (d2);
    var e2 = c2;
  } catch (f2) {
    e2 = "\nError generating stack: " + f2.message + "\n" + f2.stack;
  }
  return { value: a2, source: b2, stack: e2 };
}
function Ii(a2, b2) {
  try {
    console.error(b2.value);
  } catch (c2) {
    setTimeout(function() {
      throw c2;
    });
  }
}
var Ji = typeof WeakMap === "function" ? WeakMap : Map;
function Ki(a2, b2, c2) {
  c2 = zg(-1, c2);
  c2.tag = 3;
  c2.payload = { element: null };
  var d2 = b2.value;
  c2.callback = function() {
    Li || (Li = true, Mi = d2);
    Ii(a2, b2);
  };
  return c2;
}
function Ni(a2, b2, c2) {
  c2 = zg(-1, c2);
  c2.tag = 3;
  var d2 = a2.type.getDerivedStateFromError;
  if (typeof d2 === "function") {
    var e2 = b2.value;
    c2.payload = function() {
      return d2(e2);
    };
    c2.callback = function() {
      Ii(a2, b2);
    };
  }
  var f2 = a2.stateNode;
  f2 !== null && typeof f2.componentDidCatch === "function" && (c2.callback = function() {
    Ii(a2, b2);
    typeof d2 !== "function" && (Oi === null ? Oi = /* @__PURE__ */ new Set([this]) : Oi.add(this));
    var c3 = b2.stack;
    this.componentDidCatch(b2.value, { componentStack: c3 !== null ? c3 : "" });
  });
  return c2;
}
function Pi(a2, b2, c2) {
  var d2 = a2.pingCache;
  if (d2 === null) {
    d2 = a2.pingCache = new Ji();
    var e2 = /* @__PURE__ */ new Set();
    d2.set(b2, e2);
  } else
    e2 = d2.get(b2), e2 === void 0 && (e2 = /* @__PURE__ */ new Set(), d2.set(b2, e2));
  e2.has(c2) || (e2.add(c2), a2 = Qi.bind(null, a2, b2, c2), b2.then(a2, a2));
}
function Ri(a2) {
  do {
    var b2;
    if (b2 = a2.tag === 13)
      b2 = a2.memoizedState, b2 = b2 !== null ? b2.dehydrated !== null ? true : false : true;
    if (b2)
      return a2;
    a2 = a2.return;
  } while (a2 !== null);
  return null;
}
function Si(a2, b2, c2, d2, e2) {
  if ((a2.mode & 1) === 0)
    return a2 === b2 ? a2.flags |= 65536 : (a2.flags |= 128, c2.flags |= 131072, c2.flags &= -52805, c2.tag === 1 && (c2.alternate === null ? c2.tag = 17 : (b2 = zg(-1, 1), b2.tag = 2, Ag(c2, b2))), c2.lanes |= 1), a2;
  a2.flags |= 65536;
  a2.lanes = e2;
  return a2;
}
var Ti, Ui, Vi, Wi;
Ti = function(a2, b2) {
  for (var c2 = b2.child; c2 !== null; ) {
    if (c2.tag === 5 || c2.tag === 6)
      a2.appendChild(c2.stateNode);
    else if (c2.tag !== 4 && c2.child !== null) {
      c2.child.return = c2;
      c2 = c2.child;
      continue;
    }
    if (c2 === b2)
      break;
    for (; c2.sibling === null; ) {
      if (c2.return === null || c2.return === b2)
        return;
      c2 = c2.return;
    }
    c2.sibling.return = c2.return;
    c2 = c2.sibling;
  }
};
Ui = function() {
};
Vi = function(a2, b2, c2, d2) {
  var e2 = a2.memoizedProps;
  if (e2 !== d2) {
    a2 = b2.stateNode;
    Eh(Bh.current);
    var f2 = null;
    switch (c2) {
      case "input":
        e2 = Xa(a2, e2);
        d2 = Xa(a2, d2);
        f2 = [];
        break;
      case "select":
        e2 = A$2({}, e2, { value: void 0 });
        d2 = A$2({}, d2, { value: void 0 });
        f2 = [];
        break;
      case "textarea":
        e2 = fb(a2, e2);
        d2 = fb(a2, d2);
        f2 = [];
        break;
      default:
        typeof e2.onClick !== "function" && typeof d2.onClick === "function" && (a2.onclick = Af);
    }
    tb(c2, d2);
    var g2;
    c2 = null;
    for (l2 in e2)
      if (!d2.hasOwnProperty(l2) && e2.hasOwnProperty(l2) && e2[l2] != null)
        if (l2 === "style") {
          var h2 = e2[l2];
          for (g2 in h2)
            h2.hasOwnProperty(g2) && (c2 || (c2 = {}), c2[g2] = "");
        } else
          l2 !== "dangerouslySetInnerHTML" && l2 !== "children" && l2 !== "suppressContentEditableWarning" && l2 !== "suppressHydrationWarning" && l2 !== "autoFocus" && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
    for (l2 in d2) {
      var k2 = d2[l2];
      h2 = e2 != null ? e2[l2] : void 0;
      if (d2.hasOwnProperty(l2) && k2 !== h2 && (k2 != null || h2 != null))
        if (l2 === "style")
          if (h2) {
            for (g2 in h2)
              !h2.hasOwnProperty(g2) || k2 && k2.hasOwnProperty(g2) || (c2 || (c2 = {}), c2[g2] = "");
            for (g2 in k2)
              k2.hasOwnProperty(g2) && h2[g2] !== k2[g2] && (c2 || (c2 = {}), c2[g2] = k2[g2]);
          } else
            c2 || (f2 || (f2 = []), f2.push(l2, c2)), c2 = k2;
        else
          l2 === "dangerouslySetInnerHTML" ? (k2 = k2 ? k2.__html : void 0, h2 = h2 ? h2.__html : void 0, k2 != null && h2 !== k2 && (f2 = f2 || []).push(l2, k2)) : l2 === "children" ? typeof k2 !== "string" && typeof k2 !== "number" || (f2 = f2 || []).push(l2, "" + k2) : l2 !== "suppressContentEditableWarning" && l2 !== "suppressHydrationWarning" && (ea.hasOwnProperty(l2) ? (k2 != null && l2 === "onScroll" && D("scroll", a2), f2 || h2 === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
    }
    c2 && (f2 = f2 || []).push("style", c2);
    var l2 = f2;
    if (b2.updateQueue = l2)
      b2.flags |= 4;
  }
};
Wi = function(a2, b2, c2, d2) {
  c2 !== d2 && (b2.flags |= 4);
};
function Xi(a2, b2) {
  if (!I$1)
    switch (a2.tailMode) {
      case "hidden":
        b2 = a2.tail;
        for (var c2 = null; b2 !== null; )
          b2.alternate !== null && (c2 = b2), b2 = b2.sibling;
        c2 === null ? a2.tail = null : c2.sibling = null;
        break;
      case "collapsed":
        c2 = a2.tail;
        for (var d2 = null; c2 !== null; )
          c2.alternate !== null && (d2 = c2), c2 = c2.sibling;
        d2 === null ? b2 || a2.tail === null ? a2.tail = null : a2.tail.sibling = null : d2.sibling = null;
    }
}
function Q$1(a2) {
  var b2 = a2.alternate !== null && a2.alternate.child === a2.child, c2 = 0, d2 = 0;
  if (b2)
    for (var e2 = a2.child; e2 !== null; )
      c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags & 14680064, d2 |= e2.flags & 14680064, e2.return = a2, e2 = e2.sibling;
  else
    for (e2 = a2.child; e2 !== null; )
      c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags, d2 |= e2.flags, e2.return = a2, e2 = e2.sibling;
  a2.subtreeFlags |= d2;
  a2.childLanes = c2;
  return b2;
}
function Yi(a2, b2, c2) {
  var d2 = b2.pendingProps;
  ch(b2);
  switch (b2.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Q$1(b2), null;
    case 1:
      return Yf(b2.type) && Zf(), Q$1(b2), null;
    case 3:
      d2 = b2.stateNode;
      Gh();
      E$1(Vf);
      E$1(H$1);
      Lh();
      d2.pendingContext && (d2.context = d2.pendingContext, d2.pendingContext = null);
      if (a2 === null || a2.child === null)
        mh(b2) ? b2.flags |= 4 : a2 === null || a2.memoizedState.isDehydrated && (b2.flags & 256) === 0 || (b2.flags |= 1024, fh !== null && (Zi(fh), fh = null));
      Ui(a2, b2);
      Q$1(b2);
      return null;
    case 5:
      Ih(b2);
      var e2 = Eh(Dh.current);
      c2 = b2.type;
      if (a2 !== null && b2.stateNode != null)
        Vi(a2, b2, c2, d2, e2), a2.ref !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
      else {
        if (!d2) {
          if (b2.stateNode === null)
            throw Error(p$3(166));
          Q$1(b2);
          return null;
        }
        a2 = Eh(Bh.current);
        if (mh(b2)) {
          d2 = b2.stateNode;
          c2 = b2.type;
          var f2 = b2.memoizedProps;
          d2[Nf] = b2;
          d2[Of] = f2;
          a2 = (b2.mode & 1) !== 0;
          switch (c2) {
            case "dialog":
              D("cancel", d2);
              D("close", d2);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", d2);
              break;
            case "video":
            case "audio":
              for (e2 = 0; e2 < kf.length; e2++)
                D(kf[e2], d2);
              break;
            case "source":
              D("error", d2);
              break;
            case "img":
            case "image":
            case "link":
              D("error", d2);
              D("load", d2);
              break;
            case "details":
              D("toggle", d2);
              break;
            case "input":
              Ya(d2, f2);
              D("invalid", d2);
              break;
            case "select":
              d2._wrapperState = { wasMultiple: !!f2.multiple };
              D("invalid", d2);
              break;
            case "textarea":
              gb(d2, f2), D("invalid", d2);
          }
          tb(c2, f2);
          e2 = null;
          for (var g2 in f2)
            if (f2.hasOwnProperty(g2)) {
              var h2 = f2[g2];
              g2 === "children" ? typeof h2 === "string" ? d2.textContent !== h2 && (f2.suppressHydrationWarning !== true && zf(d2.textContent, h2, a2), e2 = ["children", h2]) : typeof h2 === "number" && d2.textContent !== "" + h2 && (f2.suppressHydrationWarning !== true && zf(d2.textContent, h2, a2), e2 = ["children", "" + h2]) : ea.hasOwnProperty(g2) && h2 != null && g2 === "onScroll" && D("scroll", d2);
            }
          switch (c2) {
            case "input":
              Ua(d2);
              cb$1(d2, f2, true);
              break;
            case "textarea":
              Ua(d2);
              ib(d2);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof f2.onClick === "function" && (d2.onclick = Af);
          }
          d2 = e2;
          b2.updateQueue = d2;
          d2 !== null && (b2.flags |= 4);
        } else {
          g2 = e2.nodeType === 9 ? e2 : e2.ownerDocument;
          a2 === "http://www.w3.org/1999/xhtml" && (a2 = jb(c2));
          a2 === "http://www.w3.org/1999/xhtml" ? c2 === "script" ? (a2 = g2.createElement("div"), a2.innerHTML = "<script><\/script>", a2 = a2.removeChild(a2.firstChild)) : typeof d2.is === "string" ? a2 = g2.createElement(c2, { is: d2.is }) : (a2 = g2.createElement(c2), c2 === "select" && (g2 = a2, d2.multiple ? g2.multiple = true : d2.size && (g2.size = d2.size))) : a2 = g2.createElementNS(a2, c2);
          a2[Nf] = b2;
          a2[Of] = d2;
          Ti(a2, b2, false, false);
          b2.stateNode = a2;
          a: {
            g2 = ub(c2, d2);
            switch (c2) {
              case "dialog":
                D("cancel", a2);
                D("close", a2);
                e2 = d2;
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", a2);
                e2 = d2;
                break;
              case "video":
              case "audio":
                for (e2 = 0; e2 < kf.length; e2++)
                  D(kf[e2], a2);
                e2 = d2;
                break;
              case "source":
                D("error", a2);
                e2 = d2;
                break;
              case "img":
              case "image":
              case "link":
                D("error", a2);
                D("load", a2);
                e2 = d2;
                break;
              case "details":
                D("toggle", a2);
                e2 = d2;
                break;
              case "input":
                Ya(a2, d2);
                e2 = Xa(a2, d2);
                D("invalid", a2);
                break;
              case "option":
                e2 = d2;
                break;
              case "select":
                a2._wrapperState = { wasMultiple: !!d2.multiple };
                e2 = A$2({}, d2, { value: void 0 });
                D("invalid", a2);
                break;
              case "textarea":
                gb(a2, d2);
                e2 = fb(a2, d2);
                D("invalid", a2);
                break;
              default:
                e2 = d2;
            }
            tb(c2, e2);
            h2 = e2;
            for (f2 in h2)
              if (h2.hasOwnProperty(f2)) {
                var k2 = h2[f2];
                f2 === "style" ? rb(a2, k2) : f2 === "dangerouslySetInnerHTML" ? (k2 = k2 ? k2.__html : void 0, k2 != null && mb(a2, k2)) : f2 === "children" ? typeof k2 === "string" ? (c2 !== "textarea" || k2 !== "") && nb(a2, k2) : typeof k2 === "number" && nb(a2, "" + k2) : f2 !== "suppressContentEditableWarning" && f2 !== "suppressHydrationWarning" && f2 !== "autoFocus" && (ea.hasOwnProperty(f2) ? k2 != null && f2 === "onScroll" && D("scroll", a2) : k2 != null && sa(a2, f2, k2, g2));
              }
            switch (c2) {
              case "input":
                Ua(a2);
                cb$1(a2, d2, false);
                break;
              case "textarea":
                Ua(a2);
                ib(a2);
                break;
              case "option":
                d2.value != null && a2.setAttribute("value", "" + Ra(d2.value));
                break;
              case "select":
                a2.multiple = !!d2.multiple;
                f2 = d2.value;
                f2 != null ? eb(a2, !!d2.multiple, f2, false) : d2.defaultValue != null && eb(a2, !!d2.multiple, d2.defaultValue, true);
                break;
              default:
                typeof e2.onClick === "function" && (a2.onclick = Af);
            }
            switch (c2) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                d2 = !!d2.autoFocus;
                break a;
              case "img":
                d2 = true;
                break a;
              default:
                d2 = false;
            }
          }
          d2 && (b2.flags |= 4);
        }
        b2.ref !== null && (b2.flags |= 512, b2.flags |= 2097152);
      }
      Q$1(b2);
      return null;
    case 6:
      if (a2 && b2.stateNode != null)
        Wi(a2, b2, a2.memoizedProps, d2);
      else {
        if (typeof d2 !== "string" && b2.stateNode === null)
          throw Error(p$3(166));
        c2 = Eh(Dh.current);
        Eh(Bh.current);
        if (mh(b2)) {
          d2 = b2.stateNode;
          c2 = b2.memoizedProps;
          d2[Nf] = b2;
          if (f2 = d2.nodeValue !== c2) {
            if (a2 = dh, a2 !== null)
              switch (a2.tag) {
                case 3:
                  zf(d2.nodeValue, c2, (a2.mode & 1) !== 0);
                  break;
                case 5:
                  a2.memoizedProps.suppressHydrationWarning !== true && zf(d2.nodeValue, c2, (a2.mode & 1) !== 0);
              }
          }
          f2 && (b2.flags |= 4);
        } else
          d2 = (c2.nodeType === 9 ? c2 : c2.ownerDocument).createTextNode(d2), d2[Nf] = b2, b2.stateNode = d2;
      }
      Q$1(b2);
      return null;
    case 13:
      E$1(K$1);
      d2 = b2.memoizedState;
      if (I$1 && eh !== null && (b2.mode & 1) !== 0 && (b2.flags & 128) === 0) {
        for (d2 = eh; d2; )
          d2 = Kf(d2.nextSibling);
        nh();
        b2.flags |= 98560;
        return b2;
      }
      if (d2 !== null && d2.dehydrated !== null) {
        d2 = mh(b2);
        if (a2 === null) {
          if (!d2)
            throw Error(p$3(318));
          d2 = b2.memoizedState;
          d2 = d2 !== null ? d2.dehydrated : null;
          if (!d2)
            throw Error(p$3(317));
          d2[Nf] = b2;
        } else
          nh(), (b2.flags & 128) === 0 && (b2.memoizedState = null), b2.flags |= 4;
        Q$1(b2);
        return null;
      }
      fh !== null && (Zi(fh), fh = null);
      if ((b2.flags & 128) !== 0)
        return b2.lanes = c2, b2;
      d2 = d2 !== null;
      c2 = false;
      a2 === null ? mh(b2) : c2 = a2.memoizedState !== null;
      d2 !== c2 && d2 && (b2.child.flags |= 8192, (b2.mode & 1) !== 0 && (a2 === null || (K$1.current & 1) !== 0 ? R === 0 && (R = 3) : $i()));
      b2.updateQueue !== null && (b2.flags |= 4);
      Q$1(b2);
      return null;
    case 4:
      return Gh(), Ui(a2, b2), a2 === null && rf(b2.stateNode.containerInfo), Q$1(b2), null;
    case 10:
      return qg(b2.type._context), Q$1(b2), null;
    case 17:
      return Yf(b2.type) && Zf(), Q$1(b2), null;
    case 19:
      E$1(K$1);
      f2 = b2.memoizedState;
      if (f2 === null)
        return Q$1(b2), null;
      d2 = (b2.flags & 128) !== 0;
      g2 = f2.rendering;
      if (g2 === null)
        if (d2)
          Xi(f2, false);
        else {
          if (R !== 0 || a2 !== null && (a2.flags & 128) !== 0)
            for (a2 = b2.child; a2 !== null; ) {
              g2 = Jh(a2);
              if (g2 !== null) {
                b2.flags |= 128;
                Xi(f2, false);
                d2 = g2.updateQueue;
                d2 !== null && (b2.updateQueue = d2, b2.flags |= 4);
                b2.subtreeFlags = 0;
                d2 = c2;
                for (c2 = b2.child; c2 !== null; )
                  f2 = c2, a2 = d2, f2.flags &= 14680066, g2 = f2.alternate, g2 === null ? (f2.childLanes = 0, f2.lanes = a2, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g2.childLanes, f2.lanes = g2.lanes, f2.child = g2.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g2.memoizedProps, f2.memoizedState = g2.memoizedState, f2.updateQueue = g2.updateQueue, f2.type = g2.type, a2 = g2.dependencies, f2.dependencies = a2 === null ? null : { lanes: a2.lanes, firstContext: a2.firstContext }), c2 = c2.sibling;
                G$1(K$1, K$1.current & 1 | 2);
                return b2.child;
              }
              a2 = a2.sibling;
            }
          f2.tail !== null && B$1() > aj && (b2.flags |= 128, d2 = true, Xi(f2, false), b2.lanes = 4194304);
        }
      else {
        if (!d2)
          if (a2 = Jh(g2), a2 !== null) {
            if (b2.flags |= 128, d2 = true, c2 = a2.updateQueue, c2 !== null && (b2.updateQueue = c2, b2.flags |= 4), Xi(f2, true), f2.tail === null && f2.tailMode === "hidden" && !g2.alternate && !I$1)
              return Q$1(b2), null;
          } else
            2 * B$1() - f2.renderingStartTime > aj && c2 !== 1073741824 && (b2.flags |= 128, d2 = true, Xi(f2, false), b2.lanes = 4194304);
        f2.isBackwards ? (g2.sibling = b2.child, b2.child = g2) : (c2 = f2.last, c2 !== null ? c2.sibling = g2 : b2.child = g2, f2.last = g2);
      }
      if (f2.tail !== null)
        return b2 = f2.tail, f2.rendering = b2, f2.tail = b2.sibling, f2.renderingStartTime = B$1(), b2.sibling = null, c2 = K$1.current, G$1(K$1, d2 ? c2 & 1 | 2 : c2 & 1), b2;
      Q$1(b2);
      return null;
    case 22:
    case 23:
      return bj(), d2 = b2.memoizedState !== null, a2 !== null && a2.memoizedState !== null !== d2 && (b2.flags |= 8192), d2 && (b2.mode & 1) !== 0 ? (cj & 1073741824) !== 0 && (Q$1(b2), b2.subtreeFlags & 6 && (b2.flags |= 8192)) : Q$1(b2), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(p$3(156, b2.tag));
}
var dj = ta.ReactCurrentOwner, tg = false;
function ej(a2, b2, c2, d2) {
  b2.child = a2 === null ? zh(b2, null, c2, d2) : yh(b2, a2.child, c2, d2);
}
function fj(a2, b2, c2, d2, e2) {
  c2 = c2.render;
  var f2 = b2.ref;
  sg(b2, e2);
  d2 = Uh(a2, b2, c2, d2, f2, e2);
  c2 = Zh();
  if (a2 !== null && !tg)
    return b2.updateQueue = a2.updateQueue, b2.flags &= -2053, a2.lanes &= ~e2, gj(a2, b2, e2);
  I$1 && c2 && bh(b2);
  b2.flags |= 1;
  ej(a2, b2, d2, e2);
  return b2.child;
}
function hj(a2, b2, c2, d2, e2) {
  if (a2 === null) {
    var f2 = c2.type;
    if (typeof f2 === "function" && !ij(f2) && f2.defaultProps === void 0 && c2.compare === null && c2.defaultProps === void 0)
      return b2.tag = 15, b2.type = f2, jj(a2, b2, f2, d2, e2);
    a2 = vh$1(c2.type, null, d2, b2, b2.mode, e2);
    a2.ref = b2.ref;
    a2.return = b2;
    return b2.child = a2;
  }
  f2 = a2.child;
  if ((a2.lanes & e2) === 0) {
    var g2 = f2.memoizedProps;
    c2 = c2.compare;
    c2 = c2 !== null ? c2 : He$1;
    if (c2(g2, d2) && a2.ref === b2.ref)
      return gj(a2, b2, e2);
  }
  b2.flags |= 1;
  a2 = th(f2, d2);
  a2.ref = b2.ref;
  a2.return = b2;
  return b2.child = a2;
}
function jj(a2, b2, c2, d2, e2) {
  if (a2 !== null) {
    var f2 = a2.memoizedProps;
    if (He$1(f2, d2) && a2.ref === b2.ref)
      if (tg = false, b2.pendingProps = d2 = f2, (a2.lanes & e2) !== 0)
        (a2.flags & 131072) !== 0 && (tg = true);
      else
        return b2.lanes = a2.lanes, gj(a2, b2, e2);
  }
  return kj(a2, b2, c2, d2, e2);
}
function lj(a2, b2, c2) {
  var d2 = b2.pendingProps, e2 = d2.children, f2 = a2 !== null ? a2.memoizedState : null;
  if (d2.mode === "hidden")
    if ((b2.mode & 1) === 0)
      b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G$1(mj, cj), cj |= c2;
    else if ((c2 & 1073741824) !== 0)
      b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, d2 = f2 !== null ? f2.baseLanes : c2, G$1(mj, cj), cj |= d2;
    else
      return a2 = f2 !== null ? f2.baseLanes | c2 : c2, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = { baseLanes: a2, cachePool: null, transitions: null }, b2.updateQueue = null, G$1(mj, cj), cj |= a2, null;
  else
    f2 !== null ? (d2 = f2.baseLanes | c2, b2.memoizedState = null) : d2 = c2, G$1(mj, cj), cj |= d2;
  ej(a2, b2, e2, c2);
  return b2.child;
}
function nj(a2, b2) {
  var c2 = b2.ref;
  if (a2 === null && c2 !== null || a2 !== null && a2.ref !== c2)
    b2.flags |= 512, b2.flags |= 2097152;
}
function kj(a2, b2, c2, d2, e2) {
  var f2 = Yf(c2) ? Wf : H$1.current;
  f2 = Xf(b2, f2);
  sg(b2, e2);
  c2 = Uh(a2, b2, c2, d2, f2, e2);
  d2 = Zh();
  if (a2 !== null && !tg)
    return b2.updateQueue = a2.updateQueue, b2.flags &= -2053, a2.lanes &= ~e2, gj(a2, b2, e2);
  I$1 && d2 && bh(b2);
  b2.flags |= 1;
  ej(a2, b2, c2, e2);
  return b2.child;
}
function oj(a2, b2, c2, d2, e2) {
  if (Yf(c2)) {
    var f2 = true;
    bg(b2);
  } else
    f2 = false;
  sg(b2, e2);
  if (b2.stateNode === null)
    a2 !== null && (a2.alternate = null, b2.alternate = null, b2.flags |= 2), Og(b2, c2, d2), Qg(b2, c2, d2, e2), d2 = true;
  else if (a2 === null) {
    var g2 = b2.stateNode, h2 = b2.memoizedProps;
    g2.props = h2;
    var k2 = g2.context, l2 = c2.contextType;
    typeof l2 === "object" && l2 !== null ? l2 = ug(l2) : (l2 = Yf(c2) ? Wf : H$1.current, l2 = Xf(b2, l2));
    var n2 = c2.getDerivedStateFromProps, u2 = typeof n2 === "function" || typeof g2.getSnapshotBeforeUpdate === "function";
    u2 || typeof g2.UNSAFE_componentWillReceiveProps !== "function" && typeof g2.componentWillReceiveProps !== "function" || (h2 !== d2 || k2 !== l2) && Pg(b2, g2, d2, l2);
    wg = false;
    var q2 = b2.memoizedState;
    g2.state = q2;
    Eg(b2, d2, g2, e2);
    k2 = b2.memoizedState;
    h2 !== d2 || q2 !== k2 || Vf.current || wg ? (typeof n2 === "function" && (Ig(b2, c2, n2, d2), k2 = b2.memoizedState), (h2 = wg || Ng(b2, c2, h2, d2, q2, k2, l2)) ? (u2 || typeof g2.UNSAFE_componentWillMount !== "function" && typeof g2.componentWillMount !== "function" || (typeof g2.componentWillMount === "function" && g2.componentWillMount(), typeof g2.UNSAFE_componentWillMount === "function" && g2.UNSAFE_componentWillMount()), typeof g2.componentDidMount === "function" && (b2.flags |= 4194308)) : (typeof g2.componentDidMount === "function" && (b2.flags |= 4194308), b2.memoizedProps = d2, b2.memoizedState = k2), g2.props = d2, g2.state = k2, g2.context = l2, d2 = h2) : (typeof g2.componentDidMount === "function" && (b2.flags |= 4194308), d2 = false);
  } else {
    g2 = b2.stateNode;
    yg(a2, b2);
    h2 = b2.memoizedProps;
    l2 = b2.type === b2.elementType ? h2 : kg(b2.type, h2);
    g2.props = l2;
    u2 = b2.pendingProps;
    q2 = g2.context;
    k2 = c2.contextType;
    typeof k2 === "object" && k2 !== null ? k2 = ug(k2) : (k2 = Yf(c2) ? Wf : H$1.current, k2 = Xf(b2, k2));
    var y2 = c2.getDerivedStateFromProps;
    (n2 = typeof y2 === "function" || typeof g2.getSnapshotBeforeUpdate === "function") || typeof g2.UNSAFE_componentWillReceiveProps !== "function" && typeof g2.componentWillReceiveProps !== "function" || (h2 !== u2 || q2 !== k2) && Pg(b2, g2, d2, k2);
    wg = false;
    q2 = b2.memoizedState;
    g2.state = q2;
    Eg(b2, d2, g2, e2);
    var m2 = b2.memoizedState;
    h2 !== u2 || q2 !== m2 || Vf.current || wg ? (typeof y2 === "function" && (Ig(b2, c2, y2, d2), m2 = b2.memoizedState), (l2 = wg || Ng(b2, c2, l2, d2, q2, m2, k2) || false) ? (n2 || typeof g2.UNSAFE_componentWillUpdate !== "function" && typeof g2.componentWillUpdate !== "function" || (typeof g2.componentWillUpdate === "function" && g2.componentWillUpdate(d2, m2, k2), typeof g2.UNSAFE_componentWillUpdate === "function" && g2.UNSAFE_componentWillUpdate(d2, m2, k2)), typeof g2.componentDidUpdate === "function" && (b2.flags |= 4), typeof g2.getSnapshotBeforeUpdate === "function" && (b2.flags |= 1024)) : (typeof g2.componentDidUpdate !== "function" || h2 === a2.memoizedProps && q2 === a2.memoizedState || (b2.flags |= 4), typeof g2.getSnapshotBeforeUpdate !== "function" || h2 === a2.memoizedProps && q2 === a2.memoizedState || (b2.flags |= 1024), b2.memoizedProps = d2, b2.memoizedState = m2), g2.props = d2, g2.state = m2, g2.context = k2, d2 = l2) : (typeof g2.componentDidUpdate !== "function" || h2 === a2.memoizedProps && q2 === a2.memoizedState || (b2.flags |= 4), typeof g2.getSnapshotBeforeUpdate !== "function" || h2 === a2.memoizedProps && q2 === a2.memoizedState || (b2.flags |= 1024), d2 = false);
  }
  return pj(a2, b2, c2, d2, f2, e2);
}
function pj(a2, b2, c2, d2, e2, f2) {
  nj(a2, b2);
  var g2 = (b2.flags & 128) !== 0;
  if (!d2 && !g2)
    return e2 && cg(b2, c2, false), gj(a2, b2, f2);
  d2 = b2.stateNode;
  dj.current = b2;
  var h2 = g2 && typeof c2.getDerivedStateFromError !== "function" ? null : d2.render();
  b2.flags |= 1;
  a2 !== null && g2 ? (b2.child = yh(b2, a2.child, null, f2), b2.child = yh(b2, null, h2, f2)) : ej(a2, b2, h2, f2);
  b2.memoizedState = d2.state;
  e2 && cg(b2, c2, true);
  return b2.child;
}
function qj(a2) {
  var b2 = a2.stateNode;
  b2.pendingContext ? $f(a2, b2.pendingContext, b2.pendingContext !== b2.context) : b2.context && $f(a2, b2.context, false);
  Fh(a2, b2.containerInfo);
}
function rj(a2, b2, c2, d2, e2) {
  nh();
  oh(e2);
  b2.flags |= 256;
  ej(a2, b2, c2, d2);
  return b2.child;
}
var sj = { dehydrated: null, treeContext: null, retryLane: 0 };
function tj(a2) {
  return { baseLanes: a2, cachePool: null, transitions: null };
}
function uj(a2, b2) {
  return { baseLanes: a2.baseLanes | b2, cachePool: null, transitions: a2.transitions };
}
function vj(a2, b2, c2) {
  var d2 = b2.pendingProps, e2 = K$1.current, f2 = false, g2 = (b2.flags & 128) !== 0, h2;
  (h2 = g2) || (h2 = a2 !== null && a2.memoizedState === null ? false : (e2 & 2) !== 0);
  if (h2)
    f2 = true, b2.flags &= -129;
  else if (a2 === null || a2.memoizedState !== null)
    e2 |= 1;
  G$1(K$1, e2 & 1);
  if (a2 === null) {
    kh(b2);
    a2 = b2.memoizedState;
    if (a2 !== null && (a2 = a2.dehydrated, a2 !== null))
      return (b2.mode & 1) === 0 ? b2.lanes = 1 : a2.data === "$!" ? b2.lanes = 8 : b2.lanes = 1073741824, null;
    e2 = d2.children;
    a2 = d2.fallback;
    return f2 ? (d2 = b2.mode, f2 = b2.child, e2 = { mode: "hidden", children: e2 }, (d2 & 1) === 0 && f2 !== null ? (f2.childLanes = 0, f2.pendingProps = e2) : f2 = wj(e2, d2, 0, null), a2 = xh(a2, d2, c2, null), f2.return = b2, a2.return = b2, f2.sibling = a2, b2.child = f2, b2.child.memoizedState = tj(c2), b2.memoizedState = sj, a2) : xj(b2, e2);
  }
  e2 = a2.memoizedState;
  if (e2 !== null) {
    h2 = e2.dehydrated;
    if (h2 !== null) {
      if (g2) {
        if (b2.flags & 256)
          return b2.flags &= -257, yj(a2, b2, c2, Error(p$3(422)));
        if (b2.memoizedState !== null)
          return b2.child = a2.child, b2.flags |= 128, null;
        f2 = d2.fallback;
        e2 = b2.mode;
        d2 = wj({ mode: "visible", children: d2.children }, e2, 0, null);
        f2 = xh(f2, e2, c2, null);
        f2.flags |= 2;
        d2.return = b2;
        f2.return = b2;
        d2.sibling = f2;
        b2.child = d2;
        (b2.mode & 1) !== 0 && yh(b2, a2.child, null, c2);
        b2.child.memoizedState = tj(c2);
        b2.memoizedState = sj;
        return f2;
      }
      if ((b2.mode & 1) === 0)
        b2 = yj(a2, b2, c2, null);
      else if (h2.data === "$!")
        b2 = yj(a2, b2, c2, Error(p$3(419)));
      else if (d2 = (c2 & a2.childLanes) !== 0, tg || d2) {
        d2 = P$1;
        if (d2 !== null) {
          switch (c2 & -c2) {
            case 4:
              f2 = 2;
              break;
            case 16:
              f2 = 8;
              break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              f2 = 32;
              break;
            case 536870912:
              f2 = 268435456;
              break;
            default:
              f2 = 0;
          }
          d2 = (f2 & (d2.suspendedLanes | c2)) !== 0 ? 0 : f2;
          d2 !== 0 && d2 !== e2.retryLane && (e2.retryLane = d2, Lg(a2, d2, -1));
        }
        $i();
        b2 = yj(a2, b2, c2, Error(p$3(421)));
      } else
        h2.data === "$?" ? (b2.flags |= 128, b2.child = a2.child, b2 = zj.bind(null, a2), h2._reactRetry = b2, b2 = null) : (c2 = e2.treeContext, eh = Kf(h2.nextSibling), dh = b2, I$1 = true, fh = null, c2 !== null && (Vg[Wg++] = Yg, Vg[Wg++] = Zg, Vg[Wg++] = Xg, Yg = c2.id, Zg = c2.overflow, Xg = b2), b2 = xj(b2, b2.pendingProps.children), b2.flags |= 4096);
      return b2;
    }
    if (f2)
      return d2 = Aj(a2, b2, d2.children, d2.fallback, c2), f2 = b2.child, e2 = a2.child.memoizedState, f2.memoizedState = e2 === null ? tj(c2) : uj(e2, c2), f2.childLanes = a2.childLanes & ~c2, b2.memoizedState = sj, d2;
    c2 = Bj(a2, b2, d2.children, c2);
    b2.memoizedState = null;
    return c2;
  }
  if (f2)
    return d2 = Aj(a2, b2, d2.children, d2.fallback, c2), f2 = b2.child, e2 = a2.child.memoizedState, f2.memoizedState = e2 === null ? tj(c2) : uj(e2, c2), f2.childLanes = a2.childLanes & ~c2, b2.memoizedState = sj, d2;
  c2 = Bj(a2, b2, d2.children, c2);
  b2.memoizedState = null;
  return c2;
}
function xj(a2, b2) {
  b2 = wj({ mode: "visible", children: b2 }, a2.mode, 0, null);
  b2.return = a2;
  return a2.child = b2;
}
function Bj(a2, b2, c2, d2) {
  var e2 = a2.child;
  a2 = e2.sibling;
  c2 = th(e2, { mode: "visible", children: c2 });
  (b2.mode & 1) === 0 && (c2.lanes = d2);
  c2.return = b2;
  c2.sibling = null;
  a2 !== null && (d2 = b2.deletions, d2 === null ? (b2.deletions = [a2], b2.flags |= 16) : d2.push(a2));
  return b2.child = c2;
}
function Aj(a2, b2, c2, d2, e2) {
  var f2 = b2.mode;
  a2 = a2.child;
  var g2 = a2.sibling, h2 = { mode: "hidden", children: c2 };
  (f2 & 1) === 0 && b2.child !== a2 ? (c2 = b2.child, c2.childLanes = 0, c2.pendingProps = h2, b2.deletions = null) : (c2 = th(a2, h2), c2.subtreeFlags = a2.subtreeFlags & 14680064);
  g2 !== null ? d2 = th(g2, d2) : (d2 = xh(d2, f2, e2, null), d2.flags |= 2);
  d2.return = b2;
  c2.return = b2;
  c2.sibling = d2;
  b2.child = c2;
  return d2;
}
function yj(a2, b2, c2, d2) {
  d2 !== null && oh(d2);
  yh(b2, a2.child, null, c2);
  a2 = xj(b2, b2.pendingProps.children);
  a2.flags |= 2;
  b2.memoizedState = null;
  return a2;
}
function Cj(a2, b2, c2) {
  a2.lanes |= b2;
  var d2 = a2.alternate;
  d2 !== null && (d2.lanes |= b2);
  rg(a2.return, b2, c2);
}
function Dj(a2, b2, c2, d2, e2) {
  var f2 = a2.memoizedState;
  f2 === null ? a2.memoizedState = { isBackwards: b2, rendering: null, renderingStartTime: 0, last: d2, tail: c2, tailMode: e2 } : (f2.isBackwards = b2, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d2, f2.tail = c2, f2.tailMode = e2);
}
function Ej(a2, b2, c2) {
  var d2 = b2.pendingProps, e2 = d2.revealOrder, f2 = d2.tail;
  ej(a2, b2, d2.children, c2);
  d2 = K$1.current;
  if ((d2 & 2) !== 0)
    d2 = d2 & 1 | 2, b2.flags |= 128;
  else {
    if (a2 !== null && (a2.flags & 128) !== 0)
      a:
        for (a2 = b2.child; a2 !== null; ) {
          if (a2.tag === 13)
            a2.memoizedState !== null && Cj(a2, c2, b2);
          else if (a2.tag === 19)
            Cj(a2, c2, b2);
          else if (a2.child !== null) {
            a2.child.return = a2;
            a2 = a2.child;
            continue;
          }
          if (a2 === b2)
            break a;
          for (; a2.sibling === null; ) {
            if (a2.return === null || a2.return === b2)
              break a;
            a2 = a2.return;
          }
          a2.sibling.return = a2.return;
          a2 = a2.sibling;
        }
    d2 &= 1;
  }
  G$1(K$1, d2);
  if ((b2.mode & 1) === 0)
    b2.memoizedState = null;
  else
    switch (e2) {
      case "forwards":
        c2 = b2.child;
        for (e2 = null; c2 !== null; )
          a2 = c2.alternate, a2 !== null && Jh(a2) === null && (e2 = c2), c2 = c2.sibling;
        c2 = e2;
        c2 === null ? (e2 = b2.child, b2.child = null) : (e2 = c2.sibling, c2.sibling = null);
        Dj(b2, false, e2, c2, f2);
        break;
      case "backwards":
        c2 = null;
        e2 = b2.child;
        for (b2.child = null; e2 !== null; ) {
          a2 = e2.alternate;
          if (a2 !== null && Jh(a2) === null) {
            b2.child = e2;
            break;
          }
          a2 = e2.sibling;
          e2.sibling = c2;
          c2 = e2;
          e2 = a2;
        }
        Dj(b2, true, c2, null, f2);
        break;
      case "together":
        Dj(b2, false, null, null, void 0);
        break;
      default:
        b2.memoizedState = null;
    }
  return b2.child;
}
function gj(a2, b2, c2) {
  a2 !== null && (b2.dependencies = a2.dependencies);
  Fg |= b2.lanes;
  if ((c2 & b2.childLanes) === 0)
    return null;
  if (a2 !== null && b2.child !== a2.child)
    throw Error(p$3(153));
  if (b2.child !== null) {
    a2 = b2.child;
    c2 = th(a2, a2.pendingProps);
    b2.child = c2;
    for (c2.return = b2; a2.sibling !== null; )
      a2 = a2.sibling, c2 = c2.sibling = th(a2, a2.pendingProps), c2.return = b2;
    c2.sibling = null;
  }
  return b2.child;
}
function Fj(a2, b2, c2) {
  switch (b2.tag) {
    case 3:
      qj(b2);
      nh();
      break;
    case 5:
      Hh(b2);
      break;
    case 1:
      Yf(b2.type) && bg(b2);
      break;
    case 4:
      Fh(b2, b2.stateNode.containerInfo);
      break;
    case 10:
      var d2 = b2.type._context, e2 = b2.memoizedProps.value;
      G$1(lg, d2._currentValue);
      d2._currentValue = e2;
      break;
    case 13:
      d2 = b2.memoizedState;
      if (d2 !== null) {
        if (d2.dehydrated !== null)
          return G$1(K$1, K$1.current & 1), b2.flags |= 128, null;
        if ((c2 & b2.child.childLanes) !== 0)
          return vj(a2, b2, c2);
        G$1(K$1, K$1.current & 1);
        a2 = gj(a2, b2, c2);
        return a2 !== null ? a2.sibling : null;
      }
      G$1(K$1, K$1.current & 1);
      break;
    case 19:
      d2 = (c2 & b2.childLanes) !== 0;
      if ((a2.flags & 128) !== 0) {
        if (d2)
          return Ej(a2, b2, c2);
        b2.flags |= 128;
      }
      e2 = b2.memoizedState;
      e2 !== null && (e2.rendering = null, e2.tail = null, e2.lastEffect = null);
      G$1(K$1, K$1.current);
      if (d2)
        break;
      else
        return null;
    case 22:
    case 23:
      return b2.lanes = 0, lj(a2, b2, c2);
  }
  return gj(a2, b2, c2);
}
function Gj(a2, b2) {
  ch(b2);
  switch (b2.tag) {
    case 1:
      return Yf(b2.type) && Zf(), a2 = b2.flags, a2 & 65536 ? (b2.flags = a2 & -65537 | 128, b2) : null;
    case 3:
      return Gh(), E$1(Vf), E$1(H$1), Lh(), a2 = b2.flags, (a2 & 65536) !== 0 && (a2 & 128) === 0 ? (b2.flags = a2 & -65537 | 128, b2) : null;
    case 5:
      return Ih(b2), null;
    case 13:
      E$1(K$1);
      a2 = b2.memoizedState;
      if (a2 !== null && a2.dehydrated !== null) {
        if (b2.alternate === null)
          throw Error(p$3(340));
        nh();
      }
      a2 = b2.flags;
      return a2 & 65536 ? (b2.flags = a2 & -65537 | 128, b2) : null;
    case 19:
      return E$1(K$1), null;
    case 4:
      return Gh(), null;
    case 10:
      return qg(b2.type._context), null;
    case 22:
    case 23:
      return bj(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Hj = false, S$2 = false, Ij = typeof WeakSet === "function" ? WeakSet : Set, T$1 = null;
function Jj(a2, b2) {
  var c2 = a2.ref;
  if (c2 !== null)
    if (typeof c2 === "function")
      try {
        c2(null);
      } catch (d2) {
        U$1(a2, b2, d2);
      }
    else
      c2.current = null;
}
function Kj(a2, b2, c2) {
  try {
    c2();
  } catch (d2) {
    U$1(a2, b2, d2);
  }
}
var Lj = false;
function Mj(a2, b2) {
  Bf = cd;
  a2 = Le();
  if (Me$1(a2)) {
    if ("selectionStart" in a2)
      var c2 = { start: a2.selectionStart, end: a2.selectionEnd };
    else
      a: {
        c2 = (c2 = a2.ownerDocument) && c2.defaultView || window;
        var d2 = c2.getSelection && c2.getSelection();
        if (d2 && d2.rangeCount !== 0) {
          c2 = d2.anchorNode;
          var e2 = d2.anchorOffset, f2 = d2.focusNode;
          d2 = d2.focusOffset;
          try {
            c2.nodeType, f2.nodeType;
          } catch (Z2) {
            c2 = null;
            break a;
          }
          var g2 = 0, h2 = -1, k2 = -1, l2 = 0, n2 = 0, u2 = a2, q2 = null;
          b:
            for (; ; ) {
              for (var y2; ; ) {
                u2 !== c2 || e2 !== 0 && u2.nodeType !== 3 || (h2 = g2 + e2);
                u2 !== f2 || d2 !== 0 && u2.nodeType !== 3 || (k2 = g2 + d2);
                u2.nodeType === 3 && (g2 += u2.nodeValue.length);
                if ((y2 = u2.firstChild) === null)
                  break;
                q2 = u2;
                u2 = y2;
              }
              for (; ; ) {
                if (u2 === a2)
                  break b;
                q2 === c2 && ++l2 === e2 && (h2 = g2);
                q2 === f2 && ++n2 === d2 && (k2 = g2);
                if ((y2 = u2.nextSibling) !== null)
                  break;
                u2 = q2;
                q2 = u2.parentNode;
              }
              u2 = y2;
            }
          c2 = h2 === -1 || k2 === -1 ? null : { start: h2, end: k2 };
        } else
          c2 = null;
      }
    c2 = c2 || { start: 0, end: 0 };
  } else
    c2 = null;
  Cf = { focusedElem: a2, selectionRange: c2 };
  cd = false;
  for (T$1 = b2; T$1 !== null; )
    if (b2 = T$1, a2 = b2.child, (b2.subtreeFlags & 1028) !== 0 && a2 !== null)
      a2.return = b2, T$1 = a2;
    else
      for (; T$1 !== null; ) {
        b2 = T$1;
        try {
          var m2 = b2.alternate;
          if ((b2.flags & 1024) !== 0)
            switch (b2.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (m2 !== null) {
                  var w2 = m2.memoizedProps, J2 = m2.memoizedState, v2 = b2.stateNode, x2 = v2.getSnapshotBeforeUpdate(b2.elementType === b2.type ? w2 : kg(b2.type, w2), J2);
                  v2.__reactInternalSnapshotBeforeUpdate = x2;
                }
                break;
              case 3:
                var r2 = b2.stateNode.containerInfo;
                if (r2.nodeType === 1)
                  r2.textContent = "";
                else if (r2.nodeType === 9) {
                  var F2 = r2.body;
                  F2 != null && (F2.textContent = "");
                }
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(p$3(163));
            }
        } catch (Z2) {
          U$1(b2, b2.return, Z2);
        }
        a2 = b2.sibling;
        if (a2 !== null) {
          a2.return = b2.return;
          T$1 = a2;
          break;
        }
        T$1 = b2.return;
      }
  m2 = Lj;
  Lj = false;
  return m2;
}
function Nj(a2, b2, c2) {
  var d2 = b2.updateQueue;
  d2 = d2 !== null ? d2.lastEffect : null;
  if (d2 !== null) {
    var e2 = d2 = d2.next;
    do {
      if ((e2.tag & a2) === a2) {
        var f2 = e2.destroy;
        e2.destroy = void 0;
        f2 !== void 0 && Kj(b2, c2, f2);
      }
      e2 = e2.next;
    } while (e2 !== d2);
  }
}
function Oj(a2, b2) {
  b2 = b2.updateQueue;
  b2 = b2 !== null ? b2.lastEffect : null;
  if (b2 !== null) {
    var c2 = b2 = b2.next;
    do {
      if ((c2.tag & a2) === a2) {
        var d2 = c2.create;
        c2.destroy = d2();
      }
      c2 = c2.next;
    } while (c2 !== b2);
  }
}
function Pj(a2) {
  var b2 = a2.ref;
  if (b2 !== null) {
    var c2 = a2.stateNode;
    switch (a2.tag) {
      case 5:
        a2 = c2;
        break;
      default:
        a2 = c2;
    }
    typeof b2 === "function" ? b2(a2) : b2.current = a2;
  }
}
function Qj(a2) {
  var b2 = a2.alternate;
  b2 !== null && (a2.alternate = null, Qj(b2));
  a2.child = null;
  a2.deletions = null;
  a2.sibling = null;
  a2.tag === 5 && (b2 = a2.stateNode, b2 !== null && (delete b2[Nf], delete b2[Of], delete b2[nf], delete b2[Pf], delete b2[Qf]));
  a2.stateNode = null;
  a2.return = null;
  a2.dependencies = null;
  a2.memoizedProps = null;
  a2.memoizedState = null;
  a2.pendingProps = null;
  a2.stateNode = null;
  a2.updateQueue = null;
}
function Rj(a2) {
  return a2.tag === 5 || a2.tag === 3 || a2.tag === 4;
}
function Sj(a2) {
  a:
    for (; ; ) {
      for (; a2.sibling === null; ) {
        if (a2.return === null || Rj(a2.return))
          return null;
        a2 = a2.return;
      }
      a2.sibling.return = a2.return;
      for (a2 = a2.sibling; a2.tag !== 5 && a2.tag !== 6 && a2.tag !== 18; ) {
        if (a2.flags & 2)
          continue a;
        if (a2.child === null || a2.tag === 4)
          continue a;
        else
          a2.child.return = a2, a2 = a2.child;
      }
      if (!(a2.flags & 2))
        return a2.stateNode;
    }
}
function Tj(a2, b2, c2) {
  var d2 = a2.tag;
  if (d2 === 5 || d2 === 6)
    a2 = a2.stateNode, b2 ? c2.nodeType === 8 ? c2.parentNode.insertBefore(a2, b2) : c2.insertBefore(a2, b2) : (c2.nodeType === 8 ? (b2 = c2.parentNode, b2.insertBefore(a2, c2)) : (b2 = c2, b2.appendChild(a2)), c2 = c2._reactRootContainer, c2 !== null && c2 !== void 0 || b2.onclick !== null || (b2.onclick = Af));
  else if (d2 !== 4 && (a2 = a2.child, a2 !== null))
    for (Tj(a2, b2, c2), a2 = a2.sibling; a2 !== null; )
      Tj(a2, b2, c2), a2 = a2.sibling;
}
function Uj(a2, b2, c2) {
  var d2 = a2.tag;
  if (d2 === 5 || d2 === 6)
    a2 = a2.stateNode, b2 ? c2.insertBefore(a2, b2) : c2.appendChild(a2);
  else if (d2 !== 4 && (a2 = a2.child, a2 !== null))
    for (Uj(a2, b2, c2), a2 = a2.sibling; a2 !== null; )
      Uj(a2, b2, c2), a2 = a2.sibling;
}
var V$1 = null, Vj = false;
function Wj(a2, b2, c2) {
  for (c2 = c2.child; c2 !== null; )
    Xj(a2, b2, c2), c2 = c2.sibling;
}
function Xj(a2, b2, c2) {
  if (kc && typeof kc.onCommitFiberUnmount === "function")
    try {
      kc.onCommitFiberUnmount(jc, c2);
    } catch (h2) {
    }
  switch (c2.tag) {
    case 5:
      S$2 || Jj(c2, b2);
    case 6:
      var d2 = V$1, e2 = Vj;
      V$1 = null;
      Wj(a2, b2, c2);
      V$1 = d2;
      Vj = e2;
      V$1 !== null && (Vj ? (a2 = V$1, c2 = c2.stateNode, a2.nodeType === 8 ? a2.parentNode.removeChild(c2) : a2.removeChild(c2)) : V$1.removeChild(c2.stateNode));
      break;
    case 18:
      V$1 !== null && (Vj ? (a2 = V$1, c2 = c2.stateNode, a2.nodeType === 8 ? Jf(a2.parentNode, c2) : a2.nodeType === 1 && Jf(a2, c2), ad(a2)) : Jf(V$1, c2.stateNode));
      break;
    case 4:
      d2 = V$1;
      e2 = Vj;
      V$1 = c2.stateNode.containerInfo;
      Vj = true;
      Wj(a2, b2, c2);
      V$1 = d2;
      Vj = e2;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!S$2 && (d2 = c2.updateQueue, d2 !== null && (d2 = d2.lastEffect, d2 !== null))) {
        e2 = d2 = d2.next;
        do {
          var f2 = e2, g2 = f2.destroy;
          f2 = f2.tag;
          g2 !== void 0 && ((f2 & 2) !== 0 ? Kj(c2, b2, g2) : (f2 & 4) !== 0 && Kj(c2, b2, g2));
          e2 = e2.next;
        } while (e2 !== d2);
      }
      Wj(a2, b2, c2);
      break;
    case 1:
      if (!S$2 && (Jj(c2, b2), d2 = c2.stateNode, typeof d2.componentWillUnmount === "function"))
        try {
          d2.props = c2.memoizedProps, d2.state = c2.memoizedState, d2.componentWillUnmount();
        } catch (h2) {
          U$1(c2, b2, h2);
        }
      Wj(a2, b2, c2);
      break;
    case 21:
      Wj(a2, b2, c2);
      break;
    case 22:
      c2.mode & 1 ? (S$2 = (d2 = S$2) || c2.memoizedState !== null, Wj(a2, b2, c2), S$2 = d2) : Wj(a2, b2, c2);
      break;
    default:
      Wj(a2, b2, c2);
  }
}
function Yj(a2) {
  var b2 = a2.updateQueue;
  if (b2 !== null) {
    a2.updateQueue = null;
    var c2 = a2.stateNode;
    c2 === null && (c2 = a2.stateNode = new Ij());
    b2.forEach(function(b3) {
      var d2 = Zj.bind(null, a2, b3);
      c2.has(b3) || (c2.add(b3), b3.then(d2, d2));
    });
  }
}
function ak(a2, b2) {
  var c2 = b2.deletions;
  if (c2 !== null)
    for (var d2 = 0; d2 < c2.length; d2++) {
      var e2 = c2[d2];
      try {
        var f2 = a2, g2 = b2, h2 = g2;
        a:
          for (; h2 !== null; ) {
            switch (h2.tag) {
              case 5:
                V$1 = h2.stateNode;
                Vj = false;
                break a;
              case 3:
                V$1 = h2.stateNode.containerInfo;
                Vj = true;
                break a;
              case 4:
                V$1 = h2.stateNode.containerInfo;
                Vj = true;
                break a;
            }
            h2 = h2.return;
          }
        if (V$1 === null)
          throw Error(p$3(160));
        Xj(f2, g2, e2);
        V$1 = null;
        Vj = false;
        var k2 = e2.alternate;
        k2 !== null && (k2.return = null);
        e2.return = null;
      } catch (l2) {
        U$1(e2, b2, l2);
      }
    }
  if (b2.subtreeFlags & 12854)
    for (b2 = b2.child; b2 !== null; )
      bk(b2, a2), b2 = b2.sibling;
}
function bk(a2, b2) {
  var c2 = a2.alternate, d2 = a2.flags;
  switch (a2.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      ak(b2, a2);
      ck(a2);
      if (d2 & 4) {
        try {
          Nj(3, a2, a2.return), Oj(3, a2);
        } catch (m2) {
          U$1(a2, a2.return, m2);
        }
        try {
          Nj(5, a2, a2.return);
        } catch (m2) {
          U$1(a2, a2.return, m2);
        }
      }
      break;
    case 1:
      ak(b2, a2);
      ck(a2);
      d2 & 512 && c2 !== null && Jj(c2, c2.return);
      break;
    case 5:
      ak(b2, a2);
      ck(a2);
      d2 & 512 && c2 !== null && Jj(c2, c2.return);
      if (a2.flags & 32) {
        var e2 = a2.stateNode;
        try {
          nb(e2, "");
        } catch (m2) {
          U$1(a2, a2.return, m2);
        }
      }
      if (d2 & 4 && (e2 = a2.stateNode, e2 != null)) {
        var f2 = a2.memoizedProps, g2 = c2 !== null ? c2.memoizedProps : f2, h2 = a2.type, k2 = a2.updateQueue;
        a2.updateQueue = null;
        if (k2 !== null)
          try {
            h2 === "input" && f2.type === "radio" && f2.name != null && Za(e2, f2);
            ub(h2, g2);
            var l2 = ub(h2, f2);
            for (g2 = 0; g2 < k2.length; g2 += 2) {
              var n2 = k2[g2], u2 = k2[g2 + 1];
              n2 === "style" ? rb(e2, u2) : n2 === "dangerouslySetInnerHTML" ? mb(e2, u2) : n2 === "children" ? nb(e2, u2) : sa(e2, n2, u2, l2);
            }
            switch (h2) {
              case "input":
                $a(e2, f2);
                break;
              case "textarea":
                hb(e2, f2);
                break;
              case "select":
                var q2 = e2._wrapperState.wasMultiple;
                e2._wrapperState.wasMultiple = !!f2.multiple;
                var y2 = f2.value;
                y2 != null ? eb(e2, !!f2.multiple, y2, false) : q2 !== !!f2.multiple && (f2.defaultValue != null ? eb(e2, !!f2.multiple, f2.defaultValue, true) : eb(e2, !!f2.multiple, f2.multiple ? [] : "", false));
            }
            e2[Of] = f2;
          } catch (m2) {
            U$1(a2, a2.return, m2);
          }
      }
      break;
    case 6:
      ak(b2, a2);
      ck(a2);
      if (d2 & 4) {
        if (a2.stateNode === null)
          throw Error(p$3(162));
        l2 = a2.stateNode;
        n2 = a2.memoizedProps;
        try {
          l2.nodeValue = n2;
        } catch (m2) {
          U$1(a2, a2.return, m2);
        }
      }
      break;
    case 3:
      ak(b2, a2);
      ck(a2);
      if (d2 & 4 && c2 !== null && c2.memoizedState.isDehydrated)
        try {
          ad(b2.containerInfo);
        } catch (m2) {
          U$1(a2, a2.return, m2);
        }
      break;
    case 4:
      ak(b2, a2);
      ck(a2);
      break;
    case 13:
      ak(b2, a2);
      ck(a2);
      l2 = a2.child;
      l2.flags & 8192 && l2.memoizedState !== null && (l2.alternate === null || l2.alternate.memoizedState === null) && (dk = B$1());
      d2 & 4 && Yj(a2);
      break;
    case 22:
      l2 = c2 !== null && c2.memoizedState !== null;
      a2.mode & 1 ? (S$2 = (n2 = S$2) || l2, ak(b2, a2), S$2 = n2) : ak(b2, a2);
      ck(a2);
      if (d2 & 8192) {
        n2 = a2.memoizedState !== null;
        a:
          for (u2 = null, q2 = a2; ; ) {
            if (q2.tag === 5) {
              if (u2 === null) {
                u2 = q2;
                try {
                  e2 = q2.stateNode, n2 ? (f2 = e2.style, typeof f2.setProperty === "function" ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h2 = q2.stateNode, k2 = q2.memoizedProps.style, g2 = k2 !== void 0 && k2 !== null && k2.hasOwnProperty("display") ? k2.display : null, h2.style.display = qb("display", g2));
                } catch (m2) {
                  U$1(a2, a2.return, m2);
                }
              }
            } else if (q2.tag === 6) {
              if (u2 === null)
                try {
                  q2.stateNode.nodeValue = n2 ? "" : q2.memoizedProps;
                } catch (m2) {
                  U$1(a2, a2.return, m2);
                }
            } else if ((q2.tag !== 22 && q2.tag !== 23 || q2.memoizedState === null || q2 === a2) && q2.child !== null) {
              q2.child.return = q2;
              q2 = q2.child;
              continue;
            }
            if (q2 === a2)
              break a;
            for (; q2.sibling === null; ) {
              if (q2.return === null || q2.return === a2)
                break a;
              u2 === q2 && (u2 = null);
              q2 = q2.return;
            }
            u2 === q2 && (u2 = null);
            q2.sibling.return = q2.return;
            q2 = q2.sibling;
          }
        if (n2 && !l2 && (a2.mode & 1) !== 0)
          for (T$1 = a2, a2 = a2.child; a2 !== null; ) {
            for (l2 = T$1 = a2; T$1 !== null; ) {
              n2 = T$1;
              u2 = n2.child;
              switch (n2.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Nj(4, n2, n2.return);
                  break;
                case 1:
                  Jj(n2, n2.return);
                  f2 = n2.stateNode;
                  if (typeof f2.componentWillUnmount === "function") {
                    q2 = n2;
                    y2 = n2.return;
                    try {
                      e2 = q2, f2.props = e2.memoizedProps, f2.state = e2.memoizedState, f2.componentWillUnmount();
                    } catch (m2) {
                      U$1(q2, y2, m2);
                    }
                  }
                  break;
                case 5:
                  Jj(n2, n2.return);
                  break;
                case 22:
                  if (n2.memoizedState !== null) {
                    ek(l2);
                    continue;
                  }
              }
              u2 !== null ? (u2.return = n2, T$1 = u2) : ek(l2);
            }
            a2 = a2.sibling;
          }
      }
      break;
    case 19:
      ak(b2, a2);
      ck(a2);
      d2 & 4 && Yj(a2);
      break;
    case 21:
      break;
    default:
      ak(b2, a2), ck(a2);
  }
}
function ck(a2) {
  var b2 = a2.flags;
  if (b2 & 2) {
    try {
      a: {
        for (var c2 = a2.return; c2 !== null; ) {
          if (Rj(c2)) {
            var d2 = c2;
            break a;
          }
          c2 = c2.return;
        }
        throw Error(p$3(160));
      }
      switch (d2.tag) {
        case 5:
          var e2 = d2.stateNode;
          d2.flags & 32 && (nb(e2, ""), d2.flags &= -33);
          var f2 = Sj(a2);
          Uj(a2, f2, e2);
          break;
        case 3:
        case 4:
          var g2 = d2.stateNode.containerInfo, h2 = Sj(a2);
          Tj(a2, h2, g2);
          break;
        default:
          throw Error(p$3(161));
      }
    } catch (k2) {
      U$1(a2, a2.return, k2);
    }
    a2.flags &= -3;
  }
  b2 & 4096 && (a2.flags &= -4097);
}
function fk(a2, b2, c2) {
  T$1 = a2;
  gk(a2);
}
function gk(a2, b2, c2) {
  for (var d2 = (a2.mode & 1) !== 0; T$1 !== null; ) {
    var e2 = T$1, f2 = e2.child;
    if (e2.tag === 22 && d2) {
      var g2 = e2.memoizedState !== null || Hj;
      if (!g2) {
        var h2 = e2.alternate, k2 = h2 !== null && h2.memoizedState !== null || S$2;
        h2 = Hj;
        var l2 = S$2;
        Hj = g2;
        if ((S$2 = k2) && !l2)
          for (T$1 = e2; T$1 !== null; )
            g2 = T$1, k2 = g2.child, g2.tag === 22 && g2.memoizedState !== null ? hk(e2) : k2 !== null ? (k2.return = g2, T$1 = k2) : hk(e2);
        for (; f2 !== null; )
          T$1 = f2, gk(f2), f2 = f2.sibling;
        T$1 = e2;
        Hj = h2;
        S$2 = l2;
      }
      ik(a2);
    } else
      (e2.subtreeFlags & 8772) !== 0 && f2 !== null ? (f2.return = e2, T$1 = f2) : ik(a2);
  }
}
function ik(a2) {
  for (; T$1 !== null; ) {
    var b2 = T$1;
    if ((b2.flags & 8772) !== 0) {
      var c2 = b2.alternate;
      try {
        if ((b2.flags & 8772) !== 0)
          switch (b2.tag) {
            case 0:
            case 11:
            case 15:
              S$2 || Oj(5, b2);
              break;
            case 1:
              var d2 = b2.stateNode;
              if (b2.flags & 4 && !S$2)
                if (c2 === null)
                  d2.componentDidMount();
                else {
                  var e2 = b2.elementType === b2.type ? c2.memoizedProps : kg(b2.type, c2.memoizedProps);
                  d2.componentDidUpdate(e2, c2.memoizedState, d2.__reactInternalSnapshotBeforeUpdate);
                }
              var f2 = b2.updateQueue;
              f2 !== null && Gg(b2, f2, d2);
              break;
            case 3:
              var g2 = b2.updateQueue;
              if (g2 !== null) {
                c2 = null;
                if (b2.child !== null)
                  switch (b2.child.tag) {
                    case 5:
                      c2 = b2.child.stateNode;
                      break;
                    case 1:
                      c2 = b2.child.stateNode;
                  }
                Gg(b2, g2, c2);
              }
              break;
            case 5:
              var h2 = b2.stateNode;
              if (c2 === null && b2.flags & 4) {
                c2 = h2;
                var k2 = b2.memoizedProps;
                switch (b2.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    k2.autoFocus && c2.focus();
                    break;
                  case "img":
                    k2.src && (c2.src = k2.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (b2.memoizedState === null) {
                var l2 = b2.alternate;
                if (l2 !== null) {
                  var n2 = l2.memoizedState;
                  if (n2 !== null) {
                    var u2 = n2.dehydrated;
                    u2 !== null && ad(u2);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
              break;
            default:
              throw Error(p$3(163));
          }
        S$2 || b2.flags & 512 && Pj(b2);
      } catch (q2) {
        U$1(b2, b2.return, q2);
      }
    }
    if (b2 === a2) {
      T$1 = null;
      break;
    }
    c2 = b2.sibling;
    if (c2 !== null) {
      c2.return = b2.return;
      T$1 = c2;
      break;
    }
    T$1 = b2.return;
  }
}
function ek(a2) {
  for (; T$1 !== null; ) {
    var b2 = T$1;
    if (b2 === a2) {
      T$1 = null;
      break;
    }
    var c2 = b2.sibling;
    if (c2 !== null) {
      c2.return = b2.return;
      T$1 = c2;
      break;
    }
    T$1 = b2.return;
  }
}
function hk(a2) {
  for (; T$1 !== null; ) {
    var b2 = T$1;
    try {
      switch (b2.tag) {
        case 0:
        case 11:
        case 15:
          var c2 = b2.return;
          try {
            Oj(4, b2);
          } catch (k2) {
            U$1(b2, c2, k2);
          }
          break;
        case 1:
          var d2 = b2.stateNode;
          if (typeof d2.componentDidMount === "function") {
            var e2 = b2.return;
            try {
              d2.componentDidMount();
            } catch (k2) {
              U$1(b2, e2, k2);
            }
          }
          var f2 = b2.return;
          try {
            Pj(b2);
          } catch (k2) {
            U$1(b2, f2, k2);
          }
          break;
        case 5:
          var g2 = b2.return;
          try {
            Pj(b2);
          } catch (k2) {
            U$1(b2, g2, k2);
          }
      }
    } catch (k2) {
      U$1(b2, b2.return, k2);
    }
    if (b2 === a2) {
      T$1 = null;
      break;
    }
    var h2 = b2.sibling;
    if (h2 !== null) {
      h2.return = b2.return;
      T$1 = h2;
      break;
    }
    T$1 = b2.return;
  }
}
var jk = Math.ceil, kk = ta.ReactCurrentDispatcher, lk = ta.ReactCurrentOwner, mk = ta.ReactCurrentBatchConfig, W$1 = 0, P$1 = null, X$1 = null, Y$1 = 0, cj = 0, mj = Tf(0), R = 0, nk = null, Fg = 0, ok$1 = 0, pk = 0, qk = null, rk = null, dk = 0, aj = Infinity, sk = null, Li = false, Mi = null, Oi = null, tk = false, uk = null, vk = 0, wk = 0, xk = null, yk = -1, zk = 0;
function Jg() {
  return (W$1 & 6) !== 0 ? B$1() : yk !== -1 ? yk : yk = B$1();
}
function Kg(a2) {
  if ((a2.mode & 1) === 0)
    return 1;
  if ((W$1 & 2) !== 0 && Y$1 !== 0)
    return Y$1 & -Y$1;
  if (jg.transition !== null)
    return zk === 0 && (zk = xc()), zk;
  a2 = C;
  if (a2 !== 0)
    return a2;
  a2 = window.event;
  a2 = a2 === void 0 ? 16 : id$1(a2.type);
  return a2;
}
function Lg(a2, b2, c2) {
  if (50 < wk)
    throw wk = 0, xk = null, Error(p$3(185));
  var d2 = Ak(a2, b2);
  if (d2 === null)
    return null;
  zc(d2, b2, c2);
  if ((W$1 & 2) === 0 || d2 !== P$1)
    d2 === P$1 && ((W$1 & 2) === 0 && (ok$1 |= b2), R === 4 && Bk(d2, Y$1)), Ck(d2, c2), b2 === 1 && W$1 === 0 && (a2.mode & 1) === 0 && (aj = B$1() + 500, eg && ig());
  return d2;
}
function Ak(a2, b2) {
  a2.lanes |= b2;
  var c2 = a2.alternate;
  c2 !== null && (c2.lanes |= b2);
  c2 = a2;
  for (a2 = a2.return; a2 !== null; )
    a2.childLanes |= b2, c2 = a2.alternate, c2 !== null && (c2.childLanes |= b2), c2 = a2, a2 = a2.return;
  return c2.tag === 3 ? c2.stateNode : null;
}
function Bg(a2) {
  return (P$1 !== null || vg !== null) && (a2.mode & 1) !== 0 && (W$1 & 2) === 0;
}
function Ck(a2, b2) {
  var c2 = a2.callbackNode;
  vc(a2, b2);
  var d2 = tc(a2, a2 === P$1 ? Y$1 : 0);
  if (d2 === 0)
    c2 !== null && ac(c2), a2.callbackNode = null, a2.callbackPriority = 0;
  else if (b2 = d2 & -d2, a2.callbackPriority !== b2) {
    c2 != null && ac(c2);
    if (b2 === 1)
      a2.tag === 0 ? hg(Dk.bind(null, a2)) : gg(Dk.bind(null, a2)), If(function() {
        W$1 === 0 && ig();
      }), c2 = null;
    else {
      switch (Cc(d2)) {
        case 1:
          c2 = ec;
          break;
        case 4:
          c2 = fc;
          break;
        case 16:
          c2 = gc;
          break;
        case 536870912:
          c2 = ic;
          break;
        default:
          c2 = gc;
      }
      c2 = Ek(c2, Fk.bind(null, a2));
    }
    a2.callbackPriority = b2;
    a2.callbackNode = c2;
  }
}
function Fk(a2, b2) {
  yk = -1;
  zk = 0;
  if ((W$1 & 6) !== 0)
    throw Error(p$3(327));
  var c2 = a2.callbackNode;
  if (Gk() && a2.callbackNode !== c2)
    return null;
  var d2 = tc(a2, a2 === P$1 ? Y$1 : 0);
  if (d2 === 0)
    return null;
  if ((d2 & 30) !== 0 || (d2 & a2.expiredLanes) !== 0 || b2)
    b2 = Hk(a2, d2);
  else {
    b2 = d2;
    var e2 = W$1;
    W$1 |= 2;
    var f2 = Ik();
    if (P$1 !== a2 || Y$1 !== b2)
      sk = null, aj = B$1() + 500, Jk(a2, b2);
    do
      try {
        Kk();
        break;
      } catch (h2) {
        Lk(a2, h2);
      }
    while (1);
    pg();
    kk.current = f2;
    W$1 = e2;
    X$1 !== null ? b2 = 0 : (P$1 = null, Y$1 = 0, b2 = R);
  }
  if (b2 !== 0) {
    b2 === 2 && (e2 = wc(a2), e2 !== 0 && (d2 = e2, b2 = Mk(a2, e2)));
    if (b2 === 1)
      throw c2 = nk, Jk(a2, 0), Bk(a2, d2), Ck(a2, B$1()), c2;
    if (b2 === 6)
      Bk(a2, d2);
    else {
      e2 = a2.current.alternate;
      if ((d2 & 30) === 0 && !Nk(e2) && (b2 = Hk(a2, d2), b2 === 2 && (f2 = wc(a2), f2 !== 0 && (d2 = f2, b2 = Mk(a2, f2))), b2 === 1))
        throw c2 = nk, Jk(a2, 0), Bk(a2, d2), Ck(a2, B$1()), c2;
      a2.finishedWork = e2;
      a2.finishedLanes = d2;
      switch (b2) {
        case 0:
        case 1:
          throw Error(p$3(345));
        case 2:
          Ok(a2, rk, sk);
          break;
        case 3:
          Bk(a2, d2);
          if ((d2 & 130023424) === d2 && (b2 = dk + 500 - B$1(), 10 < b2)) {
            if (tc(a2, 0) !== 0)
              break;
            e2 = a2.suspendedLanes;
            if ((e2 & d2) !== d2) {
              Jg();
              a2.pingedLanes |= a2.suspendedLanes & e2;
              break;
            }
            a2.timeoutHandle = Ef(Ok.bind(null, a2, rk, sk), b2);
            break;
          }
          Ok(a2, rk, sk);
          break;
        case 4:
          Bk(a2, d2);
          if ((d2 & 4194240) === d2)
            break;
          b2 = a2.eventTimes;
          for (e2 = -1; 0 < d2; ) {
            var g2 = 31 - nc(d2);
            f2 = 1 << g2;
            g2 = b2[g2];
            g2 > e2 && (e2 = g2);
            d2 &= ~f2;
          }
          d2 = e2;
          d2 = B$1() - d2;
          d2 = (120 > d2 ? 120 : 480 > d2 ? 480 : 1080 > d2 ? 1080 : 1920 > d2 ? 1920 : 3e3 > d2 ? 3e3 : 4320 > d2 ? 4320 : 1960 * jk(d2 / 1960)) - d2;
          if (10 < d2) {
            a2.timeoutHandle = Ef(Ok.bind(null, a2, rk, sk), d2);
            break;
          }
          Ok(a2, rk, sk);
          break;
        case 5:
          Ok(a2, rk, sk);
          break;
        default:
          throw Error(p$3(329));
      }
    }
  }
  Ck(a2, B$1());
  return a2.callbackNode === c2 ? Fk.bind(null, a2) : null;
}
function Mk(a2, b2) {
  var c2 = qk;
  a2.current.memoizedState.isDehydrated && (Jk(a2, b2).flags |= 256);
  a2 = Hk(a2, b2);
  a2 !== 2 && (b2 = rk, rk = c2, b2 !== null && Zi(b2));
  return a2;
}
function Zi(a2) {
  rk === null ? rk = a2 : rk.push.apply(rk, a2);
}
function Nk(a2) {
  for (var b2 = a2; ; ) {
    if (b2.flags & 16384) {
      var c2 = b2.updateQueue;
      if (c2 !== null && (c2 = c2.stores, c2 !== null))
        for (var d2 = 0; d2 < c2.length; d2++) {
          var e2 = c2[d2], f2 = e2.getSnapshot;
          e2 = e2.value;
          try {
            if (!Ge$1(f2(), e2))
              return false;
          } catch (g2) {
            return false;
          }
        }
    }
    c2 = b2.child;
    if (b2.subtreeFlags & 16384 && c2 !== null)
      c2.return = b2, b2 = c2;
    else {
      if (b2 === a2)
        break;
      for (; b2.sibling === null; ) {
        if (b2.return === null || b2.return === a2)
          return true;
        b2 = b2.return;
      }
      b2.sibling.return = b2.return;
      b2 = b2.sibling;
    }
  }
  return true;
}
function Bk(a2, b2) {
  b2 &= ~pk;
  b2 &= ~ok$1;
  a2.suspendedLanes |= b2;
  a2.pingedLanes &= ~b2;
  for (a2 = a2.expirationTimes; 0 < b2; ) {
    var c2 = 31 - nc(b2), d2 = 1 << c2;
    a2[c2] = -1;
    b2 &= ~d2;
  }
}
function Dk(a2) {
  if ((W$1 & 6) !== 0)
    throw Error(p$3(327));
  Gk();
  var b2 = tc(a2, 0);
  if ((b2 & 1) === 0)
    return Ck(a2, B$1()), null;
  var c2 = Hk(a2, b2);
  if (a2.tag !== 0 && c2 === 2) {
    var d2 = wc(a2);
    d2 !== 0 && (b2 = d2, c2 = Mk(a2, d2));
  }
  if (c2 === 1)
    throw c2 = nk, Jk(a2, 0), Bk(a2, b2), Ck(a2, B$1()), c2;
  if (c2 === 6)
    throw Error(p$3(345));
  a2.finishedWork = a2.current.alternate;
  a2.finishedLanes = b2;
  Ok(a2, rk, sk);
  Ck(a2, B$1());
  return null;
}
function Pk(a2, b2) {
  var c2 = W$1;
  W$1 |= 1;
  try {
    return a2(b2);
  } finally {
    W$1 = c2, W$1 === 0 && (aj = B$1() + 500, eg && ig());
  }
}
function Qk(a2) {
  uk !== null && uk.tag === 0 && (W$1 & 6) === 0 && Gk();
  var b2 = W$1;
  W$1 |= 1;
  var c2 = mk.transition, d2 = C;
  try {
    if (mk.transition = null, C = 1, a2)
      return a2();
  } finally {
    C = d2, mk.transition = c2, W$1 = b2, (W$1 & 6) === 0 && ig();
  }
}
function bj() {
  cj = mj.current;
  E$1(mj);
}
function Jk(a2, b2) {
  a2.finishedWork = null;
  a2.finishedLanes = 0;
  var c2 = a2.timeoutHandle;
  c2 !== -1 && (a2.timeoutHandle = -1, Ff(c2));
  if (X$1 !== null)
    for (c2 = X$1.return; c2 !== null; ) {
      var d2 = c2;
      ch(d2);
      switch (d2.tag) {
        case 1:
          d2 = d2.type.childContextTypes;
          d2 !== null && d2 !== void 0 && Zf();
          break;
        case 3:
          Gh();
          E$1(Vf);
          E$1(H$1);
          Lh();
          break;
        case 5:
          Ih(d2);
          break;
        case 4:
          Gh();
          break;
        case 13:
          E$1(K$1);
          break;
        case 19:
          E$1(K$1);
          break;
        case 10:
          qg(d2.type._context);
          break;
        case 22:
        case 23:
          bj();
      }
      c2 = c2.return;
    }
  P$1 = a2;
  X$1 = a2 = th(a2.current, null);
  Y$1 = cj = b2;
  R = 0;
  nk = null;
  pk = ok$1 = Fg = 0;
  rk = qk = null;
  if (vg !== null) {
    for (b2 = 0; b2 < vg.length; b2++)
      if (c2 = vg[b2], d2 = c2.interleaved, d2 !== null) {
        c2.interleaved = null;
        var e2 = d2.next, f2 = c2.pending;
        if (f2 !== null) {
          var g2 = f2.next;
          f2.next = e2;
          d2.next = g2;
        }
        c2.pending = d2;
      }
    vg = null;
  }
  return a2;
}
function Lk(a2, b2) {
  do {
    var c2 = X$1;
    try {
      pg();
      Mh.current = Yh;
      if (Ph) {
        for (var d2 = L$1.memoizedState; d2 !== null; ) {
          var e2 = d2.queue;
          e2 !== null && (e2.pending = null);
          d2 = d2.next;
        }
        Ph = false;
      }
      Oh = 0;
      N$1 = M$1 = L$1 = null;
      Qh = false;
      Rh = 0;
      lk.current = null;
      if (c2 === null || c2.return === null) {
        R = 1;
        nk = b2;
        X$1 = null;
        break;
      }
      a: {
        var f2 = a2, g2 = c2.return, h2 = c2, k2 = b2;
        b2 = Y$1;
        h2.flags |= 32768;
        if (k2 !== null && typeof k2 === "object" && typeof k2.then === "function") {
          var l2 = k2, n2 = h2, u2 = n2.tag;
          if ((n2.mode & 1) === 0 && (u2 === 0 || u2 === 11 || u2 === 15)) {
            var q2 = n2.alternate;
            q2 ? (n2.updateQueue = q2.updateQueue, n2.memoizedState = q2.memoizedState, n2.lanes = q2.lanes) : (n2.updateQueue = null, n2.memoizedState = null);
          }
          var y2 = Ri(g2);
          if (y2 !== null) {
            y2.flags &= -257;
            Si(y2, g2, h2, f2, b2);
            y2.mode & 1 && Pi(f2, l2, b2);
            b2 = y2;
            k2 = l2;
            var m2 = b2.updateQueue;
            if (m2 === null) {
              var w2 = /* @__PURE__ */ new Set();
              w2.add(k2);
              b2.updateQueue = w2;
            } else
              m2.add(k2);
            break a;
          } else {
            if ((b2 & 1) === 0) {
              Pi(f2, l2, b2);
              $i();
              break a;
            }
            k2 = Error(p$3(426));
          }
        } else if (I$1 && h2.mode & 1) {
          var J2 = Ri(g2);
          if (J2 !== null) {
            (J2.flags & 65536) === 0 && (J2.flags |= 256);
            Si(J2, g2, h2, f2, b2);
            oh(k2);
            break a;
          }
        }
        f2 = k2;
        R !== 4 && (R = 2);
        qk === null ? qk = [f2] : qk.push(f2);
        k2 = Hi(k2, h2);
        h2 = g2;
        do {
          switch (h2.tag) {
            case 3:
              h2.flags |= 65536;
              b2 &= -b2;
              h2.lanes |= b2;
              var v2 = Ki(h2, k2, b2);
              Dg(h2, v2);
              break a;
            case 1:
              f2 = k2;
              var x2 = h2.type, r2 = h2.stateNode;
              if ((h2.flags & 128) === 0 && (typeof x2.getDerivedStateFromError === "function" || r2 !== null && typeof r2.componentDidCatch === "function" && (Oi === null || !Oi.has(r2)))) {
                h2.flags |= 65536;
                b2 &= -b2;
                h2.lanes |= b2;
                var F2 = Ni(h2, f2, b2);
                Dg(h2, F2);
                break a;
              }
          }
          h2 = h2.return;
        } while (h2 !== null);
      }
      Rk(c2);
    } catch (Z2) {
      b2 = Z2;
      X$1 === c2 && c2 !== null && (X$1 = c2 = c2.return);
      continue;
    }
    break;
  } while (1);
}
function Ik() {
  var a2 = kk.current;
  kk.current = Yh;
  return a2 === null ? Yh : a2;
}
function $i() {
  if (R === 0 || R === 3 || R === 2)
    R = 4;
  P$1 === null || (Fg & 268435455) === 0 && (ok$1 & 268435455) === 0 || Bk(P$1, Y$1);
}
function Hk(a2, b2) {
  var c2 = W$1;
  W$1 |= 2;
  var d2 = Ik();
  if (P$1 !== a2 || Y$1 !== b2)
    sk = null, Jk(a2, b2);
  do
    try {
      Sk();
      break;
    } catch (e2) {
      Lk(a2, e2);
    }
  while (1);
  pg();
  W$1 = c2;
  kk.current = d2;
  if (X$1 !== null)
    throw Error(p$3(261));
  P$1 = null;
  Y$1 = 0;
  return R;
}
function Sk() {
  for (; X$1 !== null; )
    Tk(X$1);
}
function Kk() {
  for (; X$1 !== null && !bc(); )
    Tk(X$1);
}
function Tk(a2) {
  var b2 = Uk(a2.alternate, a2, cj);
  a2.memoizedProps = a2.pendingProps;
  b2 === null ? Rk(a2) : X$1 = b2;
  lk.current = null;
}
function Rk(a2) {
  var b2 = a2;
  do {
    var c2 = b2.alternate;
    a2 = b2.return;
    if ((b2.flags & 32768) === 0) {
      if (c2 = Yi(c2, b2, cj), c2 !== null) {
        X$1 = c2;
        return;
      }
    } else {
      c2 = Gj(c2, b2);
      if (c2 !== null) {
        c2.flags &= 32767;
        X$1 = c2;
        return;
      }
      if (a2 !== null)
        a2.flags |= 32768, a2.subtreeFlags = 0, a2.deletions = null;
      else {
        R = 6;
        X$1 = null;
        return;
      }
    }
    b2 = b2.sibling;
    if (b2 !== null) {
      X$1 = b2;
      return;
    }
    X$1 = b2 = a2;
  } while (b2 !== null);
  R === 0 && (R = 5);
}
function Ok(a2, b2, c2) {
  var d2 = C, e2 = mk.transition;
  try {
    mk.transition = null, C = 1, Vk(a2, b2, c2, d2);
  } finally {
    mk.transition = e2, C = d2;
  }
  return null;
}
function Vk(a2, b2, c2, d2) {
  do
    Gk();
  while (uk !== null);
  if ((W$1 & 6) !== 0)
    throw Error(p$3(327));
  c2 = a2.finishedWork;
  var e2 = a2.finishedLanes;
  if (c2 === null)
    return null;
  a2.finishedWork = null;
  a2.finishedLanes = 0;
  if (c2 === a2.current)
    throw Error(p$3(177));
  a2.callbackNode = null;
  a2.callbackPriority = 0;
  var f2 = c2.lanes | c2.childLanes;
  Ac(a2, f2);
  a2 === P$1 && (X$1 = P$1 = null, Y$1 = 0);
  (c2.subtreeFlags & 2064) === 0 && (c2.flags & 2064) === 0 || tk || (tk = true, Ek(gc, function() {
    Gk();
    return null;
  }));
  f2 = (c2.flags & 15990) !== 0;
  if ((c2.subtreeFlags & 15990) !== 0 || f2) {
    f2 = mk.transition;
    mk.transition = null;
    var g2 = C;
    C = 1;
    var h2 = W$1;
    W$1 |= 4;
    lk.current = null;
    Mj(a2, c2);
    bk(c2, a2);
    Ne$1(Cf);
    cd = !!Bf;
    Cf = Bf = null;
    a2.current = c2;
    fk(c2);
    cc$1();
    W$1 = h2;
    C = g2;
    mk.transition = f2;
  } else
    a2.current = c2;
  tk && (tk = false, uk = a2, vk = e2);
  f2 = a2.pendingLanes;
  f2 === 0 && (Oi = null);
  lc(c2.stateNode);
  Ck(a2, B$1());
  if (b2 !== null)
    for (d2 = a2.onRecoverableError, c2 = 0; c2 < b2.length; c2++)
      d2(b2[c2]);
  if (Li)
    throw Li = false, a2 = Mi, Mi = null, a2;
  (vk & 1) !== 0 && a2.tag !== 0 && Gk();
  f2 = a2.pendingLanes;
  (f2 & 1) !== 0 ? a2 === xk ? wk++ : (wk = 0, xk = a2) : wk = 0;
  ig();
  return null;
}
function Gk() {
  if (uk !== null) {
    var a2 = Cc(vk), b2 = mk.transition, c2 = C;
    try {
      mk.transition = null;
      C = 16 > a2 ? 16 : a2;
      if (uk === null)
        var d2 = false;
      else {
        a2 = uk;
        uk = null;
        vk = 0;
        if ((W$1 & 6) !== 0)
          throw Error(p$3(331));
        var e2 = W$1;
        W$1 |= 4;
        for (T$1 = a2.current; T$1 !== null; ) {
          var f2 = T$1, g2 = f2.child;
          if ((T$1.flags & 16) !== 0) {
            var h2 = f2.deletions;
            if (h2 !== null) {
              for (var k2 = 0; k2 < h2.length; k2++) {
                var l2 = h2[k2];
                for (T$1 = l2; T$1 !== null; ) {
                  var n2 = T$1;
                  switch (n2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Nj(8, n2, f2);
                  }
                  var u2 = n2.child;
                  if (u2 !== null)
                    u2.return = n2, T$1 = u2;
                  else
                    for (; T$1 !== null; ) {
                      n2 = T$1;
                      var q2 = n2.sibling, y2 = n2.return;
                      Qj(n2);
                      if (n2 === l2) {
                        T$1 = null;
                        break;
                      }
                      if (q2 !== null) {
                        q2.return = y2;
                        T$1 = q2;
                        break;
                      }
                      T$1 = y2;
                    }
                }
              }
              var m2 = f2.alternate;
              if (m2 !== null) {
                var w2 = m2.child;
                if (w2 !== null) {
                  m2.child = null;
                  do {
                    var J2 = w2.sibling;
                    w2.sibling = null;
                    w2 = J2;
                  } while (w2 !== null);
                }
              }
              T$1 = f2;
            }
          }
          if ((f2.subtreeFlags & 2064) !== 0 && g2 !== null)
            g2.return = f2, T$1 = g2;
          else
            b:
              for (; T$1 !== null; ) {
                f2 = T$1;
                if ((f2.flags & 2048) !== 0)
                  switch (f2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Nj(9, f2, f2.return);
                  }
                var v2 = f2.sibling;
                if (v2 !== null) {
                  v2.return = f2.return;
                  T$1 = v2;
                  break b;
                }
                T$1 = f2.return;
              }
        }
        var x2 = a2.current;
        for (T$1 = x2; T$1 !== null; ) {
          g2 = T$1;
          var r2 = g2.child;
          if ((g2.subtreeFlags & 2064) !== 0 && r2 !== null)
            r2.return = g2, T$1 = r2;
          else
            b:
              for (g2 = x2; T$1 !== null; ) {
                h2 = T$1;
                if ((h2.flags & 2048) !== 0)
                  try {
                    switch (h2.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Oj(9, h2);
                    }
                  } catch (Z2) {
                    U$1(h2, h2.return, Z2);
                  }
                if (h2 === g2) {
                  T$1 = null;
                  break b;
                }
                var F2 = h2.sibling;
                if (F2 !== null) {
                  F2.return = h2.return;
                  T$1 = F2;
                  break b;
                }
                T$1 = h2.return;
              }
        }
        W$1 = e2;
        ig();
        if (kc && typeof kc.onPostCommitFiberRoot === "function")
          try {
            kc.onPostCommitFiberRoot(jc, a2);
          } catch (Z2) {
          }
        d2 = true;
      }
      return d2;
    } finally {
      C = c2, mk.transition = b2;
    }
  }
  return false;
}
function Wk(a2, b2, c2) {
  b2 = Hi(c2, b2);
  b2 = Ki(a2, b2, 1);
  Ag(a2, b2);
  b2 = Jg();
  a2 = Ak(a2, 1);
  a2 !== null && (zc(a2, 1, b2), Ck(a2, b2));
}
function U$1(a2, b2, c2) {
  if (a2.tag === 3)
    Wk(a2, a2, c2);
  else
    for (; b2 !== null; ) {
      if (b2.tag === 3) {
        Wk(b2, a2, c2);
        break;
      } else if (b2.tag === 1) {
        var d2 = b2.stateNode;
        if (typeof b2.type.getDerivedStateFromError === "function" || typeof d2.componentDidCatch === "function" && (Oi === null || !Oi.has(d2))) {
          a2 = Hi(c2, a2);
          a2 = Ni(b2, a2, 1);
          Ag(b2, a2);
          a2 = Jg();
          b2 = Ak(b2, 1);
          b2 !== null && (zc(b2, 1, a2), Ck(b2, a2));
          break;
        }
      }
      b2 = b2.return;
    }
}
function Qi(a2, b2, c2) {
  var d2 = a2.pingCache;
  d2 !== null && d2.delete(b2);
  b2 = Jg();
  a2.pingedLanes |= a2.suspendedLanes & c2;
  P$1 === a2 && (Y$1 & c2) === c2 && (R === 4 || R === 3 && (Y$1 & 130023424) === Y$1 && 500 > B$1() - dk ? Jk(a2, 0) : pk |= c2);
  Ck(a2, b2);
}
function Xk(a2, b2) {
  b2 === 0 && ((a2.mode & 1) === 0 ? b2 = 1 : (b2 = rc, rc <<= 1, (rc & 130023424) === 0 && (rc = 4194304)));
  var c2 = Jg();
  a2 = Ak(a2, b2);
  a2 !== null && (zc(a2, b2, c2), Ck(a2, c2));
}
function zj(a2) {
  var b2 = a2.memoizedState, c2 = 0;
  b2 !== null && (c2 = b2.retryLane);
  Xk(a2, c2);
}
function Zj(a2, b2) {
  var c2 = 0;
  switch (a2.tag) {
    case 13:
      var d2 = a2.stateNode;
      var e2 = a2.memoizedState;
      e2 !== null && (c2 = e2.retryLane);
      break;
    case 19:
      d2 = a2.stateNode;
      break;
    default:
      throw Error(p$3(314));
  }
  d2 !== null && d2.delete(b2);
  Xk(a2, c2);
}
var Uk;
Uk = function(a2, b2, c2) {
  if (a2 !== null)
    if (a2.memoizedProps !== b2.pendingProps || Vf.current)
      tg = true;
    else {
      if ((a2.lanes & c2) === 0 && (b2.flags & 128) === 0)
        return tg = false, Fj(a2, b2, c2);
      tg = (a2.flags & 131072) !== 0 ? true : false;
    }
  else
    tg = false, I$1 && (b2.flags & 1048576) !== 0 && ah(b2, Ug, b2.index);
  b2.lanes = 0;
  switch (b2.tag) {
    case 2:
      var d2 = b2.type;
      a2 !== null && (a2.alternate = null, b2.alternate = null, b2.flags |= 2);
      a2 = b2.pendingProps;
      var e2 = Xf(b2, H$1.current);
      sg(b2, c2);
      e2 = Uh(null, b2, d2, a2, e2, c2);
      var f2 = Zh();
      b2.flags |= 1;
      typeof e2 === "object" && e2 !== null && typeof e2.render === "function" && e2.$$typeof === void 0 ? (b2.tag = 1, b2.memoizedState = null, b2.updateQueue = null, Yf(d2) ? (f2 = true, bg(b2)) : f2 = false, b2.memoizedState = e2.state !== null && e2.state !== void 0 ? e2.state : null, xg(b2), e2.updater = Mg, b2.stateNode = e2, e2._reactInternals = b2, Qg(b2, d2, a2, c2), b2 = pj(null, b2, d2, true, f2, c2)) : (b2.tag = 0, I$1 && f2 && bh(b2), ej(null, b2, e2, c2), b2 = b2.child);
      return b2;
    case 16:
      d2 = b2.elementType;
      a: {
        a2 !== null && (a2.alternate = null, b2.alternate = null, b2.flags |= 2);
        a2 = b2.pendingProps;
        e2 = d2._init;
        d2 = e2(d2._payload);
        b2.type = d2;
        e2 = b2.tag = Yk(d2);
        a2 = kg(d2, a2);
        switch (e2) {
          case 0:
            b2 = kj(null, b2, d2, a2, c2);
            break a;
          case 1:
            b2 = oj(null, b2, d2, a2, c2);
            break a;
          case 11:
            b2 = fj(null, b2, d2, a2, c2);
            break a;
          case 14:
            b2 = hj(null, b2, d2, kg(d2.type, a2), c2);
            break a;
        }
        throw Error(p$3(306, d2, ""));
      }
      return b2;
    case 0:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : kg(d2, e2), kj(a2, b2, d2, e2, c2);
    case 1:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : kg(d2, e2), oj(a2, b2, d2, e2, c2);
    case 3:
      a: {
        qj(b2);
        if (a2 === null)
          throw Error(p$3(387));
        d2 = b2.pendingProps;
        f2 = b2.memoizedState;
        e2 = f2.element;
        yg(a2, b2);
        Eg(b2, d2, null, c2);
        var g2 = b2.memoizedState;
        d2 = g2.element;
        if (f2.isDehydrated)
          if (f2 = {
            element: d2,
            isDehydrated: false,
            cache: g2.cache,
            pendingSuspenseBoundaries: g2.pendingSuspenseBoundaries,
            transitions: g2.transitions
          }, b2.updateQueue.baseState = f2, b2.memoizedState = f2, b2.flags & 256) {
            e2 = Error(p$3(423));
            b2 = rj(a2, b2, d2, c2, e2);
            break a;
          } else if (d2 !== e2) {
            e2 = Error(p$3(424));
            b2 = rj(a2, b2, d2, c2, e2);
            break a;
          } else
            for (eh = Kf(b2.stateNode.containerInfo.firstChild), dh = b2, I$1 = true, fh = null, c2 = zh(b2, null, d2, c2), b2.child = c2; c2; )
              c2.flags = c2.flags & -3 | 4096, c2 = c2.sibling;
        else {
          nh();
          if (d2 === e2) {
            b2 = gj(a2, b2, c2);
            break a;
          }
          ej(a2, b2, d2, c2);
        }
        b2 = b2.child;
      }
      return b2;
    case 5:
      return Hh(b2), a2 === null && kh(b2), d2 = b2.type, e2 = b2.pendingProps, f2 = a2 !== null ? a2.memoizedProps : null, g2 = e2.children, Df(d2, e2) ? g2 = null : f2 !== null && Df(d2, f2) && (b2.flags |= 32), nj(a2, b2), ej(a2, b2, g2, c2), b2.child;
    case 6:
      return a2 === null && kh(b2), null;
    case 13:
      return vj(a2, b2, c2);
    case 4:
      return Fh(b2, b2.stateNode.containerInfo), d2 = b2.pendingProps, a2 === null ? b2.child = yh(b2, null, d2, c2) : ej(a2, b2, d2, c2), b2.child;
    case 11:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : kg(d2, e2), fj(a2, b2, d2, e2, c2);
    case 7:
      return ej(a2, b2, b2.pendingProps, c2), b2.child;
    case 8:
      return ej(a2, b2, b2.pendingProps.children, c2), b2.child;
    case 12:
      return ej(a2, b2, b2.pendingProps.children, c2), b2.child;
    case 10:
      a: {
        d2 = b2.type._context;
        e2 = b2.pendingProps;
        f2 = b2.memoizedProps;
        g2 = e2.value;
        G$1(lg, d2._currentValue);
        d2._currentValue = g2;
        if (f2 !== null)
          if (Ge$1(f2.value, g2)) {
            if (f2.children === e2.children && !Vf.current) {
              b2 = gj(a2, b2, c2);
              break a;
            }
          } else
            for (f2 = b2.child, f2 !== null && (f2.return = b2); f2 !== null; ) {
              var h2 = f2.dependencies;
              if (h2 !== null) {
                g2 = f2.child;
                for (var k2 = h2.firstContext; k2 !== null; ) {
                  if (k2.context === d2) {
                    if (f2.tag === 1) {
                      k2 = zg(-1, c2 & -c2);
                      k2.tag = 2;
                      var l2 = f2.updateQueue;
                      if (l2 !== null) {
                        l2 = l2.shared;
                        var n2 = l2.pending;
                        n2 === null ? k2.next = k2 : (k2.next = n2.next, n2.next = k2);
                        l2.pending = k2;
                      }
                    }
                    f2.lanes |= c2;
                    k2 = f2.alternate;
                    k2 !== null && (k2.lanes |= c2);
                    rg(f2.return, c2, b2);
                    h2.lanes |= c2;
                    break;
                  }
                  k2 = k2.next;
                }
              } else if (f2.tag === 10)
                g2 = f2.type === b2.type ? null : f2.child;
              else if (f2.tag === 18) {
                g2 = f2.return;
                if (g2 === null)
                  throw Error(p$3(341));
                g2.lanes |= c2;
                h2 = g2.alternate;
                h2 !== null && (h2.lanes |= c2);
                rg(g2, c2, b2);
                g2 = f2.sibling;
              } else
                g2 = f2.child;
              if (g2 !== null)
                g2.return = f2;
              else
                for (g2 = f2; g2 !== null; ) {
                  if (g2 === b2) {
                    g2 = null;
                    break;
                  }
                  f2 = g2.sibling;
                  if (f2 !== null) {
                    f2.return = g2.return;
                    g2 = f2;
                    break;
                  }
                  g2 = g2.return;
                }
              f2 = g2;
            }
        ej(a2, b2, e2.children, c2);
        b2 = b2.child;
      }
      return b2;
    case 9:
      return e2 = b2.type, d2 = b2.pendingProps.children, sg(b2, c2), e2 = ug(e2), d2 = d2(e2), b2.flags |= 1, ej(a2, b2, d2, c2), b2.child;
    case 14:
      return d2 = b2.type, e2 = kg(d2, b2.pendingProps), e2 = kg(d2.type, e2), hj(a2, b2, d2, e2, c2);
    case 15:
      return jj(a2, b2, b2.type, b2.pendingProps, c2);
    case 17:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : kg(d2, e2), a2 !== null && (a2.alternate = null, b2.alternate = null, b2.flags |= 2), b2.tag = 1, Yf(d2) ? (a2 = true, bg(b2)) : a2 = false, sg(b2, c2), Og(b2, d2, e2), Qg(b2, d2, e2, c2), pj(null, b2, d2, true, a2, c2);
    case 19:
      return Ej(a2, b2, c2);
    case 22:
      return lj(a2, b2, c2);
  }
  throw Error(p$3(156, b2.tag));
};
function Ek(a2, b2) {
  return $b(a2, b2);
}
function Zk(a2, b2, c2, d2) {
  this.tag = a2;
  this.key = c2;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b2;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d2;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function hh(a2, b2, c2, d2) {
  return new Zk(a2, b2, c2, d2);
}
function ij(a2) {
  a2 = a2.prototype;
  return !(!a2 || !a2.isReactComponent);
}
function Yk(a2) {
  if (typeof a2 === "function")
    return ij(a2) ? 1 : 0;
  if (a2 !== void 0 && a2 !== null) {
    a2 = a2.$$typeof;
    if (a2 === Ca)
      return 11;
    if (a2 === Fa)
      return 14;
  }
  return 2;
}
function th(a2, b2) {
  var c2 = a2.alternate;
  c2 === null ? (c2 = hh(a2.tag, b2, a2.key, a2.mode), c2.elementType = a2.elementType, c2.type = a2.type, c2.stateNode = a2.stateNode, c2.alternate = a2, a2.alternate = c2) : (c2.pendingProps = b2, c2.type = a2.type, c2.flags = 0, c2.subtreeFlags = 0, c2.deletions = null);
  c2.flags = a2.flags & 14680064;
  c2.childLanes = a2.childLanes;
  c2.lanes = a2.lanes;
  c2.child = a2.child;
  c2.memoizedProps = a2.memoizedProps;
  c2.memoizedState = a2.memoizedState;
  c2.updateQueue = a2.updateQueue;
  b2 = a2.dependencies;
  c2.dependencies = b2 === null ? null : { lanes: b2.lanes, firstContext: b2.firstContext };
  c2.sibling = a2.sibling;
  c2.index = a2.index;
  c2.ref = a2.ref;
  return c2;
}
function vh$1(a2, b2, c2, d2, e2, f2) {
  var g2 = 2;
  d2 = a2;
  if (typeof a2 === "function")
    ij(a2) && (g2 = 1);
  else if (typeof a2 === "string")
    g2 = 5;
  else
    a:
      switch (a2) {
        case wa:
          return xh(c2.children, e2, f2, b2);
        case xa:
          g2 = 8;
          e2 |= 8;
          break;
        case za:
          return a2 = hh(12, c2, b2, e2 | 2), a2.elementType = za, a2.lanes = f2, a2;
        case Da:
          return a2 = hh(13, c2, b2, e2), a2.elementType = Da, a2.lanes = f2, a2;
        case Ea:
          return a2 = hh(19, c2, b2, e2), a2.elementType = Ea, a2.lanes = f2, a2;
        case Ha:
          return wj(c2, e2, f2, b2);
        default:
          if (typeof a2 === "object" && a2 !== null)
            switch (a2.$$typeof) {
              case Aa:
                g2 = 10;
                break a;
              case Ba:
                g2 = 9;
                break a;
              case Ca:
                g2 = 11;
                break a;
              case Fa:
                g2 = 14;
                break a;
              case Ga:
                g2 = 16;
                d2 = null;
                break a;
            }
          throw Error(p$3(130, a2 == null ? a2 : typeof a2, ""));
      }
  b2 = hh(g2, c2, b2, e2);
  b2.elementType = a2;
  b2.type = d2;
  b2.lanes = f2;
  return b2;
}
function xh(a2, b2, c2, d2) {
  a2 = hh(7, a2, d2, b2);
  a2.lanes = c2;
  return a2;
}
function wj(a2, b2, c2, d2) {
  a2 = hh(22, a2, d2, b2);
  a2.elementType = Ha;
  a2.lanes = c2;
  a2.stateNode = {};
  return a2;
}
function uh(a2, b2, c2) {
  a2 = hh(6, a2, null, b2);
  a2.lanes = c2;
  return a2;
}
function wh(a2, b2, c2) {
  b2 = hh(4, a2.children !== null ? a2.children : [], a2.key, b2);
  b2.lanes = c2;
  b2.stateNode = { containerInfo: a2.containerInfo, pendingChildren: null, implementation: a2.implementation };
  return b2;
}
function $k(a2, b2, c2, d2, e2) {
  this.tag = b2;
  this.containerInfo = a2;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.callbackNode = this.pendingContext = this.context = null;
  this.callbackPriority = 0;
  this.eventTimes = yc(0);
  this.expirationTimes = yc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = yc(0);
  this.identifierPrefix = d2;
  this.onRecoverableError = e2;
  this.mutableSourceEagerHydrationData = null;
}
function al(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  a2 = new $k(a2, b2, c2, h2, k2);
  b2 === 1 ? (b2 = 1, f2 === true && (b2 |= 8)) : b2 = 0;
  f2 = hh(3, null, null, b2);
  a2.current = f2;
  f2.stateNode = a2;
  f2.memoizedState = { element: d2, isDehydrated: c2, cache: null, transitions: null, pendingSuspenseBoundaries: null };
  xg(f2);
  return a2;
}
function bl(a2, b2, c2) {
  var d2 = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: va, key: d2 == null ? null : "" + d2, children: a2, containerInfo: b2, implementation: c2 };
}
function cl(a2) {
  if (!a2)
    return Uf;
  a2 = a2._reactInternals;
  a: {
    if (Ub(a2) !== a2 || a2.tag !== 1)
      throw Error(p$3(170));
    var b2 = a2;
    do {
      switch (b2.tag) {
        case 3:
          b2 = b2.stateNode.context;
          break a;
        case 1:
          if (Yf(b2.type)) {
            b2 = b2.stateNode.__reactInternalMemoizedMergedChildContext;
            break a;
          }
      }
      b2 = b2.return;
    } while (b2 !== null);
    throw Error(p$3(171));
  }
  if (a2.tag === 1) {
    var c2 = a2.type;
    if (Yf(c2))
      return ag(a2, c2, b2);
  }
  return b2;
}
function dl(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  a2 = al(c2, d2, true, a2, e2, f2, g2, h2, k2);
  a2.context = cl(null);
  c2 = a2.current;
  d2 = Jg();
  e2 = Kg(c2);
  f2 = zg(d2, e2);
  f2.callback = b2 !== void 0 && b2 !== null ? b2 : null;
  Ag(c2, f2);
  a2.current.lanes = e2;
  zc(a2, e2, d2);
  Ck(a2, d2);
  return a2;
}
function el(a2, b2, c2, d2) {
  var e2 = b2.current, f2 = Jg(), g2 = Kg(e2);
  c2 = cl(c2);
  b2.context === null ? b2.context = c2 : b2.pendingContext = c2;
  b2 = zg(f2, g2);
  b2.payload = { element: a2 };
  d2 = d2 === void 0 ? null : d2;
  d2 !== null && (b2.callback = d2);
  Ag(e2, b2);
  a2 = Lg(e2, g2, f2);
  a2 !== null && Cg(a2, e2, g2);
  return g2;
}
function fl(a2) {
  a2 = a2.current;
  if (!a2.child)
    return null;
  switch (a2.child.tag) {
    case 5:
      return a2.child.stateNode;
    default:
      return a2.child.stateNode;
  }
}
function gl(a2, b2) {
  a2 = a2.memoizedState;
  if (a2 !== null && a2.dehydrated !== null) {
    var c2 = a2.retryLane;
    a2.retryLane = c2 !== 0 && c2 < b2 ? c2 : b2;
  }
}
function hl(a2, b2) {
  gl(a2, b2);
  (a2 = a2.alternate) && gl(a2, b2);
}
function il() {
  return null;
}
var jl = typeof reportError === "function" ? reportError : function(a2) {
  console.error(a2);
};
function kl(a2) {
  this._internalRoot = a2;
}
ll.prototype.render = kl.prototype.render = function(a2) {
  var b2 = this._internalRoot;
  if (b2 === null)
    throw Error(p$3(409));
  el(a2, b2, null, null);
};
ll.prototype.unmount = kl.prototype.unmount = function() {
  var a2 = this._internalRoot;
  if (a2 !== null) {
    this._internalRoot = null;
    var b2 = a2.containerInfo;
    Qk(function() {
      el(null, a2, null, null);
    });
    b2[tf] = null;
  }
};
function ll(a2) {
  this._internalRoot = a2;
}
ll.prototype.unstable_scheduleHydration = function(a2) {
  if (a2) {
    var b2 = Gc();
    a2 = { blockedOn: null, target: a2, priority: b2 };
    for (var c2 = 0; c2 < Pc.length && b2 !== 0 && b2 < Pc[c2].priority; c2++)
      ;
    Pc.splice(c2, 0, a2);
    c2 === 0 && Uc(a2);
  }
};
function ml(a2) {
  return !(!a2 || a2.nodeType !== 1 && a2.nodeType !== 9 && a2.nodeType !== 11);
}
function nl(a2) {
  return !(!a2 || a2.nodeType !== 1 && a2.nodeType !== 9 && a2.nodeType !== 11 && (a2.nodeType !== 8 || a2.nodeValue !== " react-mount-point-unstable "));
}
function ol() {
}
function pl(a2, b2, c2, d2, e2) {
  if (e2) {
    if (typeof d2 === "function") {
      var f2 = d2;
      d2 = function() {
        var a3 = fl(g2);
        f2.call(a3);
      };
    }
    var g2 = dl(b2, d2, a2, 0, null, false, false, "", ol);
    a2._reactRootContainer = g2;
    a2[tf] = g2.current;
    rf(a2.nodeType === 8 ? a2.parentNode : a2);
    Qk();
    return g2;
  }
  for (; e2 = a2.lastChild; )
    a2.removeChild(e2);
  if (typeof d2 === "function") {
    var h2 = d2;
    d2 = function() {
      var a3 = fl(k2);
      h2.call(a3);
    };
  }
  var k2 = al(a2, 0, false, null, null, false, false, "", ol);
  a2._reactRootContainer = k2;
  a2[tf] = k2.current;
  rf(a2.nodeType === 8 ? a2.parentNode : a2);
  Qk(function() {
    el(b2, k2, c2, d2);
  });
  return k2;
}
function ql(a2, b2, c2, d2, e2) {
  var f2 = c2._reactRootContainer;
  if (f2) {
    var g2 = f2;
    if (typeof e2 === "function") {
      var h2 = e2;
      e2 = function() {
        var a3 = fl(g2);
        h2.call(a3);
      };
    }
    el(b2, g2, a2, e2);
  } else
    g2 = pl(c2, b2, a2, e2, d2);
  return fl(g2);
}
Dc = function(a2) {
  switch (a2.tag) {
    case 3:
      var b2 = a2.stateNode;
      if (b2.current.memoizedState.isDehydrated) {
        var c2 = sc(b2.pendingLanes);
        c2 !== 0 && (Bc(b2, c2 | 1), Ck(b2, B$1()), (W$1 & 6) === 0 && (aj = B$1() + 500, ig()));
      }
      break;
    case 13:
      var d2 = Jg();
      Qk(function() {
        return Lg(a2, 1, d2);
      });
      hl(a2, 1);
  }
};
Ec = function(a2) {
  if (a2.tag === 13) {
    var b2 = Jg();
    Lg(a2, 134217728, b2);
    hl(a2, 134217728);
  }
};
Fc = function(a2) {
  if (a2.tag === 13) {
    var b2 = Jg(), c2 = Kg(a2);
    Lg(a2, c2, b2);
    hl(a2, c2);
  }
};
Gc = function() {
  return C;
};
Hc = function(a2, b2) {
  var c2 = C;
  try {
    return C = a2, b2();
  } finally {
    C = c2;
  }
};
xb = function(a2, b2, c2) {
  switch (b2) {
    case "input":
      $a(a2, c2);
      b2 = c2.name;
      if (c2.type === "radio" && b2 != null) {
        for (c2 = a2; c2.parentNode; )
          c2 = c2.parentNode;
        c2 = c2.querySelectorAll("input[name=" + JSON.stringify("" + b2) + '][type="radio"]');
        for (b2 = 0; b2 < c2.length; b2++) {
          var d2 = c2[b2];
          if (d2 !== a2 && d2.form === a2.form) {
            var e2 = Cb(d2);
            if (!e2)
              throw Error(p$3(90));
            Va(d2);
            $a(d2, e2);
          }
        }
      }
      break;
    case "textarea":
      hb(a2, c2);
      break;
    case "select":
      b2 = c2.value, b2 != null && eb(a2, !!c2.multiple, b2, false);
  }
};
Fb = Pk;
Gb = Qk;
var rl = { usingClientEntryPoint: false, Events: [Bb, te$1, Cb, Db, Eb, Pk] }, sl = { findFiberByHostInstance: Vc, bundleType: 0, version: "18.1.0", rendererPackageName: "react-dom" };
var tl = { bundleType: sl.bundleType, version: sl.version, rendererPackageName: sl.rendererPackageName, rendererConfig: sl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ta.ReactCurrentDispatcher, findHostInstanceByFiber: function(a2) {
  a2 = Yb(a2);
  return a2 === null ? null : a2.stateNode;
}, findFiberByHostInstance: sl.findFiberByHostInstance || il, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.1.0-next-22edb9f77-20220426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined") {
  var ul = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ul.isDisabled && ul.supportsFiber)
    try {
      jc = ul.inject(tl), kc = ul;
    } catch (a2) {
    }
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rl;
reactDom_production_min.createPortal = function(a2, b2) {
  var c2 = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ml(b2))
    throw Error(p$3(200));
  return bl(a2, b2, null, c2);
};
reactDom_production_min.createRoot = function(a2, b2) {
  if (!ml(a2))
    throw Error(p$3(299));
  var c2 = false, d2 = "", e2 = jl;
  b2 !== null && b2 !== void 0 && (b2.unstable_strictMode === true && (c2 = true), b2.identifierPrefix !== void 0 && (d2 = b2.identifierPrefix), b2.onRecoverableError !== void 0 && (e2 = b2.onRecoverableError));
  b2 = al(a2, 1, false, null, null, c2, false, d2, e2);
  a2[tf] = b2.current;
  rf(a2.nodeType === 8 ? a2.parentNode : a2);
  return new kl(b2);
};
reactDom_production_min.findDOMNode = function(a2) {
  if (a2 == null)
    return null;
  if (a2.nodeType === 1)
    return a2;
  var b2 = a2._reactInternals;
  if (b2 === void 0) {
    if (typeof a2.render === "function")
      throw Error(p$3(188));
    a2 = Object.keys(a2).join(",");
    throw Error(p$3(268, a2));
  }
  a2 = Yb(b2);
  a2 = a2 === null ? null : a2.stateNode;
  return a2;
};
reactDom_production_min.flushSync = function(a2) {
  return Qk(a2);
};
reactDom_production_min.hydrate = function(a2, b2, c2) {
  if (!nl(b2))
    throw Error(p$3(200));
  return ql(null, a2, b2, true, c2);
};
reactDom_production_min.hydrateRoot = function(a2, b2, c2) {
  if (!ml(a2))
    throw Error(p$3(405));
  var d2 = c2 != null && c2.hydratedSources || null, e2 = false, f2 = "", g2 = jl;
  c2 !== null && c2 !== void 0 && (c2.unstable_strictMode === true && (e2 = true), c2.identifierPrefix !== void 0 && (f2 = c2.identifierPrefix), c2.onRecoverableError !== void 0 && (g2 = c2.onRecoverableError));
  b2 = dl(b2, null, a2, 1, c2 != null ? c2 : null, e2, false, f2, g2);
  a2[tf] = b2.current;
  rf(a2);
  if (d2)
    for (a2 = 0; a2 < d2.length; a2++)
      c2 = d2[a2], e2 = c2._getVersion, e2 = e2(c2._source), b2.mutableSourceEagerHydrationData == null ? b2.mutableSourceEagerHydrationData = [c2, e2] : b2.mutableSourceEagerHydrationData.push(c2, e2);
  return new ll(b2);
};
reactDom_production_min.render = function(a2, b2, c2) {
  if (!nl(b2))
    throw Error(p$3(200));
  return ql(null, a2, b2, false, c2);
};
reactDom_production_min.unmountComponentAtNode = function(a2) {
  if (!nl(a2))
    throw Error(p$3(40));
  return a2._reactRootContainer ? (Qk(function() {
    ql(null, null, a2, false, function() {
      a2._reactRootContainer = null;
      a2[tf] = null;
    });
  }), true) : false;
};
reactDom_production_min.unstable_batchedUpdates = Pk;
reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a2, b2, c2, d2) {
  if (!nl(c2))
    throw Error(p$3(200));
  if (a2 == null || a2._reactInternals === void 0)
    throw Error(p$3(38));
  return ql(a2, b2, c2, false, d2);
};
reactDom_production_min.version = "18.1.0-next-22edb9f77-20220426";
function checkDCE() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
    return;
  }
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    console.error(err);
  }
}
{
  checkDCE();
  reactDom.exports = reactDom_production_min;
}
var m$3 = reactDom.exports;
{
  client.createRoot = m$3.createRoot;
  client.hydrateRoot = m$3.hydrateRoot;
}
function uuid() {
  const hashTable = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9"
  ];
  let uuid2 = [];
  for (let i2 = 0; i2 < 35; i2++) {
    if (i2 === 7 || i2 === 12 || i2 === 17 || i2 === 22) {
      uuid2[i2] = "-";
    } else {
      uuid2[i2] = hashTable[Math.floor(Math.random() * hashTable.length - 1)];
    }
  }
  return uuid2.join("");
}
var uuid_1 = uuid;
var reactIs$2 = { exports: {} };
var reactIs_production_min$1 = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b$3 = typeof Symbol === "function" && Symbol.for, c$2 = b$3 ? Symbol.for("react.element") : 60103, d$1 = b$3 ? Symbol.for("react.portal") : 60106, e$2 = b$3 ? Symbol.for("react.fragment") : 60107, f$2 = b$3 ? Symbol.for("react.strict_mode") : 60108, g$2 = b$3 ? Symbol.for("react.profiler") : 60114, h$2 = b$3 ? Symbol.for("react.provider") : 60109, k$3 = b$3 ? Symbol.for("react.context") : 60110, l$2 = b$3 ? Symbol.for("react.async_mode") : 60111, m$2 = b$3 ? Symbol.for("react.concurrent_mode") : 60111, n$3 = b$3 ? Symbol.for("react.forward_ref") : 60112, p$2 = b$3 ? Symbol.for("react.suspense") : 60113, q$3 = b$3 ? Symbol.for("react.suspense_list") : 60120, r = b$3 ? Symbol.for("react.memo") : 60115, t$2 = b$3 ? Symbol.for("react.lazy") : 60116, v$2 = b$3 ? Symbol.for("react.block") : 60121, w$1 = b$3 ? Symbol.for("react.fundamental") : 60117, x$1 = b$3 ? Symbol.for("react.responder") : 60118, y = b$3 ? Symbol.for("react.scope") : 60119;
function z$1(a2) {
  if (typeof a2 === "object" && a2 !== null) {
    var u2 = a2.$$typeof;
    switch (u2) {
      case c$2:
        switch (a2 = a2.type, a2) {
          case l$2:
          case m$2:
          case e$2:
          case g$2:
          case f$2:
          case p$2:
            return a2;
          default:
            switch (a2 = a2 && a2.$$typeof, a2) {
              case k$3:
              case n$3:
              case t$2:
              case r:
              case h$2:
                return a2;
              default:
                return u2;
            }
        }
      case d$1:
        return u2;
    }
  }
}
function A$1(a2) {
  return z$1(a2) === m$2;
}
reactIs_production_min$1.AsyncMode = l$2;
reactIs_production_min$1.ConcurrentMode = m$2;
reactIs_production_min$1.ContextConsumer = k$3;
reactIs_production_min$1.ContextProvider = h$2;
reactIs_production_min$1.Element = c$2;
reactIs_production_min$1.ForwardRef = n$3;
reactIs_production_min$1.Fragment = e$2;
reactIs_production_min$1.Lazy = t$2;
reactIs_production_min$1.Memo = r;
reactIs_production_min$1.Portal = d$1;
reactIs_production_min$1.Profiler = g$2;
reactIs_production_min$1.StrictMode = f$2;
reactIs_production_min$1.Suspense = p$2;
reactIs_production_min$1.isAsyncMode = function(a2) {
  return A$1(a2) || z$1(a2) === l$2;
};
reactIs_production_min$1.isConcurrentMode = A$1;
reactIs_production_min$1.isContextConsumer = function(a2) {
  return z$1(a2) === k$3;
};
reactIs_production_min$1.isContextProvider = function(a2) {
  return z$1(a2) === h$2;
};
reactIs_production_min$1.isElement = function(a2) {
  return typeof a2 === "object" && a2 !== null && a2.$$typeof === c$2;
};
reactIs_production_min$1.isForwardRef = function(a2) {
  return z$1(a2) === n$3;
};
reactIs_production_min$1.isFragment = function(a2) {
  return z$1(a2) === e$2;
};
reactIs_production_min$1.isLazy = function(a2) {
  return z$1(a2) === t$2;
};
reactIs_production_min$1.isMemo = function(a2) {
  return z$1(a2) === r;
};
reactIs_production_min$1.isPortal = function(a2) {
  return z$1(a2) === d$1;
};
reactIs_production_min$1.isProfiler = function(a2) {
  return z$1(a2) === g$2;
};
reactIs_production_min$1.isStrictMode = function(a2) {
  return z$1(a2) === f$2;
};
reactIs_production_min$1.isSuspense = function(a2) {
  return z$1(a2) === p$2;
};
reactIs_production_min$1.isValidElementType = function(a2) {
  return typeof a2 === "string" || typeof a2 === "function" || a2 === e$2 || a2 === m$2 || a2 === g$2 || a2 === f$2 || a2 === p$2 || a2 === q$3 || typeof a2 === "object" && a2 !== null && (a2.$$typeof === t$2 || a2.$$typeof === r || a2.$$typeof === h$2 || a2.$$typeof === k$3 || a2.$$typeof === n$3 || a2.$$typeof === w$1 || a2.$$typeof === x$1 || a2.$$typeof === y || a2.$$typeof === v$2);
};
reactIs_production_min$1.typeOf = z$1;
{
  reactIs$2.exports = reactIs_production_min$1;
}
function stylis_min(W2) {
  function M2(d2, c2, e2, h2, a2) {
    for (var m2 = 0, b2 = 0, v2 = 0, n2 = 0, q2, g2, x2 = 0, K2 = 0, k2, u2 = k2 = q2 = 0, l2 = 0, r2 = 0, I2 = 0, t2 = 0, B3 = e2.length, J2 = B3 - 1, y2, f2 = "", p2 = "", F3 = "", G3 = "", C2; l2 < B3; ) {
      g2 = e2.charCodeAt(l2);
      l2 === J2 && b2 + n2 + v2 + m2 !== 0 && (b2 !== 0 && (g2 = b2 === 47 ? 10 : 47), n2 = v2 = m2 = 0, B3++, J2++);
      if (b2 + n2 + v2 + m2 === 0) {
        if (l2 === J2 && (0 < r2 && (f2 = f2.replace(N2, "")), 0 < f2.trim().length)) {
          switch (g2) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              f2 += e2.charAt(l2);
          }
          g2 = 59;
        }
        switch (g2) {
          case 123:
            f2 = f2.trim();
            q2 = f2.charCodeAt(0);
            k2 = 1;
            for (t2 = ++l2; l2 < B3; ) {
              switch (g2 = e2.charCodeAt(l2)) {
                case 123:
                  k2++;
                  break;
                case 125:
                  k2--;
                  break;
                case 47:
                  switch (g2 = e2.charCodeAt(l2 + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u2 = l2 + 1; u2 < J2; ++u2) {
                          switch (e2.charCodeAt(u2)) {
                            case 47:
                              if (g2 === 42 && e2.charCodeAt(u2 - 1) === 42 && l2 + 2 !== u2) {
                                l2 = u2 + 1;
                                break a;
                              }
                              break;
                            case 10:
                              if (g2 === 47) {
                                l2 = u2 + 1;
                                break a;
                              }
                          }
                        }
                        l2 = u2;
                      }
                  }
                  break;
                case 91:
                  g2++;
                case 40:
                  g2++;
                case 34:
                case 39:
                  for (; l2++ < J2 && e2.charCodeAt(l2) !== g2; ) {
                  }
              }
              if (k2 === 0)
                break;
              l2++;
            }
            k2 = e2.substring(t2, l2);
            q2 === 0 && (q2 = (f2 = f2.replace(ca2, "").trim()).charCodeAt(0));
            switch (q2) {
              case 64:
                0 < r2 && (f2 = f2.replace(N2, ""));
                g2 = f2.charCodeAt(1);
                switch (g2) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r2 = c2;
                    break;
                  default:
                    r2 = O2;
                }
                k2 = M2(c2, r2, k2, g2, a2 + 1);
                t2 = k2.length;
                0 < A2 && (r2 = X2(O2, f2, I2), C2 = H2(3, k2, r2, c2, D2, z2, t2, g2, a2, h2), f2 = r2.join(""), C2 !== void 0 && (t2 = (k2 = C2.trim()).length) === 0 && (g2 = 0, k2 = ""));
                if (0 < t2)
                  switch (g2) {
                    case 115:
                      f2 = f2.replace(da2, ea2);
                    case 100:
                    case 109:
                    case 45:
                      k2 = f2 + "{" + k2 + "}";
                      break;
                    case 107:
                      f2 = f2.replace(fa2, "$1 $2");
                      k2 = f2 + "{" + k2 + "}";
                      k2 = w2 === 1 || w2 === 2 && L2("@" + k2, 3) ? "@-webkit-" + k2 + "@" + k2 : "@" + k2;
                      break;
                    default:
                      k2 = f2 + k2, h2 === 112 && (k2 = (p2 += k2, ""));
                  }
                else
                  k2 = "";
                break;
              default:
                k2 = M2(c2, X2(c2, f2, I2), k2, h2, a2 + 1);
            }
            F3 += k2;
            k2 = I2 = r2 = u2 = q2 = 0;
            f2 = "";
            g2 = e2.charCodeAt(++l2);
            break;
          case 125:
          case 59:
            f2 = (0 < r2 ? f2.replace(N2, "") : f2).trim();
            if (1 < (t2 = f2.length))
              switch (u2 === 0 && (q2 = f2.charCodeAt(0), q2 === 45 || 96 < q2 && 123 > q2) && (t2 = (f2 = f2.replace(" ", ":")).length), 0 < A2 && (C2 = H2(1, f2, c2, d2, D2, z2, p2.length, h2, a2, h2)) !== void 0 && (t2 = (f2 = C2.trim()).length) === 0 && (f2 = "\0\0"), q2 = f2.charCodeAt(0), g2 = f2.charCodeAt(1), q2) {
                case 0:
                  break;
                case 64:
                  if (g2 === 105 || g2 === 99) {
                    G3 += f2 + e2.charAt(l2);
                    break;
                  }
                default:
                  f2.charCodeAt(t2 - 1) !== 58 && (p2 += P2(f2, q2, g2, f2.charCodeAt(2)));
              }
            I2 = r2 = u2 = q2 = 0;
            f2 = "";
            g2 = e2.charCodeAt(++l2);
        }
      }
      switch (g2) {
        case 13:
        case 10:
          b2 === 47 ? b2 = 0 : 1 + q2 === 0 && h2 !== 107 && 0 < f2.length && (r2 = 1, f2 += "\0");
          0 < A2 * Y2 && H2(0, f2, c2, d2, D2, z2, p2.length, h2, a2, h2);
          z2 = 1;
          D2++;
          break;
        case 59:
        case 125:
          if (b2 + n2 + v2 + m2 === 0) {
            z2++;
            break;
          }
        default:
          z2++;
          y2 = e2.charAt(l2);
          switch (g2) {
            case 9:
            case 32:
              if (n2 + m2 + b2 === 0)
                switch (x2) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    y2 = "";
                    break;
                  default:
                    g2 !== 32 && (y2 = " ");
                }
              break;
            case 0:
              y2 = "\\0";
              break;
            case 12:
              y2 = "\\f";
              break;
            case 11:
              y2 = "\\v";
              break;
            case 38:
              n2 + b2 + m2 === 0 && (r2 = I2 = 1, y2 = "\f" + y2);
              break;
            case 108:
              if (n2 + b2 + m2 + E2 === 0 && 0 < u2)
                switch (l2 - u2) {
                  case 2:
                    x2 === 112 && e2.charCodeAt(l2 - 3) === 58 && (E2 = x2);
                  case 8:
                    K2 === 111 && (E2 = K2);
                }
              break;
            case 58:
              n2 + b2 + m2 === 0 && (u2 = l2);
              break;
            case 44:
              b2 + v2 + n2 + m2 === 0 && (r2 = 1, y2 += "\r");
              break;
            case 34:
            case 39:
              b2 === 0 && (n2 = n2 === g2 ? 0 : n2 === 0 ? g2 : n2);
              break;
            case 91:
              n2 + b2 + v2 === 0 && m2++;
              break;
            case 93:
              n2 + b2 + v2 === 0 && m2--;
              break;
            case 41:
              n2 + b2 + m2 === 0 && v2--;
              break;
            case 40:
              if (n2 + b2 + m2 === 0) {
                if (q2 === 0)
                  switch (2 * x2 + 3 * K2) {
                    case 533:
                      break;
                    default:
                      q2 = 1;
                  }
                v2++;
              }
              break;
            case 64:
              b2 + v2 + n2 + m2 + u2 + k2 === 0 && (k2 = 1);
              break;
            case 42:
            case 47:
              if (!(0 < n2 + m2 + v2))
                switch (b2) {
                  case 0:
                    switch (2 * g2 + 3 * e2.charCodeAt(l2 + 1)) {
                      case 235:
                        b2 = 47;
                        break;
                      case 220:
                        t2 = l2, b2 = 42;
                    }
                    break;
                  case 42:
                    g2 === 47 && x2 === 42 && t2 + 2 !== l2 && (e2.charCodeAt(t2 + 2) === 33 && (p2 += e2.substring(t2, l2 + 1)), y2 = "", b2 = 0);
                }
          }
          b2 === 0 && (f2 += y2);
      }
      K2 = x2;
      x2 = g2;
      l2++;
    }
    t2 = p2.length;
    if (0 < t2) {
      r2 = c2;
      if (0 < A2 && (C2 = H2(2, p2, r2, d2, D2, z2, t2, h2, a2, h2), C2 !== void 0 && (p2 = C2).length === 0))
        return G3 + p2 + F3;
      p2 = r2.join(",") + "{" + p2 + "}";
      if (w2 * E2 !== 0) {
        w2 !== 2 || L2(p2, 2) || (E2 = 0);
        switch (E2) {
          case 111:
            p2 = p2.replace(ha2, ":-moz-$1") + p2;
            break;
          case 112:
            p2 = p2.replace(Q2, "::-webkit-input-$1") + p2.replace(Q2, "::-moz-$1") + p2.replace(Q2, ":-ms-input-$1") + p2;
        }
        E2 = 0;
      }
    }
    return G3 + p2 + F3;
  }
  function X2(d2, c2, e2) {
    var h2 = c2.trim().split(ia2);
    c2 = h2;
    var a2 = h2.length, m2 = d2.length;
    switch (m2) {
      case 0:
      case 1:
        var b2 = 0;
        for (d2 = m2 === 0 ? "" : d2[0] + " "; b2 < a2; ++b2) {
          c2[b2] = Z2(d2, c2[b2], e2).trim();
        }
        break;
      default:
        var v2 = b2 = 0;
        for (c2 = []; b2 < a2; ++b2) {
          for (var n2 = 0; n2 < m2; ++n2) {
            c2[v2++] = Z2(d2[n2] + " ", h2[b2], e2).trim();
          }
        }
    }
    return c2;
  }
  function Z2(d2, c2, e2) {
    var h2 = c2.charCodeAt(0);
    33 > h2 && (h2 = (c2 = c2.trim()).charCodeAt(0));
    switch (h2) {
      case 38:
        return c2.replace(F2, "$1" + d2.trim());
      case 58:
        return d2.trim() + c2.replace(F2, "$1" + d2.trim());
      default:
        if (0 < 1 * e2 && 0 < c2.indexOf("\f"))
          return c2.replace(F2, (d2.charCodeAt(0) === 58 ? "" : "$1") + d2.trim());
    }
    return d2 + c2;
  }
  function P2(d2, c2, e2, h2) {
    var a2 = d2 + ";", m2 = 2 * c2 + 3 * e2 + 4 * h2;
    if (m2 === 944) {
      d2 = a2.indexOf(":", 9) + 1;
      var b2 = a2.substring(d2, a2.length - 1).trim();
      b2 = a2.substring(0, d2).trim() + b2 + ";";
      return w2 === 1 || w2 === 2 && L2(b2, 1) ? "-webkit-" + b2 + b2 : b2;
    }
    if (w2 === 0 || w2 === 2 && !L2(a2, 1))
      return a2;
    switch (m2) {
      case 1015:
        return a2.charCodeAt(10) === 97 ? "-webkit-" + a2 + a2 : a2;
      case 951:
        return a2.charCodeAt(3) === 116 ? "-webkit-" + a2 + a2 : a2;
      case 963:
        return a2.charCodeAt(5) === 110 ? "-webkit-" + a2 + a2 : a2;
      case 1009:
        if (a2.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + a2 + a2;
      case 978:
        return "-webkit-" + a2 + "-moz-" + a2 + a2;
      case 1019:
      case 983:
        return "-webkit-" + a2 + "-moz-" + a2 + "-ms-" + a2 + a2;
      case 883:
        if (a2.charCodeAt(8) === 45)
          return "-webkit-" + a2 + a2;
        if (0 < a2.indexOf("image-set(", 11))
          return a2.replace(ja2, "$1-webkit-$2") + a2;
        break;
      case 932:
        if (a2.charCodeAt(4) === 45)
          switch (a2.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + a2.replace("-grow", "") + "-webkit-" + a2 + "-ms-" + a2.replace("grow", "positive") + a2;
            case 115:
              return "-webkit-" + a2 + "-ms-" + a2.replace("shrink", "negative") + a2;
            case 98:
              return "-webkit-" + a2 + "-ms-" + a2.replace("basis", "preferred-size") + a2;
          }
        return "-webkit-" + a2 + "-ms-" + a2 + a2;
      case 964:
        return "-webkit-" + a2 + "-ms-flex-" + a2 + a2;
      case 1023:
        if (a2.charCodeAt(8) !== 99)
          break;
        b2 = a2.substring(a2.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify");
        return "-webkit-box-pack" + b2 + "-webkit-" + a2 + "-ms-flex-pack" + b2 + a2;
      case 1005:
        return ka2.test(a2) ? a2.replace(aa2, ":-webkit-") + a2.replace(aa2, ":-moz-") + a2 : a2;
      case 1e3:
        b2 = a2.substring(13).trim();
        c2 = b2.indexOf("-") + 1;
        switch (b2.charCodeAt(0) + b2.charCodeAt(c2)) {
          case 226:
            b2 = a2.replace(G2, "tb");
            break;
          case 232:
            b2 = a2.replace(G2, "tb-rl");
            break;
          case 220:
            b2 = a2.replace(G2, "lr");
            break;
          default:
            return a2;
        }
        return "-webkit-" + a2 + "-ms-" + b2 + a2;
      case 1017:
        if (a2.indexOf("sticky", 9) === -1)
          break;
      case 975:
        c2 = (a2 = d2).length - 10;
        b2 = (a2.charCodeAt(c2) === 33 ? a2.substring(0, c2) : a2).substring(d2.indexOf(":", 7) + 1).trim();
        switch (m2 = b2.charCodeAt(0) + (b2.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b2.charCodeAt(8))
              break;
          case 115:
            a2 = a2.replace(b2, "-webkit-" + b2) + ";" + a2;
            break;
          case 207:
          case 102:
            a2 = a2.replace(b2, "-webkit-" + (102 < m2 ? "inline-" : "") + "box") + ";" + a2.replace(b2, "-webkit-" + b2) + ";" + a2.replace(b2, "-ms-" + b2 + "box") + ";" + a2;
        }
        return a2 + ";";
      case 938:
        if (a2.charCodeAt(5) === 45)
          switch (a2.charCodeAt(6)) {
            case 105:
              return b2 = a2.replace("-items", ""), "-webkit-" + a2 + "-webkit-box-" + b2 + "-ms-flex-" + b2 + a2;
            case 115:
              return "-webkit-" + a2 + "-ms-flex-item-" + a2.replace(ba2, "") + a2;
            default:
              return "-webkit-" + a2 + "-ms-flex-line-pack" + a2.replace("align-content", "").replace(ba2, "") + a2;
          }
        break;
      case 973:
      case 989:
        if (a2.charCodeAt(3) !== 45 || a2.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (la2.test(d2) === true)
          return (b2 = d2.substring(d2.indexOf(":") + 1)).charCodeAt(0) === 115 ? P2(d2.replace("stretch", "fill-available"), c2, e2, h2).replace(":fill-available", ":stretch") : a2.replace(b2, "-webkit-" + b2) + a2.replace(b2, "-moz-" + b2.replace("fill-", "")) + a2;
        break;
      case 962:
        if (a2 = "-webkit-" + a2 + (a2.charCodeAt(5) === 102 ? "-ms-" + a2 : "") + a2, e2 + h2 === 211 && a2.charCodeAt(13) === 105 && 0 < a2.indexOf("transform", 10))
          return a2.substring(0, a2.indexOf(";", 27) + 1).replace(ma2, "$1-webkit-$2") + a2;
    }
    return a2;
  }
  function L2(d2, c2) {
    var e2 = d2.indexOf(c2 === 1 ? ":" : "{"), h2 = d2.substring(0, c2 !== 3 ? e2 : 10);
    e2 = d2.substring(e2 + 1, d2.length - 1);
    return R2(c2 !== 2 ? h2 : h2.replace(na2, "$1"), e2, c2);
  }
  function ea2(d2, c2) {
    var e2 = P2(c2, c2.charCodeAt(0), c2.charCodeAt(1), c2.charCodeAt(2));
    return e2 !== c2 + ";" ? e2.replace(oa2, " or ($1)").substring(4) : "(" + c2 + ")";
  }
  function H2(d2, c2, e2, h2, a2, m2, b2, v2, n2, q2) {
    for (var g2 = 0, x2 = c2, w3; g2 < A2; ++g2) {
      switch (w3 = S2[g2].call(B2, d2, x2, e2, h2, a2, m2, b2, v2, n2, q2)) {
        case void 0:
        case false:
        case true:
        case null:
          break;
        default:
          x2 = w3;
      }
    }
    if (x2 !== c2)
      return x2;
  }
  function T2(d2) {
    switch (d2) {
      case void 0:
      case null:
        A2 = S2.length = 0;
        break;
      default:
        if (typeof d2 === "function")
          S2[A2++] = d2;
        else if (typeof d2 === "object")
          for (var c2 = 0, e2 = d2.length; c2 < e2; ++c2) {
            T2(d2[c2]);
          }
        else
          Y2 = !!d2 | 0;
    }
    return T2;
  }
  function U2(d2) {
    d2 = d2.prefix;
    d2 !== void 0 && (R2 = null, d2 ? typeof d2 !== "function" ? w2 = 1 : (w2 = 2, R2 = d2) : w2 = 0);
    return U2;
  }
  function B2(d2, c2) {
    var e2 = d2;
    33 > e2.charCodeAt(0) && (e2 = e2.trim());
    V2 = e2;
    e2 = [V2];
    if (0 < A2) {
      var h2 = H2(-1, c2, e2, e2, D2, z2, 0, 0, 0, 0);
      h2 !== void 0 && typeof h2 === "string" && (c2 = h2);
    }
    var a2 = M2(O2, e2, c2, 0, 0);
    0 < A2 && (h2 = H2(-2, a2, e2, e2, D2, z2, a2.length, 0, 0, 0), h2 !== void 0 && (a2 = h2));
    V2 = "";
    E2 = 0;
    z2 = D2 = 1;
    return a2;
  }
  var ca2 = /^\0+/g, N2 = /[\0\r\f]/g, aa2 = /: */g, ka2 = /zoo|gra/, ma2 = /([,: ])(transform)/g, ia2 = /,\r+?/g, F2 = /([\t\r\n ])*\f?&/g, fa2 = /@(k\w+)\s*(\S*)\s*/, Q2 = /::(place)/g, ha2 = /:(read-only)/g, G2 = /[svh]\w+-[tblr]{2}/, da2 = /\(\s*(.*)\s*\)/g, oa2 = /([\s\S]*?);/g, ba2 = /-self|flex-/g, na2 = /[^]*?(:[rp][el]a[\w-]+)[^]*/, la2 = /stretch|:\s*\w+\-(?:conte|avail)/, ja2 = /([^-])(image-set\()/, z2 = 1, D2 = 1, E2 = 0, w2 = 1, O2 = [], S2 = [], A2 = 0, R2 = null, Y2 = 0, V2 = "";
  B2.use = T2;
  B2.set = U2;
  W2 !== void 0 && U2(W2);
  return B2;
}
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function memoize(fn) {
  var cache = /* @__PURE__ */ Object.create(null);
  return function(arg) {
    if (cache[arg] === void 0)
      cache[arg] = fn(arg);
    return cache[arg];
  };
}
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
var isPropValid = /* @__PURE__ */ memoize(function(prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
});
var reactIs$1 = reactIs$2.exports;
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  "$$typeof": true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  "$$typeof": true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs$1.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs$1.Memo] = MEMO_STATICS;
function getStatics(component) {
  if (reactIs$1.isMemo(component)) {
    return MEMO_STATICS;
  }
  return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
}
var defineProperty$1 = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== "string") {
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);
      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }
    var keys2 = getOwnPropertyNames(sourceComponent);
    if (getOwnPropertySymbols) {
      keys2 = keys2.concat(getOwnPropertySymbols(sourceComponent));
    }
    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);
    for (var i2 = 0; i2 < keys2.length; ++i2) {
      var key = keys2[i2];
      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
        try {
          defineProperty$1(targetComponent, key, descriptor);
        } catch (e2) {
        }
      }
    }
  }
  return targetComponent;
}
var hoistNonReactStatics_cjs = hoistNonReactStatics;
function v$1() {
  return (v$1 = Object.assign || function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var r2 in n2)
        Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
    }
    return e2;
  }).apply(this, arguments);
}
var g$1 = function(e2, t2) {
  for (var n2 = [e2[0]], r2 = 0, o2 = t2.length; r2 < o2; r2 += 1)
    n2.push(t2[r2], e2[r2 + 1]);
  return n2;
}, S$1 = function(t2) {
  return t2 !== null && typeof t2 == "object" && (t2.toString ? t2.toString() : Object.prototype.toString.call(t2)) === "[object Object]" && !reactIs$2.exports.typeOf(t2);
}, w = Object.freeze([]), E = Object.freeze({});
function b$2(e2) {
  return typeof e2 == "function";
}
function _(e2) {
  return e2.displayName || e2.name || "Component";
}
function N(e2) {
  return e2 && typeof e2.styledComponentId == "string";
}
var A = typeof process != "undefined" && ({}.REACT_APP_SC_ATTR || {}.SC_ATTR) || "data-styled", I = typeof window != "undefined" && "HTMLElement" in window, P = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process != "undefined" && {}.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && {}.REACT_APP_SC_DISABLE_SPEEDY !== "" ? {}.REACT_APP_SC_DISABLE_SPEEDY !== "false" && {}.REACT_APP_SC_DISABLE_SPEEDY : typeof process != "undefined" && {}.SC_DISABLE_SPEEDY !== void 0 && {}.SC_DISABLE_SPEEDY !== "" ? {}.SC_DISABLE_SPEEDY !== "false" && {}.SC_DISABLE_SPEEDY : false), O = {};
function j(e2) {
  for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), r2 = 1; r2 < t2; r2++)
    n2[r2 - 1] = arguments[r2];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e2 + " for more information." + (n2.length > 0 ? " Args: " + n2.join(", ") : ""));
}
var T = function() {
  function e2(e3) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e3;
  }
  var t2 = e2.prototype;
  return t2.indexOfGroup = function(e3) {
    for (var t3 = 0, n2 = 0; n2 < e3; n2++)
      t3 += this.groupSizes[n2];
    return t3;
  }, t2.insertRules = function(e3, t3) {
    if (e3 >= this.groupSizes.length) {
      for (var n2 = this.groupSizes, r2 = n2.length, o2 = r2; e3 >= o2; )
        (o2 <<= 1) < 0 && j(16, "" + e3);
      this.groupSizes = new Uint32Array(o2), this.groupSizes.set(n2), this.length = o2;
      for (var s2 = r2; s2 < o2; s2++)
        this.groupSizes[s2] = 0;
    }
    for (var i2 = this.indexOfGroup(e3 + 1), a2 = 0, c2 = t3.length; a2 < c2; a2++)
      this.tag.insertRule(i2, t3[a2]) && (this.groupSizes[e3]++, i2++);
  }, t2.clearGroup = function(e3) {
    if (e3 < this.length) {
      var t3 = this.groupSizes[e3], n2 = this.indexOfGroup(e3), r2 = n2 + t3;
      this.groupSizes[e3] = 0;
      for (var o2 = n2; o2 < r2; o2++)
        this.tag.deleteRule(n2);
    }
  }, t2.getGroup = function(e3) {
    var t3 = "";
    if (e3 >= this.length || this.groupSizes[e3] === 0)
      return t3;
    for (var n2 = this.groupSizes[e3], r2 = this.indexOfGroup(e3), o2 = r2 + n2, s2 = r2; s2 < o2; s2++)
      t3 += this.tag.getRule(s2) + "/*!sc*/\n";
    return t3;
  }, e2;
}(), x = /* @__PURE__ */ new Map(), k$2 = /* @__PURE__ */ new Map(), V = 1, B = function(e2) {
  if (x.has(e2))
    return x.get(e2);
  for (; k$2.has(V); )
    V++;
  var t2 = V++;
  return x.set(e2, t2), k$2.set(t2, e2), t2;
}, z = function(e2) {
  return k$2.get(e2);
}, M = function(e2, t2) {
  t2 >= V && (V = t2 + 1), x.set(e2, t2), k$2.set(t2, e2);
}, G = "style[" + A + '][data-styled-version="5.3.5"]', L = new RegExp("^" + A + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), F = function(e2, t2, n2) {
  for (var r2, o2 = n2.split(","), s2 = 0, i2 = o2.length; s2 < i2; s2++)
    (r2 = o2[s2]) && e2.registerName(t2, r2);
}, Y = function(e2, t2) {
  for (var n2 = (t2.textContent || "").split("/*!sc*/\n"), r2 = [], o2 = 0, s2 = n2.length; o2 < s2; o2++) {
    var i2 = n2[o2].trim();
    if (i2) {
      var a2 = i2.match(L);
      if (a2) {
        var c2 = 0 | parseInt(a2[1], 10), u2 = a2[2];
        c2 !== 0 && (M(u2, c2), F(e2, u2, a2[3]), e2.getTag().insertRules(c2, r2)), r2.length = 0;
      } else
        r2.push(i2);
    }
  }
}, q$2 = function() {
  return typeof window != "undefined" && window.__webpack_nonce__ !== void 0 ? window.__webpack_nonce__ : null;
}, H = function(e2) {
  var t2 = document.head, n2 = e2 || t2, r2 = document.createElement("style"), o2 = function(e3) {
    for (var t3 = e3.childNodes, n3 = t3.length; n3 >= 0; n3--) {
      var r3 = t3[n3];
      if (r3 && r3.nodeType === 1 && r3.hasAttribute(A))
        return r3;
    }
  }(n2), s2 = o2 !== void 0 ? o2.nextSibling : null;
  r2.setAttribute(A, "active"), r2.setAttribute("data-styled-version", "5.3.5");
  var i2 = q$2();
  return i2 && r2.setAttribute("nonce", i2), n2.insertBefore(r2, s2), r2;
}, $ = function() {
  function e2(e3) {
    var t3 = this.element = H(e3);
    t3.appendChild(document.createTextNode("")), this.sheet = function(e4) {
      if (e4.sheet)
        return e4.sheet;
      for (var t4 = document.styleSheets, n2 = 0, r2 = t4.length; n2 < r2; n2++) {
        var o2 = t4[n2];
        if (o2.ownerNode === e4)
          return o2;
      }
      j(17);
    }(t3), this.length = 0;
  }
  var t2 = e2.prototype;
  return t2.insertRule = function(e3, t3) {
    try {
      return this.sheet.insertRule(t3, e3), this.length++, true;
    } catch (e4) {
      return false;
    }
  }, t2.deleteRule = function(e3) {
    this.sheet.deleteRule(e3), this.length--;
  }, t2.getRule = function(e3) {
    var t3 = this.sheet.cssRules[e3];
    return t3 !== void 0 && typeof t3.cssText == "string" ? t3.cssText : "";
  }, e2;
}(), W = function() {
  function e2(e3) {
    var t3 = this.element = H(e3);
    this.nodes = t3.childNodes, this.length = 0;
  }
  var t2 = e2.prototype;
  return t2.insertRule = function(e3, t3) {
    if (e3 <= this.length && e3 >= 0) {
      var n2 = document.createTextNode(t3), r2 = this.nodes[e3];
      return this.element.insertBefore(n2, r2 || null), this.length++, true;
    }
    return false;
  }, t2.deleteRule = function(e3) {
    this.element.removeChild(this.nodes[e3]), this.length--;
  }, t2.getRule = function(e3) {
    return e3 < this.length ? this.nodes[e3].textContent : "";
  }, e2;
}(), U = function() {
  function e2(e3) {
    this.rules = [], this.length = 0;
  }
  var t2 = e2.prototype;
  return t2.insertRule = function(e3, t3) {
    return e3 <= this.length && (this.rules.splice(e3, 0, t3), this.length++, true);
  }, t2.deleteRule = function(e3) {
    this.rules.splice(e3, 1), this.length--;
  }, t2.getRule = function(e3) {
    return e3 < this.length ? this.rules[e3] : "";
  }, e2;
}(), J = I, X = { isServer: !I, useCSSOMInjection: !P }, Z = function() {
  function e2(e3, t3, n2) {
    e3 === void 0 && (e3 = E), t3 === void 0 && (t3 = {}), this.options = v$1({}, X, {}, e3), this.gs = t3, this.names = new Map(n2), this.server = !!e3.isServer, !this.server && I && J && (J = false, function(e4) {
      for (var t4 = document.querySelectorAll(G), n3 = 0, r2 = t4.length; n3 < r2; n3++) {
        var o2 = t4[n3];
        o2 && o2.getAttribute(A) !== "active" && (Y(e4, o2), o2.parentNode && o2.parentNode.removeChild(o2));
      }
    }(this));
  }
  e2.registerId = function(e3) {
    return B(e3);
  };
  var t2 = e2.prototype;
  return t2.reconstructWithOptions = function(t3, n2) {
    return n2 === void 0 && (n2 = true), new e2(v$1({}, this.options, {}, t3), this.gs, n2 && this.names || void 0);
  }, t2.allocateGSInstance = function(e3) {
    return this.gs[e3] = (this.gs[e3] || 0) + 1;
  }, t2.getTag = function() {
    return this.tag || (this.tag = (n2 = (t3 = this.options).isServer, r2 = t3.useCSSOMInjection, o2 = t3.target, e3 = n2 ? new U(o2) : r2 ? new $(o2) : new W(o2), new T(e3)));
    var e3, t3, n2, r2, o2;
  }, t2.hasNameForId = function(e3, t3) {
    return this.names.has(e3) && this.names.get(e3).has(t3);
  }, t2.registerName = function(e3, t3) {
    if (B(e3), this.names.has(e3))
      this.names.get(e3).add(t3);
    else {
      var n2 = /* @__PURE__ */ new Set();
      n2.add(t3), this.names.set(e3, n2);
    }
  }, t2.insertRules = function(e3, t3, n2) {
    this.registerName(e3, t3), this.getTag().insertRules(B(e3), n2);
  }, t2.clearNames = function(e3) {
    this.names.has(e3) && this.names.get(e3).clear();
  }, t2.clearRules = function(e3) {
    this.getTag().clearGroup(B(e3)), this.clearNames(e3);
  }, t2.clearTag = function() {
    this.tag = void 0;
  }, t2.toString = function() {
    return function(e3) {
      for (var t3 = e3.getTag(), n2 = t3.length, r2 = "", o2 = 0; o2 < n2; o2++) {
        var s2 = z(o2);
        if (s2 !== void 0) {
          var i2 = e3.names.get(s2), a2 = t3.getGroup(o2);
          if (i2 && a2 && i2.size) {
            var c2 = A + ".g" + o2 + '[id="' + s2 + '"]', u2 = "";
            i2 !== void 0 && i2.forEach(function(e4) {
              e4.length > 0 && (u2 += e4 + ",");
            }), r2 += "" + a2 + c2 + '{content:"' + u2 + '"}/*!sc*/\n';
          }
        }
      }
      return r2;
    }(this);
  }, e2;
}(), K = /(a)(d)/gi, Q = function(e2) {
  return String.fromCharCode(e2 + (e2 > 25 ? 39 : 97));
};
function ee(e2) {
  var t2, n2 = "";
  for (t2 = Math.abs(e2); t2 > 52; t2 = t2 / 52 | 0)
    n2 = Q(t2 % 52) + n2;
  return (Q(t2 % 52) + n2).replace(K, "$1-$2");
}
var te = function(e2, t2) {
  for (var n2 = t2.length; n2; )
    e2 = 33 * e2 ^ t2.charCodeAt(--n2);
  return e2;
}, ne = function(e2) {
  return te(5381, e2);
};
function re(e2) {
  for (var t2 = 0; t2 < e2.length; t2 += 1) {
    var n2 = e2[t2];
    if (b$2(n2) && !N(n2))
      return false;
  }
  return true;
}
var oe = ne("5.3.5"), se = function() {
  function e2(e3, t2, n2) {
    this.rules = e3, this.staticRulesId = "", this.isStatic = (n2 === void 0 || n2.isStatic) && re(e3), this.componentId = t2, this.baseHash = te(oe, t2), this.baseStyle = n2, Z.registerId(t2);
  }
  return e2.prototype.generateAndInjectStyles = function(e3, t2, n2) {
    var r2 = this.componentId, o2 = [];
    if (this.baseStyle && o2.push(this.baseStyle.generateAndInjectStyles(e3, t2, n2)), this.isStatic && !n2.hash)
      if (this.staticRulesId && t2.hasNameForId(r2, this.staticRulesId))
        o2.push(this.staticRulesId);
      else {
        var s2 = Ne(this.rules, e3, t2, n2).join(""), i2 = ee(te(this.baseHash, s2) >>> 0);
        if (!t2.hasNameForId(r2, i2)) {
          var a2 = n2(s2, "." + i2, void 0, r2);
          t2.insertRules(r2, i2, a2);
        }
        o2.push(i2), this.staticRulesId = i2;
      }
    else {
      for (var c2 = this.rules.length, u2 = te(this.baseHash, n2.hash), l2 = "", d2 = 0; d2 < c2; d2++) {
        var h2 = this.rules[d2];
        if (typeof h2 == "string")
          l2 += h2;
        else if (h2) {
          var p2 = Ne(h2, e3, t2, n2), f2 = Array.isArray(p2) ? p2.join("") : p2;
          u2 = te(u2, f2 + d2), l2 += f2;
        }
      }
      if (l2) {
        var m2 = ee(u2 >>> 0);
        if (!t2.hasNameForId(r2, m2)) {
          var y2 = n2(l2, "." + m2, void 0, r2);
          t2.insertRules(r2, m2, y2);
        }
        o2.push(m2);
      }
    }
    return o2.join(" ");
  }, e2;
}(), ie = /^\s*\/\/.*$/gm, ae = [":", "[", ".", "#"];
function ce(e2) {
  var t2, n2, r2, o2, s2 = e2 === void 0 ? E : e2, i2 = s2.options, a2 = i2 === void 0 ? E : i2, c2 = s2.plugins, u2 = c2 === void 0 ? w : c2, l2 = new stylis_min(a2), d2 = [], h2 = function(e3) {
    function t3(t4) {
      if (t4)
        try {
          e3(t4 + "}");
        } catch (e4) {
        }
    }
    return function(n3, r3, o3, s3, i3, a3, c3, u3, l3, d3) {
      switch (n3) {
        case 1:
          if (l3 === 0 && r3.charCodeAt(0) === 64)
            return e3(r3 + ";"), "";
          break;
        case 2:
          if (u3 === 0)
            return r3 + "/*|*/";
          break;
        case 3:
          switch (u3) {
            case 102:
            case 112:
              return e3(o3[0] + r3), "";
            default:
              return r3 + (d3 === 0 ? "/*|*/" : "");
          }
        case -2:
          r3.split("/*|*/}").forEach(t3);
      }
    };
  }(function(e3) {
    d2.push(e3);
  }), f2 = function(e3, r3, s3) {
    return r3 === 0 && ae.indexOf(s3[n2.length]) !== -1 || s3.match(o2) ? e3 : "." + t2;
  };
  function m2(e3, s3, i3, a3) {
    a3 === void 0 && (a3 = "&");
    var c3 = e3.replace(ie, ""), u3 = s3 && i3 ? i3 + " " + s3 + " { " + c3 + " }" : c3;
    return t2 = a3, n2 = s3, r2 = new RegExp("\\" + n2 + "\\b", "g"), o2 = new RegExp("(\\" + n2 + "\\b){2,}"), l2(i3 || !s3 ? "" : s3, u3);
  }
  return l2.use([].concat(u2, [function(e3, t3, o3) {
    e3 === 2 && o3.length && o3[0].lastIndexOf(n2) > 0 && (o3[0] = o3[0].replace(r2, f2));
  }, h2, function(e3) {
    if (e3 === -2) {
      var t3 = d2;
      return d2 = [], t3;
    }
  }])), m2.hash = u2.length ? u2.reduce(function(e3, t3) {
    return t3.name || j(15), te(e3, t3.name);
  }, 5381).toString() : "", m2;
}
var ue = React.createContext();
ue.Consumer;
var de = React.createContext(), he = (de.Consumer, new Z()), pe = ce();
function fe() {
  return react.exports.useContext(ue) || he;
}
function me() {
  return react.exports.useContext(de) || pe;
}
var ve = function() {
  function e2(e3, t2) {
    var n2 = this;
    this.inject = function(e4, t3) {
      t3 === void 0 && (t3 = pe);
      var r2 = n2.name + t3.hash;
      e4.hasNameForId(n2.id, r2) || e4.insertRules(n2.id, r2, t3(n2.rules, r2, "@keyframes"));
    }, this.toString = function() {
      return j(12, String(n2.name));
    }, this.name = e3, this.id = "sc-keyframes-" + e3, this.rules = t2;
  }
  return e2.prototype.getName = function(e3) {
    return e3 === void 0 && (e3 = pe), this.name + e3.hash;
  }, e2;
}(), ge = /([A-Z])/, Se = /([A-Z])/g, we = /^ms-/, Ee = function(e2) {
  return "-" + e2.toLowerCase();
};
function be(e2) {
  return ge.test(e2) ? e2.replace(Se, Ee).replace(we, "-ms-") : e2;
}
var _e = function(e2) {
  return e2 == null || e2 === false || e2 === "";
};
function Ne(e2, n2, r2, o2) {
  if (Array.isArray(e2)) {
    for (var s2, i2 = [], a2 = 0, c2 = e2.length; a2 < c2; a2 += 1)
      (s2 = Ne(e2[a2], n2, r2, o2)) !== "" && (Array.isArray(s2) ? i2.push.apply(i2, s2) : i2.push(s2));
    return i2;
  }
  if (_e(e2))
    return "";
  if (N(e2))
    return "." + e2.styledComponentId;
  if (b$2(e2)) {
    if (typeof (l2 = e2) != "function" || l2.prototype && l2.prototype.isReactComponent || !n2)
      return e2;
    var u2 = e2(n2);
    return Ne(u2, n2, r2, o2);
  }
  var l2;
  return e2 instanceof ve ? r2 ? (e2.inject(r2, o2), e2.getName(o2)) : e2 : S$1(e2) ? function e3(t2, n3) {
    var r3, o3, s3 = [];
    for (var i3 in t2)
      t2.hasOwnProperty(i3) && !_e(t2[i3]) && (Array.isArray(t2[i3]) && t2[i3].isCss || b$2(t2[i3]) ? s3.push(be(i3) + ":", t2[i3], ";") : S$1(t2[i3]) ? s3.push.apply(s3, e3(t2[i3], i3)) : s3.push(be(i3) + ": " + (r3 = i3, (o3 = t2[i3]) == null || typeof o3 == "boolean" || o3 === "" ? "" : typeof o3 != "number" || o3 === 0 || r3 in unitlessKeys ? String(o3).trim() : o3 + "px") + ";"));
    return n3 ? [n3 + " {"].concat(s3, ["}"]) : s3;
  }(e2) : e2.toString();
}
var Ae = function(e2) {
  return Array.isArray(e2) && (e2.isCss = true), e2;
};
function Ce(e2) {
  for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), r2 = 1; r2 < t2; r2++)
    n2[r2 - 1] = arguments[r2];
  return b$2(e2) || S$1(e2) ? Ae(Ne(g$1(w, [e2].concat(n2)))) : n2.length === 0 && e2.length === 1 && typeof e2[0] == "string" ? e2 : Ae(Ne(g$1(e2, n2)));
}
var Re = function(e2, t2, n2) {
  return n2 === void 0 && (n2 = E), e2.theme !== n2.theme && e2.theme || t2 || n2.theme;
}, De = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, je = /(^-|-$)/g;
function Te(e2) {
  return e2.replace(De, "-").replace(je, "");
}
var xe = function(e2) {
  return ee(ne(e2) >>> 0);
};
function ke(e2) {
  return typeof e2 == "string" && true;
}
var Ve = function(e2) {
  return typeof e2 == "function" || typeof e2 == "object" && e2 !== null && !Array.isArray(e2);
}, Be = function(e2) {
  return e2 !== "__proto__" && e2 !== "constructor" && e2 !== "prototype";
};
function ze(e2, t2, n2) {
  var r2 = e2[n2];
  Ve(t2) && Ve(r2) ? Me(r2, t2) : e2[n2] = t2;
}
function Me(e2) {
  for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), r2 = 1; r2 < t2; r2++)
    n2[r2 - 1] = arguments[r2];
  for (var o2 = 0, s2 = n2; o2 < s2.length; o2++) {
    var i2 = s2[o2];
    if (Ve(i2))
      for (var a2 in i2)
        Be(a2) && ze(e2, i2[a2], a2);
  }
  return e2;
}
var Ge = React.createContext();
Ge.Consumer;
function Fe(e2) {
  var t2 = react.exports.useContext(Ge), n2 = react.exports.useMemo(function() {
    return function(e3, t3) {
      if (!e3)
        return j(14);
      if (b$2(e3)) {
        var n3 = e3(t3);
        return n3;
      }
      return Array.isArray(e3) || typeof e3 != "object" ? j(8) : t3 ? v$1({}, t3, {}, e3) : e3;
    }(e2.theme, t2);
  }, [e2.theme, t2]);
  return e2.children ? React.createElement(Ge.Provider, { value: n2 }, e2.children) : null;
}
var Ye = {};
function qe(e2, t2, n2) {
  var o2 = N(e2), i2 = !ke(e2), a2 = t2.attrs, c2 = a2 === void 0 ? w : a2, d2 = t2.componentId, h2 = d2 === void 0 ? function(e3, t3) {
    var n3 = typeof e3 != "string" ? "sc" : Te(e3);
    Ye[n3] = (Ye[n3] || 0) + 1;
    var r2 = n3 + "-" + xe("5.3.5" + n3 + Ye[n3]);
    return t3 ? t3 + "-" + r2 : r2;
  }(t2.displayName, t2.parentComponentId) : d2, p2 = t2.displayName, f2 = p2 === void 0 ? function(e3) {
    return ke(e3) ? "styled." + e3 : "Styled(" + _(e3) + ")";
  }(e2) : p2, g2 = t2.displayName && t2.componentId ? Te(t2.displayName) + "-" + t2.componentId : t2.componentId || h2, S2 = o2 && e2.attrs ? Array.prototype.concat(e2.attrs, c2).filter(Boolean) : c2, A2 = t2.shouldForwardProp;
  o2 && e2.shouldForwardProp && (A2 = t2.shouldForwardProp ? function(n3, r2, o3) {
    return e2.shouldForwardProp(n3, r2, o3) && t2.shouldForwardProp(n3, r2, o3);
  } : e2.shouldForwardProp);
  var C2, I2 = new se(n2, g2, o2 ? e2.componentStyle : void 0), P2 = I2.isStatic && c2.length === 0, O2 = function(e3, t3) {
    return function(e4, t4, n3, r2) {
      var o3 = e4.attrs, i3 = e4.componentStyle, a3 = e4.defaultProps, c3 = e4.foldedComponentIds, d3 = e4.shouldForwardProp, h3 = e4.styledComponentId, p3 = e4.target;
      var f3 = function(e5, t5, n4) {
        e5 === void 0 && (e5 = E);
        var r3 = v$1({}, t5, { theme: e5 }), o4 = {};
        return n4.forEach(function(e6) {
          var t6, n5, s2, i4 = e6;
          for (t6 in b$2(i4) && (i4 = i4(r3)), i4)
            r3[t6] = o4[t6] = t6 === "className" ? (n5 = o4[t6], s2 = i4[t6], n5 && s2 ? n5 + " " + s2 : n5 || s2) : i4[t6];
        }), [r3, o4];
      }(Re(t4, react.exports.useContext(Ge), a3) || E, t4, o3), y2 = f3[0], g3 = f3[1], S3 = function(e5, t5, n4, r3) {
        var o4 = fe(), s2 = me(), i4 = t5 ? e5.generateAndInjectStyles(E, o4, s2) : e5.generateAndInjectStyles(n4, o4, s2);
        return i4;
      }(i3, r2, y2), w2 = n3, _2 = g3.$as || t4.$as || g3.as || t4.as || p3, N2 = ke(_2), A3 = g3 !== t4 ? v$1({}, t4, {}, g3) : t4, C3 = {};
      for (var I3 in A3)
        I3[0] !== "$" && I3 !== "as" && (I3 === "forwardedAs" ? C3.as = A3[I3] : (d3 ? d3(I3, isPropValid, _2) : !N2 || isPropValid(I3)) && (C3[I3] = A3[I3]));
      return t4.style && g3.style !== t4.style && (C3.style = v$1({}, t4.style, {}, g3.style)), C3.className = Array.prototype.concat(c3, h3, S3 !== h3 ? S3 : null, t4.className, g3.className).filter(Boolean).join(" "), C3.ref = w2, react.exports.createElement(_2, C3);
    }(C2, e3, t3, P2);
  };
  return O2.displayName = f2, (C2 = React.forwardRef(O2)).attrs = S2, C2.componentStyle = I2, C2.displayName = f2, C2.shouldForwardProp = A2, C2.foldedComponentIds = o2 ? Array.prototype.concat(e2.foldedComponentIds, e2.styledComponentId) : w, C2.styledComponentId = g2, C2.target = o2 ? e2.target : e2, C2.withComponent = function(e3) {
    var r2 = t2.componentId, o3 = function(e4, t3) {
      if (e4 == null)
        return {};
      var n3, r3, o4 = {}, s3 = Object.keys(e4);
      for (r3 = 0; r3 < s3.length; r3++)
        n3 = s3[r3], t3.indexOf(n3) >= 0 || (o4[n3] = e4[n3]);
      return o4;
    }(t2, ["componentId"]), s2 = r2 && r2 + "-" + (ke(e3) ? e3 : Te(_(e3)));
    return qe(e3, v$1({}, o3, { attrs: S2, componentId: s2 }), n2);
  }, Object.defineProperty(C2, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(t3) {
    this._foldedDefaultProps = o2 ? Me({}, e2.defaultProps, t3) : t3;
  } }), C2.toString = function() {
    return "." + C2.styledComponentId;
  }, i2 && hoistNonReactStatics_cjs(C2, e2, { attrs: true, componentStyle: true, displayName: true, foldedComponentIds: true, shouldForwardProp: true, styledComponentId: true, target: true, withComponent: true }), C2;
}
var He = function(e2) {
  return function e3(t2, r2, o2) {
    if (o2 === void 0 && (o2 = E), !reactIs$2.exports.isValidElementType(r2))
      return j(1, String(r2));
    var s2 = function() {
      return t2(r2, o2, Ce.apply(void 0, arguments));
    };
    return s2.withConfig = function(n2) {
      return e3(t2, r2, v$1({}, o2, {}, n2));
    }, s2.attrs = function(n2) {
      return e3(t2, r2, v$1({}, o2, { attrs: Array.prototype.concat(o2.attrs, n2).filter(Boolean) }));
    }, s2;
  }(qe, e2);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e2) {
  He[e2] = He(e2);
});
var $e = function() {
  function e2(e3, t3) {
    this.rules = e3, this.componentId = t3, this.isStatic = re(e3), Z.registerId(this.componentId + 1);
  }
  var t2 = e2.prototype;
  return t2.createStyles = function(e3, t3, n2, r2) {
    var o2 = r2(Ne(this.rules, t3, n2, r2).join(""), ""), s2 = this.componentId + e3;
    n2.insertRules(s2, s2, o2);
  }, t2.removeStyles = function(e3, t3) {
    t3.clearRules(this.componentId + e3);
  }, t2.renderStyles = function(e3, t3, n2, r2) {
    e3 > 2 && Z.registerId(this.componentId + e3), this.removeStyles(e3, n2), this.createStyles(e3, t3, n2, r2);
  }, e2;
}();
function We(e2) {
  for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), o2 = 1; o2 < t2; o2++)
    n2[o2 - 1] = arguments[o2];
  var i2 = Ce.apply(void 0, [e2].concat(n2)), a2 = "sc-global-" + xe(JSON.stringify(i2)), u2 = new $e(i2, a2);
  function l2(e3) {
    var t3 = fe(), n3 = me(), o3 = react.exports.useContext(Ge), l3 = react.exports.useRef(t3.allocateGSInstance(a2)).current;
    return t3.server && h2(l3, e3, t3, o3, n3), react.exports.useLayoutEffect(function() {
      if (!t3.server)
        return h2(l3, e3, t3, o3, n3), function() {
          return u2.removeStyles(l3, t3);
        };
    }, [l3, e3, t3, o3, n3]), null;
  }
  function h2(e3, t3, n3, r2, o3) {
    if (u2.isStatic)
      u2.renderStyles(e3, O, n3, o3);
    else {
      var s2 = v$1({}, t3, { theme: Re(t3, r2, l2.defaultProps) });
      u2.renderStyles(e3, s2, n3, o3);
    }
  }
  return React.memo(l2);
}
var styled = He;
var light = {
  title: "light",
  colors: {
    primary: "#63a46c",
    secundary: "#ddd",
    background: "#fff",
    text: "#444"
  }
};
var dark = {
  title: "dark",
  colors: {
    primary: "#63a46c",
    secundary: "#333",
    background: "#444",
    text: "#EBEBEB"
  }
};
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = React.createContext && React.createContext(DefaultContext);
var __assign$1 = globalThis && globalThis.__assign || function() {
  __assign$1 = Object.assign || function(t2) {
    for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
      s2 = arguments[i2];
      for (var p2 in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p2))
          t2[p2] = s2[p2];
    }
    return t2;
  };
  return __assign$1.apply(this, arguments);
};
var __rest$1 = globalThis && globalThis.__rest || function(s2, e2) {
  var t2 = {};
  for (var p2 in s2)
    if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0)
      t2[p2] = s2[p2];
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
      if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
        t2[p2[i2]] = s2[p2[i2]];
    }
  return t2;
};
function Tree2Element(tree) {
  return tree && tree.map(function(node, i2) {
    return React.createElement(node.tag, __assign$1({
      key: i2
    }, node.attr), Tree2Element(node.child));
  });
}
function GenIcon(data) {
  return function(props) {
    return React.createElement(IconBase, __assign$1({
      attr: __assign$1({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function(conf) {
    var attr = props.attr, size = props.size, title = props.title, svgProps = __rest$1(props, ["attr", "size", "title"]);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className)
      className = conf.className;
    if (props.className)
      className = (className ? className + " " : "") + props.className;
    return React.createElement("svg", __assign$1({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: __assign$1(__assign$1({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && React.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? React.createElement(IconContext.Consumer, null, function(conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}
function HiPlusSm(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 20 20", "fill": "currentColor" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z", "clipRule": "evenodd" } }] })(props);
}
var extendStatics = function(d2, b2) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
    d3.__proto__ = b3;
  } || function(d3, b3) {
    for (var p2 in b3)
      if (Object.prototype.hasOwnProperty.call(b3, p2))
        d3[p2] = b3[p2];
  };
  return extendStatics(d2, b2);
};
function __extends(d2, b2) {
  if (typeof b2 !== "function" && b2 !== null)
    throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
  extendStatics(d2, b2);
  function __() {
    this.constructor = d2;
  }
  d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
}
var __assign = function() {
  __assign = Object.assign || function __assign2(t2) {
    for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
      s2 = arguments[i2];
      for (var p2 in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p2))
          t2[p2] = s2[p2];
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
function __rest(s2, e2) {
  var t2 = {};
  for (var p2 in s2)
    if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0)
      t2[p2] = s2[p2];
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
      if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
        t2[p2[i2]] = s2[p2[i2]];
    }
  return t2;
}
function __read(o2, n2) {
  var m2 = typeof Symbol === "function" && o2[Symbol.iterator];
  if (!m2)
    return o2;
  var i2 = m2.call(o2), r2, ar = [], e2;
  try {
    while ((n2 === void 0 || n2-- > 0) && !(r2 = i2.next()).done)
      ar.push(r2.value);
  } catch (error) {
    e2 = { error };
  } finally {
    try {
      if (r2 && !r2.done && (m2 = i2["return"]))
        m2.call(i2);
    } finally {
      if (e2)
        throw e2.error;
    }
  }
  return ar;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i2 = 0, l2 = from.length, ar; i2 < l2; i2++) {
      if (ar || !(i2 in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i2);
        ar[i2] = from[i2];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}
var defaultEnvironment = "production";
var env = typeof process === "undefined" || process.env === void 0 ? defaultEnvironment : "production";
var createDefinition = function(propNames) {
  return {
    isEnabled: function(props) {
      return propNames.some(function(name) {
        return !!props[name];
      });
    }
  };
};
var featureDefinitions = {
  measureLayout: createDefinition(["layout", "layoutId", "drag"]),
  animation: createDefinition([
    "animate",
    "exit",
    "variants",
    "whileHover",
    "whileTap",
    "whileFocus",
    "whileDrag",
    "whileInView"
  ]),
  exit: createDefinition(["exit"]),
  drag: createDefinition(["drag", "dragControls"]),
  focus: createDefinition(["whileFocus"]),
  hover: createDefinition(["whileHover", "onHoverStart", "onHoverEnd"]),
  tap: createDefinition(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
  pan: createDefinition([
    "onPan",
    "onPanStart",
    "onPanSessionStart",
    "onPanEnd"
  ]),
  inView: createDefinition([
    "whileInView",
    "onViewportEnter",
    "onViewportLeave"
  ])
};
function loadFeatures(features) {
  for (var key in features) {
    if (features[key] === null)
      continue;
    if (key === "projectionNodeConstructor") {
      featureDefinitions.projectionNodeConstructor = features[key];
    } else {
      featureDefinitions[key].Component = features[key];
    }
  }
}
var warning = function() {
};
var invariant = function() {
};
var LazyContext = react.exports.createContext({ strict: false });
var featureNames = Object.keys(featureDefinitions);
var numFeatures = featureNames.length;
function useFeatures(props, visualElement2, preloadedFeatures) {
  var features = [];
  var lazyContext = react.exports.useContext(LazyContext);
  if (!visualElement2)
    return null;
  if (env !== "production" && preloadedFeatures && lazyContext.strict)
    ;
  for (var i2 = 0; i2 < numFeatures; i2++) {
    var name_1 = featureNames[i2];
    var _a = featureDefinitions[name_1], isEnabled = _a.isEnabled, Component = _a.Component;
    if (isEnabled(props) && Component) {
      features.push(react.exports.createElement(Component, __assign({ key: name_1 }, props, { visualElement: visualElement2 })));
    }
  }
  return features;
}
var MotionConfigContext = react.exports.createContext({
  transformPagePoint: function(p2) {
    return p2;
  },
  isStatic: false,
  reducedMotion: "never"
});
var MotionContext = react.exports.createContext({});
function useVisualElementContext() {
  return react.exports.useContext(MotionContext).visualElement;
}
var PresenceContext = react.exports.createContext(null);
var isBrowser = typeof document !== "undefined";
var useIsomorphicLayoutEffect = isBrowser ? react.exports.useLayoutEffect : react.exports.useEffect;
var prefersReducedMotion = { current: null };
var hasDetected = false;
function initPrefersReducedMotion() {
  hasDetected = true;
  if (!isBrowser)
    return;
  if (window.matchMedia) {
    var motionMediaQuery_1 = window.matchMedia("(prefers-reduced-motion)");
    var setReducedMotionPreferences = function() {
      return prefersReducedMotion.current = motionMediaQuery_1.matches;
    };
    motionMediaQuery_1.addListener(setReducedMotionPreferences);
    setReducedMotionPreferences();
  } else {
    prefersReducedMotion.current = false;
  }
}
function useReducedMotion() {
  !hasDetected && initPrefersReducedMotion();
  var _a = __read(react.exports.useState(prefersReducedMotion.current), 1), shouldReduceMotion = _a[0];
  return shouldReduceMotion;
}
function useReducedMotionConfig() {
  var reducedMotionPreference = useReducedMotion();
  var reducedMotion = react.exports.useContext(MotionConfigContext).reducedMotion;
  if (reducedMotion === "never") {
    return false;
  } else if (reducedMotion === "always") {
    return true;
  } else {
    return reducedMotionPreference;
  }
}
function useVisualElement(Component, visualState, props, createVisualElement) {
  var lazyContext = react.exports.useContext(LazyContext);
  var parent = useVisualElementContext();
  var presenceContext = react.exports.useContext(PresenceContext);
  var shouldReduceMotion = useReducedMotionConfig();
  var visualElementRef = react.exports.useRef(void 0);
  if (!createVisualElement)
    createVisualElement = lazyContext.renderer;
  if (!visualElementRef.current && createVisualElement) {
    visualElementRef.current = createVisualElement(Component, {
      visualState,
      parent,
      props,
      presenceId: presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.id,
      blockInitialAnimation: (presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.initial) === false,
      shouldReduceMotion
    });
  }
  var visualElement2 = visualElementRef.current;
  useIsomorphicLayoutEffect(function() {
    visualElement2 === null || visualElement2 === void 0 ? void 0 : visualElement2.syncRender();
  });
  react.exports.useEffect(function() {
    var _a;
    (_a = visualElement2 === null || visualElement2 === void 0 ? void 0 : visualElement2.animationState) === null || _a === void 0 ? void 0 : _a.animateChanges();
  });
  useIsomorphicLayoutEffect(function() {
    return function() {
      return visualElement2 === null || visualElement2 === void 0 ? void 0 : visualElement2.notifyUnmount();
    };
  }, []);
  return visualElement2;
}
function isRefObject(ref) {
  return typeof ref === "object" && Object.prototype.hasOwnProperty.call(ref, "current");
}
function useMotionRef(visualState, visualElement2, externalRef) {
  return react.exports.useCallback(function(instance) {
    var _a;
    instance && ((_a = visualState.mount) === null || _a === void 0 ? void 0 : _a.call(visualState, instance));
    if (visualElement2) {
      instance ? visualElement2.mount(instance) : visualElement2.unmount();
    }
    if (externalRef) {
      if (typeof externalRef === "function") {
        externalRef(instance);
      } else if (isRefObject(externalRef)) {
        externalRef.current = instance;
      }
    }
  }, [visualElement2]);
}
function isVariantLabels(v2) {
  return Array.isArray(v2);
}
function isVariantLabel(v2) {
  return typeof v2 === "string" || isVariantLabels(v2);
}
function getCurrent(visualElement2) {
  var current = {};
  visualElement2.forEachValue(function(value, key) {
    return current[key] = value.get();
  });
  return current;
}
function getVelocity$1(visualElement2) {
  var velocity = {};
  visualElement2.forEachValue(function(value, key) {
    return velocity[key] = value.getVelocity();
  });
  return velocity;
}
function resolveVariantFromProps(props, definition2, custom, currentValues, currentVelocity) {
  var _a;
  if (currentValues === void 0) {
    currentValues = {};
  }
  if (currentVelocity === void 0) {
    currentVelocity = {};
  }
  if (typeof definition2 === "function") {
    definition2 = definition2(custom !== null && custom !== void 0 ? custom : props.custom, currentValues, currentVelocity);
  }
  if (typeof definition2 === "string") {
    definition2 = (_a = props.variants) === null || _a === void 0 ? void 0 : _a[definition2];
  }
  if (typeof definition2 === "function") {
    definition2 = definition2(custom !== null && custom !== void 0 ? custom : props.custom, currentValues, currentVelocity);
  }
  return definition2;
}
function resolveVariant(visualElement2, definition2, custom) {
  var props = visualElement2.getProps();
  return resolveVariantFromProps(props, definition2, custom !== null && custom !== void 0 ? custom : props.custom, getCurrent(visualElement2), getVelocity$1(visualElement2));
}
function checkIfControllingVariants(props) {
  var _a;
  return typeof ((_a = props.animate) === null || _a === void 0 ? void 0 : _a.start) === "function" || isVariantLabel(props.initial) || isVariantLabel(props.animate) || isVariantLabel(props.whileHover) || isVariantLabel(props.whileDrag) || isVariantLabel(props.whileTap) || isVariantLabel(props.whileFocus) || isVariantLabel(props.exit);
}
function checkIfVariantNode(props) {
  return Boolean(checkIfControllingVariants(props) || props.variants);
}
function getCurrentTreeVariants(props, context) {
  if (checkIfControllingVariants(props)) {
    var initial = props.initial, animate2 = props.animate;
    return {
      initial: initial === false || isVariantLabel(initial) ? initial : void 0,
      animate: isVariantLabel(animate2) ? animate2 : void 0
    };
  }
  return props.inherit !== false ? context : {};
}
function useCreateMotionContext(props) {
  var _a = getCurrentTreeVariants(props, react.exports.useContext(MotionContext)), initial = _a.initial, animate2 = _a.animate;
  return react.exports.useMemo(function() {
    return { initial, animate: animate2 };
  }, [variantLabelsAsDependency(initial), variantLabelsAsDependency(animate2)]);
}
function variantLabelsAsDependency(prop) {
  return Array.isArray(prop) ? prop.join(" ") : prop;
}
function useConstant(init) {
  var ref = react.exports.useRef(null);
  if (ref.current === null) {
    ref.current = init();
  }
  return ref.current;
}
const defaultTimestep = 1 / 60 * 1e3;
const getCurrentTime = typeof performance !== "undefined" ? () => performance.now() : () => Date.now();
const onNextFrame = typeof window !== "undefined" ? (callback) => window.requestAnimationFrame(callback) : (callback) => setTimeout(() => callback(getCurrentTime()), defaultTimestep);
function createRenderStep(runNextFrame2) {
  let toRun = [];
  let toRunNextFrame = [];
  let numToRun = 0;
  let isProcessing2 = false;
  let flushNextFrame = false;
  const toKeepAlive = /* @__PURE__ */ new WeakSet();
  const step = {
    schedule: (callback, keepAlive = false, immediate = false) => {
      const addToCurrentFrame = immediate && isProcessing2;
      const buffer = addToCurrentFrame ? toRun : toRunNextFrame;
      if (keepAlive)
        toKeepAlive.add(callback);
      if (buffer.indexOf(callback) === -1) {
        buffer.push(callback);
        if (addToCurrentFrame && isProcessing2)
          numToRun = toRun.length;
      }
      return callback;
    },
    cancel: (callback) => {
      const index2 = toRunNextFrame.indexOf(callback);
      if (index2 !== -1)
        toRunNextFrame.splice(index2, 1);
      toKeepAlive.delete(callback);
    },
    process: (frameData) => {
      if (isProcessing2) {
        flushNextFrame = true;
        return;
      }
      isProcessing2 = true;
      [toRun, toRunNextFrame] = [toRunNextFrame, toRun];
      toRunNextFrame.length = 0;
      numToRun = toRun.length;
      if (numToRun) {
        for (let i2 = 0; i2 < numToRun; i2++) {
          const callback = toRun[i2];
          callback(frameData);
          if (toKeepAlive.has(callback)) {
            step.schedule(callback);
            runNextFrame2();
          }
        }
      }
      isProcessing2 = false;
      if (flushNextFrame) {
        flushNextFrame = false;
        step.process(frameData);
      }
    }
  };
  return step;
}
const maxElapsed = 40;
let useDefaultElapsed = true;
let runNextFrame = false;
let isProcessing = false;
const frame = {
  delta: 0,
  timestamp: 0
};
const stepsOrder = [
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
];
const steps = stepsOrder.reduce((acc, key) => {
  acc[key] = createRenderStep(() => runNextFrame = true);
  return acc;
}, {});
const sync = stepsOrder.reduce((acc, key) => {
  const step = steps[key];
  acc[key] = (process2, keepAlive = false, immediate = false) => {
    if (!runNextFrame)
      startLoop();
    return step.schedule(process2, keepAlive, immediate);
  };
  return acc;
}, {});
const cancelSync = stepsOrder.reduce((acc, key) => {
  acc[key] = steps[key].cancel;
  return acc;
}, {});
const flushSync = stepsOrder.reduce((acc, key) => {
  acc[key] = () => steps[key].process(frame);
  return acc;
}, {});
const processStep = (stepId) => steps[stepId].process(frame);
const processFrame = (timestamp) => {
  runNextFrame = false;
  frame.delta = useDefaultElapsed ? defaultTimestep : Math.max(Math.min(timestamp - frame.timestamp, maxElapsed), 1);
  frame.timestamp = timestamp;
  isProcessing = true;
  stepsOrder.forEach(processStep);
  isProcessing = false;
  if (runNextFrame) {
    useDefaultElapsed = false;
    onNextFrame(processFrame);
  }
};
const startLoop = () => {
  runNextFrame = true;
  useDefaultElapsed = true;
  if (!isProcessing)
    onNextFrame(processFrame);
};
const getFrameData = () => frame;
const clamp$1 = (min, max, v2) => Math.min(Math.max(v2, min), max);
const safeMin = 1e-3;
const minDuration = 0.01;
const maxDuration = 10;
const minDamping = 0.05;
const maxDamping = 1;
function findSpring({ duration = 800, bounce = 0.25, velocity = 0, mass = 1 }) {
  let envelope;
  let derivative;
  warning(duration <= maxDuration * 1e3);
  let dampingRatio = 1 - bounce;
  dampingRatio = clamp$1(minDamping, maxDamping, dampingRatio);
  duration = clamp$1(minDuration, maxDuration, duration / 1e3);
  if (dampingRatio < 1) {
    envelope = (undampedFreq2) => {
      const exponentialDecay = undampedFreq2 * dampingRatio;
      const delta = exponentialDecay * duration;
      const a2 = exponentialDecay - velocity;
      const b2 = calcAngularFreq(undampedFreq2, dampingRatio);
      const c2 = Math.exp(-delta);
      return safeMin - a2 / b2 * c2;
    };
    derivative = (undampedFreq2) => {
      const exponentialDecay = undampedFreq2 * dampingRatio;
      const delta = exponentialDecay * duration;
      const d2 = delta * velocity + velocity;
      const e2 = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq2, 2) * duration;
      const f2 = Math.exp(-delta);
      const g2 = calcAngularFreq(Math.pow(undampedFreq2, 2), dampingRatio);
      const factor = -envelope(undampedFreq2) + safeMin > 0 ? -1 : 1;
      return factor * ((d2 - e2) * f2) / g2;
    };
  } else {
    envelope = (undampedFreq2) => {
      const a2 = Math.exp(-undampedFreq2 * duration);
      const b2 = (undampedFreq2 - velocity) * duration + 1;
      return -safeMin + a2 * b2;
    };
    derivative = (undampedFreq2) => {
      const a2 = Math.exp(-undampedFreq2 * duration);
      const b2 = (velocity - undampedFreq2) * (duration * duration);
      return a2 * b2;
    };
  }
  const initialGuess = 5 / duration;
  const undampedFreq = approximateRoot(envelope, derivative, initialGuess);
  duration = duration * 1e3;
  if (isNaN(undampedFreq)) {
    return {
      stiffness: 100,
      damping: 10,
      duration
    };
  } else {
    const stiffness = Math.pow(undampedFreq, 2) * mass;
    return {
      stiffness,
      damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
      duration
    };
  }
}
const rootIterations = 12;
function approximateRoot(envelope, derivative, initialGuess) {
  let result = initialGuess;
  for (let i2 = 1; i2 < rootIterations; i2++) {
    result = result - envelope(result) / derivative(result);
  }
  return result;
}
function calcAngularFreq(undampedFreq, dampingRatio) {
  return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}
const durationKeys = ["duration", "bounce"];
const physicsKeys = ["stiffness", "damping", "mass"];
function isSpringType(options, keys2) {
  return keys2.some((key) => options[key] !== void 0);
}
function getSpringOptions(options) {
  let springOptions = Object.assign({ velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: false }, options);
  if (!isSpringType(options, physicsKeys) && isSpringType(options, durationKeys)) {
    const derived = findSpring(options);
    springOptions = Object.assign(Object.assign(Object.assign({}, springOptions), derived), { velocity: 0, mass: 1 });
    springOptions.isResolvedFromDuration = true;
  }
  return springOptions;
}
function spring(_a) {
  var { from = 0, to = 1, restSpeed = 2, restDelta } = _a, options = __rest(_a, ["from", "to", "restSpeed", "restDelta"]);
  const state = { done: false, value: from };
  let { stiffness, damping, mass, velocity, duration, isResolvedFromDuration } = getSpringOptions(options);
  let resolveSpring = zero;
  let resolveVelocity = zero;
  function createSpring() {
    const initialVelocity = velocity ? -(velocity / 1e3) : 0;
    const initialDelta = to - from;
    const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
    const undampedAngularFreq = Math.sqrt(stiffness / mass) / 1e3;
    if (restDelta === void 0) {
      restDelta = Math.min(Math.abs(to - from) / 100, 0.4);
    }
    if (dampingRatio < 1) {
      const angularFreq = calcAngularFreq(undampedAngularFreq, dampingRatio);
      resolveSpring = (t2) => {
        const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t2);
        return to - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq * Math.sin(angularFreq * t2) + initialDelta * Math.cos(angularFreq * t2));
      };
      resolveVelocity = (t2) => {
        const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t2);
        return dampingRatio * undampedAngularFreq * envelope * (Math.sin(angularFreq * t2) * (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq + initialDelta * Math.cos(angularFreq * t2)) - envelope * (Math.cos(angularFreq * t2) * (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) - angularFreq * initialDelta * Math.sin(angularFreq * t2));
      };
    } else if (dampingRatio === 1) {
      resolveSpring = (t2) => to - Math.exp(-undampedAngularFreq * t2) * (initialDelta + (initialVelocity + undampedAngularFreq * initialDelta) * t2);
    } else {
      const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
      resolveSpring = (t2) => {
        const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t2);
        const freqForT = Math.min(dampedAngularFreq * t2, 300);
        return to - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) * Math.sinh(freqForT) + dampedAngularFreq * initialDelta * Math.cosh(freqForT)) / dampedAngularFreq;
      };
    }
  }
  createSpring();
  return {
    next: (t2) => {
      const current = resolveSpring(t2);
      if (!isResolvedFromDuration) {
        const currentVelocity = resolveVelocity(t2) * 1e3;
        const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
        const isBelowDisplacementThreshold = Math.abs(to - current) <= restDelta;
        state.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
      } else {
        state.done = t2 >= duration;
      }
      state.value = state.done ? to : current;
      return state;
    },
    flipTarget: () => {
      velocity = -velocity;
      [from, to] = [to, from];
      createSpring();
    }
  };
}
spring.needsInterpolation = (a2, b2) => typeof a2 === "string" || typeof b2 === "string";
const zero = (_t) => 0;
const progress = (from, to, value) => {
  const toFromDifference = to - from;
  return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};
const mix = (from, to, progress2) => -progress2 * from + progress2 * to + from;
const clamp = (min, max) => (v2) => Math.max(Math.min(v2, max), min);
const sanitize = (v2) => v2 % 1 ? Number(v2.toFixed(5)) : v2;
const floatRegex = /(-)?([\d]*\.?[\d])+/g;
const colorRegex = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi;
const singleColorRegex = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
function isString(v2) {
  return typeof v2 === "string";
}
const number$1 = {
  test: (v2) => typeof v2 === "number",
  parse: parseFloat,
  transform: (v2) => v2
};
const alpha = Object.assign(Object.assign({}, number$1), { transform: clamp(0, 1) });
const scale = Object.assign(Object.assign({}, number$1), { default: 1 });
const createUnitType = (unit) => ({
  test: (v2) => isString(v2) && v2.endsWith(unit) && v2.split(" ").length === 1,
  parse: parseFloat,
  transform: (v2) => `${v2}${unit}`
});
const degrees = createUnitType("deg");
const percent = createUnitType("%");
const px = createUnitType("px");
const vh = createUnitType("vh");
const vw = createUnitType("vw");
const progressPercentage = Object.assign(Object.assign({}, percent), { parse: (v2) => percent.parse(v2) / 100, transform: (v2) => percent.transform(v2 * 100) });
const isColorString = (type, testProp) => (v2) => {
  return Boolean(isString(v2) && singleColorRegex.test(v2) && v2.startsWith(type) || testProp && Object.prototype.hasOwnProperty.call(v2, testProp));
};
const splitColor = (aName, bName, cName) => (v2) => {
  if (!isString(v2))
    return v2;
  const [a2, b2, c2, alpha2] = v2.match(floatRegex);
  return {
    [aName]: parseFloat(a2),
    [bName]: parseFloat(b2),
    [cName]: parseFloat(c2),
    alpha: alpha2 !== void 0 ? parseFloat(alpha2) : 1
  };
};
const hsla = {
  test: isColorString("hsl", "hue"),
  parse: splitColor("hue", "saturation", "lightness"),
  transform: ({ hue, saturation, lightness, alpha: alpha$1 = 1 }) => {
    return "hsla(" + Math.round(hue) + ", " + percent.transform(sanitize(saturation)) + ", " + percent.transform(sanitize(lightness)) + ", " + sanitize(alpha.transform(alpha$1)) + ")";
  }
};
const clampRgbUnit = clamp(0, 255);
const rgbUnit = Object.assign(Object.assign({}, number$1), { transform: (v2) => Math.round(clampRgbUnit(v2)) });
const rgba = {
  test: isColorString("rgb", "red"),
  parse: splitColor("red", "green", "blue"),
  transform: ({ red, green, blue, alpha: alpha$1 = 1 }) => "rgba(" + rgbUnit.transform(red) + ", " + rgbUnit.transform(green) + ", " + rgbUnit.transform(blue) + ", " + sanitize(alpha.transform(alpha$1)) + ")"
};
function parseHex(v2) {
  let r2 = "";
  let g2 = "";
  let b2 = "";
  let a2 = "";
  if (v2.length > 5) {
    r2 = v2.substr(1, 2);
    g2 = v2.substr(3, 2);
    b2 = v2.substr(5, 2);
    a2 = v2.substr(7, 2);
  } else {
    r2 = v2.substr(1, 1);
    g2 = v2.substr(2, 1);
    b2 = v2.substr(3, 1);
    a2 = v2.substr(4, 1);
    r2 += r2;
    g2 += g2;
    b2 += b2;
    a2 += a2;
  }
  return {
    red: parseInt(r2, 16),
    green: parseInt(g2, 16),
    blue: parseInt(b2, 16),
    alpha: a2 ? parseInt(a2, 16) / 255 : 1
  };
}
const hex = {
  test: isColorString("#"),
  parse: parseHex,
  transform: rgba.transform
};
const color$2 = {
  test: (v2) => rgba.test(v2) || hex.test(v2) || hsla.test(v2),
  parse: (v2) => {
    if (rgba.test(v2)) {
      return rgba.parse(v2);
    } else if (hsla.test(v2)) {
      return hsla.parse(v2);
    } else {
      return hex.parse(v2);
    }
  },
  transform: (v2) => {
    return isString(v2) ? v2 : v2.hasOwnProperty("red") ? rgba.transform(v2) : hsla.transform(v2);
  }
};
const colorToken = "${c}";
const numberToken = "${n}";
function test(v2) {
  var _a, _b, _c, _d;
  return isNaN(v2) && isString(v2) && ((_b = (_a = v2.match(floatRegex)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) + ((_d = (_c = v2.match(colorRegex)) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0) > 0;
}
function analyse$1(v2) {
  if (typeof v2 === "number")
    v2 = `${v2}`;
  const values = [];
  let numColors = 0;
  const colors = v2.match(colorRegex);
  if (colors) {
    numColors = colors.length;
    v2 = v2.replace(colorRegex, colorToken);
    values.push(...colors.map(color$2.parse));
  }
  const numbers = v2.match(floatRegex);
  if (numbers) {
    v2 = v2.replace(floatRegex, numberToken);
    values.push(...numbers.map(number$1.parse));
  }
  return { values, numColors, tokenised: v2 };
}
function parse$2(v2) {
  return analyse$1(v2).values;
}
function createTransformer(v2) {
  const { values, numColors, tokenised } = analyse$1(v2);
  const numValues = values.length;
  return (v3) => {
    let output = tokenised;
    for (let i2 = 0; i2 < numValues; i2++) {
      output = output.replace(i2 < numColors ? colorToken : numberToken, i2 < numColors ? color$2.transform(v3[i2]) : sanitize(v3[i2]));
    }
    return output;
  };
}
const convertNumbersToZero = (v2) => typeof v2 === "number" ? 0 : v2;
function getAnimatableNone$1(v2) {
  const parsed = parse$2(v2);
  const transformer = createTransformer(v2);
  return transformer(parsed.map(convertNumbersToZero));
}
const complex = { test, parse: parse$2, createTransformer, getAnimatableNone: getAnimatableNone$1 };
const maxDefaults = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function applyDefaultFilter(v2) {
  let [name, value] = v2.slice(0, -1).split("(");
  if (name === "drop-shadow")
    return v2;
  const [number2] = value.match(floatRegex) || [];
  if (!number2)
    return v2;
  const unit = value.replace(number2, "");
  let defaultValue = maxDefaults.has(name) ? 1 : 0;
  if (number2 !== value)
    defaultValue *= 100;
  return name + "(" + defaultValue + unit + ")";
}
const functionRegex = /([a-z-]*)\(.*?\)/g;
const filter = Object.assign(Object.assign({}, complex), { getAnimatableNone: (v2) => {
  const functions = v2.match(functionRegex);
  return functions ? functions.map(applyDefaultFilter).join(" ") : v2;
} });
function hueToRgb(p2, q2, t2) {
  if (t2 < 0)
    t2 += 1;
  if (t2 > 1)
    t2 -= 1;
  if (t2 < 1 / 6)
    return p2 + (q2 - p2) * 6 * t2;
  if (t2 < 1 / 2)
    return q2;
  if (t2 < 2 / 3)
    return p2 + (q2 - p2) * (2 / 3 - t2) * 6;
  return p2;
}
function hslaToRgba({ hue, saturation, lightness, alpha: alpha2 }) {
  hue /= 360;
  saturation /= 100;
  lightness /= 100;
  let red = 0;
  let green = 0;
  let blue = 0;
  if (!saturation) {
    red = green = blue = lightness;
  } else {
    const q2 = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
    const p2 = 2 * lightness - q2;
    red = hueToRgb(p2, q2, hue + 1 / 3);
    green = hueToRgb(p2, q2, hue);
    blue = hueToRgb(p2, q2, hue - 1 / 3);
  }
  return {
    red: Math.round(red * 255),
    green: Math.round(green * 255),
    blue: Math.round(blue * 255),
    alpha: alpha2
  };
}
const mixLinearColor = (from, to, v2) => {
  const fromExpo = from * from;
  const toExpo = to * to;
  return Math.sqrt(Math.max(0, v2 * (toExpo - fromExpo) + fromExpo));
};
const colorTypes = [hex, rgba, hsla];
const getColorType = (v2) => colorTypes.find((type) => type.test(v2));
const mixColor = (from, to) => {
  let fromColorType = getColorType(from);
  let toColorType = getColorType(to);
  let fromColor = fromColorType.parse(from);
  let toColor = toColorType.parse(to);
  if (fromColorType === hsla) {
    fromColor = hslaToRgba(fromColor);
    fromColorType = rgba;
  }
  if (toColorType === hsla) {
    toColor = hslaToRgba(toColor);
    toColorType = rgba;
  }
  const blended = Object.assign({}, fromColor);
  return (v2) => {
    for (const key in blended) {
      if (key !== "alpha") {
        blended[key] = mixLinearColor(fromColor[key], toColor[key], v2);
      }
    }
    blended.alpha = mix(fromColor.alpha, toColor.alpha, v2);
    return fromColorType.transform(blended);
  };
};
const isNum = (v2) => typeof v2 === "number";
const combineFunctions = (a2, b2) => (v2) => b2(a2(v2));
const pipe = (...transformers) => transformers.reduce(combineFunctions);
function getMixer(origin, target) {
  if (isNum(origin)) {
    return (v2) => mix(origin, target, v2);
  } else if (color$2.test(origin)) {
    return mixColor(origin, target);
  } else {
    return mixComplex(origin, target);
  }
}
const mixArray = (from, to) => {
  const output = [...from];
  const numValues = output.length;
  const blendValue = from.map((fromThis, i2) => getMixer(fromThis, to[i2]));
  return (v2) => {
    for (let i2 = 0; i2 < numValues; i2++) {
      output[i2] = blendValue[i2](v2);
    }
    return output;
  };
};
const mixObject = (origin, target) => {
  const output = Object.assign(Object.assign({}, origin), target);
  const blendValue = {};
  for (const key in output) {
    if (origin[key] !== void 0 && target[key] !== void 0) {
      blendValue[key] = getMixer(origin[key], target[key]);
    }
  }
  return (v2) => {
    for (const key in blendValue) {
      output[key] = blendValue[key](v2);
    }
    return output;
  };
};
function analyse(value) {
  const parsed = complex.parse(value);
  const numValues = parsed.length;
  let numNumbers = 0;
  let numRGB = 0;
  let numHSL = 0;
  for (let i2 = 0; i2 < numValues; i2++) {
    if (numNumbers || typeof parsed[i2] === "number") {
      numNumbers++;
    } else {
      if (parsed[i2].hue !== void 0) {
        numHSL++;
      } else {
        numRGB++;
      }
    }
  }
  return { parsed, numNumbers, numRGB, numHSL };
}
const mixComplex = (origin, target) => {
  const template = complex.createTransformer(target);
  const originStats = analyse(origin);
  const targetStats = analyse(target);
  const canInterpolate = originStats.numHSL === targetStats.numHSL && originStats.numRGB === targetStats.numRGB && originStats.numNumbers >= targetStats.numNumbers;
  if (canInterpolate) {
    return pipe(mixArray(originStats.parsed, targetStats.parsed), template);
  } else {
    return (p2) => `${p2 > 0 ? target : origin}`;
  }
};
const mixNumber = (from, to) => (p2) => mix(from, to, p2);
function detectMixerFactory(v2) {
  if (typeof v2 === "number") {
    return mixNumber;
  } else if (typeof v2 === "string") {
    if (color$2.test(v2)) {
      return mixColor;
    } else {
      return mixComplex;
    }
  } else if (Array.isArray(v2)) {
    return mixArray;
  } else if (typeof v2 === "object") {
    return mixObject;
  }
}
function createMixers(output, ease, customMixer) {
  const mixers = [];
  const mixerFactory = customMixer || detectMixerFactory(output[0]);
  const numMixers = output.length - 1;
  for (let i2 = 0; i2 < numMixers; i2++) {
    let mixer = mixerFactory(output[i2], output[i2 + 1]);
    if (ease) {
      const easingFunction = Array.isArray(ease) ? ease[i2] : ease;
      mixer = pipe(easingFunction, mixer);
    }
    mixers.push(mixer);
  }
  return mixers;
}
function fastInterpolate([from, to], [mixer]) {
  return (v2) => mixer(progress(from, to, v2));
}
function slowInterpolate(input, mixers) {
  const inputLength = input.length;
  const lastInputIndex = inputLength - 1;
  return (v2) => {
    let mixerIndex = 0;
    let foundMixerIndex = false;
    if (v2 <= input[0]) {
      foundMixerIndex = true;
    } else if (v2 >= input[lastInputIndex]) {
      mixerIndex = lastInputIndex - 1;
      foundMixerIndex = true;
    }
    if (!foundMixerIndex) {
      let i2 = 1;
      for (; i2 < inputLength; i2++) {
        if (input[i2] > v2 || i2 === lastInputIndex) {
          break;
        }
      }
      mixerIndex = i2 - 1;
    }
    const progressInRange = progress(input[mixerIndex], input[mixerIndex + 1], v2);
    return mixers[mixerIndex](progressInRange);
  };
}
function interpolate(input, output, { clamp: isClamp = true, ease, mixer } = {}) {
  const inputLength = input.length;
  invariant(inputLength === output.length);
  invariant(!ease || !Array.isArray(ease) || ease.length === inputLength - 1);
  if (input[0] > input[inputLength - 1]) {
    input = [].concat(input);
    output = [].concat(output);
    input.reverse();
    output.reverse();
  }
  const mixers = createMixers(output, ease, mixer);
  const interpolator = inputLength === 2 ? fastInterpolate(input, mixers) : slowInterpolate(input, mixers);
  return isClamp ? (v2) => interpolator(clamp$1(input[0], input[inputLength - 1], v2)) : interpolator;
}
const reverseEasing = (easing) => (p2) => 1 - easing(1 - p2);
const mirrorEasing = (easing) => (p2) => p2 <= 0.5 ? easing(2 * p2) / 2 : (2 - easing(2 * (1 - p2))) / 2;
const createExpoIn = (power) => (p2) => Math.pow(p2, power);
const createBackIn = (power) => (p2) => p2 * p2 * ((power + 1) * p2 - power);
const createAnticipate = (power) => {
  const backEasing = createBackIn(power);
  return (p2) => (p2 *= 2) < 1 ? 0.5 * backEasing(p2) : 0.5 * (2 - Math.pow(2, -10 * (p2 - 1)));
};
const DEFAULT_OVERSHOOT_STRENGTH = 1.525;
const BOUNCE_FIRST_THRESHOLD = 4 / 11;
const BOUNCE_SECOND_THRESHOLD = 8 / 11;
const BOUNCE_THIRD_THRESHOLD = 9 / 10;
const linear = (p2) => p2;
const easeIn = createExpoIn(2);
const easeOut = reverseEasing(easeIn);
const easeInOut = mirrorEasing(easeIn);
const circIn = (p2) => 1 - Math.sin(Math.acos(p2));
const circOut = reverseEasing(circIn);
const circInOut = mirrorEasing(circOut);
const backIn = createBackIn(DEFAULT_OVERSHOOT_STRENGTH);
const backOut = reverseEasing(backIn);
const backInOut = mirrorEasing(backIn);
const anticipate = createAnticipate(DEFAULT_OVERSHOOT_STRENGTH);
const ca = 4356 / 361;
const cb = 35442 / 1805;
const cc = 16061 / 1805;
const bounceOut = (p2) => {
  if (p2 === 1 || p2 === 0)
    return p2;
  const p22 = p2 * p2;
  return p2 < BOUNCE_FIRST_THRESHOLD ? 7.5625 * p22 : p2 < BOUNCE_SECOND_THRESHOLD ? 9.075 * p22 - 9.9 * p2 + 3.4 : p2 < BOUNCE_THIRD_THRESHOLD ? ca * p22 - cb * p2 + cc : 10.8 * p2 * p2 - 20.52 * p2 + 10.72;
};
const bounceIn = reverseEasing(bounceOut);
const bounceInOut = (p2) => p2 < 0.5 ? 0.5 * (1 - bounceOut(1 - p2 * 2)) : 0.5 * bounceOut(p2 * 2 - 1) + 0.5;
function defaultEasing(values, easing) {
  return values.map(() => easing || easeInOut).splice(0, values.length - 1);
}
function defaultOffset(values) {
  const numValues = values.length;
  return values.map((_value, i2) => i2 !== 0 ? i2 / (numValues - 1) : 0);
}
function convertOffsetToTimes(offset, duration) {
  return offset.map((o2) => o2 * duration);
}
function keyframes$1({ from = 0, to = 1, ease, offset, duration = 300 }) {
  const state = { done: false, value: from };
  const values = Array.isArray(to) ? to : [from, to];
  const times = convertOffsetToTimes(offset && offset.length === values.length ? offset : defaultOffset(values), duration);
  function createInterpolator() {
    return interpolate(times, values, {
      ease: Array.isArray(ease) ? ease : defaultEasing(values, ease)
    });
  }
  let interpolator = createInterpolator();
  return {
    next: (t2) => {
      state.value = interpolator(t2);
      state.done = t2 >= duration;
      return state;
    },
    flipTarget: () => {
      values.reverse();
      interpolator = createInterpolator();
    }
  };
}
function decay({ velocity = 0, from = 0, power = 0.8, timeConstant = 350, restDelta = 0.5, modifyTarget }) {
  const state = { done: false, value: from };
  let amplitude = power * velocity;
  const ideal = from + amplitude;
  const target = modifyTarget === void 0 ? ideal : modifyTarget(ideal);
  if (target !== ideal)
    amplitude = target - from;
  return {
    next: (t2) => {
      const delta = -amplitude * Math.exp(-t2 / timeConstant);
      state.done = !(delta > restDelta || delta < -restDelta);
      state.value = state.done ? target : target + delta;
      return state;
    },
    flipTarget: () => {
    }
  };
}
const types$1 = { keyframes: keyframes$1, spring, decay };
function detectAnimationFromOptions(config) {
  if (Array.isArray(config.to)) {
    return keyframes$1;
  } else if (types$1[config.type]) {
    return types$1[config.type];
  }
  const keys2 = new Set(Object.keys(config));
  if (keys2.has("ease") || keys2.has("duration") && !keys2.has("dampingRatio")) {
    return keyframes$1;
  } else if (keys2.has("dampingRatio") || keys2.has("stiffness") || keys2.has("mass") || keys2.has("damping") || keys2.has("restSpeed") || keys2.has("restDelta")) {
    return spring;
  }
  return keyframes$1;
}
function loopElapsed(elapsed, duration, delay = 0) {
  return elapsed - duration - delay;
}
function reverseElapsed(elapsed, duration, delay = 0, isForwardPlayback = true) {
  return isForwardPlayback ? loopElapsed(duration + -elapsed, duration, delay) : duration - (elapsed - duration) + delay;
}
function hasRepeatDelayElapsed(elapsed, duration, delay, isForwardPlayback) {
  return isForwardPlayback ? elapsed >= duration + delay : elapsed <= -delay;
}
const framesync = (update) => {
  const passTimestamp = ({ delta }) => update(delta);
  return {
    start: () => sync.update(passTimestamp, true),
    stop: () => cancelSync.update(passTimestamp)
  };
};
function animate$1(_a) {
  var _b, _c;
  var { from, autoplay = true, driver = framesync, elapsed = 0, repeat: repeatMax = 0, repeatType = "loop", repeatDelay = 0, onPlay, onStop, onComplete, onRepeat, onUpdate } = _a, options = __rest(_a, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
  let { to } = options;
  let driverControls;
  let repeatCount = 0;
  let computedDuration = options.duration;
  let latest;
  let isComplete = false;
  let isForwardPlayback = true;
  let interpolateFromNumber;
  const animator = detectAnimationFromOptions(options);
  if ((_c = (_b = animator).needsInterpolation) === null || _c === void 0 ? void 0 : _c.call(_b, from, to)) {
    interpolateFromNumber = interpolate([0, 100], [from, to], {
      clamp: false
    });
    from = 0;
    to = 100;
  }
  const animation = animator(Object.assign(Object.assign({}, options), { from, to }));
  function repeat() {
    repeatCount++;
    if (repeatType === "reverse") {
      isForwardPlayback = repeatCount % 2 === 0;
      elapsed = reverseElapsed(elapsed, computedDuration, repeatDelay, isForwardPlayback);
    } else {
      elapsed = loopElapsed(elapsed, computedDuration, repeatDelay);
      if (repeatType === "mirror")
        animation.flipTarget();
    }
    isComplete = false;
    onRepeat && onRepeat();
  }
  function complete() {
    driverControls.stop();
    onComplete && onComplete();
  }
  function update(delta) {
    if (!isForwardPlayback)
      delta = -delta;
    elapsed += delta;
    if (!isComplete) {
      const state = animation.next(Math.max(0, elapsed));
      latest = state.value;
      if (interpolateFromNumber)
        latest = interpolateFromNumber(latest);
      isComplete = isForwardPlayback ? state.done : elapsed <= 0;
    }
    onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(latest);
    if (isComplete) {
      if (repeatCount === 0)
        computedDuration !== null && computedDuration !== void 0 ? computedDuration : computedDuration = elapsed;
      if (repeatCount < repeatMax) {
        hasRepeatDelayElapsed(elapsed, computedDuration, repeatDelay, isForwardPlayback) && repeat();
      } else {
        complete();
      }
    }
  }
  function play() {
    onPlay === null || onPlay === void 0 ? void 0 : onPlay();
    driverControls = driver(update);
    driverControls.start();
  }
  autoplay && play();
  return {
    stop: () => {
      onStop === null || onStop === void 0 ? void 0 : onStop();
      driverControls.stop();
    }
  };
}
function velocityPerSecond(velocity, frameDuration) {
  return frameDuration ? velocity * (1e3 / frameDuration) : 0;
}
function inertia({ from = 0, velocity = 0, min, max, power = 0.8, timeConstant = 750, bounceStiffness = 500, bounceDamping = 10, restDelta = 1, modifyTarget, driver, onUpdate, onComplete, onStop }) {
  let currentAnimation;
  function isOutOfBounds(v2) {
    return min !== void 0 && v2 < min || max !== void 0 && v2 > max;
  }
  function boundaryNearest(v2) {
    if (min === void 0)
      return max;
    if (max === void 0)
      return min;
    return Math.abs(min - v2) < Math.abs(max - v2) ? min : max;
  }
  function startAnimation2(options) {
    currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.stop();
    currentAnimation = animate$1(Object.assign(Object.assign({}, options), {
      driver,
      onUpdate: (v2) => {
        var _a;
        onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(v2);
        (_a = options.onUpdate) === null || _a === void 0 ? void 0 : _a.call(options, v2);
      },
      onComplete,
      onStop
    }));
  }
  function startSpring(options) {
    startAnimation2(Object.assign({ type: "spring", stiffness: bounceStiffness, damping: bounceDamping, restDelta }, options));
  }
  if (isOutOfBounds(from)) {
    startSpring({ from, velocity, to: boundaryNearest(from) });
  } else {
    let target = power * velocity + from;
    if (typeof modifyTarget !== "undefined")
      target = modifyTarget(target);
    const boundary = boundaryNearest(target);
    const heading2 = boundary === min ? -1 : 1;
    let prev;
    let current;
    const checkBoundary = (v2) => {
      prev = current;
      current = v2;
      velocity = velocityPerSecond(v2 - prev, getFrameData().delta);
      if (heading2 === 1 && v2 > boundary || heading2 === -1 && v2 < boundary) {
        startSpring({ from: v2, to: boundary, velocity });
      }
    };
    startAnimation2({
      type: "decay",
      from,
      velocity,
      timeConstant,
      power,
      restDelta,
      modifyTarget,
      onUpdate: isOutOfBounds(target) ? checkBoundary : void 0
    });
  }
  return {
    stop: () => currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.stop()
  };
}
const isPoint = (point2) => point2.hasOwnProperty("x") && point2.hasOwnProperty("y");
const isPoint3D = (point2) => isPoint(point2) && point2.hasOwnProperty("z");
const distance1D = (a2, b2) => Math.abs(a2 - b2);
function distance(a2, b2) {
  if (isNum(a2) && isNum(b2)) {
    return distance1D(a2, b2);
  } else if (isPoint(a2) && isPoint(b2)) {
    const xDelta = distance1D(a2.x, b2.x);
    const yDelta = distance1D(a2.y, b2.y);
    const zDelta = isPoint3D(a2) && isPoint3D(b2) ? distance1D(a2.z, b2.z) : 0;
    return Math.sqrt(Math.pow(xDelta, 2) + Math.pow(yDelta, 2) + Math.pow(zDelta, 2));
  }
}
const a = (a1, a2) => 1 - 3 * a2 + 3 * a1;
const b$1 = (a1, a2) => 3 * a2 - 6 * a1;
const c$1 = (a1) => 3 * a1;
const calcBezier = (t2, a1, a2) => ((a(a1, a2) * t2 + b$1(a1, a2)) * t2 + c$1(a1)) * t2;
const getSlope = (t2, a1, a2) => 3 * a(a1, a2) * t2 * t2 + 2 * b$1(a1, a2) * t2 + c$1(a1);
const subdivisionPrecision = 1e-7;
const subdivisionMaxIterations = 10;
function binarySubdivide(aX, aA, aB, mX1, mX2) {
  let currentX;
  let currentT;
  let i2 = 0;
  do {
    currentT = aA + (aB - aA) / 2;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > subdivisionPrecision && ++i2 < subdivisionMaxIterations);
  return currentT;
}
const newtonIterations = 8;
const newtonMinSlope = 1e-3;
function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
  for (let i2 = 0; i2 < newtonIterations; ++i2) {
    const currentSlope = getSlope(aGuessT, mX1, mX2);
    if (currentSlope === 0) {
      return aGuessT;
    }
    const currentX = calcBezier(aGuessT, mX1, mX2) - aX;
    aGuessT -= currentX / currentSlope;
  }
  return aGuessT;
}
const kSplineTableSize = 11;
const kSampleStepSize = 1 / (kSplineTableSize - 1);
function cubicBezier(mX1, mY1, mX2, mY2) {
  if (mX1 === mY1 && mX2 === mY2)
    return linear;
  const sampleValues = new Float32Array(kSplineTableSize);
  for (let i2 = 0; i2 < kSplineTableSize; ++i2) {
    sampleValues[i2] = calcBezier(i2 * kSampleStepSize, mX1, mX2);
  }
  function getTForX(aX) {
    let intervalStart = 0;
    let currentSample = 1;
    const lastSample = kSplineTableSize - 1;
    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }
    --currentSample;
    const dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    const guessForT = intervalStart + dist * kSampleStepSize;
    const initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= newtonMinSlope) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }
  return (t2) => t2 === 0 || t2 === 1 ? t2 : calcBezier(getTForX(t2), mY1, mY2);
}
function addUniqueItem(arr, item) {
  arr.indexOf(item) === -1 && arr.push(item);
}
function removeItem(arr, item) {
  var index2 = arr.indexOf(item);
  index2 > -1 && arr.splice(index2, 1);
}
var SubscriptionManager = function() {
  function SubscriptionManager2() {
    this.subscriptions = [];
  }
  SubscriptionManager2.prototype.add = function(handler) {
    var _this = this;
    addUniqueItem(this.subscriptions, handler);
    return function() {
      return removeItem(_this.subscriptions, handler);
    };
  };
  SubscriptionManager2.prototype.notify = function(a2, b2, c2) {
    var numSubscriptions = this.subscriptions.length;
    if (!numSubscriptions)
      return;
    if (numSubscriptions === 1) {
      this.subscriptions[0](a2, b2, c2);
    } else {
      for (var i2 = 0; i2 < numSubscriptions; i2++) {
        var handler = this.subscriptions[i2];
        handler && handler(a2, b2, c2);
      }
    }
  };
  SubscriptionManager2.prototype.getSize = function() {
    return this.subscriptions.length;
  };
  SubscriptionManager2.prototype.clear = function() {
    this.subscriptions.length = 0;
  };
  return SubscriptionManager2;
}();
var isFloat = function(value) {
  return !isNaN(parseFloat(value));
};
var MotionValue = function() {
  function MotionValue2(init) {
    var _this = this;
    this.version = "6.3.11";
    this.timeDelta = 0;
    this.lastUpdated = 0;
    this.updateSubscribers = new SubscriptionManager();
    this.velocityUpdateSubscribers = new SubscriptionManager();
    this.renderSubscribers = new SubscriptionManager();
    this.canTrackVelocity = false;
    this.updateAndNotify = function(v2, render) {
      if (render === void 0) {
        render = true;
      }
      _this.prev = _this.current;
      _this.current = v2;
      var _a = getFrameData(), delta = _a.delta, timestamp = _a.timestamp;
      if (_this.lastUpdated !== timestamp) {
        _this.timeDelta = delta;
        _this.lastUpdated = timestamp;
        sync.postRender(_this.scheduleVelocityCheck);
      }
      if (_this.prev !== _this.current) {
        _this.updateSubscribers.notify(_this.current);
      }
      if (_this.velocityUpdateSubscribers.getSize()) {
        _this.velocityUpdateSubscribers.notify(_this.getVelocity());
      }
      if (render) {
        _this.renderSubscribers.notify(_this.current);
      }
    };
    this.scheduleVelocityCheck = function() {
      return sync.postRender(_this.velocityCheck);
    };
    this.velocityCheck = function(_a) {
      var timestamp = _a.timestamp;
      if (timestamp !== _this.lastUpdated) {
        _this.prev = _this.current;
        _this.velocityUpdateSubscribers.notify(_this.getVelocity());
      }
    };
    this.hasAnimated = false;
    this.prev = this.current = init;
    this.canTrackVelocity = isFloat(this.current);
  }
  MotionValue2.prototype.onChange = function(subscription) {
    return this.updateSubscribers.add(subscription);
  };
  MotionValue2.prototype.clearListeners = function() {
    this.updateSubscribers.clear();
  };
  MotionValue2.prototype.onRenderRequest = function(subscription) {
    subscription(this.get());
    return this.renderSubscribers.add(subscription);
  };
  MotionValue2.prototype.attach = function(passiveEffect) {
    this.passiveEffect = passiveEffect;
  };
  MotionValue2.prototype.set = function(v2, render) {
    if (render === void 0) {
      render = true;
    }
    if (!render || !this.passiveEffect) {
      this.updateAndNotify(v2, render);
    } else {
      this.passiveEffect(v2, this.updateAndNotify);
    }
  };
  MotionValue2.prototype.get = function() {
    return this.current;
  };
  MotionValue2.prototype.getPrevious = function() {
    return this.prev;
  };
  MotionValue2.prototype.getVelocity = function() {
    return this.canTrackVelocity ? velocityPerSecond(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0;
  };
  MotionValue2.prototype.start = function(animation) {
    var _this = this;
    this.stop();
    return new Promise(function(resolve) {
      _this.hasAnimated = true;
      _this.stopAnimation = animation(resolve);
    }).then(function() {
      return _this.clearAnimation();
    });
  };
  MotionValue2.prototype.stop = function() {
    if (this.stopAnimation)
      this.stopAnimation();
    this.clearAnimation();
  };
  MotionValue2.prototype.isAnimating = function() {
    return !!this.stopAnimation;
  };
  MotionValue2.prototype.clearAnimation = function() {
    this.stopAnimation = null;
  };
  MotionValue2.prototype.destroy = function() {
    this.updateSubscribers.clear();
    this.renderSubscribers.clear();
    this.stop();
  };
  return MotionValue2;
}();
function motionValue(init) {
  return new MotionValue(init);
}
var isMotionValue = function(value) {
  return Boolean(value !== null && typeof value === "object" && value.getVelocity);
};
var secondsToMilliseconds = function(seconds) {
  return seconds * 1e3;
};
var easingLookup = {
  linear,
  easeIn,
  easeInOut,
  easeOut,
  circIn,
  circInOut,
  circOut,
  backIn,
  backInOut,
  backOut,
  anticipate,
  bounceIn,
  bounceInOut,
  bounceOut
};
var easingDefinitionToFunction = function(definition2) {
  if (Array.isArray(definition2)) {
    invariant(definition2.length === 4);
    var _a = __read(definition2, 4), x1 = _a[0], y1 = _a[1], x2 = _a[2], y2 = _a[3];
    return cubicBezier(x1, y1, x2, y2);
  } else if (typeof definition2 === "string") {
    return easingLookup[definition2];
  }
  return definition2;
};
var isEasingArray = function(ease) {
  return Array.isArray(ease) && typeof ease[0] !== "number";
};
var isAnimatable = function(key, value) {
  if (key === "zIndex")
    return false;
  if (typeof value === "number" || Array.isArray(value))
    return true;
  if (typeof value === "string" && complex.test(value) && !value.startsWith("url(")) {
    return true;
  }
  return false;
};
var isKeyframesTarget = function(v2) {
  return Array.isArray(v2);
};
var underDampedSpring = function() {
  return {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
  };
};
var criticallyDampedSpring = function(to) {
  return {
    type: "spring",
    stiffness: 550,
    damping: to === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
  };
};
var linearTween = function() {
  return {
    type: "keyframes",
    ease: "linear",
    duration: 0.3
  };
};
var keyframes = function(values) {
  return {
    type: "keyframes",
    duration: 0.8,
    values
  };
};
var defaultTransitions = {
  x: underDampedSpring,
  y: underDampedSpring,
  z: underDampedSpring,
  rotate: underDampedSpring,
  rotateX: underDampedSpring,
  rotateY: underDampedSpring,
  rotateZ: underDampedSpring,
  scaleX: criticallyDampedSpring,
  scaleY: criticallyDampedSpring,
  scale: criticallyDampedSpring,
  opacity: linearTween,
  backgroundColor: linearTween,
  color: linearTween,
  default: criticallyDampedSpring
};
var getDefaultTransition = function(valueKey, to) {
  var transitionFactory;
  if (isKeyframesTarget(to)) {
    transitionFactory = keyframes;
  } else {
    transitionFactory = defaultTransitions[valueKey] || defaultTransitions.default;
  }
  return __assign({ to }, transitionFactory(to));
};
var int = __assign(__assign({}, number$1), { transform: Math.round });
var numberValueTypes = {
  borderWidth: px,
  borderTopWidth: px,
  borderRightWidth: px,
  borderBottomWidth: px,
  borderLeftWidth: px,
  borderRadius: px,
  radius: px,
  borderTopLeftRadius: px,
  borderTopRightRadius: px,
  borderBottomRightRadius: px,
  borderBottomLeftRadius: px,
  width: px,
  maxWidth: px,
  height: px,
  maxHeight: px,
  size: px,
  top: px,
  right: px,
  bottom: px,
  left: px,
  padding: px,
  paddingTop: px,
  paddingRight: px,
  paddingBottom: px,
  paddingLeft: px,
  margin: px,
  marginTop: px,
  marginRight: px,
  marginBottom: px,
  marginLeft: px,
  rotate: degrees,
  rotateX: degrees,
  rotateY: degrees,
  rotateZ: degrees,
  scale,
  scaleX: scale,
  scaleY: scale,
  scaleZ: scale,
  skew: degrees,
  skewX: degrees,
  skewY: degrees,
  distance: px,
  translateX: px,
  translateY: px,
  translateZ: px,
  x: px,
  y: px,
  z: px,
  perspective: px,
  transformPerspective: px,
  opacity: alpha,
  originX: progressPercentage,
  originY: progressPercentage,
  originZ: px,
  zIndex: int,
  fillOpacity: alpha,
  strokeOpacity: alpha,
  numOctaves: int
};
var defaultValueTypes = __assign(__assign({}, numberValueTypes), {
  color: color$2,
  backgroundColor: color$2,
  outlineColor: color$2,
  fill: color$2,
  stroke: color$2,
  borderColor: color$2,
  borderTopColor: color$2,
  borderRightColor: color$2,
  borderBottomColor: color$2,
  borderLeftColor: color$2,
  filter,
  WebkitFilter: filter
});
var getDefaultValueType = function(key) {
  return defaultValueTypes[key];
};
function getAnimatableNone(key, value) {
  var _a;
  var defaultValueType = getDefaultValueType(key);
  if (defaultValueType !== filter)
    defaultValueType = complex;
  return (_a = defaultValueType.getAnimatableNone) === null || _a === void 0 ? void 0 : _a.call(defaultValueType, value);
}
var instantAnimationState = {
  current: false
};
var isCustomValue = function(v2) {
  return Boolean(v2 && typeof v2 === "object" && v2.mix && v2.toValue);
};
var resolveFinalValueInKeyframes = function(v2) {
  return isKeyframesTarget(v2) ? v2[v2.length - 1] || 0 : v2;
};
function isTransitionDefined(_a) {
  _a.when;
  _a.delay;
  _a.delayChildren;
  _a.staggerChildren;
  _a.staggerDirection;
  _a.repeat;
  _a.repeatType;
  _a.repeatDelay;
  _a.from;
  var transition = __rest(_a, ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from"]);
  return !!Object.keys(transition).length;
}
function convertTransitionToAnimationOptions(_a) {
  var ease = _a.ease, times = _a.times, yoyo = _a.yoyo, flip = _a.flip, loop = _a.loop, transition = __rest(_a, ["ease", "times", "yoyo", "flip", "loop"]);
  var options = __assign({}, transition);
  if (times)
    options["offset"] = times;
  if (transition.duration)
    options["duration"] = secondsToMilliseconds(transition.duration);
  if (transition.repeatDelay)
    options.repeatDelay = secondsToMilliseconds(transition.repeatDelay);
  if (ease) {
    options["ease"] = isEasingArray(ease) ? ease.map(easingDefinitionToFunction) : easingDefinitionToFunction(ease);
  }
  if (transition.type === "tween")
    options.type = "keyframes";
  if (yoyo || loop || flip) {
    if (yoyo) {
      options.repeatType = "reverse";
    } else if (loop) {
      options.repeatType = "loop";
    } else if (flip) {
      options.repeatType = "mirror";
    }
    options.repeat = loop || yoyo || flip || transition.repeat;
  }
  if (transition.type !== "spring")
    options.type = "keyframes";
  return options;
}
function getDelayFromTransition(transition, key) {
  var _a, _b;
  var valueTransition = getValueTransition(transition, key) || {};
  return (_b = (_a = valueTransition.delay) !== null && _a !== void 0 ? _a : transition.delay) !== null && _b !== void 0 ? _b : 0;
}
function hydrateKeyframes(options) {
  if (Array.isArray(options.to) && options.to[0] === null) {
    options.to = __spreadArray([], __read(options.to), false);
    options.to[0] = options.from;
  }
  return options;
}
function getPopmotionAnimationOptions(transition, options, key) {
  var _a;
  if (Array.isArray(options.to)) {
    (_a = transition.duration) !== null && _a !== void 0 ? _a : transition.duration = 0.8;
  }
  hydrateKeyframes(options);
  if (!isTransitionDefined(transition)) {
    transition = __assign(__assign({}, transition), getDefaultTransition(key, options.to));
  }
  return __assign(__assign({}, options), convertTransitionToAnimationOptions(transition));
}
function getAnimation(key, value, target, transition, onComplete) {
  var _a;
  var valueTransition = getValueTransition(transition, key);
  var origin = (_a = valueTransition.from) !== null && _a !== void 0 ? _a : value.get();
  var isTargetAnimatable = isAnimatable(key, target);
  if (origin === "none" && isTargetAnimatable && typeof target === "string") {
    origin = getAnimatableNone(key, target);
  } else if (isZero(origin) && typeof target === "string") {
    origin = getZeroUnit(target);
  } else if (!Array.isArray(target) && isZero(target) && typeof origin === "string") {
    target = getZeroUnit(origin);
  }
  var isOriginAnimatable = isAnimatable(key, origin);
  function start() {
    var options = {
      from: origin,
      to: target,
      velocity: value.getVelocity(),
      onComplete,
      onUpdate: function(v2) {
        return value.set(v2);
      }
    };
    return valueTransition.type === "inertia" || valueTransition.type === "decay" ? inertia(__assign(__assign({}, options), valueTransition)) : animate$1(__assign(__assign({}, getPopmotionAnimationOptions(valueTransition, options, key)), { onUpdate: function(v2) {
      var _a2;
      options.onUpdate(v2);
      (_a2 = valueTransition.onUpdate) === null || _a2 === void 0 ? void 0 : _a2.call(valueTransition, v2);
    }, onComplete: function() {
      var _a2;
      options.onComplete();
      (_a2 = valueTransition.onComplete) === null || _a2 === void 0 ? void 0 : _a2.call(valueTransition);
    } }));
  }
  function set() {
    var _a2, _b;
    var finalTarget = resolveFinalValueInKeyframes(target);
    value.set(finalTarget);
    onComplete();
    (_a2 = valueTransition === null || valueTransition === void 0 ? void 0 : valueTransition.onUpdate) === null || _a2 === void 0 ? void 0 : _a2.call(valueTransition, finalTarget);
    (_b = valueTransition === null || valueTransition === void 0 ? void 0 : valueTransition.onComplete) === null || _b === void 0 ? void 0 : _b.call(valueTransition);
    return { stop: function() {
    } };
  }
  return !isOriginAnimatable || !isTargetAnimatable || valueTransition.type === false ? set : start;
}
function isZero(value) {
  return value === 0 || typeof value === "string" && parseFloat(value) === 0 && value.indexOf(" ") === -1;
}
function getZeroUnit(potentialUnitType) {
  return typeof potentialUnitType === "number" ? 0 : getAnimatableNone("", potentialUnitType);
}
function getValueTransition(transition, key) {
  return transition[key] || transition["default"] || transition;
}
function startAnimation(key, value, target, transition) {
  if (transition === void 0) {
    transition = {};
  }
  if (instantAnimationState.current) {
    transition = { type: false };
  }
  return value.start(function(onComplete) {
    var delayTimer;
    var controls;
    var animation = getAnimation(key, value, target, transition, onComplete);
    var delay = getDelayFromTransition(transition, key);
    var start = function() {
      return controls = animation();
    };
    if (delay) {
      delayTimer = window.setTimeout(start, secondsToMilliseconds(delay));
    } else {
      start();
    }
    return function() {
      clearTimeout(delayTimer);
      controls === null || controls === void 0 ? void 0 : controls.stop();
    };
  });
}
function animate(from, to, transition) {
  if (transition === void 0) {
    transition = {};
  }
  var value = isMotionValue(from) ? from : motionValue(from);
  startAnimation("", value, to, transition);
  return {
    stop: function() {
      return value.stop();
    },
    isAnimating: function() {
      return value.isAnimating();
    }
  };
}
var borders = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"];
var numBorders = borders.length;
var asNumber = function(value) {
  return typeof value === "string" ? parseFloat(value) : value;
};
var isPx = function(value) {
  return typeof value === "number" || px.test(value);
};
function mixValues(target, follow, lead, progress2, shouldCrossfadeOpacity, isOnlyMember) {
  var _a, _b, _c, _d;
  if (shouldCrossfadeOpacity) {
    target.opacity = mix(0, (_a = lead.opacity) !== null && _a !== void 0 ? _a : 1, easeCrossfadeIn(progress2));
    target.opacityExit = mix((_b = follow.opacity) !== null && _b !== void 0 ? _b : 1, 0, easeCrossfadeOut(progress2));
  } else if (isOnlyMember) {
    target.opacity = mix((_c = follow.opacity) !== null && _c !== void 0 ? _c : 1, (_d = lead.opacity) !== null && _d !== void 0 ? _d : 1, progress2);
  }
  for (var i2 = 0; i2 < numBorders; i2++) {
    var borderLabel = "border".concat(borders[i2], "Radius");
    var followRadius = getRadius(follow, borderLabel);
    var leadRadius = getRadius(lead, borderLabel);
    if (followRadius === void 0 && leadRadius === void 0)
      continue;
    followRadius || (followRadius = 0);
    leadRadius || (leadRadius = 0);
    var canMix = followRadius === 0 || leadRadius === 0 || isPx(followRadius) === isPx(leadRadius);
    if (canMix) {
      target[borderLabel] = Math.max(mix(asNumber(followRadius), asNumber(leadRadius), progress2), 0);
      if (percent.test(leadRadius) || percent.test(followRadius)) {
        target[borderLabel] += "%";
      }
    } else {
      target[borderLabel] = leadRadius;
    }
  }
  if (follow.rotate || lead.rotate) {
    target.rotate = mix(follow.rotate || 0, lead.rotate || 0, progress2);
  }
}
function getRadius(values, radiusName) {
  var _a;
  return (_a = values[radiusName]) !== null && _a !== void 0 ? _a : values.borderRadius;
}
var easeCrossfadeIn = compress(0, 0.5, circOut);
var easeCrossfadeOut = compress(0.5, 0.95, linear);
function compress(min, max, easing) {
  return function(p2) {
    if (p2 < min)
      return 0;
    if (p2 > max)
      return 1;
    return easing(progress(min, max, p2));
  };
}
function copyAxisInto(axis, originAxis) {
  axis.min = originAxis.min;
  axis.max = originAxis.max;
}
function copyBoxInto(box, originBox) {
  copyAxisInto(box.x, originBox.x);
  copyAxisInto(box.y, originBox.y);
}
function isIdentityScale(scale2) {
  return scale2 === void 0 || scale2 === 1;
}
function hasScale(_a) {
  var scale2 = _a.scale, scaleX = _a.scaleX, scaleY = _a.scaleY;
  return !isIdentityScale(scale2) || !isIdentityScale(scaleX) || !isIdentityScale(scaleY);
}
function hasTransform(values) {
  return hasScale(values) || hasTranslate(values.x) || hasTranslate(values.y) || values.z || values.rotate || values.rotateX || values.rotateY;
}
function hasTranslate(value) {
  return value && value !== "0%";
}
function scalePoint(point2, scale2, originPoint) {
  var distanceFromOrigin = point2 - originPoint;
  var scaled = scale2 * distanceFromOrigin;
  return originPoint + scaled;
}
function applyPointDelta(point2, translate, scale2, originPoint, boxScale) {
  if (boxScale !== void 0) {
    point2 = scalePoint(point2, boxScale, originPoint);
  }
  return scalePoint(point2, scale2, originPoint) + translate;
}
function applyAxisDelta(axis, translate, scale2, originPoint, boxScale) {
  if (translate === void 0) {
    translate = 0;
  }
  if (scale2 === void 0) {
    scale2 = 1;
  }
  axis.min = applyPointDelta(axis.min, translate, scale2, originPoint, boxScale);
  axis.max = applyPointDelta(axis.max, translate, scale2, originPoint, boxScale);
}
function applyBoxDelta(box, _a) {
  var x2 = _a.x, y2 = _a.y;
  applyAxisDelta(box.x, x2.translate, x2.scale, x2.originPoint);
  applyAxisDelta(box.y, y2.translate, y2.scale, y2.originPoint);
}
function applyTreeDeltas(box, treeScale, treePath, isSharedTransition) {
  var _a, _b;
  if (isSharedTransition === void 0) {
    isSharedTransition = false;
  }
  var treeLength = treePath.length;
  if (!treeLength)
    return;
  treeScale.x = treeScale.y = 1;
  var node;
  var delta;
  for (var i2 = 0; i2 < treeLength; i2++) {
    node = treePath[i2];
    delta = node.projectionDelta;
    if (((_b = (_a = node.instance) === null || _a === void 0 ? void 0 : _a.style) === null || _b === void 0 ? void 0 : _b.display) === "contents")
      continue;
    if (isSharedTransition && node.options.layoutScroll && node.scroll && node !== node.root) {
      transformBox(box, { x: -node.scroll.x, y: -node.scroll.y });
    }
    if (delta) {
      treeScale.x *= delta.x.scale;
      treeScale.y *= delta.y.scale;
      applyBoxDelta(box, delta);
    }
    if (isSharedTransition && hasTransform(node.latestValues)) {
      transformBox(box, node.latestValues);
    }
  }
}
function translateAxis(axis, distance2) {
  axis.min = axis.min + distance2;
  axis.max = axis.max + distance2;
}
function transformAxis(axis, transforms, _a) {
  var _b = __read(_a, 3), key = _b[0], scaleKey = _b[1], originKey = _b[2];
  var axisOrigin = transforms[originKey] !== void 0 ? transforms[originKey] : 0.5;
  var originPoint = mix(axis.min, axis.max, axisOrigin);
  applyAxisDelta(axis, transforms[key], transforms[scaleKey], originPoint, transforms.scale);
}
var xKeys$1 = ["x", "scaleX", "originX"];
var yKeys$1 = ["y", "scaleY", "originY"];
function transformBox(box, transform) {
  transformAxis(box.x, transform, xKeys$1);
  transformAxis(box.y, transform, yKeys$1);
}
function calcLength(axis) {
  return axis.max - axis.min;
}
function isNear(value, target, maxDistance) {
  if (target === void 0) {
    target = 0;
  }
  if (maxDistance === void 0) {
    maxDistance = 0.01;
  }
  return distance(value, target) < maxDistance;
}
function calcAxisDelta(delta, source, target, origin) {
  if (origin === void 0) {
    origin = 0.5;
  }
  delta.origin = origin;
  delta.originPoint = mix(source.min, source.max, delta.origin);
  delta.scale = calcLength(target) / calcLength(source);
  if (isNear(delta.scale, 1, 1e-4) || isNaN(delta.scale))
    delta.scale = 1;
  delta.translate = mix(target.min, target.max, delta.origin) - delta.originPoint;
  if (isNear(delta.translate) || isNaN(delta.translate))
    delta.translate = 0;
}
function calcBoxDelta(delta, source, target, origin) {
  calcAxisDelta(delta.x, source.x, target.x, origin === null || origin === void 0 ? void 0 : origin.originX);
  calcAxisDelta(delta.y, source.y, target.y, origin === null || origin === void 0 ? void 0 : origin.originY);
}
function calcRelativeAxis(target, relative, parent) {
  target.min = parent.min + relative.min;
  target.max = target.min + calcLength(relative);
}
function calcRelativeBox(target, relative, parent) {
  calcRelativeAxis(target.x, relative.x, parent.x);
  calcRelativeAxis(target.y, relative.y, parent.y);
}
function calcRelativeAxisPosition(target, layout, parent) {
  target.min = layout.min - parent.min;
  target.max = target.min + calcLength(layout);
}
function calcRelativePosition(target, layout, parent) {
  calcRelativeAxisPosition(target.x, layout.x, parent.x);
  calcRelativeAxisPosition(target.y, layout.y, parent.y);
}
function removePointDelta(point2, translate, scale2, originPoint, boxScale) {
  point2 -= translate;
  point2 = scalePoint(point2, 1 / scale2, originPoint);
  if (boxScale !== void 0) {
    point2 = scalePoint(point2, 1 / boxScale, originPoint);
  }
  return point2;
}
function removeAxisDelta(axis, translate, scale2, origin, boxScale, originAxis, sourceAxis) {
  if (translate === void 0) {
    translate = 0;
  }
  if (scale2 === void 0) {
    scale2 = 1;
  }
  if (origin === void 0) {
    origin = 0.5;
  }
  if (originAxis === void 0) {
    originAxis = axis;
  }
  if (sourceAxis === void 0) {
    sourceAxis = axis;
  }
  if (percent.test(translate)) {
    translate = parseFloat(translate);
    var relativeProgress = mix(sourceAxis.min, sourceAxis.max, translate / 100);
    translate = relativeProgress - sourceAxis.min;
  }
  if (typeof translate !== "number")
    return;
  var originPoint = mix(originAxis.min, originAxis.max, origin);
  if (axis === originAxis)
    originPoint -= translate;
  axis.min = removePointDelta(axis.min, translate, scale2, originPoint, boxScale);
  axis.max = removePointDelta(axis.max, translate, scale2, originPoint, boxScale);
}
function removeAxisTransforms(axis, transforms, _a, origin, sourceAxis) {
  var _b = __read(_a, 3), key = _b[0], scaleKey = _b[1], originKey = _b[2];
  removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale, origin, sourceAxis);
}
var xKeys = ["x", "scaleX", "originX"];
var yKeys = ["y", "scaleY", "originY"];
function removeBoxTransforms(box, transforms, originBox, sourceBox) {
  removeAxisTransforms(box.x, transforms, xKeys, originBox === null || originBox === void 0 ? void 0 : originBox.x, sourceBox === null || sourceBox === void 0 ? void 0 : sourceBox.x);
  removeAxisTransforms(box.y, transforms, yKeys, originBox === null || originBox === void 0 ? void 0 : originBox.y, sourceBox === null || sourceBox === void 0 ? void 0 : sourceBox.y);
}
var createAxisDelta = function() {
  return {
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
  };
};
var createDelta = function() {
  return {
    x: createAxisDelta(),
    y: createAxisDelta()
  };
};
var createAxis = function() {
  return { min: 0, max: 0 };
};
var createBox = function() {
  return {
    x: createAxis(),
    y: createAxis()
  };
};
function isAxisDeltaZero(delta) {
  return delta.translate === 0 && delta.scale === 1;
}
function isDeltaZero(delta) {
  return isAxisDeltaZero(delta.x) && isAxisDeltaZero(delta.y);
}
function boxEquals(a2, b2) {
  return a2.x.min === b2.x.min && a2.x.max === b2.x.max && a2.y.min === b2.y.min && a2.y.max === b2.y.max;
}
var NodeStack = function() {
  function NodeStack2() {
    this.members = [];
  }
  NodeStack2.prototype.add = function(node) {
    addUniqueItem(this.members, node);
    node.scheduleRender();
  };
  NodeStack2.prototype.remove = function(node) {
    removeItem(this.members, node);
    if (node === this.prevLead) {
      this.prevLead = void 0;
    }
    if (node === this.lead) {
      var prevLead = this.members[this.members.length - 1];
      if (prevLead) {
        this.promote(prevLead);
      }
    }
  };
  NodeStack2.prototype.relegate = function(node) {
    var indexOfNode = this.members.findIndex(function(member2) {
      return node === member2;
    });
    if (indexOfNode === 0)
      return false;
    var prevLead;
    for (var i2 = indexOfNode; i2 >= 0; i2--) {
      var member = this.members[i2];
      if (member.isPresent !== false) {
        prevLead = member;
        break;
      }
    }
    if (prevLead) {
      this.promote(prevLead);
      return true;
    } else {
      return false;
    }
  };
  NodeStack2.prototype.promote = function(node, preserveFollowOpacity) {
    var _a;
    var prevLead = this.lead;
    if (node === prevLead)
      return;
    this.prevLead = prevLead;
    this.lead = node;
    node.show();
    if (prevLead) {
      prevLead.instance && prevLead.scheduleRender();
      node.scheduleRender();
      node.resumeFrom = prevLead;
      if (preserveFollowOpacity) {
        node.resumeFrom.preserveOpacity = true;
      }
      if (prevLead.snapshot) {
        node.snapshot = prevLead.snapshot;
        node.snapshot.latestValues = prevLead.animationValues || prevLead.latestValues;
        node.snapshot.isShared = true;
      }
      if ((_a = node.root) === null || _a === void 0 ? void 0 : _a.isUpdating) {
        node.isLayoutDirty = true;
      }
      var crossfade = node.options.crossfade;
      if (crossfade === false) {
        prevLead.hide();
      }
    }
  };
  NodeStack2.prototype.exitAnimationComplete = function() {
    this.members.forEach(function(node) {
      var _a, _b, _c, _d, _e2;
      (_b = (_a = node.options).onExitComplete) === null || _b === void 0 ? void 0 : _b.call(_a);
      (_e2 = (_c = node.resumingFrom) === null || _c === void 0 ? void 0 : (_d = _c.options).onExitComplete) === null || _e2 === void 0 ? void 0 : _e2.call(_d);
    });
  };
  NodeStack2.prototype.scheduleRender = function() {
    this.members.forEach(function(node) {
      node.instance && node.scheduleRender(false);
    });
  };
  NodeStack2.prototype.removeLeadSnapshot = function() {
    if (this.lead && this.lead.snapshot) {
      this.lead.snapshot = void 0;
    }
  };
  return NodeStack2;
}();
var scaleCorrectors = {};
function addScaleCorrector(correctors) {
  Object.assign(scaleCorrectors, correctors);
}
var identityProjection = "translate3d(0px, 0px, 0) scale(1, 1) scale(1, 1)";
function buildProjectionTransform(delta, treeScale, latestTransform) {
  var xTranslate = delta.x.translate / treeScale.x;
  var yTranslate = delta.y.translate / treeScale.y;
  var transform = "translate3d(".concat(xTranslate, "px, ").concat(yTranslate, "px, 0) ");
  transform += "scale(".concat(1 / treeScale.x, ", ").concat(1 / treeScale.y, ") ");
  if (latestTransform) {
    var rotate = latestTransform.rotate, rotateX = latestTransform.rotateX, rotateY = latestTransform.rotateY;
    if (rotate)
      transform += "rotate(".concat(rotate, "deg) ");
    if (rotateX)
      transform += "rotateX(".concat(rotateX, "deg) ");
    if (rotateY)
      transform += "rotateY(".concat(rotateY, "deg) ");
  }
  var elementScaleX = delta.x.scale * treeScale.x;
  var elementScaleY = delta.y.scale * treeScale.y;
  transform += "scale(".concat(elementScaleX, ", ").concat(elementScaleY, ")");
  return transform === identityProjection ? "none" : transform;
}
function eachAxis(callback) {
  return [callback("x"), callback("y")];
}
var transformAxes = ["", "X", "Y", "Z"];
var order$1 = ["translate", "scale", "rotate", "skew"];
var transformProps = ["transformPerspective", "x", "y", "z"];
order$1.forEach(function(operationKey) {
  return transformAxes.forEach(function(axesKey) {
    return transformProps.push(operationKey + axesKey);
  });
});
function sortTransformProps(a2, b2) {
  return transformProps.indexOf(a2) - transformProps.indexOf(b2);
}
var transformPropSet = new Set(transformProps);
function isTransformProp(key) {
  return transformPropSet.has(key);
}
var transformOriginProps = /* @__PURE__ */ new Set(["originX", "originY", "originZ"]);
function isTransformOriginProp(key) {
  return transformOriginProps.has(key);
}
var compareByDepth = function(a2, b2) {
  return a2.depth - b2.depth;
};
var FlatTree = function() {
  function FlatTree2() {
    this.children = [];
    this.isDirty = false;
  }
  FlatTree2.prototype.add = function(child) {
    addUniqueItem(this.children, child);
    this.isDirty = true;
  };
  FlatTree2.prototype.remove = function(child) {
    removeItem(this.children, child);
    this.isDirty = true;
  };
  FlatTree2.prototype.forEach = function(callback) {
    this.isDirty && this.children.sort(compareByDepth);
    this.isDirty = false;
    this.children.forEach(callback);
  };
  return FlatTree2;
}();
function resolveMotionValue(value) {
  var unwrappedValue = isMotionValue(value) ? value.get() : value;
  return isCustomValue(unwrappedValue) ? unwrappedValue.toValue() : unwrappedValue;
}
var animationTarget = 1e3;
var globalProjectionState = {
  hasAnimatedSinceResize: true,
  hasEverUpdated: false
};
function createProjectionNode(_a) {
  var attachResizeListener = _a.attachResizeListener, defaultParent = _a.defaultParent, measureScroll = _a.measureScroll, resetTransform = _a.resetTransform;
  return function() {
    function ProjectionNode(id2, latestValues, parent) {
      var _this = this;
      if (latestValues === void 0) {
        latestValues = {};
      }
      if (parent === void 0) {
        parent = defaultParent === null || defaultParent === void 0 ? void 0 : defaultParent();
      }
      this.children = /* @__PURE__ */ new Set();
      this.options = {};
      this.isTreeAnimating = false;
      this.isAnimationBlocked = false;
      this.isLayoutDirty = false;
      this.updateManuallyBlocked = false;
      this.updateBlockedByResize = false;
      this.isUpdating = false;
      this.isSVG = false;
      this.needsReset = false;
      this.shouldResetTransform = false;
      this.treeScale = { x: 1, y: 1 };
      this.eventHandlers = /* @__PURE__ */ new Map();
      this.potentialNodes = /* @__PURE__ */ new Map();
      this.checkUpdateFailed = function() {
        if (_this.isUpdating) {
          _this.isUpdating = false;
          _this.clearAllSnapshots();
        }
      };
      this.updateProjection = function() {
        _this.nodes.forEach(resolveTargetDelta);
        _this.nodes.forEach(calcProjection);
      };
      this.hasProjected = false;
      this.isVisible = true;
      this.animationProgress = 0;
      this.sharedNodes = /* @__PURE__ */ new Map();
      this.id = id2;
      this.latestValues = latestValues;
      this.root = parent ? parent.root || parent : this;
      this.path = parent ? __spreadArray(__spreadArray([], __read(parent.path), false), [parent], false) : [];
      this.parent = parent;
      this.depth = parent ? parent.depth + 1 : 0;
      id2 && this.root.registerPotentialNode(id2, this);
      for (var i2 = 0; i2 < this.path.length; i2++) {
        this.path[i2].shouldResetTransform = true;
      }
      if (this.root === this)
        this.nodes = new FlatTree();
    }
    ProjectionNode.prototype.addEventListener = function(name, handler) {
      if (!this.eventHandlers.has(name)) {
        this.eventHandlers.set(name, new SubscriptionManager());
      }
      return this.eventHandlers.get(name).add(handler);
    };
    ProjectionNode.prototype.notifyListeners = function(name) {
      var args = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
      }
      var subscriptionManager = this.eventHandlers.get(name);
      subscriptionManager === null || subscriptionManager === void 0 ? void 0 : subscriptionManager.notify.apply(subscriptionManager, __spreadArray([], __read(args), false));
    };
    ProjectionNode.prototype.hasListeners = function(name) {
      return this.eventHandlers.has(name);
    };
    ProjectionNode.prototype.registerPotentialNode = function(id2, node) {
      this.potentialNodes.set(id2, node);
    };
    ProjectionNode.prototype.mount = function(instance, isLayoutDirty) {
      var _this = this;
      var _a2;
      if (isLayoutDirty === void 0) {
        isLayoutDirty = false;
      }
      if (this.instance)
        return;
      this.isSVG = instance instanceof SVGElement && instance.tagName !== "svg";
      this.instance = instance;
      var _b = this.options, layoutId = _b.layoutId, layout = _b.layout, visualElement2 = _b.visualElement;
      if (visualElement2 && !visualElement2.getInstance()) {
        visualElement2.mount(instance);
      }
      this.root.nodes.add(this);
      (_a2 = this.parent) === null || _a2 === void 0 ? void 0 : _a2.children.add(this);
      this.id && this.root.potentialNodes.delete(this.id);
      if (isLayoutDirty && (layout || layoutId)) {
        this.isLayoutDirty = true;
      }
      if (attachResizeListener) {
        var unblockTimeout_1;
        var resizeUnblockUpdate_1 = function() {
          return _this.root.updateBlockedByResize = false;
        };
        attachResizeListener(instance, function() {
          _this.root.updateBlockedByResize = true;
          clearTimeout(unblockTimeout_1);
          unblockTimeout_1 = window.setTimeout(resizeUnblockUpdate_1, 250);
          if (globalProjectionState.hasAnimatedSinceResize) {
            globalProjectionState.hasAnimatedSinceResize = false;
            _this.nodes.forEach(finishAnimation);
          }
        });
      }
      if (layoutId) {
        this.root.registerSharedNode(layoutId, this);
      }
      if (this.options.animate !== false && visualElement2 && (layoutId || layout)) {
        this.addEventListener("didUpdate", function(_a3) {
          var _b2, _c, _d, _e2, _f;
          var delta = _a3.delta, hasLayoutChanged = _a3.hasLayoutChanged, hasRelativeTargetChanged = _a3.hasRelativeTargetChanged, newLayout = _a3.layout;
          if (_this.isTreeAnimationBlocked()) {
            _this.target = void 0;
            _this.relativeTarget = void 0;
            return;
          }
          var layoutTransition = (_c = (_b2 = _this.options.transition) !== null && _b2 !== void 0 ? _b2 : visualElement2.getDefaultTransition()) !== null && _c !== void 0 ? _c : defaultLayoutTransition;
          var _g = visualElement2.getProps(), onLayoutAnimationStart = _g.onLayoutAnimationStart, onLayoutAnimationComplete = _g.onLayoutAnimationComplete;
          var targetChanged = !_this.targetLayout || !boxEquals(_this.targetLayout, newLayout) || hasRelativeTargetChanged;
          var hasOnlyRelativeTargetChanged = !hasLayoutChanged && hasRelativeTargetChanged;
          if (((_d = _this.resumeFrom) === null || _d === void 0 ? void 0 : _d.instance) || hasOnlyRelativeTargetChanged || hasLayoutChanged && (targetChanged || !_this.currentAnimation)) {
            if (_this.resumeFrom) {
              _this.resumingFrom = _this.resumeFrom;
              _this.resumingFrom.resumingFrom = void 0;
            }
            _this.setAnimationOrigin(delta, hasOnlyRelativeTargetChanged);
            var animationOptions = __assign(__assign({}, getValueTransition(layoutTransition, "layout")), { onPlay: onLayoutAnimationStart, onComplete: onLayoutAnimationComplete });
            if (visualElement2.shouldReduceMotion) {
              animationOptions.delay = 0;
              animationOptions.type = false;
            }
            _this.startAnimation(animationOptions);
          } else {
            if (!hasLayoutChanged && _this.animationProgress === 0) {
              _this.finishAnimation();
            }
            _this.isLead() && ((_f = (_e2 = _this.options).onExitComplete) === null || _f === void 0 ? void 0 : _f.call(_e2));
          }
          _this.targetLayout = newLayout;
        });
      }
    };
    ProjectionNode.prototype.unmount = function() {
      var _a2, _b;
      this.options.layoutId && this.willUpdate();
      this.root.nodes.remove(this);
      (_a2 = this.getStack()) === null || _a2 === void 0 ? void 0 : _a2.remove(this);
      (_b = this.parent) === null || _b === void 0 ? void 0 : _b.children.delete(this);
      this.instance = void 0;
      cancelSync.preRender(this.updateProjection);
    };
    ProjectionNode.prototype.blockUpdate = function() {
      this.updateManuallyBlocked = true;
    };
    ProjectionNode.prototype.unblockUpdate = function() {
      this.updateManuallyBlocked = false;
    };
    ProjectionNode.prototype.isUpdateBlocked = function() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    };
    ProjectionNode.prototype.isTreeAnimationBlocked = function() {
      var _a2;
      return this.isAnimationBlocked || ((_a2 = this.parent) === null || _a2 === void 0 ? void 0 : _a2.isTreeAnimationBlocked()) || false;
    };
    ProjectionNode.prototype.startUpdate = function() {
      var _a2;
      if (this.isUpdateBlocked())
        return;
      this.isUpdating = true;
      (_a2 = this.nodes) === null || _a2 === void 0 ? void 0 : _a2.forEach(resetRotation);
    };
    ProjectionNode.prototype.willUpdate = function(shouldNotifyListeners) {
      var _a2, _b, _c;
      if (shouldNotifyListeners === void 0) {
        shouldNotifyListeners = true;
      }
      if (this.root.isUpdateBlocked()) {
        (_b = (_a2 = this.options).onExitComplete) === null || _b === void 0 ? void 0 : _b.call(_a2);
        return;
      }
      !this.root.isUpdating && this.root.startUpdate();
      if (this.isLayoutDirty)
        return;
      this.isLayoutDirty = true;
      for (var i2 = 0; i2 < this.path.length; i2++) {
        var node = this.path[i2];
        node.shouldResetTransform = true;
        node.updateScroll();
      }
      var _d = this.options, layoutId = _d.layoutId, layout = _d.layout;
      if (layoutId === void 0 && !layout)
        return;
      var transformTemplate = (_c = this.options.visualElement) === null || _c === void 0 ? void 0 : _c.getProps().transformTemplate;
      this.prevTransformTemplateValue = transformTemplate === null || transformTemplate === void 0 ? void 0 : transformTemplate(this.latestValues, "");
      this.updateSnapshot();
      shouldNotifyListeners && this.notifyListeners("willUpdate");
    };
    ProjectionNode.prototype.didUpdate = function() {
      var updateWasBlocked = this.isUpdateBlocked();
      if (updateWasBlocked) {
        this.unblockUpdate();
        this.clearAllSnapshots();
        this.nodes.forEach(clearMeasurements);
        return;
      }
      if (!this.isUpdating)
        return;
      this.isUpdating = false;
      if (this.potentialNodes.size) {
        this.potentialNodes.forEach(mountNodeEarly);
        this.potentialNodes.clear();
      }
      this.nodes.forEach(resetTransformStyle);
      this.nodes.forEach(updateLayout);
      this.nodes.forEach(notifyLayoutUpdate);
      this.clearAllSnapshots();
      flushSync.update();
      flushSync.preRender();
      flushSync.render();
    };
    ProjectionNode.prototype.clearAllSnapshots = function() {
      this.nodes.forEach(clearSnapshot);
      this.sharedNodes.forEach(removeLeadSnapshots);
    };
    ProjectionNode.prototype.scheduleUpdateProjection = function() {
      sync.preRender(this.updateProjection, false, true);
    };
    ProjectionNode.prototype.scheduleCheckAfterUnmount = function() {
      var _this = this;
      sync.postRender(function() {
        if (_this.isLayoutDirty) {
          _this.root.didUpdate();
        } else {
          _this.root.checkUpdateFailed();
        }
      });
    };
    ProjectionNode.prototype.updateSnapshot = function() {
      if (this.snapshot || !this.instance)
        return;
      var measured = this.measure();
      var layout = this.removeTransform(this.removeElementScroll(measured));
      roundBox(layout);
      this.snapshot = {
        measured,
        layout,
        latestValues: {}
      };
    };
    ProjectionNode.prototype.updateLayout = function() {
      var _a2;
      if (!this.instance)
        return;
      this.updateScroll();
      if (!(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty) {
        return;
      }
      if (this.resumeFrom && !this.resumeFrom.instance) {
        for (var i2 = 0; i2 < this.path.length; i2++) {
          var node = this.path[i2];
          node.updateScroll();
        }
      }
      var measured = this.measure();
      roundBox(measured);
      var prevLayout = this.layout;
      this.layout = {
        measured,
        actual: this.removeElementScroll(measured)
      };
      this.layoutCorrected = createBox();
      this.isLayoutDirty = false;
      this.projectionDelta = void 0;
      this.notifyListeners("measure", this.layout.actual);
      (_a2 = this.options.visualElement) === null || _a2 === void 0 ? void 0 : _a2.notifyLayoutMeasure(this.layout.actual, prevLayout === null || prevLayout === void 0 ? void 0 : prevLayout.actual);
    };
    ProjectionNode.prototype.updateScroll = function() {
      if (this.options.layoutScroll && this.instance) {
        this.scroll = measureScroll(this.instance);
      }
    };
    ProjectionNode.prototype.resetTransform = function() {
      var _a2;
      if (!resetTransform)
        return;
      var isResetRequested = this.isLayoutDirty || this.shouldResetTransform;
      var hasProjection = this.projectionDelta && !isDeltaZero(this.projectionDelta);
      var transformTemplate = (_a2 = this.options.visualElement) === null || _a2 === void 0 ? void 0 : _a2.getProps().transformTemplate;
      var transformTemplateValue = transformTemplate === null || transformTemplate === void 0 ? void 0 : transformTemplate(this.latestValues, "");
      var transformTemplateHasChanged = transformTemplateValue !== this.prevTransformTemplateValue;
      if (isResetRequested && (hasProjection || hasTransform(this.latestValues) || transformTemplateHasChanged)) {
        resetTransform(this.instance, transformTemplateValue);
        this.shouldResetTransform = false;
        this.scheduleRender();
      }
    };
    ProjectionNode.prototype.measure = function() {
      var visualElement2 = this.options.visualElement;
      if (!visualElement2)
        return createBox();
      var box = visualElement2.measureViewportBox();
      var scroll = this.root.scroll;
      if (scroll) {
        translateAxis(box.x, scroll.x);
        translateAxis(box.y, scroll.y);
      }
      return box;
    };
    ProjectionNode.prototype.removeElementScroll = function(box) {
      var boxWithoutScroll = createBox();
      copyBoxInto(boxWithoutScroll, box);
      for (var i2 = 0; i2 < this.path.length; i2++) {
        var node = this.path[i2];
        var scroll_1 = node.scroll, options = node.options;
        if (node !== this.root && scroll_1 && options.layoutScroll) {
          translateAxis(boxWithoutScroll.x, scroll_1.x);
          translateAxis(boxWithoutScroll.y, scroll_1.y);
        }
      }
      return boxWithoutScroll;
    };
    ProjectionNode.prototype.applyTransform = function(box, transformOnly) {
      if (transformOnly === void 0) {
        transformOnly = false;
      }
      var withTransforms = createBox();
      copyBoxInto(withTransforms, box);
      for (var i2 = 0; i2 < this.path.length; i2++) {
        var node = this.path[i2];
        if (!transformOnly && node.options.layoutScroll && node.scroll && node !== node.root) {
          transformBox(withTransforms, {
            x: -node.scroll.x,
            y: -node.scroll.y
          });
        }
        if (!hasTransform(node.latestValues))
          continue;
        transformBox(withTransforms, node.latestValues);
      }
      if (hasTransform(this.latestValues)) {
        transformBox(withTransforms, this.latestValues);
      }
      return withTransforms;
    };
    ProjectionNode.prototype.removeTransform = function(box) {
      var _a2;
      var boxWithoutTransform = createBox();
      copyBoxInto(boxWithoutTransform, box);
      for (var i2 = 0; i2 < this.path.length; i2++) {
        var node = this.path[i2];
        if (!node.instance)
          continue;
        if (!hasTransform(node.latestValues))
          continue;
        hasScale(node.latestValues) && node.updateSnapshot();
        var sourceBox = createBox();
        var nodeBox = node.measure();
        copyBoxInto(sourceBox, nodeBox);
        removeBoxTransforms(boxWithoutTransform, node.latestValues, (_a2 = node.snapshot) === null || _a2 === void 0 ? void 0 : _a2.layout, sourceBox);
      }
      if (hasTransform(this.latestValues)) {
        removeBoxTransforms(boxWithoutTransform, this.latestValues);
      }
      return boxWithoutTransform;
    };
    ProjectionNode.prototype.setTargetDelta = function(delta) {
      this.targetDelta = delta;
      this.root.scheduleUpdateProjection();
    };
    ProjectionNode.prototype.setOptions = function(options) {
      var _a2;
      this.options = __assign(__assign(__assign({}, this.options), options), { crossfade: (_a2 = options.crossfade) !== null && _a2 !== void 0 ? _a2 : true });
    };
    ProjectionNode.prototype.clearMeasurements = function() {
      this.scroll = void 0;
      this.layout = void 0;
      this.snapshot = void 0;
      this.prevTransformTemplateValue = void 0;
      this.targetDelta = void 0;
      this.target = void 0;
      this.isLayoutDirty = false;
    };
    ProjectionNode.prototype.resolveTargetDelta = function() {
      var _a2;
      var _b = this.options, layout = _b.layout, layoutId = _b.layoutId;
      if (!this.layout || !(layout || layoutId))
        return;
      if (!this.targetDelta && !this.relativeTarget) {
        this.relativeParent = this.getClosestProjectingParent();
        if (this.relativeParent && this.relativeParent.layout) {
          this.relativeTarget = createBox();
          this.relativeTargetOrigin = createBox();
          calcRelativePosition(this.relativeTargetOrigin, this.layout.actual, this.relativeParent.layout.actual);
          copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
        }
      }
      if (!this.relativeTarget && !this.targetDelta)
        return;
      if (!this.target) {
        this.target = createBox();
        this.targetWithTransforms = createBox();
      }
      if (this.relativeTarget && this.relativeTargetOrigin && ((_a2 = this.relativeParent) === null || _a2 === void 0 ? void 0 : _a2.target)) {
        calcRelativeBox(this.target, this.relativeTarget, this.relativeParent.target);
      } else if (this.targetDelta) {
        if (Boolean(this.resumingFrom)) {
          this.target = this.applyTransform(this.layout.actual);
        } else {
          copyBoxInto(this.target, this.layout.actual);
        }
        applyBoxDelta(this.target, this.targetDelta);
      } else {
        copyBoxInto(this.target, this.layout.actual);
      }
      if (this.attemptToResolveRelativeTarget) {
        this.attemptToResolveRelativeTarget = false;
        this.relativeParent = this.getClosestProjectingParent();
        if (this.relativeParent && Boolean(this.relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !this.relativeParent.options.layoutScroll && this.relativeParent.target) {
          this.relativeTarget = createBox();
          this.relativeTargetOrigin = createBox();
          calcRelativePosition(this.relativeTargetOrigin, this.target, this.relativeParent.target);
          copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
        }
      }
    };
    ProjectionNode.prototype.getClosestProjectingParent = function() {
      if (!this.parent || hasTransform(this.parent.latestValues))
        return void 0;
      if ((this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout) {
        return this.parent;
      } else {
        return this.parent.getClosestProjectingParent();
      }
    };
    ProjectionNode.prototype.calcProjection = function() {
      var _a2;
      var _b = this.options, layout = _b.layout, layoutId = _b.layoutId;
      this.isTreeAnimating = Boolean(((_a2 = this.parent) === null || _a2 === void 0 ? void 0 : _a2.isTreeAnimating) || this.currentAnimation || this.pendingAnimation);
      if (!this.isTreeAnimating) {
        this.targetDelta = this.relativeTarget = void 0;
      }
      if (!this.layout || !(layout || layoutId))
        return;
      var lead = this.getLead();
      copyBoxInto(this.layoutCorrected, this.layout.actual);
      applyTreeDeltas(this.layoutCorrected, this.treeScale, this.path, Boolean(this.resumingFrom) || this !== lead);
      var target = lead.target;
      if (!target)
        return;
      if (!this.projectionDelta) {
        this.projectionDelta = createDelta();
        this.projectionDeltaWithTransform = createDelta();
      }
      var prevTreeScaleX = this.treeScale.x;
      var prevTreeScaleY = this.treeScale.y;
      var prevProjectionTransform = this.projectionTransform;
      calcBoxDelta(this.projectionDelta, this.layoutCorrected, target, this.latestValues);
      this.projectionTransform = buildProjectionTransform(this.projectionDelta, this.treeScale);
      if (this.projectionTransform !== prevProjectionTransform || this.treeScale.x !== prevTreeScaleX || this.treeScale.y !== prevTreeScaleY) {
        this.hasProjected = true;
        this.scheduleRender();
        this.notifyListeners("projectionUpdate", target);
      }
    };
    ProjectionNode.prototype.hide = function() {
      this.isVisible = false;
    };
    ProjectionNode.prototype.show = function() {
      this.isVisible = true;
    };
    ProjectionNode.prototype.scheduleRender = function(notifyAll) {
      var _a2, _b, _c;
      if (notifyAll === void 0) {
        notifyAll = true;
      }
      (_b = (_a2 = this.options).scheduleRender) === null || _b === void 0 ? void 0 : _b.call(_a2);
      notifyAll && ((_c = this.getStack()) === null || _c === void 0 ? void 0 : _c.scheduleRender());
      if (this.resumingFrom && !this.resumingFrom.instance) {
        this.resumingFrom = void 0;
      }
    };
    ProjectionNode.prototype.setAnimationOrigin = function(delta, hasOnlyRelativeTargetChanged) {
      var _this = this;
      var _a2;
      if (hasOnlyRelativeTargetChanged === void 0) {
        hasOnlyRelativeTargetChanged = false;
      }
      var snapshot = this.snapshot;
      var snapshotLatestValues = (snapshot === null || snapshot === void 0 ? void 0 : snapshot.latestValues) || {};
      var mixedValues = __assign({}, this.latestValues);
      var targetDelta = createDelta();
      this.relativeTarget = this.relativeTargetOrigin = void 0;
      this.attemptToResolveRelativeTarget = !hasOnlyRelativeTargetChanged;
      var relativeLayout = createBox();
      var isSharedLayoutAnimation = snapshot === null || snapshot === void 0 ? void 0 : snapshot.isShared;
      var isOnlyMember = (((_a2 = this.getStack()) === null || _a2 === void 0 ? void 0 : _a2.members.length) || 0) <= 1;
      var shouldCrossfadeOpacity = Boolean(isSharedLayoutAnimation && !isOnlyMember && this.options.crossfade === true && !this.path.some(hasOpacityCrossfade));
      this.animationProgress = 0;
      this.mixTargetDelta = function(latest) {
        var _a3;
        var progress2 = latest / 1e3;
        mixAxisDelta(targetDelta.x, delta.x, progress2);
        mixAxisDelta(targetDelta.y, delta.y, progress2);
        _this.setTargetDelta(targetDelta);
        if (_this.relativeTarget && _this.relativeTargetOrigin && _this.layout && ((_a3 = _this.relativeParent) === null || _a3 === void 0 ? void 0 : _a3.layout)) {
          calcRelativePosition(relativeLayout, _this.layout.actual, _this.relativeParent.layout.actual);
          mixBox(_this.relativeTarget, _this.relativeTargetOrigin, relativeLayout, progress2);
        }
        if (isSharedLayoutAnimation) {
          _this.animationValues = mixedValues;
          mixValues(mixedValues, snapshotLatestValues, _this.latestValues, progress2, shouldCrossfadeOpacity, isOnlyMember);
        }
        _this.root.scheduleUpdateProjection();
        _this.scheduleRender();
        _this.animationProgress = progress2;
      };
      this.mixTargetDelta(0);
    };
    ProjectionNode.prototype.startAnimation = function(options) {
      var _this = this;
      var _a2, _b;
      this.notifyListeners("animationStart");
      (_a2 = this.currentAnimation) === null || _a2 === void 0 ? void 0 : _a2.stop();
      if (this.resumingFrom) {
        (_b = this.resumingFrom.currentAnimation) === null || _b === void 0 ? void 0 : _b.stop();
      }
      if (this.pendingAnimation) {
        cancelSync.update(this.pendingAnimation);
        this.pendingAnimation = void 0;
      }
      this.pendingAnimation = sync.update(function() {
        globalProjectionState.hasAnimatedSinceResize = true;
        _this.currentAnimation = animate(0, animationTarget, __assign(__assign({}, options), { onUpdate: function(latest) {
          var _a3;
          _this.mixTargetDelta(latest);
          (_a3 = options.onUpdate) === null || _a3 === void 0 ? void 0 : _a3.call(options, latest);
        }, onComplete: function() {
          var _a3;
          (_a3 = options.onComplete) === null || _a3 === void 0 ? void 0 : _a3.call(options);
          _this.completeAnimation();
        } }));
        if (_this.resumingFrom) {
          _this.resumingFrom.currentAnimation = _this.currentAnimation;
        }
        _this.pendingAnimation = void 0;
      });
    };
    ProjectionNode.prototype.completeAnimation = function() {
      var _a2;
      if (this.resumingFrom) {
        this.resumingFrom.currentAnimation = void 0;
        this.resumingFrom.preserveOpacity = void 0;
      }
      (_a2 = this.getStack()) === null || _a2 === void 0 ? void 0 : _a2.exitAnimationComplete();
      this.resumingFrom = this.currentAnimation = this.animationValues = void 0;
      this.notifyListeners("animationComplete");
    };
    ProjectionNode.prototype.finishAnimation = function() {
      var _a2;
      if (this.currentAnimation) {
        (_a2 = this.mixTargetDelta) === null || _a2 === void 0 ? void 0 : _a2.call(this, animationTarget);
        this.currentAnimation.stop();
      }
      this.completeAnimation();
    };
    ProjectionNode.prototype.applyTransformsToTarget = function() {
      var _a2 = this.getLead(), targetWithTransforms = _a2.targetWithTransforms, target = _a2.target, layout = _a2.layout, latestValues = _a2.latestValues;
      if (!targetWithTransforms || !target || !layout)
        return;
      copyBoxInto(targetWithTransforms, target);
      transformBox(targetWithTransforms, latestValues);
      calcBoxDelta(this.projectionDeltaWithTransform, this.layoutCorrected, targetWithTransforms, latestValues);
    };
    ProjectionNode.prototype.registerSharedNode = function(layoutId, node) {
      var _a2, _b, _c;
      if (!this.sharedNodes.has(layoutId)) {
        this.sharedNodes.set(layoutId, new NodeStack());
      }
      var stack = this.sharedNodes.get(layoutId);
      stack.add(node);
      node.promote({
        transition: (_a2 = node.options.initialPromotionConfig) === null || _a2 === void 0 ? void 0 : _a2.transition,
        preserveFollowOpacity: (_c = (_b = node.options.initialPromotionConfig) === null || _b === void 0 ? void 0 : _b.shouldPreserveFollowOpacity) === null || _c === void 0 ? void 0 : _c.call(_b, node)
      });
    };
    ProjectionNode.prototype.isLead = function() {
      var stack = this.getStack();
      return stack ? stack.lead === this : true;
    };
    ProjectionNode.prototype.getLead = function() {
      var _a2;
      var layoutId = this.options.layoutId;
      return layoutId ? ((_a2 = this.getStack()) === null || _a2 === void 0 ? void 0 : _a2.lead) || this : this;
    };
    ProjectionNode.prototype.getPrevLead = function() {
      var _a2;
      var layoutId = this.options.layoutId;
      return layoutId ? (_a2 = this.getStack()) === null || _a2 === void 0 ? void 0 : _a2.prevLead : void 0;
    };
    ProjectionNode.prototype.getStack = function() {
      var layoutId = this.options.layoutId;
      if (layoutId)
        return this.root.sharedNodes.get(layoutId);
    };
    ProjectionNode.prototype.promote = function(_a2) {
      var _b = _a2 === void 0 ? {} : _a2, needsReset = _b.needsReset, transition = _b.transition, preserveFollowOpacity = _b.preserveFollowOpacity;
      var stack = this.getStack();
      if (stack)
        stack.promote(this, preserveFollowOpacity);
      if (needsReset) {
        this.projectionDelta = void 0;
        this.needsReset = true;
      }
      if (transition)
        this.setOptions({ transition });
    };
    ProjectionNode.prototype.relegate = function() {
      var stack = this.getStack();
      if (stack) {
        return stack.relegate(this);
      } else {
        return false;
      }
    };
    ProjectionNode.prototype.resetRotation = function() {
      var visualElement2 = this.options.visualElement;
      if (!visualElement2)
        return;
      var hasRotate = false;
      var resetValues = {};
      for (var i2 = 0; i2 < transformAxes.length; i2++) {
        var axis = transformAxes[i2];
        var key = "rotate" + axis;
        if (!visualElement2.getStaticValue(key)) {
          continue;
        }
        hasRotate = true;
        resetValues[key] = visualElement2.getStaticValue(key);
        visualElement2.setStaticValue(key, 0);
      }
      if (!hasRotate)
        return;
      visualElement2 === null || visualElement2 === void 0 ? void 0 : visualElement2.syncRender();
      for (var key in resetValues) {
        visualElement2.setStaticValue(key, resetValues[key]);
      }
      visualElement2.scheduleRender();
    };
    ProjectionNode.prototype.getProjectionStyles = function(styleProp) {
      var _a2, _b, _c, _d, _e2, _f;
      if (styleProp === void 0) {
        styleProp = {};
      }
      var styles = {};
      if (!this.instance || this.isSVG)
        return styles;
      if (!this.isVisible) {
        return { visibility: "hidden" };
      } else {
        styles.visibility = "";
      }
      var transformTemplate = (_a2 = this.options.visualElement) === null || _a2 === void 0 ? void 0 : _a2.getProps().transformTemplate;
      if (this.needsReset) {
        this.needsReset = false;
        styles.opacity = "";
        styles.pointerEvents = resolveMotionValue(styleProp.pointerEvents) || "";
        styles.transform = transformTemplate ? transformTemplate(this.latestValues, "") : "none";
        return styles;
      }
      var lead = this.getLead();
      if (!this.projectionDelta || !this.layout || !lead.target) {
        var emptyStyles = {};
        if (this.options.layoutId) {
          emptyStyles.opacity = (_b = this.latestValues.opacity) !== null && _b !== void 0 ? _b : 1;
          emptyStyles.pointerEvents = resolveMotionValue(styleProp.pointerEvents) || "";
        }
        if (this.hasProjected && !hasTransform(this.latestValues)) {
          emptyStyles.transform = transformTemplate ? transformTemplate({}, "") : "none";
          this.hasProjected = false;
        }
        return emptyStyles;
      }
      var valuesToRender = lead.animationValues || lead.latestValues;
      this.applyTransformsToTarget();
      styles.transform = buildProjectionTransform(this.projectionDeltaWithTransform, this.treeScale, valuesToRender);
      if (transformTemplate) {
        styles.transform = transformTemplate(valuesToRender, styles.transform);
      }
      var _g = this.projectionDelta, x2 = _g.x, y2 = _g.y;
      styles.transformOrigin = "".concat(x2.origin * 100, "% ").concat(y2.origin * 100, "% 0");
      if (lead.animationValues) {
        styles.opacity = lead === this ? (_d = (_c = valuesToRender.opacity) !== null && _c !== void 0 ? _c : this.latestValues.opacity) !== null && _d !== void 0 ? _d : 1 : this.preserveOpacity ? this.latestValues.opacity : valuesToRender.opacityExit;
      } else {
        styles.opacity = lead === this ? (_e2 = valuesToRender.opacity) !== null && _e2 !== void 0 ? _e2 : "" : (_f = valuesToRender.opacityExit) !== null && _f !== void 0 ? _f : 0;
      }
      for (var key in scaleCorrectors) {
        if (valuesToRender[key] === void 0)
          continue;
        var _h = scaleCorrectors[key], correct = _h.correct, applyTo = _h.applyTo;
        var corrected = correct(valuesToRender[key], lead);
        if (applyTo) {
          var num = applyTo.length;
          for (var i2 = 0; i2 < num; i2++) {
            styles[applyTo[i2]] = corrected;
          }
        } else {
          styles[key] = corrected;
        }
      }
      if (this.options.layoutId) {
        styles.pointerEvents = lead === this ? resolveMotionValue(styleProp.pointerEvents) || "" : "none";
      }
      return styles;
    };
    ProjectionNode.prototype.clearSnapshot = function() {
      this.resumeFrom = this.snapshot = void 0;
    };
    ProjectionNode.prototype.resetTree = function() {
      this.root.nodes.forEach(function(node) {
        var _a2;
        return (_a2 = node.currentAnimation) === null || _a2 === void 0 ? void 0 : _a2.stop();
      });
      this.root.nodes.forEach(clearMeasurements);
      this.root.sharedNodes.clear();
    };
    return ProjectionNode;
  }();
}
function updateLayout(node) {
  node.updateLayout();
}
function notifyLayoutUpdate(node) {
  var _a, _b, _c, _d;
  var snapshot = (_b = (_a = node.resumeFrom) === null || _a === void 0 ? void 0 : _a.snapshot) !== null && _b !== void 0 ? _b : node.snapshot;
  if (node.isLead() && node.layout && snapshot && node.hasListeners("didUpdate")) {
    var _e2 = node.layout, layout_1 = _e2.actual, measuredLayout = _e2.measured;
    if (node.options.animationType === "size") {
      eachAxis(function(axis) {
        var axisSnapshot = snapshot.isShared ? snapshot.measured[axis] : snapshot.layout[axis];
        var length = calcLength(axisSnapshot);
        axisSnapshot.min = layout_1[axis].min;
        axisSnapshot.max = axisSnapshot.min + length;
      });
    } else if (node.options.animationType === "position") {
      eachAxis(function(axis) {
        var axisSnapshot = snapshot.isShared ? snapshot.measured[axis] : snapshot.layout[axis];
        var length = calcLength(layout_1[axis]);
        axisSnapshot.max = axisSnapshot.min + length;
      });
    }
    var layoutDelta = createDelta();
    calcBoxDelta(layoutDelta, layout_1, snapshot.layout);
    var visualDelta = createDelta();
    if (snapshot.isShared) {
      calcBoxDelta(visualDelta, node.applyTransform(measuredLayout, true), snapshot.measured);
    } else {
      calcBoxDelta(visualDelta, layout_1, snapshot.layout);
    }
    var hasLayoutChanged = !isDeltaZero(layoutDelta);
    var hasRelativeTargetChanged = false;
    if (!node.resumeFrom) {
      node.relativeParent = node.getClosestProjectingParent();
      if (node.relativeParent && !node.relativeParent.resumeFrom) {
        var _f = node.relativeParent, parentSnapshot = _f.snapshot, parentLayout = _f.layout;
        if (parentSnapshot && parentLayout) {
          var relativeSnapshot = createBox();
          calcRelativePosition(relativeSnapshot, snapshot.layout, parentSnapshot.layout);
          var relativeLayout = createBox();
          calcRelativePosition(relativeLayout, layout_1, parentLayout.actual);
          if (!boxEquals(relativeSnapshot, relativeLayout)) {
            hasRelativeTargetChanged = true;
          }
        }
      }
    }
    node.notifyListeners("didUpdate", {
      layout: layout_1,
      snapshot,
      delta: visualDelta,
      layoutDelta,
      hasLayoutChanged,
      hasRelativeTargetChanged
    });
  } else if (node.isLead()) {
    (_d = (_c = node.options).onExitComplete) === null || _d === void 0 ? void 0 : _d.call(_c);
  }
  node.options.transition = void 0;
}
function clearSnapshot(node) {
  node.clearSnapshot();
}
function clearMeasurements(node) {
  node.clearMeasurements();
}
function resetTransformStyle(node) {
  var visualElement2 = node.options.visualElement;
  if (visualElement2 === null || visualElement2 === void 0 ? void 0 : visualElement2.getProps().onBeforeLayoutMeasure) {
    visualElement2.notifyBeforeLayoutMeasure();
  }
  node.resetTransform();
}
function finishAnimation(node) {
  node.finishAnimation();
  node.targetDelta = node.relativeTarget = node.target = void 0;
}
function resolveTargetDelta(node) {
  node.resolveTargetDelta();
}
function calcProjection(node) {
  node.calcProjection();
}
function resetRotation(node) {
  node.resetRotation();
}
function removeLeadSnapshots(stack) {
  stack.removeLeadSnapshot();
}
function mixAxisDelta(output, delta, p2) {
  output.translate = mix(delta.translate, 0, p2);
  output.scale = mix(delta.scale, 1, p2);
  output.origin = delta.origin;
  output.originPoint = delta.originPoint;
}
function mixAxis(output, from, to, p2) {
  output.min = mix(from.min, to.min, p2);
  output.max = mix(from.max, to.max, p2);
}
function mixBox(output, from, to, p2) {
  mixAxis(output.x, from.x, to.x, p2);
  mixAxis(output.y, from.y, to.y, p2);
}
function hasOpacityCrossfade(node) {
  return node.animationValues && node.animationValues.opacityExit !== void 0;
}
var defaultLayoutTransition = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
};
function mountNodeEarly(node, id2) {
  var searchNode = node.root;
  for (var i2 = node.path.length - 1; i2 >= 0; i2--) {
    if (Boolean(node.path[i2].instance)) {
      searchNode = node.path[i2];
      break;
    }
  }
  var searchElement = searchNode && searchNode !== node.root ? searchNode.instance : document;
  var element2 = searchElement.querySelector('[data-projection-id="'.concat(id2, '"]'));
  if (element2)
    node.mount(element2, true);
}
function roundAxis(axis) {
  axis.min = Math.round(axis.min);
  axis.max = Math.round(axis.max);
}
function roundBox(box) {
  roundAxis(box.x);
  roundAxis(box.y);
}
var id = 1;
function useProjectionId() {
  return useConstant(function() {
    if (globalProjectionState.hasEverUpdated) {
      return id++;
    }
  });
}
var LayoutGroupContext = react.exports.createContext({});
var SwitchLayoutGroupContext = react.exports.createContext({});
function useProjection(projectionId, _a, visualElement2, ProjectionNodeConstructor) {
  var _b;
  var layoutId = _a.layoutId, layout = _a.layout, drag2 = _a.drag, dragConstraints = _a.dragConstraints, layoutScroll = _a.layoutScroll;
  var initialPromotionConfig = react.exports.useContext(SwitchLayoutGroupContext);
  if (!ProjectionNodeConstructor || !visualElement2 || (visualElement2 === null || visualElement2 === void 0 ? void 0 : visualElement2.projection)) {
    return;
  }
  visualElement2.projection = new ProjectionNodeConstructor(projectionId, visualElement2.getLatestValues(), (_b = visualElement2.parent) === null || _b === void 0 ? void 0 : _b.projection);
  visualElement2.projection.setOptions({
    layoutId,
    layout,
    alwaysMeasureLayout: Boolean(drag2) || dragConstraints && isRefObject(dragConstraints),
    visualElement: visualElement2,
    scheduleRender: function() {
      return visualElement2.scheduleRender();
    },
    animationType: typeof layout === "string" ? layout : "both",
    initialPromotionConfig,
    layoutScroll
  });
}
var VisualElementHandler = function(_super) {
  __extends(VisualElementHandler2, _super);
  function VisualElementHandler2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  VisualElementHandler2.prototype.getSnapshotBeforeUpdate = function() {
    this.updateProps();
    return null;
  };
  VisualElementHandler2.prototype.componentDidUpdate = function() {
  };
  VisualElementHandler2.prototype.updateProps = function() {
    var _a = this.props, visualElement2 = _a.visualElement, props = _a.props;
    if (visualElement2)
      visualElement2.setProps(props);
  };
  VisualElementHandler2.prototype.render = function() {
    return this.props.children;
  };
  return VisualElementHandler2;
}(React.Component);
function createMotionComponent(_a) {
  var preloadedFeatures = _a.preloadedFeatures, createVisualElement = _a.createVisualElement, projectionNodeConstructor = _a.projectionNodeConstructor, useRender = _a.useRender, useVisualState = _a.useVisualState, Component = _a.Component;
  preloadedFeatures && loadFeatures(preloadedFeatures);
  function MotionComponent(props, externalRef) {
    var layoutId = useLayoutId(props);
    props = __assign(__assign({}, props), { layoutId });
    var config = react.exports.useContext(MotionConfigContext);
    var features = null;
    var context = useCreateMotionContext(props);
    var projectionId = config.isStatic ? void 0 : useProjectionId();
    var visualState = useVisualState(props, config.isStatic);
    if (!config.isStatic && isBrowser) {
      context.visualElement = useVisualElement(Component, visualState, __assign(__assign({}, config), props), createVisualElement);
      useProjection(projectionId, props, context.visualElement, projectionNodeConstructor || featureDefinitions.projectionNodeConstructor);
      features = useFeatures(props, context.visualElement, preloadedFeatures);
    }
    return react.exports.createElement(VisualElementHandler, { visualElement: context.visualElement, props: __assign(__assign({}, config), props) }, features, react.exports.createElement(MotionContext.Provider, { value: context }, useRender(Component, props, projectionId, useMotionRef(visualState, context.visualElement, externalRef), visualState, config.isStatic, context.visualElement)));
  }
  return react.exports.forwardRef(MotionComponent);
}
function useLayoutId(_a) {
  var _b;
  var layoutId = _a.layoutId;
  var layoutGroupId = (_b = react.exports.useContext(LayoutGroupContext)) === null || _b === void 0 ? void 0 : _b.id;
  return layoutGroupId && layoutId !== void 0 ? layoutGroupId + "-" + layoutId : layoutId;
}
function createMotionProxy(createConfig) {
  function custom(Component, customMotionComponentConfig) {
    if (customMotionComponentConfig === void 0) {
      customMotionComponentConfig = {};
    }
    return createMotionComponent(createConfig(Component, customMotionComponentConfig));
  }
  if (typeof Proxy === "undefined") {
    return custom;
  }
  var componentCache = /* @__PURE__ */ new Map();
  return new Proxy(custom, {
    get: function(_target, key) {
      if (!componentCache.has(key)) {
        componentCache.set(key, custom(key));
      }
      return componentCache.get(key);
    }
  });
}
var lowercaseSVGElements = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "svg",
  "switch",
  "symbol",
  "text",
  "tspan",
  "use",
  "view"
];
function isSVGComponent(Component) {
  if (typeof Component !== "string" || Component.includes("-")) {
    return false;
  } else if (lowercaseSVGElements.indexOf(Component) > -1 || /[A-Z]/.test(Component)) {
    return true;
  }
  return false;
}
function isForcedMotionValue(key, _a) {
  var layout = _a.layout, layoutId = _a.layoutId;
  return isTransformProp(key) || isTransformOriginProp(key) || (layout || layoutId !== void 0) && (!!scaleCorrectors[key] || key === "opacity");
}
var translateAlias = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
};
function buildTransform(_a, _b, transformIsDefault, transformTemplate) {
  var transform = _a.transform, transformKeys2 = _a.transformKeys;
  var _c = _b.enableHardwareAcceleration, enableHardwareAcceleration = _c === void 0 ? true : _c, _d = _b.allowTransformNone, allowTransformNone = _d === void 0 ? true : _d;
  var transformString = "";
  transformKeys2.sort(sortTransformProps);
  var transformHasZ = false;
  var numTransformKeys = transformKeys2.length;
  for (var i2 = 0; i2 < numTransformKeys; i2++) {
    var key = transformKeys2[i2];
    transformString += "".concat(translateAlias[key] || key, "(").concat(transform[key], ") ");
    if (key === "z")
      transformHasZ = true;
  }
  if (!transformHasZ && enableHardwareAcceleration) {
    transformString += "translateZ(0)";
  } else {
    transformString = transformString.trim();
  }
  if (transformTemplate) {
    transformString = transformTemplate(transform, transformIsDefault ? "" : transformString);
  } else if (allowTransformNone && transformIsDefault) {
    transformString = "none";
  }
  return transformString;
}
function buildTransformOrigin(_a) {
  var _b = _a.originX, originX = _b === void 0 ? "50%" : _b, _c = _a.originY, originY = _c === void 0 ? "50%" : _c, _d = _a.originZ, originZ = _d === void 0 ? 0 : _d;
  return "".concat(originX, " ").concat(originY, " ").concat(originZ);
}
function isCSSVariable$1(key) {
  return key.startsWith("--");
}
var getValueAsType = function(value, type) {
  return type && typeof value === "number" ? type.transform(value) : value;
};
function buildHTMLStyles(state, latestValues, options, transformTemplate) {
  var _a;
  var style = state.style, vars = state.vars, transform = state.transform, transformKeys2 = state.transformKeys, transformOrigin = state.transformOrigin;
  transformKeys2.length = 0;
  var hasTransform2 = false;
  var hasTransformOrigin = false;
  var transformIsNone = true;
  for (var key in latestValues) {
    var value = latestValues[key];
    if (isCSSVariable$1(key)) {
      vars[key] = value;
      continue;
    }
    var valueType = numberValueTypes[key];
    var valueAsType = getValueAsType(value, valueType);
    if (isTransformProp(key)) {
      hasTransform2 = true;
      transform[key] = valueAsType;
      transformKeys2.push(key);
      if (!transformIsNone)
        continue;
      if (value !== ((_a = valueType.default) !== null && _a !== void 0 ? _a : 0))
        transformIsNone = false;
    } else if (isTransformOriginProp(key)) {
      transformOrigin[key] = valueAsType;
      hasTransformOrigin = true;
    } else {
      style[key] = valueAsType;
    }
  }
  if (hasTransform2) {
    style.transform = buildTransform(state, options, transformIsNone, transformTemplate);
  } else if (transformTemplate) {
    style.transform = transformTemplate({}, "");
  } else if (!latestValues.transform && style.transform) {
    style.transform = "none";
  }
  if (hasTransformOrigin) {
    style.transformOrigin = buildTransformOrigin(transformOrigin);
  }
}
var createHtmlRenderState = function() {
  return {
    style: {},
    transform: {},
    transformKeys: [],
    transformOrigin: {},
    vars: {}
  };
};
function copyRawValuesOnly(target, source, props) {
  for (var key in source) {
    if (!isMotionValue(source[key]) && !isForcedMotionValue(key, props)) {
      target[key] = source[key];
    }
  }
}
function useInitialMotionValues(_a, visualState, isStatic) {
  var transformTemplate = _a.transformTemplate;
  return react.exports.useMemo(function() {
    var state = createHtmlRenderState();
    buildHTMLStyles(state, visualState, { enableHardwareAcceleration: !isStatic }, transformTemplate);
    var vars = state.vars, style = state.style;
    return __assign(__assign({}, vars), style);
  }, [visualState]);
}
function useStyle(props, visualState, isStatic) {
  var styleProp = props.style || {};
  var style = {};
  copyRawValuesOnly(style, styleProp, props);
  Object.assign(style, useInitialMotionValues(props, visualState, isStatic));
  if (props.transformValues) {
    style = props.transformValues(style);
  }
  return style;
}
function useHTMLProps(props, visualState, isStatic) {
  var htmlProps = {};
  var style = useStyle(props, visualState, isStatic);
  if (Boolean(props.drag) && props.dragListener !== false) {
    htmlProps.draggable = false;
    style.userSelect = style.WebkitUserSelect = style.WebkitTouchCallout = "none";
    style.touchAction = props.drag === true ? "none" : "pan-".concat(props.drag === "x" ? "y" : "x");
  }
  htmlProps.style = style;
  return htmlProps;
}
var validMotionProps = /* @__PURE__ */ new Set([
  "initial",
  "animate",
  "exit",
  "style",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "layout",
  "layoutId",
  "layoutDependency",
  "onLayoutAnimationStart",
  "onLayoutAnimationComplete",
  "onLayoutMeasure",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "drag",
  "dragControls",
  "dragListener",
  "dragConstraints",
  "dragDirectionLock",
  "dragSnapToOrigin",
  "_dragX",
  "_dragY",
  "dragElastic",
  "dragMomentum",
  "dragPropagation",
  "dragTransition",
  "whileDrag",
  "onPan",
  "onPanStart",
  "onPanEnd",
  "onPanSessionStart",
  "onTap",
  "onTapStart",
  "onTapCancel",
  "onHoverStart",
  "onHoverEnd",
  "whileFocus",
  "whileTap",
  "whileHover",
  "whileInView",
  "onViewportEnter",
  "onViewportLeave",
  "viewport",
  "layoutScroll"
]);
function isValidMotionProp(key) {
  return validMotionProps.has(key);
}
var shouldForward = function(key) {
  return !isValidMotionProp(key);
};
function loadExternalIsValidProp(isValidProp) {
  if (!isValidProp)
    return;
  shouldForward = function(key) {
    return key.startsWith("on") ? !isValidMotionProp(key) : isValidProp(key);
  };
}
try {
  loadExternalIsValidProp(require("@emotion/is-prop-valid").default);
} catch (_a) {
}
function filterProps(props, isDom, forwardMotionProps) {
  var filteredProps = {};
  for (var key in props) {
    if (shouldForward(key) || forwardMotionProps === true && isValidMotionProp(key) || !isDom && !isValidMotionProp(key) || props["draggable"] && key.startsWith("onDrag")) {
      filteredProps[key] = props[key];
    }
  }
  return filteredProps;
}
function calcOrigin$1(origin, offset, size) {
  return typeof origin === "string" ? origin : px.transform(offset + size * origin);
}
function calcSVGTransformOrigin(dimensions, originX, originY) {
  var pxOriginX = calcOrigin$1(originX, dimensions.x, dimensions.width);
  var pxOriginY = calcOrigin$1(originY, dimensions.y, dimensions.height);
  return "".concat(pxOriginX, " ").concat(pxOriginY);
}
var dashKeys = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
};
var camelKeys = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function buildSVGPath(attrs, length, spacing, offset, useDashCase) {
  if (spacing === void 0) {
    spacing = 1;
  }
  if (offset === void 0) {
    offset = 0;
  }
  if (useDashCase === void 0) {
    useDashCase = true;
  }
  attrs.pathLength = 1;
  var keys2 = useDashCase ? dashKeys : camelKeys;
  attrs[keys2.offset] = px.transform(-offset);
  var pathLength = px.transform(length);
  var pathSpacing = px.transform(spacing);
  attrs[keys2.array] = "".concat(pathLength, " ").concat(pathSpacing);
}
function buildSVGAttrs(state, _a, options, transformTemplate) {
  var attrX = _a.attrX, attrY = _a.attrY, originX = _a.originX, originY = _a.originY, pathLength = _a.pathLength, _b = _a.pathSpacing, pathSpacing = _b === void 0 ? 1 : _b, _c = _a.pathOffset, pathOffset = _c === void 0 ? 0 : _c, latest = __rest(_a, ["attrX", "attrY", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"]);
  buildHTMLStyles(state, latest, options, transformTemplate);
  state.attrs = state.style;
  state.style = {};
  var attrs = state.attrs, style = state.style, dimensions = state.dimensions;
  if (attrs.transform) {
    if (dimensions)
      style.transform = attrs.transform;
    delete attrs.transform;
  }
  if (dimensions && (originX !== void 0 || originY !== void 0 || style.transform)) {
    style.transformOrigin = calcSVGTransformOrigin(dimensions, originX !== void 0 ? originX : 0.5, originY !== void 0 ? originY : 0.5);
  }
  if (attrX !== void 0)
    attrs.x = attrX;
  if (attrY !== void 0)
    attrs.y = attrY;
  if (pathLength !== void 0) {
    buildSVGPath(attrs, pathLength, pathSpacing, pathOffset, false);
  }
}
var createSvgRenderState = function() {
  return __assign(__assign({}, createHtmlRenderState()), { attrs: {} });
};
function useSVGProps(props, visualState) {
  var visualProps = react.exports.useMemo(function() {
    var state = createSvgRenderState();
    buildSVGAttrs(state, visualState, { enableHardwareAcceleration: false }, props.transformTemplate);
    return __assign(__assign({}, state.attrs), { style: __assign({}, state.style) });
  }, [visualState]);
  if (props.style) {
    var rawStyles = {};
    copyRawValuesOnly(rawStyles, props.style, props);
    visualProps.style = __assign(__assign({}, rawStyles), visualProps.style);
  }
  return visualProps;
}
function createUseRender(forwardMotionProps) {
  if (forwardMotionProps === void 0) {
    forwardMotionProps = false;
  }
  var useRender = function(Component, props, projectionId, ref, _a, isStatic) {
    var latestValues = _a.latestValues;
    var useVisualProps = isSVGComponent(Component) ? useSVGProps : useHTMLProps;
    var visualProps = useVisualProps(props, latestValues, isStatic);
    var filteredProps = filterProps(props, typeof Component === "string", forwardMotionProps);
    var elementProps = __assign(__assign(__assign({}, filteredProps), visualProps), { ref });
    if (projectionId) {
      elementProps["data-projection-id"] = projectionId;
    }
    return react.exports.createElement(Component, elementProps);
  };
  return useRender;
}
var CAMEL_CASE_PATTERN = /([a-z])([A-Z])/g;
var REPLACE_TEMPLATE = "$1-$2";
var camelToDash = function(str) {
  return str.replace(CAMEL_CASE_PATTERN, REPLACE_TEMPLATE).toLowerCase();
};
function renderHTML(element2, _a, styleProp, projection) {
  var style = _a.style, vars = _a.vars;
  Object.assign(element2.style, style, projection && projection.getProjectionStyles(styleProp));
  for (var key in vars) {
    element2.style.setProperty(key, vars[key]);
  }
}
var camelCaseAttributes = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength"
]);
function renderSVG(element2, renderState, _styleProp, projection) {
  renderHTML(element2, renderState, void 0, projection);
  for (var key in renderState.attrs) {
    element2.setAttribute(!camelCaseAttributes.has(key) ? camelToDash(key) : key, renderState.attrs[key]);
  }
}
function scrapeMotionValuesFromProps$1(props) {
  var style = props.style;
  var newValues = {};
  for (var key in style) {
    if (isMotionValue(style[key]) || isForcedMotionValue(key, props)) {
      newValues[key] = style[key];
    }
  }
  return newValues;
}
function scrapeMotionValuesFromProps(props) {
  var newValues = scrapeMotionValuesFromProps$1(props);
  for (var key in props) {
    if (isMotionValue(props[key])) {
      var targetKey = key === "x" || key === "y" ? "attr" + key.toUpperCase() : key;
      newValues[targetKey] = props[key];
    }
  }
  return newValues;
}
function isAnimationControls(v2) {
  return typeof v2 === "object" && typeof v2.start === "function";
}
function makeState(_a, props, context, presenceContext) {
  var scrapeMotionValuesFromProps2 = _a.scrapeMotionValuesFromProps, createRenderState = _a.createRenderState, onMount = _a.onMount;
  var state = {
    latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps2),
    renderState: createRenderState()
  };
  if (onMount) {
    state.mount = function(instance) {
      return onMount(props, instance, state);
    };
  }
  return state;
}
var makeUseVisualState = function(config) {
  return function(props, isStatic) {
    var context = react.exports.useContext(MotionContext);
    var presenceContext = react.exports.useContext(PresenceContext);
    return isStatic ? makeState(config, props, context, presenceContext) : useConstant(function() {
      return makeState(config, props, context, presenceContext);
    });
  };
};
function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
  var values = {};
  var blockInitialAnimation = (presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.initial) === false;
  var motionValues = scrapeMotionValues(props);
  for (var key in motionValues) {
    values[key] = resolveMotionValue(motionValues[key]);
  }
  var initial = props.initial, animate2 = props.animate;
  var isControllingVariants = checkIfControllingVariants(props);
  var isVariantNode = checkIfVariantNode(props);
  if (context && isVariantNode && !isControllingVariants && props.inherit !== false) {
    initial !== null && initial !== void 0 ? initial : initial = context.initial;
    animate2 !== null && animate2 !== void 0 ? animate2 : animate2 = context.animate;
  }
  var initialAnimationIsBlocked = blockInitialAnimation || initial === false;
  var variantToSet = initialAnimationIsBlocked ? animate2 : initial;
  if (variantToSet && typeof variantToSet !== "boolean" && !isAnimationControls(variantToSet)) {
    var list2 = Array.isArray(variantToSet) ? variantToSet : [variantToSet];
    list2.forEach(function(definition2) {
      var resolved = resolveVariantFromProps(props, definition2);
      if (!resolved)
        return;
      var transitionEnd = resolved.transitionEnd;
      resolved.transition;
      var target = __rest(resolved, ["transitionEnd", "transition"]);
      for (var key2 in target) {
        var valueTarget = target[key2];
        if (Array.isArray(valueTarget)) {
          var index2 = initialAnimationIsBlocked ? valueTarget.length - 1 : 0;
          valueTarget = valueTarget[index2];
        }
        if (valueTarget !== null) {
          values[key2] = valueTarget;
        }
      }
      for (var key2 in transitionEnd)
        values[key2] = transitionEnd[key2];
    });
  }
  return values;
}
var svgMotionConfig = {
  useVisualState: makeUseVisualState({
    scrapeMotionValuesFromProps,
    createRenderState: createSvgRenderState,
    onMount: function(props, instance, _a) {
      var renderState = _a.renderState, latestValues = _a.latestValues;
      try {
        renderState.dimensions = typeof instance.getBBox === "function" ? instance.getBBox() : instance.getBoundingClientRect();
      } catch (e2) {
        renderState.dimensions = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
      }
      buildSVGAttrs(renderState, latestValues, { enableHardwareAcceleration: false }, props.transformTemplate);
      renderSVG(instance, renderState);
    }
  })
};
var htmlMotionConfig = {
  useVisualState: makeUseVisualState({
    scrapeMotionValuesFromProps: scrapeMotionValuesFromProps$1,
    createRenderState: createHtmlRenderState
  })
};
function createDomMotionConfig(Component, _a, preloadedFeatures, createVisualElement, projectionNodeConstructor) {
  var _b = _a.forwardMotionProps, forwardMotionProps = _b === void 0 ? false : _b;
  var baseConfig = isSVGComponent(Component) ? svgMotionConfig : htmlMotionConfig;
  return __assign(__assign({}, baseConfig), { preloadedFeatures, useRender: createUseRender(forwardMotionProps), createVisualElement, projectionNodeConstructor, Component });
}
var AnimationType;
(function(AnimationType2) {
  AnimationType2["Animate"] = "animate";
  AnimationType2["Hover"] = "whileHover";
  AnimationType2["Tap"] = "whileTap";
  AnimationType2["Drag"] = "whileDrag";
  AnimationType2["Focus"] = "whileFocus";
  AnimationType2["InView"] = "whileInView";
  AnimationType2["Exit"] = "exit";
})(AnimationType || (AnimationType = {}));
function addDomEvent(target, eventName, handler, options) {
  if (options === void 0) {
    options = { passive: true };
  }
  target.addEventListener(eventName, handler, options);
  return function() {
    return target.removeEventListener(eventName, handler);
  };
}
function useDomEvent(ref, eventName, handler, options) {
  react.exports.useEffect(function() {
    var element2 = ref.current;
    if (handler && element2) {
      return addDomEvent(element2, eventName, handler, options);
    }
  }, [ref, eventName, handler, options]);
}
function useFocusGesture(_a) {
  var whileFocus = _a.whileFocus, visualElement2 = _a.visualElement;
  var onFocus = function() {
    var _a2;
    (_a2 = visualElement2.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(AnimationType.Focus, true);
  };
  var onBlur = function() {
    var _a2;
    (_a2 = visualElement2.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(AnimationType.Focus, false);
  };
  useDomEvent(visualElement2, "focus", whileFocus ? onFocus : void 0);
  useDomEvent(visualElement2, "blur", whileFocus ? onBlur : void 0);
}
function isMouseEvent(event) {
  if (typeof PointerEvent !== "undefined" && event instanceof PointerEvent) {
    return !!(event.pointerType === "mouse");
  }
  return event instanceof MouseEvent;
}
function isTouchEvent(event) {
  var hasTouches = !!event.touches;
  return hasTouches;
}
function filterPrimaryPointer(eventHandler) {
  return function(event) {
    var isMouseEvent2 = event instanceof MouseEvent;
    var isPrimaryPointer = !isMouseEvent2 || isMouseEvent2 && event.button === 0;
    if (isPrimaryPointer) {
      eventHandler(event);
    }
  };
}
var defaultPagePoint = { pageX: 0, pageY: 0 };
function pointFromTouch(e2, pointType) {
  if (pointType === void 0) {
    pointType = "page";
  }
  var primaryTouch = e2.touches[0] || e2.changedTouches[0];
  var point2 = primaryTouch || defaultPagePoint;
  return {
    x: point2[pointType + "X"],
    y: point2[pointType + "Y"]
  };
}
function pointFromMouse(point2, pointType) {
  if (pointType === void 0) {
    pointType = "page";
  }
  return {
    x: point2[pointType + "X"],
    y: point2[pointType + "Y"]
  };
}
function extractEventInfo(event, pointType) {
  if (pointType === void 0) {
    pointType = "page";
  }
  return {
    point: isTouchEvent(event) ? pointFromTouch(event, pointType) : pointFromMouse(event, pointType)
  };
}
var wrapHandler = function(handler, shouldFilterPrimaryPointer) {
  if (shouldFilterPrimaryPointer === void 0) {
    shouldFilterPrimaryPointer = false;
  }
  var listener = function(event) {
    return handler(event, extractEventInfo(event));
  };
  return shouldFilterPrimaryPointer ? filterPrimaryPointer(listener) : listener;
};
var supportsPointerEvents = function() {
  return isBrowser && window.onpointerdown === null;
};
var supportsTouchEvents = function() {
  return isBrowser && window.ontouchstart === null;
};
var supportsMouseEvents = function() {
  return isBrowser && window.onmousedown === null;
};
var mouseEventNames = {
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointercancel: "mousecancel",
  pointerover: "mouseover",
  pointerout: "mouseout",
  pointerenter: "mouseenter",
  pointerleave: "mouseleave"
};
var touchEventNames = {
  pointerdown: "touchstart",
  pointermove: "touchmove",
  pointerup: "touchend",
  pointercancel: "touchcancel"
};
function getPointerEventName(name) {
  if (supportsPointerEvents()) {
    return name;
  } else if (supportsTouchEvents()) {
    return touchEventNames[name];
  } else if (supportsMouseEvents()) {
    return mouseEventNames[name];
  }
  return name;
}
function addPointerEvent(target, eventName, handler, options) {
  return addDomEvent(target, getPointerEventName(eventName), wrapHandler(handler, eventName === "pointerdown"), options);
}
function usePointerEvent(ref, eventName, handler, options) {
  return useDomEvent(ref, getPointerEventName(eventName), handler && wrapHandler(handler, eventName === "pointerdown"), options);
}
function createLock(name) {
  var lock = null;
  return function() {
    var openLock = function() {
      lock = null;
    };
    if (lock === null) {
      lock = name;
      return openLock;
    }
    return false;
  };
}
var globalHorizontalLock = createLock("dragHorizontal");
var globalVerticalLock = createLock("dragVertical");
function getGlobalLock(drag2) {
  var lock = false;
  if (drag2 === "y") {
    lock = globalVerticalLock();
  } else if (drag2 === "x") {
    lock = globalHorizontalLock();
  } else {
    var openHorizontal_1 = globalHorizontalLock();
    var openVertical_1 = globalVerticalLock();
    if (openHorizontal_1 && openVertical_1) {
      lock = function() {
        openHorizontal_1();
        openVertical_1();
      };
    } else {
      if (openHorizontal_1)
        openHorizontal_1();
      if (openVertical_1)
        openVertical_1();
    }
  }
  return lock;
}
function isDragActive() {
  var openGestureLock = getGlobalLock(true);
  if (!openGestureLock)
    return true;
  openGestureLock();
  return false;
}
function createHoverEvent(visualElement2, isActive, callback) {
  return function(event, info) {
    var _a;
    if (!isMouseEvent(event) || isDragActive())
      return;
    (_a = visualElement2.animationState) === null || _a === void 0 ? void 0 : _a.setActive(AnimationType.Hover, isActive);
    callback === null || callback === void 0 ? void 0 : callback(event, info);
  };
}
function useHoverGesture(_a) {
  var onHoverStart = _a.onHoverStart, onHoverEnd = _a.onHoverEnd, whileHover = _a.whileHover, visualElement2 = _a.visualElement;
  usePointerEvent(visualElement2, "pointerenter", onHoverStart || whileHover ? createHoverEvent(visualElement2, true, onHoverStart) : void 0, { passive: !onHoverStart });
  usePointerEvent(visualElement2, "pointerleave", onHoverEnd || whileHover ? createHoverEvent(visualElement2, false, onHoverEnd) : void 0, { passive: !onHoverEnd });
}
var isNodeOrChild = function(parent, child) {
  if (!child) {
    return false;
  } else if (parent === child) {
    return true;
  } else {
    return isNodeOrChild(parent, child.parentElement);
  }
};
function useUnmountEffect(callback) {
  return react.exports.useEffect(function() {
    return function() {
      return callback();
    };
  }, []);
}
function useTapGesture(_a) {
  var onTap = _a.onTap, onTapStart = _a.onTapStart, onTapCancel = _a.onTapCancel, whileTap = _a.whileTap, visualElement2 = _a.visualElement;
  var hasPressListeners = onTap || onTapStart || onTapCancel || whileTap;
  var isPressing = react.exports.useRef(false);
  var cancelPointerEndListeners = react.exports.useRef(null);
  var eventOptions = {
    passive: !(onTapStart || onTap || onTapCancel || onPointerDown)
  };
  function removePointerEndListener() {
    var _a2;
    (_a2 = cancelPointerEndListeners.current) === null || _a2 === void 0 ? void 0 : _a2.call(cancelPointerEndListeners);
    cancelPointerEndListeners.current = null;
  }
  function checkPointerEnd() {
    var _a2;
    removePointerEndListener();
    isPressing.current = false;
    (_a2 = visualElement2.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(AnimationType.Tap, false);
    return !isDragActive();
  }
  function onPointerUp(event, info) {
    if (!checkPointerEnd())
      return;
    !isNodeOrChild(visualElement2.getInstance(), event.target) ? onTapCancel === null || onTapCancel === void 0 ? void 0 : onTapCancel(event, info) : onTap === null || onTap === void 0 ? void 0 : onTap(event, info);
  }
  function onPointerCancel(event, info) {
    if (!checkPointerEnd())
      return;
    onTapCancel === null || onTapCancel === void 0 ? void 0 : onTapCancel(event, info);
  }
  function onPointerDown(event, info) {
    var _a2;
    removePointerEndListener();
    if (isPressing.current)
      return;
    isPressing.current = true;
    cancelPointerEndListeners.current = pipe(addPointerEvent(window, "pointerup", onPointerUp, eventOptions), addPointerEvent(window, "pointercancel", onPointerCancel, eventOptions));
    (_a2 = visualElement2.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(AnimationType.Tap, true);
    onTapStart === null || onTapStart === void 0 ? void 0 : onTapStart(event, info);
  }
  usePointerEvent(visualElement2, "pointerdown", hasPressListeners ? onPointerDown : void 0, eventOptions);
  useUnmountEffect(removePointerEndListener);
}
var warned = /* @__PURE__ */ new Set();
function warnOnce(condition, message, element2) {
  if (condition || warned.has(message))
    return;
  console.warn(message);
  if (element2)
    console.warn(element2);
  warned.add(message);
}
var observerCallbacks = /* @__PURE__ */ new WeakMap();
var observers = /* @__PURE__ */ new WeakMap();
var fireObserverCallback = function(entry) {
  var _a;
  (_a = observerCallbacks.get(entry.target)) === null || _a === void 0 ? void 0 : _a(entry);
};
var fireAllObserverCallbacks = function(entries) {
  entries.forEach(fireObserverCallback);
};
function initIntersectionObserver(_a) {
  var root2 = _a.root, options = __rest(_a, ["root"]);
  var lookupRoot = root2 || document;
  if (!observers.has(lookupRoot)) {
    observers.set(lookupRoot, {});
  }
  var rootObservers = observers.get(lookupRoot);
  var key = JSON.stringify(options);
  if (!rootObservers[key]) {
    rootObservers[key] = new IntersectionObserver(fireAllObserverCallbacks, __assign({ root: root2 }, options));
  }
  return rootObservers[key];
}
function observeIntersection(element2, options, callback) {
  var rootInteresectionObserver = initIntersectionObserver(options);
  observerCallbacks.set(element2, callback);
  rootInteresectionObserver.observe(element2);
  return function() {
    observerCallbacks.delete(element2);
    rootInteresectionObserver.unobserve(element2);
  };
}
function useViewport(_a) {
  var visualElement2 = _a.visualElement, whileInView = _a.whileInView, onViewportEnter = _a.onViewportEnter, onViewportLeave = _a.onViewportLeave, _b = _a.viewport, viewport = _b === void 0 ? {} : _b;
  var state = react.exports.useRef({
    hasEnteredView: false,
    isInView: false
  });
  var shouldObserve = Boolean(whileInView || onViewportEnter || onViewportLeave);
  if (viewport.once && state.current.hasEnteredView)
    shouldObserve = false;
  var useObserver = typeof IntersectionObserver === "undefined" ? useMissingIntersectionObserver : useIntersectionObserver;
  useObserver(shouldObserve, state.current, visualElement2, viewport);
}
var thresholdNames = {
  some: 0,
  all: 1
};
function useIntersectionObserver(shouldObserve, state, visualElement2, _a) {
  var root2 = _a.root, rootMargin = _a.margin, _b = _a.amount, amount = _b === void 0 ? "some" : _b, once = _a.once;
  react.exports.useEffect(function() {
    if (!shouldObserve)
      return;
    var options = {
      root: root2 === null || root2 === void 0 ? void 0 : root2.current,
      rootMargin,
      threshold: typeof amount === "number" ? amount : thresholdNames[amount]
    };
    var intersectionCallback = function(entry) {
      var _a2;
      var isIntersecting = entry.isIntersecting;
      if (state.isInView === isIntersecting)
        return;
      state.isInView = isIntersecting;
      if (once && !isIntersecting && state.hasEnteredView) {
        return;
      } else if (isIntersecting) {
        state.hasEnteredView = true;
      }
      (_a2 = visualElement2.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(AnimationType.InView, isIntersecting);
      var props = visualElement2.getProps();
      var callback = isIntersecting ? props.onViewportEnter : props.onViewportLeave;
      callback === null || callback === void 0 ? void 0 : callback(entry);
    };
    return observeIntersection(visualElement2.getInstance(), options, intersectionCallback);
  }, [shouldObserve, root2, rootMargin, amount]);
}
function useMissingIntersectionObserver(shouldObserve, state, visualElement2, _a) {
  var _b = _a.fallback, fallback = _b === void 0 ? true : _b;
  react.exports.useEffect(function() {
    if (!shouldObserve || !fallback)
      return;
    if (env !== "production") {
      warnOnce(false, "IntersectionObserver not available on this device. whileInView animations will trigger on mount.");
    }
    requestAnimationFrame(function() {
      var _a2;
      state.hasEnteredView = true;
      var onViewportEnter = visualElement2.getProps().onViewportEnter;
      onViewportEnter === null || onViewportEnter === void 0 ? void 0 : onViewportEnter(null);
      (_a2 = visualElement2.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(AnimationType.InView, true);
    });
  }, [shouldObserve]);
}
var makeRenderlessComponent = function(hook) {
  return function(props) {
    hook(props);
    return null;
  };
};
var gestureAnimations = {
  inView: makeRenderlessComponent(useViewport),
  tap: makeRenderlessComponent(useTapGesture),
  focus: makeRenderlessComponent(useFocusGesture),
  hover: makeRenderlessComponent(useHoverGesture)
};
var counter = 0;
var incrementId = function() {
  return counter++;
};
var useId = function() {
  return useConstant(incrementId);
};
function usePresence() {
  var context = react.exports.useContext(PresenceContext);
  if (context === null)
    return [true, null];
  var isPresent = context.isPresent, onExitComplete = context.onExitComplete, register = context.register;
  var id2 = useId();
  react.exports.useEffect(function() {
    return register(id2);
  }, []);
  var safeToRemove = function() {
    return onExitComplete === null || onExitComplete === void 0 ? void 0 : onExitComplete(id2);
  };
  return !isPresent && onExitComplete ? [false, safeToRemove] : [true];
}
function shallowCompare(next, prev) {
  if (!Array.isArray(prev))
    return false;
  var prevLength = prev.length;
  if (prevLength !== next.length)
    return false;
  for (var i2 = 0; i2 < prevLength; i2++) {
    if (prev[i2] !== next[i2])
      return false;
  }
  return true;
}
var isNumericalString = function(v2) {
  return /^\-?\d*\.?\d+$/.test(v2);
};
var isZeroValueString = function(v2) {
  return /^0[^.\s]+$/.test(v2);
};
var testValueType = function(v2) {
  return function(type) {
    return type.test(v2);
  };
};
var auto = {
  test: function(v2) {
    return v2 === "auto";
  },
  parse: function(v2) {
    return v2;
  }
};
var dimensionValueTypes = [number$1, px, percent, degrees, vw, vh, auto];
var findDimensionValueType = function(v2) {
  return dimensionValueTypes.find(testValueType(v2));
};
var valueTypes = __spreadArray(__spreadArray([], __read(dimensionValueTypes), false), [color$2, complex], false);
var findValueType = function(v2) {
  return valueTypes.find(testValueType(v2));
};
function setMotionValue(visualElement2, key, value) {
  if (visualElement2.hasValue(key)) {
    visualElement2.getValue(key).set(value);
  } else {
    visualElement2.addValue(key, motionValue(value));
  }
}
function setTarget(visualElement2, definition2) {
  var resolved = resolveVariant(visualElement2, definition2);
  var _a = resolved ? visualElement2.makeTargetAnimatable(resolved, false) : {}, _b = _a.transitionEnd, transitionEnd = _b === void 0 ? {} : _b;
  _a.transition;
  var target = __rest(_a, ["transitionEnd", "transition"]);
  target = __assign(__assign({}, target), transitionEnd);
  for (var key in target) {
    var value = resolveFinalValueInKeyframes(target[key]);
    setMotionValue(visualElement2, key, value);
  }
}
function checkTargetForNewValues(visualElement2, target, origin) {
  var _a, _b, _c;
  var _d;
  var newValueKeys = Object.keys(target).filter(function(key2) {
    return !visualElement2.hasValue(key2);
  });
  var numNewValues = newValueKeys.length;
  if (!numNewValues)
    return;
  for (var i2 = 0; i2 < numNewValues; i2++) {
    var key = newValueKeys[i2];
    var targetValue = target[key];
    var value = null;
    if (Array.isArray(targetValue)) {
      value = targetValue[0];
    }
    if (value === null) {
      value = (_b = (_a = origin[key]) !== null && _a !== void 0 ? _a : visualElement2.readValue(key)) !== null && _b !== void 0 ? _b : target[key];
    }
    if (value === void 0 || value === null)
      continue;
    if (typeof value === "string" && (isNumericalString(value) || isZeroValueString(value))) {
      value = parseFloat(value);
    } else if (!findValueType(value) && complex.test(targetValue)) {
      value = getAnimatableNone(key, targetValue);
    }
    visualElement2.addValue(key, motionValue(value));
    (_c = (_d = origin)[key]) !== null && _c !== void 0 ? _c : _d[key] = value;
    visualElement2.setBaseTarget(key, value);
  }
}
function getOriginFromTransition(key, transition) {
  if (!transition)
    return;
  var valueTransition = transition[key] || transition["default"] || transition;
  return valueTransition.from;
}
function getOrigin(target, transition, visualElement2) {
  var _a, _b;
  var origin = {};
  for (var key in target) {
    origin[key] = (_a = getOriginFromTransition(key, transition)) !== null && _a !== void 0 ? _a : (_b = visualElement2.getValue(key)) === null || _b === void 0 ? void 0 : _b.get();
  }
  return origin;
}
function animateVisualElement(visualElement2, definition2, options) {
  if (options === void 0) {
    options = {};
  }
  visualElement2.notifyAnimationStart(definition2);
  var animation;
  if (Array.isArray(definition2)) {
    var animations2 = definition2.map(function(variant) {
      return animateVariant(visualElement2, variant, options);
    });
    animation = Promise.all(animations2);
  } else if (typeof definition2 === "string") {
    animation = animateVariant(visualElement2, definition2, options);
  } else {
    var resolvedDefinition = typeof definition2 === "function" ? resolveVariant(visualElement2, definition2, options.custom) : definition2;
    animation = animateTarget(visualElement2, resolvedDefinition, options);
  }
  return animation.then(function() {
    return visualElement2.notifyAnimationComplete(definition2);
  });
}
function animateVariant(visualElement2, variant, options) {
  var _a;
  if (options === void 0) {
    options = {};
  }
  var resolved = resolveVariant(visualElement2, variant, options.custom);
  var _b = (resolved || {}).transition, transition = _b === void 0 ? visualElement2.getDefaultTransition() || {} : _b;
  if (options.transitionOverride) {
    transition = options.transitionOverride;
  }
  var getAnimation2 = resolved ? function() {
    return animateTarget(visualElement2, resolved, options);
  } : function() {
    return Promise.resolve();
  };
  var getChildAnimations = ((_a = visualElement2.variantChildren) === null || _a === void 0 ? void 0 : _a.size) ? function(forwardDelay) {
    if (forwardDelay === void 0) {
      forwardDelay = 0;
    }
    var _a2 = transition.delayChildren, delayChildren = _a2 === void 0 ? 0 : _a2, staggerChildren = transition.staggerChildren, staggerDirection = transition.staggerDirection;
    return animateChildren(visualElement2, variant, delayChildren + forwardDelay, staggerChildren, staggerDirection, options);
  } : function() {
    return Promise.resolve();
  };
  var when = transition.when;
  if (when) {
    var _c = __read(when === "beforeChildren" ? [getAnimation2, getChildAnimations] : [getChildAnimations, getAnimation2], 2), first = _c[0], last = _c[1];
    return first().then(last);
  } else {
    return Promise.all([getAnimation2(), getChildAnimations(options.delay)]);
  }
}
function animateTarget(visualElement2, definition2, _a) {
  var _b;
  var _c = _a === void 0 ? {} : _a, _d = _c.delay, delay = _d === void 0 ? 0 : _d, transitionOverride = _c.transitionOverride, type = _c.type;
  var _e2 = visualElement2.makeTargetAnimatable(definition2), _f = _e2.transition, transition = _f === void 0 ? visualElement2.getDefaultTransition() : _f, transitionEnd = _e2.transitionEnd, target = __rest(_e2, ["transition", "transitionEnd"]);
  if (transitionOverride)
    transition = transitionOverride;
  var animations2 = [];
  var animationTypeState = type && ((_b = visualElement2.animationState) === null || _b === void 0 ? void 0 : _b.getState()[type]);
  for (var key in target) {
    var value = visualElement2.getValue(key);
    var valueTarget = target[key];
    if (!value || valueTarget === void 0 || animationTypeState && shouldBlockAnimation(animationTypeState, key)) {
      continue;
    }
    var valueTransition = __assign({ delay }, transition);
    if (visualElement2.shouldReduceMotion && isTransformProp(key)) {
      valueTransition = __assign(__assign({}, valueTransition), { type: false, delay: 0 });
    }
    var animation = startAnimation(key, value, valueTarget, valueTransition);
    animations2.push(animation);
  }
  return Promise.all(animations2).then(function() {
    transitionEnd && setTarget(visualElement2, transitionEnd);
  });
}
function animateChildren(visualElement2, variant, delayChildren, staggerChildren, staggerDirection, options) {
  if (delayChildren === void 0) {
    delayChildren = 0;
  }
  if (staggerChildren === void 0) {
    staggerChildren = 0;
  }
  if (staggerDirection === void 0) {
    staggerDirection = 1;
  }
  var animations2 = [];
  var maxStaggerDuration = (visualElement2.variantChildren.size - 1) * staggerChildren;
  var generateStaggerDuration = staggerDirection === 1 ? function(i2) {
    if (i2 === void 0) {
      i2 = 0;
    }
    return i2 * staggerChildren;
  } : function(i2) {
    if (i2 === void 0) {
      i2 = 0;
    }
    return maxStaggerDuration - i2 * staggerChildren;
  };
  Array.from(visualElement2.variantChildren).sort(sortByTreeOrder).forEach(function(child, i2) {
    animations2.push(animateVariant(child, variant, __assign(__assign({}, options), { delay: delayChildren + generateStaggerDuration(i2) })).then(function() {
      return child.notifyAnimationComplete(variant);
    }));
  });
  return Promise.all(animations2);
}
function sortByTreeOrder(a2, b2) {
  return a2.sortNodePosition(b2);
}
function shouldBlockAnimation(_a, key) {
  var protectedKeys = _a.protectedKeys, needsAnimating = _a.needsAnimating;
  var shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
  needsAnimating[key] = false;
  return shouldBlock;
}
var variantPriorityOrder = [
  AnimationType.Animate,
  AnimationType.InView,
  AnimationType.Focus,
  AnimationType.Hover,
  AnimationType.Tap,
  AnimationType.Drag,
  AnimationType.Exit
];
var reversePriorityOrder = __spreadArray([], __read(variantPriorityOrder), false).reverse();
var numAnimationTypes = variantPriorityOrder.length;
function animateList(visualElement2) {
  return function(animations2) {
    return Promise.all(animations2.map(function(_a) {
      var animation = _a.animation, options = _a.options;
      return animateVisualElement(visualElement2, animation, options);
    }));
  };
}
function createAnimationState(visualElement2) {
  var animate2 = animateList(visualElement2);
  var state = createState();
  var allAnimatedKeys = {};
  var isInitialRender = true;
  var buildResolvedTypeValues = function(acc, definition2) {
    var resolved = resolveVariant(visualElement2, definition2);
    if (resolved) {
      resolved.transition;
      var transitionEnd = resolved.transitionEnd, target = __rest(resolved, ["transition", "transitionEnd"]);
      acc = __assign(__assign(__assign({}, acc), target), transitionEnd);
    }
    return acc;
  };
  function isAnimated(key) {
    return allAnimatedKeys[key] !== void 0;
  }
  function setAnimateFunction(makeAnimator) {
    animate2 = makeAnimator(visualElement2);
  }
  function animateChanges(options, changedActiveType) {
    var _a;
    var props = visualElement2.getProps();
    var context = visualElement2.getVariantContext(true) || {};
    var animations2 = [];
    var removedKeys = /* @__PURE__ */ new Set();
    var encounteredKeys = {};
    var removedVariantIndex = Infinity;
    var _loop_1 = function(i3) {
      var type = reversePriorityOrder[i3];
      var typeState = state[type];
      var prop = (_a = props[type]) !== null && _a !== void 0 ? _a : context[type];
      var propIsVariant = isVariantLabel(prop);
      var activeDelta = type === changedActiveType ? typeState.isActive : null;
      if (activeDelta === false)
        removedVariantIndex = i3;
      var isInherited = prop === context[type] && prop !== props[type] && propIsVariant;
      if (isInherited && isInitialRender && visualElement2.manuallyAnimateOnMount) {
        isInherited = false;
      }
      typeState.protectedKeys = __assign({}, encounteredKeys);
      if (!typeState.isActive && activeDelta === null || !prop && !typeState.prevProp || isAnimationControls(prop) || typeof prop === "boolean") {
        return "continue";
      }
      var variantDidChange = checkVariantsDidChange(typeState.prevProp, prop);
      var shouldAnimateType = variantDidChange || type === changedActiveType && typeState.isActive && !isInherited && propIsVariant || i3 > removedVariantIndex && propIsVariant;
      var definitionList = Array.isArray(prop) ? prop : [prop];
      var resolvedValues = definitionList.reduce(buildResolvedTypeValues, {});
      if (activeDelta === false)
        resolvedValues = {};
      var _b = typeState.prevResolvedValues, prevResolvedValues = _b === void 0 ? {} : _b;
      var allKeys = __assign(__assign({}, prevResolvedValues), resolvedValues);
      var markToAnimate = function(key2) {
        shouldAnimateType = true;
        removedKeys.delete(key2);
        typeState.needsAnimating[key2] = true;
      };
      for (var key in allKeys) {
        var next = resolvedValues[key];
        var prev = prevResolvedValues[key];
        if (encounteredKeys.hasOwnProperty(key))
          continue;
        if (next !== prev) {
          if (isKeyframesTarget(next) && isKeyframesTarget(prev)) {
            if (!shallowCompare(next, prev) || variantDidChange) {
              markToAnimate(key);
            } else {
              typeState.protectedKeys[key] = true;
            }
          } else if (next !== void 0) {
            markToAnimate(key);
          } else {
            removedKeys.add(key);
          }
        } else if (next !== void 0 && removedKeys.has(key)) {
          markToAnimate(key);
        } else {
          typeState.protectedKeys[key] = true;
        }
      }
      typeState.prevProp = prop;
      typeState.prevResolvedValues = resolvedValues;
      if (typeState.isActive) {
        encounteredKeys = __assign(__assign({}, encounteredKeys), resolvedValues);
      }
      if (isInitialRender && visualElement2.blockInitialAnimation) {
        shouldAnimateType = false;
      }
      if (shouldAnimateType && !isInherited) {
        animations2.push.apply(animations2, __spreadArray([], __read(definitionList.map(function(animation) {
          return {
            animation,
            options: __assign({ type }, options)
          };
        })), false));
      }
    };
    for (var i2 = 0; i2 < numAnimationTypes; i2++) {
      _loop_1(i2);
    }
    allAnimatedKeys = __assign({}, encounteredKeys);
    if (removedKeys.size) {
      var fallbackAnimation_1 = {};
      removedKeys.forEach(function(key) {
        var fallbackTarget = visualElement2.getBaseTarget(key);
        if (fallbackTarget !== void 0) {
          fallbackAnimation_1[key] = fallbackTarget;
        }
      });
      animations2.push({ animation: fallbackAnimation_1 });
    }
    var shouldAnimate = Boolean(animations2.length);
    if (isInitialRender && props.initial === false && !visualElement2.manuallyAnimateOnMount) {
      shouldAnimate = false;
    }
    isInitialRender = false;
    return shouldAnimate ? animate2(animations2) : Promise.resolve();
  }
  function setActive(type, isActive, options) {
    var _a;
    if (state[type].isActive === isActive)
      return Promise.resolve();
    (_a = visualElement2.variantChildren) === null || _a === void 0 ? void 0 : _a.forEach(function(child) {
      var _a2;
      return (_a2 = child.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(type, isActive);
    });
    state[type].isActive = isActive;
    var animations2 = animateChanges(options, type);
    for (var key in state) {
      state[key].protectedKeys = {};
    }
    return animations2;
  }
  return {
    isAnimated,
    animateChanges,
    setActive,
    setAnimateFunction,
    getState: function() {
      return state;
    }
  };
}
function checkVariantsDidChange(prev, next) {
  if (typeof next === "string") {
    return next !== prev;
  } else if (isVariantLabels(next)) {
    return !shallowCompare(next, prev);
  }
  return false;
}
function createTypeState(isActive) {
  if (isActive === void 0) {
    isActive = false;
  }
  return {
    isActive,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function createState() {
  var _a;
  return _a = {}, _a[AnimationType.Animate] = createTypeState(true), _a[AnimationType.InView] = createTypeState(), _a[AnimationType.Hover] = createTypeState(), _a[AnimationType.Tap] = createTypeState(), _a[AnimationType.Drag] = createTypeState(), _a[AnimationType.Focus] = createTypeState(), _a[AnimationType.Exit] = createTypeState(), _a;
}
var animations = {
  animation: makeRenderlessComponent(function(_a) {
    var visualElement2 = _a.visualElement, animate2 = _a.animate;
    visualElement2.animationState || (visualElement2.animationState = createAnimationState(visualElement2));
    if (isAnimationControls(animate2)) {
      react.exports.useEffect(function() {
        return animate2.subscribe(visualElement2);
      }, [animate2]);
    }
  }),
  exit: makeRenderlessComponent(function(props) {
    var custom = props.custom, visualElement2 = props.visualElement;
    var _a = __read(usePresence(), 2), isPresent = _a[0], safeToRemove = _a[1];
    var presenceContext = react.exports.useContext(PresenceContext);
    react.exports.useEffect(function() {
      var _a2, _b;
      visualElement2.isPresent = isPresent;
      var animation = (_a2 = visualElement2.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(AnimationType.Exit, !isPresent, { custom: (_b = presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.custom) !== null && _b !== void 0 ? _b : custom });
      !isPresent && (animation === null || animation === void 0 ? void 0 : animation.then(safeToRemove));
    }, [isPresent]);
  })
};
var PanSession = function() {
  function PanSession2(event, handlers2, _a) {
    var _this = this;
    var _b = _a === void 0 ? {} : _a, transformPagePoint = _b.transformPagePoint;
    this.startEvent = null;
    this.lastMoveEvent = null;
    this.lastMoveEventInfo = null;
    this.handlers = {};
    this.updatePoint = function() {
      if (!(_this.lastMoveEvent && _this.lastMoveEventInfo))
        return;
      var info2 = getPanInfo(_this.lastMoveEventInfo, _this.history);
      var isPanStarted = _this.startEvent !== null;
      var isDistancePastThreshold = distance(info2.offset, { x: 0, y: 0 }) >= 3;
      if (!isPanStarted && !isDistancePastThreshold)
        return;
      var point3 = info2.point;
      var timestamp2 = getFrameData().timestamp;
      _this.history.push(__assign(__assign({}, point3), { timestamp: timestamp2 }));
      var _a2 = _this.handlers, onStart = _a2.onStart, onMove = _a2.onMove;
      if (!isPanStarted) {
        onStart && onStart(_this.lastMoveEvent, info2);
        _this.startEvent = _this.lastMoveEvent;
      }
      onMove && onMove(_this.lastMoveEvent, info2);
    };
    this.handlePointerMove = function(event2, info2) {
      _this.lastMoveEvent = event2;
      _this.lastMoveEventInfo = transformPoint(info2, _this.transformPagePoint);
      if (isMouseEvent(event2) && event2.buttons === 0) {
        _this.handlePointerUp(event2, info2);
        return;
      }
      sync.update(_this.updatePoint, true);
    };
    this.handlePointerUp = function(event2, info2) {
      _this.end();
      var _a2 = _this.handlers, onEnd = _a2.onEnd, onSessionEnd = _a2.onSessionEnd;
      var panInfo = getPanInfo(transformPoint(info2, _this.transformPagePoint), _this.history);
      if (_this.startEvent && onEnd) {
        onEnd(event2, panInfo);
      }
      onSessionEnd && onSessionEnd(event2, panInfo);
    };
    if (isTouchEvent(event) && event.touches.length > 1)
      return;
    this.handlers = handlers2;
    this.transformPagePoint = transformPagePoint;
    var info = extractEventInfo(event);
    var initialInfo = transformPoint(info, this.transformPagePoint);
    var point2 = initialInfo.point;
    var timestamp = getFrameData().timestamp;
    this.history = [__assign(__assign({}, point2), { timestamp })];
    var onSessionStart = handlers2.onSessionStart;
    onSessionStart && onSessionStart(event, getPanInfo(initialInfo, this.history));
    this.removeListeners = pipe(addPointerEvent(window, "pointermove", this.handlePointerMove), addPointerEvent(window, "pointerup", this.handlePointerUp), addPointerEvent(window, "pointercancel", this.handlePointerUp));
  }
  PanSession2.prototype.updateHandlers = function(handlers2) {
    this.handlers = handlers2;
  };
  PanSession2.prototype.end = function() {
    this.removeListeners && this.removeListeners();
    cancelSync.update(this.updatePoint);
  };
  return PanSession2;
}();
function transformPoint(info, transformPagePoint) {
  return transformPagePoint ? { point: transformPagePoint(info.point) } : info;
}
function subtractPoint(a2, b2) {
  return { x: a2.x - b2.x, y: a2.y - b2.y };
}
function getPanInfo(_a, history) {
  var point2 = _a.point;
  return {
    point: point2,
    delta: subtractPoint(point2, lastDevicePoint(history)),
    offset: subtractPoint(point2, startDevicePoint(history)),
    velocity: getVelocity(history, 0.1)
  };
}
function startDevicePoint(history) {
  return history[0];
}
function lastDevicePoint(history) {
  return history[history.length - 1];
}
function getVelocity(history, timeDelta) {
  if (history.length < 2) {
    return { x: 0, y: 0 };
  }
  var i2 = history.length - 1;
  var timestampedPoint = null;
  var lastPoint = lastDevicePoint(history);
  while (i2 >= 0) {
    timestampedPoint = history[i2];
    if (lastPoint.timestamp - timestampedPoint.timestamp > secondsToMilliseconds(timeDelta)) {
      break;
    }
    i2--;
  }
  if (!timestampedPoint) {
    return { x: 0, y: 0 };
  }
  var time = (lastPoint.timestamp - timestampedPoint.timestamp) / 1e3;
  if (time === 0) {
    return { x: 0, y: 0 };
  }
  var currentVelocity = {
    x: (lastPoint.x - timestampedPoint.x) / time,
    y: (lastPoint.y - timestampedPoint.y) / time
  };
  if (currentVelocity.x === Infinity) {
    currentVelocity.x = 0;
  }
  if (currentVelocity.y === Infinity) {
    currentVelocity.y = 0;
  }
  return currentVelocity;
}
function applyConstraints(point2, _a, elastic) {
  var min = _a.min, max = _a.max;
  if (min !== void 0 && point2 < min) {
    point2 = elastic ? mix(min, point2, elastic.min) : Math.max(point2, min);
  } else if (max !== void 0 && point2 > max) {
    point2 = elastic ? mix(max, point2, elastic.max) : Math.min(point2, max);
  }
  return point2;
}
function calcRelativeAxisConstraints(axis, min, max) {
  return {
    min: min !== void 0 ? axis.min + min : void 0,
    max: max !== void 0 ? axis.max + max - (axis.max - axis.min) : void 0
  };
}
function calcRelativeConstraints(layoutBox, _a) {
  var top = _a.top, left = _a.left, bottom = _a.bottom, right = _a.right;
  return {
    x: calcRelativeAxisConstraints(layoutBox.x, left, right),
    y: calcRelativeAxisConstraints(layoutBox.y, top, bottom)
  };
}
function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
  var _a;
  var min = constraintsAxis.min - layoutAxis.min;
  var max = constraintsAxis.max - layoutAxis.max;
  if (constraintsAxis.max - constraintsAxis.min < layoutAxis.max - layoutAxis.min) {
    _a = __read([max, min], 2), min = _a[0], max = _a[1];
  }
  return { min, max };
}
function calcViewportConstraints(layoutBox, constraintsBox) {
  return {
    x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
    y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y)
  };
}
function calcOrigin(source, target) {
  var origin = 0.5;
  var sourceLength = calcLength(source);
  var targetLength = calcLength(target);
  if (targetLength > sourceLength) {
    origin = progress(target.min, target.max - sourceLength, source.min);
  } else if (sourceLength > targetLength) {
    origin = progress(source.min, source.max - targetLength, target.min);
  }
  return clamp$1(0, 1, origin);
}
function rebaseAxisConstraints(layout, constraints) {
  var relativeConstraints = {};
  if (constraints.min !== void 0) {
    relativeConstraints.min = constraints.min - layout.min;
  }
  if (constraints.max !== void 0) {
    relativeConstraints.max = constraints.max - layout.min;
  }
  return relativeConstraints;
}
var defaultElastic = 0.35;
function resolveDragElastic(dragElastic) {
  if (dragElastic === void 0) {
    dragElastic = defaultElastic;
  }
  if (dragElastic === false) {
    dragElastic = 0;
  } else if (dragElastic === true) {
    dragElastic = defaultElastic;
  }
  return {
    x: resolveAxisElastic(dragElastic, "left", "right"),
    y: resolveAxisElastic(dragElastic, "top", "bottom")
  };
}
function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
  return {
    min: resolvePointElastic(dragElastic, minLabel),
    max: resolvePointElastic(dragElastic, maxLabel)
  };
}
function resolvePointElastic(dragElastic, label) {
  var _a;
  return typeof dragElastic === "number" ? dragElastic : (_a = dragElastic[label]) !== null && _a !== void 0 ? _a : 0;
}
function convertBoundingBoxToBox(_a) {
  var top = _a.top, left = _a.left, right = _a.right, bottom = _a.bottom;
  return {
    x: { min: left, max: right },
    y: { min: top, max: bottom }
  };
}
function convertBoxToBoundingBox(_a) {
  var x2 = _a.x, y2 = _a.y;
  return { top: y2.min, right: x2.max, bottom: y2.max, left: x2.min };
}
function transformBoxPoints(point2, transformPoint2) {
  if (!transformPoint2)
    return point2;
  var topLeft = transformPoint2({ x: point2.left, y: point2.top });
  var bottomRight = transformPoint2({ x: point2.right, y: point2.bottom });
  return {
    top: topLeft.y,
    left: topLeft.x,
    bottom: bottomRight.y,
    right: bottomRight.x
  };
}
function measureViewportBox(instance, transformPoint2) {
  return convertBoundingBoxToBox(transformBoxPoints(instance.getBoundingClientRect(), transformPoint2));
}
function measurePageBox(element2, rootProjectionNode2, transformPagePoint) {
  var viewportBox = measureViewportBox(element2, transformPagePoint);
  var scroll = rootProjectionNode2.scroll;
  if (scroll) {
    translateAxis(viewportBox.x, scroll.x);
    translateAxis(viewportBox.y, scroll.y);
  }
  return viewportBox;
}
var elementDragControls = /* @__PURE__ */ new WeakMap();
var VisualElementDragControls = function() {
  function VisualElementDragControls2(visualElement2) {
    this.openGlobalLock = null;
    this.isDragging = false;
    this.currentDirection = null;
    this.originPoint = { x: 0, y: 0 };
    this.constraints = false;
    this.hasMutatedConstraints = false;
    this.elastic = createBox();
    this.visualElement = visualElement2;
  }
  VisualElementDragControls2.prototype.start = function(originEvent, _a) {
    var _this = this;
    var _b = _a === void 0 ? {} : _a, _c = _b.snapToCursor, snapToCursor = _c === void 0 ? false : _c;
    if (this.visualElement.isPresent === false)
      return;
    var onSessionStart = function(event) {
      _this.stopAnimation();
      if (snapToCursor) {
        _this.snapToCursor(extractEventInfo(event, "page").point);
      }
    };
    var onStart = function(event, info) {
      var _a2;
      var _b2 = _this.getProps(), drag2 = _b2.drag, dragPropagation = _b2.dragPropagation, onDragStart = _b2.onDragStart;
      if (drag2 && !dragPropagation) {
        if (_this.openGlobalLock)
          _this.openGlobalLock();
        _this.openGlobalLock = getGlobalLock(drag2);
        if (!_this.openGlobalLock)
          return;
      }
      _this.isDragging = true;
      _this.currentDirection = null;
      _this.resolveConstraints();
      if (_this.visualElement.projection) {
        _this.visualElement.projection.isAnimationBlocked = true;
        _this.visualElement.projection.target = void 0;
      }
      eachAxis(function(axis) {
        var _a3, _b3;
        var current = _this.getAxisMotionValue(axis).get() || 0;
        if (percent.test(current)) {
          var measuredAxis = (_b3 = (_a3 = _this.visualElement.projection) === null || _a3 === void 0 ? void 0 : _a3.layout) === null || _b3 === void 0 ? void 0 : _b3.actual[axis];
          if (measuredAxis) {
            var length_1 = calcLength(measuredAxis);
            current = length_1 * (parseFloat(current) / 100);
          }
        }
        _this.originPoint[axis] = current;
      });
      onDragStart === null || onDragStart === void 0 ? void 0 : onDragStart(event, info);
      (_a2 = _this.visualElement.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(AnimationType.Drag, true);
    };
    var onMove = function(event, info) {
      var _a2 = _this.getProps(), dragPropagation = _a2.dragPropagation, dragDirectionLock = _a2.dragDirectionLock, onDirectionLock = _a2.onDirectionLock, onDrag = _a2.onDrag;
      if (!dragPropagation && !_this.openGlobalLock)
        return;
      var offset = info.offset;
      if (dragDirectionLock && _this.currentDirection === null) {
        _this.currentDirection = getCurrentDirection(offset);
        if (_this.currentDirection !== null) {
          onDirectionLock === null || onDirectionLock === void 0 ? void 0 : onDirectionLock(_this.currentDirection);
        }
        return;
      }
      _this.updateAxis("x", info.point, offset);
      _this.updateAxis("y", info.point, offset);
      _this.visualElement.syncRender();
      onDrag === null || onDrag === void 0 ? void 0 : onDrag(event, info);
    };
    var onSessionEnd = function(event, info) {
      return _this.stop(event, info);
    };
    this.panSession = new PanSession(originEvent, {
      onSessionStart,
      onStart,
      onMove,
      onSessionEnd
    }, { transformPagePoint: this.visualElement.getTransformPagePoint() });
  };
  VisualElementDragControls2.prototype.stop = function(event, info) {
    var isDragging = this.isDragging;
    this.cancel();
    if (!isDragging)
      return;
    var velocity = info.velocity;
    this.startAnimation(velocity);
    var onDragEnd = this.getProps().onDragEnd;
    onDragEnd === null || onDragEnd === void 0 ? void 0 : onDragEnd(event, info);
  };
  VisualElementDragControls2.prototype.cancel = function() {
    var _a, _b;
    this.isDragging = false;
    if (this.visualElement.projection) {
      this.visualElement.projection.isAnimationBlocked = false;
    }
    (_a = this.panSession) === null || _a === void 0 ? void 0 : _a.end();
    this.panSession = void 0;
    var dragPropagation = this.getProps().dragPropagation;
    if (!dragPropagation && this.openGlobalLock) {
      this.openGlobalLock();
      this.openGlobalLock = null;
    }
    (_b = this.visualElement.animationState) === null || _b === void 0 ? void 0 : _b.setActive(AnimationType.Drag, false);
  };
  VisualElementDragControls2.prototype.updateAxis = function(axis, _point, offset) {
    var drag2 = this.getProps().drag;
    if (!offset || !shouldDrag(axis, drag2, this.currentDirection))
      return;
    var axisValue = this.getAxisMotionValue(axis);
    var next = this.originPoint[axis] + offset[axis];
    if (this.constraints && this.constraints[axis]) {
      next = applyConstraints(next, this.constraints[axis], this.elastic[axis]);
    }
    axisValue.set(next);
  };
  VisualElementDragControls2.prototype.resolveConstraints = function() {
    var _this = this;
    var _a = this.getProps(), dragConstraints = _a.dragConstraints, dragElastic = _a.dragElastic;
    var layout = (this.visualElement.projection || {}).layout;
    var prevConstraints = this.constraints;
    if (dragConstraints && isRefObject(dragConstraints)) {
      if (!this.constraints) {
        this.constraints = this.resolveRefConstraints();
      }
    } else {
      if (dragConstraints && layout) {
        this.constraints = calcRelativeConstraints(layout.actual, dragConstraints);
      } else {
        this.constraints = false;
      }
    }
    this.elastic = resolveDragElastic(dragElastic);
    if (prevConstraints !== this.constraints && layout && this.constraints && !this.hasMutatedConstraints) {
      eachAxis(function(axis) {
        if (_this.getAxisMotionValue(axis)) {
          _this.constraints[axis] = rebaseAxisConstraints(layout.actual[axis], _this.constraints[axis]);
        }
      });
    }
  };
  VisualElementDragControls2.prototype.resolveRefConstraints = function() {
    var _a = this.getProps(), constraints = _a.dragConstraints, onMeasureDragConstraints = _a.onMeasureDragConstraints;
    if (!constraints || !isRefObject(constraints))
      return false;
    var constraintsElement = constraints.current;
    var projection = this.visualElement.projection;
    if (!projection || !projection.layout)
      return false;
    var constraintsBox = measurePageBox(constraintsElement, projection.root, this.visualElement.getTransformPagePoint());
    var measuredConstraints = calcViewportConstraints(projection.layout.actual, constraintsBox);
    if (onMeasureDragConstraints) {
      var userConstraints = onMeasureDragConstraints(convertBoxToBoundingBox(measuredConstraints));
      this.hasMutatedConstraints = !!userConstraints;
      if (userConstraints) {
        measuredConstraints = convertBoundingBoxToBox(userConstraints);
      }
    }
    return measuredConstraints;
  };
  VisualElementDragControls2.prototype.startAnimation = function(velocity) {
    var _this = this;
    var _a = this.getProps(), drag2 = _a.drag, dragMomentum = _a.dragMomentum, dragElastic = _a.dragElastic, dragTransition = _a.dragTransition, dragSnapToOrigin = _a.dragSnapToOrigin, onDragTransitionEnd = _a.onDragTransitionEnd;
    var constraints = this.constraints || {};
    var momentumAnimations = eachAxis(function(axis) {
      var _a2;
      if (!shouldDrag(axis, drag2, _this.currentDirection)) {
        return;
      }
      var transition = (_a2 = constraints === null || constraints === void 0 ? void 0 : constraints[axis]) !== null && _a2 !== void 0 ? _a2 : {};
      if (dragSnapToOrigin)
        transition = { min: 0, max: 0 };
      var bounceStiffness = dragElastic ? 200 : 1e6;
      var bounceDamping = dragElastic ? 40 : 1e7;
      var inertia2 = __assign(__assign({ type: "inertia", velocity: dragMomentum ? velocity[axis] : 0, bounceStiffness, bounceDamping, timeConstant: 750, restDelta: 1, restSpeed: 10 }, dragTransition), transition);
      return _this.startAxisValueAnimation(axis, inertia2);
    });
    return Promise.all(momentumAnimations).then(onDragTransitionEnd);
  };
  VisualElementDragControls2.prototype.startAxisValueAnimation = function(axis, transition) {
    var axisValue = this.getAxisMotionValue(axis);
    return startAnimation(axis, axisValue, 0, transition);
  };
  VisualElementDragControls2.prototype.stopAnimation = function() {
    var _this = this;
    eachAxis(function(axis) {
      return _this.getAxisMotionValue(axis).stop();
    });
  };
  VisualElementDragControls2.prototype.getAxisMotionValue = function(axis) {
    var _a, _b;
    var dragKey = "_drag" + axis.toUpperCase();
    var externalMotionValue = this.visualElement.getProps()[dragKey];
    return externalMotionValue ? externalMotionValue : this.visualElement.getValue(axis, (_b = (_a = this.visualElement.getProps().initial) === null || _a === void 0 ? void 0 : _a[axis]) !== null && _b !== void 0 ? _b : 0);
  };
  VisualElementDragControls2.prototype.snapToCursor = function(point2) {
    var _this = this;
    eachAxis(function(axis) {
      var drag2 = _this.getProps().drag;
      if (!shouldDrag(axis, drag2, _this.currentDirection))
        return;
      var projection = _this.visualElement.projection;
      var axisValue = _this.getAxisMotionValue(axis);
      if (projection && projection.layout) {
        var _a = projection.layout.actual[axis], min = _a.min, max = _a.max;
        axisValue.set(point2[axis] - mix(min, max, 0.5));
      }
    });
  };
  VisualElementDragControls2.prototype.scalePositionWithinConstraints = function() {
    var _this = this;
    var _a;
    var _b = this.getProps(), drag2 = _b.drag, dragConstraints = _b.dragConstraints;
    var projection = this.visualElement.projection;
    if (!isRefObject(dragConstraints) || !projection || !this.constraints)
      return;
    this.stopAnimation();
    var boxProgress = { x: 0, y: 0 };
    eachAxis(function(axis) {
      var axisValue = _this.getAxisMotionValue(axis);
      if (axisValue) {
        var latest = axisValue.get();
        boxProgress[axis] = calcOrigin({ min: latest, max: latest }, _this.constraints[axis]);
      }
    });
    var transformTemplate = this.visualElement.getProps().transformTemplate;
    this.visualElement.getInstance().style.transform = transformTemplate ? transformTemplate({}, "") : "none";
    (_a = projection.root) === null || _a === void 0 ? void 0 : _a.updateScroll();
    projection.updateLayout();
    this.resolveConstraints();
    eachAxis(function(axis) {
      if (!shouldDrag(axis, drag2, null))
        return;
      var axisValue = _this.getAxisMotionValue(axis);
      var _a2 = _this.constraints[axis], min = _a2.min, max = _a2.max;
      axisValue.set(mix(min, max, boxProgress[axis]));
    });
  };
  VisualElementDragControls2.prototype.addListeners = function() {
    var _this = this;
    var _a;
    elementDragControls.set(this.visualElement, this);
    var element2 = this.visualElement.getInstance();
    var stopPointerListener = addPointerEvent(element2, "pointerdown", function(event) {
      var _a2 = _this.getProps(), drag2 = _a2.drag, _b = _a2.dragListener, dragListener = _b === void 0 ? true : _b;
      drag2 && dragListener && _this.start(event);
    });
    var measureDragConstraints = function() {
      var dragConstraints = _this.getProps().dragConstraints;
      if (isRefObject(dragConstraints)) {
        _this.constraints = _this.resolveRefConstraints();
      }
    };
    var projection = this.visualElement.projection;
    var stopMeasureLayoutListener = projection.addEventListener("measure", measureDragConstraints);
    if (projection && !projection.layout) {
      (_a = projection.root) === null || _a === void 0 ? void 0 : _a.updateScroll();
      projection.updateLayout();
    }
    measureDragConstraints();
    var stopResizeListener = addDomEvent(window, "resize", function() {
      return _this.scalePositionWithinConstraints();
    });
    projection.addEventListener("didUpdate", function(_a2) {
      var delta = _a2.delta, hasLayoutChanged = _a2.hasLayoutChanged;
      if (_this.isDragging && hasLayoutChanged) {
        eachAxis(function(axis) {
          var motionValue2 = _this.getAxisMotionValue(axis);
          if (!motionValue2)
            return;
          _this.originPoint[axis] += delta[axis].translate;
          motionValue2.set(motionValue2.get() + delta[axis].translate);
        });
        _this.visualElement.syncRender();
      }
    });
    return function() {
      stopResizeListener();
      stopPointerListener();
      stopMeasureLayoutListener();
    };
  };
  VisualElementDragControls2.prototype.getProps = function() {
    var props = this.visualElement.getProps();
    var _a = props.drag, drag2 = _a === void 0 ? false : _a, _b = props.dragDirectionLock, dragDirectionLock = _b === void 0 ? false : _b, _c = props.dragPropagation, dragPropagation = _c === void 0 ? false : _c, _d = props.dragConstraints, dragConstraints = _d === void 0 ? false : _d, _e2 = props.dragElastic, dragElastic = _e2 === void 0 ? defaultElastic : _e2, _f = props.dragMomentum, dragMomentum = _f === void 0 ? true : _f;
    return __assign(__assign({}, props), { drag: drag2, dragDirectionLock, dragPropagation, dragConstraints, dragElastic, dragMomentum });
  };
  return VisualElementDragControls2;
}();
function shouldDrag(direction, drag2, currentDirection) {
  return (drag2 === true || drag2 === direction) && (currentDirection === null || currentDirection === direction);
}
function getCurrentDirection(offset, lockThreshold) {
  if (lockThreshold === void 0) {
    lockThreshold = 10;
  }
  var direction = null;
  if (Math.abs(offset.y) > lockThreshold) {
    direction = "y";
  } else if (Math.abs(offset.x) > lockThreshold) {
    direction = "x";
  }
  return direction;
}
function useDrag(props) {
  var groupDragControls = props.dragControls, visualElement2 = props.visualElement;
  var dragControls = useConstant(function() {
    return new VisualElementDragControls(visualElement2);
  });
  react.exports.useEffect(function() {
    return groupDragControls && groupDragControls.subscribe(dragControls);
  }, [dragControls, groupDragControls]);
  react.exports.useEffect(function() {
    return dragControls.addListeners();
  }, [dragControls]);
}
function usePanGesture(_a) {
  var onPan = _a.onPan, onPanStart = _a.onPanStart, onPanEnd = _a.onPanEnd, onPanSessionStart = _a.onPanSessionStart, visualElement2 = _a.visualElement;
  var hasPanEvents = onPan || onPanStart || onPanEnd || onPanSessionStart;
  var panSession = react.exports.useRef(null);
  var transformPagePoint = react.exports.useContext(MotionConfigContext).transformPagePoint;
  var handlers2 = {
    onSessionStart: onPanSessionStart,
    onStart: onPanStart,
    onMove: onPan,
    onEnd: function(event, info) {
      panSession.current = null;
      onPanEnd && onPanEnd(event, info);
    }
  };
  react.exports.useEffect(function() {
    if (panSession.current !== null) {
      panSession.current.updateHandlers(handlers2);
    }
  });
  function onPointerDown(event) {
    panSession.current = new PanSession(event, handlers2, {
      transformPagePoint
    });
  }
  usePointerEvent(visualElement2, "pointerdown", hasPanEvents && onPointerDown);
  useUnmountEffect(function() {
    return panSession.current && panSession.current.end();
  });
}
var drag = {
  pan: makeRenderlessComponent(usePanGesture),
  drag: makeRenderlessComponent(useDrag)
};
var names = [
  "LayoutMeasure",
  "BeforeLayoutMeasure",
  "LayoutUpdate",
  "ViewportBoxUpdate",
  "Update",
  "Render",
  "AnimationComplete",
  "LayoutAnimationComplete",
  "AnimationStart",
  "LayoutAnimationStart",
  "SetAxisTarget",
  "Unmount"
];
function createLifecycles() {
  var managers = names.map(function() {
    return new SubscriptionManager();
  });
  var propSubscriptions = {};
  var lifecycles = {
    clearAllListeners: function() {
      return managers.forEach(function(manager) {
        return manager.clear();
      });
    },
    updatePropListeners: function(props) {
      names.forEach(function(name) {
        var _a;
        var on = "on" + name;
        var propListener = props[on];
        (_a = propSubscriptions[name]) === null || _a === void 0 ? void 0 : _a.call(propSubscriptions);
        if (propListener) {
          propSubscriptions[name] = lifecycles[on](propListener);
        }
      });
    }
  };
  managers.forEach(function(manager, i2) {
    lifecycles["on" + names[i2]] = function(handler) {
      return manager.add(handler);
    };
    lifecycles["notify" + names[i2]] = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return manager.notify.apply(manager, __spreadArray([], __read(args), false));
    };
  });
  return lifecycles;
}
function updateMotionValuesFromProps(element2, next, prev) {
  var _a;
  for (var key in next) {
    var nextValue = next[key];
    var prevValue = prev[key];
    if (isMotionValue(nextValue)) {
      element2.addValue(key, nextValue);
    } else if (isMotionValue(prevValue)) {
      element2.addValue(key, motionValue(nextValue));
    } else if (prevValue !== nextValue) {
      if (element2.hasValue(key)) {
        var existingValue = element2.getValue(key);
        !existingValue.hasAnimated && existingValue.set(nextValue);
      } else {
        element2.addValue(key, motionValue((_a = element2.getStaticValue(key)) !== null && _a !== void 0 ? _a : nextValue));
      }
    }
  }
  for (var key in prev) {
    if (next[key] === void 0)
      element2.removeValue(key);
  }
  return next;
}
var visualElement = function(_a) {
  var _b = _a.treeType, treeType = _b === void 0 ? "" : _b, build = _a.build, getBaseTarget = _a.getBaseTarget, makeTargetAnimatable = _a.makeTargetAnimatable, measureViewportBox2 = _a.measureViewportBox, renderInstance = _a.render, readValueFromInstance = _a.readValueFromInstance, removeValueFromRenderState = _a.removeValueFromRenderState, sortNodePosition = _a.sortNodePosition, scrapeMotionValuesFromProps2 = _a.scrapeMotionValuesFromProps;
  return function(_a2, options) {
    var parent = _a2.parent, props = _a2.props, presenceId = _a2.presenceId, blockInitialAnimation = _a2.blockInitialAnimation, visualState = _a2.visualState, shouldReduceMotion = _a2.shouldReduceMotion;
    if (options === void 0) {
      options = {};
    }
    var isMounted = false;
    var latestValues = visualState.latestValues, renderState = visualState.renderState;
    var instance;
    var lifecycles = createLifecycles();
    var values = /* @__PURE__ */ new Map();
    var valueSubscriptions = /* @__PURE__ */ new Map();
    var prevMotionValues = {};
    var baseTarget = __assign({}, latestValues);
    var removeFromVariantTree;
    function render() {
      if (!instance || !isMounted)
        return;
      triggerBuild();
      renderInstance(instance, renderState, props.style, element2.projection);
    }
    function triggerBuild() {
      build(element2, renderState, latestValues, options, props);
    }
    function update() {
      lifecycles.notifyUpdate(latestValues);
    }
    function bindToMotionValue(key2, value2) {
      var removeOnChange = value2.onChange(function(latestValue) {
        latestValues[key2] = latestValue;
        props.onUpdate && sync.update(update, false, true);
      });
      var removeOnRenderRequest = value2.onRenderRequest(element2.scheduleRender);
      valueSubscriptions.set(key2, function() {
        removeOnChange();
        removeOnRenderRequest();
      });
    }
    var initialMotionValues = scrapeMotionValuesFromProps2(props);
    for (var key in initialMotionValues) {
      var value = initialMotionValues[key];
      if (latestValues[key] !== void 0 && isMotionValue(value)) {
        value.set(latestValues[key], false);
      }
    }
    var isControllingVariants = checkIfControllingVariants(props);
    var isVariantNode = checkIfVariantNode(props);
    var element2 = __assign(__assign({
      treeType,
      current: null,
      depth: parent ? parent.depth + 1 : 0,
      parent,
      children: /* @__PURE__ */ new Set(),
      presenceId,
      shouldReduceMotion,
      variantChildren: isVariantNode ? /* @__PURE__ */ new Set() : void 0,
      isVisible: void 0,
      manuallyAnimateOnMount: Boolean(parent === null || parent === void 0 ? void 0 : parent.isMounted()),
      blockInitialAnimation,
      isMounted: function() {
        return Boolean(instance);
      },
      mount: function(newInstance) {
        isMounted = true;
        instance = element2.current = newInstance;
        if (element2.projection) {
          element2.projection.mount(newInstance);
        }
        if (isVariantNode && parent && !isControllingVariants) {
          removeFromVariantTree = parent === null || parent === void 0 ? void 0 : parent.addVariantChild(element2);
        }
        values.forEach(function(value2, key2) {
          return bindToMotionValue(key2, value2);
        });
        parent === null || parent === void 0 ? void 0 : parent.children.add(element2);
        element2.setProps(props);
      },
      unmount: function() {
        var _a3;
        (_a3 = element2.projection) === null || _a3 === void 0 ? void 0 : _a3.unmount();
        cancelSync.update(update);
        cancelSync.render(render);
        valueSubscriptions.forEach(function(remove) {
          return remove();
        });
        removeFromVariantTree === null || removeFromVariantTree === void 0 ? void 0 : removeFromVariantTree();
        parent === null || parent === void 0 ? void 0 : parent.children.delete(element2);
        lifecycles.clearAllListeners();
        instance = void 0;
        isMounted = false;
      },
      addVariantChild: function(child) {
        var _a3;
        var closestVariantNode = element2.getClosestVariantNode();
        if (closestVariantNode) {
          (_a3 = closestVariantNode.variantChildren) === null || _a3 === void 0 ? void 0 : _a3.add(child);
          return function() {
            return closestVariantNode.variantChildren.delete(child);
          };
        }
      },
      sortNodePosition: function(other) {
        if (!sortNodePosition || treeType !== other.treeType)
          return 0;
        return sortNodePosition(element2.getInstance(), other.getInstance());
      },
      getClosestVariantNode: function() {
        return isVariantNode ? element2 : parent === null || parent === void 0 ? void 0 : parent.getClosestVariantNode();
      },
      getLayoutId: function() {
        return props.layoutId;
      },
      getInstance: function() {
        return instance;
      },
      getStaticValue: function(key2) {
        return latestValues[key2];
      },
      setStaticValue: function(key2, value2) {
        return latestValues[key2] = value2;
      },
      getLatestValues: function() {
        return latestValues;
      },
      setVisibility: function(visibility) {
        if (element2.isVisible === visibility)
          return;
        element2.isVisible = visibility;
        element2.scheduleRender();
      },
      makeTargetAnimatable: function(target, canMutate) {
        if (canMutate === void 0) {
          canMutate = true;
        }
        return makeTargetAnimatable(element2, target, props, canMutate);
      },
      measureViewportBox: function() {
        return measureViewportBox2(instance, props);
      },
      addValue: function(key2, value2) {
        if (element2.hasValue(key2))
          element2.removeValue(key2);
        values.set(key2, value2);
        latestValues[key2] = value2.get();
        bindToMotionValue(key2, value2);
      },
      removeValue: function(key2) {
        var _a3;
        values.delete(key2);
        (_a3 = valueSubscriptions.get(key2)) === null || _a3 === void 0 ? void 0 : _a3();
        valueSubscriptions.delete(key2);
        delete latestValues[key2];
        removeValueFromRenderState(key2, renderState);
      },
      hasValue: function(key2) {
        return values.has(key2);
      },
      getValue: function(key2, defaultValue) {
        var value2 = values.get(key2);
        if (value2 === void 0 && defaultValue !== void 0) {
          value2 = motionValue(defaultValue);
          element2.addValue(key2, value2);
        }
        return value2;
      },
      forEachValue: function(callback) {
        return values.forEach(callback);
      },
      readValue: function(key2) {
        var _a3;
        return (_a3 = latestValues[key2]) !== null && _a3 !== void 0 ? _a3 : readValueFromInstance(instance, key2, options);
      },
      setBaseTarget: function(key2, value2) {
        baseTarget[key2] = value2;
      },
      getBaseTarget: function(key2) {
        if (getBaseTarget) {
          var target = getBaseTarget(props, key2);
          if (target !== void 0 && !isMotionValue(target))
            return target;
        }
        return baseTarget[key2];
      }
    }, lifecycles), {
      build: function() {
        triggerBuild();
        return renderState;
      },
      scheduleRender: function() {
        sync.render(render, false, true);
      },
      syncRender: render,
      setProps: function(newProps) {
        if (newProps.transformTemplate || props.transformTemplate) {
          element2.scheduleRender();
        }
        props = newProps;
        lifecycles.updatePropListeners(newProps);
        prevMotionValues = updateMotionValuesFromProps(element2, scrapeMotionValuesFromProps2(props), prevMotionValues);
      },
      getProps: function() {
        return props;
      },
      getVariant: function(name) {
        var _a3;
        return (_a3 = props.variants) === null || _a3 === void 0 ? void 0 : _a3[name];
      },
      getDefaultTransition: function() {
        return props.transition;
      },
      getTransformPagePoint: function() {
        return props.transformPagePoint;
      },
      getVariantContext: function(startAtParent) {
        if (startAtParent === void 0) {
          startAtParent = false;
        }
        if (startAtParent)
          return parent === null || parent === void 0 ? void 0 : parent.getVariantContext();
        if (!isControllingVariants) {
          var context_1 = (parent === null || parent === void 0 ? void 0 : parent.getVariantContext()) || {};
          if (props.initial !== void 0) {
            context_1.initial = props.initial;
          }
          return context_1;
        }
        var context = {};
        for (var i2 = 0; i2 < numVariantProps; i2++) {
          var name_1 = variantProps[i2];
          var prop = props[name_1];
          if (isVariantLabel(prop) || prop === false) {
            context[name_1] = prop;
          }
        }
        return context;
      }
    });
    return element2;
  };
};
var variantProps = __spreadArray(["initial"], __read(variantPriorityOrder), false);
var numVariantProps = variantProps.length;
function isCSSVariable(value) {
  return typeof value === "string" && value.startsWith("var(--");
}
var cssVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function parseCSSVariable(current) {
  var match = cssVariableRegex.exec(current);
  if (!match)
    return [,];
  var _a = __read(match, 3), token = _a[1], fallback = _a[2];
  return [token, fallback];
}
function getVariableValue(current, element2, depth) {
  var _a = __read(parseCSSVariable(current), 2), token = _a[0], fallback = _a[1];
  if (!token)
    return;
  var resolved = window.getComputedStyle(element2).getPropertyValue(token);
  if (resolved) {
    return resolved.trim();
  } else if (isCSSVariable(fallback)) {
    return getVariableValue(fallback, element2);
  } else {
    return fallback;
  }
}
function resolveCSSVariables(visualElement2, _a, transitionEnd) {
  var _b;
  var target = __rest(_a, []);
  var element2 = visualElement2.getInstance();
  if (!(element2 instanceof Element))
    return { target, transitionEnd };
  if (transitionEnd) {
    transitionEnd = __assign({}, transitionEnd);
  }
  visualElement2.forEachValue(function(value) {
    var current2 = value.get();
    if (!isCSSVariable(current2))
      return;
    var resolved2 = getVariableValue(current2, element2);
    if (resolved2)
      value.set(resolved2);
  });
  for (var key in target) {
    var current = target[key];
    if (!isCSSVariable(current))
      continue;
    var resolved = getVariableValue(current, element2);
    if (!resolved)
      continue;
    target[key] = resolved;
    if (transitionEnd)
      (_b = transitionEnd[key]) !== null && _b !== void 0 ? _b : transitionEnd[key] = current;
  }
  return { target, transitionEnd };
}
var positionalKeys = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  "x",
  "y"
]);
var isPositionalKey = function(key) {
  return positionalKeys.has(key);
};
var hasPositionalKey = function(target) {
  return Object.keys(target).some(isPositionalKey);
};
var setAndResetVelocity = function(value, to) {
  value.set(to, false);
  value.set(to);
};
var isNumOrPxType = function(v2) {
  return v2 === number$1 || v2 === px;
};
var BoundingBoxDimension;
(function(BoundingBoxDimension2) {
  BoundingBoxDimension2["width"] = "width";
  BoundingBoxDimension2["height"] = "height";
  BoundingBoxDimension2["left"] = "left";
  BoundingBoxDimension2["right"] = "right";
  BoundingBoxDimension2["top"] = "top";
  BoundingBoxDimension2["bottom"] = "bottom";
})(BoundingBoxDimension || (BoundingBoxDimension = {}));
var getPosFromMatrix = function(matrix, pos) {
  return parseFloat(matrix.split(", ")[pos]);
};
var getTranslateFromMatrix = function(pos2, pos3) {
  return function(_bbox, _a) {
    var transform = _a.transform;
    if (transform === "none" || !transform)
      return 0;
    var matrix3d = transform.match(/^matrix3d\((.+)\)$/);
    if (matrix3d) {
      return getPosFromMatrix(matrix3d[1], pos3);
    } else {
      var matrix = transform.match(/^matrix\((.+)\)$/);
      if (matrix) {
        return getPosFromMatrix(matrix[1], pos2);
      } else {
        return 0;
      }
    }
  };
};
var transformKeys = /* @__PURE__ */ new Set(["x", "y", "z"]);
var nonTranslationalTransformKeys = transformProps.filter(function(key) {
  return !transformKeys.has(key);
});
function removeNonTranslationalTransform(visualElement2) {
  var removedTransforms = [];
  nonTranslationalTransformKeys.forEach(function(key) {
    var value = visualElement2.getValue(key);
    if (value !== void 0) {
      removedTransforms.push([key, value.get()]);
      value.set(key.startsWith("scale") ? 1 : 0);
    }
  });
  if (removedTransforms.length)
    visualElement2.syncRender();
  return removedTransforms;
}
var positionalValues = {
  width: function(_a, _b) {
    var x2 = _a.x;
    var _c = _b.paddingLeft, paddingLeft = _c === void 0 ? "0" : _c, _d = _b.paddingRight, paddingRight = _d === void 0 ? "0" : _d;
    return x2.max - x2.min - parseFloat(paddingLeft) - parseFloat(paddingRight);
  },
  height: function(_a, _b) {
    var y2 = _a.y;
    var _c = _b.paddingTop, paddingTop = _c === void 0 ? "0" : _c, _d = _b.paddingBottom, paddingBottom = _d === void 0 ? "0" : _d;
    return y2.max - y2.min - parseFloat(paddingTop) - parseFloat(paddingBottom);
  },
  top: function(_bbox, _a) {
    var top = _a.top;
    return parseFloat(top);
  },
  left: function(_bbox, _a) {
    var left = _a.left;
    return parseFloat(left);
  },
  bottom: function(_a, _b) {
    var y2 = _a.y;
    var top = _b.top;
    return parseFloat(top) + (y2.max - y2.min);
  },
  right: function(_a, _b) {
    var x2 = _a.x;
    var left = _b.left;
    return parseFloat(left) + (x2.max - x2.min);
  },
  x: getTranslateFromMatrix(4, 13),
  y: getTranslateFromMatrix(5, 14)
};
var convertChangedValueTypes = function(target, visualElement2, changedKeys) {
  var originBbox = visualElement2.measureViewportBox();
  var element2 = visualElement2.getInstance();
  var elementComputedStyle = getComputedStyle(element2);
  var display = elementComputedStyle.display;
  var origin = {};
  if (display === "none") {
    visualElement2.setStaticValue("display", target.display || "block");
  }
  changedKeys.forEach(function(key) {
    origin[key] = positionalValues[key](originBbox, elementComputedStyle);
  });
  visualElement2.syncRender();
  var targetBbox = visualElement2.measureViewportBox();
  changedKeys.forEach(function(key) {
    var value = visualElement2.getValue(key);
    setAndResetVelocity(value, origin[key]);
    target[key] = positionalValues[key](targetBbox, elementComputedStyle);
  });
  return target;
};
var checkAndConvertChangedValueTypes = function(visualElement2, target, origin, transitionEnd) {
  if (origin === void 0) {
    origin = {};
  }
  if (transitionEnd === void 0) {
    transitionEnd = {};
  }
  target = __assign({}, target);
  transitionEnd = __assign({}, transitionEnd);
  var targetPositionalKeys = Object.keys(target).filter(isPositionalKey);
  var removedTransformValues = [];
  var hasAttemptedToRemoveTransformValues = false;
  var changedValueTypeKeys = [];
  targetPositionalKeys.forEach(function(key) {
    var value = visualElement2.getValue(key);
    if (!visualElement2.hasValue(key))
      return;
    var from = origin[key];
    var fromType = findDimensionValueType(from);
    var to = target[key];
    var toType;
    if (isKeyframesTarget(to)) {
      var numKeyframes = to.length;
      var fromIndex = to[0] === null ? 1 : 0;
      from = to[fromIndex];
      fromType = findDimensionValueType(from);
      for (var i2 = fromIndex; i2 < numKeyframes; i2++) {
        if (!toType) {
          toType = findDimensionValueType(to[i2]);
        } else {
          invariant(findDimensionValueType(to[i2]) === toType);
        }
      }
    } else {
      toType = findDimensionValueType(to);
    }
    if (fromType !== toType) {
      if (isNumOrPxType(fromType) && isNumOrPxType(toType)) {
        var current = value.get();
        if (typeof current === "string") {
          value.set(parseFloat(current));
        }
        if (typeof to === "string") {
          target[key] = parseFloat(to);
        } else if (Array.isArray(to) && toType === px) {
          target[key] = to.map(parseFloat);
        }
      } else if ((fromType === null || fromType === void 0 ? void 0 : fromType.transform) && (toType === null || toType === void 0 ? void 0 : toType.transform) && (from === 0 || to === 0)) {
        if (from === 0) {
          value.set(toType.transform(from));
        } else {
          target[key] = fromType.transform(to);
        }
      } else {
        if (!hasAttemptedToRemoveTransformValues) {
          removedTransformValues = removeNonTranslationalTransform(visualElement2);
          hasAttemptedToRemoveTransformValues = true;
        }
        changedValueTypeKeys.push(key);
        transitionEnd[key] = transitionEnd[key] !== void 0 ? transitionEnd[key] : target[key];
        setAndResetVelocity(value, to);
      }
    }
  });
  if (changedValueTypeKeys.length) {
    var scrollY_1 = changedValueTypeKeys.indexOf("height") >= 0 ? window.pageYOffset : null;
    var convertedTarget = convertChangedValueTypes(target, visualElement2, changedValueTypeKeys);
    if (removedTransformValues.length) {
      removedTransformValues.forEach(function(_a) {
        var _b = __read(_a, 2), key = _b[0], value = _b[1];
        visualElement2.getValue(key).set(value);
      });
    }
    visualElement2.syncRender();
    if (scrollY_1 !== null)
      window.scrollTo({ top: scrollY_1 });
    return { target: convertedTarget, transitionEnd };
  } else {
    return { target, transitionEnd };
  }
};
function unitConversion(visualElement2, target, origin, transitionEnd) {
  return hasPositionalKey(target) ? checkAndConvertChangedValueTypes(visualElement2, target, origin, transitionEnd) : { target, transitionEnd };
}
var parseDomVariant = function(visualElement2, target, origin, transitionEnd) {
  var resolved = resolveCSSVariables(visualElement2, target, transitionEnd);
  target = resolved.target;
  transitionEnd = resolved.transitionEnd;
  return unitConversion(visualElement2, target, origin, transitionEnd);
};
function getComputedStyle$1(element2) {
  return window.getComputedStyle(element2);
}
var htmlConfig = {
  treeType: "dom",
  readValueFromInstance: function(domElement, key) {
    if (isTransformProp(key)) {
      var defaultType = getDefaultValueType(key);
      return defaultType ? defaultType.default || 0 : 0;
    } else {
      var computedStyle = getComputedStyle$1(domElement);
      return (isCSSVariable$1(key) ? computedStyle.getPropertyValue(key) : computedStyle[key]) || 0;
    }
  },
  sortNodePosition: function(a2, b2) {
    return a2.compareDocumentPosition(b2) & 2 ? 1 : -1;
  },
  getBaseTarget: function(props, key) {
    var _a;
    return (_a = props.style) === null || _a === void 0 ? void 0 : _a[key];
  },
  measureViewportBox: function(element2, _a) {
    var transformPagePoint = _a.transformPagePoint;
    return measureViewportBox(element2, transformPagePoint);
  },
  resetTransform: function(element2, domElement, props) {
    var transformTemplate = props.transformTemplate;
    domElement.style.transform = transformTemplate ? transformTemplate({}, "") : "none";
    element2.scheduleRender();
  },
  restoreTransform: function(instance, mutableState) {
    instance.style.transform = mutableState.style.transform;
  },
  removeValueFromRenderState: function(key, _a) {
    var vars = _a.vars, style = _a.style;
    delete vars[key];
    delete style[key];
  },
  makeTargetAnimatable: function(element2, _a, _b, isMounted) {
    var transformValues = _b.transformValues;
    if (isMounted === void 0) {
      isMounted = true;
    }
    var transition = _a.transition, transitionEnd = _a.transitionEnd, target = __rest(_a, ["transition", "transitionEnd"]);
    var origin = getOrigin(target, transition || {}, element2);
    if (transformValues) {
      if (transitionEnd)
        transitionEnd = transformValues(transitionEnd);
      if (target)
        target = transformValues(target);
      if (origin)
        origin = transformValues(origin);
    }
    if (isMounted) {
      checkTargetForNewValues(element2, target, origin);
      var parsed = parseDomVariant(element2, target, origin, transitionEnd);
      transitionEnd = parsed.transitionEnd;
      target = parsed.target;
    }
    return __assign({ transition, transitionEnd }, target);
  },
  scrapeMotionValuesFromProps: scrapeMotionValuesFromProps$1,
  build: function(element2, renderState, latestValues, options, props) {
    if (element2.isVisible !== void 0) {
      renderState.style.visibility = element2.isVisible ? "visible" : "hidden";
    }
    buildHTMLStyles(renderState, latestValues, options, props.transformTemplate);
  },
  render: renderHTML
};
var htmlVisualElement = visualElement(htmlConfig);
var svgVisualElement = visualElement(__assign(__assign({}, htmlConfig), { getBaseTarget: function(props, key) {
  return props[key];
}, readValueFromInstance: function(domElement, key) {
  var _a;
  if (isTransformProp(key)) {
    return ((_a = getDefaultValueType(key)) === null || _a === void 0 ? void 0 : _a.default) || 0;
  }
  key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
  return domElement.getAttribute(key);
}, scrapeMotionValuesFromProps, build: function(_element, renderState, latestValues, options, props) {
  buildSVGAttrs(renderState, latestValues, options, props.transformTemplate);
}, render: renderSVG }));
var createDomVisualElement = function(Component, options) {
  return isSVGComponent(Component) ? svgVisualElement(options, { enableHardwareAcceleration: false }) : htmlVisualElement(options, { enableHardwareAcceleration: true });
};
function pixelsToPercent(pixels, axis) {
  if (axis.max === axis.min)
    return 0;
  return pixels / (axis.max - axis.min) * 100;
}
var correctBorderRadius = {
  correct: function(latest, node) {
    if (!node.target)
      return latest;
    if (typeof latest === "string") {
      if (px.test(latest)) {
        latest = parseFloat(latest);
      } else {
        return latest;
      }
    }
    var x2 = pixelsToPercent(latest, node.target.x);
    var y2 = pixelsToPercent(latest, node.target.y);
    return "".concat(x2, "% ").concat(y2, "%");
  }
};
var varToken = "_$css";
var correctBoxShadow = {
  correct: function(latest, _a) {
    var treeScale = _a.treeScale, projectionDelta = _a.projectionDelta;
    var original = latest;
    var containsCSSVariables = latest.includes("var(");
    var cssVariables = [];
    if (containsCSSVariables) {
      latest = latest.replace(cssVariableRegex, function(match) {
        cssVariables.push(match);
        return varToken;
      });
    }
    var shadow = complex.parse(latest);
    if (shadow.length > 5)
      return original;
    var template = complex.createTransformer(latest);
    var offset = typeof shadow[0] !== "number" ? 1 : 0;
    var xScale = projectionDelta.x.scale * treeScale.x;
    var yScale = projectionDelta.y.scale * treeScale.y;
    shadow[0 + offset] /= xScale;
    shadow[1 + offset] /= yScale;
    var averageScale = mix(xScale, yScale, 0.5);
    if (typeof shadow[2 + offset] === "number")
      shadow[2 + offset] /= averageScale;
    if (typeof shadow[3 + offset] === "number")
      shadow[3 + offset] /= averageScale;
    var output = template(shadow);
    if (containsCSSVariables) {
      var i_1 = 0;
      output = output.replace(varToken, function() {
        var cssVariable = cssVariables[i_1];
        i_1++;
        return cssVariable;
      });
    }
    return output;
  }
};
var jsxRuntime$1 = { exports: {} };
var reactJsxRuntime_production_min = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f$1 = react.exports, k$1 = Symbol.for("react.element"), l$1 = Symbol.for("react.fragment"), m$1 = Object.prototype.hasOwnProperty, n$2 = f$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$1 = { key: true, ref: true, __self: true, __source: true };
function q$1(c2, a2, g2) {
  var b2, d2 = {}, e2 = null, h2 = null;
  g2 !== void 0 && (e2 = "" + g2);
  a2.key !== void 0 && (e2 = "" + a2.key);
  a2.ref !== void 0 && (h2 = a2.ref);
  for (b2 in a2)
    m$1.call(a2, b2) && !p$1.hasOwnProperty(b2) && (d2[b2] = a2[b2]);
  if (c2 && c2.defaultProps)
    for (b2 in a2 = c2.defaultProps, a2)
      d2[b2] === void 0 && (d2[b2] = a2[b2]);
  return { $$typeof: k$1, type: c2, key: e2, ref: h2, props: d2, _owner: n$2.current };
}
reactJsxRuntime_production_min.Fragment = l$1;
reactJsxRuntime_production_min.jsx = q$1;
reactJsxRuntime_production_min.jsxs = q$1;
{
  jsxRuntime$1.exports = reactJsxRuntime_production_min;
}
const jsx = jsxRuntime$1.exports.jsx;
const jsxs = jsxRuntime$1.exports.jsxs;
const Fragment = jsxRuntime$1.exports.Fragment;
var jsxRuntime = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  jsx,
  jsxs,
  Fragment
}, Symbol.toStringTag, { value: "Module" }));
var MeasureLayoutWithContext = function(_super) {
  __extends(MeasureLayoutWithContext2, _super);
  function MeasureLayoutWithContext2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  MeasureLayoutWithContext2.prototype.componentDidMount = function() {
    var _this = this;
    var _a = this.props, visualElement2 = _a.visualElement, layoutGroup = _a.layoutGroup, switchLayoutGroup = _a.switchLayoutGroup, layoutId = _a.layoutId;
    var projection = visualElement2.projection;
    addScaleCorrector(defaultScaleCorrectors);
    if (projection) {
      if (layoutGroup === null || layoutGroup === void 0 ? void 0 : layoutGroup.group)
        layoutGroup.group.add(projection);
      if ((switchLayoutGroup === null || switchLayoutGroup === void 0 ? void 0 : switchLayoutGroup.register) && layoutId) {
        switchLayoutGroup.register(projection);
      }
      projection.root.didUpdate();
      projection.addEventListener("animationComplete", function() {
        _this.safeToRemove();
      });
      projection.setOptions(__assign(__assign({}, projection.options), {
        onExitComplete: function() {
          return _this.safeToRemove();
        }
      }));
    }
    globalProjectionState.hasEverUpdated = true;
  };
  MeasureLayoutWithContext2.prototype.getSnapshotBeforeUpdate = function(prevProps) {
    var _this = this;
    var _a = this.props, layoutDependency = _a.layoutDependency, visualElement2 = _a.visualElement, drag2 = _a.drag, isPresent = _a.isPresent;
    var projection = visualElement2.projection;
    if (!projection)
      return null;
    projection.isPresent = isPresent;
    if (drag2 || prevProps.layoutDependency !== layoutDependency || layoutDependency === void 0) {
      projection.willUpdate();
    } else {
      this.safeToRemove();
    }
    if (prevProps.isPresent !== isPresent) {
      if (isPresent) {
        projection.promote();
      } else if (!projection.relegate()) {
        sync.postRender(function() {
          var _a2;
          if (!((_a2 = projection.getStack()) === null || _a2 === void 0 ? void 0 : _a2.members.length)) {
            _this.safeToRemove();
          }
        });
      }
    }
    return null;
  };
  MeasureLayoutWithContext2.prototype.componentDidUpdate = function() {
    var projection = this.props.visualElement.projection;
    if (projection) {
      projection.root.didUpdate();
      if (!projection.currentAnimation && projection.isLead()) {
        this.safeToRemove();
      }
    }
  };
  MeasureLayoutWithContext2.prototype.componentWillUnmount = function() {
    var _a = this.props, visualElement2 = _a.visualElement, layoutGroup = _a.layoutGroup, promoteContext = _a.switchLayoutGroup;
    var projection = visualElement2.projection;
    if (projection) {
      projection.scheduleCheckAfterUnmount();
      if (layoutGroup === null || layoutGroup === void 0 ? void 0 : layoutGroup.group)
        layoutGroup.group.remove(projection);
      if (promoteContext === null || promoteContext === void 0 ? void 0 : promoteContext.deregister)
        promoteContext.deregister(projection);
    }
  };
  MeasureLayoutWithContext2.prototype.safeToRemove = function() {
    var safeToRemove = this.props.safeToRemove;
    safeToRemove === null || safeToRemove === void 0 ? void 0 : safeToRemove();
  };
  MeasureLayoutWithContext2.prototype.render = function() {
    return null;
  };
  return MeasureLayoutWithContext2;
}(React.Component);
function MeasureLayout(props) {
  var _a = __read(usePresence(), 2), isPresent = _a[0], safeToRemove = _a[1];
  var layoutGroup = react.exports.useContext(LayoutGroupContext);
  return /* @__PURE__ */ jsx(MeasureLayoutWithContext, __spreadValues({}, __assign({}, props, {
    layoutGroup,
    switchLayoutGroup: react.exports.useContext(SwitchLayoutGroupContext),
    isPresent,
    safeToRemove
  })));
}
var defaultScaleCorrectors = {
  borderRadius: __assign(__assign({}, correctBorderRadius), {
    applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
  }),
  borderTopLeftRadius: correctBorderRadius,
  borderTopRightRadius: correctBorderRadius,
  borderBottomLeftRadius: correctBorderRadius,
  borderBottomRightRadius: correctBorderRadius,
  boxShadow: correctBoxShadow
};
var layoutFeatures = {
  measureLayout: MeasureLayout
};
var DocumentProjectionNode = createProjectionNode({
  attachResizeListener: function(ref, notify) {
    return addDomEvent(ref, "resize", notify);
  },
  measureScroll: function() {
    return {
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop
    };
  }
});
var rootProjectionNode = {
  current: void 0
};
var HTMLProjectionNode = createProjectionNode({
  measureScroll: function(instance) {
    return {
      x: instance.scrollLeft,
      y: instance.scrollTop
    };
  },
  defaultParent: function() {
    if (!rootProjectionNode.current) {
      var documentNode = new DocumentProjectionNode(0, {});
      documentNode.mount(window);
      documentNode.setOptions({ layoutScroll: true });
      rootProjectionNode.current = documentNode;
    }
    return rootProjectionNode.current;
  },
  resetTransform: function(instance, value) {
    instance.style.transform = value !== null && value !== void 0 ? value : "none";
  }
});
var featureBundle = __assign(__assign(__assign(__assign({}, animations), gestureAnimations), drag), layoutFeatures);
var motion = /* @__PURE__ */ createMotionProxy(function(Component, config) {
  return createDomMotionConfig(Component, config, featureBundle, createDomVisualElement, HTMLProjectionNode);
});
const AppSidebar = styled.div`
    width: 30vw;
    height: calc(100vh - 50px);
    border: 1px solid ${(props) => props.theme.colors.secundary};
`;
const AppSidebarHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 25px;
    border-bottom: 1px solid ${(props) => props.theme.colors.secundary};

    h1 {
        margin: 0;
    }

    span {
        height: 40px;
        border-radius: 100%;
        transition: background 0.5s;

        svg {
            font-size: 2.5em;
        }
    }

    span:hover {
        background-color: #ddd;
    }
`;
const AppSidebarNote = styled.div`
    padding: 25px;
    cursor: pointer; 
    margin-left: 0;
    
    p {
        margin: 10px 0;
    }
    
    small {
        display: block;
        color: #999;
    }
`;
const AppSidebarNotes = styled.div`
    height: calc(100vh - 78px);
    overflow-y: scroll;
    overflow-x: hidden;
    padding-bottom: 100px;

    ${AppSidebarNote}:hover {
        background: ${(props) => props.theme.colors.secundary};
    }

    ${AppSidebarNote}.active,
    ${AppSidebarNote}.active small {
        background: #63A46C;
        color: white;
    }  
`;
const SidebarNoteTitle = styled.div`
    display: flex;
    justify-content: space-between;

    button {
        color: #AA4465;
    }

    button:hover {
        color: #7B0828;
    }
`;
const Sidebar = ({
  sidebar,
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote
}) => {
  const sortedNotes = notes.sort((a2, b2) => b2.lastModified - a2.lastModified);
  return /* @__PURE__ */ jsx(motion.div, {
    initial: sidebar ? {
      x: "-30vw",
      opacity: 0,
      width: "0vw"
    } : {
      x: 0,
      opacity: 1,
      width: "30vw"
    },
    animate: sidebar ? {
      x: 0,
      opacity: 1,
      width: "30vw"
    } : {
      x: "-30vw",
      opacity: 0,
      width: "0vw"
    },
    transition: {
      ease: "easeInOut",
      duration: 0.3
    },
    children: /* @__PURE__ */ jsxs(AppSidebar, {
      children: [/* @__PURE__ */ jsxs(AppSidebarHeader, {
        children: [/* @__PURE__ */ jsx("h1", {
          children: "Notas"
        }), /* @__PURE__ */ jsx(motion.span, {
          whileHover: {
            scale: 1.1
          },
          whileTap: {
            scale: 0.95,
            borderRadius: "100%"
          },
          onClick: onAddNote,
          children: /* @__PURE__ */ jsx(HiPlusSm, {})
        })]
      }), /* @__PURE__ */ jsx(AppSidebarNotes, {
        children: sortedNotes.map(({
          id: id2,
          title,
          body,
          lastModified
        }, i2) => /* @__PURE__ */ jsxs(AppSidebarNote, {
          className: `${id2 === activeNote && "active"}`,
          onClick: () => setActiveNote(id2),
          children: [/* @__PURE__ */ jsxs(SidebarNoteTitle, {
            children: [/* @__PURE__ */ jsx("strong", {
              children: title
            }), /* @__PURE__ */ jsx("button", {
              onClick: (e2) => onDeleteNote(id2),
              children: "Deletar"
            })]
          }), /* @__PURE__ */ jsx("p", {
            children: body && body.substr(0, 100) + "..."
          }), /* @__PURE__ */ jsxs("small", {
            className: "note-meta",
            children: ["\xDAltima Modifica\xE7\xE3o", " ", new Date(lastModified).toLocaleDateString("pt-BR", {
              hour: "2-digit",
              minute: "2-digit"
            })]
          })]
        }, id2))
      })]
    })
  });
};
const Container$1 = styled.div`
    display: flex;
    width: 100vw;
    height: 50px;
    background-color: #333333;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    color: #fff;

    h1 {
        font-size: 2em;
    }

    svg { 
        font-size: 2em;
    }
`;
var reactSwitch = { exports: {} };
var reactSwitch_min = {};
var require$$0 = /* @__PURE__ */ getAugmentedNamespace(jsxRuntime);
var _jsx = require$$0.jsx;
var _jsxs = require$$0.jsxs;
Object.defineProperty(reactSwitch_min, "__esModule", {
  value: true
});
var t$1 = react.exports;
function i() {
  return (i = Object.assign || function(t2) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var s2 = arguments[i2];
      for (var n2 in s2)
        Object.prototype.hasOwnProperty.call(s2, n2) && (t2[n2] = s2[n2]);
    }
    return t2;
  }).apply(this, arguments);
}
var s = /* @__PURE__ */ _jsx("svg", {
  viewBox: "-2 -5 14 20",
  height: "100%",
  width: "100%",
  style: {
    position: "absolute",
    top: 0
  },
  children: /* @__PURE__ */ _jsx("path", {
    d: "M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",
    fill: "#fff",
    fillRule: "evenodd"
  })
}), n$1 = /* @__PURE__ */ _jsx("svg", {
  height: "100%",
  width: "100%",
  viewBox: "-2 -5 17 21",
  style: {
    position: "absolute",
    top: 0
  },
  children: /* @__PURE__ */ _jsx("path", {
    d: "M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",
    fill: "#fff",
    fillRule: "evenodd"
  })
});
function o(t2) {
  if (t2.length === 7)
    return t2;
  for (var i2 = "#", s2 = 1; s2 < 4; s2 += 1)
    i2 += t2[s2] + t2[s2];
  return i2;
}
function h$1(t2, i2, s2, n2, h2) {
  return function(t3, i3, s3, n3, o2) {
    var h3 = (t3 - s3) / (i3 - s3);
    if (h3 === 0)
      return n3;
    if (h3 === 1)
      return o2;
    for (var e2 = "#", a2 = 1; a2 < 6; a2 += 2) {
      var r2 = parseInt(n3.substr(a2, 2), 16), l2 = parseInt(o2.substr(a2, 2), 16), u2 = Math.round((1 - h3) * r2 + h3 * l2).toString(16);
      u2.length === 1 && (u2 = "0" + u2), e2 += u2;
    }
    return e2;
  }(t2, i2, s2, o(n2), o(h2));
}
var e$1 = function(s2) {
  function n2(t2) {
    s2.call(this, t2);
    var i2 = t2.height, n3 = t2.width, o2 = t2.checked;
    this.t = t2.handleDiameter || i2 - 2, this.i = Math.max(n3 - i2, n3 - (i2 + this.t) / 2), this.o = Math.max(0, (i2 - this.t) / 2), this.state = {
      h: o2 ? this.i : this.o
    }, this.l = 0, this.u = 0, this.p = this.p.bind(this), this.v = this.v.bind(this), this.g = this.g.bind(this), this.k = this.k.bind(this), this.M = this.M.bind(this), this.m = this.m.bind(this), this.T = this.T.bind(this), this.$ = this.$.bind(this), this.C = this.C.bind(this), this.D = this.D.bind(this), this.O = this.O.bind(this), this.S = this.S.bind(this);
  }
  return s2 && (n2.__proto__ = s2), (n2.prototype = Object.create(s2 && s2.prototype)).constructor = n2, n2.prototype.componentDidMount = function() {
    this.W = true;
  }, n2.prototype.componentDidUpdate = function(t2) {
    t2.checked !== this.props.checked && this.setState({
      h: this.props.checked ? this.i : this.o
    });
  }, n2.prototype.componentWillUnmount = function() {
    this.W = false;
  }, n2.prototype.I = function(t2) {
    this.H.focus(), this.setState({
      R: t2,
      j: true,
      B: Date.now()
    });
  }, n2.prototype.L = function(t2) {
    var i2 = this.state, s3 = i2.R, n3 = i2.h, o2 = (this.props.checked ? this.i : this.o) + t2 - s3;
    i2.N || t2 === s3 || this.setState({
      N: true
    });
    var h2 = Math.min(this.i, Math.max(this.o, o2));
    h2 !== n3 && this.setState({
      h: h2
    });
  }, n2.prototype.U = function(t2) {
    var i2 = this.state, s3 = i2.h, n3 = i2.N, o2 = i2.B, h2 = this.props.checked, e2 = (this.i + this.o) / 2;
    this.setState({
      h: this.props.checked ? this.i : this.o
    });
    var a2 = Date.now() - o2;
    (!n3 || a2 < 250 || h2 && s3 <= e2 || !h2 && s3 >= e2) && this.A(t2), this.W && this.setState({
      N: false,
      j: false
    }), this.l = Date.now();
  }, n2.prototype.p = function(t2) {
    t2.preventDefault(), typeof t2.button == "number" && t2.button !== 0 || (this.I(t2.clientX), window.addEventListener("mousemove", this.v), window.addEventListener("mouseup", this.g));
  }, n2.prototype.v = function(t2) {
    t2.preventDefault(), this.L(t2.clientX);
  }, n2.prototype.g = function(t2) {
    this.U(t2), window.removeEventListener("mousemove", this.v), window.removeEventListener("mouseup", this.g);
  }, n2.prototype.k = function(t2) {
    this.X = null, this.I(t2.touches[0].clientX);
  }, n2.prototype.M = function(t2) {
    this.L(t2.touches[0].clientX);
  }, n2.prototype.m = function(t2) {
    t2.preventDefault(), this.U(t2);
  }, n2.prototype.$ = function(t2) {
    Date.now() - this.l > 50 && (this.A(t2), Date.now() - this.u > 50 && this.W && this.setState({
      j: false
    }));
  }, n2.prototype.C = function() {
    this.u = Date.now();
  }, n2.prototype.D = function() {
    this.setState({
      j: true
    });
  }, n2.prototype.O = function() {
    this.setState({
      j: false
    });
  }, n2.prototype.S = function(t2) {
    this.H = t2;
  }, n2.prototype.T = function(t2) {
    t2.preventDefault(), this.H.focus(), this.A(t2), this.W && this.setState({
      j: false
    });
  }, n2.prototype.A = function(t2) {
    var i2 = this.props;
    (0, i2.onChange)(!i2.checked, t2, i2.id);
  }, n2.prototype.render = function() {
    var s3 = this.props, n3 = s3.checked, o2 = s3.disabled, e2 = s3.className, a2 = s3.offColor, r2 = s3.onColor, l2 = s3.offHandleColor, u2 = s3.onHandleColor, c2 = s3.checkedIcon, d2 = s3.uncheckedIcon, f2 = s3.checkedHandleIcon, p2 = s3.uncheckedHandleIcon, b2 = s3.boxShadow, v2 = s3.activeBoxShadow, g2 = s3.height, y2 = s3.width, w2 = s3.borderRadius, k2 = function(t2, i2) {
      var s4 = {};
      for (var n4 in t2)
        Object.prototype.hasOwnProperty.call(t2, n4) && i2.indexOf(n4) === -1 && (s4[n4] = t2[n4]);
      return s4;
    }(s3, ["checked", "disabled", "className", "offColor", "onColor", "offHandleColor", "onHandleColor", "checkedIcon", "uncheckedIcon", "checkedHandleIcon", "uncheckedHandleIcon", "boxShadow", "activeBoxShadow", "height", "width", "borderRadius", "handleDiameter"]), M2 = this.state, m2 = M2.h, T2 = M2.N, x2 = M2.j, $2 = {
      position: "relative",
      display: "inline-block",
      textAlign: "left",
      opacity: o2 ? 0.5 : 1,
      direction: "ltr",
      borderRadius: g2 / 2,
      WebkitTransition: "opacity 0.25s",
      MozTransition: "opacity 0.25s",
      transition: "opacity 0.25s",
      touchAction: "none",
      WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
      WebkitUserSelect: "none",
      MozUserSelect: "none",
      msUserSelect: "none",
      userSelect: "none"
    }, C2 = {
      height: g2,
      width: y2,
      margin: Math.max(0, (this.t - g2) / 2),
      position: "relative",
      background: h$1(m2, this.i, this.o, a2, r2),
      borderRadius: typeof w2 == "number" ? w2 : g2 / 2,
      cursor: o2 ? "default" : "pointer",
      WebkitTransition: T2 ? null : "background 0.25s",
      MozTransition: T2 ? null : "background 0.25s",
      transition: T2 ? null : "background 0.25s"
    }, D2 = {
      height: g2,
      width: Math.min(1.5 * g2, y2 - (this.t + g2) / 2 + 1),
      position: "relative",
      opacity: (m2 - this.o) / (this.i - this.o),
      pointerEvents: "none",
      WebkitTransition: T2 ? null : "opacity 0.25s",
      MozTransition: T2 ? null : "opacity 0.25s",
      transition: T2 ? null : "opacity 0.25s"
    }, O2 = {
      height: g2,
      width: Math.min(1.5 * g2, y2 - (this.t + g2) / 2 + 1),
      position: "absolute",
      opacity: 1 - (m2 - this.o) / (this.i - this.o),
      right: 0,
      top: 0,
      pointerEvents: "none",
      WebkitTransition: T2 ? null : "opacity 0.25s",
      MozTransition: T2 ? null : "opacity 0.25s",
      transition: T2 ? null : "opacity 0.25s"
    }, S2 = {
      height: this.t,
      width: this.t,
      background: h$1(m2, this.i, this.o, l2, u2),
      display: "inline-block",
      cursor: o2 ? "default" : "pointer",
      borderRadius: typeof w2 == "number" ? w2 - 1 : "50%",
      position: "absolute",
      transform: "translateX(" + m2 + "px)",
      top: Math.max(0, (g2 - this.t) / 2),
      outline: 0,
      boxShadow: x2 ? v2 : b2,
      border: 0,
      WebkitTransition: T2 ? null : "background-color 0.25s, transform 0.25s, box-shadow 0.15s",
      MozTransition: T2 ? null : "background-color 0.25s, transform 0.25s, box-shadow 0.15s",
      transition: T2 ? null : "background-color 0.25s, transform 0.25s, box-shadow 0.15s"
    }, W2 = {
      height: this.t,
      width: this.t,
      opacity: Math.max(2 * (1 - (m2 - this.o) / (this.i - this.o) - 0.5), 0),
      position: "absolute",
      left: 0,
      top: 0,
      pointerEvents: "none",
      WebkitTransition: T2 ? null : "opacity 0.25s",
      MozTransition: T2 ? null : "opacity 0.25s",
      transition: T2 ? null : "opacity 0.25s"
    }, z2 = {
      height: this.t,
      width: this.t,
      opacity: Math.max(2 * ((m2 - this.o) / (this.i - this.o) - 0.5), 0),
      position: "absolute",
      left: 0,
      top: 0,
      pointerEvents: "none",
      WebkitTransition: T2 ? null : "opacity 0.25s",
      MozTransition: T2 ? null : "opacity 0.25s",
      transition: T2 ? null : "opacity 0.25s"
    };
    return /* @__PURE__ */ _jsxs("div", {
      className: e2,
      style: $2,
      children: [/* @__PURE__ */ _jsxs("div", {
        className: "react-switch-bg",
        style: C2,
        onClick: o2 ? null : this.T,
        onMouseDown: function(t2) {
          return t2.preventDefault();
        },
        children: [c2 && /* @__PURE__ */ _jsx("div", {
          style: D2,
          children: c2
        }), d2 && /* @__PURE__ */ _jsx("div", {
          style: O2,
          children: d2
        })]
      }), /* @__PURE__ */ _jsxs("div", {
        className: "react-switch-handle",
        style: S2,
        onClick: function(t2) {
          return t2.preventDefault();
        },
        onMouseDown: o2 ? null : this.p,
        onTouchStart: o2 ? null : this.k,
        onTouchMove: o2 ? null : this.M,
        onTouchEnd: o2 ? null : this.m,
        onTouchCancel: o2 ? null : this.O,
        children: [p2 && /* @__PURE__ */ _jsx("div", {
          style: W2,
          children: p2
        }), f2 && /* @__PURE__ */ _jsx("div", {
          style: z2,
          children: f2
        })]
      }), /* @__PURE__ */ _jsx("input", __spreadValues({}, i({}, {
        type: "checkbox",
        role: "switch",
        "aria-checked": n3,
        checked: n3,
        disabled: o2,
        style: {
          border: 0,
          clip: "rect(0 0 0 0)",
          height: 1,
          margin: -1,
          overflow: "hidden",
          padding: 0,
          position: "absolute",
          width: 1
        }
      }, k2, {
        ref: this.S,
        onFocus: this.D,
        onBlur: this.O,
        onKeyUp: this.C,
        onChange: this.$
      })))]
    });
  }, n2;
}(t$1.Component);
e$1.defaultProps = {
  disabled: false,
  offColor: "#888",
  onColor: "#080",
  offHandleColor: "#fff",
  onHandleColor: "#fff",
  uncheckedIcon: s,
  checkedIcon: n$1,
  boxShadow: null,
  activeBoxShadow: "0 0 2px 3px #3bf",
  height: 28,
  width: 56
}, reactSwitch_min.default = e$1;
{
  reactSwitch.exports = reactSwitch_min;
}
var S = reactSwitch.exports;
function FiChevronsLeft(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "polyline", "attr": { "points": "11 17 6 12 11 7" } }, { "tag": "polyline", "attr": { "points": "18 17 13 12 18 7" } }] })(props);
}
function FiMenu(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "line", "attr": { "x1": "3", "y1": "12", "x2": "21", "y2": "12" } }, { "tag": "line", "attr": { "x1": "3", "y1": "6", "x2": "21", "y2": "6" } }, { "tag": "line", "attr": { "x1": "3", "y1": "18", "x2": "21", "y2": "18" } }] })(props);
}
const Switch = S.default ? S.default : S;
function Header({
  sidebar,
  setSidebar,
  toggleTheme
}) {
  const {
    title
  } = react.exports.useContext(Ge);
  return /* @__PURE__ */ jsxs(Container$1, {
    children: [sidebar ? /* @__PURE__ */ jsx(motion.span, {
      whileHover: {
        scale: 1.2
      },
      whileTap: {
        scale: 0.8,
        borderRadius: "100%"
      },
      onClick: () => setSidebar(!sidebar),
      children: /* @__PURE__ */ jsx(FiChevronsLeft, {})
    }) : /* @__PURE__ */ jsx(motion.span, {
      whileHover: {
        scale: 1.2
      },
      whileTap: {
        scale: 0.8,
        borderRadius: "100%"
      },
      onClick: () => setSidebar(!sidebar),
      children: /* @__PURE__ */ jsx(FiMenu, {})
    }), /* @__PURE__ */ jsx("h1", {
      children: "Notrisk"
    }), /* @__PURE__ */ jsx(Switch, {
      onChange: toggleTheme,
      checked: title === "dark",
      checkedIcon: false,
      uncheckedIcon: false,
      height: 10,
      width: 30,
      handleDiameter: 18,
      offColor: "#ddd",
      onColor: "#63A46C"
    })]
  });
}
const protocols = ["http", "https", "mailto", "tel"];
function uriTransformer(uri) {
  const url = (uri || "").trim();
  const first = url.charAt(0);
  if (first === "#" || first === "/") {
    return url;
  }
  const colon = url.indexOf(":");
  if (colon === -1) {
    return url;
  }
  let index2 = -1;
  while (++index2 < protocols.length) {
    const protocol = protocols[index2];
    if (colon === protocol.length && url.slice(0, protocol.length).toLowerCase() === protocol) {
      return url;
    }
  }
  index2 = url.indexOf("?");
  if (index2 !== -1 && colon > index2) {
    return url;
  }
  index2 = url.indexOf("#");
  if (index2 !== -1 && colon > index2) {
    return url;
  }
  return "javascript:void(0)";
}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var isBuffer = function isBuffer2(obj) {
  return obj != null && obj.constructor != null && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj);
};
function stringifyPosition(value) {
  if (!value || typeof value !== "object") {
    return "";
  }
  if ("position" in value || "type" in value) {
    return position(value.position);
  }
  if ("start" in value || "end" in value) {
    return position(value);
  }
  if ("line" in value || "column" in value) {
    return point$1(value);
  }
  return "";
}
function point$1(point2) {
  return index(point2 && point2.line) + ":" + index(point2 && point2.column);
}
function position(pos) {
  return point$1(pos && pos.start) + "-" + point$1(pos && pos.end);
}
function index(value) {
  return value && typeof value === "number" ? value : 1;
}
class VFileMessage extends Error {
  constructor(reason, place, origin) {
    const parts = [null, null];
    let position2 = {
      start: { line: null, column: null },
      end: { line: null, column: null }
    };
    super();
    if (typeof place === "string") {
      origin = place;
      place = void 0;
    }
    if (typeof origin === "string") {
      const index2 = origin.indexOf(":");
      if (index2 === -1) {
        parts[1] = origin;
      } else {
        parts[0] = origin.slice(0, index2);
        parts[1] = origin.slice(index2 + 1);
      }
    }
    if (place) {
      if ("type" in place || "position" in place) {
        if (place.position) {
          position2 = place.position;
        }
      } else if ("start" in place || "end" in place) {
        position2 = place;
      } else if ("line" in place || "column" in place) {
        position2.start = place;
      }
    }
    this.name = stringifyPosition(place) || "1:1";
    this.message = typeof reason === "object" ? reason.message : reason;
    this.stack = typeof reason === "object" ? reason.stack : "";
    this.reason = this.message;
    this.fatal;
    this.line = position2.start.line;
    this.column = position2.start.column;
    this.source = parts[0];
    this.ruleId = parts[1];
    this.position = position2;
    this.actual;
    this.expected;
    this.file;
    this.url;
    this.note;
  }
}
VFileMessage.prototype.file = "";
VFileMessage.prototype.name = "";
VFileMessage.prototype.reason = "";
VFileMessage.prototype.message = "";
VFileMessage.prototype.stack = "";
VFileMessage.prototype.fatal = null;
VFileMessage.prototype.column = null;
VFileMessage.prototype.line = null;
VFileMessage.prototype.source = null;
VFileMessage.prototype.ruleId = null;
VFileMessage.prototype.position = null;
const path$1 = { basename, dirname, extname, join, sep: "/" };
function basename(path2, ext) {
  if (ext !== void 0 && typeof ext !== "string") {
    throw new TypeError('"ext" argument must be a string');
  }
  assertPath$1(path2);
  let start = 0;
  let end = -1;
  let index2 = path2.length;
  let seenNonSlash;
  if (ext === void 0 || ext.length === 0 || ext.length > path2.length) {
    while (index2--) {
      if (path2.charCodeAt(index2) === 47) {
        if (seenNonSlash) {
          start = index2 + 1;
          break;
        }
      } else if (end < 0) {
        seenNonSlash = true;
        end = index2 + 1;
      }
    }
    return end < 0 ? "" : path2.slice(start, end);
  }
  if (ext === path2) {
    return "";
  }
  let firstNonSlashEnd = -1;
  let extIndex = ext.length - 1;
  while (index2--) {
    if (path2.charCodeAt(index2) === 47) {
      if (seenNonSlash) {
        start = index2 + 1;
        break;
      }
    } else {
      if (firstNonSlashEnd < 0) {
        seenNonSlash = true;
        firstNonSlashEnd = index2 + 1;
      }
      if (extIndex > -1) {
        if (path2.charCodeAt(index2) === ext.charCodeAt(extIndex--)) {
          if (extIndex < 0) {
            end = index2;
          }
        } else {
          extIndex = -1;
          end = firstNonSlashEnd;
        }
      }
    }
  }
  if (start === end) {
    end = firstNonSlashEnd;
  } else if (end < 0) {
    end = path2.length;
  }
  return path2.slice(start, end);
}
function dirname(path2) {
  assertPath$1(path2);
  if (path2.length === 0) {
    return ".";
  }
  let end = -1;
  let index2 = path2.length;
  let unmatchedSlash;
  while (--index2) {
    if (path2.charCodeAt(index2) === 47) {
      if (unmatchedSlash) {
        end = index2;
        break;
      }
    } else if (!unmatchedSlash) {
      unmatchedSlash = true;
    }
  }
  return end < 0 ? path2.charCodeAt(0) === 47 ? "/" : "." : end === 1 && path2.charCodeAt(0) === 47 ? "//" : path2.slice(0, end);
}
function extname(path2) {
  assertPath$1(path2);
  let index2 = path2.length;
  let end = -1;
  let startPart = 0;
  let startDot = -1;
  let preDotState = 0;
  let unmatchedSlash;
  while (index2--) {
    const code2 = path2.charCodeAt(index2);
    if (code2 === 47) {
      if (unmatchedSlash) {
        startPart = index2 + 1;
        break;
      }
      continue;
    }
    if (end < 0) {
      unmatchedSlash = true;
      end = index2 + 1;
    }
    if (code2 === 46) {
      if (startDot < 0) {
        startDot = index2;
      } else if (preDotState !== 1) {
        preDotState = 1;
      }
    } else if (startDot > -1) {
      preDotState = -1;
    }
  }
  if (startDot < 0 || end < 0 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return "";
  }
  return path2.slice(startDot, end);
}
function join(...segments) {
  let index2 = -1;
  let joined;
  while (++index2 < segments.length) {
    assertPath$1(segments[index2]);
    if (segments[index2]) {
      joined = joined === void 0 ? segments[index2] : joined + "/" + segments[index2];
    }
  }
  return joined === void 0 ? "." : normalize$1(joined);
}
function normalize$1(path2) {
  assertPath$1(path2);
  const absolute = path2.charCodeAt(0) === 47;
  let value = normalizeString(path2, !absolute);
  if (value.length === 0 && !absolute) {
    value = ".";
  }
  if (value.length > 0 && path2.charCodeAt(path2.length - 1) === 47) {
    value += "/";
  }
  return absolute ? "/" + value : value;
}
function normalizeString(path2, allowAboveRoot) {
  let result = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let index2 = -1;
  let code2;
  let lastSlashIndex;
  while (++index2 <= path2.length) {
    if (index2 < path2.length) {
      code2 = path2.charCodeAt(index2);
    } else if (code2 === 47) {
      break;
    } else {
      code2 = 47;
    }
    if (code2 === 47) {
      if (lastSlash === index2 - 1 || dots === 1)
        ;
      else if (lastSlash !== index2 - 1 && dots === 2) {
        if (result.length < 2 || lastSegmentLength !== 2 || result.charCodeAt(result.length - 1) !== 46 || result.charCodeAt(result.length - 2) !== 46) {
          if (result.length > 2) {
            lastSlashIndex = result.lastIndexOf("/");
            if (lastSlashIndex !== result.length - 1) {
              if (lastSlashIndex < 0) {
                result = "";
                lastSegmentLength = 0;
              } else {
                result = result.slice(0, lastSlashIndex);
                lastSegmentLength = result.length - 1 - result.lastIndexOf("/");
              }
              lastSlash = index2;
              dots = 0;
              continue;
            }
          } else if (result.length > 0) {
            result = "";
            lastSegmentLength = 0;
            lastSlash = index2;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          result = result.length > 0 ? result + "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (result.length > 0) {
          result += "/" + path2.slice(lastSlash + 1, index2);
        } else {
          result = path2.slice(lastSlash + 1, index2);
        }
        lastSegmentLength = index2 - lastSlash - 1;
      }
      lastSlash = index2;
      dots = 0;
    } else if (code2 === 46 && dots > -1) {
      dots++;
    } else {
      dots = -1;
    }
  }
  return result;
}
function assertPath$1(path2) {
  if (typeof path2 !== "string") {
    throw new TypeError("Path must be a string. Received " + JSON.stringify(path2));
  }
}
const proc = { cwd };
function cwd() {
  return "/";
}
function isUrl(fileURLOrPath) {
  return fileURLOrPath !== null && typeof fileURLOrPath === "object" && fileURLOrPath.href && fileURLOrPath.origin;
}
function urlToPath(path2) {
  if (typeof path2 === "string") {
    path2 = new URL(path2);
  } else if (!isUrl(path2)) {
    const error = new TypeError('The "path" argument must be of type string or an instance of URL. Received `' + path2 + "`");
    error.code = "ERR_INVALID_ARG_TYPE";
    throw error;
  }
  if (path2.protocol !== "file:") {
    const error = new TypeError("The URL must be of scheme file");
    error.code = "ERR_INVALID_URL_SCHEME";
    throw error;
  }
  return getPathFromURLPosix(path2);
}
function getPathFromURLPosix(url) {
  if (url.hostname !== "") {
    const error = new TypeError('File URL host must be "localhost" or empty on darwin');
    error.code = "ERR_INVALID_FILE_URL_HOST";
    throw error;
  }
  const pathname = url.pathname;
  let index2 = -1;
  while (++index2 < pathname.length) {
    if (pathname.charCodeAt(index2) === 37 && pathname.charCodeAt(index2 + 1) === 50) {
      const third = pathname.charCodeAt(index2 + 2);
      if (third === 70 || third === 102) {
        const error = new TypeError("File URL path must not include encoded / characters");
        error.code = "ERR_INVALID_FILE_URL_PATH";
        throw error;
      }
    }
  }
  return decodeURIComponent(pathname);
}
const order = ["history", "path", "basename", "stem", "extname", "dirname"];
class VFile {
  constructor(value) {
    let options;
    if (!value) {
      options = {};
    } else if (typeof value === "string" || isBuffer(value)) {
      options = { value };
    } else if (isUrl(value)) {
      options = { path: value };
    } else {
      options = value;
    }
    this.data = {};
    this.messages = [];
    this.history = [];
    this.cwd = proc.cwd();
    this.value;
    this.stored;
    this.result;
    this.map;
    let index2 = -1;
    while (++index2 < order.length) {
      const prop2 = order[index2];
      if (prop2 in options && options[prop2] !== void 0) {
        this[prop2] = prop2 === "history" ? [...options[prop2]] : options[prop2];
      }
    }
    let prop;
    for (prop in options) {
      if (!order.includes(prop))
        this[prop] = options[prop];
    }
  }
  get path() {
    return this.history[this.history.length - 1];
  }
  set path(path2) {
    if (isUrl(path2)) {
      path2 = urlToPath(path2);
    }
    assertNonEmpty(path2, "path");
    if (this.path !== path2) {
      this.history.push(path2);
    }
  }
  get dirname() {
    return typeof this.path === "string" ? path$1.dirname(this.path) : void 0;
  }
  set dirname(dirname2) {
    assertPath(this.basename, "dirname");
    this.path = path$1.join(dirname2 || "", this.basename);
  }
  get basename() {
    return typeof this.path === "string" ? path$1.basename(this.path) : void 0;
  }
  set basename(basename2) {
    assertNonEmpty(basename2, "basename");
    assertPart(basename2, "basename");
    this.path = path$1.join(this.dirname || "", basename2);
  }
  get extname() {
    return typeof this.path === "string" ? path$1.extname(this.path) : void 0;
  }
  set extname(extname2) {
    assertPart(extname2, "extname");
    assertPath(this.dirname, "extname");
    if (extname2) {
      if (extname2.charCodeAt(0) !== 46) {
        throw new Error("`extname` must start with `.`");
      }
      if (extname2.includes(".", 1)) {
        throw new Error("`extname` cannot contain multiple dots");
      }
    }
    this.path = path$1.join(this.dirname, this.stem + (extname2 || ""));
  }
  get stem() {
    return typeof this.path === "string" ? path$1.basename(this.path, this.extname) : void 0;
  }
  set stem(stem) {
    assertNonEmpty(stem, "stem");
    assertPart(stem, "stem");
    this.path = path$1.join(this.dirname || "", stem + (this.extname || ""));
  }
  toString(encoding) {
    return (this.value || "").toString(encoding);
  }
  message(reason, place, origin) {
    const message = new VFileMessage(reason, place, origin);
    if (this.path) {
      message.name = this.path + ":" + message.name;
      message.file = this.path;
    }
    message.fatal = false;
    this.messages.push(message);
    return message;
  }
  info(reason, place, origin) {
    const message = this.message(reason, place, origin);
    message.fatal = null;
    return message;
  }
  fail(reason, place, origin) {
    const message = this.message(reason, place, origin);
    message.fatal = true;
    throw message;
  }
}
function assertPart(part, name) {
  if (part && part.includes(path$1.sep)) {
    throw new Error("`" + name + "` cannot be a path: did not expect `" + path$1.sep + "`");
  }
}
function assertNonEmpty(part, name) {
  if (!part) {
    throw new Error("`" + name + "` cannot be empty");
  }
}
function assertPath(path2, name) {
  if (!path2) {
    throw new Error("Setting `" + name + "` requires `path` to be set too");
  }
}
function bail(error) {
  if (error) {
    throw error;
  }
}
var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var defineProperty = Object.defineProperty;
var gOPD = Object.getOwnPropertyDescriptor;
var isArray = function isArray2(arr) {
  if (typeof Array.isArray === "function") {
    return Array.isArray(arr);
  }
  return toStr.call(arr) === "[object Array]";
};
var isPlainObject$1 = function isPlainObject2(obj) {
  if (!obj || toStr.call(obj) !== "[object Object]") {
    return false;
  }
  var hasOwnConstructor = hasOwn.call(obj, "constructor");
  var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, "isPrototypeOf");
  if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
    return false;
  }
  var key;
  for (key in obj) {
  }
  return typeof key === "undefined" || hasOwn.call(obj, key);
};
var setProperty = function setProperty2(target, options) {
  if (defineProperty && options.name === "__proto__") {
    defineProperty(target, options.name, {
      enumerable: true,
      configurable: true,
      value: options.newValue,
      writable: true
    });
  } else {
    target[options.name] = options.newValue;
  }
};
var getProperty = function getProperty2(obj, name) {
  if (name === "__proto__") {
    if (!hasOwn.call(obj, name)) {
      return void 0;
    } else if (gOPD) {
      return gOPD(obj, name).value;
    }
  }
  return obj[name];
};
var extend = function extend2() {
  var options, name, src, copy, copyIsArray, clone;
  var target = arguments[0];
  var i2 = 1;
  var length = arguments.length;
  var deep = false;
  if (typeof target === "boolean") {
    deep = target;
    target = arguments[1] || {};
    i2 = 2;
  }
  if (target == null || typeof target !== "object" && typeof target !== "function") {
    target = {};
  }
  for (; i2 < length; ++i2) {
    options = arguments[i2];
    if (options != null) {
      for (name in options) {
        src = getProperty(target, name);
        copy = getProperty(options, name);
        if (target !== copy) {
          if (deep && copy && (isPlainObject$1(copy) || (copyIsArray = isArray(copy)))) {
            if (copyIsArray) {
              copyIsArray = false;
              clone = src && isArray(src) ? src : [];
            } else {
              clone = src && isPlainObject$1(src) ? src : {};
            }
            setProperty(target, { name, newValue: extend2(deep, clone, copy) });
          } else if (typeof copy !== "undefined") {
            setProperty(target, { name, newValue: copy });
          }
        }
      }
    }
  }
  return target;
};
function isPlainObject(value) {
  if (Object.prototype.toString.call(value) !== "[object Object]") {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  return prototype === null || prototype === Object.prototype;
}
function trough() {
  const fns = [];
  const pipeline = { run, use };
  return pipeline;
  function run(...values) {
    let middlewareIndex = -1;
    const callback = values.pop();
    if (typeof callback !== "function") {
      throw new TypeError("Expected function as last argument, not " + callback);
    }
    next(null, ...values);
    function next(error, ...output) {
      const fn = fns[++middlewareIndex];
      let index2 = -1;
      if (error) {
        callback(error);
        return;
      }
      while (++index2 < values.length) {
        if (output[index2] === null || output[index2] === void 0) {
          output[index2] = values[index2];
        }
      }
      values = output;
      if (fn) {
        wrap$1(fn, next)(...output);
      } else {
        callback(null, ...output);
      }
    }
  }
  function use(middelware) {
    if (typeof middelware !== "function") {
      throw new TypeError("Expected `middelware` to be a function, not " + middelware);
    }
    fns.push(middelware);
    return pipeline;
  }
}
function wrap$1(middleware, callback) {
  let called;
  return wrapped;
  function wrapped(...parameters) {
    const fnExpectsCallback = middleware.length > parameters.length;
    let result;
    if (fnExpectsCallback) {
      parameters.push(done);
    }
    try {
      result = middleware.apply(this, parameters);
    } catch (error) {
      const exception = error;
      if (fnExpectsCallback && called) {
        throw exception;
      }
      return done(exception);
    }
    if (!fnExpectsCallback) {
      if (result instanceof Promise) {
        result.then(then, done);
      } else if (result instanceof Error) {
        done(result);
      } else {
        then(result);
      }
    }
  }
  function done(error, ...output) {
    if (!called) {
      called = true;
      callback(error, ...output);
    }
  }
  function then(value) {
    done(null, value);
  }
}
const unified = base().freeze();
const own$8 = {}.hasOwnProperty;
function base() {
  const transformers = trough();
  const attachers = [];
  let namespace = {};
  let frozen;
  let freezeIndex = -1;
  processor.data = data;
  processor.Parser = void 0;
  processor.Compiler = void 0;
  processor.freeze = freeze;
  processor.attachers = attachers;
  processor.use = use;
  processor.parse = parse2;
  processor.stringify = stringify2;
  processor.run = run;
  processor.runSync = runSync;
  processor.process = process2;
  processor.processSync = processSync;
  return processor;
  function processor() {
    const destination = base();
    let index2 = -1;
    while (++index2 < attachers.length) {
      destination.use(...attachers[index2]);
    }
    destination.data(extend(true, {}, namespace));
    return destination;
  }
  function data(key, value) {
    if (typeof key === "string") {
      if (arguments.length === 2) {
        assertUnfrozen("data", frozen);
        namespace[key] = value;
        return processor;
      }
      return own$8.call(namespace, key) && namespace[key] || null;
    }
    if (key) {
      assertUnfrozen("data", frozen);
      namespace = key;
      return processor;
    }
    return namespace;
  }
  function freeze() {
    if (frozen) {
      return processor;
    }
    while (++freezeIndex < attachers.length) {
      const [attacher, ...options] = attachers[freezeIndex];
      if (options[0] === false) {
        continue;
      }
      if (options[0] === true) {
        options[0] = void 0;
      }
      const transformer = attacher.call(processor, ...options);
      if (typeof transformer === "function") {
        transformers.use(transformer);
      }
    }
    frozen = true;
    freezeIndex = Number.POSITIVE_INFINITY;
    return processor;
  }
  function use(value, ...options) {
    let settings;
    assertUnfrozen("use", frozen);
    if (value === null || value === void 0)
      ;
    else if (typeof value === "function") {
      addPlugin(value, ...options);
    } else if (typeof value === "object") {
      if (Array.isArray(value)) {
        addList(value);
      } else {
        addPreset(value);
      }
    } else {
      throw new TypeError("Expected usable value, not `" + value + "`");
    }
    if (settings) {
      namespace.settings = Object.assign(namespace.settings || {}, settings);
    }
    return processor;
    function add(value2) {
      if (typeof value2 === "function") {
        addPlugin(value2);
      } else if (typeof value2 === "object") {
        if (Array.isArray(value2)) {
          const [plugin, ...options2] = value2;
          addPlugin(plugin, ...options2);
        } else {
          addPreset(value2);
        }
      } else {
        throw new TypeError("Expected usable value, not `" + value2 + "`");
      }
    }
    function addPreset(result) {
      addList(result.plugins);
      if (result.settings) {
        settings = Object.assign(settings || {}, result.settings);
      }
    }
    function addList(plugins) {
      let index2 = -1;
      if (plugins === null || plugins === void 0)
        ;
      else if (Array.isArray(plugins)) {
        while (++index2 < plugins.length) {
          const thing = plugins[index2];
          add(thing);
        }
      } else {
        throw new TypeError("Expected a list of plugins, not `" + plugins + "`");
      }
    }
    function addPlugin(plugin, value2) {
      let index2 = -1;
      let entry;
      while (++index2 < attachers.length) {
        if (attachers[index2][0] === plugin) {
          entry = attachers[index2];
          break;
        }
      }
      if (entry) {
        if (isPlainObject(entry[1]) && isPlainObject(value2)) {
          value2 = extend(true, entry[1], value2);
        }
        entry[1] = value2;
      } else {
        attachers.push([...arguments]);
      }
    }
  }
  function parse2(doc) {
    processor.freeze();
    const file = vfile(doc);
    const Parser = processor.Parser;
    assertParser("parse", Parser);
    if (newable(Parser, "parse")) {
      return new Parser(String(file), file).parse();
    }
    return Parser(String(file), file);
  }
  function stringify2(node, doc) {
    processor.freeze();
    const file = vfile(doc);
    const Compiler = processor.Compiler;
    assertCompiler("stringify", Compiler);
    assertNode(node);
    if (newable(Compiler, "compile")) {
      return new Compiler(node, file).compile();
    }
    return Compiler(node, file);
  }
  function run(node, doc, callback) {
    assertNode(node);
    processor.freeze();
    if (!callback && typeof doc === "function") {
      callback = doc;
      doc = void 0;
    }
    if (!callback) {
      return new Promise(executor);
    }
    executor(null, callback);
    function executor(resolve, reject) {
      transformers.run(node, vfile(doc), done);
      function done(error, tree, file) {
        tree = tree || node;
        if (error) {
          reject(error);
        } else if (resolve) {
          resolve(tree);
        } else {
          callback(null, tree, file);
        }
      }
    }
  }
  function runSync(node, file) {
    let result;
    let complete;
    processor.run(node, file, done);
    assertDone("runSync", "run", complete);
    return result;
    function done(error, tree) {
      bail(error);
      result = tree;
      complete = true;
    }
  }
  function process2(doc, callback) {
    processor.freeze();
    assertParser("process", processor.Parser);
    assertCompiler("process", processor.Compiler);
    if (!callback) {
      return new Promise(executor);
    }
    executor(null, callback);
    function executor(resolve, reject) {
      const file = vfile(doc);
      processor.run(processor.parse(file), file, (error, tree, file2) => {
        if (error || !tree || !file2) {
          done(error);
        } else {
          const result = processor.stringify(tree, file2);
          if (result === void 0 || result === null)
            ;
          else if (looksLikeAVFileValue(result)) {
            file2.value = result;
          } else {
            file2.result = result;
          }
          done(error, file2);
        }
      });
      function done(error, file2) {
        if (error || !file2) {
          reject(error);
        } else if (resolve) {
          resolve(file2);
        } else {
          callback(null, file2);
        }
      }
    }
  }
  function processSync(doc) {
    let complete;
    processor.freeze();
    assertParser("processSync", processor.Parser);
    assertCompiler("processSync", processor.Compiler);
    const file = vfile(doc);
    processor.process(file, done);
    assertDone("processSync", "process", complete);
    return file;
    function done(error) {
      complete = true;
      bail(error);
    }
  }
}
function newable(value, name) {
  return typeof value === "function" && value.prototype && (keys(value.prototype) || name in value.prototype);
}
function keys(value) {
  let key;
  for (key in value) {
    if (own$8.call(value, key)) {
      return true;
    }
  }
  return false;
}
function assertParser(name, value) {
  if (typeof value !== "function") {
    throw new TypeError("Cannot `" + name + "` without `Parser`");
  }
}
function assertCompiler(name, value) {
  if (typeof value !== "function") {
    throw new TypeError("Cannot `" + name + "` without `Compiler`");
  }
}
function assertUnfrozen(name, frozen) {
  if (frozen) {
    throw new Error("Cannot call `" + name + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.");
  }
}
function assertNode(node) {
  if (!isPlainObject(node) || typeof node.type !== "string") {
    throw new TypeError("Expected node, got `" + node + "`");
  }
}
function assertDone(name, asyncName, complete) {
  if (!complete) {
    throw new Error("`" + name + "` finished async. Use `" + asyncName + "` instead");
  }
}
function vfile(value) {
  return looksLikeAVFile(value) ? value : new VFile(value);
}
function looksLikeAVFile(value) {
  return Boolean(value && typeof value === "object" && "message" in value && "messages" in value);
}
function looksLikeAVFileValue(value) {
  return typeof value === "string" || isBuffer(value);
}
function toString(node, options) {
  var { includeImageAlt = true } = options || {};
  return one$1(node, includeImageAlt);
}
function one$1(node, includeImageAlt) {
  return node && typeof node === "object" && (node.value || (includeImageAlt ? node.alt : "") || "children" in node && all$1(node.children, includeImageAlt) || Array.isArray(node) && all$1(node, includeImageAlt)) || "";
}
function all$1(values, includeImageAlt) {
  var result = [];
  var index2 = -1;
  while (++index2 < values.length) {
    result[index2] = one$1(values[index2], includeImageAlt);
  }
  return result.join("");
}
function splice(list2, start, remove, items) {
  const end = list2.length;
  let chunkStart = 0;
  let parameters;
  if (start < 0) {
    start = -start > end ? 0 : end + start;
  } else {
    start = start > end ? end : start;
  }
  remove = remove > 0 ? remove : 0;
  if (items.length < 1e4) {
    parameters = Array.from(items);
    parameters.unshift(start, remove);
    [].splice.apply(list2, parameters);
  } else {
    if (remove)
      [].splice.apply(list2, [start, remove]);
    while (chunkStart < items.length) {
      parameters = items.slice(chunkStart, chunkStart + 1e4);
      parameters.unshift(start, 0);
      [].splice.apply(list2, parameters);
      chunkStart += 1e4;
      start += 1e4;
    }
  }
}
function push(list2, items) {
  if (list2.length > 0) {
    splice(list2, list2.length, 0, items);
    return list2;
  }
  return items;
}
const hasOwnProperty = {}.hasOwnProperty;
function combineExtensions(extensions) {
  const all2 = {};
  let index2 = -1;
  while (++index2 < extensions.length) {
    syntaxExtension(all2, extensions[index2]);
  }
  return all2;
}
function syntaxExtension(all2, extension2) {
  let hook;
  for (hook in extension2) {
    const maybe = hasOwnProperty.call(all2, hook) ? all2[hook] : void 0;
    const left = maybe || (all2[hook] = {});
    const right = extension2[hook];
    let code2;
    for (code2 in right) {
      if (!hasOwnProperty.call(left, code2))
        left[code2] = [];
      const value = right[code2];
      constructs(left[code2], Array.isArray(value) ? value : value ? [value] : []);
    }
  }
}
function constructs(existing, list2) {
  let index2 = -1;
  const before = [];
  while (++index2 < list2.length) {
    (list2[index2].add === "after" ? existing : before).push(list2[index2]);
  }
  splice(existing, 0, 0, before);
}
const unicodePunctuationRegex = /[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;
const asciiAlpha = regexCheck(/[A-Za-z]/);
const asciiDigit = regexCheck(/\d/);
const asciiHexDigit = regexCheck(/[\dA-Fa-f]/);
const asciiAlphanumeric = regexCheck(/[\dA-Za-z]/);
const asciiPunctuation = regexCheck(/[!-/:-@[-`{-~]/);
const asciiAtext = regexCheck(/[#-'*+\--9=?A-Z^-~]/);
function asciiControl(code2) {
  return code2 !== null && (code2 < 32 || code2 === 127);
}
function markdownLineEndingOrSpace(code2) {
  return code2 !== null && (code2 < 0 || code2 === 32);
}
function markdownLineEnding(code2) {
  return code2 !== null && code2 < -2;
}
function markdownSpace(code2) {
  return code2 === -2 || code2 === -1 || code2 === 32;
}
const unicodeWhitespace = regexCheck(/\s/);
const unicodePunctuation = regexCheck(unicodePunctuationRegex);
function regexCheck(regex) {
  return check;
  function check(code2) {
    return code2 !== null && regex.test(String.fromCharCode(code2));
  }
}
function factorySpace(effects, ok2, type, max) {
  const limit = max ? max - 1 : Number.POSITIVE_INFINITY;
  let size = 0;
  return start;
  function start(code2) {
    if (markdownSpace(code2)) {
      effects.enter(type);
      return prefix(code2);
    }
    return ok2(code2);
  }
  function prefix(code2) {
    if (markdownSpace(code2) && size++ < limit) {
      effects.consume(code2);
      return prefix;
    }
    effects.exit(type);
    return ok2(code2);
  }
}
const content$1 = {
  tokenize: initializeContent
};
function initializeContent(effects) {
  const contentStart = effects.attempt(this.parser.constructs.contentInitial, afterContentStartConstruct, paragraphInitial);
  let previous2;
  return contentStart;
  function afterContentStartConstruct(code2) {
    if (code2 === null) {
      effects.consume(code2);
      return;
    }
    effects.enter("lineEnding");
    effects.consume(code2);
    effects.exit("lineEnding");
    return factorySpace(effects, contentStart, "linePrefix");
  }
  function paragraphInitial(code2) {
    effects.enter("paragraph");
    return lineStart(code2);
  }
  function lineStart(code2) {
    const token = effects.enter("chunkText", {
      contentType: "text",
      previous: previous2
    });
    if (previous2) {
      previous2.next = token;
    }
    previous2 = token;
    return data(code2);
  }
  function data(code2) {
    if (code2 === null) {
      effects.exit("chunkText");
      effects.exit("paragraph");
      effects.consume(code2);
      return;
    }
    if (markdownLineEnding(code2)) {
      effects.consume(code2);
      effects.exit("chunkText");
      return lineStart;
    }
    effects.consume(code2);
    return data;
  }
}
const document$2 = {
  tokenize: initializeDocument
};
const containerConstruct = {
  tokenize: tokenizeContainer
};
function initializeDocument(effects) {
  const self = this;
  const stack = [];
  let continued = 0;
  let childFlow;
  let childToken;
  let lineStartOffset;
  return start;
  function start(code2) {
    if (continued < stack.length) {
      const item = stack[continued];
      self.containerState = item[1];
      return effects.attempt(item[0].continuation, documentContinue, checkNewContainers)(code2);
    }
    return checkNewContainers(code2);
  }
  function documentContinue(code2) {
    continued++;
    if (self.containerState._closeFlow) {
      self.containerState._closeFlow = void 0;
      if (childFlow) {
        closeFlow();
      }
      const indexBeforeExits = self.events.length;
      let indexBeforeFlow = indexBeforeExits;
      let point2;
      while (indexBeforeFlow--) {
        if (self.events[indexBeforeFlow][0] === "exit" && self.events[indexBeforeFlow][1].type === "chunkFlow") {
          point2 = self.events[indexBeforeFlow][1].end;
          break;
        }
      }
      exitContainers(continued);
      let index2 = indexBeforeExits;
      while (index2 < self.events.length) {
        self.events[index2][1].end = Object.assign({}, point2);
        index2++;
      }
      splice(self.events, indexBeforeFlow + 1, 0, self.events.slice(indexBeforeExits));
      self.events.length = index2;
      return checkNewContainers(code2);
    }
    return start(code2);
  }
  function checkNewContainers(code2) {
    if (continued === stack.length) {
      if (!childFlow) {
        return documentContinued(code2);
      }
      if (childFlow.currentConstruct && childFlow.currentConstruct.concrete) {
        return flowStart(code2);
      }
      self.interrupt = Boolean(childFlow.currentConstruct && !childFlow._gfmTableDynamicInterruptHack);
    }
    self.containerState = {};
    return effects.check(containerConstruct, thereIsANewContainer, thereIsNoNewContainer)(code2);
  }
  function thereIsANewContainer(code2) {
    if (childFlow)
      closeFlow();
    exitContainers(continued);
    return documentContinued(code2);
  }
  function thereIsNoNewContainer(code2) {
    self.parser.lazy[self.now().line] = continued !== stack.length;
    lineStartOffset = self.now().offset;
    return flowStart(code2);
  }
  function documentContinued(code2) {
    self.containerState = {};
    return effects.attempt(containerConstruct, containerContinue, flowStart)(code2);
  }
  function containerContinue(code2) {
    continued++;
    stack.push([self.currentConstruct, self.containerState]);
    return documentContinued(code2);
  }
  function flowStart(code2) {
    if (code2 === null) {
      if (childFlow)
        closeFlow();
      exitContainers(0);
      effects.consume(code2);
      return;
    }
    childFlow = childFlow || self.parser.flow(self.now());
    effects.enter("chunkFlow", {
      contentType: "flow",
      previous: childToken,
      _tokenizer: childFlow
    });
    return flowContinue(code2);
  }
  function flowContinue(code2) {
    if (code2 === null) {
      writeToChild(effects.exit("chunkFlow"), true);
      exitContainers(0);
      effects.consume(code2);
      return;
    }
    if (markdownLineEnding(code2)) {
      effects.consume(code2);
      writeToChild(effects.exit("chunkFlow"));
      continued = 0;
      self.interrupt = void 0;
      return start;
    }
    effects.consume(code2);
    return flowContinue;
  }
  function writeToChild(token, eof) {
    const stream = self.sliceStream(token);
    if (eof)
      stream.push(null);
    token.previous = childToken;
    if (childToken)
      childToken.next = token;
    childToken = token;
    childFlow.defineSkip(token.start);
    childFlow.write(stream);
    if (self.parser.lazy[token.start.line]) {
      let index2 = childFlow.events.length;
      while (index2--) {
        if (childFlow.events[index2][1].start.offset < lineStartOffset && (!childFlow.events[index2][1].end || childFlow.events[index2][1].end.offset > lineStartOffset)) {
          return;
        }
      }
      const indexBeforeExits = self.events.length;
      let indexBeforeFlow = indexBeforeExits;
      let seen;
      let point2;
      while (indexBeforeFlow--) {
        if (self.events[indexBeforeFlow][0] === "exit" && self.events[indexBeforeFlow][1].type === "chunkFlow") {
          if (seen) {
            point2 = self.events[indexBeforeFlow][1].end;
            break;
          }
          seen = true;
        }
      }
      exitContainers(continued);
      index2 = indexBeforeExits;
      while (index2 < self.events.length) {
        self.events[index2][1].end = Object.assign({}, point2);
        index2++;
      }
      splice(self.events, indexBeforeFlow + 1, 0, self.events.slice(indexBeforeExits));
      self.events.length = index2;
    }
  }
  function exitContainers(size) {
    let index2 = stack.length;
    while (index2-- > size) {
      const entry = stack[index2];
      self.containerState = entry[1];
      entry[0].exit.call(self, effects);
    }
    stack.length = size;
  }
  function closeFlow() {
    childFlow.write([null]);
    childToken = void 0;
    childFlow = void 0;
    self.containerState._closeFlow = void 0;
  }
}
function tokenizeContainer(effects, ok2, nok) {
  return factorySpace(effects, effects.attempt(this.parser.constructs.document, ok2, nok), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function classifyCharacter(code2) {
  if (code2 === null || markdownLineEndingOrSpace(code2) || unicodeWhitespace(code2)) {
    return 1;
  }
  if (unicodePunctuation(code2)) {
    return 2;
  }
}
function resolveAll(constructs2, events, context) {
  const called = [];
  let index2 = -1;
  while (++index2 < constructs2.length) {
    const resolve = constructs2[index2].resolveAll;
    if (resolve && !called.includes(resolve)) {
      events = resolve(events, context);
      called.push(resolve);
    }
  }
  return events;
}
const attention = {
  name: "attention",
  tokenize: tokenizeAttention,
  resolveAll: resolveAllAttention
};
function resolveAllAttention(events, context) {
  let index2 = -1;
  let open;
  let group;
  let text2;
  let openingSequence;
  let closingSequence;
  let use;
  let nextEvents;
  let offset;
  while (++index2 < events.length) {
    if (events[index2][0] === "enter" && events[index2][1].type === "attentionSequence" && events[index2][1]._close) {
      open = index2;
      while (open--) {
        if (events[open][0] === "exit" && events[open][1].type === "attentionSequence" && events[open][1]._open && context.sliceSerialize(events[open][1]).charCodeAt(0) === context.sliceSerialize(events[index2][1]).charCodeAt(0)) {
          if ((events[open][1]._close || events[index2][1]._open) && (events[index2][1].end.offset - events[index2][1].start.offset) % 3 && !((events[open][1].end.offset - events[open][1].start.offset + events[index2][1].end.offset - events[index2][1].start.offset) % 3)) {
            continue;
          }
          use = events[open][1].end.offset - events[open][1].start.offset > 1 && events[index2][1].end.offset - events[index2][1].start.offset > 1 ? 2 : 1;
          const start = Object.assign({}, events[open][1].end);
          const end = Object.assign({}, events[index2][1].start);
          movePoint(start, -use);
          movePoint(end, use);
          openingSequence = {
            type: use > 1 ? "strongSequence" : "emphasisSequence",
            start,
            end: Object.assign({}, events[open][1].end)
          };
          closingSequence = {
            type: use > 1 ? "strongSequence" : "emphasisSequence",
            start: Object.assign({}, events[index2][1].start),
            end
          };
          text2 = {
            type: use > 1 ? "strongText" : "emphasisText",
            start: Object.assign({}, events[open][1].end),
            end: Object.assign({}, events[index2][1].start)
          };
          group = {
            type: use > 1 ? "strong" : "emphasis",
            start: Object.assign({}, openingSequence.start),
            end: Object.assign({}, closingSequence.end)
          };
          events[open][1].end = Object.assign({}, openingSequence.start);
          events[index2][1].start = Object.assign({}, closingSequence.end);
          nextEvents = [];
          if (events[open][1].end.offset - events[open][1].start.offset) {
            nextEvents = push(nextEvents, [
              ["enter", events[open][1], context],
              ["exit", events[open][1], context]
            ]);
          }
          nextEvents = push(nextEvents, [
            ["enter", group, context],
            ["enter", openingSequence, context],
            ["exit", openingSequence, context],
            ["enter", text2, context]
          ]);
          nextEvents = push(nextEvents, resolveAll(context.parser.constructs.insideSpan.null, events.slice(open + 1, index2), context));
          nextEvents = push(nextEvents, [
            ["exit", text2, context],
            ["enter", closingSequence, context],
            ["exit", closingSequence, context],
            ["exit", group, context]
          ]);
          if (events[index2][1].end.offset - events[index2][1].start.offset) {
            offset = 2;
            nextEvents = push(nextEvents, [
              ["enter", events[index2][1], context],
              ["exit", events[index2][1], context]
            ]);
          } else {
            offset = 0;
          }
          splice(events, open - 1, index2 - open + 3, nextEvents);
          index2 = open + nextEvents.length - offset - 2;
          break;
        }
      }
    }
  }
  index2 = -1;
  while (++index2 < events.length) {
    if (events[index2][1].type === "attentionSequence") {
      events[index2][1].type = "data";
    }
  }
  return events;
}
function tokenizeAttention(effects, ok2) {
  const attentionMarkers2 = this.parser.constructs.attentionMarkers.null;
  const previous2 = this.previous;
  const before = classifyCharacter(previous2);
  let marker;
  return start;
  function start(code2) {
    effects.enter("attentionSequence");
    marker = code2;
    return sequence(code2);
  }
  function sequence(code2) {
    if (code2 === marker) {
      effects.consume(code2);
      return sequence;
    }
    const token = effects.exit("attentionSequence");
    const after = classifyCharacter(code2);
    const open = !after || after === 2 && before || attentionMarkers2.includes(code2);
    const close = !before || before === 2 && after || attentionMarkers2.includes(previous2);
    token._open = Boolean(marker === 42 ? open : open && (before || !close));
    token._close = Boolean(marker === 42 ? close : close && (after || !open));
    return ok2(code2);
  }
}
function movePoint(point2, offset) {
  point2.column += offset;
  point2.offset += offset;
  point2._bufferIndex += offset;
}
const autolink = {
  name: "autolink",
  tokenize: tokenizeAutolink
};
function tokenizeAutolink(effects, ok2, nok) {
  let size = 1;
  return start;
  function start(code2) {
    effects.enter("autolink");
    effects.enter("autolinkMarker");
    effects.consume(code2);
    effects.exit("autolinkMarker");
    effects.enter("autolinkProtocol");
    return open;
  }
  function open(code2) {
    if (asciiAlpha(code2)) {
      effects.consume(code2);
      return schemeOrEmailAtext;
    }
    return asciiAtext(code2) ? emailAtext(code2) : nok(code2);
  }
  function schemeOrEmailAtext(code2) {
    return code2 === 43 || code2 === 45 || code2 === 46 || asciiAlphanumeric(code2) ? schemeInsideOrEmailAtext(code2) : emailAtext(code2);
  }
  function schemeInsideOrEmailAtext(code2) {
    if (code2 === 58) {
      effects.consume(code2);
      return urlInside;
    }
    if ((code2 === 43 || code2 === 45 || code2 === 46 || asciiAlphanumeric(code2)) && size++ < 32) {
      effects.consume(code2);
      return schemeInsideOrEmailAtext;
    }
    return emailAtext(code2);
  }
  function urlInside(code2) {
    if (code2 === 62) {
      effects.exit("autolinkProtocol");
      return end(code2);
    }
    if (code2 === null || code2 === 32 || code2 === 60 || asciiControl(code2)) {
      return nok(code2);
    }
    effects.consume(code2);
    return urlInside;
  }
  function emailAtext(code2) {
    if (code2 === 64) {
      effects.consume(code2);
      size = 0;
      return emailAtSignOrDot;
    }
    if (asciiAtext(code2)) {
      effects.consume(code2);
      return emailAtext;
    }
    return nok(code2);
  }
  function emailAtSignOrDot(code2) {
    return asciiAlphanumeric(code2) ? emailLabel(code2) : nok(code2);
  }
  function emailLabel(code2) {
    if (code2 === 46) {
      effects.consume(code2);
      size = 0;
      return emailAtSignOrDot;
    }
    if (code2 === 62) {
      effects.exit("autolinkProtocol").type = "autolinkEmail";
      return end(code2);
    }
    return emailValue(code2);
  }
  function emailValue(code2) {
    if ((code2 === 45 || asciiAlphanumeric(code2)) && size++ < 63) {
      effects.consume(code2);
      return code2 === 45 ? emailValue : emailLabel;
    }
    return nok(code2);
  }
  function end(code2) {
    effects.enter("autolinkMarker");
    effects.consume(code2);
    effects.exit("autolinkMarker");
    effects.exit("autolink");
    return ok2;
  }
}
const blankLine = {
  tokenize: tokenizeBlankLine,
  partial: true
};
function tokenizeBlankLine(effects, ok2, nok) {
  return factorySpace(effects, afterWhitespace, "linePrefix");
  function afterWhitespace(code2) {
    return code2 === null || markdownLineEnding(code2) ? ok2(code2) : nok(code2);
  }
}
const blockQuote = {
  name: "blockQuote",
  tokenize: tokenizeBlockQuoteStart,
  continuation: {
    tokenize: tokenizeBlockQuoteContinuation
  },
  exit: exit$1
};
function tokenizeBlockQuoteStart(effects, ok2, nok) {
  const self = this;
  return start;
  function start(code2) {
    if (code2 === 62) {
      const state = self.containerState;
      if (!state.open) {
        effects.enter("blockQuote", {
          _container: true
        });
        state.open = true;
      }
      effects.enter("blockQuotePrefix");
      effects.enter("blockQuoteMarker");
      effects.consume(code2);
      effects.exit("blockQuoteMarker");
      return after;
    }
    return nok(code2);
  }
  function after(code2) {
    if (markdownSpace(code2)) {
      effects.enter("blockQuotePrefixWhitespace");
      effects.consume(code2);
      effects.exit("blockQuotePrefixWhitespace");
      effects.exit("blockQuotePrefix");
      return ok2;
    }
    effects.exit("blockQuotePrefix");
    return ok2(code2);
  }
}
function tokenizeBlockQuoteContinuation(effects, ok2, nok) {
  return factorySpace(effects, effects.attempt(blockQuote, ok2, nok), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function exit$1(effects) {
  effects.exit("blockQuote");
}
const characterEscape = {
  name: "characterEscape",
  tokenize: tokenizeCharacterEscape
};
function tokenizeCharacterEscape(effects, ok2, nok) {
  return start;
  function start(code2) {
    effects.enter("characterEscape");
    effects.enter("escapeMarker");
    effects.consume(code2);
    effects.exit("escapeMarker");
    return open;
  }
  function open(code2) {
    if (asciiPunctuation(code2)) {
      effects.enter("characterEscapeValue");
      effects.consume(code2);
      effects.exit("characterEscapeValue");
      effects.exit("characterEscape");
      return ok2;
    }
    return nok(code2);
  }
}
const element = document.createElement("i");
function decodeNamedCharacterReference(value) {
  const characterReference2 = "&" + value + ";";
  element.innerHTML = characterReference2;
  const char = element.textContent;
  if (char.charCodeAt(char.length - 1) === 59 && value !== "semi") {
    return false;
  }
  return char === characterReference2 ? false : char;
}
const characterReference = {
  name: "characterReference",
  tokenize: tokenizeCharacterReference
};
function tokenizeCharacterReference(effects, ok2, nok) {
  const self = this;
  let size = 0;
  let max;
  let test2;
  return start;
  function start(code2) {
    effects.enter("characterReference");
    effects.enter("characterReferenceMarker");
    effects.consume(code2);
    effects.exit("characterReferenceMarker");
    return open;
  }
  function open(code2) {
    if (code2 === 35) {
      effects.enter("characterReferenceMarkerNumeric");
      effects.consume(code2);
      effects.exit("characterReferenceMarkerNumeric");
      return numeric;
    }
    effects.enter("characterReferenceValue");
    max = 31;
    test2 = asciiAlphanumeric;
    return value(code2);
  }
  function numeric(code2) {
    if (code2 === 88 || code2 === 120) {
      effects.enter("characterReferenceMarkerHexadecimal");
      effects.consume(code2);
      effects.exit("characterReferenceMarkerHexadecimal");
      effects.enter("characterReferenceValue");
      max = 6;
      test2 = asciiHexDigit;
      return value;
    }
    effects.enter("characterReferenceValue");
    max = 7;
    test2 = asciiDigit;
    return value(code2);
  }
  function value(code2) {
    let token;
    if (code2 === 59 && size) {
      token = effects.exit("characterReferenceValue");
      if (test2 === asciiAlphanumeric && !decodeNamedCharacterReference(self.sliceSerialize(token))) {
        return nok(code2);
      }
      effects.enter("characterReferenceMarker");
      effects.consume(code2);
      effects.exit("characterReferenceMarker");
      effects.exit("characterReference");
      return ok2;
    }
    if (test2(code2) && size++ < max) {
      effects.consume(code2);
      return value;
    }
    return nok(code2);
  }
}
const codeFenced = {
  name: "codeFenced",
  tokenize: tokenizeCodeFenced,
  concrete: true
};
function tokenizeCodeFenced(effects, ok2, nok) {
  const self = this;
  const closingFenceConstruct = {
    tokenize: tokenizeClosingFence,
    partial: true
  };
  const nonLazyLine = {
    tokenize: tokenizeNonLazyLine,
    partial: true
  };
  const tail = this.events[this.events.length - 1];
  const initialPrefix = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], true).length : 0;
  let sizeOpen = 0;
  let marker;
  return start;
  function start(code2) {
    effects.enter("codeFenced");
    effects.enter("codeFencedFence");
    effects.enter("codeFencedFenceSequence");
    marker = code2;
    return sequenceOpen(code2);
  }
  function sequenceOpen(code2) {
    if (code2 === marker) {
      effects.consume(code2);
      sizeOpen++;
      return sequenceOpen;
    }
    effects.exit("codeFencedFenceSequence");
    return sizeOpen < 3 ? nok(code2) : factorySpace(effects, infoOpen, "whitespace")(code2);
  }
  function infoOpen(code2) {
    if (code2 === null || markdownLineEnding(code2)) {
      return openAfter(code2);
    }
    effects.enter("codeFencedFenceInfo");
    effects.enter("chunkString", {
      contentType: "string"
    });
    return info(code2);
  }
  function info(code2) {
    if (code2 === null || markdownLineEndingOrSpace(code2)) {
      effects.exit("chunkString");
      effects.exit("codeFencedFenceInfo");
      return factorySpace(effects, infoAfter, "whitespace")(code2);
    }
    if (code2 === 96 && code2 === marker)
      return nok(code2);
    effects.consume(code2);
    return info;
  }
  function infoAfter(code2) {
    if (code2 === null || markdownLineEnding(code2)) {
      return openAfter(code2);
    }
    effects.enter("codeFencedFenceMeta");
    effects.enter("chunkString", {
      contentType: "string"
    });
    return meta(code2);
  }
  function meta(code2) {
    if (code2 === null || markdownLineEnding(code2)) {
      effects.exit("chunkString");
      effects.exit("codeFencedFenceMeta");
      return openAfter(code2);
    }
    if (code2 === 96 && code2 === marker)
      return nok(code2);
    effects.consume(code2);
    return meta;
  }
  function openAfter(code2) {
    effects.exit("codeFencedFence");
    return self.interrupt ? ok2(code2) : contentStart(code2);
  }
  function contentStart(code2) {
    if (code2 === null) {
      return after(code2);
    }
    if (markdownLineEnding(code2)) {
      return effects.attempt(nonLazyLine, effects.attempt(closingFenceConstruct, after, initialPrefix ? factorySpace(effects, contentStart, "linePrefix", initialPrefix + 1) : contentStart), after)(code2);
    }
    effects.enter("codeFlowValue");
    return contentContinue(code2);
  }
  function contentContinue(code2) {
    if (code2 === null || markdownLineEnding(code2)) {
      effects.exit("codeFlowValue");
      return contentStart(code2);
    }
    effects.consume(code2);
    return contentContinue;
  }
  function after(code2) {
    effects.exit("codeFenced");
    return ok2(code2);
  }
  function tokenizeNonLazyLine(effects2, ok3, nok2) {
    const self2 = this;
    return start2;
    function start2(code2) {
      effects2.enter("lineEnding");
      effects2.consume(code2);
      effects2.exit("lineEnding");
      return lineStart;
    }
    function lineStart(code2) {
      return self2.parser.lazy[self2.now().line] ? nok2(code2) : ok3(code2);
    }
  }
  function tokenizeClosingFence(effects2, ok3, nok2) {
    let size = 0;
    return factorySpace(effects2, closingSequenceStart, "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
    function closingSequenceStart(code2) {
      effects2.enter("codeFencedFence");
      effects2.enter("codeFencedFenceSequence");
      return closingSequence(code2);
    }
    function closingSequence(code2) {
      if (code2 === marker) {
        effects2.consume(code2);
        size++;
        return closingSequence;
      }
      if (size < sizeOpen)
        return nok2(code2);
      effects2.exit("codeFencedFenceSequence");
      return factorySpace(effects2, closingSequenceEnd, "whitespace")(code2);
    }
    function closingSequenceEnd(code2) {
      if (code2 === null || markdownLineEnding(code2)) {
        effects2.exit("codeFencedFence");
        return ok3(code2);
      }
      return nok2(code2);
    }
  }
}
const codeIndented = {
  name: "codeIndented",
  tokenize: tokenizeCodeIndented
};
const indentedContent = {
  tokenize: tokenizeIndentedContent,
  partial: true
};
function tokenizeCodeIndented(effects, ok2, nok) {
  const self = this;
  return start;
  function start(code2) {
    effects.enter("codeIndented");
    return factorySpace(effects, afterStartPrefix, "linePrefix", 4 + 1)(code2);
  }
  function afterStartPrefix(code2) {
    const tail = self.events[self.events.length - 1];
    return tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4 ? afterPrefix(code2) : nok(code2);
  }
  function afterPrefix(code2) {
    if (code2 === null) {
      return after(code2);
    }
    if (markdownLineEnding(code2)) {
      return effects.attempt(indentedContent, afterPrefix, after)(code2);
    }
    effects.enter("codeFlowValue");
    return content2(code2);
  }
  function content2(code2) {
    if (code2 === null || markdownLineEnding(code2)) {
      effects.exit("codeFlowValue");
      return afterPrefix(code2);
    }
    effects.consume(code2);
    return content2;
  }
  function after(code2) {
    effects.exit("codeIndented");
    return ok2(code2);
  }
}
function tokenizeIndentedContent(effects, ok2, nok) {
  const self = this;
  return start;
  function start(code2) {
    if (self.parser.lazy[self.now().line]) {
      return nok(code2);
    }
    if (markdownLineEnding(code2)) {
      effects.enter("lineEnding");
      effects.consume(code2);
      effects.exit("lineEnding");
      return start;
    }
    return factorySpace(effects, afterPrefix, "linePrefix", 4 + 1)(code2);
  }
  function afterPrefix(code2) {
    const tail = self.events[self.events.length - 1];
    return tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4 ? ok2(code2) : markdownLineEnding(code2) ? start(code2) : nok(code2);
  }
}
const codeText = {
  name: "codeText",
  tokenize: tokenizeCodeText,
  resolve: resolveCodeText,
  previous: previous$1
};
function resolveCodeText(events) {
  let tailExitIndex = events.length - 4;
  let headEnterIndex = 3;
  let index2;
  let enter;
  if ((events[headEnterIndex][1].type === "lineEnding" || events[headEnterIndex][1].type === "space") && (events[tailExitIndex][1].type === "lineEnding" || events[tailExitIndex][1].type === "space")) {
    index2 = headEnterIndex;
    while (++index2 < tailExitIndex) {
      if (events[index2][1].type === "codeTextData") {
        events[headEnterIndex][1].type = "codeTextPadding";
        events[tailExitIndex][1].type = "codeTextPadding";
        headEnterIndex += 2;
        tailExitIndex -= 2;
        break;
      }
    }
  }
  index2 = headEnterIndex - 1;
  tailExitIndex++;
  while (++index2 <= tailExitIndex) {
    if (enter === void 0) {
      if (index2 !== tailExitIndex && events[index2][1].type !== "lineEnding") {
        enter = index2;
      }
    } else if (index2 === tailExitIndex || events[index2][1].type === "lineEnding") {
      events[enter][1].type = "codeTextData";
      if (index2 !== enter + 2) {
        events[enter][1].end = events[index2 - 1][1].end;
        events.splice(enter + 2, index2 - enter - 2);
        tailExitIndex -= index2 - enter - 2;
        index2 = enter + 2;
      }
      enter = void 0;
    }
  }
  return events;
}
function previous$1(code2) {
  return code2 !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function tokenizeCodeText(effects, ok2, nok) {
  let sizeOpen = 0;
  let size;
  let token;
  return start;
  function start(code2) {
    effects.enter("codeText");
    effects.enter("codeTextSequence");
    return openingSequence(code2);
  }
  function openingSequence(code2) {
    if (code2 === 96) {
      effects.consume(code2);
      sizeOpen++;
      return openingSequence;
    }
    effects.exit("codeTextSequence");
    return gap(code2);
  }
  function gap(code2) {
    if (code2 === null) {
      return nok(code2);
    }
    if (code2 === 96) {
      token = effects.enter("codeTextSequence");
      size = 0;
      return closingSequence(code2);
    }
    if (code2 === 32) {
      effects.enter("space");
      effects.consume(code2);
      effects.exit("space");
      return gap;
    }
    if (markdownLineEnding(code2)) {
      effects.enter("lineEnding");
      effects.consume(code2);
      effects.exit("lineEnding");
      return gap;
    }
    effects.enter("codeTextData");
    return data(code2);
  }
  function data(code2) {
    if (code2 === null || code2 === 32 || code2 === 96 || markdownLineEnding(code2)) {
      effects.exit("codeTextData");
      return gap(code2);
    }
    effects.consume(code2);
    return data;
  }
  function closingSequence(code2) {
    if (code2 === 96) {
      effects.consume(code2);
      size++;
      return closingSequence;
    }
    if (size === sizeOpen) {
      effects.exit("codeTextSequence");
      effects.exit("codeText");
      return ok2(code2);
    }
    token.type = "codeTextData";
    return data(code2);
  }
}
function subtokenize(events) {
  const jumps = {};
  let index2 = -1;
  let event;
  let lineIndex;
  let otherIndex;
  let otherEvent;
  let parameters;
  let subevents;
  let more;
  while (++index2 < events.length) {
    while (index2 in jumps) {
      index2 = jumps[index2];
    }
    event = events[index2];
    if (index2 && event[1].type === "chunkFlow" && events[index2 - 1][1].type === "listItemPrefix") {
      subevents = event[1]._tokenizer.events;
      otherIndex = 0;
      if (otherIndex < subevents.length && subevents[otherIndex][1].type === "lineEndingBlank") {
        otherIndex += 2;
      }
      if (otherIndex < subevents.length && subevents[otherIndex][1].type === "content") {
        while (++otherIndex < subevents.length) {
          if (subevents[otherIndex][1].type === "content") {
            break;
          }
          if (subevents[otherIndex][1].type === "chunkText") {
            subevents[otherIndex][1]._isInFirstContentOfListItem = true;
            otherIndex++;
          }
        }
      }
    }
    if (event[0] === "enter") {
      if (event[1].contentType) {
        Object.assign(jumps, subcontent(events, index2));
        index2 = jumps[index2];
        more = true;
      }
    } else if (event[1]._container) {
      otherIndex = index2;
      lineIndex = void 0;
      while (otherIndex--) {
        otherEvent = events[otherIndex];
        if (otherEvent[1].type === "lineEnding" || otherEvent[1].type === "lineEndingBlank") {
          if (otherEvent[0] === "enter") {
            if (lineIndex) {
              events[lineIndex][1].type = "lineEndingBlank";
            }
            otherEvent[1].type = "lineEnding";
            lineIndex = otherIndex;
          }
        } else {
          break;
        }
      }
      if (lineIndex) {
        event[1].end = Object.assign({}, events[lineIndex][1].start);
        parameters = events.slice(lineIndex, index2);
        parameters.unshift(event);
        splice(events, lineIndex, index2 - lineIndex + 1, parameters);
      }
    }
  }
  return !more;
}
function subcontent(events, eventIndex) {
  const token = events[eventIndex][1];
  const context = events[eventIndex][2];
  let startPosition = eventIndex - 1;
  const startPositions = [];
  const tokenizer = token._tokenizer || context.parser[token.contentType](token.start);
  const childEvents = tokenizer.events;
  const jumps = [];
  const gaps = {};
  let stream;
  let previous2;
  let index2 = -1;
  let current = token;
  let adjust = 0;
  let start = 0;
  const breaks = [start];
  while (current) {
    while (events[++startPosition][1] !== current) {
    }
    startPositions.push(startPosition);
    if (!current._tokenizer) {
      stream = context.sliceStream(current);
      if (!current.next) {
        stream.push(null);
      }
      if (previous2) {
        tokenizer.defineSkip(current.start);
      }
      if (current._isInFirstContentOfListItem) {
        tokenizer._gfmTasklistFirstContentOfListItem = true;
      }
      tokenizer.write(stream);
      if (current._isInFirstContentOfListItem) {
        tokenizer._gfmTasklistFirstContentOfListItem = void 0;
      }
    }
    previous2 = current;
    current = current.next;
  }
  current = token;
  while (++index2 < childEvents.length) {
    if (childEvents[index2][0] === "exit" && childEvents[index2 - 1][0] === "enter" && childEvents[index2][1].type === childEvents[index2 - 1][1].type && childEvents[index2][1].start.line !== childEvents[index2][1].end.line) {
      start = index2 + 1;
      breaks.push(start);
      current._tokenizer = void 0;
      current.previous = void 0;
      current = current.next;
    }
  }
  tokenizer.events = [];
  if (current) {
    current._tokenizer = void 0;
    current.previous = void 0;
  } else {
    breaks.pop();
  }
  index2 = breaks.length;
  while (index2--) {
    const slice = childEvents.slice(breaks[index2], breaks[index2 + 1]);
    const start2 = startPositions.pop();
    jumps.unshift([start2, start2 + slice.length - 1]);
    splice(events, start2, 2, slice);
  }
  index2 = -1;
  while (++index2 < jumps.length) {
    gaps[adjust + jumps[index2][0]] = adjust + jumps[index2][1];
    adjust += jumps[index2][1] - jumps[index2][0] - 1;
  }
  return gaps;
}
const content = {
  tokenize: tokenizeContent,
  resolve: resolveContent
};
const continuationConstruct = {
  tokenize: tokenizeContinuation,
  partial: true
};
function resolveContent(events) {
  subtokenize(events);
  return events;
}
function tokenizeContent(effects, ok2) {
  let previous2;
  return start;
  function start(code2) {
    effects.enter("content");
    previous2 = effects.enter("chunkContent", {
      contentType: "content"
    });
    return data(code2);
  }
  function data(code2) {
    if (code2 === null) {
      return contentEnd(code2);
    }
    if (markdownLineEnding(code2)) {
      return effects.check(continuationConstruct, contentContinue, contentEnd)(code2);
    }
    effects.consume(code2);
    return data;
  }
  function contentEnd(code2) {
    effects.exit("chunkContent");
    effects.exit("content");
    return ok2(code2);
  }
  function contentContinue(code2) {
    effects.consume(code2);
    effects.exit("chunkContent");
    previous2.next = effects.enter("chunkContent", {
      contentType: "content",
      previous: previous2
    });
    previous2 = previous2.next;
    return data;
  }
}
function tokenizeContinuation(effects, ok2, nok) {
  const self = this;
  return startLookahead;
  function startLookahead(code2) {
    effects.exit("chunkContent");
    effects.enter("lineEnding");
    effects.consume(code2);
    effects.exit("lineEnding");
    return factorySpace(effects, prefixed, "linePrefix");
  }
  function prefixed(code2) {
    if (code2 === null || markdownLineEnding(code2)) {
      return nok(code2);
    }
    const tail = self.events[self.events.length - 1];
    if (!self.parser.constructs.disable.null.includes("codeIndented") && tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4) {
      return ok2(code2);
    }
    return effects.interrupt(self.parser.constructs.flow, nok, ok2)(code2);
  }
}
function factoryDestination(effects, ok2, nok, type, literalType, literalMarkerType, rawType, stringType, max) {
  const limit = max || Number.POSITIVE_INFINITY;
  let balance = 0;
  return start;
  function start(code2) {
    if (code2 === 60) {
      effects.enter(type);
      effects.enter(literalType);
      effects.enter(literalMarkerType);
      effects.consume(code2);
      effects.exit(literalMarkerType);
      return destinationEnclosedBefore;
    }
    if (code2 === null || code2 === 41 || asciiControl(code2)) {
      return nok(code2);
    }
    effects.enter(type);
    effects.enter(rawType);
    effects.enter(stringType);
    effects.enter("chunkString", {
      contentType: "string"
    });
    return destinationRaw(code2);
  }
  function destinationEnclosedBefore(code2) {
    if (code2 === 62) {
      effects.enter(literalMarkerType);
      effects.consume(code2);
      effects.exit(literalMarkerType);
      effects.exit(literalType);
      effects.exit(type);
      return ok2;
    }
    effects.enter(stringType);
    effects.enter("chunkString", {
      contentType: "string"
    });
    return destinationEnclosed(code2);
  }
  function destinationEnclosed(code2) {
    if (code2 === 62) {
      effects.exit("chunkString");
      effects.exit(stringType);
      return destinationEnclosedBefore(code2);
    }
    if (code2 === null || code2 === 60 || markdownLineEnding(code2)) {
      return nok(code2);
    }
    effects.consume(code2);
    return code2 === 92 ? destinationEnclosedEscape : destinationEnclosed;
  }
  function destinationEnclosedEscape(code2) {
    if (code2 === 60 || code2 === 62 || code2 === 92) {
      effects.consume(code2);
      return destinationEnclosed;
    }
    return destinationEnclosed(code2);
  }
  function destinationRaw(code2) {
    if (code2 === 40) {
      if (++balance > limit)
        return nok(code2);
      effects.consume(code2);
      return destinationRaw;
    }
    if (code2 === 41) {
      if (!balance--) {
        effects.exit("chunkString");
        effects.exit(stringType);
        effects.exit(rawType);
        effects.exit(type);
        return ok2(code2);
      }
      effects.consume(code2);
      return destinationRaw;
    }
    if (code2 === null || markdownLineEndingOrSpace(code2)) {
      if (balance)
        return nok(code2);
      effects.exit("chunkString");
      effects.exit(stringType);
      effects.exit(rawType);
      effects.exit(type);
      return ok2(code2);
    }
    if (asciiControl(code2))
      return nok(code2);
    effects.consume(code2);
    return code2 === 92 ? destinationRawEscape : destinationRaw;
  }
  function destinationRawEscape(code2) {
    if (code2 === 40 || code2 === 41 || code2 === 92) {
      effects.consume(code2);
      return destinationRaw;
    }
    return destinationRaw(code2);
  }
}
function factoryLabel(effects, ok2, nok, type, markerType, stringType) {
  const self = this;
  let size = 0;
  let data;
  return start;
  function start(code2) {
    effects.enter(type);
    effects.enter(markerType);
    effects.consume(code2);
    effects.exit(markerType);
    effects.enter(stringType);
    return atBreak;
  }
  function atBreak(code2) {
    if (code2 === null || code2 === 91 || code2 === 93 && !data || code2 === 94 && !size && "_hiddenFootnoteSupport" in self.parser.constructs || size > 999) {
      return nok(code2);
    }
    if (code2 === 93) {
      effects.exit(stringType);
      effects.enter(markerType);
      effects.consume(code2);
      effects.exit(markerType);
      effects.exit(type);
      return ok2;
    }
    if (markdownLineEnding(code2)) {
      effects.enter("lineEnding");
      effects.consume(code2);
      effects.exit("lineEnding");
      return atBreak;
    }
    effects.enter("chunkString", {
      contentType: "string"
    });
    return label(code2);
  }
  function label(code2) {
    if (code2 === null || code2 === 91 || code2 === 93 || markdownLineEnding(code2) || size++ > 999) {
      effects.exit("chunkString");
      return atBreak(code2);
    }
    effects.consume(code2);
    data = data || !markdownSpace(code2);
    return code2 === 92 ? labelEscape : label;
  }
  function labelEscape(code2) {
    if (code2 === 91 || code2 === 92 || code2 === 93) {
      effects.consume(code2);
      size++;
      return label;
    }
    return label(code2);
  }
}
function factoryTitle(effects, ok2, nok, type, markerType, stringType) {
  let marker;
  return start;
  function start(code2) {
    effects.enter(type);
    effects.enter(markerType);
    effects.consume(code2);
    effects.exit(markerType);
    marker = code2 === 40 ? 41 : code2;
    return atFirstTitleBreak;
  }
  function atFirstTitleBreak(code2) {
    if (code2 === marker) {
      effects.enter(markerType);
      effects.consume(code2);
      effects.exit(markerType);
      effects.exit(type);
      return ok2;
    }
    effects.enter(stringType);
    return atTitleBreak(code2);
  }
  function atTitleBreak(code2) {
    if (code2 === marker) {
      effects.exit(stringType);
      return atFirstTitleBreak(marker);
    }
    if (code2 === null) {
      return nok(code2);
    }
    if (markdownLineEnding(code2)) {
      effects.enter("lineEnding");
      effects.consume(code2);
      effects.exit("lineEnding");
      return factorySpace(effects, atTitleBreak, "linePrefix");
    }
    effects.enter("chunkString", {
      contentType: "string"
    });
    return title(code2);
  }
  function title(code2) {
    if (code2 === marker || code2 === null || markdownLineEnding(code2)) {
      effects.exit("chunkString");
      return atTitleBreak(code2);
    }
    effects.consume(code2);
    return code2 === 92 ? titleEscape : title;
  }
  function titleEscape(code2) {
    if (code2 === marker || code2 === 92) {
      effects.consume(code2);
      return title;
    }
    return title(code2);
  }
}
function factoryWhitespace(effects, ok2) {
  let seen;
  return start;
  function start(code2) {
    if (markdownLineEnding(code2)) {
      effects.enter("lineEnding");
      effects.consume(code2);
      effects.exit("lineEnding");
      seen = true;
      return start;
    }
    if (markdownSpace(code2)) {
      return factorySpace(effects, start, seen ? "linePrefix" : "lineSuffix")(code2);
    }
    return ok2(code2);
  }
}
function normalizeIdentifier(value) {
  return value.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const definition = {
  name: "definition",
  tokenize: tokenizeDefinition
};
const titleConstruct = {
  tokenize: tokenizeTitle,
  partial: true
};
function tokenizeDefinition(effects, ok2, nok) {
  const self = this;
  let identifier;
  return start;
  function start(code2) {
    effects.enter("definition");
    return factoryLabel.call(self, effects, labelAfter, nok, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(code2);
  }
  function labelAfter(code2) {
    identifier = normalizeIdentifier(self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1));
    if (code2 === 58) {
      effects.enter("definitionMarker");
      effects.consume(code2);
      effects.exit("definitionMarker");
      return factoryWhitespace(effects, factoryDestination(effects, effects.attempt(titleConstruct, factorySpace(effects, after, "whitespace"), factorySpace(effects, after, "whitespace")), nok, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString"));
    }
    return nok(code2);
  }
  function after(code2) {
    if (code2 === null || markdownLineEnding(code2)) {
      effects.exit("definition");
      if (!self.parser.defined.includes(identifier)) {
        self.parser.defined.push(identifier);
      }
      return ok2(code2);
    }
    return nok(code2);
  }
}
function tokenizeTitle(effects, ok2, nok) {
  return start;
  function start(code2) {
    return markdownLineEndingOrSpace(code2) ? factoryWhitespace(effects, before)(code2) : nok(code2);
  }
  function before(code2) {
    if (code2 === 34 || code2 === 39 || code2 === 40) {
      return factoryTitle(effects, factorySpace(effects, after, "whitespace"), nok, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(code2);
    }
    return nok(code2);
  }
  function after(code2) {
    return code2 === null || markdownLineEnding(code2) ? ok2(code2) : nok(code2);
  }
}
const hardBreakEscape = {
  name: "hardBreakEscape",
  tokenize: tokenizeHardBreakEscape
};
function tokenizeHardBreakEscape(effects, ok2, nok) {
  return start;
  function start(code2) {
    effects.enter("hardBreakEscape");
    effects.enter("escapeMarker");
    effects.consume(code2);
    return open;
  }
  function open(code2) {
    if (markdownLineEnding(code2)) {
      effects.exit("escapeMarker");
      effects.exit("hardBreakEscape");
      return ok2(code2);
    }
    return nok(code2);
  }
}
const headingAtx = {
  name: "headingAtx",
  tokenize: tokenizeHeadingAtx,
  resolve: resolveHeadingAtx
};
function resolveHeadingAtx(events, context) {
  let contentEnd = events.length - 2;
  let contentStart = 3;
  let content2;
  let text2;
  if (events[contentStart][1].type === "whitespace") {
    contentStart += 2;
  }
  if (contentEnd - 2 > contentStart && events[contentEnd][1].type === "whitespace") {
    contentEnd -= 2;
  }
  if (events[contentEnd][1].type === "atxHeadingSequence" && (contentStart === contentEnd - 1 || contentEnd - 4 > contentStart && events[contentEnd - 2][1].type === "whitespace")) {
    contentEnd -= contentStart + 1 === contentEnd ? 2 : 4;
  }
  if (contentEnd > contentStart) {
    content2 = {
      type: "atxHeadingText",
      start: events[contentStart][1].start,
      end: events[contentEnd][1].end
    };
    text2 = {
      type: "chunkText",
      start: events[contentStart][1].start,
      end: events[contentEnd][1].end,
      contentType: "text"
    };
    splice(events, contentStart, contentEnd - contentStart + 1, [
      ["enter", content2, context],
      ["enter", text2, context],
      ["exit", text2, context],
      ["exit", content2, context]
    ]);
  }
  return events;
}
function tokenizeHeadingAtx(effects, ok2, nok) {
  const self = this;
  let size = 0;
  return start;
  function start(code2) {
    effects.enter("atxHeading");
    effects.enter("atxHeadingSequence");
    return fenceOpenInside(code2);
  }
  function fenceOpenInside(code2) {
    if (code2 === 35 && size++ < 6) {
      effects.consume(code2);
      return fenceOpenInside;
    }
    if (code2 === null || markdownLineEndingOrSpace(code2)) {
      effects.exit("atxHeadingSequence");
      return self.interrupt ? ok2(code2) : headingBreak(code2);
    }
    return nok(code2);
  }
  function headingBreak(code2) {
    if (code2 === 35) {
      effects.enter("atxHeadingSequence");
      return sequence(code2);
    }
    if (code2 === null || markdownLineEnding(code2)) {
      effects.exit("atxHeading");
      return ok2(code2);
    }
    if (markdownSpace(code2)) {
      return factorySpace(effects, headingBreak, "whitespace")(code2);
    }
    effects.enter("atxHeadingText");
    return data(code2);
  }
  function sequence(code2) {
    if (code2 === 35) {
      effects.consume(code2);
      return sequence;
    }
    effects.exit("atxHeadingSequence");
    return headingBreak(code2);
  }
  function data(code2) {
    if (code2 === null || code2 === 35 || markdownLineEndingOrSpace(code2)) {
      effects.exit("atxHeadingText");
      return headingBreak(code2);
    }
    effects.consume(code2);
    return data;
  }
}
const htmlBlockNames = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
];
const htmlRawNames = ["pre", "script", "style", "textarea"];
const htmlFlow = {
  name: "htmlFlow",
  tokenize: tokenizeHtmlFlow,
  resolveTo: resolveToHtmlFlow,
  concrete: true
};
const nextBlankConstruct = {
  tokenize: tokenizeNextBlank,
  partial: true
};
function resolveToHtmlFlow(events) {
  let index2 = events.length;
  while (index2--) {
    if (events[index2][0] === "enter" && events[index2][1].type === "htmlFlow") {
      break;
    }
  }
  if (index2 > 1 && events[index2 - 2][1].type === "linePrefix") {
    events[index2][1].start = events[index2 - 2][1].start;
    events[index2 + 1][1].start = events[index2 - 2][1].start;
    events.splice(index2 - 2, 2);
  }
  return events;
}
function tokenizeHtmlFlow(effects, ok2, nok) {
  const self = this;
  let kind;
  let startTag;
  let buffer;
  let index2;
  let marker;
  return start;
  function start(code2) {
    effects.enter("htmlFlow");
    effects.enter("htmlFlowData");
    effects.consume(code2);
    return open;
  }
  function open(code2) {
    if (code2 === 33) {
      effects.consume(code2);
      return declarationStart;
    }
    if (code2 === 47) {
      effects.consume(code2);
      return tagCloseStart;
    }
    if (code2 === 63) {
      effects.consume(code2);
      kind = 3;
      return self.interrupt ? ok2 : continuationDeclarationInside;
    }
    if (asciiAlpha(code2)) {
      effects.consume(code2);
      buffer = String.fromCharCode(code2);
      startTag = true;
      return tagName;
    }
    return nok(code2);
  }
  function declarationStart(code2) {
    if (code2 === 45) {
      effects.consume(code2);
      kind = 2;
      return commentOpenInside;
    }
    if (code2 === 91) {
      effects.consume(code2);
      kind = 5;
      buffer = "CDATA[";
      index2 = 0;
      return cdataOpenInside;
    }
    if (asciiAlpha(code2)) {
      effects.consume(code2);
      kind = 4;
      return self.interrupt ? ok2 : continuationDeclarationInside;
    }
    return nok(code2);
  }
  function commentOpenInside(code2) {
    if (code2 === 45) {
      effects.consume(code2);
      return self.interrupt ? ok2 : continuationDeclarationInside;
    }
    return nok(code2);
  }
  function cdataOpenInside(code2) {
    if (code2 === buffer.charCodeAt(index2++)) {
      effects.consume(code2);
      return index2 === buffer.length ? self.interrupt ? ok2 : continuation : cdataOpenInside;
    }
    return nok(code2);
  }
  function tagCloseStart(code2) {
    if (asciiAlpha(code2)) {
      effects.consume(code2);
      buffer = String.fromCharCode(code2);
      return tagName;
    }
    return nok(code2);
  }
  function tagName(code2) {
    if (code2 === null || code2 === 47 || code2 === 62 || markdownLineEndingOrSpace(code2)) {
      if (code2 !== 47 && startTag && htmlRawNames.includes(buffer.toLowerCase())) {
        kind = 1;
        return self.interrupt ? ok2(code2) : continuation(code2);
      }
      if (htmlBlockNames.includes(buffer.toLowerCase())) {
        kind = 6;
        if (code2 === 47) {
          effects.consume(code2);
          return basicSelfClosing;
        }
        return self.interrupt ? ok2(code2) : continuation(code2);
      }
      kind = 7;
      return self.interrupt && !self.parser.lazy[self.now().line] ? nok(code2) : startTag ? completeAttributeNameBefore(code2) : completeClosingTagAfter(code2);
    }
    if (code2 === 45 || asciiAlphanumeric(code2)) {
      effects.consume(code2);
      buffer += String.fromCharCode(code2);
      return tagName;
    }
    return nok(code2);
  }
  function basicSelfClosing(code2) {
    if (code2 === 62) {
      effects.consume(code2);
      return self.interrupt ? ok2 : continuation;
    }
    return nok(code2);
  }
  function completeClosingTagAfter(code2) {
    if (markdownSpace(code2)) {
      effects.consume(code2);
      return completeClosingTagAfter;
    }
    return completeEnd(code2);
  }
  function completeAttributeNameBefore(code2) {
    if (code2 === 47) {
      effects.consume(code2);
      return completeEnd;
    }
    if (code2 === 58 || code2 === 95 || asciiAlpha(code2)) {
      effects.consume(code2);
      return completeAttributeName;
    }
    if (markdownSpace(code2)) {
      effects.consume(code2);
      return completeAttributeNameBefore;
    }
    return completeEnd(code2);
  }
  function completeAttributeName(code2) {
    if (code2 === 45 || code2 === 46 || code2 === 58 || code2 === 95 || asciiAlphanumeric(code2)) {
      effects.consume(code2);
      return completeAttributeName;
    }
    return completeAttributeNameAfter(code2);
  }
  function completeAttributeNameAfter(code2) {
    if (code2 === 61) {
      effects.consume(code2);
      return completeAttributeValueBefore;
    }
    if (markdownSpace(code2)) {
      effects.consume(code2);
      return completeAttributeNameAfter;
    }
    return completeAttributeNameBefore(code2);
  }
  function completeAttributeValueBefore(code2) {
    if (code2 === null || code2 === 60 || code2 === 61 || code2 === 62 || code2 === 96) {
      return nok(code2);
    }
    if (code2 === 34 || code2 === 39) {
      effects.consume(code2);
      marker = code2;
      return completeAttributeValueQuoted;
    }
    if (markdownSpace(code2)) {
      effects.consume(code2);
      return completeAttributeValueBefore;
    }
    marker = null;
    return completeAttributeValueUnquoted(code2);
  }
  function completeAttributeValueQuoted(code2) {
    if (code2 === null || markdownLineEnding(code2)) {
      return nok(code2);
    }
    if (code2 === marker) {
      effects.consume(code2);
      return completeAttributeValueQuotedAfter;
    }
    effects.consume(code2);
    return completeAttributeValueQuoted;
  }
  function completeAttributeValueUnquoted(code2) {
    if (code2 === null || code2 === 34 || code2 === 39 || code2 === 60 || code2 === 61 || code2 === 62 || code2 === 96 || markdownLineEndingOrSpace(code2)) {
      return completeAttributeNameAfter(code2);
    }
    effects.consume(code2);
    return completeAttributeValueUnquoted;
  }
  function completeAttributeValueQuotedAfter(code2) {
    if (code2 === 47 || code2 === 62 || markdownSpace(code2)) {
      return completeAttributeNameBefore(code2);
    }
    return nok(code2);
  }
  function completeEnd(code2) {
    if (code2 === 62) {
      effects.consume(code2);
      return completeAfter;
    }
    return nok(code2);
  }
  function completeAfter(code2) {
    if (markdownSpace(code2)) {
      effects.consume(code2);
      return completeAfter;
    }
    return code2 === null || markdownLineEnding(code2) ? continuation(code2) : nok(code2);
  }
  function continuation(code2) {
    if (code2 === 45 && kind === 2) {
      effects.consume(code2);
      return continuationCommentInside;
    }
    if (code2 === 60 && kind === 1) {
      effects.consume(code2);
      return continuationRawTagOpen;
    }
    if (code2 === 62 && kind === 4) {
      effects.consume(code2);
      return continuationClose;
    }
    if (code2 === 63 && kind === 3) {
      effects.consume(code2);
      return continuationDeclarationInside;
    }
    if (code2 === 93 && kind === 5) {
      effects.consume(code2);
      return continuationCharacterDataInside;
    }
    if (markdownLineEnding(code2) && (kind === 6 || kind === 7)) {
      return effects.check(nextBlankConstruct, continuationClose, continuationAtLineEnding)(code2);
    }
    if (code2 === null || markdownLineEnding(code2)) {
      return continuationAtLineEnding(code2);
    }
    effects.consume(code2);
    return continuation;
  }
  function continuationAtLineEnding(code2) {
    effects.exit("htmlFlowData");
    return htmlContinueStart(code2);
  }
  function htmlContinueStart(code2) {
    if (code2 === null) {
      return done(code2);
    }
    if (markdownLineEnding(code2)) {
      return effects.attempt({
        tokenize: htmlLineEnd,
        partial: true
      }, htmlContinueStart, done)(code2);
    }
    effects.enter("htmlFlowData");
    return continuation(code2);
  }
  function htmlLineEnd(effects2, ok3, nok2) {
    return start2;
    function start2(code2) {
      effects2.enter("lineEnding");
      effects2.consume(code2);
      effects2.exit("lineEnding");
      return lineStart;
    }
    function lineStart(code2) {
      return self.parser.lazy[self.now().line] ? nok2(code2) : ok3(code2);
    }
  }
  function continuationCommentInside(code2) {
    if (code2 === 45) {
      effects.consume(code2);
      return continuationDeclarationInside;
    }
    return continuation(code2);
  }
  function continuationRawTagOpen(code2) {
    if (code2 === 47) {
      effects.consume(code2);
      buffer = "";
      return continuationRawEndTag;
    }
    return continuation(code2);
  }
  function continuationRawEndTag(code2) {
    if (code2 === 62 && htmlRawNames.includes(buffer.toLowerCase())) {
      effects.consume(code2);
      return continuationClose;
    }
    if (asciiAlpha(code2) && buffer.length < 8) {
      effects.consume(code2);
      buffer += String.fromCharCode(code2);
      return continuationRawEndTag;
    }
    return continuation(code2);
  }
  function continuationCharacterDataInside(code2) {
    if (code2 === 93) {
      effects.consume(code2);
      return continuationDeclarationInside;
    }
    return continuation(code2);
  }
  function continuationDeclarationInside(code2) {
    if (code2 === 62) {
      effects.consume(code2);
      return continuationClose;
    }
    if (code2 === 45 && kind === 2) {
      effects.consume(code2);
      return continuationDeclarationInside;
    }
    return continuation(code2);
  }
  function continuationClose(code2) {
    if (code2 === null || markdownLineEnding(code2)) {
      effects.exit("htmlFlowData");
      return done(code2);
    }
    effects.consume(code2);
    return continuationClose;
  }
  function done(code2) {
    effects.exit("htmlFlow");
    return ok2(code2);
  }
}
function tokenizeNextBlank(effects, ok2, nok) {
  return start;
  function start(code2) {
    effects.exit("htmlFlowData");
    effects.enter("lineEndingBlank");
    effects.consume(code2);
    effects.exit("lineEndingBlank");
    return effects.attempt(blankLine, ok2, nok);
  }
}
const htmlText = {
  name: "htmlText",
  tokenize: tokenizeHtmlText
};
function tokenizeHtmlText(effects, ok2, nok) {
  const self = this;
  let marker;
  let buffer;
  let index2;
  let returnState;
  return start;
  function start(code2) {
    effects.enter("htmlText");
    effects.enter("htmlTextData");
    effects.consume(code2);
    return open;
  }
  function open(code2) {
    if (code2 === 33) {
      effects.consume(code2);
      return declarationOpen;
    }
    if (code2 === 47) {
      effects.consume(code2);
      return tagCloseStart;
    }
    if (code2 === 63) {
      effects.consume(code2);
      return instruction;
    }
    if (asciiAlpha(code2)) {
      effects.consume(code2);
      return tagOpen;
    }
    return nok(code2);
  }
  function declarationOpen(code2) {
    if (code2 === 45) {
      effects.consume(code2);
      return commentOpen;
    }
    if (code2 === 91) {
      effects.consume(code2);
      buffer = "CDATA[";
      index2 = 0;
      return cdataOpen;
    }
    if (asciiAlpha(code2)) {
      effects.consume(code2);
      return declaration;
    }
    return nok(code2);
  }
  function commentOpen(code2) {
    if (code2 === 45) {
      effects.consume(code2);
      return commentStart;
    }
    return nok(code2);
  }
  function commentStart(code2) {
    if (code2 === null || code2 === 62) {
      return nok(code2);
    }
    if (code2 === 45) {
      effects.consume(code2);
      return commentStartDash;
    }
    return comment(code2);
  }
  function commentStartDash(code2) {
    if (code2 === null || code2 === 62) {
      return nok(code2);
    }
    return comment(code2);
  }
  function comment(code2) {
    if (code2 === null) {
      return nok(code2);
    }
    if (code2 === 45) {
      effects.consume(code2);
      return commentClose;
    }
    if (markdownLineEnding(code2)) {
      returnState = comment;
      return atLineEnding(code2);
    }
    effects.consume(code2);
    return comment;
  }
  function commentClose(code2) {
    if (code2 === 45) {
      effects.consume(code2);
      return end;
    }
    return comment(code2);
  }
  function cdataOpen(code2) {
    if (code2 === buffer.charCodeAt(index2++)) {
      effects.consume(code2);
      return index2 === buffer.length ? cdata : cdataOpen;
    }
    return nok(code2);
  }
  function cdata(code2) {
    if (code2 === null) {
      return nok(code2);
    }
    if (code2 === 93) {
      effects.consume(code2);
      return cdataClose;
    }
    if (markdownLineEnding(code2)) {
      returnState = cdata;
      return atLineEnding(code2);
    }
    effects.consume(code2);
    return cdata;
  }
  function cdataClose(code2) {
    if (code2 === 93) {
      effects.consume(code2);
      return cdataEnd;
    }
    return cdata(code2);
  }
  function cdataEnd(code2) {
    if (code2 === 62) {
      return end(code2);
    }
    if (code2 === 93) {
      effects.consume(code2);
      return cdataEnd;
    }
    return cdata(code2);
  }
  function declaration(code2) {
    if (code2 === null || code2 === 62) {
      return end(code2);
    }
    if (markdownLineEnding(code2)) {
      returnState = declaration;
      return atLineEnding(code2);
    }
    effects.consume(code2);
    return declaration;
  }
  function instruction(code2) {
    if (code2 === null) {
      return nok(code2);
    }
    if (code2 === 63) {
      effects.consume(code2);
      return instructionClose;
    }
    if (markdownLineEnding(code2)) {
      returnState = instruction;
      return atLineEnding(code2);
    }
    effects.consume(code2);
    return instruction;
  }
  function instructionClose(code2) {
    return code2 === 62 ? end(code2) : instruction(code2);
  }
  function tagCloseStart(code2) {
    if (asciiAlpha(code2)) {
      effects.consume(code2);
      return tagClose;
    }
    return nok(code2);
  }
  function tagClose(code2) {
    if (code2 === 45 || asciiAlphanumeric(code2)) {
      effects.consume(code2);
      return tagClose;
    }
    return tagCloseBetween(code2);
  }
  function tagCloseBetween(code2) {
    if (markdownLineEnding(code2)) {
      returnState = tagCloseBetween;
      return atLineEnding(code2);
    }
    if (markdownSpace(code2)) {
      effects.consume(code2);
      return tagCloseBetween;
    }
    return end(code2);
  }
  function tagOpen(code2) {
    if (code2 === 45 || asciiAlphanumeric(code2)) {
      effects.consume(code2);
      return tagOpen;
    }
    if (code2 === 47 || code2 === 62 || markdownLineEndingOrSpace(code2)) {
      return tagOpenBetween(code2);
    }
    return nok(code2);
  }
  function tagOpenBetween(code2) {
    if (code2 === 47) {
      effects.consume(code2);
      return end;
    }
    if (code2 === 58 || code2 === 95 || asciiAlpha(code2)) {
      effects.consume(code2);
      return tagOpenAttributeName;
    }
    if (markdownLineEnding(code2)) {
      returnState = tagOpenBetween;
      return atLineEnding(code2);
    }
    if (markdownSpace(code2)) {
      effects.consume(code2);
      return tagOpenBetween;
    }
    return end(code2);
  }
  function tagOpenAttributeName(code2) {
    if (code2 === 45 || code2 === 46 || code2 === 58 || code2 === 95 || asciiAlphanumeric(code2)) {
      effects.consume(code2);
      return tagOpenAttributeName;
    }
    return tagOpenAttributeNameAfter(code2);
  }
  function tagOpenAttributeNameAfter(code2) {
    if (code2 === 61) {
      effects.consume(code2);
      return tagOpenAttributeValueBefore;
    }
    if (markdownLineEnding(code2)) {
      returnState = tagOpenAttributeNameAfter;
      return atLineEnding(code2);
    }
    if (markdownSpace(code2)) {
      effects.consume(code2);
      return tagOpenAttributeNameAfter;
    }
    return tagOpenBetween(code2);
  }
  function tagOpenAttributeValueBefore(code2) {
    if (code2 === null || code2 === 60 || code2 === 61 || code2 === 62 || code2 === 96) {
      return nok(code2);
    }
    if (code2 === 34 || code2 === 39) {
      effects.consume(code2);
      marker = code2;
      return tagOpenAttributeValueQuoted;
    }
    if (markdownLineEnding(code2)) {
      returnState = tagOpenAttributeValueBefore;
      return atLineEnding(code2);
    }
    if (markdownSpace(code2)) {
      effects.consume(code2);
      return tagOpenAttributeValueBefore;
    }
    effects.consume(code2);
    marker = void 0;
    return tagOpenAttributeValueUnquoted;
  }
  function tagOpenAttributeValueQuoted(code2) {
    if (code2 === marker) {
      effects.consume(code2);
      return tagOpenAttributeValueQuotedAfter;
    }
    if (code2 === null) {
      return nok(code2);
    }
    if (markdownLineEnding(code2)) {
      returnState = tagOpenAttributeValueQuoted;
      return atLineEnding(code2);
    }
    effects.consume(code2);
    return tagOpenAttributeValueQuoted;
  }
  function tagOpenAttributeValueQuotedAfter(code2) {
    if (code2 === 62 || code2 === 47 || markdownLineEndingOrSpace(code2)) {
      return tagOpenBetween(code2);
    }
    return nok(code2);
  }
  function tagOpenAttributeValueUnquoted(code2) {
    if (code2 === null || code2 === 34 || code2 === 39 || code2 === 60 || code2 === 61 || code2 === 96) {
      return nok(code2);
    }
    if (code2 === 62 || markdownLineEndingOrSpace(code2)) {
      return tagOpenBetween(code2);
    }
    effects.consume(code2);
    return tagOpenAttributeValueUnquoted;
  }
  function atLineEnding(code2) {
    effects.exit("htmlTextData");
    effects.enter("lineEnding");
    effects.consume(code2);
    effects.exit("lineEnding");
    return factorySpace(effects, afterPrefix, "linePrefix", self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
  }
  function afterPrefix(code2) {
    effects.enter("htmlTextData");
    return returnState(code2);
  }
  function end(code2) {
    if (code2 === 62) {
      effects.consume(code2);
      effects.exit("htmlTextData");
      effects.exit("htmlText");
      return ok2;
    }
    return nok(code2);
  }
}
const labelEnd = {
  name: "labelEnd",
  tokenize: tokenizeLabelEnd,
  resolveTo: resolveToLabelEnd,
  resolveAll: resolveAllLabelEnd
};
const resourceConstruct = {
  tokenize: tokenizeResource
};
const fullReferenceConstruct = {
  tokenize: tokenizeFullReference
};
const collapsedReferenceConstruct = {
  tokenize: tokenizeCollapsedReference
};
function resolveAllLabelEnd(events) {
  let index2 = -1;
  let token;
  while (++index2 < events.length) {
    token = events[index2][1];
    if (token.type === "labelImage" || token.type === "labelLink" || token.type === "labelEnd") {
      events.splice(index2 + 1, token.type === "labelImage" ? 4 : 2);
      token.type = "data";
      index2++;
    }
  }
  return events;
}
function resolveToLabelEnd(events, context) {
  let index2 = events.length;
  let offset = 0;
  let token;
  let open;
  let close;
  let media;
  while (index2--) {
    token = events[index2][1];
    if (open) {
      if (token.type === "link" || token.type === "labelLink" && token._inactive) {
        break;
      }
      if (events[index2][0] === "enter" && token.type === "labelLink") {
        token._inactive = true;
      }
    } else if (close) {
      if (events[index2][0] === "enter" && (token.type === "labelImage" || token.type === "labelLink") && !token._balanced) {
        open = index2;
        if (token.type !== "labelLink") {
          offset = 2;
          break;
        }
      }
    } else if (token.type === "labelEnd") {
      close = index2;
    }
  }
  const group = {
    type: events[open][1].type === "labelLink" ? "link" : "image",
    start: Object.assign({}, events[open][1].start),
    end: Object.assign({}, events[events.length - 1][1].end)
  };
  const label = {
    type: "label",
    start: Object.assign({}, events[open][1].start),
    end: Object.assign({}, events[close][1].end)
  };
  const text2 = {
    type: "labelText",
    start: Object.assign({}, events[open + offset + 2][1].end),
    end: Object.assign({}, events[close - 2][1].start)
  };
  media = [
    ["enter", group, context],
    ["enter", label, context]
  ];
  media = push(media, events.slice(open + 1, open + offset + 3));
  media = push(media, [["enter", text2, context]]);
  media = push(media, resolveAll(context.parser.constructs.insideSpan.null, events.slice(open + offset + 4, close - 3), context));
  media = push(media, [
    ["exit", text2, context],
    events[close - 2],
    events[close - 1],
    ["exit", label, context]
  ]);
  media = push(media, events.slice(close + 1));
  media = push(media, [["exit", group, context]]);
  splice(events, open, events.length, media);
  return events;
}
function tokenizeLabelEnd(effects, ok2, nok) {
  const self = this;
  let index2 = self.events.length;
  let labelStart;
  let defined;
  while (index2--) {
    if ((self.events[index2][1].type === "labelImage" || self.events[index2][1].type === "labelLink") && !self.events[index2][1]._balanced) {
      labelStart = self.events[index2][1];
      break;
    }
  }
  return start;
  function start(code2) {
    if (!labelStart) {
      return nok(code2);
    }
    if (labelStart._inactive)
      return balanced(code2);
    defined = self.parser.defined.includes(normalizeIdentifier(self.sliceSerialize({
      start: labelStart.end,
      end: self.now()
    })));
    effects.enter("labelEnd");
    effects.enter("labelMarker");
    effects.consume(code2);
    effects.exit("labelMarker");
    effects.exit("labelEnd");
    return afterLabelEnd;
  }
  function afterLabelEnd(code2) {
    if (code2 === 40) {
      return effects.attempt(resourceConstruct, ok2, defined ? ok2 : balanced)(code2);
    }
    if (code2 === 91) {
      return effects.attempt(fullReferenceConstruct, ok2, defined ? effects.attempt(collapsedReferenceConstruct, ok2, balanced) : balanced)(code2);
    }
    return defined ? ok2(code2) : balanced(code2);
  }
  function balanced(code2) {
    labelStart._balanced = true;
    return nok(code2);
  }
}
function tokenizeResource(effects, ok2, nok) {
  return start;
  function start(code2) {
    effects.enter("resource");
    effects.enter("resourceMarker");
    effects.consume(code2);
    effects.exit("resourceMarker");
    return factoryWhitespace(effects, open);
  }
  function open(code2) {
    if (code2 === 41) {
      return end(code2);
    }
    return factoryDestination(effects, destinationAfter, nok, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(code2);
  }
  function destinationAfter(code2) {
    return markdownLineEndingOrSpace(code2) ? factoryWhitespace(effects, between)(code2) : end(code2);
  }
  function between(code2) {
    if (code2 === 34 || code2 === 39 || code2 === 40) {
      return factoryTitle(effects, factoryWhitespace(effects, end), nok, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(code2);
    }
    return end(code2);
  }
  function end(code2) {
    if (code2 === 41) {
      effects.enter("resourceMarker");
      effects.consume(code2);
      effects.exit("resourceMarker");
      effects.exit("resource");
      return ok2;
    }
    return nok(code2);
  }
}
function tokenizeFullReference(effects, ok2, nok) {
  const self = this;
  return start;
  function start(code2) {
    return factoryLabel.call(self, effects, afterLabel, nok, "reference", "referenceMarker", "referenceString")(code2);
  }
  function afterLabel(code2) {
    return self.parser.defined.includes(normalizeIdentifier(self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1))) ? ok2(code2) : nok(code2);
  }
}
function tokenizeCollapsedReference(effects, ok2, nok) {
  return start;
  function start(code2) {
    effects.enter("reference");
    effects.enter("referenceMarker");
    effects.consume(code2);
    effects.exit("referenceMarker");
    return open;
  }
  function open(code2) {
    if (code2 === 93) {
      effects.enter("referenceMarker");
      effects.consume(code2);
      effects.exit("referenceMarker");
      effects.exit("reference");
      return ok2;
    }
    return nok(code2);
  }
}
const labelStartImage = {
  name: "labelStartImage",
  tokenize: tokenizeLabelStartImage,
  resolveAll: labelEnd.resolveAll
};
function tokenizeLabelStartImage(effects, ok2, nok) {
  const self = this;
  return start;
  function start(code2) {
    effects.enter("labelImage");
    effects.enter("labelImageMarker");
    effects.consume(code2);
    effects.exit("labelImageMarker");
    return open;
  }
  function open(code2) {
    if (code2 === 91) {
      effects.enter("labelMarker");
      effects.consume(code2);
      effects.exit("labelMarker");
      effects.exit("labelImage");
      return after;
    }
    return nok(code2);
  }
  function after(code2) {
    return code2 === 94 && "_hiddenFootnoteSupport" in self.parser.constructs ? nok(code2) : ok2(code2);
  }
}
const labelStartLink = {
  name: "labelStartLink",
  tokenize: tokenizeLabelStartLink,
  resolveAll: labelEnd.resolveAll
};
function tokenizeLabelStartLink(effects, ok2, nok) {
  const self = this;
  return start;
  function start(code2) {
    effects.enter("labelLink");
    effects.enter("labelMarker");
    effects.consume(code2);
    effects.exit("labelMarker");
    effects.exit("labelLink");
    return after;
  }
  function after(code2) {
    return code2 === 94 && "_hiddenFootnoteSupport" in self.parser.constructs ? nok(code2) : ok2(code2);
  }
}
const lineEnding = {
  name: "lineEnding",
  tokenize: tokenizeLineEnding
};
function tokenizeLineEnding(effects, ok2) {
  return start;
  function start(code2) {
    effects.enter("lineEnding");
    effects.consume(code2);
    effects.exit("lineEnding");
    return factorySpace(effects, ok2, "linePrefix");
  }
}
const thematicBreak$1 = {
  name: "thematicBreak",
  tokenize: tokenizeThematicBreak
};
function tokenizeThematicBreak(effects, ok2, nok) {
  let size = 0;
  let marker;
  return start;
  function start(code2) {
    effects.enter("thematicBreak");
    marker = code2;
    return atBreak(code2);
  }
  function atBreak(code2) {
    if (code2 === marker) {
      effects.enter("thematicBreakSequence");
      return sequence(code2);
    }
    if (markdownSpace(code2)) {
      return factorySpace(effects, atBreak, "whitespace")(code2);
    }
    if (size < 3 || code2 !== null && !markdownLineEnding(code2)) {
      return nok(code2);
    }
    effects.exit("thematicBreak");
    return ok2(code2);
  }
  function sequence(code2) {
    if (code2 === marker) {
      effects.consume(code2);
      size++;
      return sequence;
    }
    effects.exit("thematicBreakSequence");
    return atBreak(code2);
  }
}
const list$1 = {
  name: "list",
  tokenize: tokenizeListStart,
  continuation: {
    tokenize: tokenizeListContinuation
  },
  exit: tokenizeListEnd
};
const listItemPrefixWhitespaceConstruct = {
  tokenize: tokenizeListItemPrefixWhitespace,
  partial: true
};
const indentConstruct = {
  tokenize: tokenizeIndent$1,
  partial: true
};
function tokenizeListStart(effects, ok2, nok) {
  const self = this;
  const tail = self.events[self.events.length - 1];
  let initialSize = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], true).length : 0;
  let size = 0;
  return start;
  function start(code2) {
    const kind = self.containerState.type || (code2 === 42 || code2 === 43 || code2 === 45 ? "listUnordered" : "listOrdered");
    if (kind === "listUnordered" ? !self.containerState.marker || code2 === self.containerState.marker : asciiDigit(code2)) {
      if (!self.containerState.type) {
        self.containerState.type = kind;
        effects.enter(kind, {
          _container: true
        });
      }
      if (kind === "listUnordered") {
        effects.enter("listItemPrefix");
        return code2 === 42 || code2 === 45 ? effects.check(thematicBreak$1, nok, atMarker)(code2) : atMarker(code2);
      }
      if (!self.interrupt || code2 === 49) {
        effects.enter("listItemPrefix");
        effects.enter("listItemValue");
        return inside(code2);
      }
    }
    return nok(code2);
  }
  function inside(code2) {
    if (asciiDigit(code2) && ++size < 10) {
      effects.consume(code2);
      return inside;
    }
    if ((!self.interrupt || size < 2) && (self.containerState.marker ? code2 === self.containerState.marker : code2 === 41 || code2 === 46)) {
      effects.exit("listItemValue");
      return atMarker(code2);
    }
    return nok(code2);
  }
  function atMarker(code2) {
    effects.enter("listItemMarker");
    effects.consume(code2);
    effects.exit("listItemMarker");
    self.containerState.marker = self.containerState.marker || code2;
    return effects.check(blankLine, self.interrupt ? nok : onBlank, effects.attempt(listItemPrefixWhitespaceConstruct, endOfPrefix, otherPrefix));
  }
  function onBlank(code2) {
    self.containerState.initialBlankLine = true;
    initialSize++;
    return endOfPrefix(code2);
  }
  function otherPrefix(code2) {
    if (markdownSpace(code2)) {
      effects.enter("listItemPrefixWhitespace");
      effects.consume(code2);
      effects.exit("listItemPrefixWhitespace");
      return endOfPrefix;
    }
    return nok(code2);
  }
  function endOfPrefix(code2) {
    self.containerState.size = initialSize + self.sliceSerialize(effects.exit("listItemPrefix"), true).length;
    return ok2(code2);
  }
}
function tokenizeListContinuation(effects, ok2, nok) {
  const self = this;
  self.containerState._closeFlow = void 0;
  return effects.check(blankLine, onBlank, notBlank);
  function onBlank(code2) {
    self.containerState.furtherBlankLines = self.containerState.furtherBlankLines || self.containerState.initialBlankLine;
    return factorySpace(effects, ok2, "listItemIndent", self.containerState.size + 1)(code2);
  }
  function notBlank(code2) {
    if (self.containerState.furtherBlankLines || !markdownSpace(code2)) {
      self.containerState.furtherBlankLines = void 0;
      self.containerState.initialBlankLine = void 0;
      return notInCurrentItem(code2);
    }
    self.containerState.furtherBlankLines = void 0;
    self.containerState.initialBlankLine = void 0;
    return effects.attempt(indentConstruct, ok2, notInCurrentItem)(code2);
  }
  function notInCurrentItem(code2) {
    self.containerState._closeFlow = true;
    self.interrupt = void 0;
    return factorySpace(effects, effects.attempt(list$1, ok2, nok), "linePrefix", self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(code2);
  }
}
function tokenizeIndent$1(effects, ok2, nok) {
  const self = this;
  return factorySpace(effects, afterPrefix, "listItemIndent", self.containerState.size + 1);
  function afterPrefix(code2) {
    const tail = self.events[self.events.length - 1];
    return tail && tail[1].type === "listItemIndent" && tail[2].sliceSerialize(tail[1], true).length === self.containerState.size ? ok2(code2) : nok(code2);
  }
}
function tokenizeListEnd(effects) {
  effects.exit(this.containerState.type);
}
function tokenizeListItemPrefixWhitespace(effects, ok2, nok) {
  const self = this;
  return factorySpace(effects, afterPrefix, "listItemPrefixWhitespace", self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4 + 1);
  function afterPrefix(code2) {
    const tail = self.events[self.events.length - 1];
    return !markdownSpace(code2) && tail && tail[1].type === "listItemPrefixWhitespace" ? ok2(code2) : nok(code2);
  }
}
const setextUnderline = {
  name: "setextUnderline",
  tokenize: tokenizeSetextUnderline,
  resolveTo: resolveToSetextUnderline
};
function resolveToSetextUnderline(events, context) {
  let index2 = events.length;
  let content2;
  let text2;
  let definition2;
  while (index2--) {
    if (events[index2][0] === "enter") {
      if (events[index2][1].type === "content") {
        content2 = index2;
        break;
      }
      if (events[index2][1].type === "paragraph") {
        text2 = index2;
      }
    } else {
      if (events[index2][1].type === "content") {
        events.splice(index2, 1);
      }
      if (!definition2 && events[index2][1].type === "definition") {
        definition2 = index2;
      }
    }
  }
  const heading2 = {
    type: "setextHeading",
    start: Object.assign({}, events[text2][1].start),
    end: Object.assign({}, events[events.length - 1][1].end)
  };
  events[text2][1].type = "setextHeadingText";
  if (definition2) {
    events.splice(text2, 0, ["enter", heading2, context]);
    events.splice(definition2 + 1, 0, ["exit", events[content2][1], context]);
    events[content2][1].end = Object.assign({}, events[definition2][1].end);
  } else {
    events[content2][1] = heading2;
  }
  events.push(["exit", heading2, context]);
  return events;
}
function tokenizeSetextUnderline(effects, ok2, nok) {
  const self = this;
  let index2 = self.events.length;
  let marker;
  let paragraph2;
  while (index2--) {
    if (self.events[index2][1].type !== "lineEnding" && self.events[index2][1].type !== "linePrefix" && self.events[index2][1].type !== "content") {
      paragraph2 = self.events[index2][1].type === "paragraph";
      break;
    }
  }
  return start;
  function start(code2) {
    if (!self.parser.lazy[self.now().line] && (self.interrupt || paragraph2)) {
      effects.enter("setextHeadingLine");
      effects.enter("setextHeadingLineSequence");
      marker = code2;
      return closingSequence(code2);
    }
    return nok(code2);
  }
  function closingSequence(code2) {
    if (code2 === marker) {
      effects.consume(code2);
      return closingSequence;
    }
    effects.exit("setextHeadingLineSequence");
    return factorySpace(effects, closingSequenceEnd, "lineSuffix")(code2);
  }
  function closingSequenceEnd(code2) {
    if (code2 === null || markdownLineEnding(code2)) {
      effects.exit("setextHeadingLine");
      return ok2(code2);
    }
    return nok(code2);
  }
}
const flow$1 = {
  tokenize: initializeFlow
};
function initializeFlow(effects) {
  const self = this;
  const initial = effects.attempt(blankLine, atBlankEnding, effects.attempt(this.parser.constructs.flowInitial, afterConstruct, factorySpace(effects, effects.attempt(this.parser.constructs.flow, afterConstruct, effects.attempt(content, afterConstruct)), "linePrefix")));
  return initial;
  function atBlankEnding(code2) {
    if (code2 === null) {
      effects.consume(code2);
      return;
    }
    effects.enter("lineEndingBlank");
    effects.consume(code2);
    effects.exit("lineEndingBlank");
    self.currentConstruct = void 0;
    return initial;
  }
  function afterConstruct(code2) {
    if (code2 === null) {
      effects.consume(code2);
      return;
    }
    effects.enter("lineEnding");
    effects.consume(code2);
    effects.exit("lineEnding");
    self.currentConstruct = void 0;
    return initial;
  }
}
const resolver = {
  resolveAll: createResolver()
};
const string$1 = initializeFactory("string");
const text$3 = initializeFactory("text");
function initializeFactory(field) {
  return {
    tokenize: initializeText,
    resolveAll: createResolver(field === "text" ? resolveAllLineSuffixes : void 0)
  };
  function initializeText(effects) {
    const self = this;
    const constructs2 = this.parser.constructs[field];
    const text2 = effects.attempt(constructs2, start, notText);
    return start;
    function start(code2) {
      return atBreak(code2) ? text2(code2) : notText(code2);
    }
    function notText(code2) {
      if (code2 === null) {
        effects.consume(code2);
        return;
      }
      effects.enter("data");
      effects.consume(code2);
      return data;
    }
    function data(code2) {
      if (atBreak(code2)) {
        effects.exit("data");
        return text2(code2);
      }
      effects.consume(code2);
      return data;
    }
    function atBreak(code2) {
      if (code2 === null) {
        return true;
      }
      const list2 = constructs2[code2];
      let index2 = -1;
      if (list2) {
        while (++index2 < list2.length) {
          const item = list2[index2];
          if (!item.previous || item.previous.call(self, self.previous)) {
            return true;
          }
        }
      }
      return false;
    }
  }
}
function createResolver(extraResolver) {
  return resolveAllText;
  function resolveAllText(events, context) {
    let index2 = -1;
    let enter;
    while (++index2 <= events.length) {
      if (enter === void 0) {
        if (events[index2] && events[index2][1].type === "data") {
          enter = index2;
          index2++;
        }
      } else if (!events[index2] || events[index2][1].type !== "data") {
        if (index2 !== enter + 2) {
          events[enter][1].end = events[index2 - 1][1].end;
          events.splice(enter + 2, index2 - enter - 2);
          index2 = enter + 2;
        }
        enter = void 0;
      }
    }
    return extraResolver ? extraResolver(events, context) : events;
  }
}
function resolveAllLineSuffixes(events, context) {
  let eventIndex = 0;
  while (++eventIndex <= events.length) {
    if ((eventIndex === events.length || events[eventIndex][1].type === "lineEnding") && events[eventIndex - 1][1].type === "data") {
      const data = events[eventIndex - 1][1];
      const chunks = context.sliceStream(data);
      let index2 = chunks.length;
      let bufferIndex = -1;
      let size = 0;
      let tabs;
      while (index2--) {
        const chunk = chunks[index2];
        if (typeof chunk === "string") {
          bufferIndex = chunk.length;
          while (chunk.charCodeAt(bufferIndex - 1) === 32) {
            size++;
            bufferIndex--;
          }
          if (bufferIndex)
            break;
          bufferIndex = -1;
        } else if (chunk === -2) {
          tabs = true;
          size++;
        } else if (chunk === -1)
          ;
        else {
          index2++;
          break;
        }
      }
      if (size) {
        const token = {
          type: eventIndex === events.length || tabs || size < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            line: data.end.line,
            column: data.end.column - size,
            offset: data.end.offset - size,
            _index: data.start._index + index2,
            _bufferIndex: index2 ? bufferIndex : data.start._bufferIndex + bufferIndex
          },
          end: Object.assign({}, data.end)
        };
        data.end = Object.assign({}, token.start);
        if (data.start.offset === data.end.offset) {
          Object.assign(data, token);
        } else {
          events.splice(eventIndex, 0, ["enter", token, context], ["exit", token, context]);
          eventIndex += 2;
        }
      }
      eventIndex++;
    }
  }
  return events;
}
function createTokenizer(parser, initialize, from) {
  let point2 = Object.assign(from ? Object.assign({}, from) : {
    line: 1,
    column: 1,
    offset: 0
  }, {
    _index: 0,
    _bufferIndex: -1
  });
  const columnStart = {};
  const resolveAllConstructs = [];
  let chunks = [];
  let stack = [];
  const effects = {
    consume,
    enter,
    exit: exit2,
    attempt: constructFactory(onsuccessfulconstruct),
    check: constructFactory(onsuccessfulcheck),
    interrupt: constructFactory(onsuccessfulcheck, {
      interrupt: true
    })
  };
  const context = {
    previous: null,
    code: null,
    containerState: {},
    events: [],
    parser,
    sliceStream,
    sliceSerialize,
    now,
    defineSkip,
    write
  };
  let state = initialize.tokenize.call(context, effects);
  if (initialize.resolveAll) {
    resolveAllConstructs.push(initialize);
  }
  return context;
  function write(slice) {
    chunks = push(chunks, slice);
    main();
    if (chunks[chunks.length - 1] !== null) {
      return [];
    }
    addResult(initialize, 0);
    context.events = resolveAll(resolveAllConstructs, context.events, context);
    return context.events;
  }
  function sliceSerialize(token, expandTabs) {
    return serializeChunks(sliceStream(token), expandTabs);
  }
  function sliceStream(token) {
    return sliceChunks(chunks, token);
  }
  function now() {
    return Object.assign({}, point2);
  }
  function defineSkip(value) {
    columnStart[value.line] = value.column;
    accountForPotentialSkip();
  }
  function main() {
    let chunkIndex;
    while (point2._index < chunks.length) {
      const chunk = chunks[point2._index];
      if (typeof chunk === "string") {
        chunkIndex = point2._index;
        if (point2._bufferIndex < 0) {
          point2._bufferIndex = 0;
        }
        while (point2._index === chunkIndex && point2._bufferIndex < chunk.length) {
          go(chunk.charCodeAt(point2._bufferIndex));
        }
      } else {
        go(chunk);
      }
    }
  }
  function go(code2) {
    state = state(code2);
  }
  function consume(code2) {
    if (markdownLineEnding(code2)) {
      point2.line++;
      point2.column = 1;
      point2.offset += code2 === -3 ? 2 : 1;
      accountForPotentialSkip();
    } else if (code2 !== -1) {
      point2.column++;
      point2.offset++;
    }
    if (point2._bufferIndex < 0) {
      point2._index++;
    } else {
      point2._bufferIndex++;
      if (point2._bufferIndex === chunks[point2._index].length) {
        point2._bufferIndex = -1;
        point2._index++;
      }
    }
    context.previous = code2;
  }
  function enter(type, fields) {
    const token = fields || {};
    token.type = type;
    token.start = now();
    context.events.push(["enter", token, context]);
    stack.push(token);
    return token;
  }
  function exit2(type) {
    const token = stack.pop();
    token.end = now();
    context.events.push(["exit", token, context]);
    return token;
  }
  function onsuccessfulconstruct(construct, info) {
    addResult(construct, info.from);
  }
  function onsuccessfulcheck(_2, info) {
    info.restore();
  }
  function constructFactory(onreturn, fields) {
    return hook;
    function hook(constructs2, returnState, bogusState) {
      let listOfConstructs;
      let constructIndex;
      let currentConstruct;
      let info;
      return Array.isArray(constructs2) ? handleListOfConstructs(constructs2) : "tokenize" in constructs2 ? handleListOfConstructs([constructs2]) : handleMapOfConstructs(constructs2);
      function handleMapOfConstructs(map) {
        return start;
        function start(code2) {
          const def = code2 !== null && map[code2];
          const all2 = code2 !== null && map.null;
          const list2 = [
            ...Array.isArray(def) ? def : def ? [def] : [],
            ...Array.isArray(all2) ? all2 : all2 ? [all2] : []
          ];
          return handleListOfConstructs(list2)(code2);
        }
      }
      function handleListOfConstructs(list2) {
        listOfConstructs = list2;
        constructIndex = 0;
        if (list2.length === 0) {
          return bogusState;
        }
        return handleConstruct(list2[constructIndex]);
      }
      function handleConstruct(construct) {
        return start;
        function start(code2) {
          info = store();
          currentConstruct = construct;
          if (!construct.partial) {
            context.currentConstruct = construct;
          }
          if (construct.name && context.parser.constructs.disable.null.includes(construct.name)) {
            return nok();
          }
          return construct.tokenize.call(fields ? Object.assign(Object.create(context), fields) : context, effects, ok2, nok)(code2);
        }
      }
      function ok2(code2) {
        onreturn(currentConstruct, info);
        return returnState;
      }
      function nok(code2) {
        info.restore();
        if (++constructIndex < listOfConstructs.length) {
          return handleConstruct(listOfConstructs[constructIndex]);
        }
        return bogusState;
      }
    }
  }
  function addResult(construct, from2) {
    if (construct.resolveAll && !resolveAllConstructs.includes(construct)) {
      resolveAllConstructs.push(construct);
    }
    if (construct.resolve) {
      splice(context.events, from2, context.events.length - from2, construct.resolve(context.events.slice(from2), context));
    }
    if (construct.resolveTo) {
      context.events = construct.resolveTo(context.events, context);
    }
  }
  function store() {
    const startPoint = now();
    const startPrevious = context.previous;
    const startCurrentConstruct = context.currentConstruct;
    const startEventsIndex = context.events.length;
    const startStack = Array.from(stack);
    return {
      restore,
      from: startEventsIndex
    };
    function restore() {
      point2 = startPoint;
      context.previous = startPrevious;
      context.currentConstruct = startCurrentConstruct;
      context.events.length = startEventsIndex;
      stack = startStack;
      accountForPotentialSkip();
    }
  }
  function accountForPotentialSkip() {
    if (point2.line in columnStart && point2.column < 2) {
      point2.column = columnStart[point2.line];
      point2.offset += columnStart[point2.line] - 1;
    }
  }
}
function sliceChunks(chunks, token) {
  const startIndex = token.start._index;
  const startBufferIndex = token.start._bufferIndex;
  const endIndex = token.end._index;
  const endBufferIndex = token.end._bufferIndex;
  let view;
  if (startIndex === endIndex) {
    view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)];
  } else {
    view = chunks.slice(startIndex, endIndex);
    if (startBufferIndex > -1) {
      view[0] = view[0].slice(startBufferIndex);
    }
    if (endBufferIndex > 0) {
      view.push(chunks[endIndex].slice(0, endBufferIndex));
    }
  }
  return view;
}
function serializeChunks(chunks, expandTabs) {
  let index2 = -1;
  const result = [];
  let atTab;
  while (++index2 < chunks.length) {
    const chunk = chunks[index2];
    let value;
    if (typeof chunk === "string") {
      value = chunk;
    } else
      switch (chunk) {
        case -5: {
          value = "\r";
          break;
        }
        case -4: {
          value = "\n";
          break;
        }
        case -3: {
          value = "\r\n";
          break;
        }
        case -2: {
          value = expandTabs ? " " : "	";
          break;
        }
        case -1: {
          if (!expandTabs && atTab)
            continue;
          value = " ";
          break;
        }
        default: {
          value = String.fromCharCode(chunk);
        }
      }
    atTab = chunk === -2;
    result.push(value);
  }
  return result.join("");
}
const document$1 = {
  [42]: list$1,
  [43]: list$1,
  [45]: list$1,
  [48]: list$1,
  [49]: list$1,
  [50]: list$1,
  [51]: list$1,
  [52]: list$1,
  [53]: list$1,
  [54]: list$1,
  [55]: list$1,
  [56]: list$1,
  [57]: list$1,
  [62]: blockQuote
};
const contentInitial = {
  [91]: definition
};
const flowInitial = {
  [-2]: codeIndented,
  [-1]: codeIndented,
  [32]: codeIndented
};
const flow = {
  [35]: headingAtx,
  [42]: thematicBreak$1,
  [45]: [setextUnderline, thematicBreak$1],
  [60]: htmlFlow,
  [61]: setextUnderline,
  [95]: thematicBreak$1,
  [96]: codeFenced,
  [126]: codeFenced
};
const string = {
  [38]: characterReference,
  [92]: characterEscape
};
const text$2 = {
  [-5]: lineEnding,
  [-4]: lineEnding,
  [-3]: lineEnding,
  [33]: labelStartImage,
  [38]: characterReference,
  [42]: attention,
  [60]: [autolink, htmlText],
  [91]: labelStartLink,
  [92]: [hardBreakEscape, characterEscape],
  [93]: labelEnd,
  [95]: attention,
  [96]: codeText
};
const insideSpan = {
  null: [attention, resolver]
};
const attentionMarkers = {
  null: [42, 95]
};
const disable = {
  null: []
};
var defaultConstructs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  document: document$1,
  contentInitial,
  flowInitial,
  flow,
  string,
  text: text$2,
  insideSpan,
  attentionMarkers,
  disable
}, Symbol.toStringTag, { value: "Module" }));
function parse$1(options = {}) {
  const constructs2 = combineExtensions([defaultConstructs].concat(options.extensions || []));
  const parser = {
    defined: [],
    lazy: {},
    constructs: constructs2,
    content: create2(content$1),
    document: create2(document$2),
    flow: create2(flow$1),
    string: create2(string$1),
    text: create2(text$3)
  };
  return parser;
  function create2(initial) {
    return creator;
    function creator(from) {
      return createTokenizer(parser, initial, from);
    }
  }
}
const search = /[\0\t\n\r]/g;
function preprocess() {
  let column = 1;
  let buffer = "";
  let start = true;
  let atCarriageReturn;
  return preprocessor;
  function preprocessor(value, encoding, end) {
    const chunks = [];
    let match;
    let next;
    let startPosition;
    let endPosition;
    let code2;
    value = buffer + value.toString(encoding);
    startPosition = 0;
    buffer = "";
    if (start) {
      if (value.charCodeAt(0) === 65279) {
        startPosition++;
      }
      start = void 0;
    }
    while (startPosition < value.length) {
      search.lastIndex = startPosition;
      match = search.exec(value);
      endPosition = match && match.index !== void 0 ? match.index : value.length;
      code2 = value.charCodeAt(endPosition);
      if (!match) {
        buffer = value.slice(startPosition);
        break;
      }
      if (code2 === 10 && startPosition === endPosition && atCarriageReturn) {
        chunks.push(-3);
        atCarriageReturn = void 0;
      } else {
        if (atCarriageReturn) {
          chunks.push(-5);
          atCarriageReturn = void 0;
        }
        if (startPosition < endPosition) {
          chunks.push(value.slice(startPosition, endPosition));
          column += endPosition - startPosition;
        }
        switch (code2) {
          case 0: {
            chunks.push(65533);
            column++;
            break;
          }
          case 9: {
            next = Math.ceil(column / 4) * 4;
            chunks.push(-2);
            while (column++ < next)
              chunks.push(-1);
            break;
          }
          case 10: {
            chunks.push(-4);
            column = 1;
            break;
          }
          default: {
            atCarriageReturn = true;
            column = 1;
          }
        }
      }
      startPosition = endPosition + 1;
    }
    if (end) {
      if (atCarriageReturn)
        chunks.push(-5);
      if (buffer)
        chunks.push(buffer);
      chunks.push(null);
    }
    return chunks;
  }
}
function postprocess(events) {
  while (!subtokenize(events)) {
  }
  return events;
}
function decodeNumericCharacterReference(value, base2) {
  const code2 = Number.parseInt(value, base2);
  if (code2 < 9 || code2 === 11 || code2 > 13 && code2 < 32 || code2 > 126 && code2 < 160 || code2 > 55295 && code2 < 57344 || code2 > 64975 && code2 < 65008 || (code2 & 65535) === 65535 || (code2 & 65535) === 65534 || code2 > 1114111) {
    return "\uFFFD";
  }
  return String.fromCharCode(code2);
}
const characterEscapeOrReference = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function decodeString(value) {
  return value.replace(characterEscapeOrReference, decode);
}
function decode($0, $1, $2) {
  if ($1) {
    return $1;
  }
  const head = $2.charCodeAt(0);
  if (head === 35) {
    const head2 = $2.charCodeAt(1);
    const hex2 = head2 === 120 || head2 === 88;
    return decodeNumericCharacterReference($2.slice(hex2 ? 2 : 1), hex2 ? 16 : 10);
  }
  return decodeNamedCharacterReference($2) || $0;
}
const own$7 = {}.hasOwnProperty;
const fromMarkdown = function(value, encoding, options) {
  if (typeof encoding !== "string") {
    options = encoding;
    encoding = void 0;
  }
  return compiler(options)(postprocess(parse$1(options).document().write(preprocess()(value, encoding, true))));
};
function compiler(options = {}) {
  const config = configure({
    transforms: [],
    canContainEols: [
      "emphasis",
      "fragment",
      "heading",
      "paragraph",
      "strong"
    ],
    enter: {
      autolink: opener(link2),
      autolinkProtocol: onenterdata,
      autolinkEmail: onenterdata,
      atxHeading: opener(heading2),
      blockQuote: opener(blockQuote2),
      characterEscape: onenterdata,
      characterReference: onenterdata,
      codeFenced: opener(codeFlow),
      codeFencedFenceInfo: buffer,
      codeFencedFenceMeta: buffer,
      codeIndented: opener(codeFlow, buffer),
      codeText: opener(codeText2, buffer),
      codeTextData: onenterdata,
      data: onenterdata,
      codeFlowValue: onenterdata,
      definition: opener(definition2),
      definitionDestinationString: buffer,
      definitionLabelString: buffer,
      definitionTitleString: buffer,
      emphasis: opener(emphasis2),
      hardBreakEscape: opener(hardBreak2),
      hardBreakTrailing: opener(hardBreak2),
      htmlFlow: opener(html2, buffer),
      htmlFlowData: onenterdata,
      htmlText: opener(html2, buffer),
      htmlTextData: onenterdata,
      image: opener(image2),
      label: buffer,
      link: opener(link2),
      listItem: opener(listItem2),
      listItemValue: onenterlistitemvalue,
      listOrdered: opener(list2, onenterlistordered),
      listUnordered: opener(list2),
      paragraph: opener(paragraph2),
      reference: onenterreference,
      referenceString: buffer,
      resourceDestinationString: buffer,
      resourceTitleString: buffer,
      setextHeading: opener(heading2),
      strong: opener(strong2),
      thematicBreak: opener(thematicBreak2)
    },
    exit: {
      atxHeading: closer(),
      atxHeadingSequence: onexitatxheadingsequence,
      autolink: closer(),
      autolinkEmail: onexitautolinkemail,
      autolinkProtocol: onexitautolinkprotocol,
      blockQuote: closer(),
      characterEscapeValue: onexitdata,
      characterReferenceMarkerHexadecimal: onexitcharacterreferencemarker,
      characterReferenceMarkerNumeric: onexitcharacterreferencemarker,
      characterReferenceValue: onexitcharacterreferencevalue,
      codeFenced: closer(onexitcodefenced),
      codeFencedFence: onexitcodefencedfence,
      codeFencedFenceInfo: onexitcodefencedfenceinfo,
      codeFencedFenceMeta: onexitcodefencedfencemeta,
      codeFlowValue: onexitdata,
      codeIndented: closer(onexitcodeindented),
      codeText: closer(onexitcodetext),
      codeTextData: onexitdata,
      data: onexitdata,
      definition: closer(),
      definitionDestinationString: onexitdefinitiondestinationstring,
      definitionLabelString: onexitdefinitionlabelstring,
      definitionTitleString: onexitdefinitiontitlestring,
      emphasis: closer(),
      hardBreakEscape: closer(onexithardbreak),
      hardBreakTrailing: closer(onexithardbreak),
      htmlFlow: closer(onexithtmlflow),
      htmlFlowData: onexitdata,
      htmlText: closer(onexithtmltext),
      htmlTextData: onexitdata,
      image: closer(onexitimage),
      label: onexitlabel,
      labelText: onexitlabeltext,
      lineEnding: onexitlineending,
      link: closer(onexitlink),
      listItem: closer(),
      listOrdered: closer(),
      listUnordered: closer(),
      paragraph: closer(),
      referenceString: onexitreferencestring,
      resourceDestinationString: onexitresourcedestinationstring,
      resourceTitleString: onexitresourcetitlestring,
      resource: onexitresource,
      setextHeading: closer(onexitsetextheading),
      setextHeadingLineSequence: onexitsetextheadinglinesequence,
      setextHeadingText: onexitsetextheadingtext,
      strong: closer(),
      thematicBreak: closer()
    }
  }, options.mdastExtensions || []);
  const data = {};
  return compile;
  function compile(events) {
    let tree = {
      type: "root",
      children: []
    };
    const stack = [tree];
    const tokenStack = [];
    const listStack = [];
    const context = {
      stack,
      tokenStack,
      config,
      enter,
      exit: exit2,
      buffer,
      resume,
      setData,
      getData
    };
    let index2 = -1;
    while (++index2 < events.length) {
      if (events[index2][1].type === "listOrdered" || events[index2][1].type === "listUnordered") {
        if (events[index2][0] === "enter") {
          listStack.push(index2);
        } else {
          const tail = listStack.pop();
          index2 = prepareList(events, tail, index2);
        }
      }
    }
    index2 = -1;
    while (++index2 < events.length) {
      const handler = config[events[index2][0]];
      if (own$7.call(handler, events[index2][1].type)) {
        handler[events[index2][1].type].call(Object.assign({
          sliceSerialize: events[index2][2].sliceSerialize
        }, context), events[index2][1]);
      }
    }
    if (tokenStack.length > 0) {
      const tail = tokenStack[tokenStack.length - 1];
      const handler = tail[1] || defaultOnError;
      handler.call(context, void 0, tail[0]);
    }
    tree.position = {
      start: point2(events.length > 0 ? events[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: point2(events.length > 0 ? events[events.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    };
    index2 = -1;
    while (++index2 < config.transforms.length) {
      tree = config.transforms[index2](tree) || tree;
    }
    return tree;
  }
  function prepareList(events, start, length) {
    let index2 = start - 1;
    let containerBalance = -1;
    let listSpread = false;
    let listItem3;
    let lineIndex;
    let firstBlankLineIndex;
    let atMarker;
    while (++index2 <= length) {
      const event = events[index2];
      if (event[1].type === "listUnordered" || event[1].type === "listOrdered" || event[1].type === "blockQuote") {
        if (event[0] === "enter") {
          containerBalance++;
        } else {
          containerBalance--;
        }
        atMarker = void 0;
      } else if (event[1].type === "lineEndingBlank") {
        if (event[0] === "enter") {
          if (listItem3 && !atMarker && !containerBalance && !firstBlankLineIndex) {
            firstBlankLineIndex = index2;
          }
          atMarker = void 0;
        }
      } else if (event[1].type === "linePrefix" || event[1].type === "listItemValue" || event[1].type === "listItemMarker" || event[1].type === "listItemPrefix" || event[1].type === "listItemPrefixWhitespace")
        ;
      else {
        atMarker = void 0;
      }
      if (!containerBalance && event[0] === "enter" && event[1].type === "listItemPrefix" || containerBalance === -1 && event[0] === "exit" && (event[1].type === "listUnordered" || event[1].type === "listOrdered")) {
        if (listItem3) {
          let tailIndex = index2;
          lineIndex = void 0;
          while (tailIndex--) {
            const tailEvent = events[tailIndex];
            if (tailEvent[1].type === "lineEnding" || tailEvent[1].type === "lineEndingBlank") {
              if (tailEvent[0] === "exit")
                continue;
              if (lineIndex) {
                events[lineIndex][1].type = "lineEndingBlank";
                listSpread = true;
              }
              tailEvent[1].type = "lineEnding";
              lineIndex = tailIndex;
            } else if (tailEvent[1].type === "linePrefix" || tailEvent[1].type === "blockQuotePrefix" || tailEvent[1].type === "blockQuotePrefixWhitespace" || tailEvent[1].type === "blockQuoteMarker" || tailEvent[1].type === "listItemIndent")
              ;
            else {
              break;
            }
          }
          if (firstBlankLineIndex && (!lineIndex || firstBlankLineIndex < lineIndex)) {
            listItem3._spread = true;
          }
          listItem3.end = Object.assign({}, lineIndex ? events[lineIndex][1].start : event[1].end);
          events.splice(lineIndex || index2, 0, ["exit", listItem3, event[2]]);
          index2++;
          length++;
        }
        if (event[1].type === "listItemPrefix") {
          listItem3 = {
            type: "listItem",
            _spread: false,
            start: Object.assign({}, event[1].start)
          };
          events.splice(index2, 0, ["enter", listItem3, event[2]]);
          index2++;
          length++;
          firstBlankLineIndex = void 0;
          atMarker = true;
        }
      }
    }
    events[start][1]._spread = listSpread;
    return length;
  }
  function setData(key, value) {
    data[key] = value;
  }
  function getData(key) {
    return data[key];
  }
  function point2(d2) {
    return {
      line: d2.line,
      column: d2.column,
      offset: d2.offset
    };
  }
  function opener(create2, and) {
    return open;
    function open(token) {
      enter.call(this, create2(token), token);
      if (and)
        and.call(this, token);
    }
  }
  function buffer() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function enter(node, token, errorHandler) {
    const parent = this.stack[this.stack.length - 1];
    parent.children.push(node);
    this.stack.push(node);
    this.tokenStack.push([token, errorHandler]);
    node.position = {
      start: point2(token.start)
    };
    return node;
  }
  function closer(and) {
    return close;
    function close(token) {
      if (and)
        and.call(this, token);
      exit2.call(this, token);
    }
  }
  function exit2(token, onExitError) {
    const node = this.stack.pop();
    const open = this.tokenStack.pop();
    if (!open) {
      throw new Error("Cannot close `" + token.type + "` (" + stringifyPosition({
        start: token.start,
        end: token.end
      }) + "): it\u2019s not open");
    } else if (open[0].type !== token.type) {
      if (onExitError) {
        onExitError.call(this, token, open[0]);
      } else {
        const handler = open[1] || defaultOnError;
        handler.call(this, token, open[0]);
      }
    }
    node.position.end = point2(token.end);
    return node;
  }
  function resume() {
    return toString(this.stack.pop());
  }
  function onenterlistordered() {
    setData("expectingFirstListItemValue", true);
  }
  function onenterlistitemvalue(token) {
    if (getData("expectingFirstListItemValue")) {
      const ancestor = this.stack[this.stack.length - 2];
      ancestor.start = Number.parseInt(this.sliceSerialize(token), 10);
      setData("expectingFirstListItemValue");
    }
  }
  function onexitcodefencedfenceinfo() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.lang = data2;
  }
  function onexitcodefencedfencemeta() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.meta = data2;
  }
  function onexitcodefencedfence() {
    if (getData("flowCodeInside"))
      return;
    this.buffer();
    setData("flowCodeInside", true);
  }
  function onexitcodefenced() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.value = data2.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "");
    setData("flowCodeInside");
  }
  function onexitcodeindented() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.value = data2.replace(/(\r?\n|\r)$/g, "");
  }
  function onexitdefinitionlabelstring(token) {
    const label = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.label = label;
    node.identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
  }
  function onexitdefinitiontitlestring() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.title = data2;
  }
  function onexitdefinitiondestinationstring() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.url = data2;
  }
  function onexitatxheadingsequence(token) {
    const node = this.stack[this.stack.length - 1];
    if (!node.depth) {
      const depth = this.sliceSerialize(token).length;
      node.depth = depth;
    }
  }
  function onexitsetextheadingtext() {
    setData("setextHeadingSlurpLineEnding", true);
  }
  function onexitsetextheadinglinesequence(token) {
    const node = this.stack[this.stack.length - 1];
    node.depth = this.sliceSerialize(token).charCodeAt(0) === 61 ? 1 : 2;
  }
  function onexitsetextheading() {
    setData("setextHeadingSlurpLineEnding");
  }
  function onenterdata(token) {
    const parent = this.stack[this.stack.length - 1];
    let tail = parent.children[parent.children.length - 1];
    if (!tail || tail.type !== "text") {
      tail = text2();
      tail.position = {
        start: point2(token.start)
      };
      parent.children.push(tail);
    }
    this.stack.push(tail);
  }
  function onexitdata(token) {
    const tail = this.stack.pop();
    tail.value += this.sliceSerialize(token);
    tail.position.end = point2(token.end);
  }
  function onexitlineending(token) {
    const context = this.stack[this.stack.length - 1];
    if (getData("atHardBreak")) {
      const tail = context.children[context.children.length - 1];
      tail.position.end = point2(token.end);
      setData("atHardBreak");
      return;
    }
    if (!getData("setextHeadingSlurpLineEnding") && config.canContainEols.includes(context.type)) {
      onenterdata.call(this, token);
      onexitdata.call(this, token);
    }
  }
  function onexithardbreak() {
    setData("atHardBreak", true);
  }
  function onexithtmlflow() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.value = data2;
  }
  function onexithtmltext() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.value = data2;
  }
  function onexitcodetext() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.value = data2;
  }
  function onexitlink() {
    const context = this.stack[this.stack.length - 1];
    if (getData("inReference")) {
      context.type += "Reference";
      context.referenceType = getData("referenceType") || "shortcut";
      delete context.url;
      delete context.title;
    } else {
      delete context.identifier;
      delete context.label;
    }
    setData("referenceType");
  }
  function onexitimage() {
    const context = this.stack[this.stack.length - 1];
    if (getData("inReference")) {
      context.type += "Reference";
      context.referenceType = getData("referenceType") || "shortcut";
      delete context.url;
      delete context.title;
    } else {
      delete context.identifier;
      delete context.label;
    }
    setData("referenceType");
  }
  function onexitlabeltext(token) {
    const ancestor = this.stack[this.stack.length - 2];
    const string2 = this.sliceSerialize(token);
    ancestor.label = decodeString(string2);
    ancestor.identifier = normalizeIdentifier(string2).toLowerCase();
  }
  function onexitlabel() {
    const fragment = this.stack[this.stack.length - 1];
    const value = this.resume();
    const node = this.stack[this.stack.length - 1];
    setData("inReference", true);
    if (node.type === "link") {
      node.children = fragment.children;
    } else {
      node.alt = value;
    }
  }
  function onexitresourcedestinationstring() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.url = data2;
  }
  function onexitresourcetitlestring() {
    const data2 = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.title = data2;
  }
  function onexitresource() {
    setData("inReference");
  }
  function onenterreference() {
    setData("referenceType", "collapsed");
  }
  function onexitreferencestring(token) {
    const label = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.label = label;
    node.identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
    setData("referenceType", "full");
  }
  function onexitcharacterreferencemarker(token) {
    setData("characterReferenceType", token.type);
  }
  function onexitcharacterreferencevalue(token) {
    const data2 = this.sliceSerialize(token);
    const type = getData("characterReferenceType");
    let value;
    if (type) {
      value = decodeNumericCharacterReference(data2, type === "characterReferenceMarkerNumeric" ? 10 : 16);
      setData("characterReferenceType");
    } else {
      value = decodeNamedCharacterReference(data2);
    }
    const tail = this.stack.pop();
    tail.value += value;
    tail.position.end = point2(token.end);
  }
  function onexitautolinkprotocol(token) {
    onexitdata.call(this, token);
    const node = this.stack[this.stack.length - 1];
    node.url = this.sliceSerialize(token);
  }
  function onexitautolinkemail(token) {
    onexitdata.call(this, token);
    const node = this.stack[this.stack.length - 1];
    node.url = "mailto:" + this.sliceSerialize(token);
  }
  function blockQuote2() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function codeFlow() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function codeText2() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function definition2() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function emphasis2() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function heading2() {
    return {
      type: "heading",
      depth: void 0,
      children: []
    };
  }
  function hardBreak2() {
    return {
      type: "break"
    };
  }
  function html2() {
    return {
      type: "html",
      value: ""
    };
  }
  function image2() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function link2() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function list2(token) {
    return {
      type: "list",
      ordered: token.type === "listOrdered",
      start: null,
      spread: token._spread,
      children: []
    };
  }
  function listItem2(token) {
    return {
      type: "listItem",
      spread: token._spread,
      checked: null,
      children: []
    };
  }
  function paragraph2() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function strong2() {
    return {
      type: "strong",
      children: []
    };
  }
  function text2() {
    return {
      type: "text",
      value: ""
    };
  }
  function thematicBreak2() {
    return {
      type: "thematicBreak"
    };
  }
}
function configure(combined, extensions) {
  let index2 = -1;
  while (++index2 < extensions.length) {
    const value = extensions[index2];
    if (Array.isArray(value)) {
      configure(combined, value);
    } else {
      extension(combined, value);
    }
  }
  return combined;
}
function extension(combined, extension2) {
  let key;
  for (key in extension2) {
    if (own$7.call(extension2, key)) {
      const list2 = key === "canContainEols" || key === "transforms";
      const maybe = own$7.call(combined, key) ? combined[key] : void 0;
      const left = maybe || (combined[key] = list2 ? [] : {});
      const right = extension2[key];
      if (right) {
        if (list2) {
          combined[key] = [...left, ...right];
        } else {
          Object.assign(left, right);
        }
      }
    }
  }
}
function defaultOnError(left, right) {
  if (left) {
    throw new Error("Cannot close `" + left.type + "` (" + stringifyPosition({
      start: left.start,
      end: left.end
    }) + "): a different token (`" + right.type + "`, " + stringifyPosition({
      start: right.start,
      end: right.end
    }) + ") is open");
  } else {
    throw new Error("Cannot close document, a token (`" + right.type + "`, " + stringifyPosition({
      start: right.start,
      end: right.end
    }) + ") is still open");
  }
}
function remarkParse(options) {
  const parser = (doc) => {
    const settings = this.data("settings");
    return fromMarkdown(doc, Object.assign({}, settings, options, {
      extensions: this.data("micromarkExtensions") || [],
      mdastExtensions: this.data("fromMarkdownExtensions") || []
    }));
  };
  Object.assign(this, { Parser: parser });
}
var u$1 = function(type, props, value) {
  var node = { type: String(type) };
  if ((value === void 0 || value === null) && (typeof props === "string" || Array.isArray(props))) {
    value = props;
  } else {
    Object.assign(node, props);
  }
  if (Array.isArray(value)) {
    node.children = value;
  } else if (value !== void 0 && value !== null) {
    node.value = String(value);
  }
  return node;
};
const own$6 = {}.hasOwnProperty;
function unknown(h2, node) {
  const data = node.data || {};
  if ("value" in node && !(own$6.call(data, "hName") || own$6.call(data, "hProperties") || own$6.call(data, "hChildren"))) {
    return h2.augment(node, u$1("text", node.value));
  }
  return h2(node, "div", all(h2, node));
}
function one(h2, node, parent) {
  const type = node && node.type;
  let fn;
  if (!type) {
    throw new Error("Expected node, got `" + node + "`");
  }
  if (own$6.call(h2.handlers, type)) {
    fn = h2.handlers[type];
  } else if (h2.passThrough && h2.passThrough.includes(type)) {
    fn = returnNode;
  } else {
    fn = h2.unknownHandler;
  }
  return (typeof fn === "function" ? fn : unknown)(h2, node, parent);
}
function returnNode(h2, node) {
  return "children" in node ? __spreadProps(__spreadValues({}, node), { children: all(h2, node) }) : node;
}
function all(h2, parent) {
  const values = [];
  if ("children" in parent) {
    const nodes = parent.children;
    let index2 = -1;
    while (++index2 < nodes.length) {
      const result = one(h2, nodes[index2], parent);
      if (result) {
        if (index2 && nodes[index2 - 1].type === "break") {
          if (!Array.isArray(result) && result.type === "text") {
            result.value = result.value.replace(/^\s+/, "");
          }
          if (!Array.isArray(result) && result.type === "element") {
            const head = result.children[0];
            if (head && head.type === "text") {
              head.value = head.value.replace(/^\s+/, "");
            }
          }
        }
        if (Array.isArray(result)) {
          values.push(...result);
        } else {
          values.push(result);
        }
      }
    }
  }
  return values;
}
const convert = function(test2) {
  if (test2 === void 0 || test2 === null) {
    return ok;
  }
  if (typeof test2 === "string") {
    return typeFactory(test2);
  }
  if (typeof test2 === "object") {
    return Array.isArray(test2) ? anyFactory(test2) : propsFactory(test2);
  }
  if (typeof test2 === "function") {
    return castFactory(test2);
  }
  throw new Error("Expected function, string, or object as test");
};
function anyFactory(tests) {
  const checks2 = [];
  let index2 = -1;
  while (++index2 < tests.length) {
    checks2[index2] = convert(tests[index2]);
  }
  return castFactory(any);
  function any(...parameters) {
    let index3 = -1;
    while (++index3 < checks2.length) {
      if (checks2[index3].call(this, ...parameters))
        return true;
    }
    return false;
  }
}
function propsFactory(check) {
  return castFactory(all2);
  function all2(node) {
    let key;
    for (key in check) {
      if (node[key] !== check[key])
        return false;
    }
    return true;
  }
}
function typeFactory(check) {
  return castFactory(type);
  function type(node) {
    return node && node.type === check;
  }
}
function castFactory(check) {
  return assertion;
  function assertion(...parameters) {
    return Boolean(check.call(this, ...parameters));
  }
}
function ok() {
  return true;
}
function color$1(d2) {
  return d2;
}
const CONTINUE$1 = true;
const SKIP$1 = "skip";
const EXIT$1 = false;
const visitParents$1 = function(tree, test2, visitor, reverse) {
  if (typeof test2 === "function" && typeof visitor !== "function") {
    reverse = visitor;
    visitor = test2;
    test2 = null;
  }
  const is = convert(test2);
  const step = reverse ? -1 : 1;
  factory2(tree, null, [])();
  function factory2(node, index2, parents) {
    const value = typeof node === "object" && node !== null ? node : {};
    let name;
    if (typeof value.type === "string") {
      name = typeof value.tagName === "string" ? value.tagName : typeof value.name === "string" ? value.name : void 0;
      Object.defineProperty(visit2, "name", {
        value: "node (" + color$1(value.type + (name ? "<" + name + ">" : "")) + ")"
      });
    }
    return visit2;
    function visit2() {
      let result = [];
      let subresult;
      let offset;
      let grandparents;
      if (!test2 || is(node, index2, parents[parents.length - 1] || null)) {
        result = toResult$1(visitor(node, parents));
        if (result[0] === EXIT$1) {
          return result;
        }
      }
      if (node.children && result[0] !== SKIP$1) {
        offset = (reverse ? node.children.length : -1) + step;
        grandparents = parents.concat(node);
        while (offset > -1 && offset < node.children.length) {
          subresult = factory2(node.children[offset], offset, grandparents)();
          if (subresult[0] === EXIT$1) {
            return subresult;
          }
          offset = typeof subresult[1] === "number" ? subresult[1] : offset + step;
        }
      }
      return result;
    }
  }
};
function toResult$1(value) {
  if (Array.isArray(value)) {
    return value;
  }
  if (typeof value === "number") {
    return [CONTINUE$1, value];
  }
  return [value];
}
const visit$1 = function(tree, test2, visitor, reverse) {
  if (typeof test2 === "function" && typeof visitor !== "function") {
    reverse = visitor;
    visitor = test2;
    test2 = null;
  }
  visitParents$1(tree, test2, overload, reverse);
  function overload(node, parents) {
    const parent = parents[parents.length - 1];
    return visitor(node, parent ? parent.children.indexOf(node) : null, parent);
  }
};
const pointStart = point("start");
const pointEnd = point("end");
function point(type) {
  return point2;
  function point2(node) {
    const point3 = node && node.position && node.position[type] || {};
    return {
      line: point3.line || null,
      column: point3.column || null,
      offset: point3.offset > -1 ? point3.offset : null
    };
  }
}
function generated(node) {
  return !node || !node.position || !node.position.start || !node.position.start.line || !node.position.start.column || !node.position.end || !node.position.end.line || !node.position.end.column;
}
function color(d2) {
  return d2;
}
const CONTINUE = true;
const SKIP = "skip";
const EXIT = false;
const visitParents = function(tree, test2, visitor, reverse) {
  if (typeof test2 === "function" && typeof visitor !== "function") {
    reverse = visitor;
    visitor = test2;
    test2 = null;
  }
  var is = convert(test2);
  var step = reverse ? -1 : 1;
  factory2(tree, null, [])();
  function factory2(node, index2, parents) {
    var value = typeof node === "object" && node !== null ? node : {};
    var name;
    if (typeof value.type === "string") {
      name = typeof value.tagName === "string" ? value.tagName : typeof value.name === "string" ? value.name : void 0;
      Object.defineProperty(visit2, "name", {
        value: "node (" + color(value.type + (name ? "<" + name + ">" : "")) + ")"
      });
    }
    return visit2;
    function visit2() {
      var result = [];
      var subresult;
      var offset;
      var grandparents;
      if (!test2 || is(node, index2, parents[parents.length - 1] || null)) {
        result = toResult(visitor(node, parents));
        if (result[0] === EXIT) {
          return result;
        }
      }
      if (node.children && result[0] !== SKIP) {
        offset = (reverse ? node.children.length : -1) + step;
        grandparents = parents.concat(node);
        while (offset > -1 && offset < node.children.length) {
          subresult = factory2(node.children[offset], offset, grandparents)();
          if (subresult[0] === EXIT) {
            return subresult;
          }
          offset = typeof subresult[1] === "number" ? subresult[1] : offset + step;
        }
      }
      return result;
    }
  }
};
function toResult(value) {
  if (Array.isArray(value)) {
    return value;
  }
  if (typeof value === "number") {
    return [CONTINUE, value];
  }
  return [value];
}
const visit = function(tree, test2, visitor, reverse) {
  if (typeof test2 === "function" && typeof visitor !== "function") {
    reverse = visitor;
    visitor = test2;
    test2 = null;
  }
  visitParents(tree, test2, overload, reverse);
  function overload(node, parents) {
    var parent = parents[parents.length - 1];
    return visitor(node, parent ? parent.children.indexOf(node) : null, parent);
  }
};
const own$5 = {}.hasOwnProperty;
function definitions(node) {
  const cache = /* @__PURE__ */ Object.create(null);
  if (!node || !node.type) {
    throw new Error("mdast-util-definitions expected node");
  }
  visit(node, "definition", ondefinition);
  return getDefinition;
  function ondefinition(definition2) {
    const id2 = clean(definition2.identifier);
    if (id2 && !own$5.call(cache, id2)) {
      cache[id2] = definition2;
    }
  }
  function getDefinition(identifier) {
    const id2 = clean(identifier);
    return id2 && own$5.call(cache, id2) ? cache[id2] : null;
  }
}
function clean(value) {
  return String(value || "").toUpperCase();
}
const characterReferences = { '"': "quot", "&": "amp", "<": "lt", ">": "gt" };
function encode$1(value) {
  return value.replace(/["&<>]/g, replace2);
  function replace2(value2) {
    return "&" + characterReferences[value2] + ";";
  }
}
function sanitizeUri(url, protocol) {
  const value = encode$1(normalizeUri(url || ""));
  if (!protocol) {
    return value;
  }
  const colon = value.indexOf(":");
  const questionMark = value.indexOf("?");
  const numberSign = value.indexOf("#");
  const slash = value.indexOf("/");
  if (colon < 0 || slash > -1 && colon > slash || questionMark > -1 && colon > questionMark || numberSign > -1 && colon > numberSign || protocol.test(value.slice(0, colon))) {
    return value;
  }
  return "";
}
function normalizeUri(value) {
  const result = [];
  let index2 = -1;
  let start = 0;
  let skip = 0;
  while (++index2 < value.length) {
    const code2 = value.charCodeAt(index2);
    let replace2 = "";
    if (code2 === 37 && asciiAlphanumeric(value.charCodeAt(index2 + 1)) && asciiAlphanumeric(value.charCodeAt(index2 + 2))) {
      skip = 2;
    } else if (code2 < 128) {
      if (!/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(code2))) {
        replace2 = String.fromCharCode(code2);
      }
    } else if (code2 > 55295 && code2 < 57344) {
      const next = value.charCodeAt(index2 + 1);
      if (code2 < 56320 && next > 56319 && next < 57344) {
        replace2 = String.fromCharCode(code2, next);
        skip = 1;
      } else {
        replace2 = "\uFFFD";
      }
    } else {
      replace2 = String.fromCharCode(code2);
    }
    if (replace2) {
      result.push(value.slice(start, index2), encodeURIComponent(replace2));
      start = index2 + skip + 1;
      replace2 = "";
    }
    if (skip) {
      index2 += skip;
      skip = 0;
    }
  }
  return result.join("") + value.slice(start);
}
function wrap(nodes, loose) {
  const result = [];
  let index2 = -1;
  if (loose) {
    result.push(u$1("text", "\n"));
  }
  while (++index2 < nodes.length) {
    if (index2)
      result.push(u$1("text", "\n"));
    result.push(nodes[index2]);
  }
  if (loose && nodes.length > 0) {
    result.push(u$1("text", "\n"));
  }
  return result;
}
function footer(h2) {
  let index2 = -1;
  const listItems = [];
  while (++index2 < h2.footnoteOrder.length) {
    const def = h2.footnoteById[h2.footnoteOrder[index2].toUpperCase()];
    if (!def) {
      continue;
    }
    const content2 = all(h2, def);
    const id2 = String(def.identifier);
    const safeId = sanitizeUri(id2.toLowerCase());
    let referenceIndex = 0;
    const backReferences = [];
    while (++referenceIndex <= h2.footnoteCounts[id2]) {
      const backReference = {
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + h2.clobberPrefix + "fnref-" + safeId + (referenceIndex > 1 ? "-" + referenceIndex : ""),
          dataFootnoteBackref: true,
          className: ["data-footnote-backref"],
          ariaLabel: h2.footnoteBackLabel
        },
        children: [{ type: "text", value: "\u21A9" }]
      };
      if (referenceIndex > 1) {
        backReference.children.push({
          type: "element",
          tagName: "sup",
          children: [{ type: "text", value: String(referenceIndex) }]
        });
      }
      if (backReferences.length > 0) {
        backReferences.push({ type: "text", value: " " });
      }
      backReferences.push(backReference);
    }
    const tail = content2[content2.length - 1];
    if (tail && tail.type === "element" && tail.tagName === "p") {
      const tailTail = tail.children[tail.children.length - 1];
      if (tailTail && tailTail.type === "text") {
        tailTail.value += " ";
      } else {
        tail.children.push({ type: "text", value: " " });
      }
      tail.children.push(...backReferences);
    } else {
      content2.push(...backReferences);
    }
    const listItem2 = {
      type: "element",
      tagName: "li",
      properties: { id: h2.clobberPrefix + "fn-" + safeId },
      children: wrap(content2, true)
    };
    if (def.position) {
      listItem2.position = def.position;
    }
    listItems.push(listItem2);
  }
  if (listItems.length === 0) {
    return null;
  }
  return {
    type: "element",
    tagName: "section",
    properties: { dataFootnotes: true, className: ["footnotes"] },
    children: [
      {
        type: "element",
        tagName: "h2",
        properties: { id: "footnote-label", className: ["sr-only"] },
        children: [u$1("text", h2.footnoteLabel)]
      },
      { type: "text", value: "\n" },
      {
        type: "element",
        tagName: "ol",
        properties: {},
        children: wrap(listItems, true)
      },
      { type: "text", value: "\n" }
    ]
  };
}
function blockquote(h2, node) {
  return h2(node, "blockquote", wrap(all(h2, node), true));
}
function hardBreak(h2, node) {
  return [h2(node, "br"), u$1("text", "\n")];
}
function code$1(h2, node) {
  const value = node.value ? node.value + "\n" : "";
  const lang = node.lang && node.lang.match(/^[^ \t]+(?=[ \t]|$)/);
  const props = {};
  if (lang) {
    props.className = ["language-" + lang];
  }
  const code2 = h2(node, "code", props, [u$1("text", value)]);
  if (node.meta) {
    code2.data = { meta: node.meta };
  }
  return h2(node.position, "pre", [code2]);
}
function strikethrough(h2, node) {
  return h2(node, "del", all(h2, node));
}
function emphasis(h2, node) {
  return h2(node, "em", all(h2, node));
}
function footnoteReference(h2, node) {
  const id2 = String(node.identifier);
  const safeId = sanitizeUri(id2.toLowerCase());
  const index2 = h2.footnoteOrder.indexOf(id2);
  let counter2;
  if (index2 === -1) {
    h2.footnoteOrder.push(id2);
    h2.footnoteCounts[id2] = 1;
    counter2 = h2.footnoteOrder.length;
  } else {
    h2.footnoteCounts[id2]++;
    counter2 = index2 + 1;
  }
  const reuseCounter = h2.footnoteCounts[id2];
  return h2(node, "sup", [
    h2(node.position, "a", {
      href: "#" + h2.clobberPrefix + "fn-" + safeId,
      id: h2.clobberPrefix + "fnref-" + safeId + (reuseCounter > 1 ? "-" + reuseCounter : ""),
      dataFootnoteRef: true,
      ariaDescribedBy: "footnote-label"
    }, [u$1("text", String(counter2))])
  ]);
}
function footnote(h2, node) {
  const footnoteById = h2.footnoteById;
  let no = 1;
  while (no in footnoteById)
    no++;
  const identifier = String(no);
  footnoteById[identifier] = {
    type: "footnoteDefinition",
    identifier,
    children: [{ type: "paragraph", children: node.children }],
    position: node.position
  };
  return footnoteReference(h2, {
    type: "footnoteReference",
    identifier,
    position: node.position
  });
}
function heading(h2, node) {
  return h2(node, "h" + node.depth, all(h2, node));
}
function html$2(h2, node) {
  return h2.dangerous ? h2.augment(node, u$1("raw", node.value)) : null;
}
var encodeCache = {};
function getEncodeCache(exclude) {
  var i2, ch2, cache = encodeCache[exclude];
  if (cache) {
    return cache;
  }
  cache = encodeCache[exclude] = [];
  for (i2 = 0; i2 < 128; i2++) {
    ch2 = String.fromCharCode(i2);
    if (/^[0-9a-z]$/i.test(ch2)) {
      cache.push(ch2);
    } else {
      cache.push("%" + ("0" + i2.toString(16).toUpperCase()).slice(-2));
    }
  }
  for (i2 = 0; i2 < exclude.length; i2++) {
    cache[exclude.charCodeAt(i2)] = exclude[i2];
  }
  return cache;
}
function encode(string2, exclude, keepEscaped) {
  var i2, l2, code2, nextCode, cache, result = "";
  if (typeof exclude !== "string") {
    keepEscaped = exclude;
    exclude = encode.defaultChars;
  }
  if (typeof keepEscaped === "undefined") {
    keepEscaped = true;
  }
  cache = getEncodeCache(exclude);
  for (i2 = 0, l2 = string2.length; i2 < l2; i2++) {
    code2 = string2.charCodeAt(i2);
    if (keepEscaped && code2 === 37 && i2 + 2 < l2) {
      if (/^[0-9a-f]{2}$/i.test(string2.slice(i2 + 1, i2 + 3))) {
        result += string2.slice(i2, i2 + 3);
        i2 += 2;
        continue;
      }
    }
    if (code2 < 128) {
      result += cache[code2];
      continue;
    }
    if (code2 >= 55296 && code2 <= 57343) {
      if (code2 >= 55296 && code2 <= 56319 && i2 + 1 < l2) {
        nextCode = string2.charCodeAt(i2 + 1);
        if (nextCode >= 56320 && nextCode <= 57343) {
          result += encodeURIComponent(string2[i2] + string2[i2 + 1]);
          i2++;
          continue;
        }
      }
      result += "%EF%BF%BD";
      continue;
    }
    result += encodeURIComponent(string2[i2]);
  }
  return result;
}
encode.defaultChars = ";/?:@&=+$,-_.!~*'()#";
encode.componentChars = "-_.!~*'()";
var encode_1 = encode;
function revert(h2, node) {
  const subtype = node.referenceType;
  let suffix = "]";
  if (subtype === "collapsed") {
    suffix += "[]";
  } else if (subtype === "full") {
    suffix += "[" + (node.label || node.identifier) + "]";
  }
  if (node.type === "imageReference") {
    return u$1("text", "![" + node.alt + suffix);
  }
  const contents = all(h2, node);
  const head = contents[0];
  if (head && head.type === "text") {
    head.value = "[" + head.value;
  } else {
    contents.unshift(u$1("text", "["));
  }
  const tail = contents[contents.length - 1];
  if (tail && tail.type === "text") {
    tail.value += suffix;
  } else {
    contents.push(u$1("text", suffix));
  }
  return contents;
}
function imageReference(h2, node) {
  const def = h2.definition(node.identifier);
  if (!def) {
    return revert(h2, node);
  }
  const props = { src: encode_1(def.url || ""), alt: node.alt };
  if (def.title !== null && def.title !== void 0) {
    props.title = def.title;
  }
  return h2(node, "img", props);
}
function image(h2, node) {
  const props = { src: encode_1(node.url), alt: node.alt };
  if (node.title !== null && node.title !== void 0) {
    props.title = node.title;
  }
  return h2(node, "img", props);
}
function inlineCode$1(h2, node) {
  return h2(node, "code", [u$1("text", node.value.replace(/\r?\n|\r/g, " "))]);
}
function linkReference(h2, node) {
  const def = h2.definition(node.identifier);
  if (!def) {
    return revert(h2, node);
  }
  const props = { href: encode_1(def.url || "") };
  if (def.title !== null && def.title !== void 0) {
    props.title = def.title;
  }
  return h2(node, "a", props, all(h2, node));
}
function link(h2, node) {
  const props = { href: encode_1(node.url) };
  if (node.title !== null && node.title !== void 0) {
    props.title = node.title;
  }
  return h2(node, "a", props, all(h2, node));
}
function listItem$1(h2, node, parent) {
  const result = all(h2, node);
  const loose = parent ? listLoose(parent) : listItemLoose(node);
  const props = {};
  const wrapped = [];
  if (typeof node.checked === "boolean") {
    let paragraph2;
    if (result[0] && result[0].type === "element" && result[0].tagName === "p") {
      paragraph2 = result[0];
    } else {
      paragraph2 = h2(null, "p", []);
      result.unshift(paragraph2);
    }
    if (paragraph2.children.length > 0) {
      paragraph2.children.unshift(u$1("text", " "));
    }
    paragraph2.children.unshift(h2(null, "input", {
      type: "checkbox",
      checked: node.checked,
      disabled: true
    }));
    props.className = ["task-list-item"];
  }
  let index2 = -1;
  while (++index2 < result.length) {
    const child = result[index2];
    if (loose || index2 !== 0 || child.type !== "element" || child.tagName !== "p") {
      wrapped.push(u$1("text", "\n"));
    }
    if (child.type === "element" && child.tagName === "p" && !loose) {
      wrapped.push(...child.children);
    } else {
      wrapped.push(child);
    }
  }
  const tail = result[result.length - 1];
  if (tail && (loose || !("tagName" in tail) || tail.tagName !== "p")) {
    wrapped.push(u$1("text", "\n"));
  }
  return h2(node, "li", props, wrapped);
}
function listLoose(node) {
  let loose = node.spread;
  const children = node.children;
  let index2 = -1;
  while (!loose && ++index2 < children.length) {
    loose = listItemLoose(children[index2]);
  }
  return Boolean(loose);
}
function listItemLoose(node) {
  const spread = node.spread;
  return spread === void 0 || spread === null ? node.children.length > 1 : spread;
}
function list(h2, node) {
  const props = {};
  const name = node.ordered ? "ol" : "ul";
  const items = all(h2, node);
  let index2 = -1;
  if (typeof node.start === "number" && node.start !== 1) {
    props.start = node.start;
  }
  while (++index2 < items.length) {
    const item = items[index2];
    if (item.type === "element" && item.tagName === "li" && item.properties && Array.isArray(item.properties.className) && item.properties.className.includes("task-list-item")) {
      props.className = ["contains-task-list"];
      break;
    }
  }
  return h2(node, name, props, wrap(items, true));
}
function paragraph(h2, node) {
  return h2(node, "p", all(h2, node));
}
function root(h2, node) {
  return h2.augment(node, u$1("root", wrap(all(h2, node))));
}
function strong(h2, node) {
  return h2(node, "strong", all(h2, node));
}
function table(h2, node) {
  const rows = node.children;
  let index2 = -1;
  const align = node.align || [];
  const result = [];
  while (++index2 < rows.length) {
    const row = rows[index2].children;
    const name = index2 === 0 ? "th" : "td";
    const out = [];
    let cellIndex = -1;
    const length = node.align ? align.length : row.length;
    while (++cellIndex < length) {
      const cell = row[cellIndex];
      out.push(h2(cell, name, { align: align[cellIndex] }, cell ? all(h2, cell) : []));
    }
    result[index2] = h2(rows[index2], "tr", wrap(out, true));
  }
  return h2(node, "table", wrap([h2(result[0].position, "thead", wrap([result[0]], true))].concat(result[1] ? h2({
    start: pointStart(result[1]),
    end: pointEnd(result[result.length - 1])
  }, "tbody", wrap(result.slice(1), true)) : []), true));
}
function text$1(h2, node) {
  return h2.augment(node, u$1("text", String(node.value).replace(/[ \t]*(\r?\n|\r)[ \t]*/g, "$1")));
}
function thematicBreak(h2, node) {
  return h2(node, "hr");
}
const handlers = {
  blockquote,
  break: hardBreak,
  code: code$1,
  delete: strikethrough,
  emphasis,
  footnoteReference,
  footnote,
  heading,
  html: html$2,
  imageReference,
  image,
  inlineCode: inlineCode$1,
  linkReference,
  link,
  listItem: listItem$1,
  list,
  paragraph,
  root,
  strong,
  table,
  text: text$1,
  thematicBreak,
  toml: ignore,
  yaml: ignore,
  definition: ignore,
  footnoteDefinition: ignore
};
function ignore() {
  return null;
}
const own$4 = {}.hasOwnProperty;
function factory(tree, options) {
  const settings = options || {};
  const dangerous = settings.allowDangerousHtml || false;
  const footnoteById = {};
  h2.dangerous = dangerous;
  h2.clobberPrefix = settings.clobberPrefix === void 0 || settings.clobberPrefix === null ? "user-content-" : settings.clobberPrefix;
  h2.footnoteLabel = settings.footnoteLabel || "Footnotes";
  h2.footnoteBackLabel = settings.footnoteBackLabel || "Back to content";
  h2.definition = definitions(tree);
  h2.footnoteById = footnoteById;
  h2.footnoteOrder = [];
  h2.footnoteCounts = {};
  h2.augment = augment;
  h2.handlers = __spreadValues(__spreadValues({}, handlers), settings.handlers);
  h2.unknownHandler = settings.unknownHandler;
  h2.passThrough = settings.passThrough;
  visit$1(tree, "footnoteDefinition", (definition2) => {
    const id2 = String(definition2.identifier).toUpperCase();
    if (!own$4.call(footnoteById, id2)) {
      footnoteById[id2] = definition2;
    }
  });
  return h2;
  function augment(left, right) {
    if (left && "data" in left && left.data) {
      const data = left.data;
      if (data.hName) {
        if (right.type !== "element") {
          right = {
            type: "element",
            tagName: "",
            properties: {},
            children: []
          };
        }
        right.tagName = data.hName;
      }
      if (right.type === "element" && data.hProperties) {
        right.properties = __spreadValues(__spreadValues({}, right.properties), data.hProperties);
      }
      if ("children" in right && right.children && data.hChildren) {
        right.children = data.hChildren;
      }
    }
    if (left) {
      const ctx = "type" in left ? left : { position: left };
      if (!generated(ctx)) {
        right.position = { start: pointStart(ctx), end: pointEnd(ctx) };
      }
    }
    return right;
  }
  function h2(node, tagName, props, children) {
    if (Array.isArray(props)) {
      children = props;
      props = {};
    }
    return augment(node, {
      type: "element",
      tagName,
      properties: props || {},
      children: children || []
    });
  }
}
function toHast(tree, options) {
  const h2 = factory(tree, options);
  const node = one(h2, tree, null);
  const foot = footer(h2);
  if (foot) {
    node.children.push(u$1("text", "\n"), foot);
  }
  return Array.isArray(node) ? { type: "root", children: node } : node;
}
const remarkRehype = function(destination, options) {
  return destination && "run" in destination ? bridge(destination, options) : mutate(destination || options);
};
var remarkRehype$1 = remarkRehype;
function bridge(destination, options) {
  return (node, file, next) => {
    destination.run(toHast(node, options), file, (error) => {
      next(error);
    });
  };
}
function mutate(options) {
  return (node) => toHast(node, options);
}
var propTypes = { exports: {} };
var ReactPropTypesSecret$1 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;
var ReactPropTypesSecret = ReactPropTypesSecret_1;
function emptyFunction() {
}
function emptyFunctionWithReset() {
}
emptyFunctionWithReset.resetWarningCache = emptyFunction;
var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      return;
    }
    var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
    err.name = "Invariant Violation";
    throw err;
  }
  shim.isRequired = shim;
  function getShim() {
    return shim;
  }
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};
{
  propTypes.exports = factoryWithThrowingShims();
}
var PropTypes = propTypes.exports;
class Schema {
  constructor(property, normal, space) {
    this.property = property;
    this.normal = normal;
    if (space) {
      this.space = space;
    }
  }
}
Schema.prototype.property = {};
Schema.prototype.normal = {};
Schema.prototype.space = null;
function merge(definitions2, space) {
  const property = {};
  const normal = {};
  let index2 = -1;
  while (++index2 < definitions2.length) {
    Object.assign(property, definitions2[index2].property);
    Object.assign(normal, definitions2[index2].normal);
  }
  return new Schema(property, normal, space);
}
function normalize(value) {
  return value.toLowerCase();
}
class Info {
  constructor(property, attribute) {
    this.property = property;
    this.attribute = attribute;
  }
}
Info.prototype.space = null;
Info.prototype.boolean = false;
Info.prototype.booleanish = false;
Info.prototype.overloadedBoolean = false;
Info.prototype.number = false;
Info.prototype.commaSeparated = false;
Info.prototype.spaceSeparated = false;
Info.prototype.commaOrSpaceSeparated = false;
Info.prototype.mustUseProperty = false;
Info.prototype.defined = false;
let powers = 0;
const boolean = increment();
const booleanish = increment();
const overloadedBoolean = increment();
const number = increment();
const spaceSeparated = increment();
const commaSeparated = increment();
const commaOrSpaceSeparated = increment();
function increment() {
  return 2 ** ++powers;
}
var types = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean,
  booleanish,
  overloadedBoolean,
  number,
  spaceSeparated,
  commaSeparated,
  commaOrSpaceSeparated
}, Symbol.toStringTag, { value: "Module" }));
const checks = Object.keys(types);
class DefinedInfo extends Info {
  constructor(property, attribute, mask, space) {
    let index2 = -1;
    super(property, attribute);
    mark(this, "space", space);
    if (typeof mask === "number") {
      while (++index2 < checks.length) {
        const check = checks[index2];
        mark(this, checks[index2], (mask & types[check]) === types[check]);
      }
    }
  }
}
DefinedInfo.prototype.defined = true;
function mark(values, key, value) {
  if (value) {
    values[key] = value;
  }
}
const own$3 = {}.hasOwnProperty;
function create(definition2) {
  const property = {};
  const normal = {};
  let prop;
  for (prop in definition2.properties) {
    if (own$3.call(definition2.properties, prop)) {
      const value = definition2.properties[prop];
      const info = new DefinedInfo(prop, definition2.transform(definition2.attributes || {}, prop), value, definition2.space);
      if (definition2.mustUseProperty && definition2.mustUseProperty.includes(prop)) {
        info.mustUseProperty = true;
      }
      property[prop] = info;
      normal[normalize(prop)] = prop;
      normal[normalize(info.attribute)] = prop;
    }
  }
  return new Schema(property, normal, definition2.space);
}
const xlink = create({
  space: "xlink",
  transform(_2, prop) {
    return "xlink:" + prop.slice(5).toLowerCase();
  },
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  }
});
const xml = create({
  space: "xml",
  transform(_2, prop) {
    return "xml:" + prop.slice(3).toLowerCase();
  },
  properties: { xmlLang: null, xmlBase: null, xmlSpace: null }
});
function caseSensitiveTransform(attributes, attribute) {
  return attribute in attributes ? attributes[attribute] : attribute;
}
function caseInsensitiveTransform(attributes, property) {
  return caseSensitiveTransform(attributes, property.toLowerCase());
}
const xmlns = create({
  space: "xmlns",
  attributes: { xmlnsxlink: "xmlns:xlink" },
  transform: caseInsensitiveTransform,
  properties: { xmlns: null, xmlnsXLink: null }
});
const aria = create({
  transform(_2, prop) {
    return prop === "role" ? prop : "aria-" + prop.slice(4).toLowerCase();
  },
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: booleanish,
    ariaAutoComplete: null,
    ariaBusy: booleanish,
    ariaChecked: booleanish,
    ariaColCount: number,
    ariaColIndex: number,
    ariaColSpan: number,
    ariaControls: spaceSeparated,
    ariaCurrent: null,
    ariaDescribedBy: spaceSeparated,
    ariaDetails: null,
    ariaDisabled: booleanish,
    ariaDropEffect: spaceSeparated,
    ariaErrorMessage: null,
    ariaExpanded: booleanish,
    ariaFlowTo: spaceSeparated,
    ariaGrabbed: booleanish,
    ariaHasPopup: null,
    ariaHidden: booleanish,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: spaceSeparated,
    ariaLevel: number,
    ariaLive: null,
    ariaModal: booleanish,
    ariaMultiLine: booleanish,
    ariaMultiSelectable: booleanish,
    ariaOrientation: null,
    ariaOwns: spaceSeparated,
    ariaPlaceholder: null,
    ariaPosInSet: number,
    ariaPressed: booleanish,
    ariaReadOnly: booleanish,
    ariaRelevant: null,
    ariaRequired: booleanish,
    ariaRoleDescription: spaceSeparated,
    ariaRowCount: number,
    ariaRowIndex: number,
    ariaRowSpan: number,
    ariaSelected: booleanish,
    ariaSetSize: number,
    ariaSort: null,
    ariaValueMax: number,
    ariaValueMin: number,
    ariaValueNow: number,
    ariaValueText: null,
    role: null
  }
});
const html$1 = create({
  space: "html",
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  transform: caseInsensitiveTransform,
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    abbr: null,
    accept: commaSeparated,
    acceptCharset: spaceSeparated,
    accessKey: spaceSeparated,
    action: null,
    allow: null,
    allowFullScreen: boolean,
    allowPaymentRequest: boolean,
    allowUserMedia: boolean,
    alt: null,
    as: null,
    async: boolean,
    autoCapitalize: null,
    autoComplete: spaceSeparated,
    autoFocus: boolean,
    autoPlay: boolean,
    capture: boolean,
    charSet: null,
    checked: boolean,
    cite: null,
    className: spaceSeparated,
    cols: number,
    colSpan: null,
    content: null,
    contentEditable: booleanish,
    controls: boolean,
    controlsList: spaceSeparated,
    coords: number | commaSeparated,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: boolean,
    defer: boolean,
    dir: null,
    dirName: null,
    disabled: boolean,
    download: overloadedBoolean,
    draggable: booleanish,
    encType: null,
    enterKeyHint: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: boolean,
    formTarget: null,
    headers: spaceSeparated,
    height: number,
    hidden: boolean,
    high: number,
    href: null,
    hrefLang: null,
    htmlFor: spaceSeparated,
    httpEquiv: spaceSeparated,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: boolean,
    itemId: null,
    itemProp: spaceSeparated,
    itemRef: spaceSeparated,
    itemScope: boolean,
    itemType: spaceSeparated,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: boolean,
    low: number,
    manifest: null,
    max: null,
    maxLength: number,
    media: null,
    method: null,
    min: null,
    minLength: number,
    multiple: boolean,
    muted: boolean,
    name: null,
    nonce: null,
    noModule: boolean,
    noValidate: boolean,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforePrint: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: boolean,
    optimum: number,
    pattern: null,
    ping: spaceSeparated,
    placeholder: null,
    playsInline: boolean,
    poster: null,
    preload: null,
    readOnly: boolean,
    referrerPolicy: null,
    rel: spaceSeparated,
    required: boolean,
    reversed: boolean,
    rows: number,
    rowSpan: number,
    sandbox: spaceSeparated,
    scope: null,
    scoped: boolean,
    seamless: boolean,
    selected: boolean,
    shape: null,
    size: number,
    sizes: null,
    slot: null,
    span: number,
    spellCheck: booleanish,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: number,
    step: null,
    style: null,
    tabIndex: number,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: boolean,
    useMap: null,
    value: booleanish,
    width: number,
    wrap: null,
    align: null,
    aLink: null,
    archive: spaceSeparated,
    axis: null,
    background: null,
    bgColor: null,
    border: number,
    borderColor: null,
    bottomMargin: number,
    cellPadding: null,
    cellSpacing: null,
    char: null,
    charOff: null,
    classId: null,
    clear: null,
    code: null,
    codeBase: null,
    codeType: null,
    color: null,
    compact: boolean,
    declare: boolean,
    event: null,
    face: null,
    frame: null,
    frameBorder: null,
    hSpace: number,
    leftMargin: number,
    link: null,
    longDesc: null,
    lowSrc: null,
    marginHeight: number,
    marginWidth: number,
    noResize: boolean,
    noHref: boolean,
    noShade: boolean,
    noWrap: boolean,
    object: null,
    profile: null,
    prompt: null,
    rev: null,
    rightMargin: number,
    rules: null,
    scheme: null,
    scrolling: booleanish,
    standby: null,
    summary: null,
    text: null,
    topMargin: number,
    valueType: null,
    version: null,
    vAlign: null,
    vLink: null,
    vSpace: number,
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: boolean,
    disableRemotePlayback: boolean,
    prefix: null,
    property: null,
    results: number,
    security: null,
    unselectable: null
  }
});
const svg$1 = create({
  space: "svg",
  attributes: {
    accentHeight: "accent-height",
    alignmentBaseline: "alignment-baseline",
    arabicForm: "arabic-form",
    baselineShift: "baseline-shift",
    capHeight: "cap-height",
    className: "class",
    clipPath: "clip-path",
    clipRule: "clip-rule",
    colorInterpolation: "color-interpolation",
    colorInterpolationFilters: "color-interpolation-filters",
    colorProfile: "color-profile",
    colorRendering: "color-rendering",
    crossOrigin: "crossorigin",
    dataType: "datatype",
    dominantBaseline: "dominant-baseline",
    enableBackground: "enable-background",
    fillOpacity: "fill-opacity",
    fillRule: "fill-rule",
    floodColor: "flood-color",
    floodOpacity: "flood-opacity",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontSizeAdjust: "font-size-adjust",
    fontStretch: "font-stretch",
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: "font-weight",
    glyphName: "glyph-name",
    glyphOrientationHorizontal: "glyph-orientation-horizontal",
    glyphOrientationVertical: "glyph-orientation-vertical",
    hrefLang: "hreflang",
    horizAdvX: "horiz-adv-x",
    horizOriginX: "horiz-origin-x",
    horizOriginY: "horiz-origin-y",
    imageRendering: "image-rendering",
    letterSpacing: "letter-spacing",
    lightingColor: "lighting-color",
    markerEnd: "marker-end",
    markerMid: "marker-mid",
    markerStart: "marker-start",
    navDown: "nav-down",
    navDownLeft: "nav-down-left",
    navDownRight: "nav-down-right",
    navLeft: "nav-left",
    navNext: "nav-next",
    navPrev: "nav-prev",
    navRight: "nav-right",
    navUp: "nav-up",
    navUpLeft: "nav-up-left",
    navUpRight: "nav-up-right",
    onAbort: "onabort",
    onActivate: "onactivate",
    onAfterPrint: "onafterprint",
    onBeforePrint: "onbeforeprint",
    onBegin: "onbegin",
    onCancel: "oncancel",
    onCanPlay: "oncanplay",
    onCanPlayThrough: "oncanplaythrough",
    onChange: "onchange",
    onClick: "onclick",
    onClose: "onclose",
    onCopy: "oncopy",
    onCueChange: "oncuechange",
    onCut: "oncut",
    onDblClick: "ondblclick",
    onDrag: "ondrag",
    onDragEnd: "ondragend",
    onDragEnter: "ondragenter",
    onDragExit: "ondragexit",
    onDragLeave: "ondragleave",
    onDragOver: "ondragover",
    onDragStart: "ondragstart",
    onDrop: "ondrop",
    onDurationChange: "ondurationchange",
    onEmptied: "onemptied",
    onEnd: "onend",
    onEnded: "onended",
    onError: "onerror",
    onFocus: "onfocus",
    onFocusIn: "onfocusin",
    onFocusOut: "onfocusout",
    onHashChange: "onhashchange",
    onInput: "oninput",
    onInvalid: "oninvalid",
    onKeyDown: "onkeydown",
    onKeyPress: "onkeypress",
    onKeyUp: "onkeyup",
    onLoad: "onload",
    onLoadedData: "onloadeddata",
    onLoadedMetadata: "onloadedmetadata",
    onLoadStart: "onloadstart",
    onMessage: "onmessage",
    onMouseDown: "onmousedown",
    onMouseEnter: "onmouseenter",
    onMouseLeave: "onmouseleave",
    onMouseMove: "onmousemove",
    onMouseOut: "onmouseout",
    onMouseOver: "onmouseover",
    onMouseUp: "onmouseup",
    onMouseWheel: "onmousewheel",
    onOffline: "onoffline",
    onOnline: "ononline",
    onPageHide: "onpagehide",
    onPageShow: "onpageshow",
    onPaste: "onpaste",
    onPause: "onpause",
    onPlay: "onplay",
    onPlaying: "onplaying",
    onPopState: "onpopstate",
    onProgress: "onprogress",
    onRateChange: "onratechange",
    onRepeat: "onrepeat",
    onReset: "onreset",
    onResize: "onresize",
    onScroll: "onscroll",
    onSeeked: "onseeked",
    onSeeking: "onseeking",
    onSelect: "onselect",
    onShow: "onshow",
    onStalled: "onstalled",
    onStorage: "onstorage",
    onSubmit: "onsubmit",
    onSuspend: "onsuspend",
    onTimeUpdate: "ontimeupdate",
    onToggle: "ontoggle",
    onUnload: "onunload",
    onVolumeChange: "onvolumechange",
    onWaiting: "onwaiting",
    onZoom: "onzoom",
    overlinePosition: "overline-position",
    overlineThickness: "overline-thickness",
    paintOrder: "paint-order",
    panose1: "panose-1",
    pointerEvents: "pointer-events",
    referrerPolicy: "referrerpolicy",
    renderingIntent: "rendering-intent",
    shapeRendering: "shape-rendering",
    stopColor: "stop-color",
    stopOpacity: "stop-opacity",
    strikethroughPosition: "strikethrough-position",
    strikethroughThickness: "strikethrough-thickness",
    strokeDashArray: "stroke-dasharray",
    strokeDashOffset: "stroke-dashoffset",
    strokeLineCap: "stroke-linecap",
    strokeLineJoin: "stroke-linejoin",
    strokeMiterLimit: "stroke-miterlimit",
    strokeOpacity: "stroke-opacity",
    strokeWidth: "stroke-width",
    tabIndex: "tabindex",
    textAnchor: "text-anchor",
    textDecoration: "text-decoration",
    textRendering: "text-rendering",
    typeOf: "typeof",
    underlinePosition: "underline-position",
    underlineThickness: "underline-thickness",
    unicodeBidi: "unicode-bidi",
    unicodeRange: "unicode-range",
    unitsPerEm: "units-per-em",
    vAlphabetic: "v-alphabetic",
    vHanging: "v-hanging",
    vIdeographic: "v-ideographic",
    vMathematical: "v-mathematical",
    vectorEffect: "vector-effect",
    vertAdvY: "vert-adv-y",
    vertOriginX: "vert-origin-x",
    vertOriginY: "vert-origin-y",
    wordSpacing: "word-spacing",
    writingMode: "writing-mode",
    xHeight: "x-height",
    playbackOrder: "playbackorder",
    timelineBegin: "timelinebegin"
  },
  transform: caseSensitiveTransform,
  properties: {
    about: commaOrSpaceSeparated,
    accentHeight: number,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: number,
    amplitude: number,
    arabicForm: null,
    ascent: number,
    attributeName: null,
    attributeType: null,
    azimuth: number,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: number,
    by: null,
    calcMode: null,
    capHeight: number,
    className: spaceSeparated,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: number,
    diffuseConstant: number,
    direction: null,
    display: null,
    dur: null,
    divisor: number,
    dominantBaseline: null,
    download: boolean,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: number,
    enableBackground: null,
    end: null,
    event: null,
    exponent: number,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: number,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: commaSeparated,
    g2: commaSeparated,
    glyphName: commaSeparated,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: number,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: number,
    horizOriginX: number,
    horizOriginY: number,
    id: null,
    ideographic: number,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: number,
    k: number,
    k1: number,
    k2: number,
    k3: number,
    k4: number,
    kernelMatrix: commaOrSpaceSeparated,
    kernelUnitLength: null,
    keyPoints: null,
    keySplines: null,
    keyTimes: null,
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: number,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: number,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: number,
    overlineThickness: number,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: number,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: spaceSeparated,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: number,
    pointsAtY: number,
    pointsAtZ: number,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: commaOrSpaceSeparated,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: commaOrSpaceSeparated,
    rev: commaOrSpaceSeparated,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: commaOrSpaceSeparated,
    requiredFeatures: commaOrSpaceSeparated,
    requiredFonts: commaOrSpaceSeparated,
    requiredFormats: commaOrSpaceSeparated,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: number,
    specularExponent: number,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: number,
    strikethroughThickness: number,
    string: null,
    stroke: null,
    strokeDashArray: commaOrSpaceSeparated,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: number,
    strokeOpacity: number,
    strokeWidth: null,
    style: null,
    surfaceScale: number,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: commaOrSpaceSeparated,
    tabIndex: number,
    tableValues: null,
    target: null,
    targetX: number,
    targetY: number,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: commaOrSpaceSeparated,
    to: null,
    transform: null,
    u1: null,
    u2: null,
    underlinePosition: number,
    underlineThickness: number,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: number,
    values: null,
    vAlphabetic: number,
    vMathematical: number,
    vectorEffect: null,
    vHanging: number,
    vIdeographic: number,
    version: null,
    vertAdvY: number,
    vertOriginX: number,
    vertOriginY: number,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: number,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  }
});
const valid = /^data[-\w.:]+$/i;
const dash = /-[a-z]/g;
const cap = /[A-Z]/g;
function find(schema, value) {
  const normal = normalize(value);
  let prop = value;
  let Type = Info;
  if (normal in schema.normal) {
    return schema.property[schema.normal[normal]];
  }
  if (normal.length > 4 && normal.slice(0, 4) === "data" && valid.test(value)) {
    if (value.charAt(4) === "-") {
      const rest = value.slice(5).replace(dash, camelcase);
      prop = "data" + rest.charAt(0).toUpperCase() + rest.slice(1);
    } else {
      const rest = value.slice(4);
      if (!dash.test(rest)) {
        let dashes = rest.replace(cap, kebab);
        if (dashes.charAt(0) !== "-") {
          dashes = "-" + dashes;
        }
        value = "data" + dashes;
      }
    }
    Type = DefinedInfo;
  }
  return new Type(prop, value);
}
function kebab($0) {
  return "-" + $0.toLowerCase();
}
function camelcase($0) {
  return $0.charAt(1).toUpperCase();
}
const hastToReact = {
  classId: "classID",
  dataType: "datatype",
  itemId: "itemID",
  strokeDashArray: "strokeDasharray",
  strokeDashOffset: "strokeDashoffset",
  strokeLineCap: "strokeLinecap",
  strokeLineJoin: "strokeLinejoin",
  strokeMiterLimit: "strokeMiterlimit",
  typeOf: "typeof",
  xLinkActuate: "xlinkActuate",
  xLinkArcRole: "xlinkArcrole",
  xLinkHref: "xlinkHref",
  xLinkRole: "xlinkRole",
  xLinkShow: "xlinkShow",
  xLinkTitle: "xlinkTitle",
  xLinkType: "xlinkType",
  xmlnsXLink: "xmlnsXlink"
};
const html = merge([xml, xlink, xmlns, aria, html$1], "html");
const svg = merge([xml, xlink, xmlns, aria, svg$1], "svg");
function rehypeFilter(options) {
  if (options.allowedElements && options.disallowedElements) {
    throw new TypeError("Only one of `allowedElements` and `disallowedElements` should be defined");
  }
  if (options.allowedElements || options.disallowedElements || options.allowElement) {
    return (tree) => {
      visit$1(tree, "element", (node, index2, parent_) => {
        const parent = parent_;
        let remove;
        if (options.allowedElements) {
          remove = !options.allowedElements.includes(node.tagName);
        } else if (options.disallowedElements) {
          remove = options.disallowedElements.includes(node.tagName);
        }
        if (!remove && options.allowElement && typeof index2 === "number") {
          remove = !options.allowElement(node, index2, parent);
        }
        if (remove && typeof index2 === "number") {
          if (options.unwrapDisallowed && node.children) {
            parent.children.splice(index2, 1, ...node.children);
          } else {
            parent.children.splice(index2, 1);
          }
          return index2;
        }
        return void 0;
      });
    };
  }
}
var reactIs = { exports: {} };
var reactIs_production_min = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b = Symbol.for("react.element"), c = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), e = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), h = Symbol.for("react.context"), k = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), n = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), t = Symbol.for("react.offscreen"), u;
u = Symbol.for("react.module.reference");
function v(a2) {
  if (typeof a2 === "object" && a2 !== null) {
    var r2 = a2.$$typeof;
    switch (r2) {
      case b:
        switch (a2 = a2.type, a2) {
          case d:
          case f:
          case e:
          case m:
          case n:
            return a2;
          default:
            switch (a2 = a2 && a2.$$typeof, a2) {
              case k:
              case h:
              case l:
              case q:
              case p:
              case g:
                return a2;
              default:
                return r2;
            }
        }
      case c:
        return r2;
    }
  }
}
reactIs_production_min.ContextConsumer = h;
reactIs_production_min.ContextProvider = g;
reactIs_production_min.Element = b;
reactIs_production_min.ForwardRef = l;
reactIs_production_min.Fragment = d;
reactIs_production_min.Lazy = q;
reactIs_production_min.Memo = p;
reactIs_production_min.Portal = c;
reactIs_production_min.Profiler = f;
reactIs_production_min.StrictMode = e;
reactIs_production_min.Suspense = m;
reactIs_production_min.SuspenseList = n;
reactIs_production_min.isAsyncMode = function() {
  return false;
};
reactIs_production_min.isConcurrentMode = function() {
  return false;
};
reactIs_production_min.isContextConsumer = function(a2) {
  return v(a2) === h;
};
reactIs_production_min.isContextProvider = function(a2) {
  return v(a2) === g;
};
reactIs_production_min.isElement = function(a2) {
  return typeof a2 === "object" && a2 !== null && a2.$$typeof === b;
};
reactIs_production_min.isForwardRef = function(a2) {
  return v(a2) === l;
};
reactIs_production_min.isFragment = function(a2) {
  return v(a2) === d;
};
reactIs_production_min.isLazy = function(a2) {
  return v(a2) === q;
};
reactIs_production_min.isMemo = function(a2) {
  return v(a2) === p;
};
reactIs_production_min.isPortal = function(a2) {
  return v(a2) === c;
};
reactIs_production_min.isProfiler = function(a2) {
  return v(a2) === f;
};
reactIs_production_min.isStrictMode = function(a2) {
  return v(a2) === e;
};
reactIs_production_min.isSuspense = function(a2) {
  return v(a2) === m;
};
reactIs_production_min.isSuspenseList = function(a2) {
  return v(a2) === n;
};
reactIs_production_min.isValidElementType = function(a2) {
  return typeof a2 === "string" || typeof a2 === "function" || a2 === d || a2 === f || a2 === e || a2 === m || a2 === n || a2 === t || typeof a2 === "object" && a2 !== null && (a2.$$typeof === q || a2.$$typeof === p || a2.$$typeof === g || a2.$$typeof === h || a2.$$typeof === l || a2.$$typeof === u || a2.getModuleId !== void 0) ? true : false;
};
reactIs_production_min.typeOf = v;
{
  reactIs.exports = reactIs_production_min;
}
var ReactIs = reactIs.exports;
function whitespace(thing) {
  var value = thing && typeof thing === "object" && thing.type === "text" ? thing.value || "" : thing;
  return typeof value === "string" && value.replace(/[ \t\n\f\r]/g, "") === "";
}
function stringify$1(values) {
  return values.join(" ").trim();
}
function stringify(values, options) {
  var settings = options || {};
  if (values[values.length - 1] === "") {
    values = values.concat("");
  }
  return values.join((settings.padRight ? " " : "") + "," + (settings.padLeft === false ? "" : " ")).trim();
}
var COMMENT_REGEX = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
var NEWLINE_REGEX = /\n/g;
var WHITESPACE_REGEX = /^\s*/;
var PROPERTY_REGEX = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/;
var COLON_REGEX = /^:\s*/;
var VALUE_REGEX = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/;
var SEMICOLON_REGEX = /^[;\s]*/;
var TRIM_REGEX = /^\s+|\s+$/g;
var NEWLINE = "\n";
var FORWARD_SLASH = "/";
var ASTERISK = "*";
var EMPTY_STRING = "";
var TYPE_COMMENT = "comment";
var TYPE_DECLARATION = "declaration";
var inlineStyleParser = function(style, options) {
  if (typeof style !== "string") {
    throw new TypeError("First argument must be a string");
  }
  if (!style)
    return [];
  options = options || {};
  var lineno = 1;
  var column = 1;
  function updatePosition(str) {
    var lines = str.match(NEWLINE_REGEX);
    if (lines)
      lineno += lines.length;
    var i2 = str.lastIndexOf(NEWLINE);
    column = ~i2 ? str.length - i2 : column + str.length;
  }
  function position2() {
    var start = { line: lineno, column };
    return function(node) {
      node.position = new Position(start);
      whitespace2();
      return node;
    };
  }
  function Position(start) {
    this.start = start;
    this.end = { line: lineno, column };
    this.source = options.source;
  }
  Position.prototype.content = style;
  function error(msg) {
    var err = new Error(options.source + ":" + lineno + ":" + column + ": " + msg);
    err.reason = msg;
    err.filename = options.source;
    err.line = lineno;
    err.column = column;
    err.source = style;
    if (options.silent)
      ;
    else {
      throw err;
    }
  }
  function match(re2) {
    var m2 = re2.exec(style);
    if (!m2)
      return;
    var str = m2[0];
    updatePosition(str);
    style = style.slice(str.length);
    return m2;
  }
  function whitespace2() {
    match(WHITESPACE_REGEX);
  }
  function comments(rules) {
    var c2;
    rules = rules || [];
    while (c2 = comment()) {
      if (c2 !== false) {
        rules.push(c2);
      }
    }
    return rules;
  }
  function comment() {
    var pos = position2();
    if (FORWARD_SLASH != style.charAt(0) || ASTERISK != style.charAt(1))
      return;
    var i2 = 2;
    while (EMPTY_STRING != style.charAt(i2) && (ASTERISK != style.charAt(i2) || FORWARD_SLASH != style.charAt(i2 + 1))) {
      ++i2;
    }
    i2 += 2;
    if (EMPTY_STRING === style.charAt(i2 - 1)) {
      return error("End of comment missing");
    }
    var str = style.slice(2, i2 - 2);
    column += 2;
    updatePosition(str);
    style = style.slice(i2);
    column += 2;
    return pos({
      type: TYPE_COMMENT,
      comment: str
    });
  }
  function declaration() {
    var pos = position2();
    var prop = match(PROPERTY_REGEX);
    if (!prop)
      return;
    comment();
    if (!match(COLON_REGEX))
      return error("property missing ':'");
    var val = match(VALUE_REGEX);
    var ret = pos({
      type: TYPE_DECLARATION,
      property: trim(prop[0].replace(COMMENT_REGEX, EMPTY_STRING)),
      value: val ? trim(val[0].replace(COMMENT_REGEX, EMPTY_STRING)) : EMPTY_STRING
    });
    match(SEMICOLON_REGEX);
    return ret;
  }
  function declarations() {
    var decls = [];
    comments(decls);
    var decl;
    while (decl = declaration()) {
      if (decl !== false) {
        decls.push(decl);
        comments(decls);
      }
    }
    return decls;
  }
  whitespace2();
  return declarations();
};
function trim(str) {
  return str ? str.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;
}
var parse = inlineStyleParser;
function StyleToObject(style, iterator) {
  var output = null;
  if (!style || typeof style !== "string") {
    return output;
  }
  var declaration;
  var declarations = parse(style);
  var hasIterator = typeof iterator === "function";
  var property;
  var value;
  for (var i2 = 0, len = declarations.length; i2 < len; i2++) {
    declaration = declarations[i2];
    property = declaration.property;
    value = declaration.value;
    if (hasIterator) {
      iterator(property, value, declaration);
    } else if (value) {
      output || (output = {});
      output[property] = value;
    }
  }
  return output;
}
var styleToObject = StyleToObject;
const own$2 = {}.hasOwnProperty;
const tableElements = /* @__PURE__ */ new Set(["table", "thead", "tbody", "tfoot", "tr"]);
function childrenToReact(context, node) {
  const children = [];
  let childIndex = -1;
  let child;
  while (++childIndex < node.children.length) {
    child = node.children[childIndex];
    if (child.type === "element") {
      children.push(toReact(context, child, childIndex, node));
    } else if (child.type === "text") {
      if (node.type !== "element" || !tableElements.has(node.tagName) || !whitespace(child)) {
        children.push(child.value);
      }
    } else if (child.type === "raw" && !context.options.skipHtml) {
      children.push(child.value);
    }
  }
  return children;
}
function toReact(context, node, index2, parent) {
  const options = context.options;
  const parentSchema = context.schema;
  const name = node.tagName;
  const properties = {};
  let schema = parentSchema;
  let property;
  if (parentSchema.space === "html" && name === "svg") {
    schema = svg;
    context.schema = schema;
  }
  if (node.properties) {
    for (property in node.properties) {
      if (own$2.call(node.properties, property)) {
        addProperty(properties, property, node.properties[property], context);
      }
    }
  }
  if (name === "ol" || name === "ul") {
    context.listDepth++;
  }
  const children = childrenToReact(context, node);
  if (name === "ol" || name === "ul") {
    context.listDepth--;
  }
  context.schema = parentSchema;
  const position2 = node.position || {
    start: { line: null, column: null, offset: null },
    end: { line: null, column: null, offset: null }
  };
  const component = options.components && own$2.call(options.components, name) ? options.components[name] : name;
  const basic = typeof component === "string" || component === React.Fragment;
  if (!ReactIs.isValidElementType(component)) {
    throw new TypeError(`Component for name \`${name}\` not defined or is not renderable`);
  }
  properties.key = [
    name,
    position2.start.line,
    position2.start.column,
    index2
  ].join("-");
  if (name === "a" && options.linkTarget) {
    properties.target = typeof options.linkTarget === "function" ? options.linkTarget(String(properties.href || ""), node.children, typeof properties.title === "string" ? properties.title : null) : options.linkTarget;
  }
  if (name === "a" && options.transformLinkUri) {
    properties.href = options.transformLinkUri(String(properties.href || ""), node.children, typeof properties.title === "string" ? properties.title : null);
  }
  if (!basic && name === "code" && parent.type === "element" && parent.tagName !== "pre") {
    properties.inline = true;
  }
  if (!basic && (name === "h1" || name === "h2" || name === "h3" || name === "h4" || name === "h5" || name === "h6")) {
    properties.level = Number.parseInt(name.charAt(1), 10);
  }
  if (name === "img" && options.transformImageUri) {
    properties.src = options.transformImageUri(String(properties.src || ""), String(properties.alt || ""), typeof properties.title === "string" ? properties.title : null);
  }
  if (!basic && name === "li" && parent.type === "element") {
    const input = getInputElement(node);
    properties.checked = input && input.properties ? Boolean(input.properties.checked) : null;
    properties.index = getElementsBeforeCount(parent, node);
    properties.ordered = parent.tagName === "ol";
  }
  if (!basic && (name === "ol" || name === "ul")) {
    properties.ordered = name === "ol";
    properties.depth = context.listDepth;
  }
  if (name === "td" || name === "th") {
    if (properties.align) {
      if (!properties.style)
        properties.style = {};
      properties.style.textAlign = properties.align;
      delete properties.align;
    }
    if (!basic) {
      properties.isHeader = name === "th";
    }
  }
  if (!basic && name === "tr" && parent.type === "element") {
    properties.isHeader = Boolean(parent.tagName === "thead");
  }
  if (options.sourcePos) {
    properties["data-sourcepos"] = flattenPosition(position2);
  }
  if (!basic && options.rawSourcePos) {
    properties.sourcePosition = node.position;
  }
  if (!basic && options.includeElementIndex) {
    properties.index = getElementsBeforeCount(parent, node);
    properties.siblingCount = getElementsBeforeCount(parent);
  }
  if (!basic) {
    properties.node = node;
  }
  return children.length > 0 ? React.createElement(component, properties, children) : React.createElement(component, properties);
}
function getInputElement(node) {
  let index2 = -1;
  while (++index2 < node.children.length) {
    const child = node.children[index2];
    if (child.type === "element" && child.tagName === "input") {
      return child;
    }
  }
  return null;
}
function getElementsBeforeCount(parent, node) {
  let index2 = -1;
  let count = 0;
  while (++index2 < parent.children.length) {
    if (parent.children[index2] === node)
      break;
    if (parent.children[index2].type === "element")
      count++;
  }
  return count;
}
function addProperty(props, prop, value, ctx) {
  const info = find(ctx.schema, prop);
  let result = value;
  if (result === null || result === void 0 || result !== result) {
    return;
  }
  if (Array.isArray(result)) {
    result = info.commaSeparated ? stringify(result) : stringify$1(result);
  }
  if (info.property === "style" && typeof result === "string") {
    result = parseStyle(result);
  }
  if (info.space && info.property) {
    props[own$2.call(hastToReact, info.property) ? hastToReact[info.property] : info.property] = result;
  } else if (info.attribute) {
    props[info.attribute] = result;
  }
}
function parseStyle(value) {
  const result = {};
  try {
    styleToObject(value, iterator);
  } catch {
  }
  return result;
  function iterator(name, v2) {
    const k2 = name.slice(0, 4) === "-ms-" ? `ms-${name.slice(4)}` : name;
    result[k2.replace(/-([a-z])/g, styleReplacer)] = v2;
  }
}
function styleReplacer(_2, $1) {
  return $1.toUpperCase();
}
function flattenPosition(pos) {
  return [
    pos.start.line,
    ":",
    pos.start.column,
    "-",
    pos.end.line,
    ":",
    pos.end.column
  ].map((d2) => String(d2)).join("");
}
const own$1 = {}.hasOwnProperty;
const changelog = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md";
const deprecated = {
  plugins: { to: "plugins", id: "change-plugins-to-remarkplugins" },
  renderers: { to: "components", id: "change-renderers-to-components" },
  astPlugins: { id: "remove-buggy-html-in-markdown-parser" },
  allowDangerousHtml: { id: "remove-buggy-html-in-markdown-parser" },
  escapeHtml: { id: "remove-buggy-html-in-markdown-parser" },
  source: { to: "children", id: "change-source-to-children" },
  allowNode: {
    to: "allowElement",
    id: "replace-allownode-allowedtypes-and-disallowedtypes"
  },
  allowedTypes: {
    to: "allowedElements",
    id: "replace-allownode-allowedtypes-and-disallowedtypes"
  },
  disallowedTypes: {
    to: "disallowedElements",
    id: "replace-allownode-allowedtypes-and-disallowedtypes"
  },
  includeNodeIndex: {
    to: "includeElementIndex",
    id: "change-includenodeindex-to-includeelementindex"
  }
};
function ReactMarkdown(options) {
  for (const key in deprecated) {
    if (own$1.call(deprecated, key) && own$1.call(options, key)) {
      const deprecation = deprecated[key];
      console.warn(`[react-markdown] Warning: please ${deprecation.to ? `use \`${deprecation.to}\` instead of` : "remove"} \`${key}\` (see <${changelog}#${deprecation.id}> for more info)`);
      delete deprecated[key];
    }
  }
  const processor = unified().use(remarkParse).use(options.remarkPlugins || []).use(remarkRehype$1, __spreadProps(__spreadValues({}, options.remarkRehypeOptions), {
    allowDangerousHtml: true
  })).use(options.rehypePlugins || []).use(rehypeFilter, options);
  const file = new VFile();
  if (typeof options.children === "string") {
    file.value = options.children;
  } else if (options.children !== void 0 && options.children !== null) {
    console.warn(`[react-markdown] Warning: please pass a string as \`children\` (not: \`${options.children}\`)`);
  }
  const hastNode = processor.runSync(processor.parse(file), file);
  if (hastNode.type !== "root") {
    throw new TypeError("Expected a `root` node");
  }
  let result = React.createElement(React.Fragment, {}, childrenToReact({ options, schema: html, listDepth: 0 }, hastNode));
  if (options.className) {
    result = React.createElement("div", { className: options.className }, result);
  }
  return result;
}
ReactMarkdown.defaultProps = { transformLinkUri: uriTransformer };
ReactMarkdown.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  allowElement: PropTypes.func,
  allowedElements: PropTypes.arrayOf(PropTypes.string),
  disallowedElements: PropTypes.arrayOf(PropTypes.string),
  unwrapDisallowed: PropTypes.bool,
  remarkPlugins: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
      PropTypes.object,
      PropTypes.func,
      PropTypes.arrayOf(PropTypes.any)
    ]))
  ])),
  rehypePlugins: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
      PropTypes.object,
      PropTypes.func,
      PropTypes.arrayOf(PropTypes.any)
    ]))
  ])),
  sourcePos: PropTypes.bool,
  rawSourcePos: PropTypes.bool,
  skipHtml: PropTypes.bool,
  includeElementIndex: PropTypes.bool,
  transformLinkUri: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  linkTarget: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  transformImageUri: PropTypes.func,
  components: PropTypes.object
};
const www = {
  tokenize: tokenizeWww,
  partial: true
};
const domain = {
  tokenize: tokenizeDomain,
  partial: true
};
const path = {
  tokenize: tokenizePath,
  partial: true
};
const punctuation = {
  tokenize: tokenizePunctuation,
  partial: true
};
const namedCharacterReference = {
  tokenize: tokenizeNamedCharacterReference,
  partial: true
};
const wwwAutolink = {
  tokenize: tokenizeWwwAutolink,
  previous: previousWww
};
const httpAutolink = {
  tokenize: tokenizeHttpAutolink,
  previous: previousHttp
};
const emailAutolink = {
  tokenize: tokenizeEmailAutolink,
  previous: previousEmail
};
const text = {};
const gfmAutolinkLiteral = {
  text
};
let code = 48;
while (code < 123) {
  text[code] = emailAutolink;
  code++;
  if (code === 58)
    code = 65;
  else if (code === 91)
    code = 97;
}
text[43] = emailAutolink;
text[45] = emailAutolink;
text[46] = emailAutolink;
text[95] = emailAutolink;
text[72] = [emailAutolink, httpAutolink];
text[104] = [emailAutolink, httpAutolink];
text[87] = [emailAutolink, wwwAutolink];
text[119] = [emailAutolink, wwwAutolink];
function tokenizeEmailAutolink(effects, ok2, nok) {
  const self = this;
  let hasDot;
  let hasDigitInLastSegment;
  return start;
  function start(code2) {
    if (!gfmAtext(code2) || !previousEmail(self.previous) || previousUnbalanced(self.events)) {
      return nok(code2);
    }
    effects.enter("literalAutolink");
    effects.enter("literalAutolinkEmail");
    return atext(code2);
  }
  function atext(code2) {
    if (gfmAtext(code2)) {
      effects.consume(code2);
      return atext;
    }
    if (code2 === 64) {
      effects.consume(code2);
      return label;
    }
    return nok(code2);
  }
  function label(code2) {
    if (code2 === 46) {
      return effects.check(punctuation, done, dotContinuation)(code2);
    }
    if (code2 === 45 || code2 === 95) {
      return effects.check(punctuation, nok, dashOrUnderscoreContinuation)(code2);
    }
    if (asciiAlphanumeric(code2)) {
      if (!hasDigitInLastSegment && asciiDigit(code2)) {
        hasDigitInLastSegment = true;
      }
      effects.consume(code2);
      return label;
    }
    return done(code2);
  }
  function dotContinuation(code2) {
    effects.consume(code2);
    hasDot = true;
    hasDigitInLastSegment = void 0;
    return label;
  }
  function dashOrUnderscoreContinuation(code2) {
    effects.consume(code2);
    return afterDashOrUnderscore;
  }
  function afterDashOrUnderscore(code2) {
    if (code2 === 46) {
      return effects.check(punctuation, nok, dotContinuation)(code2);
    }
    return label(code2);
  }
  function done(code2) {
    if (hasDot && !hasDigitInLastSegment) {
      effects.exit("literalAutolinkEmail");
      effects.exit("literalAutolink");
      return ok2(code2);
    }
    return nok(code2);
  }
}
function tokenizeWwwAutolink(effects, ok2, nok) {
  const self = this;
  return start;
  function start(code2) {
    if (code2 !== 87 && code2 !== 119 || !previousWww(self.previous) || previousUnbalanced(self.events)) {
      return nok(code2);
    }
    effects.enter("literalAutolink");
    effects.enter("literalAutolinkWww");
    return effects.check(www, effects.attempt(domain, effects.attempt(path, done), nok), nok)(code2);
  }
  function done(code2) {
    effects.exit("literalAutolinkWww");
    effects.exit("literalAutolink");
    return ok2(code2);
  }
}
function tokenizeHttpAutolink(effects, ok2, nok) {
  const self = this;
  return start;
  function start(code2) {
    if (code2 !== 72 && code2 !== 104 || !previousHttp(self.previous) || previousUnbalanced(self.events)) {
      return nok(code2);
    }
    effects.enter("literalAutolink");
    effects.enter("literalAutolinkHttp");
    effects.consume(code2);
    return t1;
  }
  function t1(code2) {
    if (code2 === 84 || code2 === 116) {
      effects.consume(code2);
      return t2;
    }
    return nok(code2);
  }
  function t2(code2) {
    if (code2 === 84 || code2 === 116) {
      effects.consume(code2);
      return p2;
    }
    return nok(code2);
  }
  function p2(code2) {
    if (code2 === 80 || code2 === 112) {
      effects.consume(code2);
      return s2;
    }
    return nok(code2);
  }
  function s2(code2) {
    if (code2 === 83 || code2 === 115) {
      effects.consume(code2);
      return colon;
    }
    return colon(code2);
  }
  function colon(code2) {
    if (code2 === 58) {
      effects.consume(code2);
      return slash1;
    }
    return nok(code2);
  }
  function slash1(code2) {
    if (code2 === 47) {
      effects.consume(code2);
      return slash2;
    }
    return nok(code2);
  }
  function slash2(code2) {
    if (code2 === 47) {
      effects.consume(code2);
      return after;
    }
    return nok(code2);
  }
  function after(code2) {
    return code2 === null || asciiControl(code2) || unicodeWhitespace(code2) || unicodePunctuation(code2) ? nok(code2) : effects.attempt(domain, effects.attempt(path, done), nok)(code2);
  }
  function done(code2) {
    effects.exit("literalAutolinkHttp");
    effects.exit("literalAutolink");
    return ok2(code2);
  }
}
function tokenizeWww(effects, ok2, nok) {
  return start;
  function start(code2) {
    effects.consume(code2);
    return w2;
  }
  function w2(code2) {
    if (code2 === 87 || code2 === 119) {
      effects.consume(code2);
      return w3;
    }
    return nok(code2);
  }
  function w3(code2) {
    if (code2 === 87 || code2 === 119) {
      effects.consume(code2);
      return dot;
    }
    return nok(code2);
  }
  function dot(code2) {
    if (code2 === 46) {
      effects.consume(code2);
      return after;
    }
    return nok(code2);
  }
  function after(code2) {
    return code2 === null || markdownLineEnding(code2) ? nok(code2) : ok2(code2);
  }
}
function tokenizeDomain(effects, ok2, nok) {
  let hasUnderscoreInLastSegment;
  let hasUnderscoreInLastLastSegment;
  return domain2;
  function domain2(code2) {
    if (code2 === 38) {
      return effects.check(namedCharacterReference, done, punctuationContinuation)(code2);
    }
    if (code2 === 46 || code2 === 95) {
      return effects.check(punctuation, done, punctuationContinuation)(code2);
    }
    if (code2 === null || asciiControl(code2) || unicodeWhitespace(code2) || code2 !== 45 && unicodePunctuation(code2)) {
      return done(code2);
    }
    effects.consume(code2);
    return domain2;
  }
  function punctuationContinuation(code2) {
    if (code2 === 46) {
      hasUnderscoreInLastLastSegment = hasUnderscoreInLastSegment;
      hasUnderscoreInLastSegment = void 0;
      effects.consume(code2);
      return domain2;
    }
    if (code2 === 95)
      hasUnderscoreInLastSegment = true;
    effects.consume(code2);
    return domain2;
  }
  function done(code2) {
    if (!hasUnderscoreInLastLastSegment && !hasUnderscoreInLastSegment) {
      return ok2(code2);
    }
    return nok(code2);
  }
}
function tokenizePath(effects, ok2) {
  let balance = 0;
  return inPath;
  function inPath(code2) {
    if (code2 === 38) {
      return effects.check(namedCharacterReference, ok2, continuedPunctuation)(code2);
    }
    if (code2 === 40) {
      balance++;
    }
    if (code2 === 41) {
      return effects.check(punctuation, parenAtPathEnd, continuedPunctuation)(code2);
    }
    if (pathEnd(code2)) {
      return ok2(code2);
    }
    if (trailingPunctuation(code2)) {
      return effects.check(punctuation, ok2, continuedPunctuation)(code2);
    }
    effects.consume(code2);
    return inPath;
  }
  function continuedPunctuation(code2) {
    effects.consume(code2);
    return inPath;
  }
  function parenAtPathEnd(code2) {
    balance--;
    return balance < 0 ? ok2(code2) : continuedPunctuation(code2);
  }
}
function tokenizeNamedCharacterReference(effects, ok2, nok) {
  return start;
  function start(code2) {
    effects.consume(code2);
    return inside;
  }
  function inside(code2) {
    if (asciiAlpha(code2)) {
      effects.consume(code2);
      return inside;
    }
    if (code2 === 59) {
      effects.consume(code2);
      return after;
    }
    return nok(code2);
  }
  function after(code2) {
    return pathEnd(code2) ? ok2(code2) : nok(code2);
  }
}
function tokenizePunctuation(effects, ok2, nok) {
  return start;
  function start(code2) {
    effects.consume(code2);
    return after;
  }
  function after(code2) {
    if (trailingPunctuation(code2)) {
      effects.consume(code2);
      return after;
    }
    return pathEnd(code2) ? ok2(code2) : nok(code2);
  }
}
function trailingPunctuation(code2) {
  return code2 === 33 || code2 === 34 || code2 === 39 || code2 === 41 || code2 === 42 || code2 === 44 || code2 === 46 || code2 === 58 || code2 === 59 || code2 === 60 || code2 === 63 || code2 === 95 || code2 === 126;
}
function pathEnd(code2) {
  return code2 === null || code2 === 60 || markdownLineEndingOrSpace(code2);
}
function gfmAtext(code2) {
  return code2 === 43 || code2 === 45 || code2 === 46 || code2 === 95 || asciiAlphanumeric(code2);
}
function previousWww(code2) {
  return code2 === null || code2 === 40 || code2 === 42 || code2 === 95 || code2 === 126 || markdownLineEndingOrSpace(code2);
}
function previousHttp(code2) {
  return code2 === null || !asciiAlpha(code2);
}
function previousEmail(code2) {
  return code2 !== 47 && previousHttp(code2);
}
function previousUnbalanced(events) {
  let index2 = events.length;
  let result = false;
  while (index2--) {
    const token = events[index2][1];
    if ((token.type === "labelLink" || token.type === "labelImage") && !token._balanced) {
      result = true;
      break;
    }
    if (token._gfmAutolinkLiteralWalkedInto) {
      result = false;
      break;
    }
  }
  if (events.length > 0 && !result) {
    events[events.length - 1][1]._gfmAutolinkLiteralWalkedInto = true;
  }
  return result;
}
const indent = {
  tokenize: tokenizeIndent,
  partial: true
};
function gfmFootnote() {
  return {
    document: {
      [91]: {
        tokenize: tokenizeDefinitionStart,
        continuation: {
          tokenize: tokenizeDefinitionContinuation
        },
        exit: gfmFootnoteDefinitionEnd
      }
    },
    text: {
      [91]: {
        tokenize: tokenizeGfmFootnoteCall
      },
      [93]: {
        add: "after",
        tokenize: tokenizePotentialGfmFootnoteCall,
        resolveTo: resolveToPotentialGfmFootnoteCall
      }
    }
  };
}
function tokenizePotentialGfmFootnoteCall(effects, ok2, nok) {
  const self = this;
  let index2 = self.events.length;
  const defined = self.parser.gfmFootnotes || (self.parser.gfmFootnotes = []);
  let labelStart;
  while (index2--) {
    const token = self.events[index2][1];
    if (token.type === "labelImage") {
      labelStart = token;
      break;
    }
    if (token.type === "gfmFootnoteCall" || token.type === "labelLink" || token.type === "label" || token.type === "image" || token.type === "link") {
      break;
    }
  }
  return start;
  function start(code2) {
    if (!labelStart || !labelStart._balanced) {
      return nok(code2);
    }
    const id2 = normalizeIdentifier(self.sliceSerialize({
      start: labelStart.end,
      end: self.now()
    }));
    if (id2.charCodeAt(0) !== 94 || !defined.includes(id2.slice(1))) {
      return nok(code2);
    }
    effects.enter("gfmFootnoteCallLabelMarker");
    effects.consume(code2);
    effects.exit("gfmFootnoteCallLabelMarker");
    return ok2(code2);
  }
}
function resolveToPotentialGfmFootnoteCall(events, context) {
  let index2 = events.length;
  while (index2--) {
    if (events[index2][1].type === "labelImage" && events[index2][0] === "enter") {
      events[index2][1];
      break;
    }
  }
  events[index2 + 1][1].type = "data";
  events[index2 + 3][1].type = "gfmFootnoteCallLabelMarker";
  const call = {
    type: "gfmFootnoteCall",
    start: Object.assign({}, events[index2 + 3][1].start),
    end: Object.assign({}, events[events.length - 1][1].end)
  };
  const marker = {
    type: "gfmFootnoteCallMarker",
    start: Object.assign({}, events[index2 + 3][1].end),
    end: Object.assign({}, events[index2 + 3][1].end)
  };
  marker.end.column++;
  marker.end.offset++;
  marker.end._bufferIndex++;
  const string2 = {
    type: "gfmFootnoteCallString",
    start: Object.assign({}, marker.end),
    end: Object.assign({}, events[events.length - 1][1].start)
  };
  const chunk = {
    type: "chunkString",
    contentType: "string",
    start: Object.assign({}, string2.start),
    end: Object.assign({}, string2.end)
  };
  const replacement = [
    events[index2 + 1],
    events[index2 + 2],
    ["enter", call, context],
    events[index2 + 3],
    events[index2 + 4],
    ["enter", marker, context],
    ["exit", marker, context],
    ["enter", string2, context],
    ["enter", chunk, context],
    ["exit", chunk, context],
    ["exit", string2, context],
    events[events.length - 2],
    events[events.length - 1],
    ["exit", call, context]
  ];
  events.splice(index2, events.length - index2 + 1, ...replacement);
  return events;
}
function tokenizeGfmFootnoteCall(effects, ok2, nok) {
  const self = this;
  const defined = self.parser.gfmFootnotes || (self.parser.gfmFootnotes = []);
  let size = 0;
  let data;
  return start;
  function start(code2) {
    effects.enter("gfmFootnoteCall");
    effects.enter("gfmFootnoteCallLabelMarker");
    effects.consume(code2);
    effects.exit("gfmFootnoteCallLabelMarker");
    return callStart;
  }
  function callStart(code2) {
    if (code2 !== 94)
      return nok(code2);
    effects.enter("gfmFootnoteCallMarker");
    effects.consume(code2);
    effects.exit("gfmFootnoteCallMarker");
    effects.enter("gfmFootnoteCallString");
    effects.enter("chunkString").contentType = "string";
    return callData;
  }
  function callData(code2) {
    let token;
    if (code2 === null || code2 === 91 || size++ > 999) {
      return nok(code2);
    }
    if (code2 === 93) {
      if (!data) {
        return nok(code2);
      }
      effects.exit("chunkString");
      token = effects.exit("gfmFootnoteCallString");
      return defined.includes(normalizeIdentifier(self.sliceSerialize(token))) ? end(code2) : nok(code2);
    }
    effects.consume(code2);
    if (!markdownLineEndingOrSpace(code2)) {
      data = true;
    }
    return code2 === 92 ? callEscape : callData;
  }
  function callEscape(code2) {
    if (code2 === 91 || code2 === 92 || code2 === 93) {
      effects.consume(code2);
      size++;
      return callData;
    }
    return callData(code2);
  }
  function end(code2) {
    effects.enter("gfmFootnoteCallLabelMarker");
    effects.consume(code2);
    effects.exit("gfmFootnoteCallLabelMarker");
    effects.exit("gfmFootnoteCall");
    return ok2;
  }
}
function tokenizeDefinitionStart(effects, ok2, nok) {
  const self = this;
  const defined = self.parser.gfmFootnotes || (self.parser.gfmFootnotes = []);
  let identifier;
  let size = 0;
  let data;
  return start;
  function start(code2) {
    effects.enter("gfmFootnoteDefinition")._container = true;
    effects.enter("gfmFootnoteDefinitionLabel");
    effects.enter("gfmFootnoteDefinitionLabelMarker");
    effects.consume(code2);
    effects.exit("gfmFootnoteDefinitionLabelMarker");
    return labelStart;
  }
  function labelStart(code2) {
    if (code2 === 94) {
      effects.enter("gfmFootnoteDefinitionMarker");
      effects.consume(code2);
      effects.exit("gfmFootnoteDefinitionMarker");
      effects.enter("gfmFootnoteDefinitionLabelString");
      return atBreak;
    }
    return nok(code2);
  }
  function atBreak(code2) {
    let token;
    if (code2 === null || code2 === 91 || size > 999) {
      return nok(code2);
    }
    if (code2 === 93) {
      if (!data) {
        return nok(code2);
      }
      token = effects.exit("gfmFootnoteDefinitionLabelString");
      identifier = normalizeIdentifier(self.sliceSerialize(token));
      effects.enter("gfmFootnoteDefinitionLabelMarker");
      effects.consume(code2);
      effects.exit("gfmFootnoteDefinitionLabelMarker");
      effects.exit("gfmFootnoteDefinitionLabel");
      return labelAfter;
    }
    if (markdownLineEnding(code2)) {
      effects.enter("lineEnding");
      effects.consume(code2);
      effects.exit("lineEnding");
      size++;
      return atBreak;
    }
    effects.enter("chunkString").contentType = "string";
    return label(code2);
  }
  function label(code2) {
    if (code2 === null || markdownLineEnding(code2) || code2 === 91 || code2 === 93 || size > 999) {
      effects.exit("chunkString");
      return atBreak(code2);
    }
    if (!markdownLineEndingOrSpace(code2)) {
      data = true;
    }
    size++;
    effects.consume(code2);
    return code2 === 92 ? labelEscape : label;
  }
  function labelEscape(code2) {
    if (code2 === 91 || code2 === 92 || code2 === 93) {
      effects.consume(code2);
      size++;
      return label;
    }
    return label(code2);
  }
  function labelAfter(code2) {
    if (code2 === 58) {
      effects.enter("definitionMarker");
      effects.consume(code2);
      effects.exit("definitionMarker");
      return factorySpace(effects, done, "gfmFootnoteDefinitionWhitespace");
    }
    return nok(code2);
  }
  function done(code2) {
    if (!defined.includes(identifier)) {
      defined.push(identifier);
    }
    return ok2(code2);
  }
}
function tokenizeDefinitionContinuation(effects, ok2, nok) {
  return effects.check(blankLine, ok2, effects.attempt(indent, ok2, nok));
}
function gfmFootnoteDefinitionEnd(effects) {
  effects.exit("gfmFootnoteDefinition");
}
function tokenizeIndent(effects, ok2, nok) {
  const self = this;
  return factorySpace(effects, afterPrefix, "gfmFootnoteDefinitionIndent", 4 + 1);
  function afterPrefix(code2) {
    const tail = self.events[self.events.length - 1];
    return tail && tail[1].type === "gfmFootnoteDefinitionIndent" && tail[2].sliceSerialize(tail[1], true).length === 4 ? ok2(code2) : nok(code2);
  }
}
function gfmStrikethrough(options = {}) {
  let single = options.singleTilde;
  const tokenizer = {
    tokenize: tokenizeStrikethrough,
    resolveAll: resolveAllStrikethrough
  };
  if (single === null || single === void 0) {
    single = true;
  }
  return {
    text: {
      [126]: tokenizer
    },
    insideSpan: {
      null: [tokenizer]
    },
    attentionMarkers: {
      null: [126]
    }
  };
  function resolveAllStrikethrough(events, context) {
    let index2 = -1;
    while (++index2 < events.length) {
      if (events[index2][0] === "enter" && events[index2][1].type === "strikethroughSequenceTemporary" && events[index2][1]._close) {
        let open = index2;
        while (open--) {
          if (events[open][0] === "exit" && events[open][1].type === "strikethroughSequenceTemporary" && events[open][1]._open && events[index2][1].end.offset - events[index2][1].start.offset === events[open][1].end.offset - events[open][1].start.offset) {
            events[index2][1].type = "strikethroughSequence";
            events[open][1].type = "strikethroughSequence";
            const strikethrough2 = {
              type: "strikethrough",
              start: Object.assign({}, events[open][1].start),
              end: Object.assign({}, events[index2][1].end)
            };
            const text2 = {
              type: "strikethroughText",
              start: Object.assign({}, events[open][1].end),
              end: Object.assign({}, events[index2][1].start)
            };
            const nextEvents = [
              ["enter", strikethrough2, context],
              ["enter", events[open][1], context],
              ["exit", events[open][1], context],
              ["enter", text2, context]
            ];
            splice(nextEvents, nextEvents.length, 0, resolveAll(context.parser.constructs.insideSpan.null, events.slice(open + 1, index2), context));
            splice(nextEvents, nextEvents.length, 0, [
              ["exit", text2, context],
              ["enter", events[index2][1], context],
              ["exit", events[index2][1], context],
              ["exit", strikethrough2, context]
            ]);
            splice(events, open - 1, index2 - open + 3, nextEvents);
            index2 = open + nextEvents.length - 2;
            break;
          }
        }
      }
    }
    index2 = -1;
    while (++index2 < events.length) {
      if (events[index2][1].type === "strikethroughSequenceTemporary") {
        events[index2][1].type = "data";
      }
    }
    return events;
  }
  function tokenizeStrikethrough(effects, ok2, nok) {
    const previous2 = this.previous;
    const events = this.events;
    let size = 0;
    return start;
    function start(code2) {
      if (previous2 === 126 && events[events.length - 1][1].type !== "characterEscape") {
        return nok(code2);
      }
      effects.enter("strikethroughSequenceTemporary");
      return more(code2);
    }
    function more(code2) {
      const before = classifyCharacter(previous2);
      if (code2 === 126) {
        if (size > 1)
          return nok(code2);
        effects.consume(code2);
        size++;
        return more;
      }
      if (size < 2 && !single)
        return nok(code2);
      const token = effects.exit("strikethroughSequenceTemporary");
      const after = classifyCharacter(code2);
      token._open = !after || after === 2 && Boolean(before);
      token._close = !before || before === 2 && Boolean(after);
      return ok2(code2);
    }
  }
}
const gfmTable = {
  flow: {
    null: {
      tokenize: tokenizeTable,
      resolve: resolveTable
    }
  }
};
const nextPrefixedOrBlank = {
  tokenize: tokenizeNextPrefixedOrBlank,
  partial: true
};
function resolveTable(events, context) {
  let index2 = -1;
  let inHead;
  let inDelimiterRow;
  let inRow;
  let contentStart;
  let contentEnd;
  let cellStart;
  let seenCellInRow;
  while (++index2 < events.length) {
    const token = events[index2][1];
    if (inRow) {
      if (token.type === "temporaryTableCellContent") {
        contentStart = contentStart || index2;
        contentEnd = index2;
      }
      if ((token.type === "tableCellDivider" || token.type === "tableRow") && contentEnd) {
        const content2 = {
          type: "tableContent",
          start: events[contentStart][1].start,
          end: events[contentEnd][1].end
        };
        const text2 = {
          type: "chunkText",
          start: content2.start,
          end: content2.end,
          contentType: "text"
        };
        events.splice(contentStart, contentEnd - contentStart + 1, ["enter", content2, context], ["enter", text2, context], ["exit", text2, context], ["exit", content2, context]);
        index2 -= contentEnd - contentStart - 3;
        contentStart = void 0;
        contentEnd = void 0;
      }
    }
    if (events[index2][0] === "exit" && cellStart !== void 0 && cellStart + (seenCellInRow ? 0 : 1) < index2 && (token.type === "tableCellDivider" || token.type === "tableRow" && (cellStart + 3 < index2 || events[cellStart][1].type !== "whitespace"))) {
      const cell = {
        type: inDelimiterRow ? "tableDelimiter" : inHead ? "tableHeader" : "tableData",
        start: events[cellStart][1].start,
        end: events[index2][1].end
      };
      events.splice(index2 + (token.type === "tableCellDivider" ? 1 : 0), 0, [
        "exit",
        cell,
        context
      ]);
      events.splice(cellStart, 0, ["enter", cell, context]);
      index2 += 2;
      cellStart = index2 + 1;
      seenCellInRow = true;
    }
    if (token.type === "tableRow") {
      inRow = events[index2][0] === "enter";
      if (inRow) {
        cellStart = index2 + 1;
        seenCellInRow = false;
      }
    }
    if (token.type === "tableDelimiterRow") {
      inDelimiterRow = events[index2][0] === "enter";
      if (inDelimiterRow) {
        cellStart = index2 + 1;
        seenCellInRow = false;
      }
    }
    if (token.type === "tableHead") {
      inHead = events[index2][0] === "enter";
    }
  }
  return events;
}
function tokenizeTable(effects, ok2, nok) {
  const self = this;
  const align = [];
  let tableHeaderCount = 0;
  let seenDelimiter;
  let hasDash;
  return start;
  function start(code2) {
    effects.enter("table")._align = align;
    effects.enter("tableHead");
    effects.enter("tableRow");
    if (code2 === 124) {
      return cellDividerHead(code2);
    }
    tableHeaderCount++;
    effects.enter("temporaryTableCellContent");
    return inCellContentHead(code2);
  }
  function cellDividerHead(code2) {
    effects.enter("tableCellDivider");
    effects.consume(code2);
    effects.exit("tableCellDivider");
    seenDelimiter = true;
    return cellBreakHead;
  }
  function cellBreakHead(code2) {
    if (code2 === null || markdownLineEnding(code2)) {
      return atRowEndHead(code2);
    }
    if (markdownSpace(code2)) {
      effects.enter("whitespace");
      effects.consume(code2);
      return inWhitespaceHead;
    }
    if (seenDelimiter) {
      seenDelimiter = void 0;
      tableHeaderCount++;
    }
    if (code2 === 124) {
      return cellDividerHead(code2);
    }
    effects.enter("temporaryTableCellContent");
    return inCellContentHead(code2);
  }
  function inWhitespaceHead(code2) {
    if (markdownSpace(code2)) {
      effects.consume(code2);
      return inWhitespaceHead;
    }
    effects.exit("whitespace");
    return cellBreakHead(code2);
  }
  function inCellContentHead(code2) {
    if (code2 === null || code2 === 124 || markdownLineEndingOrSpace(code2)) {
      effects.exit("temporaryTableCellContent");
      return cellBreakHead(code2);
    }
    effects.consume(code2);
    return code2 === 92 ? inCellContentEscapeHead : inCellContentHead;
  }
  function inCellContentEscapeHead(code2) {
    if (code2 === 92 || code2 === 124) {
      effects.consume(code2);
      return inCellContentHead;
    }
    return inCellContentHead(code2);
  }
  function atRowEndHead(code2) {
    if (code2 === null) {
      return nok(code2);
    }
    effects.exit("tableRow");
    effects.exit("tableHead");
    const originalInterrupt = self.interrupt;
    self.interrupt = true;
    return effects.attempt({
      tokenize: tokenizeRowEnd,
      partial: true
    }, function(code3) {
      self.interrupt = originalInterrupt;
      effects.enter("tableDelimiterRow");
      return atDelimiterRowBreak(code3);
    }, function(code3) {
      self.interrupt = originalInterrupt;
      return nok(code3);
    })(code2);
  }
  function atDelimiterRowBreak(code2) {
    if (code2 === null || markdownLineEnding(code2)) {
      return rowEndDelimiter(code2);
    }
    if (markdownSpace(code2)) {
      effects.enter("whitespace");
      effects.consume(code2);
      return inWhitespaceDelimiter;
    }
    if (code2 === 45) {
      effects.enter("tableDelimiterFiller");
      effects.consume(code2);
      hasDash = true;
      align.push("none");
      return inFillerDelimiter;
    }
    if (code2 === 58) {
      effects.enter("tableDelimiterAlignment");
      effects.consume(code2);
      effects.exit("tableDelimiterAlignment");
      align.push("left");
      return afterLeftAlignment;
    }
    if (code2 === 124) {
      effects.enter("tableCellDivider");
      effects.consume(code2);
      effects.exit("tableCellDivider");
      return atDelimiterRowBreak;
    }
    return nok(code2);
  }
  function inWhitespaceDelimiter(code2) {
    if (markdownSpace(code2)) {
      effects.consume(code2);
      return inWhitespaceDelimiter;
    }
    effects.exit("whitespace");
    return atDelimiterRowBreak(code2);
  }
  function inFillerDelimiter(code2) {
    if (code2 === 45) {
      effects.consume(code2);
      return inFillerDelimiter;
    }
    effects.exit("tableDelimiterFiller");
    if (code2 === 58) {
      effects.enter("tableDelimiterAlignment");
      effects.consume(code2);
      effects.exit("tableDelimiterAlignment");
      align[align.length - 1] = align[align.length - 1] === "left" ? "center" : "right";
      return afterRightAlignment;
    }
    return atDelimiterRowBreak(code2);
  }
  function afterLeftAlignment(code2) {
    if (code2 === 45) {
      effects.enter("tableDelimiterFiller");
      effects.consume(code2);
      hasDash = true;
      return inFillerDelimiter;
    }
    return nok(code2);
  }
  function afterRightAlignment(code2) {
    if (code2 === null || markdownLineEnding(code2)) {
      return rowEndDelimiter(code2);
    }
    if (markdownSpace(code2)) {
      effects.enter("whitespace");
      effects.consume(code2);
      return inWhitespaceDelimiter;
    }
    if (code2 === 124) {
      effects.enter("tableCellDivider");
      effects.consume(code2);
      effects.exit("tableCellDivider");
      return atDelimiterRowBreak;
    }
    return nok(code2);
  }
  function rowEndDelimiter(code2) {
    effects.exit("tableDelimiterRow");
    if (!hasDash || tableHeaderCount !== align.length) {
      return nok(code2);
    }
    if (code2 === null) {
      return tableClose(code2);
    }
    return effects.check(nextPrefixedOrBlank, tableClose, effects.attempt({
      tokenize: tokenizeRowEnd,
      partial: true
    }, factorySpace(effects, bodyStart, "linePrefix", 4), tableClose))(code2);
  }
  function tableClose(code2) {
    effects.exit("table");
    return ok2(code2);
  }
  function bodyStart(code2) {
    effects.enter("tableBody");
    return rowStartBody(code2);
  }
  function rowStartBody(code2) {
    effects.enter("tableRow");
    if (code2 === 124) {
      return cellDividerBody(code2);
    }
    effects.enter("temporaryTableCellContent");
    return inCellContentBody(code2);
  }
  function cellDividerBody(code2) {
    effects.enter("tableCellDivider");
    effects.consume(code2);
    effects.exit("tableCellDivider");
    return cellBreakBody;
  }
  function cellBreakBody(code2) {
    if (code2 === null || markdownLineEnding(code2)) {
      return atRowEndBody(code2);
    }
    if (markdownSpace(code2)) {
      effects.enter("whitespace");
      effects.consume(code2);
      return inWhitespaceBody;
    }
    if (code2 === 124) {
      return cellDividerBody(code2);
    }
    effects.enter("temporaryTableCellContent");
    return inCellContentBody(code2);
  }
  function inWhitespaceBody(code2) {
    if (markdownSpace(code2)) {
      effects.consume(code2);
      return inWhitespaceBody;
    }
    effects.exit("whitespace");
    return cellBreakBody(code2);
  }
  function inCellContentBody(code2) {
    if (code2 === null || code2 === 124 || markdownLineEndingOrSpace(code2)) {
      effects.exit("temporaryTableCellContent");
      return cellBreakBody(code2);
    }
    effects.consume(code2);
    return code2 === 92 ? inCellContentEscapeBody : inCellContentBody;
  }
  function inCellContentEscapeBody(code2) {
    if (code2 === 92 || code2 === 124) {
      effects.consume(code2);
      return inCellContentBody;
    }
    return inCellContentBody(code2);
  }
  function atRowEndBody(code2) {
    effects.exit("tableRow");
    if (code2 === null) {
      return tableBodyClose(code2);
    }
    return effects.check(nextPrefixedOrBlank, tableBodyClose, effects.attempt({
      tokenize: tokenizeRowEnd,
      partial: true
    }, factorySpace(effects, rowStartBody, "linePrefix", 4), tableBodyClose))(code2);
  }
  function tableBodyClose(code2) {
    effects.exit("tableBody");
    return tableClose(code2);
  }
  function tokenizeRowEnd(effects2, ok3, nok2) {
    return start2;
    function start2(code2) {
      effects2.enter("lineEnding");
      effects2.consume(code2);
      effects2.exit("lineEnding");
      return factorySpace(effects2, prefixed, "linePrefix");
    }
    function prefixed(code2) {
      if (self.parser.lazy[self.now().line] || code2 === null || markdownLineEnding(code2)) {
        return nok2(code2);
      }
      const tail = self.events[self.events.length - 1];
      if (!self.parser.constructs.disable.null.includes("codeIndented") && tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4) {
        return nok2(code2);
      }
      self._gfmTableDynamicInterruptHack = true;
      return effects2.check(self.parser.constructs.flow, function(code3) {
        self._gfmTableDynamicInterruptHack = false;
        return nok2(code3);
      }, function(code3) {
        self._gfmTableDynamicInterruptHack = false;
        return ok3(code3);
      })(code2);
    }
  }
}
function tokenizeNextPrefixedOrBlank(effects, ok2, nok) {
  let size = 0;
  return start;
  function start(code2) {
    effects.enter("check");
    effects.consume(code2);
    return whitespace2;
  }
  function whitespace2(code2) {
    if (code2 === -1 || code2 === 32) {
      effects.consume(code2);
      size++;
      return size === 4 ? ok2 : whitespace2;
    }
    if (code2 === null || markdownLineEndingOrSpace(code2)) {
      return ok2(code2);
    }
    return nok(code2);
  }
}
const tasklistCheck = {
  tokenize: tokenizeTasklistCheck
};
const gfmTaskListItem = {
  text: {
    [91]: tasklistCheck
  }
};
function tokenizeTasklistCheck(effects, ok2, nok) {
  const self = this;
  return open;
  function open(code2) {
    if (self.previous !== null || !self._gfmTasklistFirstContentOfListItem) {
      return nok(code2);
    }
    effects.enter("taskListCheck");
    effects.enter("taskListCheckMarker");
    effects.consume(code2);
    effects.exit("taskListCheckMarker");
    return inside;
  }
  function inside(code2) {
    if (markdownLineEndingOrSpace(code2)) {
      effects.enter("taskListCheckValueUnchecked");
      effects.consume(code2);
      effects.exit("taskListCheckValueUnchecked");
      return close;
    }
    if (code2 === 88 || code2 === 120) {
      effects.enter("taskListCheckValueChecked");
      effects.consume(code2);
      effects.exit("taskListCheckValueChecked");
      return close;
    }
    return nok(code2);
  }
  function close(code2) {
    if (code2 === 93) {
      effects.enter("taskListCheckMarker");
      effects.consume(code2);
      effects.exit("taskListCheckMarker");
      effects.exit("taskListCheck");
      return effects.check({
        tokenize: spaceThenNonSpace
      }, ok2, nok);
    }
    return nok(code2);
  }
}
function spaceThenNonSpace(effects, ok2, nok) {
  const self = this;
  return factorySpace(effects, after, "whitespace");
  function after(code2) {
    const tail = self.events[self.events.length - 1];
    return (tail && tail[1].type === "whitespace" || markdownLineEnding(code2)) && code2 !== null ? ok2(code2) : nok(code2);
  }
}
function gfm(options) {
  return combineExtensions([
    gfmAutolinkLiteral,
    gfmFootnote(),
    gfmStrikethrough(options),
    gfmTable,
    gfmTaskListItem
  ]);
}
function ccount(value, character) {
  const source = String(value);
  if (typeof character !== "string") {
    throw new TypeError("Expected character");
  }
  let count = 0;
  let index2 = source.indexOf(character);
  while (index2 !== -1) {
    count++;
    index2 = source.indexOf(character, index2 + character.length);
  }
  return count;
}
function escapeStringRegexp(string2) {
  if (typeof string2 !== "string") {
    throw new TypeError("Expected a string");
  }
  return string2.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
const own = {}.hasOwnProperty;
const findAndReplace = function(tree, find2, replace2, options) {
  let settings;
  let schema;
  if (typeof find2 === "string" || find2 instanceof RegExp) {
    schema = [[find2, replace2]];
    settings = options;
  } else {
    schema = find2;
    settings = replace2;
  }
  if (!settings) {
    settings = {};
  }
  const ignored = convert(settings.ignore || []);
  const pairs = toPairs(schema);
  let pairIndex = -1;
  while (++pairIndex < pairs.length) {
    visitParents$1(tree, "text", visitor);
  }
  return tree;
  function visitor(node, parents) {
    let index2 = -1;
    let grandparent;
    while (++index2 < parents.length) {
      const parent = parents[index2];
      if (ignored(parent, grandparent ? grandparent.children.indexOf(parent) : void 0, grandparent)) {
        return;
      }
      grandparent = parent;
    }
    if (grandparent) {
      return handler(node, parents);
    }
  }
  function handler(node, parents) {
    const parent = parents[parents.length - 1];
    const find3 = pairs[pairIndex][0];
    const replace3 = pairs[pairIndex][1];
    let start = 0;
    const index2 = parent.children.indexOf(node);
    let nodes = [];
    let position2;
    find3.lastIndex = 0;
    let match = find3.exec(node.value);
    while (match) {
      position2 = match.index;
      const matchObject = {
        index: match.index,
        input: match.input,
        stack: [...parents, node]
      };
      let value = replace3(...match, matchObject);
      if (typeof value === "string") {
        value = value.length > 0 ? { type: "text", value } : void 0;
      }
      if (value === false) {
        position2 = void 0;
      } else {
        if (start !== position2) {
          nodes.push({
            type: "text",
            value: node.value.slice(start, position2)
          });
        }
        if (Array.isArray(value)) {
          nodes.push(...value);
        } else if (value) {
          nodes.push(value);
        }
        start = position2 + match[0].length;
      }
      if (!find3.global) {
        break;
      }
      match = find3.exec(node.value);
    }
    if (position2 === void 0) {
      nodes = [node];
    } else {
      if (start < node.value.length) {
        nodes.push({ type: "text", value: node.value.slice(start) });
      }
      parent.children.splice(index2, 1, ...nodes);
    }
    return index2 + nodes.length;
  }
};
function toPairs(schema) {
  const result = [];
  if (typeof schema !== "object") {
    throw new TypeError("Expected array or object as schema");
  }
  if (Array.isArray(schema)) {
    let index2 = -1;
    while (++index2 < schema.length) {
      result.push([
        toExpression(schema[index2][0]),
        toFunction(schema[index2][1])
      ]);
    }
  } else {
    let key;
    for (key in schema) {
      if (own.call(schema, key)) {
        result.push([toExpression(key), toFunction(schema[key])]);
      }
    }
  }
  return result;
}
function toExpression(find2) {
  return typeof find2 === "string" ? new RegExp(escapeStringRegexp(find2), "g") : find2;
}
function toFunction(replace2) {
  return typeof replace2 === "function" ? replace2 : () => replace2;
}
const inConstruct = "phrasing";
const notInConstruct = ["autolink", "link", "image", "label"];
const gfmAutolinkLiteralFromMarkdown = {
  transforms: [transformGfmAutolinkLiterals],
  enter: {
    literalAutolink: enterLiteralAutolink,
    literalAutolinkEmail: enterLiteralAutolinkValue,
    literalAutolinkHttp: enterLiteralAutolinkValue,
    literalAutolinkWww: enterLiteralAutolinkValue
  },
  exit: {
    literalAutolink: exitLiteralAutolink,
    literalAutolinkEmail: exitLiteralAutolinkEmail,
    literalAutolinkHttp: exitLiteralAutolinkHttp,
    literalAutolinkWww: exitLiteralAutolinkWww
  }
};
const gfmAutolinkLiteralToMarkdown = {
  unsafe: [
    {
      character: "@",
      before: "[+\\-.\\w]",
      after: "[\\-.\\w]",
      inConstruct,
      notInConstruct
    },
    {
      character: ".",
      before: "[Ww]",
      after: "[\\-.\\w]",
      inConstruct,
      notInConstruct
    },
    { character: ":", before: "[ps]", after: "\\/", inConstruct, notInConstruct }
  ]
};
function enterLiteralAutolink(token) {
  this.enter({ type: "link", title: null, url: "", children: [] }, token);
}
function enterLiteralAutolinkValue(token) {
  this.config.enter.autolinkProtocol.call(this, token);
}
function exitLiteralAutolinkHttp(token) {
  this.config.exit.autolinkProtocol.call(this, token);
}
function exitLiteralAutolinkWww(token) {
  this.config.exit.data.call(this, token);
  const node = this.stack[this.stack.length - 1];
  node.url = "http://" + this.sliceSerialize(token);
}
function exitLiteralAutolinkEmail(token) {
  this.config.exit.autolinkEmail.call(this, token);
}
function exitLiteralAutolink(token) {
  this.exit(token);
}
function transformGfmAutolinkLiterals(tree) {
  findAndReplace(tree, [
    [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, findUrl],
    [/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g, findEmail]
  ], { ignore: ["link", "linkReference"] });
}
function findUrl(_2, protocol, domain2, path2, match) {
  let prefix = "";
  if (!previous(match)) {
    return false;
  }
  if (/^w/i.test(protocol)) {
    domain2 = protocol + domain2;
    protocol = "";
    prefix = "http://";
  }
  if (!isCorrectDomain(domain2)) {
    return false;
  }
  const parts = splitUrl(domain2 + path2);
  if (!parts[0])
    return false;
  const result = {
    type: "link",
    title: null,
    url: prefix + protocol + parts[0],
    children: [{ type: "text", value: protocol + parts[0] }]
  };
  if (parts[1]) {
    return [result, { type: "text", value: parts[1] }];
  }
  return result;
}
function findEmail(_2, atext, label, match) {
  if (!previous(match, true) || /[_-\d]$/.test(label)) {
    return false;
  }
  return {
    type: "link",
    title: null,
    url: "mailto:" + atext + "@" + label,
    children: [{ type: "text", value: atext + "@" + label }]
  };
}
function isCorrectDomain(domain2) {
  const parts = domain2.split(".");
  if (parts.length < 2 || parts[parts.length - 1] && (/_/.test(parts[parts.length - 1]) || !/[a-zA-Z\d]/.test(parts[parts.length - 1])) || parts[parts.length - 2] && (/_/.test(parts[parts.length - 2]) || !/[a-zA-Z\d]/.test(parts[parts.length - 2]))) {
    return false;
  }
  return true;
}
function splitUrl(url) {
  const trailExec = /[!"&'),.:;<>?\]}]+$/.exec(url);
  let closingParenIndex;
  let openingParens;
  let closingParens;
  let trail;
  if (trailExec) {
    url = url.slice(0, trailExec.index);
    trail = trailExec[0];
    closingParenIndex = trail.indexOf(")");
    openingParens = ccount(url, "(");
    closingParens = ccount(url, ")");
    while (closingParenIndex !== -1 && openingParens > closingParens) {
      url += trail.slice(0, closingParenIndex + 1);
      trail = trail.slice(closingParenIndex + 1);
      closingParenIndex = trail.indexOf(")");
      closingParens++;
    }
  }
  return [url, trail];
}
function previous(match, email) {
  const code2 = match.input.charCodeAt(match.index - 1);
  return (match.index === 0 || unicodeWhitespace(code2) || unicodePunctuation(code2)) && (!email || code2 !== 47);
}
function association(node) {
  if (node.label || !node.identifier) {
    return node.label || "";
  }
  return decodeString(node.identifier);
}
function track(options_) {
  const options = options_ || {};
  const now = options.now || {};
  let lineShift = options.lineShift || 0;
  let line = now.line || 1;
  let column = now.column || 1;
  return { move, current, shift };
  function current() {
    return { now: { line, column }, lineShift };
  }
  function shift(value) {
    lineShift += value;
  }
  function move(value = "") {
    const chunks = value.split(/\r?\n|\r/g);
    const tail = chunks[chunks.length - 1];
    line += chunks.length - 1;
    column = chunks.length === 1 ? column + tail.length : 1 + tail.length + lineShift;
    return value;
  }
}
function containerFlow(parent, context, safeOptions) {
  const indexStack = context.indexStack;
  const children = parent.children || [];
  const tracker = track(safeOptions);
  const results = [];
  let index2 = -1;
  indexStack.push(-1);
  while (++index2 < children.length) {
    const child = children[index2];
    indexStack[indexStack.length - 1] = index2;
    results.push(tracker.move(context.handle(child, parent, context, __spreadValues({
      before: "\n",
      after: "\n"
    }, tracker.current()))));
    if (child.type !== "list") {
      context.bulletLastUsed = void 0;
    }
    if (index2 < children.length - 1) {
      results.push(tracker.move(between(child, children[index2 + 1])));
    }
  }
  indexStack.pop();
  return results.join("");
  function between(left, right) {
    let index3 = context.join.length;
    while (index3--) {
      const result = context.join[index3](left, right, parent, context);
      if (result === true || result === 1) {
        break;
      }
      if (typeof result === "number") {
        return "\n".repeat(1 + result);
      }
      if (result === false) {
        return "\n\n<!---->\n\n";
      }
    }
    return "\n\n";
  }
}
const eol = /\r?\n|\r/g;
function indentLines(value, map) {
  const result = [];
  let start = 0;
  let line = 0;
  let match;
  while (match = eol.exec(value)) {
    one2(value.slice(start, match.index));
    result.push(match[0]);
    start = match.index + match[0].length;
    line++;
  }
  one2(value.slice(start));
  return result.join("");
  function one2(value2) {
    result.push(map(value2, line, !value2));
  }
}
function patternCompile(pattern) {
  if (!pattern._compiled) {
    const before = (pattern.atBreak ? "[\\r\\n][\\t ]*" : "") + (pattern.before ? "(?:" + pattern.before + ")" : "");
    pattern._compiled = new RegExp((before ? "(" + before + ")" : "") + (/[|\\{}()[\]^$+*?.-]/.test(pattern.character) ? "\\" : "") + pattern.character + (pattern.after ? "(?:" + pattern.after + ")" : ""), "g");
  }
  return pattern._compiled;
}
function patternInScope(stack, pattern) {
  return listInScope(stack, pattern.inConstruct, true) && !listInScope(stack, pattern.notInConstruct, false);
}
function listInScope(stack, list2, none) {
  if (!list2) {
    return none;
  }
  if (typeof list2 === "string") {
    list2 = [list2];
  }
  let index2 = -1;
  while (++index2 < list2.length) {
    if (stack.includes(list2[index2])) {
      return true;
    }
  }
  return false;
}
function safe(context, input, config) {
  const value = (config.before || "") + (input || "") + (config.after || "");
  const positions = [];
  const result = [];
  const infos = {};
  let index2 = -1;
  while (++index2 < context.unsafe.length) {
    const pattern = context.unsafe[index2];
    if (!patternInScope(context.stack, pattern)) {
      continue;
    }
    const expression = patternCompile(pattern);
    let match;
    while (match = expression.exec(value)) {
      const before = "before" in pattern || Boolean(pattern.atBreak);
      const after = "after" in pattern;
      const position2 = match.index + (before ? match[1].length : 0);
      if (positions.includes(position2)) {
        if (infos[position2].before && !before) {
          infos[position2].before = false;
        }
        if (infos[position2].after && !after) {
          infos[position2].after = false;
        }
      } else {
        positions.push(position2);
        infos[position2] = { before, after };
      }
    }
  }
  positions.sort(numerical);
  let start = config.before ? config.before.length : 0;
  const end = value.length - (config.after ? config.after.length : 0);
  index2 = -1;
  while (++index2 < positions.length) {
    const position2 = positions[index2];
    if (position2 < start || position2 >= end) {
      continue;
    }
    if (position2 + 1 < end && positions[index2 + 1] === position2 + 1 && infos[position2].after && !infos[position2 + 1].before && !infos[position2 + 1].after || positions[index2 - 1] === position2 - 1 && infos[position2].before && !infos[position2 - 1].before && !infos[position2 - 1].after) {
      continue;
    }
    if (start !== position2) {
      result.push(escapeBackslashes(value.slice(start, position2), "\\"));
    }
    start = position2;
    if (/[!-/:-@[-`{-~]/.test(value.charAt(position2)) && (!config.encode || !config.encode.includes(value.charAt(position2)))) {
      result.push("\\");
    } else {
      result.push("&#x" + value.charCodeAt(position2).toString(16).toUpperCase() + ";");
      start++;
    }
  }
  result.push(escapeBackslashes(value.slice(start, end), config.after));
  return result.join("");
}
function numerical(a2, b2) {
  return a2 - b2;
}
function escapeBackslashes(value, after) {
  const expression = /\\(?=[!-/:-@[-`{-~])/g;
  const positions = [];
  const results = [];
  const whole = value + after;
  let index2 = -1;
  let start = 0;
  let match;
  while (match = expression.exec(whole)) {
    positions.push(match.index);
  }
  while (++index2 < positions.length) {
    if (start !== positions[index2]) {
      results.push(value.slice(start, positions[index2]));
    }
    results.push("\\");
    start = positions[index2];
  }
  results.push(value.slice(start));
  return results.join("");
}
function gfmFootnoteFromMarkdown() {
  return {
    enter: {
      gfmFootnoteDefinition: enterFootnoteDefinition,
      gfmFootnoteDefinitionLabelString: enterFootnoteDefinitionLabelString,
      gfmFootnoteCall: enterFootnoteCall,
      gfmFootnoteCallString: enterFootnoteCallString
    },
    exit: {
      gfmFootnoteDefinition: exitFootnoteDefinition,
      gfmFootnoteDefinitionLabelString: exitFootnoteDefinitionLabelString,
      gfmFootnoteCall: exitFootnoteCall,
      gfmFootnoteCallString: exitFootnoteCallString
    }
  };
  function enterFootnoteDefinition(token) {
    this.enter({ type: "footnoteDefinition", identifier: "", label: "", children: [] }, token);
  }
  function enterFootnoteDefinitionLabelString() {
    this.buffer();
  }
  function exitFootnoteDefinitionLabelString(token) {
    const label = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.label = label;
    node.identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
  }
  function exitFootnoteDefinition(token) {
    this.exit(token);
  }
  function enterFootnoteCall(token) {
    this.enter({ type: "footnoteReference", identifier: "", label: "" }, token);
  }
  function enterFootnoteCallString() {
    this.buffer();
  }
  function exitFootnoteCallString(token) {
    const label = this.resume();
    const node = this.stack[this.stack.length - 1];
    node.label = label;
    node.identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
  }
  function exitFootnoteCall(token) {
    this.exit(token);
  }
}
function gfmFootnoteToMarkdown() {
  footnoteReference2.peek = footnoteReferencePeek;
  return {
    unsafe: [{ character: "[", inConstruct: ["phrasing", "label", "reference"] }],
    handlers: { footnoteDefinition, footnoteReference: footnoteReference2 }
  };
  function footnoteReference2(node, _2, context, safeOptions) {
    const tracker = track(safeOptions);
    let value = tracker.move("[^");
    const exit2 = context.enter("footnoteReference");
    const subexit = context.enter("reference");
    value += tracker.move(safe(context, association(node), __spreadProps(__spreadValues({}, tracker.current()), {
      before: value,
      after: "]"
    })));
    subexit();
    exit2();
    value += tracker.move("]");
    return value;
  }
  function footnoteReferencePeek() {
    return "[";
  }
  function footnoteDefinition(node, _2, context, safeOptions) {
    const tracker = track(safeOptions);
    let value = tracker.move("[^");
    const exit2 = context.enter("footnoteDefinition");
    const subexit = context.enter("label");
    value += tracker.move(safe(context, association(node), __spreadProps(__spreadValues({}, tracker.current()), {
      before: value,
      after: "]"
    })));
    subexit();
    value += tracker.move("]:" + (node.children && node.children.length > 0 ? " " : ""));
    tracker.shift(4);
    value += tracker.move(indentLines(containerFlow(node, context, tracker.current()), map));
    exit2();
    return value;
    function map(line, index2, blank) {
      if (index2) {
        return (blank ? "" : "    ") + line;
      }
      return line;
    }
  }
}
function containerPhrasing(parent, context, safeOptions) {
  const indexStack = context.indexStack;
  const children = parent.children || [];
  const results = [];
  let index2 = -1;
  let before = safeOptions.before;
  indexStack.push(-1);
  let tracker = track(safeOptions);
  while (++index2 < children.length) {
    const child = children[index2];
    let after;
    indexStack[indexStack.length - 1] = index2;
    if (index2 + 1 < children.length) {
      let handle = context.handle.handlers[children[index2 + 1].type];
      if (handle && handle.peek)
        handle = handle.peek;
      after = handle ? handle(children[index2 + 1], parent, context, __spreadValues({
        before: "",
        after: ""
      }, tracker.current())).charAt(0) : "";
    } else {
      after = safeOptions.after;
    }
    if (results.length > 0 && (before === "\r" || before === "\n") && child.type === "html") {
      results[results.length - 1] = results[results.length - 1].replace(/(\r?\n|\r)$/, " ");
      before = " ";
      tracker = track(safeOptions);
      tracker.move(results.join(""));
    }
    results.push(tracker.move(context.handle(child, parent, context, __spreadProps(__spreadValues({}, tracker.current()), {
      before,
      after
    }))));
    before = results[results.length - 1].slice(-1);
  }
  indexStack.pop();
  return results.join("");
}
const gfmStrikethroughFromMarkdown = {
  canContainEols: ["delete"],
  enter: { strikethrough: enterStrikethrough },
  exit: { strikethrough: exitStrikethrough }
};
const gfmStrikethroughToMarkdown = {
  unsafe: [{ character: "~", inConstruct: "phrasing" }],
  handlers: { delete: handleDelete }
};
handleDelete.peek = peekDelete;
function enterStrikethrough(token) {
  this.enter({ type: "delete", children: [] }, token);
}
function exitStrikethrough(token) {
  this.exit(token);
}
function handleDelete(node, _2, context, safeOptions) {
  const tracker = track(safeOptions);
  const exit2 = context.enter("emphasis");
  let value = tracker.move("~~");
  value += containerPhrasing(node, context, __spreadProps(__spreadValues({}, tracker.current()), {
    before: value,
    after: "~"
  }));
  value += tracker.move("~~");
  exit2();
  return value;
}
function peekDelete() {
  return "~";
}
inlineCode.peek = inlineCodePeek;
function inlineCode(node, _2, context) {
  let value = node.value || "";
  let sequence = "`";
  let index2 = -1;
  while (new RegExp("(^|[^`])" + sequence + "([^`]|$)").test(value)) {
    sequence += "`";
  }
  if (/[^ \r\n]/.test(value) && (/^[ \r\n]/.test(value) && /[ \r\n]$/.test(value) || /^`|`$/.test(value))) {
    value = " " + value + " ";
  }
  while (++index2 < context.unsafe.length) {
    const pattern = context.unsafe[index2];
    const expression = patternCompile(pattern);
    let match;
    if (!pattern.atBreak)
      continue;
    while (match = expression.exec(value)) {
      let position2 = match.index;
      if (value.charCodeAt(position2) === 10 && value.charCodeAt(position2 - 1) === 13) {
        position2--;
      }
      value = value.slice(0, position2) + " " + value.slice(match.index + 1);
    }
  }
  return sequence + value + sequence;
}
function inlineCodePeek() {
  return "`";
}
function markdownTable(table2, options = {}) {
  const align = (options.align || []).concat();
  const stringLength = options.stringLength || defaultStringLength;
  const alignments = [];
  const cellMatrix = [];
  const sizeMatrix = [];
  const longestCellByColumn = [];
  let mostCellsPerRow = 0;
  let rowIndex = -1;
  while (++rowIndex < table2.length) {
    const row2 = [];
    const sizes2 = [];
    let columnIndex2 = -1;
    if (table2[rowIndex].length > mostCellsPerRow) {
      mostCellsPerRow = table2[rowIndex].length;
    }
    while (++columnIndex2 < table2[rowIndex].length) {
      const cell = serialize(table2[rowIndex][columnIndex2]);
      if (options.alignDelimiters !== false) {
        const size = stringLength(cell);
        sizes2[columnIndex2] = size;
        if (longestCellByColumn[columnIndex2] === void 0 || size > longestCellByColumn[columnIndex2]) {
          longestCellByColumn[columnIndex2] = size;
        }
      }
      row2.push(cell);
    }
    cellMatrix[rowIndex] = row2;
    sizeMatrix[rowIndex] = sizes2;
  }
  let columnIndex = -1;
  if (typeof align === "object" && "length" in align) {
    while (++columnIndex < mostCellsPerRow) {
      alignments[columnIndex] = toAlignment(align[columnIndex]);
    }
  } else {
    const code2 = toAlignment(align);
    while (++columnIndex < mostCellsPerRow) {
      alignments[columnIndex] = code2;
    }
  }
  columnIndex = -1;
  const row = [];
  const sizes = [];
  while (++columnIndex < mostCellsPerRow) {
    const code2 = alignments[columnIndex];
    let before = "";
    let after = "";
    if (code2 === 99) {
      before = ":";
      after = ":";
    } else if (code2 === 108) {
      before = ":";
    } else if (code2 === 114) {
      after = ":";
    }
    let size = options.alignDelimiters === false ? 1 : Math.max(1, longestCellByColumn[columnIndex] - before.length - after.length);
    const cell = before + "-".repeat(size) + after;
    if (options.alignDelimiters !== false) {
      size = before.length + size + after.length;
      if (size > longestCellByColumn[columnIndex]) {
        longestCellByColumn[columnIndex] = size;
      }
      sizes[columnIndex] = size;
    }
    row[columnIndex] = cell;
  }
  cellMatrix.splice(1, 0, row);
  sizeMatrix.splice(1, 0, sizes);
  rowIndex = -1;
  const lines = [];
  while (++rowIndex < cellMatrix.length) {
    const row2 = cellMatrix[rowIndex];
    const sizes2 = sizeMatrix[rowIndex];
    columnIndex = -1;
    const line = [];
    while (++columnIndex < mostCellsPerRow) {
      const cell = row2[columnIndex] || "";
      let before = "";
      let after = "";
      if (options.alignDelimiters !== false) {
        const size = longestCellByColumn[columnIndex] - (sizes2[columnIndex] || 0);
        const code2 = alignments[columnIndex];
        if (code2 === 114) {
          before = " ".repeat(size);
        } else if (code2 === 99) {
          if (size % 2) {
            before = " ".repeat(size / 2 + 0.5);
            after = " ".repeat(size / 2 - 0.5);
          } else {
            before = " ".repeat(size / 2);
            after = before;
          }
        } else {
          after = " ".repeat(size);
        }
      }
      if (options.delimiterStart !== false && !columnIndex) {
        line.push("|");
      }
      if (options.padding !== false && !(options.alignDelimiters === false && cell === "") && (options.delimiterStart !== false || columnIndex)) {
        line.push(" ");
      }
      if (options.alignDelimiters !== false) {
        line.push(before);
      }
      line.push(cell);
      if (options.alignDelimiters !== false) {
        line.push(after);
      }
      if (options.padding !== false) {
        line.push(" ");
      }
      if (options.delimiterEnd !== false || columnIndex !== mostCellsPerRow - 1) {
        line.push("|");
      }
    }
    lines.push(options.delimiterEnd === false ? line.join("").replace(/ +$/, "") : line.join(""));
  }
  return lines.join("\n");
}
function serialize(value) {
  return value === null || value === void 0 ? "" : String(value);
}
function defaultStringLength(value) {
  return value.length;
}
function toAlignment(value) {
  const code2 = typeof value === "string" ? value.codePointAt(0) : 0;
  return code2 === 67 || code2 === 99 ? 99 : code2 === 76 || code2 === 108 ? 108 : code2 === 82 || code2 === 114 ? 114 : 0;
}
const gfmTableFromMarkdown = {
  enter: {
    table: enterTable,
    tableData: enterCell,
    tableHeader: enterCell,
    tableRow: enterRow
  },
  exit: {
    codeText: exitCodeText,
    table: exitTable,
    tableData: exit,
    tableHeader: exit,
    tableRow: exit
  }
};
function enterTable(token) {
  const align = token._align;
  this.enter({
    type: "table",
    align: align.map((d2) => d2 === "none" ? null : d2),
    children: []
  }, token);
  this.setData("inTable", true);
}
function exitTable(token) {
  this.exit(token);
  this.setData("inTable");
}
function enterRow(token) {
  this.enter({ type: "tableRow", children: [] }, token);
}
function exit(token) {
  this.exit(token);
}
function enterCell(token) {
  this.enter({ type: "tableCell", children: [] }, token);
}
function exitCodeText(token) {
  let value = this.resume();
  if (this.getData("inTable")) {
    value = value.replace(/\\([\\|])/g, replace);
  }
  const node = this.stack[this.stack.length - 1];
  node.value = value;
  this.exit(token);
}
function replace($0, $1) {
  return $1 === "|" ? $1 : $0;
}
function gfmTableToMarkdown(options) {
  const settings = options || {};
  const padding = settings.tableCellPadding;
  const alignDelimiters = settings.tablePipeAlign;
  const stringLength = settings.stringLength;
  const around = padding ? " " : "|";
  return {
    unsafe: [
      { character: "\r", inConstruct: "tableCell" },
      { character: "\n", inConstruct: "tableCell" },
      { atBreak: true, character: "|", after: "[	 :-]" },
      { character: "|", inConstruct: "tableCell" },
      { atBreak: true, character: ":", after: "-" },
      { atBreak: true, character: "-", after: "[:|-]" }
    ],
    handlers: {
      table: handleTable,
      tableRow: handleTableRow,
      tableCell: handleTableCell,
      inlineCode: inlineCodeWithTable
    }
  };
  function handleTable(node, _2, context, safeOptions) {
    return serializeData(handleTableAsData(node, context, safeOptions), node.align);
  }
  function handleTableRow(node, _2, context, safeOptions) {
    const row = handleTableRowAsData(node, context, safeOptions);
    const value = serializeData([row]);
    return value.slice(0, value.indexOf("\n"));
  }
  function handleTableCell(node, _2, context, safeOptions) {
    const exit2 = context.enter("tableCell");
    const subexit = context.enter("phrasing");
    const value = containerPhrasing(node, context, __spreadProps(__spreadValues({}, safeOptions), {
      before: around,
      after: around
    }));
    subexit();
    exit2();
    return value;
  }
  function serializeData(matrix, align) {
    return markdownTable(matrix, {
      align,
      alignDelimiters,
      padding,
      stringLength
    });
  }
  function handleTableAsData(node, context, safeOptions) {
    const children = node.children;
    let index2 = -1;
    const result = [];
    const subexit = context.enter("table");
    while (++index2 < children.length) {
      result[index2] = handleTableRowAsData(children[index2], context, safeOptions);
    }
    subexit();
    return result;
  }
  function handleTableRowAsData(node, context, safeOptions) {
    const children = node.children;
    let index2 = -1;
    const result = [];
    const subexit = context.enter("tableRow");
    while (++index2 < children.length) {
      result[index2] = handleTableCell(children[index2], node, context, safeOptions);
    }
    subexit();
    return result;
  }
  function inlineCodeWithTable(node, parent, context) {
    let value = inlineCode(node, parent, context);
    if (context.stack.includes("tableCell")) {
      value = value.replace(/\|/g, "\\$&");
    }
    return value;
  }
}
function checkBullet(context) {
  const marker = context.options.bullet || "*";
  if (marker !== "*" && marker !== "+" && marker !== "-") {
    throw new Error("Cannot serialize items with `" + marker + "` for `options.bullet`, expected `*`, `+`, or `-`");
  }
  return marker;
}
function checkListItemIndent(context) {
  const style = context.options.listItemIndent || "tab";
  if (style === 1 || style === "1") {
    return "one";
  }
  if (style !== "tab" && style !== "one" && style !== "mixed") {
    throw new Error("Cannot serialize items with `" + style + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");
  }
  return style;
}
function listItem(node, parent, context, safeOptions) {
  const listItemIndent = checkListItemIndent(context);
  let bullet = context.bulletCurrent || checkBullet(context);
  if (parent && parent.type === "list" && parent.ordered) {
    bullet = (typeof parent.start === "number" && parent.start > -1 ? parent.start : 1) + (context.options.incrementListMarker === false ? 0 : parent.children.indexOf(node)) + bullet;
  }
  let size = bullet.length + 1;
  if (listItemIndent === "tab" || listItemIndent === "mixed" && (parent && parent.type === "list" && parent.spread || node.spread)) {
    size = Math.ceil(size / 4) * 4;
  }
  const tracker = track(safeOptions);
  tracker.move(bullet + " ".repeat(size - bullet.length));
  tracker.shift(size);
  const exit2 = context.enter("listItem");
  const value = indentLines(containerFlow(node, context, tracker.current()), map);
  exit2();
  return value;
  function map(line, index2, blank) {
    if (index2) {
      return (blank ? "" : " ".repeat(size)) + line;
    }
    return (blank ? bullet : bullet + " ".repeat(size - bullet.length)) + line;
  }
}
const gfmTaskListItemFromMarkdown = {
  exit: {
    taskListCheckValueChecked: exitCheck,
    taskListCheckValueUnchecked: exitCheck,
    paragraph: exitParagraphWithTaskListItem
  }
};
const gfmTaskListItemToMarkdown = {
  unsafe: [{ atBreak: true, character: "-", after: "[:|-]" }],
  handlers: { listItem: listItemWithTaskListItem }
};
function exitCheck(token) {
  const node = this.stack[this.stack.length - 2];
  node.checked = token.type === "taskListCheckValueChecked";
}
function exitParagraphWithTaskListItem(token) {
  const parent = this.stack[this.stack.length - 2];
  const node = this.stack[this.stack.length - 1];
  const siblings = parent.children;
  const head = node.children[0];
  let index2 = -1;
  let firstParaghraph;
  if (parent && parent.type === "listItem" && typeof parent.checked === "boolean" && head && head.type === "text") {
    while (++index2 < siblings.length) {
      const sibling = siblings[index2];
      if (sibling.type === "paragraph") {
        firstParaghraph = sibling;
        break;
      }
    }
    if (firstParaghraph === node) {
      head.value = head.value.slice(1);
      if (head.value.length === 0) {
        node.children.shift();
      } else if (node.position && head.position && typeof head.position.start.offset === "number") {
        head.position.start.column++;
        head.position.start.offset++;
        node.position.start = Object.assign({}, head.position.start);
      }
    }
  }
  this.exit(token);
}
function listItemWithTaskListItem(node, parent, context, safeOptions) {
  const head = node.children[0];
  const checkable = typeof node.checked === "boolean" && head && head.type === "paragraph";
  const checkbox = "[" + (node.checked ? "x" : " ") + "] ";
  const tracker = track(safeOptions);
  if (checkable) {
    tracker.move(checkbox);
  }
  let value = listItem(node, parent, context, __spreadValues(__spreadValues({}, safeOptions), tracker.current()));
  if (checkable) {
    value = value.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, check);
  }
  return value;
  function check($0) {
    return $0 + checkbox;
  }
}
function gfmFromMarkdown() {
  return [
    gfmAutolinkLiteralFromMarkdown,
    gfmFootnoteFromMarkdown(),
    gfmStrikethroughFromMarkdown,
    gfmTableFromMarkdown,
    gfmTaskListItemFromMarkdown
  ];
}
function gfmToMarkdown(options) {
  return {
    extensions: [
      gfmAutolinkLiteralToMarkdown,
      gfmFootnoteToMarkdown(),
      gfmStrikethroughToMarkdown,
      gfmTableToMarkdown(options),
      gfmTaskListItemToMarkdown
    ]
  };
}
function remarkGfm(options = {}) {
  const data = this.data();
  add("micromarkExtensions", gfm(options));
  add("fromMarkdownExtensions", gfmFromMarkdown());
  add("toMarkdownExtensions", gfmToMarkdown(options));
  function add(field, value) {
    const list2 = data[field] ? data[field] : data[field] = [];
    list2.push(value);
  }
}
const Container = styled.div`
    display: flex;
    width: ${(props) => props.sidebar ? "70vw" : "100vw"};
`;
const AppMainNoteEdit = styled.div`
    display: flex;
    flex-direction: column;
    width: ${(props) => props.sidebar ? "35vw" : "50vw"};
    padding: 25px;

    input {
        font-size: 32px;
        margin-bottom: 25px;
        color: ${(props) => props.theme.colors.text};
        background-color: ${(props) => props.theme.colors.background};
    }

    textarea {
        height: calc(100vh - 78px);
        overflow-y: scroll;
        padding-bottom: 100px;
        color: ${(props) => props.theme.colors.text};
        background-color: ${(props) => props.theme.colors.background};
    }     
`;
const AppMainNotePreview = styled.div`
    width: ${(props) => props.sidebar ? "35vw" : "50vw"};
    padding: 25px;
    padding-top: 5px;
`;
const NotNoteActive = styled.div`
    display: flex;
    flex-direction: column;
    width: ${(props) => props.sidebar ? "70vw" : "100vw"};
    justify-content: center;
    align-items: center;
    
    h1 {
        color: ${(props) => props.theme.colors.text};
    }
`;
function Main({
  sidebar,
  activeNote,
  onUpdateNote
}) {
  const onEditField = (field, value) => {
    onUpdateNote(__spreadProps(__spreadValues({}, activeNote), {
      [field]: value,
      lastModified: Date.now()
    }));
  };
  return activeNote ? /* @__PURE__ */ jsxs(Container, {
    sidebar,
    children: [/* @__PURE__ */ jsxs(AppMainNoteEdit, {
      sidebar,
      children: [/* @__PURE__ */ jsx("input", {
        type: "text",
        id: "title",
        placeholder: "T\xEDtulo da Nota",
        value: activeNote.title,
        onChange: (e2) => onEditField("title", e2.target.value),
        autoFocus: true
      }), /* @__PURE__ */ jsx("textarea", {
        id: "body",
        placeholder: "Escreva sua nota aqui...",
        value: activeNote.body,
        onChange: (e2) => onEditField("body", e2.target.value)
      })]
    }), /* @__PURE__ */ jsxs(AppMainNotePreview, {
      sidebar,
      children: [/* @__PURE__ */ jsx("h1", {
        className: "preview-title",
        children: activeNote.title
      }), /* @__PURE__ */ jsx(ReactMarkdown, {
        remarkPlugins: [remarkGfm],
        className: "markdown-preview",
        children: activeNote.body
      })]
    })]
  }) : /* @__PURE__ */ jsx(NotNoteActive, {
    sidebar,
    children: /* @__PURE__ */ jsx("h1", {
      children: "Nenhuma nota selecionada..."
    })
  });
}
var GlobalStyle = We`

    * {
        box-sizing: border-box;
    }

    body,
    .App {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
            Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        font-size: 16px;
        background: ${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors.text};

    }

    /* width */
    ::-webkit-scrollbar {
        width: 10px;
        
    }
    /* Track */
    ::-webkit-scrollbar-track {
        background: ${(props) => props.theme.colors.background};
        border: 1px solid ${(props) => props.theme.colors.secundary};
        border-right: 0;
        border-top: 0;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: ${(props) => props.theme.colors.secundary};
        border-radius: 5px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #BFBFBF;
    }


    button {
        background: none;
        border: 0;
        margin: 0;
        padding: 0;
        font-size: inherit;
        font-family: inherit;
        cursor: pointer;
        color: #aa4465;
    }
    button:hover {
        color: #7B0828;
    }

    .App {
        display: block;
    }
`;
function App() {
  const [theme, setTheme] = react.exports.useState(localStorage.theme ? JSON.parse(localStorage.theme) : light);
  const [notes, setNotes] = react.exports.useState(localStorage.notes ? JSON.parse(localStorage.notes) : []);
  const [activeNote, setActiveNote] = react.exports.useState(false);
  const [sidebar, setSidebar] = react.exports.useState(true);
  react.exports.useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  react.exports.useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);
  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };
  const onAddNote = () => {
    const newNote = {
      id: uuid_1(),
      title: "Nota Indefinida",
      body: "",
      lastModified: Date.now()
    };
    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id);
  };
  const onDeleteNote = (noteId) => {
    setNotes(notes.filter(({
      id: id2
    }) => id2 !== noteId));
  };
  const onUpdateNote = (updatedNote) => {
    const updatedNotesArr = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }
      return note;
    });
    setNotes(updatedNotesArr);
  };
  const getActiveNote = () => {
    return notes.find(({
      id: id2
    }) => id2 === activeNote);
  };
  return /* @__PURE__ */ jsx(Fe, {
    theme,
    children: /* @__PURE__ */ jsxs("div", {
      className: "App",
      children: [/* @__PURE__ */ jsx(GlobalStyle, {}), /* @__PURE__ */ jsx(Header, {
        sidebar,
        setSidebar,
        toggleTheme
      }), /* @__PURE__ */ jsxs("div", {
        style: {
          display: "flex",
          width: "100vw"
        },
        children: [/* @__PURE__ */ jsx(Sidebar, {
          sidebar,
          notes,
          onAddNote,
          onDeleteNote,
          activeNote,
          setActiveNote
        }), /* @__PURE__ */ jsx(Main, {
          sidebar,
          activeNote: getActiveNote(),
          onUpdateNote
        })]
      })]
    })
  });
}
client.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsx(React.StrictMode, {
  children: /* @__PURE__ */ jsx(App, {})
}));
