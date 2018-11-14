import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  faBomb
} from '@fortawesome/free-solid-svg-icons'
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'
import {
  faAddressBook
} from '@fortawesome/free-solid-svg-icons'
import regular from '@fortawesome/fontawesome-free-regular'


Vue.use(BootstrapVue);
library.add(faBomb)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')