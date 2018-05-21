self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/restaurant.html',
        '/restaurant.html?id=1',
        '/restaurant.html?id=2',
        '/restaurant.html?id=3',
        '/restaurant.html?id=4',
        '/restaurant.html?id=5',
        '/restaurant.html?id=6',
        '/restaurant.html?id=7',
        '/restaurant.html?id=8',
        '/restaurant.html?id=9',
        '/restaurant.html?id=10',
        '/css/styles.css',
        '/js/main.js',
        '/js/restaurant_info.js',
        '/js/dbhelper.js',
        '/img/1.webp',
        '/img/2.webp',
        '/img/3.webp',
        '/img/4.webp',
        '/img/5.webp',
        '/img/6.webp',
        '/img/7.webp',
        '/img/8.webp',
        '/img/9.webp',
        '/img/10.webp'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});