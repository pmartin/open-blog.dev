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
    "revision": "4dbd3acbaf2a2074e00b1235721e497e"
  },
  {
    "url": "assets/css/0.styles.d3f2b45c.css",
    "revision": "4f0e82ab1c2e3f16a79b9555a4708a50"
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
    "url": "assets/img/vue-cli-complete-size.0d631442.png",
    "revision": "0d631442de390a6737ca967f30f3263d"
  },
  {
    "url": "assets/img/vue-cli-vanilla-size.15d620b4.png",
    "revision": "15d620b40e592ba0943d30e7a40c5dc2"
  },
  {
    "url": "assets/js/10.d38774ec.js",
    "revision": "668217cda3e191997184ff6465fbabbc"
  },
  {
    "url": "assets/js/11.b9999647.js",
    "revision": "692e5cfd6e6c3290cacd286593a49387"
  },
  {
    "url": "assets/js/12.781c0b4f.js",
    "revision": "4821d03a36506aa099d87358ddc0126a"
  },
  {
    "url": "assets/js/13.cb644f56.js",
    "revision": "ed21893c66e2ec0ab84674dba65ada1b"
  },
  {
    "url": "assets/js/14.d9c5fdb7.js",
    "revision": "1daa59a7f96acf5777c0cc6a258d1e10"
  },
  {
    "url": "assets/js/15.0649c905.js",
    "revision": "8093146b967b70dadccd9d2caed308fb"
  },
  {
    "url": "assets/js/16.94e0804a.js",
    "revision": "5f0db8e6c54df8916e3476bbb506724d"
  },
  {
    "url": "assets/js/3.d22faf28.js",
    "revision": "d935dbd6c590196a4217cc4584458216"
  },
  {
    "url": "assets/js/4.7ff55092.js",
    "revision": "984086c4493b0b20f59644599e208d33"
  },
  {
    "url": "assets/js/5.99607161.js",
    "revision": "8c28ea0d4c04bb2d473881283b4895dc"
  },
  {
    "url": "assets/js/6.651fcd29.js",
    "revision": "4626a0a6201e69356f175fea7934a8fe"
  },
  {
    "url": "assets/js/7.f6956f38.js",
    "revision": "dc7d3ee34d9a21f885c4a06449a39794"
  },
  {
    "url": "assets/js/8.ffbfab5e.js",
    "revision": "823f649461c18a1895fe3693dfd973ef"
  },
  {
    "url": "assets/js/9.d8cc5157.js",
    "revision": "7f0a2101b6ec5b97a2bb01dd6e33954b"
  },
  {
    "url": "assets/js/app.e1d965f3.js",
    "revision": "f63787e466f7982c4552a51e2abd0810"
  },
  {
    "url": "assets/js/vendors~docsearch.e4052979.js",
    "revision": "8cae1a5115944bee0b9de64e15f10613"
  },
  {
    "url": "contributing.html",
    "revision": "12e308c23ede7441ef26e740035bf85f"
  },
  {
    "url": "fr/index.html",
    "revision": "4700195282a67a2648c12c604b923ed1"
  },
  {
    "url": "fr/post/Slasgear/github-classroom-pourquoi-le-tester.html",
    "revision": "aeef377983d3ee288ca4128bfc0cb32c"
  },
  {
    "url": "index.html",
    "revision": "a6de5616aa55ae1244124513a9ffa4c1"
  },
  {
    "url": "post/Slashgear/creating-an-image-lazy-loading-component-with-react.html",
    "revision": "ffc11815e2bc23e08543723c80174dbd"
  },
  {
    "url": "post/Slashgear/why-you-should-use-compression-webpack-plugin.html",
    "revision": "1bf5049af21367de3f0e16c7d458b81d"
  },
  {
    "url": "Slashgear/github-classroom-logo.jpg",
    "revision": "2cdb62c2c12f5f4414e7ef905de7d27f"
  },
  {
    "url": "Slashgear/lazy-load.gif",
    "revision": "d317504fe85779f6a6372964553ba6e8"
  },
  {
    "url": "Slashgear/matt-artz-353260-unsplash.jpg",
    "revision": "3f17140a22c3c3708af42934c82a3af3"
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
