import Vue from 'vue'
import App from './App.vue'
import VueFire from 'vuefire'
import {rtdbPlugin} from 'vuefire'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.use(rtdbPlugin);

new Vue({
  el: '#app',
  render: h => h(App)
})
