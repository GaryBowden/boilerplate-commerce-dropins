import * as __WEBPACK_EXTERNAL_MODULE__dropins_tools_event_bus_js_9bef1f3f__ from "@dropins/tools/event-bus.js";
import * as __WEBPACK_EXTERNAL_MODULE__dropins_tools_fetch_graphql_js_fa439c6b__ from "@dropins/tools/fetch-graphql.js";
import * as __WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_compat_js_873595ef__ from "@dropins/tools/preact-compat.js";
import * as __WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_hooks_js_08969fb2__ from "@dropins/tools/preact-hooks.js";
import * as __WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_jsx_runtime_js_61a4be9f__ from "@dropins/tools/preact-jsx-runtime.js";
import * as __WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_js_29681626__ from "@dropins/tools/preact.js";
export const id = 64;
export const ids = [64];
export const modules = {

/***/ 7387:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  a: () => (/* reexport */ render)
});

// EXTERNAL MODULE: external "@dropins/tools/preact.js"
var preact_js_ = __webpack_require__(7320);
;// CONCATENATED MODULE: ../../ElsieSDK/node_modules/preact-render-to-string/dist/index.mjs
var n=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i,o=/^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/,i=/[\s\n\\/='"\0<>]/,l=/^xlink:?./,a=/["&<]/;function s(e){if(!1===a.test(e+=""))return e;for(var t=0,r=0,n="",o="";r<e.length;r++){switch(e.charCodeAt(r)){case 34:o="&quot;";break;case 38:o="&amp;";break;case 60:o="&lt;";break;default:continue}r!==t&&(n+=e.slice(t,r)),n+=o,t=r+1}return r!==t&&(n+=e.slice(t,r)),n}var f=function(e,t){return String(e).replace(/(\n+)/g,"$1"+(t||"\t"))},u=function(e,t,r){return String(e).length>(t||40)||!r&&-1!==String(e).indexOf("\n")||-1!==String(e).indexOf("<")},c={},_=/([A-Z])/g;function p(e){var t="";for(var r in e){var o=e[r];null!=o&&""!==o&&(t&&(t+=" "),t+="-"==r[0]?r:c[r]||(c[r]=r.replace(_,"-$1").toLowerCase()),t="number"==typeof o&&!1===n.test(r)?t+": "+o+"px;":t+": "+o+";")}return t||void 0}function d(e,t){return Array.isArray(t)?t.reduce(d,e):null!=t&&!1!==t&&e.push(t),e}function v(){this.__d=!0}function h(e,t){return{__v:e,context:t,props:e.props,setState:v,forceUpdate:v,__d:!0,__h:[]}}function g(e,t){var r=e.contextType,n=r&&t[r.__c];return null!=r?n?n.props.value:r.__:t}var y=[];function m(r,n,a,c,_,v){if(null==r||"boolean"==typeof r)return"";if("object"!=typeof r)return"function"==typeof r?"":s(r);var b=a.pretty,x=b&&"string"==typeof b?b:"\t";if(Array.isArray(r)){for(var k="",S=0;S<r.length;S++)b&&S>0&&(k+="\n"),k+=m(r[S],n,a,c,_,v);return k}if(void 0!==r.constructor)return"";var w,C=r.type,O=r.props,j=!1;if("function"==typeof C){if(j=!0,!a.shallow||!c&&!1!==a.renderRootComponent){if(C===preact_js_.Fragment){var A=[];return d(A,r.props.children),m(A,n,a,!1!==a.shallowHighOrder,_,v)}var F,H=r.__c=h(r,n);preact_js_.options.__b&&preact_js_.options.__b(r);var M=preact_js_.options.__r;if(C.prototype&&"function"==typeof C.prototype.render){var L=g(C,n);(H=r.__c=new C(O,L)).__v=r,H._dirty=H.__d=!0,H.props=O,null==H.state&&(H.state={}),null==H._nextState&&null==H.__s&&(H._nextState=H.__s=H.state),H.context=L,C.getDerivedStateFromProps?H.state=Object.assign({},H.state,C.getDerivedStateFromProps(H.props,H.state)):H.componentWillMount&&(H.componentWillMount(),H.state=H._nextState!==H.state?H._nextState:H.__s!==H.state?H.__s:H.state),M&&M(r),F=H.render(H.props,H.state,H.context)}else for(var T=g(C,n),E=0;H.__d&&E++<25;)H.__d=!1,M&&M(r),F=C.call(r.__c,O,T);return H.getChildContext&&(n=Object.assign({},n,H.getChildContext())),preact_js_.options.diffed&&preact_js_.options.diffed(r),m(F,n,a,!1!==a.shallowHighOrder,_,v)}C=(w=C).displayName||w!==Function&&w.name||function(e){var t=(Function.prototype.toString.call(e).match(/^\s*function\s+([^( ]+)/)||"")[1];if(!t){for(var r=-1,n=y.length;n--;)if(y[n]===e){r=n;break}r<0&&(r=y.push(e)-1),t="UnnamedComponent"+r}return t}(w)}var $,D,N="<"+C;if(O){var P=Object.keys(O);a&&!0===a.sortAttributes&&P.sort();for(var W=0;W<P.length;W++){var I=P[W],R=O[I];if("children"!==I){if(!i.test(I)&&(a&&a.allAttributes||"key"!==I&&"ref"!==I&&"__self"!==I&&"__source"!==I)){if("defaultValue"===I)I="value";else if("defaultChecked"===I)I="checked";else if("defaultSelected"===I)I="selected";else if("className"===I){if(void 0!==O.class)continue;I="class"}else _&&l.test(I)&&(I=I.toLowerCase().replace(/^xlink:?/,"xlink:"));if("htmlFor"===I){if(O.for)continue;I="for"}"style"===I&&R&&"object"==typeof R&&(R=p(R)),"a"===I[0]&&"r"===I[1]&&"boolean"==typeof R&&(R=String(R));var U=a.attributeHook&&a.attributeHook(I,R,n,a,j);if(U||""===U)N+=U;else if("dangerouslySetInnerHTML"===I)D=R&&R.__html;else if("textarea"===C&&"value"===I)$=R;else if((R||0===R||""===R)&&"function"!=typeof R){if(!(!0!==R&&""!==R||(R=I,a&&a.xml))){N=N+" "+I;continue}if("value"===I){if("select"===C){v=R;continue}"option"===C&&v==R&&void 0===O.selected&&(N+=" selected")}N=N+" "+I+'="'+s(R)+'"'}}}else $=R}}if(b){var V=N.replace(/\n\s*/," ");V===N||~V.indexOf("\n")?b&&~N.indexOf("\n")&&(N+="\n"):N=V}if(N+=">",i.test(C))throw new Error(C+" is not a valid HTML tag name in "+N);var q,z=o.test(C)||a.voidElements&&a.voidElements.test(C),Z=[];if(D)b&&u(D)&&(D="\n"+x+f(D,x)),N+=D;else if(null!=$&&d(q=[],$).length){for(var B=b&&~N.indexOf("\n"),G=!1,J=0;J<q.length;J++){var K=q[J];if(null!=K&&!1!==K){var Q=m(K,n,a,!0,"svg"===C||"foreignObject"!==C&&_,v);if(b&&!B&&u(Q)&&(B=!0),Q)if(b){var X=Q.length>0&&"<"!=Q[0];G&&X?Z[Z.length-1]+=Q:Z.push(Q),G=X}else Z.push(Q)}}if(b&&B)for(var Y=Z.length;Y--;)Z[Y]="\n"+x+f(Z[Y],x)}if(Z.length||D)N+=Z.join("");else if(a&&a.xml)return N.substring(0,N.length-1)+" />";return!z||q||D?(b&&~N.indexOf("\n")&&(N+="\n"),N=N+"</"+C+">"):N=N.replace(/>$/," />"),N}var b={shallow:!0};S.render=S;var x=function(e,t){return S(e,t,b)},k=[];function S(n,o,i){o=o||{};var l=preact_js_.options.__s;preact_js_.options.__s=!0;var a,s=(0,preact_js_.h)(preact_js_.Fragment,null);return s.__k=[n],a=i&&(i.pretty||i.voidElements||i.sortAttributes||i.shallow||i.allAttributes||i.xml||i.attributeHook)?m(n,o,i):F(n,o,!1,void 0,s),preact_js_.options.__c&&preact_js_.options.__c(n,k),preact_js_.options.__s=l,k.length=0,a}function w(e){return null==e||"boolean"==typeof e?null:"string"==typeof e||"number"==typeof e||"bigint"==typeof e?(0,preact_js_.h)(null,null,e):e}function C(e,t){return"className"===e?"class":"htmlFor"===e?"for":"defaultValue"===e?"value":"defaultChecked"===e?"checked":"defaultSelected"===e?"selected":t&&l.test(e)?e.toLowerCase().replace(/^xlink:?/,"xlink:"):e}function O(e,t){return"style"===e&&null!=t&&"object"==typeof t?p(t):"a"===e[0]&&"r"===e[1]&&"boolean"==typeof t?String(t):t}var j=Array.isArray,A=Object.assign;function F(r,n,l,a,f){if(null==r||!0===r||!1===r||""===r)return"";if("object"!=typeof r)return"function"==typeof r?"":s(r);if(j(r)){var u="";f.__k=r;for(var c=0;c<r.length;c++)u+=F(r[c],n,l,a,f),r[c]=w(r[c]);return u}if(void 0!==r.constructor)return"";r.__=f,preact_js_.options.__b&&preact_js_.options.__b(r);var _=r.type,p=r.props;if("function"==typeof _){var d;if(_===preact_js_.Fragment)d=p.children;else{d=_.prototype&&"function"==typeof _.prototype.render?function(e,r){var n=e.type,o=g(n,r),i=new n(e.props,o);e.__c=i,i.__v=e,i.__d=!0,i.props=e.props,null==i.state&&(i.state={}),null==i.__s&&(i.__s=i.state),i.context=o,n.getDerivedStateFromProps?i.state=A({},i.state,n.getDerivedStateFromProps(i.props,i.state)):i.componentWillMount&&(i.componentWillMount(),i.state=i.__s!==i.state?i.__s:i.state);var l=preact_js_.options.__r;return l&&l(e),i.render(i.props,i.state,i.context)}(r,n):function(e,r){var n,o=h(e,r),i=g(e.type,r);e.__c=o;for(var l=preact_js_.options.__r,a=0;o.__d&&a++<25;)o.__d=!1,l&&l(e),n=e.type.call(o,e.props,i);return n}(r,n);var v=r.__c;v.getChildContext&&(n=A({},n,v.getChildContext()))}var y=F(d=null!=d&&d.type===preact_js_.Fragment&&null==d.key?d.props.children:d,n,l,a,r);return preact_js_.options.diffed&&preact_js_.options.diffed(r),r.__=void 0,preact_js_.options.unmount&&preact_js_.options.unmount(r),y}var m,b,x="<";if(x+=_,p)for(var k in m=p.children,p){var S=p[k];if(!("key"===k||"ref"===k||"__self"===k||"__source"===k||"children"===k||"className"===k&&"class"in p||"htmlFor"===k&&"for"in p||i.test(k)))if(S=O(k=C(k,l),S),"dangerouslySetInnerHTML"===k)b=S&&S.__html;else if("textarea"===_&&"value"===k)m=S;else if((S||0===S||""===S)&&"function"!=typeof S){if(!0===S||""===S){S=k,x=x+" "+k;continue}if("value"===k){if("select"===_){a=S;continue}"option"!==_||a!=S||"selected"in p||(x+=" selected")}x=x+" "+k+'="'+s(S)+'"'}}var H=x;if(x+=">",i.test(_))throw new Error(_+" is not a valid HTML tag name in "+x);var M="",L=!1;if(b)M+=b,L=!0;else if("string"==typeof m)M+=s(m),L=!0;else if(j(m)){r.__k=m;for(var T=0;T<m.length;T++){var E=m[T];if(m[T]=w(E),null!=E&&!1!==E){var $=F(E,n,"svg"===_||"foreignObject"!==_&&l,a,r);$&&(M+=$,L=!0)}}}else if(null!=m&&!1!==m&&!0!==m){r.__k=[w(m)];var D=F(m,n,"svg"===_||"foreignObject"!==_&&l,a,r);D&&(M+=D,L=!0)}if(preact_js_.options.diffed&&preact_js_.options.diffed(r),r.__=void 0,preact_js_.options.unmount&&preact_js_.options.unmount(r),L)x+=M;else if(o.test(_))return H+" />";return x+"</"+_+">"}S.shallowRender=x;/* harmony default export */ const dist = (S);
//# sourceMappingURL=index.module.js.map

// EXTERNAL MODULE: ../../ElsieSDK/packages/elsie/src/lib/vcomponent.tsx
var vcomponent = __webpack_require__(4496);
// EXTERNAL MODULE: ../../ElsieSDK/node_modules/preact/compat/jsx-runtime.mjs
var jsx_runtime = __webpack_require__(5092);
;// CONCATENATED MODULE: ../../ElsieSDK/packages/elsie/src/lib/render.tsx
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




var Render = /*#__PURE__*/function () {
  function Render(provider) {
    _classCallCheck(this, Render);
    this._provider = provider;
  }
  _createClass(Render, [{
    key: "renderComponent",
    value: function () {
      var _renderComponent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(Component, props, rootElement) {
        var _this = this;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (Component) {
                _context2.next = 2;
                break;
              }
              throw new Error('Component is not defined');
            case 2:
              if (rootElement) {
                _context2.next = 4;
                break;
              }
              throw new Error('Root element is not defined');
            case 4:
              setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                var _yield$Component$getI, _Component$getInitial;
                var initialData;
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return (_Component$getInitial = Component.getInitialData) === null || _Component$getInitial === void 0 ? void 0 : _Component$getInitial.call(Component, props);
                    case 2:
                      _context.t1 = _yield$Component$getI = _context.sent;
                      _context.t0 = _context.t1 !== null;
                      if (!_context.t0) {
                        _context.next = 6;
                        break;
                      }
                      _context.t0 = _yield$Component$getI !== void 0;
                    case 6:
                      if (!_context.t0) {
                        _context.next = 10;
                        break;
                      }
                      _context.t2 = _yield$Component$getI;
                      _context.next = 11;
                      break;
                    case 10:
                      _context.t2 = {};
                    case 11:
                      initialData = _context.t2;
                      (0,preact_js_.render)( /*#__PURE__*/(0,jsx_runtime.jsx)(vcomponent/* VComponent */.o, _objectSpread(_objectSpread({
                        node: _this._provider
                      }, _this._provider.props), {}, {
                        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Component, _objectSpread(_objectSpread({}, props), {}, {
                          initialData: initialData
                        }))
                      })), rootElement);
                    case 13:
                    case "end":
                      return _context.stop();
                  }
                }, _callee);
              })), 0);
            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function renderComponent(_x, _x2, _x3) {
        return _renderComponent.apply(this, arguments);
      }
      return renderComponent;
    }()
  }, {
    key: "render",
    value: function render(Component, props) {
      var _this2 = this;
      return /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(rootElement) {
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this2.renderComponent(Component, props, rootElement);
              case 2:
              case "end":
                return _context3.stop();
            }
          }, _callee3);
        }));
        return function (_x4) {
          return _ref2.apply(this, arguments);
        };
      }();
    }
  }, {
    key: "toString",
    value: function () {
      var _toString = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(Component, props, options) {
        var _yield$Component$getI2, _Component$getInitial2;
        var initialData, renderedComponent;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return (_Component$getInitial2 = Component.getInitialData) === null || _Component$getInitial2 === void 0 ? void 0 : _Component$getInitial2.call(Component, props);
            case 2:
              _context4.t1 = _yield$Component$getI2 = _context4.sent;
              _context4.t0 = _context4.t1 !== null;
              if (!_context4.t0) {
                _context4.next = 6;
                break;
              }
              _context4.t0 = _yield$Component$getI2 !== void 0;
            case 6:
              if (!_context4.t0) {
                _context4.next = 10;
                break;
              }
              _context4.t2 = _yield$Component$getI2;
              _context4.next = 11;
              break;
            case 10:
              _context4.t2 = {};
            case 11:
              initialData = _context4.t2;
              renderedComponent = /*#__PURE__*/(0,jsx_runtime.jsx)(vcomponent/* VComponent */.o, _objectSpread(_objectSpread({
                node: this._provider
              }, this._provider.props), {}, {
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(Component, _objectSpread(_objectSpread({}, props), {}, {
                  initialData: initialData
                }))
              }));
              return _context4.abrupt("return", dist(renderedComponent, {}, _objectSpread({}, options)));
            case 14:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function toString(_x5, _x6, _x7) {
        return _toString.apply(this, arguments);
      }
      return toString;
    }()
  }]);
  return Render;
}();
// EXTERNAL MODULE: external "@dropins/tools/preact-hooks.js"
var preact_hooks_js_ = __webpack_require__(2720);
// EXTERNAL MODULE: ../../ElsieSDK/packages/elsie/src/components/UIProvider/UIProvider.tsx + 4 modules
var UIProvider = __webpack_require__(212);
// EXTERNAL MODULE: external "@dropins/tools/event-bus.js"
var event_bus_js_ = __webpack_require__(8122);
// EXTERNAL MODULE: ./api/initialize/initialize.ts + 2 modules
var initialize = __webpack_require__(3704);
// EXTERNAL MODULE: ../../ElsieSDK/node_modules/deepmerge/dist/cjs.js
var cjs = __webpack_require__(8528);
var cjs_default = /*#__PURE__*/__webpack_require__.n(cjs);
;// CONCATENATED MODULE: ./render/Provider.tsx
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






event_bus_js_.events.enableLogger(true);

// Langs
var langDefinitions = {
  default: __webpack_require__(2880)
};
var Provider = function Provider(_ref) {
  var _config$getConfig;
  var children = _ref.children;
  var _useState = (0,preact_hooks_js_.useState)(),
    _useState2 = _slicedToArray(_useState, 2),
    locale = _useState2[0],
    setLang = _useState2[1];
  var userLangDefinitions = (_config$getConfig = initialize/* config */.E.getConfig()) === null || _config$getConfig === void 0 ? void 0 : _config$getConfig.langDefinitions;

  //   Events
  (0,preact_hooks_js_.useEffect)(function () {
    var localeEvent = event_bus_js_.events.on('locale', function (payload) {
      if (payload !== locale) setLang(payload);
    }, {
      eager: true
    });
    return function () {
      localeEvent === null || localeEvent === void 0 || localeEvent.off();
    };
  }, [locale]);

  // Merge language definitions with user language definitions
  var definitions = cjs_default()(langDefinitions, userLangDefinitions !== null && userLangDefinitions !== void 0 ? userLangDefinitions : {});
  return /*#__PURE__*/(0,jsx_runtime.jsx)(UIProvider/* UIProvider */.C, {
    lang: locale,
    langDefinitions: definitions,
    children: children
  });
};
;// CONCATENATED MODULE: ./render/render.tsx



var render = new Render( /*#__PURE__*/(0,jsx_runtime.jsx)(Provider, {}));
;// CONCATENATED MODULE: ./render/index.ts


/***/ }),

/***/ 8122:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = (x) => (() => (x))
module.exports = x({ ["events"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_event_bus_js_9bef1f3f__.events) });

/***/ }),

/***/ 8616:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = (x) => (() => (x))
module.exports = x({ ["FetchGraphQL"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_fetch_graphql_js_fa439c6b__.FetchGraphQL) });

/***/ }),

/***/ 6528:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = (x) => (() => (x))
module.exports = x({ ["Children"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_compat_js_873595ef__.Children), ["createContext"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_compat_js_873595ef__.createContext), ["useContext"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_compat_js_873595ef__.useContext), ["useEffect"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_compat_js_873595ef__.useEffect), ["useMemo"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_compat_js_873595ef__.useMemo), ["useState"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_compat_js_873595ef__.useState) });

/***/ }),

/***/ 2720:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = (x) => (() => (x))
module.exports = x({ ["useCallback"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_hooks_js_08969fb2__.useCallback), ["useContext"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_hooks_js_08969fb2__.useContext), ["useDebugValue"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_hooks_js_08969fb2__.useDebugValue), ["useEffect"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_hooks_js_08969fb2__.useEffect), ["useId"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_hooks_js_08969fb2__.useId), ["useImperativeHandle"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_hooks_js_08969fb2__.useImperativeHandle), ["useLayoutEffect"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_hooks_js_08969fb2__.useLayoutEffect), ["useMemo"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_hooks_js_08969fb2__.useMemo), ["useReducer"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_hooks_js_08969fb2__.useReducer), ["useRef"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_hooks_js_08969fb2__.useRef), ["useState"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_hooks_js_08969fb2__.useState) });

/***/ }),

/***/ 6168:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = (x) => (() => (x))
module.exports = x({ ["Fragment"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_jsx_runtime_js_61a4be9f__.Fragment), ["jsx"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_jsx_runtime_js_61a4be9f__.jsx), ["jsxs"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_jsx_runtime_js_61a4be9f__.jsxs) });

/***/ }),

/***/ 7320:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = (x) => (() => (x))
module.exports = x({ ["Component"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_js_29681626__.Component), ["Fragment"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_js_29681626__.Fragment), ["cloneElement"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_js_29681626__.cloneElement), ["createContext"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_js_29681626__.createContext), ["createElement"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_js_29681626__.createElement), ["createRef"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_js_29681626__.createRef), ["h"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_js_29681626__.h), ["hydrate"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_js_29681626__.hydrate), ["options"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_js_29681626__.options), ["render"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_js_29681626__.render), ["toChildArray"]: () => (__WEBPACK_EXTERNAL_MODULE__dropins_tools_preact_js_29681626__.toChildArray) });

/***/ }),

/***/ 2880:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"Cart":{"Cart":{"heading":"Shopping Cart"},"MiniCart":{"heading":"Shopping Cart ({count})","estimatedTotal":"Estimated Total","cartLink":"View Cart","checkoutLink":"Checkout"},"EmptyCart":{"heading":"Your cart is empty","cta":"Continue Shopping"},"PriceSummary":{"taxToBeDetermined":"TBD","checkout":"Checkout"},"CartItem":{"regularPrice":"Regular Price","discountedPrice":"Discounted Price"}}}');

/***/ })

};
;

// load runtime
import __webpack_require__ from "./runtime.js";
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
import * as __webpack_chunk_0__ from "./424.js";
__webpack_require__.C(__webpack_chunk_0__);
import * as __webpack_chunk_1__ from "./218.js";
__webpack_require__.C(__webpack_chunk_1__);
import * as __webpack_chunk_2__ from "./668.js";
__webpack_require__.C(__webpack_chunk_2__);
import * as __webpack_chunk_3__ from "./render.js";
__webpack_require__.C(__webpack_chunk_3__);
var __webpack_exports__ = __webpack_exec__(7387);
var __webpack_exports__render = __webpack_exports__.a;
export { __webpack_exports__render as render };
