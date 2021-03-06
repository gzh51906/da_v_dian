
import Vue from 'vue'
import App from './App.vue'
import ElementUI from './element/index'
ElementUI();
import "element-ui/lib/theme-chalk/index.css"
Vue.use(ElementUI);
import router from './router/index'
import Vant112 from './vants/index'
Vant112();
import 'vant/lib/icon/local.css'
Vue.use(Vant112)
import axios from 'axios'
Vue.prototype.$axios = axios
Vue.config.productionTip = false
import mixins from "./mixins"

import store from './store/store'
Vue.mixin(mixins)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

