(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{314:function(n,t,r){"use strict";var e,o=r(0),a=r(97);r.d(t,"a",(function(){return a.a})),r.d(t,"b",(function(){return a.b})),r.d(t,"c",(function(){return a.d})),r.d(t,"d",(function(){return a.e})),r.d(t,"e",(function(){return a.f})),r.d(t,"f",(function(){return a.g})),r.d(t,"g",(function(){return a.h})),r.d(t,"h",(function(){return a.i})),r.d(t,"i",(function(){return a.j})),r.d(t,"j",(function(){return a.k})),r.d(t,"k",(function(){return a.l})),(e=(e=o.default)||o.default)&&!e.__composition_api_installed__&&o.default.use(a.c);o.default.version},339:function(n,t,r){},372:function(n,t,r){"use strict";r(339)},412:function(n,t,r){"use strict";r.r(t);r(177),r(98),r(99);var e=r(96),o=r(97);var a=r(314);function i(n,t){return{onDragOver(n){n.preventDefault()},onDragEnter(n){n.preventDefault(),t.value=!0},onDragLeave(n){n.preventDefault(),t.value=!1},onDrop(r){r.preventDefault(),t.value=!1,n(r.dataTransfer,r)},onPaste(t){t.preventDefault(),n(t.clipboardData,t)}}}var u={name:"use-drop",setup:function(){var n,t=Object(o.i)(""),r=void 0===n?{draggable:"true",key:n=>JSON.stringify(n),onDragStart:n=>t=>{var r;null===(r=t.dataTransfer)||void 0===r||r.setData("custom",JSON.stringify(n))}}:{draggable:"true",key:JSON.stringify(n),onDragStart:t=>{var r;null===(r=t.dataTransfer)||void 0===r||r.setData("custom",JSON.stringify(n))}},u=function(n={}){const t=Object(a.h)(!1);return[i((t,r)=>{const e=null==t?void 0:t.getData("text/uri-list"),o=null==t?void 0:t.getData("custom");o&&null!=n&&n.onDom?n.onDom(o,r):e&&null!=n&&n.onUri?n.onUri(e,r):t.files&&t.files.length>0&&null!=n&&n.onFiles?n.onFiles([...Array.from(t.files)],r):t.items&&t.items.length>0&&null!=n&&n.onText&&t.items[0].getAsString(t=>{n.onText(t,r)})},t),Object(a.a)(()=>t.value)]}({onDom:function(n){t.value="custom: item ".concat(n," dropped")},onText:function(n){t.value="text: ".concat(n," dropped")},onFiles:function(n){var r="";n.forEach((function(n,t){r+="file".concat(t+1,": ").concat(JSON.stringify(n))+"\n"})),t.value=r},onUri:function(n){t.value=n,window.open(n)}}),s=Object(e.a)(u,2);return{dragProps:r,dropProps:s[0],isHovering:s[1],msg:t}}},s=(r(372),r(26)),l=Object(s.a)(u,(function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("div",{staticClass:"wrap"},[r("div",{staticClass:"left"},[r("div",{class:{drop:!0,hover:n.isHovering},on:{dragover:n.dropProps.onDragOver,dragenter:n.dropProps.onDragEnter,dragleave:n.dropProps.onDragLeave,drop:n.dropProps.onDrop,paste:n.dropProps.onPaste}},[n._v("\n      ---- "+n._s(n.isHovering?"hovering":"Drop to here ")+" ----\n    ")]),n._v(" "),n._l([1,2,3,4,5],(function(t){return r("span",{key:n.dragProps.key(t),staticClass:"drag-item",attrs:{draggable:n.dragProps.draggable},on:{dragstart:function(r){return n.dragProps.onDragStart(t)(r)}}},[n._v("item "+n._s(t))])}))],2),n._v(" "),r("div",{staticClass:"right"},[n._v(n._s(n.msg))])])}),[],!1,null,"a5242908",null);t.default=l.exports}}]);