var Os = Object.defineProperty;
var As = (e, t, r) => t in e ? Os(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Kr = (e, t, r) => (As(e, typeof t != "symbol" ? t + "" : t, r), r);
import * as Yr from "react";
import xt, { useEffect as Ne, useRef as Qe, useState as Ce, createContext as Rs, useContext as Ts, useCallback as Ns, useImperativeHandle as Is, useLayoutEffect as Fs, PureComponent as zs } from "react";
import { createPortal as an } from "react-dom";
var ft = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Cn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ln = { exports: {} }, Qt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ti;
function Ds() {
  return ti || (ti = 1, process.env.NODE_ENV !== "production" && function() {
    var e = xt, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), u = Symbol.for("react.offscreen"), b = Symbol.iterator, h = "@@iterator";
    function v(A) {
      if (A === null || typeof A != "object")
        return null;
      var K = b && A[b] || A[h];
      return typeof K == "function" ? K : null;
    }
    var y = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(A) {
      {
        for (var K = arguments.length, ie = new Array(K > 1 ? K - 1 : 0), ye = 1; ye < K; ye++)
          ie[ye - 1] = arguments[ye];
        x("error", A, ie);
      }
    }
    function x(A, K, ie) {
      {
        var ye = y.ReactDebugCurrentFrame, Oe = ye.getStackAddendum();
        Oe !== "" && (K += "%s", ie = ie.concat([Oe]));
        var ke = ie.map(function(Se) {
          return String(Se);
        });
        ke.unshift("Warning: " + K), Function.prototype.apply.call(console[A], console, ke);
      }
    }
    var S = !1, k = !1, N = !1, T = !1, V = !1, F;
    F = Symbol.for("react.module.reference");
    function G(A) {
      return !!(typeof A == "string" || typeof A == "function" || A === n || A === o || V || A === i || A === c || A === d || T || A === u || S || k || N || typeof A == "object" && A !== null && (A.$$typeof === g || A.$$typeof === p || A.$$typeof === s || A.$$typeof === a || A.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      A.$$typeof === F || A.getModuleId !== void 0));
    }
    function X(A, K, ie) {
      var ye = A.displayName;
      if (ye)
        return ye;
      var Oe = K.displayName || K.name || "";
      return Oe !== "" ? ie + "(" + Oe + ")" : ie;
    }
    function C(A) {
      return A.displayName || "Context";
    }
    function z(A) {
      if (A == null)
        return null;
      if (typeof A.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof A == "function")
        return A.displayName || A.name || null;
      if (typeof A == "string")
        return A;
      switch (A) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case o:
          return "Profiler";
        case i:
          return "StrictMode";
        case c:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof A == "object")
        switch (A.$$typeof) {
          case a:
            var K = A;
            return C(K) + ".Consumer";
          case s:
            var ie = A;
            return C(ie._context) + ".Provider";
          case l:
            return X(A, A.render, "ForwardRef");
          case p:
            var ye = A.displayName || null;
            return ye !== null ? ye : z(A.type) || "Memo";
          case g: {
            var Oe = A, ke = Oe._payload, Se = Oe._init;
            try {
              return z(Se(ke));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var m = Object.assign, P = 0, se, U, pe, W, Q, L, D;
    function oe() {
    }
    oe.__reactDisabledLog = !0;
    function re() {
      {
        if (P === 0) {
          se = console.log, U = console.info, pe = console.warn, W = console.error, Q = console.group, L = console.groupCollapsed, D = console.groupEnd;
          var A = {
            configurable: !0,
            enumerable: !0,
            value: oe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: A,
            log: A,
            warn: A,
            error: A,
            group: A,
            groupCollapsed: A,
            groupEnd: A
          });
        }
        P++;
      }
    }
    function J() {
      {
        if (P--, P === 0) {
          var A = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: m({}, A, {
              value: se
            }),
            info: m({}, A, {
              value: U
            }),
            warn: m({}, A, {
              value: pe
            }),
            error: m({}, A, {
              value: W
            }),
            group: m({}, A, {
              value: Q
            }),
            groupCollapsed: m({}, A, {
              value: L
            }),
            groupEnd: m({}, A, {
              value: D
            })
          });
        }
        P < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ge = y.ReactCurrentDispatcher, Ie;
    function fe(A, K, ie) {
      {
        if (Ie === void 0)
          try {
            throw Error();
          } catch (Oe) {
            var ye = Oe.stack.trim().match(/\n( *(at )?)/);
            Ie = ye && ye[1] || "";
          }
        return `
` + Ie + A;
      }
    }
    var me = !1, Ae;
    {
      var Re = typeof WeakMap == "function" ? WeakMap : Map;
      Ae = new Re();
    }
    function He(A, K) {
      if (!A || me)
        return "";
      {
        var ie = Ae.get(A);
        if (ie !== void 0)
          return ie;
      }
      var ye;
      me = !0;
      var Oe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ke;
      ke = ge.current, ge.current = null, re();
      try {
        if (K) {
          var Se = function() {
            throw Error();
          };
          if (Object.defineProperty(Se.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Se, []);
            } catch (_t) {
              ye = _t;
            }
            Reflect.construct(A, [], Se);
          } else {
            try {
              Se.call();
            } catch (_t) {
              ye = _t;
            }
            A.call(Se.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_t) {
            ye = _t;
          }
          A();
        }
      } catch (_t) {
        if (_t && ye && typeof _t.stack == "string") {
          for (var de = _t.stack.split(`
`), Pe = ye.stack.split(`
`), Le = de.length - 1, De = Pe.length - 1; Le >= 1 && De >= 0 && de[Le] !== Pe[De]; )
            De--;
          for (; Le >= 1 && De >= 0; Le--, De--)
            if (de[Le] !== Pe[De]) {
              if (Le !== 1 || De !== 1)
                do
                  if (Le--, De--, De < 0 || de[Le] !== Pe[De]) {
                    var Xe = `
` + de[Le].replace(" at new ", " at ");
                    return A.displayName && Xe.includes("<anonymous>") && (Xe = Xe.replace("<anonymous>", A.displayName)), typeof A == "function" && Ae.set(A, Xe), Xe;
                  }
                while (Le >= 1 && De >= 0);
              break;
            }
        }
      } finally {
        me = !1, ge.current = ke, J(), Error.prepareStackTrace = Oe;
      }
      var gt = A ? A.displayName || A.name : "", dr = gt ? fe(gt) : "";
      return typeof A == "function" && Ae.set(A, dr), dr;
    }
    function Ue(A, K, ie) {
      return He(A, !1);
    }
    function f(A) {
      var K = A.prototype;
      return !!(K && K.isReactComponent);
    }
    function $(A, K, ie) {
      if (A == null)
        return "";
      if (typeof A == "function")
        return He(A, f(A));
      if (typeof A == "string")
        return fe(A);
      switch (A) {
        case c:
          return fe("Suspense");
        case d:
          return fe("SuspenseList");
      }
      if (typeof A == "object")
        switch (A.$$typeof) {
          case l:
            return Ue(A.render);
          case p:
            return $(A.type, K, ie);
          case g: {
            var ye = A, Oe = ye._payload, ke = ye._init;
            try {
              return $(ke(Oe), K, ie);
            } catch {
            }
          }
        }
      return "";
    }
    var j = Object.prototype.hasOwnProperty, O = {}, E = y.ReactDebugCurrentFrame;
    function R(A) {
      if (A) {
        var K = A._owner, ie = $(A.type, A._source, K ? K.type : null);
        E.setExtraStackFrame(ie);
      } else
        E.setExtraStackFrame(null);
    }
    function B(A, K, ie, ye, Oe) {
      {
        var ke = Function.call.bind(j);
        for (var Se in A)
          if (ke(A, Se)) {
            var de = void 0;
            try {
              if (typeof A[Se] != "function") {
                var Pe = Error((ye || "React class") + ": " + ie + " type `" + Se + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof A[Se] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Pe.name = "Invariant Violation", Pe;
              }
              de = A[Se](K, Se, ye, ie, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Le) {
              de = Le;
            }
            de && !(de instanceof Error) && (R(Oe), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ye || "React class", ie, Se, typeof de), R(null)), de instanceof Error && !(de.message in O) && (O[de.message] = !0, R(Oe), w("Failed %s type: %s", ie, de.message), R(null));
          }
      }
    }
    var H = Array.isArray;
    function I(A) {
      return H(A);
    }
    function q(A) {
      {
        var K = typeof Symbol == "function" && Symbol.toStringTag, ie = K && A[Symbol.toStringTag] || A.constructor.name || "Object";
        return ie;
      }
    }
    function te(A) {
      try {
        return Y(A), !1;
      } catch {
        return !0;
      }
    }
    function Y(A) {
      return "" + A;
    }
    function ae(A) {
      if (te(A))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", q(A)), Y(A);
    }
    var be = y.ReactCurrentOwner, xe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Fe, Je, Be;
    Be = {};
    function Ze(A) {
      if (j.call(A, "ref")) {
        var K = Object.getOwnPropertyDescriptor(A, "ref").get;
        if (K && K.isReactWarning)
          return !1;
      }
      return A.ref !== void 0;
    }
    function Te(A) {
      if (j.call(A, "key")) {
        var K = Object.getOwnPropertyDescriptor(A, "key").get;
        if (K && K.isReactWarning)
          return !1;
      }
      return A.key !== void 0;
    }
    function je(A, K) {
      if (typeof A.ref == "string" && be.current && K && be.current.stateNode !== K) {
        var ie = z(be.current.type);
        Be[ie] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', z(be.current.type), A.ref), Be[ie] = !0);
      }
    }
    function $e(A, K) {
      {
        var ie = function() {
          Fe || (Fe = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", K));
        };
        ie.isReactWarning = !0, Object.defineProperty(A, "key", {
          get: ie,
          configurable: !0
        });
      }
    }
    function Ke(A, K) {
      {
        var ie = function() {
          Je || (Je = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", K));
        };
        ie.isReactWarning = !0, Object.defineProperty(A, "ref", {
          get: ie,
          configurable: !0
        });
      }
    }
    var rt = function(A, K, ie, ye, Oe, ke, Se) {
      var de = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: A,
        key: K,
        ref: ie,
        props: Se,
        // Record the component responsible for creating this element.
        _owner: ke
      };
      return de._store = {}, Object.defineProperty(de._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(de, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ye
      }), Object.defineProperty(de, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Oe
      }), Object.freeze && (Object.freeze(de.props), Object.freeze(de)), de;
    };
    function et(A, K, ie, ye, Oe) {
      {
        var ke, Se = {}, de = null, Pe = null;
        ie !== void 0 && (ae(ie), de = "" + ie), Te(K) && (ae(K.key), de = "" + K.key), Ze(K) && (Pe = K.ref, je(K, Oe));
        for (ke in K)
          j.call(K, ke) && !xe.hasOwnProperty(ke) && (Se[ke] = K[ke]);
        if (A && A.defaultProps) {
          var Le = A.defaultProps;
          for (ke in Le)
            Se[ke] === void 0 && (Se[ke] = Le[ke]);
        }
        if (de || Pe) {
          var De = typeof A == "function" ? A.displayName || A.name || "Unknown" : A;
          de && $e(Se, De), Pe && Ke(Se, De);
        }
        return rt(A, de, Pe, Oe, ye, be.current, Se);
      }
    }
    var Ye = y.ReactCurrentOwner, ne = y.ReactDebugCurrentFrame;
    function ue(A) {
      if (A) {
        var K = A._owner, ie = $(A.type, A._source, K ? K.type : null);
        ne.setExtraStackFrame(ie);
      } else
        ne.setExtraStackFrame(null);
    }
    var we;
    we = !1;
    function ze(A) {
      return typeof A == "object" && A !== null && A.$$typeof === t;
    }
    function he() {
      {
        if (Ye.current) {
          var A = z(Ye.current.type);
          if (A)
            return `

Check the render method of \`` + A + "`.";
        }
        return "";
      }
    }
    function Ee(A) {
      {
        if (A !== void 0) {
          var K = A.fileName.replace(/^.*[\\\/]/, ""), ie = A.lineNumber;
          return `

Check your code at ` + K + ":" + ie + ".";
        }
        return "";
      }
    }
    var qe = {};
    function wt(A) {
      {
        var K = he();
        if (!K) {
          var ie = typeof A == "string" ? A : A.displayName || A.name;
          ie && (K = `

Check the top-level render call using <` + ie + ">.");
        }
        return K;
      }
    }
    function le(A, K) {
      {
        if (!A._store || A._store.validated || A.key != null)
          return;
        A._store.validated = !0;
        var ie = wt(K);
        if (qe[ie])
          return;
        qe[ie] = !0;
        var ye = "";
        A && A._owner && A._owner !== Ye.current && (ye = " It was passed a child from " + z(A._owner.type) + "."), ue(A), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ie, ye), ue(null);
      }
    }
    function _e(A, K) {
      {
        if (typeof A != "object")
          return;
        if (I(A))
          for (var ie = 0; ie < A.length; ie++) {
            var ye = A[ie];
            ze(ye) && le(ye, K);
          }
        else if (ze(A))
          A._store && (A._store.validated = !0);
        else if (A) {
          var Oe = v(A);
          if (typeof Oe == "function" && Oe !== A.entries)
            for (var ke = Oe.call(A), Se; !(Se = ke.next()).done; )
              ze(Se.value) && le(Se.value, K);
        }
      }
    }
    function ve(A) {
      {
        var K = A.type;
        if (K == null || typeof K == "string")
          return;
        var ie;
        if (typeof K == "function")
          ie = K.propTypes;
        else if (typeof K == "object" && (K.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        K.$$typeof === p))
          ie = K.propTypes;
        else
          return;
        if (ie) {
          var ye = z(K);
          B(ie, A.props, "prop", ye, A);
        } else if (K.PropTypes !== void 0 && !we) {
          we = !0;
          var Oe = z(K);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Oe || "Unknown");
        }
        typeof K.getDefaultProps == "function" && !K.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ve(A) {
      {
        for (var K = Object.keys(A.props), ie = 0; ie < K.length; ie++) {
          var ye = K[ie];
          if (ye !== "children" && ye !== "key") {
            ue(A), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ye), ue(null);
            break;
          }
        }
        A.ref !== null && (ue(A), w("Invalid attribute `ref` supplied to `React.Fragment`."), ue(null));
      }
    }
    function Ge(A, K, ie, ye, Oe, ke) {
      {
        var Se = G(A);
        if (!Se) {
          var de = "";
          (A === void 0 || typeof A == "object" && A !== null && Object.keys(A).length === 0) && (de += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Pe = Ee(Oe);
          Pe ? de += Pe : de += he();
          var Le;
          A === null ? Le = "null" : I(A) ? Le = "array" : A !== void 0 && A.$$typeof === t ? (Le = "<" + (z(A.type) || "Unknown") + " />", de = " Did you accidentally export a JSX literal instead of a component?") : Le = typeof A, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Le, de);
        }
        var De = et(A, K, ie, Oe, ke);
        if (De == null)
          return De;
        if (Se) {
          var Xe = K.children;
          if (Xe !== void 0)
            if (ye)
              if (I(Xe)) {
                for (var gt = 0; gt < Xe.length; gt++)
                  _e(Xe[gt], A);
                Object.freeze && Object.freeze(Xe);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _e(Xe, A);
        }
        return A === n ? Ve(De) : ve(De), De;
      }
    }
    function lt(A, K, ie) {
      return Ge(A, K, ie, !0);
    }
    function dt(A, K, ie) {
      return Ge(A, K, ie, !1);
    }
    var nt = dt, We = lt;
    Qt.Fragment = n, Qt.jsx = nt, Qt.jsxs = We;
  }()), Qt;
}
var er = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ri;
function js() {
  if (ri)
    return er;
  ri = 1;
  var e = xt, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(a, l, c) {
    var d, p = {}, g = null, u = null;
    c !== void 0 && (g = "" + c), l.key !== void 0 && (g = "" + l.key), l.ref !== void 0 && (u = l.ref);
    for (d in l)
      n.call(l, d) && !o.hasOwnProperty(d) && (p[d] = l[d]);
    if (a && a.defaultProps)
      for (d in l = a.defaultProps, l)
        p[d] === void 0 && (p[d] = l[d]);
    return { $$typeof: t, type: a, key: g, ref: u, props: p, _owner: i.current };
  }
  return er.Fragment = r, er.jsx = s, er.jsxs = s, er;
}
process.env.NODE_ENV === "production" ? ln.exports = js() : ln.exports = Ds();
var ee = ln.exports;
function ot(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Ps = typeof Symbol == "function" && Symbol.observable || "@@observable", ni = Ps, qr = () => Math.random().toString(36).substring(7).split("").join("."), Ls = {
  INIT: `@@redux/INIT${/* @__PURE__ */ qr()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ qr()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${qr()}`
}, Bt = Ls;
function ar(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Ms(e) {
  if (e === void 0)
    return "undefined";
  if (e === null)
    return "null";
  const t = typeof e;
  switch (t) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function":
      return t;
  }
  if (Array.isArray(e))
    return "array";
  if (Us(e))
    return "date";
  if ($s(e))
    return "error";
  const r = Bs(e);
  switch (r) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return r;
  }
  return Object.prototype.toString.call(e).slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function Bs(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function $s(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function Us(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function Tt(e) {
  let t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = Ms(e)), t;
}
function On(e, t, r) {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? ot(2) : `Expected the root reducer to be a function. Instead, received: '${Tt(e)}'`);
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? ot(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? ot(1) : `Expected the enhancer to be a function. Instead, received: '${Tt(r)}'`);
    return r(On)(e, t);
  }
  let n = e, i = t, o = /* @__PURE__ */ new Map(), s = o, a = 0, l = !1;
  function c() {
    s === o && (s = /* @__PURE__ */ new Map(), o.forEach((v, y) => {
      s.set(y, v);
    }));
  }
  function d() {
    if (l)
      throw new Error(process.env.NODE_ENV === "production" ? ot(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return i;
  }
  function p(v) {
    if (typeof v != "function")
      throw new Error(process.env.NODE_ENV === "production" ? ot(4) : `Expected the listener to be a function. Instead, received: '${Tt(v)}'`);
    if (l)
      throw new Error(process.env.NODE_ENV === "production" ? ot(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let y = !0;
    c();
    const w = a++;
    return s.set(w, v), function() {
      if (y) {
        if (l)
          throw new Error(process.env.NODE_ENV === "production" ? ot(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        y = !1, c(), s.delete(w), o = null;
      }
    };
  }
  function g(v) {
    if (!ar(v))
      throw new Error(process.env.NODE_ENV === "production" ? ot(7) : `Actions must be plain objects. Instead, the actual type was: '${Tt(v)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof v.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? ot(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof v.type != "string")
      throw new Error(process.env.NODE_ENV === "production" ? ot(17) : `Action "type" property must be a string. Instead, the actual type was: '${Tt(v.type)}'. Value was: '${v.type}' (stringified)`);
    if (l)
      throw new Error(process.env.NODE_ENV === "production" ? ot(9) : "Reducers may not dispatch actions.");
    try {
      l = !0, i = n(i, v);
    } finally {
      l = !1;
    }
    return (o = s).forEach((w) => {
      w();
    }), v;
  }
  function u(v) {
    if (typeof v != "function")
      throw new Error(process.env.NODE_ENV === "production" ? ot(10) : `Expected the nextReducer to be a function. Instead, received: '${Tt(v)}`);
    n = v, g({
      type: Bt.REPLACE
    });
  }
  function b() {
    const v = p;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(y) {
        if (typeof y != "object" || y === null)
          throw new Error(process.env.NODE_ENV === "production" ? ot(11) : `Expected the observer to be an object. Instead, received: '${Tt(y)}'`);
        function w() {
          const S = y;
          S.next && S.next(d());
        }
        return w(), {
          unsubscribe: v(w)
        };
      },
      [ni]() {
        return this;
      }
    };
  }
  return g({
    type: Bt.INIT
  }), {
    dispatch: g,
    subscribe: p,
    getState: d,
    replaceReducer: u,
    [ni]: b
  };
}
function ii(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Vs(e, t, r, n) {
  const i = Object.keys(t), o = r && r.type === Bt.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (i.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!ar(e))
    return `The ${o} has unexpected type of "${Tt(e)}". Expected argument to be an object with the following keys: "${i.join('", "')}"`;
  const s = Object.keys(e).filter((a) => !t.hasOwnProperty(a) && !n[a]);
  if (s.forEach((a) => {
    n[a] = !0;
  }), !(r && r.type === Bt.REPLACE) && s.length > 0)
    return `Unexpected ${s.length > 1 ? "keys" : "key"} "${s.join('", "')}" found in ${o}. Expected to find one of the known reducer keys instead: "${i.join('", "')}". Unexpected keys will be ignored.`;
}
function Ws(e) {
  Object.keys(e).forEach((t) => {
    const r = e[t];
    if (typeof r(void 0, {
      type: Bt.INIT
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? ot(12) : `The slice reducer for key "${t}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof r(void 0, {
      type: Bt.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? ot(13) : `The slice reducer for key "${t}" returned undefined when probed with a random type. Don't try to handle '${Bt.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function Wi(e) {
  const t = Object.keys(e), r = {};
  for (let s = 0; s < t.length; s++) {
    const a = t[s];
    process.env.NODE_ENV !== "production" && typeof e[a] > "u" && ii(`No reducer provided for key "${a}"`), typeof e[a] == "function" && (r[a] = e[a]);
  }
  const n = Object.keys(r);
  let i;
  process.env.NODE_ENV !== "production" && (i = {});
  let o;
  try {
    Ws(r);
  } catch (s) {
    o = s;
  }
  return function(a = {}, l) {
    if (o)
      throw o;
    if (process.env.NODE_ENV !== "production") {
      const p = Vs(a, r, l, i);
      p && ii(p);
    }
    let c = !1;
    const d = {};
    for (let p = 0; p < n.length; p++) {
      const g = n[p], u = r[g], b = a[g], h = u(b, l);
      if (typeof h > "u") {
        const v = l && l.type;
        throw new Error(process.env.NODE_ENV === "production" ? ot(14) : `When called with an action of type ${v ? `"${String(v)}"` : "(unknown type)"}, the slice reducer for key "${g}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      d[g] = h, c = c || h !== b;
    }
    return c = c || n.length !== Object.keys(a).length, c ? d : a;
  };
}
function Cr(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, r) => (...n) => t(r(...n)));
}
function Hs(...e) {
  return (t) => (r, n) => {
    const i = t(r, n);
    let o = () => {
      throw new Error(process.env.NODE_ENV === "production" ? ot(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const s = {
      getState: i.getState,
      dispatch: (l, ...c) => o(l, ...c)
    }, a = e.map((l) => l(s));
    return o = Cr(...a)(i.dispatch), {
      ...i,
      dispatch: o
    };
  };
}
function Hi(e) {
  return ar(e) && "type" in e && typeof e.type == "string";
}
var Zi = Symbol.for("immer-nothing"), oi = Symbol.for("immer-draftable"), mt = Symbol.for("immer-state"), Zs = process.env.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(e) {
    return `The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`;
  },
  function(e) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`;
  },
  "This object has been frozen and should not be mutated",
  function(e) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + e;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(e) {
    return `'current' expects a draft, got: ${e}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(e) {
    return `'original' expects a draft, got: ${e}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function ut(e, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const r = Zs[e], n = typeof r == "function" ? r.apply(null, t) : r;
    throw new Error(`[Immer] ${n}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var qt = Object.getPrototypeOf;
function It(e) {
  return !!e && !!e[mt];
}
function Ct(e) {
  var t;
  return e ? Gi(e) || Array.isArray(e) || !!e[oi] || !!((t = e.constructor) != null && t[oi]) || zr(e) || Dr(e) : !1;
}
var Gs = Object.prototype.constructor.toString();
function Gi(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = qt(e);
  if (t === null)
    return !0;
  const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return r === Object ? !0 : typeof r == "function" && Function.toString.call(r) === Gs;
}
function nr(e, t) {
  Fr(e) === 0 ? Object.entries(e).forEach(([r, n]) => {
    t(r, n, e);
  }) : e.forEach((r, n) => t(n, r, e));
}
function Fr(e) {
  const t = e[mt];
  return t ? t.type_ : Array.isArray(e) ? 1 : zr(e) ? 2 : Dr(e) ? 3 : 0;
}
function cn(e, t) {
  return Fr(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Ki(e, t, r) {
  const n = Fr(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r;
}
function Ks(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function zr(e) {
  return e instanceof Map;
}
function Dr(e) {
  return e instanceof Set;
}
function Lt(e) {
  return e.copy_ || e.base_;
}
function un(e, t) {
  if (zr(e))
    return new Map(e);
  if (Dr(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  if (!t && Gi(e))
    return qt(e) ? { ...e } : Object.assign(/* @__PURE__ */ Object.create(null), e);
  const r = Object.getOwnPropertyDescriptors(e);
  delete r[mt];
  let n = Reflect.ownKeys(r);
  for (let i = 0; i < n.length; i++) {
    const o = n[i], s = r[o];
    s.writable === !1 && (s.writable = !0, s.configurable = !0), (s.get || s.set) && (r[o] = {
      configurable: !0,
      writable: !0,
      // could live with !!desc.set as well here...
      enumerable: s.enumerable,
      value: e[o]
    });
  }
  return Object.create(qt(e), r);
}
function An(e, t = !1) {
  return jr(e) || It(e) || !Ct(e) || (Fr(e) > 1 && (e.set = e.add = e.clear = e.delete = Ys), Object.freeze(e), t && nr(e, (r, n) => An(n, !0))), e;
}
function Ys() {
  ut(2);
}
function jr(e) {
  return Object.isFrozen(e);
}
var qs = {};
function Ut(e) {
  const t = qs[e];
  return t || ut(0, e), t;
}
var ir;
function Yi() {
  return ir;
}
function Xs(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function si(e, t) {
  t && (Ut("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function dn(e) {
  fn(e), e.drafts_.forEach(Js), e.drafts_ = null;
}
function fn(e) {
  e === ir && (ir = e.parent_);
}
function ai(e) {
  return ir = Xs(ir, e);
}
function Js(e) {
  const t = e[mt];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function li(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return e !== void 0 && e !== r ? (r[mt].modified_ && (dn(t), ut(4)), Ct(e) && (e = Or(t, e), t.parent_ || Ar(t, e)), t.patches_ && Ut("Patches").generateReplacementPatches_(
    r[mt].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = Or(t, r, []), dn(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== Zi ? e : void 0;
}
function Or(e, t, r) {
  if (jr(t))
    return t;
  const n = t[mt];
  if (!n)
    return nr(
      t,
      (i, o) => ci(e, n, t, i, o, r)
    ), t;
  if (n.scope_ !== e)
    return t;
  if (!n.modified_)
    return Ar(e, n.base_, !0), n.base_;
  if (!n.finalized_) {
    n.finalized_ = !0, n.scope_.unfinalizedDrafts_--;
    const i = n.copy_;
    let o = i, s = !1;
    n.type_ === 3 && (o = new Set(i), i.clear(), s = !0), nr(
      o,
      (a, l) => ci(e, n, i, a, l, r, s)
    ), Ar(e, i, !1), r && e.patches_ && Ut("Patches").generatePatches_(
      n,
      r,
      e.patches_,
      e.inversePatches_
    );
  }
  return n.copy_;
}
function ci(e, t, r, n, i, o, s) {
  if (process.env.NODE_ENV !== "production" && i === r && ut(5), It(i)) {
    const a = o && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !cn(t.assigned_, n) ? o.concat(n) : void 0, l = Or(e, i, a);
    if (Ki(r, n, l), It(l))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else
    s && r.add(i);
  if (Ct(i) && !jr(i)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    Or(e, i), (!t || !t.scope_.parent_) && Ar(e, i);
  }
}
function Ar(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && An(t, r);
}
function Qs(e, t) {
  const r = Array.isArray(e), n = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : Yi(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: t,
    // The base state.
    base_: e,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let i = n, o = Rn;
  r && (i = [n], o = or);
  const { revoke: s, proxy: a } = Proxy.revocable(i, o);
  return n.draft_ = a, n.revoke_ = s, a;
}
var Rn = {
  get(e, t) {
    if (t === mt)
      return e;
    const r = Lt(e);
    if (!cn(r, t))
      return ea(e, r, t);
    const n = r[t];
    return e.finalized_ || !Ct(n) ? n : n === Xr(e.base_, t) ? (Jr(e), e.copy_[t] = pn(n, e)) : n;
  },
  has(e, t) {
    return t in Lt(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(Lt(e));
  },
  set(e, t, r) {
    const n = qi(Lt(e), t);
    if (n != null && n.set)
      return n.set.call(e.draft_, r), !0;
    if (!e.modified_) {
      const i = Xr(Lt(e), t), o = i == null ? void 0 : i[mt];
      if (o && o.base_ === r)
        return e.copy_[t] = r, e.assigned_[t] = !1, !0;
      if (Ks(r, i) && (r !== void 0 || cn(e.base_, t)))
        return !0;
      Jr(e), hn(e);
    }
    return e.copy_[t] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return Xr(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, Jr(e), hn(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const r = Lt(e), n = Reflect.getOwnPropertyDescriptor(r, t);
    return n && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: n.enumerable,
      value: r[t]
    };
  },
  defineProperty() {
    ut(11);
  },
  getPrototypeOf(e) {
    return qt(e.base_);
  },
  setPrototypeOf() {
    ut(12);
  }
}, or = {};
nr(Rn, (e, t) => {
  or[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
or.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && ut(13), or.set.call(this, e, t, void 0);
};
or.set = function(e, t, r) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && ut(14), Rn.set.call(this, e[0], t, r, e[0]);
};
function Xr(e, t) {
  const r = e[mt];
  return (r ? Lt(r) : e)[t];
}
function ea(e, t, r) {
  var i;
  const n = qi(t, r);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (i = n.get) == null ? void 0 : i.call(e.draft_)
  ) : void 0;
}
function qi(e, t) {
  if (!(t in e))
    return;
  let r = qt(e);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n)
      return n;
    r = qt(r);
  }
}
function hn(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && hn(e.parent_));
}
function Jr(e) {
  e.copy_ || (e.copy_ = un(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var ta = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, r, n) => {
      if (typeof t == "function" && typeof r != "function") {
        const o = r;
        r = t;
        const s = this;
        return function(l = o, ...c) {
          return s.produce(l, (d) => r.call(this, d, ...c));
        };
      }
      typeof r != "function" && ut(6), n !== void 0 && typeof n != "function" && ut(7);
      let i;
      if (Ct(t)) {
        const o = ai(this), s = pn(t, void 0);
        let a = !0;
        try {
          i = r(s), a = !1;
        } finally {
          a ? dn(o) : fn(o);
        }
        return si(o, n), li(i, o);
      } else if (!t || typeof t != "object") {
        if (i = r(t), i === void 0 && (i = t), i === Zi && (i = void 0), this.autoFreeze_ && An(i, !0), n) {
          const o = [], s = [];
          Ut("Patches").generateReplacementPatches_(t, i, o, s), n(o, s);
        }
        return i;
      } else
        ut(1, t);
    }, this.produceWithPatches = (t, r) => {
      if (typeof t == "function")
        return (s, ...a) => this.produceWithPatches(s, (l) => t(l, ...a));
      let n, i;
      return [this.produce(t, r, (s, a) => {
        n = s, i = a;
      }), n, i];
    }, typeof (e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    Ct(e) || ut(8), It(e) && (e = Xi(e));
    const t = ai(this), r = pn(e, void 0);
    return r[mt].isManual_ = !0, fn(t), r;
  }
  finishDraft(e, t) {
    const r = e && e[mt];
    (!r || !r.isManual_) && ut(9);
    const { scope_: n } = r;
    return si(n, t), li(void 0, n);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let r;
    for (r = t.length - 1; r >= 0; r--) {
      const i = t[r];
      if (i.path.length === 0 && i.op === "replace") {
        e = i.value;
        break;
      }
    }
    r > -1 && (t = t.slice(r + 1));
    const n = Ut("Patches").applyPatches_;
    return It(e) ? n(e, t) : this.produce(
      e,
      (i) => n(i, t)
    );
  }
};
function pn(e, t) {
  const r = zr(e) ? Ut("MapSet").proxyMap_(e, t) : Dr(e) ? Ut("MapSet").proxySet_(e, t) : Qs(e, t);
  return (t ? t.scope_ : Yi()).drafts_.push(r), r;
}
function Xi(e) {
  return It(e) || ut(10, e), Ji(e);
}
function Ji(e) {
  if (!Ct(e) || jr(e))
    return e;
  const t = e[mt];
  let r;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, r = un(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    r = un(e, !0);
  return nr(r, (n, i) => {
    Ki(r, n, Ji(i));
  }), t && (t.finalized_ = !1), r;
}
var yt = new ta(), Qi = yt.produce;
yt.produceWithPatches.bind(
  yt
);
yt.setAutoFreeze.bind(yt);
yt.setUseStrictShallowCopy.bind(yt);
yt.applyPatches.bind(yt);
yt.createDraft.bind(yt);
yt.finishDraft.bind(yt);
var ra = (e) => {
  let t = !1;
  try {
    const r = {};
    e(r) === r && (t = !0);
  } catch {
  }
  if (t) {
    let r;
    try {
      throw new Error();
    } catch (n) {
      ({ stack: r } = n);
    }
    console.warn(
      `The result function returned its own inputs without modification. e.g
\`createSelector([state => state.todos], todos => todos)\`
This could lead to inefficient memoization and unnecessary re-renders.
Ensure transformation logic is in the result function, and extraction logic is in the input selectors.`,
      { stack: r }
    );
  }
}, na = (e, t, r) => {
  const { memoize: n, memoizeOptions: i } = t, { inputSelectorResults: o, inputSelectorResultsCopy: s } = e, a = n(() => ({}), ...i);
  if (!(a.apply(null, o) === a.apply(null, s))) {
    let c;
    try {
      throw new Error();
    } catch (d) {
      ({ stack: c } = d);
    }
    console.warn(
      `An input selector returned a different result when passed same arguments.
This means your output selector will likely run more frequently than intended.
Avoid returning a new reference inside your input selector, e.g.
\`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)\``,
      {
        arguments: r,
        firstInputs: o,
        secondInputs: s,
        stack: c
      }
    );
  }
}, ia = {
  inputStabilityCheck: "once",
  identityFunctionCheck: "once"
};
function oa(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function sa(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((r) => typeof r == "function")) {
    const r = e.map(
      (n) => typeof n == "function" ? `function ${n.name || "unnamed"}()` : typeof n
    ).join(", ");
    throw new TypeError(`${t}[${r}]`);
  }
}
var ui = (e) => Array.isArray(e) ? e : [e];
function aa(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return sa(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function di(e, t) {
  const r = [], { length: n } = e;
  for (let i = 0; i < n; i++)
    r.push(e[i].apply(null, t));
  return r;
}
var la = (e, t) => {
  const { identityFunctionCheck: r, inputStabilityCheck: n } = {
    ...ia,
    ...t
  };
  return {
    identityFunctionCheck: {
      shouldRun: r === "always" || r === "once" && e,
      run: ra
    },
    inputStabilityCheck: {
      shouldRun: n === "always" || n === "once" && e,
      run: na
    }
  };
}, ca = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, ua = typeof WeakRef < "u" ? WeakRef : ca, da = 0, fi = 1;
function yr() {
  return {
    s: da,
    v: void 0,
    o: null,
    p: null
  };
}
function Tn(e, t = {}) {
  let r = yr();
  const { resultEqualityCheck: n } = t;
  let i, o = 0;
  function s() {
    let a = r;
    const { length: l } = arguments;
    for (let p = 0, g = l; p < g; p++) {
      const u = arguments[p];
      if (typeof u == "function" || typeof u == "object" && u !== null) {
        let b = a.o;
        b === null && (a.o = b = /* @__PURE__ */ new WeakMap());
        const h = b.get(u);
        h === void 0 ? (a = yr(), b.set(u, a)) : a = h;
      } else {
        let b = a.p;
        b === null && (a.p = b = /* @__PURE__ */ new Map());
        const h = b.get(u);
        h === void 0 ? (a = yr(), b.set(u, a)) : a = h;
      }
    }
    const c = a;
    let d;
    if (a.s === fi ? d = a.v : (d = e.apply(null, arguments), o++), c.s = fi, n) {
      const p = (i == null ? void 0 : i.deref()) ?? i;
      p != null && n(p, d) && (d = p, o !== 0 && o--), i = typeof d == "object" && d !== null || typeof d == "function" ? new ua(d) : d;
    }
    return c.v = d, d;
  }
  return s.clearCache = () => {
    r = yr(), s.resetResultsCount();
  }, s.resultsCount = () => o, s.resetResultsCount = () => {
    o = 0;
  }, s;
}
function eo(e, ...t) {
  const r = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e;
  return (...i) => {
    let o = 0, s = 0, a, l = {}, c = i.pop();
    typeof c == "object" && (l = c, c = i.pop()), oa(
      c,
      `createSelector expects an output function after the inputs, but received: [${typeof c}]`
    );
    const d = {
      ...r,
      ...l
    }, {
      memoize: p,
      memoizeOptions: g = [],
      argsMemoize: u = Tn,
      argsMemoizeOptions: b = [],
      devModeChecks: h = {}
    } = d, v = ui(g), y = ui(b), w = aa(i), x = p(function() {
      return o++, c.apply(
        null,
        arguments
      );
    }, ...v);
    let S = !0;
    const k = u(function() {
      s++;
      const T = di(
        w,
        arguments
      );
      if (process.env.NODE_ENV !== "production") {
        const { identityFunctionCheck: V, inputStabilityCheck: F } = la(S, h);
        if (V.shouldRun && V.run(
          c
        ), F.shouldRun) {
          const G = di(
            w,
            arguments
          );
          F.run(
            { inputSelectorResults: T, inputSelectorResultsCopy: G },
            { memoize: p, memoizeOptions: v },
            arguments
          );
        }
        S && (S = !1);
      }
      return a = x.apply(null, T), a;
    }, ...y);
    return Object.assign(k, {
      resultFunc: c,
      memoizedResultFunc: x,
      dependencies: w,
      dependencyRecomputations: () => s,
      resetDependencyRecomputations: () => {
        s = 0;
      },
      lastResult: () => a,
      recomputations: () => o,
      resetRecomputations: () => {
        o = 0;
      },
      memoize: p,
      argsMemoize: u
    });
  };
}
var Ht = /* @__PURE__ */ eo(Tn);
function to(e) {
  return ({ dispatch: r, getState: n }) => (i) => (o) => typeof o == "function" ? o(r, n, e) : i(o);
}
var fa = to(), ha = to, pa = (...e) => {
  const t = eo(...e);
  return (...r) => {
    const n = t(...r), i = (o, ...s) => n(It(o) ? Xi(o) : o, ...s);
    return Object.assign(i, n), i;
  };
};
pa(Tn);
var ma = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? Cr : Cr.apply(null, arguments);
}, ro = (e) => e && typeof e.match == "function";
function Nt(e, t) {
  function r(...n) {
    if (t) {
      let i = t(...n);
      if (!i)
        throw new Error(process.env.NODE_ENV === "production" ? Me(0) : "prepareAction did not return an object");
      return {
        type: e,
        payload: i.payload,
        ..."meta" in i && {
          meta: i.meta
        },
        ..."error" in i && {
          error: i.error
        }
      };
    }
    return {
      type: e,
      payload: n[0]
    };
  }
  return r.toString = () => `${e}`, r.type = e, r.match = (n) => Hi(n) && n.type === e, r;
}
function ya(e) {
  return typeof e == "function" && "type" in e && // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
  ro(e);
}
function ga(e) {
  const t = e ? `${e}`.split("/") : [], r = t[t.length - 1] || "actionCreator";
  return `Detected an action creator with type "${e || "unknown"}" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${r}())\` instead of \`dispatch(${r})\`. This is necessary even if the action has no payload.`;
}
function va(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (r) => (n) => r(n);
  const {
    isActionCreator: t = ya
  } = e;
  return () => (r) => (n) => (t(n) && console.warn(ga(n.type)), r(n));
}
function no(e, t) {
  let r = 0;
  return {
    measureTime(n) {
      const i = Date.now();
      try {
        return n();
      } finally {
        const o = Date.now();
        r += o - i;
      }
    },
    warnIfExceeded() {
      r > e && console.warn(`${t} took ${r}ms, which is more than the warning threshold of ${e}ms. 
If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.
It is disabled in production builds, so you don't need to worry about that.`);
    }
  };
}
var io = class tr extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, tr.prototype);
  }
  static get [Symbol.species]() {
    return tr;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new tr(...t[0].concat(this)) : new tr(...t.concat(this));
  }
};
function hi(e) {
  return Ct(e) ? Qi(e, () => {
  }) : e;
}
function pi(e, t, r) {
  if (e.has(t)) {
    let i = e.get(t);
    return r.update && (i = r.update(i, t, e), e.set(t, i)), i;
  }
  if (!r.insert)
    throw new Error(process.env.NODE_ENV === "production" ? Me(10) : "No insert provided for key not already in map");
  const n = r.insert(t, e);
  return e.set(t, n), n;
}
function ba(e) {
  return typeof e != "object" || e == null || Object.isFrozen(e);
}
function wa(e, t, r) {
  const n = oo(e, t, r);
  return {
    detectMutations() {
      return so(e, t, n, r);
    }
  };
}
function oo(e, t = [], r, n = "", i = /* @__PURE__ */ new Set()) {
  const o = {
    value: r
  };
  if (!e(r) && !i.has(r)) {
    i.add(r), o.children = {};
    for (const s in r) {
      const a = n ? n + "." + s : s;
      t.length && t.indexOf(a) !== -1 || (o.children[s] = oo(e, t, r[s], a));
    }
  }
  return o;
}
function so(e, t = [], r, n, i = !1, o = "") {
  const s = r ? r.value : void 0, a = s === n;
  if (i && !a && !Number.isNaN(n))
    return {
      wasMutated: !0,
      path: o
    };
  if (e(s) || e(n))
    return {
      wasMutated: !1
    };
  const l = {};
  for (let d in r.children)
    l[d] = !0;
  for (let d in n)
    l[d] = !0;
  const c = t.length > 0;
  for (let d in l) {
    const p = o ? o + "." + d : d;
    if (c && t.some((b) => b instanceof RegExp ? b.test(p) : p === b))
      continue;
    const g = so(e, t, r.children[d], n[d], a, p);
    if (g.wasMutated)
      return g;
  }
  return {
    wasMutated: !1
  };
}
function _a(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (t) => (r) => t(r);
  {
    let t = function(a, l, c, d) {
      return JSON.stringify(a, r(l, d), c);
    }, r = function(a, l) {
      let c = [], d = [];
      return l || (l = function(p, g) {
        return c[0] === g ? "[Circular ~]" : "[Circular ~." + d.slice(0, c.indexOf(g)).join(".") + "]";
      }), function(p, g) {
        if (c.length > 0) {
          var u = c.indexOf(this);
          ~u ? c.splice(u + 1) : c.push(this), ~u ? d.splice(u, 1 / 0, p) : d.push(p), ~c.indexOf(g) && (g = l.call(this, p, g));
        } else
          c.push(g);
        return a == null ? g : a.call(this, p, g);
      };
    }, {
      isImmutable: n = ba,
      ignoredPaths: i,
      warnAfter: o = 32
    } = e;
    const s = wa.bind(null, n, i);
    return ({
      getState: a
    }) => {
      let l = a(), c = s(l), d;
      return (p) => (g) => {
        const u = no(o, "ImmutableStateInvariantMiddleware");
        u.measureTime(() => {
          if (l = a(), d = c.detectMutations(), c = s(l), d.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? Me(19) : `A state mutation was detected between dispatches, in the path '${d.path || ""}'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        });
        const b = p(g);
        return u.measureTime(() => {
          if (l = a(), d = c.detectMutations(), c = s(l), d.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? Me(20) : `A state mutation was detected inside a dispatch, in the path: ${d.path || ""}. Take a look at the reducer(s) handling the action ${t(g)}. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        }), u.warnIfExceeded(), b;
      };
    };
  }
}
function ao(e) {
  const t = typeof e;
  return e == null || t === "string" || t === "boolean" || t === "number" || Array.isArray(e) || ar(e);
}
function mn(e, t = "", r = ao, n, i = [], o) {
  let s;
  if (!r(e))
    return {
      keyPath: t || "<root>",
      value: e
    };
  if (typeof e != "object" || e === null || o != null && o.has(e))
    return !1;
  const a = n != null ? n(e) : Object.entries(e), l = i.length > 0;
  for (const [c, d] of a) {
    const p = t ? t + "." + c : c;
    if (!(l && i.some((u) => u instanceof RegExp ? u.test(p) : p === u))) {
      if (!r(d))
        return {
          keyPath: p,
          value: d
        };
      if (typeof d == "object" && (s = mn(d, p, r, n, i, o), s))
        return s;
    }
  }
  return o && lo(e) && o.add(e), !1;
}
function lo(e) {
  if (!Object.isFrozen(e))
    return !1;
  for (const t of Object.values(e))
    if (!(typeof t != "object" || t === null) && !lo(t))
      return !1;
  return !0;
}
function xa(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (t) => (r) => t(r);
  {
    const {
      isSerializable: t = ao,
      getEntries: r,
      ignoredActions: n = [],
      ignoredActionPaths: i = ["meta.arg", "meta.baseQueryMeta"],
      ignoredPaths: o = [],
      warnAfter: s = 32,
      ignoreState: a = !1,
      ignoreActions: l = !1,
      disableCache: c = !1
    } = e, d = !c && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
    return (p) => (g) => (u) => {
      if (!Hi(u))
        return g(u);
      const b = g(u), h = no(s, "SerializableStateInvariantMiddleware");
      return !l && !(n.length && n.indexOf(u.type) !== -1) && h.measureTime(() => {
        const v = mn(u, "", t, r, i, d);
        if (v) {
          const {
            keyPath: y,
            value: w
          } = v;
          console.error(`A non-serializable value was detected in an action, in the path: \`${y}\`. Value:`, w, `
Take a look at the logic that dispatched this action: `, u, `
(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)`, `
(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)`);
        }
      }), a || (h.measureTime(() => {
        const v = p.getState(), y = mn(v, "", t, r, o, d);
        if (y) {
          const {
            keyPath: w,
            value: x
          } = y;
          console.error(`A non-serializable value was detected in the state, in the path: \`${w}\`. Value:`, x, `
Take a look at the reducer(s) handling this action type: ${u.type}.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`);
        }
      }), h.warnIfExceeded()), b;
    };
  }
}
function gr(e) {
  return typeof e == "boolean";
}
var Ea = () => function(t) {
  const {
    thunk: r = !0,
    immutableCheck: n = !0,
    serializableCheck: i = !0,
    actionCreatorCheck: o = !0
  } = t ?? {};
  let s = new io();
  if (r && (gr(r) ? s.push(fa) : s.push(ha(r.extraArgument))), process.env.NODE_ENV !== "production") {
    if (n) {
      let a = {};
      gr(n) || (a = n), s.unshift(_a(a));
    }
    if (i) {
      let a = {};
      gr(i) || (a = i), s.push(xa(a));
    }
    if (o) {
      let a = {};
      gr(o) || (a = o), s.unshift(va(a));
    }
  }
  return s;
}, Sa = "RTK_autoBatch", co = (e) => (t) => {
  setTimeout(t, e);
}, ka = typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : co(10), Ca = (e = {
  type: "raf"
}) => (t) => (...r) => {
  const n = t(...r);
  let i = !0, o = !1, s = !1;
  const a = /* @__PURE__ */ new Set(), l = e.type === "tick" ? queueMicrotask : e.type === "raf" ? ka : e.type === "callback" ? e.queueNotification : co(e.timeout), c = () => {
    s = !1, o && (o = !1, a.forEach((d) => d()));
  };
  return Object.assign({}, n, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(d) {
      const p = () => i && d(), g = n.subscribe(p);
      return a.add(d), () => {
        g(), a.delete(d);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(d) {
      var p;
      try {
        return i = !((p = d == null ? void 0 : d.meta) != null && p[Sa]), o = !i, o && (s || (s = !0, l(c))), n.dispatch(d);
      } finally {
        i = !0;
      }
    }
  });
}, Oa = (e) => function(r) {
  const {
    autoBatch: n = !0
  } = r ?? {};
  let i = new io(e);
  return n && i.push(Ca(typeof n == "object" ? n : void 0)), i;
}, Rt = process.env.NODE_ENV === "production";
function Aa(e) {
  const t = Ea(), {
    reducer: r = void 0,
    middleware: n,
    devTools: i = !0,
    preloadedState: o = void 0,
    enhancers: s = void 0
  } = e || {};
  let a;
  if (typeof r == "function")
    a = r;
  else if (ar(r))
    a = Wi(r);
  else
    throw new Error(process.env.NODE_ENV === "production" ? Me(1) : "`reducer` is a required argument, and must be a function or an object of functions that can be passed to combineReducers");
  if (!Rt && n && typeof n != "function")
    throw new Error(process.env.NODE_ENV === "production" ? Me(2) : "`middleware` field must be a callback");
  let l;
  if (typeof n == "function") {
    if (l = n(t), !Rt && !Array.isArray(l))
      throw new Error(process.env.NODE_ENV === "production" ? Me(3) : "when using a middleware builder function, an array of middleware must be returned");
  } else
    l = t();
  if (!Rt && l.some((b) => typeof b != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? Me(4) : "each middleware provided to configureStore must be a function");
  let c = Cr;
  i && (c = ma({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !Rt,
    ...typeof i == "object" && i
  }));
  const d = Hs(...l), p = Oa(d);
  if (!Rt && s && typeof s != "function")
    throw new Error(process.env.NODE_ENV === "production" ? Me(5) : "`enhancers` field must be a callback");
  let g = typeof s == "function" ? s(p) : p();
  if (!Rt && !Array.isArray(g))
    throw new Error(process.env.NODE_ENV === "production" ? Me(6) : "`enhancers` callback must return an array");
  if (!Rt && g.some((b) => typeof b != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? Me(7) : "each enhancer provided to configureStore must be a function");
  !Rt && l.length && !g.includes(d) && console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
  const u = c(...g);
  return On(a, o, u);
}
function uo(e) {
  const t = {}, r = [];
  let n;
  const i = {
    addCase(o, s) {
      if (process.env.NODE_ENV !== "production") {
        if (r.length > 0)
          throw new Error(process.env.NODE_ENV === "production" ? Me(26) : "`builder.addCase` should only be called before calling `builder.addMatcher`");
        if (n)
          throw new Error(process.env.NODE_ENV === "production" ? Me(27) : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
      }
      const a = typeof o == "string" ? o : o.type;
      if (!a)
        throw new Error(process.env.NODE_ENV === "production" ? Me(28) : "`builder.addCase` cannot be called with an empty action type");
      if (a in t)
        throw new Error(process.env.NODE_ENV === "production" ? Me(29) : `\`builder.addCase\` cannot be called with two reducers for the same action type '${a}'`);
      return t[a] = s, i;
    },
    addMatcher(o, s) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? Me(30) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
      return r.push({
        matcher: o,
        reducer: s
      }), i;
    },
    addDefaultCase(o) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? Me(31) : "`builder.addDefaultCase` can only be called once");
      return n = o, i;
    }
  };
  return e(i), [t, r, n];
}
function Ra(e) {
  return typeof e == "function";
}
function Ta(e, t) {
  if (process.env.NODE_ENV !== "production" && typeof t == "object")
    throw new Error(process.env.NODE_ENV === "production" ? Me(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [r, n, i] = uo(t), o;
  if (Ra(e))
    o = () => hi(e());
  else {
    const a = hi(e);
    o = () => a;
  }
  function s(a = o(), l) {
    let c = [r[l.type], ...n.filter(({
      matcher: d
    }) => d(l)).map(({
      reducer: d
    }) => d)];
    return c.filter((d) => !!d).length === 0 && (c = [i]), c.reduce((d, p) => {
      if (p)
        if (It(d)) {
          const u = p(d, l);
          return u === void 0 ? d : u;
        } else {
          if (Ct(d))
            return Qi(d, (g) => p(g, l));
          {
            const g = p(d, l);
            if (g === void 0) {
              if (d === null)
                return d;
              throw new Error(process.env.NODE_ENV === "production" ? Me(9) : "A case reducer on a non-draftable value must not return undefined");
            }
            return g;
          }
        }
      return d;
    }, a);
  }
  return s.getInitialState = o, s;
}
var Na = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", Ia = (e = 21) => {
  let t = "", r = e;
  for (; r--; )
    t += Na[Math.random() * 64 | 0];
  return t;
}, Fa = (e, t) => ro(e) ? e.match(t) : e(t);
function za(...e) {
  return (t) => e.some((r) => Fa(r, t));
}
var Da = ["name", "message", "stack", "code"], Qr = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    Kr(this, "_type");
    this.payload = e, this.meta = t;
  }
}, mi = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    Kr(this, "_type");
    this.payload = e, this.meta = t;
  }
}, ja = (e) => {
  if (typeof e == "object" && e !== null) {
    const t = {};
    for (const r of Da)
      typeof e[r] == "string" && (t[r] = e[r]);
    return t;
  }
  return {
    message: String(e)
  };
}, Nn = /* @__PURE__ */ (() => {
  function e(t, r, n) {
    const i = Nt(t + "/fulfilled", (l, c, d, p) => ({
      payload: l,
      meta: {
        ...p || {},
        arg: d,
        requestId: c,
        requestStatus: "fulfilled"
      }
    })), o = Nt(t + "/pending", (l, c, d) => ({
      payload: void 0,
      meta: {
        ...d || {},
        arg: c,
        requestId: l,
        requestStatus: "pending"
      }
    })), s = Nt(t + "/rejected", (l, c, d, p, g) => ({
      payload: p,
      error: (n && n.serializeError || ja)(l || "Rejected"),
      meta: {
        ...g || {},
        arg: d,
        requestId: c,
        rejectedWithValue: !!p,
        requestStatus: "rejected",
        aborted: (l == null ? void 0 : l.name) === "AbortError",
        condition: (l == null ? void 0 : l.name) === "ConditionError"
      }
    }));
    function a(l) {
      return (c, d, p) => {
        const g = n != null && n.idGenerator ? n.idGenerator(l) : Ia(), u = new AbortController();
        let b;
        function h(y) {
          b = y, u.abort();
        }
        const v = async function() {
          var x, S;
          let y;
          try {
            let k = (x = n == null ? void 0 : n.condition) == null ? void 0 : x.call(n, l, {
              getState: d,
              extra: p
            });
            if (La(k) && (k = await k), k === !1 || u.signal.aborted)
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            const N = new Promise((T, V) => u.signal.addEventListener("abort", () => V({
              name: "AbortError",
              message: b || "Aborted"
            })));
            c(o(g, l, (S = n == null ? void 0 : n.getPendingMeta) == null ? void 0 : S.call(n, {
              requestId: g,
              arg: l
            }, {
              getState: d,
              extra: p
            }))), y = await Promise.race([N, Promise.resolve(r(l, {
              dispatch: c,
              getState: d,
              extra: p,
              requestId: g,
              signal: u.signal,
              abort: h,
              rejectWithValue: (T, V) => new Qr(T, V),
              fulfillWithValue: (T, V) => new mi(T, V)
            })).then((T) => {
              if (T instanceof Qr)
                throw T;
              return T instanceof mi ? i(T.payload, g, l, T.meta) : i(T, g, l);
            })]);
          } catch (k) {
            y = k instanceof Qr ? s(null, g, l, k.payload, k.meta) : s(k, g, l);
          }
          return n && !n.dispatchConditionRejection && s.match(y) && y.meta.condition || c(y), y;
        }();
        return Object.assign(v, {
          abort: h,
          requestId: g,
          arg: l,
          unwrap() {
            return v.then(Pa);
          }
        });
      };
    }
    return Object.assign(a, {
      pending: o,
      rejected: s,
      fulfilled: i,
      settled: za(s, i),
      typePrefix: t
    });
  }
  return e.withTypes = () => e, e;
})();
function Pa(e) {
  if (e.meta && e.meta.rejectedWithValue)
    throw e.payload;
  if (e.error)
    throw e.error;
  return e.payload;
}
function La(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var Ma = Symbol.for("rtk-slice-createasyncthunk");
function Ba(e, t) {
  return `${e}/${t}`;
}
function $a({
  creators: e
} = {}) {
  var r;
  const t = (r = e == null ? void 0 : e.asyncThunk) == null ? void 0 : r[Ma];
  return function(i) {
    const {
      name: o,
      reducerPath: s = o
    } = i;
    if (!o)
      throw new Error(process.env.NODE_ENV === "production" ? Me(11) : "`name` is a required option for createSlice");
    typeof process < "u" && process.env.NODE_ENV === "development" && i.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const a = (typeof i.reducers == "function" ? i.reducers(Va()) : i.reducers) || {}, l = Object.keys(a), c = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, d = {
      addCase(v, y) {
        const w = typeof v == "string" ? v : v.type;
        if (!w)
          throw new Error(process.env.NODE_ENV === "production" ? Me(12) : "`context.addCase` cannot be called with an empty action type");
        if (w in c.sliceCaseReducersByType)
          throw new Error(process.env.NODE_ENV === "production" ? Me(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + w);
        return c.sliceCaseReducersByType[w] = y, d;
      },
      addMatcher(v, y) {
        return c.sliceMatchers.push({
          matcher: v,
          reducer: y
        }), d;
      },
      exposeAction(v, y) {
        return c.actionCreators[v] = y, d;
      },
      exposeCaseReducer(v, y) {
        return c.sliceCaseReducersByName[v] = y, d;
      }
    };
    l.forEach((v) => {
      const y = a[v], w = {
        reducerName: v,
        type: Ba(o, v),
        createNotation: typeof i.reducers == "function"
      };
      Ha(y) ? Ga(w, y, d, t) : Wa(w, y, d);
    });
    function p() {
      if (process.env.NODE_ENV !== "production" && typeof i.extraReducers == "object")
        throw new Error(process.env.NODE_ENV === "production" ? Me(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [v = {}, y = [], w = void 0] = typeof i.extraReducers == "function" ? uo(i.extraReducers) : [i.extraReducers], x = {
        ...v,
        ...c.sliceCaseReducersByType
      };
      return Ta(i.initialState, (S) => {
        for (let k in x)
          S.addCase(k, x[k]);
        for (let k of c.sliceMatchers)
          S.addMatcher(k.matcher, k.reducer);
        for (let k of y)
          S.addMatcher(k.matcher, k.reducer);
        w && S.addDefaultCase(w);
      });
    }
    const g = (v) => v, u = /* @__PURE__ */ new WeakMap();
    let b;
    const h = {
      name: o,
      reducerPath: s,
      reducer(v, y) {
        return b || (b = p()), b(v, y);
      },
      actions: c.actionCreators,
      caseReducers: c.sliceCaseReducersByName,
      getInitialState() {
        return b || (b = p()), b.getInitialState();
      },
      getSelectors(v = g) {
        const y = pi(u, this, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return pi(y, v, {
          insert: () => {
            const w = {};
            for (const [x, S] of Object.entries(i.selectors ?? {}))
              w[x] = Ua(this, S, v, this !== h);
            return w;
          }
        });
      },
      selectSlice(v) {
        let y = v[this.reducerPath];
        if (typeof y > "u") {
          if (this !== h)
            y = this.getInitialState();
          else if (process.env.NODE_ENV !== "production")
            throw new Error(process.env.NODE_ENV === "production" ? Me(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return y;
      },
      get selectors() {
        return this.getSelectors(this.selectSlice);
      },
      injectInto(v, {
        reducerPath: y,
        ...w
      } = {}) {
        const x = y ?? this.reducerPath;
        return v.inject({
          reducerPath: x,
          reducer: this.reducer
        }, w), {
          ...this,
          reducerPath: x
        };
      }
    };
    return h;
  };
}
function Ua(e, t, r, n) {
  function i(o, ...s) {
    let a = r.call(e, o);
    if (typeof a > "u") {
      if (n)
        a = e.getInitialState();
      else if (process.env.NODE_ENV !== "production")
        throw new Error(process.env.NODE_ENV === "production" ? Me(16) : "selectState returned undefined for an uninjected slice reducer");
    }
    return t(a, ...s);
  }
  return i.unwrapped = t, i;
}
var In = $a();
function Va() {
  function e(t, r) {
    return {
      _reducerDefinitionType: "asyncThunk",
      payloadCreator: t,
      ...r
    };
  }
  return e.withTypes = () => e, {
    reducer(t) {
      return Object.assign({
        // hack so the wrapping function has the same name as the original
        // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
        [t.name](...r) {
          return t(...r);
        }
      }[t.name], {
        _reducerDefinitionType: "reducer"
        /* reducer */
      });
    },
    preparedReducer(t, r) {
      return {
        _reducerDefinitionType: "reducerWithPrepare",
        prepare: t,
        reducer: r
      };
    },
    asyncThunk: e
  };
}
function Wa({
  type: e,
  reducerName: t,
  createNotation: r
}, n, i) {
  let o, s;
  if ("reducer" in n) {
    if (r && !Za(n))
      throw new Error(process.env.NODE_ENV === "production" ? Me(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    o = n.reducer, s = n.prepare;
  } else
    o = n;
  i.addCase(e, o).exposeCaseReducer(t, o).exposeAction(t, s ? Nt(e, s) : Nt(e));
}
function Ha(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function Za(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function Ga({
  type: e,
  reducerName: t
}, r, n, i) {
  if (!i)
    throw new Error(process.env.NODE_ENV === "production" ? Me(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  const {
    payloadCreator: o,
    fulfilled: s,
    pending: a,
    rejected: l,
    settled: c,
    options: d
  } = r, p = i(e, o, d);
  n.exposeAction(t, p), s && n.addCase(p.fulfilled, s), a && n.addCase(p.pending, a), l && n.addCase(p.rejected, l), c && n.addMatcher(p.settled, c), n.exposeCaseReducer(t, {
    fulfilled: s || vr,
    pending: a || vr,
    rejected: l || vr,
    settled: c || vr
  });
}
function vr() {
}
var Fn = "listenerMiddleware";
Nt(`${Fn}/add`);
Nt(`${Fn}/removeAll`);
Nt(`${Fn}/remove`);
function Me(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
let br;
const Ka = new Uint8Array(16);
function Ya() {
  if (!br && (br = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !br))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return br(Ka);
}
const it = [];
for (let e = 0; e < 256; ++e)
  it.push((e + 256).toString(16).slice(1));
function qa(e, t = 0) {
  return it[e[t + 0]] + it[e[t + 1]] + it[e[t + 2]] + it[e[t + 3]] + "-" + it[e[t + 4]] + it[e[t + 5]] + "-" + it[e[t + 6]] + it[e[t + 7]] + "-" + it[e[t + 8]] + it[e[t + 9]] + "-" + it[e[t + 10]] + it[e[t + 11]] + it[e[t + 12]] + it[e[t + 13]] + it[e[t + 14]] + it[e[t + 15]];
}
const Xa = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), yi = {
  randomUUID: Xa
};
function en(e, t, r) {
  if (yi.randomUUID && !t && !e)
    return yi.randomUUID();
  e = e || {};
  const n = e.random || (e.rng || Ya)();
  if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, t) {
    r = r || 0;
    for (let i = 0; i < 16; ++i)
      t[r + i] = n[i];
    return t;
  }
  return qa(n);
}
const Ja = (e, t, r) => {
  const n = [e];
  for (; n.length > 0; )
    if (e = n.shift(), e.id === t) {
      r(e);
      return;
    } else
      e.type === "folder" && n.push(...e.subFoldersAndFiles);
}, Et = (e, t, r, n) => {
  for (const i of e)
    if (i.id === t) {
      r(i, n);
      return;
    } else
      i.type === "folder" && (n.push(i), Et(
        i.subFoldersAndFiles,
        t,
        r,
        n
      ));
  n.pop();
}, Pr = (e, t, r = [], n) => {
  for (const i of e)
    if (t(i, n), i.type === "folder") {
      const o = i.subFoldersAndFiles.map(({ id: s }) => s);
      r.push(...o), n.push(i.id), Pr(
        i.subFoldersAndFiles,
        t,
        r,
        n
      ), n.pop();
    }
  return { childrenIds: r, parentIds: n };
}, gi = (e, t, r) => {
  if (t.includes(e)) {
    let n = "";
    return Et(
      r.subFoldersAndFiles,
      e,
      (i, o) => {
        n = o[o.length - 1].id;
      },
      [r]
    ), n;
  } else
    return e.includes("folder") ? e : "head";
}, fo = (e, t, r) => {
  if (e.type === "folder" && r === e.id) {
    t(e);
    return;
  } else
    e.type === "folder" && t(e);
  const n = e.subFoldersAndFiles;
  for (const i of n)
    i.type === "folder" && fo(i, t, r);
}, Qa = {
  normalized: {
    files: {
      byId: {},
      allIds: []
    },
    folders: {
      byId: {
        head: {
          id: "head",
          name: "head",
          type: "folder",
          collapsed: !1,
          childrenFlat: [],
          path: ["/"]
        }
      },
      allIds: ["head"]
    }
  },
  initialFolder: {
    id: "head",
    type: "folder",
    subFoldersAndFiles: []
  },
  selected: "head",
  contextSelected: {
    id: "head",
    type: "folder",
    e: !1
  },
  toCopy: null,
  parentItemId: "head",
  searchTerm: "",
  resizeCollapsed: !1,
  searchFocus: !1,
  projectName: "Project"
  // tabs: [],
}, Mt = In({
  name: "structure",
  initialState: Qa,
  reducers: {
    addNode: (e, t) => {
      const { value: r, inputType: n } = t.payload;
      let i = r, o = "";
      n === "file" && (i = r.substring(0, r.lastIndexOf(".")), o = r.substring(r.lastIndexOf(".") + 1));
      const s = {
        id: `${n}-${en()}`,
        name: i,
        type: n,
        extension: n === "file" ? o : void 0,
        collapsed: n === "folder" ? !0 : void 0,
        childrenFlat: n === "folder" ? [] : void 0,
        content: n === "file" ? "" : void 0
      };
      e.contextSelected.id === e.initialFolder.id ? e.initialFolder.subFoldersAndFiles = [
        ...e.initialFolder.subFoldersAndFiles,
        {
          id: s.id,
          type: s.type,
          subFoldersAndFiles: s.type === "folder" ? [] : null
        }
      ] : Ja(e.initialFolder, e.contextSelected.id, (l) => {
        l.subFoldersAndFiles = [
          ...l.subFoldersAndFiles,
          {
            id: s.id,
            type: s.type,
            subFoldersAndFiles: s.type === "folder" ? [] : null
          }
        ];
      }), e.normalized.folders.byId[e.contextSelected.id].childrenFlat = [
        ...e.normalized.folders.byId[e.contextSelected.id].childrenFlat,
        { id: s.id, type: s.type }
      ];
      const a = `${n}s`;
      e.normalized[a].byId[s.id] = s, e.normalized[a].allIds = [
        ...e.normalized[a].allIds,
        s.id
      ], Mt.caseReducers.setPath(e, {
        payload: s.id,
        type: ""
      }), Mt.caseReducers.sortFolder(e, {
        payload: { id: e.contextSelected.id },
        type: ""
      });
    },
    removeNode: (e, t) => {
      var o, s;
      const r = t.payload.id ? t.payload.id : (o = e.contextSelected) == null ? void 0 : o.id, n = t.payload.type ? t.payload.type : (s = e.contextSelected) == null ? void 0 : s.type;
      if (r === e.initialFolder.id)
        return;
      Et(
        e.initialFolder.subFoldersAndFiles,
        r,
        (a, l) => {
          const c = l[l.length - 1];
          c.subFoldersAndFiles = c.subFoldersAndFiles.filter(
            ({ id: g }) => g !== a.id
          );
          const d = c.id;
          e.normalized.folders.byId[d].childrenFlat = e.normalized.folders.byId[d].childrenFlat.filter(
            ({ id: g }) => g !== a.id
          );
          const p = (g) => {
            for (const u of g) {
              const { id: b, type: h } = u;
              e.normalized[h + "s"].allIds = e.normalized[h + "s"].allIds.filter((v) => v !== b), u.type === "folder" && p(u.subFoldersAndFiles);
            }
          };
          a.type === "folder" && p(a.subFoldersAndFiles), c.subFoldersAndFiles.length === 0 && (e.normalized.folders.byId[d].collapsed = !0);
        },
        [e.initialFolder]
      ), e.normalized[n + "s"].allIds = e.normalized[n + "s"].allIds.filter((a) => a !== r);
      const i = e.normalized[n + "s"].allIds;
      i.find((a) => a === e.contextSelected.id) === void 0 && (e.contextSelected = {
        id: e.initialFolder.id,
        type: "folder",
        e: !1
      }), i.find((a) => a === e.selected) === void 0 && (e.selected = e.initialFolder.id), i.find((a) => a === e.parentItemId) === void 0 && (e.parentItemId = e.initialFolder.id);
    },
    renameNode: (e, t) => {
      let r = "", n = t.payload.value, i = "";
      e.contextSelected.type === "file" && (n = t.payload.value.substring(
        0,
        t.payload.value.lastIndexOf(".")
      ), i = t.payload.value.substring(
        t.payload.value.lastIndexOf(".") + 1
      )), Et(
        e.initialFolder.subFoldersAndFiles,
        e.contextSelected.id,
        (o, s) => {
          r = s[s.length - 1].id;
        },
        [e.initialFolder]
      ), e.normalized[e.contextSelected.type + "s"].byId[e.contextSelected.id].name = n, e.contextSelected.type === "file" && (e.normalized.files.byId[e.contextSelected.id].extension = i), Mt.caseReducers.sortFolder(e, {
        payload: { id: r },
        type: ""
      });
    },
    updateFileContents: (e, t) => {
      e.normalized.files.byId[t.payload.id].content = t.payload.value;
    },
    // normalizeState: (state) => {
    //   state.normalized.folders.byId["head"] = {
    //     ...state.initialFolder,
    //     childrenIds: undefined,
    //     childrenFlat: [],
    //   };
    //   state.normalized.folders.allIds = ["head"];
    //   const mapStructureRecursively = (structure: any, normalized: any) => {
    //     for (let item of structure) {
    //       if (item.type === "folder") {
    //         normalized.folders.byId[item.id] = {
    //           ...item,
    //           childrenIds: undefined,
    //           childrenFlat: item.children.map((child) => {
    //             return { id: child.id, name: child.name, type: child.type };
    //           }),
    //         };
    //         normalized.folders.allIds = [...normalized.folders.allIds, item.id];
    //         mapStructureRecursively(item.children, normalized);
    //       } else if (item.type === "file") {
    //         normalized.files.byId[item.id] = item;
    //         normalized.files.allIds = [...normalized.files.allIds, item.id];
    //       }
    //     }
    //   };
    //   mapStructureRecursively(state.initialFolder.children, state.normalized);
    //   structureSlice.caseReducers.sortFolder(state, {
    //     payload: { id: null },
    //   });
    // },
    collapseOrExpand: (e, t) => {
      if (t.payload.item.type === "folder") {
        const { item: r, collapse: n } = t.payload;
        n ? e.normalized.folders.byId[r.id].collapsed = !e.normalized.folders.byId[r.id].collapsed : e.normalized.folders.byId[r.id].collapsed = !1;
      } else
        t.payload.item.type;
    },
    copyNode: (e) => {
      if (!e.toCopy)
        return;
      if (e.toCopy.isCut) {
        if (e.toCopy.type === "folder" && (e.normalized.folders.byId[e.contextSelected.id].path.includes(e.toCopy.id) || e.toCopy.id === e.contextSelected.id)) {
          e.toCopy = null;
          return;
        }
        if (e.normalized.folders.byId[e.contextSelected.id].childrenFlat.find(({ id: d }) => {
          var p;
          return d === ((p = e.toCopy) == null ? void 0 : p.id);
        })) {
          e.toCopy = null;
          return;
        }
      }
      const t = e.normalized[e.toCopy.type + "s"].byId[e.toCopy.id], r = {
        ...t,
        childrenFlat: e.toCopy.type === "folder" ? e.toCopy.subFoldersAndFiles.map(({ id: c, type: d }) => ({ id: c, type: d })) : void 0,
        subFoldersAndFiles: e.toCopy.subFoldersAndFiles,
        // subFoldersAndFiles: state.toCopy.subFoldersAndFiles
        //   ? state.toCopy.subFoldersAndFiles
        //   : undefined,
        id: `${e.toCopy.type}-${en()}`,
        wholeName: t.type === "file" ? `${t.name}.${t.extension}` : t.name
        // path: item.type === "file" ? [] : "",
      }, n = e.normalized.folders.byId[`${e.contextSelected.id}`].childrenFlat.map(({ id: c, type: d }) => {
        if (d === "folder")
          return e.normalized[`${d}s`].byId[c].name;
        {
          const p = e.normalized[`${d}s`].byId[c];
          return `${p.name}.${p.extension}`;
        }
      });
      let i = r.wholeName;
      if (n.filter((c) => c === r.wholeName).length > 0) {
        let c = 1;
        for (; n.filter((d) => r.type === "file" ? d === `${r.name}_Copy_${c}.${r.extension}` : d === `${r.name}_Copy_${c}`).length > 0; )
          c++;
        i = r.type === "folder" ? `${r.name}_Copy_${c}` : `${r.name}_Copy_${c}.${r.extension}`, r.wholeName = i;
      }
      const s = {
        ...r,
        name: r.type === "file" ? i.substring(0, i.lastIndexOf(".")) : i,
        extension: r.type === "file" ? i.split(".").pop() : void 0,
        // subFoldersAndFiles: state.toCopy.type === "folder" ? [] : null,
        collapsed: e.toCopy.type === "folder" ? !1 : void 0
      };
      e.normalized.folders.byId[e.contextSelected.id].collapsed = !1, e.normalized.folders.byId[e.contextSelected.id].childrenFlat = [
        ...e.normalized.folders.byId[e.contextSelected.id].childrenFlat,
        { id: s.id, type: s.type }
      ], s.type === "folder" ? e.normalized.folders.byId[s.id] = {
        id: s.id,
        name: s.name,
        type: "folder",
        collapsed: !1,
        childrenFlat: s.childrenFlat,
        path: []
      } : e.normalized.files.byId[s.id] = {
        id: s.id,
        name: s.name,
        type: "file",
        extension: s.extension,
        content: s.content,
        path: []
      }, e.normalized[`${s.type}s`].allIds = [
        ...e.normalized[`${s.type}s`].allIds,
        s.id
      ];
      const a = (c) => {
        var d;
        if (((d = e.toCopy) == null ? void 0 : d.type) === "folder") {
          const p = e.normalized.folders.byId[c.id].path.slice(0, -1);
          Pr(
            c.subFoldersAndFiles,
            (g, u) => {
              const b = u[u.length - 1], h = {
                ...e.normalized[`${g.type}s`].byId[g.id]
              };
              h.id = `${h.type}-${en()}`, h.path = [...p, ...u, h.id], e.normalized[`${h.type}s`].byId[h.id] = h, e.normalized[`${h.type}s`].allIds = [
                ...e.normalized[`${h.type}s`].allIds,
                h.id
              ], e.normalized.folders.byId[b].childrenFlat = e.normalized.folders.byId[b].childrenFlat.map(
                (v) => v.id === g.id ? { ...v, id: h.id } : v
              ), g.id = h.id;
            },
            [],
            [c.id]
          );
        }
        return c;
      }, l = `${s.type}s`;
      if (e.contextSelected.id === e.initialFolder.id) {
        e.normalized[l].byId[s.id].path = [
          "/",
          e.initialFolder.id,
          s.id
        ];
        const c = a(s);
        e.initialFolder.subFoldersAndFiles = [
          ...e.initialFolder.subFoldersAndFiles,
          {
            id: c.id,
            type: c.type,
            subFoldersAndFiles: c.type === "folder" ? c.subFoldersAndFiles : null
          }
        ];
      } else
        Et(
          e.initialFolder.subFoldersAndFiles,
          e.contextSelected.id,
          (c, d) => {
            const p = e.normalized.folders.byId[c.id].path, g = [
              ...d.map(({ id: h }) => h),
              c.id
            ];
            e.normalized[l].byId[s.id].path = [
              "/",
              ...g,
              s.id
            ];
            const u = a(s);
            c.subFoldersAndFiles = [
              ...c.subFoldersAndFiles,
              {
                id: u.id,
                type: u.type,
                subFoldersAndFiles: u.subFoldersAndFiles
              }
            ];
            const b = `${s.type}s`;
            e.normalized[b].byId[s.id].path = [
              ...p,
              s.id
            ];
          },
          [e.initialFolder]
        );
      Mt.caseReducers.sortFolder(e, {
        payload: { id: e.contextSelected.id },
        type: ""
      }), e.toCopy.isCut && Mt.caseReducers.removeNode(e, {
        payload: { id: e.toCopy.id, type: e.toCopy.type },
        type: ""
      }), e.toCopy.isCut && (e.toCopy = null);
    },
    setSelected: (e, t) => {
      e.selected !== t.payload.id && (e.selected = t.payload.id);
    },
    setContextSelectedForFileAction: (e, t) => {
      e.contextSelected = {
        id: t.payload,
        type: "folder",
        e: !1
      };
    },
    contextClick: (e, t) => {
      const { id: r, type: n, threeDot: i } = t.payload, o = {
        id: "",
        type: "",
        e: i ? {
          x: i.x,
          y: i.y
        } : !1
      };
      r !== null ? (o.id = r, o.type = n, i && (o.e = i)) : (o.id = e.initialFolder.id, o.type = "folder", i && (o.e = i)), e.contextSelected = o;
    },
    setToCopy: (e, t) => {
      const r = [], n = {
        id: t.payload.id,
        type: t.payload.type,
        isCut: t.payload.isCut,
        parentId: "",
        subFoldersAndFiles: r
      };
      n.type === "folder" && Et(
        e.initialFolder.subFoldersAndFiles,
        t.payload.id,
        (i, o) => {
          const s = o[o.length - 1];
          n.subFoldersAndFiles = i.subFoldersAndFiles, n.parentId = s.id;
        },
        [e.initialFolder]
      ), e.toCopy = n;
    },
    setParentItemId: (e, t) => {
      if (t.payload !== "")
        if (t.payload.includes("file")) {
          let r = "";
          Et(
            e.initialFolder.subFoldersAndFiles,
            t.payload,
            (n, i) => {
              r = i[i.length - 1].id;
            },
            [e.initialFolder]
          ), e.parentItemId = r;
        } else
          e.parentItemId = t.payload;
      else {
        let r = "";
        Et(
          e.initialFolder.subFoldersAndFiles,
          e.contextSelected.id,
          (n, i) => {
            r = i[i.length - 1].id;
          },
          [e.initialFolder]
        ), e.parentItemId = r;
      }
    },
    setPath: (e, t) => {
      Et(
        e.initialFolder.subFoldersAndFiles,
        t.payload,
        (r, n) => {
          const i = `${r.type}s`, o = e.normalized[i].byId[r.id];
          o.path = ["/", ...n.map(({ id: s }) => s), r.id];
        },
        [e.initialFolder]
      );
    },
    sortFolder: (e, t) => {
      fo(
        e.initialFolder,
        (r) => {
          if (!(t.payload.id !== null && t.payload.id !== r.id) && (t.payload.id === null || r.id === t.payload.id)) {
            const n = r.subFoldersAndFiles.map(
              (i) => e.normalized[`${i.type}s`].byId[i.id]
            );
            n.sort(
              (i, o) => i.type === "folder" && o.type === "file" ? -1 : i.type === "file" && o.type === "folder" ? 1 : i.name.localeCompare(o.name)
            ), r.subFoldersAndFiles = n.map(
              ({ id: i, type: o }) => {
                var a;
                const s = (a = r.subFoldersAndFiles.find(
                  ({ id: l }) => l === i
                )) == null ? void 0 : a.subFoldersAndFiles;
                return { id: i, type: o, subFoldersAndFiles: s };
              }
            );
          }
        },
        t.payload.id
      );
    },
    search: (e, t) => {
      e.searchTerm = t.payload.replace(
        /[-[\]{}()*+?.,\\^$|#\s]/g,
        "\\$&"
      );
    },
    setResizeCollapsed: (e, t) => {
      e.resizeCollapsed = t.payload;
    },
    setSearchFocused: (e, t) => {
      e.searchFocus = t.payload;
    },
    setProjectName: (e, t) => {
      e.projectName = t.payload;
    },
    setValidExtensions: (e, t) => {
      e.validExtensions = [];
    }
  }
}), el = (e) => e.structure.initialFolder, tl = (e) => {
  var t;
  return (t = e.structure.contextSelected) == null ? void 0 : t.e;
}, ho = (e) => {
  var t;
  return (t = e.structure.contextSelected) == null ? void 0 : t.id;
}, rl = (e) => {
  var t;
  return (t = e.structure.contextSelected) == null ? void 0 : t.type;
}, nl = (e) => e.structure.normalized.files.allIds, il = (e) => e.structure.normalized.folders.allIds, po = (e) => e.structure.toCopy, mo = Ht(
  (e) => e.structure.selected,
  (e) => e
), ol = Ht(
  (e) => e.structure.contextSelected,
  (e) => e.structure.normalized,
  (e, t) => {
    const r = t[`${e == null ? void 0 : e.type}s`].byId[e == null ? void 0 : e.id];
    let n = r.name;
    r.type === "file" && (n = `${r.name}.${r.extension}`);
    const i = `${r.path.filter((o) => o !== "/" && o !== "head").map((o, s) => (e == null ? void 0 : e.type) === "file" ? s < r.path.length - 3 ? t.folders.byId[o].name : `${t.files.byId[o].name}.${t.files.byId[o].extension}` : (e == null ? void 0 : e.type) === "folder" ? t.folders.byId[o].name : "UNKNOWN").join("/")}`;
    return {
      id: r.id,
      name: r.name,
      type: r.type,
      wholeName: n,
      actualPath: i
    };
  }
), sl = Ht(
  (e) => e.structure.contextSelected,
  (e) => e.structure.normalized,
  (e, t) => {
    if (!e)
      return { id: void 0, name: void 0 };
    const r = t[`${e.type}s`].byId[e.id];
    return r.type === "file" ? {
      id: r.id,
      name: r.name,
      type: r.type,
      extension: r.extension
    } : {
      id: r.id,
      name: r.name,
      type: r.type
    };
  }
), al = Ht(
  (e) => e.structure.normalized,
  (e) => e.structure.parentItemId,
  (e, t) => !e || !t ? [] : e.folders.byId[`${t}`].childrenFlat.map(
    ({ id: r, type: n }) => e[`${n}s`].byId[r]
  )
);
Ht(
  (e) => e.structure.searchTerm,
  (e) => e.structure.normalized.files,
  (e, t) => {
    const r = {
      files: [],
      numOfResults: 0,
      numOfLines: 0
    };
    if (e.trim() === "")
      return r;
    const n = [];
    return t.allIds.forEach((i) => {
      const o = t.byId[i], s = o.content, a = new RegExp(e, "g"), l = s.match(a), c = [];
      if (l) {
        r.numOfResults += 1, r.numOfLines += l.length;
        const d = s.split("\r");
        for (let p = 0; p < d.length; p++)
          d[p].includes(l[0]) && c.push({
            line: p + 1,
            content: d[p].trim()
          });
        n.push({
          id: o.id,
          name: o.name,
          extension: o.extension,
          matches: c
        });
      }
    }), r.files = n, r;
  }
);
const {
  addNode: ll,
  removeNode: cl,
  renameNode: ul,
  collapseOrExpand: yn,
  updateFileContents: $u,
  // normalizeState,
  setSelected: gn,
  contextClick: yo,
  setToCopy: vi,
  copyNode: dl,
  setParentItemId: bi,
  setContextSelectedForFileAction: wi,
  search: Uu,
  setResizeCollapsed: Vu,
  setSearchFocused: Wu,
  setProjectName: fl,
  setValidExtensions: hl
} = Mt.actions, pl = Mt.reducer;
var vn = { exports: {} }, tn = {};
/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _i;
function ml() {
  return _i || (_i = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = xt;
    function t(c, d) {
      return c === d && (c !== 0 || 1 / c === 1 / d) || c !== c && d !== d;
    }
    var r = typeof Object.is == "function" ? Object.is : t, n = e.useSyncExternalStore, i = e.useRef, o = e.useEffect, s = e.useMemo, a = e.useDebugValue;
    function l(c, d, p, g, u) {
      var b = i(null), h;
      b.current === null ? (h = {
        hasValue: !1,
        value: null
      }, b.current = h) : h = b.current;
      var v = s(function() {
        var S = !1, k, N, T = function(X) {
          if (!S) {
            S = !0, k = X;
            var C = g(X);
            if (u !== void 0 && h.hasValue) {
              var z = h.value;
              if (u(z, C))
                return N = z, z;
            }
            return N = C, C;
          }
          var m = k, P = N;
          if (r(m, X))
            return P;
          var se = g(X);
          return u !== void 0 && u(P, se) ? P : (k = X, N = se, se);
        }, V = p === void 0 ? null : p, F = function() {
          return T(d());
        }, G = V === null ? void 0 : function() {
          return T(V());
        };
        return [F, G];
      }, [d, p, g, u]), y = v[0], w = v[1], x = n(c, y, w);
      return o(function() {
        h.hasValue = !0, h.value = x;
      }, [x]), a(x), x;
    }
    tn.useSyncExternalStoreWithSelector = l, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), tn;
}
var rn = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xi;
function yl() {
  if (xi)
    return rn;
  xi = 1;
  var e = xt;
  function t(l, c) {
    return l === c && (l !== 0 || 1 / l === 1 / c) || l !== l && c !== c;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useSyncExternalStore, i = e.useRef, o = e.useEffect, s = e.useMemo, a = e.useDebugValue;
  return rn.useSyncExternalStoreWithSelector = function(l, c, d, p, g) {
    var u = i(null);
    if (u.current === null) {
      var b = { hasValue: !1, value: null };
      u.current = b;
    } else
      b = u.current;
    u = s(function() {
      function v(k) {
        if (!y) {
          if (y = !0, w = k, k = p(k), g !== void 0 && b.hasValue) {
            var N = b.value;
            if (g(N, k))
              return x = N;
          }
          return x = k;
        }
        if (N = x, r(w, k))
          return N;
        var T = p(k);
        return g !== void 0 && g(N, T) ? N : (w = k, x = T);
      }
      var y = !1, w, x, S = d === void 0 ? null : d;
      return [function() {
        return v(c());
      }, S === null ? void 0 : function() {
        return v(S());
      }];
    }, [c, d, p, g]);
    var h = n(l, u[0], u[1]);
    return o(function() {
      b.hasValue = !0, b.value = h;
    }, [h]), a(h), h;
  }, rn;
}
process.env.NODE_ENV === "production" ? vn.exports = yl() : vn.exports = ml();
var gl = vn.exports, ht = (
  // prettier-ignore
  // @ts-ignore
  "default" in Yr ? Yr.default : Yr
), Ei = Symbol.for("react-redux-context"), Si = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function vl() {
  if (!ht.createContext)
    return {};
  const e = Si[Ei] ?? (Si[Ei] = /* @__PURE__ */ new Map());
  let t = e.get(ht.createContext);
  return t || (t = ht.createContext(
    null
  ), process.env.NODE_ENV !== "production" && (t.displayName = "ReactRedux"), e.set(ht.createContext, t)), t;
}
var Ft = /* @__PURE__ */ vl(), bl = () => {
  throw new Error("uSES not initialized!");
};
function zn(e = Ft) {
  return function() {
    const r = ht.useContext(e);
    if (process.env.NODE_ENV !== "production" && !r)
      throw new Error(
        "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
      );
    return r;
  };
}
var go = /* @__PURE__ */ zn(), vo = bl, wl = (e) => {
  vo = e;
}, _l = (e, t) => e === t;
function xl(e = Ft) {
  const t = e === Ft ? go : zn(e);
  return function(n, i = {}) {
    const { equalityFn: o = _l, devModeChecks: s = {} } = typeof i == "function" ? { equalityFn: i } : i;
    if (process.env.NODE_ENV !== "production") {
      if (!n)
        throw new Error("You must pass a selector to useSelector");
      if (typeof n != "function")
        throw new Error("You must pass a function as a selector to useSelector");
      if (typeof o != "function")
        throw new Error(
          "You must pass a function as an equality function to useSelector"
        );
    }
    const {
      store: a,
      subscription: l,
      getServerState: c,
      stabilityCheck: d,
      identityFunctionCheck: p
    } = t(), g = ht.useRef(!0), u = ht.useCallback(
      {
        [n.name](h) {
          const v = n(h);
          if (process.env.NODE_ENV !== "production") {
            const {
              identityFunctionCheck: y,
              stabilityCheck: w
            } = {
              stabilityCheck: d,
              identityFunctionCheck: p,
              ...s
            };
            if (w === "always" || w === "once" && g.current) {
              const x = n(h);
              if (!o(v, x)) {
                let S;
                try {
                  throw new Error();
                } catch (k) {
                  ({ stack: S } = k);
                }
                console.warn(
                  "Selector " + (n.name || "unknown") + ` returned a different result when called with the same parameters. This can lead to unnecessary rerenders.
Selectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization`,
                  {
                    state: h,
                    selected: v,
                    selected2: x,
                    stack: S
                  }
                );
              }
            }
            if ((y === "always" || y === "once" && g.current) && v === h) {
              let x;
              try {
                throw new Error();
              } catch (S) {
                ({ stack: x } = S);
              }
              console.warn(
                "Selector " + (n.name || "unknown") + ` returned the root state when called. This can lead to unnecessary rerenders.
Selectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.`,
                { stack: x }
              );
            }
            g.current && (g.current = !1);
          }
          return v;
        }
      }[n.name],
      [n, d, s.stabilityCheck]
    ), b = vo(
      l.addNestedSub,
      a.getState,
      c || a.getState,
      u,
      o
    );
    return ht.useDebugValue(b), b;
  };
}
var El = /* @__PURE__ */ xl();
function Sl(e) {
  e();
}
function kl() {
  let e = null, t = null;
  return {
    clear() {
      e = null, t = null;
    },
    notify() {
      Sl(() => {
        let r = e;
        for (; r; )
          r.callback(), r = r.next;
      });
    },
    get() {
      let r = [], n = e;
      for (; n; )
        r.push(n), n = n.next;
      return r;
    },
    subscribe(r) {
      let n = !0, i = t = {
        callback: r,
        next: null,
        prev: t
      };
      return i.prev ? i.prev.next = i : e = i, function() {
        !n || e === null || (n = !1, i.next ? i.next.prev = i.prev : t = i.prev, i.prev ? i.prev.next = i.next : e = i.next);
      };
    }
  };
}
var ki = {
  notify() {
  },
  get: () => []
};
function Cl(e, t) {
  let r, n = ki, i = 0, o = !1;
  function s(h) {
    d();
    const v = n.subscribe(h);
    let y = !1;
    return () => {
      y || (y = !0, v(), p());
    };
  }
  function a() {
    n.notify();
  }
  function l() {
    b.onStateChange && b.onStateChange();
  }
  function c() {
    return o;
  }
  function d() {
    i++, r || (r = t ? t.addNestedSub(l) : e.subscribe(l), n = kl());
  }
  function p() {
    i--, r && i === 0 && (r(), r = void 0, n.clear(), n = ki);
  }
  function g() {
    o || (o = !0, d());
  }
  function u() {
    o && (o = !1, p());
  }
  const b = {
    addNestedSub: s,
    notifyNestedSubs: a,
    handleChangeWrapper: l,
    isSubscribed: c,
    trySubscribe: g,
    tryUnsubscribe: u,
    getListeners: () => n
  };
  return b;
}
var Ol = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Al = Ol ? ht.useLayoutEffect : ht.useEffect;
function Rl({
  store: e,
  context: t,
  children: r,
  serverState: n,
  stabilityCheck: i = "once",
  identityFunctionCheck: o = "once"
}) {
  const s = ht.useMemo(() => {
    const c = Cl(e);
    return {
      store: e,
      subscription: c,
      getServerState: n ? () => n : void 0,
      stabilityCheck: i,
      identityFunctionCheck: o
    };
  }, [e, n, i, o]), a = ht.useMemo(() => e.getState(), [e]);
  Al(() => {
    const { subscription: c } = s;
    return c.onStateChange = c.notifyNestedSubs, c.trySubscribe(), a !== e.getState() && c.notifyNestedSubs(), () => {
      c.tryUnsubscribe(), c.onStateChange = void 0;
    };
  }, [s, a]);
  const l = t || Ft;
  return /* @__PURE__ */ ht.createElement(l.Provider, { value: s }, r);
}
var Tl = Rl;
function bo(e = Ft) {
  const t = (
    // @ts-ignore
    e === Ft ? go : (
      // @ts-ignore
      zn(e)
    )
  );
  return function() {
    const { store: n } = t();
    return n;
  };
}
var Nl = /* @__PURE__ */ bo();
function Il(e = Ft) {
  const t = (
    // @ts-ignore
    e === Ft ? Nl : bo(e)
  );
  return function() {
    return t().dispatch;
  };
}
var Fl = /* @__PURE__ */ Il();
wl(gl.useSyncExternalStoreWithSelector);
const wo = Fl, at = El, zl = {
  open: [],
  selected: "",
  selectionStack: []
}, bn = Nn(
  "removeTabAsync",
  async (e, { getState: t }) => t().structure.normalized
), _o = Nn(
  "setActiveTabAsync",
  async (e, { getState: t }) => {
    const n = t().structure.normalized;
    return { id: e, normalized: n };
  }
), xo = In({
  name: "tabs",
  initialState: zl,
  reducers: {
    selectTab: (e, t) => {
      e.selected !== "" && e.selectionStack[e.selectionStack.length - 1] !== e.selected && (e.selectionStack = [...e.selectionStack, e.selected]), e.selected = t.payload;
    },
    closeTab: (e, t) => {
      if (e.open = e.open.filter(({ id: r }) => r !== t.payload), e.selectionStack = e.selectionStack.filter(
        (r) => r !== t.payload
      ), e.selected === t.payload) {
        const r = e.selectionStack.filter(
          (i) => i !== t.payload
        ), n = r.pop();
        e.selected = n || "", e.selectionStack = r;
      }
    },
    closeAllTabs: (e) => {
      e.open = [], e.selected = "", e.selectionStack = [];
    }
  },
  extraReducers: (e) => {
    e.addCase(bn.fulfilled, (t, r) => {
      const n = r.payload;
      t.open = t.open.filter(
        (i) => n.files.allIds.find((o) => o === i.id) !== void 0
      ), t.selectionStack = t.selectionStack.filter(
        (i) => n.files.allIds.find((o) => o === i) !== void 0
      ), t.open.find(({ id: i }) => i === t.selected) || (t.selected = t.selectionStack[t.selectionStack.length - 1], t.selectionStack = t.selectionStack.slice(
        0,
        t.selectionStack.length - 1
      ));
    }).addCase(_o.fulfilled, (t, r) => {
      const n = r.payload.normalized, i = r.payload.id, o = n.files.byId[i];
      t.open.filter(({ id: s }) => s === o.id).length === 0 && (t.open = [
        ...t.open,
        { id: o.id, extension: o.extension }
      ]), (t.selected !== "" && t.selectionStack[t.selectionStack.length - 1] !== t.selected || t.selectionStack.length === 0) && (t.selectionStack = [...t.selectionStack, t.selected]), t.selected = o.id;
    });
  }
});
xo.actions;
const Dl = xo.reducer;
Ht(
  (e) => e.structure.normalized,
  (e) => e.tabs.open,
  (e, t) => t.map((r) => {
    const n = e.files.byId[r.id];
    return {
      ...r,
      extension: n.extension,
      wholeName: `${n.name}.${n.extension}`
    };
  })
);
const jl = ({
  item: e,
  onClickE: t,
  className: r,
  style: n
}) => /* @__PURE__ */ ee.jsx(
  "button",
  {
    type: "button",
    "parent-id": e.id,
    "typeof-item": e.type,
    onClick: (i) => {
      t(i);
    },
    style: n,
    className: `transition-colors w-[14px] border-r hover:border-vscode-blue border-monaco-color ${r}`
  }
), Pl = ({
  item: e,
  selected: t,
  showBlue: r,
  onClickE: n,
  primaryClass: i,
  secondaryClass: o
}) => /* @__PURE__ */ ee.jsx(
  "button",
  {
    type: "button",
    "typeof-item": e.type,
    "parent-id": e.id,
    onClick: (s) => {
      n(s);
    },
    className: `px-2 rounded-r-sm ${t === e.id && r ? `hover:bg-blue-400 ${i}` : `hover:bg-slate-500 ${o}`}`,
    children: /* @__PURE__ */ ee.jsx("span", { className: "three-dots transition-opacity", children: " " })
  }
), Eo = (e) => `${e}-logo`, Ll = (e, t, r, n, i) => {
  const o = /^([^\\]*)\.(\w+)$/, s = /^[a-zA-Z0-9](?:[a-zA-Z0-9 ._-]*[a-zA-Z0-9])?\.[a-zA-Z0-9_-]+$/, a = /^[a-z0-9._]+$/i, l = t.match(s), c = t.match(o), d = t.match(a);
  if (c && d) {
    const p = n, g = c[1], u = c[2];
    if (l && d && p.includes(u)) {
      for (const { wholeName: b, type: h } of r)
        if (b.toLowerCase() === t.toLowerCase() && h === i.type && b.split(".").reverse()[0] === u)
          return {
            error: !0,
            errorMessage: "A file with this name already exists. Please choose a different name."
          };
      return {
        error: !1,
        errorMessage: "",
        ext: u
      };
    } else if (u !== "" || !l)
      return p.includes(u) ? g === "" ? {
        error: !0,
        errorMessage: "The file name cannot be empty. Please enter a valid file name."
      } : {
        error: !0,
        errorMessage: "This name is not valid as a file name. Please choose a different name."
      } : {
        error: !0,
        errorMessage: "This file type is not supported. Please choose a different file extension."
      };
  } else {
    if (!d && t !== "")
      return {
        error: !0,
        errorMessage: "This name is not valid as a file name. Please choose a different name."
      };
    if (e)
      return {
        error: !0,
        errorMessage: "The file type cannot be empty. Please choose a valid file extension."
      };
  }
  return {
    error: !0,
    errorMessage: ""
  };
}, Ml = (e, t) => {
  const r = /^[a-zA-Z0-9_-\s]+$/;
  if (e.match(r) || e === "") {
    for (const { wholeName: i, type: o } of t)
      if (i.toLowerCase() === e.toLowerCase() && o === "folder")
        return {
          error: !0,
          errorMessage: "A folder with this name already exists. Please choose a different name."
        };
    return {
      error: !1,
      errorMessage: ""
    };
  } else
    return {
      error: !0,
      errorMessage: "This name is not valid as a folder name. Please choose a different name."
    };
}, Ci = (e, t, r, n, i) => t.type === "file" ? Ll(
  e,
  r,
  n,
  i,
  t
) : t.type === "folder" ? Ml(r, n) : {
  error: !0,
  errorMessage: ""
}, Bl = ({ item: e, onClickE: t, className: r }) => {
  const n = (i) => {
    if (i.type === "folder")
      return i.collapsed ? "closed-folder" : "opened-folder";
    if (i.type === "file" && i.extension)
      return Eo(i.extension);
  };
  return /* @__PURE__ */ ee.jsxs(
    "div",
    {
      onClick: (i) => {
        t(i);
      },
      "parent-id": e.id,
      "typeof-item": e.type,
      className: `w-full py-[0.32rem] pl-3 flex flex-row justify-start items-center collapsable ${r}`,
      children: [
        /* @__PURE__ */ ee.jsx(
          "span",
          {
            "typeof-item": e.type,
            "parent-id": e.id,
            className: `span-logo span-logo-width ${n(e)}`,
            children: " "
          }
        ),
        /* @__PURE__ */ ee.jsx("span", { "typeof-item": e.type, "parent-id": e.id, className: "px-1 mx-1 ", children: (() => {
          let i = "";
          return e.type === "file" ? i = `${e.name}.${e.extension}` : e.type === "folder" && (i = e.name), i;
        })() })
      ]
    }
  );
}, So = ({
  data: e,
  showBlue: t,
  setShowBlue: r,
  showGray: n,
  setShowGray: i,
  collapseBtnClassname: o,
  collapseBtnStyle: s,
  threeDotPrimaryClass: a,
  threeDotSecondaryClass: l,
  clickableAreaClassName: c,
  selectedClickableAreaClassName: d,
  contextSelectedClickableAreaClassName: p,
  itemTitleClassName: g,
  onItemSelected: u = () => {
  },
  onItemContextSelected: b = () => {
  }
}) => {
  const h = wo(), v = at(mo), y = at(ho), w = at(po), x = at((S) => e.map(({ id: N, type: T }) => S.structure.normalized[`${T}s`].byId[N]));
  return /* @__PURE__ */ ee.jsx("div", { className: `${x.length > 0 && "w-full"}`, children: x.map((S) => /* @__PURE__ */ ee.jsxs(
    "div",
    {
      className: "flex flex-col select-none mr-1 w-full",
      children: [
        /* @__PURE__ */ ee.jsxs(
          "div",
          {
            id: S.id,
            "typeof-item": S.type,
            className: `border border-transparent mr-1 transition-colors flex flex-row hover:cursor-pointer rounded-r-sm clickable hover:bg-slate-300 justify-between text-black ${c} ${v === S.id && t ? `bg-vscode-overlay hover:bg-vscode-blue ${d}` : y === S.id && n ? `bg-slate-700 hover:bg-slate-600 text-white ${p}` : ""}  ${w != null && w.isCut && w.id === S.id ? "opacity-50" : ""} }`,
            children: [
              /* @__PURE__ */ ee.jsx(
                Bl,
                {
                  item: S,
                  onClickE: (k) => {
                    k.stopPropagation(), h(gn({ id: S.id, type: S.type })), r(!0), i(!1), S.type === "file" ? h(_o(S.id)) : h(
                      yn({
                        item: { id: S.id, type: S.type },
                        collapse: !0
                      })
                    ), u({ id: S.id, type: S.type });
                  },
                  className: g
                }
              ),
              /* @__PURE__ */ ee.jsx(
                Pl,
                {
                  item: S,
                  selected: v,
                  primaryClass: a,
                  secondaryClass: l,
                  showBlue: t,
                  onClickE: (k) => {
                    k.stopPropagation(), r(!1), i(!0), h(
                      yo({
                        id: S.id,
                        type: S.type,
                        threeDot: { x: k.clientY, y: k.clientX }
                      })
                    ), b({ id: S.id, type: S.type });
                  }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ ee.jsxs(ee.Fragment, { children: [
          /* @__PURE__ */ ee.jsx("div", { id: `ghost-input-${S.id}` }),
          S.type === "folder" && !S.collapsed && /* @__PURE__ */ ee.jsxs("div", { className: "flex flex-row sub-folder", children: [
            /* @__PURE__ */ ee.jsx(
              jl,
              {
                item: S,
                className: o,
                style: s,
                onClickE: (k) => {
                  k.stopPropagation(), r(!0), i(!1), h(gn({ id: S.id, type: S.type })), h(
                    yn({
                      item: { id: S.id, type: S.type },
                      collapse: !0
                    })
                  );
                }
              }
            ),
            /* @__PURE__ */ ee.jsx(
              So,
              {
                data: (() => {
                  const k = e.find((N) => N.id === S.id);
                  return k == null ? void 0 : k.subFoldersAndFiles;
                })(),
                showBlue: t,
                setShowBlue: r,
                showGray: n,
                setShowGray: i,
                collapseBtnClassname: o,
                collapseBtnStyle: s,
                threeDotPrimaryClass: a,
                threeDotSecondaryClass: l,
                clickableAreaClassName: c,
                selectedClickableAreaClassName: d,
                contextSelectedClickableAreaClassName: p,
                itemTitleClassName: g,
                onItemSelected: u,
                onItemContextSelected: b
              }
            )
          ] })
        ] })
      ]
    },
    S.id
  )) });
};
function Lr(e, t) {
  Ne(() => {
    function r(n) {
      e.current && !e.current.contains(n.target) && t(!1);
    }
    return document.addEventListener("mousedown", r), () => {
      document.removeEventListener("mousedown", r);
    };
  }, [e, t]);
}
const $l = ({
  top: e,
  left: t,
  setShowContext: r,
  actions: n,
  className: i,
  clickableAreaClassName: o,
  hrColor: s
}) => {
  const a = Qe(null);
  return Lr(a, r), /* @__PURE__ */ ee.jsx(
    "div",
    {
      ref: a,
      className: `absolute bg-monaco-color rounded-md px-1 py-2 w-48 box-border text-sm z-50 ${i}`,
      style: { top: `${e}px`, left: `${t}px` },
      children: /* @__PURE__ */ ee.jsx("ul", { className: "w-full", children: n.map((l, c) => l.type === "hr" ? /* @__PURE__ */ ee.jsx(
        "hr",
        {
          style: { borderTopColor: s },
          className: "my-2 border-t border-t-zinc-600"
        },
        c
      ) : /* @__PURE__ */ ee.jsx(
        "li",
        {
          onClick: () => {
            l.disabled || (l.handler(), r(!1));
          },
          className: `rounded-md px-7 py-1 ${l.disabled ? "text-zinc-500" : `hover:bg-hover-blue cursor-pointer text-white ${o}`} `,
          children: /* @__PURE__ */ ee.jsx("span", { className: "select-none", children: l.title })
        },
        c
      )) })
    }
  );
}, Ul = "new-file-logo", Oi = "error-logo", Vl = "closed-folder", Wl = "rename-logo", Hl = ({
  closeCallback: e,
  submit: t,
  padding: r,
  show: n,
  item: i,
  container: o,
  validExtensions: s,
  existingItems: a,
  className: l,
  style: c
}) => {
  var G;
  const [d, p] = Ce(
    (G = i.rename) != null && G.wholeName ? i.rename.wholeName : ""
  ), g = Qe(null), u = Qe(null), b = Qe(null), [h, v] = Ce(!1), [y, w] = Ce(""), x = i.rename ? Wl : i.type === "file" ? Ul : Vl, [S, k] = Ce(x), [N, T] = Ce("bottom"), V = (X) => {
    if (!X || !g.current)
      return "";
    const C = X.offsetTop, z = X.scrollTop, P = g.current.offsetTop - C;
    return P - z < 393 && z < P ? P - z < 196 ? "bottom" : z - 196 < P ? "top" : "" : "";
  }, F = (X) => {
    X.error ? X.errorMessage !== "" ? (v(!0), k(Oi), w(X.errorMessage)) : (v(!0), k(x), w("")) : (v(!1), i.type === "file" ? k(Eo(X.ext)) : k(x), w(""));
  };
  return Ne(() => {
    if (!b.current || !h || y === "" || !o)
      return;
    const X = V(o);
    X !== "" && X !== N && T(X);
  }, [h, y, o, N]), Lr(g, () => {
    !h && d.length > 0 && t(d), e(!1);
  }), Ne(() => {
    u.current && setTimeout(() => {
      var X, C, z, m;
      if ((X = u.current) == null || X.focus(), i.rename) {
        const P = (C = i.rename.wholeName) == null ? void 0 : C.lastIndexOf(".");
        (z = u.current) == null || z.select(), P !== void 0 && P !== -1 && ((m = u.current) == null || m.setSelectionRange(0, P));
      }
    }, 0);
  }, [n, i.rename]), Ne(() => {
    const X = Ci(
      void 0,
      i,
      d,
      a,
      s
    );
    F(X);
  }, [d]), /* @__PURE__ */ ee.jsx(
    "div",
    {
      className: `py-[0.32rem] ${n ? "block" : "hidden"} ${r === 0 ? "mx-1 pr-1 pl-[0.3rem]" : "pl-[1.3rem]"}`,
      ref: g,
      style: { wordWrap: "break-word" },
      children: /* @__PURE__ */ ee.jsxs("div", { className: "flex flex-row", children: [
        /* @__PURE__ */ ee.jsx("span", { className: `span-logo ml-[3px] ${S} w-[14px] mr-[6px]`, children: " " }),
        /* @__PURE__ */ ee.jsxs("div", { className: "flex mx-1 relative flex-col w-[80%] max-w-[10rem]", children: [
          /* @__PURE__ */ ee.jsx(
            "input",
            {
              className: `rounded-none border text-white border-monaco-color outline-0 w-full bg-monaco-color text-black ${h && y !== "" ? "focus:border-red-500" : "focus:border-cyan-500"} ${l}`,
              style: c,
              value: d,
              autoFocus: !0,
              onChange: (X) => {
                p(X.target.value);
              },
              onKeyDown: (X) => {
                if (X.key === "Enter")
                  if (!h && d.trim().length > 0)
                    t(d);
                  else if (d.trim().length === 0)
                    v(!0), k(Oi), w(
                      `The ${i.type} name cannot be empty. Please enter a valid name.`
                    );
                  else {
                    const C = Ci(
                      !0,
                      i,
                      d,
                      a,
                      s
                    );
                    F(C);
                  }
                else
                  X.key === "Escape" && t(!1);
              },
              ref: u
            }
          ),
          h && y !== "" && /* @__PURE__ */ ee.jsx(
            "div",
            {
              ref: b,
              className: `w-fit z-10 select-none absolute flex items-start p-1 border border-red-500 bg-red-900 text-sm text-white ${N !== "top" ? "top-7" : "bottom-7"}`,
              children: y
            }
          )
        ] })
      ] })
    }
  );
}, Zl = "data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%23000000%23000000%23000000%23000000%23000000%20%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M10%2011V17'%20stroke='%23ffffff'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M14%2011V17'%20stroke='%23ffffff'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M4%207H20'%20stroke='%23ffffff'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M6%207H12H18V18C18%2019.6569%2016.6569%2021%2015%2021H9C7.34315%2021%206%2019.6569%206%2018V7Z'%20stroke='%23ffffff'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M9%205C9%203.89543%209.89543%203%2011%203H13C14.1046%203%2015%203.89543%2015%205V7H9V5Z'%20stroke='%23ffffff'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3c/svg%3e", Gl = "data:image/svg+xml,%3csvg%20class='svg-icon'%20style='width:%201em;%20height:%201em;vertical-align:%20middle;fill:%20white;overflow:%20hidden;'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M810.65984%20170.65984q18.3296%200%2030.49472%2012.16512t12.16512%2030.49472q0%2018.00192-12.32896%2030.33088l-268.67712%20268.32896%20268.67712%20268.32896q12.32896%2012.32896%2012.32896%2030.33088%200%2018.3296-12.16512%2030.49472t-30.49472%2012.16512q-18.00192%200-30.33088-12.32896l-268.32896-268.67712-268.32896%20268.67712q-12.32896%2012.32896-30.33088%2012.32896-18.3296%200-30.49472-12.16512t-12.16512-30.49472q0-18.00192%2012.32896-30.33088l268.67712-268.32896-268.67712-268.32896q-12.32896-12.32896-12.32896-30.33088%200-18.3296%2012.16512-30.49472t30.49472-12.16512q18.00192%200%2030.33088%2012.32896l268.32896%20268.67712%20268.32896-268.67712q12.32896-12.32896%2030.33088-12.32896z'%20/%3e%3c/svg%3e", Kl = ({
  title: e,
  content: t,
  actionText: r,
  close: n,
  action: i,
  className: o
}) => {
  const s = Qe(null);
  return Lr(s, () => {
    n(!1);
  }), /* @__PURE__ */ ee.jsx("div", { className: "backdrop-brightness-50 absolute top-0 z-50 flex w-full h-full justify-center items-start pt-6 select-none", children: /* @__PURE__ */ ee.jsxs(
    "div",
    {
      ref: s,
      className: `bg-dark-hover border border-slate-600 shadow-sm p-4 rounded-lg flex flex-col my-2 h-fit w-96 text-white ${o}`,
      children: [
        /* @__PURE__ */ ee.jsxs("div", { className: "flex flex-row justify-between", children: [
          /* @__PURE__ */ ee.jsx("span", { className: "text-2xl font-semibold", children: e }),
          /* @__PURE__ */ ee.jsx("span", { className: "self-start", children: /* @__PURE__ */ ee.jsx(
            "img",
            {
              src: Gl,
              onClick: () => {
                n(!1);
              },
              alt: "close",
              className: "transition-colors p-1 h-5 w-5 cursor-pointer hover:bg-slate-500 rounded-md align-baseline"
            }
          ) })
        ] }),
        /* @__PURE__ */ ee.jsx("div", { className: "text-sm my-4", children: t }),
        /* @__PURE__ */ ee.jsxs("div", { className: "flex justify-between my-2", children: [
          /* @__PURE__ */ ee.jsx("div", { className: "w-32", children: " " }),
          /* @__PURE__ */ ee.jsxs("div", { className: "flex justify-between pl-12 w-full", children: [
            /* @__PURE__ */ ee.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  n(!1);
                },
                className: "text-sm px-2 py-1 rounded-lg bg-slate-600 hover:bg-slate-500 transition-colors",
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ ee.jsxs(
              "button",
              {
                type: "button",
                onClick: () => {
                  i();
                },
                className: "text-sm bg-red-700 hover:bg-red-500 px-2 py-1 rounded-lg transition-colors flex flex-row items-center",
                children: [
                  /* @__PURE__ */ ee.jsx(
                    "img",
                    {
                      alt: "delete",
                      src: Zl,
                      className: "w-4 h-4 mr-1"
                    }
                  ),
                  r
                ]
              }
            )
          ] })
        ] })
      ]
    }
  ) });
}, Yl = (e, t) => {
  const r = document.createElement("div");
  return Ne(() => {
    if (t)
      return t.prepend(r), () => {
        t.removeChild(r);
      };
  }, [t, r]), an(e, r);
}, ql = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23000'%20height='800px'%20width='800px'%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20330%20330'%20xml:space='preserve'%3e%3cpath%20id='XMLID_92_'%20d='M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001%20l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996%20C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z'/%3e%3c/svg%3e", Xl = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%20fill='%23000'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9.5%201.1l3.4%203.5.1.4v2h-1V6H8V2H3v11h4v1H2.5l-.5-.5v-12l.5-.5h6.7l.3.1zM9%202v3h2.9L9%202zm4%2014h-1v-3H9v-1h3V9h1v3h3v1h-3v3z'/%3e%3c/svg%3e", Jl = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%20fill='%23000'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14.5%202H7.71l-.85-.85L6.51%201h-5l-.5.5v11l.5.5H7v-1H1.99V6h4.49l.35-.15.86-.86H14v1.5l-.001.51h1.011V2.5L14.5%202zm-.51%202h-6.5l-.35.15-.86.86H2v-3h4.29l.85.85.36.15H14l-.01.99zM13%2016h-1v-3H9v-1h3V9h1v3h3v1h-3v3z'/%3e%3c/svg%3e", Ql = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.5535%2016.5061C12.4114%2016.6615%2012.2106%2016.75%2012%2016.75C11.7894%2016.75%2011.5886%2016.6615%2011.4465%2016.5061L7.44648%2012.1311C7.16698%2011.8254%207.18822%2011.351%207.49392%2011.0715C7.79963%2010.792%208.27402%2010.8132%208.55352%2011.1189L11.25%2014.0682V3C11.25%202.58579%2011.5858%202.25%2012%202.25C12.4142%202.25%2012.75%202.58579%2012.75%203V14.0682L15.4465%2011.1189C15.726%2010.8132%2016.2004%2010.792%2016.5061%2011.0715C16.8118%2011.351%2016.833%2011.8254%2016.5535%2012.1311L12.5535%2016.5061Z'%20fill='%23000'/%3e%3cpath%20d='M3.75%2015C3.75%2014.5858%203.41422%2014.25%203%2014.25C2.58579%2014.25%202.25%2014.5858%202.25%2015V15.0549C2.24998%2016.4225%202.24996%2017.5248%202.36652%2018.3918C2.48754%2019.2919%202.74643%2020.0497%203.34835%2020.6516C3.95027%2021.2536%204.70814%2021.5125%205.60825%2021.6335C6.47522%2021.75%207.57754%2021.75%208.94513%2021.75H15.0549C16.4225%2021.75%2017.5248%2021.75%2018.3918%2021.6335C19.2919%2021.5125%2020.0497%2021.2536%2020.6517%2020.6516C21.2536%2020.0497%2021.5125%2019.2919%2021.6335%2018.3918C21.75%2017.5248%2021.75%2016.4225%2021.75%2015.0549V15C21.75%2014.5858%2021.4142%2014.25%2021%2014.25C20.5858%2014.25%2020.25%2014.5858%2020.25%2015C20.25%2016.4354%2020.2484%2017.4365%2020.1469%2018.1919C20.0482%2018.9257%2019.8678%2019.3142%2019.591%2019.591C19.3142%2019.8678%2018.9257%2020.0482%2018.1919%2020.1469C17.4365%2020.2484%2016.4354%2020.25%2015%2020.25H9C7.56459%2020.25%206.56347%2020.2484%205.80812%2020.1469C5.07435%2020.0482%204.68577%2019.8678%204.40901%2019.591C4.13225%2019.3142%203.9518%2018.9257%203.85315%2018.1919C3.75159%2017.4365%203.75%2016.4354%203.75%2015Z'%20fill='%23000'/%3e%3c/svg%3e", Xt = Math.min, $t = Math.max, Rr = Math.round, wr = Math.floor, zt = (e) => ({
  x: e,
  y: e
}), ec = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, tc = {
  start: "end",
  end: "start"
};
function wn(e, t, r) {
  return $t(e, Xt(t, r));
}
function lr(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Vt(e) {
  return e.split("-")[0];
}
function cr(e) {
  return e.split("-")[1];
}
function ko(e) {
  return e === "x" ? "y" : "x";
}
function Dn(e) {
  return e === "y" ? "height" : "width";
}
function Mr(e) {
  return ["top", "bottom"].includes(Vt(e)) ? "y" : "x";
}
function jn(e) {
  return ko(Mr(e));
}
function rc(e, t, r) {
  r === void 0 && (r = !1);
  const n = cr(e), i = jn(e), o = Dn(i);
  let s = i === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (s = Tr(s)), [s, Tr(s)];
}
function nc(e) {
  const t = Tr(e);
  return [_n(e), t, _n(t)];
}
function _n(e) {
  return e.replace(/start|end/g, (t) => tc[t]);
}
function ic(e, t, r) {
  const n = ["left", "right"], i = ["right", "left"], o = ["top", "bottom"], s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return r ? t ? i : n : t ? n : i;
    case "left":
    case "right":
      return t ? o : s;
    default:
      return [];
  }
}
function oc(e, t, r, n) {
  const i = cr(e);
  let o = ic(Vt(e), r === "start", n);
  return i && (o = o.map((s) => s + "-" + i), t && (o = o.concat(o.map(_n)))), o;
}
function Tr(e) {
  return e.replace(/left|right|bottom|top/g, (t) => ec[t]);
}
function sc(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Co(e) {
  return typeof e != "number" ? sc(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Nr(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function Ai(e, t, r) {
  let {
    reference: n,
    floating: i
  } = e;
  const o = Mr(t), s = jn(t), a = Dn(s), l = Vt(t), c = o === "y", d = n.x + n.width / 2 - i.width / 2, p = n.y + n.height / 2 - i.height / 2, g = n[a] / 2 - i[a] / 2;
  let u;
  switch (l) {
    case "top":
      u = {
        x: d,
        y: n.y - i.height
      };
      break;
    case "bottom":
      u = {
        x: d,
        y: n.y + n.height
      };
      break;
    case "right":
      u = {
        x: n.x + n.width,
        y: p
      };
      break;
    case "left":
      u = {
        x: n.x - i.width,
        y: p
      };
      break;
    default:
      u = {
        x: n.x,
        y: n.y
      };
  }
  switch (cr(t)) {
    case "start":
      u[s] -= g * (r && c ? -1 : 1);
      break;
    case "end":
      u[s] += g * (r && c ? -1 : 1);
      break;
  }
  return u;
}
const ac = async (e, t, r) => {
  const {
    placement: n = "bottom",
    strategy: i = "absolute",
    middleware: o = [],
    platform: s
  } = r, a = o.filter(Boolean), l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let c = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: i
  }), {
    x: d,
    y: p
  } = Ai(c, n, l), g = n, u = {}, b = 0;
  for (let h = 0; h < a.length; h++) {
    const {
      name: v,
      fn: y
    } = a[h], {
      x: w,
      y: x,
      data: S,
      reset: k
    } = await y({
      x: d,
      y: p,
      initialPlacement: n,
      placement: g,
      strategy: i,
      middlewareData: u,
      rects: c,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (d = w ?? d, p = x ?? p, u = {
      ...u,
      [v]: {
        ...u[v],
        ...S
      }
    }, k && b <= 50) {
      b++, typeof k == "object" && (k.placement && (g = k.placement), k.rects && (c = k.rects === !0 ? await s.getElementRects({
        reference: e,
        floating: t,
        strategy: i
      }) : k.rects), {
        x: d,
        y: p
      } = Ai(c, g, l)), h = -1;
      continue;
    }
  }
  return {
    x: d,
    y: p,
    placement: g,
    strategy: i,
    middlewareData: u
  };
};
async function Oo(e, t) {
  var r;
  t === void 0 && (t = {});
  const {
    x: n,
    y: i,
    platform: o,
    rects: s,
    elements: a,
    strategy: l
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: p = "floating",
    altBoundary: g = !1,
    padding: u = 0
  } = lr(t, e), b = Co(u), v = a[g ? p === "floating" ? "reference" : "floating" : p], y = Nr(await o.getClippingRect({
    element: (r = await (o.isElement == null ? void 0 : o.isElement(v))) == null || r ? v : v.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: l
  })), w = p === "floating" ? {
    ...s.floating,
    x: n,
    y: i
  } : s.reference, x = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(a.floating)), S = await (o.isElement == null ? void 0 : o.isElement(x)) ? await (o.getScale == null ? void 0 : o.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, k = Nr(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: w,
    offsetParent: x,
    strategy: l
  }) : w);
  return {
    top: (y.top - k.top + b.top) / S.y,
    bottom: (k.bottom - y.bottom + b.bottom) / S.y,
    left: (y.left - k.left + b.left) / S.x,
    right: (k.right - y.right + b.right) / S.x
  };
}
const lc = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: r,
      y: n,
      placement: i,
      rects: o,
      platform: s,
      elements: a,
      middlewareData: l
    } = t, {
      element: c,
      padding: d = 0
    } = lr(e, t) || {};
    if (c == null)
      return {};
    const p = Co(d), g = {
      x: r,
      y: n
    }, u = jn(i), b = Dn(u), h = await s.getDimensions(c), v = u === "y", y = v ? "top" : "left", w = v ? "bottom" : "right", x = v ? "clientHeight" : "clientWidth", S = o.reference[b] + o.reference[u] - g[u] - o.floating[b], k = g[u] - o.reference[u], N = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let T = N ? N[x] : 0;
    (!T || !await (s.isElement == null ? void 0 : s.isElement(N))) && (T = a.floating[x] || o.floating[b]);
    const V = S / 2 - k / 2, F = T / 2 - h[b] / 2 - 1, G = Xt(p[y], F), X = Xt(p[w], F), C = G, z = T - h[b] - X, m = T / 2 - h[b] / 2 + V, P = wn(C, m, z), se = !l.arrow && cr(i) != null && m != P && o.reference[b] / 2 - (m < C ? G : X) - h[b] / 2 < 0, U = se ? m < C ? m - C : m - z : 0;
    return {
      [u]: g[u] + U,
      data: {
        [u]: P,
        centerOffset: m - P - U,
        ...se && {
          alignmentOffset: U
        }
      },
      reset: se
    };
  }
}), cc = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var r, n;
      const {
        placement: i,
        middlewareData: o,
        rects: s,
        initialPlacement: a,
        platform: l,
        elements: c
      } = t, {
        mainAxis: d = !0,
        crossAxis: p = !0,
        fallbackPlacements: g,
        fallbackStrategy: u = "bestFit",
        fallbackAxisSideDirection: b = "none",
        flipAlignment: h = !0,
        ...v
      } = lr(e, t);
      if ((r = o.arrow) != null && r.alignmentOffset)
        return {};
      const y = Vt(i), w = Vt(a) === a, x = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), S = g || (w || !h ? [Tr(a)] : nc(a));
      !g && b !== "none" && S.push(...oc(a, h, b, x));
      const k = [a, ...S], N = await Oo(t, v), T = [];
      let V = ((n = o.flip) == null ? void 0 : n.overflows) || [];
      if (d && T.push(N[y]), p) {
        const C = rc(i, s, x);
        T.push(N[C[0]], N[C[1]]);
      }
      if (V = [...V, {
        placement: i,
        overflows: T
      }], !T.every((C) => C <= 0)) {
        var F, G;
        const C = (((F = o.flip) == null ? void 0 : F.index) || 0) + 1, z = k[C];
        if (z)
          return {
            data: {
              index: C,
              overflows: V
            },
            reset: {
              placement: z
            }
          };
        let m = (G = V.filter((P) => P.overflows[0] <= 0).sort((P, se) => P.overflows[1] - se.overflows[1])[0]) == null ? void 0 : G.placement;
        if (!m)
          switch (u) {
            case "bestFit": {
              var X;
              const P = (X = V.map((se) => [se.placement, se.overflows.filter((U) => U > 0).reduce((U, pe) => U + pe, 0)]).sort((se, U) => se[1] - U[1])[0]) == null ? void 0 : X[0];
              P && (m = P);
              break;
            }
            case "initialPlacement":
              m = a;
              break;
          }
        if (i !== m)
          return {
            reset: {
              placement: m
            }
          };
      }
      return {};
    }
  };
};
async function uc(e, t) {
  const {
    placement: r,
    platform: n,
    elements: i
  } = e, o = await (n.isRTL == null ? void 0 : n.isRTL(i.floating)), s = Vt(r), a = cr(r), l = Mr(r) === "y", c = ["left", "top"].includes(s) ? -1 : 1, d = o && l ? -1 : 1, p = lr(t, e);
  let {
    mainAxis: g,
    crossAxis: u,
    alignmentAxis: b
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...p
  };
  return a && typeof b == "number" && (u = a === "end" ? b * -1 : b), l ? {
    x: u * d,
    y: g * c
  } : {
    x: g * c,
    y: u * d
  };
}
const dc = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var r, n;
      const {
        x: i,
        y: o,
        placement: s,
        middlewareData: a
      } = t, l = await uc(t, e);
      return s === ((r = a.offset) == null ? void 0 : r.placement) && (n = a.arrow) != null && n.alignmentOffset ? {} : {
        x: i + l.x,
        y: o + l.y,
        data: {
          ...l,
          placement: s
        }
      };
    }
  };
}, fc = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: r,
        y: n,
        placement: i
      } = t, {
        mainAxis: o = !0,
        crossAxis: s = !1,
        limiter: a = {
          fn: (v) => {
            let {
              x: y,
              y: w
            } = v;
            return {
              x: y,
              y: w
            };
          }
        },
        ...l
      } = lr(e, t), c = {
        x: r,
        y: n
      }, d = await Oo(t, l), p = Mr(Vt(i)), g = ko(p);
      let u = c[g], b = c[p];
      if (o) {
        const v = g === "y" ? "top" : "left", y = g === "y" ? "bottom" : "right", w = u + d[v], x = u - d[y];
        u = wn(w, u, x);
      }
      if (s) {
        const v = p === "y" ? "top" : "left", y = p === "y" ? "bottom" : "right", w = b + d[v], x = b - d[y];
        b = wn(w, b, x);
      }
      const h = a.fn({
        ...t,
        [g]: u,
        [p]: b
      });
      return {
        ...h,
        data: {
          x: h.x - r,
          y: h.y - n
        }
      };
    }
  };
};
function Dt(e) {
  return Ao(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function pt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function At(e) {
  var t;
  return (t = (Ao(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Ao(e) {
  return e instanceof Node || e instanceof pt(e).Node;
}
function Ot(e) {
  return e instanceof Element || e instanceof pt(e).Element;
}
function St(e) {
  return e instanceof HTMLElement || e instanceof pt(e).HTMLElement;
}
function Ri(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof pt(e).ShadowRoot;
}
function ur(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: n,
    display: i
  } = bt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !["inline", "contents"].includes(i);
}
function hc(e) {
  return ["table", "td", "th"].includes(Dt(e));
}
function Pn(e) {
  const t = Ln(), r = bt(e);
  return r.transform !== "none" || r.perspective !== "none" || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (r.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (r.contain || "").includes(n));
}
function pc(e) {
  let t = Jt(e);
  for (; St(t) && !Br(t); ) {
    if (Pn(t))
      return t;
    t = Jt(t);
  }
  return null;
}
function Ln() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Br(e) {
  return ["html", "body", "#document"].includes(Dt(e));
}
function bt(e) {
  return pt(e).getComputedStyle(e);
}
function $r(e) {
  return Ot(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function Jt(e) {
  if (Dt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Ri(e) && e.host || // Fallback.
    At(e)
  );
  return Ri(t) ? t.host : t;
}
function Ro(e) {
  const t = Jt(e);
  return Br(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : St(t) && ur(t) ? t : Ro(t);
}
function sr(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const i = Ro(e), o = i === ((n = e.ownerDocument) == null ? void 0 : n.body), s = pt(i);
  return o ? t.concat(s, s.visualViewport || [], ur(i) ? i : [], s.frameElement && r ? sr(s.frameElement) : []) : t.concat(i, sr(i, [], r));
}
function To(e) {
  const t = bt(e);
  let r = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const i = St(e), o = i ? e.offsetWidth : r, s = i ? e.offsetHeight : n, a = Rr(r) !== o || Rr(n) !== s;
  return a && (r = o, n = s), {
    width: r,
    height: n,
    $: a
  };
}
function Mn(e) {
  return Ot(e) ? e : e.contextElement;
}
function Yt(e) {
  const t = Mn(e);
  if (!St(t))
    return zt(1);
  const r = t.getBoundingClientRect(), {
    width: n,
    height: i,
    $: o
  } = To(t);
  let s = (o ? Rr(r.width) : r.width) / n, a = (o ? Rr(r.height) : r.height) / i;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const mc = /* @__PURE__ */ zt(0);
function No(e) {
  const t = pt(e);
  return !Ln() || !t.visualViewport ? mc : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function yc(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== pt(e) ? !1 : t;
}
function Wt(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const i = e.getBoundingClientRect(), o = Mn(e);
  let s = zt(1);
  t && (n ? Ot(n) && (s = Yt(n)) : s = Yt(e));
  const a = yc(o, r, n) ? No(o) : zt(0);
  let l = (i.left + a.x) / s.x, c = (i.top + a.y) / s.y, d = i.width / s.x, p = i.height / s.y;
  if (o) {
    const g = pt(o), u = n && Ot(n) ? pt(n) : n;
    let b = g.frameElement;
    for (; b && n && u !== g; ) {
      const h = Yt(b), v = b.getBoundingClientRect(), y = bt(b), w = v.left + (b.clientLeft + parseFloat(y.paddingLeft)) * h.x, x = v.top + (b.clientTop + parseFloat(y.paddingTop)) * h.y;
      l *= h.x, c *= h.y, d *= h.x, p *= h.y, l += w, c += x, b = pt(b).frameElement;
    }
  }
  return Nr({
    width: d,
    height: p,
    x: l,
    y: c
  });
}
function gc(e) {
  let {
    rect: t,
    offsetParent: r,
    strategy: n
  } = e;
  const i = St(r), o = At(r);
  if (r === o)
    return t;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = zt(1);
  const l = zt(0);
  if ((i || !i && n !== "fixed") && ((Dt(r) !== "body" || ur(o)) && (s = $r(r)), St(r))) {
    const c = Wt(r);
    a = Yt(r), l.x = c.x + r.clientLeft, l.y = c.y + r.clientTop;
  }
  return {
    width: t.width * a.x,
    height: t.height * a.y,
    x: t.x * a.x - s.scrollLeft * a.x + l.x,
    y: t.y * a.y - s.scrollTop * a.y + l.y
  };
}
function vc(e) {
  return Array.from(e.getClientRects());
}
function Io(e) {
  return Wt(At(e)).left + $r(e).scrollLeft;
}
function bc(e) {
  const t = At(e), r = $r(e), n = e.ownerDocument.body, i = $t(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), o = $t(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let s = -r.scrollLeft + Io(e);
  const a = -r.scrollTop;
  return bt(n).direction === "rtl" && (s += $t(t.clientWidth, n.clientWidth) - i), {
    width: i,
    height: o,
    x: s,
    y: a
  };
}
function wc(e, t) {
  const r = pt(e), n = At(e), i = r.visualViewport;
  let o = n.clientWidth, s = n.clientHeight, a = 0, l = 0;
  if (i) {
    o = i.width, s = i.height;
    const c = Ln();
    (!c || c && t === "fixed") && (a = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: o,
    height: s,
    x: a,
    y: l
  };
}
function _c(e, t) {
  const r = Wt(e, !0, t === "fixed"), n = r.top + e.clientTop, i = r.left + e.clientLeft, o = St(e) ? Yt(e) : zt(1), s = e.clientWidth * o.x, a = e.clientHeight * o.y, l = i * o.x, c = n * o.y;
  return {
    width: s,
    height: a,
    x: l,
    y: c
  };
}
function Ti(e, t, r) {
  let n;
  if (t === "viewport")
    n = wc(e, r);
  else if (t === "document")
    n = bc(At(e));
  else if (Ot(t))
    n = _c(t, r);
  else {
    const i = No(e);
    n = {
      ...t,
      x: t.x - i.x,
      y: t.y - i.y
    };
  }
  return Nr(n);
}
function Fo(e, t) {
  const r = Jt(e);
  return r === t || !Ot(r) || Br(r) ? !1 : bt(r).position === "fixed" || Fo(r, t);
}
function xc(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let n = sr(e, [], !1).filter((a) => Ot(a) && Dt(a) !== "body"), i = null;
  const o = bt(e).position === "fixed";
  let s = o ? Jt(e) : e;
  for (; Ot(s) && !Br(s); ) {
    const a = bt(s), l = Pn(s);
    !l && a.position === "fixed" && (i = null), (o ? !l && !i : !l && a.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || ur(s) && !l && Fo(e, s)) ? n = n.filter((d) => d !== s) : i = a, s = Jt(s);
  }
  return t.set(e, n), n;
}
function Ec(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: n,
    strategy: i
  } = e;
  const s = [...r === "clippingAncestors" ? xc(t, this._c) : [].concat(r), n], a = s[0], l = s.reduce((c, d) => {
    const p = Ti(t, d, i);
    return c.top = $t(p.top, c.top), c.right = Xt(p.right, c.right), c.bottom = Xt(p.bottom, c.bottom), c.left = $t(p.left, c.left), c;
  }, Ti(t, a, i));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Sc(e) {
  return To(e);
}
function kc(e, t, r) {
  const n = St(t), i = At(t), o = r === "fixed", s = Wt(e, !0, o, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = zt(0);
  if (n || !n && !o)
    if ((Dt(t) !== "body" || ur(i)) && (a = $r(t)), n) {
      const c = Wt(t, !0, o, t);
      l.x = c.x + t.clientLeft, l.y = c.y + t.clientTop;
    } else
      i && (l.x = Io(i));
  return {
    x: s.left + a.scrollLeft - l.x,
    y: s.top + a.scrollTop - l.y,
    width: s.width,
    height: s.height
  };
}
function Ni(e, t) {
  return !St(e) || bt(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function zo(e, t) {
  const r = pt(e);
  if (!St(e))
    return r;
  let n = Ni(e, t);
  for (; n && hc(n) && bt(n).position === "static"; )
    n = Ni(n, t);
  return n && (Dt(n) === "html" || Dt(n) === "body" && bt(n).position === "static" && !Pn(n)) ? r : n || pc(e) || r;
}
const Cc = async function(e) {
  let {
    reference: t,
    floating: r,
    strategy: n
  } = e;
  const i = this.getOffsetParent || zo, o = this.getDimensions;
  return {
    reference: kc(t, await i(r), n),
    floating: {
      x: 0,
      y: 0,
      ...await o(r)
    }
  };
};
function Oc(e) {
  return bt(e).direction === "rtl";
}
const Ac = {
  convertOffsetParentRelativeRectToViewportRelativeRect: gc,
  getDocumentElement: At,
  getClippingRect: Ec,
  getOffsetParent: zo,
  getElementRects: Cc,
  getClientRects: vc,
  getDimensions: Sc,
  getScale: Yt,
  isElement: Ot,
  isRTL: Oc
};
function Rc(e, t) {
  let r = null, n;
  const i = At(e);
  function o() {
    clearTimeout(n), r && r.disconnect(), r = null;
  }
  function s(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), o();
    const {
      left: c,
      top: d,
      width: p,
      height: g
    } = e.getBoundingClientRect();
    if (a || t(), !p || !g)
      return;
    const u = wr(d), b = wr(i.clientWidth - (c + p)), h = wr(i.clientHeight - (d + g)), v = wr(c), w = {
      rootMargin: -u + "px " + -b + "px " + -h + "px " + -v + "px",
      threshold: $t(0, Xt(1, l)) || 1
    };
    let x = !0;
    function S(k) {
      const N = k[0].intersectionRatio;
      if (N !== l) {
        if (!x)
          return s();
        N ? s(!1, N) : n = setTimeout(() => {
          s(!1, 1e-7);
        }, 100);
      }
      x = !1;
    }
    try {
      r = new IntersectionObserver(S, {
        ...w,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(S, w);
    }
    r.observe(e);
  }
  return s(!0), o;
}
function Tc(e, t, r, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: o = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = n, c = Mn(e), d = i || o ? [...c ? sr(c) : [], ...sr(t)] : [];
  d.forEach((y) => {
    i && y.addEventListener("scroll", r, {
      passive: !0
    }), o && y.addEventListener("resize", r);
  });
  const p = c && a ? Rc(c, r) : null;
  let g = -1, u = null;
  s && (u = new ResizeObserver((y) => {
    let [w] = y;
    w && w.target === c && u && (u.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
      u && u.observe(t);
    })), r();
  }), c && !l && u.observe(c), u.observe(t));
  let b, h = l ? Wt(e) : null;
  l && v();
  function v() {
    const y = Wt(e);
    h && (y.x !== h.x || y.y !== h.y || y.width !== h.width || y.height !== h.height) && r(), h = y, b = requestAnimationFrame(v);
  }
  return r(), () => {
    d.forEach((y) => {
      i && y.removeEventListener("scroll", r), o && y.removeEventListener("resize", r);
    }), p && p(), u && u.disconnect(), u = null, l && cancelAnimationFrame(b);
  };
}
const Ii = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), i = {
    platform: Ac,
    ...r
  }, o = {
    ...i.platform,
    _c: n
  };
  return ac(e, t, {
    ...i,
    platform: o
  });
};
var Do = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var n = [], i = 0; i < arguments.length; i++) {
        var o = arguments[i];
        if (o) {
          var s = typeof o;
          if (s === "string" || s === "number")
            n.push(o);
          else if (Array.isArray(o)) {
            if (o.length) {
              var a = r.apply(null, o);
              a && n.push(a);
            }
          } else if (s === "object") {
            if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]")) {
              n.push(o.toString());
              continue;
            }
            for (var l in o)
              t.call(o, l) && o[l] && n.push(l);
          }
        }
      }
      return n.join(" ");
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(Do);
var Nc = Do.exports;
const xn = /* @__PURE__ */ Cn(Nc);
/*
* React Tooltip
* {@link https://github.com/ReactTooltip/react-tooltip}
* @copyright ReactTooltip Team
* @license MIT
*/
const Ic = "react-tooltip-core-styles", Fc = "react-tooltip-base-styles", Fi = { core: !1, base: !1 };
function zi({ css: e, id: t = Fc, type: r = "base", ref: n }) {
  var i, o;
  if (!e || typeof document > "u" || Fi[r] || r === "core" && typeof process < "u" && (!((i = process == null ? void 0 : process.env) === null || i === void 0) && i.REACT_TOOLTIP_DISABLE_CORE_STYLES) || r !== "base" && typeof process < "u" && (!((o = process == null ? void 0 : process.env) === null || o === void 0) && o.REACT_TOOLTIP_DISABLE_BASE_STYLES))
    return;
  r === "core" && (t = Ic), n || (n = {});
  const { insertAt: s } = n;
  if (document.getElementById(t))
    return void console.warn(`[react-tooltip] Element with id '${t}' already exists. Call \`removeStyle()\` first`);
  const a = document.head || document.getElementsByTagName("head")[0], l = document.createElement("style");
  l.id = t, l.type = "text/css", s === "top" && a.firstChild ? a.insertBefore(l, a.firstChild) : a.appendChild(l), l.styleSheet ? l.styleSheet.cssText = e : l.appendChild(document.createTextNode(e)), Fi[r] = !0;
}
const Di = (e, t, r) => {
  let n = null;
  return function(...i) {
    const o = () => {
      n = null, r || e.apply(this, i);
    };
    r && !n && (e.apply(this, i), n = setTimeout(o, t)), r || (n && clearTimeout(n), n = setTimeout(o, t));
  };
}, zc = "DEFAULT_TOOLTIP_ID", Dc = { anchorRefs: /* @__PURE__ */ new Set(), activeAnchor: { current: null }, attach: () => {
}, detach: () => {
}, setActiveAnchor: () => {
} }, jc = Rs({ getTooltipData: () => Dc });
function jo(e = zc) {
  return Ts(jc).getTooltipData(e);
}
const Pc = typeof window < "u" ? Fs : Ne, Lc = (e) => {
  if (!(e instanceof HTMLElement || e instanceof SVGElement))
    return !1;
  const t = getComputedStyle(e);
  return ["overflow", "overflow-x", "overflow-y"].some((r) => {
    const n = t.getPropertyValue(r);
    return n === "auto" || n === "scroll";
  });
}, ji = (e) => {
  if (!e)
    return null;
  let t = e.parentElement;
  for (; t; ) {
    if (Lc(t))
      return t;
    t = t.parentElement;
  }
  return document.scrollingElement || document.documentElement;
}, Pi = async ({ elementReference: e = null, tooltipReference: t = null, tooltipArrowReference: r = null, place: n = "top", offset: i = 10, strategy: o = "absolute", middlewares: s = [dc(Number(i)), cc(), fc({ padding: 5 })], border: a }) => {
  if (!e)
    return { tooltipStyles: {}, tooltipArrowStyles: {}, place: n };
  if (t === null)
    return { tooltipStyles: {}, tooltipArrowStyles: {}, place: n };
  const l = s;
  return r ? (l.push(lc({ element: r, padding: 5 })), Ii(e, t, { placement: n, strategy: o, middleware: l }).then(({ x: c, y: d, placement: p, middlewareData: g }) => {
    var u, b;
    const h = { left: `${c}px`, top: `${d}px`, border: a }, { x: v, y } = (u = g.arrow) !== null && u !== void 0 ? u : { x: 0, y: 0 }, w = (b = { top: "bottom", right: "left", bottom: "top", left: "right" }[p.split("-")[0]]) !== null && b !== void 0 ? b : "bottom", x = a && { borderBottom: a, borderRight: a };
    let S = 0;
    if (a) {
      const k = `${a}`.match(/(\d+)px/);
      S = k != null && k[1] ? Number(k[1]) : 1;
    }
    return { tooltipStyles: h, tooltipArrowStyles: { left: v != null ? `${v}px` : "", top: y != null ? `${y}px` : "", right: "", bottom: "", ...x, [w]: `-${4 + S}px` }, place: p };
  })) : Ii(e, t, { placement: "bottom", strategy: o, middleware: l }).then(({ x: c, y: d, placement: p }) => ({ tooltipStyles: { left: `${c}px`, top: `${d}px` }, tooltipArrowStyles: {}, place: p }));
};
var Kt = { tooltip: "core-styles-module_tooltip__3vRRp", fixed: "core-styles-module_fixed__pcSol", arrow: "core-styles-module_arrow__cvMwQ", noArrow: "core-styles-module_noArrow__xock6", clickable: "core-styles-module_clickable__ZuTTB", show: "core-styles-module_show__Nt9eE", closing: "core-styles-module_closing__sGnxF" }, nn = { tooltip: "styles-module_tooltip__mnnfp", arrow: "styles-module_arrow__K0L3T", dark: "styles-module_dark__xNqje", light: "styles-module_light__Z6W-X", success: "styles-module_success__A2AKt", warning: "styles-module_warning__SCK0X", error: "styles-module_error__JvumD", info: "styles-module_info__BWdHW" };
const Mc = ({ forwardRef: e, id: t, className: r, classNameArrow: n, variant: i = "dark", anchorId: o, anchorSelect: s, place: a = "top", offset: l = 10, events: c = ["hover"], openOnClick: d = !1, positionStrategy: p = "absolute", middlewares: g, wrapper: u, delayShow: b = 0, delayHide: h = 0, float: v = !1, hidden: y = !1, noArrow: w = !1, clickable: x = !1, closeOnEsc: S = !1, closeOnScroll: k = !1, closeOnResize: N = !1, openEvents: T, closeEvents: V, globalCloseEvents: F, imperativeModeOnly: G, style: X, position: C, afterShow: z, afterHide: m, content: P, contentWrapperRef: se, isOpen: U, setIsOpen: pe, activeAnchor: W, setActiveAnchor: Q, border: L, opacity: D, arrowColor: oe, role: re = "tooltip" }) => {
  var J;
  const ge = Qe(null), Ie = Qe(null), fe = Qe(null), me = Qe(null), [Ae, Re] = Ce(a), [He, Ue] = Ce({}), [f, $] = Ce({}), [j, O] = Ce(!1), [E, R] = Ce(!1), [B, H] = Ce(null), I = Qe(!1), q = Qe(null), { anchorRefs: te, setActiveAnchor: Y } = jo(t), ae = Qe(!1), [be, xe] = Ce([]), Fe = Qe(!1), Je = d || c.includes("click"), Be = Je || (T == null ? void 0 : T.click) || (T == null ? void 0 : T.dblclick) || (T == null ? void 0 : T.mousedown), Ze = T ? { ...T } : { mouseenter: !0, focus: !0, click: !1, dblclick: !1, mousedown: !1 };
  !T && Je && Object.assign(Ze, { mouseenter: !1, focus: !1, click: !0 });
  const Te = V ? { ...V } : { mouseleave: !0, blur: !0, click: !1, dblclick: !1, mouseup: !1 };
  !V && Je && Object.assign(Te, { mouseleave: !1, blur: !1 });
  const je = F ? { ...F } : { escape: S || !1, scroll: k || !1, resize: N || !1, clickOutsideAnchor: Be || !1 };
  G && (Object.assign(Ze, { mouseenter: !1, focus: !1, click: !1, dblclick: !1, mousedown: !1 }), Object.assign(Te, { mouseleave: !1, blur: !1, click: !1, dblclick: !1, mouseup: !1 }), Object.assign(je, { escape: !1, scroll: !1, resize: !1, clickOutsideAnchor: !1 })), Pc(() => (Fe.current = !0, () => {
    Fe.current = !1;
  }), []);
  const $e = (le) => {
    Fe.current && (le && R(!0), setTimeout(() => {
      Fe.current && (pe == null || pe(le), U === void 0 && O(le));
    }, 10));
  };
  Ne(() => {
    if (U === void 0)
      return () => null;
    U && R(!0);
    const le = setTimeout(() => {
      O(U);
    }, 10);
    return () => {
      clearTimeout(le);
    };
  }, [U]), Ne(() => {
    j !== I.current && (I.current = j, j && (z == null || z()));
  }, [j]);
  const Ke = (le = b) => {
    fe.current && clearTimeout(fe.current), fe.current = setTimeout(() => {
      $e(!0);
    }, le);
  }, rt = (le = h) => {
    me.current && clearTimeout(me.current), me.current = setTimeout(() => {
      ae.current || $e(!1);
    }, le);
  }, et = (le) => {
    var _e;
    if (!le)
      return;
    const ve = (_e = le.currentTarget) !== null && _e !== void 0 ? _e : le.target;
    if (!(ve != null && ve.isConnected))
      return Q(null), void Y({ current: null });
    b ? Ke() : $e(!0), Q(ve), Y({ current: ve }), me.current && clearTimeout(me.current);
  }, Ye = () => {
    x ? rt(h || 100) : h ? rt() : $e(!1), fe.current && clearTimeout(fe.current);
  }, ne = ({ x: le, y: _e }) => {
    var ve;
    const Ve = { getBoundingClientRect: () => ({ x: le, y: _e, width: 0, height: 0, top: _e, left: le, right: le, bottom: _e }) };
    Pi({ place: (ve = B == null ? void 0 : B.place) !== null && ve !== void 0 ? ve : a, offset: l, elementReference: Ve, tooltipReference: ge.current, tooltipArrowReference: Ie.current, strategy: p, middlewares: g, border: L }).then((Ge) => {
      Object.keys(Ge.tooltipStyles).length && Ue(Ge.tooltipStyles), Object.keys(Ge.tooltipArrowStyles).length && $(Ge.tooltipArrowStyles), Re(Ge.place);
    });
  }, ue = (le) => {
    if (!le)
      return;
    const _e = le, ve = { x: _e.clientX, y: _e.clientY };
    ne(ve), q.current = ve;
  }, we = (le) => {
    var _e;
    if (!j)
      return;
    const ve = le.target;
    !((_e = ge.current) === null || _e === void 0) && _e.contains(ve) || [document.querySelector(`[id='${o}']`), ...be].some((Ve) => Ve == null ? void 0 : Ve.contains(ve)) || ($e(!1), fe.current && clearTimeout(fe.current));
  }, ze = Di(et, 50, !0), he = Di(Ye, 50, !0), Ee = Ns(() => {
    var le, _e;
    const ve = (le = B == null ? void 0 : B.position) !== null && le !== void 0 ? le : C;
    ve ? ne(ve) : v ? q.current && ne(q.current) : W != null && W.isConnected && Pi({ place: (_e = B == null ? void 0 : B.place) !== null && _e !== void 0 ? _e : a, offset: l, elementReference: W, tooltipReference: ge.current, tooltipArrowReference: Ie.current, strategy: p, middlewares: g, border: L }).then((Ve) => {
      Fe.current && (Object.keys(Ve.tooltipStyles).length && Ue(Ve.tooltipStyles), Object.keys(Ve.tooltipArrowStyles).length && $(Ve.tooltipArrowStyles), Re(Ve.place));
    });
  }, [j, W, P, X, a, B == null ? void 0 : B.place, l, p, C, B == null ? void 0 : B.position, v]);
  Ne(() => {
    var le, _e;
    const ve = new Set(te);
    be.forEach((de) => {
      ve.add({ current: de });
    });
    const Ve = document.querySelector(`[id='${o}']`);
    Ve && ve.add({ current: Ve });
    const Ge = () => {
      $e(!1);
    }, lt = ji(W), dt = ji(ge.current);
    je.scroll && (window.addEventListener("scroll", Ge), lt == null || lt.addEventListener("scroll", Ge), dt == null || dt.addEventListener("scroll", Ge));
    let nt = null;
    je.resize ? window.addEventListener("resize", Ge) : W && ge.current && (nt = Tc(W, ge.current, Ee, { ancestorResize: !0, elementResize: !0, layoutShift: !0 }));
    const We = (de) => {
      de.key === "Escape" && $e(!1);
    };
    je.escape && window.addEventListener("keydown", We), je.clickOutsideAnchor && window.addEventListener("click", we);
    const A = [], K = (de) => {
      j || et(de);
    }, ie = () => {
      j && Ye();
    }, ye = ["mouseenter", "mouseleave", "focus", "blur"], Oe = ["click", "dblclick", "mousedown", "mouseup"];
    Object.entries(Ze).forEach(([de, Pe]) => {
      Pe && (ye.includes(de) ? A.push({ event: de, listener: ze }) : Oe.includes(de) && A.push({ event: de, listener: K }));
    }), Object.entries(Te).forEach(([de, Pe]) => {
      Pe && (ye.includes(de) ? A.push({ event: de, listener: he }) : Oe.includes(de) && A.push({ event: de, listener: ie }));
    }), v && A.push({ event: "mousemove", listener: ue });
    const ke = () => {
      ae.current = !0;
    }, Se = () => {
      ae.current = !1, Ye();
    };
    return x && !Be && ((le = ge.current) === null || le === void 0 || le.addEventListener("mouseenter", ke), (_e = ge.current) === null || _e === void 0 || _e.addEventListener("mouseleave", Se)), A.forEach(({ event: de, listener: Pe }) => {
      ve.forEach((Le) => {
        var De;
        (De = Le.current) === null || De === void 0 || De.addEventListener(de, Pe);
      });
    }), () => {
      var de, Pe;
      je.scroll && (window.removeEventListener("scroll", Ge), lt == null || lt.removeEventListener("scroll", Ge), dt == null || dt.removeEventListener("scroll", Ge)), je.resize ? window.removeEventListener("resize", Ge) : nt == null || nt(), je.clickOutsideAnchor && window.removeEventListener("click", we), je.escape && window.removeEventListener("keydown", We), x && !Be && ((de = ge.current) === null || de === void 0 || de.removeEventListener("mouseenter", ke), (Pe = ge.current) === null || Pe === void 0 || Pe.removeEventListener("mouseleave", Se)), A.forEach(({ event: Le, listener: De }) => {
        ve.forEach((Xe) => {
          var gt;
          (gt = Xe.current) === null || gt === void 0 || gt.removeEventListener(Le, De);
        });
      });
    };
  }, [W, Ee, E, te, be, T, V, F, Je]), Ne(() => {
    var le, _e;
    let ve = (_e = (le = B == null ? void 0 : B.anchorSelect) !== null && le !== void 0 ? le : s) !== null && _e !== void 0 ? _e : "";
    !ve && t && (ve = `[data-tooltip-id='${t}']`);
    const Ve = new MutationObserver((Ge) => {
      const lt = [], dt = [];
      Ge.forEach((nt) => {
        if (nt.type === "attributes" && nt.attributeName === "data-tooltip-id" && nt.target.getAttribute("data-tooltip-id") === t && lt.push(nt.target), nt.type === "childList") {
          if (W) {
            const We = [...nt.removedNodes].filter((A) => A.nodeType === 1);
            if (ve)
              try {
                dt.push(...We.filter((A) => A.matches(ve))), dt.push(...We.flatMap((A) => [...A.querySelectorAll(ve)]));
              } catch {
              }
            We.some((A) => {
              var K;
              return !!(!((K = A == null ? void 0 : A.contains) === null || K === void 0) && K.call(A, W)) && (R(!1), $e(!1), Q(null), fe.current && clearTimeout(fe.current), me.current && clearTimeout(me.current), !0);
            });
          }
          if (ve)
            try {
              const We = [...nt.addedNodes].filter((A) => A.nodeType === 1);
              lt.push(...We.filter((A) => A.matches(ve))), lt.push(...We.flatMap((A) => [...A.querySelectorAll(ve)]));
            } catch {
            }
        }
      }), (lt.length || dt.length) && xe((nt) => [...nt.filter((We) => !dt.includes(We)), ...lt]);
    });
    return Ve.observe(document.body, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["data-tooltip-id"] }), () => {
      Ve.disconnect();
    };
  }, [t, s, B == null ? void 0 : B.anchorSelect, W]), Ne(() => {
    Ee();
  }, [Ee]), Ne(() => {
    if (!(se != null && se.current))
      return () => null;
    const le = new ResizeObserver(() => {
      Ee();
    });
    return le.observe(se.current), () => {
      le.disconnect();
    };
  }, [P, se == null ? void 0 : se.current]), Ne(() => {
    var le;
    const _e = document.querySelector(`[id='${o}']`), ve = [...be, _e];
    W && ve.includes(W) || Q((le = be[0]) !== null && le !== void 0 ? le : _e);
  }, [o, be, W]), Ne(() => () => {
    fe.current && clearTimeout(fe.current), me.current && clearTimeout(me.current);
  }, []), Ne(() => {
    var le;
    let _e = (le = B == null ? void 0 : B.anchorSelect) !== null && le !== void 0 ? le : s;
    if (!_e && t && (_e = `[data-tooltip-id='${t}']`), _e)
      try {
        const ve = Array.from(document.querySelectorAll(_e));
        xe(ve);
      } catch {
        xe([]);
      }
  }, [t, s, B == null ? void 0 : B.anchorSelect]);
  const qe = (J = B == null ? void 0 : B.content) !== null && J !== void 0 ? J : P, wt = j && Object.keys(He).length > 0;
  return Is(e, () => ({ open: (le) => {
    if (le != null && le.anchorSelect)
      try {
        document.querySelector(le.anchorSelect);
      } catch {
        return void console.warn(`[react-tooltip] "${le.anchorSelect}" is not a valid CSS selector`);
      }
    H(le ?? null), le != null && le.delay ? Ke(le.delay) : $e(!0);
  }, close: (le) => {
    le != null && le.delay ? rt(le.delay) : $e(!1);
  }, activeAnchor: W, place: Ae, isOpen: !!(E && !y && qe && wt) })), E && !y && qe ? xt.createElement(u, { id: t, role: re, className: xn("react-tooltip", Kt.tooltip, nn.tooltip, nn[i], r, `react-tooltip__place-${Ae}`, Kt[wt ? "show" : "closing"], wt ? "react-tooltip__show" : "react-tooltip__closing", p === "fixed" && Kt.fixed, x && Kt.clickable), onTransitionEnd: (le) => {
    j || le.propertyName !== "opacity" || (R(!1), H(null), m == null || m());
  }, style: { ...X, ...He, opacity: D !== void 0 && wt ? D : void 0 }, ref: ge }, qe, xt.createElement(u, { className: xn("react-tooltip-arrow", Kt.arrow, nn.arrow, n, w && Kt.noArrow), style: { ...f, background: oe ? `linear-gradient(to right bottom, transparent 50%, ${oe} 50%)` : void 0 }, ref: Ie })) : null;
}, Bc = ({ content: e }) => xt.createElement("span", { dangerouslySetInnerHTML: { __html: e } }), Li = (e, t) => !("CSS" in window && "supports" in window.CSS) || window.CSS.supports(e, t), on = xt.forwardRef(({ id: e, anchorId: t, anchorSelect: r, content: n, html: i, render: o, className: s, classNameArrow: a, variant: l = "dark", place: c = "top", offset: d = 10, wrapper: p = "div", children: g = null, events: u = ["hover"], openOnClick: b = !1, positionStrategy: h = "absolute", middlewares: v, delayShow: y = 0, delayHide: w = 0, float: x = !1, hidden: S = !1, noArrow: k = !1, clickable: N = !1, closeOnEsc: T = !1, closeOnScroll: V = !1, closeOnResize: F = !1, openEvents: G, closeEvents: X, globalCloseEvents: C, imperativeModeOnly: z = !1, style: m, position: P, isOpen: se, disableStyleInjection: U = !1, border: pe, opacity: W, arrowColor: Q, setIsOpen: L, afterShow: D, afterHide: oe, role: re = "tooltip" }, J) => {
  const [ge, Ie] = Ce(n), [fe, me] = Ce(i), [Ae, Re] = Ce(c), [He, Ue] = Ce(l), [f, $] = Ce(d), [j, O] = Ce(y), [E, R] = Ce(w), [B, H] = Ce(x), [I, q] = Ce(S), [te, Y] = Ce(p), [ae, be] = Ce(u), [xe, Fe] = Ce(h), [Je, Be] = Ce(null), [Ze, Te] = Ce(null), je = Qe(U), { anchorRefs: $e, activeAnchor: Ke } = jo(e), rt = (we) => we == null ? void 0 : we.getAttributeNames().reduce((ze, he) => {
    var Ee;
    return he.startsWith("data-tooltip-") && (ze[he.replace(/^data-tooltip-/, "")] = (Ee = we == null ? void 0 : we.getAttribute(he)) !== null && Ee !== void 0 ? Ee : null), ze;
  }, {}), et = (we) => {
    const ze = { place: (he) => {
      var Ee;
      Re((Ee = he) !== null && Ee !== void 0 ? Ee : c);
    }, content: (he) => {
      Ie(he ?? n);
    }, html: (he) => {
      me(he ?? i);
    }, variant: (he) => {
      var Ee;
      Ue((Ee = he) !== null && Ee !== void 0 ? Ee : l);
    }, offset: (he) => {
      $(he === null ? d : Number(he));
    }, wrapper: (he) => {
      var Ee;
      Y((Ee = he) !== null && Ee !== void 0 ? Ee : p);
    }, events: (he) => {
      const Ee = he == null ? void 0 : he.split(" ");
      be(Ee ?? u);
    }, "position-strategy": (he) => {
      var Ee;
      Fe((Ee = he) !== null && Ee !== void 0 ? Ee : h);
    }, "delay-show": (he) => {
      O(he === null ? y : Number(he));
    }, "delay-hide": (he) => {
      R(he === null ? w : Number(he));
    }, float: (he) => {
      H(he === null ? x : he === "true");
    }, hidden: (he) => {
      q(he === null ? S : he === "true");
    }, "class-name": (he) => {
      Be(he);
    } };
    Object.values(ze).forEach((he) => he(null)), Object.entries(we).forEach(([he, Ee]) => {
      var qe;
      (qe = ze[he]) === null || qe === void 0 || qe.call(ze, Ee);
    });
  };
  Ne(() => {
    Ie(n);
  }, [n]), Ne(() => {
    me(i);
  }, [i]), Ne(() => {
    Re(c);
  }, [c]), Ne(() => {
    Ue(l);
  }, [l]), Ne(() => {
    $(d);
  }, [d]), Ne(() => {
    O(y);
  }, [y]), Ne(() => {
    R(w);
  }, [w]), Ne(() => {
    H(x);
  }, [x]), Ne(() => {
    q(S);
  }, [S]), Ne(() => {
    Fe(h);
  }, [h]), Ne(() => {
    je.current !== U && console.warn("[react-tooltip] Do not change `disableStyleInjection` dynamically.");
  }, [U]), Ne(() => {
    typeof window < "u" && window.dispatchEvent(new CustomEvent("react-tooltip-inject-styles", { detail: { disableCore: U === "core", disableBase: U } }));
  }, []), Ne(() => {
    var we;
    const ze = new Set($e);
    let he = r;
    if (!he && e && (he = `[data-tooltip-id='${e}']`), he)
      try {
        document.querySelectorAll(he).forEach((_e) => {
          ze.add({ current: _e });
        });
      } catch {
        console.warn(`[react-tooltip] "${he}" is not a valid CSS selector`);
      }
    const Ee = document.querySelector(`[id='${t}']`);
    if (Ee && ze.add({ current: Ee }), !ze.size)
      return () => null;
    const qe = (we = Ze ?? Ee) !== null && we !== void 0 ? we : Ke.current, wt = new MutationObserver((_e) => {
      _e.forEach((ve) => {
        var Ve;
        if (!qe || ve.type !== "attributes" || !(!((Ve = ve.attributeName) === null || Ve === void 0) && Ve.startsWith("data-tooltip-")))
          return;
        const Ge = rt(qe);
        et(Ge);
      });
    }), le = { attributes: !0, childList: !1, subtree: !1 };
    if (qe) {
      const _e = rt(qe);
      et(_e), wt.observe(qe, le);
    }
    return () => {
      wt.disconnect();
    };
  }, [$e, Ke, Ze, t, r]), Ne(() => {
    m != null && m.border && console.warn("[react-tooltip] Do not set `style.border`. Use `border` prop instead."), pe && !Li("border", `${pe}`) && console.warn(`[react-tooltip] "${pe}" is not a valid \`border\`.`), m != null && m.opacity && console.warn("[react-tooltip] Do not set `style.opacity`. Use `opacity` prop instead."), W && !Li("opacity", `${W}`) && console.warn(`[react-tooltip] "${W}" is not a valid \`opacity\`.`);
  }, []);
  let Ye = g;
  const ne = Qe(null);
  if (o) {
    const we = o({ content: ge ?? null, activeAnchor: Ze });
    Ye = we ? xt.createElement("div", { ref: ne, className: "react-tooltip-content-wrapper" }, we) : null;
  } else
    ge && (Ye = ge);
  fe && (Ye = xt.createElement(Bc, { content: fe }));
  const ue = { forwardRef: J, id: e, anchorId: t, anchorSelect: r, className: xn(s, Je), classNameArrow: a, content: Ye, contentWrapperRef: ne, place: Ae, variant: He, offset: f, wrapper: te, events: ae, openOnClick: b, positionStrategy: xe, middlewares: v, delayShow: j, delayHide: E, float: B, hidden: I, noArrow: k, clickable: N, closeOnEsc: T, closeOnScroll: V, closeOnResize: F, openEvents: G, closeEvents: X, globalCloseEvents: C, imperativeModeOnly: z, style: m, position: P, isOpen: se, border: pe, opacity: W, arrowColor: Q, setIsOpen: L, afterShow: D, afterHide: oe, activeAnchor: Ze, setActiveAnchor: (we) => Te(we), role: re };
  return xt.createElement(Mc, { ...ue });
});
typeof window < "u" && window.addEventListener("react-tooltip-inject-styles", (e) => {
  e.detail.disableCore || zi({ css: ":root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9;--rt-transition-show-delay:0.15s;--rt-transition-closing-delay:0.15s}.core-styles-module_tooltip__3vRRp{position:absolute;top:0;left:0;pointer-events:none;opacity:0;will-change:opacity}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{position:absolute;background:inherit}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{opacity:var(--rt-opacity);transition:opacity var(--rt-transition-show-delay)ease-out}.core-styles-module_closing__sGnxF{opacity:0;transition:opacity var(--rt-transition-closing-delay)ease-in}", type: "core" }), e.detail.disableBase || zi({ css: `
.styles-module_tooltip__mnnfp{padding:8px 16px;border-radius:3px;font-size:90%;width:max-content}.styles-module_arrow__K0L3T{width:8px;height:8px}[class*='react-tooltip__place-top']>.styles-module_arrow__K0L3T{transform:rotate(45deg)}[class*='react-tooltip__place-right']>.styles-module_arrow__K0L3T{transform:rotate(135deg)}[class*='react-tooltip__place-bottom']>.styles-module_arrow__K0L3T{transform:rotate(225deg)}[class*='react-tooltip__place-left']>.styles-module_arrow__K0L3T{transform:rotate(315deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}`, type: "base" });
});
const $c = ({
  newFile: e,
  newFolder: t,
  download: r,
  collapseArea: n,
  collapsed: i,
  btnClassName: o,
  projectName: s,
  disableCollapse: a,
  disableTooltip: l,
  disableDownload: c
}) => /* @__PURE__ */ ee.jsxs(
  "div",
  {
    onClick: () => {
      a || n();
    },
    className: `flex w-full select-none flex-row items-center ${a ? "cursor-default" : "cursor-pointer"}`,
    children: [
      /* @__PURE__ */ ee.jsx(
        "img",
        {
          src: ql,
          className: `${i ? "rotate-180" : "rotate-[270deg]"} mr-2 mb-1 h-3 w-3 self-center transition-transform`,
          alt: "Down Arrow"
        }
      ),
      /* @__PURE__ */ ee.jsxs("span", { className: "flex w-full flex-row justify-between", children: [
        /* @__PURE__ */ ee.jsx("span", { className: "text-black text-center overflow-x-clip mr-2", children: s || "Files" }),
        /* @__PURE__ */ ee.jsxs("span", { className: "flex items-center", children: [
          /* @__PURE__ */ ee.jsxs("span", { className: "text-black", children: [
            !l && /* @__PURE__ */ ee.jsx(
              on,
              {
                className: "z-50",
                id: "new-file",
                style: { backgroundColor: "rgb(60 60 60)" }
              }
            ),
            /* @__PURE__ */ ee.jsx(
              "button",
              {
                type: "button",
                onClick: (d) => {
                  d.stopPropagation(), e();
                },
                className: `cursor-pointer rounded-sm hover:bg-slate-300 p-[2px] mr-[2px] ${o}`,
                children: /* @__PURE__ */ ee.jsx(
                  "img",
                  {
                    "data-tooltip-id": "new-file",
                    "data-tooltip-content": "New File",
                    src: Xl,
                    className: "h-5 w-5",
                    alt: "New File"
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ ee.jsxs("span", { className: "text-black", children: [
            !l && /* @__PURE__ */ ee.jsx(
              on,
              {
                className: "z-50",
                id: "new-folder",
                style: { backgroundColor: "rgb(60 60 60)" }
              }
            ),
            /* @__PURE__ */ ee.jsx(
              "button",
              {
                type: "button",
                onClick: (d) => {
                  d.stopPropagation(), t();
                },
                className: `cursor-pointer rounded-sm hover:bg-slate-300 p-[2px] mx-[2px] ${o}`,
                children: /* @__PURE__ */ ee.jsx(
                  "img",
                  {
                    "data-tooltip-id": "new-folder",
                    "data-tooltip-content": "New Folder",
                    src: Jl,
                    className: "h-5 w-5",
                    alt: "New Folder"
                  }
                )
              }
            )
          ] }),
          !c && /* @__PURE__ */ ee.jsxs("span", { className: "text-black", children: [
            !l && /* @__PURE__ */ ee.jsx(
              on,
              {
                className: "z-50",
                id: "download-project",
                style: { backgroundColor: "rgb(60 60 60)" }
              }
            ),
            /* @__PURE__ */ ee.jsx(
              "button",
              {
                type: "button",
                onClick: (d) => {
                  d.stopPropagation(), r();
                },
                className: `cursor-pointer rounded-sm hover:bg-slate-300 p-[2px] ml-[2px] ${o}`,
                children: /* @__PURE__ */ ee.jsx(
                  "img",
                  {
                    "data-tooltip-id": "download-project",
                    "data-tooltip-content": "Download Project",
                    src: Ql,
                    className: "h-5 w-5",
                    alt: "Download Project"
                  }
                )
              }
            )
          ] })
        ] })
      ] })
    ]
  }
);
var Bn = {}, $n = {};
$n.__esModule = !0;
$n.default = Wc;
function xr(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? xr = function(r) {
    return typeof r;
  } : xr = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, xr(e);
}
function sn() {
}
var Uc = {
  getItem: sn,
  setItem: sn,
  removeItem: sn
};
function Vc(e) {
  if ((typeof self > "u" ? "undefined" : xr(self)) !== "object" || !(e in self))
    return !1;
  try {
    var t = self[e], r = "redux-persist ".concat(e, " test");
    t.setItem(r, "test"), t.getItem(r), t.removeItem(r);
  } catch {
    return process.env.NODE_ENV !== "production" && console.warn("redux-persist ".concat(e, " test failed, persistence will be disabled.")), !1;
  }
  return !0;
}
function Wc(e) {
  var t = "".concat(e, "Storage");
  return Vc(t) ? self[t] : (process.env.NODE_ENV !== "production" && console.error("redux-persist failed to create sync storage. falling back to noop storage."), Uc);
}
Bn.__esModule = !0;
Bn.default = Gc;
var Hc = Zc($n);
function Zc(e) {
  return e && e.__esModule ? e : { default: e };
}
function Gc(e) {
  var t = (0, Hc.default)(e);
  return {
    getItem: function(n) {
      return new Promise(function(i, o) {
        i(t.getItem(n));
      });
    },
    setItem: function(n, i) {
      return new Promise(function(o, s) {
        o(t.setItem(n, i));
      });
    },
    removeItem: function(n) {
      return new Promise(function(i, o) {
        i(t.removeItem(n));
      });
    }
  };
}
var Po = void 0, Kc = Yc(Bn);
function Yc(e) {
  return e && e.__esModule ? e : { default: e };
}
var qc = (0, Kc.default)("local");
Po = qc;
var Un = "persist:", Lo = "persist/FLUSH", Vn = "persist/REHYDRATE", Mo = "persist/PAUSE", Bo = "persist/PERSIST", $o = "persist/PURGE", Uo = "persist/REGISTER", Xc = -1;
function rr(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? rr = function(r) {
    return typeof r;
  } : rr = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, rr(e);
}
function Mi(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Jc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Mi(r, !0).forEach(function(n) {
      Qc(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Mi(r).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Qc(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function eu(e, t, r, n) {
  var i = n.debug, o = Jc({}, r);
  return e && rr(e) === "object" && Object.keys(e).forEach(function(s) {
    if (s !== "_persist") {
      if (t[s] !== r[s]) {
        process.env.NODE_ENV !== "production" && i && console.log("redux-persist/stateReconciler: sub state for key `%s` modified, skipping.", s);
        return;
      }
      o[s] = e[s];
    }
  }), process.env.NODE_ENV !== "production" && i && e && rr(e) === "object" && console.log("redux-persist/stateReconciler: rehydrated keys '".concat(Object.keys(e).join(", "), "'")), o;
}
function tu(e) {
  var t = e.blacklist || null, r = e.whitelist || null, n = e.transforms || [], i = e.throttle || 0, o = "".concat(e.keyPrefix !== void 0 ? e.keyPrefix : Un).concat(e.key), s = e.storage, a;
  e.serialize === !1 ? a = function(k) {
    return k;
  } : typeof e.serialize == "function" ? a = e.serialize : a = ru;
  var l = e.writeFailHandler || null, c = {}, d = {}, p = [], g = null, u = null, b = function(k) {
    Object.keys(k).forEach(function(N) {
      y(N) && c[N] !== k[N] && p.indexOf(N) === -1 && p.push(N);
    }), Object.keys(c).forEach(function(N) {
      k[N] === void 0 && y(N) && p.indexOf(N) === -1 && c[N] !== void 0 && p.push(N);
    }), g === null && (g = setInterval(h, i)), c = k;
  };
  function h() {
    if (p.length === 0) {
      g && clearInterval(g), g = null;
      return;
    }
    var S = p.shift(), k = n.reduce(function(N, T) {
      return T.in(N, S, c);
    }, c[S]);
    if (k !== void 0)
      try {
        d[S] = a(k);
      } catch (N) {
        console.error("redux-persist/createPersistoid: error serializing state", N);
      }
    else
      delete d[S];
    p.length === 0 && v();
  }
  function v() {
    Object.keys(d).forEach(function(S) {
      c[S] === void 0 && delete d[S];
    }), u = s.setItem(o, a(d)).catch(w);
  }
  function y(S) {
    return !(r && r.indexOf(S) === -1 && S !== "_persist" || t && t.indexOf(S) !== -1);
  }
  function w(S) {
    l && l(S), S && process.env.NODE_ENV !== "production" && console.error("Error storing data", S);
  }
  var x = function() {
    for (; p.length !== 0; )
      h();
    return u || Promise.resolve();
  };
  return {
    update: b,
    flush: x
  };
}
function ru(e) {
  return JSON.stringify(e);
}
function nu(e) {
  var t = e.transforms || [], r = "".concat(e.keyPrefix !== void 0 ? e.keyPrefix : Un).concat(e.key), n = e.storage, i = e.debug, o;
  return e.deserialize === !1 ? o = function(a) {
    return a;
  } : typeof e.deserialize == "function" ? o = e.deserialize : o = iu, n.getItem(r).then(function(s) {
    if (s)
      try {
        var a = {}, l = o(s);
        return Object.keys(l).forEach(function(c) {
          a[c] = t.reduceRight(function(d, p) {
            return p.out(d, c, l);
          }, o(l[c]));
        }), a;
      } catch (c) {
        throw process.env.NODE_ENV !== "production" && i && console.log("redux-persist/getStoredState: Error restoring data ".concat(s), c), c;
      }
    else
      return;
  });
}
function iu(e) {
  return JSON.parse(e);
}
function ou(e) {
  var t = e.storage, r = "".concat(e.keyPrefix !== void 0 ? e.keyPrefix : Un).concat(e.key);
  return t.removeItem(r, su);
}
function su(e) {
  e && process.env.NODE_ENV !== "production" && console.error("redux-persist/purgeStoredState: Error purging data stored state", e);
}
function Bi(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function kt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Bi(r, !0).forEach(function(n) {
      au(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Bi(r).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function au(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function lu(e, t) {
  if (e == null)
    return {};
  var r = cu(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      n = o[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function cu(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, o;
  for (o = 0; o < n.length; o++)
    i = n[o], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var uu = 5e3;
function du(e, t) {
  if (process.env.NODE_ENV !== "production") {
    if (!e)
      throw new Error("config is required for persistReducer");
    if (!e.key)
      throw new Error("key is required in persistor config");
    if (!e.storage)
      throw new Error("redux-persist: config.storage is required. Try using one of the provided storage engines `import storage from 'redux-persist/lib/storage'`");
  }
  var r = e.version !== void 0 ? e.version : Xc;
  e.debug;
  var n = e.stateReconciler === void 0 ? eu : e.stateReconciler, i = e.getStoredState || nu, o = e.timeout !== void 0 ? e.timeout : uu, s = null, a = !1, l = !0, c = function(p) {
    return p._persist.rehydrated && s && !l && s.update(p), p;
  };
  return function(d, p) {
    var g = d || {}, u = g._persist, b = lu(g, ["_persist"]), h = b;
    if (p.type === Bo) {
      var v = !1, y = function(V, F) {
        process.env.NODE_ENV !== "production" && v && console.error('redux-persist: rehydrate for "'.concat(e.key, '" called after timeout.'), V, F), v || (p.rehydrate(e.key, V, F), v = !0);
      };
      if (o && setTimeout(function() {
        !v && y(void 0, new Error('redux-persist: persist timed out for persist key "'.concat(e.key, '"')));
      }, o), l = !1, s || (s = tu(e)), u)
        return kt({}, t(h, p), {
          _persist: u
        });
      if (typeof p.rehydrate != "function" || typeof p.register != "function")
        throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");
      return p.register(e.key), i(e).then(function(T) {
        var V = e.migrate || function(F, G) {
          return Promise.resolve(F);
        };
        V(T, r).then(function(F) {
          y(F);
        }, function(F) {
          process.env.NODE_ENV !== "production" && F && console.error("redux-persist: migration error", F), y(void 0, F);
        });
      }, function(T) {
        y(void 0, T);
      }), kt({}, t(h, p), {
        _persist: {
          version: r,
          rehydrated: !1
        }
      });
    } else {
      if (p.type === $o)
        return a = !0, p.result(ou(e)), kt({}, t(h, p), {
          _persist: u
        });
      if (p.type === Lo)
        return p.result(s && s.flush()), kt({}, t(h, p), {
          _persist: u
        });
      if (p.type === Mo)
        l = !0;
      else if (p.type === Vn) {
        if (a)
          return kt({}, h, {
            _persist: kt({}, u, {
              rehydrated: !0
            })
            // @NOTE if key does not match, will continue to default else below
          });
        if (p.key === e.key) {
          var w = t(h, p), x = p.payload, S = n !== !1 && x !== void 0 ? n(x, d, w, e) : w, k = kt({}, S, {
            _persist: kt({}, u, {
              rehydrated: !0
            })
          });
          return c(k);
        }
      }
    }
    if (!u)
      return t(d, p);
    var N = t(h, p);
    return N === h ? d : c(kt({}, N, {
      _persist: u
    }));
  };
}
function $i(e) {
  return pu(e) || hu(e) || fu();
}
function fu() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function hu(e) {
  if (Symbol.iterator in Object(e) || Object.prototype.toString.call(e) === "[object Arguments]")
    return Array.from(e);
}
function pu(e) {
  if (Array.isArray(e)) {
    for (var t = 0, r = new Array(e.length); t < e.length; t++)
      r[t] = e[t];
    return r;
  }
}
function Ui(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function En(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ui(r, !0).forEach(function(n) {
      mu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ui(r).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function mu(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var Vo = {
  registry: [],
  bootstrapped: !1
}, yu = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Vo, r = arguments.length > 1 ? arguments[1] : void 0;
  switch (r.type) {
    case Uo:
      return En({}, t, {
        registry: [].concat($i(t.registry), [r.key])
      });
    case Vn:
      var n = t.registry.indexOf(r.key), i = $i(t.registry);
      return i.splice(n, 1), En({}, t, {
        registry: i,
        bootstrapped: i.length === 0
      });
    default:
      return t;
  }
};
function gu(e, t, r) {
  if (process.env.NODE_ENV !== "production") {
    var n = t || {}, i = ["blacklist", "whitelist", "transforms", "storage", "keyPrefix", "migrate"];
    i.forEach(function(d) {
      n[d] && console.error('redux-persist: invalid option passed to persistStore: "'.concat(d, '". You may be incorrectly passing persistConfig into persistStore, whereas it should be passed into persistReducer.'));
    });
  }
  var o = r || !1, s = On(yu, Vo, t && t.enhancer ? t.enhancer : void 0), a = function(p) {
    s.dispatch({
      type: Uo,
      key: p
    });
  }, l = function(p, g, u) {
    var b = {
      type: Vn,
      payload: g,
      err: u,
      key: p
      // dispatch to `store` to rehydrate and `persistor` to track result
    };
    e.dispatch(b), s.dispatch(b), o && c.getState().bootstrapped && (o(), o = !1);
  }, c = En({}, s, {
    purge: function() {
      var p = [];
      return e.dispatch({
        type: $o,
        result: function(u) {
          p.push(u);
        }
      }), Promise.all(p);
    },
    flush: function() {
      var p = [];
      return e.dispatch({
        type: Lo,
        result: function(u) {
          p.push(u);
        }
      }), Promise.all(p);
    },
    pause: function() {
      e.dispatch({
        type: Mo
      });
    },
    persist: function() {
      e.dispatch({
        type: Bo,
        register: a,
        rehydrate: l
      });
    }
  });
  return t && t.manualPersist || c.persist(), c;
}
var Ir = { exports: {} };
Ir.exports;
(function(e, t) {
  var r = 200, n = "__lodash_hash_undefined__", i = 9007199254740991, o = "[object Arguments]", s = "[object Array]", a = "[object Boolean]", l = "[object Date]", c = "[object Error]", d = "[object Function]", p = "[object GeneratorFunction]", g = "[object Map]", u = "[object Number]", b = "[object Object]", h = "[object Promise]", v = "[object RegExp]", y = "[object Set]", w = "[object String]", x = "[object Symbol]", S = "[object WeakMap]", k = "[object ArrayBuffer]", N = "[object DataView]", T = "[object Float32Array]", V = "[object Float64Array]", F = "[object Int8Array]", G = "[object Int16Array]", X = "[object Int32Array]", C = "[object Uint8Array]", z = "[object Uint8ClampedArray]", m = "[object Uint16Array]", P = "[object Uint32Array]", se = /[\\^$.*+?()[\]{}|]/g, U = /\w*$/, pe = /^\[object .+?Constructor\]$/, W = /^(?:0|[1-9]\d*)$/, Q = {};
  Q[o] = Q[s] = Q[k] = Q[N] = Q[a] = Q[l] = Q[T] = Q[V] = Q[F] = Q[G] = Q[X] = Q[g] = Q[u] = Q[b] = Q[v] = Q[y] = Q[w] = Q[x] = Q[C] = Q[z] = Q[m] = Q[P] = !0, Q[c] = Q[d] = Q[S] = !1;
  var L = typeof ft == "object" && ft && ft.Object === Object && ft, D = typeof self == "object" && self && self.Object === Object && self, oe = L || D || Function("return this")(), re = t && !t.nodeType && t, J = re && !0 && e && !e.nodeType && e, ge = J && J.exports === re;
  function Ie(_, M) {
    return _.set(M[0], M[1]), _;
  }
  function fe(_, M) {
    return _.add(M), _;
  }
  function me(_, M) {
    for (var Z = -1, ce = _ ? _.length : 0; ++Z < ce && M(_[Z], Z, _) !== !1; )
      ;
    return _;
  }
  function Ae(_, M) {
    for (var Z = -1, ce = M.length, tt = _.length; ++Z < ce; )
      _[tt + Z] = M[Z];
    return _;
  }
  function Re(_, M, Z, ce) {
    var tt = -1, st = _ ? _.length : 0;
    for (ce && st && (Z = _[++tt]); ++tt < st; )
      Z = M(Z, _[tt], tt, _);
    return Z;
  }
  function He(_, M) {
    for (var Z = -1, ce = Array(_); ++Z < _; )
      ce[Z] = M(Z);
    return ce;
  }
  function Ue(_, M) {
    return _ == null ? void 0 : _[M];
  }
  function f(_) {
    var M = !1;
    if (_ != null && typeof _.toString != "function")
      try {
        M = !!(_ + "");
      } catch {
      }
    return M;
  }
  function $(_) {
    var M = -1, Z = Array(_.size);
    return _.forEach(function(ce, tt) {
      Z[++M] = [tt, ce];
    }), Z;
  }
  function j(_, M) {
    return function(Z) {
      return _(M(Z));
    };
  }
  function O(_) {
    var M = -1, Z = Array(_.size);
    return _.forEach(function(ce) {
      Z[++M] = ce;
    }), Z;
  }
  var E = Array.prototype, R = Function.prototype, B = Object.prototype, H = oe["__core-js_shared__"], I = function() {
    var _ = /[^.]+$/.exec(H && H.keys && H.keys.IE_PROTO || "");
    return _ ? "Symbol(src)_1." + _ : "";
  }(), q = R.toString, te = B.hasOwnProperty, Y = B.toString, ae = RegExp(
    "^" + q.call(te).replace(se, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), be = ge ? oe.Buffer : void 0, xe = oe.Symbol, Fe = oe.Uint8Array, Je = j(Object.getPrototypeOf, Object), Be = Object.create, Ze = B.propertyIsEnumerable, Te = E.splice, je = Object.getOwnPropertySymbols, $e = be ? be.isBuffer : void 0, Ke = j(Object.keys, Object), rt = Zt(oe, "DataView"), et = Zt(oe, "Map"), Ye = Zt(oe, "Promise"), ne = Zt(oe, "Set"), ue = Zt(oe, "WeakMap"), we = Zt(Object, "create"), ze = Pt(rt), he = Pt(et), Ee = Pt(Ye), qe = Pt(ne), wt = Pt(ue), le = xe ? xe.prototype : void 0, _e = le ? le.valueOf : void 0;
  function ve(_) {
    var M = -1, Z = _ ? _.length : 0;
    for (this.clear(); ++M < Z; ) {
      var ce = _[M];
      this.set(ce[0], ce[1]);
    }
  }
  function Ve() {
    this.__data__ = we ? we(null) : {};
  }
  function Ge(_) {
    return this.has(_) && delete this.__data__[_];
  }
  function lt(_) {
    var M = this.__data__;
    if (we) {
      var Z = M[_];
      return Z === n ? void 0 : Z;
    }
    return te.call(M, _) ? M[_] : void 0;
  }
  function dt(_) {
    var M = this.__data__;
    return we ? M[_] !== void 0 : te.call(M, _);
  }
  function nt(_, M) {
    var Z = this.__data__;
    return Z[_] = we && M === void 0 ? n : M, this;
  }
  ve.prototype.clear = Ve, ve.prototype.delete = Ge, ve.prototype.get = lt, ve.prototype.has = dt, ve.prototype.set = nt;
  function We(_) {
    var M = -1, Z = _ ? _.length : 0;
    for (this.clear(); ++M < Z; ) {
      var ce = _[M];
      this.set(ce[0], ce[1]);
    }
  }
  function A() {
    this.__data__ = [];
  }
  function K(_) {
    var M = this.__data__, Z = fr(M, _);
    if (Z < 0)
      return !1;
    var ce = M.length - 1;
    return Z == ce ? M.pop() : Te.call(M, Z, 1), !0;
  }
  function ie(_) {
    var M = this.__data__, Z = fr(M, _);
    return Z < 0 ? void 0 : M[Z][1];
  }
  function ye(_) {
    return fr(this.__data__, _) > -1;
  }
  function Oe(_, M) {
    var Z = this.__data__, ce = fr(Z, _);
    return ce < 0 ? Z.push([_, M]) : Z[ce][1] = M, this;
  }
  We.prototype.clear = A, We.prototype.delete = K, We.prototype.get = ie, We.prototype.has = ye, We.prototype.set = Oe;
  function ke(_) {
    var M = -1, Z = _ ? _.length : 0;
    for (this.clear(); ++M < Z; ) {
      var ce = _[M];
      this.set(ce[0], ce[1]);
    }
  }
  function Se() {
    this.__data__ = {
      hash: new ve(),
      map: new (et || We)(),
      string: new ve()
    };
  }
  function de(_) {
    return hr(this, _).delete(_);
  }
  function Pe(_) {
    return hr(this, _).get(_);
  }
  function Le(_) {
    return hr(this, _).has(_);
  }
  function De(_, M) {
    return hr(this, _).set(_, M), this;
  }
  ke.prototype.clear = Se, ke.prototype.delete = de, ke.prototype.get = Pe, ke.prototype.has = Le, ke.prototype.set = De;
  function Xe(_) {
    this.__data__ = new We(_);
  }
  function gt() {
    this.__data__ = new We();
  }
  function dr(_) {
    return this.__data__.delete(_);
  }
  function _t(_) {
    return this.__data__.get(_);
  }
  function Ko(_) {
    return this.__data__.has(_);
  }
  function Yo(_, M) {
    var Z = this.__data__;
    if (Z instanceof We) {
      var ce = Z.__data__;
      if (!et || ce.length < r - 1)
        return ce.push([_, M]), this;
      Z = this.__data__ = new ke(ce);
    }
    return Z.set(_, M), this;
  }
  Xe.prototype.clear = gt, Xe.prototype.delete = dr, Xe.prototype.get = _t, Xe.prototype.has = Ko, Xe.prototype.set = Yo;
  function qo(_, M) {
    var Z = Hr(_) || ws(_) ? He(_.length, String) : [], ce = Z.length, tt = !!ce;
    for (var st in _)
      (M || te.call(_, st)) && !(tt && (st == "length" || ys(st, ce))) && Z.push(st);
    return Z;
  }
  function Wn(_, M, Z) {
    var ce = _[M];
    (!(te.call(_, M) && Kn(ce, Z)) || Z === void 0 && !(M in _)) && (_[M] = Z);
  }
  function fr(_, M) {
    for (var Z = _.length; Z--; )
      if (Kn(_[Z][0], M))
        return Z;
    return -1;
  }
  function Xo(_, M) {
    return _ && Hn(M, Zr(M), _);
  }
  function Vr(_, M, Z, ce, tt, st, vt) {
    var ct;
    if (ce && (ct = st ? ce(_, tt, st, vt) : ce(_)), ct !== void 0)
      return ct;
    if (!pr(_))
      return _;
    var Xn = Hr(_);
    if (Xn) {
      if (ct = hs(_), !M)
        return us(_, ct);
    } else {
      var Gt = jt(_), Jn = Gt == d || Gt == p;
      if (xs(_))
        return ns(_, M);
      if (Gt == b || Gt == o || Jn && !st) {
        if (f(_))
          return st ? _ : {};
        if (ct = ps(Jn ? {} : _), !M)
          return ds(_, Xo(ct, _));
      } else {
        if (!Q[Gt])
          return st ? _ : {};
        ct = ms(_, Gt, Vr, M);
      }
    }
    vt || (vt = new Xe());
    var Qn = vt.get(_);
    if (Qn)
      return Qn;
    if (vt.set(_, ct), !Xn)
      var ei = Z ? fs(_) : Zr(_);
    return me(ei || _, function(Gr, mr) {
      ei && (mr = Gr, Gr = _[mr]), Wn(ct, mr, Vr(Gr, M, Z, ce, mr, _, vt));
    }), ct;
  }
  function Jo(_) {
    return pr(_) ? Be(_) : {};
  }
  function Qo(_, M, Z) {
    var ce = M(_);
    return Hr(_) ? ce : Ae(ce, Z(_));
  }
  function es(_) {
    return Y.call(_);
  }
  function ts(_) {
    if (!pr(_) || vs(_))
      return !1;
    var M = qn(_) || f(_) ? ae : pe;
    return M.test(Pt(_));
  }
  function rs(_) {
    if (!Gn(_))
      return Ke(_);
    var M = [];
    for (var Z in Object(_))
      te.call(_, Z) && Z != "constructor" && M.push(Z);
    return M;
  }
  function ns(_, M) {
    if (M)
      return _.slice();
    var Z = new _.constructor(_.length);
    return _.copy(Z), Z;
  }
  function Wr(_) {
    var M = new _.constructor(_.byteLength);
    return new Fe(M).set(new Fe(_)), M;
  }
  function is(_, M) {
    var Z = M ? Wr(_.buffer) : _.buffer;
    return new _.constructor(Z, _.byteOffset, _.byteLength);
  }
  function os(_, M, Z) {
    var ce = M ? Z($(_), !0) : $(_);
    return Re(ce, Ie, new _.constructor());
  }
  function ss(_) {
    var M = new _.constructor(_.source, U.exec(_));
    return M.lastIndex = _.lastIndex, M;
  }
  function as(_, M, Z) {
    var ce = M ? Z(O(_), !0) : O(_);
    return Re(ce, fe, new _.constructor());
  }
  function ls(_) {
    return _e ? Object(_e.call(_)) : {};
  }
  function cs(_, M) {
    var Z = M ? Wr(_.buffer) : _.buffer;
    return new _.constructor(Z, _.byteOffset, _.length);
  }
  function us(_, M) {
    var Z = -1, ce = _.length;
    for (M || (M = Array(ce)); ++Z < ce; )
      M[Z] = _[Z];
    return M;
  }
  function Hn(_, M, Z, ce) {
    Z || (Z = {});
    for (var tt = -1, st = M.length; ++tt < st; ) {
      var vt = M[tt], ct = ce ? ce(Z[vt], _[vt], vt, Z, _) : void 0;
      Wn(Z, vt, ct === void 0 ? _[vt] : ct);
    }
    return Z;
  }
  function ds(_, M) {
    return Hn(_, Zn(_), M);
  }
  function fs(_) {
    return Qo(_, Zr, Zn);
  }
  function hr(_, M) {
    var Z = _.__data__;
    return gs(M) ? Z[typeof M == "string" ? "string" : "hash"] : Z.map;
  }
  function Zt(_, M) {
    var Z = Ue(_, M);
    return ts(Z) ? Z : void 0;
  }
  var Zn = je ? j(je, Object) : ks, jt = es;
  (rt && jt(new rt(new ArrayBuffer(1))) != N || et && jt(new et()) != g || Ye && jt(Ye.resolve()) != h || ne && jt(new ne()) != y || ue && jt(new ue()) != S) && (jt = function(_) {
    var M = Y.call(_), Z = M == b ? _.constructor : void 0, ce = Z ? Pt(Z) : void 0;
    if (ce)
      switch (ce) {
        case ze:
          return N;
        case he:
          return g;
        case Ee:
          return h;
        case qe:
          return y;
        case wt:
          return S;
      }
    return M;
  });
  function hs(_) {
    var M = _.length, Z = _.constructor(M);
    return M && typeof _[0] == "string" && te.call(_, "index") && (Z.index = _.index, Z.input = _.input), Z;
  }
  function ps(_) {
    return typeof _.constructor == "function" && !Gn(_) ? Jo(Je(_)) : {};
  }
  function ms(_, M, Z, ce) {
    var tt = _.constructor;
    switch (M) {
      case k:
        return Wr(_);
      case a:
      case l:
        return new tt(+_);
      case N:
        return is(_, ce);
      case T:
      case V:
      case F:
      case G:
      case X:
      case C:
      case z:
      case m:
      case P:
        return cs(_, ce);
      case g:
        return os(_, ce, Z);
      case u:
      case w:
        return new tt(_);
      case v:
        return ss(_);
      case y:
        return as(_, ce, Z);
      case x:
        return ls(_);
    }
  }
  function ys(_, M) {
    return M = M ?? i, !!M && (typeof _ == "number" || W.test(_)) && _ > -1 && _ % 1 == 0 && _ < M;
  }
  function gs(_) {
    var M = typeof _;
    return M == "string" || M == "number" || M == "symbol" || M == "boolean" ? _ !== "__proto__" : _ === null;
  }
  function vs(_) {
    return !!I && I in _;
  }
  function Gn(_) {
    var M = _ && _.constructor, Z = typeof M == "function" && M.prototype || B;
    return _ === Z;
  }
  function Pt(_) {
    if (_ != null) {
      try {
        return q.call(_);
      } catch {
      }
      try {
        return _ + "";
      } catch {
      }
    }
    return "";
  }
  function bs(_) {
    return Vr(_, !0, !0);
  }
  function Kn(_, M) {
    return _ === M || _ !== _ && M !== M;
  }
  function ws(_) {
    return _s(_) && te.call(_, "callee") && (!Ze.call(_, "callee") || Y.call(_) == o);
  }
  var Hr = Array.isArray;
  function Yn(_) {
    return _ != null && Es(_.length) && !qn(_);
  }
  function _s(_) {
    return Ss(_) && Yn(_);
  }
  var xs = $e || Cs;
  function qn(_) {
    var M = pr(_) ? Y.call(_) : "";
    return M == d || M == p;
  }
  function Es(_) {
    return typeof _ == "number" && _ > -1 && _ % 1 == 0 && _ <= i;
  }
  function pr(_) {
    var M = typeof _;
    return !!_ && (M == "object" || M == "function");
  }
  function Ss(_) {
    return !!_ && typeof _ == "object";
  }
  function Zr(_) {
    return Yn(_) ? qo(_) : rs(_);
  }
  function ks() {
    return [];
  }
  function Cs() {
    return !1;
  }
  e.exports = bs;
})(Ir, Ir.exports);
var vu = Ir.exports;
const bu = /* @__PURE__ */ Cn(vu), wu = (e, t) => {
  const r = e.path.filter((i) => i !== "/" && i !== "head"), n = r.map((i, o) => {
    if (o < r.length - 1)
      return t.folders.byId[i].name;
    {
      const s = t.files.byId[i];
      return `${s.name}.${s.extension}`;
    }
  });
  return [r, n];
}, _u = {
  miniStructure: {
    id: "head",
    type: "folder",
    name: "head",
    collapsed: !1,
    subFoldersAndFiles: []
  }
}, xu = Nn(
  "setMiniStructureAsync",
  async (e, { getState: t }) => {
    const r = t();
    let n = {
      id: "head",
      type: "folder",
      name: "head",
      collapsed: !1,
      subFoldersAndFiles: []
    };
    return Et(
      r.structure.initialFolder.subFoldersAndFiles,
      e,
      (i, o) => {
        const s = bu(
          o[o.length - 1]
        );
        Pr(
          s.subFoldersAndFiles,
          (a) => {
            const l = a;
            if (l.type === "folder")
              l.name = r.structure.normalized.folders.byId[a.id].name, l.collapsed = !0;
            else if (l.type === "file") {
              const c = r.structure.normalized.files.byId[a.id];
              l.wholeName = `${c.name}.${c.extension}`, l.name = c.name, l.extension = c.extension, l.subFoldersAndFiles = null;
            }
          },
          [],
          [s.id]
        ), n = s;
      },
      [r.structure.initialFolder]
    ), n;
  }
), Wo = In({
  name: "miniStructure",
  initialState: _u,
  reducers: {
    collapseMiniStructure: (e, t) => {
      const r = (n, i) => {
        for (const o of n)
          if (o.id === i && o.type === "folder") {
            o.collapsed = !o.collapsed;
            return;
          } else
            o.type === "folder" && r(o.subFoldersAndFiles, i);
      };
      r(e.miniStructure.subFoldersAndFiles, t.payload);
    }
  },
  extraReducers: (e) => {
    e.addCase(xu.fulfilled, (t, r) => {
      t.miniStructure = r.payload;
    });
  }
});
Wo.actions;
Ht(
  (e) => e.structure.normalized,
  (e) => e.tabs.selected,
  (e, t) => {
    if (t && t !== "") {
      const r = e.files.byId[t], [n, i] = wu(r, e);
      return {
        id: r.id,
        path: i,
        unmappedPath: n
      };
    } else
      return null;
  }
);
const Eu = Wo.reducer, Su = {
  key: "project",
  storage: Po,
  whitelist: ["structure", "editor", "tabs"]
}, ku = Wi({
  structure: pl,
  tabs: Dl,
  miniStructure: Eu
}), Cu = du(Su, ku), Ur = Aa({
  reducer: Cu,
  middleware: (e) => e()
}), Ou = gu(Ur);
function _r(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Ho = { exports: {} };
/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/
(function(e, t) {
  (function(r) {
    e.exports = r();
  })(function() {
    return function r(n, i, o) {
      function s(c, d) {
        if (!i[c]) {
          if (!n[c]) {
            var p = typeof _r == "function" && _r;
            if (!d && p)
              return p(c, !0);
            if (a)
              return a(c, !0);
            var g = new Error("Cannot find module '" + c + "'");
            throw g.code = "MODULE_NOT_FOUND", g;
          }
          var u = i[c] = { exports: {} };
          n[c][0].call(u.exports, function(b) {
            var h = n[c][1][b];
            return s(h || b);
          }, u, u.exports, r, n, i, o);
        }
        return i[c].exports;
      }
      for (var a = typeof _r == "function" && _r, l = 0; l < o.length; l++)
        s(o[l]);
      return s;
    }({ 1: [function(r, n, i) {
      var o = r("./utils"), s = r("./support"), a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      i.encode = function(l) {
        for (var c, d, p, g, u, b, h, v = [], y = 0, w = l.length, x = w, S = o.getTypeOf(l) !== "string"; y < l.length; )
          x = w - y, p = S ? (c = l[y++], d = y < w ? l[y++] : 0, y < w ? l[y++] : 0) : (c = l.charCodeAt(y++), d = y < w ? l.charCodeAt(y++) : 0, y < w ? l.charCodeAt(y++) : 0), g = c >> 2, u = (3 & c) << 4 | d >> 4, b = 1 < x ? (15 & d) << 2 | p >> 6 : 64, h = 2 < x ? 63 & p : 64, v.push(a.charAt(g) + a.charAt(u) + a.charAt(b) + a.charAt(h));
        return v.join("");
      }, i.decode = function(l) {
        var c, d, p, g, u, b, h = 0, v = 0, y = "data:";
        if (l.substr(0, y.length) === y)
          throw new Error("Invalid base64 input, it looks like a data url.");
        var w, x = 3 * (l = l.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
        if (l.charAt(l.length - 1) === a.charAt(64) && x--, l.charAt(l.length - 2) === a.charAt(64) && x--, x % 1 != 0)
          throw new Error("Invalid base64 input, bad content length.");
        for (w = s.uint8array ? new Uint8Array(0 | x) : new Array(0 | x); h < l.length; )
          c = a.indexOf(l.charAt(h++)) << 2 | (g = a.indexOf(l.charAt(h++))) >> 4, d = (15 & g) << 4 | (u = a.indexOf(l.charAt(h++))) >> 2, p = (3 & u) << 6 | (b = a.indexOf(l.charAt(h++))), w[v++] = c, u !== 64 && (w[v++] = d), b !== 64 && (w[v++] = p);
        return w;
      };
    }, { "./support": 30, "./utils": 32 }], 2: [function(r, n, i) {
      var o = r("./external"), s = r("./stream/DataWorker"), a = r("./stream/Crc32Probe"), l = r("./stream/DataLengthProbe");
      function c(d, p, g, u, b) {
        this.compressedSize = d, this.uncompressedSize = p, this.crc32 = g, this.compression = u, this.compressedContent = b;
      }
      c.prototype = { getContentWorker: function() {
        var d = new s(o.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")), p = this;
        return d.on("end", function() {
          if (this.streamInfo.data_length !== p.uncompressedSize)
            throw new Error("Bug : uncompressed data size mismatch");
        }), d;
      }, getCompressedWorker: function() {
        return new s(o.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
      } }, c.createWorkerFrom = function(d, p, g) {
        return d.pipe(new a()).pipe(new l("uncompressedSize")).pipe(p.compressWorker(g)).pipe(new l("compressedSize")).withStreamInfo("compression", p);
      }, n.exports = c;
    }, { "./external": 6, "./stream/Crc32Probe": 25, "./stream/DataLengthProbe": 26, "./stream/DataWorker": 27 }], 3: [function(r, n, i) {
      var o = r("./stream/GenericWorker");
      i.STORE = { magic: "\0\0", compressWorker: function() {
        return new o("STORE compression");
      }, uncompressWorker: function() {
        return new o("STORE decompression");
      } }, i.DEFLATE = r("./flate");
    }, { "./flate": 7, "./stream/GenericWorker": 28 }], 4: [function(r, n, i) {
      var o = r("./utils"), s = function() {
        for (var a, l = [], c = 0; c < 256; c++) {
          a = c;
          for (var d = 0; d < 8; d++)
            a = 1 & a ? 3988292384 ^ a >>> 1 : a >>> 1;
          l[c] = a;
        }
        return l;
      }();
      n.exports = function(a, l) {
        return a !== void 0 && a.length ? o.getTypeOf(a) !== "string" ? function(c, d, p, g) {
          var u = s, b = g + p;
          c ^= -1;
          for (var h = g; h < b; h++)
            c = c >>> 8 ^ u[255 & (c ^ d[h])];
          return -1 ^ c;
        }(0 | l, a, a.length, 0) : function(c, d, p, g) {
          var u = s, b = g + p;
          c ^= -1;
          for (var h = g; h < b; h++)
            c = c >>> 8 ^ u[255 & (c ^ d.charCodeAt(h))];
          return -1 ^ c;
        }(0 | l, a, a.length, 0) : 0;
      };
    }, { "./utils": 32 }], 5: [function(r, n, i) {
      i.base64 = !1, i.binary = !1, i.dir = !1, i.createFolders = !0, i.date = null, i.compression = null, i.compressionOptions = null, i.comment = null, i.unixPermissions = null, i.dosPermissions = null;
    }, {}], 6: [function(r, n, i) {
      var o = null;
      o = typeof Promise < "u" ? Promise : r("lie"), n.exports = { Promise: o };
    }, { lie: 37 }], 7: [function(r, n, i) {
      var o = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Uint32Array < "u", s = r("pako"), a = r("./utils"), l = r("./stream/GenericWorker"), c = o ? "uint8array" : "array";
      function d(p, g) {
        l.call(this, "FlateWorker/" + p), this._pako = null, this._pakoAction = p, this._pakoOptions = g, this.meta = {};
      }
      i.magic = "\b\0", a.inherits(d, l), d.prototype.processChunk = function(p) {
        this.meta = p.meta, this._pako === null && this._createPako(), this._pako.push(a.transformTo(c, p.data), !1);
      }, d.prototype.flush = function() {
        l.prototype.flush.call(this), this._pako === null && this._createPako(), this._pako.push([], !0);
      }, d.prototype.cleanUp = function() {
        l.prototype.cleanUp.call(this), this._pako = null;
      }, d.prototype._createPako = function() {
        this._pako = new s[this._pakoAction]({ raw: !0, level: this._pakoOptions.level || -1 });
        var p = this;
        this._pako.onData = function(g) {
          p.push({ data: g, meta: p.meta });
        };
      }, i.compressWorker = function(p) {
        return new d("Deflate", p);
      }, i.uncompressWorker = function() {
        return new d("Inflate", {});
      };
    }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }], 8: [function(r, n, i) {
      function o(u, b) {
        var h, v = "";
        for (h = 0; h < b; h++)
          v += String.fromCharCode(255 & u), u >>>= 8;
        return v;
      }
      function s(u, b, h, v, y, w) {
        var x, S, k = u.file, N = u.compression, T = w !== c.utf8encode, V = a.transformTo("string", w(k.name)), F = a.transformTo("string", c.utf8encode(k.name)), G = k.comment, X = a.transformTo("string", w(G)), C = a.transformTo("string", c.utf8encode(G)), z = F.length !== k.name.length, m = C.length !== G.length, P = "", se = "", U = "", pe = k.dir, W = k.date, Q = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
        b && !h || (Q.crc32 = u.crc32, Q.compressedSize = u.compressedSize, Q.uncompressedSize = u.uncompressedSize);
        var L = 0;
        b && (L |= 8), T || !z && !m || (L |= 2048);
        var D = 0, oe = 0;
        pe && (D |= 16), y === "UNIX" ? (oe = 798, D |= function(J, ge) {
          var Ie = J;
          return J || (Ie = ge ? 16893 : 33204), (65535 & Ie) << 16;
        }(k.unixPermissions, pe)) : (oe = 20, D |= function(J) {
          return 63 & (J || 0);
        }(k.dosPermissions)), x = W.getUTCHours(), x <<= 6, x |= W.getUTCMinutes(), x <<= 5, x |= W.getUTCSeconds() / 2, S = W.getUTCFullYear() - 1980, S <<= 4, S |= W.getUTCMonth() + 1, S <<= 5, S |= W.getUTCDate(), z && (se = o(1, 1) + o(d(V), 4) + F, P += "up" + o(se.length, 2) + se), m && (U = o(1, 1) + o(d(X), 4) + C, P += "uc" + o(U.length, 2) + U);
        var re = "";
        return re += `
\0`, re += o(L, 2), re += N.magic, re += o(x, 2), re += o(S, 2), re += o(Q.crc32, 4), re += o(Q.compressedSize, 4), re += o(Q.uncompressedSize, 4), re += o(V.length, 2), re += o(P.length, 2), { fileRecord: p.LOCAL_FILE_HEADER + re + V + P, dirRecord: p.CENTRAL_FILE_HEADER + o(oe, 2) + re + o(X.length, 2) + "\0\0\0\0" + o(D, 4) + o(v, 4) + V + P + X };
      }
      var a = r("../utils"), l = r("../stream/GenericWorker"), c = r("../utf8"), d = r("../crc32"), p = r("../signature");
      function g(u, b, h, v) {
        l.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = b, this.zipPlatform = h, this.encodeFileName = v, this.streamFiles = u, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
      }
      a.inherits(g, l), g.prototype.push = function(u) {
        var b = u.meta.percent || 0, h = this.entriesCount, v = this._sources.length;
        this.accumulate ? this.contentBuffer.push(u) : (this.bytesWritten += u.data.length, l.prototype.push.call(this, { data: u.data, meta: { currentFile: this.currentFile, percent: h ? (b + 100 * (h - v - 1)) / h : 100 } }));
      }, g.prototype.openedSource = function(u) {
        this.currentSourceOffset = this.bytesWritten, this.currentFile = u.file.name;
        var b = this.streamFiles && !u.file.dir;
        if (b) {
          var h = s(u, b, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
          this.push({ data: h.fileRecord, meta: { percent: 0 } });
        } else
          this.accumulate = !0;
      }, g.prototype.closedSource = function(u) {
        this.accumulate = !1;
        var b = this.streamFiles && !u.file.dir, h = s(u, b, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
        if (this.dirRecords.push(h.dirRecord), b)
          this.push({ data: function(v) {
            return p.DATA_DESCRIPTOR + o(v.crc32, 4) + o(v.compressedSize, 4) + o(v.uncompressedSize, 4);
          }(u), meta: { percent: 100 } });
        else
          for (this.push({ data: h.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length; )
            this.push(this.contentBuffer.shift());
        this.currentFile = null;
      }, g.prototype.flush = function() {
        for (var u = this.bytesWritten, b = 0; b < this.dirRecords.length; b++)
          this.push({ data: this.dirRecords[b], meta: { percent: 100 } });
        var h = this.bytesWritten - u, v = function(y, w, x, S, k) {
          var N = a.transformTo("string", k(S));
          return p.CENTRAL_DIRECTORY_END + "\0\0\0\0" + o(y, 2) + o(y, 2) + o(w, 4) + o(x, 4) + o(N.length, 2) + N;
        }(this.dirRecords.length, h, u, this.zipComment, this.encodeFileName);
        this.push({ data: v, meta: { percent: 100 } });
      }, g.prototype.prepareNextSource = function() {
        this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
      }, g.prototype.registerPrevious = function(u) {
        this._sources.push(u);
        var b = this;
        return u.on("data", function(h) {
          b.processChunk(h);
        }), u.on("end", function() {
          b.closedSource(b.previous.streamInfo), b._sources.length ? b.prepareNextSource() : b.end();
        }), u.on("error", function(h) {
          b.error(h);
        }), this;
      }, g.prototype.resume = function() {
        return !!l.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0));
      }, g.prototype.error = function(u) {
        var b = this._sources;
        if (!l.prototype.error.call(this, u))
          return !1;
        for (var h = 0; h < b.length; h++)
          try {
            b[h].error(u);
          } catch {
          }
        return !0;
      }, g.prototype.lock = function() {
        l.prototype.lock.call(this);
        for (var u = this._sources, b = 0; b < u.length; b++)
          u[b].lock();
      }, n.exports = g;
    }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }], 9: [function(r, n, i) {
      var o = r("../compressions"), s = r("./ZipFileWorker");
      i.generateWorker = function(a, l, c) {
        var d = new s(l.streamFiles, c, l.platform, l.encodeFileName), p = 0;
        try {
          a.forEach(function(g, u) {
            p++;
            var b = function(w, x) {
              var S = w || x, k = o[S];
              if (!k)
                throw new Error(S + " is not a valid compression method !");
              return k;
            }(u.options.compression, l.compression), h = u.options.compressionOptions || l.compressionOptions || {}, v = u.dir, y = u.date;
            u._compressWorker(b, h).withStreamInfo("file", { name: g, dir: v, date: y, comment: u.comment || "", unixPermissions: u.unixPermissions, dosPermissions: u.dosPermissions }).pipe(d);
          }), d.entriesCount = p;
        } catch (g) {
          d.error(g);
        }
        return d;
      };
    }, { "../compressions": 3, "./ZipFileWorker": 8 }], 10: [function(r, n, i) {
      function o() {
        if (!(this instanceof o))
          return new o();
        if (arguments.length)
          throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
        this.files = /* @__PURE__ */ Object.create(null), this.comment = null, this.root = "", this.clone = function() {
          var s = new o();
          for (var a in this)
            typeof this[a] != "function" && (s[a] = this[a]);
          return s;
        };
      }
      (o.prototype = r("./object")).loadAsync = r("./load"), o.support = r("./support"), o.defaults = r("./defaults"), o.version = "3.10.1", o.loadAsync = function(s, a) {
        return new o().loadAsync(s, a);
      }, o.external = r("./external"), n.exports = o;
    }, { "./defaults": 5, "./external": 6, "./load": 11, "./object": 15, "./support": 30 }], 11: [function(r, n, i) {
      var o = r("./utils"), s = r("./external"), a = r("./utf8"), l = r("./zipEntries"), c = r("./stream/Crc32Probe"), d = r("./nodejsUtils");
      function p(g) {
        return new s.Promise(function(u, b) {
          var h = g.decompressed.getContentWorker().pipe(new c());
          h.on("error", function(v) {
            b(v);
          }).on("end", function() {
            h.streamInfo.crc32 !== g.decompressed.crc32 ? b(new Error("Corrupted zip : CRC32 mismatch")) : u();
          }).resume();
        });
      }
      n.exports = function(g, u) {
        var b = this;
        return u = o.extend(u || {}, { base64: !1, checkCRC32: !1, optimizedBinaryString: !1, createFolders: !1, decodeFileName: a.utf8decode }), d.isNode && d.isStream(g) ? s.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : o.prepareContent("the loaded zip file", g, !0, u.optimizedBinaryString, u.base64).then(function(h) {
          var v = new l(u);
          return v.load(h), v;
        }).then(function(h) {
          var v = [s.Promise.resolve(h)], y = h.files;
          if (u.checkCRC32)
            for (var w = 0; w < y.length; w++)
              v.push(p(y[w]));
          return s.Promise.all(v);
        }).then(function(h) {
          for (var v = h.shift(), y = v.files, w = 0; w < y.length; w++) {
            var x = y[w], S = x.fileNameStr, k = o.resolve(x.fileNameStr);
            b.file(k, x.decompressed, { binary: !0, optimizedBinaryString: !0, date: x.date, dir: x.dir, comment: x.fileCommentStr.length ? x.fileCommentStr : null, unixPermissions: x.unixPermissions, dosPermissions: x.dosPermissions, createFolders: u.createFolders }), x.dir || (b.file(k).unsafeOriginalName = S);
          }
          return v.zipComment.length && (b.comment = v.zipComment), b;
        });
      };
    }, { "./external": 6, "./nodejsUtils": 14, "./stream/Crc32Probe": 25, "./utf8": 31, "./utils": 32, "./zipEntries": 33 }], 12: [function(r, n, i) {
      var o = r("../utils"), s = r("../stream/GenericWorker");
      function a(l, c) {
        s.call(this, "Nodejs stream input adapter for " + l), this._upstreamEnded = !1, this._bindStream(c);
      }
      o.inherits(a, s), a.prototype._bindStream = function(l) {
        var c = this;
        (this._stream = l).pause(), l.on("data", function(d) {
          c.push({ data: d, meta: { percent: 0 } });
        }).on("error", function(d) {
          c.isPaused ? this.generatedError = d : c.error(d);
        }).on("end", function() {
          c.isPaused ? c._upstreamEnded = !0 : c.end();
        });
      }, a.prototype.pause = function() {
        return !!s.prototype.pause.call(this) && (this._stream.pause(), !0);
      }, a.prototype.resume = function() {
        return !!s.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), !0);
      }, n.exports = a;
    }, { "../stream/GenericWorker": 28, "../utils": 32 }], 13: [function(r, n, i) {
      var o = r("readable-stream").Readable;
      function s(a, l, c) {
        o.call(this, l), this._helper = a;
        var d = this;
        a.on("data", function(p, g) {
          d.push(p) || d._helper.pause(), c && c(g);
        }).on("error", function(p) {
          d.emit("error", p);
        }).on("end", function() {
          d.push(null);
        });
      }
      r("../utils").inherits(s, o), s.prototype._read = function() {
        this._helper.resume();
      }, n.exports = s;
    }, { "../utils": 32, "readable-stream": 16 }], 14: [function(r, n, i) {
      n.exports = { isNode: typeof Buffer < "u", newBufferFrom: function(o, s) {
        if (Buffer.from && Buffer.from !== Uint8Array.from)
          return Buffer.from(o, s);
        if (typeof o == "number")
          throw new Error('The "data" argument must not be a number');
        return new Buffer(o, s);
      }, allocBuffer: function(o) {
        if (Buffer.alloc)
          return Buffer.alloc(o);
        var s = new Buffer(o);
        return s.fill(0), s;
      }, isBuffer: function(o) {
        return Buffer.isBuffer(o);
      }, isStream: function(o) {
        return o && typeof o.on == "function" && typeof o.pause == "function" && typeof o.resume == "function";
      } };
    }, {}], 15: [function(r, n, i) {
      function o(k, N, T) {
        var V, F = a.getTypeOf(N), G = a.extend(T || {}, d);
        G.date = G.date || /* @__PURE__ */ new Date(), G.compression !== null && (G.compression = G.compression.toUpperCase()), typeof G.unixPermissions == "string" && (G.unixPermissions = parseInt(G.unixPermissions, 8)), G.unixPermissions && 16384 & G.unixPermissions && (G.dir = !0), G.dosPermissions && 16 & G.dosPermissions && (G.dir = !0), G.dir && (k = y(k)), G.createFolders && (V = v(k)) && w.call(this, V, !0);
        var X = F === "string" && G.binary === !1 && G.base64 === !1;
        T && T.binary !== void 0 || (G.binary = !X), (N instanceof p && N.uncompressedSize === 0 || G.dir || !N || N.length === 0) && (G.base64 = !1, G.binary = !0, N = "", G.compression = "STORE", F = "string");
        var C = null;
        C = N instanceof p || N instanceof l ? N : b.isNode && b.isStream(N) ? new h(k, N) : a.prepareContent(k, N, G.binary, G.optimizedBinaryString, G.base64);
        var z = new g(k, C, G);
        this.files[k] = z;
      }
      var s = r("./utf8"), a = r("./utils"), l = r("./stream/GenericWorker"), c = r("./stream/StreamHelper"), d = r("./defaults"), p = r("./compressedObject"), g = r("./zipObject"), u = r("./generate"), b = r("./nodejsUtils"), h = r("./nodejs/NodejsStreamInputAdapter"), v = function(k) {
        k.slice(-1) === "/" && (k = k.substring(0, k.length - 1));
        var N = k.lastIndexOf("/");
        return 0 < N ? k.substring(0, N) : "";
      }, y = function(k) {
        return k.slice(-1) !== "/" && (k += "/"), k;
      }, w = function(k, N) {
        return N = N !== void 0 ? N : d.createFolders, k = y(k), this.files[k] || o.call(this, k, null, { dir: !0, createFolders: N }), this.files[k];
      };
      function x(k) {
        return Object.prototype.toString.call(k) === "[object RegExp]";
      }
      var S = { load: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, forEach: function(k) {
        var N, T, V;
        for (N in this.files)
          V = this.files[N], (T = N.slice(this.root.length, N.length)) && N.slice(0, this.root.length) === this.root && k(T, V);
      }, filter: function(k) {
        var N = [];
        return this.forEach(function(T, V) {
          k(T, V) && N.push(V);
        }), N;
      }, file: function(k, N, T) {
        if (arguments.length !== 1)
          return k = this.root + k, o.call(this, k, N, T), this;
        if (x(k)) {
          var V = k;
          return this.filter(function(G, X) {
            return !X.dir && V.test(G);
          });
        }
        var F = this.files[this.root + k];
        return F && !F.dir ? F : null;
      }, folder: function(k) {
        if (!k)
          return this;
        if (x(k))
          return this.filter(function(F, G) {
            return G.dir && k.test(F);
          });
        var N = this.root + k, T = w.call(this, N), V = this.clone();
        return V.root = T.name, V;
      }, remove: function(k) {
        k = this.root + k;
        var N = this.files[k];
        if (N || (k.slice(-1) !== "/" && (k += "/"), N = this.files[k]), N && !N.dir)
          delete this.files[k];
        else
          for (var T = this.filter(function(F, G) {
            return G.name.slice(0, k.length) === k;
          }), V = 0; V < T.length; V++)
            delete this.files[T[V].name];
        return this;
      }, generate: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, generateInternalStream: function(k) {
        var N, T = {};
        try {
          if ((T = a.extend(k || {}, { streamFiles: !1, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: s.utf8encode })).type = T.type.toLowerCase(), T.compression = T.compression.toUpperCase(), T.type === "binarystring" && (T.type = "string"), !T.type)
            throw new Error("No output type specified.");
          a.checkSupport(T.type), T.platform !== "darwin" && T.platform !== "freebsd" && T.platform !== "linux" && T.platform !== "sunos" || (T.platform = "UNIX"), T.platform === "win32" && (T.platform = "DOS");
          var V = T.comment || this.comment || "";
          N = u.generateWorker(this, T, V);
        } catch (F) {
          (N = new l("error")).error(F);
        }
        return new c(N, T.type || "string", T.mimeType);
      }, generateAsync: function(k, N) {
        return this.generateInternalStream(k).accumulate(N);
      }, generateNodeStream: function(k, N) {
        return (k = k || {}).type || (k.type = "nodebuffer"), this.generateInternalStream(k).toNodejsStream(N);
      } };
      n.exports = S;
    }, { "./compressedObject": 2, "./defaults": 5, "./generate": 9, "./nodejs/NodejsStreamInputAdapter": 12, "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31, "./utils": 32, "./zipObject": 35 }], 16: [function(r, n, i) {
      n.exports = r("stream");
    }, { stream: void 0 }], 17: [function(r, n, i) {
      var o = r("./DataReader");
      function s(a) {
        o.call(this, a);
        for (var l = 0; l < this.data.length; l++)
          a[l] = 255 & a[l];
      }
      r("../utils").inherits(s, o), s.prototype.byteAt = function(a) {
        return this.data[this.zero + a];
      }, s.prototype.lastIndexOfSignature = function(a) {
        for (var l = a.charCodeAt(0), c = a.charCodeAt(1), d = a.charCodeAt(2), p = a.charCodeAt(3), g = this.length - 4; 0 <= g; --g)
          if (this.data[g] === l && this.data[g + 1] === c && this.data[g + 2] === d && this.data[g + 3] === p)
            return g - this.zero;
        return -1;
      }, s.prototype.readAndCheckSignature = function(a) {
        var l = a.charCodeAt(0), c = a.charCodeAt(1), d = a.charCodeAt(2), p = a.charCodeAt(3), g = this.readData(4);
        return l === g[0] && c === g[1] && d === g[2] && p === g[3];
      }, s.prototype.readData = function(a) {
        if (this.checkOffset(a), a === 0)
          return [];
        var l = this.data.slice(this.zero + this.index, this.zero + this.index + a);
        return this.index += a, l;
      }, n.exports = s;
    }, { "../utils": 32, "./DataReader": 18 }], 18: [function(r, n, i) {
      var o = r("../utils");
      function s(a) {
        this.data = a, this.length = a.length, this.index = 0, this.zero = 0;
      }
      s.prototype = { checkOffset: function(a) {
        this.checkIndex(this.index + a);
      }, checkIndex: function(a) {
        if (this.length < this.zero + a || a < 0)
          throw new Error("End of data reached (data length = " + this.length + ", asked index = " + a + "). Corrupted zip ?");
      }, setIndex: function(a) {
        this.checkIndex(a), this.index = a;
      }, skip: function(a) {
        this.setIndex(this.index + a);
      }, byteAt: function() {
      }, readInt: function(a) {
        var l, c = 0;
        for (this.checkOffset(a), l = this.index + a - 1; l >= this.index; l--)
          c = (c << 8) + this.byteAt(l);
        return this.index += a, c;
      }, readString: function(a) {
        return o.transformTo("string", this.readData(a));
      }, readData: function() {
      }, lastIndexOfSignature: function() {
      }, readAndCheckSignature: function() {
      }, readDate: function() {
        var a = this.readInt(4);
        return new Date(Date.UTC(1980 + (a >> 25 & 127), (a >> 21 & 15) - 1, a >> 16 & 31, a >> 11 & 31, a >> 5 & 63, (31 & a) << 1));
      } }, n.exports = s;
    }, { "../utils": 32 }], 19: [function(r, n, i) {
      var o = r("./Uint8ArrayReader");
      function s(a) {
        o.call(this, a);
      }
      r("../utils").inherits(s, o), s.prototype.readData = function(a) {
        this.checkOffset(a);
        var l = this.data.slice(this.zero + this.index, this.zero + this.index + a);
        return this.index += a, l;
      }, n.exports = s;
    }, { "../utils": 32, "./Uint8ArrayReader": 21 }], 20: [function(r, n, i) {
      var o = r("./DataReader");
      function s(a) {
        o.call(this, a);
      }
      r("../utils").inherits(s, o), s.prototype.byteAt = function(a) {
        return this.data.charCodeAt(this.zero + a);
      }, s.prototype.lastIndexOfSignature = function(a) {
        return this.data.lastIndexOf(a) - this.zero;
      }, s.prototype.readAndCheckSignature = function(a) {
        return a === this.readData(4);
      }, s.prototype.readData = function(a) {
        this.checkOffset(a);
        var l = this.data.slice(this.zero + this.index, this.zero + this.index + a);
        return this.index += a, l;
      }, n.exports = s;
    }, { "../utils": 32, "./DataReader": 18 }], 21: [function(r, n, i) {
      var o = r("./ArrayReader");
      function s(a) {
        o.call(this, a);
      }
      r("../utils").inherits(s, o), s.prototype.readData = function(a) {
        if (this.checkOffset(a), a === 0)
          return new Uint8Array(0);
        var l = this.data.subarray(this.zero + this.index, this.zero + this.index + a);
        return this.index += a, l;
      }, n.exports = s;
    }, { "../utils": 32, "./ArrayReader": 17 }], 22: [function(r, n, i) {
      var o = r("../utils"), s = r("../support"), a = r("./ArrayReader"), l = r("./StringReader"), c = r("./NodeBufferReader"), d = r("./Uint8ArrayReader");
      n.exports = function(p) {
        var g = o.getTypeOf(p);
        return o.checkSupport(g), g !== "string" || s.uint8array ? g === "nodebuffer" ? new c(p) : s.uint8array ? new d(o.transformTo("uint8array", p)) : new a(o.transformTo("array", p)) : new l(p);
      };
    }, { "../support": 30, "../utils": 32, "./ArrayReader": 17, "./NodeBufferReader": 19, "./StringReader": 20, "./Uint8ArrayReader": 21 }], 23: [function(r, n, i) {
      i.LOCAL_FILE_HEADER = "PK", i.CENTRAL_FILE_HEADER = "PK", i.CENTRAL_DIRECTORY_END = "PK", i.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", i.ZIP64_CENTRAL_DIRECTORY_END = "PK", i.DATA_DESCRIPTOR = "PK\x07\b";
    }, {}], 24: [function(r, n, i) {
      var o = r("./GenericWorker"), s = r("../utils");
      function a(l) {
        o.call(this, "ConvertWorker to " + l), this.destType = l;
      }
      s.inherits(a, o), a.prototype.processChunk = function(l) {
        this.push({ data: s.transformTo(this.destType, l.data), meta: l.meta });
      }, n.exports = a;
    }, { "../utils": 32, "./GenericWorker": 28 }], 25: [function(r, n, i) {
      var o = r("./GenericWorker"), s = r("../crc32");
      function a() {
        o.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
      }
      r("../utils").inherits(a, o), a.prototype.processChunk = function(l) {
        this.streamInfo.crc32 = s(l.data, this.streamInfo.crc32 || 0), this.push(l);
      }, n.exports = a;
    }, { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 }], 26: [function(r, n, i) {
      var o = r("../utils"), s = r("./GenericWorker");
      function a(l) {
        s.call(this, "DataLengthProbe for " + l), this.propName = l, this.withStreamInfo(l, 0);
      }
      o.inherits(a, s), a.prototype.processChunk = function(l) {
        if (l) {
          var c = this.streamInfo[this.propName] || 0;
          this.streamInfo[this.propName] = c + l.data.length;
        }
        s.prototype.processChunk.call(this, l);
      }, n.exports = a;
    }, { "../utils": 32, "./GenericWorker": 28 }], 27: [function(r, n, i) {
      var o = r("../utils"), s = r("./GenericWorker");
      function a(l) {
        s.call(this, "DataWorker");
        var c = this;
        this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, l.then(function(d) {
          c.dataIsReady = !0, c.data = d, c.max = d && d.length || 0, c.type = o.getTypeOf(d), c.isPaused || c._tickAndRepeat();
        }, function(d) {
          c.error(d);
        });
      }
      o.inherits(a, s), a.prototype.cleanUp = function() {
        s.prototype.cleanUp.call(this), this.data = null;
      }, a.prototype.resume = function() {
        return !!s.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = !0, o.delay(this._tickAndRepeat, [], this)), !0);
      }, a.prototype._tickAndRepeat = function() {
        this._tickScheduled = !1, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (o.delay(this._tickAndRepeat, [], this), this._tickScheduled = !0));
      }, a.prototype._tick = function() {
        if (this.isPaused || this.isFinished)
          return !1;
        var l = null, c = Math.min(this.max, this.index + 16384);
        if (this.index >= this.max)
          return this.end();
        switch (this.type) {
          case "string":
            l = this.data.substring(this.index, c);
            break;
          case "uint8array":
            l = this.data.subarray(this.index, c);
            break;
          case "array":
          case "nodebuffer":
            l = this.data.slice(this.index, c);
        }
        return this.index = c, this.push({ data: l, meta: { percent: this.max ? this.index / this.max * 100 : 0 } });
      }, n.exports = a;
    }, { "../utils": 32, "./GenericWorker": 28 }], 28: [function(r, n, i) {
      function o(s) {
        this.name = s || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = !0, this.isFinished = !1, this.isLocked = !1, this._listeners = { data: [], end: [], error: [] }, this.previous = null;
      }
      o.prototype = { push: function(s) {
        this.emit("data", s);
      }, end: function() {
        if (this.isFinished)
          return !1;
        this.flush();
        try {
          this.emit("end"), this.cleanUp(), this.isFinished = !0;
        } catch (s) {
          this.emit("error", s);
        }
        return !0;
      }, error: function(s) {
        return !this.isFinished && (this.isPaused ? this.generatedError = s : (this.isFinished = !0, this.emit("error", s), this.previous && this.previous.error(s), this.cleanUp()), !0);
      }, on: function(s, a) {
        return this._listeners[s].push(a), this;
      }, cleanUp: function() {
        this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
      }, emit: function(s, a) {
        if (this._listeners[s])
          for (var l = 0; l < this._listeners[s].length; l++)
            this._listeners[s][l].call(this, a);
      }, pipe: function(s) {
        return s.registerPrevious(this);
      }, registerPrevious: function(s) {
        if (this.isLocked)
          throw new Error("The stream '" + this + "' has already been used.");
        this.streamInfo = s.streamInfo, this.mergeStreamInfo(), this.previous = s;
        var a = this;
        return s.on("data", function(l) {
          a.processChunk(l);
        }), s.on("end", function() {
          a.end();
        }), s.on("error", function(l) {
          a.error(l);
        }), this;
      }, pause: function() {
        return !this.isPaused && !this.isFinished && (this.isPaused = !0, this.previous && this.previous.pause(), !0);
      }, resume: function() {
        if (!this.isPaused || this.isFinished)
          return !1;
        var s = this.isPaused = !1;
        return this.generatedError && (this.error(this.generatedError), s = !0), this.previous && this.previous.resume(), !s;
      }, flush: function() {
      }, processChunk: function(s) {
        this.push(s);
      }, withStreamInfo: function(s, a) {
        return this.extraStreamInfo[s] = a, this.mergeStreamInfo(), this;
      }, mergeStreamInfo: function() {
        for (var s in this.extraStreamInfo)
          Object.prototype.hasOwnProperty.call(this.extraStreamInfo, s) && (this.streamInfo[s] = this.extraStreamInfo[s]);
      }, lock: function() {
        if (this.isLocked)
          throw new Error("The stream '" + this + "' has already been used.");
        this.isLocked = !0, this.previous && this.previous.lock();
      }, toString: function() {
        var s = "Worker " + this.name;
        return this.previous ? this.previous + " -> " + s : s;
      } }, n.exports = o;
    }, {}], 29: [function(r, n, i) {
      var o = r("../utils"), s = r("./ConvertWorker"), a = r("./GenericWorker"), l = r("../base64"), c = r("../support"), d = r("../external"), p = null;
      if (c.nodestream)
        try {
          p = r("../nodejs/NodejsStreamOutputAdapter");
        } catch {
        }
      function g(b, h) {
        return new d.Promise(function(v, y) {
          var w = [], x = b._internalType, S = b._outputType, k = b._mimeType;
          b.on("data", function(N, T) {
            w.push(N), h && h(T);
          }).on("error", function(N) {
            w = [], y(N);
          }).on("end", function() {
            try {
              var N = function(T, V, F) {
                switch (T) {
                  case "blob":
                    return o.newBlob(o.transformTo("arraybuffer", V), F);
                  case "base64":
                    return l.encode(V);
                  default:
                    return o.transformTo(T, V);
                }
              }(S, function(T, V) {
                var F, G = 0, X = null, C = 0;
                for (F = 0; F < V.length; F++)
                  C += V[F].length;
                switch (T) {
                  case "string":
                    return V.join("");
                  case "array":
                    return Array.prototype.concat.apply([], V);
                  case "uint8array":
                    for (X = new Uint8Array(C), F = 0; F < V.length; F++)
                      X.set(V[F], G), G += V[F].length;
                    return X;
                  case "nodebuffer":
                    return Buffer.concat(V);
                  default:
                    throw new Error("concat : unsupported type '" + T + "'");
                }
              }(x, w), k);
              v(N);
            } catch (T) {
              y(T);
            }
            w = [];
          }).resume();
        });
      }
      function u(b, h, v) {
        var y = h;
        switch (h) {
          case "blob":
          case "arraybuffer":
            y = "uint8array";
            break;
          case "base64":
            y = "string";
        }
        try {
          this._internalType = y, this._outputType = h, this._mimeType = v, o.checkSupport(y), this._worker = b.pipe(new s(y)), b.lock();
        } catch (w) {
          this._worker = new a("error"), this._worker.error(w);
        }
      }
      u.prototype = { accumulate: function(b) {
        return g(this, b);
      }, on: function(b, h) {
        var v = this;
        return b === "data" ? this._worker.on(b, function(y) {
          h.call(v, y.data, y.meta);
        }) : this._worker.on(b, function() {
          o.delay(h, arguments, v);
        }), this;
      }, resume: function() {
        return o.delay(this._worker.resume, [], this._worker), this;
      }, pause: function() {
        return this._worker.pause(), this;
      }, toNodejsStream: function(b) {
        if (o.checkSupport("nodestream"), this._outputType !== "nodebuffer")
          throw new Error(this._outputType + " is not supported by this method");
        return new p(this, { objectMode: this._outputType !== "nodebuffer" }, b);
      } }, n.exports = u;
    }, { "../base64": 1, "../external": 6, "../nodejs/NodejsStreamOutputAdapter": 13, "../support": 30, "../utils": 32, "./ConvertWorker": 24, "./GenericWorker": 28 }], 30: [function(r, n, i) {
      if (i.base64 = !0, i.array = !0, i.string = !0, i.arraybuffer = typeof ArrayBuffer < "u" && typeof Uint8Array < "u", i.nodebuffer = typeof Buffer < "u", i.uint8array = typeof Uint8Array < "u", typeof ArrayBuffer > "u")
        i.blob = !1;
      else {
        var o = new ArrayBuffer(0);
        try {
          i.blob = new Blob([o], { type: "application/zip" }).size === 0;
        } catch {
          try {
            var s = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            s.append(o), i.blob = s.getBlob("application/zip").size === 0;
          } catch {
            i.blob = !1;
          }
        }
      }
      try {
        i.nodestream = !!r("readable-stream").Readable;
      } catch {
        i.nodestream = !1;
      }
    }, { "readable-stream": 16 }], 31: [function(r, n, i) {
      for (var o = r("./utils"), s = r("./support"), a = r("./nodejsUtils"), l = r("./stream/GenericWorker"), c = new Array(256), d = 0; d < 256; d++)
        c[d] = 252 <= d ? 6 : 248 <= d ? 5 : 240 <= d ? 4 : 224 <= d ? 3 : 192 <= d ? 2 : 1;
      c[254] = c[254] = 1;
      function p() {
        l.call(this, "utf-8 decode"), this.leftOver = null;
      }
      function g() {
        l.call(this, "utf-8 encode");
      }
      i.utf8encode = function(u) {
        return s.nodebuffer ? a.newBufferFrom(u, "utf-8") : function(b) {
          var h, v, y, w, x, S = b.length, k = 0;
          for (w = 0; w < S; w++)
            (64512 & (v = b.charCodeAt(w))) == 55296 && w + 1 < S && (64512 & (y = b.charCodeAt(w + 1))) == 56320 && (v = 65536 + (v - 55296 << 10) + (y - 56320), w++), k += v < 128 ? 1 : v < 2048 ? 2 : v < 65536 ? 3 : 4;
          for (h = s.uint8array ? new Uint8Array(k) : new Array(k), w = x = 0; x < k; w++)
            (64512 & (v = b.charCodeAt(w))) == 55296 && w + 1 < S && (64512 & (y = b.charCodeAt(w + 1))) == 56320 && (v = 65536 + (v - 55296 << 10) + (y - 56320), w++), v < 128 ? h[x++] = v : (v < 2048 ? h[x++] = 192 | v >>> 6 : (v < 65536 ? h[x++] = 224 | v >>> 12 : (h[x++] = 240 | v >>> 18, h[x++] = 128 | v >>> 12 & 63), h[x++] = 128 | v >>> 6 & 63), h[x++] = 128 | 63 & v);
          return h;
        }(u);
      }, i.utf8decode = function(u) {
        return s.nodebuffer ? o.transformTo("nodebuffer", u).toString("utf-8") : function(b) {
          var h, v, y, w, x = b.length, S = new Array(2 * x);
          for (h = v = 0; h < x; )
            if ((y = b[h++]) < 128)
              S[v++] = y;
            else if (4 < (w = c[y]))
              S[v++] = 65533, h += w - 1;
            else {
              for (y &= w === 2 ? 31 : w === 3 ? 15 : 7; 1 < w && h < x; )
                y = y << 6 | 63 & b[h++], w--;
              1 < w ? S[v++] = 65533 : y < 65536 ? S[v++] = y : (y -= 65536, S[v++] = 55296 | y >> 10 & 1023, S[v++] = 56320 | 1023 & y);
            }
          return S.length !== v && (S.subarray ? S = S.subarray(0, v) : S.length = v), o.applyFromCharCode(S);
        }(u = o.transformTo(s.uint8array ? "uint8array" : "array", u));
      }, o.inherits(p, l), p.prototype.processChunk = function(u) {
        var b = o.transformTo(s.uint8array ? "uint8array" : "array", u.data);
        if (this.leftOver && this.leftOver.length) {
          if (s.uint8array) {
            var h = b;
            (b = new Uint8Array(h.length + this.leftOver.length)).set(this.leftOver, 0), b.set(h, this.leftOver.length);
          } else
            b = this.leftOver.concat(b);
          this.leftOver = null;
        }
        var v = function(w, x) {
          var S;
          for ((x = x || w.length) > w.length && (x = w.length), S = x - 1; 0 <= S && (192 & w[S]) == 128; )
            S--;
          return S < 0 || S === 0 ? x : S + c[w[S]] > x ? S : x;
        }(b), y = b;
        v !== b.length && (s.uint8array ? (y = b.subarray(0, v), this.leftOver = b.subarray(v, b.length)) : (y = b.slice(0, v), this.leftOver = b.slice(v, b.length))), this.push({ data: i.utf8decode(y), meta: u.meta });
      }, p.prototype.flush = function() {
        this.leftOver && this.leftOver.length && (this.push({ data: i.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
      }, i.Utf8DecodeWorker = p, o.inherits(g, l), g.prototype.processChunk = function(u) {
        this.push({ data: i.utf8encode(u.data), meta: u.meta });
      }, i.Utf8EncodeWorker = g;
    }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(r, n, i) {
      var o = r("./support"), s = r("./base64"), a = r("./nodejsUtils"), l = r("./external");
      function c(h) {
        return h;
      }
      function d(h, v) {
        for (var y = 0; y < h.length; ++y)
          v[y] = 255 & h.charCodeAt(y);
        return v;
      }
      r("setimmediate"), i.newBlob = function(h, v) {
        i.checkSupport("blob");
        try {
          return new Blob([h], { type: v });
        } catch {
          try {
            var y = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            return y.append(h), y.getBlob(v);
          } catch {
            throw new Error("Bug : can't construct the Blob.");
          }
        }
      };
      var p = { stringifyByChunk: function(h, v, y) {
        var w = [], x = 0, S = h.length;
        if (S <= y)
          return String.fromCharCode.apply(null, h);
        for (; x < S; )
          v === "array" || v === "nodebuffer" ? w.push(String.fromCharCode.apply(null, h.slice(x, Math.min(x + y, S)))) : w.push(String.fromCharCode.apply(null, h.subarray(x, Math.min(x + y, S)))), x += y;
        return w.join("");
      }, stringifyByChar: function(h) {
        for (var v = "", y = 0; y < h.length; y++)
          v += String.fromCharCode(h[y]);
        return v;
      }, applyCanBeUsed: { uint8array: function() {
        try {
          return o.uint8array && String.fromCharCode.apply(null, new Uint8Array(1)).length === 1;
        } catch {
          return !1;
        }
      }(), nodebuffer: function() {
        try {
          return o.nodebuffer && String.fromCharCode.apply(null, a.allocBuffer(1)).length === 1;
        } catch {
          return !1;
        }
      }() } };
      function g(h) {
        var v = 65536, y = i.getTypeOf(h), w = !0;
        if (y === "uint8array" ? w = p.applyCanBeUsed.uint8array : y === "nodebuffer" && (w = p.applyCanBeUsed.nodebuffer), w)
          for (; 1 < v; )
            try {
              return p.stringifyByChunk(h, y, v);
            } catch {
              v = Math.floor(v / 2);
            }
        return p.stringifyByChar(h);
      }
      function u(h, v) {
        for (var y = 0; y < h.length; y++)
          v[y] = h[y];
        return v;
      }
      i.applyFromCharCode = g;
      var b = {};
      b.string = { string: c, array: function(h) {
        return d(h, new Array(h.length));
      }, arraybuffer: function(h) {
        return b.string.uint8array(h).buffer;
      }, uint8array: function(h) {
        return d(h, new Uint8Array(h.length));
      }, nodebuffer: function(h) {
        return d(h, a.allocBuffer(h.length));
      } }, b.array = { string: g, array: c, arraybuffer: function(h) {
        return new Uint8Array(h).buffer;
      }, uint8array: function(h) {
        return new Uint8Array(h);
      }, nodebuffer: function(h) {
        return a.newBufferFrom(h);
      } }, b.arraybuffer = { string: function(h) {
        return g(new Uint8Array(h));
      }, array: function(h) {
        return u(new Uint8Array(h), new Array(h.byteLength));
      }, arraybuffer: c, uint8array: function(h) {
        return new Uint8Array(h);
      }, nodebuffer: function(h) {
        return a.newBufferFrom(new Uint8Array(h));
      } }, b.uint8array = { string: g, array: function(h) {
        return u(h, new Array(h.length));
      }, arraybuffer: function(h) {
        return h.buffer;
      }, uint8array: c, nodebuffer: function(h) {
        return a.newBufferFrom(h);
      } }, b.nodebuffer = { string: g, array: function(h) {
        return u(h, new Array(h.length));
      }, arraybuffer: function(h) {
        return b.nodebuffer.uint8array(h).buffer;
      }, uint8array: function(h) {
        return u(h, new Uint8Array(h.length));
      }, nodebuffer: c }, i.transformTo = function(h, v) {
        if (v = v || "", !h)
          return v;
        i.checkSupport(h);
        var y = i.getTypeOf(v);
        return b[y][h](v);
      }, i.resolve = function(h) {
        for (var v = h.split("/"), y = [], w = 0; w < v.length; w++) {
          var x = v[w];
          x === "." || x === "" && w !== 0 && w !== v.length - 1 || (x === ".." ? y.pop() : y.push(x));
        }
        return y.join("/");
      }, i.getTypeOf = function(h) {
        return typeof h == "string" ? "string" : Object.prototype.toString.call(h) === "[object Array]" ? "array" : o.nodebuffer && a.isBuffer(h) ? "nodebuffer" : o.uint8array && h instanceof Uint8Array ? "uint8array" : o.arraybuffer && h instanceof ArrayBuffer ? "arraybuffer" : void 0;
      }, i.checkSupport = function(h) {
        if (!o[h.toLowerCase()])
          throw new Error(h + " is not supported by this platform");
      }, i.MAX_VALUE_16BITS = 65535, i.MAX_VALUE_32BITS = -1, i.pretty = function(h) {
        var v, y, w = "";
        for (y = 0; y < (h || "").length; y++)
          w += "\\x" + ((v = h.charCodeAt(y)) < 16 ? "0" : "") + v.toString(16).toUpperCase();
        return w;
      }, i.delay = function(h, v, y) {
        setImmediate(function() {
          h.apply(y || null, v || []);
        });
      }, i.inherits = function(h, v) {
        function y() {
        }
        y.prototype = v.prototype, h.prototype = new y();
      }, i.extend = function() {
        var h, v, y = {};
        for (h = 0; h < arguments.length; h++)
          for (v in arguments[h])
            Object.prototype.hasOwnProperty.call(arguments[h], v) && y[v] === void 0 && (y[v] = arguments[h][v]);
        return y;
      }, i.prepareContent = function(h, v, y, w, x) {
        return l.Promise.resolve(v).then(function(S) {
          return o.blob && (S instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(S)) !== -1) && typeof FileReader < "u" ? new l.Promise(function(k, N) {
            var T = new FileReader();
            T.onload = function(V) {
              k(V.target.result);
            }, T.onerror = function(V) {
              N(V.target.error);
            }, T.readAsArrayBuffer(S);
          }) : S;
        }).then(function(S) {
          var k = i.getTypeOf(S);
          return k ? (k === "arraybuffer" ? S = i.transformTo("uint8array", S) : k === "string" && (x ? S = s.decode(S) : y && w !== !0 && (S = function(N) {
            return d(N, o.uint8array ? new Uint8Array(N.length) : new Array(N.length));
          }(S))), S) : l.Promise.reject(new Error("Can't read the data of '" + h + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
        });
      };
    }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, setimmediate: 54 }], 33: [function(r, n, i) {
      var o = r("./reader/readerFor"), s = r("./utils"), a = r("./signature"), l = r("./zipEntry"), c = r("./support");
      function d(p) {
        this.files = [], this.loadOptions = p;
      }
      d.prototype = { checkSignature: function(p) {
        if (!this.reader.readAndCheckSignature(p)) {
          this.reader.index -= 4;
          var g = this.reader.readString(4);
          throw new Error("Corrupted zip or bug: unexpected signature (" + s.pretty(g) + ", expected " + s.pretty(p) + ")");
        }
      }, isSignature: function(p, g) {
        var u = this.reader.index;
        this.reader.setIndex(p);
        var b = this.reader.readString(4) === g;
        return this.reader.setIndex(u), b;
      }, readBlockEndOfCentral: function() {
        this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
        var p = this.reader.readData(this.zipCommentLength), g = c.uint8array ? "uint8array" : "array", u = s.transformTo(g, p);
        this.zipComment = this.loadOptions.decodeFileName(u);
      }, readBlockZip64EndOfCentral: function() {
        this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
        for (var p, g, u, b = this.zip64EndOfCentralSize - 44; 0 < b; )
          p = this.reader.readInt(2), g = this.reader.readInt(4), u = this.reader.readData(g), this.zip64ExtensibleData[p] = { id: p, length: g, value: u };
      }, readBlockZip64EndOfCentralLocator: function() {
        if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount)
          throw new Error("Multi-volumes zip are not supported");
      }, readLocalFiles: function() {
        var p, g;
        for (p = 0; p < this.files.length; p++)
          g = this.files[p], this.reader.setIndex(g.localHeaderOffset), this.checkSignature(a.LOCAL_FILE_HEADER), g.readLocalPart(this.reader), g.handleUTF8(), g.processAttributes();
      }, readCentralDir: function() {
        var p;
        for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER); )
          (p = new l({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(p);
        if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0)
          throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
      }, readEndOfCentral: function() {
        var p = this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);
        if (p < 0)
          throw this.isSignature(0, a.LOCAL_FILE_HEADER) ? new Error("Corrupted zip: can't find end of central directory") : new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
        this.reader.setIndex(p);
        var g = p;
        if (this.checkSignature(a.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === s.MAX_VALUE_16BITS || this.diskWithCentralDirStart === s.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === s.MAX_VALUE_16BITS || this.centralDirRecords === s.MAX_VALUE_16BITS || this.centralDirSize === s.MAX_VALUE_32BITS || this.centralDirOffset === s.MAX_VALUE_32BITS) {
          if (this.zip64 = !0, (p = this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0)
            throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
          if (this.reader.setIndex(p), this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, a.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0))
            throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
          this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
        }
        var u = this.centralDirOffset + this.centralDirSize;
        this.zip64 && (u += 20, u += 12 + this.zip64EndOfCentralSize);
        var b = g - u;
        if (0 < b)
          this.isSignature(g, a.CENTRAL_FILE_HEADER) || (this.reader.zero = b);
        else if (b < 0)
          throw new Error("Corrupted zip: missing " + Math.abs(b) + " bytes.");
      }, prepareReader: function(p) {
        this.reader = o(p);
      }, load: function(p) {
        this.prepareReader(p), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
      } }, n.exports = d;
    }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utils": 32, "./zipEntry": 34 }], 34: [function(r, n, i) {
      var o = r("./reader/readerFor"), s = r("./utils"), a = r("./compressedObject"), l = r("./crc32"), c = r("./utf8"), d = r("./compressions"), p = r("./support");
      function g(u, b) {
        this.options = u, this.loadOptions = b;
      }
      g.prototype = { isEncrypted: function() {
        return (1 & this.bitFlag) == 1;
      }, useUTF8: function() {
        return (2048 & this.bitFlag) == 2048;
      }, readLocalPart: function(u) {
        var b, h;
        if (u.skip(22), this.fileNameLength = u.readInt(2), h = u.readInt(2), this.fileName = u.readData(this.fileNameLength), u.skip(h), this.compressedSize === -1 || this.uncompressedSize === -1)
          throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
        if ((b = function(v) {
          for (var y in d)
            if (Object.prototype.hasOwnProperty.call(d, y) && d[y].magic === v)
              return d[y];
          return null;
        }(this.compressionMethod)) === null)
          throw new Error("Corrupted zip : compression " + s.pretty(this.compressionMethod) + " unknown (inner file : " + s.transformTo("string", this.fileName) + ")");
        this.decompressed = new a(this.compressedSize, this.uncompressedSize, this.crc32, b, u.readData(this.compressedSize));
      }, readCentralPart: function(u) {
        this.versionMadeBy = u.readInt(2), u.skip(2), this.bitFlag = u.readInt(2), this.compressionMethod = u.readString(2), this.date = u.readDate(), this.crc32 = u.readInt(4), this.compressedSize = u.readInt(4), this.uncompressedSize = u.readInt(4);
        var b = u.readInt(2);
        if (this.extraFieldsLength = u.readInt(2), this.fileCommentLength = u.readInt(2), this.diskNumberStart = u.readInt(2), this.internalFileAttributes = u.readInt(2), this.externalFileAttributes = u.readInt(4), this.localHeaderOffset = u.readInt(4), this.isEncrypted())
          throw new Error("Encrypted zip are not supported");
        u.skip(b), this.readExtraFields(u), this.parseZIP64ExtraField(u), this.fileComment = u.readData(this.fileCommentLength);
      }, processAttributes: function() {
        this.unixPermissions = null, this.dosPermissions = null;
        var u = this.versionMadeBy >> 8;
        this.dir = !!(16 & this.externalFileAttributes), u == 0 && (this.dosPermissions = 63 & this.externalFileAttributes), u == 3 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || this.fileNameStr.slice(-1) !== "/" || (this.dir = !0);
      }, parseZIP64ExtraField: function() {
        if (this.extraFields[1]) {
          var u = o(this.extraFields[1].value);
          this.uncompressedSize === s.MAX_VALUE_32BITS && (this.uncompressedSize = u.readInt(8)), this.compressedSize === s.MAX_VALUE_32BITS && (this.compressedSize = u.readInt(8)), this.localHeaderOffset === s.MAX_VALUE_32BITS && (this.localHeaderOffset = u.readInt(8)), this.diskNumberStart === s.MAX_VALUE_32BITS && (this.diskNumberStart = u.readInt(4));
        }
      }, readExtraFields: function(u) {
        var b, h, v, y = u.index + this.extraFieldsLength;
        for (this.extraFields || (this.extraFields = {}); u.index + 4 < y; )
          b = u.readInt(2), h = u.readInt(2), v = u.readData(h), this.extraFields[b] = { id: b, length: h, value: v };
        u.setIndex(y);
      }, handleUTF8: function() {
        var u = p.uint8array ? "uint8array" : "array";
        if (this.useUTF8())
          this.fileNameStr = c.utf8decode(this.fileName), this.fileCommentStr = c.utf8decode(this.fileComment);
        else {
          var b = this.findExtraFieldUnicodePath();
          if (b !== null)
            this.fileNameStr = b;
          else {
            var h = s.transformTo(u, this.fileName);
            this.fileNameStr = this.loadOptions.decodeFileName(h);
          }
          var v = this.findExtraFieldUnicodeComment();
          if (v !== null)
            this.fileCommentStr = v;
          else {
            var y = s.transformTo(u, this.fileComment);
            this.fileCommentStr = this.loadOptions.decodeFileName(y);
          }
        }
      }, findExtraFieldUnicodePath: function() {
        var u = this.extraFields[28789];
        if (u) {
          var b = o(u.value);
          return b.readInt(1) !== 1 || l(this.fileName) !== b.readInt(4) ? null : c.utf8decode(b.readData(u.length - 5));
        }
        return null;
      }, findExtraFieldUnicodeComment: function() {
        var u = this.extraFields[25461];
        if (u) {
          var b = o(u.value);
          return b.readInt(1) !== 1 || l(this.fileComment) !== b.readInt(4) ? null : c.utf8decode(b.readData(u.length - 5));
        }
        return null;
      } }, n.exports = g;
    }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }], 35: [function(r, n, i) {
      function o(b, h, v) {
        this.name = b, this.dir = v.dir, this.date = v.date, this.comment = v.comment, this.unixPermissions = v.unixPermissions, this.dosPermissions = v.dosPermissions, this._data = h, this._dataBinary = v.binary, this.options = { compression: v.compression, compressionOptions: v.compressionOptions };
      }
      var s = r("./stream/StreamHelper"), a = r("./stream/DataWorker"), l = r("./utf8"), c = r("./compressedObject"), d = r("./stream/GenericWorker");
      o.prototype = { internalStream: function(b) {
        var h = null, v = "string";
        try {
          if (!b)
            throw new Error("No output type specified.");
          var y = (v = b.toLowerCase()) === "string" || v === "text";
          v !== "binarystring" && v !== "text" || (v = "string"), h = this._decompressWorker();
          var w = !this._dataBinary;
          w && !y && (h = h.pipe(new l.Utf8EncodeWorker())), !w && y && (h = h.pipe(new l.Utf8DecodeWorker()));
        } catch (x) {
          (h = new d("error")).error(x);
        }
        return new s(h, v, "");
      }, async: function(b, h) {
        return this.internalStream(b).accumulate(h);
      }, nodeStream: function(b, h) {
        return this.internalStream(b || "nodebuffer").toNodejsStream(h);
      }, _compressWorker: function(b, h) {
        if (this._data instanceof c && this._data.compression.magic === b.magic)
          return this._data.getCompressedWorker();
        var v = this._decompressWorker();
        return this._dataBinary || (v = v.pipe(new l.Utf8EncodeWorker())), c.createWorkerFrom(v, b, h);
      }, _decompressWorker: function() {
        return this._data instanceof c ? this._data.getContentWorker() : this._data instanceof d ? this._data : new a(this._data);
      } };
      for (var p = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], g = function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, u = 0; u < p.length; u++)
        o.prototype[p[u]] = g;
      n.exports = o;
    }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(r, n, i) {
      (function(o) {
        var s, a, l = o.MutationObserver || o.WebKitMutationObserver;
        if (l) {
          var c = 0, d = new l(b), p = o.document.createTextNode("");
          d.observe(p, { characterData: !0 }), s = function() {
            p.data = c = ++c % 2;
          };
        } else if (o.setImmediate || o.MessageChannel === void 0)
          s = "document" in o && "onreadystatechange" in o.document.createElement("script") ? function() {
            var h = o.document.createElement("script");
            h.onreadystatechange = function() {
              b(), h.onreadystatechange = null, h.parentNode.removeChild(h), h = null;
            }, o.document.documentElement.appendChild(h);
          } : function() {
            setTimeout(b, 0);
          };
        else {
          var g = new o.MessageChannel();
          g.port1.onmessage = b, s = function() {
            g.port2.postMessage(0);
          };
        }
        var u = [];
        function b() {
          var h, v;
          a = !0;
          for (var y = u.length; y; ) {
            for (v = u, u = [], h = -1; ++h < y; )
              v[h]();
            y = u.length;
          }
          a = !1;
        }
        n.exports = function(h) {
          u.push(h) !== 1 || a || s();
        };
      }).call(this, typeof ft < "u" ? ft : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 37: [function(r, n, i) {
      var o = r("immediate");
      function s() {
      }
      var a = {}, l = ["REJECTED"], c = ["FULFILLED"], d = ["PENDING"];
      function p(y) {
        if (typeof y != "function")
          throw new TypeError("resolver must be a function");
        this.state = d, this.queue = [], this.outcome = void 0, y !== s && h(this, y);
      }
      function g(y, w, x) {
        this.promise = y, typeof w == "function" && (this.onFulfilled = w, this.callFulfilled = this.otherCallFulfilled), typeof x == "function" && (this.onRejected = x, this.callRejected = this.otherCallRejected);
      }
      function u(y, w, x) {
        o(function() {
          var S;
          try {
            S = w(x);
          } catch (k) {
            return a.reject(y, k);
          }
          S === y ? a.reject(y, new TypeError("Cannot resolve promise with itself")) : a.resolve(y, S);
        });
      }
      function b(y) {
        var w = y && y.then;
        if (y && (typeof y == "object" || typeof y == "function") && typeof w == "function")
          return function() {
            w.apply(y, arguments);
          };
      }
      function h(y, w) {
        var x = !1;
        function S(T) {
          x || (x = !0, a.reject(y, T));
        }
        function k(T) {
          x || (x = !0, a.resolve(y, T));
        }
        var N = v(function() {
          w(k, S);
        });
        N.status === "error" && S(N.value);
      }
      function v(y, w) {
        var x = {};
        try {
          x.value = y(w), x.status = "success";
        } catch (S) {
          x.status = "error", x.value = S;
        }
        return x;
      }
      (n.exports = p).prototype.finally = function(y) {
        if (typeof y != "function")
          return this;
        var w = this.constructor;
        return this.then(function(x) {
          return w.resolve(y()).then(function() {
            return x;
          });
        }, function(x) {
          return w.resolve(y()).then(function() {
            throw x;
          });
        });
      }, p.prototype.catch = function(y) {
        return this.then(null, y);
      }, p.prototype.then = function(y, w) {
        if (typeof y != "function" && this.state === c || typeof w != "function" && this.state === l)
          return this;
        var x = new this.constructor(s);
        return this.state !== d ? u(x, this.state === c ? y : w, this.outcome) : this.queue.push(new g(x, y, w)), x;
      }, g.prototype.callFulfilled = function(y) {
        a.resolve(this.promise, y);
      }, g.prototype.otherCallFulfilled = function(y) {
        u(this.promise, this.onFulfilled, y);
      }, g.prototype.callRejected = function(y) {
        a.reject(this.promise, y);
      }, g.prototype.otherCallRejected = function(y) {
        u(this.promise, this.onRejected, y);
      }, a.resolve = function(y, w) {
        var x = v(b, w);
        if (x.status === "error")
          return a.reject(y, x.value);
        var S = x.value;
        if (S)
          h(y, S);
        else {
          y.state = c, y.outcome = w;
          for (var k = -1, N = y.queue.length; ++k < N; )
            y.queue[k].callFulfilled(w);
        }
        return y;
      }, a.reject = function(y, w) {
        y.state = l, y.outcome = w;
        for (var x = -1, S = y.queue.length; ++x < S; )
          y.queue[x].callRejected(w);
        return y;
      }, p.resolve = function(y) {
        return y instanceof this ? y : a.resolve(new this(s), y);
      }, p.reject = function(y) {
        var w = new this(s);
        return a.reject(w, y);
      }, p.all = function(y) {
        var w = this;
        if (Object.prototype.toString.call(y) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var x = y.length, S = !1;
        if (!x)
          return this.resolve([]);
        for (var k = new Array(x), N = 0, T = -1, V = new this(s); ++T < x; )
          F(y[T], T);
        return V;
        function F(G, X) {
          w.resolve(G).then(function(C) {
            k[X] = C, ++N !== x || S || (S = !0, a.resolve(V, k));
          }, function(C) {
            S || (S = !0, a.reject(V, C));
          });
        }
      }, p.race = function(y) {
        var w = this;
        if (Object.prototype.toString.call(y) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var x = y.length, S = !1;
        if (!x)
          return this.resolve([]);
        for (var k = -1, N = new this(s); ++k < x; )
          T = y[k], w.resolve(T).then(function(V) {
            S || (S = !0, a.resolve(N, V));
          }, function(V) {
            S || (S = !0, a.reject(N, V));
          });
        var T;
        return N;
      };
    }, { immediate: 36 }], 38: [function(r, n, i) {
      var o = {};
      (0, r("./lib/utils/common").assign)(o, r("./lib/deflate"), r("./lib/inflate"), r("./lib/zlib/constants")), n.exports = o;
    }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(r, n, i) {
      var o = r("./zlib/deflate"), s = r("./utils/common"), a = r("./utils/strings"), l = r("./zlib/messages"), c = r("./zlib/zstream"), d = Object.prototype.toString, p = 0, g = -1, u = 0, b = 8;
      function h(y) {
        if (!(this instanceof h))
          return new h(y);
        this.options = s.assign({ level: g, method: b, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: u, to: "" }, y || {});
        var w = this.options;
        w.raw && 0 < w.windowBits ? w.windowBits = -w.windowBits : w.gzip && 0 < w.windowBits && w.windowBits < 16 && (w.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new c(), this.strm.avail_out = 0;
        var x = o.deflateInit2(this.strm, w.level, w.method, w.windowBits, w.memLevel, w.strategy);
        if (x !== p)
          throw new Error(l[x]);
        if (w.header && o.deflateSetHeader(this.strm, w.header), w.dictionary) {
          var S;
          if (S = typeof w.dictionary == "string" ? a.string2buf(w.dictionary) : d.call(w.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(w.dictionary) : w.dictionary, (x = o.deflateSetDictionary(this.strm, S)) !== p)
            throw new Error(l[x]);
          this._dict_set = !0;
        }
      }
      function v(y, w) {
        var x = new h(w);
        if (x.push(y, !0), x.err)
          throw x.msg || l[x.err];
        return x.result;
      }
      h.prototype.push = function(y, w) {
        var x, S, k = this.strm, N = this.options.chunkSize;
        if (this.ended)
          return !1;
        S = w === ~~w ? w : w === !0 ? 4 : 0, typeof y == "string" ? k.input = a.string2buf(y) : d.call(y) === "[object ArrayBuffer]" ? k.input = new Uint8Array(y) : k.input = y, k.next_in = 0, k.avail_in = k.input.length;
        do {
          if (k.avail_out === 0 && (k.output = new s.Buf8(N), k.next_out = 0, k.avail_out = N), (x = o.deflate(k, S)) !== 1 && x !== p)
            return this.onEnd(x), !(this.ended = !0);
          k.avail_out !== 0 && (k.avail_in !== 0 || S !== 4 && S !== 2) || (this.options.to === "string" ? this.onData(a.buf2binstring(s.shrinkBuf(k.output, k.next_out))) : this.onData(s.shrinkBuf(k.output, k.next_out)));
        } while ((0 < k.avail_in || k.avail_out === 0) && x !== 1);
        return S === 4 ? (x = o.deflateEnd(this.strm), this.onEnd(x), this.ended = !0, x === p) : S !== 2 || (this.onEnd(p), !(k.avail_out = 0));
      }, h.prototype.onData = function(y) {
        this.chunks.push(y);
      }, h.prototype.onEnd = function(y) {
        y === p && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = s.flattenChunks(this.chunks)), this.chunks = [], this.err = y, this.msg = this.strm.msg;
      }, i.Deflate = h, i.deflate = v, i.deflateRaw = function(y, w) {
        return (w = w || {}).raw = !0, v(y, w);
      }, i.gzip = function(y, w) {
        return (w = w || {}).gzip = !0, v(y, w);
      };
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(r, n, i) {
      var o = r("./zlib/inflate"), s = r("./utils/common"), a = r("./utils/strings"), l = r("./zlib/constants"), c = r("./zlib/messages"), d = r("./zlib/zstream"), p = r("./zlib/gzheader"), g = Object.prototype.toString;
      function u(h) {
        if (!(this instanceof u))
          return new u(h);
        this.options = s.assign({ chunkSize: 16384, windowBits: 0, to: "" }, h || {});
        var v = this.options;
        v.raw && 0 <= v.windowBits && v.windowBits < 16 && (v.windowBits = -v.windowBits, v.windowBits === 0 && (v.windowBits = -15)), !(0 <= v.windowBits && v.windowBits < 16) || h && h.windowBits || (v.windowBits += 32), 15 < v.windowBits && v.windowBits < 48 && !(15 & v.windowBits) && (v.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new d(), this.strm.avail_out = 0;
        var y = o.inflateInit2(this.strm, v.windowBits);
        if (y !== l.Z_OK)
          throw new Error(c[y]);
        this.header = new p(), o.inflateGetHeader(this.strm, this.header);
      }
      function b(h, v) {
        var y = new u(v);
        if (y.push(h, !0), y.err)
          throw y.msg || c[y.err];
        return y.result;
      }
      u.prototype.push = function(h, v) {
        var y, w, x, S, k, N, T = this.strm, V = this.options.chunkSize, F = this.options.dictionary, G = !1;
        if (this.ended)
          return !1;
        w = v === ~~v ? v : v === !0 ? l.Z_FINISH : l.Z_NO_FLUSH, typeof h == "string" ? T.input = a.binstring2buf(h) : g.call(h) === "[object ArrayBuffer]" ? T.input = new Uint8Array(h) : T.input = h, T.next_in = 0, T.avail_in = T.input.length;
        do {
          if (T.avail_out === 0 && (T.output = new s.Buf8(V), T.next_out = 0, T.avail_out = V), (y = o.inflate(T, l.Z_NO_FLUSH)) === l.Z_NEED_DICT && F && (N = typeof F == "string" ? a.string2buf(F) : g.call(F) === "[object ArrayBuffer]" ? new Uint8Array(F) : F, y = o.inflateSetDictionary(this.strm, N)), y === l.Z_BUF_ERROR && G === !0 && (y = l.Z_OK, G = !1), y !== l.Z_STREAM_END && y !== l.Z_OK)
            return this.onEnd(y), !(this.ended = !0);
          T.next_out && (T.avail_out !== 0 && y !== l.Z_STREAM_END && (T.avail_in !== 0 || w !== l.Z_FINISH && w !== l.Z_SYNC_FLUSH) || (this.options.to === "string" ? (x = a.utf8border(T.output, T.next_out), S = T.next_out - x, k = a.buf2string(T.output, x), T.next_out = S, T.avail_out = V - S, S && s.arraySet(T.output, T.output, x, S, 0), this.onData(k)) : this.onData(s.shrinkBuf(T.output, T.next_out)))), T.avail_in === 0 && T.avail_out === 0 && (G = !0);
        } while ((0 < T.avail_in || T.avail_out === 0) && y !== l.Z_STREAM_END);
        return y === l.Z_STREAM_END && (w = l.Z_FINISH), w === l.Z_FINISH ? (y = o.inflateEnd(this.strm), this.onEnd(y), this.ended = !0, y === l.Z_OK) : w !== l.Z_SYNC_FLUSH || (this.onEnd(l.Z_OK), !(T.avail_out = 0));
      }, u.prototype.onData = function(h) {
        this.chunks.push(h);
      }, u.prototype.onEnd = function(h) {
        h === l.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = s.flattenChunks(this.chunks)), this.chunks = [], this.err = h, this.msg = this.strm.msg;
      }, i.Inflate = u, i.inflate = b, i.inflateRaw = function(h, v) {
        return (v = v || {}).raw = !0, b(h, v);
      }, i.ungzip = b;
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/constants": 44, "./zlib/gzheader": 47, "./zlib/inflate": 49, "./zlib/messages": 51, "./zlib/zstream": 53 }], 41: [function(r, n, i) {
      var o = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
      i.assign = function(l) {
        for (var c = Array.prototype.slice.call(arguments, 1); c.length; ) {
          var d = c.shift();
          if (d) {
            if (typeof d != "object")
              throw new TypeError(d + "must be non-object");
            for (var p in d)
              d.hasOwnProperty(p) && (l[p] = d[p]);
          }
        }
        return l;
      }, i.shrinkBuf = function(l, c) {
        return l.length === c ? l : l.subarray ? l.subarray(0, c) : (l.length = c, l);
      };
      var s = { arraySet: function(l, c, d, p, g) {
        if (c.subarray && l.subarray)
          l.set(c.subarray(d, d + p), g);
        else
          for (var u = 0; u < p; u++)
            l[g + u] = c[d + u];
      }, flattenChunks: function(l) {
        var c, d, p, g, u, b;
        for (c = p = 0, d = l.length; c < d; c++)
          p += l[c].length;
        for (b = new Uint8Array(p), c = g = 0, d = l.length; c < d; c++)
          u = l[c], b.set(u, g), g += u.length;
        return b;
      } }, a = { arraySet: function(l, c, d, p, g) {
        for (var u = 0; u < p; u++)
          l[g + u] = c[d + u];
      }, flattenChunks: function(l) {
        return [].concat.apply([], l);
      } };
      i.setTyped = function(l) {
        l ? (i.Buf8 = Uint8Array, i.Buf16 = Uint16Array, i.Buf32 = Int32Array, i.assign(i, s)) : (i.Buf8 = Array, i.Buf16 = Array, i.Buf32 = Array, i.assign(i, a));
      }, i.setTyped(o);
    }, {}], 42: [function(r, n, i) {
      var o = r("./common"), s = !0, a = !0;
      try {
        String.fromCharCode.apply(null, [0]);
      } catch {
        s = !1;
      }
      try {
        String.fromCharCode.apply(null, new Uint8Array(1));
      } catch {
        a = !1;
      }
      for (var l = new o.Buf8(256), c = 0; c < 256; c++)
        l[c] = 252 <= c ? 6 : 248 <= c ? 5 : 240 <= c ? 4 : 224 <= c ? 3 : 192 <= c ? 2 : 1;
      function d(p, g) {
        if (g < 65537 && (p.subarray && a || !p.subarray && s))
          return String.fromCharCode.apply(null, o.shrinkBuf(p, g));
        for (var u = "", b = 0; b < g; b++)
          u += String.fromCharCode(p[b]);
        return u;
      }
      l[254] = l[254] = 1, i.string2buf = function(p) {
        var g, u, b, h, v, y = p.length, w = 0;
        for (h = 0; h < y; h++)
          (64512 & (u = p.charCodeAt(h))) == 55296 && h + 1 < y && (64512 & (b = p.charCodeAt(h + 1))) == 56320 && (u = 65536 + (u - 55296 << 10) + (b - 56320), h++), w += u < 128 ? 1 : u < 2048 ? 2 : u < 65536 ? 3 : 4;
        for (g = new o.Buf8(w), h = v = 0; v < w; h++)
          (64512 & (u = p.charCodeAt(h))) == 55296 && h + 1 < y && (64512 & (b = p.charCodeAt(h + 1))) == 56320 && (u = 65536 + (u - 55296 << 10) + (b - 56320), h++), u < 128 ? g[v++] = u : (u < 2048 ? g[v++] = 192 | u >>> 6 : (u < 65536 ? g[v++] = 224 | u >>> 12 : (g[v++] = 240 | u >>> 18, g[v++] = 128 | u >>> 12 & 63), g[v++] = 128 | u >>> 6 & 63), g[v++] = 128 | 63 & u);
        return g;
      }, i.buf2binstring = function(p) {
        return d(p, p.length);
      }, i.binstring2buf = function(p) {
        for (var g = new o.Buf8(p.length), u = 0, b = g.length; u < b; u++)
          g[u] = p.charCodeAt(u);
        return g;
      }, i.buf2string = function(p, g) {
        var u, b, h, v, y = g || p.length, w = new Array(2 * y);
        for (u = b = 0; u < y; )
          if ((h = p[u++]) < 128)
            w[b++] = h;
          else if (4 < (v = l[h]))
            w[b++] = 65533, u += v - 1;
          else {
            for (h &= v === 2 ? 31 : v === 3 ? 15 : 7; 1 < v && u < y; )
              h = h << 6 | 63 & p[u++], v--;
            1 < v ? w[b++] = 65533 : h < 65536 ? w[b++] = h : (h -= 65536, w[b++] = 55296 | h >> 10 & 1023, w[b++] = 56320 | 1023 & h);
          }
        return d(w, b);
      }, i.utf8border = function(p, g) {
        var u;
        for ((g = g || p.length) > p.length && (g = p.length), u = g - 1; 0 <= u && (192 & p[u]) == 128; )
          u--;
        return u < 0 || u === 0 ? g : u + l[p[u]] > g ? u : g;
      };
    }, { "./common": 41 }], 43: [function(r, n, i) {
      n.exports = function(o, s, a, l) {
        for (var c = 65535 & o | 0, d = o >>> 16 & 65535 | 0, p = 0; a !== 0; ) {
          for (a -= p = 2e3 < a ? 2e3 : a; d = d + (c = c + s[l++] | 0) | 0, --p; )
            ;
          c %= 65521, d %= 65521;
        }
        return c | d << 16 | 0;
      };
    }, {}], 44: [function(r, n, i) {
      n.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
    }, {}], 45: [function(r, n, i) {
      var o = function() {
        for (var s, a = [], l = 0; l < 256; l++) {
          s = l;
          for (var c = 0; c < 8; c++)
            s = 1 & s ? 3988292384 ^ s >>> 1 : s >>> 1;
          a[l] = s;
        }
        return a;
      }();
      n.exports = function(s, a, l, c) {
        var d = o, p = c + l;
        s ^= -1;
        for (var g = c; g < p; g++)
          s = s >>> 8 ^ d[255 & (s ^ a[g])];
        return -1 ^ s;
      };
    }, {}], 46: [function(r, n, i) {
      var o, s = r("../utils/common"), a = r("./trees"), l = r("./adler32"), c = r("./crc32"), d = r("./messages"), p = 0, g = 4, u = 0, b = -2, h = -1, v = 4, y = 2, w = 8, x = 9, S = 286, k = 30, N = 19, T = 2 * S + 1, V = 15, F = 3, G = 258, X = G + F + 1, C = 42, z = 113, m = 1, P = 2, se = 3, U = 4;
      function pe(f, $) {
        return f.msg = d[$], $;
      }
      function W(f) {
        return (f << 1) - (4 < f ? 9 : 0);
      }
      function Q(f) {
        for (var $ = f.length; 0 <= --$; )
          f[$] = 0;
      }
      function L(f) {
        var $ = f.state, j = $.pending;
        j > f.avail_out && (j = f.avail_out), j !== 0 && (s.arraySet(f.output, $.pending_buf, $.pending_out, j, f.next_out), f.next_out += j, $.pending_out += j, f.total_out += j, f.avail_out -= j, $.pending -= j, $.pending === 0 && ($.pending_out = 0));
      }
      function D(f, $) {
        a._tr_flush_block(f, 0 <= f.block_start ? f.block_start : -1, f.strstart - f.block_start, $), f.block_start = f.strstart, L(f.strm);
      }
      function oe(f, $) {
        f.pending_buf[f.pending++] = $;
      }
      function re(f, $) {
        f.pending_buf[f.pending++] = $ >>> 8 & 255, f.pending_buf[f.pending++] = 255 & $;
      }
      function J(f, $) {
        var j, O, E = f.max_chain_length, R = f.strstart, B = f.prev_length, H = f.nice_match, I = f.strstart > f.w_size - X ? f.strstart - (f.w_size - X) : 0, q = f.window, te = f.w_mask, Y = f.prev, ae = f.strstart + G, be = q[R + B - 1], xe = q[R + B];
        f.prev_length >= f.good_match && (E >>= 2), H > f.lookahead && (H = f.lookahead);
        do
          if (q[(j = $) + B] === xe && q[j + B - 1] === be && q[j] === q[R] && q[++j] === q[R + 1]) {
            R += 2, j++;
            do
              ;
            while (q[++R] === q[++j] && q[++R] === q[++j] && q[++R] === q[++j] && q[++R] === q[++j] && q[++R] === q[++j] && q[++R] === q[++j] && q[++R] === q[++j] && q[++R] === q[++j] && R < ae);
            if (O = G - (ae - R), R = ae - G, B < O) {
              if (f.match_start = $, H <= (B = O))
                break;
              be = q[R + B - 1], xe = q[R + B];
            }
          }
        while (($ = Y[$ & te]) > I && --E != 0);
        return B <= f.lookahead ? B : f.lookahead;
      }
      function ge(f) {
        var $, j, O, E, R, B, H, I, q, te, Y = f.w_size;
        do {
          if (E = f.window_size - f.lookahead - f.strstart, f.strstart >= Y + (Y - X)) {
            for (s.arraySet(f.window, f.window, Y, Y, 0), f.match_start -= Y, f.strstart -= Y, f.block_start -= Y, $ = j = f.hash_size; O = f.head[--$], f.head[$] = Y <= O ? O - Y : 0, --j; )
              ;
            for ($ = j = Y; O = f.prev[--$], f.prev[$] = Y <= O ? O - Y : 0, --j; )
              ;
            E += Y;
          }
          if (f.strm.avail_in === 0)
            break;
          if (B = f.strm, H = f.window, I = f.strstart + f.lookahead, q = E, te = void 0, te = B.avail_in, q < te && (te = q), j = te === 0 ? 0 : (B.avail_in -= te, s.arraySet(H, B.input, B.next_in, te, I), B.state.wrap === 1 ? B.adler = l(B.adler, H, te, I) : B.state.wrap === 2 && (B.adler = c(B.adler, H, te, I)), B.next_in += te, B.total_in += te, te), f.lookahead += j, f.lookahead + f.insert >= F)
            for (R = f.strstart - f.insert, f.ins_h = f.window[R], f.ins_h = (f.ins_h << f.hash_shift ^ f.window[R + 1]) & f.hash_mask; f.insert && (f.ins_h = (f.ins_h << f.hash_shift ^ f.window[R + F - 1]) & f.hash_mask, f.prev[R & f.w_mask] = f.head[f.ins_h], f.head[f.ins_h] = R, R++, f.insert--, !(f.lookahead + f.insert < F)); )
              ;
        } while (f.lookahead < X && f.strm.avail_in !== 0);
      }
      function Ie(f, $) {
        for (var j, O; ; ) {
          if (f.lookahead < X) {
            if (ge(f), f.lookahead < X && $ === p)
              return m;
            if (f.lookahead === 0)
              break;
          }
          if (j = 0, f.lookahead >= F && (f.ins_h = (f.ins_h << f.hash_shift ^ f.window[f.strstart + F - 1]) & f.hash_mask, j = f.prev[f.strstart & f.w_mask] = f.head[f.ins_h], f.head[f.ins_h] = f.strstart), j !== 0 && f.strstart - j <= f.w_size - X && (f.match_length = J(f, j)), f.match_length >= F)
            if (O = a._tr_tally(f, f.strstart - f.match_start, f.match_length - F), f.lookahead -= f.match_length, f.match_length <= f.max_lazy_match && f.lookahead >= F) {
              for (f.match_length--; f.strstart++, f.ins_h = (f.ins_h << f.hash_shift ^ f.window[f.strstart + F - 1]) & f.hash_mask, j = f.prev[f.strstart & f.w_mask] = f.head[f.ins_h], f.head[f.ins_h] = f.strstart, --f.match_length != 0; )
                ;
              f.strstart++;
            } else
              f.strstart += f.match_length, f.match_length = 0, f.ins_h = f.window[f.strstart], f.ins_h = (f.ins_h << f.hash_shift ^ f.window[f.strstart + 1]) & f.hash_mask;
          else
            O = a._tr_tally(f, 0, f.window[f.strstart]), f.lookahead--, f.strstart++;
          if (O && (D(f, !1), f.strm.avail_out === 0))
            return m;
        }
        return f.insert = f.strstart < F - 1 ? f.strstart : F - 1, $ === g ? (D(f, !0), f.strm.avail_out === 0 ? se : U) : f.last_lit && (D(f, !1), f.strm.avail_out === 0) ? m : P;
      }
      function fe(f, $) {
        for (var j, O, E; ; ) {
          if (f.lookahead < X) {
            if (ge(f), f.lookahead < X && $ === p)
              return m;
            if (f.lookahead === 0)
              break;
          }
          if (j = 0, f.lookahead >= F && (f.ins_h = (f.ins_h << f.hash_shift ^ f.window[f.strstart + F - 1]) & f.hash_mask, j = f.prev[f.strstart & f.w_mask] = f.head[f.ins_h], f.head[f.ins_h] = f.strstart), f.prev_length = f.match_length, f.prev_match = f.match_start, f.match_length = F - 1, j !== 0 && f.prev_length < f.max_lazy_match && f.strstart - j <= f.w_size - X && (f.match_length = J(f, j), f.match_length <= 5 && (f.strategy === 1 || f.match_length === F && 4096 < f.strstart - f.match_start) && (f.match_length = F - 1)), f.prev_length >= F && f.match_length <= f.prev_length) {
            for (E = f.strstart + f.lookahead - F, O = a._tr_tally(f, f.strstart - 1 - f.prev_match, f.prev_length - F), f.lookahead -= f.prev_length - 1, f.prev_length -= 2; ++f.strstart <= E && (f.ins_h = (f.ins_h << f.hash_shift ^ f.window[f.strstart + F - 1]) & f.hash_mask, j = f.prev[f.strstart & f.w_mask] = f.head[f.ins_h], f.head[f.ins_h] = f.strstart), --f.prev_length != 0; )
              ;
            if (f.match_available = 0, f.match_length = F - 1, f.strstart++, O && (D(f, !1), f.strm.avail_out === 0))
              return m;
          } else if (f.match_available) {
            if ((O = a._tr_tally(f, 0, f.window[f.strstart - 1])) && D(f, !1), f.strstart++, f.lookahead--, f.strm.avail_out === 0)
              return m;
          } else
            f.match_available = 1, f.strstart++, f.lookahead--;
        }
        return f.match_available && (O = a._tr_tally(f, 0, f.window[f.strstart - 1]), f.match_available = 0), f.insert = f.strstart < F - 1 ? f.strstart : F - 1, $ === g ? (D(f, !0), f.strm.avail_out === 0 ? se : U) : f.last_lit && (D(f, !1), f.strm.avail_out === 0) ? m : P;
      }
      function me(f, $, j, O, E) {
        this.good_length = f, this.max_lazy = $, this.nice_length = j, this.max_chain = O, this.func = E;
      }
      function Ae() {
        this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = w, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new s.Buf16(2 * T), this.dyn_dtree = new s.Buf16(2 * (2 * k + 1)), this.bl_tree = new s.Buf16(2 * (2 * N + 1)), Q(this.dyn_ltree), Q(this.dyn_dtree), Q(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new s.Buf16(V + 1), this.heap = new s.Buf16(2 * S + 1), Q(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new s.Buf16(2 * S + 1), Q(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
      }
      function Re(f) {
        var $;
        return f && f.state ? (f.total_in = f.total_out = 0, f.data_type = y, ($ = f.state).pending = 0, $.pending_out = 0, $.wrap < 0 && ($.wrap = -$.wrap), $.status = $.wrap ? C : z, f.adler = $.wrap === 2 ? 0 : 1, $.last_flush = p, a._tr_init($), u) : pe(f, b);
      }
      function He(f) {
        var $ = Re(f);
        return $ === u && function(j) {
          j.window_size = 2 * j.w_size, Q(j.head), j.max_lazy_match = o[j.level].max_lazy, j.good_match = o[j.level].good_length, j.nice_match = o[j.level].nice_length, j.max_chain_length = o[j.level].max_chain, j.strstart = 0, j.block_start = 0, j.lookahead = 0, j.insert = 0, j.match_length = j.prev_length = F - 1, j.match_available = 0, j.ins_h = 0;
        }(f.state), $;
      }
      function Ue(f, $, j, O, E, R) {
        if (!f)
          return b;
        var B = 1;
        if ($ === h && ($ = 6), O < 0 ? (B = 0, O = -O) : 15 < O && (B = 2, O -= 16), E < 1 || x < E || j !== w || O < 8 || 15 < O || $ < 0 || 9 < $ || R < 0 || v < R)
          return pe(f, b);
        O === 8 && (O = 9);
        var H = new Ae();
        return (f.state = H).strm = f, H.wrap = B, H.gzhead = null, H.w_bits = O, H.w_size = 1 << H.w_bits, H.w_mask = H.w_size - 1, H.hash_bits = E + 7, H.hash_size = 1 << H.hash_bits, H.hash_mask = H.hash_size - 1, H.hash_shift = ~~((H.hash_bits + F - 1) / F), H.window = new s.Buf8(2 * H.w_size), H.head = new s.Buf16(H.hash_size), H.prev = new s.Buf16(H.w_size), H.lit_bufsize = 1 << E + 6, H.pending_buf_size = 4 * H.lit_bufsize, H.pending_buf = new s.Buf8(H.pending_buf_size), H.d_buf = 1 * H.lit_bufsize, H.l_buf = 3 * H.lit_bufsize, H.level = $, H.strategy = R, H.method = j, He(f);
      }
      o = [new me(0, 0, 0, 0, function(f, $) {
        var j = 65535;
        for (j > f.pending_buf_size - 5 && (j = f.pending_buf_size - 5); ; ) {
          if (f.lookahead <= 1) {
            if (ge(f), f.lookahead === 0 && $ === p)
              return m;
            if (f.lookahead === 0)
              break;
          }
          f.strstart += f.lookahead, f.lookahead = 0;
          var O = f.block_start + j;
          if ((f.strstart === 0 || f.strstart >= O) && (f.lookahead = f.strstart - O, f.strstart = O, D(f, !1), f.strm.avail_out === 0) || f.strstart - f.block_start >= f.w_size - X && (D(f, !1), f.strm.avail_out === 0))
            return m;
        }
        return f.insert = 0, $ === g ? (D(f, !0), f.strm.avail_out === 0 ? se : U) : (f.strstart > f.block_start && (D(f, !1), f.strm.avail_out), m);
      }), new me(4, 4, 8, 4, Ie), new me(4, 5, 16, 8, Ie), new me(4, 6, 32, 32, Ie), new me(4, 4, 16, 16, fe), new me(8, 16, 32, 32, fe), new me(8, 16, 128, 128, fe), new me(8, 32, 128, 256, fe), new me(32, 128, 258, 1024, fe), new me(32, 258, 258, 4096, fe)], i.deflateInit = function(f, $) {
        return Ue(f, $, w, 15, 8, 0);
      }, i.deflateInit2 = Ue, i.deflateReset = He, i.deflateResetKeep = Re, i.deflateSetHeader = function(f, $) {
        return f && f.state ? f.state.wrap !== 2 ? b : (f.state.gzhead = $, u) : b;
      }, i.deflate = function(f, $) {
        var j, O, E, R;
        if (!f || !f.state || 5 < $ || $ < 0)
          return f ? pe(f, b) : b;
        if (O = f.state, !f.output || !f.input && f.avail_in !== 0 || O.status === 666 && $ !== g)
          return pe(f, f.avail_out === 0 ? -5 : b);
        if (O.strm = f, j = O.last_flush, O.last_flush = $, O.status === C)
          if (O.wrap === 2)
            f.adler = 0, oe(O, 31), oe(O, 139), oe(O, 8), O.gzhead ? (oe(O, (O.gzhead.text ? 1 : 0) + (O.gzhead.hcrc ? 2 : 0) + (O.gzhead.extra ? 4 : 0) + (O.gzhead.name ? 8 : 0) + (O.gzhead.comment ? 16 : 0)), oe(O, 255 & O.gzhead.time), oe(O, O.gzhead.time >> 8 & 255), oe(O, O.gzhead.time >> 16 & 255), oe(O, O.gzhead.time >> 24 & 255), oe(O, O.level === 9 ? 2 : 2 <= O.strategy || O.level < 2 ? 4 : 0), oe(O, 255 & O.gzhead.os), O.gzhead.extra && O.gzhead.extra.length && (oe(O, 255 & O.gzhead.extra.length), oe(O, O.gzhead.extra.length >> 8 & 255)), O.gzhead.hcrc && (f.adler = c(f.adler, O.pending_buf, O.pending, 0)), O.gzindex = 0, O.status = 69) : (oe(O, 0), oe(O, 0), oe(O, 0), oe(O, 0), oe(O, 0), oe(O, O.level === 9 ? 2 : 2 <= O.strategy || O.level < 2 ? 4 : 0), oe(O, 3), O.status = z);
          else {
            var B = w + (O.w_bits - 8 << 4) << 8;
            B |= (2 <= O.strategy || O.level < 2 ? 0 : O.level < 6 ? 1 : O.level === 6 ? 2 : 3) << 6, O.strstart !== 0 && (B |= 32), B += 31 - B % 31, O.status = z, re(O, B), O.strstart !== 0 && (re(O, f.adler >>> 16), re(O, 65535 & f.adler)), f.adler = 1;
          }
        if (O.status === 69)
          if (O.gzhead.extra) {
            for (E = O.pending; O.gzindex < (65535 & O.gzhead.extra.length) && (O.pending !== O.pending_buf_size || (O.gzhead.hcrc && O.pending > E && (f.adler = c(f.adler, O.pending_buf, O.pending - E, E)), L(f), E = O.pending, O.pending !== O.pending_buf_size)); )
              oe(O, 255 & O.gzhead.extra[O.gzindex]), O.gzindex++;
            O.gzhead.hcrc && O.pending > E && (f.adler = c(f.adler, O.pending_buf, O.pending - E, E)), O.gzindex === O.gzhead.extra.length && (O.gzindex = 0, O.status = 73);
          } else
            O.status = 73;
        if (O.status === 73)
          if (O.gzhead.name) {
            E = O.pending;
            do {
              if (O.pending === O.pending_buf_size && (O.gzhead.hcrc && O.pending > E && (f.adler = c(f.adler, O.pending_buf, O.pending - E, E)), L(f), E = O.pending, O.pending === O.pending_buf_size)) {
                R = 1;
                break;
              }
              R = O.gzindex < O.gzhead.name.length ? 255 & O.gzhead.name.charCodeAt(O.gzindex++) : 0, oe(O, R);
            } while (R !== 0);
            O.gzhead.hcrc && O.pending > E && (f.adler = c(f.adler, O.pending_buf, O.pending - E, E)), R === 0 && (O.gzindex = 0, O.status = 91);
          } else
            O.status = 91;
        if (O.status === 91)
          if (O.gzhead.comment) {
            E = O.pending;
            do {
              if (O.pending === O.pending_buf_size && (O.gzhead.hcrc && O.pending > E && (f.adler = c(f.adler, O.pending_buf, O.pending - E, E)), L(f), E = O.pending, O.pending === O.pending_buf_size)) {
                R = 1;
                break;
              }
              R = O.gzindex < O.gzhead.comment.length ? 255 & O.gzhead.comment.charCodeAt(O.gzindex++) : 0, oe(O, R);
            } while (R !== 0);
            O.gzhead.hcrc && O.pending > E && (f.adler = c(f.adler, O.pending_buf, O.pending - E, E)), R === 0 && (O.status = 103);
          } else
            O.status = 103;
        if (O.status === 103 && (O.gzhead.hcrc ? (O.pending + 2 > O.pending_buf_size && L(f), O.pending + 2 <= O.pending_buf_size && (oe(O, 255 & f.adler), oe(O, f.adler >> 8 & 255), f.adler = 0, O.status = z)) : O.status = z), O.pending !== 0) {
          if (L(f), f.avail_out === 0)
            return O.last_flush = -1, u;
        } else if (f.avail_in === 0 && W($) <= W(j) && $ !== g)
          return pe(f, -5);
        if (O.status === 666 && f.avail_in !== 0)
          return pe(f, -5);
        if (f.avail_in !== 0 || O.lookahead !== 0 || $ !== p && O.status !== 666) {
          var H = O.strategy === 2 ? function(I, q) {
            for (var te; ; ) {
              if (I.lookahead === 0 && (ge(I), I.lookahead === 0)) {
                if (q === p)
                  return m;
                break;
              }
              if (I.match_length = 0, te = a._tr_tally(I, 0, I.window[I.strstart]), I.lookahead--, I.strstart++, te && (D(I, !1), I.strm.avail_out === 0))
                return m;
            }
            return I.insert = 0, q === g ? (D(I, !0), I.strm.avail_out === 0 ? se : U) : I.last_lit && (D(I, !1), I.strm.avail_out === 0) ? m : P;
          }(O, $) : O.strategy === 3 ? function(I, q) {
            for (var te, Y, ae, be, xe = I.window; ; ) {
              if (I.lookahead <= G) {
                if (ge(I), I.lookahead <= G && q === p)
                  return m;
                if (I.lookahead === 0)
                  break;
              }
              if (I.match_length = 0, I.lookahead >= F && 0 < I.strstart && (Y = xe[ae = I.strstart - 1]) === xe[++ae] && Y === xe[++ae] && Y === xe[++ae]) {
                be = I.strstart + G;
                do
                  ;
                while (Y === xe[++ae] && Y === xe[++ae] && Y === xe[++ae] && Y === xe[++ae] && Y === xe[++ae] && Y === xe[++ae] && Y === xe[++ae] && Y === xe[++ae] && ae < be);
                I.match_length = G - (be - ae), I.match_length > I.lookahead && (I.match_length = I.lookahead);
              }
              if (I.match_length >= F ? (te = a._tr_tally(I, 1, I.match_length - F), I.lookahead -= I.match_length, I.strstart += I.match_length, I.match_length = 0) : (te = a._tr_tally(I, 0, I.window[I.strstart]), I.lookahead--, I.strstart++), te && (D(I, !1), I.strm.avail_out === 0))
                return m;
            }
            return I.insert = 0, q === g ? (D(I, !0), I.strm.avail_out === 0 ? se : U) : I.last_lit && (D(I, !1), I.strm.avail_out === 0) ? m : P;
          }(O, $) : o[O.level].func(O, $);
          if (H !== se && H !== U || (O.status = 666), H === m || H === se)
            return f.avail_out === 0 && (O.last_flush = -1), u;
          if (H === P && ($ === 1 ? a._tr_align(O) : $ !== 5 && (a._tr_stored_block(O, 0, 0, !1), $ === 3 && (Q(O.head), O.lookahead === 0 && (O.strstart = 0, O.block_start = 0, O.insert = 0))), L(f), f.avail_out === 0))
            return O.last_flush = -1, u;
        }
        return $ !== g ? u : O.wrap <= 0 ? 1 : (O.wrap === 2 ? (oe(O, 255 & f.adler), oe(O, f.adler >> 8 & 255), oe(O, f.adler >> 16 & 255), oe(O, f.adler >> 24 & 255), oe(O, 255 & f.total_in), oe(O, f.total_in >> 8 & 255), oe(O, f.total_in >> 16 & 255), oe(O, f.total_in >> 24 & 255)) : (re(O, f.adler >>> 16), re(O, 65535 & f.adler)), L(f), 0 < O.wrap && (O.wrap = -O.wrap), O.pending !== 0 ? u : 1);
      }, i.deflateEnd = function(f) {
        var $;
        return f && f.state ? ($ = f.state.status) !== C && $ !== 69 && $ !== 73 && $ !== 91 && $ !== 103 && $ !== z && $ !== 666 ? pe(f, b) : (f.state = null, $ === z ? pe(f, -3) : u) : b;
      }, i.deflateSetDictionary = function(f, $) {
        var j, O, E, R, B, H, I, q, te = $.length;
        if (!f || !f.state || (R = (j = f.state).wrap) === 2 || R === 1 && j.status !== C || j.lookahead)
          return b;
        for (R === 1 && (f.adler = l(f.adler, $, te, 0)), j.wrap = 0, te >= j.w_size && (R === 0 && (Q(j.head), j.strstart = 0, j.block_start = 0, j.insert = 0), q = new s.Buf8(j.w_size), s.arraySet(q, $, te - j.w_size, j.w_size, 0), $ = q, te = j.w_size), B = f.avail_in, H = f.next_in, I = f.input, f.avail_in = te, f.next_in = 0, f.input = $, ge(j); j.lookahead >= F; ) {
          for (O = j.strstart, E = j.lookahead - (F - 1); j.ins_h = (j.ins_h << j.hash_shift ^ j.window[O + F - 1]) & j.hash_mask, j.prev[O & j.w_mask] = j.head[j.ins_h], j.head[j.ins_h] = O, O++, --E; )
            ;
          j.strstart = O, j.lookahead = F - 1, ge(j);
        }
        return j.strstart += j.lookahead, j.block_start = j.strstart, j.insert = j.lookahead, j.lookahead = 0, j.match_length = j.prev_length = F - 1, j.match_available = 0, f.next_in = H, f.input = I, f.avail_in = B, j.wrap = R, u;
      }, i.deflateInfo = "pako deflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(r, n, i) {
      n.exports = function() {
        this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
      };
    }, {}], 48: [function(r, n, i) {
      n.exports = function(o, s) {
        var a, l, c, d, p, g, u, b, h, v, y, w, x, S, k, N, T, V, F, G, X, C, z, m, P;
        a = o.state, l = o.next_in, m = o.input, c = l + (o.avail_in - 5), d = o.next_out, P = o.output, p = d - (s - o.avail_out), g = d + (o.avail_out - 257), u = a.dmax, b = a.wsize, h = a.whave, v = a.wnext, y = a.window, w = a.hold, x = a.bits, S = a.lencode, k = a.distcode, N = (1 << a.lenbits) - 1, T = (1 << a.distbits) - 1;
        e:
          do {
            x < 15 && (w += m[l++] << x, x += 8, w += m[l++] << x, x += 8), V = S[w & N];
            t:
              for (; ; ) {
                if (w >>>= F = V >>> 24, x -= F, (F = V >>> 16 & 255) === 0)
                  P[d++] = 65535 & V;
                else {
                  if (!(16 & F)) {
                    if (!(64 & F)) {
                      V = S[(65535 & V) + (w & (1 << F) - 1)];
                      continue t;
                    }
                    if (32 & F) {
                      a.mode = 12;
                      break e;
                    }
                    o.msg = "invalid literal/length code", a.mode = 30;
                    break e;
                  }
                  G = 65535 & V, (F &= 15) && (x < F && (w += m[l++] << x, x += 8), G += w & (1 << F) - 1, w >>>= F, x -= F), x < 15 && (w += m[l++] << x, x += 8, w += m[l++] << x, x += 8), V = k[w & T];
                  r:
                    for (; ; ) {
                      if (w >>>= F = V >>> 24, x -= F, !(16 & (F = V >>> 16 & 255))) {
                        if (!(64 & F)) {
                          V = k[(65535 & V) + (w & (1 << F) - 1)];
                          continue r;
                        }
                        o.msg = "invalid distance code", a.mode = 30;
                        break e;
                      }
                      if (X = 65535 & V, x < (F &= 15) && (w += m[l++] << x, (x += 8) < F && (w += m[l++] << x, x += 8)), u < (X += w & (1 << F) - 1)) {
                        o.msg = "invalid distance too far back", a.mode = 30;
                        break e;
                      }
                      if (w >>>= F, x -= F, (F = d - p) < X) {
                        if (h < (F = X - F) && a.sane) {
                          o.msg = "invalid distance too far back", a.mode = 30;
                          break e;
                        }
                        if (z = y, (C = 0) === v) {
                          if (C += b - F, F < G) {
                            for (G -= F; P[d++] = y[C++], --F; )
                              ;
                            C = d - X, z = P;
                          }
                        } else if (v < F) {
                          if (C += b + v - F, (F -= v) < G) {
                            for (G -= F; P[d++] = y[C++], --F; )
                              ;
                            if (C = 0, v < G) {
                              for (G -= F = v; P[d++] = y[C++], --F; )
                                ;
                              C = d - X, z = P;
                            }
                          }
                        } else if (C += v - F, F < G) {
                          for (G -= F; P[d++] = y[C++], --F; )
                            ;
                          C = d - X, z = P;
                        }
                        for (; 2 < G; )
                          P[d++] = z[C++], P[d++] = z[C++], P[d++] = z[C++], G -= 3;
                        G && (P[d++] = z[C++], 1 < G && (P[d++] = z[C++]));
                      } else {
                        for (C = d - X; P[d++] = P[C++], P[d++] = P[C++], P[d++] = P[C++], 2 < (G -= 3); )
                          ;
                        G && (P[d++] = P[C++], 1 < G && (P[d++] = P[C++]));
                      }
                      break;
                    }
                }
                break;
              }
          } while (l < c && d < g);
        l -= G = x >> 3, w &= (1 << (x -= G << 3)) - 1, o.next_in = l, o.next_out = d, o.avail_in = l < c ? c - l + 5 : 5 - (l - c), o.avail_out = d < g ? g - d + 257 : 257 - (d - g), a.hold = w, a.bits = x;
      };
    }, {}], 49: [function(r, n, i) {
      var o = r("../utils/common"), s = r("./adler32"), a = r("./crc32"), l = r("./inffast"), c = r("./inftrees"), d = 1, p = 2, g = 0, u = -2, b = 1, h = 852, v = 592;
      function y(C) {
        return (C >>> 24 & 255) + (C >>> 8 & 65280) + ((65280 & C) << 8) + ((255 & C) << 24);
      }
      function w() {
        this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new o.Buf16(320), this.work = new o.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
      }
      function x(C) {
        var z;
        return C && C.state ? (z = C.state, C.total_in = C.total_out = z.total = 0, C.msg = "", z.wrap && (C.adler = 1 & z.wrap), z.mode = b, z.last = 0, z.havedict = 0, z.dmax = 32768, z.head = null, z.hold = 0, z.bits = 0, z.lencode = z.lendyn = new o.Buf32(h), z.distcode = z.distdyn = new o.Buf32(v), z.sane = 1, z.back = -1, g) : u;
      }
      function S(C) {
        var z;
        return C && C.state ? ((z = C.state).wsize = 0, z.whave = 0, z.wnext = 0, x(C)) : u;
      }
      function k(C, z) {
        var m, P;
        return C && C.state ? (P = C.state, z < 0 ? (m = 0, z = -z) : (m = 1 + (z >> 4), z < 48 && (z &= 15)), z && (z < 8 || 15 < z) ? u : (P.window !== null && P.wbits !== z && (P.window = null), P.wrap = m, P.wbits = z, S(C))) : u;
      }
      function N(C, z) {
        var m, P;
        return C ? (P = new w(), (C.state = P).window = null, (m = k(C, z)) !== g && (C.state = null), m) : u;
      }
      var T, V, F = !0;
      function G(C) {
        if (F) {
          var z;
          for (T = new o.Buf32(512), V = new o.Buf32(32), z = 0; z < 144; )
            C.lens[z++] = 8;
          for (; z < 256; )
            C.lens[z++] = 9;
          for (; z < 280; )
            C.lens[z++] = 7;
          for (; z < 288; )
            C.lens[z++] = 8;
          for (c(d, C.lens, 0, 288, T, 0, C.work, { bits: 9 }), z = 0; z < 32; )
            C.lens[z++] = 5;
          c(p, C.lens, 0, 32, V, 0, C.work, { bits: 5 }), F = !1;
        }
        C.lencode = T, C.lenbits = 9, C.distcode = V, C.distbits = 5;
      }
      function X(C, z, m, P) {
        var se, U = C.state;
        return U.window === null && (U.wsize = 1 << U.wbits, U.wnext = 0, U.whave = 0, U.window = new o.Buf8(U.wsize)), P >= U.wsize ? (o.arraySet(U.window, z, m - U.wsize, U.wsize, 0), U.wnext = 0, U.whave = U.wsize) : (P < (se = U.wsize - U.wnext) && (se = P), o.arraySet(U.window, z, m - P, se, U.wnext), (P -= se) ? (o.arraySet(U.window, z, m - P, P, 0), U.wnext = P, U.whave = U.wsize) : (U.wnext += se, U.wnext === U.wsize && (U.wnext = 0), U.whave < U.wsize && (U.whave += se))), 0;
      }
      i.inflateReset = S, i.inflateReset2 = k, i.inflateResetKeep = x, i.inflateInit = function(C) {
        return N(C, 15);
      }, i.inflateInit2 = N, i.inflate = function(C, z) {
        var m, P, se, U, pe, W, Q, L, D, oe, re, J, ge, Ie, fe, me, Ae, Re, He, Ue, f, $, j, O, E = 0, R = new o.Buf8(4), B = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
        if (!C || !C.state || !C.output || !C.input && C.avail_in !== 0)
          return u;
        (m = C.state).mode === 12 && (m.mode = 13), pe = C.next_out, se = C.output, Q = C.avail_out, U = C.next_in, P = C.input, W = C.avail_in, L = m.hold, D = m.bits, oe = W, re = Q, $ = g;
        e:
          for (; ; )
            switch (m.mode) {
              case b:
                if (m.wrap === 0) {
                  m.mode = 13;
                  break;
                }
                for (; D < 16; ) {
                  if (W === 0)
                    break e;
                  W--, L += P[U++] << D, D += 8;
                }
                if (2 & m.wrap && L === 35615) {
                  R[m.check = 0] = 255 & L, R[1] = L >>> 8 & 255, m.check = a(m.check, R, 2, 0), D = L = 0, m.mode = 2;
                  break;
                }
                if (m.flags = 0, m.head && (m.head.done = !1), !(1 & m.wrap) || (((255 & L) << 8) + (L >> 8)) % 31) {
                  C.msg = "incorrect header check", m.mode = 30;
                  break;
                }
                if ((15 & L) != 8) {
                  C.msg = "unknown compression method", m.mode = 30;
                  break;
                }
                if (D -= 4, f = 8 + (15 & (L >>>= 4)), m.wbits === 0)
                  m.wbits = f;
                else if (f > m.wbits) {
                  C.msg = "invalid window size", m.mode = 30;
                  break;
                }
                m.dmax = 1 << f, C.adler = m.check = 1, m.mode = 512 & L ? 10 : 12, D = L = 0;
                break;
              case 2:
                for (; D < 16; ) {
                  if (W === 0)
                    break e;
                  W--, L += P[U++] << D, D += 8;
                }
                if (m.flags = L, (255 & m.flags) != 8) {
                  C.msg = "unknown compression method", m.mode = 30;
                  break;
                }
                if (57344 & m.flags) {
                  C.msg = "unknown header flags set", m.mode = 30;
                  break;
                }
                m.head && (m.head.text = L >> 8 & 1), 512 & m.flags && (R[0] = 255 & L, R[1] = L >>> 8 & 255, m.check = a(m.check, R, 2, 0)), D = L = 0, m.mode = 3;
              case 3:
                for (; D < 32; ) {
                  if (W === 0)
                    break e;
                  W--, L += P[U++] << D, D += 8;
                }
                m.head && (m.head.time = L), 512 & m.flags && (R[0] = 255 & L, R[1] = L >>> 8 & 255, R[2] = L >>> 16 & 255, R[3] = L >>> 24 & 255, m.check = a(m.check, R, 4, 0)), D = L = 0, m.mode = 4;
              case 4:
                for (; D < 16; ) {
                  if (W === 0)
                    break e;
                  W--, L += P[U++] << D, D += 8;
                }
                m.head && (m.head.xflags = 255 & L, m.head.os = L >> 8), 512 & m.flags && (R[0] = 255 & L, R[1] = L >>> 8 & 255, m.check = a(m.check, R, 2, 0)), D = L = 0, m.mode = 5;
              case 5:
                if (1024 & m.flags) {
                  for (; D < 16; ) {
                    if (W === 0)
                      break e;
                    W--, L += P[U++] << D, D += 8;
                  }
                  m.length = L, m.head && (m.head.extra_len = L), 512 & m.flags && (R[0] = 255 & L, R[1] = L >>> 8 & 255, m.check = a(m.check, R, 2, 0)), D = L = 0;
                } else
                  m.head && (m.head.extra = null);
                m.mode = 6;
              case 6:
                if (1024 & m.flags && (W < (J = m.length) && (J = W), J && (m.head && (f = m.head.extra_len - m.length, m.head.extra || (m.head.extra = new Array(m.head.extra_len)), o.arraySet(m.head.extra, P, U, J, f)), 512 & m.flags && (m.check = a(m.check, P, J, U)), W -= J, U += J, m.length -= J), m.length))
                  break e;
                m.length = 0, m.mode = 7;
              case 7:
                if (2048 & m.flags) {
                  if (W === 0)
                    break e;
                  for (J = 0; f = P[U + J++], m.head && f && m.length < 65536 && (m.head.name += String.fromCharCode(f)), f && J < W; )
                    ;
                  if (512 & m.flags && (m.check = a(m.check, P, J, U)), W -= J, U += J, f)
                    break e;
                } else
                  m.head && (m.head.name = null);
                m.length = 0, m.mode = 8;
              case 8:
                if (4096 & m.flags) {
                  if (W === 0)
                    break e;
                  for (J = 0; f = P[U + J++], m.head && f && m.length < 65536 && (m.head.comment += String.fromCharCode(f)), f && J < W; )
                    ;
                  if (512 & m.flags && (m.check = a(m.check, P, J, U)), W -= J, U += J, f)
                    break e;
                } else
                  m.head && (m.head.comment = null);
                m.mode = 9;
              case 9:
                if (512 & m.flags) {
                  for (; D < 16; ) {
                    if (W === 0)
                      break e;
                    W--, L += P[U++] << D, D += 8;
                  }
                  if (L !== (65535 & m.check)) {
                    C.msg = "header crc mismatch", m.mode = 30;
                    break;
                  }
                  D = L = 0;
                }
                m.head && (m.head.hcrc = m.flags >> 9 & 1, m.head.done = !0), C.adler = m.check = 0, m.mode = 12;
                break;
              case 10:
                for (; D < 32; ) {
                  if (W === 0)
                    break e;
                  W--, L += P[U++] << D, D += 8;
                }
                C.adler = m.check = y(L), D = L = 0, m.mode = 11;
              case 11:
                if (m.havedict === 0)
                  return C.next_out = pe, C.avail_out = Q, C.next_in = U, C.avail_in = W, m.hold = L, m.bits = D, 2;
                C.adler = m.check = 1, m.mode = 12;
              case 12:
                if (z === 5 || z === 6)
                  break e;
              case 13:
                if (m.last) {
                  L >>>= 7 & D, D -= 7 & D, m.mode = 27;
                  break;
                }
                for (; D < 3; ) {
                  if (W === 0)
                    break e;
                  W--, L += P[U++] << D, D += 8;
                }
                switch (m.last = 1 & L, D -= 1, 3 & (L >>>= 1)) {
                  case 0:
                    m.mode = 14;
                    break;
                  case 1:
                    if (G(m), m.mode = 20, z !== 6)
                      break;
                    L >>>= 2, D -= 2;
                    break e;
                  case 2:
                    m.mode = 17;
                    break;
                  case 3:
                    C.msg = "invalid block type", m.mode = 30;
                }
                L >>>= 2, D -= 2;
                break;
              case 14:
                for (L >>>= 7 & D, D -= 7 & D; D < 32; ) {
                  if (W === 0)
                    break e;
                  W--, L += P[U++] << D, D += 8;
                }
                if ((65535 & L) != (L >>> 16 ^ 65535)) {
                  C.msg = "invalid stored block lengths", m.mode = 30;
                  break;
                }
                if (m.length = 65535 & L, D = L = 0, m.mode = 15, z === 6)
                  break e;
              case 15:
                m.mode = 16;
              case 16:
                if (J = m.length) {
                  if (W < J && (J = W), Q < J && (J = Q), J === 0)
                    break e;
                  o.arraySet(se, P, U, J, pe), W -= J, U += J, Q -= J, pe += J, m.length -= J;
                  break;
                }
                m.mode = 12;
                break;
              case 17:
                for (; D < 14; ) {
                  if (W === 0)
                    break e;
                  W--, L += P[U++] << D, D += 8;
                }
                if (m.nlen = 257 + (31 & L), L >>>= 5, D -= 5, m.ndist = 1 + (31 & L), L >>>= 5, D -= 5, m.ncode = 4 + (15 & L), L >>>= 4, D -= 4, 286 < m.nlen || 30 < m.ndist) {
                  C.msg = "too many length or distance symbols", m.mode = 30;
                  break;
                }
                m.have = 0, m.mode = 18;
              case 18:
                for (; m.have < m.ncode; ) {
                  for (; D < 3; ) {
                    if (W === 0)
                      break e;
                    W--, L += P[U++] << D, D += 8;
                  }
                  m.lens[B[m.have++]] = 7 & L, L >>>= 3, D -= 3;
                }
                for (; m.have < 19; )
                  m.lens[B[m.have++]] = 0;
                if (m.lencode = m.lendyn, m.lenbits = 7, j = { bits: m.lenbits }, $ = c(0, m.lens, 0, 19, m.lencode, 0, m.work, j), m.lenbits = j.bits, $) {
                  C.msg = "invalid code lengths set", m.mode = 30;
                  break;
                }
                m.have = 0, m.mode = 19;
              case 19:
                for (; m.have < m.nlen + m.ndist; ) {
                  for (; me = (E = m.lencode[L & (1 << m.lenbits) - 1]) >>> 16 & 255, Ae = 65535 & E, !((fe = E >>> 24) <= D); ) {
                    if (W === 0)
                      break e;
                    W--, L += P[U++] << D, D += 8;
                  }
                  if (Ae < 16)
                    L >>>= fe, D -= fe, m.lens[m.have++] = Ae;
                  else {
                    if (Ae === 16) {
                      for (O = fe + 2; D < O; ) {
                        if (W === 0)
                          break e;
                        W--, L += P[U++] << D, D += 8;
                      }
                      if (L >>>= fe, D -= fe, m.have === 0) {
                        C.msg = "invalid bit length repeat", m.mode = 30;
                        break;
                      }
                      f = m.lens[m.have - 1], J = 3 + (3 & L), L >>>= 2, D -= 2;
                    } else if (Ae === 17) {
                      for (O = fe + 3; D < O; ) {
                        if (W === 0)
                          break e;
                        W--, L += P[U++] << D, D += 8;
                      }
                      D -= fe, f = 0, J = 3 + (7 & (L >>>= fe)), L >>>= 3, D -= 3;
                    } else {
                      for (O = fe + 7; D < O; ) {
                        if (W === 0)
                          break e;
                        W--, L += P[U++] << D, D += 8;
                      }
                      D -= fe, f = 0, J = 11 + (127 & (L >>>= fe)), L >>>= 7, D -= 7;
                    }
                    if (m.have + J > m.nlen + m.ndist) {
                      C.msg = "invalid bit length repeat", m.mode = 30;
                      break;
                    }
                    for (; J--; )
                      m.lens[m.have++] = f;
                  }
                }
                if (m.mode === 30)
                  break;
                if (m.lens[256] === 0) {
                  C.msg = "invalid code -- missing end-of-block", m.mode = 30;
                  break;
                }
                if (m.lenbits = 9, j = { bits: m.lenbits }, $ = c(d, m.lens, 0, m.nlen, m.lencode, 0, m.work, j), m.lenbits = j.bits, $) {
                  C.msg = "invalid literal/lengths set", m.mode = 30;
                  break;
                }
                if (m.distbits = 6, m.distcode = m.distdyn, j = { bits: m.distbits }, $ = c(p, m.lens, m.nlen, m.ndist, m.distcode, 0, m.work, j), m.distbits = j.bits, $) {
                  C.msg = "invalid distances set", m.mode = 30;
                  break;
                }
                if (m.mode = 20, z === 6)
                  break e;
              case 20:
                m.mode = 21;
              case 21:
                if (6 <= W && 258 <= Q) {
                  C.next_out = pe, C.avail_out = Q, C.next_in = U, C.avail_in = W, m.hold = L, m.bits = D, l(C, re), pe = C.next_out, se = C.output, Q = C.avail_out, U = C.next_in, P = C.input, W = C.avail_in, L = m.hold, D = m.bits, m.mode === 12 && (m.back = -1);
                  break;
                }
                for (m.back = 0; me = (E = m.lencode[L & (1 << m.lenbits) - 1]) >>> 16 & 255, Ae = 65535 & E, !((fe = E >>> 24) <= D); ) {
                  if (W === 0)
                    break e;
                  W--, L += P[U++] << D, D += 8;
                }
                if (me && !(240 & me)) {
                  for (Re = fe, He = me, Ue = Ae; me = (E = m.lencode[Ue + ((L & (1 << Re + He) - 1) >> Re)]) >>> 16 & 255, Ae = 65535 & E, !(Re + (fe = E >>> 24) <= D); ) {
                    if (W === 0)
                      break e;
                    W--, L += P[U++] << D, D += 8;
                  }
                  L >>>= Re, D -= Re, m.back += Re;
                }
                if (L >>>= fe, D -= fe, m.back += fe, m.length = Ae, me === 0) {
                  m.mode = 26;
                  break;
                }
                if (32 & me) {
                  m.back = -1, m.mode = 12;
                  break;
                }
                if (64 & me) {
                  C.msg = "invalid literal/length code", m.mode = 30;
                  break;
                }
                m.extra = 15 & me, m.mode = 22;
              case 22:
                if (m.extra) {
                  for (O = m.extra; D < O; ) {
                    if (W === 0)
                      break e;
                    W--, L += P[U++] << D, D += 8;
                  }
                  m.length += L & (1 << m.extra) - 1, L >>>= m.extra, D -= m.extra, m.back += m.extra;
                }
                m.was = m.length, m.mode = 23;
              case 23:
                for (; me = (E = m.distcode[L & (1 << m.distbits) - 1]) >>> 16 & 255, Ae = 65535 & E, !((fe = E >>> 24) <= D); ) {
                  if (W === 0)
                    break e;
                  W--, L += P[U++] << D, D += 8;
                }
                if (!(240 & me)) {
                  for (Re = fe, He = me, Ue = Ae; me = (E = m.distcode[Ue + ((L & (1 << Re + He) - 1) >> Re)]) >>> 16 & 255, Ae = 65535 & E, !(Re + (fe = E >>> 24) <= D); ) {
                    if (W === 0)
                      break e;
                    W--, L += P[U++] << D, D += 8;
                  }
                  L >>>= Re, D -= Re, m.back += Re;
                }
                if (L >>>= fe, D -= fe, m.back += fe, 64 & me) {
                  C.msg = "invalid distance code", m.mode = 30;
                  break;
                }
                m.offset = Ae, m.extra = 15 & me, m.mode = 24;
              case 24:
                if (m.extra) {
                  for (O = m.extra; D < O; ) {
                    if (W === 0)
                      break e;
                    W--, L += P[U++] << D, D += 8;
                  }
                  m.offset += L & (1 << m.extra) - 1, L >>>= m.extra, D -= m.extra, m.back += m.extra;
                }
                if (m.offset > m.dmax) {
                  C.msg = "invalid distance too far back", m.mode = 30;
                  break;
                }
                m.mode = 25;
              case 25:
                if (Q === 0)
                  break e;
                if (J = re - Q, m.offset > J) {
                  if ((J = m.offset - J) > m.whave && m.sane) {
                    C.msg = "invalid distance too far back", m.mode = 30;
                    break;
                  }
                  ge = J > m.wnext ? (J -= m.wnext, m.wsize - J) : m.wnext - J, J > m.length && (J = m.length), Ie = m.window;
                } else
                  Ie = se, ge = pe - m.offset, J = m.length;
                for (Q < J && (J = Q), Q -= J, m.length -= J; se[pe++] = Ie[ge++], --J; )
                  ;
                m.length === 0 && (m.mode = 21);
                break;
              case 26:
                if (Q === 0)
                  break e;
                se[pe++] = m.length, Q--, m.mode = 21;
                break;
              case 27:
                if (m.wrap) {
                  for (; D < 32; ) {
                    if (W === 0)
                      break e;
                    W--, L |= P[U++] << D, D += 8;
                  }
                  if (re -= Q, C.total_out += re, m.total += re, re && (C.adler = m.check = m.flags ? a(m.check, se, re, pe - re) : s(m.check, se, re, pe - re)), re = Q, (m.flags ? L : y(L)) !== m.check) {
                    C.msg = "incorrect data check", m.mode = 30;
                    break;
                  }
                  D = L = 0;
                }
                m.mode = 28;
              case 28:
                if (m.wrap && m.flags) {
                  for (; D < 32; ) {
                    if (W === 0)
                      break e;
                    W--, L += P[U++] << D, D += 8;
                  }
                  if (L !== (4294967295 & m.total)) {
                    C.msg = "incorrect length check", m.mode = 30;
                    break;
                  }
                  D = L = 0;
                }
                m.mode = 29;
              case 29:
                $ = 1;
                break e;
              case 30:
                $ = -3;
                break e;
              case 31:
                return -4;
              case 32:
              default:
                return u;
            }
        return C.next_out = pe, C.avail_out = Q, C.next_in = U, C.avail_in = W, m.hold = L, m.bits = D, (m.wsize || re !== C.avail_out && m.mode < 30 && (m.mode < 27 || z !== 4)) && X(C, C.output, C.next_out, re - C.avail_out) ? (m.mode = 31, -4) : (oe -= C.avail_in, re -= C.avail_out, C.total_in += oe, C.total_out += re, m.total += re, m.wrap && re && (C.adler = m.check = m.flags ? a(m.check, se, re, C.next_out - re) : s(m.check, se, re, C.next_out - re)), C.data_type = m.bits + (m.last ? 64 : 0) + (m.mode === 12 ? 128 : 0) + (m.mode === 20 || m.mode === 15 ? 256 : 0), (oe == 0 && re === 0 || z === 4) && $ === g && ($ = -5), $);
      }, i.inflateEnd = function(C) {
        if (!C || !C.state)
          return u;
        var z = C.state;
        return z.window && (z.window = null), C.state = null, g;
      }, i.inflateGetHeader = function(C, z) {
        var m;
        return C && C.state && 2 & (m = C.state).wrap ? ((m.head = z).done = !1, g) : u;
      }, i.inflateSetDictionary = function(C, z) {
        var m, P = z.length;
        return C && C.state ? (m = C.state).wrap !== 0 && m.mode !== 11 ? u : m.mode === 11 && s(1, z, P, 0) !== m.check ? -3 : X(C, z, P, P) ? (m.mode = 31, -4) : (m.havedict = 1, g) : u;
      }, i.inflateInfo = "pako inflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(r, n, i) {
      var o = r("../utils/common"), s = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], a = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], l = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], c = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
      n.exports = function(d, p, g, u, b, h, v, y) {
        var w, x, S, k, N, T, V, F, G, X = y.bits, C = 0, z = 0, m = 0, P = 0, se = 0, U = 0, pe = 0, W = 0, Q = 0, L = 0, D = null, oe = 0, re = new o.Buf16(16), J = new o.Buf16(16), ge = null, Ie = 0;
        for (C = 0; C <= 15; C++)
          re[C] = 0;
        for (z = 0; z < u; z++)
          re[p[g + z]]++;
        for (se = X, P = 15; 1 <= P && re[P] === 0; P--)
          ;
        if (P < se && (se = P), P === 0)
          return b[h++] = 20971520, b[h++] = 20971520, y.bits = 1, 0;
        for (m = 1; m < P && re[m] === 0; m++)
          ;
        for (se < m && (se = m), C = W = 1; C <= 15; C++)
          if (W <<= 1, (W -= re[C]) < 0)
            return -1;
        if (0 < W && (d === 0 || P !== 1))
          return -1;
        for (J[1] = 0, C = 1; C < 15; C++)
          J[C + 1] = J[C] + re[C];
        for (z = 0; z < u; z++)
          p[g + z] !== 0 && (v[J[p[g + z]]++] = z);
        if (T = d === 0 ? (D = ge = v, 19) : d === 1 ? (D = s, oe -= 257, ge = a, Ie -= 257, 256) : (D = l, ge = c, -1), C = m, N = h, pe = z = L = 0, S = -1, k = (Q = 1 << (U = se)) - 1, d === 1 && 852 < Q || d === 2 && 592 < Q)
          return 1;
        for (; ; ) {
          for (V = C - pe, G = v[z] < T ? (F = 0, v[z]) : v[z] > T ? (F = ge[Ie + v[z]], D[oe + v[z]]) : (F = 96, 0), w = 1 << C - pe, m = x = 1 << U; b[N + (L >> pe) + (x -= w)] = V << 24 | F << 16 | G | 0, x !== 0; )
            ;
          for (w = 1 << C - 1; L & w; )
            w >>= 1;
          if (w !== 0 ? (L &= w - 1, L += w) : L = 0, z++, --re[C] == 0) {
            if (C === P)
              break;
            C = p[g + v[z]];
          }
          if (se < C && (L & k) !== S) {
            for (pe === 0 && (pe = se), N += m, W = 1 << (U = C - pe); U + pe < P && !((W -= re[U + pe]) <= 0); )
              U++, W <<= 1;
            if (Q += 1 << U, d === 1 && 852 < Q || d === 2 && 592 < Q)
              return 1;
            b[S = L & k] = se << 24 | U << 16 | N - h | 0;
          }
        }
        return L !== 0 && (b[N + L] = C - pe << 24 | 64 << 16 | 0), y.bits = se, 0;
      };
    }, { "../utils/common": 41 }], 51: [function(r, n, i) {
      n.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
    }, {}], 52: [function(r, n, i) {
      var o = r("../utils/common"), s = 0, a = 1;
      function l(E) {
        for (var R = E.length; 0 <= --R; )
          E[R] = 0;
      }
      var c = 0, d = 29, p = 256, g = p + 1 + d, u = 30, b = 19, h = 2 * g + 1, v = 15, y = 16, w = 7, x = 256, S = 16, k = 17, N = 18, T = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], V = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], F = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], G = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], X = new Array(2 * (g + 2));
      l(X);
      var C = new Array(2 * u);
      l(C);
      var z = new Array(512);
      l(z);
      var m = new Array(256);
      l(m);
      var P = new Array(d);
      l(P);
      var se, U, pe, W = new Array(u);
      function Q(E, R, B, H, I) {
        this.static_tree = E, this.extra_bits = R, this.extra_base = B, this.elems = H, this.max_length = I, this.has_stree = E && E.length;
      }
      function L(E, R) {
        this.dyn_tree = E, this.max_code = 0, this.stat_desc = R;
      }
      function D(E) {
        return E < 256 ? z[E] : z[256 + (E >>> 7)];
      }
      function oe(E, R) {
        E.pending_buf[E.pending++] = 255 & R, E.pending_buf[E.pending++] = R >>> 8 & 255;
      }
      function re(E, R, B) {
        E.bi_valid > y - B ? (E.bi_buf |= R << E.bi_valid & 65535, oe(E, E.bi_buf), E.bi_buf = R >> y - E.bi_valid, E.bi_valid += B - y) : (E.bi_buf |= R << E.bi_valid & 65535, E.bi_valid += B);
      }
      function J(E, R, B) {
        re(E, B[2 * R], B[2 * R + 1]);
      }
      function ge(E, R) {
        for (var B = 0; B |= 1 & E, E >>>= 1, B <<= 1, 0 < --R; )
          ;
        return B >>> 1;
      }
      function Ie(E, R, B) {
        var H, I, q = new Array(v + 1), te = 0;
        for (H = 1; H <= v; H++)
          q[H] = te = te + B[H - 1] << 1;
        for (I = 0; I <= R; I++) {
          var Y = E[2 * I + 1];
          Y !== 0 && (E[2 * I] = ge(q[Y]++, Y));
        }
      }
      function fe(E) {
        var R;
        for (R = 0; R < g; R++)
          E.dyn_ltree[2 * R] = 0;
        for (R = 0; R < u; R++)
          E.dyn_dtree[2 * R] = 0;
        for (R = 0; R < b; R++)
          E.bl_tree[2 * R] = 0;
        E.dyn_ltree[2 * x] = 1, E.opt_len = E.static_len = 0, E.last_lit = E.matches = 0;
      }
      function me(E) {
        8 < E.bi_valid ? oe(E, E.bi_buf) : 0 < E.bi_valid && (E.pending_buf[E.pending++] = E.bi_buf), E.bi_buf = 0, E.bi_valid = 0;
      }
      function Ae(E, R, B, H) {
        var I = 2 * R, q = 2 * B;
        return E[I] < E[q] || E[I] === E[q] && H[R] <= H[B];
      }
      function Re(E, R, B) {
        for (var H = E.heap[B], I = B << 1; I <= E.heap_len && (I < E.heap_len && Ae(R, E.heap[I + 1], E.heap[I], E.depth) && I++, !Ae(R, H, E.heap[I], E.depth)); )
          E.heap[B] = E.heap[I], B = I, I <<= 1;
        E.heap[B] = H;
      }
      function He(E, R, B) {
        var H, I, q, te, Y = 0;
        if (E.last_lit !== 0)
          for (; H = E.pending_buf[E.d_buf + 2 * Y] << 8 | E.pending_buf[E.d_buf + 2 * Y + 1], I = E.pending_buf[E.l_buf + Y], Y++, H === 0 ? J(E, I, R) : (J(E, (q = m[I]) + p + 1, R), (te = T[q]) !== 0 && re(E, I -= P[q], te), J(E, q = D(--H), B), (te = V[q]) !== 0 && re(E, H -= W[q], te)), Y < E.last_lit; )
            ;
        J(E, x, R);
      }
      function Ue(E, R) {
        var B, H, I, q = R.dyn_tree, te = R.stat_desc.static_tree, Y = R.stat_desc.has_stree, ae = R.stat_desc.elems, be = -1;
        for (E.heap_len = 0, E.heap_max = h, B = 0; B < ae; B++)
          q[2 * B] !== 0 ? (E.heap[++E.heap_len] = be = B, E.depth[B] = 0) : q[2 * B + 1] = 0;
        for (; E.heap_len < 2; )
          q[2 * (I = E.heap[++E.heap_len] = be < 2 ? ++be : 0)] = 1, E.depth[I] = 0, E.opt_len--, Y && (E.static_len -= te[2 * I + 1]);
        for (R.max_code = be, B = E.heap_len >> 1; 1 <= B; B--)
          Re(E, q, B);
        for (I = ae; B = E.heap[1], E.heap[1] = E.heap[E.heap_len--], Re(E, q, 1), H = E.heap[1], E.heap[--E.heap_max] = B, E.heap[--E.heap_max] = H, q[2 * I] = q[2 * B] + q[2 * H], E.depth[I] = (E.depth[B] >= E.depth[H] ? E.depth[B] : E.depth[H]) + 1, q[2 * B + 1] = q[2 * H + 1] = I, E.heap[1] = I++, Re(E, q, 1), 2 <= E.heap_len; )
          ;
        E.heap[--E.heap_max] = E.heap[1], function(xe, Fe) {
          var Je, Be, Ze, Te, je, $e, Ke = Fe.dyn_tree, rt = Fe.max_code, et = Fe.stat_desc.static_tree, Ye = Fe.stat_desc.has_stree, ne = Fe.stat_desc.extra_bits, ue = Fe.stat_desc.extra_base, we = Fe.stat_desc.max_length, ze = 0;
          for (Te = 0; Te <= v; Te++)
            xe.bl_count[Te] = 0;
          for (Ke[2 * xe.heap[xe.heap_max] + 1] = 0, Je = xe.heap_max + 1; Je < h; Je++)
            we < (Te = Ke[2 * Ke[2 * (Be = xe.heap[Je]) + 1] + 1] + 1) && (Te = we, ze++), Ke[2 * Be + 1] = Te, rt < Be || (xe.bl_count[Te]++, je = 0, ue <= Be && (je = ne[Be - ue]), $e = Ke[2 * Be], xe.opt_len += $e * (Te + je), Ye && (xe.static_len += $e * (et[2 * Be + 1] + je)));
          if (ze !== 0) {
            do {
              for (Te = we - 1; xe.bl_count[Te] === 0; )
                Te--;
              xe.bl_count[Te]--, xe.bl_count[Te + 1] += 2, xe.bl_count[we]--, ze -= 2;
            } while (0 < ze);
            for (Te = we; Te !== 0; Te--)
              for (Be = xe.bl_count[Te]; Be !== 0; )
                rt < (Ze = xe.heap[--Je]) || (Ke[2 * Ze + 1] !== Te && (xe.opt_len += (Te - Ke[2 * Ze + 1]) * Ke[2 * Ze], Ke[2 * Ze + 1] = Te), Be--);
          }
        }(E, R), Ie(q, be, E.bl_count);
      }
      function f(E, R, B) {
        var H, I, q = -1, te = R[1], Y = 0, ae = 7, be = 4;
        for (te === 0 && (ae = 138, be = 3), R[2 * (B + 1) + 1] = 65535, H = 0; H <= B; H++)
          I = te, te = R[2 * (H + 1) + 1], ++Y < ae && I === te || (Y < be ? E.bl_tree[2 * I] += Y : I !== 0 ? (I !== q && E.bl_tree[2 * I]++, E.bl_tree[2 * S]++) : Y <= 10 ? E.bl_tree[2 * k]++ : E.bl_tree[2 * N]++, q = I, be = (Y = 0) === te ? (ae = 138, 3) : I === te ? (ae = 6, 3) : (ae = 7, 4));
      }
      function $(E, R, B) {
        var H, I, q = -1, te = R[1], Y = 0, ae = 7, be = 4;
        for (te === 0 && (ae = 138, be = 3), H = 0; H <= B; H++)
          if (I = te, te = R[2 * (H + 1) + 1], !(++Y < ae && I === te)) {
            if (Y < be)
              for (; J(E, I, E.bl_tree), --Y != 0; )
                ;
            else
              I !== 0 ? (I !== q && (J(E, I, E.bl_tree), Y--), J(E, S, E.bl_tree), re(E, Y - 3, 2)) : Y <= 10 ? (J(E, k, E.bl_tree), re(E, Y - 3, 3)) : (J(E, N, E.bl_tree), re(E, Y - 11, 7));
            q = I, be = (Y = 0) === te ? (ae = 138, 3) : I === te ? (ae = 6, 3) : (ae = 7, 4);
          }
      }
      l(W);
      var j = !1;
      function O(E, R, B, H) {
        re(E, (c << 1) + (H ? 1 : 0), 3), function(I, q, te, Y) {
          me(I), Y && (oe(I, te), oe(I, ~te)), o.arraySet(I.pending_buf, I.window, q, te, I.pending), I.pending += te;
        }(E, R, B, !0);
      }
      i._tr_init = function(E) {
        j || (function() {
          var R, B, H, I, q, te = new Array(v + 1);
          for (I = H = 0; I < d - 1; I++)
            for (P[I] = H, R = 0; R < 1 << T[I]; R++)
              m[H++] = I;
          for (m[H - 1] = I, I = q = 0; I < 16; I++)
            for (W[I] = q, R = 0; R < 1 << V[I]; R++)
              z[q++] = I;
          for (q >>= 7; I < u; I++)
            for (W[I] = q << 7, R = 0; R < 1 << V[I] - 7; R++)
              z[256 + q++] = I;
          for (B = 0; B <= v; B++)
            te[B] = 0;
          for (R = 0; R <= 143; )
            X[2 * R + 1] = 8, R++, te[8]++;
          for (; R <= 255; )
            X[2 * R + 1] = 9, R++, te[9]++;
          for (; R <= 279; )
            X[2 * R + 1] = 7, R++, te[7]++;
          for (; R <= 287; )
            X[2 * R + 1] = 8, R++, te[8]++;
          for (Ie(X, g + 1, te), R = 0; R < u; R++)
            C[2 * R + 1] = 5, C[2 * R] = ge(R, 5);
          se = new Q(X, T, p + 1, g, v), U = new Q(C, V, 0, u, v), pe = new Q(new Array(0), F, 0, b, w);
        }(), j = !0), E.l_desc = new L(E.dyn_ltree, se), E.d_desc = new L(E.dyn_dtree, U), E.bl_desc = new L(E.bl_tree, pe), E.bi_buf = 0, E.bi_valid = 0, fe(E);
      }, i._tr_stored_block = O, i._tr_flush_block = function(E, R, B, H) {
        var I, q, te = 0;
        0 < E.level ? (E.strm.data_type === 2 && (E.strm.data_type = function(Y) {
          var ae, be = 4093624447;
          for (ae = 0; ae <= 31; ae++, be >>>= 1)
            if (1 & be && Y.dyn_ltree[2 * ae] !== 0)
              return s;
          if (Y.dyn_ltree[18] !== 0 || Y.dyn_ltree[20] !== 0 || Y.dyn_ltree[26] !== 0)
            return a;
          for (ae = 32; ae < p; ae++)
            if (Y.dyn_ltree[2 * ae] !== 0)
              return a;
          return s;
        }(E)), Ue(E, E.l_desc), Ue(E, E.d_desc), te = function(Y) {
          var ae;
          for (f(Y, Y.dyn_ltree, Y.l_desc.max_code), f(Y, Y.dyn_dtree, Y.d_desc.max_code), Ue(Y, Y.bl_desc), ae = b - 1; 3 <= ae && Y.bl_tree[2 * G[ae] + 1] === 0; ae--)
            ;
          return Y.opt_len += 3 * (ae + 1) + 5 + 5 + 4, ae;
        }(E), I = E.opt_len + 3 + 7 >>> 3, (q = E.static_len + 3 + 7 >>> 3) <= I && (I = q)) : I = q = B + 5, B + 4 <= I && R !== -1 ? O(E, R, B, H) : E.strategy === 4 || q === I ? (re(E, 2 + (H ? 1 : 0), 3), He(E, X, C)) : (re(E, 4 + (H ? 1 : 0), 3), function(Y, ae, be, xe) {
          var Fe;
          for (re(Y, ae - 257, 5), re(Y, be - 1, 5), re(Y, xe - 4, 4), Fe = 0; Fe < xe; Fe++)
            re(Y, Y.bl_tree[2 * G[Fe] + 1], 3);
          $(Y, Y.dyn_ltree, ae - 1), $(Y, Y.dyn_dtree, be - 1);
        }(E, E.l_desc.max_code + 1, E.d_desc.max_code + 1, te + 1), He(E, E.dyn_ltree, E.dyn_dtree)), fe(E), H && me(E);
      }, i._tr_tally = function(E, R, B) {
        return E.pending_buf[E.d_buf + 2 * E.last_lit] = R >>> 8 & 255, E.pending_buf[E.d_buf + 2 * E.last_lit + 1] = 255 & R, E.pending_buf[E.l_buf + E.last_lit] = 255 & B, E.last_lit++, R === 0 ? E.dyn_ltree[2 * B]++ : (E.matches++, R--, E.dyn_ltree[2 * (m[B] + p + 1)]++, E.dyn_dtree[2 * D(R)]++), E.last_lit === E.lit_bufsize - 1;
      }, i._tr_align = function(E) {
        re(E, 2, 3), J(E, x, X), function(R) {
          R.bi_valid === 16 ? (oe(R, R.bi_buf), R.bi_buf = 0, R.bi_valid = 0) : 8 <= R.bi_valid && (R.pending_buf[R.pending++] = 255 & R.bi_buf, R.bi_buf >>= 8, R.bi_valid -= 8);
        }(E);
      };
    }, { "../utils/common": 41 }], 53: [function(r, n, i) {
      n.exports = function() {
        this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
      };
    }, {}], 54: [function(r, n, i) {
      (function(o) {
        (function(s, a) {
          if (!s.setImmediate) {
            var l, c, d, p, g = 1, u = {}, b = !1, h = s.document, v = Object.getPrototypeOf && Object.getPrototypeOf(s);
            v = v && v.setTimeout ? v : s, l = {}.toString.call(s.process) === "[object process]" ? function(S) {
              process.nextTick(function() {
                w(S);
              });
            } : function() {
              if (s.postMessage && !s.importScripts) {
                var S = !0, k = s.onmessage;
                return s.onmessage = function() {
                  S = !1;
                }, s.postMessage("", "*"), s.onmessage = k, S;
              }
            }() ? (p = "setImmediate$" + Math.random() + "$", s.addEventListener ? s.addEventListener("message", x, !1) : s.attachEvent("onmessage", x), function(S) {
              s.postMessage(p + S, "*");
            }) : s.MessageChannel ? ((d = new MessageChannel()).port1.onmessage = function(S) {
              w(S.data);
            }, function(S) {
              d.port2.postMessage(S);
            }) : h && "onreadystatechange" in h.createElement("script") ? (c = h.documentElement, function(S) {
              var k = h.createElement("script");
              k.onreadystatechange = function() {
                w(S), k.onreadystatechange = null, c.removeChild(k), k = null;
              }, c.appendChild(k);
            }) : function(S) {
              setTimeout(w, 0, S);
            }, v.setImmediate = function(S) {
              typeof S != "function" && (S = new Function("" + S));
              for (var k = new Array(arguments.length - 1), N = 0; N < k.length; N++)
                k[N] = arguments[N + 1];
              var T = { callback: S, args: k };
              return u[g] = T, l(g), g++;
            }, v.clearImmediate = y;
          }
          function y(S) {
            delete u[S];
          }
          function w(S) {
            if (b)
              setTimeout(w, 0, S);
            else {
              var k = u[S];
              if (k) {
                b = !0;
                try {
                  (function(N) {
                    var T = N.callback, V = N.args;
                    switch (V.length) {
                      case 0:
                        T();
                        break;
                      case 1:
                        T(V[0]);
                        break;
                      case 2:
                        T(V[0], V[1]);
                        break;
                      case 3:
                        T(V[0], V[1], V[2]);
                        break;
                      default:
                        T.apply(a, V);
                    }
                  })(k);
                } finally {
                  y(S), b = !1;
                }
              }
            }
          }
          function x(S) {
            S.source === s && typeof S.data == "string" && S.data.indexOf(p) === 0 && w(+S.data.slice(p.length));
          }
        })(typeof self > "u" ? o === void 0 ? this : o : self);
      }).call(this, typeof ft < "u" ? ft : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}] }, {}, [10])(10);
  });
})(Ho);
var Au = Ho.exports;
const Ru = /* @__PURE__ */ Cn(Au);
var Zo = { exports: {} };
(function(e, t) {
  (function(r, n) {
    n();
  })(ft, function() {
    function r(c, d) {
      return typeof d > "u" ? d = { autoBom: !1 } : typeof d != "object" && (console.warn("Deprecated: Expected third argument to be a object"), d = { autoBom: !d }), d.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(c.type) ? new Blob(["\uFEFF", c], { type: c.type }) : c;
    }
    function n(c, d, p) {
      var g = new XMLHttpRequest();
      g.open("GET", c), g.responseType = "blob", g.onload = function() {
        l(g.response, d, p);
      }, g.onerror = function() {
        console.error("could not download file");
      }, g.send();
    }
    function i(c) {
      var d = new XMLHttpRequest();
      d.open("HEAD", c, !1);
      try {
        d.send();
      } catch {
      }
      return 200 <= d.status && 299 >= d.status;
    }
    function o(c) {
      try {
        c.dispatchEvent(new MouseEvent("click"));
      } catch {
        var d = document.createEvent("MouseEvents");
        d.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), c.dispatchEvent(d);
      }
    }
    var s = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof ft == "object" && ft.global === ft ? ft : void 0, a = s.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), l = s.saveAs || (typeof window != "object" || window !== s ? function() {
    } : "download" in HTMLAnchorElement.prototype && !a ? function(c, d, p) {
      var g = s.URL || s.webkitURL, u = document.createElement("a");
      d = d || c.name || "download", u.download = d, u.rel = "noopener", typeof c == "string" ? (u.href = c, u.origin === location.origin ? o(u) : i(u.href) ? n(c, d, p) : o(u, u.target = "_blank")) : (u.href = g.createObjectURL(c), setTimeout(function() {
        g.revokeObjectURL(u.href);
      }, 4e4), setTimeout(function() {
        o(u);
      }, 0));
    } : "msSaveOrOpenBlob" in navigator ? function(c, d, p) {
      if (d = d || c.name || "download", typeof c != "string")
        navigator.msSaveOrOpenBlob(r(c, p), d);
      else if (i(c))
        n(c, d, p);
      else {
        var g = document.createElement("a");
        g.href = c, g.target = "_blank", setTimeout(function() {
          o(g);
        });
      }
    } : function(c, d, p, g) {
      if (g = g || open("", "_blank"), g && (g.document.title = g.document.body.innerText = "downloading..."), typeof c == "string")
        return n(c, d, p);
      var u = c.type === "application/octet-stream", b = /constructor/i.test(s.HTMLElement) || s.safari, h = /CriOS\/[\d]+/.test(navigator.userAgent);
      if ((h || u && b || a) && typeof FileReader < "u") {
        var v = new FileReader();
        v.onloadend = function() {
          var x = v.result;
          x = h ? x : x.replace(/^data:[^;]*;/, "data:attachment/file;"), g ? g.location.href = x : location = x, g = null;
        }, v.readAsDataURL(c);
      } else {
        var y = s.URL || s.webkitURL, w = y.createObjectURL(c);
        g ? g.location = w : location.href = w, g = null, setTimeout(function() {
          y.revokeObjectURL(w);
        }, 4e4);
      }
    });
    s.saveAs = l.saveAs = l, e.exports = l;
  });
})(Zo);
var Tu = Zo.exports;
const Nu = () => {
  const e = Ur.getState(), t = new Ru(), {
    structure: { normalized: r, initialFolder: n }
  } = e;
  if (r.files.allIds.length === 0 && r.folders.allIds.length === 1) {
    alert("There is nothing to download, you haven't created any files yet.");
    return;
  }
  const i = e.structure.projectName, o = {
    [n.id]: t
  };
  Pr(
    n.subFoldersAndFiles,
    (s, a) => {
      const l = r[`${s.type}s`].byId[s.id], c = a[a.length - 1], d = o[c];
      if (l.type === "file")
        d.file(`${l.name}.${l.extension}`, l.content);
      else {
        const p = d.folder(l.name);
        o[l.id] = p;
      }
    },
    [],
    [n.id]
  ), t.generateAsync({
    type: "blob"
  }).then((s) => {
    Tu.saveAs(s, `${i}.zip`);
  });
}, Iu = ({
  deleteConfirmationClassName: e,
  fileInputClassName: t,
  fileInputStyle: r,
  contextMenuClassName: n,
  contextMenuHrColor: i,
  contextMenuClickableAreaClassName: o,
  fileActionsBtnClassName: s,
  projectName: a,
  fileActionsDisableCollapse: l,
  fileActionsDisableTooltip: c,
  fileActionsDisableDownload: d,
  folderCollapseBtnClassname: p,
  folderCollapseBtnStyle: g,
  folderThreeDotPrimaryClass: u,
  folderThreeDotSecondaryClass: b,
  folderClickableAreaClassName: h,
  folderSelectedClickableAreaClassName: v,
  folderContextSelectedClickableAreaClassName: y,
  itemTitleClassName: w,
  structureContainerClassName: x,
  containerHeight: S,
  onItemSelected: k = () => {
  },
  onNewItemClick: N = () => {
  },
  onAreaCollapsed: T = () => {
  },
  onItemContextSelected: V = () => {
  },
  onNodeDeleted: F = () => {
  },
  onNewItemCreated: G = () => {
  },
  validExtensions: X
}) => {
  const C = Qe(null), z = Qe(null), m = Qe(), [P, se] = Ce(!1), U = wo(), pe = at(el), W = at(tl), Q = at(ol), L = at(ho), D = at(rl), oe = at(mo), re = at(sl), J = at(po), ge = at(nl), Ie = at(il), fe = at(al), [me, Ae] = Ce(!0), [Re, He] = Ce(!0), [Ue, f] = Ce(!1), [$, j] = Ce(""), [O, E] = Ce({
    x: 0,
    y: 0
  }), R = Qe(null), [B, H] = Ce(!1), [I, q] = Ce(0), [te, Y] = Ce(""), [ae, be] = Ce(!1), [xe, Fe] = Ce(!1), Je = [
    {
      title: "New File",
      handler: () => {
        Y("file"), $e();
      },
      disabled: $ === "file"
    },
    {
      title: "New Folder",
      handler: () => {
        Y("folder"), $e();
      },
      disabled: $ === "file"
    },
    {
      type: "hr",
      handler: () => {
      }
    },
    {
      title: "Cut",
      handler: () => {
        U(
          vi({
            id: L,
            type: D,
            isCut: !0
          })
        );
      },
      disabled: $ === "head"
    },
    {
      title: "Copy",
      handler: () => {
        U(
          vi({
            id: L,
            type: D,
            isCut: !1
          })
        );
      },
      disabled: $ === "head"
    },
    {
      title: "Paste",
      handler: async () => {
        U(dl()), J !== null && J.isCut && await U(bn());
      },
      disabled: $ === "file" || J === null
    },
    {
      type: "hr",
      handler: () => {
      }
    },
    {
      title: "Rename",
      handler: () => {
        var ne;
        Y(
          (ne = m.current) == null ? void 0 : ne.getAttribute("typeof-item")
        ), Ke(), be(!0);
      },
      disabled: $ === "head"
    },
    {
      title: "Delete",
      handler: () => {
        Fe(!0);
      },
      disabled: $ === "head"
    }
  ], Be = (ne = oe) => {
    var we;
    let ue = (we = C.current) == null ? void 0 : we.querySelector(`#${ne}`);
    ue || (ue = C.current), m.current = ue;
  }, Ze = {
    newFile: () => {
      Y("file");
      const ne = gi(oe, ge, pe);
      U(wi(ne)), Be(ne), $e(ne), N(ne, "file");
    },
    newFolder: () => {
      Y("folder");
      const ne = gi(oe, ge, pe);
      U(wi(ne)), Be(ne), $e(ne), N(ne, "folder");
    },
    download: () => {
      Nu();
    },
    collapseArea: () => {
      C.current && (P ? C.current.classList.remove("no-height") : C.current.classList.add("no-height"), se(!P), T(!P));
    }
  }, Te = (ne) => {
    var ue;
    m.current || Be(), m.current && (m.current === C.current || m.current.id.includes("file") && !ne ? (R.current = C.current, q(0)) : (ne || U(
      yn({
        item: { id: m.current.id, type: "folder" },
        collapse: !1
      })
    ), ne ? (R.current = m.current.parentElement, m.current.classList.add("hide-input"), q(0)) : (R.current = (ue = z.current) == null ? void 0 : ue.querySelector(
      "#ghost-input-" + m.current.id
    ), q(1))));
  }, je = (ne) => {
    if (ne !== B && (H(ne), ge.length === 0 && Ie.length === 1)) {
      const ue = document.getElementById("welcome");
      ne && !ue.classList.contains("display-none-c") ? ue.classList.add("display-none-c") : !ne && ue.classList.contains("display-none-c") && ue.classList.remove("display-none-c");
    }
  }, $e = (ne = L) => {
    C.current && (P && (C.current.classList.remove("no-height"), se(!1)), U(bi(ne)), Te(!1), je(!0));
  }, Ke = () => {
    U(bi("")), Te(!0), je(!0);
  }, rt = (ne) => {
    var we;
    if (!m.current)
      return;
    if (ae || ne === !1) {
      je(!1), (we = m.current) == null || we.classList.remove("hide-input"), ae && ne !== !1 && U(ul({ value: ne })), be(!1);
      return;
    } else
      U(ll({ value: ne, inputType: te }));
    je(!1);
    const ue = Ur.getState().structure.normalized.files.allIds;
    G(ue[ue.length - 1]);
  };
  Ne(() => {
    a !== void 0 && U(fl(a));
  }, [a]), Ne(() => {
    var ne;
    ae && !B && ((ne = m.current) == null || ne.classList.remove("hide-input"), be(!1));
  }, [ae, B]);
  const et = (ne, ue) => {
    if (!C.current || !ue)
      return;
    const we = ue.getAttribute("typeof-item"), ze = ue.getAttribute("parent-id");
    if (we === null || ze === null) {
      if (!ue.classList.contains("welcome") && !ue.classList.contains("clickable-padding"))
        return;
      ue.classList.contains("file-sys-ref") && (m.current = ue);
    }
    let he = null;
    ue.classList.contains("file-sys-container") ? he = C.current : he = C.current.querySelector(`#${ze}`), m.current = he;
    let Ee = ne.clientY, qe = ne.clientX;
    ne.clientY > window.innerHeight / 2 && (Ee = ne.clientY - 245), ne.clientX > window.innerWidth / 2 && (qe = ne.clientX - 192), E({
      x: Ee,
      y: qe
    }), j(ze === "head" ? "head" : we), f(!0);
  }, Ye = (ne) => {
    if (ne.preventDefault(), !C.current)
      return;
    const ue = ne.target;
    et({ clientY: ne.clientY, clientX: ne.clientX }, ue);
    const we = ue.getAttribute("parent-id"), ze = ue.getAttribute("typeof-item");
    U(yo({ id: we, type: ze, threeDot: !1 }));
  };
  return Ne(() => {
    var ue, we;
    if (!W)
      return;
    let ne;
    L === "head" ? ne = document.querySelector(".main-nav") : ne = (we = (ue = C.current) == null ? void 0 : ue.querySelector(`#${L}`)) == null ? void 0 : we.childNodes[0], et(
      { clientY: W.x, clientX: W.y },
      ne
    );
  }, [W]), Lr(z, () => {
    var ne, ue;
    oe !== "head" && (Ae(!1), He(!1)), (ne = C.current) == null || ne.classList.add("border-transparent"), (ue = C.current) == null || ue.classList.remove("border-vscode-blue");
  }), Ne(() => {
    Ae(!0);
  }, [oe]), Ne(() => {
    U(hl(X));
  }, [X]), /* @__PURE__ */ ee.jsxs(ee.Fragment, { children: [
    /* @__PURE__ */ ee.jsxs("div", { id: "file-system", className: "pr-2", children: [
      /* @__PURE__ */ ee.jsxs(
        "div",
        {
          style: {
            height: S || "calc(80vh - 4rem)"
          },
          className: "flex w-full flex-col justify-start",
          children: [
            /* @__PURE__ */ ee.jsx("div", { className: "my-2 flex flex-col items-start pl-2", children: /* @__PURE__ */ ee.jsx(
              $c,
              {
                ...Ze,
                collapsed: P,
                btnClassName: s,
                projectName: a,
                disableCollapse: l,
                disableTooltip: c,
                disableDownload: d
              }
            ) }),
            /* @__PURE__ */ ee.jsxs(
              "div",
              {
                id: "structure-container",
                "parent-id": "head",
                "typeof-item": "folder",
                className: `border file-sys-container flex flex-col custom-scrollbar-2 pl-1 transition-[height] duration-300 ease-out ${P ? "no-height" : ""} ${x} ${oe === "head" ? "border-vscode-blue" : "border-transparent"}`,
                ref: C,
                onClick: () => {
                  U(gn({ id: "head", type: "folder" })), k({ id: "head", type: "folder" });
                },
                onContextMenu: (ne) => {
                  Ye(ne);
                },
                children: [
                  /* @__PURE__ */ ee.jsxs(
                    "div",
                    {
                      "parent-id": "head",
                      "typeof-item": "folder",
                      ref: z,
                      className: "content flex items-center",
                      children: [
                        /* @__PURE__ */ ee.jsx(
                          So,
                          {
                            data: pe.subFoldersAndFiles,
                            showBlue: me,
                            setShowBlue: Ae,
                            showGray: Re,
                            setShowGray: He,
                            collapseBtnClassname: p,
                            collapseBtnStyle: g,
                            threeDotPrimaryClass: u,
                            threeDotSecondaryClass: b,
                            clickableAreaClassName: h,
                            selectedClickableAreaClassName: v,
                            contextSelectedClickableAreaClassName: y,
                            itemTitleClassName: w,
                            onItemSelected: k,
                            onItemContextSelected: V
                          }
                        ),
                        ge.length === 0 && Ie.length === 1 && /* @__PURE__ */ ee.jsx(
                          "div",
                          {
                            id: "welcome",
                            "parent-id": "head",
                            "typeof-item": "folder",
                            onClick: (ne) => ne.stopPropagation(),
                            onContextMenu: (ne) => {
                              Ye(ne), V({ id: "head", type: "folder" });
                            },
                            className: "mx-auto flex h-[40vh] items-center pl-3 pr-4",
                            children: /* @__PURE__ */ ee.jsx(
                              "div",
                              {
                                "parent-id": "head",
                                "typeof-item": "folder",
                                className: "select-none break-words rounded-lg border p-3 text-center text-base",
                                children: /* @__PURE__ */ ee.jsxs(
                                  "div",
                                  {
                                    "parent-id": "head",
                                    "typeof-item": "folder",
                                    className: "flex flex-col justify-center",
                                    children: [
                                      /* @__PURE__ */ ee.jsx(
                                        "div",
                                        {
                                          "parent-id": "head",
                                          "typeof-item": "folder",
                                          className: "flex items-center",
                                          children: "Create a file or folder..."
                                        }
                                      ),
                                      /* @__PURE__ */ ee.jsxs(
                                        "div",
                                        {
                                          "parent-id": "head",
                                          "typeof-item": "folder",
                                          className: "my-2 flex w-full flex-col items-center justify-between text-sm",
                                          children: [
                                            /* @__PURE__ */ ee.jsx(
                                              "button",
                                              {
                                                "parent-id": "head",
                                                "typeof-item": "folder",
                                                type: "button",
                                                onClick: (ne) => {
                                                  ne.stopPropagation(), Ze.newFile();
                                                },
                                                className: "new-btns bg-vscode-overlay my-1 w-full rounded-lg px-1 py-2 transition-colors hover:bg-vscode-blue",
                                                children: /* @__PURE__ */ ee.jsx(
                                                  "span",
                                                  {
                                                    "parent-id": "head",
                                                    "typeof-item": "folder",
                                                    className: "relative text-white",
                                                    children: "New File"
                                                  }
                                                )
                                              }
                                            ),
                                            /* @__PURE__ */ ee.jsx(
                                              "button",
                                              {
                                                "parent-id": "head",
                                                "typeof-item": "folder",
                                                type: "button",
                                                onClick: (ne) => {
                                                  ne.stopPropagation(), Ze.newFolder();
                                                },
                                                className: "new-btns bg-vscode-overlay my-1 w-full rounded-lg  px-1 py-2 transition-colors hover:bg-vscode-blue",
                                                children: /* @__PURE__ */ ee.jsx(
                                                  "span",
                                                  {
                                                    "parent-id": "head",
                                                    "typeof-item": "folder",
                                                    className: "relative text-white",
                                                    children: "New Folder"
                                                  }
                                                )
                                              }
                                            )
                                          ]
                                        }
                                      )
                                    ]
                                  }
                                )
                              }
                            )
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ ee.jsx(
                    "div",
                    {
                      "parent-id": "head",
                      "typeof-item": "folder",
                      className: "min-h-[8rem] clickable-padding",
                      children: " "
                    }
                  )
                ]
              }
            )
          ]
        }
      ),
      xe && an(
        /* @__PURE__ */ ee.jsx(
          Kl,
          {
            title: `Delete the ${$} ${Q.wholeName}?`,
            content: `Are you sure you want to delete the ${$} /${Q.actualPath}? This action cannot be
            undone.`,
            className: e,
            actionText: `Yes, delete ${$}`,
            close: Fe,
            action: async () => {
              F(Q.id), U(cl({ id: null, type: null })), await U(bn()), Fe(!1);
            }
          }
        ),
        document.getElementById("root")
      ),
      Ue && an(
        /* @__PURE__ */ ee.jsx(
          $l,
          {
            top: O.x,
            left: O.y,
            showContext: Ue,
            setShowContext: f,
            actions: Je,
            className: n,
            clickableAreaClassName: o,
            hrColor: i
          }
        ),
        document.getElementById("root")
      )
    ] }),
    Yl(
      /* @__PURE__ */ ee.jsx(
        Hl,
        {
          className: t,
          style: r,
          closeCallback: () => {
            je(!1);
          },
          submit: (ne) => {
            rt(ne);
          },
          validExtensions: X,
          padding: I,
          show: m.current && B,
          item: {
            type: te,
            rename: ae ? {
              wholeName: re.type === "file" ? `${re.name}.${re.extension}` : re.name
            } : void 0
          },
          container: C.current,
          existingItems: (() => {
            const ne = fe.map((ue) => ({
              id: ue.id,
              type: ue.type,
              wholeName: ue.type === "file" ? `${ue.name}.${ue.extension}` : ue.name
            }));
            return ae ? ne.filter(({ id: ue }) => ue !== (re == null ? void 0 : re.id)) : ne;
          })()
        }
      ),
      R.current
    )
  ] });
};
function Er(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Er = function(r) {
    return typeof r;
  } : Er = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Er(e);
}
function Fu(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Vi(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function zu(e, t, r) {
  return t && Vi(e.prototype, t), r && Vi(e, r), e;
}
function Du(e, t) {
  return t && (Er(t) === "object" || typeof t == "function") ? t : Sr(e);
}
function Sn(e) {
  return Sn = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Sn(e);
}
function Sr(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ju(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && kn(e, t);
}
function kn(e, t) {
  return kn = Object.setPrototypeOf || function(n, i) {
    return n.__proto__ = i, n;
  }, kn(e, t);
}
function kr(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var Go = /* @__PURE__ */ function(e) {
  ju(t, e);
  function t() {
    var r, n;
    Fu(this, t);
    for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++)
      o[s] = arguments[s];
    return n = Du(this, (r = Sn(t)).call.apply(r, [this].concat(o))), kr(Sr(n), "state", {
      bootstrapped: !1
    }), kr(Sr(n), "_unsubscribe", void 0), kr(Sr(n), "handlePersistorState", function() {
      var a = n.props.persistor, l = a.getState(), c = l.bootstrapped;
      c && (n.props.onBeforeLift ? Promise.resolve(n.props.onBeforeLift()).finally(function() {
        return n.setState({
          bootstrapped: !0
        });
      }) : n.setState({
        bootstrapped: !0
      }), n._unsubscribe && n._unsubscribe());
    }), n;
  }
  return zu(t, [{
    key: "componentDidMount",
    value: function() {
      this._unsubscribe = this.props.persistor.subscribe(this.handlePersistorState), this.handlePersistorState();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this._unsubscribe && this._unsubscribe();
    }
  }, {
    key: "render",
    value: function() {
      return process.env.NODE_ENV !== "production" && typeof this.props.children == "function" && this.props.loading && console.error("redux-persist: PersistGate expects either a function child or loading prop, but not both. The loading prop will be ignored."), typeof this.props.children == "function" ? this.props.children(this.state.bootstrapped) : this.state.bootstrapped ? this.props.children : this.props.loading;
    }
  }]), t;
}(zs);
kr(Go, "defaultProps", {
  children: null,
  loading: null
});
function Pu({ children: e }) {
  return /* @__PURE__ */ ee.jsxs(Tl, { store: Ur, children: [
    /* @__PURE__ */ ee.jsx(
      Go,
      {
        loading: /* @__PURE__ */ ee.jsx(ee.Fragment, { children: "Loading..." }),
        persistor: Ou
      }
    ),
    e
  ] });
}
const Hu = ({
  deleteConfirmationClassName: e,
  fileInputClassName: t,
  fileInputStyle: r,
  contextMenuClassName: n,
  contextMenuHrColor: i,
  contextMenuClickableAreaClassName: o,
  fileActionsBtnClassName: s,
  projectName: a,
  fileActionsDisableCollapse: l,
  fileActionsDisableTooltip: c,
  fileActionsDisableDownload: d,
  folderCollapseBtnClassname: p,
  folderCollapseBtnStyle: g,
  folderThreeDotPrimaryClass: u,
  folderThreeDotSecondaryClass: b,
  folderClickableAreaClassName: h,
  folderSelectedClickableAreaClassName: v,
  folderContextSelectedClickableAreaClassName: y,
  itemTitleClassName: w,
  structureContainerClassName: x,
  containerHeight: S,
  onItemSelected: k = () => {
  },
  onNewItemClick: N = () => {
  },
  onAreaCollapsed: T = () => {
  },
  onItemContextSelected: V = () => {
  },
  onNodeDeleted: F = () => {
  },
  onNewItemCreated: G = () => {
  },
  validExtensions: X
}) => /* @__PURE__ */ ee.jsx(Pu, { children: /* @__PURE__ */ ee.jsx(
  Iu,
  {
    deleteConfirmationClassName: e,
    fileInputClassName: t,
    fileInputStyle: r,
    contextMenuClassName: n,
    contextMenuHrColor: i,
    contextMenuClickableAreaClassName: o,
    fileActionsBtnClassName: s,
    projectName: a,
    fileActionsDisableCollapse: l,
    fileActionsDisableTooltip: c,
    fileActionsDisableDownload: d,
    folderCollapseBtnClassname: p,
    folderCollapseBtnStyle: g,
    folderThreeDotPrimaryClass: u,
    folderThreeDotSecondaryClass: b,
    folderClickableAreaClassName: h,
    folderSelectedClickableAreaClassName: v,
    folderContextSelectedClickableAreaClassName: y,
    itemTitleClassName: w,
    structureContainerClassName: x,
    containerHeight: S,
    onItemSelected: k,
    onNewItemClick: N,
    onAreaCollapsed: T,
    onItemContextSelected: V,
    onNodeDeleted: F,
    onNewItemCreated: G,
    validExtensions: X
  }
) });
export {
  Hu as FileExplorer
};
