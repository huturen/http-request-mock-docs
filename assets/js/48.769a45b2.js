(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{402:function(t,s,e){},626:function(t,s,e){"use strict";e(402)},820:function(t,s,e){"use strict";e.r(s);var a=e(211),i=e.n(a),n={data:()=>({msg:"Click the left button and get the mock result."}),mounted(){window.axios=i.a},methods:{get(){this.msg="loading...",i.a.get("https://api.com/xyz?a=1&b=2").then(t=>{this.msg=JSON.stringify(t.data)})}}},o=(e(626),e(1)),c=Object(o.a)(n,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"demo"},[e("button",{on:{click:t.get}},[t._v("GET https://api.com/xyz?a=1&b=2")]),t._v(" "),e("span",{staticClass:"tips"},[t._v(" => ")]),t._v(" "),e("span",{staticClass:"result"},[t._v(t._s(t.msg))]),t._v(" "),e("div",{staticClass:"tips"},[t._v("Hit F12 to access Developer Tools and view the console logs.")])])}),[],!1,null,"1c4048df",null);s.default=c.exports}}]);