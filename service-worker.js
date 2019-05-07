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
    "revision": "e17ffc4b3650963f7838aee32e6a8f88"
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
    "url": "assets/js/10.1a56257d.js",
    "revision": "5c27755f501b86da6083f51945fed346"
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
    "url": "assets/js/app.c6d87bb8.js",
    "revision": "af96cba958a7780ca182fac35d0964a2"
  },
  {
    "url": "assets/js/vendors~docsearch.e4052979.js",
    "revision": "8cae1a5115944bee0b9de64e15f10613"
  },
  {
    "url": "contributing.html",
    "revision": "27973771fff109c4d0835b5cdcaf22d5"
  },
  {
    "url": "fr/index.html",
    "revision": "b8daa031243ab356fdb44d22fe4f53bb"
  },
  {
    "url": "fr/post/Slasgear/github-classroom-pourquoi-le-tester.html",
    "revision": "9d4cc70f5102031a6a7f72b68778fcb1"
  },
  {
    "url": "index.html",
    "revision": "84277668d48675a38c99ac1c7f34e652"
  },
  {
    "url": "post/Slashgear/creating-an-image-lazy-loading-component-with-react.html",
    "revision": "f292b682a7a5040dc3e8d447ca8bd83d"
  },
  {
    "url": "post/Slashgear/why-you-should-use-compression-webpack-plugin.html",
    "revision": "0f4d3bf473ea833cae4d91ac29438b27"
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
