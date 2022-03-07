---
icon: script
title: Unit test
---

This library comes with built-in unit test capability and can be used in jest and mocha envrioment.
The unit tests of this library are also based on itself.

An example of jest：
```javascript
import axios from 'axios';
import xhrAdapter from 'axios/lib/adapters/xhr';
import HttpRequestMock from 'http-request-mock';

axios.defaults.adapter = xhrAdapter;
const mocker = HttpRequestMock.setupForUnitTest('xhr');

mocker.get('https://your.api.com/path', function() {
  return { abc: 123 };
});

it('should match object`', async () => {
  const res = await axios.get('https://your.api.com/path');
  expect(res.data).toMatchObject({abc: 123});
});
```

For a `mocha` example, please refer to [experiment/mocha.js](https://github.com/huturen/http-request-mock/blob/main/experiment/mocha.js).


## Design

![unit-test](/http-request-mock-homepage/imgs/unittest.png)
