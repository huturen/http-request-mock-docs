(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{404:function(t,s,e){},628:function(t,s,e){"use strict";e(404)},822:function(t,s,e){"use strict";e.r(s);var o=e(65),a=e.n(o),i=e(211),c=e.n(i),n={data:()=>({msg:""}),mounted(){a.a.setup().get("https://some.api.com/some-path","<div>some result</div>")},methods:{getResult(){c.a.get("https://some.api.com/some-path").then(t=>{this.msg=t.data}).catch(t=>{this.msg="error: "+t.message})}}},l=(e(628),e(1)),m=Object(l.a)(n,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"demo"},[e("button",{on:{click:t.getResult}},[t._v("Get https://some.api.com/some-path")]),t._v(" "),e("div",{staticClass:"result"},[t._v(" "+t._s(t.msg)+" ")]),t._v(" "),e("div",{staticClass:"tips"},[t._v("Hit F12 to access Developer Tools and view the console logs.")])])}),[],!1,null,"965b0c66",null);s.default=m.exports}}]);