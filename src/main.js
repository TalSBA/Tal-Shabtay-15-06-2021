import Vue from 'vue'
import App from './App.vue';
import VueRouter from 'vue-router';
import { routes } from './routes';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import store from './store/store';
import 'animate.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { publicPath } from './vue.confing'

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(BootstrapVueIcons);


const router = new VueRouter({
  mode: 'history',
  base: publicPath,
  routes,
  relative: true
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})