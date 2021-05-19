// install trigger for sw - cache index.html

self.addEventListener('install', function(event) {
  if (location.protocol.indexOf("http") > -1)
  {
      var indexPage = new Request('index.html');
      event.waitUntil(
        fetch(indexPage).then(function(response) {
          return caches.open('offline').then(function(cache) {
            return cache.put(indexPage, response);
          });
      }));
  }
});

// activate trigger

self.addEventListener('activate', function (event) {
    console.log('Activated', event);
});


// fetch trigger - serve from cache or fetch from server, cache the file if not previously cached

self.addEventListener('fetch', function(event) {
  if (location.protocol.indexOf("http") > -1 && event.request.method == "GET") event.respondWith(
    fetch(event.request).then(function(response) {
      return caches.open('offline').then(function(cache) {
          try {
            cache.put(event.request, response.clone());
        } catch (e) {};
        return response;
      });
    }).catch(function (error) {
      caches.match(event.request).then(function(resp) {
        return resp;
      });
    })
  );
});

// push trigger

self.addEventListener('push', function (event) {
   console.debug('push', event);

   const data = event.data.json();
   console.debug('Push message', data);

   const options = {
        body: data.label,
        icon: './icon.png',
        requireInteraction: true,
        persistent: true,
        sticky: true,
        data: data,
        actions: [
          {action: 'accept', title: 'Accept Call', icon: './check-solid.png'},
          {action: 'reject', title: 'Reject call', icon: './times-solid.png'}		  
        ]
    };
    event.waitUntil(
        self.registration.showNotification("Incoming Call", options)
    );
});

self.addEventListener("pushsubscriptionchange", function(e) {
    console.debug('pushsubscriptionchange', e);
});

self.addEventListener('notificationclose', function(e) {
    console.debug('Closed notification', e.notification);
});

self.addEventListener('notificationclick', function(event) {
    console.debug('notificationclick', event);

	const channel = new BroadcastChannel('openlink-webpush-action');
	channel.postMessage({action: event.action, payload: event.notification.data});
    event.notification.close();
}, false);