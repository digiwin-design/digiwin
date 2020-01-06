import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import smoothscroll from 'smoothscroll-polyfill';
import { sync } from 'vuex-router-sync';

Vue.config.productionTip = false
smoothscroll.polyfill();
sync(store, router);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
