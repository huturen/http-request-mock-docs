(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{368:function(t,s,e){},545:function(t,s,e){"use strict";e(368)},585:function(t,s,e){"use strict";e.r(s);var i=e(206),a=e.n(i),o={data:()=>({msg:""}),methods:{get(){this.msg="loading...",a.a.get("https://www.api.com/remote").then(t=>{this.msg=JSON.stringify(t.data)}).catch(t=>{this.msg=t.message})}}},c=(e(545),e(1)),n=Object(c.a)(o,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"demo"},[e("button",{on:{click:t.get}},[t._v("GET https://www.api.com/remote")]),t._v(" "),e("div",{staticClass:"result"},[t._v(" "+t._s(t.msg)+" ")]),t._v(" "),e("div",{staticClass:"tips"},[t._v("Hit F12 to access Developer Tools and view the console logs.")])])}),[],!1,null,"6f293ca4",null);s.default=n.exports}}]);