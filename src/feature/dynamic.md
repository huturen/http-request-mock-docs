---
icon: generic
title: Dynamic response
---

You can export a function instead of an object to resolve a dynamic response,
so as to simulate a complex business logic in the real world.

<feature-dynamic />

## Mock data file

<<< @/src/mock/dynamic.js

---
## Vue code

<<< @/src/.vuepress/components/feature-dynamic.vue


## Request information
```javascript
export interface RequestInfo {
  url: string;
  method: Method;
  query: object; // url search query
  headers?: object; // request header
  body?: any; // post body
}
```
