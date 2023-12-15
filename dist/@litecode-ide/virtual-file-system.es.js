var $s = Object.defineProperty;
var Ms = (e, t, r) => t in e ? $s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Qr = (e, t, r) => (Ms(e, typeof t != "symbol" ? t + "" : t, r), r);
import * as en from "react";
import pt, { useEffect as Ne, useRef as Ye, useState as Se, createContext as Bs, useContext as Us, useCallback as Vs, useImperativeHandle as Ws, useLayoutEffect as Hs, PureComponent as Zs } from "react";
import { createPortal as Rr } from "react-dom";
var ht = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Nn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var fn = { exports: {} }, er = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ai;
function Gs() {
  return ai || (ai = 1, process.env.NODE_ENV !== "production" && function() {
    var e = pt, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), d = Symbol.for("react.offscreen"), b = Symbol.iterator, h = "@@iterator";
    function g(O) {
      if (O === null || typeof O != "object")
        return null;
      var Y = b && O[b] || O[h];
      return typeof Y == "function" ? Y : null;
    }
    var m = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(O) {
      {
        for (var Y = arguments.length, se = new Array(Y > 1 ? Y - 1 : 0), ge = 1; ge < Y; ge++)
          se[ge - 1] = arguments[ge];
        S("error", O, se);
      }
    }
    function S(O, Y, se) {
      {
        var ge = m.ReactDebugCurrentFrame, Ae = ge.getStackAddendum();
        Ae !== "" && (Y += "%s", se = se.concat([Ae]));
        var Ce = se.map(function(Ee) {
          return String(Ee);
        });
        Ce.unshift("Warning: " + Y), Function.prototype.apply.call(console[O], console, Ce);
      }
    }
    var E = !1, k = !1, R = !1, T = !1, U = !1, D;
    D = Symbol.for("react.module.reference");
    function K(O) {
      return !!(typeof O == "string" || typeof O == "function" || O === n || O === o || U || O === i || O === c || O === u || T || O === d || E || k || R || typeof O == "object" && O !== null && (O.$$typeof === v || O.$$typeof === f || O.$$typeof === s || O.$$typeof === a || O.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      O.$$typeof === D || O.getModuleId !== void 0));
    }
    function q(O, Y, se) {
      var ge = O.displayName;
      if (ge)
        return ge;
      var Ae = Y.displayName || Y.name || "";
      return Ae !== "" ? se + "(" + Ae + ")" : se;
    }
    function A(O) {
      return O.displayName || "Context";
    }
    function I(O) {
      if (O == null)
        return null;
      if (typeof O.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof O == "function")
        return O.displayName || O.name || null;
      if (typeof O == "string")
        return O;
      switch (O) {
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
        case u:
          return "SuspenseList";
      }
      if (typeof O == "object")
        switch (O.$$typeof) {
          case a:
            var Y = O;
            return A(Y) + ".Consumer";
          case s:
            var se = O;
            return A(se._context) + ".Provider";
          case l:
            return q(O, O.render, "ForwardRef");
          case f:
            var ge = O.displayName || null;
            return ge !== null ? ge : I(O.type) || "Memo";
          case v: {
            var Ae = O, Ce = Ae._payload, Ee = Ae._init;
            try {
              return I(Ee(Ce));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var y = Object.assign, z = 0, ie, W, ae, H, ee, L, P;
    function le() {
    }
    le.__reactDisabledLog = !0;
    function ne() {
      {
        if (z === 0) {
          ie = console.log, W = console.info, ae = console.warn, H = console.error, ee = console.group, L = console.groupCollapsed, P = console.groupEnd;
          var O = {
            configurable: !0,
            enumerable: !0,
            value: le,
            writable: !0
          };
          Object.defineProperties(console, {
            info: O,
            log: O,
            warn: O,
            error: O,
            group: O,
            groupCollapsed: O,
            groupEnd: O
          });
        }
        z++;
      }
    }
    function Q() {
      {
        if (z--, z === 0) {
          var O = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: y({}, O, {
              value: ie
            }),
            info: y({}, O, {
              value: W
            }),
            warn: y({}, O, {
              value: ae
            }),
            error: y({}, O, {
              value: H
            }),
            group: y({}, O, {
              value: ee
            }),
            groupCollapsed: y({}, O, {
              value: L
            }),
            groupEnd: y({}, O, {
              value: P
            })
          });
        }
        z < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var we = m.ReactCurrentDispatcher, Re;
    function pe(O, Y, se) {
      {
        if (Re === void 0)
          try {
            throw Error();
          } catch (Ae) {
            var ge = Ae.stack.trim().match(/\n( *(at )?)/);
            Re = ge && ge[1] || "";
          }
        return `
` + Re + O;
      }
    }
    var me = !1, Ie;
    {
      var Oe = typeof WeakMap == "function" ? WeakMap : Map;
      Ie = new Oe();
    }
    function Ge(O, Y) {
      if (!O || me)
        return "";
      {
        var se = Ie.get(O);
        if (se !== void 0)
          return se;
      }
      var ge;
      me = !0;
      var Ae = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ce;
      Ce = we.current, we.current = null, ne();
      try {
        if (Y) {
          var Ee = function() {
            throw Error();
          };
          if (Object.defineProperty(Ee.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Ee, []);
            } catch (xt) {
              ge = xt;
            }
            Reflect.construct(O, [], Ee);
          } else {
            try {
              Ee.call();
            } catch (xt) {
              ge = xt;
            }
            O.call(Ee.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (xt) {
            ge = xt;
          }
          O();
        }
      } catch (xt) {
        if (xt && ge && typeof xt.stack == "string") {
          for (var he = xt.stack.split(`
`), De = ge.stack.split(`
`), Pe = he.length - 1, Fe = De.length - 1; Pe >= 1 && Fe >= 0 && he[Pe] !== De[Fe]; )
            Fe--;
          for (; Pe >= 1 && Fe >= 0; Pe--, Fe--)
            if (he[Pe] !== De[Fe]) {
              if (Pe !== 1 || Fe !== 1)
                do
                  if (Pe--, Fe--, Fe < 0 || he[Pe] !== De[Fe]) {
                    var Qe = `
` + he[Pe].replace(" at new ", " at ");
                    return O.displayName && Qe.includes("<anonymous>") && (Qe = Qe.replace("<anonymous>", O.displayName)), typeof O == "function" && Ie.set(O, Qe), Qe;
                  }
                while (Pe >= 1 && Fe >= 0);
              break;
            }
        }
      } finally {
        me = !1, we.current = Ce, Q(), Error.prepareStackTrace = Ae;
      }
      var bt = O ? O.displayName || O.name : "", yr = bt ? pe(bt) : "";
      return typeof O == "function" && Ie.set(O, yr), yr;
    }
    function $e(O, Y, se) {
      return Ge(O, !1);
    }
    function p(O) {
      var Y = O.prototype;
      return !!(Y && Y.isReactComponent);
    }
    function V(O, Y, se) {
      if (O == null)
        return "";
      if (typeof O == "function")
        return Ge(O, p(O));
      if (typeof O == "string")
        return pe(O);
      switch (O) {
        case c:
          return pe("Suspense");
        case u:
          return pe("SuspenseList");
      }
      if (typeof O == "object")
        switch (O.$$typeof) {
          case l:
            return $e(O.render);
          case f:
            return V(O.type, Y, se);
          case v: {
            var ge = O, Ae = ge._payload, Ce = ge._init;
            try {
              return V(Ce(Ae), Y, se);
            } catch {
            }
          }
        }
      return "";
    }
    var j = Object.prototype.hasOwnProperty, C = {}, x = m.ReactDebugCurrentFrame;
    function N(O) {
      if (O) {
        var Y = O._owner, se = V(O.type, O._source, Y ? Y.type : null);
        x.setExtraStackFrame(se);
      } else
        x.setExtraStackFrame(null);
    }
    function B(O, Y, se, ge, Ae) {
      {
        var Ce = Function.call.bind(j);
        for (var Ee in O)
          if (Ce(O, Ee)) {
            var he = void 0;
            try {
              if (typeof O[Ee] != "function") {
                var De = Error((ge || "React class") + ": " + se + " type `" + Ee + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof O[Ee] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw De.name = "Invariant Violation", De;
              }
              he = O[Ee](Y, Ee, ge, se, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Pe) {
              he = Pe;
            }
            he && !(he instanceof Error) && (N(Ae), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ge || "React class", se, Ee, typeof he), N(null)), he instanceof Error && !(he.message in C) && (C[he.message] = !0, N(Ae), w("Failed %s type: %s", se, he.message), N(null));
          }
      }
    }
    var Z = Array.isArray;
    function F(O) {
      return Z(O);
    }
    function X(O) {
      {
        var Y = typeof Symbol == "function" && Symbol.toStringTag, se = Y && O[Symbol.toStringTag] || O.constructor.name || "Object";
        return se;
      }
    }
    function te(O) {
      try {
        return J(O), !1;
      } catch {
        return !0;
      }
    }
    function J(O) {
      return "" + O;
    }
    function ce(O) {
      if (te(O))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", X(O)), J(O);
    }
    var ye = m.ReactCurrentOwner, ve = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, je, qe, Me;
    Me = {};
    function He(O) {
      if (j.call(O, "ref")) {
        var Y = Object.getOwnPropertyDescriptor(O, "ref").get;
        if (Y && Y.isReactWarning)
          return !1;
      }
      return O.ref !== void 0;
    }
    function Te(O) {
      if (j.call(O, "key")) {
        var Y = Object.getOwnPropertyDescriptor(O, "key").get;
        if (Y && Y.isReactWarning)
          return !1;
      }
      return O.key !== void 0;
    }
    function Be(O, Y) {
      if (typeof O.ref == "string" && ye.current && Y && ye.current.stateNode !== Y) {
        var se = I(ye.current.type);
        Me[se] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', I(ye.current.type), O.ref), Me[se] = !0);
      }
    }
    function ze(O, Y) {
      {
        var se = function() {
          je || (je = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Y));
        };
        se.isReactWarning = !0, Object.defineProperty(O, "key", {
          get: se,
          configurable: !0
        });
      }
    }
    function Ue(O, Y) {
      {
        var se = function() {
          qe || (qe = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Y));
        };
        se.isReactWarning = !0, Object.defineProperty(O, "ref", {
          get: se,
          configurable: !0
        });
      }
    }
    var rt = function(O, Y, se, ge, Ae, Ce, Ee) {
      var he = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: O,
        key: Y,
        ref: se,
        props: Ee,
        // Record the component responsible for creating this element.
        _owner: Ce
      };
      return he._store = {}, Object.defineProperty(he._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(he, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ge
      }), Object.defineProperty(he, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ae
      }), Object.freeze && (Object.freeze(he.props), Object.freeze(he)), he;
    };
    function nt(O, Y, se, ge, Ae) {
      {
        var Ce, Ee = {}, he = null, De = null;
        se !== void 0 && (ce(se), he = "" + se), Te(Y) && (ce(Y.key), he = "" + Y.key), He(Y) && (De = Y.ref, Be(Y, Ae));
        for (Ce in Y)
          j.call(Y, Ce) && !ve.hasOwnProperty(Ce) && (Ee[Ce] = Y[Ce]);
        if (O && O.defaultProps) {
          var Pe = O.defaultProps;
          for (Ce in Pe)
            Ee[Ce] === void 0 && (Ee[Ce] = Pe[Ce]);
        }
        if (he || De) {
          var Fe = typeof O == "function" ? O.displayName || O.name || "Unknown" : O;
          he && ze(Ee, Fe), De && Ue(Ee, Fe);
        }
        return rt(O, he, De, Ae, ge, ye.current, Ee);
      }
    }
    var Xe = m.ReactCurrentOwner, et = m.ReactDebugCurrentFrame;
    function re(O) {
      if (O) {
        var Y = O._owner, se = V(O.type, O._source, Y ? Y.type : null);
        et.setExtraStackFrame(se);
      } else
        et.setExtraStackFrame(null);
    }
    var oe;
    oe = !1;
    function ke(O) {
      return typeof O == "object" && O !== null && O.$$typeof === t;
    }
    function fe() {
      {
        if (Xe.current) {
          var O = I(Xe.current.type);
          if (O)
            return `

Check the render method of \`` + O + "`.";
        }
        return "";
      }
    }
    function xe(O) {
      {
        if (O !== void 0) {
          var Y = O.fileName.replace(/^.*[\\\/]/, ""), se = O.lineNumber;
          return `

Check your code at ` + Y + ":" + se + ".";
        }
        return "";
      }
    }
    var Je = {};
    function lt(O) {
      {
        var Y = fe();
        if (!Y) {
          var se = typeof O == "string" ? O : O.displayName || O.name;
          se && (Y = `

Check the top-level render call using <` + se + ">.");
        }
        return Y;
      }
    }
    function ue(O, Y) {
      {
        if (!O._store || O._store.validated || O.key != null)
          return;
        O._store.validated = !0;
        var se = lt(Y);
        if (Je[se])
          return;
        Je[se] = !0;
        var ge = "";
        O && O._owner && O._owner !== Xe.current && (ge = " It was passed a child from " + I(O._owner.type) + "."), re(O), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', se, ge), re(null);
      }
    }
    function _e(O, Y) {
      {
        if (typeof O != "object")
          return;
        if (F(O))
          for (var se = 0; se < O.length; se++) {
            var ge = O[se];
            ke(ge) && ue(ge, Y);
          }
        else if (ke(O))
          O._store && (O._store.validated = !0);
        else if (O) {
          var Ae = g(O);
          if (typeof Ae == "function" && Ae !== O.entries)
            for (var Ce = Ae.call(O), Ee; !(Ee = Ce.next()).done; )
              ke(Ee.value) && ue(Ee.value, Y);
        }
      }
    }
    function be(O) {
      {
        var Y = O.type;
        if (Y == null || typeof Y == "string")
          return;
        var se;
        if (typeof Y == "function")
          se = Y.propTypes;
        else if (typeof Y == "object" && (Y.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        Y.$$typeof === f))
          se = Y.propTypes;
        else
          return;
        if (se) {
          var ge = I(Y);
          B(se, O.props, "prop", ge, O);
        } else if (Y.PropTypes !== void 0 && !oe) {
          oe = !0;
          var Ae = I(Y);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ae || "Unknown");
        }
        typeof Y.getDefaultProps == "function" && !Y.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ve(O) {
      {
        for (var Y = Object.keys(O.props), se = 0; se < Y.length; se++) {
          var ge = Y[se];
          if (ge !== "children" && ge !== "key") {
            re(O), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ge), re(null);
            break;
          }
        }
        O.ref !== null && (re(O), w("Invalid attribute `ref` supplied to `React.Fragment`."), re(null));
      }
    }
    function Ze(O, Y, se, ge, Ae, Ce) {
      {
        var Ee = K(O);
        if (!Ee) {
          var he = "";
          (O === void 0 || typeof O == "object" && O !== null && Object.keys(O).length === 0) && (he += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var De = xe(Ae);
          De ? he += De : he += fe();
          var Pe;
          O === null ? Pe = "null" : F(O) ? Pe = "array" : O !== void 0 && O.$$typeof === t ? (Pe = "<" + (I(O.type) || "Unknown") + " />", he = " Did you accidentally export a JSX literal instead of a component?") : Pe = typeof O, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Pe, he);
        }
        var Fe = nt(O, Y, se, Ae, Ce);
        if (Fe == null)
          return Fe;
        if (Ee) {
          var Qe = Y.children;
          if (Qe !== void 0)
            if (ge)
              if (F(Qe)) {
                for (var bt = 0; bt < Qe.length; bt++)
                  _e(Qe[bt], O);
                Object.freeze && Object.freeze(Qe);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _e(Qe, O);
        }
        return O === n ? Ve(Fe) : be(Fe), Fe;
      }
    }
    function ct(O, Y, se) {
      return Ze(O, Y, se, !0);
    }
    function ft(O, Y, se) {
      return Ze(O, Y, se, !1);
    }
    var it = ft, We = ct;
    er.Fragment = n, er.jsx = it, er.jsxs = We;
  }()), er;
}
var tr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var li;
function Ks() {
  if (li)
    return tr;
  li = 1;
  var e = pt, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(a, l, c) {
    var u, f = {}, v = null, d = null;
    c !== void 0 && (v = "" + c), l.key !== void 0 && (v = "" + l.key), l.ref !== void 0 && (d = l.ref);
    for (u in l)
      n.call(l, u) && !o.hasOwnProperty(u) && (f[u] = l[u]);
    if (a && a.defaultProps)
      for (u in l = a.defaultProps, l)
        f[u] === void 0 && (f[u] = l[u]);
    return { $$typeof: t, type: a, key: v, ref: d, props: f, _owner: i.current };
  }
  return tr.Fragment = r, tr.jsx = s, tr.jsxs = s, tr;
}
process.env.NODE_ENV === "production" ? fn.exports = Ks() : fn.exports = Gs();
var M = fn.exports;
function st(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Ys = typeof Symbol == "function" && Symbol.observable || "@@observable", ci = Ys, tn = () => Math.random().toString(36).substring(7).split("").join("."), qs = {
  INIT: `@@redux/INIT${/* @__PURE__ */ tn()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ tn()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${tn()}`
}, Bt = qs;
function cr(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Xs(e) {
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
  if (ea(e))
    return "date";
  if (Qs(e))
    return "error";
  const r = Js(e);
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
function Js(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function Qs(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function ea(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function Tt(e) {
  let t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = Xs(e)), t;
}
function Tn(e, t, r) {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? st(2) : `Expected the root reducer to be a function. Instead, received: '${Tt(e)}'`);
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? st(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? st(1) : `Expected the enhancer to be a function. Instead, received: '${Tt(r)}'`);
    return r(Tn)(e, t);
  }
  let n = e, i = t, o = /* @__PURE__ */ new Map(), s = o, a = 0, l = !1;
  function c() {
    s === o && (s = /* @__PURE__ */ new Map(), o.forEach((g, m) => {
      s.set(m, g);
    }));
  }
  function u() {
    if (l)
      throw new Error(process.env.NODE_ENV === "production" ? st(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return i;
  }
  function f(g) {
    if (typeof g != "function")
      throw new Error(process.env.NODE_ENV === "production" ? st(4) : `Expected the listener to be a function. Instead, received: '${Tt(g)}'`);
    if (l)
      throw new Error(process.env.NODE_ENV === "production" ? st(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let m = !0;
    c();
    const w = a++;
    return s.set(w, g), function() {
      if (m) {
        if (l)
          throw new Error(process.env.NODE_ENV === "production" ? st(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        m = !1, c(), s.delete(w), o = null;
      }
    };
  }
  function v(g) {
    if (!cr(g))
      throw new Error(process.env.NODE_ENV === "production" ? st(7) : `Actions must be plain objects. Instead, the actual type was: '${Tt(g)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof g.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? st(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof g.type != "string")
      throw new Error(process.env.NODE_ENV === "production" ? st(17) : `Action "type" property must be a string. Instead, the actual type was: '${Tt(g.type)}'. Value was: '${g.type}' (stringified)`);
    if (l)
      throw new Error(process.env.NODE_ENV === "production" ? st(9) : "Reducers may not dispatch actions.");
    try {
      l = !0, i = n(i, g);
    } finally {
      l = !1;
    }
    return (o = s).forEach((w) => {
      w();
    }), g;
  }
  function d(g) {
    if (typeof g != "function")
      throw new Error(process.env.NODE_ENV === "production" ? st(10) : `Expected the nextReducer to be a function. Instead, received: '${Tt(g)}`);
    n = g, v({
      type: Bt.REPLACE
    });
  }
  function b() {
    const g = f;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(m) {
        if (typeof m != "object" || m === null)
          throw new Error(process.env.NODE_ENV === "production" ? st(11) : `Expected the observer to be an object. Instead, received: '${Tt(m)}'`);
        function w() {
          const E = m;
          E.next && E.next(u());
        }
        return w(), {
          unsubscribe: g(w)
        };
      },
      [ci]() {
        return this;
      }
    };
  }
  return v({
    type: Bt.INIT
  }), {
    dispatch: v,
    subscribe: f,
    getState: u,
    replaceReducer: d,
    [ci]: b
  };
}
function ui(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function ta(e, t, r, n) {
  const i = Object.keys(t), o = r && r.type === Bt.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (i.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!cr(e))
    return `The ${o} has unexpected type of "${Tt(e)}". Expected argument to be an object with the following keys: "${i.join('", "')}"`;
  const s = Object.keys(e).filter((a) => !t.hasOwnProperty(a) && !n[a]);
  if (s.forEach((a) => {
    n[a] = !0;
  }), !(r && r.type === Bt.REPLACE) && s.length > 0)
    return `Unexpected ${s.length > 1 ? "keys" : "key"} "${s.join('", "')}" found in ${o}. Expected to find one of the known reducer keys instead: "${i.join('", "')}". Unexpected keys will be ignored.`;
}
function ra(e) {
  Object.keys(e).forEach((t) => {
    const r = e[t];
    if (typeof r(void 0, {
      type: Bt.INIT
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? st(12) : `The slice reducer for key "${t}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof r(void 0, {
      type: Bt.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? st(13) : `The slice reducer for key "${t}" returned undefined when probed with a random type. Don't try to handle '${Bt.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function Ji(e) {
  const t = Object.keys(e), r = {};
  for (let s = 0; s < t.length; s++) {
    const a = t[s];
    process.env.NODE_ENV !== "production" && typeof e[a] > "u" && ui(`No reducer provided for key "${a}"`), typeof e[a] == "function" && (r[a] = e[a]);
  }
  const n = Object.keys(r);
  let i;
  process.env.NODE_ENV !== "production" && (i = {});
  let o;
  try {
    ra(r);
  } catch (s) {
    o = s;
  }
  return function(a = {}, l) {
    if (o)
      throw o;
    if (process.env.NODE_ENV !== "production") {
      const f = ta(a, r, l, i);
      f && ui(f);
    }
    let c = !1;
    const u = {};
    for (let f = 0; f < n.length; f++) {
      const v = n[f], d = r[v], b = a[v], h = d(b, l);
      if (typeof h > "u") {
        const g = l && l.type;
        throw new Error(process.env.NODE_ENV === "production" ? st(14) : `When called with an action of type ${g ? `"${String(g)}"` : "(unknown type)"}, the slice reducer for key "${v}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      u[v] = h, c = c || h !== b;
    }
    return c = c || n.length !== Object.keys(a).length, c ? u : a;
  };
}
function Ir(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, r) => (...n) => t(r(...n)));
}
function na(...e) {
  return (t) => (r, n) => {
    const i = t(r, n);
    let o = () => {
      throw new Error(process.env.NODE_ENV === "production" ? st(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const s = {
      getState: i.getState,
      dispatch: (l, ...c) => o(l, ...c)
    }, a = e.map((l) => l(s));
    return o = Ir(...a)(i.dispatch), {
      ...i,
      dispatch: o
    };
  };
}
function Qi(e) {
  return cr(e) && "type" in e && typeof e.type == "string";
}
var eo = Symbol.for("immer-nothing"), di = Symbol.for("immer-draftable"), gt = Symbol.for("immer-state"), ia = process.env.NODE_ENV !== "production" ? [
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
function dt(e, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const r = ia[e], n = typeof r == "function" ? r.apply(null, t) : r;
    throw new Error(`[Immer] ${n}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Xt = Object.getPrototypeOf;
function It(e) {
  return !!e && !!e[gt];
}
function Ct(e) {
  var t;
  return e ? to(e) || Array.isArray(e) || !!e[di] || !!((t = e.constructor) != null && t[di]) || Br(e) || Ur(e) : !1;
}
var oa = Object.prototype.constructor.toString();
function to(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = Xt(e);
  if (t === null)
    return !0;
  const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return r === Object ? !0 : typeof r == "function" && Function.toString.call(r) === oa;
}
function ir(e, t) {
  Mr(e) === 0 ? Object.entries(e).forEach(([r, n]) => {
    t(r, n, e);
  }) : e.forEach((r, n) => t(n, r, e));
}
function Mr(e) {
  const t = e[gt];
  return t ? t.type_ : Array.isArray(e) ? 1 : Br(e) ? 2 : Ur(e) ? 3 : 0;
}
function hn(e, t) {
  return Mr(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function ro(e, t, r) {
  const n = Mr(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r;
}
function sa(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Br(e) {
  return e instanceof Map;
}
function Ur(e) {
  return e instanceof Set;
}
function $t(e) {
  return e.copy_ || e.base_;
}
function pn(e, t) {
  if (Br(e))
    return new Map(e);
  if (Ur(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  if (!t && to(e))
    return Xt(e) ? { ...e } : Object.assign(/* @__PURE__ */ Object.create(null), e);
  const r = Object.getOwnPropertyDescriptors(e);
  delete r[gt];
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
  return Object.create(Xt(e), r);
}
function Rn(e, t = !1) {
  return Vr(e) || It(e) || !Ct(e) || (Mr(e) > 1 && (e.set = e.add = e.clear = e.delete = aa), Object.freeze(e), t && ir(e, (r, n) => Rn(n, !0))), e;
}
function aa() {
  dt(2);
}
function Vr(e) {
  return Object.isFrozen(e);
}
var la = {};
function Vt(e) {
  const t = la[e];
  return t || dt(0, e), t;
}
var or;
function no() {
  return or;
}
function ca(e, t) {
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
function fi(e, t) {
  t && (Vt("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function mn(e) {
  yn(e), e.drafts_.forEach(ua), e.drafts_ = null;
}
function yn(e) {
  e === or && (or = e.parent_);
}
function hi(e) {
  return or = ca(or, e);
}
function ua(e) {
  const t = e[gt];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function pi(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return e !== void 0 && e !== r ? (r[gt].modified_ && (mn(t), dt(4)), Ct(e) && (e = jr(t, e), t.parent_ || Fr(t, e)), t.patches_ && Vt("Patches").generateReplacementPatches_(
    r[gt].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = jr(t, r, []), mn(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== eo ? e : void 0;
}
function jr(e, t, r) {
  if (Vr(t))
    return t;
  const n = t[gt];
  if (!n)
    return ir(
      t,
      (i, o) => mi(e, n, t, i, o, r)
    ), t;
  if (n.scope_ !== e)
    return t;
  if (!n.modified_)
    return Fr(e, n.base_, !0), n.base_;
  if (!n.finalized_) {
    n.finalized_ = !0, n.scope_.unfinalizedDrafts_--;
    const i = n.copy_;
    let o = i, s = !1;
    n.type_ === 3 && (o = new Set(i), i.clear(), s = !0), ir(
      o,
      (a, l) => mi(e, n, i, a, l, r, s)
    ), Fr(e, i, !1), r && e.patches_ && Vt("Patches").generatePatches_(
      n,
      r,
      e.patches_,
      e.inversePatches_
    );
  }
  return n.copy_;
}
function mi(e, t, r, n, i, o, s) {
  if (process.env.NODE_ENV !== "production" && i === r && dt(5), It(i)) {
    const a = o && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !hn(t.assigned_, n) ? o.concat(n) : void 0, l = jr(e, i, a);
    if (ro(r, n, l), It(l))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else
    s && r.add(i);
  if (Ct(i) && !Vr(i)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    jr(e, i), (!t || !t.scope_.parent_) && Fr(e, i);
  }
}
function Fr(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Rn(t, r);
}
function da(e, t) {
  const r = Array.isArray(e), n = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : no(),
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
  let i = n, o = In;
  r && (i = [n], o = sr);
  const { revoke: s, proxy: a } = Proxy.revocable(i, o);
  return n.draft_ = a, n.revoke_ = s, a;
}
var In = {
  get(e, t) {
    if (t === gt)
      return e;
    const r = $t(e);
    if (!hn(r, t))
      return fa(e, r, t);
    const n = r[t];
    return e.finalized_ || !Ct(n) ? n : n === rn(e.base_, t) ? (nn(e), e.copy_[t] = vn(n, e)) : n;
  },
  has(e, t) {
    return t in $t(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys($t(e));
  },
  set(e, t, r) {
    const n = io($t(e), t);
    if (n != null && n.set)
      return n.set.call(e.draft_, r), !0;
    if (!e.modified_) {
      const i = rn($t(e), t), o = i == null ? void 0 : i[gt];
      if (o && o.base_ === r)
        return e.copy_[t] = r, e.assigned_[t] = !1, !0;
      if (sa(r, i) && (r !== void 0 || hn(e.base_, t)))
        return !0;
      nn(e), gn(e);
    }
    return e.copy_[t] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return rn(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, nn(e), gn(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const r = $t(e), n = Reflect.getOwnPropertyDescriptor(r, t);
    return n && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: n.enumerable,
      value: r[t]
    };
  },
  defineProperty() {
    dt(11);
  },
  getPrototypeOf(e) {
    return Xt(e.base_);
  },
  setPrototypeOf() {
    dt(12);
  }
}, sr = {};
ir(In, (e, t) => {
  sr[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
sr.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && dt(13), sr.set.call(this, e, t, void 0);
};
sr.set = function(e, t, r) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && dt(14), In.set.call(this, e[0], t, r, e[0]);
};
function rn(e, t) {
  const r = e[gt];
  return (r ? $t(r) : e)[t];
}
function fa(e, t, r) {
  var i;
  const n = io(t, r);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (i = n.get) == null ? void 0 : i.call(e.draft_)
  ) : void 0;
}
function io(e, t) {
  if (!(t in e))
    return;
  let r = Xt(e);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n)
      return n;
    r = Xt(r);
  }
}
function gn(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && gn(e.parent_));
}
function nn(e) {
  e.copy_ || (e.copy_ = pn(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var ha = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, r, n) => {
      if (typeof t == "function" && typeof r != "function") {
        const o = r;
        r = t;
        const s = this;
        return function(l = o, ...c) {
          return s.produce(l, (u) => r.call(this, u, ...c));
        };
      }
      typeof r != "function" && dt(6), n !== void 0 && typeof n != "function" && dt(7);
      let i;
      if (Ct(t)) {
        const o = hi(this), s = vn(t, void 0);
        let a = !0;
        try {
          i = r(s), a = !1;
        } finally {
          a ? mn(o) : yn(o);
        }
        return fi(o, n), pi(i, o);
      } else if (!t || typeof t != "object") {
        if (i = r(t), i === void 0 && (i = t), i === eo && (i = void 0), this.autoFreeze_ && Rn(i, !0), n) {
          const o = [], s = [];
          Vt("Patches").generateReplacementPatches_(t, i, o, s), n(o, s);
        }
        return i;
      } else
        dt(1, t);
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
    Ct(e) || dt(8), It(e) && (e = oo(e));
    const t = hi(this), r = vn(e, void 0);
    return r[gt].isManual_ = !0, yn(t), r;
  }
  finishDraft(e, t) {
    const r = e && e[gt];
    (!r || !r.isManual_) && dt(9);
    const { scope_: n } = r;
    return fi(n, t), pi(void 0, n);
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
    const n = Vt("Patches").applyPatches_;
    return It(e) ? n(e, t) : this.produce(
      e,
      (i) => n(i, t)
    );
  }
};
function vn(e, t) {
  const r = Br(e) ? Vt("MapSet").proxyMap_(e, t) : Ur(e) ? Vt("MapSet").proxySet_(e, t) : da(e, t);
  return (t ? t.scope_ : no()).drafts_.push(r), r;
}
function oo(e) {
  return It(e) || dt(10, e), so(e);
}
function so(e) {
  if (!Ct(e) || Vr(e))
    return e;
  const t = e[gt];
  let r;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, r = pn(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    r = pn(e, !0);
  return ir(r, (n, i) => {
    ro(r, n, so(i));
  }), t && (t.finalized_ = !1), r;
}
var vt = new ha(), ao = vt.produce;
vt.produceWithPatches.bind(
  vt
);
vt.setAutoFreeze.bind(vt);
vt.setUseStrictShallowCopy.bind(vt);
vt.applyPatches.bind(vt);
vt.createDraft.bind(vt);
vt.finishDraft.bind(vt);
var pa = (e) => {
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
}, ma = (e, t, r) => {
  const { memoize: n, memoizeOptions: i } = t, { inputSelectorResults: o, inputSelectorResultsCopy: s } = e, a = n(() => ({}), ...i);
  if (!(a.apply(null, o) === a.apply(null, s))) {
    let c;
    try {
      throw new Error();
    } catch (u) {
      ({ stack: c } = u);
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
}, ya = {
  inputStabilityCheck: "once",
  identityFunctionCheck: "once"
};
function ga(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function va(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((r) => typeof r == "function")) {
    const r = e.map(
      (n) => typeof n == "function" ? `function ${n.name || "unnamed"}()` : typeof n
    ).join(", ");
    throw new TypeError(`${t}[${r}]`);
  }
}
var yi = (e) => Array.isArray(e) ? e : [e];
function ba(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return va(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function gi(e, t) {
  const r = [], { length: n } = e;
  for (let i = 0; i < n; i++)
    r.push(e[i].apply(null, t));
  return r;
}
var wa = (e, t) => {
  const { identityFunctionCheck: r, inputStabilityCheck: n } = {
    ...ya,
    ...t
  };
  return {
    identityFunctionCheck: {
      shouldRun: r === "always" || r === "once" && e,
      run: pa
    },
    inputStabilityCheck: {
      shouldRun: n === "always" || n === "once" && e,
      run: ma
    }
  };
}, _a = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, xa = typeof WeakRef < "u" ? WeakRef : _a, Sa = 0, vi = 1;
function _r() {
  return {
    s: Sa,
    v: void 0,
    o: null,
    p: null
  };
}
function jn(e, t = {}) {
  let r = _r();
  const { resultEqualityCheck: n } = t;
  let i, o = 0;
  function s() {
    let a = r;
    const { length: l } = arguments;
    for (let f = 0, v = l; f < v; f++) {
      const d = arguments[f];
      if (typeof d == "function" || typeof d == "object" && d !== null) {
        let b = a.o;
        b === null && (a.o = b = /* @__PURE__ */ new WeakMap());
        const h = b.get(d);
        h === void 0 ? (a = _r(), b.set(d, a)) : a = h;
      } else {
        let b = a.p;
        b === null && (a.p = b = /* @__PURE__ */ new Map());
        const h = b.get(d);
        h === void 0 ? (a = _r(), b.set(d, a)) : a = h;
      }
    }
    const c = a;
    let u;
    if (a.s === vi ? u = a.v : (u = e.apply(null, arguments), o++), c.s = vi, n) {
      const f = (i == null ? void 0 : i.deref()) ?? i;
      f != null && n(f, u) && (u = f, o !== 0 && o--), i = typeof u == "object" && u !== null || typeof u == "function" ? new xa(u) : u;
    }
    return c.v = u, u;
  }
  return s.clearCache = () => {
    r = _r(), s.resetResultsCount();
  }, s.resultsCount = () => o, s.resetResultsCount = () => {
    o = 0;
  }, s;
}
function lo(e, ...t) {
  const r = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e;
  return (...i) => {
    let o = 0, s = 0, a, l = {}, c = i.pop();
    typeof c == "object" && (l = c, c = i.pop()), ga(
      c,
      `createSelector expects an output function after the inputs, but received: [${typeof c}]`
    );
    const u = {
      ...r,
      ...l
    }, {
      memoize: f,
      memoizeOptions: v = [],
      argsMemoize: d = jn,
      argsMemoizeOptions: b = [],
      devModeChecks: h = {}
    } = u, g = yi(v), m = yi(b), w = ba(i), S = f(function() {
      return o++, c.apply(
        null,
        arguments
      );
    }, ...g);
    let E = !0;
    const k = d(function() {
      s++;
      const T = gi(
        w,
        arguments
      );
      if (process.env.NODE_ENV !== "production") {
        const { identityFunctionCheck: U, inputStabilityCheck: D } = wa(E, h);
        if (U.shouldRun && U.run(
          c
        ), D.shouldRun) {
          const K = gi(
            w,
            arguments
          );
          D.run(
            { inputSelectorResults: T, inputSelectorResultsCopy: K },
            { memoize: f, memoizeOptions: g },
            arguments
          );
        }
        E && (E = !1);
      }
      return a = S.apply(null, T), a;
    }, ...m);
    return Object.assign(k, {
      resultFunc: c,
      memoizedResultFunc: S,
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
      memoize: f,
      argsMemoize: d
    });
  };
}
var Zt = /* @__PURE__ */ lo(jn);
function co(e) {
  return ({ dispatch: r, getState: n }) => (i) => (o) => typeof o == "function" ? o(r, n, e) : i(o);
}
var Ea = co(), ka = co, Ca = (...e) => {
  const t = lo(...e);
  return (...r) => {
    const n = t(...r), i = (o, ...s) => n(It(o) ? oo(o) : o, ...s);
    return Object.assign(i, n), i;
  };
};
Ca(jn);
var Oa = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? Ir : Ir.apply(null, arguments);
}, uo = (e) => e && typeof e.match == "function";
function Rt(e, t) {
  function r(...n) {
    if (t) {
      let i = t(...n);
      if (!i)
        throw new Error(process.env.NODE_ENV === "production" ? Le(0) : "prepareAction did not return an object");
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
  return r.toString = () => `${e}`, r.type = e, r.match = (n) => Qi(n) && n.type === e, r;
}
function Aa(e) {
  return typeof e == "function" && "type" in e && // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
  uo(e);
}
function Na(e) {
  const t = e ? `${e}`.split("/") : [], r = t[t.length - 1] || "actionCreator";
  return `Detected an action creator with type "${e || "unknown"}" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${r}())\` instead of \`dispatch(${r})\`. This is necessary even if the action has no payload.`;
}
function Ta(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (r) => (n) => r(n);
  const {
    isActionCreator: t = Aa
  } = e;
  return () => (r) => (n) => (t(n) && console.warn(Na(n.type)), r(n));
}
function fo(e, t) {
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
var ho = class rr extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, rr.prototype);
  }
  static get [Symbol.species]() {
    return rr;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new rr(...t[0].concat(this)) : new rr(...t.concat(this));
  }
};
function bi(e) {
  return Ct(e) ? ao(e, () => {
  }) : e;
}
function wi(e, t, r) {
  if (e.has(t)) {
    let i = e.get(t);
    return r.update && (i = r.update(i, t, e), e.set(t, i)), i;
  }
  if (!r.insert)
    throw new Error(process.env.NODE_ENV === "production" ? Le(10) : "No insert provided for key not already in map");
  const n = r.insert(t, e);
  return e.set(t, n), n;
}
function Ra(e) {
  return typeof e != "object" || e == null || Object.isFrozen(e);
}
function Ia(e, t, r) {
  const n = po(e, t, r);
  return {
    detectMutations() {
      return mo(e, t, n, r);
    }
  };
}
function po(e, t = [], r, n = "", i = /* @__PURE__ */ new Set()) {
  const o = {
    value: r
  };
  if (!e(r) && !i.has(r)) {
    i.add(r), o.children = {};
    for (const s in r) {
      const a = n ? n + "." + s : s;
      t.length && t.indexOf(a) !== -1 || (o.children[s] = po(e, t, r[s], a));
    }
  }
  return o;
}
function mo(e, t = [], r, n, i = !1, o = "") {
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
  for (let u in r.children)
    l[u] = !0;
  for (let u in n)
    l[u] = !0;
  const c = t.length > 0;
  for (let u in l) {
    const f = o ? o + "." + u : u;
    if (c && t.some((b) => b instanceof RegExp ? b.test(f) : f === b))
      continue;
    const v = mo(e, t, r.children[u], n[u], a, f);
    if (v.wasMutated)
      return v;
  }
  return {
    wasMutated: !1
  };
}
function ja(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (t) => (r) => t(r);
  {
    let t = function(a, l, c, u) {
      return JSON.stringify(a, r(l, u), c);
    }, r = function(a, l) {
      let c = [], u = [];
      return l || (l = function(f, v) {
        return c[0] === v ? "[Circular ~]" : "[Circular ~." + u.slice(0, c.indexOf(v)).join(".") + "]";
      }), function(f, v) {
        if (c.length > 0) {
          var d = c.indexOf(this);
          ~d ? c.splice(d + 1) : c.push(this), ~d ? u.splice(d, 1 / 0, f) : u.push(f), ~c.indexOf(v) && (v = l.call(this, f, v));
        } else
          c.push(v);
        return a == null ? v : a.call(this, f, v);
      };
    }, {
      isImmutable: n = Ra,
      ignoredPaths: i,
      warnAfter: o = 32
    } = e;
    const s = Ia.bind(null, n, i);
    return ({
      getState: a
    }) => {
      let l = a(), c = s(l), u;
      return (f) => (v) => {
        const d = fo(o, "ImmutableStateInvariantMiddleware");
        d.measureTime(() => {
          if (l = a(), u = c.detectMutations(), c = s(l), u.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? Le(19) : `A state mutation was detected between dispatches, in the path '${u.path || ""}'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        });
        const b = f(v);
        return d.measureTime(() => {
          if (l = a(), u = c.detectMutations(), c = s(l), u.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? Le(20) : `A state mutation was detected inside a dispatch, in the path: ${u.path || ""}. Take a look at the reducer(s) handling the action ${t(v)}. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        }), d.warnIfExceeded(), b;
      };
    };
  }
}
function yo(e) {
  const t = typeof e;
  return e == null || t === "string" || t === "boolean" || t === "number" || Array.isArray(e) || cr(e);
}
function bn(e, t = "", r = yo, n, i = [], o) {
  let s;
  if (!r(e))
    return {
      keyPath: t || "<root>",
      value: e
    };
  if (typeof e != "object" || e === null || o != null && o.has(e))
    return !1;
  const a = n != null ? n(e) : Object.entries(e), l = i.length > 0;
  for (const [c, u] of a) {
    const f = t ? t + "." + c : c;
    if (!(l && i.some((d) => d instanceof RegExp ? d.test(f) : f === d))) {
      if (!r(u))
        return {
          keyPath: f,
          value: u
        };
      if (typeof u == "object" && (s = bn(u, f, r, n, i, o), s))
        return s;
    }
  }
  return o && go(e) && o.add(e), !1;
}
function go(e) {
  if (!Object.isFrozen(e))
    return !1;
  for (const t of Object.values(e))
    if (!(typeof t != "object" || t === null) && !go(t))
      return !1;
  return !0;
}
function Fa(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (t) => (r) => t(r);
  {
    const {
      isSerializable: t = yo,
      getEntries: r,
      ignoredActions: n = [],
      ignoredActionPaths: i = ["meta.arg", "meta.baseQueryMeta"],
      ignoredPaths: o = [],
      warnAfter: s = 32,
      ignoreState: a = !1,
      ignoreActions: l = !1,
      disableCache: c = !1
    } = e, u = !c && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
    return (f) => (v) => (d) => {
      if (!Qi(d))
        return v(d);
      const b = v(d), h = fo(s, "SerializableStateInvariantMiddleware");
      return !l && !(n.length && n.indexOf(d.type) !== -1) && h.measureTime(() => {
        const g = bn(d, "", t, r, i, u);
        if (g) {
          const {
            keyPath: m,
            value: w
          } = g;
          console.error(`A non-serializable value was detected in an action, in the path: \`${m}\`. Value:`, w, `
Take a look at the logic that dispatched this action: `, d, `
(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)`, `
(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)`);
        }
      }), a || (h.measureTime(() => {
        const g = f.getState(), m = bn(g, "", t, r, o, u);
        if (m) {
          const {
            keyPath: w,
            value: S
          } = m;
          console.error(`A non-serializable value was detected in the state, in the path: \`${w}\`. Value:`, S, `
Take a look at the reducer(s) handling this action type: ${d.type}.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`);
        }
      }), h.warnIfExceeded()), b;
    };
  }
}
function xr(e) {
  return typeof e == "boolean";
}
var za = () => function(t) {
  const {
    thunk: r = !0,
    immutableCheck: n = !0,
    serializableCheck: i = !0,
    actionCreatorCheck: o = !0
  } = t ?? {};
  let s = new ho();
  if (r && (xr(r) ? s.push(Ea) : s.push(ka(r.extraArgument))), process.env.NODE_ENV !== "production") {
    if (n) {
      let a = {};
      xr(n) || (a = n), s.unshift(ja(a));
    }
    if (i) {
      let a = {};
      xr(i) || (a = i), s.push(Fa(a));
    }
    if (o) {
      let a = {};
      xr(o) || (a = o), s.unshift(Ta(a));
    }
  }
  return s;
}, Da = "RTK_autoBatch", vo = (e) => (t) => {
  setTimeout(t, e);
}, Pa = typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : vo(10), La = (e = {
  type: "raf"
}) => (t) => (...r) => {
  const n = t(...r);
  let i = !0, o = !1, s = !1;
  const a = /* @__PURE__ */ new Set(), l = e.type === "tick" ? queueMicrotask : e.type === "raf" ? Pa : e.type === "callback" ? e.queueNotification : vo(e.timeout), c = () => {
    s = !1, o && (o = !1, a.forEach((u) => u()));
  };
  return Object.assign({}, n, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(u) {
      const f = () => i && u(), v = n.subscribe(f);
      return a.add(u), () => {
        v(), a.delete(u);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(u) {
      var f;
      try {
        return i = !((f = u == null ? void 0 : u.meta) != null && f[Da]), o = !i, o && (s || (s = !0, l(c))), n.dispatch(u);
      } finally {
        i = !0;
      }
    }
  });
}, $a = (e) => function(r) {
  const {
    autoBatch: n = !0
  } = r ?? {};
  let i = new ho(e);
  return n && i.push(La(typeof n == "object" ? n : void 0)), i;
}, Nt = process.env.NODE_ENV === "production";
function Ma(e) {
  const t = za(), {
    reducer: r = void 0,
    middleware: n,
    devTools: i = !0,
    preloadedState: o = void 0,
    enhancers: s = void 0
  } = e || {};
  let a;
  if (typeof r == "function")
    a = r;
  else if (cr(r))
    a = Ji(r);
  else
    throw new Error(process.env.NODE_ENV === "production" ? Le(1) : "`reducer` is a required argument, and must be a function or an object of functions that can be passed to combineReducers");
  if (!Nt && n && typeof n != "function")
    throw new Error(process.env.NODE_ENV === "production" ? Le(2) : "`middleware` field must be a callback");
  let l;
  if (typeof n == "function") {
    if (l = n(t), !Nt && !Array.isArray(l))
      throw new Error(process.env.NODE_ENV === "production" ? Le(3) : "when using a middleware builder function, an array of middleware must be returned");
  } else
    l = t();
  if (!Nt && l.some((b) => typeof b != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? Le(4) : "each middleware provided to configureStore must be a function");
  let c = Ir;
  i && (c = Oa({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !Nt,
    ...typeof i == "object" && i
  }));
  const u = na(...l), f = $a(u);
  if (!Nt && s && typeof s != "function")
    throw new Error(process.env.NODE_ENV === "production" ? Le(5) : "`enhancers` field must be a callback");
  let v = typeof s == "function" ? s(f) : f();
  if (!Nt && !Array.isArray(v))
    throw new Error(process.env.NODE_ENV === "production" ? Le(6) : "`enhancers` callback must return an array");
  if (!Nt && v.some((b) => typeof b != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? Le(7) : "each enhancer provided to configureStore must be a function");
  !Nt && l.length && !v.includes(u) && console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
  const d = c(...v);
  return Tn(a, o, d);
}
function bo(e) {
  const t = {}, r = [];
  let n;
  const i = {
    addCase(o, s) {
      if (process.env.NODE_ENV !== "production") {
        if (r.length > 0)
          throw new Error(process.env.NODE_ENV === "production" ? Le(26) : "`builder.addCase` should only be called before calling `builder.addMatcher`");
        if (n)
          throw new Error(process.env.NODE_ENV === "production" ? Le(27) : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
      }
      const a = typeof o == "string" ? o : o.type;
      if (!a)
        throw new Error(process.env.NODE_ENV === "production" ? Le(28) : "`builder.addCase` cannot be called with an empty action type");
      if (a in t)
        throw new Error(process.env.NODE_ENV === "production" ? Le(29) : `\`builder.addCase\` cannot be called with two reducers for the same action type '${a}'`);
      return t[a] = s, i;
    },
    addMatcher(o, s) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? Le(30) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
      return r.push({
        matcher: o,
        reducer: s
      }), i;
    },
    addDefaultCase(o) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? Le(31) : "`builder.addDefaultCase` can only be called once");
      return n = o, i;
    }
  };
  return e(i), [t, r, n];
}
function Ba(e) {
  return typeof e == "function";
}
function Ua(e, t) {
  if (process.env.NODE_ENV !== "production" && typeof t == "object")
    throw new Error(process.env.NODE_ENV === "production" ? Le(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [r, n, i] = bo(t), o;
  if (Ba(e))
    o = () => bi(e());
  else {
    const a = bi(e);
    o = () => a;
  }
  function s(a = o(), l) {
    let c = [r[l.type], ...n.filter(({
      matcher: u
    }) => u(l)).map(({
      reducer: u
    }) => u)];
    return c.filter((u) => !!u).length === 0 && (c = [i]), c.reduce((u, f) => {
      if (f)
        if (It(u)) {
          const d = f(u, l);
          return d === void 0 ? u : d;
        } else {
          if (Ct(u))
            return ao(u, (v) => f(v, l));
          {
            const v = f(u, l);
            if (v === void 0) {
              if (u === null)
                return u;
              throw new Error(process.env.NODE_ENV === "production" ? Le(9) : "A case reducer on a non-draftable value must not return undefined");
            }
            return v;
          }
        }
      return u;
    }, a);
  }
  return s.getInitialState = o, s;
}
var Va = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", Wa = (e = 21) => {
  let t = "", r = e;
  for (; r--; )
    t += Va[Math.random() * 64 | 0];
  return t;
}, Ha = (e, t) => uo(e) ? e.match(t) : e(t);
function Za(...e) {
  return (t) => e.some((r) => Ha(r, t));
}
var Ga = ["name", "message", "stack", "code"], on = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    Qr(this, "_type");
    this.payload = e, this.meta = t;
  }
}, _i = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    Qr(this, "_type");
    this.payload = e, this.meta = t;
  }
}, Ka = (e) => {
  if (typeof e == "object" && e !== null) {
    const t = {};
    for (const r of Ga)
      typeof e[r] == "string" && (t[r] = e[r]);
    return t;
  }
  return {
    message: String(e)
  };
}, Fn = /* @__PURE__ */ (() => {
  function e(t, r, n) {
    const i = Rt(t + "/fulfilled", (l, c, u, f) => ({
      payload: l,
      meta: {
        ...f || {},
        arg: u,
        requestId: c,
        requestStatus: "fulfilled"
      }
    })), o = Rt(t + "/pending", (l, c, u) => ({
      payload: void 0,
      meta: {
        ...u || {},
        arg: c,
        requestId: l,
        requestStatus: "pending"
      }
    })), s = Rt(t + "/rejected", (l, c, u, f, v) => ({
      payload: f,
      error: (n && n.serializeError || Ka)(l || "Rejected"),
      meta: {
        ...v || {},
        arg: u,
        requestId: c,
        rejectedWithValue: !!f,
        requestStatus: "rejected",
        aborted: (l == null ? void 0 : l.name) === "AbortError",
        condition: (l == null ? void 0 : l.name) === "ConditionError"
      }
    }));
    function a(l) {
      return (c, u, f) => {
        const v = n != null && n.idGenerator ? n.idGenerator(l) : Wa(), d = new AbortController();
        let b;
        function h(m) {
          b = m, d.abort();
        }
        const g = async function() {
          var S, E;
          let m;
          try {
            let k = (S = n == null ? void 0 : n.condition) == null ? void 0 : S.call(n, l, {
              getState: u,
              extra: f
            });
            if (qa(k) && (k = await k), k === !1 || d.signal.aborted)
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            const R = new Promise((T, U) => d.signal.addEventListener("abort", () => U({
              name: "AbortError",
              message: b || "Aborted"
            })));
            c(o(v, l, (E = n == null ? void 0 : n.getPendingMeta) == null ? void 0 : E.call(n, {
              requestId: v,
              arg: l
            }, {
              getState: u,
              extra: f
            }))), m = await Promise.race([R, Promise.resolve(r(l, {
              dispatch: c,
              getState: u,
              extra: f,
              requestId: v,
              signal: d.signal,
              abort: h,
              rejectWithValue: (T, U) => new on(T, U),
              fulfillWithValue: (T, U) => new _i(T, U)
            })).then((T) => {
              if (T instanceof on)
                throw T;
              return T instanceof _i ? i(T.payload, v, l, T.meta) : i(T, v, l);
            })]);
          } catch (k) {
            m = k instanceof on ? s(null, v, l, k.payload, k.meta) : s(k, v, l);
          }
          return n && !n.dispatchConditionRejection && s.match(m) && m.meta.condition || c(m), m;
        }();
        return Object.assign(g, {
          abort: h,
          requestId: v,
          arg: l,
          unwrap() {
            return g.then(Ya);
          }
        });
      };
    }
    return Object.assign(a, {
      pending: o,
      rejected: s,
      fulfilled: i,
      settled: Za(s, i),
      typePrefix: t
    });
  }
  return e.withTypes = () => e, e;
})();
function Ya(e) {
  if (e.meta && e.meta.rejectedWithValue)
    throw e.payload;
  if (e.error)
    throw e.error;
  return e.payload;
}
function qa(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var Xa = Symbol.for("rtk-slice-createasyncthunk");
function Ja(e, t) {
  return `${e}/${t}`;
}
function Qa({
  creators: e
} = {}) {
  var r;
  const t = (r = e == null ? void 0 : e.asyncThunk) == null ? void 0 : r[Xa];
  return function(i) {
    const {
      name: o,
      reducerPath: s = o
    } = i;
    if (!o)
      throw new Error(process.env.NODE_ENV === "production" ? Le(11) : "`name` is a required option for createSlice");
    typeof process < "u" && process.env.NODE_ENV === "development" && i.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const a = (typeof i.reducers == "function" ? i.reducers(tl()) : i.reducers) || {}, l = Object.keys(a), c = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, u = {
      addCase(g, m) {
        const w = typeof g == "string" ? g : g.type;
        if (!w)
          throw new Error(process.env.NODE_ENV === "production" ? Le(12) : "`context.addCase` cannot be called with an empty action type");
        if (w in c.sliceCaseReducersByType)
          throw new Error(process.env.NODE_ENV === "production" ? Le(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + w);
        return c.sliceCaseReducersByType[w] = m, u;
      },
      addMatcher(g, m) {
        return c.sliceMatchers.push({
          matcher: g,
          reducer: m
        }), u;
      },
      exposeAction(g, m) {
        return c.actionCreators[g] = m, u;
      },
      exposeCaseReducer(g, m) {
        return c.sliceCaseReducersByName[g] = m, u;
      }
    };
    l.forEach((g) => {
      const m = a[g], w = {
        reducerName: g,
        type: Ja(o, g),
        createNotation: typeof i.reducers == "function"
      };
      nl(m) ? ol(w, m, u, t) : rl(w, m, u);
    });
    function f() {
      if (process.env.NODE_ENV !== "production" && typeof i.extraReducers == "object")
        throw new Error(process.env.NODE_ENV === "production" ? Le(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [g = {}, m = [], w = void 0] = typeof i.extraReducers == "function" ? bo(i.extraReducers) : [i.extraReducers], S = {
        ...g,
        ...c.sliceCaseReducersByType
      };
      return Ua(i.initialState, (E) => {
        for (let k in S)
          E.addCase(k, S[k]);
        for (let k of c.sliceMatchers)
          E.addMatcher(k.matcher, k.reducer);
        for (let k of m)
          E.addMatcher(k.matcher, k.reducer);
        w && E.addDefaultCase(w);
      });
    }
    const v = (g) => g, d = /* @__PURE__ */ new WeakMap();
    let b;
    const h = {
      name: o,
      reducerPath: s,
      reducer(g, m) {
        return b || (b = f()), b(g, m);
      },
      actions: c.actionCreators,
      caseReducers: c.sliceCaseReducersByName,
      getInitialState() {
        return b || (b = f()), b.getInitialState();
      },
      getSelectors(g = v) {
        const m = wi(d, this, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return wi(m, g, {
          insert: () => {
            const w = {};
            for (const [S, E] of Object.entries(i.selectors ?? {}))
              w[S] = el(this, E, g, this !== h);
            return w;
          }
        });
      },
      selectSlice(g) {
        let m = g[this.reducerPath];
        if (typeof m > "u") {
          if (this !== h)
            m = this.getInitialState();
          else if (process.env.NODE_ENV !== "production")
            throw new Error(process.env.NODE_ENV === "production" ? Le(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return m;
      },
      get selectors() {
        return this.getSelectors(this.selectSlice);
      },
      injectInto(g, {
        reducerPath: m,
        ...w
      } = {}) {
        const S = m ?? this.reducerPath;
        return g.inject({
          reducerPath: S,
          reducer: this.reducer
        }, w), {
          ...this,
          reducerPath: S
        };
      }
    };
    return h;
  };
}
function el(e, t, r, n) {
  function i(o, ...s) {
    let a = r.call(e, o);
    if (typeof a > "u") {
      if (n)
        a = e.getInitialState();
      else if (process.env.NODE_ENV !== "production")
        throw new Error(process.env.NODE_ENV === "production" ? Le(16) : "selectState returned undefined for an uninjected slice reducer");
    }
    return t(a, ...s);
  }
  return i.unwrapped = t, i;
}
var zn = Qa();
function tl() {
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
function rl({
  type: e,
  reducerName: t,
  createNotation: r
}, n, i) {
  let o, s;
  if ("reducer" in n) {
    if (r && !il(n))
      throw new Error(process.env.NODE_ENV === "production" ? Le(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    o = n.reducer, s = n.prepare;
  } else
    o = n;
  i.addCase(e, o).exposeCaseReducer(t, o).exposeAction(t, s ? Rt(e, s) : Rt(e));
}
function nl(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function il(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function ol({
  type: e,
  reducerName: t
}, r, n, i) {
  if (!i)
    throw new Error(process.env.NODE_ENV === "production" ? Le(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  const {
    payloadCreator: o,
    fulfilled: s,
    pending: a,
    rejected: l,
    settled: c,
    options: u
  } = r, f = i(e, o, u);
  n.exposeAction(t, f), s && n.addCase(f.fulfilled, s), a && n.addCase(f.pending, a), l && n.addCase(f.rejected, l), c && n.addMatcher(f.settled, c), n.exposeCaseReducer(t, {
    fulfilled: s || Sr,
    pending: a || Sr,
    rejected: l || Sr,
    settled: c || Sr
  });
}
function Sr() {
}
var Dn = "listenerMiddleware";
Rt(`${Dn}/add`);
Rt(`${Dn}/removeAll`);
Rt(`${Dn}/remove`);
function Le(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
let Er;
const sl = new Uint8Array(16);
function al() {
  if (!Er && (Er = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Er))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Er(sl);
}
const ot = [];
for (let e = 0; e < 256; ++e)
  ot.push((e + 256).toString(16).slice(1));
function ll(e, t = 0) {
  return ot[e[t + 0]] + ot[e[t + 1]] + ot[e[t + 2]] + ot[e[t + 3]] + "-" + ot[e[t + 4]] + ot[e[t + 5]] + "-" + ot[e[t + 6]] + ot[e[t + 7]] + "-" + ot[e[t + 8]] + ot[e[t + 9]] + "-" + ot[e[t + 10]] + ot[e[t + 11]] + ot[e[t + 12]] + ot[e[t + 13]] + ot[e[t + 14]] + ot[e[t + 15]];
}
const cl = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), xi = {
  randomUUID: cl
};
function sn(e, t, r) {
  if (xi.randomUUID && !t && !e)
    return xi.randomUUID();
  e = e || {};
  const n = e.random || (e.rng || al)();
  if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, t) {
    r = r || 0;
    for (let i = 0; i < 16; ++i)
      t[r + i] = n[i];
    return t;
  }
  return ll(n);
}
const ul = (e, t, r) => {
  const n = [e];
  for (; n.length > 0; )
    if (e = n.shift(), e.id === t) {
      r(e);
      return;
    } else
      e.type === "folder" && n.push(...e.subFoldersAndFiles);
}, St = (e, t, r, n) => {
  for (const i of e)
    if (i.id === t) {
      r(i, n);
      return;
    } else
      i.type === "folder" && (n.push(i), St(
        i.subFoldersAndFiles,
        t,
        r,
        n
      ));
  n.pop();
}, Wr = (e, t, r = [], n) => {
  for (const i of e)
    if (t(i, n), i.type === "folder") {
      const o = i.subFoldersAndFiles.map(({ id: s }) => s);
      r.push(...o), n.push(i.id), Wr(
        i.subFoldersAndFiles,
        t,
        r,
        n
      ), n.pop();
    }
  return { childrenIds: r, parentIds: n };
}, Si = (e, t, r) => {
  if (t.includes(e)) {
    let n = "";
    return St(
      r.subFoldersAndFiles,
      e,
      (i, o) => {
        n = o[o.length - 1].id;
      },
      [r]
    ), n;
  } else
    return e.includes("folder") ? e : "head";
}, wo = (e, t, r) => {
  if (e.type === "folder" && r === e.id) {
    t(e);
    return;
  } else
    e.type === "folder" && t(e);
  const n = e.subFoldersAndFiles;
  for (const i of n)
    i.type === "folder" && wo(i, t, r);
}, dl = {
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
}, Mt = zn({
  name: "structure",
  initialState: dl,
  reducers: {
    addNode: (e, t) => {
      const { value: r, inputType: n } = t.payload;
      let i = r, o = "";
      n === "file" && (i = r.substring(0, r.lastIndexOf(".")), o = r.substring(r.lastIndexOf(".") + 1));
      const s = {
        id: `${n}-${sn()}`,
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
      ] : ul(e.initialFolder, e.contextSelected.id, (l) => {
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
      St(
        e.initialFolder.subFoldersAndFiles,
        r,
        (a, l) => {
          const c = l[l.length - 1];
          c.subFoldersAndFiles = c.subFoldersAndFiles.filter(
            ({ id: v }) => v !== a.id
          );
          const u = c.id;
          e.normalized.folders.byId[u].childrenFlat = e.normalized.folders.byId[u].childrenFlat.filter(
            ({ id: v }) => v !== a.id
          );
          const f = (v) => {
            for (const d of v) {
              const { id: b, type: h } = d;
              e.normalized[h + "s"].allIds = e.normalized[h + "s"].allIds.filter((g) => g !== b), d.type === "folder" && f(d.subFoldersAndFiles);
            }
          };
          a.type === "folder" && f(a.subFoldersAndFiles), c.subFoldersAndFiles.length === 0 && (e.normalized.folders.byId[u].collapsed = !0);
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
      )), St(
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
        if (e.normalized.folders.byId[e.contextSelected.id].childrenFlat.find(({ id: u }) => {
          var f;
          return u === ((f = e.toCopy) == null ? void 0 : f.id);
        })) {
          e.toCopy = null;
          return;
        }
      }
      const t = e.normalized[e.toCopy.type + "s"].byId[e.toCopy.id], r = {
        ...t,
        childrenFlat: e.toCopy.type === "folder" ? e.toCopy.subFoldersAndFiles.map(({ id: c, type: u }) => ({ id: c, type: u })) : void 0,
        subFoldersAndFiles: e.toCopy.subFoldersAndFiles,
        // subFoldersAndFiles: state.toCopy.subFoldersAndFiles
        //   ? state.toCopy.subFoldersAndFiles
        //   : undefined,
        id: `${e.toCopy.type}-${sn()}`,
        wholeName: t.type === "file" ? `${t.name}.${t.extension}` : t.name
        // path: item.type === "file" ? [] : "",
      }, n = e.normalized.folders.byId[`${e.contextSelected.id}`].childrenFlat.map(({ id: c, type: u }) => {
        if (u === "folder")
          return e.normalized[`${u}s`].byId[c].name;
        {
          const f = e.normalized[`${u}s`].byId[c];
          return `${f.name}.${f.extension}`;
        }
      });
      let i = r.wholeName;
      if (n.filter((c) => c === r.wholeName).length > 0) {
        let c = 1;
        for (; n.filter((u) => r.type === "file" ? u === `${r.name}_Copy_${c}.${r.extension}` : u === `${r.name}_Copy_${c}`).length > 0; )
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
        var u;
        if (((u = e.toCopy) == null ? void 0 : u.type) === "folder") {
          const f = e.normalized.folders.byId[c.id].path.slice(0, -1);
          Wr(
            c.subFoldersAndFiles,
            (v, d) => {
              const b = d[d.length - 1], h = {
                ...e.normalized[`${v.type}s`].byId[v.id]
              };
              h.id = `${h.type}-${sn()}`, h.path = [...f, ...d, h.id], e.normalized[`${h.type}s`].byId[h.id] = h, e.normalized[`${h.type}s`].allIds = [
                ...e.normalized[`${h.type}s`].allIds,
                h.id
              ], e.normalized.folders.byId[b].childrenFlat = e.normalized.folders.byId[b].childrenFlat.map(
                (g) => g.id === v.id ? { ...g, id: h.id } : g
              ), v.id = h.id;
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
        St(
          e.initialFolder.subFoldersAndFiles,
          e.contextSelected.id,
          (c, u) => {
            const f = e.normalized.folders.byId[c.id].path, v = [
              ...u.map(({ id: h }) => h),
              c.id
            ];
            e.normalized[l].byId[s.id].path = [
              "/",
              ...v,
              s.id
            ];
            const d = a(s);
            c.subFoldersAndFiles = [
              ...c.subFoldersAndFiles,
              {
                id: d.id,
                type: d.type,
                subFoldersAndFiles: d.subFoldersAndFiles
              }
            ];
            const b = `${s.type}s`;
            e.normalized[b].byId[s.id].path = [
              ...f,
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
      n.type === "folder" && St(
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
          St(
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
        St(
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
      St(
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
      wo(
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
}), fl = (e) => e.structure.initialFolder, hl = (e) => {
  var t;
  return (t = e.structure.contextSelected) == null ? void 0 : t.e;
}, _o = (e) => {
  var t;
  return (t = e.structure.contextSelected) == null ? void 0 : t.id;
}, pl = (e) => {
  var t;
  return (t = e.structure.contextSelected) == null ? void 0 : t.type;
}, ml = (e) => e.structure.normalized.files.allIds, yl = (e) => e.structure.normalized.folders.allIds, xo = (e) => e.structure.toCopy, gl = (e) => e.structure.searchTerm, So = Zt(
  (e) => e.structure.selected,
  (e) => e
), vl = Zt(
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
), bl = Zt(
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
), wl = Zt(
  (e) => e.structure.normalized,
  (e) => e.structure.parentItemId,
  (e, t) => !e || !t ? [] : e.folders.byId[`${t}`].childrenFlat.map(
    ({ id: r, type: n }) => e[`${n}s`].byId[r]
  )
), Eo = Zt(
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
        const u = s.split("\r");
        for (let f = 0; f < u.length; f++)
          u[f].includes(l[0]) && c.push({
            line: f + 1,
            content: u[f].trim()
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
), {
  addNode: _l,
  removeNode: xl,
  renameNode: Sl,
  collapseOrExpand: wn,
  updateFileContents: ad,
  // normalizeState,
  setSelected: zr,
  contextClick: ko,
  setToCopy: Ei,
  copyNode: El,
  setParentItemId: ki,
  setContextSelectedForFileAction: Ci,
  search: Oi,
  setResizeCollapsed: ld,
  setSearchFocused: cd,
  setProjectName: kl,
  setValidExtensions: Cl
} = Mt.actions, Ol = Mt.reducer;
var _n = { exports: {} }, an = {};
/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ai;
function Al() {
  return Ai || (Ai = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = pt;
    function t(c, u) {
      return c === u && (c !== 0 || 1 / c === 1 / u) || c !== c && u !== u;
    }
    var r = typeof Object.is == "function" ? Object.is : t, n = e.useSyncExternalStore, i = e.useRef, o = e.useEffect, s = e.useMemo, a = e.useDebugValue;
    function l(c, u, f, v, d) {
      var b = i(null), h;
      b.current === null ? (h = {
        hasValue: !1,
        value: null
      }, b.current = h) : h = b.current;
      var g = s(function() {
        var E = !1, k, R, T = function(q) {
          if (!E) {
            E = !0, k = q;
            var A = v(q);
            if (d !== void 0 && h.hasValue) {
              var I = h.value;
              if (d(I, A))
                return R = I, I;
            }
            return R = A, A;
          }
          var y = k, z = R;
          if (r(y, q))
            return z;
          var ie = v(q);
          return d !== void 0 && d(z, ie) ? z : (k = q, R = ie, ie);
        }, U = f === void 0 ? null : f, D = function() {
          return T(u());
        }, K = U === null ? void 0 : function() {
          return T(U());
        };
        return [D, K];
      }, [u, f, v, d]), m = g[0], w = g[1], S = n(c, m, w);
      return o(function() {
        h.hasValue = !0, h.value = S;
      }, [S]), a(S), S;
    }
    an.useSyncExternalStoreWithSelector = l, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), an;
}
var ln = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ni;
function Nl() {
  if (Ni)
    return ln;
  Ni = 1;
  var e = pt;
  function t(l, c) {
    return l === c && (l !== 0 || 1 / l === 1 / c) || l !== l && c !== c;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useSyncExternalStore, i = e.useRef, o = e.useEffect, s = e.useMemo, a = e.useDebugValue;
  return ln.useSyncExternalStoreWithSelector = function(l, c, u, f, v) {
    var d = i(null);
    if (d.current === null) {
      var b = { hasValue: !1, value: null };
      d.current = b;
    } else
      b = d.current;
    d = s(function() {
      function g(k) {
        if (!m) {
          if (m = !0, w = k, k = f(k), v !== void 0 && b.hasValue) {
            var R = b.value;
            if (v(R, k))
              return S = R;
          }
          return S = k;
        }
        if (R = S, r(w, k))
          return R;
        var T = f(k);
        return v !== void 0 && v(R, T) ? R : (w = k, S = T);
      }
      var m = !1, w, S, E = u === void 0 ? null : u;
      return [function() {
        return g(c());
      }, E === null ? void 0 : function() {
        return g(E());
      }];
    }, [c, u, f, v]);
    var h = n(l, d[0], d[1]);
    return o(function() {
      b.hasValue = !0, b.value = h;
    }, [h]), a(h), h;
  }, ln;
}
process.env.NODE_ENV === "production" ? _n.exports = Nl() : _n.exports = Al();
var Tl = _n.exports, mt = (
  // prettier-ignore
  // @ts-ignore
  "default" in en ? en.default : en
), Ti = Symbol.for("react-redux-context"), Ri = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function Rl() {
  if (!mt.createContext)
    return {};
  const e = Ri[Ti] ?? (Ri[Ti] = /* @__PURE__ */ new Map());
  let t = e.get(mt.createContext);
  return t || (t = mt.createContext(
    null
  ), process.env.NODE_ENV !== "production" && (t.displayName = "ReactRedux"), e.set(mt.createContext, t)), t;
}
var jt = /* @__PURE__ */ Rl(), Il = () => {
  throw new Error("uSES not initialized!");
};
function Pn(e = jt) {
  return function() {
    const r = mt.useContext(e);
    if (process.env.NODE_ENV !== "production" && !r)
      throw new Error(
        "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
      );
    return r;
  };
}
var Co = /* @__PURE__ */ Pn(), Oo = Il, jl = (e) => {
  Oo = e;
}, Fl = (e, t) => e === t;
function zl(e = jt) {
  const t = e === jt ? Co : Pn(e);
  return function(n, i = {}) {
    const { equalityFn: o = Fl, devModeChecks: s = {} } = typeof i == "function" ? { equalityFn: i } : i;
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
      stabilityCheck: u,
      identityFunctionCheck: f
    } = t(), v = mt.useRef(!0), d = mt.useCallback(
      {
        [n.name](h) {
          const g = n(h);
          if (process.env.NODE_ENV !== "production") {
            const {
              identityFunctionCheck: m,
              stabilityCheck: w
            } = {
              stabilityCheck: u,
              identityFunctionCheck: f,
              ...s
            };
            if (w === "always" || w === "once" && v.current) {
              const S = n(h);
              if (!o(g, S)) {
                let E;
                try {
                  throw new Error();
                } catch (k) {
                  ({ stack: E } = k);
                }
                console.warn(
                  "Selector " + (n.name || "unknown") + ` returned a different result when called with the same parameters. This can lead to unnecessary rerenders.
Selectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization`,
                  {
                    state: h,
                    selected: g,
                    selected2: S,
                    stack: E
                  }
                );
              }
            }
            if ((m === "always" || m === "once" && v.current) && g === h) {
              let S;
              try {
                throw new Error();
              } catch (E) {
                ({ stack: S } = E);
              }
              console.warn(
                "Selector " + (n.name || "unknown") + ` returned the root state when called. This can lead to unnecessary rerenders.
Selectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.`,
                { stack: S }
              );
            }
            v.current && (v.current = !1);
          }
          return g;
        }
      }[n.name],
      [n, u, s.stabilityCheck]
    ), b = Oo(
      l.addNestedSub,
      a.getState,
      c || a.getState,
      d,
      o
    );
    return mt.useDebugValue(b), b;
  };
}
function Dl(e) {
  e();
}
function Pl() {
  let e = null, t = null;
  return {
    clear() {
      e = null, t = null;
    },
    notify() {
      Dl(() => {
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
var Ii = {
  notify() {
  },
  get: () => []
};
function Ll(e, t) {
  let r, n = Ii, i = 0, o = !1;
  function s(h) {
    u();
    const g = n.subscribe(h);
    let m = !1;
    return () => {
      m || (m = !0, g(), f());
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
  function u() {
    i++, r || (r = t ? t.addNestedSub(l) : e.subscribe(l), n = Pl());
  }
  function f() {
    i--, r && i === 0 && (r(), r = void 0, n.clear(), n = Ii);
  }
  function v() {
    o || (o = !0, u());
  }
  function d() {
    o && (o = !1, f());
  }
  const b = {
    addNestedSub: s,
    notifyNestedSubs: a,
    handleChangeWrapper: l,
    isSubscribed: c,
    trySubscribe: v,
    tryUnsubscribe: d,
    getListeners: () => n
  };
  return b;
}
var $l = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Ml = $l ? mt.useLayoutEffect : mt.useEffect;
function Bl({
  store: e,
  context: t,
  children: r,
  serverState: n,
  stabilityCheck: i = "once",
  identityFunctionCheck: o = "once"
}) {
  const s = mt.useMemo(() => {
    const c = Ll(e);
    return {
      store: e,
      subscription: c,
      getServerState: n ? () => n : void 0,
      stabilityCheck: i,
      identityFunctionCheck: o
    };
  }, [e, n, i, o]), a = mt.useMemo(() => e.getState(), [e]);
  Ml(() => {
    const { subscription: c } = s;
    return c.onStateChange = c.notifyNestedSubs, c.trySubscribe(), a !== e.getState() && c.notifyNestedSubs(), () => {
      c.tryUnsubscribe(), c.onStateChange = void 0;
    };
  }, [s, a]);
  const l = t || jt;
  return /* @__PURE__ */ mt.createElement(l.Provider, { value: s }, r);
}
var Ul = Bl;
function Ao(e = jt) {
  const t = (
    // @ts-ignore
    e === jt ? Co : (
      // @ts-ignore
      Pn(e)
    )
  );
  return function() {
    const { store: n } = t();
    return n;
  };
}
var Vl = /* @__PURE__ */ Ao();
function Wl(e = jt) {
  const t = (
    // @ts-ignore
    e === jt ? Vl : Ao(e)
  );
  return function() {
    return t().dispatch;
  };
}
jl(Tl.useSyncExternalStoreWithSelector);
const Ln = pt.createContext(null), Hl = Wl(Ln), Zl = zl(Ln), ur = Hl, Ke = Zl, Gl = {
  open: [],
  selected: "",
  selectionStack: []
}, xn = Fn(
  "removeTabAsync",
  async (e, { getState: t }) => t().structure.normalized
), $n = Fn(
  "setActiveTabAsync",
  async (e, { getState: t }) => {
    const n = t().structure.normalized;
    return { id: e, normalized: n };
  }
), No = zn({
  name: "tabs",
  initialState: Gl,
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
    e.addCase(xn.fulfilled, (t, r) => {
      const n = r.payload;
      t.open = t.open.filter(
        (i) => n.files.allIds.find((o) => o === i.id) !== void 0
      ), t.selectionStack = t.selectionStack.filter(
        (i) => n.files.allIds.find((o) => o === i) !== void 0
      ), t.open.find(({ id: i }) => i === t.selected) || (t.selected = t.selectionStack[t.selectionStack.length - 1], t.selectionStack = t.selectionStack.slice(
        0,
        t.selectionStack.length - 1
      ));
    }).addCase($n.fulfilled, (t, r) => {
      const n = r.payload.normalized, i = r.payload.id, o = n.files.byId[i];
      t.open.filter(({ id: s }) => s === o.id).length === 0 && (t.open = [
        ...t.open,
        { id: o.id, extension: o.extension }
      ]), (t.selected !== "" && t.selectionStack[t.selectionStack.length - 1] !== t.selected || t.selectionStack.length === 0) && (t.selectionStack = [...t.selectionStack, t.selected]), t.selected = o.id;
    });
  }
}), { closeTab: Kl, selectTab: Yl, closeAllTabs: ud } = No.actions, ql = No.reducer, Xl = (e) => e.tabs.selected, Jl = Zt(
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
), To = ({
  item: e,
  onClickE: t,
  className: r,
  style: n
}) => /* @__PURE__ */ M.jsx(
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
), Ql = ({
  item: e,
  selected: t,
  showBlue: r,
  onClickE: n,
  primaryClass: i,
  secondaryClass: o
}) => /* @__PURE__ */ M.jsx(
  "button",
  {
    type: "button",
    "typeof-item": e.type,
    "parent-id": e.id,
    onClick: (s) => {
      n(s);
    },
    className: `px-2 rounded-r-sm ${t === e.id && r ? `hover:bg-blue-400 ${i}` : `hover:bg-slate-500 ${o}`}`,
    children: /* @__PURE__ */ M.jsx("span", { className: "three-dots transition-opacity", children: " " })
  }
), ar = (e) => `${e}-logo`, ec = (e, t, r, n, i) => {
  const o = /^([^\\]*)\.(\w+)$/, s = /^[a-zA-Z0-9](?:[a-zA-Z0-9 ._-]*[a-zA-Z0-9])?\.[a-zA-Z0-9_-]+$/, a = /^[a-z0-9._]+$/i, l = t.match(s), c = t.match(o), u = t.match(a);
  if (c && u) {
    const f = n, v = c[1], d = c[2];
    if (l && u && f.includes(d)) {
      for (const { wholeName: b, type: h } of r)
        if (b.toLowerCase() === t.toLowerCase() && h === i.type && b.split(".").reverse()[0] === d)
          return {
            error: !0,
            errorMessage: "A file with this name already exists. Please choose a different name."
          };
      return {
        error: !1,
        errorMessage: "",
        ext: d
      };
    } else if (d !== "" || !l)
      return f.includes(d) ? v === "" ? {
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
    if (!u && t !== "")
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
}, tc = (e, t) => {
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
}, ji = (e, t, r, n, i) => t.type === "file" ? ec(
  e,
  r,
  n,
  i,
  t
) : t.type === "folder" ? tc(r, n) : {
  error: !0,
  errorMessage: ""
}, Mn = ({ item: e, onClickE: t, className: r }) => {
  const n = (i) => {
    if (i.type === "folder")
      return i.collapsed ? "closed-folder" : "opened-folder";
    if (i.type === "file" && i.extension)
      return ar(i.extension);
  };
  return /* @__PURE__ */ M.jsxs(
    "div",
    {
      onClick: (i) => {
        t(i);
      },
      "parent-id": e.id,
      "typeof-item": e.type,
      className: `w-full py-[0.32rem] pl-3 flex flex-row justify-start items-center collapsable ${r}`,
      children: [
        /* @__PURE__ */ M.jsx(
          "span",
          {
            "typeof-item": e.type,
            "parent-id": e.id,
            className: `span-logo span-logo-width ${n(e)}`,
            children: " "
          }
        ),
        /* @__PURE__ */ M.jsx("span", { "typeof-item": e.type, "parent-id": e.id, className: "px-1 mx-1 ", children: (() => {
          let i = "";
          return e.type === "file" ? i = `${e.name}.${e.extension}` : e.type === "folder" && (i = e.name), i;
        })() })
      ]
    }
  );
}, Ro = ({
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
  selectedClickableAreaClassName: u,
  contextSelectedClickableAreaClassName: f,
  itemTitleClassName: v,
  onItemSelected: d = () => {
  },
  onItemContextSelected: b = () => {
  }
}) => {
  const h = ur(), g = Ke(So), m = Ke(_o), w = Ke(xo), S = Ke((E) => e.map(({ id: R, type: T }) => E.structure.normalized[`${T}s`].byId[R]));
  return /* @__PURE__ */ M.jsx("div", { className: `${S.length > 0 && "w-full"}`, children: S.map((E) => /* @__PURE__ */ M.jsxs(
    "div",
    {
      className: "flex flex-col select-none mr-1 w-full",
      children: [
        /* @__PURE__ */ M.jsxs(
          "div",
          {
            id: E.id,
            "typeof-item": E.type,
            className: `border border-transparent mr-1 transition-colors flex flex-row hover:cursor-pointer rounded-r-sm clickable hover:bg-slate-300 justify-between text-black ${c} ${g === E.id && t ? `bg-vscode-overlay hover:bg-vscode-blue ${u}` : m === E.id && n ? `bg-slate-700 hover:bg-slate-600 text-white ${f}` : ""}  ${w != null && w.isCut && w.id === E.id ? "opacity-50" : ""} }`,
            children: [
              /* @__PURE__ */ M.jsx(
                Mn,
                {
                  item: E,
                  onClickE: (k) => {
                    k.stopPropagation(), h(zr({ id: E.id, type: E.type })), r(!0), i(!1), E.type === "file" ? h($n(E.id)) : h(
                      wn({
                        item: { id: E.id, type: E.type },
                        collapse: !0
                      })
                    ), d({ id: E.id, type: E.type });
                  },
                  className: v
                }
              ),
              /* @__PURE__ */ M.jsx(
                Ql,
                {
                  item: E,
                  selected: g,
                  primaryClass: a,
                  secondaryClass: l,
                  showBlue: t,
                  onClickE: (k) => {
                    k.stopPropagation(), r(!1), i(!0), h(
                      ko({
                        id: E.id,
                        type: E.type,
                        threeDot: { x: k.clientY, y: k.clientX }
                      })
                    ), b({ id: E.id, type: E.type });
                  }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ M.jsxs(M.Fragment, { children: [
          /* @__PURE__ */ M.jsx("div", { id: `ghost-input-${E.id}` }),
          E.type === "folder" && !E.collapsed && /* @__PURE__ */ M.jsxs("div", { className: "flex flex-row sub-folder", children: [
            /* @__PURE__ */ M.jsx(
              To,
              {
                item: E,
                className: o,
                style: s,
                onClickE: (k) => {
                  k.stopPropagation(), r(!0), i(!1), h(zr({ id: E.id, type: E.type })), h(
                    wn({
                      item: { id: E.id, type: E.type },
                      collapse: !0
                    })
                  );
                }
              }
            ),
            /* @__PURE__ */ M.jsx(
              Ro,
              {
                data: (() => {
                  const k = e.find((R) => R.id === E.id);
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
                selectedClickableAreaClassName: u,
                contextSelectedClickableAreaClassName: f,
                itemTitleClassName: v,
                onItemSelected: d,
                onItemContextSelected: b
              }
            )
          ] })
        ] })
      ]
    },
    E.id
  )) });
};
function dr(e, t) {
  Ne(() => {
    function r(n) {
      e.current && !e.current.contains(n.target) && t(!1);
    }
    return document.addEventListener("mousedown", r), () => {
      document.removeEventListener("mousedown", r);
    };
  }, [e, t]);
}
const rc = ({
  top: e,
  left: t,
  setShowContext: r,
  actions: n,
  className: i,
  clickableAreaClassName: o,
  hrColor: s
}) => {
  const a = Ye(null);
  return dr(a, r), /* @__PURE__ */ M.jsx(
    "div",
    {
      ref: a,
      className: `absolute bg-monaco-color rounded-md px-1 py-2 w-48 box-border text-sm z-50 ${i}`,
      style: { top: `${e}px`, left: `${t}px` },
      children: /* @__PURE__ */ M.jsx("ul", { className: "w-full", children: n.map((l, c) => l.type === "hr" ? /* @__PURE__ */ M.jsx(
        "hr",
        {
          style: { borderTopColor: s },
          className: "my-2 border-t border-t-zinc-600"
        },
        c
      ) : /* @__PURE__ */ M.jsx(
        "li",
        {
          onClick: () => {
            l.disabled || (l.handler(), r(!1));
          },
          className: `rounded-md px-7 py-1 ${l.disabled ? "text-zinc-500" : `hover:bg-hover-blue cursor-pointer text-white ${o}`} `,
          children: /* @__PURE__ */ M.jsx("span", { className: "select-none", children: l.title })
        },
        c
      )) })
    }
  );
}, nc = "new-file-logo", Fi = "error-logo", ic = "closed-folder", oc = "rename-logo", sc = ({
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
  var K;
  const [u, f] = Se(
    (K = i.rename) != null && K.wholeName ? i.rename.wholeName : ""
  ), v = Ye(null), d = Ye(null), b = Ye(null), [h, g] = Se(!1), [m, w] = Se(""), S = i.rename ? oc : i.type === "file" ? nc : ic, [E, k] = Se(S), [R, T] = Se("bottom"), U = (q) => {
    if (!q || !v.current)
      return "";
    const A = q.offsetTop, I = q.scrollTop, z = v.current.offsetTop - A;
    return z - I < 393 && I < z ? z - I < 196 ? "bottom" : I - 196 < z ? "top" : "" : "";
  }, D = (q) => {
    q.error ? q.errorMessage !== "" ? (g(!0), k(Fi), w(q.errorMessage)) : (g(!0), k(S), w("")) : (g(!1), i.type === "file" ? k(ar(q.ext)) : k(S), w(""));
  };
  return Ne(() => {
    if (!b.current || !h || m === "" || !o)
      return;
    const q = U(o);
    q !== "" && q !== R && T(q);
  }, [h, m, o, R]), dr(v, () => {
    !h && u.length > 0 && t(u), e(!1);
  }), Ne(() => {
    d.current && setTimeout(() => {
      var q, A, I, y;
      if ((q = d.current) == null || q.focus(), i.rename) {
        const z = (A = i.rename.wholeName) == null ? void 0 : A.lastIndexOf(".");
        (I = d.current) == null || I.select(), z !== void 0 && z !== -1 && ((y = d.current) == null || y.setSelectionRange(0, z));
      }
    }, 0);
  }, [n, i.rename]), Ne(() => {
    const q = ji(
      void 0,
      i,
      u,
      a,
      s
    );
    D(q);
  }, [u]), /* @__PURE__ */ M.jsx(
    "div",
    {
      className: `py-[0.32rem] ${n ? "block" : "hidden"} ${r === 0 ? "mx-1 pr-1 pl-[0.3rem]" : "pl-[1.3rem]"}`,
      ref: v,
      style: { wordWrap: "break-word" },
      children: /* @__PURE__ */ M.jsxs("div", { className: "flex flex-row", children: [
        /* @__PURE__ */ M.jsx("span", { className: `span-logo ml-[3px] ${E} w-[14px] mr-[6px]`, children: " " }),
        /* @__PURE__ */ M.jsxs("div", { className: "flex mx-1 relative flex-col w-[80%] max-w-[10rem]", children: [
          /* @__PURE__ */ M.jsx(
            "input",
            {
              className: `rounded-none border text-white border-monaco-color outline-0 w-full bg-monaco-color text-black ${h && m !== "" ? "focus:border-red-500" : "focus:border-cyan-500"} ${l}`,
              style: c,
              value: u,
              autoFocus: !0,
              onChange: (q) => {
                f(q.target.value);
              },
              onKeyDown: (q) => {
                if (q.key === "Enter")
                  if (!h && u.trim().length > 0)
                    t(u);
                  else if (u.trim().length === 0)
                    g(!0), k(Fi), w(
                      `The ${i.type} name cannot be empty. Please enter a valid name.`
                    );
                  else {
                    const A = ji(
                      !0,
                      i,
                      u,
                      a,
                      s
                    );
                    D(A);
                  }
                else
                  q.key === "Escape" && t(!1);
              },
              ref: d
            }
          ),
          h && m !== "" && /* @__PURE__ */ M.jsx(
            "div",
            {
              ref: b,
              className: `w-fit z-10 select-none absolute flex items-start p-1 border border-red-500 bg-red-900 text-sm text-white ${R !== "top" ? "top-7" : "bottom-7"}`,
              children: m
            }
          )
        ] })
      ] })
    }
  );
}, ac = "data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%23000000%23000000%23000000%23000000%23000000%20%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M10%2011V17'%20stroke='%23ffffff'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M14%2011V17'%20stroke='%23ffffff'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M4%207H20'%20stroke='%23ffffff'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M6%207H12H18V18C18%2019.6569%2016.6569%2021%2015%2021H9C7.34315%2021%206%2019.6569%206%2018V7Z'%20stroke='%23ffffff'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M9%205C9%203.89543%209.89543%203%2011%203H13C14.1046%203%2015%203.89543%2015%205V7H9V5Z'%20stroke='%23ffffff'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3c/svg%3e", Io = "data:image/svg+xml,%3csvg%20class='svg-icon'%20style='width:%201em;%20height:%201em;vertical-align:%20middle;fill:%20white;overflow:%20hidden;'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M810.65984%20170.65984q18.3296%200%2030.49472%2012.16512t12.16512%2030.49472q0%2018.00192-12.32896%2030.33088l-268.67712%20268.32896%20268.67712%20268.32896q12.32896%2012.32896%2012.32896%2030.33088%200%2018.3296-12.16512%2030.49472t-30.49472%2012.16512q-18.00192%200-30.33088-12.32896l-268.32896-268.67712-268.32896%20268.67712q-12.32896%2012.32896-30.33088%2012.32896-18.3296%200-30.49472-12.16512t-12.16512-30.49472q0-18.00192%2012.32896-30.33088l268.67712-268.32896-268.67712-268.32896q-12.32896-12.32896-12.32896-30.33088%200-18.3296%2012.16512-30.49472t30.49472-12.16512q18.00192%200%2030.33088%2012.32896l268.32896%20268.67712%20268.32896-268.67712q12.32896-12.32896%2030.33088-12.32896z'%20/%3e%3c/svg%3e", lc = ({
  title: e,
  content: t,
  actionText: r,
  close: n,
  action: i,
  className: o
}) => {
  const s = Ye(null);
  return dr(s, () => {
    n(!1);
  }), /* @__PURE__ */ M.jsx("div", { className: "backdrop-brightness-50 absolute top-0 z-50 flex w-full h-full justify-center items-start pt-6 select-none", children: /* @__PURE__ */ M.jsxs(
    "div",
    {
      ref: s,
      className: `bg-dark-hover border border-slate-600 shadow-sm p-4 rounded-lg flex flex-col my-2 h-fit w-96 text-white ${o}`,
      children: [
        /* @__PURE__ */ M.jsxs("div", { className: "flex flex-row justify-between", children: [
          /* @__PURE__ */ M.jsx("span", { className: "text-2xl font-semibold", children: e }),
          /* @__PURE__ */ M.jsx("span", { className: "self-start", children: /* @__PURE__ */ M.jsx(
            "img",
            {
              src: Io,
              onClick: () => {
                n(!1);
              },
              alt: "close",
              className: "transition-colors p-1 h-5 w-5 cursor-pointer hover:bg-slate-500 rounded-md align-baseline"
            }
          ) })
        ] }),
        /* @__PURE__ */ M.jsx("div", { className: "text-sm my-4", children: t }),
        /* @__PURE__ */ M.jsxs("div", { className: "flex justify-between my-2", children: [
          /* @__PURE__ */ M.jsx("div", { className: "w-32", children: " " }),
          /* @__PURE__ */ M.jsxs("div", { className: "flex justify-between pl-12 w-full", children: [
            /* @__PURE__ */ M.jsx(
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
            /* @__PURE__ */ M.jsxs(
              "button",
              {
                type: "button",
                onClick: () => {
                  i();
                },
                className: "text-sm bg-red-700 hover:bg-red-500 px-2 py-1 rounded-lg transition-colors flex flex-row items-center",
                children: [
                  /* @__PURE__ */ M.jsx(
                    "img",
                    {
                      alt: "delete",
                      src: ac,
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
}, cc = (e, t) => {
  const r = document.createElement("div");
  return Ne(() => {
    if (t)
      return t.prepend(r), () => {
        t.removeChild(r);
      };
  }, [t, r]), Rr(e, r);
}, jo = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23000'%20height='800px'%20width='800px'%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20330%20330'%20xml:space='preserve'%3e%3cpath%20id='XMLID_92_'%20d='M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001%20l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996%20C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z'/%3e%3c/svg%3e", uc = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%20fill='%23000'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9.5%201.1l3.4%203.5.1.4v2h-1V6H8V2H3v11h4v1H2.5l-.5-.5v-12l.5-.5h6.7l.3.1zM9%202v3h2.9L9%202zm4%2014h-1v-3H9v-1h3V9h1v3h3v1h-3v3z'/%3e%3c/svg%3e", dc = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%20fill='%23000'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14.5%202H7.71l-.85-.85L6.51%201h-5l-.5.5v11l.5.5H7v-1H1.99V6h4.49l.35-.15.86-.86H14v1.5l-.001.51h1.011V2.5L14.5%202zm-.51%202h-6.5l-.35.15-.86.86H2v-3h4.29l.85.85.36.15H14l-.01.99zM13%2016h-1v-3H9v-1h3V9h1v3h3v1h-3v3z'/%3e%3c/svg%3e", fc = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.5535%2016.5061C12.4114%2016.6615%2012.2106%2016.75%2012%2016.75C11.7894%2016.75%2011.5886%2016.6615%2011.4465%2016.5061L7.44648%2012.1311C7.16698%2011.8254%207.18822%2011.351%207.49392%2011.0715C7.79963%2010.792%208.27402%2010.8132%208.55352%2011.1189L11.25%2014.0682V3C11.25%202.58579%2011.5858%202.25%2012%202.25C12.4142%202.25%2012.75%202.58579%2012.75%203V14.0682L15.4465%2011.1189C15.726%2010.8132%2016.2004%2010.792%2016.5061%2011.0715C16.8118%2011.351%2016.833%2011.8254%2016.5535%2012.1311L12.5535%2016.5061Z'%20fill='%23000'/%3e%3cpath%20d='M3.75%2015C3.75%2014.5858%203.41422%2014.25%203%2014.25C2.58579%2014.25%202.25%2014.5858%202.25%2015V15.0549C2.24998%2016.4225%202.24996%2017.5248%202.36652%2018.3918C2.48754%2019.2919%202.74643%2020.0497%203.34835%2020.6516C3.95027%2021.2536%204.70814%2021.5125%205.60825%2021.6335C6.47522%2021.75%207.57754%2021.75%208.94513%2021.75H15.0549C16.4225%2021.75%2017.5248%2021.75%2018.3918%2021.6335C19.2919%2021.5125%2020.0497%2021.2536%2020.6517%2020.6516C21.2536%2020.0497%2021.5125%2019.2919%2021.6335%2018.3918C21.75%2017.5248%2021.75%2016.4225%2021.75%2015.0549V15C21.75%2014.5858%2021.4142%2014.25%2021%2014.25C20.5858%2014.25%2020.25%2014.5858%2020.25%2015C20.25%2016.4354%2020.2484%2017.4365%2020.1469%2018.1919C20.0482%2018.9257%2019.8678%2019.3142%2019.591%2019.591C19.3142%2019.8678%2018.9257%2020.0482%2018.1919%2020.1469C17.4365%2020.2484%2016.4354%2020.25%2015%2020.25H9C7.56459%2020.25%206.56347%2020.2484%205.80812%2020.1469C5.07435%2020.0482%204.68577%2019.8678%204.40901%2019.591C4.13225%2019.3142%203.9518%2018.9257%203.85315%2018.1919C3.75159%2017.4365%203.75%2016.4354%203.75%2015Z'%20fill='%23000'/%3e%3c/svg%3e", Jt = Math.min, Ut = Math.max, Dr = Math.round, kr = Math.floor, Ft = (e) => ({
  x: e,
  y: e
}), hc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, pc = {
  start: "end",
  end: "start"
};
function Sn(e, t, r) {
  return Ut(e, Jt(t, r));
}
function fr(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Wt(e) {
  return e.split("-")[0];
}
function hr(e) {
  return e.split("-")[1];
}
function Fo(e) {
  return e === "x" ? "y" : "x";
}
function Bn(e) {
  return e === "y" ? "height" : "width";
}
function Hr(e) {
  return ["top", "bottom"].includes(Wt(e)) ? "y" : "x";
}
function Un(e) {
  return Fo(Hr(e));
}
function mc(e, t, r) {
  r === void 0 && (r = !1);
  const n = hr(e), i = Un(e), o = Bn(i);
  let s = i === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (s = Pr(s)), [s, Pr(s)];
}
function yc(e) {
  const t = Pr(e);
  return [En(e), t, En(t)];
}
function En(e) {
  return e.replace(/start|end/g, (t) => pc[t]);
}
function gc(e, t, r) {
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
function vc(e, t, r, n) {
  const i = hr(e);
  let o = gc(Wt(e), r === "start", n);
  return i && (o = o.map((s) => s + "-" + i), t && (o = o.concat(o.map(En)))), o;
}
function Pr(e) {
  return e.replace(/left|right|bottom|top/g, (t) => hc[t]);
}
function bc(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function zo(e) {
  return typeof e != "number" ? bc(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Lr(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function zi(e, t, r) {
  let {
    reference: n,
    floating: i
  } = e;
  const o = Hr(t), s = Un(t), a = Bn(s), l = Wt(t), c = o === "y", u = n.x + n.width / 2 - i.width / 2, f = n.y + n.height / 2 - i.height / 2, v = n[a] / 2 - i[a] / 2;
  let d;
  switch (l) {
    case "top":
      d = {
        x: u,
        y: n.y - i.height
      };
      break;
    case "bottom":
      d = {
        x: u,
        y: n.y + n.height
      };
      break;
    case "right":
      d = {
        x: n.x + n.width,
        y: f
      };
      break;
    case "left":
      d = {
        x: n.x - i.width,
        y: f
      };
      break;
    default:
      d = {
        x: n.x,
        y: n.y
      };
  }
  switch (hr(t)) {
    case "start":
      d[s] -= v * (r && c ? -1 : 1);
      break;
    case "end":
      d[s] += v * (r && c ? -1 : 1);
      break;
  }
  return d;
}
const wc = async (e, t, r) => {
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
    x: u,
    y: f
  } = zi(c, n, l), v = n, d = {}, b = 0;
  for (let h = 0; h < a.length; h++) {
    const {
      name: g,
      fn: m
    } = a[h], {
      x: w,
      y: S,
      data: E,
      reset: k
    } = await m({
      x: u,
      y: f,
      initialPlacement: n,
      placement: v,
      strategy: i,
      middlewareData: d,
      rects: c,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (u = w ?? u, f = S ?? f, d = {
      ...d,
      [g]: {
        ...d[g],
        ...E
      }
    }, k && b <= 50) {
      b++, typeof k == "object" && (k.placement && (v = k.placement), k.rects && (c = k.rects === !0 ? await s.getElementRects({
        reference: e,
        floating: t,
        strategy: i
      }) : k.rects), {
        x: u,
        y: f
      } = zi(c, v, l)), h = -1;
      continue;
    }
  }
  return {
    x: u,
    y: f,
    placement: v,
    strategy: i,
    middlewareData: d
  };
};
async function Do(e, t) {
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
    rootBoundary: u = "viewport",
    elementContext: f = "floating",
    altBoundary: v = !1,
    padding: d = 0
  } = fr(t, e), b = zo(d), g = a[v ? f === "floating" ? "reference" : "floating" : f], m = Lr(await o.getClippingRect({
    element: (r = await (o.isElement == null ? void 0 : o.isElement(g))) == null || r ? g : g.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: u,
    strategy: l
  })), w = f === "floating" ? {
    ...s.floating,
    x: n,
    y: i
  } : s.reference, S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(a.floating)), E = await (o.isElement == null ? void 0 : o.isElement(S)) ? await (o.getScale == null ? void 0 : o.getScale(S)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, k = Lr(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: w,
    offsetParent: S,
    strategy: l
  }) : w);
  return {
    top: (m.top - k.top + b.top) / E.y,
    bottom: (k.bottom - m.bottom + b.bottom) / E.y,
    left: (m.left - k.left + b.left) / E.x,
    right: (k.right - m.right + b.right) / E.x
  };
}
const _c = (e) => ({
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
      padding: u = 0
    } = fr(e, t) || {};
    if (c == null)
      return {};
    const f = zo(u), v = {
      x: r,
      y: n
    }, d = Un(i), b = Bn(d), h = await s.getDimensions(c), g = d === "y", m = g ? "top" : "left", w = g ? "bottom" : "right", S = g ? "clientHeight" : "clientWidth", E = o.reference[b] + o.reference[d] - v[d] - o.floating[b], k = v[d] - o.reference[d], R = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let T = R ? R[S] : 0;
    (!T || !await (s.isElement == null ? void 0 : s.isElement(R))) && (T = a.floating[S] || o.floating[b]);
    const U = E / 2 - k / 2, D = T / 2 - h[b] / 2 - 1, K = Jt(f[m], D), q = Jt(f[w], D), A = K, I = T - h[b] - q, y = T / 2 - h[b] / 2 + U, z = Sn(A, y, I), ie = !l.arrow && hr(i) != null && y != z && o.reference[b] / 2 - (y < A ? K : q) - h[b] / 2 < 0, W = ie ? y < A ? y - A : y - I : 0;
    return {
      [d]: v[d] + W,
      data: {
        [d]: z,
        centerOffset: y - z - W,
        ...ie && {
          alignmentOffset: W
        }
      },
      reset: ie
    };
  }
}), xc = function(e) {
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
        mainAxis: u = !0,
        crossAxis: f = !0,
        fallbackPlacements: v,
        fallbackStrategy: d = "bestFit",
        fallbackAxisSideDirection: b = "none",
        flipAlignment: h = !0,
        ...g
      } = fr(e, t);
      if ((r = o.arrow) != null && r.alignmentOffset)
        return {};
      const m = Wt(i), w = Wt(a) === a, S = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), E = v || (w || !h ? [Pr(a)] : yc(a));
      !v && b !== "none" && E.push(...vc(a, h, b, S));
      const k = [a, ...E], R = await Do(t, g), T = [];
      let U = ((n = o.flip) == null ? void 0 : n.overflows) || [];
      if (u && T.push(R[m]), f) {
        const A = mc(i, s, S);
        T.push(R[A[0]], R[A[1]]);
      }
      if (U = [...U, {
        placement: i,
        overflows: T
      }], !T.every((A) => A <= 0)) {
        var D, K;
        const A = (((D = o.flip) == null ? void 0 : D.index) || 0) + 1, I = k[A];
        if (I)
          return {
            data: {
              index: A,
              overflows: U
            },
            reset: {
              placement: I
            }
          };
        let y = (K = U.filter((z) => z.overflows[0] <= 0).sort((z, ie) => z.overflows[1] - ie.overflows[1])[0]) == null ? void 0 : K.placement;
        if (!y)
          switch (d) {
            case "bestFit": {
              var q;
              const z = (q = U.map((ie) => [ie.placement, ie.overflows.filter((W) => W > 0).reduce((W, ae) => W + ae, 0)]).sort((ie, W) => ie[1] - W[1])[0]) == null ? void 0 : q[0];
              z && (y = z);
              break;
            }
            case "initialPlacement":
              y = a;
              break;
          }
        if (i !== y)
          return {
            reset: {
              placement: y
            }
          };
      }
      return {};
    }
  };
};
async function Sc(e, t) {
  const {
    placement: r,
    platform: n,
    elements: i
  } = e, o = await (n.isRTL == null ? void 0 : n.isRTL(i.floating)), s = Wt(r), a = hr(r), l = Hr(r) === "y", c = ["left", "top"].includes(s) ? -1 : 1, u = o && l ? -1 : 1, f = fr(t, e);
  let {
    mainAxis: v,
    crossAxis: d,
    alignmentAxis: b
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...f
  };
  return a && typeof b == "number" && (d = a === "end" ? b * -1 : b), l ? {
    x: d * u,
    y: v * c
  } : {
    x: v * c,
    y: d * u
  };
}
const Ec = function(e) {
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
      } = t, l = await Sc(t, e);
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
}, kc = function(e) {
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
          fn: (g) => {
            let {
              x: m,
              y: w
            } = g;
            return {
              x: m,
              y: w
            };
          }
        },
        ...l
      } = fr(e, t), c = {
        x: r,
        y: n
      }, u = await Do(t, l), f = Hr(Wt(i)), v = Fo(f);
      let d = c[v], b = c[f];
      if (o) {
        const g = v === "y" ? "top" : "left", m = v === "y" ? "bottom" : "right", w = d + u[g], S = d - u[m];
        d = Sn(w, d, S);
      }
      if (s) {
        const g = f === "y" ? "top" : "left", m = f === "y" ? "bottom" : "right", w = b + u[g], S = b - u[m];
        b = Sn(w, b, S);
      }
      const h = a.fn({
        ...t,
        [v]: d,
        [f]: b
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
function zt(e) {
  return Po(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function yt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function At(e) {
  var t;
  return (t = (Po(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Po(e) {
  return e instanceof Node || e instanceof yt(e).Node;
}
function Ot(e) {
  return e instanceof Element || e instanceof yt(e).Element;
}
function Et(e) {
  return e instanceof HTMLElement || e instanceof yt(e).HTMLElement;
}
function Di(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof yt(e).ShadowRoot;
}
function pr(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: n,
    display: i
  } = _t(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !["inline", "contents"].includes(i);
}
function Cc(e) {
  return ["table", "td", "th"].includes(zt(e));
}
function Vn(e) {
  const t = Wn(), r = _t(e);
  return r.transform !== "none" || r.perspective !== "none" || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (r.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (r.contain || "").includes(n));
}
function Oc(e) {
  let t = Qt(e);
  for (; Et(t) && !Zr(t); ) {
    if (Vn(t))
      return t;
    t = Qt(t);
  }
  return null;
}
function Wn() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Zr(e) {
  return ["html", "body", "#document"].includes(zt(e));
}
function _t(e) {
  return yt(e).getComputedStyle(e);
}
function Gr(e) {
  return Ot(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function Qt(e) {
  if (zt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Di(e) && e.host || // Fallback.
    At(e)
  );
  return Di(t) ? t.host : t;
}
function Lo(e) {
  const t = Qt(e);
  return Zr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Et(t) && pr(t) ? t : Lo(t);
}
function lr(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const i = Lo(e), o = i === ((n = e.ownerDocument) == null ? void 0 : n.body), s = yt(i);
  return o ? t.concat(s, s.visualViewport || [], pr(i) ? i : [], s.frameElement && r ? lr(s.frameElement) : []) : t.concat(i, lr(i, [], r));
}
function $o(e) {
  const t = _t(e);
  let r = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const i = Et(e), o = i ? e.offsetWidth : r, s = i ? e.offsetHeight : n, a = Dr(r) !== o || Dr(n) !== s;
  return a && (r = o, n = s), {
    width: r,
    height: n,
    $: a
  };
}
function Hn(e) {
  return Ot(e) ? e : e.contextElement;
}
function qt(e) {
  const t = Hn(e);
  if (!Et(t))
    return Ft(1);
  const r = t.getBoundingClientRect(), {
    width: n,
    height: i,
    $: o
  } = $o(t);
  let s = (o ? Dr(r.width) : r.width) / n, a = (o ? Dr(r.height) : r.height) / i;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const Ac = /* @__PURE__ */ Ft(0);
function Mo(e) {
  const t = yt(e);
  return !Wn() || !t.visualViewport ? Ac : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Nc(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== yt(e) ? !1 : t;
}
function Ht(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const i = e.getBoundingClientRect(), o = Hn(e);
  let s = Ft(1);
  t && (n ? Ot(n) && (s = qt(n)) : s = qt(e));
  const a = Nc(o, r, n) ? Mo(o) : Ft(0);
  let l = (i.left + a.x) / s.x, c = (i.top + a.y) / s.y, u = i.width / s.x, f = i.height / s.y;
  if (o) {
    const v = yt(o), d = n && Ot(n) ? yt(n) : n;
    let b = v.frameElement;
    for (; b && n && d !== v; ) {
      const h = qt(b), g = b.getBoundingClientRect(), m = _t(b), w = g.left + (b.clientLeft + parseFloat(m.paddingLeft)) * h.x, S = g.top + (b.clientTop + parseFloat(m.paddingTop)) * h.y;
      l *= h.x, c *= h.y, u *= h.x, f *= h.y, l += w, c += S, b = yt(b).frameElement;
    }
  }
  return Lr({
    width: u,
    height: f,
    x: l,
    y: c
  });
}
function Tc(e) {
  let {
    rect: t,
    offsetParent: r,
    strategy: n
  } = e;
  const i = Et(r), o = At(r);
  if (r === o)
    return t;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = Ft(1);
  const l = Ft(0);
  if ((i || !i && n !== "fixed") && ((zt(r) !== "body" || pr(o)) && (s = Gr(r)), Et(r))) {
    const c = Ht(r);
    a = qt(r), l.x = c.x + r.clientLeft, l.y = c.y + r.clientTop;
  }
  return {
    width: t.width * a.x,
    height: t.height * a.y,
    x: t.x * a.x - s.scrollLeft * a.x + l.x,
    y: t.y * a.y - s.scrollTop * a.y + l.y
  };
}
function Rc(e) {
  return Array.from(e.getClientRects());
}
function Bo(e) {
  return Ht(At(e)).left + Gr(e).scrollLeft;
}
function Ic(e) {
  const t = At(e), r = Gr(e), n = e.ownerDocument.body, i = Ut(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), o = Ut(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let s = -r.scrollLeft + Bo(e);
  const a = -r.scrollTop;
  return _t(n).direction === "rtl" && (s += Ut(t.clientWidth, n.clientWidth) - i), {
    width: i,
    height: o,
    x: s,
    y: a
  };
}
function jc(e, t) {
  const r = yt(e), n = At(e), i = r.visualViewport;
  let o = n.clientWidth, s = n.clientHeight, a = 0, l = 0;
  if (i) {
    o = i.width, s = i.height;
    const c = Wn();
    (!c || c && t === "fixed") && (a = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: o,
    height: s,
    x: a,
    y: l
  };
}
function Fc(e, t) {
  const r = Ht(e, !0, t === "fixed"), n = r.top + e.clientTop, i = r.left + e.clientLeft, o = Et(e) ? qt(e) : Ft(1), s = e.clientWidth * o.x, a = e.clientHeight * o.y, l = i * o.x, c = n * o.y;
  return {
    width: s,
    height: a,
    x: l,
    y: c
  };
}
function Pi(e, t, r) {
  let n;
  if (t === "viewport")
    n = jc(e, r);
  else if (t === "document")
    n = Ic(At(e));
  else if (Ot(t))
    n = Fc(t, r);
  else {
    const i = Mo(e);
    n = {
      ...t,
      x: t.x - i.x,
      y: t.y - i.y
    };
  }
  return Lr(n);
}
function Uo(e, t) {
  const r = Qt(e);
  return r === t || !Ot(r) || Zr(r) ? !1 : _t(r).position === "fixed" || Uo(r, t);
}
function zc(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let n = lr(e, [], !1).filter((a) => Ot(a) && zt(a) !== "body"), i = null;
  const o = _t(e).position === "fixed";
  let s = o ? Qt(e) : e;
  for (; Ot(s) && !Zr(s); ) {
    const a = _t(s), l = Vn(s);
    !l && a.position === "fixed" && (i = null), (o ? !l && !i : !l && a.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || pr(s) && !l && Uo(e, s)) ? n = n.filter((u) => u !== s) : i = a, s = Qt(s);
  }
  return t.set(e, n), n;
}
function Dc(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: n,
    strategy: i
  } = e;
  const s = [...r === "clippingAncestors" ? zc(t, this._c) : [].concat(r), n], a = s[0], l = s.reduce((c, u) => {
    const f = Pi(t, u, i);
    return c.top = Ut(f.top, c.top), c.right = Jt(f.right, c.right), c.bottom = Jt(f.bottom, c.bottom), c.left = Ut(f.left, c.left), c;
  }, Pi(t, a, i));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Pc(e) {
  return $o(e);
}
function Lc(e, t, r) {
  const n = Et(t), i = At(t), o = r === "fixed", s = Ht(e, !0, o, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Ft(0);
  if (n || !n && !o)
    if ((zt(t) !== "body" || pr(i)) && (a = Gr(t)), n) {
      const c = Ht(t, !0, o, t);
      l.x = c.x + t.clientLeft, l.y = c.y + t.clientTop;
    } else
      i && (l.x = Bo(i));
  return {
    x: s.left + a.scrollLeft - l.x,
    y: s.top + a.scrollTop - l.y,
    width: s.width,
    height: s.height
  };
}
function Li(e, t) {
  return !Et(e) || _t(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Vo(e, t) {
  const r = yt(e);
  if (!Et(e))
    return r;
  let n = Li(e, t);
  for (; n && Cc(n) && _t(n).position === "static"; )
    n = Li(n, t);
  return n && (zt(n) === "html" || zt(n) === "body" && _t(n).position === "static" && !Vn(n)) ? r : n || Oc(e) || r;
}
const $c = async function(e) {
  let {
    reference: t,
    floating: r,
    strategy: n
  } = e;
  const i = this.getOffsetParent || Vo, o = this.getDimensions;
  return {
    reference: Lc(t, await i(r), n),
    floating: {
      x: 0,
      y: 0,
      ...await o(r)
    }
  };
};
function Mc(e) {
  return _t(e).direction === "rtl";
}
const Bc = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Tc,
  getDocumentElement: At,
  getClippingRect: Dc,
  getOffsetParent: Vo,
  getElementRects: $c,
  getClientRects: Rc,
  getDimensions: Pc,
  getScale: qt,
  isElement: Ot,
  isRTL: Mc
};
function Uc(e, t) {
  let r = null, n;
  const i = At(e);
  function o() {
    clearTimeout(n), r && r.disconnect(), r = null;
  }
  function s(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), o();
    const {
      left: c,
      top: u,
      width: f,
      height: v
    } = e.getBoundingClientRect();
    if (a || t(), !f || !v)
      return;
    const d = kr(u), b = kr(i.clientWidth - (c + f)), h = kr(i.clientHeight - (u + v)), g = kr(c), w = {
      rootMargin: -d + "px " + -b + "px " + -h + "px " + -g + "px",
      threshold: Ut(0, Jt(1, l)) || 1
    };
    let S = !0;
    function E(k) {
      const R = k[0].intersectionRatio;
      if (R !== l) {
        if (!S)
          return s();
        R ? s(!1, R) : n = setTimeout(() => {
          s(!1, 1e-7);
        }, 100);
      }
      S = !1;
    }
    try {
      r = new IntersectionObserver(E, {
        ...w,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(E, w);
    }
    r.observe(e);
  }
  return s(!0), o;
}
function Vc(e, t, r, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: o = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = n, c = Hn(e), u = i || o ? [...c ? lr(c) : [], ...lr(t)] : [];
  u.forEach((m) => {
    i && m.addEventListener("scroll", r, {
      passive: !0
    }), o && m.addEventListener("resize", r);
  });
  const f = c && a ? Uc(c, r) : null;
  let v = -1, d = null;
  s && (d = new ResizeObserver((m) => {
    let [w] = m;
    w && w.target === c && d && (d.unobserve(t), cancelAnimationFrame(v), v = requestAnimationFrame(() => {
      d && d.observe(t);
    })), r();
  }), c && !l && d.observe(c), d.observe(t));
  let b, h = l ? Ht(e) : null;
  l && g();
  function g() {
    const m = Ht(e);
    h && (m.x !== h.x || m.y !== h.y || m.width !== h.width || m.height !== h.height) && r(), h = m, b = requestAnimationFrame(g);
  }
  return r(), () => {
    u.forEach((m) => {
      i && m.removeEventListener("scroll", r), o && m.removeEventListener("resize", r);
    }), f && f(), d && d.disconnect(), d = null, l && cancelAnimationFrame(b);
  };
}
const $i = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), i = {
    platform: Bc,
    ...r
  }, o = {
    ...i.platform,
    _c: n
  };
  return wc(e, t, {
    ...i,
    platform: o
  });
};
var Wo = { exports: {} };
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
})(Wo);
var Wc = Wo.exports;
const kn = /* @__PURE__ */ Nn(Wc);
/*
* React Tooltip
* {@link https://github.com/ReactTooltip/react-tooltip}
* @copyright ReactTooltip Team
* @license MIT
*/
const Hc = "react-tooltip-core-styles", Zc = "react-tooltip-base-styles", Mi = { core: !1, base: !1 };
function Bi({ css: e, id: t = Zc, type: r = "base", ref: n }) {
  var i, o;
  if (!e || typeof document > "u" || Mi[r] || r === "core" && typeof process < "u" && (!((i = process == null ? void 0 : process.env) === null || i === void 0) && i.REACT_TOOLTIP_DISABLE_CORE_STYLES) || r !== "base" && typeof process < "u" && (!((o = process == null ? void 0 : process.env) === null || o === void 0) && o.REACT_TOOLTIP_DISABLE_BASE_STYLES))
    return;
  r === "core" && (t = Hc), n || (n = {});
  const { insertAt: s } = n;
  if (document.getElementById(t))
    return void console.warn(`[react-tooltip] Element with id '${t}' already exists. Call \`removeStyle()\` first`);
  const a = document.head || document.getElementsByTagName("head")[0], l = document.createElement("style");
  l.id = t, l.type = "text/css", s === "top" && a.firstChild ? a.insertBefore(l, a.firstChild) : a.appendChild(l), l.styleSheet ? l.styleSheet.cssText = e : l.appendChild(document.createTextNode(e)), Mi[r] = !0;
}
const Ui = (e, t, r) => {
  let n = null;
  return function(...i) {
    const o = () => {
      n = null, r || e.apply(this, i);
    };
    r && !n && (e.apply(this, i), n = setTimeout(o, t)), r || (n && clearTimeout(n), n = setTimeout(o, t));
  };
}, Gc = "DEFAULT_TOOLTIP_ID", Kc = { anchorRefs: /* @__PURE__ */ new Set(), activeAnchor: { current: null }, attach: () => {
}, detach: () => {
}, setActiveAnchor: () => {
} }, Yc = Bs({ getTooltipData: () => Kc });
function Ho(e = Gc) {
  return Us(Yc).getTooltipData(e);
}
const qc = typeof window < "u" ? Hs : Ne, Xc = (e) => {
  if (!(e instanceof HTMLElement || e instanceof SVGElement))
    return !1;
  const t = getComputedStyle(e);
  return ["overflow", "overflow-x", "overflow-y"].some((r) => {
    const n = t.getPropertyValue(r);
    return n === "auto" || n === "scroll";
  });
}, Vi = (e) => {
  if (!e)
    return null;
  let t = e.parentElement;
  for (; t; ) {
    if (Xc(t))
      return t;
    t = t.parentElement;
  }
  return document.scrollingElement || document.documentElement;
}, Wi = async ({ elementReference: e = null, tooltipReference: t = null, tooltipArrowReference: r = null, place: n = "top", offset: i = 10, strategy: o = "absolute", middlewares: s = [Ec(Number(i)), xc(), kc({ padding: 5 })], border: a }) => {
  if (!e)
    return { tooltipStyles: {}, tooltipArrowStyles: {}, place: n };
  if (t === null)
    return { tooltipStyles: {}, tooltipArrowStyles: {}, place: n };
  const l = s;
  return r ? (l.push(_c({ element: r, padding: 5 })), $i(e, t, { placement: n, strategy: o, middleware: l }).then(({ x: c, y: u, placement: f, middlewareData: v }) => {
    var d, b;
    const h = { left: `${c}px`, top: `${u}px`, border: a }, { x: g, y: m } = (d = v.arrow) !== null && d !== void 0 ? d : { x: 0, y: 0 }, w = (b = { top: "bottom", right: "left", bottom: "top", left: "right" }[f.split("-")[0]]) !== null && b !== void 0 ? b : "bottom", S = a && { borderBottom: a, borderRight: a };
    let E = 0;
    if (a) {
      const k = `${a}`.match(/(\d+)px/);
      E = k != null && k[1] ? Number(k[1]) : 1;
    }
    return { tooltipStyles: h, tooltipArrowStyles: { left: g != null ? `${g}px` : "", top: m != null ? `${m}px` : "", right: "", bottom: "", ...S, [w]: `-${4 + E}px` }, place: f };
  })) : $i(e, t, { placement: "bottom", strategy: o, middleware: l }).then(({ x: c, y: u, placement: f }) => ({ tooltipStyles: { left: `${c}px`, top: `${u}px` }, tooltipArrowStyles: {}, place: f }));
};
var Yt = { tooltip: "core-styles-module_tooltip__3vRRp", fixed: "core-styles-module_fixed__pcSol", arrow: "core-styles-module_arrow__cvMwQ", noArrow: "core-styles-module_noArrow__xock6", clickable: "core-styles-module_clickable__ZuTTB", show: "core-styles-module_show__Nt9eE", closing: "core-styles-module_closing__sGnxF" }, cn = { tooltip: "styles-module_tooltip__mnnfp", arrow: "styles-module_arrow__K0L3T", dark: "styles-module_dark__xNqje", light: "styles-module_light__Z6W-X", success: "styles-module_success__A2AKt", warning: "styles-module_warning__SCK0X", error: "styles-module_error__JvumD", info: "styles-module_info__BWdHW" };
const Jc = ({ forwardRef: e, id: t, className: r, classNameArrow: n, variant: i = "dark", anchorId: o, anchorSelect: s, place: a = "top", offset: l = 10, events: c = ["hover"], openOnClick: u = !1, positionStrategy: f = "absolute", middlewares: v, wrapper: d, delayShow: b = 0, delayHide: h = 0, float: g = !1, hidden: m = !1, noArrow: w = !1, clickable: S = !1, closeOnEsc: E = !1, closeOnScroll: k = !1, closeOnResize: R = !1, openEvents: T, closeEvents: U, globalCloseEvents: D, imperativeModeOnly: K, style: q, position: A, afterShow: I, afterHide: y, content: z, contentWrapperRef: ie, isOpen: W, setIsOpen: ae, activeAnchor: H, setActiveAnchor: ee, border: L, opacity: P, arrowColor: le, role: ne = "tooltip" }) => {
  var Q;
  const we = Ye(null), Re = Ye(null), pe = Ye(null), me = Ye(null), [Ie, Oe] = Se(a), [Ge, $e] = Se({}), [p, V] = Se({}), [j, C] = Se(!1), [x, N] = Se(!1), [B, Z] = Se(null), F = Ye(!1), X = Ye(null), { anchorRefs: te, setActiveAnchor: J } = Ho(t), ce = Ye(!1), [ye, ve] = Se([]), je = Ye(!1), qe = u || c.includes("click"), Me = qe || (T == null ? void 0 : T.click) || (T == null ? void 0 : T.dblclick) || (T == null ? void 0 : T.mousedown), He = T ? { ...T } : { mouseenter: !0, focus: !0, click: !1, dblclick: !1, mousedown: !1 };
  !T && qe && Object.assign(He, { mouseenter: !1, focus: !1, click: !0 });
  const Te = U ? { ...U } : { mouseleave: !0, blur: !0, click: !1, dblclick: !1, mouseup: !1 };
  !U && qe && Object.assign(Te, { mouseleave: !1, blur: !1 });
  const Be = D ? { ...D } : { escape: E || !1, scroll: k || !1, resize: R || !1, clickOutsideAnchor: Me || !1 };
  K && (Object.assign(He, { mouseenter: !1, focus: !1, click: !1, dblclick: !1, mousedown: !1 }), Object.assign(Te, { mouseleave: !1, blur: !1, click: !1, dblclick: !1, mouseup: !1 }), Object.assign(Be, { escape: !1, scroll: !1, resize: !1, clickOutsideAnchor: !1 })), qc(() => (je.current = !0, () => {
    je.current = !1;
  }), []);
  const ze = (ue) => {
    je.current && (ue && N(!0), setTimeout(() => {
      je.current && (ae == null || ae(ue), W === void 0 && C(ue));
    }, 10));
  };
  Ne(() => {
    if (W === void 0)
      return () => null;
    W && N(!0);
    const ue = setTimeout(() => {
      C(W);
    }, 10);
    return () => {
      clearTimeout(ue);
    };
  }, [W]), Ne(() => {
    j !== F.current && (F.current = j, j && (I == null || I()));
  }, [j]);
  const Ue = (ue = b) => {
    pe.current && clearTimeout(pe.current), pe.current = setTimeout(() => {
      ze(!0);
    }, ue);
  }, rt = (ue = h) => {
    me.current && clearTimeout(me.current), me.current = setTimeout(() => {
      ce.current || ze(!1);
    }, ue);
  }, nt = (ue) => {
    var _e;
    if (!ue)
      return;
    const be = (_e = ue.currentTarget) !== null && _e !== void 0 ? _e : ue.target;
    if (!(be != null && be.isConnected))
      return ee(null), void J({ current: null });
    b ? Ue() : ze(!0), ee(be), J({ current: be }), me.current && clearTimeout(me.current);
  }, Xe = () => {
    S ? rt(h || 100) : h ? rt() : ze(!1), pe.current && clearTimeout(pe.current);
  }, et = ({ x: ue, y: _e }) => {
    var be;
    const Ve = { getBoundingClientRect: () => ({ x: ue, y: _e, width: 0, height: 0, top: _e, left: ue, right: ue, bottom: _e }) };
    Wi({ place: (be = B == null ? void 0 : B.place) !== null && be !== void 0 ? be : a, offset: l, elementReference: Ve, tooltipReference: we.current, tooltipArrowReference: Re.current, strategy: f, middlewares: v, border: L }).then((Ze) => {
      Object.keys(Ze.tooltipStyles).length && $e(Ze.tooltipStyles), Object.keys(Ze.tooltipArrowStyles).length && V(Ze.tooltipArrowStyles), Oe(Ze.place);
    });
  }, re = (ue) => {
    if (!ue)
      return;
    const _e = ue, be = { x: _e.clientX, y: _e.clientY };
    et(be), X.current = be;
  }, oe = (ue) => {
    var _e;
    if (!j)
      return;
    const be = ue.target;
    !((_e = we.current) === null || _e === void 0) && _e.contains(be) || [document.querySelector(`[id='${o}']`), ...ye].some((Ve) => Ve == null ? void 0 : Ve.contains(be)) || (ze(!1), pe.current && clearTimeout(pe.current));
  }, ke = Ui(nt, 50, !0), fe = Ui(Xe, 50, !0), xe = Vs(() => {
    var ue, _e;
    const be = (ue = B == null ? void 0 : B.position) !== null && ue !== void 0 ? ue : A;
    be ? et(be) : g ? X.current && et(X.current) : H != null && H.isConnected && Wi({ place: (_e = B == null ? void 0 : B.place) !== null && _e !== void 0 ? _e : a, offset: l, elementReference: H, tooltipReference: we.current, tooltipArrowReference: Re.current, strategy: f, middlewares: v, border: L }).then((Ve) => {
      je.current && (Object.keys(Ve.tooltipStyles).length && $e(Ve.tooltipStyles), Object.keys(Ve.tooltipArrowStyles).length && V(Ve.tooltipArrowStyles), Oe(Ve.place));
    });
  }, [j, H, z, q, a, B == null ? void 0 : B.place, l, f, A, B == null ? void 0 : B.position, g]);
  Ne(() => {
    var ue, _e;
    const be = new Set(te);
    ye.forEach((he) => {
      be.add({ current: he });
    });
    const Ve = document.querySelector(`[id='${o}']`);
    Ve && be.add({ current: Ve });
    const Ze = () => {
      ze(!1);
    }, ct = Vi(H), ft = Vi(we.current);
    Be.scroll && (window.addEventListener("scroll", Ze), ct == null || ct.addEventListener("scroll", Ze), ft == null || ft.addEventListener("scroll", Ze));
    let it = null;
    Be.resize ? window.addEventListener("resize", Ze) : H && we.current && (it = Vc(H, we.current, xe, { ancestorResize: !0, elementResize: !0, layoutShift: !0 }));
    const We = (he) => {
      he.key === "Escape" && ze(!1);
    };
    Be.escape && window.addEventListener("keydown", We), Be.clickOutsideAnchor && window.addEventListener("click", oe);
    const O = [], Y = (he) => {
      j || nt(he);
    }, se = () => {
      j && Xe();
    }, ge = ["mouseenter", "mouseleave", "focus", "blur"], Ae = ["click", "dblclick", "mousedown", "mouseup"];
    Object.entries(He).forEach(([he, De]) => {
      De && (ge.includes(he) ? O.push({ event: he, listener: ke }) : Ae.includes(he) && O.push({ event: he, listener: Y }));
    }), Object.entries(Te).forEach(([he, De]) => {
      De && (ge.includes(he) ? O.push({ event: he, listener: fe }) : Ae.includes(he) && O.push({ event: he, listener: se }));
    }), g && O.push({ event: "mousemove", listener: re });
    const Ce = () => {
      ce.current = !0;
    }, Ee = () => {
      ce.current = !1, Xe();
    };
    return S && !Me && ((ue = we.current) === null || ue === void 0 || ue.addEventListener("mouseenter", Ce), (_e = we.current) === null || _e === void 0 || _e.addEventListener("mouseleave", Ee)), O.forEach(({ event: he, listener: De }) => {
      be.forEach((Pe) => {
        var Fe;
        (Fe = Pe.current) === null || Fe === void 0 || Fe.addEventListener(he, De);
      });
    }), () => {
      var he, De;
      Be.scroll && (window.removeEventListener("scroll", Ze), ct == null || ct.removeEventListener("scroll", Ze), ft == null || ft.removeEventListener("scroll", Ze)), Be.resize ? window.removeEventListener("resize", Ze) : it == null || it(), Be.clickOutsideAnchor && window.removeEventListener("click", oe), Be.escape && window.removeEventListener("keydown", We), S && !Me && ((he = we.current) === null || he === void 0 || he.removeEventListener("mouseenter", Ce), (De = we.current) === null || De === void 0 || De.removeEventListener("mouseleave", Ee)), O.forEach(({ event: Pe, listener: Fe }) => {
        be.forEach((Qe) => {
          var bt;
          (bt = Qe.current) === null || bt === void 0 || bt.removeEventListener(Pe, Fe);
        });
      });
    };
  }, [H, xe, x, te, ye, T, U, D, qe]), Ne(() => {
    var ue, _e;
    let be = (_e = (ue = B == null ? void 0 : B.anchorSelect) !== null && ue !== void 0 ? ue : s) !== null && _e !== void 0 ? _e : "";
    !be && t && (be = `[data-tooltip-id='${t}']`);
    const Ve = new MutationObserver((Ze) => {
      const ct = [], ft = [];
      Ze.forEach((it) => {
        if (it.type === "attributes" && it.attributeName === "data-tooltip-id" && it.target.getAttribute("data-tooltip-id") === t && ct.push(it.target), it.type === "childList") {
          if (H) {
            const We = [...it.removedNodes].filter((O) => O.nodeType === 1);
            if (be)
              try {
                ft.push(...We.filter((O) => O.matches(be))), ft.push(...We.flatMap((O) => [...O.querySelectorAll(be)]));
              } catch {
              }
            We.some((O) => {
              var Y;
              return !!(!((Y = O == null ? void 0 : O.contains) === null || Y === void 0) && Y.call(O, H)) && (N(!1), ze(!1), ee(null), pe.current && clearTimeout(pe.current), me.current && clearTimeout(me.current), !0);
            });
          }
          if (be)
            try {
              const We = [...it.addedNodes].filter((O) => O.nodeType === 1);
              ct.push(...We.filter((O) => O.matches(be))), ct.push(...We.flatMap((O) => [...O.querySelectorAll(be)]));
            } catch {
            }
        }
      }), (ct.length || ft.length) && ve((it) => [...it.filter((We) => !ft.includes(We)), ...ct]);
    });
    return Ve.observe(document.body, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["data-tooltip-id"] }), () => {
      Ve.disconnect();
    };
  }, [t, s, B == null ? void 0 : B.anchorSelect, H]), Ne(() => {
    xe();
  }, [xe]), Ne(() => {
    if (!(ie != null && ie.current))
      return () => null;
    const ue = new ResizeObserver(() => {
      xe();
    });
    return ue.observe(ie.current), () => {
      ue.disconnect();
    };
  }, [z, ie == null ? void 0 : ie.current]), Ne(() => {
    var ue;
    const _e = document.querySelector(`[id='${o}']`), be = [...ye, _e];
    H && be.includes(H) || ee((ue = ye[0]) !== null && ue !== void 0 ? ue : _e);
  }, [o, ye, H]), Ne(() => () => {
    pe.current && clearTimeout(pe.current), me.current && clearTimeout(me.current);
  }, []), Ne(() => {
    var ue;
    let _e = (ue = B == null ? void 0 : B.anchorSelect) !== null && ue !== void 0 ? ue : s;
    if (!_e && t && (_e = `[data-tooltip-id='${t}']`), _e)
      try {
        const be = Array.from(document.querySelectorAll(_e));
        ve(be);
      } catch {
        ve([]);
      }
  }, [t, s, B == null ? void 0 : B.anchorSelect]);
  const Je = (Q = B == null ? void 0 : B.content) !== null && Q !== void 0 ? Q : z, lt = j && Object.keys(Ge).length > 0;
  return Ws(e, () => ({ open: (ue) => {
    if (ue != null && ue.anchorSelect)
      try {
        document.querySelector(ue.anchorSelect);
      } catch {
        return void console.warn(`[react-tooltip] "${ue.anchorSelect}" is not a valid CSS selector`);
      }
    Z(ue ?? null), ue != null && ue.delay ? Ue(ue.delay) : ze(!0);
  }, close: (ue) => {
    ue != null && ue.delay ? rt(ue.delay) : ze(!1);
  }, activeAnchor: H, place: Ie, isOpen: !!(x && !m && Je && lt) })), x && !m && Je ? pt.createElement(d, { id: t, role: ne, className: kn("react-tooltip", Yt.tooltip, cn.tooltip, cn[i], r, `react-tooltip__place-${Ie}`, Yt[lt ? "show" : "closing"], lt ? "react-tooltip__show" : "react-tooltip__closing", f === "fixed" && Yt.fixed, S && Yt.clickable), onTransitionEnd: (ue) => {
    j || ue.propertyName !== "opacity" || (N(!1), Z(null), y == null || y());
  }, style: { ...q, ...Ge, opacity: P !== void 0 && lt ? P : void 0 }, ref: we }, Je, pt.createElement(d, { className: kn("react-tooltip-arrow", Yt.arrow, cn.arrow, n, w && Yt.noArrow), style: { ...p, background: le ? `linear-gradient(to right bottom, transparent 50%, ${le} 50%)` : void 0 }, ref: Re })) : null;
}, Qc = ({ content: e }) => pt.createElement("span", { dangerouslySetInnerHTML: { __html: e } }), Hi = (e, t) => !("CSS" in window && "supports" in window.CSS) || window.CSS.supports(e, t), un = pt.forwardRef(({ id: e, anchorId: t, anchorSelect: r, content: n, html: i, render: o, className: s, classNameArrow: a, variant: l = "dark", place: c = "top", offset: u = 10, wrapper: f = "div", children: v = null, events: d = ["hover"], openOnClick: b = !1, positionStrategy: h = "absolute", middlewares: g, delayShow: m = 0, delayHide: w = 0, float: S = !1, hidden: E = !1, noArrow: k = !1, clickable: R = !1, closeOnEsc: T = !1, closeOnScroll: U = !1, closeOnResize: D = !1, openEvents: K, closeEvents: q, globalCloseEvents: A, imperativeModeOnly: I = !1, style: y, position: z, isOpen: ie, disableStyleInjection: W = !1, border: ae, opacity: H, arrowColor: ee, setIsOpen: L, afterShow: P, afterHide: le, role: ne = "tooltip" }, Q) => {
  const [we, Re] = Se(n), [pe, me] = Se(i), [Ie, Oe] = Se(c), [Ge, $e] = Se(l), [p, V] = Se(u), [j, C] = Se(m), [x, N] = Se(w), [B, Z] = Se(S), [F, X] = Se(E), [te, J] = Se(f), [ce, ye] = Se(d), [ve, je] = Se(h), [qe, Me] = Se(null), [He, Te] = Se(null), Be = Ye(W), { anchorRefs: ze, activeAnchor: Ue } = Ho(e), rt = (oe) => oe == null ? void 0 : oe.getAttributeNames().reduce((ke, fe) => {
    var xe;
    return fe.startsWith("data-tooltip-") && (ke[fe.replace(/^data-tooltip-/, "")] = (xe = oe == null ? void 0 : oe.getAttribute(fe)) !== null && xe !== void 0 ? xe : null), ke;
  }, {}), nt = (oe) => {
    const ke = { place: (fe) => {
      var xe;
      Oe((xe = fe) !== null && xe !== void 0 ? xe : c);
    }, content: (fe) => {
      Re(fe ?? n);
    }, html: (fe) => {
      me(fe ?? i);
    }, variant: (fe) => {
      var xe;
      $e((xe = fe) !== null && xe !== void 0 ? xe : l);
    }, offset: (fe) => {
      V(fe === null ? u : Number(fe));
    }, wrapper: (fe) => {
      var xe;
      J((xe = fe) !== null && xe !== void 0 ? xe : f);
    }, events: (fe) => {
      const xe = fe == null ? void 0 : fe.split(" ");
      ye(xe ?? d);
    }, "position-strategy": (fe) => {
      var xe;
      je((xe = fe) !== null && xe !== void 0 ? xe : h);
    }, "delay-show": (fe) => {
      C(fe === null ? m : Number(fe));
    }, "delay-hide": (fe) => {
      N(fe === null ? w : Number(fe));
    }, float: (fe) => {
      Z(fe === null ? S : fe === "true");
    }, hidden: (fe) => {
      X(fe === null ? E : fe === "true");
    }, "class-name": (fe) => {
      Me(fe);
    } };
    Object.values(ke).forEach((fe) => fe(null)), Object.entries(oe).forEach(([fe, xe]) => {
      var Je;
      (Je = ke[fe]) === null || Je === void 0 || Je.call(ke, xe);
    });
  };
  Ne(() => {
    Re(n);
  }, [n]), Ne(() => {
    me(i);
  }, [i]), Ne(() => {
    Oe(c);
  }, [c]), Ne(() => {
    $e(l);
  }, [l]), Ne(() => {
    V(u);
  }, [u]), Ne(() => {
    C(m);
  }, [m]), Ne(() => {
    N(w);
  }, [w]), Ne(() => {
    Z(S);
  }, [S]), Ne(() => {
    X(E);
  }, [E]), Ne(() => {
    je(h);
  }, [h]), Ne(() => {
    Be.current !== W && console.warn("[react-tooltip] Do not change `disableStyleInjection` dynamically.");
  }, [W]), Ne(() => {
    typeof window < "u" && window.dispatchEvent(new CustomEvent("react-tooltip-inject-styles", { detail: { disableCore: W === "core", disableBase: W } }));
  }, []), Ne(() => {
    var oe;
    const ke = new Set(ze);
    let fe = r;
    if (!fe && e && (fe = `[data-tooltip-id='${e}']`), fe)
      try {
        document.querySelectorAll(fe).forEach((_e) => {
          ke.add({ current: _e });
        });
      } catch {
        console.warn(`[react-tooltip] "${fe}" is not a valid CSS selector`);
      }
    const xe = document.querySelector(`[id='${t}']`);
    if (xe && ke.add({ current: xe }), !ke.size)
      return () => null;
    const Je = (oe = He ?? xe) !== null && oe !== void 0 ? oe : Ue.current, lt = new MutationObserver((_e) => {
      _e.forEach((be) => {
        var Ve;
        if (!Je || be.type !== "attributes" || !(!((Ve = be.attributeName) === null || Ve === void 0) && Ve.startsWith("data-tooltip-")))
          return;
        const Ze = rt(Je);
        nt(Ze);
      });
    }), ue = { attributes: !0, childList: !1, subtree: !1 };
    if (Je) {
      const _e = rt(Je);
      nt(_e), lt.observe(Je, ue);
    }
    return () => {
      lt.disconnect();
    };
  }, [ze, Ue, He, t, r]), Ne(() => {
    y != null && y.border && console.warn("[react-tooltip] Do not set `style.border`. Use `border` prop instead."), ae && !Hi("border", `${ae}`) && console.warn(`[react-tooltip] "${ae}" is not a valid \`border\`.`), y != null && y.opacity && console.warn("[react-tooltip] Do not set `style.opacity`. Use `opacity` prop instead."), H && !Hi("opacity", `${H}`) && console.warn(`[react-tooltip] "${H}" is not a valid \`opacity\`.`);
  }, []);
  let Xe = v;
  const et = Ye(null);
  if (o) {
    const oe = o({ content: we ?? null, activeAnchor: He });
    Xe = oe ? pt.createElement("div", { ref: et, className: "react-tooltip-content-wrapper" }, oe) : null;
  } else
    we && (Xe = we);
  pe && (Xe = pt.createElement(Qc, { content: pe }));
  const re = { forwardRef: Q, id: e, anchorId: t, anchorSelect: r, className: kn(s, qe), classNameArrow: a, content: Xe, contentWrapperRef: et, place: Ie, variant: Ge, offset: p, wrapper: te, events: ce, openOnClick: b, positionStrategy: ve, middlewares: g, delayShow: j, delayHide: x, float: B, hidden: F, noArrow: k, clickable: R, closeOnEsc: T, closeOnScroll: U, closeOnResize: D, openEvents: K, closeEvents: q, globalCloseEvents: A, imperativeModeOnly: I, style: y, position: z, isOpen: ie, border: ae, opacity: H, arrowColor: ee, setIsOpen: L, afterShow: P, afterHide: le, activeAnchor: He, setActiveAnchor: (oe) => Te(oe), role: ne };
  return pt.createElement(Jc, { ...re });
});
typeof window < "u" && window.addEventListener("react-tooltip-inject-styles", (e) => {
  e.detail.disableCore || Bi({ css: ":root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9;--rt-transition-show-delay:0.15s;--rt-transition-closing-delay:0.15s}.core-styles-module_tooltip__3vRRp{position:absolute;top:0;left:0;pointer-events:none;opacity:0;will-change:opacity}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{position:absolute;background:inherit}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{opacity:var(--rt-opacity);transition:opacity var(--rt-transition-show-delay)ease-out}.core-styles-module_closing__sGnxF{opacity:0;transition:opacity var(--rt-transition-closing-delay)ease-in}", type: "core" }), e.detail.disableBase || Bi({ css: `
.styles-module_tooltip__mnnfp{padding:8px 16px;border-radius:3px;font-size:90%;width:max-content}.styles-module_arrow__K0L3T{width:8px;height:8px}[class*='react-tooltip__place-top']>.styles-module_arrow__K0L3T{transform:rotate(45deg)}[class*='react-tooltip__place-right']>.styles-module_arrow__K0L3T{transform:rotate(135deg)}[class*='react-tooltip__place-bottom']>.styles-module_arrow__K0L3T{transform:rotate(225deg)}[class*='react-tooltip__place-left']>.styles-module_arrow__K0L3T{transform:rotate(315deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}`, type: "base" });
});
const eu = ({
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
}) => /* @__PURE__ */ M.jsxs(
  "div",
  {
    onClick: () => {
      a || n();
    },
    className: `flex w-full select-none flex-row items-center ${a ? "cursor-default" : "cursor-pointer"}`,
    children: [
      /* @__PURE__ */ M.jsx(
        "img",
        {
          src: jo,
          className: `${i ? "rotate-180" : "rotate-[270deg]"} mr-2 mb-1 h-3 w-3 self-center transition-transform`,
          alt: "Down Arrow"
        }
      ),
      /* @__PURE__ */ M.jsxs("span", { className: "flex w-full flex-row justify-between", children: [
        /* @__PURE__ */ M.jsx("span", { className: "text-black text-center overflow-x-clip mr-2", children: s || "Files" }),
        /* @__PURE__ */ M.jsxs("span", { className: "flex items-center", children: [
          /* @__PURE__ */ M.jsxs("span", { className: "text-black", children: [
            !l && /* @__PURE__ */ M.jsx(
              un,
              {
                className: "z-50",
                id: "new-file",
                style: { backgroundColor: "rgb(60 60 60)" }
              }
            ),
            /* @__PURE__ */ M.jsx(
              "button",
              {
                type: "button",
                onClick: (u) => {
                  u.stopPropagation(), e();
                },
                className: `cursor-pointer rounded-sm hover:bg-slate-300 p-[2px] mr-[2px] ${o}`,
                children: /* @__PURE__ */ M.jsx(
                  "img",
                  {
                    "data-tooltip-id": "new-file",
                    "data-tooltip-content": "New File",
                    src: uc,
                    className: "h-5 w-5",
                    alt: "New File"
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ M.jsxs("span", { className: "text-black", children: [
            !l && /* @__PURE__ */ M.jsx(
              un,
              {
                className: "z-50",
                id: "new-folder",
                style: { backgroundColor: "rgb(60 60 60)" }
              }
            ),
            /* @__PURE__ */ M.jsx(
              "button",
              {
                type: "button",
                onClick: (u) => {
                  u.stopPropagation(), t();
                },
                className: `cursor-pointer rounded-sm hover:bg-slate-300 p-[2px] mx-[2px] ${o}`,
                children: /* @__PURE__ */ M.jsx(
                  "img",
                  {
                    "data-tooltip-id": "new-folder",
                    "data-tooltip-content": "New Folder",
                    src: dc,
                    className: "h-5 w-5",
                    alt: "New Folder"
                  }
                )
              }
            )
          ] }),
          !c && /* @__PURE__ */ M.jsxs("span", { className: "text-black", children: [
            !l && /* @__PURE__ */ M.jsx(
              un,
              {
                className: "z-50",
                id: "download-project",
                style: { backgroundColor: "rgb(60 60 60)" }
              }
            ),
            /* @__PURE__ */ M.jsx(
              "button",
              {
                type: "button",
                onClick: (u) => {
                  u.stopPropagation(), r();
                },
                className: `cursor-pointer rounded-sm hover:bg-slate-300 p-[2px] ml-[2px] ${o}`,
                children: /* @__PURE__ */ M.jsx(
                  "img",
                  {
                    "data-tooltip-id": "download-project",
                    "data-tooltip-content": "Download Project",
                    src: fc,
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
var Zn = {}, Gn = {};
Gn.__esModule = !0;
Gn.default = nu;
function Or(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Or = function(r) {
    return typeof r;
  } : Or = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Or(e);
}
function dn() {
}
var tu = {
  getItem: dn,
  setItem: dn,
  removeItem: dn
};
function ru(e) {
  if ((typeof self > "u" ? "undefined" : Or(self)) !== "object" || !(e in self))
    return !1;
  try {
    var t = self[e], r = "redux-persist ".concat(e, " test");
    t.setItem(r, "test"), t.getItem(r), t.removeItem(r);
  } catch {
    return process.env.NODE_ENV !== "production" && console.warn("redux-persist ".concat(e, " test failed, persistence will be disabled.")), !1;
  }
  return !0;
}
function nu(e) {
  var t = "".concat(e, "Storage");
  return ru(t) ? self[t] : (process.env.NODE_ENV !== "production" && console.error("redux-persist failed to create sync storage. falling back to noop storage."), tu);
}
Zn.__esModule = !0;
Zn.default = su;
var iu = ou(Gn);
function ou(e) {
  return e && e.__esModule ? e : { default: e };
}
function su(e) {
  var t = (0, iu.default)(e);
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
var Zo = void 0, au = lu(Zn);
function lu(e) {
  return e && e.__esModule ? e : { default: e };
}
var cu = (0, au.default)("local");
Zo = cu;
var Kn = "persist:", Go = "persist/FLUSH", Yn = "persist/REHYDRATE", Ko = "persist/PAUSE", Yo = "persist/PERSIST", qo = "persist/PURGE", Xo = "persist/REGISTER", uu = -1;
function nr(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? nr = function(r) {
    return typeof r;
  } : nr = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, nr(e);
}
function Zi(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function du(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zi(r, !0).forEach(function(n) {
      fu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zi(r).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function fu(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function hu(e, t, r, n) {
  var i = n.debug, o = du({}, r);
  return e && nr(e) === "object" && Object.keys(e).forEach(function(s) {
    if (s !== "_persist") {
      if (t[s] !== r[s]) {
        process.env.NODE_ENV !== "production" && i && console.log("redux-persist/stateReconciler: sub state for key `%s` modified, skipping.", s);
        return;
      }
      o[s] = e[s];
    }
  }), process.env.NODE_ENV !== "production" && i && e && nr(e) === "object" && console.log("redux-persist/stateReconciler: rehydrated keys '".concat(Object.keys(e).join(", "), "'")), o;
}
function pu(e) {
  var t = e.blacklist || null, r = e.whitelist || null, n = e.transforms || [], i = e.throttle || 0, o = "".concat(e.keyPrefix !== void 0 ? e.keyPrefix : Kn).concat(e.key), s = e.storage, a;
  e.serialize === !1 ? a = function(k) {
    return k;
  } : typeof e.serialize == "function" ? a = e.serialize : a = mu;
  var l = e.writeFailHandler || null, c = {}, u = {}, f = [], v = null, d = null, b = function(k) {
    Object.keys(k).forEach(function(R) {
      m(R) && c[R] !== k[R] && f.indexOf(R) === -1 && f.push(R);
    }), Object.keys(c).forEach(function(R) {
      k[R] === void 0 && m(R) && f.indexOf(R) === -1 && c[R] !== void 0 && f.push(R);
    }), v === null && (v = setInterval(h, i)), c = k;
  };
  function h() {
    if (f.length === 0) {
      v && clearInterval(v), v = null;
      return;
    }
    var E = f.shift(), k = n.reduce(function(R, T) {
      return T.in(R, E, c);
    }, c[E]);
    if (k !== void 0)
      try {
        u[E] = a(k);
      } catch (R) {
        console.error("redux-persist/createPersistoid: error serializing state", R);
      }
    else
      delete u[E];
    f.length === 0 && g();
  }
  function g() {
    Object.keys(u).forEach(function(E) {
      c[E] === void 0 && delete u[E];
    }), d = s.setItem(o, a(u)).catch(w);
  }
  function m(E) {
    return !(r && r.indexOf(E) === -1 && E !== "_persist" || t && t.indexOf(E) !== -1);
  }
  function w(E) {
    l && l(E), E && process.env.NODE_ENV !== "production" && console.error("Error storing data", E);
  }
  var S = function() {
    for (; f.length !== 0; )
      h();
    return d || Promise.resolve();
  };
  return {
    update: b,
    flush: S
  };
}
function mu(e) {
  return JSON.stringify(e);
}
function yu(e) {
  var t = e.transforms || [], r = "".concat(e.keyPrefix !== void 0 ? e.keyPrefix : Kn).concat(e.key), n = e.storage, i = e.debug, o;
  return e.deserialize === !1 ? o = function(a) {
    return a;
  } : typeof e.deserialize == "function" ? o = e.deserialize : o = gu, n.getItem(r).then(function(s) {
    if (s)
      try {
        var a = {}, l = o(s);
        return Object.keys(l).forEach(function(c) {
          a[c] = t.reduceRight(function(u, f) {
            return f.out(u, c, l);
          }, o(l[c]));
        }), a;
      } catch (c) {
        throw process.env.NODE_ENV !== "production" && i && console.log("redux-persist/getStoredState: Error restoring data ".concat(s), c), c;
      }
    else
      return;
  });
}
function gu(e) {
  return JSON.parse(e);
}
function vu(e) {
  var t = e.storage, r = "".concat(e.keyPrefix !== void 0 ? e.keyPrefix : Kn).concat(e.key);
  return t.removeItem(r, bu);
}
function bu(e) {
  e && process.env.NODE_ENV !== "production" && console.error("redux-persist/purgeStoredState: Error purging data stored state", e);
}
function Gi(e, t) {
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
    t % 2 ? Gi(r, !0).forEach(function(n) {
      wu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Gi(r).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function wu(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function _u(e, t) {
  if (e == null)
    return {};
  var r = xu(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      n = o[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function xu(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, o;
  for (o = 0; o < n.length; o++)
    i = n[o], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var Su = 5e3;
function Eu(e, t) {
  if (process.env.NODE_ENV !== "production") {
    if (!e)
      throw new Error("config is required for persistReducer");
    if (!e.key)
      throw new Error("key is required in persistor config");
    if (!e.storage)
      throw new Error("redux-persist: config.storage is required. Try using one of the provided storage engines `import storage from 'redux-persist/lib/storage'`");
  }
  var r = e.version !== void 0 ? e.version : uu;
  e.debug;
  var n = e.stateReconciler === void 0 ? hu : e.stateReconciler, i = e.getStoredState || yu, o = e.timeout !== void 0 ? e.timeout : Su, s = null, a = !1, l = !0, c = function(f) {
    return f._persist.rehydrated && s && !l && s.update(f), f;
  };
  return function(u, f) {
    var v = u || {}, d = v._persist, b = _u(v, ["_persist"]), h = b;
    if (f.type === Yo) {
      var g = !1, m = function(U, D) {
        process.env.NODE_ENV !== "production" && g && console.error('redux-persist: rehydrate for "'.concat(e.key, '" called after timeout.'), U, D), g || (f.rehydrate(e.key, U, D), g = !0);
      };
      if (o && setTimeout(function() {
        !g && m(void 0, new Error('redux-persist: persist timed out for persist key "'.concat(e.key, '"')));
      }, o), l = !1, s || (s = pu(e)), d)
        return kt({}, t(h, f), {
          _persist: d
        });
      if (typeof f.rehydrate != "function" || typeof f.register != "function")
        throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");
      return f.register(e.key), i(e).then(function(T) {
        var U = e.migrate || function(D, K) {
          return Promise.resolve(D);
        };
        U(T, r).then(function(D) {
          m(D);
        }, function(D) {
          process.env.NODE_ENV !== "production" && D && console.error("redux-persist: migration error", D), m(void 0, D);
        });
      }, function(T) {
        m(void 0, T);
      }), kt({}, t(h, f), {
        _persist: {
          version: r,
          rehydrated: !1
        }
      });
    } else {
      if (f.type === qo)
        return a = !0, f.result(vu(e)), kt({}, t(h, f), {
          _persist: d
        });
      if (f.type === Go)
        return f.result(s && s.flush()), kt({}, t(h, f), {
          _persist: d
        });
      if (f.type === Ko)
        l = !0;
      else if (f.type === Yn) {
        if (a)
          return kt({}, h, {
            _persist: kt({}, d, {
              rehydrated: !0
            })
            // @NOTE if key does not match, will continue to default else below
          });
        if (f.key === e.key) {
          var w = t(h, f), S = f.payload, E = n !== !1 && S !== void 0 ? n(S, u, w, e) : w, k = kt({}, E, {
            _persist: kt({}, d, {
              rehydrated: !0
            })
          });
          return c(k);
        }
      }
    }
    if (!d)
      return t(u, f);
    var R = t(h, f);
    return R === h ? u : c(kt({}, R, {
      _persist: d
    }));
  };
}
function Ki(e) {
  return Ou(e) || Cu(e) || ku();
}
function ku() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function Cu(e) {
  if (Symbol.iterator in Object(e) || Object.prototype.toString.call(e) === "[object Arguments]")
    return Array.from(e);
}
function Ou(e) {
  if (Array.isArray(e)) {
    for (var t = 0, r = new Array(e.length); t < e.length; t++)
      r[t] = e[t];
    return r;
  }
}
function Yi(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Cn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Yi(r, !0).forEach(function(n) {
      Au(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yi(r).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Au(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var Jo = {
  registry: [],
  bootstrapped: !1
}, Nu = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Jo, r = arguments.length > 1 ? arguments[1] : void 0;
  switch (r.type) {
    case Xo:
      return Cn({}, t, {
        registry: [].concat(Ki(t.registry), [r.key])
      });
    case Yn:
      var n = t.registry.indexOf(r.key), i = Ki(t.registry);
      return i.splice(n, 1), Cn({}, t, {
        registry: i,
        bootstrapped: i.length === 0
      });
    default:
      return t;
  }
};
function Tu(e, t, r) {
  if (process.env.NODE_ENV !== "production") {
    var n = t || {}, i = ["blacklist", "whitelist", "transforms", "storage", "keyPrefix", "migrate"];
    i.forEach(function(u) {
      n[u] && console.error('redux-persist: invalid option passed to persistStore: "'.concat(u, '". You may be incorrectly passing persistConfig into persistStore, whereas it should be passed into persistReducer.'));
    });
  }
  var o = r || !1, s = Tn(Nu, Jo, t && t.enhancer ? t.enhancer : void 0), a = function(f) {
    s.dispatch({
      type: Xo,
      key: f
    });
  }, l = function(f, v, d) {
    var b = {
      type: Yn,
      payload: v,
      err: d,
      key: f
      // dispatch to `store` to rehydrate and `persistor` to track result
    };
    e.dispatch(b), s.dispatch(b), o && c.getState().bootstrapped && (o(), o = !1);
  }, c = Cn({}, s, {
    purge: function() {
      var f = [];
      return e.dispatch({
        type: qo,
        result: function(d) {
          f.push(d);
        }
      }), Promise.all(f);
    },
    flush: function() {
      var f = [];
      return e.dispatch({
        type: Go,
        result: function(d) {
          f.push(d);
        }
      }), Promise.all(f);
    },
    pause: function() {
      e.dispatch({
        type: Ko
      });
    },
    persist: function() {
      e.dispatch({
        type: Yo,
        register: a,
        rehydrate: l
      });
    }
  });
  return t && t.manualPersist || c.persist(), c;
}
var $r = { exports: {} };
$r.exports;
(function(e, t) {
  var r = 200, n = "__lodash_hash_undefined__", i = 9007199254740991, o = "[object Arguments]", s = "[object Array]", a = "[object Boolean]", l = "[object Date]", c = "[object Error]", u = "[object Function]", f = "[object GeneratorFunction]", v = "[object Map]", d = "[object Number]", b = "[object Object]", h = "[object Promise]", g = "[object RegExp]", m = "[object Set]", w = "[object String]", S = "[object Symbol]", E = "[object WeakMap]", k = "[object ArrayBuffer]", R = "[object DataView]", T = "[object Float32Array]", U = "[object Float64Array]", D = "[object Int8Array]", K = "[object Int16Array]", q = "[object Int32Array]", A = "[object Uint8Array]", I = "[object Uint8ClampedArray]", y = "[object Uint16Array]", z = "[object Uint32Array]", ie = /[\\^$.*+?()[\]{}|]/g, W = /\w*$/, ae = /^\[object .+?Constructor\]$/, H = /^(?:0|[1-9]\d*)$/, ee = {};
  ee[o] = ee[s] = ee[k] = ee[R] = ee[a] = ee[l] = ee[T] = ee[U] = ee[D] = ee[K] = ee[q] = ee[v] = ee[d] = ee[b] = ee[g] = ee[m] = ee[w] = ee[S] = ee[A] = ee[I] = ee[y] = ee[z] = !0, ee[c] = ee[u] = ee[E] = !1;
  var L = typeof ht == "object" && ht && ht.Object === Object && ht, P = typeof self == "object" && self && self.Object === Object && self, le = L || P || Function("return this")(), ne = t && !t.nodeType && t, Q = ne && !0 && e && !e.nodeType && e, we = Q && Q.exports === ne;
  function Re(_, $) {
    return _.set($[0], $[1]), _;
  }
  function pe(_, $) {
    return _.add($), _;
  }
  function me(_, $) {
    for (var G = -1, de = _ ? _.length : 0; ++G < de && $(_[G], G, _) !== !1; )
      ;
    return _;
  }
  function Ie(_, $) {
    for (var G = -1, de = $.length, tt = _.length; ++G < de; )
      _[tt + G] = $[G];
    return _;
  }
  function Oe(_, $, G, de) {
    var tt = -1, at = _ ? _.length : 0;
    for (de && at && (G = _[++tt]); ++tt < at; )
      G = $(G, _[tt], tt, _);
    return G;
  }
  function Ge(_, $) {
    for (var G = -1, de = Array(_); ++G < _; )
      de[G] = $(G);
    return de;
  }
  function $e(_, $) {
    return _ == null ? void 0 : _[$];
  }
  function p(_) {
    var $ = !1;
    if (_ != null && typeof _.toString != "function")
      try {
        $ = !!(_ + "");
      } catch {
      }
    return $;
  }
  function V(_) {
    var $ = -1, G = Array(_.size);
    return _.forEach(function(de, tt) {
      G[++$] = [tt, de];
    }), G;
  }
  function j(_, $) {
    return function(G) {
      return _($(G));
    };
  }
  function C(_) {
    var $ = -1, G = Array(_.size);
    return _.forEach(function(de) {
      G[++$] = de;
    }), G;
  }
  var x = Array.prototype, N = Function.prototype, B = Object.prototype, Z = le["__core-js_shared__"], F = function() {
    var _ = /[^.]+$/.exec(Z && Z.keys && Z.keys.IE_PROTO || "");
    return _ ? "Symbol(src)_1." + _ : "";
  }(), X = N.toString, te = B.hasOwnProperty, J = B.toString, ce = RegExp(
    "^" + X.call(te).replace(ie, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), ye = we ? le.Buffer : void 0, ve = le.Symbol, je = le.Uint8Array, qe = j(Object.getPrototypeOf, Object), Me = Object.create, He = B.propertyIsEnumerable, Te = x.splice, Be = Object.getOwnPropertySymbols, ze = ye ? ye.isBuffer : void 0, Ue = j(Object.keys, Object), rt = Gt(le, "DataView"), nt = Gt(le, "Map"), Xe = Gt(le, "Promise"), et = Gt(le, "Set"), re = Gt(le, "WeakMap"), oe = Gt(Object, "create"), ke = Lt(rt), fe = Lt(nt), xe = Lt(Xe), Je = Lt(et), lt = Lt(re), ue = ve ? ve.prototype : void 0, _e = ue ? ue.valueOf : void 0;
  function be(_) {
    var $ = -1, G = _ ? _.length : 0;
    for (this.clear(); ++$ < G; ) {
      var de = _[$];
      this.set(de[0], de[1]);
    }
  }
  function Ve() {
    this.__data__ = oe ? oe(null) : {};
  }
  function Ze(_) {
    return this.has(_) && delete this.__data__[_];
  }
  function ct(_) {
    var $ = this.__data__;
    if (oe) {
      var G = $[_];
      return G === n ? void 0 : G;
    }
    return te.call($, _) ? $[_] : void 0;
  }
  function ft(_) {
    var $ = this.__data__;
    return oe ? $[_] !== void 0 : te.call($, _);
  }
  function it(_, $) {
    var G = this.__data__;
    return G[_] = oe && $ === void 0 ? n : $, this;
  }
  be.prototype.clear = Ve, be.prototype.delete = Ze, be.prototype.get = ct, be.prototype.has = ft, be.prototype.set = it;
  function We(_) {
    var $ = -1, G = _ ? _.length : 0;
    for (this.clear(); ++$ < G; ) {
      var de = _[$];
      this.set(de[0], de[1]);
    }
  }
  function O() {
    this.__data__ = [];
  }
  function Y(_) {
    var $ = this.__data__, G = gr($, _);
    if (G < 0)
      return !1;
    var de = $.length - 1;
    return G == de ? $.pop() : Te.call($, G, 1), !0;
  }
  function se(_) {
    var $ = this.__data__, G = gr($, _);
    return G < 0 ? void 0 : $[G][1];
  }
  function ge(_) {
    return gr(this.__data__, _) > -1;
  }
  function Ae(_, $) {
    var G = this.__data__, de = gr(G, _);
    return de < 0 ? G.push([_, $]) : G[de][1] = $, this;
  }
  We.prototype.clear = O, We.prototype.delete = Y, We.prototype.get = se, We.prototype.has = ge, We.prototype.set = Ae;
  function Ce(_) {
    var $ = -1, G = _ ? _.length : 0;
    for (this.clear(); ++$ < G; ) {
      var de = _[$];
      this.set(de[0], de[1]);
    }
  }
  function Ee() {
    this.__data__ = {
      hash: new be(),
      map: new (nt || We)(),
      string: new be()
    };
  }
  function he(_) {
    return vr(this, _).delete(_);
  }
  function De(_) {
    return vr(this, _).get(_);
  }
  function Pe(_) {
    return vr(this, _).has(_);
  }
  function Fe(_, $) {
    return vr(this, _).set(_, $), this;
  }
  Ce.prototype.clear = Ee, Ce.prototype.delete = he, Ce.prototype.get = De, Ce.prototype.has = Pe, Ce.prototype.set = Fe;
  function Qe(_) {
    this.__data__ = new We(_);
  }
  function bt() {
    this.__data__ = new We();
  }
  function yr(_) {
    return this.__data__.delete(_);
  }
  function xt(_) {
    return this.__data__.get(_);
  }
  function ss(_) {
    return this.__data__.has(_);
  }
  function as(_, $) {
    var G = this.__data__;
    if (G instanceof We) {
      var de = G.__data__;
      if (!nt || de.length < r - 1)
        return de.push([_, $]), this;
      G = this.__data__ = new Ce(de);
    }
    return G.set(_, $), this;
  }
  Qe.prototype.clear = bt, Qe.prototype.delete = yr, Qe.prototype.get = xt, Qe.prototype.has = ss, Qe.prototype.set = as;
  function ls(_, $) {
    var G = qr(_) || Is(_) ? Ge(_.length, String) : [], de = G.length, tt = !!de;
    for (var at in _)
      ($ || te.call(_, at)) && !(tt && (at == "length" || As(at, de))) && G.push(at);
    return G;
  }
  function qn(_, $, G) {
    var de = _[$];
    (!(te.call(_, $) && ei(de, G)) || G === void 0 && !($ in _)) && (_[$] = G);
  }
  function gr(_, $) {
    for (var G = _.length; G--; )
      if (ei(_[G][0], $))
        return G;
    return -1;
  }
  function cs(_, $) {
    return _ && Xn($, Xr($), _);
  }
  function Kr(_, $, G, de, tt, at, wt) {
    var ut;
    if (de && (ut = at ? de(_, tt, at, wt) : de(_)), ut !== void 0)
      return ut;
    if (!br(_))
      return _;
    var ni = qr(_);
    if (ni) {
      if (ut = ks(_), !$)
        return xs(_, ut);
    } else {
      var Kt = Pt(_), ii = Kt == u || Kt == f;
      if (Fs(_))
        return ms(_, $);
      if (Kt == b || Kt == o || ii && !at) {
        if (p(_))
          return at ? _ : {};
        if (ut = Cs(ii ? {} : _), !$)
          return Ss(_, cs(ut, _));
      } else {
        if (!ee[Kt])
          return at ? _ : {};
        ut = Os(_, Kt, Kr, $);
      }
    }
    wt || (wt = new Qe());
    var oi = wt.get(_);
    if (oi)
      return oi;
    if (wt.set(_, ut), !ni)
      var si = G ? Es(_) : Xr(_);
    return me(si || _, function(Jr, wr) {
      si && (wr = Jr, Jr = _[wr]), qn(ut, wr, Kr(Jr, $, G, de, wr, _, wt));
    }), ut;
  }
  function us(_) {
    return br(_) ? Me(_) : {};
  }
  function ds(_, $, G) {
    var de = $(_);
    return qr(_) ? de : Ie(de, G(_));
  }
  function fs(_) {
    return J.call(_);
  }
  function hs(_) {
    if (!br(_) || Ts(_))
      return !1;
    var $ = ri(_) || p(_) ? ce : ae;
    return $.test(Lt(_));
  }
  function ps(_) {
    if (!Qn(_))
      return Ue(_);
    var $ = [];
    for (var G in Object(_))
      te.call(_, G) && G != "constructor" && $.push(G);
    return $;
  }
  function ms(_, $) {
    if ($)
      return _.slice();
    var G = new _.constructor(_.length);
    return _.copy(G), G;
  }
  function Yr(_) {
    var $ = new _.constructor(_.byteLength);
    return new je($).set(new je(_)), $;
  }
  function ys(_, $) {
    var G = $ ? Yr(_.buffer) : _.buffer;
    return new _.constructor(G, _.byteOffset, _.byteLength);
  }
  function gs(_, $, G) {
    var de = $ ? G(V(_), !0) : V(_);
    return Oe(de, Re, new _.constructor());
  }
  function vs(_) {
    var $ = new _.constructor(_.source, W.exec(_));
    return $.lastIndex = _.lastIndex, $;
  }
  function bs(_, $, G) {
    var de = $ ? G(C(_), !0) : C(_);
    return Oe(de, pe, new _.constructor());
  }
  function ws(_) {
    return _e ? Object(_e.call(_)) : {};
  }
  function _s(_, $) {
    var G = $ ? Yr(_.buffer) : _.buffer;
    return new _.constructor(G, _.byteOffset, _.length);
  }
  function xs(_, $) {
    var G = -1, de = _.length;
    for ($ || ($ = Array(de)); ++G < de; )
      $[G] = _[G];
    return $;
  }
  function Xn(_, $, G, de) {
    G || (G = {});
    for (var tt = -1, at = $.length; ++tt < at; ) {
      var wt = $[tt], ut = de ? de(G[wt], _[wt], wt, G, _) : void 0;
      qn(G, wt, ut === void 0 ? _[wt] : ut);
    }
    return G;
  }
  function Ss(_, $) {
    return Xn(_, Jn(_), $);
  }
  function Es(_) {
    return ds(_, Xr, Jn);
  }
  function vr(_, $) {
    var G = _.__data__;
    return Ns($) ? G[typeof $ == "string" ? "string" : "hash"] : G.map;
  }
  function Gt(_, $) {
    var G = $e(_, $);
    return hs(G) ? G : void 0;
  }
  var Jn = Be ? j(Be, Object) : Ps, Pt = fs;
  (rt && Pt(new rt(new ArrayBuffer(1))) != R || nt && Pt(new nt()) != v || Xe && Pt(Xe.resolve()) != h || et && Pt(new et()) != m || re && Pt(new re()) != E) && (Pt = function(_) {
    var $ = J.call(_), G = $ == b ? _.constructor : void 0, de = G ? Lt(G) : void 0;
    if (de)
      switch (de) {
        case ke:
          return R;
        case fe:
          return v;
        case xe:
          return h;
        case Je:
          return m;
        case lt:
          return E;
      }
    return $;
  });
  function ks(_) {
    var $ = _.length, G = _.constructor($);
    return $ && typeof _[0] == "string" && te.call(_, "index") && (G.index = _.index, G.input = _.input), G;
  }
  function Cs(_) {
    return typeof _.constructor == "function" && !Qn(_) ? us(qe(_)) : {};
  }
  function Os(_, $, G, de) {
    var tt = _.constructor;
    switch ($) {
      case k:
        return Yr(_);
      case a:
      case l:
        return new tt(+_);
      case R:
        return ys(_, de);
      case T:
      case U:
      case D:
      case K:
      case q:
      case A:
      case I:
      case y:
      case z:
        return _s(_, de);
      case v:
        return gs(_, de, G);
      case d:
      case w:
        return new tt(_);
      case g:
        return vs(_);
      case m:
        return bs(_, de, G);
      case S:
        return ws(_);
    }
  }
  function As(_, $) {
    return $ = $ ?? i, !!$ && (typeof _ == "number" || H.test(_)) && _ > -1 && _ % 1 == 0 && _ < $;
  }
  function Ns(_) {
    var $ = typeof _;
    return $ == "string" || $ == "number" || $ == "symbol" || $ == "boolean" ? _ !== "__proto__" : _ === null;
  }
  function Ts(_) {
    return !!F && F in _;
  }
  function Qn(_) {
    var $ = _ && _.constructor, G = typeof $ == "function" && $.prototype || B;
    return _ === G;
  }
  function Lt(_) {
    if (_ != null) {
      try {
        return X.call(_);
      } catch {
      }
      try {
        return _ + "";
      } catch {
      }
    }
    return "";
  }
  function Rs(_) {
    return Kr(_, !0, !0);
  }
  function ei(_, $) {
    return _ === $ || _ !== _ && $ !== $;
  }
  function Is(_) {
    return js(_) && te.call(_, "callee") && (!He.call(_, "callee") || J.call(_) == o);
  }
  var qr = Array.isArray;
  function ti(_) {
    return _ != null && zs(_.length) && !ri(_);
  }
  function js(_) {
    return Ds(_) && ti(_);
  }
  var Fs = ze || Ls;
  function ri(_) {
    var $ = br(_) ? J.call(_) : "";
    return $ == u || $ == f;
  }
  function zs(_) {
    return typeof _ == "number" && _ > -1 && _ % 1 == 0 && _ <= i;
  }
  function br(_) {
    var $ = typeof _;
    return !!_ && ($ == "object" || $ == "function");
  }
  function Ds(_) {
    return !!_ && typeof _ == "object";
  }
  function Xr(_) {
    return ti(_) ? ls(_) : ps(_);
  }
  function Ps() {
    return [];
  }
  function Ls() {
    return !1;
  }
  e.exports = Rs;
})($r, $r.exports);
var Ru = $r.exports;
const Iu = /* @__PURE__ */ Nn(Ru), Qo = (e, t) => {
  const r = e.path.filter((i) => i !== "/" && i !== "head"), n = r.map((i, o) => {
    if (o < r.length - 1)
      return t.folders.byId[i].name;
    {
      const s = t.files.byId[i];
      return `${s.name}.${s.extension}`;
    }
  });
  return [r, n];
}, ju = {
  miniStructure: {
    id: "head",
    type: "folder",
    name: "head",
    collapsed: !1,
    subFoldersAndFiles: []
  }
}, es = Fn(
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
    return St(
      r.structure.initialFolder.subFoldersAndFiles,
      e,
      (i, o) => {
        const s = Iu(
          o[o.length - 1]
        );
        Wr(
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
), ts = zn({
  name: "miniStructure",
  initialState: ju,
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
    e.addCase(es.fulfilled, (t, r) => {
      t.miniStructure = r.payload;
    });
  }
}), { collapseMiniStructure: qi } = ts.actions, Fu = (e) => e.miniStructure.miniStructure, zu = Zt(
  (e) => e.structure.normalized,
  (e) => e.tabs.selected,
  (e, t) => {
    if (t && t !== "") {
      const r = e.files.byId[t], [n, i] = Qo(r, e);
      return {
        id: r.id,
        path: i,
        unmappedPath: n
      };
    } else
      return null;
  }
), Du = ts.reducer, Pu = {
  key: "project",
  storage: Zo,
  whitelist: ["structure", "editor", "tabs"]
}, Lu = Ji({
  structure: Ol,
  tabs: ql,
  miniStructure: Du
}), $u = Eu(Pu, Lu), Dt = Ma({
  reducer: $u,
  middleware: (e) => e()
}), Mu = Tu(Dt);
function Cr(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var rs = { exports: {} };
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
      function s(c, u) {
        if (!i[c]) {
          if (!n[c]) {
            var f = typeof Cr == "function" && Cr;
            if (!u && f)
              return f(c, !0);
            if (a)
              return a(c, !0);
            var v = new Error("Cannot find module '" + c + "'");
            throw v.code = "MODULE_NOT_FOUND", v;
          }
          var d = i[c] = { exports: {} };
          n[c][0].call(d.exports, function(b) {
            var h = n[c][1][b];
            return s(h || b);
          }, d, d.exports, r, n, i, o);
        }
        return i[c].exports;
      }
      for (var a = typeof Cr == "function" && Cr, l = 0; l < o.length; l++)
        s(o[l]);
      return s;
    }({ 1: [function(r, n, i) {
      var o = r("./utils"), s = r("./support"), a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      i.encode = function(l) {
        for (var c, u, f, v, d, b, h, g = [], m = 0, w = l.length, S = w, E = o.getTypeOf(l) !== "string"; m < l.length; )
          S = w - m, f = E ? (c = l[m++], u = m < w ? l[m++] : 0, m < w ? l[m++] : 0) : (c = l.charCodeAt(m++), u = m < w ? l.charCodeAt(m++) : 0, m < w ? l.charCodeAt(m++) : 0), v = c >> 2, d = (3 & c) << 4 | u >> 4, b = 1 < S ? (15 & u) << 2 | f >> 6 : 64, h = 2 < S ? 63 & f : 64, g.push(a.charAt(v) + a.charAt(d) + a.charAt(b) + a.charAt(h));
        return g.join("");
      }, i.decode = function(l) {
        var c, u, f, v, d, b, h = 0, g = 0, m = "data:";
        if (l.substr(0, m.length) === m)
          throw new Error("Invalid base64 input, it looks like a data url.");
        var w, S = 3 * (l = l.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
        if (l.charAt(l.length - 1) === a.charAt(64) && S--, l.charAt(l.length - 2) === a.charAt(64) && S--, S % 1 != 0)
          throw new Error("Invalid base64 input, bad content length.");
        for (w = s.uint8array ? new Uint8Array(0 | S) : new Array(0 | S); h < l.length; )
          c = a.indexOf(l.charAt(h++)) << 2 | (v = a.indexOf(l.charAt(h++))) >> 4, u = (15 & v) << 4 | (d = a.indexOf(l.charAt(h++))) >> 2, f = (3 & d) << 6 | (b = a.indexOf(l.charAt(h++))), w[g++] = c, d !== 64 && (w[g++] = u), b !== 64 && (w[g++] = f);
        return w;
      };
    }, { "./support": 30, "./utils": 32 }], 2: [function(r, n, i) {
      var o = r("./external"), s = r("./stream/DataWorker"), a = r("./stream/Crc32Probe"), l = r("./stream/DataLengthProbe");
      function c(u, f, v, d, b) {
        this.compressedSize = u, this.uncompressedSize = f, this.crc32 = v, this.compression = d, this.compressedContent = b;
      }
      c.prototype = { getContentWorker: function() {
        var u = new s(o.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")), f = this;
        return u.on("end", function() {
          if (this.streamInfo.data_length !== f.uncompressedSize)
            throw new Error("Bug : uncompressed data size mismatch");
        }), u;
      }, getCompressedWorker: function() {
        return new s(o.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
      } }, c.createWorkerFrom = function(u, f, v) {
        return u.pipe(new a()).pipe(new l("uncompressedSize")).pipe(f.compressWorker(v)).pipe(new l("compressedSize")).withStreamInfo("compression", f);
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
          for (var u = 0; u < 8; u++)
            a = 1 & a ? 3988292384 ^ a >>> 1 : a >>> 1;
          l[c] = a;
        }
        return l;
      }();
      n.exports = function(a, l) {
        return a !== void 0 && a.length ? o.getTypeOf(a) !== "string" ? function(c, u, f, v) {
          var d = s, b = v + f;
          c ^= -1;
          for (var h = v; h < b; h++)
            c = c >>> 8 ^ d[255 & (c ^ u[h])];
          return -1 ^ c;
        }(0 | l, a, a.length, 0) : function(c, u, f, v) {
          var d = s, b = v + f;
          c ^= -1;
          for (var h = v; h < b; h++)
            c = c >>> 8 ^ d[255 & (c ^ u.charCodeAt(h))];
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
      function u(f, v) {
        l.call(this, "FlateWorker/" + f), this._pako = null, this._pakoAction = f, this._pakoOptions = v, this.meta = {};
      }
      i.magic = "\b\0", a.inherits(u, l), u.prototype.processChunk = function(f) {
        this.meta = f.meta, this._pako === null && this._createPako(), this._pako.push(a.transformTo(c, f.data), !1);
      }, u.prototype.flush = function() {
        l.prototype.flush.call(this), this._pako === null && this._createPako(), this._pako.push([], !0);
      }, u.prototype.cleanUp = function() {
        l.prototype.cleanUp.call(this), this._pako = null;
      }, u.prototype._createPako = function() {
        this._pako = new s[this._pakoAction]({ raw: !0, level: this._pakoOptions.level || -1 });
        var f = this;
        this._pako.onData = function(v) {
          f.push({ data: v, meta: f.meta });
        };
      }, i.compressWorker = function(f) {
        return new u("Deflate", f);
      }, i.uncompressWorker = function() {
        return new u("Inflate", {});
      };
    }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }], 8: [function(r, n, i) {
      function o(d, b) {
        var h, g = "";
        for (h = 0; h < b; h++)
          g += String.fromCharCode(255 & d), d >>>= 8;
        return g;
      }
      function s(d, b, h, g, m, w) {
        var S, E, k = d.file, R = d.compression, T = w !== c.utf8encode, U = a.transformTo("string", w(k.name)), D = a.transformTo("string", c.utf8encode(k.name)), K = k.comment, q = a.transformTo("string", w(K)), A = a.transformTo("string", c.utf8encode(K)), I = D.length !== k.name.length, y = A.length !== K.length, z = "", ie = "", W = "", ae = k.dir, H = k.date, ee = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
        b && !h || (ee.crc32 = d.crc32, ee.compressedSize = d.compressedSize, ee.uncompressedSize = d.uncompressedSize);
        var L = 0;
        b && (L |= 8), T || !I && !y || (L |= 2048);
        var P = 0, le = 0;
        ae && (P |= 16), m === "UNIX" ? (le = 798, P |= function(Q, we) {
          var Re = Q;
          return Q || (Re = we ? 16893 : 33204), (65535 & Re) << 16;
        }(k.unixPermissions, ae)) : (le = 20, P |= function(Q) {
          return 63 & (Q || 0);
        }(k.dosPermissions)), S = H.getUTCHours(), S <<= 6, S |= H.getUTCMinutes(), S <<= 5, S |= H.getUTCSeconds() / 2, E = H.getUTCFullYear() - 1980, E <<= 4, E |= H.getUTCMonth() + 1, E <<= 5, E |= H.getUTCDate(), I && (ie = o(1, 1) + o(u(U), 4) + D, z += "up" + o(ie.length, 2) + ie), y && (W = o(1, 1) + o(u(q), 4) + A, z += "uc" + o(W.length, 2) + W);
        var ne = "";
        return ne += `
\0`, ne += o(L, 2), ne += R.magic, ne += o(S, 2), ne += o(E, 2), ne += o(ee.crc32, 4), ne += o(ee.compressedSize, 4), ne += o(ee.uncompressedSize, 4), ne += o(U.length, 2), ne += o(z.length, 2), { fileRecord: f.LOCAL_FILE_HEADER + ne + U + z, dirRecord: f.CENTRAL_FILE_HEADER + o(le, 2) + ne + o(q.length, 2) + "\0\0\0\0" + o(P, 4) + o(g, 4) + U + z + q };
      }
      var a = r("../utils"), l = r("../stream/GenericWorker"), c = r("../utf8"), u = r("../crc32"), f = r("../signature");
      function v(d, b, h, g) {
        l.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = b, this.zipPlatform = h, this.encodeFileName = g, this.streamFiles = d, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
      }
      a.inherits(v, l), v.prototype.push = function(d) {
        var b = d.meta.percent || 0, h = this.entriesCount, g = this._sources.length;
        this.accumulate ? this.contentBuffer.push(d) : (this.bytesWritten += d.data.length, l.prototype.push.call(this, { data: d.data, meta: { currentFile: this.currentFile, percent: h ? (b + 100 * (h - g - 1)) / h : 100 } }));
      }, v.prototype.openedSource = function(d) {
        this.currentSourceOffset = this.bytesWritten, this.currentFile = d.file.name;
        var b = this.streamFiles && !d.file.dir;
        if (b) {
          var h = s(d, b, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
          this.push({ data: h.fileRecord, meta: { percent: 0 } });
        } else
          this.accumulate = !0;
      }, v.prototype.closedSource = function(d) {
        this.accumulate = !1;
        var b = this.streamFiles && !d.file.dir, h = s(d, b, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
        if (this.dirRecords.push(h.dirRecord), b)
          this.push({ data: function(g) {
            return f.DATA_DESCRIPTOR + o(g.crc32, 4) + o(g.compressedSize, 4) + o(g.uncompressedSize, 4);
          }(d), meta: { percent: 100 } });
        else
          for (this.push({ data: h.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length; )
            this.push(this.contentBuffer.shift());
        this.currentFile = null;
      }, v.prototype.flush = function() {
        for (var d = this.bytesWritten, b = 0; b < this.dirRecords.length; b++)
          this.push({ data: this.dirRecords[b], meta: { percent: 100 } });
        var h = this.bytesWritten - d, g = function(m, w, S, E, k) {
          var R = a.transformTo("string", k(E));
          return f.CENTRAL_DIRECTORY_END + "\0\0\0\0" + o(m, 2) + o(m, 2) + o(w, 4) + o(S, 4) + o(R.length, 2) + R;
        }(this.dirRecords.length, h, d, this.zipComment, this.encodeFileName);
        this.push({ data: g, meta: { percent: 100 } });
      }, v.prototype.prepareNextSource = function() {
        this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
      }, v.prototype.registerPrevious = function(d) {
        this._sources.push(d);
        var b = this;
        return d.on("data", function(h) {
          b.processChunk(h);
        }), d.on("end", function() {
          b.closedSource(b.previous.streamInfo), b._sources.length ? b.prepareNextSource() : b.end();
        }), d.on("error", function(h) {
          b.error(h);
        }), this;
      }, v.prototype.resume = function() {
        return !!l.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0));
      }, v.prototype.error = function(d) {
        var b = this._sources;
        if (!l.prototype.error.call(this, d))
          return !1;
        for (var h = 0; h < b.length; h++)
          try {
            b[h].error(d);
          } catch {
          }
        return !0;
      }, v.prototype.lock = function() {
        l.prototype.lock.call(this);
        for (var d = this._sources, b = 0; b < d.length; b++)
          d[b].lock();
      }, n.exports = v;
    }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }], 9: [function(r, n, i) {
      var o = r("../compressions"), s = r("./ZipFileWorker");
      i.generateWorker = function(a, l, c) {
        var u = new s(l.streamFiles, c, l.platform, l.encodeFileName), f = 0;
        try {
          a.forEach(function(v, d) {
            f++;
            var b = function(w, S) {
              var E = w || S, k = o[E];
              if (!k)
                throw new Error(E + " is not a valid compression method !");
              return k;
            }(d.options.compression, l.compression), h = d.options.compressionOptions || l.compressionOptions || {}, g = d.dir, m = d.date;
            d._compressWorker(b, h).withStreamInfo("file", { name: v, dir: g, date: m, comment: d.comment || "", unixPermissions: d.unixPermissions, dosPermissions: d.dosPermissions }).pipe(u);
          }), u.entriesCount = f;
        } catch (v) {
          u.error(v);
        }
        return u;
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
      var o = r("./utils"), s = r("./external"), a = r("./utf8"), l = r("./zipEntries"), c = r("./stream/Crc32Probe"), u = r("./nodejsUtils");
      function f(v) {
        return new s.Promise(function(d, b) {
          var h = v.decompressed.getContentWorker().pipe(new c());
          h.on("error", function(g) {
            b(g);
          }).on("end", function() {
            h.streamInfo.crc32 !== v.decompressed.crc32 ? b(new Error("Corrupted zip : CRC32 mismatch")) : d();
          }).resume();
        });
      }
      n.exports = function(v, d) {
        var b = this;
        return d = o.extend(d || {}, { base64: !1, checkCRC32: !1, optimizedBinaryString: !1, createFolders: !1, decodeFileName: a.utf8decode }), u.isNode && u.isStream(v) ? s.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : o.prepareContent("the loaded zip file", v, !0, d.optimizedBinaryString, d.base64).then(function(h) {
          var g = new l(d);
          return g.load(h), g;
        }).then(function(h) {
          var g = [s.Promise.resolve(h)], m = h.files;
          if (d.checkCRC32)
            for (var w = 0; w < m.length; w++)
              g.push(f(m[w]));
          return s.Promise.all(g);
        }).then(function(h) {
          for (var g = h.shift(), m = g.files, w = 0; w < m.length; w++) {
            var S = m[w], E = S.fileNameStr, k = o.resolve(S.fileNameStr);
            b.file(k, S.decompressed, { binary: !0, optimizedBinaryString: !0, date: S.date, dir: S.dir, comment: S.fileCommentStr.length ? S.fileCommentStr : null, unixPermissions: S.unixPermissions, dosPermissions: S.dosPermissions, createFolders: d.createFolders }), S.dir || (b.file(k).unsafeOriginalName = E);
          }
          return g.zipComment.length && (b.comment = g.zipComment), b;
        });
      };
    }, { "./external": 6, "./nodejsUtils": 14, "./stream/Crc32Probe": 25, "./utf8": 31, "./utils": 32, "./zipEntries": 33 }], 12: [function(r, n, i) {
      var o = r("../utils"), s = r("../stream/GenericWorker");
      function a(l, c) {
        s.call(this, "Nodejs stream input adapter for " + l), this._upstreamEnded = !1, this._bindStream(c);
      }
      o.inherits(a, s), a.prototype._bindStream = function(l) {
        var c = this;
        (this._stream = l).pause(), l.on("data", function(u) {
          c.push({ data: u, meta: { percent: 0 } });
        }).on("error", function(u) {
          c.isPaused ? this.generatedError = u : c.error(u);
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
        var u = this;
        a.on("data", function(f, v) {
          u.push(f) || u._helper.pause(), c && c(v);
        }).on("error", function(f) {
          u.emit("error", f);
        }).on("end", function() {
          u.push(null);
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
      function o(k, R, T) {
        var U, D = a.getTypeOf(R), K = a.extend(T || {}, u);
        K.date = K.date || /* @__PURE__ */ new Date(), K.compression !== null && (K.compression = K.compression.toUpperCase()), typeof K.unixPermissions == "string" && (K.unixPermissions = parseInt(K.unixPermissions, 8)), K.unixPermissions && 16384 & K.unixPermissions && (K.dir = !0), K.dosPermissions && 16 & K.dosPermissions && (K.dir = !0), K.dir && (k = m(k)), K.createFolders && (U = g(k)) && w.call(this, U, !0);
        var q = D === "string" && K.binary === !1 && K.base64 === !1;
        T && T.binary !== void 0 || (K.binary = !q), (R instanceof f && R.uncompressedSize === 0 || K.dir || !R || R.length === 0) && (K.base64 = !1, K.binary = !0, R = "", K.compression = "STORE", D = "string");
        var A = null;
        A = R instanceof f || R instanceof l ? R : b.isNode && b.isStream(R) ? new h(k, R) : a.prepareContent(k, R, K.binary, K.optimizedBinaryString, K.base64);
        var I = new v(k, A, K);
        this.files[k] = I;
      }
      var s = r("./utf8"), a = r("./utils"), l = r("./stream/GenericWorker"), c = r("./stream/StreamHelper"), u = r("./defaults"), f = r("./compressedObject"), v = r("./zipObject"), d = r("./generate"), b = r("./nodejsUtils"), h = r("./nodejs/NodejsStreamInputAdapter"), g = function(k) {
        k.slice(-1) === "/" && (k = k.substring(0, k.length - 1));
        var R = k.lastIndexOf("/");
        return 0 < R ? k.substring(0, R) : "";
      }, m = function(k) {
        return k.slice(-1) !== "/" && (k += "/"), k;
      }, w = function(k, R) {
        return R = R !== void 0 ? R : u.createFolders, k = m(k), this.files[k] || o.call(this, k, null, { dir: !0, createFolders: R }), this.files[k];
      };
      function S(k) {
        return Object.prototype.toString.call(k) === "[object RegExp]";
      }
      var E = { load: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, forEach: function(k) {
        var R, T, U;
        for (R in this.files)
          U = this.files[R], (T = R.slice(this.root.length, R.length)) && R.slice(0, this.root.length) === this.root && k(T, U);
      }, filter: function(k) {
        var R = [];
        return this.forEach(function(T, U) {
          k(T, U) && R.push(U);
        }), R;
      }, file: function(k, R, T) {
        if (arguments.length !== 1)
          return k = this.root + k, o.call(this, k, R, T), this;
        if (S(k)) {
          var U = k;
          return this.filter(function(K, q) {
            return !q.dir && U.test(K);
          });
        }
        var D = this.files[this.root + k];
        return D && !D.dir ? D : null;
      }, folder: function(k) {
        if (!k)
          return this;
        if (S(k))
          return this.filter(function(D, K) {
            return K.dir && k.test(D);
          });
        var R = this.root + k, T = w.call(this, R), U = this.clone();
        return U.root = T.name, U;
      }, remove: function(k) {
        k = this.root + k;
        var R = this.files[k];
        if (R || (k.slice(-1) !== "/" && (k += "/"), R = this.files[k]), R && !R.dir)
          delete this.files[k];
        else
          for (var T = this.filter(function(D, K) {
            return K.name.slice(0, k.length) === k;
          }), U = 0; U < T.length; U++)
            delete this.files[T[U].name];
        return this;
      }, generate: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, generateInternalStream: function(k) {
        var R, T = {};
        try {
          if ((T = a.extend(k || {}, { streamFiles: !1, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: s.utf8encode })).type = T.type.toLowerCase(), T.compression = T.compression.toUpperCase(), T.type === "binarystring" && (T.type = "string"), !T.type)
            throw new Error("No output type specified.");
          a.checkSupport(T.type), T.platform !== "darwin" && T.platform !== "freebsd" && T.platform !== "linux" && T.platform !== "sunos" || (T.platform = "UNIX"), T.platform === "win32" && (T.platform = "DOS");
          var U = T.comment || this.comment || "";
          R = d.generateWorker(this, T, U);
        } catch (D) {
          (R = new l("error")).error(D);
        }
        return new c(R, T.type || "string", T.mimeType);
      }, generateAsync: function(k, R) {
        return this.generateInternalStream(k).accumulate(R);
      }, generateNodeStream: function(k, R) {
        return (k = k || {}).type || (k.type = "nodebuffer"), this.generateInternalStream(k).toNodejsStream(R);
      } };
      n.exports = E;
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
        for (var l = a.charCodeAt(0), c = a.charCodeAt(1), u = a.charCodeAt(2), f = a.charCodeAt(3), v = this.length - 4; 0 <= v; --v)
          if (this.data[v] === l && this.data[v + 1] === c && this.data[v + 2] === u && this.data[v + 3] === f)
            return v - this.zero;
        return -1;
      }, s.prototype.readAndCheckSignature = function(a) {
        var l = a.charCodeAt(0), c = a.charCodeAt(1), u = a.charCodeAt(2), f = a.charCodeAt(3), v = this.readData(4);
        return l === v[0] && c === v[1] && u === v[2] && f === v[3];
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
      var o = r("../utils"), s = r("../support"), a = r("./ArrayReader"), l = r("./StringReader"), c = r("./NodeBufferReader"), u = r("./Uint8ArrayReader");
      n.exports = function(f) {
        var v = o.getTypeOf(f);
        return o.checkSupport(v), v !== "string" || s.uint8array ? v === "nodebuffer" ? new c(f) : s.uint8array ? new u(o.transformTo("uint8array", f)) : new a(o.transformTo("array", f)) : new l(f);
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
        this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, l.then(function(u) {
          c.dataIsReady = !0, c.data = u, c.max = u && u.length || 0, c.type = o.getTypeOf(u), c.isPaused || c._tickAndRepeat();
        }, function(u) {
          c.error(u);
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
      var o = r("../utils"), s = r("./ConvertWorker"), a = r("./GenericWorker"), l = r("../base64"), c = r("../support"), u = r("../external"), f = null;
      if (c.nodestream)
        try {
          f = r("../nodejs/NodejsStreamOutputAdapter");
        } catch {
        }
      function v(b, h) {
        return new u.Promise(function(g, m) {
          var w = [], S = b._internalType, E = b._outputType, k = b._mimeType;
          b.on("data", function(R, T) {
            w.push(R), h && h(T);
          }).on("error", function(R) {
            w = [], m(R);
          }).on("end", function() {
            try {
              var R = function(T, U, D) {
                switch (T) {
                  case "blob":
                    return o.newBlob(o.transformTo("arraybuffer", U), D);
                  case "base64":
                    return l.encode(U);
                  default:
                    return o.transformTo(T, U);
                }
              }(E, function(T, U) {
                var D, K = 0, q = null, A = 0;
                for (D = 0; D < U.length; D++)
                  A += U[D].length;
                switch (T) {
                  case "string":
                    return U.join("");
                  case "array":
                    return Array.prototype.concat.apply([], U);
                  case "uint8array":
                    for (q = new Uint8Array(A), D = 0; D < U.length; D++)
                      q.set(U[D], K), K += U[D].length;
                    return q;
                  case "nodebuffer":
                    return Buffer.concat(U);
                  default:
                    throw new Error("concat : unsupported type '" + T + "'");
                }
              }(S, w), k);
              g(R);
            } catch (T) {
              m(T);
            }
            w = [];
          }).resume();
        });
      }
      function d(b, h, g) {
        var m = h;
        switch (h) {
          case "blob":
          case "arraybuffer":
            m = "uint8array";
            break;
          case "base64":
            m = "string";
        }
        try {
          this._internalType = m, this._outputType = h, this._mimeType = g, o.checkSupport(m), this._worker = b.pipe(new s(m)), b.lock();
        } catch (w) {
          this._worker = new a("error"), this._worker.error(w);
        }
      }
      d.prototype = { accumulate: function(b) {
        return v(this, b);
      }, on: function(b, h) {
        var g = this;
        return b === "data" ? this._worker.on(b, function(m) {
          h.call(g, m.data, m.meta);
        }) : this._worker.on(b, function() {
          o.delay(h, arguments, g);
        }), this;
      }, resume: function() {
        return o.delay(this._worker.resume, [], this._worker), this;
      }, pause: function() {
        return this._worker.pause(), this;
      }, toNodejsStream: function(b) {
        if (o.checkSupport("nodestream"), this._outputType !== "nodebuffer")
          throw new Error(this._outputType + " is not supported by this method");
        return new f(this, { objectMode: this._outputType !== "nodebuffer" }, b);
      } }, n.exports = d;
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
      for (var o = r("./utils"), s = r("./support"), a = r("./nodejsUtils"), l = r("./stream/GenericWorker"), c = new Array(256), u = 0; u < 256; u++)
        c[u] = 252 <= u ? 6 : 248 <= u ? 5 : 240 <= u ? 4 : 224 <= u ? 3 : 192 <= u ? 2 : 1;
      c[254] = c[254] = 1;
      function f() {
        l.call(this, "utf-8 decode"), this.leftOver = null;
      }
      function v() {
        l.call(this, "utf-8 encode");
      }
      i.utf8encode = function(d) {
        return s.nodebuffer ? a.newBufferFrom(d, "utf-8") : function(b) {
          var h, g, m, w, S, E = b.length, k = 0;
          for (w = 0; w < E; w++)
            (64512 & (g = b.charCodeAt(w))) == 55296 && w + 1 < E && (64512 & (m = b.charCodeAt(w + 1))) == 56320 && (g = 65536 + (g - 55296 << 10) + (m - 56320), w++), k += g < 128 ? 1 : g < 2048 ? 2 : g < 65536 ? 3 : 4;
          for (h = s.uint8array ? new Uint8Array(k) : new Array(k), w = S = 0; S < k; w++)
            (64512 & (g = b.charCodeAt(w))) == 55296 && w + 1 < E && (64512 & (m = b.charCodeAt(w + 1))) == 56320 && (g = 65536 + (g - 55296 << 10) + (m - 56320), w++), g < 128 ? h[S++] = g : (g < 2048 ? h[S++] = 192 | g >>> 6 : (g < 65536 ? h[S++] = 224 | g >>> 12 : (h[S++] = 240 | g >>> 18, h[S++] = 128 | g >>> 12 & 63), h[S++] = 128 | g >>> 6 & 63), h[S++] = 128 | 63 & g);
          return h;
        }(d);
      }, i.utf8decode = function(d) {
        return s.nodebuffer ? o.transformTo("nodebuffer", d).toString("utf-8") : function(b) {
          var h, g, m, w, S = b.length, E = new Array(2 * S);
          for (h = g = 0; h < S; )
            if ((m = b[h++]) < 128)
              E[g++] = m;
            else if (4 < (w = c[m]))
              E[g++] = 65533, h += w - 1;
            else {
              for (m &= w === 2 ? 31 : w === 3 ? 15 : 7; 1 < w && h < S; )
                m = m << 6 | 63 & b[h++], w--;
              1 < w ? E[g++] = 65533 : m < 65536 ? E[g++] = m : (m -= 65536, E[g++] = 55296 | m >> 10 & 1023, E[g++] = 56320 | 1023 & m);
            }
          return E.length !== g && (E.subarray ? E = E.subarray(0, g) : E.length = g), o.applyFromCharCode(E);
        }(d = o.transformTo(s.uint8array ? "uint8array" : "array", d));
      }, o.inherits(f, l), f.prototype.processChunk = function(d) {
        var b = o.transformTo(s.uint8array ? "uint8array" : "array", d.data);
        if (this.leftOver && this.leftOver.length) {
          if (s.uint8array) {
            var h = b;
            (b = new Uint8Array(h.length + this.leftOver.length)).set(this.leftOver, 0), b.set(h, this.leftOver.length);
          } else
            b = this.leftOver.concat(b);
          this.leftOver = null;
        }
        var g = function(w, S) {
          var E;
          for ((S = S || w.length) > w.length && (S = w.length), E = S - 1; 0 <= E && (192 & w[E]) == 128; )
            E--;
          return E < 0 || E === 0 ? S : E + c[w[E]] > S ? E : S;
        }(b), m = b;
        g !== b.length && (s.uint8array ? (m = b.subarray(0, g), this.leftOver = b.subarray(g, b.length)) : (m = b.slice(0, g), this.leftOver = b.slice(g, b.length))), this.push({ data: i.utf8decode(m), meta: d.meta });
      }, f.prototype.flush = function() {
        this.leftOver && this.leftOver.length && (this.push({ data: i.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
      }, i.Utf8DecodeWorker = f, o.inherits(v, l), v.prototype.processChunk = function(d) {
        this.push({ data: i.utf8encode(d.data), meta: d.meta });
      }, i.Utf8EncodeWorker = v;
    }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(r, n, i) {
      var o = r("./support"), s = r("./base64"), a = r("./nodejsUtils"), l = r("./external");
      function c(h) {
        return h;
      }
      function u(h, g) {
        for (var m = 0; m < h.length; ++m)
          g[m] = 255 & h.charCodeAt(m);
        return g;
      }
      r("setimmediate"), i.newBlob = function(h, g) {
        i.checkSupport("blob");
        try {
          return new Blob([h], { type: g });
        } catch {
          try {
            var m = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            return m.append(h), m.getBlob(g);
          } catch {
            throw new Error("Bug : can't construct the Blob.");
          }
        }
      };
      var f = { stringifyByChunk: function(h, g, m) {
        var w = [], S = 0, E = h.length;
        if (E <= m)
          return String.fromCharCode.apply(null, h);
        for (; S < E; )
          g === "array" || g === "nodebuffer" ? w.push(String.fromCharCode.apply(null, h.slice(S, Math.min(S + m, E)))) : w.push(String.fromCharCode.apply(null, h.subarray(S, Math.min(S + m, E)))), S += m;
        return w.join("");
      }, stringifyByChar: function(h) {
        for (var g = "", m = 0; m < h.length; m++)
          g += String.fromCharCode(h[m]);
        return g;
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
      function v(h) {
        var g = 65536, m = i.getTypeOf(h), w = !0;
        if (m === "uint8array" ? w = f.applyCanBeUsed.uint8array : m === "nodebuffer" && (w = f.applyCanBeUsed.nodebuffer), w)
          for (; 1 < g; )
            try {
              return f.stringifyByChunk(h, m, g);
            } catch {
              g = Math.floor(g / 2);
            }
        return f.stringifyByChar(h);
      }
      function d(h, g) {
        for (var m = 0; m < h.length; m++)
          g[m] = h[m];
        return g;
      }
      i.applyFromCharCode = v;
      var b = {};
      b.string = { string: c, array: function(h) {
        return u(h, new Array(h.length));
      }, arraybuffer: function(h) {
        return b.string.uint8array(h).buffer;
      }, uint8array: function(h) {
        return u(h, new Uint8Array(h.length));
      }, nodebuffer: function(h) {
        return u(h, a.allocBuffer(h.length));
      } }, b.array = { string: v, array: c, arraybuffer: function(h) {
        return new Uint8Array(h).buffer;
      }, uint8array: function(h) {
        return new Uint8Array(h);
      }, nodebuffer: function(h) {
        return a.newBufferFrom(h);
      } }, b.arraybuffer = { string: function(h) {
        return v(new Uint8Array(h));
      }, array: function(h) {
        return d(new Uint8Array(h), new Array(h.byteLength));
      }, arraybuffer: c, uint8array: function(h) {
        return new Uint8Array(h);
      }, nodebuffer: function(h) {
        return a.newBufferFrom(new Uint8Array(h));
      } }, b.uint8array = { string: v, array: function(h) {
        return d(h, new Array(h.length));
      }, arraybuffer: function(h) {
        return h.buffer;
      }, uint8array: c, nodebuffer: function(h) {
        return a.newBufferFrom(h);
      } }, b.nodebuffer = { string: v, array: function(h) {
        return d(h, new Array(h.length));
      }, arraybuffer: function(h) {
        return b.nodebuffer.uint8array(h).buffer;
      }, uint8array: function(h) {
        return d(h, new Uint8Array(h.length));
      }, nodebuffer: c }, i.transformTo = function(h, g) {
        if (g = g || "", !h)
          return g;
        i.checkSupport(h);
        var m = i.getTypeOf(g);
        return b[m][h](g);
      }, i.resolve = function(h) {
        for (var g = h.split("/"), m = [], w = 0; w < g.length; w++) {
          var S = g[w];
          S === "." || S === "" && w !== 0 && w !== g.length - 1 || (S === ".." ? m.pop() : m.push(S));
        }
        return m.join("/");
      }, i.getTypeOf = function(h) {
        return typeof h == "string" ? "string" : Object.prototype.toString.call(h) === "[object Array]" ? "array" : o.nodebuffer && a.isBuffer(h) ? "nodebuffer" : o.uint8array && h instanceof Uint8Array ? "uint8array" : o.arraybuffer && h instanceof ArrayBuffer ? "arraybuffer" : void 0;
      }, i.checkSupport = function(h) {
        if (!o[h.toLowerCase()])
          throw new Error(h + " is not supported by this platform");
      }, i.MAX_VALUE_16BITS = 65535, i.MAX_VALUE_32BITS = -1, i.pretty = function(h) {
        var g, m, w = "";
        for (m = 0; m < (h || "").length; m++)
          w += "\\x" + ((g = h.charCodeAt(m)) < 16 ? "0" : "") + g.toString(16).toUpperCase();
        return w;
      }, i.delay = function(h, g, m) {
        setImmediate(function() {
          h.apply(m || null, g || []);
        });
      }, i.inherits = function(h, g) {
        function m() {
        }
        m.prototype = g.prototype, h.prototype = new m();
      }, i.extend = function() {
        var h, g, m = {};
        for (h = 0; h < arguments.length; h++)
          for (g in arguments[h])
            Object.prototype.hasOwnProperty.call(arguments[h], g) && m[g] === void 0 && (m[g] = arguments[h][g]);
        return m;
      }, i.prepareContent = function(h, g, m, w, S) {
        return l.Promise.resolve(g).then(function(E) {
          return o.blob && (E instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(E)) !== -1) && typeof FileReader < "u" ? new l.Promise(function(k, R) {
            var T = new FileReader();
            T.onload = function(U) {
              k(U.target.result);
            }, T.onerror = function(U) {
              R(U.target.error);
            }, T.readAsArrayBuffer(E);
          }) : E;
        }).then(function(E) {
          var k = i.getTypeOf(E);
          return k ? (k === "arraybuffer" ? E = i.transformTo("uint8array", E) : k === "string" && (S ? E = s.decode(E) : m && w !== !0 && (E = function(R) {
            return u(R, o.uint8array ? new Uint8Array(R.length) : new Array(R.length));
          }(E))), E) : l.Promise.reject(new Error("Can't read the data of '" + h + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
        });
      };
    }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, setimmediate: 54 }], 33: [function(r, n, i) {
      var o = r("./reader/readerFor"), s = r("./utils"), a = r("./signature"), l = r("./zipEntry"), c = r("./support");
      function u(f) {
        this.files = [], this.loadOptions = f;
      }
      u.prototype = { checkSignature: function(f) {
        if (!this.reader.readAndCheckSignature(f)) {
          this.reader.index -= 4;
          var v = this.reader.readString(4);
          throw new Error("Corrupted zip or bug: unexpected signature (" + s.pretty(v) + ", expected " + s.pretty(f) + ")");
        }
      }, isSignature: function(f, v) {
        var d = this.reader.index;
        this.reader.setIndex(f);
        var b = this.reader.readString(4) === v;
        return this.reader.setIndex(d), b;
      }, readBlockEndOfCentral: function() {
        this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
        var f = this.reader.readData(this.zipCommentLength), v = c.uint8array ? "uint8array" : "array", d = s.transformTo(v, f);
        this.zipComment = this.loadOptions.decodeFileName(d);
      }, readBlockZip64EndOfCentral: function() {
        this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
        for (var f, v, d, b = this.zip64EndOfCentralSize - 44; 0 < b; )
          f = this.reader.readInt(2), v = this.reader.readInt(4), d = this.reader.readData(v), this.zip64ExtensibleData[f] = { id: f, length: v, value: d };
      }, readBlockZip64EndOfCentralLocator: function() {
        if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount)
          throw new Error("Multi-volumes zip are not supported");
      }, readLocalFiles: function() {
        var f, v;
        for (f = 0; f < this.files.length; f++)
          v = this.files[f], this.reader.setIndex(v.localHeaderOffset), this.checkSignature(a.LOCAL_FILE_HEADER), v.readLocalPart(this.reader), v.handleUTF8(), v.processAttributes();
      }, readCentralDir: function() {
        var f;
        for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER); )
          (f = new l({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(f);
        if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0)
          throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
      }, readEndOfCentral: function() {
        var f = this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);
        if (f < 0)
          throw this.isSignature(0, a.LOCAL_FILE_HEADER) ? new Error("Corrupted zip: can't find end of central directory") : new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
        this.reader.setIndex(f);
        var v = f;
        if (this.checkSignature(a.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === s.MAX_VALUE_16BITS || this.diskWithCentralDirStart === s.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === s.MAX_VALUE_16BITS || this.centralDirRecords === s.MAX_VALUE_16BITS || this.centralDirSize === s.MAX_VALUE_32BITS || this.centralDirOffset === s.MAX_VALUE_32BITS) {
          if (this.zip64 = !0, (f = this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0)
            throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
          if (this.reader.setIndex(f), this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, a.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0))
            throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
          this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
        }
        var d = this.centralDirOffset + this.centralDirSize;
        this.zip64 && (d += 20, d += 12 + this.zip64EndOfCentralSize);
        var b = v - d;
        if (0 < b)
          this.isSignature(v, a.CENTRAL_FILE_HEADER) || (this.reader.zero = b);
        else if (b < 0)
          throw new Error("Corrupted zip: missing " + Math.abs(b) + " bytes.");
      }, prepareReader: function(f) {
        this.reader = o(f);
      }, load: function(f) {
        this.prepareReader(f), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
      } }, n.exports = u;
    }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utils": 32, "./zipEntry": 34 }], 34: [function(r, n, i) {
      var o = r("./reader/readerFor"), s = r("./utils"), a = r("./compressedObject"), l = r("./crc32"), c = r("./utf8"), u = r("./compressions"), f = r("./support");
      function v(d, b) {
        this.options = d, this.loadOptions = b;
      }
      v.prototype = { isEncrypted: function() {
        return (1 & this.bitFlag) == 1;
      }, useUTF8: function() {
        return (2048 & this.bitFlag) == 2048;
      }, readLocalPart: function(d) {
        var b, h;
        if (d.skip(22), this.fileNameLength = d.readInt(2), h = d.readInt(2), this.fileName = d.readData(this.fileNameLength), d.skip(h), this.compressedSize === -1 || this.uncompressedSize === -1)
          throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
        if ((b = function(g) {
          for (var m in u)
            if (Object.prototype.hasOwnProperty.call(u, m) && u[m].magic === g)
              return u[m];
          return null;
        }(this.compressionMethod)) === null)
          throw new Error("Corrupted zip : compression " + s.pretty(this.compressionMethod) + " unknown (inner file : " + s.transformTo("string", this.fileName) + ")");
        this.decompressed = new a(this.compressedSize, this.uncompressedSize, this.crc32, b, d.readData(this.compressedSize));
      }, readCentralPart: function(d) {
        this.versionMadeBy = d.readInt(2), d.skip(2), this.bitFlag = d.readInt(2), this.compressionMethod = d.readString(2), this.date = d.readDate(), this.crc32 = d.readInt(4), this.compressedSize = d.readInt(4), this.uncompressedSize = d.readInt(4);
        var b = d.readInt(2);
        if (this.extraFieldsLength = d.readInt(2), this.fileCommentLength = d.readInt(2), this.diskNumberStart = d.readInt(2), this.internalFileAttributes = d.readInt(2), this.externalFileAttributes = d.readInt(4), this.localHeaderOffset = d.readInt(4), this.isEncrypted())
          throw new Error("Encrypted zip are not supported");
        d.skip(b), this.readExtraFields(d), this.parseZIP64ExtraField(d), this.fileComment = d.readData(this.fileCommentLength);
      }, processAttributes: function() {
        this.unixPermissions = null, this.dosPermissions = null;
        var d = this.versionMadeBy >> 8;
        this.dir = !!(16 & this.externalFileAttributes), d == 0 && (this.dosPermissions = 63 & this.externalFileAttributes), d == 3 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || this.fileNameStr.slice(-1) !== "/" || (this.dir = !0);
      }, parseZIP64ExtraField: function() {
        if (this.extraFields[1]) {
          var d = o(this.extraFields[1].value);
          this.uncompressedSize === s.MAX_VALUE_32BITS && (this.uncompressedSize = d.readInt(8)), this.compressedSize === s.MAX_VALUE_32BITS && (this.compressedSize = d.readInt(8)), this.localHeaderOffset === s.MAX_VALUE_32BITS && (this.localHeaderOffset = d.readInt(8)), this.diskNumberStart === s.MAX_VALUE_32BITS && (this.diskNumberStart = d.readInt(4));
        }
      }, readExtraFields: function(d) {
        var b, h, g, m = d.index + this.extraFieldsLength;
        for (this.extraFields || (this.extraFields = {}); d.index + 4 < m; )
          b = d.readInt(2), h = d.readInt(2), g = d.readData(h), this.extraFields[b] = { id: b, length: h, value: g };
        d.setIndex(m);
      }, handleUTF8: function() {
        var d = f.uint8array ? "uint8array" : "array";
        if (this.useUTF8())
          this.fileNameStr = c.utf8decode(this.fileName), this.fileCommentStr = c.utf8decode(this.fileComment);
        else {
          var b = this.findExtraFieldUnicodePath();
          if (b !== null)
            this.fileNameStr = b;
          else {
            var h = s.transformTo(d, this.fileName);
            this.fileNameStr = this.loadOptions.decodeFileName(h);
          }
          var g = this.findExtraFieldUnicodeComment();
          if (g !== null)
            this.fileCommentStr = g;
          else {
            var m = s.transformTo(d, this.fileComment);
            this.fileCommentStr = this.loadOptions.decodeFileName(m);
          }
        }
      }, findExtraFieldUnicodePath: function() {
        var d = this.extraFields[28789];
        if (d) {
          var b = o(d.value);
          return b.readInt(1) !== 1 || l(this.fileName) !== b.readInt(4) ? null : c.utf8decode(b.readData(d.length - 5));
        }
        return null;
      }, findExtraFieldUnicodeComment: function() {
        var d = this.extraFields[25461];
        if (d) {
          var b = o(d.value);
          return b.readInt(1) !== 1 || l(this.fileComment) !== b.readInt(4) ? null : c.utf8decode(b.readData(d.length - 5));
        }
        return null;
      } }, n.exports = v;
    }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }], 35: [function(r, n, i) {
      function o(b, h, g) {
        this.name = b, this.dir = g.dir, this.date = g.date, this.comment = g.comment, this.unixPermissions = g.unixPermissions, this.dosPermissions = g.dosPermissions, this._data = h, this._dataBinary = g.binary, this.options = { compression: g.compression, compressionOptions: g.compressionOptions };
      }
      var s = r("./stream/StreamHelper"), a = r("./stream/DataWorker"), l = r("./utf8"), c = r("./compressedObject"), u = r("./stream/GenericWorker");
      o.prototype = { internalStream: function(b) {
        var h = null, g = "string";
        try {
          if (!b)
            throw new Error("No output type specified.");
          var m = (g = b.toLowerCase()) === "string" || g === "text";
          g !== "binarystring" && g !== "text" || (g = "string"), h = this._decompressWorker();
          var w = !this._dataBinary;
          w && !m && (h = h.pipe(new l.Utf8EncodeWorker())), !w && m && (h = h.pipe(new l.Utf8DecodeWorker()));
        } catch (S) {
          (h = new u("error")).error(S);
        }
        return new s(h, g, "");
      }, async: function(b, h) {
        return this.internalStream(b).accumulate(h);
      }, nodeStream: function(b, h) {
        return this.internalStream(b || "nodebuffer").toNodejsStream(h);
      }, _compressWorker: function(b, h) {
        if (this._data instanceof c && this._data.compression.magic === b.magic)
          return this._data.getCompressedWorker();
        var g = this._decompressWorker();
        return this._dataBinary || (g = g.pipe(new l.Utf8EncodeWorker())), c.createWorkerFrom(g, b, h);
      }, _decompressWorker: function() {
        return this._data instanceof c ? this._data.getContentWorker() : this._data instanceof u ? this._data : new a(this._data);
      } };
      for (var f = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], v = function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, d = 0; d < f.length; d++)
        o.prototype[f[d]] = v;
      n.exports = o;
    }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(r, n, i) {
      (function(o) {
        var s, a, l = o.MutationObserver || o.WebKitMutationObserver;
        if (l) {
          var c = 0, u = new l(b), f = o.document.createTextNode("");
          u.observe(f, { characterData: !0 }), s = function() {
            f.data = c = ++c % 2;
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
          var v = new o.MessageChannel();
          v.port1.onmessage = b, s = function() {
            v.port2.postMessage(0);
          };
        }
        var d = [];
        function b() {
          var h, g;
          a = !0;
          for (var m = d.length; m; ) {
            for (g = d, d = [], h = -1; ++h < m; )
              g[h]();
            m = d.length;
          }
          a = !1;
        }
        n.exports = function(h) {
          d.push(h) !== 1 || a || s();
        };
      }).call(this, typeof ht < "u" ? ht : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 37: [function(r, n, i) {
      var o = r("immediate");
      function s() {
      }
      var a = {}, l = ["REJECTED"], c = ["FULFILLED"], u = ["PENDING"];
      function f(m) {
        if (typeof m != "function")
          throw new TypeError("resolver must be a function");
        this.state = u, this.queue = [], this.outcome = void 0, m !== s && h(this, m);
      }
      function v(m, w, S) {
        this.promise = m, typeof w == "function" && (this.onFulfilled = w, this.callFulfilled = this.otherCallFulfilled), typeof S == "function" && (this.onRejected = S, this.callRejected = this.otherCallRejected);
      }
      function d(m, w, S) {
        o(function() {
          var E;
          try {
            E = w(S);
          } catch (k) {
            return a.reject(m, k);
          }
          E === m ? a.reject(m, new TypeError("Cannot resolve promise with itself")) : a.resolve(m, E);
        });
      }
      function b(m) {
        var w = m && m.then;
        if (m && (typeof m == "object" || typeof m == "function") && typeof w == "function")
          return function() {
            w.apply(m, arguments);
          };
      }
      function h(m, w) {
        var S = !1;
        function E(T) {
          S || (S = !0, a.reject(m, T));
        }
        function k(T) {
          S || (S = !0, a.resolve(m, T));
        }
        var R = g(function() {
          w(k, E);
        });
        R.status === "error" && E(R.value);
      }
      function g(m, w) {
        var S = {};
        try {
          S.value = m(w), S.status = "success";
        } catch (E) {
          S.status = "error", S.value = E;
        }
        return S;
      }
      (n.exports = f).prototype.finally = function(m) {
        if (typeof m != "function")
          return this;
        var w = this.constructor;
        return this.then(function(S) {
          return w.resolve(m()).then(function() {
            return S;
          });
        }, function(S) {
          return w.resolve(m()).then(function() {
            throw S;
          });
        });
      }, f.prototype.catch = function(m) {
        return this.then(null, m);
      }, f.prototype.then = function(m, w) {
        if (typeof m != "function" && this.state === c || typeof w != "function" && this.state === l)
          return this;
        var S = new this.constructor(s);
        return this.state !== u ? d(S, this.state === c ? m : w, this.outcome) : this.queue.push(new v(S, m, w)), S;
      }, v.prototype.callFulfilled = function(m) {
        a.resolve(this.promise, m);
      }, v.prototype.otherCallFulfilled = function(m) {
        d(this.promise, this.onFulfilled, m);
      }, v.prototype.callRejected = function(m) {
        a.reject(this.promise, m);
      }, v.prototype.otherCallRejected = function(m) {
        d(this.promise, this.onRejected, m);
      }, a.resolve = function(m, w) {
        var S = g(b, w);
        if (S.status === "error")
          return a.reject(m, S.value);
        var E = S.value;
        if (E)
          h(m, E);
        else {
          m.state = c, m.outcome = w;
          for (var k = -1, R = m.queue.length; ++k < R; )
            m.queue[k].callFulfilled(w);
        }
        return m;
      }, a.reject = function(m, w) {
        m.state = l, m.outcome = w;
        for (var S = -1, E = m.queue.length; ++S < E; )
          m.queue[S].callRejected(w);
        return m;
      }, f.resolve = function(m) {
        return m instanceof this ? m : a.resolve(new this(s), m);
      }, f.reject = function(m) {
        var w = new this(s);
        return a.reject(w, m);
      }, f.all = function(m) {
        var w = this;
        if (Object.prototype.toString.call(m) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var S = m.length, E = !1;
        if (!S)
          return this.resolve([]);
        for (var k = new Array(S), R = 0, T = -1, U = new this(s); ++T < S; )
          D(m[T], T);
        return U;
        function D(K, q) {
          w.resolve(K).then(function(A) {
            k[q] = A, ++R !== S || E || (E = !0, a.resolve(U, k));
          }, function(A) {
            E || (E = !0, a.reject(U, A));
          });
        }
      }, f.race = function(m) {
        var w = this;
        if (Object.prototype.toString.call(m) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var S = m.length, E = !1;
        if (!S)
          return this.resolve([]);
        for (var k = -1, R = new this(s); ++k < S; )
          T = m[k], w.resolve(T).then(function(U) {
            E || (E = !0, a.resolve(R, U));
          }, function(U) {
            E || (E = !0, a.reject(R, U));
          });
        var T;
        return R;
      };
    }, { immediate: 36 }], 38: [function(r, n, i) {
      var o = {};
      (0, r("./lib/utils/common").assign)(o, r("./lib/deflate"), r("./lib/inflate"), r("./lib/zlib/constants")), n.exports = o;
    }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(r, n, i) {
      var o = r("./zlib/deflate"), s = r("./utils/common"), a = r("./utils/strings"), l = r("./zlib/messages"), c = r("./zlib/zstream"), u = Object.prototype.toString, f = 0, v = -1, d = 0, b = 8;
      function h(m) {
        if (!(this instanceof h))
          return new h(m);
        this.options = s.assign({ level: v, method: b, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: d, to: "" }, m || {});
        var w = this.options;
        w.raw && 0 < w.windowBits ? w.windowBits = -w.windowBits : w.gzip && 0 < w.windowBits && w.windowBits < 16 && (w.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new c(), this.strm.avail_out = 0;
        var S = o.deflateInit2(this.strm, w.level, w.method, w.windowBits, w.memLevel, w.strategy);
        if (S !== f)
          throw new Error(l[S]);
        if (w.header && o.deflateSetHeader(this.strm, w.header), w.dictionary) {
          var E;
          if (E = typeof w.dictionary == "string" ? a.string2buf(w.dictionary) : u.call(w.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(w.dictionary) : w.dictionary, (S = o.deflateSetDictionary(this.strm, E)) !== f)
            throw new Error(l[S]);
          this._dict_set = !0;
        }
      }
      function g(m, w) {
        var S = new h(w);
        if (S.push(m, !0), S.err)
          throw S.msg || l[S.err];
        return S.result;
      }
      h.prototype.push = function(m, w) {
        var S, E, k = this.strm, R = this.options.chunkSize;
        if (this.ended)
          return !1;
        E = w === ~~w ? w : w === !0 ? 4 : 0, typeof m == "string" ? k.input = a.string2buf(m) : u.call(m) === "[object ArrayBuffer]" ? k.input = new Uint8Array(m) : k.input = m, k.next_in = 0, k.avail_in = k.input.length;
        do {
          if (k.avail_out === 0 && (k.output = new s.Buf8(R), k.next_out = 0, k.avail_out = R), (S = o.deflate(k, E)) !== 1 && S !== f)
            return this.onEnd(S), !(this.ended = !0);
          k.avail_out !== 0 && (k.avail_in !== 0 || E !== 4 && E !== 2) || (this.options.to === "string" ? this.onData(a.buf2binstring(s.shrinkBuf(k.output, k.next_out))) : this.onData(s.shrinkBuf(k.output, k.next_out)));
        } while ((0 < k.avail_in || k.avail_out === 0) && S !== 1);
        return E === 4 ? (S = o.deflateEnd(this.strm), this.onEnd(S), this.ended = !0, S === f) : E !== 2 || (this.onEnd(f), !(k.avail_out = 0));
      }, h.prototype.onData = function(m) {
        this.chunks.push(m);
      }, h.prototype.onEnd = function(m) {
        m === f && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = s.flattenChunks(this.chunks)), this.chunks = [], this.err = m, this.msg = this.strm.msg;
      }, i.Deflate = h, i.deflate = g, i.deflateRaw = function(m, w) {
        return (w = w || {}).raw = !0, g(m, w);
      }, i.gzip = function(m, w) {
        return (w = w || {}).gzip = !0, g(m, w);
      };
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(r, n, i) {
      var o = r("./zlib/inflate"), s = r("./utils/common"), a = r("./utils/strings"), l = r("./zlib/constants"), c = r("./zlib/messages"), u = r("./zlib/zstream"), f = r("./zlib/gzheader"), v = Object.prototype.toString;
      function d(h) {
        if (!(this instanceof d))
          return new d(h);
        this.options = s.assign({ chunkSize: 16384, windowBits: 0, to: "" }, h || {});
        var g = this.options;
        g.raw && 0 <= g.windowBits && g.windowBits < 16 && (g.windowBits = -g.windowBits, g.windowBits === 0 && (g.windowBits = -15)), !(0 <= g.windowBits && g.windowBits < 16) || h && h.windowBits || (g.windowBits += 32), 15 < g.windowBits && g.windowBits < 48 && !(15 & g.windowBits) && (g.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new u(), this.strm.avail_out = 0;
        var m = o.inflateInit2(this.strm, g.windowBits);
        if (m !== l.Z_OK)
          throw new Error(c[m]);
        this.header = new f(), o.inflateGetHeader(this.strm, this.header);
      }
      function b(h, g) {
        var m = new d(g);
        if (m.push(h, !0), m.err)
          throw m.msg || c[m.err];
        return m.result;
      }
      d.prototype.push = function(h, g) {
        var m, w, S, E, k, R, T = this.strm, U = this.options.chunkSize, D = this.options.dictionary, K = !1;
        if (this.ended)
          return !1;
        w = g === ~~g ? g : g === !0 ? l.Z_FINISH : l.Z_NO_FLUSH, typeof h == "string" ? T.input = a.binstring2buf(h) : v.call(h) === "[object ArrayBuffer]" ? T.input = new Uint8Array(h) : T.input = h, T.next_in = 0, T.avail_in = T.input.length;
        do {
          if (T.avail_out === 0 && (T.output = new s.Buf8(U), T.next_out = 0, T.avail_out = U), (m = o.inflate(T, l.Z_NO_FLUSH)) === l.Z_NEED_DICT && D && (R = typeof D == "string" ? a.string2buf(D) : v.call(D) === "[object ArrayBuffer]" ? new Uint8Array(D) : D, m = o.inflateSetDictionary(this.strm, R)), m === l.Z_BUF_ERROR && K === !0 && (m = l.Z_OK, K = !1), m !== l.Z_STREAM_END && m !== l.Z_OK)
            return this.onEnd(m), !(this.ended = !0);
          T.next_out && (T.avail_out !== 0 && m !== l.Z_STREAM_END && (T.avail_in !== 0 || w !== l.Z_FINISH && w !== l.Z_SYNC_FLUSH) || (this.options.to === "string" ? (S = a.utf8border(T.output, T.next_out), E = T.next_out - S, k = a.buf2string(T.output, S), T.next_out = E, T.avail_out = U - E, E && s.arraySet(T.output, T.output, S, E, 0), this.onData(k)) : this.onData(s.shrinkBuf(T.output, T.next_out)))), T.avail_in === 0 && T.avail_out === 0 && (K = !0);
        } while ((0 < T.avail_in || T.avail_out === 0) && m !== l.Z_STREAM_END);
        return m === l.Z_STREAM_END && (w = l.Z_FINISH), w === l.Z_FINISH ? (m = o.inflateEnd(this.strm), this.onEnd(m), this.ended = !0, m === l.Z_OK) : w !== l.Z_SYNC_FLUSH || (this.onEnd(l.Z_OK), !(T.avail_out = 0));
      }, d.prototype.onData = function(h) {
        this.chunks.push(h);
      }, d.prototype.onEnd = function(h) {
        h === l.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = s.flattenChunks(this.chunks)), this.chunks = [], this.err = h, this.msg = this.strm.msg;
      }, i.Inflate = d, i.inflate = b, i.inflateRaw = function(h, g) {
        return (g = g || {}).raw = !0, b(h, g);
      }, i.ungzip = b;
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/constants": 44, "./zlib/gzheader": 47, "./zlib/inflate": 49, "./zlib/messages": 51, "./zlib/zstream": 53 }], 41: [function(r, n, i) {
      var o = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
      i.assign = function(l) {
        for (var c = Array.prototype.slice.call(arguments, 1); c.length; ) {
          var u = c.shift();
          if (u) {
            if (typeof u != "object")
              throw new TypeError(u + "must be non-object");
            for (var f in u)
              u.hasOwnProperty(f) && (l[f] = u[f]);
          }
        }
        return l;
      }, i.shrinkBuf = function(l, c) {
        return l.length === c ? l : l.subarray ? l.subarray(0, c) : (l.length = c, l);
      };
      var s = { arraySet: function(l, c, u, f, v) {
        if (c.subarray && l.subarray)
          l.set(c.subarray(u, u + f), v);
        else
          for (var d = 0; d < f; d++)
            l[v + d] = c[u + d];
      }, flattenChunks: function(l) {
        var c, u, f, v, d, b;
        for (c = f = 0, u = l.length; c < u; c++)
          f += l[c].length;
        for (b = new Uint8Array(f), c = v = 0, u = l.length; c < u; c++)
          d = l[c], b.set(d, v), v += d.length;
        return b;
      } }, a = { arraySet: function(l, c, u, f, v) {
        for (var d = 0; d < f; d++)
          l[v + d] = c[u + d];
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
      function u(f, v) {
        if (v < 65537 && (f.subarray && a || !f.subarray && s))
          return String.fromCharCode.apply(null, o.shrinkBuf(f, v));
        for (var d = "", b = 0; b < v; b++)
          d += String.fromCharCode(f[b]);
        return d;
      }
      l[254] = l[254] = 1, i.string2buf = function(f) {
        var v, d, b, h, g, m = f.length, w = 0;
        for (h = 0; h < m; h++)
          (64512 & (d = f.charCodeAt(h))) == 55296 && h + 1 < m && (64512 & (b = f.charCodeAt(h + 1))) == 56320 && (d = 65536 + (d - 55296 << 10) + (b - 56320), h++), w += d < 128 ? 1 : d < 2048 ? 2 : d < 65536 ? 3 : 4;
        for (v = new o.Buf8(w), h = g = 0; g < w; h++)
          (64512 & (d = f.charCodeAt(h))) == 55296 && h + 1 < m && (64512 & (b = f.charCodeAt(h + 1))) == 56320 && (d = 65536 + (d - 55296 << 10) + (b - 56320), h++), d < 128 ? v[g++] = d : (d < 2048 ? v[g++] = 192 | d >>> 6 : (d < 65536 ? v[g++] = 224 | d >>> 12 : (v[g++] = 240 | d >>> 18, v[g++] = 128 | d >>> 12 & 63), v[g++] = 128 | d >>> 6 & 63), v[g++] = 128 | 63 & d);
        return v;
      }, i.buf2binstring = function(f) {
        return u(f, f.length);
      }, i.binstring2buf = function(f) {
        for (var v = new o.Buf8(f.length), d = 0, b = v.length; d < b; d++)
          v[d] = f.charCodeAt(d);
        return v;
      }, i.buf2string = function(f, v) {
        var d, b, h, g, m = v || f.length, w = new Array(2 * m);
        for (d = b = 0; d < m; )
          if ((h = f[d++]) < 128)
            w[b++] = h;
          else if (4 < (g = l[h]))
            w[b++] = 65533, d += g - 1;
          else {
            for (h &= g === 2 ? 31 : g === 3 ? 15 : 7; 1 < g && d < m; )
              h = h << 6 | 63 & f[d++], g--;
            1 < g ? w[b++] = 65533 : h < 65536 ? w[b++] = h : (h -= 65536, w[b++] = 55296 | h >> 10 & 1023, w[b++] = 56320 | 1023 & h);
          }
        return u(w, b);
      }, i.utf8border = function(f, v) {
        var d;
        for ((v = v || f.length) > f.length && (v = f.length), d = v - 1; 0 <= d && (192 & f[d]) == 128; )
          d--;
        return d < 0 || d === 0 ? v : d + l[f[d]] > v ? d : v;
      };
    }, { "./common": 41 }], 43: [function(r, n, i) {
      n.exports = function(o, s, a, l) {
        for (var c = 65535 & o | 0, u = o >>> 16 & 65535 | 0, f = 0; a !== 0; ) {
          for (a -= f = 2e3 < a ? 2e3 : a; u = u + (c = c + s[l++] | 0) | 0, --f; )
            ;
          c %= 65521, u %= 65521;
        }
        return c | u << 16 | 0;
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
        var u = o, f = c + l;
        s ^= -1;
        for (var v = c; v < f; v++)
          s = s >>> 8 ^ u[255 & (s ^ a[v])];
        return -1 ^ s;
      };
    }, {}], 46: [function(r, n, i) {
      var o, s = r("../utils/common"), a = r("./trees"), l = r("./adler32"), c = r("./crc32"), u = r("./messages"), f = 0, v = 4, d = 0, b = -2, h = -1, g = 4, m = 2, w = 8, S = 9, E = 286, k = 30, R = 19, T = 2 * E + 1, U = 15, D = 3, K = 258, q = K + D + 1, A = 42, I = 113, y = 1, z = 2, ie = 3, W = 4;
      function ae(p, V) {
        return p.msg = u[V], V;
      }
      function H(p) {
        return (p << 1) - (4 < p ? 9 : 0);
      }
      function ee(p) {
        for (var V = p.length; 0 <= --V; )
          p[V] = 0;
      }
      function L(p) {
        var V = p.state, j = V.pending;
        j > p.avail_out && (j = p.avail_out), j !== 0 && (s.arraySet(p.output, V.pending_buf, V.pending_out, j, p.next_out), p.next_out += j, V.pending_out += j, p.total_out += j, p.avail_out -= j, V.pending -= j, V.pending === 0 && (V.pending_out = 0));
      }
      function P(p, V) {
        a._tr_flush_block(p, 0 <= p.block_start ? p.block_start : -1, p.strstart - p.block_start, V), p.block_start = p.strstart, L(p.strm);
      }
      function le(p, V) {
        p.pending_buf[p.pending++] = V;
      }
      function ne(p, V) {
        p.pending_buf[p.pending++] = V >>> 8 & 255, p.pending_buf[p.pending++] = 255 & V;
      }
      function Q(p, V) {
        var j, C, x = p.max_chain_length, N = p.strstart, B = p.prev_length, Z = p.nice_match, F = p.strstart > p.w_size - q ? p.strstart - (p.w_size - q) : 0, X = p.window, te = p.w_mask, J = p.prev, ce = p.strstart + K, ye = X[N + B - 1], ve = X[N + B];
        p.prev_length >= p.good_match && (x >>= 2), Z > p.lookahead && (Z = p.lookahead);
        do
          if (X[(j = V) + B] === ve && X[j + B - 1] === ye && X[j] === X[N] && X[++j] === X[N + 1]) {
            N += 2, j++;
            do
              ;
            while (X[++N] === X[++j] && X[++N] === X[++j] && X[++N] === X[++j] && X[++N] === X[++j] && X[++N] === X[++j] && X[++N] === X[++j] && X[++N] === X[++j] && X[++N] === X[++j] && N < ce);
            if (C = K - (ce - N), N = ce - K, B < C) {
              if (p.match_start = V, Z <= (B = C))
                break;
              ye = X[N + B - 1], ve = X[N + B];
            }
          }
        while ((V = J[V & te]) > F && --x != 0);
        return B <= p.lookahead ? B : p.lookahead;
      }
      function we(p) {
        var V, j, C, x, N, B, Z, F, X, te, J = p.w_size;
        do {
          if (x = p.window_size - p.lookahead - p.strstart, p.strstart >= J + (J - q)) {
            for (s.arraySet(p.window, p.window, J, J, 0), p.match_start -= J, p.strstart -= J, p.block_start -= J, V = j = p.hash_size; C = p.head[--V], p.head[V] = J <= C ? C - J : 0, --j; )
              ;
            for (V = j = J; C = p.prev[--V], p.prev[V] = J <= C ? C - J : 0, --j; )
              ;
            x += J;
          }
          if (p.strm.avail_in === 0)
            break;
          if (B = p.strm, Z = p.window, F = p.strstart + p.lookahead, X = x, te = void 0, te = B.avail_in, X < te && (te = X), j = te === 0 ? 0 : (B.avail_in -= te, s.arraySet(Z, B.input, B.next_in, te, F), B.state.wrap === 1 ? B.adler = l(B.adler, Z, te, F) : B.state.wrap === 2 && (B.adler = c(B.adler, Z, te, F)), B.next_in += te, B.total_in += te, te), p.lookahead += j, p.lookahead + p.insert >= D)
            for (N = p.strstart - p.insert, p.ins_h = p.window[N], p.ins_h = (p.ins_h << p.hash_shift ^ p.window[N + 1]) & p.hash_mask; p.insert && (p.ins_h = (p.ins_h << p.hash_shift ^ p.window[N + D - 1]) & p.hash_mask, p.prev[N & p.w_mask] = p.head[p.ins_h], p.head[p.ins_h] = N, N++, p.insert--, !(p.lookahead + p.insert < D)); )
              ;
        } while (p.lookahead < q && p.strm.avail_in !== 0);
      }
      function Re(p, V) {
        for (var j, C; ; ) {
          if (p.lookahead < q) {
            if (we(p), p.lookahead < q && V === f)
              return y;
            if (p.lookahead === 0)
              break;
          }
          if (j = 0, p.lookahead >= D && (p.ins_h = (p.ins_h << p.hash_shift ^ p.window[p.strstart + D - 1]) & p.hash_mask, j = p.prev[p.strstart & p.w_mask] = p.head[p.ins_h], p.head[p.ins_h] = p.strstart), j !== 0 && p.strstart - j <= p.w_size - q && (p.match_length = Q(p, j)), p.match_length >= D)
            if (C = a._tr_tally(p, p.strstart - p.match_start, p.match_length - D), p.lookahead -= p.match_length, p.match_length <= p.max_lazy_match && p.lookahead >= D) {
              for (p.match_length--; p.strstart++, p.ins_h = (p.ins_h << p.hash_shift ^ p.window[p.strstart + D - 1]) & p.hash_mask, j = p.prev[p.strstart & p.w_mask] = p.head[p.ins_h], p.head[p.ins_h] = p.strstart, --p.match_length != 0; )
                ;
              p.strstart++;
            } else
              p.strstart += p.match_length, p.match_length = 0, p.ins_h = p.window[p.strstart], p.ins_h = (p.ins_h << p.hash_shift ^ p.window[p.strstart + 1]) & p.hash_mask;
          else
            C = a._tr_tally(p, 0, p.window[p.strstart]), p.lookahead--, p.strstart++;
          if (C && (P(p, !1), p.strm.avail_out === 0))
            return y;
        }
        return p.insert = p.strstart < D - 1 ? p.strstart : D - 1, V === v ? (P(p, !0), p.strm.avail_out === 0 ? ie : W) : p.last_lit && (P(p, !1), p.strm.avail_out === 0) ? y : z;
      }
      function pe(p, V) {
        for (var j, C, x; ; ) {
          if (p.lookahead < q) {
            if (we(p), p.lookahead < q && V === f)
              return y;
            if (p.lookahead === 0)
              break;
          }
          if (j = 0, p.lookahead >= D && (p.ins_h = (p.ins_h << p.hash_shift ^ p.window[p.strstart + D - 1]) & p.hash_mask, j = p.prev[p.strstart & p.w_mask] = p.head[p.ins_h], p.head[p.ins_h] = p.strstart), p.prev_length = p.match_length, p.prev_match = p.match_start, p.match_length = D - 1, j !== 0 && p.prev_length < p.max_lazy_match && p.strstart - j <= p.w_size - q && (p.match_length = Q(p, j), p.match_length <= 5 && (p.strategy === 1 || p.match_length === D && 4096 < p.strstart - p.match_start) && (p.match_length = D - 1)), p.prev_length >= D && p.match_length <= p.prev_length) {
            for (x = p.strstart + p.lookahead - D, C = a._tr_tally(p, p.strstart - 1 - p.prev_match, p.prev_length - D), p.lookahead -= p.prev_length - 1, p.prev_length -= 2; ++p.strstart <= x && (p.ins_h = (p.ins_h << p.hash_shift ^ p.window[p.strstart + D - 1]) & p.hash_mask, j = p.prev[p.strstart & p.w_mask] = p.head[p.ins_h], p.head[p.ins_h] = p.strstart), --p.prev_length != 0; )
              ;
            if (p.match_available = 0, p.match_length = D - 1, p.strstart++, C && (P(p, !1), p.strm.avail_out === 0))
              return y;
          } else if (p.match_available) {
            if ((C = a._tr_tally(p, 0, p.window[p.strstart - 1])) && P(p, !1), p.strstart++, p.lookahead--, p.strm.avail_out === 0)
              return y;
          } else
            p.match_available = 1, p.strstart++, p.lookahead--;
        }
        return p.match_available && (C = a._tr_tally(p, 0, p.window[p.strstart - 1]), p.match_available = 0), p.insert = p.strstart < D - 1 ? p.strstart : D - 1, V === v ? (P(p, !0), p.strm.avail_out === 0 ? ie : W) : p.last_lit && (P(p, !1), p.strm.avail_out === 0) ? y : z;
      }
      function me(p, V, j, C, x) {
        this.good_length = p, this.max_lazy = V, this.nice_length = j, this.max_chain = C, this.func = x;
      }
      function Ie() {
        this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = w, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new s.Buf16(2 * T), this.dyn_dtree = new s.Buf16(2 * (2 * k + 1)), this.bl_tree = new s.Buf16(2 * (2 * R + 1)), ee(this.dyn_ltree), ee(this.dyn_dtree), ee(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new s.Buf16(U + 1), this.heap = new s.Buf16(2 * E + 1), ee(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new s.Buf16(2 * E + 1), ee(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
      }
      function Oe(p) {
        var V;
        return p && p.state ? (p.total_in = p.total_out = 0, p.data_type = m, (V = p.state).pending = 0, V.pending_out = 0, V.wrap < 0 && (V.wrap = -V.wrap), V.status = V.wrap ? A : I, p.adler = V.wrap === 2 ? 0 : 1, V.last_flush = f, a._tr_init(V), d) : ae(p, b);
      }
      function Ge(p) {
        var V = Oe(p);
        return V === d && function(j) {
          j.window_size = 2 * j.w_size, ee(j.head), j.max_lazy_match = o[j.level].max_lazy, j.good_match = o[j.level].good_length, j.nice_match = o[j.level].nice_length, j.max_chain_length = o[j.level].max_chain, j.strstart = 0, j.block_start = 0, j.lookahead = 0, j.insert = 0, j.match_length = j.prev_length = D - 1, j.match_available = 0, j.ins_h = 0;
        }(p.state), V;
      }
      function $e(p, V, j, C, x, N) {
        if (!p)
          return b;
        var B = 1;
        if (V === h && (V = 6), C < 0 ? (B = 0, C = -C) : 15 < C && (B = 2, C -= 16), x < 1 || S < x || j !== w || C < 8 || 15 < C || V < 0 || 9 < V || N < 0 || g < N)
          return ae(p, b);
        C === 8 && (C = 9);
        var Z = new Ie();
        return (p.state = Z).strm = p, Z.wrap = B, Z.gzhead = null, Z.w_bits = C, Z.w_size = 1 << Z.w_bits, Z.w_mask = Z.w_size - 1, Z.hash_bits = x + 7, Z.hash_size = 1 << Z.hash_bits, Z.hash_mask = Z.hash_size - 1, Z.hash_shift = ~~((Z.hash_bits + D - 1) / D), Z.window = new s.Buf8(2 * Z.w_size), Z.head = new s.Buf16(Z.hash_size), Z.prev = new s.Buf16(Z.w_size), Z.lit_bufsize = 1 << x + 6, Z.pending_buf_size = 4 * Z.lit_bufsize, Z.pending_buf = new s.Buf8(Z.pending_buf_size), Z.d_buf = 1 * Z.lit_bufsize, Z.l_buf = 3 * Z.lit_bufsize, Z.level = V, Z.strategy = N, Z.method = j, Ge(p);
      }
      o = [new me(0, 0, 0, 0, function(p, V) {
        var j = 65535;
        for (j > p.pending_buf_size - 5 && (j = p.pending_buf_size - 5); ; ) {
          if (p.lookahead <= 1) {
            if (we(p), p.lookahead === 0 && V === f)
              return y;
            if (p.lookahead === 0)
              break;
          }
          p.strstart += p.lookahead, p.lookahead = 0;
          var C = p.block_start + j;
          if ((p.strstart === 0 || p.strstart >= C) && (p.lookahead = p.strstart - C, p.strstart = C, P(p, !1), p.strm.avail_out === 0) || p.strstart - p.block_start >= p.w_size - q && (P(p, !1), p.strm.avail_out === 0))
            return y;
        }
        return p.insert = 0, V === v ? (P(p, !0), p.strm.avail_out === 0 ? ie : W) : (p.strstart > p.block_start && (P(p, !1), p.strm.avail_out), y);
      }), new me(4, 4, 8, 4, Re), new me(4, 5, 16, 8, Re), new me(4, 6, 32, 32, Re), new me(4, 4, 16, 16, pe), new me(8, 16, 32, 32, pe), new me(8, 16, 128, 128, pe), new me(8, 32, 128, 256, pe), new me(32, 128, 258, 1024, pe), new me(32, 258, 258, 4096, pe)], i.deflateInit = function(p, V) {
        return $e(p, V, w, 15, 8, 0);
      }, i.deflateInit2 = $e, i.deflateReset = Ge, i.deflateResetKeep = Oe, i.deflateSetHeader = function(p, V) {
        return p && p.state ? p.state.wrap !== 2 ? b : (p.state.gzhead = V, d) : b;
      }, i.deflate = function(p, V) {
        var j, C, x, N;
        if (!p || !p.state || 5 < V || V < 0)
          return p ? ae(p, b) : b;
        if (C = p.state, !p.output || !p.input && p.avail_in !== 0 || C.status === 666 && V !== v)
          return ae(p, p.avail_out === 0 ? -5 : b);
        if (C.strm = p, j = C.last_flush, C.last_flush = V, C.status === A)
          if (C.wrap === 2)
            p.adler = 0, le(C, 31), le(C, 139), le(C, 8), C.gzhead ? (le(C, (C.gzhead.text ? 1 : 0) + (C.gzhead.hcrc ? 2 : 0) + (C.gzhead.extra ? 4 : 0) + (C.gzhead.name ? 8 : 0) + (C.gzhead.comment ? 16 : 0)), le(C, 255 & C.gzhead.time), le(C, C.gzhead.time >> 8 & 255), le(C, C.gzhead.time >> 16 & 255), le(C, C.gzhead.time >> 24 & 255), le(C, C.level === 9 ? 2 : 2 <= C.strategy || C.level < 2 ? 4 : 0), le(C, 255 & C.gzhead.os), C.gzhead.extra && C.gzhead.extra.length && (le(C, 255 & C.gzhead.extra.length), le(C, C.gzhead.extra.length >> 8 & 255)), C.gzhead.hcrc && (p.adler = c(p.adler, C.pending_buf, C.pending, 0)), C.gzindex = 0, C.status = 69) : (le(C, 0), le(C, 0), le(C, 0), le(C, 0), le(C, 0), le(C, C.level === 9 ? 2 : 2 <= C.strategy || C.level < 2 ? 4 : 0), le(C, 3), C.status = I);
          else {
            var B = w + (C.w_bits - 8 << 4) << 8;
            B |= (2 <= C.strategy || C.level < 2 ? 0 : C.level < 6 ? 1 : C.level === 6 ? 2 : 3) << 6, C.strstart !== 0 && (B |= 32), B += 31 - B % 31, C.status = I, ne(C, B), C.strstart !== 0 && (ne(C, p.adler >>> 16), ne(C, 65535 & p.adler)), p.adler = 1;
          }
        if (C.status === 69)
          if (C.gzhead.extra) {
            for (x = C.pending; C.gzindex < (65535 & C.gzhead.extra.length) && (C.pending !== C.pending_buf_size || (C.gzhead.hcrc && C.pending > x && (p.adler = c(p.adler, C.pending_buf, C.pending - x, x)), L(p), x = C.pending, C.pending !== C.pending_buf_size)); )
              le(C, 255 & C.gzhead.extra[C.gzindex]), C.gzindex++;
            C.gzhead.hcrc && C.pending > x && (p.adler = c(p.adler, C.pending_buf, C.pending - x, x)), C.gzindex === C.gzhead.extra.length && (C.gzindex = 0, C.status = 73);
          } else
            C.status = 73;
        if (C.status === 73)
          if (C.gzhead.name) {
            x = C.pending;
            do {
              if (C.pending === C.pending_buf_size && (C.gzhead.hcrc && C.pending > x && (p.adler = c(p.adler, C.pending_buf, C.pending - x, x)), L(p), x = C.pending, C.pending === C.pending_buf_size)) {
                N = 1;
                break;
              }
              N = C.gzindex < C.gzhead.name.length ? 255 & C.gzhead.name.charCodeAt(C.gzindex++) : 0, le(C, N);
            } while (N !== 0);
            C.gzhead.hcrc && C.pending > x && (p.adler = c(p.adler, C.pending_buf, C.pending - x, x)), N === 0 && (C.gzindex = 0, C.status = 91);
          } else
            C.status = 91;
        if (C.status === 91)
          if (C.gzhead.comment) {
            x = C.pending;
            do {
              if (C.pending === C.pending_buf_size && (C.gzhead.hcrc && C.pending > x && (p.adler = c(p.adler, C.pending_buf, C.pending - x, x)), L(p), x = C.pending, C.pending === C.pending_buf_size)) {
                N = 1;
                break;
              }
              N = C.gzindex < C.gzhead.comment.length ? 255 & C.gzhead.comment.charCodeAt(C.gzindex++) : 0, le(C, N);
            } while (N !== 0);
            C.gzhead.hcrc && C.pending > x && (p.adler = c(p.adler, C.pending_buf, C.pending - x, x)), N === 0 && (C.status = 103);
          } else
            C.status = 103;
        if (C.status === 103 && (C.gzhead.hcrc ? (C.pending + 2 > C.pending_buf_size && L(p), C.pending + 2 <= C.pending_buf_size && (le(C, 255 & p.adler), le(C, p.adler >> 8 & 255), p.adler = 0, C.status = I)) : C.status = I), C.pending !== 0) {
          if (L(p), p.avail_out === 0)
            return C.last_flush = -1, d;
        } else if (p.avail_in === 0 && H(V) <= H(j) && V !== v)
          return ae(p, -5);
        if (C.status === 666 && p.avail_in !== 0)
          return ae(p, -5);
        if (p.avail_in !== 0 || C.lookahead !== 0 || V !== f && C.status !== 666) {
          var Z = C.strategy === 2 ? function(F, X) {
            for (var te; ; ) {
              if (F.lookahead === 0 && (we(F), F.lookahead === 0)) {
                if (X === f)
                  return y;
                break;
              }
              if (F.match_length = 0, te = a._tr_tally(F, 0, F.window[F.strstart]), F.lookahead--, F.strstart++, te && (P(F, !1), F.strm.avail_out === 0))
                return y;
            }
            return F.insert = 0, X === v ? (P(F, !0), F.strm.avail_out === 0 ? ie : W) : F.last_lit && (P(F, !1), F.strm.avail_out === 0) ? y : z;
          }(C, V) : C.strategy === 3 ? function(F, X) {
            for (var te, J, ce, ye, ve = F.window; ; ) {
              if (F.lookahead <= K) {
                if (we(F), F.lookahead <= K && X === f)
                  return y;
                if (F.lookahead === 0)
                  break;
              }
              if (F.match_length = 0, F.lookahead >= D && 0 < F.strstart && (J = ve[ce = F.strstart - 1]) === ve[++ce] && J === ve[++ce] && J === ve[++ce]) {
                ye = F.strstart + K;
                do
                  ;
                while (J === ve[++ce] && J === ve[++ce] && J === ve[++ce] && J === ve[++ce] && J === ve[++ce] && J === ve[++ce] && J === ve[++ce] && J === ve[++ce] && ce < ye);
                F.match_length = K - (ye - ce), F.match_length > F.lookahead && (F.match_length = F.lookahead);
              }
              if (F.match_length >= D ? (te = a._tr_tally(F, 1, F.match_length - D), F.lookahead -= F.match_length, F.strstart += F.match_length, F.match_length = 0) : (te = a._tr_tally(F, 0, F.window[F.strstart]), F.lookahead--, F.strstart++), te && (P(F, !1), F.strm.avail_out === 0))
                return y;
            }
            return F.insert = 0, X === v ? (P(F, !0), F.strm.avail_out === 0 ? ie : W) : F.last_lit && (P(F, !1), F.strm.avail_out === 0) ? y : z;
          }(C, V) : o[C.level].func(C, V);
          if (Z !== ie && Z !== W || (C.status = 666), Z === y || Z === ie)
            return p.avail_out === 0 && (C.last_flush = -1), d;
          if (Z === z && (V === 1 ? a._tr_align(C) : V !== 5 && (a._tr_stored_block(C, 0, 0, !1), V === 3 && (ee(C.head), C.lookahead === 0 && (C.strstart = 0, C.block_start = 0, C.insert = 0))), L(p), p.avail_out === 0))
            return C.last_flush = -1, d;
        }
        return V !== v ? d : C.wrap <= 0 ? 1 : (C.wrap === 2 ? (le(C, 255 & p.adler), le(C, p.adler >> 8 & 255), le(C, p.adler >> 16 & 255), le(C, p.adler >> 24 & 255), le(C, 255 & p.total_in), le(C, p.total_in >> 8 & 255), le(C, p.total_in >> 16 & 255), le(C, p.total_in >> 24 & 255)) : (ne(C, p.adler >>> 16), ne(C, 65535 & p.adler)), L(p), 0 < C.wrap && (C.wrap = -C.wrap), C.pending !== 0 ? d : 1);
      }, i.deflateEnd = function(p) {
        var V;
        return p && p.state ? (V = p.state.status) !== A && V !== 69 && V !== 73 && V !== 91 && V !== 103 && V !== I && V !== 666 ? ae(p, b) : (p.state = null, V === I ? ae(p, -3) : d) : b;
      }, i.deflateSetDictionary = function(p, V) {
        var j, C, x, N, B, Z, F, X, te = V.length;
        if (!p || !p.state || (N = (j = p.state).wrap) === 2 || N === 1 && j.status !== A || j.lookahead)
          return b;
        for (N === 1 && (p.adler = l(p.adler, V, te, 0)), j.wrap = 0, te >= j.w_size && (N === 0 && (ee(j.head), j.strstart = 0, j.block_start = 0, j.insert = 0), X = new s.Buf8(j.w_size), s.arraySet(X, V, te - j.w_size, j.w_size, 0), V = X, te = j.w_size), B = p.avail_in, Z = p.next_in, F = p.input, p.avail_in = te, p.next_in = 0, p.input = V, we(j); j.lookahead >= D; ) {
          for (C = j.strstart, x = j.lookahead - (D - 1); j.ins_h = (j.ins_h << j.hash_shift ^ j.window[C + D - 1]) & j.hash_mask, j.prev[C & j.w_mask] = j.head[j.ins_h], j.head[j.ins_h] = C, C++, --x; )
            ;
          j.strstart = C, j.lookahead = D - 1, we(j);
        }
        return j.strstart += j.lookahead, j.block_start = j.strstart, j.insert = j.lookahead, j.lookahead = 0, j.match_length = j.prev_length = D - 1, j.match_available = 0, p.next_in = Z, p.input = F, p.avail_in = B, j.wrap = N, d;
      }, i.deflateInfo = "pako deflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(r, n, i) {
      n.exports = function() {
        this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
      };
    }, {}], 48: [function(r, n, i) {
      n.exports = function(o, s) {
        var a, l, c, u, f, v, d, b, h, g, m, w, S, E, k, R, T, U, D, K, q, A, I, y, z;
        a = o.state, l = o.next_in, y = o.input, c = l + (o.avail_in - 5), u = o.next_out, z = o.output, f = u - (s - o.avail_out), v = u + (o.avail_out - 257), d = a.dmax, b = a.wsize, h = a.whave, g = a.wnext, m = a.window, w = a.hold, S = a.bits, E = a.lencode, k = a.distcode, R = (1 << a.lenbits) - 1, T = (1 << a.distbits) - 1;
        e:
          do {
            S < 15 && (w += y[l++] << S, S += 8, w += y[l++] << S, S += 8), U = E[w & R];
            t:
              for (; ; ) {
                if (w >>>= D = U >>> 24, S -= D, (D = U >>> 16 & 255) === 0)
                  z[u++] = 65535 & U;
                else {
                  if (!(16 & D)) {
                    if (!(64 & D)) {
                      U = E[(65535 & U) + (w & (1 << D) - 1)];
                      continue t;
                    }
                    if (32 & D) {
                      a.mode = 12;
                      break e;
                    }
                    o.msg = "invalid literal/length code", a.mode = 30;
                    break e;
                  }
                  K = 65535 & U, (D &= 15) && (S < D && (w += y[l++] << S, S += 8), K += w & (1 << D) - 1, w >>>= D, S -= D), S < 15 && (w += y[l++] << S, S += 8, w += y[l++] << S, S += 8), U = k[w & T];
                  r:
                    for (; ; ) {
                      if (w >>>= D = U >>> 24, S -= D, !(16 & (D = U >>> 16 & 255))) {
                        if (!(64 & D)) {
                          U = k[(65535 & U) + (w & (1 << D) - 1)];
                          continue r;
                        }
                        o.msg = "invalid distance code", a.mode = 30;
                        break e;
                      }
                      if (q = 65535 & U, S < (D &= 15) && (w += y[l++] << S, (S += 8) < D && (w += y[l++] << S, S += 8)), d < (q += w & (1 << D) - 1)) {
                        o.msg = "invalid distance too far back", a.mode = 30;
                        break e;
                      }
                      if (w >>>= D, S -= D, (D = u - f) < q) {
                        if (h < (D = q - D) && a.sane) {
                          o.msg = "invalid distance too far back", a.mode = 30;
                          break e;
                        }
                        if (I = m, (A = 0) === g) {
                          if (A += b - D, D < K) {
                            for (K -= D; z[u++] = m[A++], --D; )
                              ;
                            A = u - q, I = z;
                          }
                        } else if (g < D) {
                          if (A += b + g - D, (D -= g) < K) {
                            for (K -= D; z[u++] = m[A++], --D; )
                              ;
                            if (A = 0, g < K) {
                              for (K -= D = g; z[u++] = m[A++], --D; )
                                ;
                              A = u - q, I = z;
                            }
                          }
                        } else if (A += g - D, D < K) {
                          for (K -= D; z[u++] = m[A++], --D; )
                            ;
                          A = u - q, I = z;
                        }
                        for (; 2 < K; )
                          z[u++] = I[A++], z[u++] = I[A++], z[u++] = I[A++], K -= 3;
                        K && (z[u++] = I[A++], 1 < K && (z[u++] = I[A++]));
                      } else {
                        for (A = u - q; z[u++] = z[A++], z[u++] = z[A++], z[u++] = z[A++], 2 < (K -= 3); )
                          ;
                        K && (z[u++] = z[A++], 1 < K && (z[u++] = z[A++]));
                      }
                      break;
                    }
                }
                break;
              }
          } while (l < c && u < v);
        l -= K = S >> 3, w &= (1 << (S -= K << 3)) - 1, o.next_in = l, o.next_out = u, o.avail_in = l < c ? c - l + 5 : 5 - (l - c), o.avail_out = u < v ? v - u + 257 : 257 - (u - v), a.hold = w, a.bits = S;
      };
    }, {}], 49: [function(r, n, i) {
      var o = r("../utils/common"), s = r("./adler32"), a = r("./crc32"), l = r("./inffast"), c = r("./inftrees"), u = 1, f = 2, v = 0, d = -2, b = 1, h = 852, g = 592;
      function m(A) {
        return (A >>> 24 & 255) + (A >>> 8 & 65280) + ((65280 & A) << 8) + ((255 & A) << 24);
      }
      function w() {
        this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new o.Buf16(320), this.work = new o.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
      }
      function S(A) {
        var I;
        return A && A.state ? (I = A.state, A.total_in = A.total_out = I.total = 0, A.msg = "", I.wrap && (A.adler = 1 & I.wrap), I.mode = b, I.last = 0, I.havedict = 0, I.dmax = 32768, I.head = null, I.hold = 0, I.bits = 0, I.lencode = I.lendyn = new o.Buf32(h), I.distcode = I.distdyn = new o.Buf32(g), I.sane = 1, I.back = -1, v) : d;
      }
      function E(A) {
        var I;
        return A && A.state ? ((I = A.state).wsize = 0, I.whave = 0, I.wnext = 0, S(A)) : d;
      }
      function k(A, I) {
        var y, z;
        return A && A.state ? (z = A.state, I < 0 ? (y = 0, I = -I) : (y = 1 + (I >> 4), I < 48 && (I &= 15)), I && (I < 8 || 15 < I) ? d : (z.window !== null && z.wbits !== I && (z.window = null), z.wrap = y, z.wbits = I, E(A))) : d;
      }
      function R(A, I) {
        var y, z;
        return A ? (z = new w(), (A.state = z).window = null, (y = k(A, I)) !== v && (A.state = null), y) : d;
      }
      var T, U, D = !0;
      function K(A) {
        if (D) {
          var I;
          for (T = new o.Buf32(512), U = new o.Buf32(32), I = 0; I < 144; )
            A.lens[I++] = 8;
          for (; I < 256; )
            A.lens[I++] = 9;
          for (; I < 280; )
            A.lens[I++] = 7;
          for (; I < 288; )
            A.lens[I++] = 8;
          for (c(u, A.lens, 0, 288, T, 0, A.work, { bits: 9 }), I = 0; I < 32; )
            A.lens[I++] = 5;
          c(f, A.lens, 0, 32, U, 0, A.work, { bits: 5 }), D = !1;
        }
        A.lencode = T, A.lenbits = 9, A.distcode = U, A.distbits = 5;
      }
      function q(A, I, y, z) {
        var ie, W = A.state;
        return W.window === null && (W.wsize = 1 << W.wbits, W.wnext = 0, W.whave = 0, W.window = new o.Buf8(W.wsize)), z >= W.wsize ? (o.arraySet(W.window, I, y - W.wsize, W.wsize, 0), W.wnext = 0, W.whave = W.wsize) : (z < (ie = W.wsize - W.wnext) && (ie = z), o.arraySet(W.window, I, y - z, ie, W.wnext), (z -= ie) ? (o.arraySet(W.window, I, y - z, z, 0), W.wnext = z, W.whave = W.wsize) : (W.wnext += ie, W.wnext === W.wsize && (W.wnext = 0), W.whave < W.wsize && (W.whave += ie))), 0;
      }
      i.inflateReset = E, i.inflateReset2 = k, i.inflateResetKeep = S, i.inflateInit = function(A) {
        return R(A, 15);
      }, i.inflateInit2 = R, i.inflate = function(A, I) {
        var y, z, ie, W, ae, H, ee, L, P, le, ne, Q, we, Re, pe, me, Ie, Oe, Ge, $e, p, V, j, C, x = 0, N = new o.Buf8(4), B = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
        if (!A || !A.state || !A.output || !A.input && A.avail_in !== 0)
          return d;
        (y = A.state).mode === 12 && (y.mode = 13), ae = A.next_out, ie = A.output, ee = A.avail_out, W = A.next_in, z = A.input, H = A.avail_in, L = y.hold, P = y.bits, le = H, ne = ee, V = v;
        e:
          for (; ; )
            switch (y.mode) {
              case b:
                if (y.wrap === 0) {
                  y.mode = 13;
                  break;
                }
                for (; P < 16; ) {
                  if (H === 0)
                    break e;
                  H--, L += z[W++] << P, P += 8;
                }
                if (2 & y.wrap && L === 35615) {
                  N[y.check = 0] = 255 & L, N[1] = L >>> 8 & 255, y.check = a(y.check, N, 2, 0), P = L = 0, y.mode = 2;
                  break;
                }
                if (y.flags = 0, y.head && (y.head.done = !1), !(1 & y.wrap) || (((255 & L) << 8) + (L >> 8)) % 31) {
                  A.msg = "incorrect header check", y.mode = 30;
                  break;
                }
                if ((15 & L) != 8) {
                  A.msg = "unknown compression method", y.mode = 30;
                  break;
                }
                if (P -= 4, p = 8 + (15 & (L >>>= 4)), y.wbits === 0)
                  y.wbits = p;
                else if (p > y.wbits) {
                  A.msg = "invalid window size", y.mode = 30;
                  break;
                }
                y.dmax = 1 << p, A.adler = y.check = 1, y.mode = 512 & L ? 10 : 12, P = L = 0;
                break;
              case 2:
                for (; P < 16; ) {
                  if (H === 0)
                    break e;
                  H--, L += z[W++] << P, P += 8;
                }
                if (y.flags = L, (255 & y.flags) != 8) {
                  A.msg = "unknown compression method", y.mode = 30;
                  break;
                }
                if (57344 & y.flags) {
                  A.msg = "unknown header flags set", y.mode = 30;
                  break;
                }
                y.head && (y.head.text = L >> 8 & 1), 512 & y.flags && (N[0] = 255 & L, N[1] = L >>> 8 & 255, y.check = a(y.check, N, 2, 0)), P = L = 0, y.mode = 3;
              case 3:
                for (; P < 32; ) {
                  if (H === 0)
                    break e;
                  H--, L += z[W++] << P, P += 8;
                }
                y.head && (y.head.time = L), 512 & y.flags && (N[0] = 255 & L, N[1] = L >>> 8 & 255, N[2] = L >>> 16 & 255, N[3] = L >>> 24 & 255, y.check = a(y.check, N, 4, 0)), P = L = 0, y.mode = 4;
              case 4:
                for (; P < 16; ) {
                  if (H === 0)
                    break e;
                  H--, L += z[W++] << P, P += 8;
                }
                y.head && (y.head.xflags = 255 & L, y.head.os = L >> 8), 512 & y.flags && (N[0] = 255 & L, N[1] = L >>> 8 & 255, y.check = a(y.check, N, 2, 0)), P = L = 0, y.mode = 5;
              case 5:
                if (1024 & y.flags) {
                  for (; P < 16; ) {
                    if (H === 0)
                      break e;
                    H--, L += z[W++] << P, P += 8;
                  }
                  y.length = L, y.head && (y.head.extra_len = L), 512 & y.flags && (N[0] = 255 & L, N[1] = L >>> 8 & 255, y.check = a(y.check, N, 2, 0)), P = L = 0;
                } else
                  y.head && (y.head.extra = null);
                y.mode = 6;
              case 6:
                if (1024 & y.flags && (H < (Q = y.length) && (Q = H), Q && (y.head && (p = y.head.extra_len - y.length, y.head.extra || (y.head.extra = new Array(y.head.extra_len)), o.arraySet(y.head.extra, z, W, Q, p)), 512 & y.flags && (y.check = a(y.check, z, Q, W)), H -= Q, W += Q, y.length -= Q), y.length))
                  break e;
                y.length = 0, y.mode = 7;
              case 7:
                if (2048 & y.flags) {
                  if (H === 0)
                    break e;
                  for (Q = 0; p = z[W + Q++], y.head && p && y.length < 65536 && (y.head.name += String.fromCharCode(p)), p && Q < H; )
                    ;
                  if (512 & y.flags && (y.check = a(y.check, z, Q, W)), H -= Q, W += Q, p)
                    break e;
                } else
                  y.head && (y.head.name = null);
                y.length = 0, y.mode = 8;
              case 8:
                if (4096 & y.flags) {
                  if (H === 0)
                    break e;
                  for (Q = 0; p = z[W + Q++], y.head && p && y.length < 65536 && (y.head.comment += String.fromCharCode(p)), p && Q < H; )
                    ;
                  if (512 & y.flags && (y.check = a(y.check, z, Q, W)), H -= Q, W += Q, p)
                    break e;
                } else
                  y.head && (y.head.comment = null);
                y.mode = 9;
              case 9:
                if (512 & y.flags) {
                  for (; P < 16; ) {
                    if (H === 0)
                      break e;
                    H--, L += z[W++] << P, P += 8;
                  }
                  if (L !== (65535 & y.check)) {
                    A.msg = "header crc mismatch", y.mode = 30;
                    break;
                  }
                  P = L = 0;
                }
                y.head && (y.head.hcrc = y.flags >> 9 & 1, y.head.done = !0), A.adler = y.check = 0, y.mode = 12;
                break;
              case 10:
                for (; P < 32; ) {
                  if (H === 0)
                    break e;
                  H--, L += z[W++] << P, P += 8;
                }
                A.adler = y.check = m(L), P = L = 0, y.mode = 11;
              case 11:
                if (y.havedict === 0)
                  return A.next_out = ae, A.avail_out = ee, A.next_in = W, A.avail_in = H, y.hold = L, y.bits = P, 2;
                A.adler = y.check = 1, y.mode = 12;
              case 12:
                if (I === 5 || I === 6)
                  break e;
              case 13:
                if (y.last) {
                  L >>>= 7 & P, P -= 7 & P, y.mode = 27;
                  break;
                }
                for (; P < 3; ) {
                  if (H === 0)
                    break e;
                  H--, L += z[W++] << P, P += 8;
                }
                switch (y.last = 1 & L, P -= 1, 3 & (L >>>= 1)) {
                  case 0:
                    y.mode = 14;
                    break;
                  case 1:
                    if (K(y), y.mode = 20, I !== 6)
                      break;
                    L >>>= 2, P -= 2;
                    break e;
                  case 2:
                    y.mode = 17;
                    break;
                  case 3:
                    A.msg = "invalid block type", y.mode = 30;
                }
                L >>>= 2, P -= 2;
                break;
              case 14:
                for (L >>>= 7 & P, P -= 7 & P; P < 32; ) {
                  if (H === 0)
                    break e;
                  H--, L += z[W++] << P, P += 8;
                }
                if ((65535 & L) != (L >>> 16 ^ 65535)) {
                  A.msg = "invalid stored block lengths", y.mode = 30;
                  break;
                }
                if (y.length = 65535 & L, P = L = 0, y.mode = 15, I === 6)
                  break e;
              case 15:
                y.mode = 16;
              case 16:
                if (Q = y.length) {
                  if (H < Q && (Q = H), ee < Q && (Q = ee), Q === 0)
                    break e;
                  o.arraySet(ie, z, W, Q, ae), H -= Q, W += Q, ee -= Q, ae += Q, y.length -= Q;
                  break;
                }
                y.mode = 12;
                break;
              case 17:
                for (; P < 14; ) {
                  if (H === 0)
                    break e;
                  H--, L += z[W++] << P, P += 8;
                }
                if (y.nlen = 257 + (31 & L), L >>>= 5, P -= 5, y.ndist = 1 + (31 & L), L >>>= 5, P -= 5, y.ncode = 4 + (15 & L), L >>>= 4, P -= 4, 286 < y.nlen || 30 < y.ndist) {
                  A.msg = "too many length or distance symbols", y.mode = 30;
                  break;
                }
                y.have = 0, y.mode = 18;
              case 18:
                for (; y.have < y.ncode; ) {
                  for (; P < 3; ) {
                    if (H === 0)
                      break e;
                    H--, L += z[W++] << P, P += 8;
                  }
                  y.lens[B[y.have++]] = 7 & L, L >>>= 3, P -= 3;
                }
                for (; y.have < 19; )
                  y.lens[B[y.have++]] = 0;
                if (y.lencode = y.lendyn, y.lenbits = 7, j = { bits: y.lenbits }, V = c(0, y.lens, 0, 19, y.lencode, 0, y.work, j), y.lenbits = j.bits, V) {
                  A.msg = "invalid code lengths set", y.mode = 30;
                  break;
                }
                y.have = 0, y.mode = 19;
              case 19:
                for (; y.have < y.nlen + y.ndist; ) {
                  for (; me = (x = y.lencode[L & (1 << y.lenbits) - 1]) >>> 16 & 255, Ie = 65535 & x, !((pe = x >>> 24) <= P); ) {
                    if (H === 0)
                      break e;
                    H--, L += z[W++] << P, P += 8;
                  }
                  if (Ie < 16)
                    L >>>= pe, P -= pe, y.lens[y.have++] = Ie;
                  else {
                    if (Ie === 16) {
                      for (C = pe + 2; P < C; ) {
                        if (H === 0)
                          break e;
                        H--, L += z[W++] << P, P += 8;
                      }
                      if (L >>>= pe, P -= pe, y.have === 0) {
                        A.msg = "invalid bit length repeat", y.mode = 30;
                        break;
                      }
                      p = y.lens[y.have - 1], Q = 3 + (3 & L), L >>>= 2, P -= 2;
                    } else if (Ie === 17) {
                      for (C = pe + 3; P < C; ) {
                        if (H === 0)
                          break e;
                        H--, L += z[W++] << P, P += 8;
                      }
                      P -= pe, p = 0, Q = 3 + (7 & (L >>>= pe)), L >>>= 3, P -= 3;
                    } else {
                      for (C = pe + 7; P < C; ) {
                        if (H === 0)
                          break e;
                        H--, L += z[W++] << P, P += 8;
                      }
                      P -= pe, p = 0, Q = 11 + (127 & (L >>>= pe)), L >>>= 7, P -= 7;
                    }
                    if (y.have + Q > y.nlen + y.ndist) {
                      A.msg = "invalid bit length repeat", y.mode = 30;
                      break;
                    }
                    for (; Q--; )
                      y.lens[y.have++] = p;
                  }
                }
                if (y.mode === 30)
                  break;
                if (y.lens[256] === 0) {
                  A.msg = "invalid code -- missing end-of-block", y.mode = 30;
                  break;
                }
                if (y.lenbits = 9, j = { bits: y.lenbits }, V = c(u, y.lens, 0, y.nlen, y.lencode, 0, y.work, j), y.lenbits = j.bits, V) {
                  A.msg = "invalid literal/lengths set", y.mode = 30;
                  break;
                }
                if (y.distbits = 6, y.distcode = y.distdyn, j = { bits: y.distbits }, V = c(f, y.lens, y.nlen, y.ndist, y.distcode, 0, y.work, j), y.distbits = j.bits, V) {
                  A.msg = "invalid distances set", y.mode = 30;
                  break;
                }
                if (y.mode = 20, I === 6)
                  break e;
              case 20:
                y.mode = 21;
              case 21:
                if (6 <= H && 258 <= ee) {
                  A.next_out = ae, A.avail_out = ee, A.next_in = W, A.avail_in = H, y.hold = L, y.bits = P, l(A, ne), ae = A.next_out, ie = A.output, ee = A.avail_out, W = A.next_in, z = A.input, H = A.avail_in, L = y.hold, P = y.bits, y.mode === 12 && (y.back = -1);
                  break;
                }
                for (y.back = 0; me = (x = y.lencode[L & (1 << y.lenbits) - 1]) >>> 16 & 255, Ie = 65535 & x, !((pe = x >>> 24) <= P); ) {
                  if (H === 0)
                    break e;
                  H--, L += z[W++] << P, P += 8;
                }
                if (me && !(240 & me)) {
                  for (Oe = pe, Ge = me, $e = Ie; me = (x = y.lencode[$e + ((L & (1 << Oe + Ge) - 1) >> Oe)]) >>> 16 & 255, Ie = 65535 & x, !(Oe + (pe = x >>> 24) <= P); ) {
                    if (H === 0)
                      break e;
                    H--, L += z[W++] << P, P += 8;
                  }
                  L >>>= Oe, P -= Oe, y.back += Oe;
                }
                if (L >>>= pe, P -= pe, y.back += pe, y.length = Ie, me === 0) {
                  y.mode = 26;
                  break;
                }
                if (32 & me) {
                  y.back = -1, y.mode = 12;
                  break;
                }
                if (64 & me) {
                  A.msg = "invalid literal/length code", y.mode = 30;
                  break;
                }
                y.extra = 15 & me, y.mode = 22;
              case 22:
                if (y.extra) {
                  for (C = y.extra; P < C; ) {
                    if (H === 0)
                      break e;
                    H--, L += z[W++] << P, P += 8;
                  }
                  y.length += L & (1 << y.extra) - 1, L >>>= y.extra, P -= y.extra, y.back += y.extra;
                }
                y.was = y.length, y.mode = 23;
              case 23:
                for (; me = (x = y.distcode[L & (1 << y.distbits) - 1]) >>> 16 & 255, Ie = 65535 & x, !((pe = x >>> 24) <= P); ) {
                  if (H === 0)
                    break e;
                  H--, L += z[W++] << P, P += 8;
                }
                if (!(240 & me)) {
                  for (Oe = pe, Ge = me, $e = Ie; me = (x = y.distcode[$e + ((L & (1 << Oe + Ge) - 1) >> Oe)]) >>> 16 & 255, Ie = 65535 & x, !(Oe + (pe = x >>> 24) <= P); ) {
                    if (H === 0)
                      break e;
                    H--, L += z[W++] << P, P += 8;
                  }
                  L >>>= Oe, P -= Oe, y.back += Oe;
                }
                if (L >>>= pe, P -= pe, y.back += pe, 64 & me) {
                  A.msg = "invalid distance code", y.mode = 30;
                  break;
                }
                y.offset = Ie, y.extra = 15 & me, y.mode = 24;
              case 24:
                if (y.extra) {
                  for (C = y.extra; P < C; ) {
                    if (H === 0)
                      break e;
                    H--, L += z[W++] << P, P += 8;
                  }
                  y.offset += L & (1 << y.extra) - 1, L >>>= y.extra, P -= y.extra, y.back += y.extra;
                }
                if (y.offset > y.dmax) {
                  A.msg = "invalid distance too far back", y.mode = 30;
                  break;
                }
                y.mode = 25;
              case 25:
                if (ee === 0)
                  break e;
                if (Q = ne - ee, y.offset > Q) {
                  if ((Q = y.offset - Q) > y.whave && y.sane) {
                    A.msg = "invalid distance too far back", y.mode = 30;
                    break;
                  }
                  we = Q > y.wnext ? (Q -= y.wnext, y.wsize - Q) : y.wnext - Q, Q > y.length && (Q = y.length), Re = y.window;
                } else
                  Re = ie, we = ae - y.offset, Q = y.length;
                for (ee < Q && (Q = ee), ee -= Q, y.length -= Q; ie[ae++] = Re[we++], --Q; )
                  ;
                y.length === 0 && (y.mode = 21);
                break;
              case 26:
                if (ee === 0)
                  break e;
                ie[ae++] = y.length, ee--, y.mode = 21;
                break;
              case 27:
                if (y.wrap) {
                  for (; P < 32; ) {
                    if (H === 0)
                      break e;
                    H--, L |= z[W++] << P, P += 8;
                  }
                  if (ne -= ee, A.total_out += ne, y.total += ne, ne && (A.adler = y.check = y.flags ? a(y.check, ie, ne, ae - ne) : s(y.check, ie, ne, ae - ne)), ne = ee, (y.flags ? L : m(L)) !== y.check) {
                    A.msg = "incorrect data check", y.mode = 30;
                    break;
                  }
                  P = L = 0;
                }
                y.mode = 28;
              case 28:
                if (y.wrap && y.flags) {
                  for (; P < 32; ) {
                    if (H === 0)
                      break e;
                    H--, L += z[W++] << P, P += 8;
                  }
                  if (L !== (4294967295 & y.total)) {
                    A.msg = "incorrect length check", y.mode = 30;
                    break;
                  }
                  P = L = 0;
                }
                y.mode = 29;
              case 29:
                V = 1;
                break e;
              case 30:
                V = -3;
                break e;
              case 31:
                return -4;
              case 32:
              default:
                return d;
            }
        return A.next_out = ae, A.avail_out = ee, A.next_in = W, A.avail_in = H, y.hold = L, y.bits = P, (y.wsize || ne !== A.avail_out && y.mode < 30 && (y.mode < 27 || I !== 4)) && q(A, A.output, A.next_out, ne - A.avail_out) ? (y.mode = 31, -4) : (le -= A.avail_in, ne -= A.avail_out, A.total_in += le, A.total_out += ne, y.total += ne, y.wrap && ne && (A.adler = y.check = y.flags ? a(y.check, ie, ne, A.next_out - ne) : s(y.check, ie, ne, A.next_out - ne)), A.data_type = y.bits + (y.last ? 64 : 0) + (y.mode === 12 ? 128 : 0) + (y.mode === 20 || y.mode === 15 ? 256 : 0), (le == 0 && ne === 0 || I === 4) && V === v && (V = -5), V);
      }, i.inflateEnd = function(A) {
        if (!A || !A.state)
          return d;
        var I = A.state;
        return I.window && (I.window = null), A.state = null, v;
      }, i.inflateGetHeader = function(A, I) {
        var y;
        return A && A.state && 2 & (y = A.state).wrap ? ((y.head = I).done = !1, v) : d;
      }, i.inflateSetDictionary = function(A, I) {
        var y, z = I.length;
        return A && A.state ? (y = A.state).wrap !== 0 && y.mode !== 11 ? d : y.mode === 11 && s(1, I, z, 0) !== y.check ? -3 : q(A, I, z, z) ? (y.mode = 31, -4) : (y.havedict = 1, v) : d;
      }, i.inflateInfo = "pako inflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(r, n, i) {
      var o = r("../utils/common"), s = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], a = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], l = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], c = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
      n.exports = function(u, f, v, d, b, h, g, m) {
        var w, S, E, k, R, T, U, D, K, q = m.bits, A = 0, I = 0, y = 0, z = 0, ie = 0, W = 0, ae = 0, H = 0, ee = 0, L = 0, P = null, le = 0, ne = new o.Buf16(16), Q = new o.Buf16(16), we = null, Re = 0;
        for (A = 0; A <= 15; A++)
          ne[A] = 0;
        for (I = 0; I < d; I++)
          ne[f[v + I]]++;
        for (ie = q, z = 15; 1 <= z && ne[z] === 0; z--)
          ;
        if (z < ie && (ie = z), z === 0)
          return b[h++] = 20971520, b[h++] = 20971520, m.bits = 1, 0;
        for (y = 1; y < z && ne[y] === 0; y++)
          ;
        for (ie < y && (ie = y), A = H = 1; A <= 15; A++)
          if (H <<= 1, (H -= ne[A]) < 0)
            return -1;
        if (0 < H && (u === 0 || z !== 1))
          return -1;
        for (Q[1] = 0, A = 1; A < 15; A++)
          Q[A + 1] = Q[A] + ne[A];
        for (I = 0; I < d; I++)
          f[v + I] !== 0 && (g[Q[f[v + I]]++] = I);
        if (T = u === 0 ? (P = we = g, 19) : u === 1 ? (P = s, le -= 257, we = a, Re -= 257, 256) : (P = l, we = c, -1), A = y, R = h, ae = I = L = 0, E = -1, k = (ee = 1 << (W = ie)) - 1, u === 1 && 852 < ee || u === 2 && 592 < ee)
          return 1;
        for (; ; ) {
          for (U = A - ae, K = g[I] < T ? (D = 0, g[I]) : g[I] > T ? (D = we[Re + g[I]], P[le + g[I]]) : (D = 96, 0), w = 1 << A - ae, y = S = 1 << W; b[R + (L >> ae) + (S -= w)] = U << 24 | D << 16 | K | 0, S !== 0; )
            ;
          for (w = 1 << A - 1; L & w; )
            w >>= 1;
          if (w !== 0 ? (L &= w - 1, L += w) : L = 0, I++, --ne[A] == 0) {
            if (A === z)
              break;
            A = f[v + g[I]];
          }
          if (ie < A && (L & k) !== E) {
            for (ae === 0 && (ae = ie), R += y, H = 1 << (W = A - ae); W + ae < z && !((H -= ne[W + ae]) <= 0); )
              W++, H <<= 1;
            if (ee += 1 << W, u === 1 && 852 < ee || u === 2 && 592 < ee)
              return 1;
            b[E = L & k] = ie << 24 | W << 16 | R - h | 0;
          }
        }
        return L !== 0 && (b[R + L] = A - ae << 24 | 64 << 16 | 0), m.bits = ie, 0;
      };
    }, { "../utils/common": 41 }], 51: [function(r, n, i) {
      n.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
    }, {}], 52: [function(r, n, i) {
      var o = r("../utils/common"), s = 0, a = 1;
      function l(x) {
        for (var N = x.length; 0 <= --N; )
          x[N] = 0;
      }
      var c = 0, u = 29, f = 256, v = f + 1 + u, d = 30, b = 19, h = 2 * v + 1, g = 15, m = 16, w = 7, S = 256, E = 16, k = 17, R = 18, T = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], U = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], D = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], K = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], q = new Array(2 * (v + 2));
      l(q);
      var A = new Array(2 * d);
      l(A);
      var I = new Array(512);
      l(I);
      var y = new Array(256);
      l(y);
      var z = new Array(u);
      l(z);
      var ie, W, ae, H = new Array(d);
      function ee(x, N, B, Z, F) {
        this.static_tree = x, this.extra_bits = N, this.extra_base = B, this.elems = Z, this.max_length = F, this.has_stree = x && x.length;
      }
      function L(x, N) {
        this.dyn_tree = x, this.max_code = 0, this.stat_desc = N;
      }
      function P(x) {
        return x < 256 ? I[x] : I[256 + (x >>> 7)];
      }
      function le(x, N) {
        x.pending_buf[x.pending++] = 255 & N, x.pending_buf[x.pending++] = N >>> 8 & 255;
      }
      function ne(x, N, B) {
        x.bi_valid > m - B ? (x.bi_buf |= N << x.bi_valid & 65535, le(x, x.bi_buf), x.bi_buf = N >> m - x.bi_valid, x.bi_valid += B - m) : (x.bi_buf |= N << x.bi_valid & 65535, x.bi_valid += B);
      }
      function Q(x, N, B) {
        ne(x, B[2 * N], B[2 * N + 1]);
      }
      function we(x, N) {
        for (var B = 0; B |= 1 & x, x >>>= 1, B <<= 1, 0 < --N; )
          ;
        return B >>> 1;
      }
      function Re(x, N, B) {
        var Z, F, X = new Array(g + 1), te = 0;
        for (Z = 1; Z <= g; Z++)
          X[Z] = te = te + B[Z - 1] << 1;
        for (F = 0; F <= N; F++) {
          var J = x[2 * F + 1];
          J !== 0 && (x[2 * F] = we(X[J]++, J));
        }
      }
      function pe(x) {
        var N;
        for (N = 0; N < v; N++)
          x.dyn_ltree[2 * N] = 0;
        for (N = 0; N < d; N++)
          x.dyn_dtree[2 * N] = 0;
        for (N = 0; N < b; N++)
          x.bl_tree[2 * N] = 0;
        x.dyn_ltree[2 * S] = 1, x.opt_len = x.static_len = 0, x.last_lit = x.matches = 0;
      }
      function me(x) {
        8 < x.bi_valid ? le(x, x.bi_buf) : 0 < x.bi_valid && (x.pending_buf[x.pending++] = x.bi_buf), x.bi_buf = 0, x.bi_valid = 0;
      }
      function Ie(x, N, B, Z) {
        var F = 2 * N, X = 2 * B;
        return x[F] < x[X] || x[F] === x[X] && Z[N] <= Z[B];
      }
      function Oe(x, N, B) {
        for (var Z = x.heap[B], F = B << 1; F <= x.heap_len && (F < x.heap_len && Ie(N, x.heap[F + 1], x.heap[F], x.depth) && F++, !Ie(N, Z, x.heap[F], x.depth)); )
          x.heap[B] = x.heap[F], B = F, F <<= 1;
        x.heap[B] = Z;
      }
      function Ge(x, N, B) {
        var Z, F, X, te, J = 0;
        if (x.last_lit !== 0)
          for (; Z = x.pending_buf[x.d_buf + 2 * J] << 8 | x.pending_buf[x.d_buf + 2 * J + 1], F = x.pending_buf[x.l_buf + J], J++, Z === 0 ? Q(x, F, N) : (Q(x, (X = y[F]) + f + 1, N), (te = T[X]) !== 0 && ne(x, F -= z[X], te), Q(x, X = P(--Z), B), (te = U[X]) !== 0 && ne(x, Z -= H[X], te)), J < x.last_lit; )
            ;
        Q(x, S, N);
      }
      function $e(x, N) {
        var B, Z, F, X = N.dyn_tree, te = N.stat_desc.static_tree, J = N.stat_desc.has_stree, ce = N.stat_desc.elems, ye = -1;
        for (x.heap_len = 0, x.heap_max = h, B = 0; B < ce; B++)
          X[2 * B] !== 0 ? (x.heap[++x.heap_len] = ye = B, x.depth[B] = 0) : X[2 * B + 1] = 0;
        for (; x.heap_len < 2; )
          X[2 * (F = x.heap[++x.heap_len] = ye < 2 ? ++ye : 0)] = 1, x.depth[F] = 0, x.opt_len--, J && (x.static_len -= te[2 * F + 1]);
        for (N.max_code = ye, B = x.heap_len >> 1; 1 <= B; B--)
          Oe(x, X, B);
        for (F = ce; B = x.heap[1], x.heap[1] = x.heap[x.heap_len--], Oe(x, X, 1), Z = x.heap[1], x.heap[--x.heap_max] = B, x.heap[--x.heap_max] = Z, X[2 * F] = X[2 * B] + X[2 * Z], x.depth[F] = (x.depth[B] >= x.depth[Z] ? x.depth[B] : x.depth[Z]) + 1, X[2 * B + 1] = X[2 * Z + 1] = F, x.heap[1] = F++, Oe(x, X, 1), 2 <= x.heap_len; )
          ;
        x.heap[--x.heap_max] = x.heap[1], function(ve, je) {
          var qe, Me, He, Te, Be, ze, Ue = je.dyn_tree, rt = je.max_code, nt = je.stat_desc.static_tree, Xe = je.stat_desc.has_stree, et = je.stat_desc.extra_bits, re = je.stat_desc.extra_base, oe = je.stat_desc.max_length, ke = 0;
          for (Te = 0; Te <= g; Te++)
            ve.bl_count[Te] = 0;
          for (Ue[2 * ve.heap[ve.heap_max] + 1] = 0, qe = ve.heap_max + 1; qe < h; qe++)
            oe < (Te = Ue[2 * Ue[2 * (Me = ve.heap[qe]) + 1] + 1] + 1) && (Te = oe, ke++), Ue[2 * Me + 1] = Te, rt < Me || (ve.bl_count[Te]++, Be = 0, re <= Me && (Be = et[Me - re]), ze = Ue[2 * Me], ve.opt_len += ze * (Te + Be), Xe && (ve.static_len += ze * (nt[2 * Me + 1] + Be)));
          if (ke !== 0) {
            do {
              for (Te = oe - 1; ve.bl_count[Te] === 0; )
                Te--;
              ve.bl_count[Te]--, ve.bl_count[Te + 1] += 2, ve.bl_count[oe]--, ke -= 2;
            } while (0 < ke);
            for (Te = oe; Te !== 0; Te--)
              for (Me = ve.bl_count[Te]; Me !== 0; )
                rt < (He = ve.heap[--qe]) || (Ue[2 * He + 1] !== Te && (ve.opt_len += (Te - Ue[2 * He + 1]) * Ue[2 * He], Ue[2 * He + 1] = Te), Me--);
          }
        }(x, N), Re(X, ye, x.bl_count);
      }
      function p(x, N, B) {
        var Z, F, X = -1, te = N[1], J = 0, ce = 7, ye = 4;
        for (te === 0 && (ce = 138, ye = 3), N[2 * (B + 1) + 1] = 65535, Z = 0; Z <= B; Z++)
          F = te, te = N[2 * (Z + 1) + 1], ++J < ce && F === te || (J < ye ? x.bl_tree[2 * F] += J : F !== 0 ? (F !== X && x.bl_tree[2 * F]++, x.bl_tree[2 * E]++) : J <= 10 ? x.bl_tree[2 * k]++ : x.bl_tree[2 * R]++, X = F, ye = (J = 0) === te ? (ce = 138, 3) : F === te ? (ce = 6, 3) : (ce = 7, 4));
      }
      function V(x, N, B) {
        var Z, F, X = -1, te = N[1], J = 0, ce = 7, ye = 4;
        for (te === 0 && (ce = 138, ye = 3), Z = 0; Z <= B; Z++)
          if (F = te, te = N[2 * (Z + 1) + 1], !(++J < ce && F === te)) {
            if (J < ye)
              for (; Q(x, F, x.bl_tree), --J != 0; )
                ;
            else
              F !== 0 ? (F !== X && (Q(x, F, x.bl_tree), J--), Q(x, E, x.bl_tree), ne(x, J - 3, 2)) : J <= 10 ? (Q(x, k, x.bl_tree), ne(x, J - 3, 3)) : (Q(x, R, x.bl_tree), ne(x, J - 11, 7));
            X = F, ye = (J = 0) === te ? (ce = 138, 3) : F === te ? (ce = 6, 3) : (ce = 7, 4);
          }
      }
      l(H);
      var j = !1;
      function C(x, N, B, Z) {
        ne(x, (c << 1) + (Z ? 1 : 0), 3), function(F, X, te, J) {
          me(F), J && (le(F, te), le(F, ~te)), o.arraySet(F.pending_buf, F.window, X, te, F.pending), F.pending += te;
        }(x, N, B, !0);
      }
      i._tr_init = function(x) {
        j || (function() {
          var N, B, Z, F, X, te = new Array(g + 1);
          for (F = Z = 0; F < u - 1; F++)
            for (z[F] = Z, N = 0; N < 1 << T[F]; N++)
              y[Z++] = F;
          for (y[Z - 1] = F, F = X = 0; F < 16; F++)
            for (H[F] = X, N = 0; N < 1 << U[F]; N++)
              I[X++] = F;
          for (X >>= 7; F < d; F++)
            for (H[F] = X << 7, N = 0; N < 1 << U[F] - 7; N++)
              I[256 + X++] = F;
          for (B = 0; B <= g; B++)
            te[B] = 0;
          for (N = 0; N <= 143; )
            q[2 * N + 1] = 8, N++, te[8]++;
          for (; N <= 255; )
            q[2 * N + 1] = 9, N++, te[9]++;
          for (; N <= 279; )
            q[2 * N + 1] = 7, N++, te[7]++;
          for (; N <= 287; )
            q[2 * N + 1] = 8, N++, te[8]++;
          for (Re(q, v + 1, te), N = 0; N < d; N++)
            A[2 * N + 1] = 5, A[2 * N] = we(N, 5);
          ie = new ee(q, T, f + 1, v, g), W = new ee(A, U, 0, d, g), ae = new ee(new Array(0), D, 0, b, w);
        }(), j = !0), x.l_desc = new L(x.dyn_ltree, ie), x.d_desc = new L(x.dyn_dtree, W), x.bl_desc = new L(x.bl_tree, ae), x.bi_buf = 0, x.bi_valid = 0, pe(x);
      }, i._tr_stored_block = C, i._tr_flush_block = function(x, N, B, Z) {
        var F, X, te = 0;
        0 < x.level ? (x.strm.data_type === 2 && (x.strm.data_type = function(J) {
          var ce, ye = 4093624447;
          for (ce = 0; ce <= 31; ce++, ye >>>= 1)
            if (1 & ye && J.dyn_ltree[2 * ce] !== 0)
              return s;
          if (J.dyn_ltree[18] !== 0 || J.dyn_ltree[20] !== 0 || J.dyn_ltree[26] !== 0)
            return a;
          for (ce = 32; ce < f; ce++)
            if (J.dyn_ltree[2 * ce] !== 0)
              return a;
          return s;
        }(x)), $e(x, x.l_desc), $e(x, x.d_desc), te = function(J) {
          var ce;
          for (p(J, J.dyn_ltree, J.l_desc.max_code), p(J, J.dyn_dtree, J.d_desc.max_code), $e(J, J.bl_desc), ce = b - 1; 3 <= ce && J.bl_tree[2 * K[ce] + 1] === 0; ce--)
            ;
          return J.opt_len += 3 * (ce + 1) + 5 + 5 + 4, ce;
        }(x), F = x.opt_len + 3 + 7 >>> 3, (X = x.static_len + 3 + 7 >>> 3) <= F && (F = X)) : F = X = B + 5, B + 4 <= F && N !== -1 ? C(x, N, B, Z) : x.strategy === 4 || X === F ? (ne(x, 2 + (Z ? 1 : 0), 3), Ge(x, q, A)) : (ne(x, 4 + (Z ? 1 : 0), 3), function(J, ce, ye, ve) {
          var je;
          for (ne(J, ce - 257, 5), ne(J, ye - 1, 5), ne(J, ve - 4, 4), je = 0; je < ve; je++)
            ne(J, J.bl_tree[2 * K[je] + 1], 3);
          V(J, J.dyn_ltree, ce - 1), V(J, J.dyn_dtree, ye - 1);
        }(x, x.l_desc.max_code + 1, x.d_desc.max_code + 1, te + 1), Ge(x, x.dyn_ltree, x.dyn_dtree)), pe(x), Z && me(x);
      }, i._tr_tally = function(x, N, B) {
        return x.pending_buf[x.d_buf + 2 * x.last_lit] = N >>> 8 & 255, x.pending_buf[x.d_buf + 2 * x.last_lit + 1] = 255 & N, x.pending_buf[x.l_buf + x.last_lit] = 255 & B, x.last_lit++, N === 0 ? x.dyn_ltree[2 * B]++ : (x.matches++, N--, x.dyn_ltree[2 * (y[B] + f + 1)]++, x.dyn_dtree[2 * P(N)]++), x.last_lit === x.lit_bufsize - 1;
      }, i._tr_align = function(x) {
        ne(x, 2, 3), Q(x, S, q), function(N) {
          N.bi_valid === 16 ? (le(N, N.bi_buf), N.bi_buf = 0, N.bi_valid = 0) : 8 <= N.bi_valid && (N.pending_buf[N.pending++] = 255 & N.bi_buf, N.bi_buf >>= 8, N.bi_valid -= 8);
        }(x);
      };
    }, { "../utils/common": 41 }], 53: [function(r, n, i) {
      n.exports = function() {
        this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
      };
    }, {}], 54: [function(r, n, i) {
      (function(o) {
        (function(s, a) {
          if (!s.setImmediate) {
            var l, c, u, f, v = 1, d = {}, b = !1, h = s.document, g = Object.getPrototypeOf && Object.getPrototypeOf(s);
            g = g && g.setTimeout ? g : s, l = {}.toString.call(s.process) === "[object process]" ? function(E) {
              process.nextTick(function() {
                w(E);
              });
            } : function() {
              if (s.postMessage && !s.importScripts) {
                var E = !0, k = s.onmessage;
                return s.onmessage = function() {
                  E = !1;
                }, s.postMessage("", "*"), s.onmessage = k, E;
              }
            }() ? (f = "setImmediate$" + Math.random() + "$", s.addEventListener ? s.addEventListener("message", S, !1) : s.attachEvent("onmessage", S), function(E) {
              s.postMessage(f + E, "*");
            }) : s.MessageChannel ? ((u = new MessageChannel()).port1.onmessage = function(E) {
              w(E.data);
            }, function(E) {
              u.port2.postMessage(E);
            }) : h && "onreadystatechange" in h.createElement("script") ? (c = h.documentElement, function(E) {
              var k = h.createElement("script");
              k.onreadystatechange = function() {
                w(E), k.onreadystatechange = null, c.removeChild(k), k = null;
              }, c.appendChild(k);
            }) : function(E) {
              setTimeout(w, 0, E);
            }, g.setImmediate = function(E) {
              typeof E != "function" && (E = new Function("" + E));
              for (var k = new Array(arguments.length - 1), R = 0; R < k.length; R++)
                k[R] = arguments[R + 1];
              var T = { callback: E, args: k };
              return d[v] = T, l(v), v++;
            }, g.clearImmediate = m;
          }
          function m(E) {
            delete d[E];
          }
          function w(E) {
            if (b)
              setTimeout(w, 0, E);
            else {
              var k = d[E];
              if (k) {
                b = !0;
                try {
                  (function(R) {
                    var T = R.callback, U = R.args;
                    switch (U.length) {
                      case 0:
                        T();
                        break;
                      case 1:
                        T(U[0]);
                        break;
                      case 2:
                        T(U[0], U[1]);
                        break;
                      case 3:
                        T(U[0], U[1], U[2]);
                        break;
                      default:
                        T.apply(a, U);
                    }
                  })(k);
                } finally {
                  m(E), b = !1;
                }
              }
            }
          }
          function S(E) {
            E.source === s && typeof E.data == "string" && E.data.indexOf(f) === 0 && w(+E.data.slice(f.length));
          }
        })(typeof self > "u" ? o === void 0 ? this : o : self);
      }).call(this, typeof ht < "u" ? ht : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}] }, {}, [10])(10);
  });
})(rs);
var Bu = rs.exports;
const Uu = /* @__PURE__ */ Nn(Bu);
var ns = { exports: {} };
(function(e, t) {
  (function(r, n) {
    n();
  })(ht, function() {
    function r(c, u) {
      return typeof u > "u" ? u = { autoBom: !1 } : typeof u != "object" && (console.warn("Deprecated: Expected third argument to be a object"), u = { autoBom: !u }), u.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(c.type) ? new Blob(["\uFEFF", c], { type: c.type }) : c;
    }
    function n(c, u, f) {
      var v = new XMLHttpRequest();
      v.open("GET", c), v.responseType = "blob", v.onload = function() {
        l(v.response, u, f);
      }, v.onerror = function() {
        console.error("could not download file");
      }, v.send();
    }
    function i(c) {
      var u = new XMLHttpRequest();
      u.open("HEAD", c, !1);
      try {
        u.send();
      } catch {
      }
      return 200 <= u.status && 299 >= u.status;
    }
    function o(c) {
      try {
        c.dispatchEvent(new MouseEvent("click"));
      } catch {
        var u = document.createEvent("MouseEvents");
        u.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), c.dispatchEvent(u);
      }
    }
    var s = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof ht == "object" && ht.global === ht ? ht : void 0, a = s.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), l = s.saveAs || (typeof window != "object" || window !== s ? function() {
    } : "download" in HTMLAnchorElement.prototype && !a ? function(c, u, f) {
      var v = s.URL || s.webkitURL, d = document.createElement("a");
      u = u || c.name || "download", d.download = u, d.rel = "noopener", typeof c == "string" ? (d.href = c, d.origin === location.origin ? o(d) : i(d.href) ? n(c, u, f) : o(d, d.target = "_blank")) : (d.href = v.createObjectURL(c), setTimeout(function() {
        v.revokeObjectURL(d.href);
      }, 4e4), setTimeout(function() {
        o(d);
      }, 0));
    } : "msSaveOrOpenBlob" in navigator ? function(c, u, f) {
      if (u = u || c.name || "download", typeof c != "string")
        navigator.msSaveOrOpenBlob(r(c, f), u);
      else if (i(c))
        n(c, u, f);
      else {
        var v = document.createElement("a");
        v.href = c, v.target = "_blank", setTimeout(function() {
          o(v);
        });
      }
    } : function(c, u, f, v) {
      if (v = v || open("", "_blank"), v && (v.document.title = v.document.body.innerText = "downloading..."), typeof c == "string")
        return n(c, u, f);
      var d = c.type === "application/octet-stream", b = /constructor/i.test(s.HTMLElement) || s.safari, h = /CriOS\/[\d]+/.test(navigator.userAgent);
      if ((h || d && b || a) && typeof FileReader < "u") {
        var g = new FileReader();
        g.onloadend = function() {
          var S = g.result;
          S = h ? S : S.replace(/^data:[^;]*;/, "data:attachment/file;"), v ? v.location.href = S : location = S, v = null;
        }, g.readAsDataURL(c);
      } else {
        var m = s.URL || s.webkitURL, w = m.createObjectURL(c);
        v ? v.location = w : location.href = w, v = null, setTimeout(function() {
          m.revokeObjectURL(w);
        }, 4e4);
      }
    });
    s.saveAs = l.saveAs = l, e.exports = l;
  });
})(ns);
var Vu = ns.exports;
const Wu = () => {
  const e = Dt.getState(), t = new Uu(), {
    structure: { normalized: r, initialFolder: n }
  } = e;
  if (r.files.allIds.length === 0 && r.folders.allIds.length === 1) {
    alert("There is nothing to download, you haven't created any files yet.");
    return;
  }
  const i = e.structure.projectName, o = {
    [n.id]: t
  };
  Wr(
    n.subFoldersAndFiles,
    (s, a) => {
      const l = r[`${s.type}s`].byId[s.id], c = a[a.length - 1], u = o[c];
      if (l.type === "file")
        u.file(`${l.name}.${l.extension}`, l.content);
      else {
        const f = u.folder(l.name);
        o[l.id] = f;
      }
    },
    [],
    [n.id]
  ), t.generateAsync({
    type: "blob"
  }).then((s) => {
    Vu.saveAs(s, `${i}.zip`);
  });
}, Hu = ({
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
  fileActionsDisableDownload: u,
  folderCollapseBtnClassname: f,
  folderCollapseBtnStyle: v,
  folderThreeDotPrimaryClass: d,
  folderThreeDotSecondaryClass: b,
  folderClickableAreaClassName: h,
  folderSelectedClickableAreaClassName: g,
  folderContextSelectedClickableAreaClassName: m,
  itemTitleClassName: w,
  structureContainerClassName: S,
  containerHeight: E,
  onItemSelected: k = () => {
  },
  onNewItemClick: R = () => {
  },
  onAreaCollapsed: T = () => {
  },
  onItemContextSelected: U = () => {
  },
  onNodeDeleted: D = () => {
  },
  onNewItemCreated: K = () => {
  },
  validExtensions: q,
  storeContext: A
}) => {
  const I = Ye(null), y = Ye(null), z = Ye(), [ie, W] = Se(!1), ae = ur(), H = Ke(fl), ee = Ke(hl), L = Ke(vl), P = Ke(_o), le = Ke(pl), ne = Ke(So), Q = Ke(bl), we = Ke(xo), Re = Ke(ml), pe = Ke(yl), me = Ke(wl), [Ie, Oe] = Se(!0), [Ge, $e] = Se(!0), [p, V] = Se(!1), [j, C] = Se(""), [x, N] = Se({
    x: 0,
    y: 0
  }), B = Ye(null), [Z, F] = Se(!1), [X, te] = Se(0), [J, ce] = Se(""), [ye, ve] = Se(!1), [je, qe] = Se(!1), Me = [
    {
      title: "New File",
      handler: () => {
        ce("file"), Ue();
      },
      disabled: j === "file"
    },
    {
      title: "New Folder",
      handler: () => {
        ce("folder"), Ue();
      },
      disabled: j === "file"
    },
    {
      type: "hr",
      handler: () => {
      }
    },
    {
      title: "Cut",
      handler: () => {
        ae(
          Ei({
            id: P,
            type: le,
            isCut: !0
          })
        );
      },
      disabled: j === "head"
    },
    {
      title: "Copy",
      handler: () => {
        ae(
          Ei({
            id: P,
            type: le,
            isCut: !1
          })
        );
      },
      disabled: j === "head"
    },
    {
      title: "Paste",
      handler: async () => {
        ae(El()), we !== null && we.isCut && await ae(xn());
      },
      disabled: j === "file" || we === null
    },
    {
      type: "hr",
      handler: () => {
      }
    },
    {
      title: "Rename",
      handler: () => {
        var re;
        ce(
          (re = z.current) == null ? void 0 : re.getAttribute("typeof-item")
        ), rt(), ve(!0);
      },
      disabled: j === "head"
    },
    {
      title: "Delete",
      handler: () => {
        qe(!0);
      },
      disabled: j === "head"
    }
  ], He = (re = ne) => {
    var ke;
    let oe = (ke = I.current) == null ? void 0 : ke.querySelector(`#${re}`);
    oe || (oe = I.current), z.current = oe;
  }, Te = {
    newFile: () => {
      ce("file");
      const re = Si(ne, Re, H);
      ae(Ci(re)), He(re), Ue(re), R(re, "file");
    },
    newFolder: () => {
      ce("folder");
      const re = Si(ne, Re, H);
      ae(Ci(re)), He(re), Ue(re), R(re, "folder");
    },
    download: () => {
      Wu();
    },
    collapseArea: () => {
      I.current && (ie ? I.current.classList.remove("no-height") : I.current.classList.add("no-height"), W(!ie), T(!ie));
    }
  }, Be = (re) => {
    var oe;
    z.current || He(), z.current && (z.current === I.current || z.current.id.includes("file") && !re ? (B.current = I.current, te(0)) : (re || ae(
      wn({
        item: { id: z.current.id, type: "folder" },
        collapse: !1
      })
    ), re ? (B.current = z.current.parentElement, z.current.classList.add("hide-input"), te(0)) : (B.current = (oe = y.current) == null ? void 0 : oe.querySelector(
      "#ghost-input-" + z.current.id
    ), te(1))));
  }, ze = (re) => {
    if (re !== Z && (F(re), Re.length === 0 && pe.length === 1)) {
      const oe = document.getElementById("welcome");
      re && !oe.classList.contains("display-none-c") ? oe.classList.add("display-none-c") : !re && oe.classList.contains("display-none-c") && oe.classList.remove("display-none-c");
    }
  }, Ue = (re = P) => {
    I.current && (ie && (I.current.classList.remove("no-height"), W(!1)), ae(ki(re)), Be(!1), ze(!0));
  }, rt = () => {
    ae(ki("")), Be(!0), ze(!0);
  }, nt = (re) => {
    var ke;
    if (!z.current)
      return;
    if (ye || re === !1) {
      ze(!1), (ke = z.current) == null || ke.classList.remove("hide-input"), ye && re !== !1 && ae(Sl({ value: re })), ve(!1);
      return;
    } else
      ae(_l({ value: re, inputType: J }));
    ze(!1);
    const oe = Dt.getState().structure.normalized.files.allIds;
    K(oe[oe.length - 1]);
  };
  Ne(() => {
    a !== void 0 && ae(kl(a));
  }, [a]), Ne(() => {
    var re;
    ye && !Z && ((re = z.current) == null || re.classList.remove("hide-input"), ve(!1));
  }, [ye, Z]);
  const Xe = (re, oe) => {
    if (!I.current || !oe)
      return;
    const ke = oe.getAttribute("typeof-item"), fe = oe.getAttribute("parent-id");
    if (ke === null || fe === null) {
      if (!oe.classList.contains("welcome") && !oe.classList.contains("clickable-padding"))
        return;
      oe.classList.contains("file-sys-ref") && (z.current = oe);
    }
    let xe = null;
    oe.classList.contains("file-sys-container") ? xe = I.current : xe = I.current.querySelector(`#${fe}`), z.current = xe;
    let Je = re.clientY, lt = re.clientX;
    re.clientY > window.innerHeight / 2 && (Je = re.clientY - 245), re.clientX > window.innerWidth / 2 && (lt = re.clientX - 192), N({
      x: Je,
      y: lt
    }), C(fe === "head" ? "head" : ke), V(!0);
  }, et = (re) => {
    if (re.preventDefault(), !I.current)
      return;
    const oe = re.target;
    Xe({ clientY: re.clientY, clientX: re.clientX }, oe);
    const ke = oe.getAttribute("parent-id"), fe = oe.getAttribute("typeof-item");
    ae(ko({ id: ke, type: fe, threeDot: !1 }));
  };
  return Ne(() => {
    var oe, ke;
    if (!ee)
      return;
    let re;
    P === "head" ? re = document.querySelector(".main-nav") : re = (ke = (oe = I.current) == null ? void 0 : oe.querySelector(`#${P}`)) == null ? void 0 : ke.childNodes[0], Xe(
      { clientY: ee.x, clientX: ee.y },
      re
    );
  }, [ee]), dr(y, () => {
    var re, oe;
    ne !== "head" && (Oe(!1), $e(!1)), (re = I.current) == null || re.classList.add("border-transparent"), (oe = I.current) == null || oe.classList.remove("border-vscode-blue");
  }), Ne(() => {
    Oe(!0);
  }, [ne]), Ne(() => {
    ae(Cl(q));
  }, [q]), /* @__PURE__ */ M.jsxs(M.Fragment, { children: [
    /* @__PURE__ */ M.jsxs("div", { id: "file-system", className: "pr-2", children: [
      /* @__PURE__ */ M.jsxs(
        "div",
        {
          style: {
            height: E || "calc(80vh - 4rem)"
          },
          className: "flex w-full flex-col justify-start",
          children: [
            /* @__PURE__ */ M.jsx("div", { className: "my-2 flex flex-col items-start pl-2", children: /* @__PURE__ */ M.jsx(
              eu,
              {
                ...Te,
                collapsed: ie,
                btnClassName: s,
                projectName: a,
                disableCollapse: l,
                disableTooltip: c,
                disableDownload: u
              }
            ) }),
            /* @__PURE__ */ M.jsxs(
              "div",
              {
                id: "structure-container",
                "parent-id": "head",
                "typeof-item": "folder",
                className: `border file-sys-container flex flex-col custom-scrollbar-2 pl-1 transition-[height] duration-300 ease-out ${ie ? "no-height" : ""} ${S} ${ne === "head" ? "border-vscode-blue" : "border-transparent"}`,
                ref: I,
                onClick: () => {
                  ae(zr({ id: "head", type: "folder" })), k({ id: "head", type: "folder" });
                },
                onContextMenu: (re) => {
                  et(re);
                },
                children: [
                  /* @__PURE__ */ M.jsxs(
                    "div",
                    {
                      "parent-id": "head",
                      "typeof-item": "folder",
                      ref: y,
                      className: "content flex items-center",
                      children: [
                        /* @__PURE__ */ M.jsx(
                          Ro,
                          {
                            data: H.subFoldersAndFiles,
                            showBlue: Ie,
                            setShowBlue: Oe,
                            showGray: Ge,
                            setShowGray: $e,
                            collapseBtnClassname: f,
                            collapseBtnStyle: v,
                            threeDotPrimaryClass: d,
                            threeDotSecondaryClass: b,
                            clickableAreaClassName: h,
                            selectedClickableAreaClassName: g,
                            contextSelectedClickableAreaClassName: m,
                            itemTitleClassName: w,
                            onItemSelected: k,
                            onItemContextSelected: U
                          }
                        ),
                        Re.length === 0 && pe.length === 1 && /* @__PURE__ */ M.jsx(
                          "div",
                          {
                            id: "welcome",
                            "parent-id": "head",
                            "typeof-item": "folder",
                            onClick: (re) => re.stopPropagation(),
                            onContextMenu: (re) => {
                              et(re), U({ id: "head", type: "folder" });
                            },
                            className: "mx-auto flex h-[40vh] items-center pl-3 pr-4",
                            children: /* @__PURE__ */ M.jsx(
                              "div",
                              {
                                "parent-id": "head",
                                "typeof-item": "folder",
                                className: "select-none break-words rounded-lg border p-3 text-center text-base",
                                children: /* @__PURE__ */ M.jsxs(
                                  "div",
                                  {
                                    "parent-id": "head",
                                    "typeof-item": "folder",
                                    className: "flex flex-col justify-center",
                                    children: [
                                      /* @__PURE__ */ M.jsx(
                                        "div",
                                        {
                                          "parent-id": "head",
                                          "typeof-item": "folder",
                                          className: "flex items-center",
                                          children: "Create a file or folder..."
                                        }
                                      ),
                                      /* @__PURE__ */ M.jsxs(
                                        "div",
                                        {
                                          "parent-id": "head",
                                          "typeof-item": "folder",
                                          className: "my-2 flex w-full flex-col items-center justify-between text-sm",
                                          children: [
                                            /* @__PURE__ */ M.jsx(
                                              "button",
                                              {
                                                "parent-id": "head",
                                                "typeof-item": "folder",
                                                type: "button",
                                                onClick: (re) => {
                                                  re.stopPropagation(), Te.newFile();
                                                },
                                                className: "new-btns bg-vscode-overlay my-1 w-full rounded-lg px-1 py-2 transition-colors hover:bg-vscode-blue",
                                                children: /* @__PURE__ */ M.jsx(
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
                                            /* @__PURE__ */ M.jsx(
                                              "button",
                                              {
                                                "parent-id": "head",
                                                "typeof-item": "folder",
                                                type: "button",
                                                onClick: (re) => {
                                                  re.stopPropagation(), Te.newFolder();
                                                },
                                                className: "new-btns bg-vscode-overlay my-1 w-full rounded-lg  px-1 py-2 transition-colors hover:bg-vscode-blue",
                                                children: /* @__PURE__ */ M.jsx(
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
                  /* @__PURE__ */ M.jsx(
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
      je && Rr(
        /* @__PURE__ */ M.jsx(
          lc,
          {
            title: `Delete the ${j} ${L.wholeName}?`,
            content: `Are you sure you want to delete the ${j} /${L.actualPath}? This action cannot be
            undone.`,
            className: e,
            actionText: `Yes, delete ${j}`,
            close: qe,
            action: async () => {
              D(L.id), ae(xl({ id: null, type: null })), await ae(xn()), qe(!1);
            }
          }
        ),
        document.getElementById("root")
      ),
      p && Rr(
        /* @__PURE__ */ M.jsx(
          rc,
          {
            top: x.x,
            left: x.y,
            showContext: p,
            setShowContext: V,
            actions: Me,
            className: n,
            clickableAreaClassName: o,
            hrColor: i
          }
        ),
        document.getElementById("root")
      )
    ] }),
    cc(
      /* @__PURE__ */ M.jsx(
        sc,
        {
          className: t,
          style: r,
          closeCallback: () => {
            ze(!1);
          },
          submit: (re) => {
            nt(re);
          },
          validExtensions: q,
          padding: X,
          show: z.current && Z,
          item: {
            type: J,
            rename: ye ? {
              wholeName: Q.type === "file" ? `${Q.name}.${Q.extension}` : Q.name
            } : void 0
          },
          container: I.current,
          existingItems: (() => {
            const re = me.map((oe) => ({
              id: oe.id,
              type: oe.type,
              wholeName: oe.type === "file" ? `${oe.name}.${oe.extension}` : oe.name
            }));
            return ye ? re.filter(({ id: oe }) => oe !== (Q == null ? void 0 : Q.id)) : re;
          })()
        }
      ),
      B.current
    )
  ] });
};
function Ar(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ar = function(r) {
    return typeof r;
  } : Ar = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Ar(e);
}
function Zu(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Xi(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Gu(e, t, r) {
  return t && Xi(e.prototype, t), r && Xi(e, r), e;
}
function Ku(e, t) {
  return t && (Ar(t) === "object" || typeof t == "function") ? t : Nr(e);
}
function On(e) {
  return On = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, On(e);
}
function Nr(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Yu(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && An(e, t);
}
function An(e, t) {
  return An = Object.setPrototypeOf || function(n, i) {
    return n.__proto__ = i, n;
  }, An(e, t);
}
function Tr(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var is = /* @__PURE__ */ function(e) {
  Yu(t, e);
  function t() {
    var r, n;
    Zu(this, t);
    for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++)
      o[s] = arguments[s];
    return n = Ku(this, (r = On(t)).call.apply(r, [this].concat(o))), Tr(Nr(n), "state", {
      bootstrapped: !1
    }), Tr(Nr(n), "_unsubscribe", void 0), Tr(Nr(n), "handlePersistorState", function() {
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
  return Gu(t, [{
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
}(Zs);
Tr(is, "defaultProps", {
  children: null,
  loading: null
});
function mr({ children: e }) {
  return /* @__PURE__ */ M.jsxs(Ul, { context: Ln, store: Dt, children: [
    /* @__PURE__ */ M.jsx(
      is,
      {
        loading: /* @__PURE__ */ M.jsx(M.Fragment, { children: "Loading..." }),
        persistor: Mu
      }
    ),
    e
  ] });
}
const qu = ({
  id: e,
  name: t,
  type: r,
  selected: n,
  onSelect: i,
  onClose: o,
  className: s,
  selectedTabClassName: a
}) => {
  const l = t.substring(t.lastIndexOf(".") + 1), [c, u] = pt.useState(ar(l));
  return Ne(() => {
    u(ar(r));
  }, [r]), /* @__PURE__ */ M.jsxs(
    "div",
    {
      onClick: () => {
        n || i(e);
      },
      className: `hover-show hover:bg-slate-700 hover:text-white border-t-dark-bg border-t transition-colors py-2 pl-3 pr-2 flex flex-row flex-shrink-0 cursor-pointer select-none items-center rounded-sm mx-[1px] ${s} ${n ? `bg-dark-hover text-white border-t-slate-200 ${a}` : ""}`,
      children: [
        /* @__PURE__ */ M.jsx("span", { className: `span-logo w-4 h-4 ${c}`, children: " " }),
        /* @__PURE__ */ M.jsx("span", { className: "text-lg mx-2", children: t }),
        /* @__PURE__ */ M.jsx("span", { className: "self-start", children: /* @__PURE__ */ M.jsx(
          "button",
          {
            type: "button",
            className: "show-on-hover transition-opacity",
            onClick: (f) => {
              f.stopPropagation(), o(e);
            },
            children: /* @__PURE__ */ M.jsx(
              "img",
              {
                src: Io,
                alt: "close",
                className: "transition-colors p-1 h-5 w-5 cursor-pointer hover:bg-slate-500 rounded-md align-baseline"
              }
            )
          }
        ) })
      ]
    }
  );
}, Xu = ({
  containerClassName: e,
  tabClassName: t,
  selectedTabClassName: r,
  onTabClick: n = () => {
  },
  onTabClose: i = () => {
  }
}) => {
  const o = ur(), s = Ke(Jl), a = Ke(Xl), l = (u) => {
    a !== u && (o(Yl(u)), n(u));
  }, c = async (u) => {
    o(Kl(u)), i(u);
  };
  return /* @__PURE__ */ M.jsx("div", { className: "flex flex-row w-full", children: /* @__PURE__ */ M.jsx("div", { className: "file-tabs w-full py-1", children: /* @__PURE__ */ M.jsx(
    "div",
    {
      className: `flex flex-row items-center w-full overflow-x-scroll custom-scrollbar ${e}`,
      children: s.map((u) => /* @__PURE__ */ M.jsx(
        qu,
        {
          id: u.id,
          name: u.wholeName,
          type: u.extension,
          selected: u.id === a,
          onSelect: l,
          onClose: c,
          className: t,
          selectedTabClassName: r
        },
        u.id
      ))
    }
  ) }) });
}, Ju = ({
  hightlight: e,
  lineOfText: t,
  lineNum: r,
  openAtLine: n,
  highlightClass: i
}) => {
  const o = t.split(new RegExp(`(${e})`, "gi"));
  return /* @__PURE__ */ M.jsx(
    "div",
    {
      onClick: () => {
        n(r);
      },
      className: "whitespace-nowrap my-1 ml-3 pl-1 cursor-pointer hover:bg-dark-hover",
      children: o.map(
        (s) => s === e ? /* @__PURE__ */ M.jsx("span", { className: `bg-orange-400 text-black ${i}`, children: s }) : s
      )
    }
  );
}, Qu = ({
  matchingFile: e,
  fileAtLineClick: t,
  headerClassName: r,
  headerStyle: n,
  titleClassName: i,
  highlightClass: o
}) => {
  const [s, a] = Se(!0), l = Ke(gl);
  return /* @__PURE__ */ M.jsxs("div", { className: "flex flex-col w-full", children: [
    /* @__PURE__ */ M.jsxs(
      "div",
      {
        onClick: () => {
          a(!s);
        },
        style: n,
        className: `flex items-center w-full cursor-pointer hover:bg-dark-hover ${r}`,
        children: [
          /* @__PURE__ */ M.jsx(
            "img",
            {
              src: jo,
              className: `${s ? "rotate-[270deg]" : "rotate-180"} transition-transform w-3 h-3 ml-2 self-center`,
              alt: "Right Arrow"
            }
          ),
          /* @__PURE__ */ M.jsx(
            Mn,
            {
              item: {
                ...e,
                type: "file"
              },
              onClickE: () => {
              },
              className: i
            }
          )
        ]
      }
    ),
    s && /* @__PURE__ */ M.jsx("div", { className: "overflow-x-hidden", children: e.matches.map(({ line: c, content: u }, f) => /* @__PURE__ */ M.jsx(
      Ju,
      {
        hightlight: l,
        lineOfText: u,
        lineNum: c,
        openAtLine: (v) => {
          t(e.id, v);
        },
        highlightClass: o
      },
      `${e.id}-${c}-${f}`
    )) })
  ] });
}, ed = ({
  highlightedTextClassName: e,
  headerClassName: t,
  headerStyle: r,
  titleClassName: n
}) => {
  const i = Ke(Eo);
  return /* @__PURE__ */ M.jsxs("div", { className: "select-none w-full h-fit pr-1", children: [
    /* @__PURE__ */ M.jsxs("div", { className: "m-2", children: [
      i.numOfLines,
      " result",
      i.numOfLines !== 1 && "s",
      " in",
      " ",
      i.numOfResults,
      " file",
      i.numOfResults !== 1 && "s"
    ] }),
    i.files.map((o) => /* @__PURE__ */ M.jsx("div", { className: "w-full z-0", children: /* @__PURE__ */ M.jsx(
      Qu,
      {
        matchingFile: o,
        fileAtLineClick: (s, a) => {
        },
        highlightClass: e,
        headerClassName: t,
        headerStyle: r,
        titleClassName: n
      }
    ) }, `search-results-${o.id}`))
  ] });
}, os = ({
  init: e,
  data: t,
  onClickItem: r,
  onCollapseMiniStructure: n,
  collapseBtnClassName: i,
  collapseBtnStyle: o,
  containerClassName: s,
  titleClassName: a
}) => {
  const l = t.subFoldersAndFiles;
  return /* @__PURE__ */ M.jsx("div", { className: "w-full h-fit", children: l.map((c, u) => /* @__PURE__ */ M.jsxs("div", { className: "flex flex-col select-none", children: [
    /* @__PURE__ */ M.jsx(
      "div",
      {
        className: `transition-colors flex flex-row hover:cursor-pointer hover:bg-dark-hover justify-between text-white ${e && (u === 0 ? "rounded-t-lg" : u === l.length - 1 ? "rounded-b-lg" : "")} ${s}`,
        children: /* @__PURE__ */ M.jsx(
          Mn,
          {
            item: c,
            onClickE: (f) => {
              r({ id: c.id, type: c.type });
            },
            className: a
          }
        )
      }
    ),
    /* @__PURE__ */ M.jsx(M.Fragment, { children: c.type === "folder" && !c.collapsed && /* @__PURE__ */ M.jsxs("div", { className: "flex flex-row sub-folder", children: [
      /* @__PURE__ */ M.jsx(
        To,
        {
          item: c,
          className: i,
          style: o,
          onClickE: () => {
            n(c.id);
          }
        }
      ),
      /* @__PURE__ */ M.jsx(
        os,
        {
          init: !1,
          data: c,
          onClickItem: r,
          onCollapseMiniStructure: n,
          collapseBtnClassName: i,
          collapseBtnStyle: o,
          titleClassName: a
        }
      )
    ] }) })
  ] }, `key-${c.id}`)) });
}, td = ({
  containerClassName: e,
  textClassName: t,
  miniFolderCollapseBtnClassName: r,
  miniFolderCollapseBtnStyle: n,
  miniFolderContainerClassName: i,
  itemTitleClassName: o,
  onBreadcrumbFileClick: s = () => {
  }
}) => {
  const [a, l] = Se(0), [c, u] = Se(!1), f = Ke(Fu), v = Ye(null), d = Ye(null), b = Ke(zu), h = ur();
  return dr(d, u), /* @__PURE__ */ M.jsx(M.Fragment, { children: b !== null && /* @__PURE__ */ M.jsxs(M.Fragment, { children: [
    /* @__PURE__ */ M.jsx(
      "div",
      {
        id: "breadcrumbs",
        ref: v,
        className: "select-none w-full",
        children: /* @__PURE__ */ M.jsx("div", { className: "breadcrumbs-container flex items-center justify-start m-2", children: b.path.map((g, m) => /* @__PURE__ */ M.jsx(
          "div",
          {
            id: `${b.path.map((w) => w.replace(/[\.|\s]+/g, "-")).join("")}-${m}`,
            children: /* @__PURE__ */ M.jsxs(
              "div",
              {
                className: `text-base text-black flex flex-row ${e}`,
                children: [
                  m === b.path.length - 1 && /* @__PURE__ */ M.jsx(
                    "span",
                    {
                      className: `span-logo self-center w-4 h-4 ml-1 mr-[0.375rem] ${ar(
                        g.split(".").reverse()[0]
                      )}`
                    }
                  ),
                  /* @__PURE__ */ M.jsx(
                    "span",
                    {
                      onClick: () => {
                        l(m), u(!0), h(
                          es(b.unmappedPath[m])
                        );
                      },
                      className: `cursor-pointer hover:underline hover:text-blue-400 ${t}`,
                      children: g
                    }
                  ),
                  m < b.path.length - 1 && /* @__PURE__ */ M.jsx("span", { className: "text-base text-black mx-2", children: "/" })
                ]
              }
            )
          },
          `${b.path.map((w) => w.replace(/[\.|\s]+/g, "-")).join("")}-${m}`
        )) })
      }
    ),
    v.current && c && /* @__PURE__ */ M.jsx(M.Fragment, { children: (() => {
      const g = `${b.path.map((w) => w.replace(/[\.|\s]+/g, "-")).join("")}-${a}`, m = v.current.querySelector(
        `#${g}`
      );
      if (m)
        return Rr(
          /* @__PURE__ */ M.jsx(
            "div",
            {
              ref: d,
              className: "rounded-lg bg-dark-bg-2 border border-slate-600 absolute w-52 z-10 mt-2 max-h-60 overflow-y-auto custom-scrollbar-3",
              children: /* @__PURE__ */ M.jsx(
                os,
                {
                  init: !0,
                  data: f,
                  onClickItem: (w) => {
                    w.type === "folder" ? h(qi(w.id)) : (h(zr({ id: g, type: "file" })), h($n(w.id)), u(!1), s({ id: g }));
                  },
                  onCollapseMiniStructure: (w) => {
                    h(qi(w));
                  },
                  collapseBtnClassName: r,
                  collapseBtnStyle: n,
                  containerClassName: i,
                  titleClassName: o
                }
              )
            }
          ),
          m
        );
    })() })
  ] }) });
}, rd = ({
  className: e,
  style: t,
  onSearchFiles: r = () => {
  }
}) => {
  const [n, i] = Se(""), o = Ye(null), s = ur(), a = Ke(Eo), l = (c) => {
    if (c.length > 0) {
      const u = setTimeout(() => {
        s(Oi(c));
      }, 300);
      return () => {
        clearTimeout(u);
      };
    } else
      s(Oi(""));
  };
  return Ne(() => {
    n.length > 0 && r(n, a);
  }, [a]), /* @__PURE__ */ M.jsx("div", { className: "my-2 w-full px-2", children: /* @__PURE__ */ M.jsx(
    "form",
    {
      onSubmit: (c) => {
        c.preventDefault(), l(n);
      },
      children: /* @__PURE__ */ M.jsx(
        "input",
        {
          ref: o,
          onInput: (c) => {
            const u = c.currentTarget.value;
            i(u), l(u);
          },
          value: n,
          placeholder: "Search",
          style: t,
          className: `w-full self-center rounded-lg p-2 bg-slate-100 hover:bg-slate-300 focus:bg-slate-300 focus:outline-none active:outline-none text-black ${e}`
        }
      )
    }
  ) });
}, dd = (e = Dt.getState().structure.normalized.files.allIds, t = Dt.getState().structure.normalized) => e.map((i) => {
  const o = t.files.byId[i], [s, a] = Qo(o, t);
  return {
    id: i,
    content: t.files.byId[i].content,
    path: a
  };
}).reduce(
  (i, o) => {
    var s;
    if (o.path) {
      const a = `/${(s = o.path) == null ? void 0 : s.join("/")}`;
      i[a] = { id: o.id, content: o.content };
    }
    return i;
  },
  {}
), nd = (e, t) => {
  Dt.dispatch({
    type: "structure/updateFileContents",
    payload: { id: e, value: t }
  });
}, fd = () => Dt.getState().structure.selected, hd = ({
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
  fileActionsDisableDownload: u,
  folderCollapseBtnClassname: f,
  folderCollapseBtnStyle: v,
  folderThreeDotPrimaryClass: d,
  folderThreeDotSecondaryClass: b,
  folderClickableAreaClassName: h,
  folderSelectedClickableAreaClassName: g,
  folderContextSelectedClickableAreaClassName: m,
  itemTitleClassName: w,
  structureContainerClassName: S,
  containerHeight: E,
  onItemSelected: k = () => {
  },
  onNewItemClick: R = () => {
  },
  onAreaCollapsed: T = () => {
  },
  onItemContextSelected: U = () => {
  },
  onNodeDeleted: D = () => {
  },
  onNewItemCreated: K = () => {
  },
  validExtensions: q
}) => /* @__PURE__ */ M.jsx(mr, { children: /* @__PURE__ */ M.jsx(
  Hu,
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
    fileActionsDisableDownload: u,
    folderCollapseBtnClassname: f,
    folderCollapseBtnStyle: v,
    folderThreeDotPrimaryClass: d,
    folderThreeDotSecondaryClass: b,
    folderClickableAreaClassName: h,
    folderSelectedClickableAreaClassName: g,
    folderContextSelectedClickableAreaClassName: m,
    itemTitleClassName: w,
    structureContainerClassName: S,
    containerHeight: E,
    onItemSelected: k,
    onNewItemClick: R,
    onAreaCollapsed: T,
    onItemContextSelected: U,
    onNodeDeleted: D,
    onNewItemCreated: K,
    validExtensions: q
  }
) }), pd = ({
  containerClassName: e,
  tabClassName: t,
  selectedTabClassName: r,
  onTabClick: n = () => {
  },
  onTabClose: i = () => {
  }
}) => /* @__PURE__ */ M.jsx(mr, { children: /* @__PURE__ */ M.jsx(
  Xu,
  {
    containerClassName: e,
    tabClassName: t,
    selectedTabClassName: r,
    onTabClick: n,
    onTabClose: i
  }
) }), md = ({
  className: e,
  style: t,
  onSearchFiles: r = () => {
  }
}) => /* @__PURE__ */ M.jsx(mr, { children: /* @__PURE__ */ M.jsx(rd, { className: e, style: t, onSearchFiles: r }) }), yd = ({
  containerClassName: e,
  textClassName: t,
  miniFolderCollapseBtnClassName: r,
  miniFolderCollapseBtnStyle: n,
  miniFolderContainerClassName: i,
  itemTitleClassName: o,
  onBreadcrumbFileClick: s = () => {
  }
}) => /* @__PURE__ */ M.jsx(mr, { children: /* @__PURE__ */ M.jsx(
  td,
  {
    containerClassName: e,
    textClassName: t,
    miniFolderCollapseBtnClassName: r,
    miniFolderCollapseBtnStyle: n,
    miniFolderContainerClassName: i,
    itemTitleClassName: o,
    onBreadcrumbFileClick: s
  }
) }), gd = ({
  highlightedTextClassName: e,
  headerClassName: t,
  headerStyle: r,
  titleClassName: n
}) => /* @__PURE__ */ M.jsx(mr, { children: /* @__PURE__ */ M.jsx(
  ed,
  {
    highlightedTextClassName: e,
    headerClassName: t,
    headerStyle: r,
    titleClassName: n
  }
) }), vd = (e, t) => {
  nd(e, t);
};
export {
  yd as Breadcrumbs,
  hd as FileExplorer,
  md as SearchInput,
  gd as SearchResults,
  pd as TabsList,
  dd as getFileTree,
  fd as getSelectedFile,
  vd as updateFile
};
