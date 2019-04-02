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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "84f919f1f844d53ac84345994f034090"
  },
  {
    "url": "assets/css/0.styles.6fff224e.css",
    "revision": "024adb057d03f673097a3dd2e3de240c"
  },
  {
    "url": "assets/img/create-assignement.038e5207.png",
    "revision": "038e52072fd39b5c797e3ffef7dc7148"
  },
  {
    "url": "assets/img/intersection-observer-caniuse.e853e350.png",
    "revision": "e853e350b0c155f78b0c301d079c9239"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.98e10bbf.js",
    "revision": "e21e4f41e7859b2c89fcc128662a7931"
  },
  {
    "url": "assets/js/11.8ef53764.js",
    "revision": "7d1feba1f5668a7361f98e47bf914f75"
  },
  {
    "url": "assets/js/2.ceada549.js",
    "revision": "a629739634eb5ac7b39ed0424dd304e6"
  },
  {
    "url": "assets/js/3.d234cf0e.js",
    "revision": "d77b79ea0023d341a582262d10f6954e"
  },
  {
    "url": "assets/js/4.016bd1cf.js",
    "revision": "cabeb4255fef4011368063ca2e484249"
  },
  {
    "url": "assets/js/5.04296a4d.js",
    "revision": "c5ecf5c1dea100d4641e536e26a47d36"
  },
  {
    "url": "assets/js/6.9e9a0053.js",
    "revision": "aa20404fdbc6149c1b83a924a33c5ebf"
  },
  {
    "url": "assets/js/7.e352f516.js",
    "revision": "77b4286cda1ac1b3889c8ec6f97005e8"
  },
  {
    "url": "assets/js/8.ce81ce32.js",
    "revision": "5607457a0b39f1ea1cd7fc80bb0a7241"
  },
  {
    "url": "assets/js/9.4ba8a81b.js",
    "revision": "3ab8bd7d14e0f05a3fa9b2dbbbd5f5ed"
  },
  {
    "url": "assets/js/app.3b537ffe.js",
    "revision": "9d45322c631993d545020a800e949f8c"
  },
  {
    "url": "fr/index.html",
    "revision": "b6e577ca89d8cc4283bac8f5bcc307f5"
  },
  {
    "url": "fr/post/Slasgear/github-classroom-pourquoi-le-tester.html",
    "revision": "d3bf50e64e6f9a074c5843316f3af619"
  },
  {
    "url": "index.html",
    "revision": "375715d91a9c0e8c4f34c0ac71f28165"
  },
  {
    "url": "post/Slashgear/creating-an-image-lazy-loading-component-with-react.html",
    "revision": "fe588f92ded339ed36aafe4e8320a946"
  },
  {
    "url": "Slashgear/github-classroom-logo.jpg",
    "revision": "2cdb62c2c12f5f4414e7ef905de7d27f"
  },
  {
    "url": "Slashgear/lazy-load.gif",
    "revision": "d317504fe85779f6a6372964553ba6e8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
