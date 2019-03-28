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
    "revision": "baa1ed7492fd2ebf788fa1bcf6f38a63"
  },
  {
    "url": "assets/css/0.styles.8206c5b7.css",
    "revision": "dfd97e960c236f3843d45a22542fc0d9"
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
    "url": "assets/js/10.e59be3bf.js",
    "revision": "70deaf4ef9145495212cd757262733e2"
  },
  {
    "url": "assets/js/2.8191deb1.js",
    "revision": "33720e5a89b574fa6d31900597a3f0af"
  },
  {
    "url": "assets/js/3.9c3ffd0d.js",
    "revision": "e43e97bbd7c2e97c1cb703c59cf8316c"
  },
  {
    "url": "assets/js/4.78e6b2fe.js",
    "revision": "532b7ae058684c701e73463d85cf790b"
  },
  {
    "url": "assets/js/5.4849e5ac.js",
    "revision": "253dcb75e0a93190f732344a3a877796"
  },
  {
    "url": "assets/js/6.8ff62548.js",
    "revision": "494153255d5ef8757704ffd3fe577355"
  },
  {
    "url": "assets/js/7.5d59a2a4.js",
    "revision": "cbcea53e261006249ac7c373c3b75f10"
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
    "url": "assets/js/app.f46c7ac3.js",
    "revision": "b15b76d74a266a011a2b3bd19d2eab61"
  },
  {
    "url": "fr/index.html",
    "revision": "cebbe20768e1e9bd2ba53d4c75caf392"
  },
  {
    "url": "fr/post/Slasgear/github-classroom-pourquoi-le-tester.html",
    "revision": "263ff0aac04a1fde97526a71b3d24969"
  },
  {
    "url": "index.html",
    "revision": "aecf52e6ce0d804585ea98b8bfadf999"
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
