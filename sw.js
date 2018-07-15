const CACHE_NAME = 'restaurant-cache-v1';

self.addEventListener('fetch', function(event) {
  // Attempt to get the target URL
  return event.respondWith(fetch(event.request)
  // If success, store it in cache, and return response
  .then((response) => {
    let responseCopy = response.clone();
    caches.open(CACHE_NAME).then((cache)=>cache.put(event.request, responseCopy));
    return response;
  })
  // If request doesn't respond, return cached content
  .catch((error)=>caches.match(event.request)));
});
