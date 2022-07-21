import Vue from 'vue';
import App from './App.vue';
import 'uno.css'
import router from './router'
import store from './store';

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
