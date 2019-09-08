import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import shopcart from "./shopcart"
import cart from "../store_lq/cart"

export default new Vuex.Store({
    state: {

    },
    mutations: {

    },
    actions: {

    },
    modules: {
        shopcart,
        cart
    }
})