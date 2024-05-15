let cacheData = "appV1";

this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            return cache.addAll([
                '/@vite/client',
                '/src/main.jsx',
                '/vite.svg',
                '/@react-refresh',
                '/users'
            ]);
        })
    );
});

this.addEventListener("fetch", (event) => {
    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then((cachedResponse) => {
                if (cachedResponse) {
                    return cachedResponse;
                }
                let requestUrl= event.request.clone();
                fetch(requestUrl)

                // return fetch(event.request).then((response) => {
                //     // Check if we received a valid response
                //     if (!response || response.status !== 200 || response.type !== 'basic') {
                //         return response;
                //     }

                //     // Clone the response
                //     const responseToCache = response.clone();

                //     // Cache the response for future use
                //     caches.open(cacheData).then((cache) => {
                //         cache.put(event.request, responseToCache);
                //     });

                //     return response;
                // });
            })
        );
    }
});
