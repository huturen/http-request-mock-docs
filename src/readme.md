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
  - title: Interceptor
    details: It can be used as an interceptor. You can decide how to handle requests.
    link: /feature/bypass/

  - title: More 3rd-party libraries
    details: It supports axios, jquery, superagent, ky, node-fetch, got, you name it.
    link: /intro/

  - title: Dynamic mocking
    details: Dynamically resolve response based on request headers, query and payloads.
    link: /feature/dynamic/

  - title: Test capability
    details: It has built-in support for unit test and works in jest and mocha environments.
    link: /usage/test/

  - title: Fake data
    details: Easy to generate massive amounts of fake data.
    link: /feature/faker/

  - title: Remote
    details: Support for using remote mock data, where you can dynamically modify the data returned from the remote.
    link: /feature/remote/

copyrightText: false
footer: MIT Licensed | Copyright © 2021-present huturen
---

---

An integration case with vue3:

![Demonstration](/http-request-mock-docs/imgs/demonstration.gif)

Get the [source code](https://github.com/huturen/http-request-mock-simple-case-vue3) of the above case.
[More integration cases](/examples/).

---

You can define your mock data like below:

<<< @/src/mock/home.js

<home-index />

Try to type the code below in the console to play with http-request-mock.
```javascript
axios.get('https://api.com/xyz?aaa=1').then(res => console.log(res.data));

fetch('https://api.com/xyz?bbb=1').then(res => res.json()).then(console.log);
```
---


::: info Introduction
It mocks http requests issued by axios, jquery, superagent, node-fetch, got, (… you name it) by intercepting XMLHttpRequest, fetch, and nodejs native HTTP/HTTPS module requests at the low level.
:::

::: center
![Design](/http-request-mock-docs/imgs/layers-design.png)
:::


*Note: The demos in this site do not compatible with IE11 and below.*

