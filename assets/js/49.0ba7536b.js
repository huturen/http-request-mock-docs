(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{403:function(t,s,e){},627:function(t,s,e){"use strict";e(403)},821:function(t,s,e){"use strict";e.r(s);var o=e(211),c=e.n(o),a={data:()=>({msg:{0:"",1:""}}),methods:{getResult(t){c.a.get("https://jsonplaceholder.typicode.com/photos/1?p="+t).then(s=>{this.msg[t]=s.data}).catch(s=>{this.msg[t]="error: "+s.message})}}},n=(e(627),e(1)),i=Object(n.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"demo"},[e("div",[e("button",{on:{click:function(s){return t.getResult(0)}}},[t._v("Get https://jsonplaceholder.typicode.com/photos/1?p=0")]),t._v(" "),e("span",{staticClass:"tips"},[t._v("=> use mock result.")]),t._v(" "),e("div",{staticClass:"result"},[t._v(" "+t._s(t.msg[0]||"")+" ")])]),t._v(" "),e("div",[t._v(" ")]),t._v(" "),e("div",[e("button",{on:{click:function(s){return t.getResult(1)}}},[t._v("Get https://jsonplaceholder.typicode.com/photos/1?p=1")]),t._v(" "),e("span",{staticClass:"tips"},[t._v("=> bypass mocking and do real network request.")]),t._v(" "),e("div",{staticClass:"result"},[t._v(" "+t._s(t.msg[1]||"")+" ")])]),t._v(" "),e("div",{staticClass:"tips"},[t._v("Hit F12 to access Developer Tools and view the console logs.")])])}),[],!1,null,"df2063aa",null);s.default=i.exports}}]);