// CSS files are not caching!!

//install service worker

const CacheName = 'siteStatic';
const files = [
    '/',
    '/HTML/index.html',
    '/HTML/JokesCategory.html',
    '/HTML/search.html',
    '/HTML/about.html',
    '/HTML/contactUs.html',
    '/js/app.js',
    '/JS/jokesCategory.js',
    '/JS/script.js',
    '/JS/search.js',
    '/img/chucknorris.png',
    '/img/images.jpeg',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css'

];

self.addEventListener('install', evt => {
    //console.log('service worker has been installed');
    evt.waitUntil(
        caches.open(CacheName).then((cache) => {
            console.log('caching shell assets');
            cache.addAll(files).catch((error) => {
                console.log("Error adding assets to cache", error);
            });
        })
    )});
    

// activate event

self.addEventListener('activate', evt => {
    //console.log('service worker has been activated');
});

//fetch event
self.addEventListener('fetch', evt => {
   // console.log('fetch event', evt);
});