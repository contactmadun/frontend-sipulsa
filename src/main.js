import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './axios'
import axios from 'axios'

import '../src/assets/css/style.css'
import 'bootstrap'

axios.defaults.withCredentials = true;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
