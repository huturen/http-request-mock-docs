/* eslint-disable */
import '../mock/.runtime.js';
/* eslint-enable */
/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // ...apply enhancements for the site.
}

setTimeout(() => {
  try {
    // avoid 'Rendering static HTML' error
    const url = window.location.href.replace(/#.*/g, '');
    if (!/\?\d+$/.test(url)) {
      window.location.replace(url.replace(/\?.*/g, '') + '?' + Date.now());
    }
  } catch(e) {}
});
