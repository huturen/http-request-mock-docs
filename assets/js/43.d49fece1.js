(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{378:function(t,s,e){},558:function(t,s,e){"use strict";e(378)},599:function(t,s,e){"use strict";e.r(s);var o=e(218),a=e.n(o),c=e(13),l=e.n(c),i={data:()=>({msg:"",mockItem:{}}),mounted(){const t=l.a.setup();this.mockItem=t.matchMockItem("https://jsonplaceholder.typicode.com/albums/1")},methods:{get(){a.a.get("https://jsonplaceholder.typicode.com/albums/1").then(t=>{this.msg=t.data}).catch(t=>{this.msg=t.message})},toggle(){this.mockItem.disable="NO"===this.mockItem.disable?"YES":"NO"}}},n=(e(558),e(1)),m=Object(n.a)(i,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"demo"},[e("button",{on:{click:t.get}},[t._v("GET https://jsonplaceholder.typicode.com/albums/1")]),t._v(" "),e("span",[t._v("Status: "),e("b",[t._v(t._s("YES"===t.mockItem.disable?"Disabled":"Enabled"))])]),t._v(" "),e("button",{on:{click:t.toggle}},[t._v("\n    "+t._s("NO"===t.mockItem.disable?"Disable":"Enable")+" it\n  ")]),t._v(" "),e("div",{staticClass:"result"},[t._v(" "+t._s(t.msg)+" ")]),t._v(" "),e("div",{staticClass:"tips"},[t._v("Hit F12 to access Developer Tools and view the console logs.")])])}),[],!1,null,"ef0a5332",null);s.default=m.exports}}]);