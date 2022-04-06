(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{613:function(e,t,o){"use strict";o.r(t);var n=o(1),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h2",{attrs:{id:"command-line-tool-options"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#command-line-tool-options"}},[e._v("#")]),e._v(" Command Line Tool Options")]),e._v(" "),o("p",[o("code",[e._v("npx http-request-mock-cli -h")]),e._v(":")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('Usage: npx http-request-mock-cli [options]\n\nDescription: http-request-mock command line tool at version 1.6.3.\nGlossary: [.runtime.js] A runtime mock configuration entry file.\nExample:\n    npx http-request-mock-cli -i\n\nOptions:\n  -d, --directory [directory]        The mock directory relative to the working directory. (default: "mock")\n  -e, --environment [variable-pair]  Enable mock function by environment variable for .runtime.js.\n                                     (default: "NODE_ENV=development")\n  -i, --init                         Initialize some samples & a .runtime.js in the mock directory.\n  -w, --watch [command]              Watch mock directory & update .runtime.js. If the [command] is specified,\n                                     ths specified command will be executed together with watching.\n  -j, --inject <app-entry-file>      Inject .runtime.js into the specified entry relative to the working directory.\n  -t, --type [module-type]           The module type of .runtime.js.\n                                     Possible values are: es6, cjs(alias of commonjs).\n                                     (default: "cjs")\n  -p, --proxy [mode]                 Proxy mode. In proxy mode, http-request-mock will start\n                                     a proxy server which recives incoming requests on localhost.\n                                     The mock files will be run in a nodejs environment.\n                                     This feature is designed for browser, so do not use it in a nodjs project.\n                                     Note: proxy mode is still under experimental stage, only for experts.\n                                     [matched] All requests matched by @url will be proxied to a proxy server.\n                                     [marked] All requests marked by @proxy will be proxied to a proxy server. (default: "none")\n  --proto                            Generate mock files by proto files.\n  -h, --help                         output usage information\n')])])])])}),[],!1,null,null,null);t.default=r.exports}}]);