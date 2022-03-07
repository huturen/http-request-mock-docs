---
icon: arrow
title: Start
---

To mock an http request, just call a `mock` method or http verb method(`get`,`post`,`put`,`patch`,`delete`).
```javascript
import HttpRequestMock from 'http-request-mock';
const mocker = HttpRequestMock.setup();

mocker.mock({
  url: 'https://www.api.com/some-api' // or RegExp: /.*\/some-api$/
  body: 'some response data'
});

// or using http verb method:
mocker.get('https://www.api.com/some-api', 'some response data');
```

Then, you can write your business code as normal:
```javascript
axios.get('https://www.api.com/some-api').then(res => {
  console.log(res.data); // some response data
});
```

---
