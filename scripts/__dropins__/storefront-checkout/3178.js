export const id=3178;export const ids=[3178];export const modules={4786:function(r){r.exports=function(r,t,e,n,o){for(t=t.split?t.split("."):t,n=0;n<t.length;n++)r=r?r[t[n]]:o;return r===o?e:r}},8422:(r,t,e)=>{e.d(t,{RK:()=>m,Dk:()=>w,O:()=>P,a7:()=>L,EY:()=>E,FV:()=>A});var n,o=e(230),i=e(172),a=e(4786),p=e.n(a),c={};function u(r,t,e){if(3===r.nodeType){var n="textContent"in r?r.textContent:r.nodeValue||"";if(!1!==u.options.trim){var o=0===t||t===e.length-1;if((!(n=n.match(/^[\s\n]+$/g)&&"all"!==u.options.trim?" ":n.replace(/(^[\s\n]+|[\s\n]+$)/g,"all"===u.options.trim||o?"":" "))||" "===n)&&e.length>1&&o)return null}return n}if(1!==r.nodeType)return null;var i=String(r.nodeName).toLowerCase();if("script"===i&&!u.options.allowScripts)return null;var a,p,c=u.h(i,function(r){var t=r&&r.length;if(!t)return null;for(var e={},n=0;n<t;n++){var o=r[n],i=o.name,a=o.value;"on"===i.substring(0,2)&&u.options.allowEvents&&(a=new Function(a)),e[i]=a}return e}(r.attributes),(p=(a=r.childNodes)&&Array.prototype.map.call(a,u).filter(s))&&p.length?p:null);return u.visitor&&u.visitor(c),c}var l,s=function(r){return r},f={};function d(r){var t=(r.type||"").toLowerCase(),e=d.map;e&&e.hasOwnProperty(t)?(r.type=e[t],r.props=Object.keys(r.props||{}).reduce((function(t,e){var n;return t[(n=e,n.replace(/-(.)/g,(function(r,t){return t.toUpperCase()})))]=r.props[e],t}),{})):r.type=t.replace(/[^a-z0-9-]/i,"")}const v=function(r){function t(){r.apply(this,arguments)}return r&&(t.__proto__=r),(t.prototype=Object.create(r&&r.prototype)).constructor=t,t.setReviver=function(r){l=r},t.prototype.shouldComponentUpdate=function(r){var t=this.props;return r.wrap!==t.wrap||r.type!==t.type||r.markup!==t.markup},t.prototype.setComponents=function(r){if(this.map={},r)for(var t in r)if(r.hasOwnProperty(t)){var e=t.replace(/([A-Z]+)([A-Z][a-z0-9])|([a-z0-9]+)([A-Z])/g,"$1$3-$2$4").toLowerCase();this.map[e]=r[t]}},t.prototype.render=function(r){var t=r.wrap;void 0===t&&(t=!0);var e,i=r.type,a=r.markup,p=r.components,s=r.reviver,v=r.onError,m=r["allow-scripts"],h=r["allow-events"],y=r.trim,g=function(r,t){var e={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&-1===t.indexOf(n)&&(e[n]=r[n]);return e}(r,["wrap","type","markup","components","reviver","onError","allow-scripts","allow-events","trim"]),b=s||this.reviver||this.constructor.prototype.reviver||l||o.h;this.setComponents(p);var w={allowScripts:m,allowEvents:h,trim:y};try{e=function(r,t,e,o,i){var a=function(r,t){var e,o,i,a,p="html"===t?"text/html":"application/xml";"html"===t?(a="body",i="<!DOCTYPE html>\n<html><body>"+r+"</body></html>"):(a="xml",i='<?xml version="1.0" encoding="UTF-8"?>\n<xml>'+r+"</xml>");try{e=(new DOMParser).parseFromString(i,p)}catch(r){o=r}if(e||"html"!==t||((e=n||(n=function(){if(document.implementation&&document.implementation.createHTMLDocument)return document.implementation.createHTMLDocument("");var r=document.createElement("iframe");return r.style.cssText="position:absolute; left:0; top:-999em; width:1px; height:1px; overflow:hidden;",r.setAttribute("sandbox","allow-forms"),document.body.appendChild(r),r.contentWindow.document}())).open(),e.write(i),e.close()),e){var c=e.getElementsByTagName(a)[0],u=c.firstChild;return r&&!u&&(c.error="Document parse failed."),u&&"parsererror"===String(u.nodeName).toLowerCase()&&(u.removeChild(u.firstChild),u.removeChild(u.lastChild),c.error=u.textContent||u.nodeValue||o||"Unknown error",c.removeChild(u)),c}}(r,t);if(a&&a.error)throw new Error(a.error);var p=a&&a.body||a;d.map=o||f;var l=p&&function(r,t,e,n){return u.visitor=t,u.h=e,u.options=n||c,u(r)}(p,d,e,i);return d.map=null,l&&l.props&&l.props.children||null}(a,i,b,this.map,w)}catch(r){v?v({error:r}):"undefined"!=typeof console&&console.error&&console.error("preact-markup: "+r)}if(!1===t)return e||null;var x=g.hasOwnProperty("className")?"className":"class",C=g[x];return C?C.splice?C.splice(0,0,"markup"):"string"==typeof C?g[x]+=" markup":"object"==typeof C&&(C.markup=!0):g[x]="markup",b("div",g,e||null)},t}(o.uA);var m=(0,o.q6)({intl:{}});function h(r){return null!=r}function y(r,t){for(var e in t)r[e]=t[e];return r}function g(r,t){var e=y({},r);for(var n in t)t.hasOwnProperty(n)&&(r[n]&&t[n]&&"object"==typeof r[n]&&"object"==typeof t[n]?e[n]=g(r[n],t[n]):e[n]=r[n]||t[n]);return e}var b=/[?&#]intl=show/;function w(r){var t=r.scope,e=r.mark,n=r.definition,a=function(r,t){var e={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&-1===t.indexOf(n)&&(e[n]=r[n]);return e}(r,["scope","mark","definition"]),p=y({},(0,i.NT)(m).intl||{});return t&&(p.scope=t),n&&(p.dictionary=g(p.dictionary||{},n)),(e||"undefined"!=typeof location&&String(location).match(b))&&(p.mark=!0),(0,o.h)(m.Provider,{value:{intl:p}},a.children)}function x(r,t){if(arguments.length<2)return t=r,function(r){return x(r,t)};function e(e){return(0,o.h)(w,t||{},(0,o.h)(r,e))}return e.getWrappedComponent=r&&r.getWrappedComponent||function(){return r},e}var C={};function k(r,t,e,n){return r&&r.replace(/\{\{([\w.-]+)\}\}/g,O.bind(null,t||C,e,n))}function O(r,t,e,n,o){for(var i=o.split("."),a=r,p=0;p<i.length;p++){if(null==(a=a[i[p]]))return"";if(a&&a.type===E)return T(a.props.id,t,e,a.props.fields,a.props.plural,a.props.fallback)}return"string"==typeof a&&a.match(/\{\{/)&&(a=k(a,r)),a}function T(r,t,e,n,o,i){t&&(r=t+"."+r);var a=e&&p()(e,r);return(o||0===o)&&a&&"object"==typeof a&&(a=a.splice?a[o]||a[0]:0===o&&h(a.none||a.zero)?a.none||a.zero:1===o&&h(a.one||a.singular)?a.one||a.singular:a.some||a.many||a.plural||a.other||a),a&&k(a,n,t,e)||i||null}function j(r){var t=r.value,e=r.id,n=(0,i.NT)(m).intl;if(n&&n.mark){var a="dictionary"+(n&&n.scope?"."+n.scope:"")+"."+e;return(0,o.h)("mark",{style:{background:t?p()(n,a)?"rgba(119,231,117,.5)":"rgba(229,226,41,.5)":"rgba(228,147,51,.5)"},title:e},t)}return t}function E(r){var t=r.id,e=r.children,n=r.plural,a=r.fields,p=(0,i.NT)(m).intl,c=T(t,p&&p.scope,p&&p.dictionary,a,n,e);return(0,o.h)(j,{id:t,value:c})}function N(r,t,e){var n={};for(var o in t=t||{},r=function(r){if("string"==typeof(r=r||{})&&(r=r.split(",")),"join"in r){for(var t={},e=0;e<r.length;e++){var n=r[e].trim();n&&(t[n.split(".").pop()]=n)}return t}return r}(r),r)if(r.hasOwnProperty(o)&&r[o]){var i=r[o];e||"string"!=typeof i?i.type===E&&(i=y({fallback:i.props.children},i.props),n[o]=T(i.id,t.scope,t.dictionary,i.fields,i.plural,i.fallback)):n[o]=T(i,t.scope,t.dictionary)}return n}function P(r){var t=r.children,e=(0,i.NT)(m).intl;return t&&t.length?t.map((function(r){return(0,o.Ob)(r,N(r.props,e,!0))})):t&&(0,o.Ob)(t,N(t.props,e,!0))}function M(r,t){var e={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&-1===t.indexOf(n)&&(e[n]=r[n]);return e}function L(r){var t=r.id,e=r.fields,n=r.plural,i=r.children,a=M(r,["id","fields","plural","children"]);return(0,o.h)(P,null,(0,o.h)(S,Object.assign({},{html:(0,o.h)(E,{id:t,fields:e,plural:n,children:i}),id:t},a)))}function S(r){var t=r.html,e=r.id,n=M(r,["html","id"]);return(0,o.h)(j,{id:e,value:t?"string"==typeof t?(0,o.h)(v,Object.assign({},{type:"html",trim:!1},n,{markup:t})):(0,o.h)("span",null,t):t})}function A(r){var t=(0,i.NT)(m).intl;return N("function"==typeof r?r({intl:t}):r,t)}x.intl=x,x.IntlContext=m,x.IntlProvider=w,x.Text=E,x.MarkupText=L,x.Localizer=P,x.withText=function(r){return function(t){function e(e,n){var a=(0,i.NT)(m).intl,p=N("function"==typeof r?r(e,{intl:a}):r,a);return(0,o.h)(t,y(y({},e),p))}return e.getWrappedComponent=t&&t.getWrappedComponent||function(){return t},e}},x.useText=A,x.translate=T},278:r=>{r.exports=function(r){var t=[];return t.toString=function(){return this.map((function(t){var e="",n=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),n&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=r(t),n&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(r,e,n,o,i){"string"==typeof r&&(r=[[null,r,void 0]]);var a={};if(n)for(var p=0;p<this.length;p++){var c=this[p][0];null!=c&&(a[c]=!0)}for(var u=0;u<r.length;u++){var l=[].concat(r[u]);n&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},8645:r=>{r.exports=function(r){return r[1]}},5292:r=>{var t=[];function e(r){for(var e=-1,n=0;n<t.length;n++)if(t[n].identifier===r){e=n;break}return e}function n(r,n){for(var i={},a=[],p=0;p<r.length;p++){var c=r[p],u=n.base?c[0]+n.base:c[0],l=i[u]||0,s="".concat(u," ").concat(l);i[u]=l+1;var f=e(s),d={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)t[f].references++,t[f].updater(d);else{var v=o(d,n);n.byIndex=p,t.splice(p,0,{identifier:s,updater:v,references:1})}a.push(s)}return a}function o(r,t){var e=t.domAPI(t);e.update(r);return function(t){if(t){if(t.css===r.css&&t.media===r.media&&t.sourceMap===r.sourceMap&&t.supports===r.supports&&t.layer===r.layer)return;e.update(r=t)}else e.remove()}}r.exports=function(r,o){var i=n(r=r||[],o=o||{});return function(r){r=r||[];for(var a=0;a<i.length;a++){var p=e(i[a]);t[p].references--}for(var c=n(r,o),u=0;u<i.length;u++){var l=e(i[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=c}}},9383:r=>{var t={};r.exports=function(r,e){var n=function(r){if(void 0===t[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}t[r]=e}return t[r]}(r);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(e)}},9088:r=>{r.exports=function(r){var t=document.createElement("style");return r.setAttributes(t,r.attributes),r.insert(t,r.options),t}},8296:r=>{r.exports=function(r,t){Object.keys(t).forEach((function(e){r.setAttribute(e,t[e])}))}},9893:r=>{r.exports=function(r){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=r.insertStyleElement(r);return{update:function(e){!function(r,t,e){var n="";e.supports&&(n+="@supports (".concat(e.supports,") {")),e.media&&(n+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(n+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),n+=e.css,o&&(n+="}"),e.media&&(n+="}"),e.supports&&(n+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(n,r,t.options)}(t,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(t)}}}}};