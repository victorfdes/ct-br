import Vue from 'vue'
import App from './App.vue'
import clevertap from 'clevertap-web-sdk'

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

Vue.config.productionTip = false
// clevertap.notifications.push({
//   'titleText': 'Would you like to receive Push Notifications?',
//   'bodyText':'We promise to only send you relevant content and give you updates on your transactions',
//   'okButtonText': 'Sign me up!',
//   'rejectButtonText': 'No thanks',
//   'okButtonColor': '#F28046',
//   'askAgainTimeInSeconds': 5,
//   'serviceWorkerPath':  '/sw.js' // path to your custom service worker file
// })
// clevertap.init('44Z-R45-995Z', '')
// clevertap.init('TEST-545-448-RW6Z', '') -- royson
clevertap.init('W8W-897-865Z', '')

new Vue({
  render: h => h(App),
}).$mount('#app')
