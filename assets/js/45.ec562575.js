(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{399:function(t,s,e){},623:function(t,s,e){"use strict";e(399)},817:function(t,s,e){"use strict";e.r(s);var o=e(211),n=e.n(o),a={data:()=>({msg:""}),methods:{get(){n.a.get("https://www.api.com/text-response").then(t=>{this.msg=t.data})},post(){n.a.post("https://www.api.com/json-response",{abc:123}).then(t=>{this.msg=t.data})}}},c=(e(623),e(1)),i=Object(c.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"demo"},[e("button",{on:{click:t.get}},[t._v("GET https://www.api.com/text-response")]),t._v(" "),e("button",{on:{click:t.post}},[t._v("POST https://www.api.com/json-response")]),t._v(" "),e("div",{staticClass:"result"},[t._v(" "+t._s(t.msg)+" ")]),t._v(" "),e("div",{staticClass:"tips"},[t._v("Hit F12 to access Developer Tools and view the console logs.")])])}),[],!1,null,"a002105a",null);s.default=i.exports}}]);