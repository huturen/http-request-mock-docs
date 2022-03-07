!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.HttpRequestMock=t():e.HttpRequestMock=t()}(self,(function(){return(()=>{"use strict";var e={176:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=function(){this.flag="yes"}},571:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isNodejs=t.currentDatetime=t.currentTime=t.currentDate=t.isArrayBuffer=t.str2arrayBuffer=t.sleep=t.tryToParseObject=t.isObject=t.getQuery=void 0,t.getQuery=function(e){return/\?/.test(e)?e.replace(/.*?\?/g,"").replace(/#.*$/g,"").split("&").reduce((function(e,t){var n=t.split("="),r=n[0],o=n[1];return e[r]=(o||"").trim(),e}),{}):{}},t.isObject=function(e){return"[object Object]"===Object.prototype.toString.call(e)},t.tryToParseObject=function(e){if("string"!=typeof e||"{"!==e[0]||"}"!==e[e.length-1])return e;try{return JSON.parse(e)}catch(t){return e}},t.sleep=function(e){return new Promise((function(t){return setTimeout(t,e)}))},t.str2arrayBuffer=function(e){if("function"==typeof TextEncoder)return(new TextEncoder).encode(e);for(var t=new ArrayBuffer(2*e.length),n=new Uint16Array(t),r=0,o=e.length;r<o;r++)n[r]=e.charCodeAt(r);return t},t.isArrayBuffer=function(e){return"function"==typeof ArrayBuffer&&e instanceof ArrayBuffer||"function"==typeof Int32Array&&e instanceof Int32Array||"function"==typeof Int16Array&&e instanceof Int16Array||"function"==typeof Int8Array&&e instanceof Int8Array},t.currentDate=function(){var e=new Date,t=e.getFullYear(),n=e.getMonth()+1,r=e.getDate(),o=function(e){return e<10?"0".concat(e):"".concat(e)};return"".concat(o(t),"-").concat(o(n),"-").concat(o(r))},t.currentTime=function(){var e=new Date,t=e.getHours(),n=e.getMinutes(),r=e.getSeconds(),o=function(e){return e<10?"0".concat(e):"".concat(e)};return"".concat(o(t),":").concat(o(n),":").concat(o(r))},t.currentDatetime=function(){var e=new Date,t=e.getFullYear(),n=e.getMonth()+1,r=e.getDate(),o=e.getHours(),s=e.getMinutes(),i=e.getSeconds(),u=function(e){return e<10?"0".concat(e):"".concat(e)};return"".concat(u(t),"-").concat(u(n),"-").concat(u(r)," ").concat(u(o),":").concat(u(s),":").concat(u(i))},t.isNodejs=function(){return"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process)&&!(!process.versions||!process.versions.node)}},913:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.HTTPStatusCodes=void 0,t.HTTPStatusCodes={100:"Continue",101:"Switching Protocols",102:"Processing",103:"Early Hints",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi-Status",208:"Already Reported",226:"IM Used",300:"Multiple Choices",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",307:"Temporary Redirect",308:"Permanent Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Payload Too Large",414:"URI Too Long",415:"Unsupported Media Type",416:"Range Not Satisfiable",417:"Expectation Failed",418:"I'm a Teapot",421:"Misdirected Request",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",425:"Too Early",426:"Upgrade Required",428:"Precondition Required",429:"Too Many Requests",431:"Request Header Fields Too Large",451:"Unavailable For Legal Reasons",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported",506:"Variant Also Negotiates",507:"Insufficient Storage",508:"Loop Detected",509:"Bandwidth Limit Exceeded",510:"Not Extended",511:"Network Authentication Required"}},607:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(571),s=r(n(843)),i=r(n(556)),u=r(n(507)),a=r(n(755)),c=function(){function e(){}return e.setup=function(e){void 0===e&&(e="");var t=new a.default(e);return this.isEnabled&&"undefined"!=typeof wx&&"function"==typeof wx.request&&i.default.setup(t,e),this.isEnabled&&"undefined"!=typeof window&&"function"==typeof window.XMLHttpRequest&&u.default.setup(t,e),this.isEnabled&&"undefined"!=typeof window&&"function"==typeof window.fetch&&s.default.setup(t,e),this.isEnabled&&(0,o.isNodejs)()&&Object(function(){var e=new Error("Cannot find module './interceptor/node/http-and-https'");throw e.code="MODULE_NOT_FOUND",e}())(t,e),t},e.setupForWx=function(e){void 0===e&&(e="");var t=new a.default(e);return this.isEnabled&&i.default.setup(t,e),t},e.setupForXhr=function(e){void 0===e&&(e="");var t=new a.default(e);return this.isEnabled&&u.default.setup(t,e),t},e.setupForFetch=function(e){void 0===e&&(e="");var t=new a.default(e);return this.isEnabled&&s.default.setup(t,e),t},e.setupForNode=function(e){void 0===e&&(e="");var t=new a.default(e);return this.isEnabled&&Object(function(){var e=new Error("Cannot find module './interceptor/node/http-and-https'");throw e.code="MODULE_NOT_FOUND",e}())(t,e),t},e.enable=function(){return this.isEnabled=!0,a.default.getInstance().enable()},e.disable=function(){return this.isEnabled=!1,a.default.getInstance().disable()},e.enableLog=function(){return a.default.getInstance().enableLog()},e.disableLog=function(){return a.default.getInstance().disableLog()},e.setupForUnitTest=function(e){if(!(0,o.isNodejs)())throw new Error('"setupForUnitTest" is only for nodejs envrioment.');var t=new a.default;return"wx"===e&&i.default.setupForUnitTest(t),"xhr"===e&&u.default.setupForUnitTest(t),"fetch"===e&&s.default.setupForUnitTest(t),"node"!==e&&"node.http.request"!==e||Object(function(){var e=new Error("Cannot find module './interceptor/node/http-and-https'");throw e.code="MODULE_NOT_FOUND",e}())(t),"all"===e&&(i.default.setupForUnitTest(t),u.default.setupForUnitTest(t),s.default.setupForUnitTest(t),Object(function(){var e=new Error("Cannot find module './interceptor/node/http-and-https'");throw e.code="MODULE_NOT_FOUND",e}())(t)),t},e.isEnabled=!0,e.default=e,e}();t.default=c,e.exports=c},985:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=n(571),o=function(){function e(t,n){if(void 0===n&&(n=""),this.proxyServer="",this.proxyMode="none",this.mocker=t,/^localhost:\d+$/.test(n)){this.proxyServer=n;var r=+n.replace("localhost:","");this.proxyMode=r>=9001&&r<=9049?"matched":"all"}else n&&console.warn("Invalid proxyServer:",n);this.global=e.getGlobal()}return e.setup=function(e,t){return void 0===t&&(t=""),new this(e,t)},e.getGlobal=function(){if("undefined"!=typeof window)return window;if(void 0!==n.g)return n.g;throw new Error("Detect global variable error")},e.prototype.matchMockRequest=function(e,t){if(this.proxyServer&&0===e.indexOf("http://".concat(this.proxyServer)))return null;var n=this.mocker.matchMockItem(e,t);return n&&void 0!==n.times&&(n.times-=1),n},e.prototype.getRequestInfo=function(e){var t={url:e.url,method:e.method||"GET",query:(0,r.getQuery)(e.url)};return(e.headers||e.header)&&(t.headers=e.headers||e.header),void 0!==e.body&&(t.body=(0,r.tryToParseObject)(e.body)),t},e.prototype.getFullRequestUrl=function(e,t){if(/^https?:\/\//i.test(e))return this.checkProxyUrl(e,t);if("function"==typeof URL&&"object"==typeof window&&window)return this.checkProxyUrl(new URL(e,window.location.href).href,t);if("object"==typeof document&&document&&"function"==typeof document.createElement){var n=document.createElement("a");return n.href=e,this.checkProxyUrl(n.href,t)}return this.checkProxyUrl(e,t)},e.prototype.checkProxyUrl=function(e,t){return"matched"===this.proxyMode&&this.proxyServer?this.mocker.matchMockItem(e,t)?"http://".concat(this.proxyServer)+e.replace(/^(https?):\/\//,"/$1/"):e:this.proxyServer?"http://".concat(this.proxyServer)+e.replace(/^(https?):\/\//,"/$1/"):e},e}();t.default=o},843:function(e,t,n){var r,o=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=this&&this.__assign||function(){return s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},s.apply(this,arguments)},i=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{a(r.next(e))}catch(e){s(e)}}function u(e){try{a(r.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}a((r=r.apply(e,t||[])).next())}))},u=this&&this.__generator||function(e,t){var n,r,o,s,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function u(s){return function(u){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,r=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){i=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s);break}o[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(e){s=[6,e],r=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=a(n(176)),l=n(571),f=n(913),d=a(n(985)),p=function(e){function t(n,r){void 0===r&&(r="");var o=e.call(this,n,r)||this;return t.instance?t.instance:(t.instance=o,o.fetch=o.global.fetch.bind(o.global),o.intercept(),o)}return o(t,e),t.setupForUnitTest=function(e){var n=d.default.getGlobal();return n.fetch||(n.fetch=Object(function(){var e=new Error("Cannot find module '../dummy/fetch'");throw e.code="MODULE_NOT_FOUND",e}())),new t(e)},t.prototype.intercept=function(){var e=this;return this.global.fetch=function(t,n){var r,o;"object"==typeof t?(r=t.url,o=t):(r=t,o=n||{});var i=o&&o.method?o.method:"GET",u=e.getFullRequestUrl(r,i);return new Promise((function(t,n){var r=e.matchMockRequest(u,i);if(r){var a=e.getRequestInfo(s({url:u,method:i},o));e.doMockRequest(r,a,t).then((function(r){r&&e.fetch(u,o).then(t).catch(n)}))}else e.fetch(u,o).then(t).catch(n)}))},this},t.prototype.doMockRequest=function(e,t,n){return i(this,void 0,void 0,(function(){var r;return u(this,(function(o){switch(o.label){case 0:return r=!1,e.delay&&e.delay>0?[4,(0,l.sleep)(+e.delay)]:[3,3];case 1:return o.sent(),[4,this.doMockResponse(e,t,n)];case 2:return r=o.sent(),[3,5];case 3:return[4,this.doMockResponse(e,t,n)];case 4:r=o.sent(),o.label=5;case 5:return[2,r]}}))}))},t.prototype.doMockResponse=function(e,t,n){return i(this,void 0,void 0,(function(){var r,o,s;return u(this,(function(i){switch(i.label){case 0:return[4,e.sendBody(t)];case 1:return r=i.sent(),o=Date.now(),r instanceof c.default?[2,!0]:(s=Date.now()-o+(e.delay||0),this.mocker.sendResponseLog(s,r,t,e),n(this.getFetchResponse(r,e,t)),[2,!1])}}))}))},t.prototype.getFetchResponse=function(e,t,n){var r=e,o=t.status,i=f.HTTPStatusCodes[o]||"",u="function"==typeof Headers?new Headers(s(s({},t.header),{"x-powered-by":"http-request-mock"})):s(s({},t.header),{"x-powered-by":"http-request-mock"}),a="function"==typeof Blob?new Blob(["string"==typeof r?r:JSON.stringify(r)]):r;if("function"==typeof Response){var c=new Response(a,{status:o,statusText:i,headers:u});return Object.defineProperty(c,"url",{value:n.url}),c}var l={body:a,bodyUsed:!1,headers:u,ok:!0,redirected:!1,status:o,statusText:i,url:n.url,type:"basic",json:function(){return Promise.resolve(r)},arrayBuffer:function(){return Promise.resolve(r)},blob:function(){return Promise.resolve(a)},formData:function(){return Promise.resolve(r)},text:function(){return Promise.resolve("string"==typeof r?r:JSON.stringify(r))},clone:function(){return l},error:function(){return l},redirect:function(){return l}};return l},t}(d.default);t.default=p},556:function(e,t,n){var r,o=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=this&&this.__assign||function(){return s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},s.apply(this,arguments)},i=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{a(r.next(e))}catch(e){s(e)}}function u(e){try{a(r.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}a((r=r.apply(e,t||[])).next())}))},u=this&&this.__generator||function(e,t){var n,r,o,s,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function u(s){return function(u){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,r=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){i=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s);break}o[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(e){s=[6,e],r=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=a(n(176)),l=n(571),f=a(n(985)),d=function(e){function t(n,r){void 0===r&&(r="");var o=e.call(this,n,r)||this;return t.instance?t.instance:(t.instance=o,o.wxRequest=wx.request.bind(wx),o.intercept(),o)}return o(t,e),t.setupForUnitTest=function(e){var n=f.default.getGlobal();return n.wx=n.wx||{},n.wx.request||(n.wx.request=Object(function(){var e=new Error("Cannot find module '../dummy/wx-request'");throw e.code="MODULE_NOT_FOUND",e}())(n.wx)),new t(e)},t.prototype.intercept=function(){var e=this;return Object.defineProperty(wx,"request",{configurable:!0,enumerable:!0,writable:!0,value:function(t){if(t&&t.url){t.url=e.getFullRequestUrl(t.url,t.method);var n=e.matchMockRequest(t.url,t.method),r=e.getRequestInfo(t);return/^get$/i.test(t.method)&&(0,l.isObject)(t.data)?r.query=s(s({},r.query),t.data):r.body=t.data,n?(e.doMockRequest(n,r,t).then((function(n){n&&e.wxRequest(t)})),e.getRequstTask()):e.wxRequest(t)}}}),this},t.prototype.getRequstTask=function(){return{abort:function(){},onHeadersReceived:function(){},offHeadersReceived:function(){}}},t.prototype.doMockRequest=function(e,t,n){return i(this,void 0,void 0,(function(){var r;return u(this,(function(o){switch(o.label){case 0:return r=!1,e.delay&&e.delay>0?[4,(0,l.sleep)(+e.delay)]:[3,3];case 1:return o.sent(),[4,this.doMockResponse(e,t,n)];case 2:return r=o.sent(),[3,5];case 3:return[4,this.doMockResponse(e,t,n)];case 4:r=o.sent(),o.label=5;case 5:return[2,r]}}))}))},t.prototype.doMockResponse=function(e,t,n){return i(this,void 0,void 0,(function(){var r,o,s,i;return u(this,(function(u){switch(u.label){case 0:return r=Date.now(),[4,e.sendBody(t)];case 1:return(o=u.sent())instanceof c.default?[2,!0]:(s=Date.now()-r+(e.delay||0),i=this.getWxResponse(o,e),this.mocker.sendResponseLog(s,o,t,e),this.sendResult(n,i),[2,!1])}}))}))},t.prototype.getWxResponse=function(e,t){var n,r=[].concat((null===(n=t.header)||void 0===n?void 0:n["set-cookie"])||[]);return{data:e,statusCode:t.status||200,header:s(s({},t.header),{"x-powered-by":"http-request-mock"}),cookies:r,profile:{}}},t.prototype.sendResult=function(e,t){"function"==typeof e.success&&e.success(t),"function"==typeof e.complete&&e.complete(t)},t}(f.default);t.default=d},507:function(e,t,n){var r,o=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=this&&this.__assign||function(){return s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},s.apply(this,arguments)},i=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{a(r.next(e))}catch(e){s(e)}}function u(e){try{a(r.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}a((r=r.apply(e,t||[])).next())}))},u=this&&this.__generator||function(e,t){var n,r,o,s,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function u(s){return function(u){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,r=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){i=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s);break}o[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(e){s=[6,e],r=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=a(n(176)),l=n(571),f=n(913),d=function(e){function t(n,r){void 0===r&&(r="");var o=e.call(this,n,r)||this;return t.instance?t.instance:(t.instance=o,o.xhr=o.global.XMLHttpRequest.prototype,o.intercept(),o)}return o(t,e),t.setupForUnitTest=function(e){return n.g.XMLHttpRequest=n.g.XMLHttpRequest||Object(function(){var e=new Error("Cannot find module '../dummy/xhr'");throw e.code="MODULE_NOT_FOUND",e}()),new t(e)},t.prototype.intercept=function(){return this.interceptOpen(),this.interceptSend(),this.interceptSetRequestHeader(),this.interceptGetAllResponseHeaders(),this.interceptGetResponseHeader(),this.interceptReadyState(),this.interceptStatus(),this.interceptStatusText(),this.interceptResponseText(),this.interceptResponse(),this.interceptResponseURL(),this.interceptResponseXML(),this},t.prototype.interceptOpen=function(){var e=this,t=this.xhr.open;return Object.defineProperty(this.xhr,"open",{get:function(){var n=this;return function(r,o,s,i,u){void 0===s&&(s=!0),void 0===i&&(i=null),void 0===u&&(u=null);var a=e.getFullRequestUrl(o,r);if(!n.bypassMock){var c=e.matchMockRequest(a,r);if(c)return n.isMockRequest=!0,n.mockItem=c,n.mockResponse=new p,n.requestInfo=e.getRequestInfo({url:a,method:r}),void(n.requestArgs=[r,a,s,i,u])}return t.call(n,r,a,s,i,u)}}}),this},t.prototype.interceptSend=function(){var e=this,t=this.xhr.send;return Object.defineProperty(this.xhr,"send",{get:function(){var n=this;return function(r){return n.isMockRequest?(null!=r&&(n.requestInfo.body=(0,l.tryToParseObject)(r)),e.doMockRequest(n).then((function(e){if(e)return n.isMockRequest=!1,n.bypassMock=!0,n.open.apply(n,n.requestArgs),t.call(n,r)}))):t.call(n,r)}}}),this},t.prototype.doMockRequest=function(e){return i(this,void 0,void 0,(function(){var t,n;return u(this,(function(r){switch(r.label){case 0:return t=!1,(n=e.mockItem).delay&&n.delay>0?[4,(0,l.sleep)(+n.delay)]:[3,3];case 1:return r.sent(),[4,this.doMockResponse(e)];case 2:return t=r.sent(),[3,5];case 3:return[4,this.doMockResponse(e)];case 4:t=r.sent(),r.label=5;case 5:return[2,t]}}))}))},t.prototype.doMockResponse=function(e){return i(this,void 0,void 0,(function(){var t,n,r,o,s;return u(this,(function(i){switch(i.label){case 0:return t=e.mockItem,n=e.requestInfo,r=Date.now(),[4,t.sendBody(n)];case 1:return(o=i.sent())instanceof c.default?[2,!0]:(s=Date.now()-r+(t.delay||0),e.mockResponse=o,this.mocker.sendResponseLog(s,o,e.requestInfo,t),this.sendResult(e),[2,!1])}}))}))},t.prototype.sendResult=function(e){var t="undefined"!=typeof Event&&"function"==typeof e.dispatchEvent;"function"==typeof e.onreadystatechange?e.onreadystatechange(this.event("readystatechange")):t&&e.dispatchEvent(new Event("readystatechange")),"function"==typeof e.onload?e.onload(this.event("load")):t&&e.dispatchEvent(new Event("load")),"function"==typeof e.onloadend?e.onloadend(this.event("loadend")):t&&e.dispatchEvent(new Event("loadend"))},t.prototype.event=function(e){return{type:e,target:null,currentTarget:null,eventPhase:0,bubbles:!1,cancelable:!1,defaultPrevented:!1,composed:!1,timeStamp:294973.8000000119,srcElement:null,returnValue:!0,cancelBubble:!1,path:[],NONE:0,CAPTURING_PHASE:0,AT_TARGET:0,BUBBLING_PHASE:0,composedPath:function(){return[]},initEvent:function(){},preventDefault:function(){},stopImmediatePropagation:function(){},stopPropagation:function(){},isTrusted:!1,lengthComputable:!1,loaded:1,total:1}},t.prototype.interceptGetAllResponseHeaders=function(){var e=this.xhr.getAllResponseHeaders;return Object.defineProperty(this.xhr,"getAllResponseHeaders",{get:function(){var t=this;return function(){return t.isMockRequest?Object.entries(s(s({},t.mockItem.header),{"x-powered-by":"http-request-mock"})).map((function(e){var t=e[0],n=e[1];return t.toLowerCase()+": "+n})).join("\r\n"):e.call(t)}}}),this},t.prototype.interceptGetResponseHeader=function(){var e=this.xhr.getResponseHeader;return Object.defineProperty(this.xhr,"getResponseHeader",{get:function(){var t=this;return function(n){if(t.isMockRequest){if(/^x-powered-by$/i.test(n))return"http-request-mock";var r=Object.entries(t.mockItem.header).find((function(e){return e[0].toLowerCase()===n}));return r?r[1]:null}return e.call(t,n)}}}),this},t.prototype.interceptSetRequestHeader=function(){var e=this.xhr.setRequestHeader;return Object.defineProperty(this.xhr,"setRequestHeader",{get:function(){var t=this;return function(n,r){return t.isMockRequest?(t.requestInfo.headers=t.requestInfo.headers||{},void(t.requestInfo.headers[n]=r)):e.call(t,n,r)}}}),this},t.prototype.getGetter=function(e){var t=Object.getOwnPropertyDescriptor(this.xhr,e);return t?t.get:this.xhr[e]},t.prototype.interceptReadyState=function(){var e=this.getGetter("readyState");return Object.defineProperty(this.xhr,"readyState",{get:function(){return this.isMockRequest?this.mockResponse instanceof p?1:4:"function"==typeof e?e.call(this):e}}),this},t.prototype.interceptStatus=function(){var e=this.getGetter("status");return Object.defineProperty(this.xhr,"status",{get:function(){return this.isMockRequest?this.mockResponse instanceof p?0:this.mockItem.status:"function"==typeof e?e.call(this):e}}),this},t.prototype.interceptStatusText=function(){var e=this.getGetter("statusText");return Object.defineProperty(this.xhr,"statusText",{get:function(){return this.isMockRequest?this.mockResponse instanceof p?"":f.HTTPStatusCodes[this.mockItem.status]||"":"function"==typeof e?e.call(this):e}}),this},t.prototype.interceptResponseText=function(){var e=this.getGetter("responseText");return Object.defineProperty(this.xhr,"responseText",{get:function(){if(this.isMockRequest){if(this.mockResponse instanceof p)return"";var t=this.mockResponse;return"string"==typeof t?t:JSON.stringify(t)}return"function"==typeof e?e.call(this):e}}),this},t.prototype.interceptResponse=function(){var e=this.getGetter("response");return Object.defineProperty(this.xhr,"response",{get:function(){if(this.isMockRequest){if(this.mockResponse instanceof p)return null;var t=this.responseType;if("text"===t||""===t)return this.responseText;if("arraybuffer"===t&&"function"==typeof ArrayBuffer)return this.mockResponse instanceof ArrayBuffer?this.mockResponse:null;if("blob"===t&&"function"==typeof Blob)return this.mockResponse instanceof Blob?this.mockResponse:null;if("document"===t&&("function"==typeof Document||"function"==typeof XMLDocument))return this.mockResponse instanceof Document||this.mockResponse instanceof XMLDocument?this.mockResponse:null;if("json"===t){if("object"==typeof this.mockResponse)return this.mockResponse;if("string"==typeof this.mockResponse)try{return JSON.parse(this.mockResponse)}catch(e){return null}return null}return this.mockResponse}return"function"==typeof e?e.call(this):e}}),this},t.prototype.interceptResponseURL=function(){var e=this.getGetter("responseURL");return Object.defineProperty(this.xhr,"responseURL",{get:function(){return this.isMockRequest?this.requestInfo.url:"function"==typeof e?e.call(this):e}}),this},t.prototype.interceptResponseXML=function(){var e=this.getGetter("responseXML");return Object.defineProperty(this.xhr,"responseXML",{get:function(){return this.isMockRequest?"document"===this.responseType?this.response:null:"function"==typeof e?e.call(this):e}}),this},t}(a(n(985)).default);t.default=d;var p=function(){}},832:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{a(r.next(e))}catch(e){s(e)}}function u(e){try{a(r.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}a((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,s,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function u(s){return function(u){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,r=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){i=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s);break}o[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(e){s=[6,e],r=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=s(n(176)),u=function(){function e(e){var t;e.url&&("string"==typeof e.url||e.url instanceof RegExp)&&(this.url=e.url,this.method=/^(get|post|put|patch|delete|head|any)$/i.test(e.method||"")?null===(t=e.method)||void 0===t?void 0:t.toUpperCase():"ANY",this.header="object"==typeof e.header?e.header:{},this.delay=void 0!==e.delay&&/^\d{0,15}$/.test(e.delay+"")?+e.delay:0,this.times=void 0!==e.times&&/^-?\d{0,15}$/.test(e.times+"")?+e.times:1/0,this.status=e.status&&/^[1-5][0-9][0-9]$/.test(e.status+"")?+e.status:200,this.disable=e.disable&&/^(yes|true|1)$/.test(e.disable)?"YES":"NO",this.body="body"in e?e.body:"response"in e?e.response:"",void 0!==e.file&&(this.file=e.file),this.key="".concat(this.url,"-").concat(this.method))}return e.prototype.bypass=function(){return new i.default},e.prototype.sendBody=function(e){return r(this,void 0,void 0,(function(){var t;return o(this,(function(n){switch(n.label){case 0:return"function"!=typeof this.body?[3,2]:[4,this.body.bind(this)(e,this)];case 1:return t=n.sent(),[3,3];case 2:t=this.body,n.label=3;case 3:return[2,t]}}))}))},e}();t.default=u},755:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=n(571),i=n(913),u=n(699),a=o(n(832)),c=function(){function e(t){if(void 0===t&&(t=""),this.disabled=!1,this.log=!1,this.proxyServer="",this.proxyMode="none",e.instance)return e.instance;if(/^localhost:\d+$/.test(t)){this.proxyServer=t;var n=+t.replace("localhost:","");this.proxyMode=n>=9001&&n<=9049?"matched":"all"}e.instance=this,this.log=!(0,s.isNodejs)(),this.mockConfigData={},this.groupLog([["[http-request-mock] is %cloaded.","color:inherit;font-weight:bold;"]])}return e.getInstance=function(){return new e},e.prototype.setMockData=function(e){for(var t in e)this.mock(e[t]);return this},e.prototype.addMockItem=function(e,t){return this.mockConfigData[e]=t,this},e.prototype.reset=function(){return this.mockConfigData={},this.sendMsgToProxyServer("reset"),this},e.prototype.enable=function(){return this.disabled=!1,this.sendMsgToProxyServer("enable"),this.groupLog([["[http-request-mock] is %cenabled.","color:green;font-weight:bold;"]]),this},e.prototype.disable=function(){return this.disabled=!0,this.sendMsgToProxyServer("disable"),this.groupLog([["[http-request-mock] is %cdisabled.","color:red;font-weight:bold;"]]),this},e.prototype.sendMsgToProxyServer=function(e){void 0===e&&(e=""),this.proxyServer&&("undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process)||"undefined"!=typeof window&&"[object Window]"===Object.prototype.toString.call(window)&&"function"==typeof window.fetch&&window.fetch("http://".concat(this.proxyServer,"/__hrm_msg__/")+encodeURIComponent(e)))},e.prototype.disableLog=function(){return this.log=!1,this.sendMsgToProxyServer("disableLog"),this},e.prototype.enableLog=function(){return this.log=!0,this.sendMsgToProxyServer("enableLog"),this},e.prototype.mock=function(e){if(!(0,s.isObject)(e))throw new Error("Invalid mock item, a valid mock item must be an object.");var t=new a.default(e);return!!t.key&&(this.addMockItem(t.key,t),t)},e.prototype.get=function(e,t,n){void 0===n&&(n={delay:0,status:200,times:1/0,header:{}});var r=n.delay,o=n.status,s=n.times,i=n.header;return this.mock({url:e,method:u.Method.GET,body:t,delay:r,status:o,header:i,times:s}),this},e.prototype.post=function(e,t,n){void 0===n&&(n={delay:0,status:200,times:1/0,header:{}});var r=n.delay,o=n.status,s=n.times,i=n.header;return this.mock({url:e,method:u.Method.POST,body:t,delay:r,status:o,header:i,times:s}),this},e.prototype.put=function(e,t,n){void 0===n&&(n={delay:0,status:200,times:1/0,header:{}});var r=n.delay,o=n.status,s=n.times,i=n.header;return this.mock({url:e,method:u.Method.PUT,body:t,delay:r,status:o,header:i,times:s}),this},e.prototype.patch=function(e,t,n){void 0===n&&(n={delay:0,status:200,times:1/0,header:{}});var r=n.delay,o=n.status,s=n.times,i=n.header;return this.mock({url:e,method:u.Method.PATCH,body:t,delay:r,status:o,header:i,times:s}),this},e.prototype.delete=function(e,t,n){void 0===n&&(n={delay:0,status:200,times:1/0,header:{}});var r=n.delay,o=n.status,s=n.times,i=n.header;return this.mock({url:e,method:u.Method.DELETE,body:t,delay:r,status:o,header:i,times:s}),this},e.prototype.head=function(e,t){void 0===t&&(t={delay:0,status:200,times:1/0,header:{}});var n=t.delay,r=t.status,o=t.times,s=t.header;return this.mock({url:e,method:u.Method.HEAD,body:"",delay:n,status:r,header:s,times:o}),this},e.prototype.any=function(e,t,n){void 0===n&&(n={delay:0,status:200,times:1/0,header:{}});var r=n.delay,o=n.status,s=n.times,i=n.header;return this.mock({url:e,method:u.Method.ANY,body:t,delay:r,status:o,header:i,times:s}),this},e.prototype.matchMockItem=function(e,t){if(this.disabled)return null;for(var n=(t||"GET").toUpperCase(),r=Object.values(this.mockConfigData).filter((function(e){var t=e.disable,r=e.times,o=e.method,s=String(o).toUpperCase();return"YES"!==t&&(void 0===r||r>0)&&("ANY"===s||s===n)})).sort((function(e,t){return String(t.url).length-String(e.url).length})),o=0;o<2;o++)for(var s=0,i=r;s<i.length;s++){var u=i[s];try{if(u.url instanceof RegExp&&u.url.test(e))return u;var a=0===e.indexOf("//")?String(u.url).replace(/^https?:/gi,""):String(u.url);if(0===o&&e===a)return u;if(1===o&&-1!==e.indexOf(a))return u}catch(e){}}return null},e.prototype.groupLog=function(e){if(this.log&&"function"==typeof console.groupCollapsed&&"function"==typeof console.groupEnd){Array.isArray(e[0])?console.groupCollapsed.apply(console,e[0]):console.groupCollapsed(e[0]);for(var t=1;t<e.length;t++)Array.isArray(e[t])?console.log.apply(console,e[t]):console.log(e[t]);console.groupEnd()}},e.prototype.sendResponseLog=function(e,t,n,o){var u=[["[http-request-mock] %s %s %s (%c%s%c)","".concat((0,s.currentTime)()),n.method,n.url,"color:"+(o.status<300?"green":"red"),o.status,"color:inherit"],["Request: ",n],["Response: ",{body:t,spent:e,headers:r(r({},o.header),{"x-powered-by":"http-request-mock"}),status:o.status,statusText:i.HTTPStatusCodes[o.status]||""}]];if((0,s.isNodejs)()){var a=o.url,c=o.method,l=o.delay,f=o.times,d=o.status,p=o.disable;u[3]=["MockItem:",{url:a,method:c,delay:l,times:f,status:d,disable:p}]}else u[3]=["MockItem: ",o];this.groupLog(u)},e}();t.default=c},699:(e,t)=>{var n,r;Object.defineProperty(t,"__esModule",{value:!0}),t.Disable=t.Method=void 0,(r=t.Method||(t.Method={})).GET="GET",r.POST="POST",r.PUT="PUT",r.PATCH="PATCH",r.DELETE="DELETE",r.HEAD="HEAD",r.ANY="ANY",(n=t.Disable||(t.Disable={})).YES="YES",n.NO="NO"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={exports:{}};return e[r].call(s.exports,s,s.exports,n),s.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}();var r=n(607);return r.default})()}));