---
icon: blog
title: Logs
---

## Default logs

By default, in a non-nodejs-enviroment, `http-request-mock` will print some necessary
logs if a request is matched with a mock config item. The logs contain request information
, response information and the matched mock item.

![logs](/http-request-mock-docs/imgs/logs.png)


## Editable

You can even edit the mock config dynamically with this logs.

![logs](/http-request-mock-docs/imgs/debug-logs.gif)

## Disable

The logs feature can be disabled.

```javascript
import HttpRequetMock from 'http-request-mock';
HttpRequetMock.disableLog();
```
