(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{314:function(e,t,n){"use strict";var s,c=n(0),i=n(97);n.d(t,"a",(function(){return i.a})),n.d(t,"b",(function(){return i.b})),n.d(t,"c",(function(){return i.d})),n.d(t,"d",(function(){return i.e})),n.d(t,"e",(function(){return i.f})),n.d(t,"f",(function(){return i.g})),n.d(t,"g",(function(){return i.h})),n.d(t,"h",(function(){return i.i})),n.d(t,"i",(function(){return i.j})),n.d(t,"j",(function(){return i.k})),n.d(t,"k",(function(){return i.l})),(s=(s=c.default)||c.default)&&!s.__composition_api_installed__&&c.default.use(i.c);c.default.version},341:function(e,t,n){},374:function(e,t,n){"use strict";n(341)},375:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"d",(function(){return u}));n(171),n(68);var s=[{skuId:"1",spuSpecValues:[{specId:"a",specName:"颜色",specValueId:"11",specValueRemark:"黑色"},{specId:"b",specName:"尺寸",specValueId:"101",specValueRemark:"L"}]},{skuId:"2",spuSpecValues:[{specId:"a",specName:"颜色",specValueId:"12",specValueRemark:"绿色"},{specId:"b",specName:"尺寸",specValueId:"102",specValueRemark:"S"}]},{skuId:"2",spuSpecValues:[{specId:"a",specName:"颜色",specValueId:"12",specValueRemark:"绿色"},{specId:"b",specName:"尺寸",specValueId:"103",specValueRemark:"XS"}]}];function c(){return s.map((function(e){return e.spuSpecValues.map((function(e){return e.specValueRemark})).join("-")}))}var i={skuList:[{skuId:"1",specs:[{specId:"a",specName:"颜色",specValueId:"11",specValueRemark:"黑色"},{specId:"b",specName:"尺寸",specValueId:"101",specValueRemark:"L"}]},{skuId:"2",specs:[{specId:"a",specName:"颜色",specValueId:"12",specValueRemark:"绿色"},{specId:"b",specName:"尺寸",specValueId:"102",specValueRemark:"S"}]},{skuId:"2",specs:[{specId:"a",specName:"颜色",specValueId:"12",specValueRemark:"绿色"},{specId:"b",specName:"尺寸",specValueId:"103",specValueRemark:"XS"}]}]},u={getSkuList:function(e){return e.skuList},getSkuSpecList:function(e){return e.specs}}},381:function(e,t,n){"use strict";n.d(t,"a",(function(){return I}));var s=n(314);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function c(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var s=Array(e),c=0;for(t=0;t<n;t++)for(var i=arguments[t],u=0,o=i.length;u<o;u++,c++)s[c]=i[u];return s}var i=function(e){return null==e},u=function(){function e(e){this._m=e}return e.prototype.getRawMatrix=function(){return this._m},e.prototype.getRawMatrixColNum=function(){try{return this._m[0].length}catch(e){throw new Error("矩阵列不能为空")}},e.prototype.getRawMatrixRowNum=function(){return this._m.length},e.prototype.transpose=function(){for(var e=this.getRawMatrixColNum(),t=this.getRawMatrixRowNum(),n=Array.from({length:e}).map((function(){return Array.from({length:t})})),s=0;s<e;s++)for(var c=0;c<t;c++)n[s][c]=this._m[c][s];return n},e}();function o(e,t,n){if(void 0===n&&(n=function(e){return e.join("-")}),t<0)return[];if(1===t)return e.map((function(e){return n([e])}));var s=[];return function e(c,i,u){if(u.length!==t)for(var o=i;o<c.length;o++)u.push(c[o]),e(c,o+1,u),u.pop();else s.push(n(u))}(e,0,[]),s}var r={skuCodeJoiner:"$",specCodeJoiner:"#",getSkuList:function(e){return e},getSkuSpecList:function(e){return e.spuSpecValues},getSkuId:function(e){return e.skuId},getSpecId:function(e){return e.specId},getSpecTitle:function(e){return e.specName},getspecValueId:function(e){return e.specValueId},getspecValue:function(e){return e.specValueRemark}};var p,a=function(){function e(e){this.hooks=[],this.selectedSpec=Array.from({length:e})}return e.prototype.selectSpec=function(e,t){var n=this;this.selectedSpec[e]=t,this.checkIsGenASku()&&this.hooks.forEach((function(e){e(n.getSpecsJoin())}))},e.prototype.cancelSpec=function(e){this.selectedSpec[e]=null},e.prototype.sepcIsSelected=function(e,t){var n;return!(!this.selectedSpec[e]||(null===(n=this.selectedSpec[e])||void 0===n?void 0:n.specJoinQue)!==t.specJoinQue)},e.prototype.getSpecsJoinWith=function(e,t){return this.selectedSpec.reduce((function(n,s,c){return c===e?n?""+n+r.specCodeJoiner+t.specJoinQue:t.specJoinQue:n?s?""+n+r.specCodeJoiner+s.specJoinQue:n:s?s.specJoinQue:""}),"")},e.prototype.combineHook=function(e){this.hooks.push(e)},e.prototype.checkIsGenASku=function(){return!this.selectedSpec.some(i)},e.prototype.getSpecsJoin=function(){return this.selectedSpec.map((function(e){return null==e?void 0:e.specJoinQue})).join(r.specCodeJoiner)},e}(),d=function(){function e(e){this.skuId="",this.toltalSpecCombine=[],this.code=e,this._combineCode()}return e.prototype._combineCode=function(){var e=this.code.split(r.skuCodeJoiner);this.skuId=e[0];for(var t=e[1].split(r.specCodeJoiner),n=t.length,s=1;s<=n;s++){var i=o(t,s,(function(e){return e.join(r.specCodeJoiner)}));this.toltalSpecCombine=c(this.toltalSpecCombine,i)}},e}();!function(e){e.PENDING="pending",e.DISABLED="disabled",e.SELECTED="selected"}(p||(p={}));var f=function(){function e(e){this.pathDict=[],this.specGroup=e,this._initPathDict(),this._initSkuPending()}return e.prototype._initPathDict=function(){var e=this;this.specGroup.eachSkuIdJoinSpecsId((function(t){var n=new d(t);e.pathDict=c(e.pathDict,n.toltalSpecCombine)}))},e.prototype._initSkuPending=function(){var e=this.specGroup.specLines.length;this.skuPending=new a(e)},e.prototype.specTap=function(e){e.status!==p.DISABLED&&(this._changeSpecStatus(e),this._checkOtherSpecStatus())},e.prototype.onSkuCombined=function(e){var t=this;this.skuPending.combineHook((function(n){var s,c;t.specGroup.skuIdJoinSpecsId.forEach((function(e){var t;e.includes(n)&&(t=e.split(r.skuCodeJoiner),s=t[0],c=t[1])})),e(s,c)}))},e.prototype._changeSpecStatus=function(e){e.status===p.PENDING?(this.specGroup.setSpecStatusByPosition(e.row,e.col,p.SELECTED),this.skuPending.selectSpec(e.row,this.specGroup.getSpec(e.row,e.col))):e.status===p.SELECTED&&(this.specGroup.setSpecStatusByPosition(e.row,e.col,p.PENDING),this.skuPending.cancelSpec(e.row))},e.prototype._checkOtherSpecStatus=function(){var e=this;this.specGroup.eachSpec((function(t,n,s){if(!e.skuPending.sepcIsSelected(n,t)){var c=e.skuPending.getSpecsJoinWith(n,t);e._isInPathDict(c)?e.specGroup.setSpecStatusByPosition(t.row,t.col,p.PENDING):e._disableSpec(n,s)}}))},e.prototype._isInPathDict=function(e){return this.pathDict.includes(e)},e.prototype._disableSpec=function(e,t){this.specGroup.setSpecStatusByPosition(e,t,p.DISABLED)},e}(),l=function(){function e(e,t,n){this.status=p.PENDING,this.row=t,this.col=n,this.specValue=r.getspecValue(e),this.specId=r.getSpecId(e),this.specValueId=r.getspecValueId(e)}return Object.defineProperty(e.prototype,"specJoinQue",{get:function(){return this.specValueId?this.specId+"-"+this.specValueId:""+this.specId},enumerable:!1,configurable:!0}),e.prototype.setStatus=function(e){this.status=e},e}(),h=function(){function e(e,t){this.specLineTitle="",this.specs=[],this.row=t,this.specLineTitle=r.getSpecTitle(e[0]),this._init(e)}return e.prototype._init=function(e){var t=this;e.map((function(e,n){if(!t._specIsRepeact(e)){var s=new l(e,t.row,n);t.specs.push(s)}}))},e.prototype._specIsRepeact=function(e){return this.specs.findIndex((function(t){return t.specId+"-"+t.specValueId==r.getSpecId(e)+"-"+r.getspecValueId(e)}))>-1},e}(),S=function(){function e(e){this._skuSpecsList=[],this._skuIdJoinSpecsId=[],this.specLines=[],this._skuList=r.getSkuList(e),this._setup()}return Object.defineProperty(e.prototype,"skuSpecsList",{get:function(){return this._skuSpecsList},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"skuIdJoinSpecsId",{get:function(){return this._skuIdJoinSpecsId},enumerable:!1,configurable:!0}),e.prototype._setup=function(){this._createSkuSpecsList();var e=this._transposeSkuSpecsList();this._createSpecLines(e)},e.prototype._createSkuSpecsList=function(){var e=this;this._skuSpecsList=this._skuList.map((function(t){var n=r.getSkuSpecList(t);return e._createSkuIdJoinSpecsId(t,n),n}))},e.prototype._createSkuIdJoinSpecsId=function(e,t){var n=""+r.getSkuId(e)+r.skuCodeJoiner;n+=t.map((function(e){var t=r.getSpecId(e),n=r.getspecValueId(e);return n?t+"-"+n:t})).join(r.specCodeJoiner),this._skuIdJoinSpecsId.push(n)},e.prototype._transposeSkuSpecsList=function(){return new u(this._skuSpecsList).transpose()},e.prototype._createSpecLines=function(e){for(var t=0;t<e.length;t++){var n=new h(e[t],t);this.specLines.push(n)}},e.prototype.eachSpec=function(e){this.specLines.forEach((function(t,n){t.specs.forEach((function(t,s){e(t,n,s)}))}))},e.prototype.getSpec=function(e,t){return this.specLines[e].specs[t]},e.prototype.setSpecStatusByPosition=function(e,t,n){this.specLines[e].specs[t].setStatus(n)},e.prototype.eachSkuIdJoinSpecsId=function(e){this._skuIdJoinSpecsId.forEach((function(t){e(t)}))},e}();function k(e,t){t&&function(e){r=function(e,t){var n={};for(var s in t)n[s]=t[s];for(var s in e)Object.prototype.hasOwnProperty.call(n,s)||(n[s]=e[s]);return n}(r,e)}(t);var n=new S(e);return new f(n)}function I(e,t){const n=k(e,t),c=Object(s.i)(n.specGroup.specLines);return{specTap:e=>{n.specTap(e),c.value=n.specGroup.specLines.concat()},skuList:c}}},426:function(e,t,n){"use strict";n.r(t);var s=n(375),c=n(381),i={name:"use-sku",setup:function(){var e=Object(c.a)(s.a);return{skuList:e.skuList,specTap:e.specTap,allSku:Object(s.c)()}}},u=(n(374),n(26)),o=Object(u.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"info"},[n("h4",[e._v("所有可组合的Sku")]),e._v(" "),e._l(e.allSku,(function(t){return n("span",{staticClass:"block"},[e._v(e._s(t))])}))],2),e._v(" "),e._l(e.skuList,(function(t){return n("div",{key:t.row,staticClass:"spec-line"},[n("h4",[e._v(e._s(t.specLineTitle))]),e._v(" "),e._l(t.specs,(function(t){return n("span",{class:["spec",t.status],on:{click:function(n){return e.specTap(t)}}},[e._v(e._s(t.specValue))])}))],2)}))],2)}),[],!1,null,"9dd7b38c",null);t.default=o.exports}}]);