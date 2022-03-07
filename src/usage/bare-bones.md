---
# https://vuepress-theme-hope.github.io/zh/guide/interface/icon/#%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87
icon: bit
title: Bare-bones
---
In a bare-bones example, you just import `http-request-mock` into
your module entry(such as: src/index.js, components/abc.vue) and configure
your mock datas there. Take a Vue project as an example:

---

<usage-minimum />

---

<<< @/src/.vuepress/components/usage-minimum.vue

It may be ok in a small project, however, for a large web application,
it may have lots of APIs to be mocked. You may need frequently change
the entry file when adding/deleting/updating a mock data. There will be
a day that you'll get a mess as the project grows.


