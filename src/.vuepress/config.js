const { config } = require("vuepress-theme-hope");
const path = require('path');

module.exports = config({
  title: "http-request-mock",
  description: "http-request-mock: A new way to speed up your development and testing.",

  base: '/http-request-mock-docs/',
  dest: "./docs",

  head: [
    ['link', { rel: 'icon', href: '/imgs/icon.png' }],

    ["script", { src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" }],
    ["script", { src: "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js", }],
    ["script", { src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js" }],
    ["script", { src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js" }],
  ],
  locales: {
    "/": {
      lang: "en-US",
    },
  },
  cacheHTML: false,
  cachePic: false,
  themeConfig: {
    cacheHTML: false,
    cachePic: false,
    pwa: false, // https://vuepress-theme-hope.github.io/guide/feature/pwa/
    search: false,
    themeColor: false,
    darkmode: "disable",
    theme: path.resolve(__dirname, './theme'),
    breadcrumb: true,
    // The domain name of the deployment site
    hostname: 'https://huturen.github.io/',

    logo: "/imgs/logo-big.png",
    favicon: "/imgs/icon.png",

    repo: "https://github.com/huturen/http-request-mock",
    repoDisplay: true,
    editLinks: false,

    nav: [
      { text: "Introduction", icon: "info", link: "/intro/", },
      { text: "Installation", icon: "install", link: "/install/", },
      { text: "Usage", icon: "repo", link: "/usage/", },
      { text: "Features", icon: "list", link: "/feature/", },
      { text: "Examples", icon: "overflow", link: "/examples/", },
      { text: "API", icon: "api", link: "/api/", },
      { text: "NPM", icon: "npm", target:'_blank',link: "https://www.npmjs.com/package/http-request-mock", },
    ],

    sidebar: {
      "/": [
        "intro",
        "install",
        {
          title: "Usage",
          // icon: "repo",
          prefix: "usage/",
          collapsable: false,
          children: [
            "", "start", "bare-bones", "integration", "test", "cli", "mock"
          ],
        },
        {
          title: "Features",
          // icon: "list",
          prefix: "feature/",
          collapsable: false,
          children: [
            "", "static", "dynamic", "status", "headers", "delay",
            "times", "disable", "bypass", "faker", "cross", "logs",
            "proto", "cache",
          ],
        },
        "examples",
        "api"
      ],
    },

    footer: {
      display: true,
      content: "MIT Licensed | Copyright © 2021-present huturen",
    },

    comment: false,
    pageInfo: {
      'reading-time': false,
      visitor: false,
    },

    copyright: {
      status: "global",
    },

    git: {
      timezone: "Asia/Shanghai",
      contributor: false,

    },

    markdown: {
      lineNumbers: false,
    },
    mdEnhance: {
      enableAll: true,
      lineNumbers: false,
    },
  },
});
