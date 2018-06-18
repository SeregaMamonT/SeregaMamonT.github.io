self.addEventListener('fetch', event => {
  const request = new Request(event.request.url, {mode: 'no-cors'});
  event.respondWith(fetch(request));
});