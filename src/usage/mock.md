---
icon: stack
title: Mock data file
---

You can define your mock data file like below:

```javascript
/**
 * Note: Only the first comments block will be parsed.
 *
 * The url to be mocked.
 * Both string and RegExp(which begins and ends with # or /) are supported.
 * RegExp example: #.*\/getUserInfo.*#
 * @url https://jsonplaceholder.typicode.com/todos/1
 *
 * The request method to be mocked.
 * One of http verb method get, post, put, patch, delete, head.
 * Default: any
 * @method any
 *
 * Response http status to be mocked.
 * Default: 200
 * @status 200
 *
 * Response http headers to be mocked.
 * It can be set repeatedly.
 * @header content-type: application/json
 *
 * Simulate network latency in milliseconds.
 * Default: 0
 * @delay 100
 *
 * Limited number of mocking.
 * It'll do a real network request after specified number of mocking.
 * Default: Infinity
 * @times 5
 *
 * Whether or not to enable this mock item.
 * 'yes' for real network request, 'no' for mock request.
 * Default: no
 * @disable no
 *
 * Remote mock data.
 * In browser, the specified remote url must conform to the cross-domain specification.
 * @remote https://remote.api.com/some/mock/data
 */
// Response body to be mocked.
// It supports to export an object, function, async function, sting or any other types.
// If a function is specified, the function accepts an argument with request information.
module.exports = (requestInfo) => {
  return 'Your response data';
};
```

At tags(@url, @method, @status ...) in the comments above will be parsed by webpack plugin or cli.
