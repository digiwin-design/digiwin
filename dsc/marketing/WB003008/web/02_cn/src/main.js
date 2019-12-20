import Vue from 'vue'
import App from './App.vue'
import store from './store'
import smoothscroll from 'smoothscroll-polyfill';

Vue.config.productionTip = false

smoothscroll.polyfill();

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
