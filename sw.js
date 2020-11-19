/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts(
  "https://cdn.jsdelivr.net/npm/workbox-sw@4.3.1/build/workbox-sw.min.js"
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "index.html",
    "revision": "73b82aadcac9d55acfa8319c91348930"
  },
  {
    "url": "index.webmanifest",
    "revision": "2da5a04a4fab8b469fe091d413c0c871"
  },
  {
    "url": "src.5ce9bdab.js",
    "revision": "7873e8352372f82a717119dc4780f173"
  },
  {
    "url": "src.afe002f8.css",
    "revision": "ccbf9a52698b1a9fd713bfd6b1cdd59d"
  },
  {
    "url": "WebCell-0.f1ffd28b.png",
    "revision": "8097ecfd687ded98721d28d6823561c1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();
