self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("chiguru-cache").then((cache) => {
      return cache.addAll([
        "/chiguru_website/",
        "/chiguru_website/index.html",
        "/chiguru_website/css/style.css",
        "/chiguru_website/js/script.js",
        "/chiguru_website/icons/icon-192x192.png",
        "/chiguru_website/icons/icon-512x512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
