import Vue from 'vue'
import App from './App.vue';
import VueRouter from 'vue-router';
import { routes } from './routes';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import store from './store/store';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(BootstrapVueIcons);


const router = new VueRouter({
    mode: 'history',
    routes
  });

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
  })