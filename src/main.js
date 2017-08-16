import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
import {config} from './config/config.js'
import firebase from 'firebase'

/* eslint-disable no-new */

firebase.initializeApp(config);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


