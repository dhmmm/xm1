import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/flexble"
<<<<<<< HEAD
import axios from "axios"
=======
import axios from 'axios'
>>>>>>> e72a45995949a3e2aee00e4448236cbe1bde7438
Vue.prototype.$axios=axios;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
