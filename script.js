const CACHE_NAME = 'iss-tracker-pwa-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/script.js',
    '/sw-register.js',
    '/manifest.json'
    // Adicionar ícones aqui também: '/icon-192.png', '/icon-512.png'
];

self.addEventListener('install', event => {
    // Instala o Service Worker e armazena os arquivos no cache
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Cache aberto');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    // Responde com o recurso do cache, se estiver disponível
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Cache hit - retorna a resposta
                if (response) {
                    return response;
                }
                // Nenhuma correspondência no cache - busca na rede
                return fetch(event.request);
            })
    );
});
