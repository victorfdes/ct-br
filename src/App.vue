<template>
  <div id="app">
    <h1>Test A-JS</h1>
    <div>
      <button @click="onClickPP">Random PP</button>
      <button @click="onClickOUL">Random OUL</button>
      <button @click="onClickEP">Event Push</button>
      <button @click="enablePush">Enable Push Notification</button>
    </div>
    <hr>
    <p>On User Login</p>
    <input type="text" v-model="OULEmail">
    <input type="text" disabled value="@gmail.com">
    <button @click="clickOULSame">OUL</button>
    <hr>
    <p>Profile Push</p>
    <input type="text" v-model="PPEmail">
    <input type="text" disabled value="@gmail.com">
    <button @click="clickPPSame">PP</button>
    <hr>
    <div style="text-align: left;">
      <input type="checkbox" v-model="adc">Added to Cart<br />
      <input type="checkbox" v-model="ps">Product Sold<br />
      <input type="checkbox" v-model="pv">Product Viewed<br />
      <button @click="pushSelectedEvents">Push Selected Events</button>
    </div>
    <hr>
    <div style="text-align: left;">
      <button @click="getLS">Show Local Storage</button><br/>
      <button @click="clearLS">Clear Local Storage</button>
    </div>
    <div style="text-align: left;">
      WZRK_K: {{WZRK_K}} <br/><br/>
      WZRK_G: {{WZRK_G}}<br/><br/>
      LRU_CAHCE: {{LRU_CACHE}}<br/><br/>
      WZRK_EV: {{WZRK_EV}}<br/><br/>
      WZRK_ARP: {{WZRK_ARP}}<br/><br/>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import clevertap from 'clevertap-web-sdk'
export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data: () => ({
    LRU_CACHE: null,
    WZRK_K: null,
    WZRK_G: null,
    WZRK_EV: null,
    WZRK_ARP: null,
    OULEmail: '',
    PPEmail: '',
    // Event Checks
    adc: false,
    ps: false,
    pv: false,
  }),
  methods: {
    onClickPP () {
      clevertap.profile.push({
        Site: {
          Email: `as${Math.ceil(
            Math.random() * 10002320
          )}@gmail.com`
        }
      })
      this.getLS()
    },
    onClickOUL () {
      clevertap.onUserLogin.push({
        Site: {
          Email: `qw${Math.ceil(
            Math.random() * 10002312
          )}@gmail.com`
        }
      })
      this.getLS()
    },
    onClickEP () {
      clevertap.event.push('Product Eaten')
      clevertap.event.push('Message Received')
      clevertap.event.push('Message Viewed')
      clevertap.event.push('Product add to cart')
      this.getLS()
    },

    clickOULSame () {
      clevertap.onUserLogin.push({
        Site: {
          Email: `${this.OULEmail}@gmail.com`
        }
      })
      this.getLS()
    },

    clickPPSame () {
      clevertap.profile.push({
        Site: {
          Email: `${this.PPEmail}@gmail.com`
        }
      })
    },

    pushSelectedEvents () {
      if (!this.adc && !this.ps && !this.pv) {
        alert('Select atleast one event')
        return
      }
      if (this.adc) clevertap.event.push('Added to Cart')
      if (this.ps) clevertap.event.push('Product Sold')
      if (this.pv) clevertap.event.push('Product Viewed')
      this.adc = false
      this.ps = false
      this.pv = false
      this.getLS()
    },

    enablePush () {
      clevertap.notifications.push({
        titleText: 'Wish to receive push notifications?',
        bodyText: 'Click Yes to receive push notifications',
        okButtonText: 'Yes',
        rejectButtonText: 'No',
        'serviceWorkerPath':  '/sw.js'
      })
    },

    getLS () {
      this.LRU_CACHE = decodeURIComponent(localStorage['WZRK_X'])
      this.WZRK_K = decodeURIComponent(localStorage['WZRK_K'])
      this.WZRK_G = decodeURIComponent(localStorage['WZRK_G'])
      this.WZRK_EV = decodeURIComponent(localStorage['WZRK_EV'])
      this.WZRK_ARP = decodeURIComponent(localStorage['WZRK_ARP'])
    },

    clearLS () {
      localStorage.clear()
      this.getLS()
    }
  },
  mounted () {
    // clevertap.event.push('App Mounted')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
