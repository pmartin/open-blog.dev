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
    "revision": "615c2577a227ec54522e5be41f2c2c02"
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
    "url": "assets/js/10.4122612c.js",
    "revision": "7c69864b9dc2a9d30420fd338aea7851"
  },
  {
    "url": "assets/js/11.0386a0c0.js",
    "revision": "0aa8fa188ce5b9fb85afb5681efcb155"
  },
  {
    "url": "assets/js/12.8e2b1efc.js",
    "revision": "8fdf51499aa5ffa6104bdc245505a691"
  },
  {
    "url": "assets/js/2.ceada549.js",
    "revision": "a629739634eb5ac7b39ed0424dd304e6"
  },
  {
    "url": "assets/js/3.8a84c816.js",
    "revision": "03204989c6d0a6bd92f6690fee433bd9"
  },
  {
    "url": "assets/js/4.016bd1cf.js",
    "revision": "cabeb4255fef4011368063ca2e484249"
  },
  {
    "url": "assets/js/5.f77cbde1.js",
    "revision": "b2d9ec283c576691eb046e007a33aae8"
  },
  {
    "url": "assets/js/6.f3388a59.js",
    "revision": "c87f6db60976c8597718fe7815675957"
  },
  {
    "url": "assets/js/7.5d59a2a4.js",
    "revision": "cbcea53e261006249ac7c373c3b75f10"
  },
  {
    "url": "assets/js/8.1b20a4bf.js",
    "revision": "42214353f5bf2df7606a7e0459540c3e"
  },
  {
    "url": "assets/js/9.b9915c81.js",
    "revision": "de344b48b5102dd9f18985e4e0373207"
  },
  {
    "url": "assets/js/app.1ea4a257.js",
    "revision": "6e336d07ce9095cec49a2e4a13a0d3f7"
  },
  {
    "url": "contributing.html",
    "revision": "ed7fc266d38f8f08c628be959cc26656"
  },
  {
    "url": "fr/index.html",
    "revision": "4a1a5bf4930d186906a1aa72c2efadc9"
  },
  {
    "url": "fr/post/Slasgear/github-classroom-pourquoi-le-tester.html",
    "revision": "43794ceb367d7fb61243eee22371409e"
  },
  {
    "url": "index.html",
    "revision": "909260e628e190b96f32974298683ac0"
  },
  {
    "url": "post/Slashgear/creating-an-image-lazy-loading-component-with-react.html",
    "revision": "919f4822bcff75b3d7a9a6817b79ac55"
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
