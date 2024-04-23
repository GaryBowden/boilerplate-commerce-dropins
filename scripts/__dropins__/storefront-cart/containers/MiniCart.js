import*as e from"@dropins/tools/event-bus.js";import*as t from"@dropins/tools/fetch-graphql.js";import*as r from"@dropins/tools/preact-compat.js";import*as n from"@dropins/tools/preact-hooks.js";import*as a from"@dropins/tools/preact-jsx-runtime.js";import*as i from"@dropins/tools/preact.js";export const id=836;export const ids=[836];export const modules={5776:(e,t,r)=>{r.d(t,{Y:()=>L,c:()=>L});var n=r(6528),a=r(2336),i=r(8122),o=r(8884),s=r(4496),c=r(6532),l=r(8300),u=r(5092),d=["className","children","emptyCart","heading","products","estimatedTotal","ctas"];function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){var n;return(t="symbol"==typeof(n=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?n:String(n))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var y=e=>{var{className:t,children:r,emptyCart:n,heading:a,products:i,estimatedTotal:m,ctas:f}=e,y=v(e,d),h=(0,l.cF)({estimatedTotal:"Cart.MiniCart.estimatedTotal"});return(0,u.jsxs)("div",p(p({},y),{},{className:(0,o.i)(["cart-mini-cart",t]),children:[i&&a&&(0,u.jsxs)("div",{className:"cart-mini-cart__heading",children:[(0,u.jsx)(s.o,{node:a,className:"cart-mini-cart__heading-text"}),(0,u.jsx)(c.c,{variant:"primary",className:"cart-mini-cart__heading-divider"})]}),i?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{className:"cart-mini-cart__products",children:i}),(0,u.jsxs)("div",{className:"cart-mini-cart__footer",children:[m&&(0,u.jsxs)("div",{className:"cart-mini-cart__footer__estimated-total",children:[h.estimatedTotal,(0,u.jsx)(s.o,{node:m})]}),f&&(0,u.jsx)(s.o,{node:f,className:"cart-mini-cart__footer__ctas"})]})]}):(0,u.jsx)(s.o,{node:n,className:"cart-mini-cart__empty-cart"})]}))},h=r(876),j=r(5260),g=r(7340),b=r(9716),x=r(6480),C=r(7668),O=r(1580),P=r(7192),k=r(7218),w=["children","initialData","routeProduct","routeCart","routeCheckout","routeEmptyCartCTA"];function S(e,t,r,n,a,i,o){try{var s=e[i](o),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,a)}function E(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function o(e){S(i,n,a,o,s,"next",e)}function s(e){S(i,n,a,o,s,"throw",e)}o(void 0)}))}}function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){D(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function D(e,t,r){var n;return(t="symbol"==typeof(n=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?n:String(n))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function N(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var L=e=>{var t,r,a,{children:o,initialData:s=null,routeProduct:c,routeCart:d,routeCheckout:m,routeEmptyCartCTA:p}=e,f=N(e,w),[v,S]=(0,n.useState)(s),[E,_]=(0,n.useState)(new Set),D=(e,t)=>{_((r=>(e?r.add(t):r.delete(t),new Set(r))))};(0,n.useEffect)((()=>{var e=i.events.on("cart/data",(e=>{S(e)}),{eager:!0});return()=>{null==e||e.off()}}),[]);var L=(0,l.cF)({cartLink:"Cart.MiniCart.cartLink",checkoutLink:"Cart.MiniCart.checkoutLink",discountedPrice:"Cart.CartItem.discountedPrice",heading:"Cart.MiniCart.heading",message:"Cart.CartItem.message",recipient:"Cart.CartItem.recipient",regularPrice:"Cart.CartItem.regularPrice",sender:"Cart.CartItem.sender",file:"Cart.CartItem.file",files:"Cart.CartItem.files"});return(0,n.useEffect)((()=>{s&&Object.keys(s).length>0&&(0,P.Ws)(s,k.K.locale||"en-US")}),[s]),(0,u.jsx)(y,I(I({},f),{},{heading:(0,u.jsx)("div",{children:L.heading.replace("{count}",(null!==(t=null==v?void 0:v.totalQuantity)&&void 0!==t?t:0).toString())}),emptyCart:(0,u.jsx)(h.Q,{ctaLinkURL:null==p?void 0:p()}),estimatedTotal:(null==v?void 0:v.total)&&(0,u.jsx)(j.Y,{amount:null==v?void 0:v.total.value,currency:null==v?void 0:v.total.currency,style:{font:"inherit"}}),ctas:(0,u.jsxs)("div",{children:[m&&(0,u.jsx)(g.q,{variant:"primary",href:m(),children:L.checkoutLink}),d&&(0,u.jsx)(g.q,{variant:"tertiary",href:d(),children:L.cartLink})]}),products:null!==(r=null==v?void 0:v.totalQuantity)&&void 0!==r&&r?(0,u.jsx)(b.A,{children:null==v||null===(a=v.miniCartMaxItems)||void 0===a?void 0:a.map(((e,t)=>{var r,n,a,i,o,s=E.has(e.uid),l=I(I(I(I(I(I(I({},null!==(r=e.selectedOptions)&&void 0!==r?r:{}),e.recipient?{[L.recipient]:e.recipient}:{}),e.recipientEmail&&e.recipient?{[L.recipient]:"".concat(e.recipient," (").concat(e.recipientEmail,")")}:{}),e.sender?{[L.sender]:e.sender}:{}),e.senderEmail&&e.sender?{[L.sender]:"".concat(e.sender," (").concat(e.senderEmail,")")}:{}),e.message?{[L.message]:e.message}:{}),e.links&&e.links.count?e.links.count>1?{[L.files.replace("{count}",e.links.count.toString())]:e.links.result}:{[L.file.replace("{count}",e.links.count.toString())]:e.links.result}:{});return(0,u.jsx)(x.Y,{"data-testid":"cart-item",updating:s,image:c?(0,u.jsx)("a",{href:c(e),children:(0,u.jsx)(C.W,{loading:t<4?"eager":"lazy",src:e.image.src,alt:e.image.alt,width:"300",height:"300",params:{width:300}})}):(0,u.jsx)(C.W,{loading:t<4?"eager":"lazy",src:e.image.src,alt:e.image.alt,width:"300",height:"300",params:{width:300}}),title:(0,u.jsx)("span",{children:c?(0,u.jsx)("a",{href:c(e),children:e.name}):e.name}),sku:(0,u.jsx)("span",{children:e.sku}),configurations:Object.keys(l).length>0?l:void 0,quantity:e.quantity,price:(0,u.jsx)(j.Y,{amount:null===(n=e.regularPrice)||void 0===n?void 0:n.value,currency:null===(a=e.regularPrice)||void 0===a?void 0:a.currency,weight:"normal"}),total:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(j.Y,{amount:e.total.value,currency:e.total.currency,variant:e.discounted?"strikethrough":"default","data-testid":"regular-total","aria-label":L.regularPrice}),e.discounted&&(0,u.jsx)(j.Y,{amount:null===(i=e.discountedTotal)||void 0===i?void 0:i.value,currency:null===(o=e.discountedTotal)||void 0===o?void 0:o.currency,sale:e.discounted,"data-testid":"discount-total","aria-label":L.discountedPrice})]}),onRemove:()=>{var t,r;t=e.uid,r=0,D(!0,t),(0,O.E)([{uid:t,quantity:r}]).finally((()=>{D(!1,t)}))}},e.uid)}))}):void 0}))};L.getInitialData=E((function*(){return(0,a.u)()}))},8122:(t,r,n)=>{t.exports=(e=>{var t={};return n.d(t,e),t})({events:()=>e.events})},8616:(e,r,n)=>{e.exports=(e=>{var t={};return n.d(t,e),t})({FetchGraphQL:()=>t.FetchGraphQL})},6528:(e,t,n)=>{e.exports=(e=>{var t={};return n.d(t,e),t})({Children:()=>r.Children,Suspense:()=>r.Suspense,createContext:()=>r.createContext,lazy:()=>r.lazy,useCallback:()=>r.useCallback,useContext:()=>r.useContext,useEffect:()=>r.useEffect,useMemo:()=>r.useMemo,useRef:()=>r.useRef,useState:()=>r.useState})},2720:(e,t,r)=>{e.exports=(e=>{var t={};return r.d(t,e),t})({useCallback:()=>n.useCallback,useContext:()=>n.useContext,useDebugValue:()=>n.useDebugValue,useEffect:()=>n.useEffect,useId:()=>n.useId,useImperativeHandle:()=>n.useImperativeHandle,useLayoutEffect:()=>n.useLayoutEffect,useMemo:()=>n.useMemo,useReducer:()=>n.useReducer,useRef:()=>n.useRef,useState:()=>n.useState})},6168:(e,t,r)=>{e.exports=(e=>{var t={};return r.d(t,e),t})({Fragment:()=>a.Fragment,jsx:()=>a.jsx,jsxs:()=>a.jsxs})},7320:(e,t,r)=>{e.exports=(e=>{var t={};return r.d(t,e),t})({Component:()=>i.Component,Fragment:()=>i.Fragment,cloneElement:()=>i.cloneElement,createContext:()=>i.createContext,createElement:()=>i.createElement,createRef:()=>i.createRef,h:()=>i.h,hydrate:()=>i.hydrate,options:()=>i.options,render:()=>i.render,toChildArray:()=>i.toChildArray})}};import o from"../runtime.js";import*as s from"../632.js";o.C(s);import*as c from"../928.js";o.C(c);import*as l from"../188.js";o.C(l);import*as u from"./MiniCart.js";o.C(u);var d,m=(d=5776,o(o.s=d)),p=m.Y,f=m.c;export{p as MiniCart,f as default};