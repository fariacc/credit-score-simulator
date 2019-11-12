import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource"
import VueTheMask from 'vue-the-mask'
import VueRouter from 'vue-router'
import { routes } from './routes'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import money from 'v-money'
import FBSignInButton from 'vue-facebook-signin-button'
import GSignInButton from 'vue-google-signin-button'

Vue.use(VueResource);
Vue.use(VueTheMask)
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(money, { precision: 4 })
Vue.use(FBSignInButton)
Vue.use(GSignInButton)

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
