(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{418:function(t,e,r){"use strict";r.r(e);r(10),r(373);var n=function(t){return new Promise((function(e){setTimeout((function(){e(t)}),2e3)}))};function o(){return fetch.apply(void 0,arguments).then((function(t){if(t.ok)return t.json();throw new Error(t.statusText)}))}var i=r(372);function a(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){h(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function f(t,e,r){return e&&s(t.prototype,e),r&&s(t,r),t}function h(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var d=function(){function t(e,r,n,o){var a,u;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),h(this,"that",this),h(this,"config",void 0),h(this,"service",void 0),h(this,"count",0),h(this,"unmountedFlag",!1),h(this,"result",{loading:!1,data:void 0,error:void 0,params:void 0,cancel:this.cancel.bind(this.that),refresh:this.refresh.bind(this.that),run:this.run.bind(this.that),unmount:this.unmount.bind(this.that)}),h(this,"subscribe",void 0),h(this,"unSubscribe",[]),h(this,"debounceTimer",void 0),h(this,"throttleTimer",void 0),h(this,"debounceRun",void 0),h(this,"throttleRun",void 0),h(this,"loadDelayTimer",void 0),h(this,"pollingTimer",void 0),this.service=e,this.config=r,this.subscribe=n,o&&(this.result=c(c({},this.result),o)),this.debounceRun=null!==(a=this.config)&&void 0!==a&&a.debounceTime?Object(i.debounce)(this._run,this.config.debounceTime):void 0,this.throttleRun=null!==(u=this.config)&&void 0!==u&&u.throttleTime?Object(i.throttle)(this._run,this.config.throttleTime):void 0}return f(t,[{key:"setResult",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.result=c(c({},this.result),t),this.subscribe(this.result)}}]),f(t,[{key:"_run",value:function(){for(var t,e,r=this,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];this.pollingTimer&&clearTimeout(this.pollingTimer),this.loadDelayTimer&&clearTimeout(this.loadDelayTimer),this.count++;var a=this.count;return this.setResult({loading:!(null!==(t=this.config)&&void 0!==t&&t.loadingDelay),params:o}),null!==(e=this.config)&&void 0!==e&&e.loadingDelay&&(this.loadDelayTimer=setTimeout((function(){r.setResult({loading:!0})}),this.config.loadingDelay)),this.service.apply(this,o).then((function(t){if(!r.unmountedFlag&&a===r.count){var e,n;r.loadDelayTimer&&clearTimeout(r.loadDelayTimer);var i=null!==(e=r.config)&&void 0!==e&&e.formatResult?r.config.formatResult(t):t;return(null===(n=r.config)||void 0===n?void 0:n.onSuccess)&&r.config.onSuccess(i,o),r.setResult({data:i,error:null,loading:!1}),i}})).catch((function(t){if(!r.unmountedFlag&&a===r.count){var e,n;if(r.loadDelayTimer&&clearTimeout(r.loadDelayTimer),r.setResult({data:null,error:t,loading:!1}),null!==(e=r.config)&&void 0!==e&&e.onError&&r.config.onError(t,o),null!==(n=r.config)&&void 0!==n&&n.throwOnError)throw t;return console.error(t),Promise.reject("useRequest has caught the exception, if you need to handle the exception yourself, you can set options.throwOnError to true.")}})).finally((function(){var t;r.unmountedFlag||a!==r.count||null!==(t=r.config)&&void 0!==t&&t.pollingTime&&(r.pollingTimer=setTimeout((function(){r._run.apply(r,o)}),r.config.pollingTime))}))}},{key:"run",value:function(){return this.debounceRun?this.debounceRun.apply(this,arguments):this.throttleRun?this.throttleRun.apply(this,arguments):this._run.apply(this,arguments)}},{key:"cancel",value:function(){this.debounceRun&&this.debounceRun.cancel(),this.throttleRun&&this.throttleRun.cancel(),this.loadDelayTimer&&clearTimeout(this.loadDelayTimer),this.pollingTimer&&clearTimeout(this.pollingTimer),this.count+=1,this.setResult({loading:!1})}},{key:"refresh",value:function(){return this.run.apply(this,a(this.result.params))}},{key:"unmount",value:function(){this.unmountedFlag=!0,this.cancel(),this.unSubscribe.forEach((function(t){t()}))}}]),t}(),y=new Map;var b=r(314);function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(Object(r),!0).forEach((function(e){p(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function g(t){return function(t){if(Array.isArray(t))return w(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||j(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}(t,e)||j(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(t,e){if(t){if("string"==typeof t)return w(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?w(t,e):void 0}}function w(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var T="vue_reuse_request_default_fetch_key";function S(t,e){var r,n=e||{},o=n.onSuccess,i=n.onError,a=n.throwOnError,u=n.debounceTime,l=n.throttleTime,c=n.pollingTime,s=n.loadingDelay,f=n.defaultData,h=void 0===f?void 0:f,v=n.defaultLoading,p=void 0!==v&&v,j=n.defaultParams,w=void 0===j?[]:j,S=n.manual,D=n.fetchKey,R=n.cacheKey,E=n.cacheTime,k=t,A=h,_=w;"formatResult"in n&&(r=n.formatResult);var I={formatResult:r,onSuccess:o,onError:i,throwOnError:a,pollingTime:c,debounceTime:u,throttleTime:l,loadingDelay:s},x=Object(b.j)({}),q=O(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object(b.j)(t),r=function(t){var r=t.data,n=t.loading,o=t.params,i=t.error,a=t.cancel,u=t.refresh;e.data=r,e.loading=n,e.error=i,e.params=o,e.cancel=a||P("cancel"),e.refresh=u||P("refresh")};return[e,r]}({data:A,loading:p,params:_,error:void 0,cancel:P("cancel"),refresh:P("refresh")}),2),F=q[0],M=q[1],C=Object(b.k)(T),K=function(t,e){M(e),x[t]=e};if(R){var $=function(t){var e=y.get(t);return{data:null==e?void 0:e.data,startTime:null==e?void 0:e.startTime}}(R);if(null!=$&&$.data){var J,U,L=(null===(J=$.data)||void 0===J?void 0:J.fetches)||{};Object.keys(L).forEach((function(t){var e=new d(k,I,K.bind(null,t),{loading:L[t].loading,data:L[t].data,params:L[t].params});x[t]=e.result})),C.value=(null===(U=$.data)||void 0===U?void 0:U.fetchKey)||T,M(x[C.value])}}Object(b.n)((function(){R&&E&&function(t,e,r){var n,o=y.get(t);null!=o&&o.timer&&clearTimeout(o.timer),r>-1&&(n=setTimeout((function(){y.delete(t)}),r)),y.set(t,{data:e,timer:n,startTime:(new Date).getTime()})}(R,{fetches:x,fetchKey:C.value},E)}));var z=function(){var t;D&&(C.value=D.apply(void 0,arguments)||T);var e=x[C.value];if(!e){var r=new d(k,I,K.bind(null,C.value),{loading:p,params:_,data:A});e=x[C.value]=r.result}return(t=e).run.apply(t,arguments)};return Object(b.f)((function(){S||z.apply(void 0,g(_))})),Object(b.g)((function(){Object.keys(x).forEach((function(t){x[t].unmount()}))})),m(m({run:z},Object(b.l)(F)),{},{fetches:x,reset:function(){C.value=T,Object.keys(x).forEach((function(t){x[t].unmount(),delete x[t]}))}})}var P=function(t){return function(){return console.warn("function ".concat(t," should be call when fetch ready"))}};function D(t){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function R(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var E={name:"request-base",setup:function(){var t=function(t){var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.requestMethod,i=R(r,["requestMethod"]),a=n||o;switch(D(t)){case"string":e=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return a.apply(void 0,[t].concat(r))};break;case"object":var u=t.url,l=R(t,["url"]);e=function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return n?n.apply(void 0,[t].concat(r)):o(u,l)};break;default:e=function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return new Promise((function(e,i){var u=t.apply(void 0,r),l=u;if(null==u||!u.then)switch(D(u)){case"string":l=a(u);break;case"object":var c=u.url,s=R(u,["url"]);l=n?n(u):o(c,s)}l.then(e).catch(i)}))}}return S(e,i)}(n,{defaultParams:["request result"]});return{data:t.data,loading:t.loading}}},k=r(26),A=Object(k.a)(E,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this.loading?e("div",[this._v("loading....")]):e("div",{staticClass:"block"},[this._v(this._s(this.data))])])}),[],!1,null,null,null);e.default=A.exports}}]);