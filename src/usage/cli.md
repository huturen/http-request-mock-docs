---
icon: shell
title: CLI
---

## Command Line Tool Options
`npx http-request-mock-cli -h`:

```
Usage: npx http-request-mock-cli [options]

Description: http-request-mock command line tool at version 1.6.3.
Glossary: [.runtime.js] A runtime mock configuration entry file.
Example:
    npx http-request-mock-cli -i

Options:
  -d, --directory [directory]        The mock directory relative to the working directory. (default: "mock")
  -e, --environment [variable-pair]  Enable mock function by environment variable for .runtime.js.
                                     (default: "NODE_ENV=development")
  -i, --init                         Initialize some samples & a .runtime.js in the mock directory.
  -w, --watch [command]              Watch mock directory & update .runtime.js. If the [command] is specified,
                                     ths specified command will be executed together with watching.
  -j, --inject <app-entry-file>      Inject .runtime.js into the specified entry relative to the working directory.
  -t, --type [module-type]           The module type of .runtime.js.
                                     Possible values are: es6, cjs(alias of commonjs).
                                     (default: "cjs")
  -p, --proxy [mode]                 Proxy mode. In proxy mode, http-request-mock will start
                                     a proxy server which recives incoming requests on localhost.
                                     The mock files will be run in a nodejs environment.
                                     This feature is designed for browser, so do not use it in a nodjs project.
                                     Note: proxy mode is still under experimental stage, only for experts.
                                     [matched] All requests matched by @url will be proxied to a proxy server.
                                     [marked] All requests marked by @proxy will be proxied to a proxy server. (default: "none")
  --proto                            Generate mock files by proto files.
  -h, --help                         output usage information
```
