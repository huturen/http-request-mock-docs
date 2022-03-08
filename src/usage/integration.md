---
icon: app
title: Integration
---

## Integration

For a large web application, we provide a webpack plugin and command
tool to integrate your project. In this way, the mock data file can be
separated from the entry to reduce the burden of managing mock
configuration entry file.



![unit-test](/http-request-mock-docs/imgs/development.png)

## Integration By Webpack plugin

You can set it up by the steps below:

1. Run `npx http-request-mock-cli -i`. It'll initialize some samples in your mock directory.
2. Configure `HttpRequestMockWebpackPlugin` in your webpack configurations, which looks like below.
```javascript
const path = require('path');
// The webpack plugin will parse mock files under the mock directory and generate a mock
// configuration entry file named `.runtime.js`, then inject it into the your application entry file.
const HttpRequestMockWebpackPlugin = require('http-request-mock/plugin/webpack.js');
module.exports = {
  // ...
  plugins: [
    new HttpRequestMockWebpackPlugin(
      enable: process.env.NODE_ENV === 'development', // activate/deactivate
      entry: /src\/main\.js$/, // web application entry
      dir: path.resolve(__dirname, 'mock/'), // mock directory
    ),
  ]
  // ...
};
```
3. In your package.json, set a command named `mock-dev` to start a mock development:
```json
  "scripts": {
    "dev": "npm run start",
    "mock-dev": "NODE_ENV=development npm run start"
  },
```

**Webpack Plugin options**

| Option      | Required | Description                                                      |
| :-----      | :----    | :----                                                            |
| **entry**   | yes      | Application entry file, must be a Regexp object                   |
| **dir**     | yes      | Mock directory, must be an absulte path                          |
| **enable**  | no       | Whether or not to enable this plugin, defaut: true               |
| **watch**   | no       | A callback that is triggered when a mock data file is changed     |

## Integration By Command Line Tool

An alternative way to integrate with your project is using CLI.
You can set it up by the steps below:

1. Run `npx http-request-mock-cli -j src/xxx.js` to inject mock configuration file
into the specified entry which may look like below:
```javascript
import '../mock/.runtime.js'
import { createApp } from 'vue'
import App from './App.vue'
// ...
createApp(App).mount('#app')
```

2. In your package.json, set a command named `mock-dev` to start a mock development:
```json
"scripts": {
  "serve": "vue-cli-service serve",
  "mock-dev": "http-request-mock-cli -w \"vue-cli-service serve\"",
},
```
The command passed into `http-request-mock-cli -w` must be quoted with double quotes.


***Note：***

If `-e --enviroment` is not specified, mock function will be enabled by `NODE_ENV=development`.

Or, you can specify another enviroment variable, such as: `-e MOCK=yes`.
