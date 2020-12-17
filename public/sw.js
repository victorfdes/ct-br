importScripts('https://s3-eu-west-1.amazonaws.com/static.wizrocket.com/js/sw_webpush.js');

self.addEventListener('install', function(event) {
  // Perform install steps
  console.log('SW installed', event)
});
