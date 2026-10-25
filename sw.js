const CACHE_NAME = 'cctv-pwa-v1';

// Install event
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

// Activate event
self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});

// Fetch event: network-first approach so updates and streams work live
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
