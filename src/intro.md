---
# icon: info
title: Introduction

---
It mocks http requests issued by axios, jquery, superagent, node-fetch, got, (… you name it) by
intercepting XMLHttpRequest, fetch, and nodejs native HTTP/HTTPS module requests at the low level.

1. XMLHttpRequest <span class="iconfont icon-chrome"></span>
2. fetch <span class="iconfont icon-chrome"></span>
3. https.request, https.get (nodejs native https request) <span class="iconfont icon-nodeJS"></span>
4. http.request, http.get (nodejs native http request) <span class="iconfont icon-nodeJS"></span>
5. wx.request <span class="iconfont icon-wechat"></span>

Because of the low-level interception, any 3th-party request libraries that
based on the above requests can also be supported, such as:

`axios`, `jquery`, `superagent`, `ky`, `node-fetch`, `got`, `request` ...

![layers-design](/http-request-mock-docs/imgs/layers-design.png)

It differs from the other mocking libraries in that it provides a webpack plugin and command line tool
to separate mock data from your business code. It's a truly non-hacking mocking library. You never have
to hack into your business code to mock something ever again after a one-time configuration.
