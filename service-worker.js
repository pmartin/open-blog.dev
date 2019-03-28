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
    "revision": "d1f6445024e70d429210c85822ccbdb2"
  },
  {
    "url": "assets/css/0.styles.9e70078a.css",
    "revision": "ce4d27f1d5c989da1e7c6ca7edf6eaa4"
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
    "url": "assets/js/10.c5709efb.js",
    "revision": "d0dd702b3a669236b2ede3bce428b984"
  },
  {
    "url": "assets/js/2.fd87e717.js",
    "revision": "8479f4a7f12b16949c704d4066122411"
  },
  {
    "url": "assets/js/3.c69f3da4.js",
    "revision": "fc836834e996b5953e45f229e6f20f93"
  },
  {
    "url": "assets/js/4.30445dfa.js",
    "revision": "094fd3fa74923aae9b08f6d1d7d51ad1"
  },
  {
    "url": "assets/js/5.684154bf.js",
    "revision": "433345f674c5706c0ac46c93d60e62a5"
  },
  {
    "url": "assets/js/6.c0aa3fa9.js",
    "revision": "b181d08ba36ec00e085ef6bf53129e23"
  },
  {
    "url": "assets/js/7.3d84d70f.js",
    "revision": "023319a3cf878fd3c0e003fbb9619b39"
  },
  {
    "url": "assets/js/8.189696dc.js",
    "revision": "c0245a2ae6c841c0162acacec49a0365"
  },
  {
    "url": "assets/js/9.261297fc.js",
    "revision": "f7d0e07d7200e23d8c0f5d98b67884b1"
  },
  {
    "url": "assets/js/app.a219afb2.js",
    "revision": "07a748a3f80225dd500018a25e02ca47"
  },
  {
    "url": "fr/index.html",
    "revision": "156abba4845631027b86fac723c6b059"
  },
  {
    "url": "fr/post/Slasgear/github-classroom-pourquoi-le-tester.html",
    "revision": "7b3d43709248708d0f7ed1575c66e854"
  },
  {
    "url": "index.html",
    "revision": "5c3fb26e834266a5b14539c0b05eeb91"
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
