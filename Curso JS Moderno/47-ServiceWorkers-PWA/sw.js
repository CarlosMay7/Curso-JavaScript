const archivos = [
    '/',
    'index.html',
    '/css/bootstrap.css',
    '/css/styles.css',
    '/js/app.js',
    '/js/apv.js',
    'error.html'
]

const nombreCache = 'apv-v2';

self.addEventListener('install', e => {
    console.log('Instalado sw');

    e.waitUntil(
        caches.open(nombreCache)
            .then( cache => {
                console.log('Cacheando');
                cache.addAll(archivos);
            })
    )
});

self.addEventListener('activate', e => {
    console.log('Activado sw');

    e.waitUntil(
        caches.keys()
            .then(keys => {
                return Promise.all(
                    keys.filter(key => key!==nombreCache)
                        .map(key => caches.delete(key))
                )
            })
    )
});

self.addEventListener('fetch', e => {
    console.log('Fetch')

    e.respondWith(
        caches.match(e.request)
            .then(respuestaCache => respuestaCache)
            .catch(() => catches.match('/error.html'))
    )
})