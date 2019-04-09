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
    "revision": "d723d65dae0db9a2c58205ee6b8f269a"
  },
  {
    "url": "assets/css/0.styles.1a24ba94.css",
    "revision": "1509d0c0fecac9a094494585be9c2a81"
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
    "url": "assets/js/10.23d9d773.js",
    "revision": "1a1875d7ee27e6273df28136ec3dd259"
  },
  {
    "url": "assets/js/11.7393ed31.js",
    "revision": "714e046baf6ef6b3b063cddb65df9a71"
  },
  {
    "url": "assets/js/12.a59b86ae.js",
    "revision": "7f8073074245871d305894cb0585f9b3"
  },
  {
    "url": "assets/js/13.38f2b8cc.js",
    "revision": "b89b2adfe5fa3bad90bf2dfc1d23f860"
  },
  {
    "url": "assets/js/3.5229ec25.js",
    "revision": "52f98e94257ae3b5e0e923dcf3cc2d05"
  },
  {
    "url": "assets/js/4.e4af55aa.js",
    "revision": "a8379385a37b289364ce2ee90011c494"
  },
  {
    "url": "assets/js/5.026900ef.js",
    "revision": "921aceed2b0535eba60ca78c96635939"
  },
  {
    "url": "assets/js/6.b610a564.js",
    "revision": "35c1fd49c2c25be39de940d028c64f03"
  },
  {
    "url": "assets/js/7.3684bb1d.js",
    "revision": "5a23f2bb72cf565bcedfda7cdf7ef090"
  },
  {
    "url": "assets/js/8.3ecda600.js",
    "revision": "994384e36e3812b2d3fefb6d800b955e"
  },
  {
    "url": "assets/js/9.c5a5e431.js",
    "revision": "34c8462fddc3e9d530505de9ea39d342"
  },
  {
    "url": "assets/js/app.cdb13cc7.js",
    "revision": "3afd57063ef6eb52b065b9ad92510d06"
  },
  {
    "url": "assets/js/vendors~docsearch.9d0c5001.js",
    "revision": "08edd9a8fb28e9ba7c0d5086749e1d22"
  },
  {
    "url": "contributing.html",
    "revision": "3c871bb0bfe5549c85a6253d5725d343"
  },
  {
    "url": "fr/index.html",
    "revision": "b3d5bb581ab399a701c4b0fba2a9fbd3"
  },
  {
    "url": "fr/post/Slasgear/github-classroom-pourquoi-le-tester.html",
    "revision": "868c709324c3b54046ffb6631cb7dc46"
  },
  {
    "url": "index.html",
    "revision": "c344b0d5ce0391c5419d274497ba9227"
  },
  {
    "url": "post/Slashgear/creating-an-image-lazy-loading-component-with-react.html",
    "revision": "f8fa33874cc9306969961be891ec1cb4"
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
