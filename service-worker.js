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
    "revision": "0195ec93ebdafbed5a3e4748bb0e3fd7"
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
    "url": "assets/js/10.4c020dd4.js",
    "revision": "99c77ccb3ccc2727dc908ca404d2a610"
  },
  {
    "url": "assets/js/11.57344d4c.js",
    "revision": "9afb437a4a11767c13b437c235f68255"
  },
  {
    "url": "assets/js/12.46481c2c.js",
    "revision": "126ae7d54343547ba623841759b81674"
  },
  {
    "url": "assets/js/13.a8e64980.js",
    "revision": "79072a545a8ff8b4faad93ec15da3d40"
  },
  {
    "url": "assets/js/14.8099a3e8.js",
    "revision": "d0e768d4cd53fb8a84f35e4b500df2be"
  },
  {
    "url": "assets/js/15.23efa781.js",
    "revision": "d6f3ed7105b579662494aad5dd1df983"
  },
  {
    "url": "assets/js/3.d884a169.js",
    "revision": "496496d0e49c6c903c7483e2a3f99e80"
  },
  {
    "url": "assets/js/4.b68e15b3.js",
    "revision": "e980b3f8f193167e75d942202abafd32"
  },
  {
    "url": "assets/js/5.1ccc99c0.js",
    "revision": "6e088614b259cf16db7024dbc7f46fef"
  },
  {
    "url": "assets/js/6.46d51126.js",
    "revision": "93eff89a81c6cf227f3f0a3459835c27"
  },
  {
    "url": "assets/js/7.5aa959e4.js",
    "revision": "5e473e3ad4cf1a8e5fe3518e7667a1e8"
  },
  {
    "url": "assets/js/8.9e68a46d.js",
    "revision": "37e9ee53160e2d2957fb192dda9025be"
  },
  {
    "url": "assets/js/9.9bd3ea0c.js",
    "revision": "1fb62d811e866d9d7873f496424a87cd"
  },
  {
    "url": "assets/js/app.4f87c933.js",
    "revision": "8feb028ab820a9a061ef258474ac0d13"
  },
  {
    "url": "assets/js/vendors~docsearch.7824dab0.js",
    "revision": "7e5a2fa12b550184fa31888baec90dc1"
  },
  {
    "url": "contributing.html",
    "revision": "f21bf364e5d90f235b169c93e74e9161"
  },
  {
    "url": "fr/index.html",
    "revision": "24e3d6bdb3c5fefccfc50cd811d8f9fb"
  },
  {
    "url": "fr/post/Slasgear/github-classroom-pourquoi-le-tester.html",
    "revision": "614cf5d0540e42c07d65064ddcf7dde0"
  },
  {
    "url": "index.html",
    "revision": "e2f7c77979a4031d36a98e0ac2229179"
  },
  {
    "url": "post/Slashgear/creating-an-image-lazy-loading-component-with-react.html",
    "revision": "bc09b5b3b3aca90557d2e5466f68af82"
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
