/* Offline support for Kisah 25 Rasul.
 * Updates show automatically when online. Bumping VERSION also refreshes saved images/icons. */
var VERSION = "k25r-v2";
var CORE = [
  "./", "index.html", "style.css", "app.js", "data.js", "manifest.webmanifest",
  "assets/qr-donation.png",
  "icons/icon.svg", "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png", "icons/favicon-32.png", "icons/icon-maskable-512.png"
];

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(VERSION).then(function (c) { return c.addAll(CORE); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== VERSION; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

// Pages, scripts and styles: always try the internet first so updates show at once,
// and fall back to the saved copy when offline. Fonts and images: saved copy first.
self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;
  var url = new URL(req.url);
  var sameOrigin = url.origin === self.location.origin;
  var fonts = /fonts\.(googleapis|gstatic)\.com$/.test(url.hostname);
  if (!sameOrigin && !fonts) return;
  var key = req.mode === "navigate" ? "index.html" : req;
  var fresh = sameOrigin && (req.mode === "navigate" || /\.(html|js|css|webmanifest)$/.test(url.pathname));

  e.respondWith(caches.open(VERSION).then(function (cache) {
    function fromNet() {
      return fetch(req, fresh ? { cache: "no-cache" } : undefined).then(function (res) {
        if (res && (res.ok || res.type === "opaque")) cache.put(key, res.clone());
        return res;
      });
    }
    if (fresh) {
      return fromNet().catch(function () { return cache.match(key, { ignoreSearch: true }); });
    }
    return cache.match(key).then(function (hit) { return hit || fromNet(); });
  }));
});
