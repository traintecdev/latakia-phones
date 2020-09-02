importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

//custom
workbox.skipWaiting();
workbox.clientsClaim();


// Cache the Google Fonts stylesheets with a stale-while-revalidate strategy.
workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
    })
);

// Cache the underlying font files with a cache-first strategy for 1 year.
workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new workbox.strategies.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200],
            }),
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 365,
                maxEntries: 30,
            }),
        ],
    })
);

workbox.precaching.precacheAndRoute([
  {
    "url": "app.js",
    "revision": "fa36f2ae2187f2a6a70879d3d4fb3390"
  },
  {
    "url": "app.min.js",
    "revision": "f7bf0b4f66abea3061e100b2630e8987"
  },
  {
    "url": "bootstrap.min.js",
    "revision": "e1d98d47689e00f8ecbc5d9f61bdb42e"
  },
  {
    "url": "clipboard.min.js",
    "revision": "f06c52bfddb458ad87349acf9fac06c5"
  },
  {
    "url": "css/seven.bootstrap.min.css",
    "revision": "43cb635b5fa1f0be07cc7bb46d6f15c7"
  },
  {
    "url": "css/test.css",
    "revision": "13f0872d14e6bbe2d5a6031d42159c7f"
  },
  {
    "url": "edit-sw.js",
    "revision": "d2e803adcc8695544166ca00323d8f94"
  },
  {
    "url": "favicon.ico",
    "revision": "16795cd581f7437483e5826307a31bd0"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "0505cc54e78ecd55f32c0885ae6cd41c"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "9bf320cc0be775ee7299ce129649f159"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "9168bef0510fab8992f68946d7a8c437"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "731407e934ba514c9bb9a908e41a9862"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "b410d93a98698ad3c9a0010df1e312d5"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "a1cbc3bbddc5e803278fa67ee9e1fc11"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "57657cc95f08470d10a0d37025c8a1f2"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "622291f6bf9198f3f0f78b859fb66890"
  },
  {
    "url": "imgs/call.svg",
    "revision": "093d0cba0240ad839be2f076352bfd70"
  },
  {
    "url": "imgs/copy.svg",
    "revision": "dd9c5c3fa2c536d1aceb97032966bd9c"
  },
  {
    "url": "imgs/facebook.svg",
    "revision": "6a57cea23803ec3e6e8ce0c2e2ac6fe1"
  },
  {
    "url": "imgs/instagram.svg",
    "revision": "65247a368f20c31793aa9b3b8e4bf592"
  },
  {
    "url": "imgs/reverse.svg",
    "revision": "954ffe52c72093ac0f6750854b845f2e"
  },
  {
    "url": "imgs/traintec.png",
    "revision": "8013932b760c3ccda179bd4f719dd3cb"
  },
  {
    "url": "index.html",
    "revision": "93a5aa8029b28f16620ce4959f8fd6a9"
  },
  {
    "url": "jquery-3.4.1.min.js",
    "revision": "220afd743d9e9643852e31a135a9f3ae"
  },
  {
    "url": "jquery.slim.min.js",
    "revision": "ddff2f67e69175fff8e7259b2043265e"
  },
  {
    "url": "manifest.json",
    "revision": "037e53b512561295f1cf08c123ae7b5d"
  },
  {
    "url": "package-lock.json",
    "revision": "079e9a584fdc21d019b82e68b43ab044"
  },
  {
    "url": "redirect.html",
    "revision": "693650a94cb1bbd0e5625cb1e9bc437f"
  },
  {
    "url": "workbox-config.js",
    "revision": "842f7d6ec079d1138bf174c115e7474b"
  }
]);