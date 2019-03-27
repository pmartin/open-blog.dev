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
    "revision": "43fb4544445bd7a8d6917aaf29439f88"
  },
  {
    "url": "assets/css/0.styles.4ec86ccf.css",
    "revision": "20fb246d0351d2b368de59ea2afd1fa1"
  },
  {
    "url": "assets/img/create-assignement.038e5207.png",
    "revision": "038e52072fd39b5c797e3ffef7dc7148"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.4c887ee0.js",
    "revision": "904c7077e217e200c9889b08bc44ae9b"
  },
  {
    "url": "assets/js/3.1db2dff1.js",
    "revision": "5062275118669bfdcd98622014700395"
  },
  {
    "url": "assets/js/4.2c5a0287.js",
    "revision": "32540a76b7a1ad5a305e010c881df85f"
  },
  {
    "url": "assets/js/5.8775339e.js",
    "revision": "6e3140e8639b6502ff93316d1e37827b"
  },
  {
    "url": "assets/js/6.eb068b4d.js",
    "revision": "636fb342d52ed558c3ad919e041567c1"
  },
  {
    "url": "assets/js/7.91113618.js",
    "revision": "eb4b71a36267a03a9f303d75e254189f"
  },
  {
    "url": "assets/js/8.ccb960ba.js",
    "revision": "7838231c0c1b30a6c9bdf2911981c1e5"
  },
  {
    "url": "assets/js/9.59b97a18.js",
    "revision": "d2d470c65ffefb3e6706be663d2b96a7"
  },
  {
    "url": "assets/js/app.5a60e47b.js",
    "revision": "567a8b98d53ee56a492dc2391ef547c5"
  },
  {
    "url": "fr/index.html",
    "revision": "fd0b39ec0189a9abecf24964e33d42a1"
  },
  {
    "url": "fr/post/Slasgear/github-classroom-pourquoi-le-tester.html",
    "revision": "0653bf424ac5793e74e0c506d8555e43"
  },
  {
    "url": "index.html",
    "revision": "2e65c65e5d8920016245aefb5f17ae87"
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
