import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueAxios from 'vue-axios'
import Axios from 'axios'
import Vuetify from 'vuetify'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(Vuetify)
Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use( VueAxios, Axios);


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Axios.defaults.baseURL = 'http://localhost:3000/api'




new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
