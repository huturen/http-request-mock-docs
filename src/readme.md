---
home: true
icon: home
title: Project home
heroImage: /imgs/logo-big.png
heroText: http-request-mock
# tagline: A new way to speed up your development.
tagline: Not only for mocking.
action:
  - text: Quick Start →
    link: /intro/
    type: primary
features:
  - title: Cross domain
    details: Out of the box, with no configuration, support for cross domain.
    link: /feature/cross/

  - title: Protobuf
    details: Support for generating mock data by proto files.
    link: /feature/proto/

  - title: Interceptor
    details: It can be used as an interceptor. You can decide how to handle requests.
    link: /feature/bypass/

  - title: All in one
    details: XMLHttpRequest, fetch, https.get, http.get, https.request, http.request.
    link: /intro/

  - title: More 3rd-party libraries
    details: It supports axios, jquery, superagent, ky, node-fetch, got, request...
    link: /intro/

  - title: Dynamic mocking
    details: Dynamically resolve response based on request query, payloads...
    link: /feature/dynamic/

  - title: Test capability
    details: It has built-in support for unit test and works in jest, mocha and ava.
    link: /usage/test/

  - title: Fake data
    details: Easy to generate massive amounts of fake data.
    link: /feature/faker/

  - title: Remote
    details: Support for using remote mock data.
    link: /feature/remote/

copyrightText: false
footer: MIT Licensed | Copyright © 2021-present huturen
---

---

You can define your mock data like below:

<<< @/src/mock/home.js

<home-index />

Try to type the code below in the console to play with http-request-mock.
```javascript
axios.get('https://api.com/xyz?aaa=1').then(res => console.log(res.data));

// Or use "fetch" if current browser supports it.
fetch('https://api.com/xyz?bbb=1').then(res => res.json()).then(console.log);
```
---


::: info Introduction
Intercept and mock http requests issued by XMLHttpRequest, fetch, nodejs native https/http module, wx.request, axios, jquery, superagent, ky, node-fetch, request, got or any other request libraries by intercepting XMLHttpRequest, fetch and nodejs native requests in low level.
:::

::: center
![Design](/http-request-mock-docs/imgs/layers-design.png)
:::


*Note: The demos in this site do not compatible with IE11 and below.*

