const CACHE_NAME = "student-research-africa-v44";

const APP_SHELL = [
  "./",
  "index.html",
  "admin.html",
  "index.css",
  "index.js",
  "admin.js",
  "manifest.json",
  "offline.html",
  "icons/icon.svg",
  "icons/apple-touch-icon.svg",
  "icons/public-students.svg",
  "icons/public-teachers.svg",
  "icons/public-lecturers.svg",
  "icons/public-workers.svg",
  "icons/public-contact.svg",
  "icons/public-diagrams.svg",
  "icons/public-papers.svg",
  "icons/public-answer.svg",
  "icons/public-country-setup.svg",
  "icons/public-language-support.svg",
  "icons/public-media-research.svg",
  "icons/public-verified-content.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    ).then(() => self.clients.matchAll({ type: "window" }))
      .then((clients) => {
        clients.forEach((client) => client.postMessage({ type: "APP_UPDATED" }));
      })
  );
  self.clients.claim();
});

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  const requestUrl = new URL(event.request.url);
  if (requestUrl.origin !== self.location.origin || event.request.headers.has("Range")) {
    return;
  }

  const isAppCode = /\.(html|js|css)$/.test(requestUrl.pathname);
  if (isAppCode) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          return response;
        })
        .catch(() => caches.match(event.request).then((cached) => cached || caches.match("offline.html")))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) {
        return cached;
      }

      return fetch(event.request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          return response;
        })
        .catch(() => caches.match("offline.html"));
    })
  );
});
