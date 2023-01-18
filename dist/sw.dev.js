"use strict";

//install service worker
self.addEventListener('install', function (evt) {
  console.log('service worker has been installed');
}); // activate event

self.addEventListener('activate', function (evt) {
  console.log('service worker has been activated');
}); //fetch event

self.addEventListener('fetch', function (evt) {
  console.log('fetch event', evt);
});