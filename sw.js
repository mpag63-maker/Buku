/* Offline support for Kisah 25 Rasul.
 * Bump VERSION whenever you publish changes, so old caches are cleared. */
var VERSION = "k25r-v1";
var CORE = [
  "./", "index.html", "style.css", "app.js", "data.js", "manifest.webmanifest",
  "assets/qr-donation.jpg",
  "icons/icon.svg", "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png", "icons/favicon-32.png"
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

// Serve from cache straight away, refresh the cache in the background.
self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;
  var url = new URL(req.url);
  var sameOrigin = url.origin === self.location.origin;
  var fonts = /fonts\.(googleapis|gstatic)\.com$/.test(url.hostname);
  if (!sameOrigin && !fonts) return;

  e.respondWith(
    caches.open(VERSION).then(function (cache) {
      var key = req.mode === "navigate" ? "index.html" : req;
      return cache.match(key, { ignoreSearch: req.mode === "navigate" }).then(function (hit) {
        var net = fetch(req).then(function (res) {
          if (res && (res.ok || res.type === "opaque")) cache.put(key, res.clone());
          return res;
        }).catch(function () { return hit; });
        return hit || net;
      });
    })
  );
});
