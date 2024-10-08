/* eslint-disable */
let mocker;

const HttpRequestMock = require("http-request-mock/http-request-mock.js");
mocker = HttpRequestMock.setup();
mocker.mock({
  "url": "https://www.api.com/status404",
  "method": "GET",
  "body": require('./404.js'),
  "status": 404
});
mocker.mock({
  "url": "https://jsonplaceholder.typicode.com/photos/1",
  "method": "GET",
  "body": require('./bypass1.js'),
});
mocker.mock({
  "url": "https://some.api.com/todo",
  "body": require('./cache.js'),
});
mocker.mock({
  "url": "https://www.api.com/delay",
  "method": "GET",
  "body": require('./delay.js'),
  "delay": 600
});
mocker.mock({
  "url": "https://jsonplaceholder.typicode.com/albums/1",
  "method": "GET",
  "body": require('./disable.js'),
});
mocker.mock({
  "url": "https://www.api.com/dynamic-response",
  "method": "GET",
  "body": require('./dynamic.js'),
});
mocker.mock({
  "url": "https://www.api.com/faker",
  "body": require('./faker.js'),
});
mocker.mock({
  "url": "https://www.api.com/headers",
  "method": "GET",
  "body": require('./headers.js'),
  "headers": {
    "application": "application/json",
    "abc": "123",
    "xyz": [
      "aaa",
      "bbb"
    ]
  }
});
mocker.mock({
  "url": "https://api.com/xyz",
  "method": "GET",
  "body": require('./home.js'),
  "delay": 300,
  "status": 200,
  "headers": {
    "content-type": "application/json",
    "abc": "xyz"
  }
});
mocker.mock({
  "url": "https://www.api.com/remote1",
  "method": "GET",
  "body": require('./remote1.js'),
  "remoteRequestHeaders": {
    "abc": "xyz"
  },
  "remote": "https://jsonplaceholder.typicode.com/todos/1"
});
mocker.mock({
  "url": "https://www.api.com/remote2",
  "method": "GET",
  "body": require('./remote2.js'),
  "remoteRequestHeaders": {
    "abc": "xyz"
  },
  "remote": "https://jsonplaceholder.typicode.com/todos/1"
});
mocker.mock({
  "url": "https://www.api.com/text-response",
  "method": "GET",
  "body": require('./static1.js'),
});
mocker.mock({
  "url": "https://www.api.com/json-response",
  "method": "POST",
  "body": require('./static2.js'),
});
mocker.mock({
  "url": "https://jsonplaceholder.typicode.com/todos/1",
  "body": require('./times.js'),
  "times": 2
});

module.exports = mocker;
/* eslint-enable */
