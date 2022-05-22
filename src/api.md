---
# icon: api
title: API

---

## For HttpRequestMock


### setup() : Mocker:

Auto detect request environment and set up request mock.

### setupForWx() : Mocker:

Set up request mock for wx.request.

### setupForXhr() : Mocker:

Set up request mock for XMLHttpRequest.

### setupForFetch() : Mocker:

Set up request mock for fetch.

### setupForNode() : Mocker:

Set up request mock for http.get, https.get, http.request and https.request in nodejs environment.

### setupForUnitTest(type: 'wx' | 'xhr' | 'fetch' | 'node' | 'all') : Mocker:

Set up request mock for unit test.

### enable() : Mocker:

Enable mock function temporarily.

### disable() : Mocker:

Disable mock function temporarily.

### enableLog() : Mocker:

Enable verbose log.

### disableLog() : Mocker:

Disable verbose log.

---
## For Mocker

### setMockData(mockConfigData: MockConfigData)

Set global mock data configuration.

### reset()

Reset global mock data configuration.

### mock(mockItem: MockItemInfo)

Check specified mock item & add it to global mock data configuration.

```javascript
interface MockItemInfo {
  url: RegExp | string;
  method?: HttpVerb; // GET, POST, PUT, PATCH, DELETE or HEAD
  header?: Header, // response header
  delay?: number;
  disable?: Disable; // yes or no
  times?: number;
  body?: any; // response body
  status?: number; // http status code
};
```

### get(url: RegExp | String, body: any, opts: MockItemExt)

Make a mock item that matches an HTTP GET request.

```javascript
interface MockItemExt {
  header?: Header, // response header
  disable?: Disable; // yes or no
  delay?: number;
  times?: number;
  status?: number; // http status code
};
```



### post(url: RegExp | String, body: any, opts: MockItemExt)

Make a mock item that matches an HTTP POST request.

### put(url: RegExp | String, body: any, opts: MockItemExt)

Make a mock item that matches an HTTP PUT request.

### patch(url: RegExp | String, body: any, opts: MockItemExt)

Make a mock item that matches an HTTP PATCH request.

### delete(url: RegExp | String, body: any, opts: MockItemExt)

Make a mock item that matches an HTTP DELETE request.

### head(url: RegExp | String, opts: MockItemExt)

Make a mock item that matches an HTTP HEAD request.

### any(url: RegExp | String, body: any, opts: MockItemExt)

Make a mock item that matches an HTTP GET, POST, PUT, PATCH, DELETE or HEAD  request.

### matchMockItem(reqUrl: string, reqMethod: HttpVerb | undefined)

Check whether the specified request url matchs a defined mock item.

If a match is found, return the matched mock item, otherwise a null is returned.
