import Vue from 'vue'
import App from './App.vue'
import ElementUI from './element/index'
ElementUI();
import router from './router/index'
import  Vant112 from './vants/index'
Vant112();
import axios from 'axios'
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
