(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{394:function(t,s,e){},618:function(t,s,e){"use strict";e(394)},812:function(t,s,e){"use strict";e.r(s);var n=e(211),a=e.n(n),o={data:()=>({msg:""}),methods:{get(){this.msg="loading...";const t=Date.now();a.a.get("https://www.api.com/delay").then(s=>{this.msg="spent: "+(Date.now()-t)})}}},i=(e(618),e(1)),c=Object(i.a)(o,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"demo"},[e("button",{on:{click:t.get}},[t._v("GET https://www.api.com/delay")]),t._v(" "),e("div",{staticClass:"result"},[t._v(" "+t._s(t.msg)+" ")]),t._v(" "),e("div",{staticClass:"tips"},[t._v("Hit F12 to access Developer Tools and view the console logs.")])])}),[],!1,null,"4fe389a8",null);s.default=c.exports}}]);