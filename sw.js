const cacheName = "Hotgengs";
const preCache = ["/", "/style.css", "/script.js"];

self.addEventListener("install", (e) => {
    console.log("Service worker installed");

    e.waitUntil(
        (async() => {
            const cache = await caches.open(cacheName)

            cache.addAll(preCache)
        })()
    );
});

self.addEventListener("fetch", (e) => {
    e.respondWith((async() => {

    }))
});