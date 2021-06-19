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
import 'vue2-toast/lib/toast.css';
import Toast from 'vue2-toast';
Vue.use(Toast, {
    type: 'center',
    duration: 3000,
    wordWrap: true,
    width: '150px'
});
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(BootstrapVueIcons);


const router = new VueRouter({
  mode : 'hash',
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