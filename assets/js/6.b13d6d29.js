(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{314:function(n,t,e){"use strict";var u,r=e(0),i=e(97);e.d(t,"a",(function(){return i.a})),e.d(t,"b",(function(){return i.b})),e.d(t,"c",(function(){return i.d})),e.d(t,"d",(function(){return i.e})),e.d(t,"e",(function(){return i.f})),e.d(t,"f",(function(){return i.g})),e.d(t,"g",(function(){return i.h})),e.d(t,"h",(function(){return i.i})),e.d(t,"i",(function(){return i.j})),e.d(t,"j",(function(){return i.k})),e.d(t,"k",(function(){return i.l})),e.d(t,"l",(function(){return i.m})),e.d(t,"m",(function(){return i.n})),e.d(t,"n",(function(){return i.o})),(u=(u=r.default)||r.default)&&!u.__composition_api_installed__&&r.default.use(i.c);r.default.version},317:function(n,t,e){"use strict";e.d(t,"b",(function(){return u})),e.d(t,"a",(function(){return r}));var u="undefined"!=typeof window;function r(){var n={};return{getItem:function(t){return n[t]},setItem:function(t,e){return n[t]=e},removeItem:function(t){return delete n[t]},clear:function(){return n={}},length:Object.keys(n).length,key:function(t){return Object.keys(n)[t]}}}},320:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var u=e(314);function r(n,t,e){var r=Object(u.i)();var i=function(){try{var u=n.getItem(t);return u?JSON.parse(u):e}catch(n){console.warn(n)}}();return i&&(r.value=i),Object(u.m)(r,(function(e){var u;void 0===(u=e)?n.removeItem(t):n.setItem(t,JSON.stringify(u))}),{flush:"post",deep:!0}),r}},426:function(n,t,e){"use strict";e.r(t);var u=e(320),r=e(317);var i={name:"use-local-storage",setup:function(){var n,t,e=(n="test",t=1,Object(u.a)(r.b?localStorage:Object(r.a)(),n,t));return{num:e,add:function(){e.value+=1}}}},c=e(26),o=Object(c.a)(i,(function(){var n=this.$createElement,t=this._self._c||n;return t("div",[t("div",{staticClass:"block"},[this._v(this._s(this.num))]),this._v(" "),t("button",{on:{click:this.add}},[this._v("点击 num + 1")])])}),[],!1,null,null,null);t.default=o.exports}}]);