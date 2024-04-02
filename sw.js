const cacheName = "Hotgengs";
const preCache = [
    "/",
    "/style.css",
    "/script.js",
    "/detailProduk/index.html",
    "/detailProduk/style.css",
    "/detailProduk/script.js",
    "/keranjang/index.html",
    "/keranjang/style.css",
    "/keranjang/script.js",
    "/login/index.html",
    "/login/style.css",
    "/lupapass/index.html",
    "/lupapass/script.js",
    "/lupapass/style.css",
    "/register/index.html",
    "/register/style.css",
    "/team/index.html",
    "/team/style.css",
    "/team/script.js",
];

self.addEventListener("install", (e) => {
    console.log("Service worker installed");

    e.waitUntil(
        (async() => {
            const cache = await caches.open(cacheName);

            cache.addAll(preCache);
        })()
    );
});

self.addEventListener("fetch", (e) => {
    e.respondWith(
        (async() => {
            const cache = await caches.open(cacheName);

            const resCache = await cache.match(e.request);

            if (resCache) return resCache;

            try {
                const res = await fetch(e.request);

                cache.put(e.request, res.clone());

                return res;
            } catch (error) {
                console.log(error);
            }
        })()
    );
});