import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import Home from '../views/home/home.vue'
import college from '../views/college/college.vue'
import book from '../views/book/book.vue'
import shopcart from '../views/shopcart'
import goodslist from '../views/goodslist'
import detail from '../views/detail_lq'


let router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/home',
            name: 'home',
            component: Home,
        },
        {
            path: '/goodslist',
            name: 'goodslist',
            component: goodslist
        },
        {
            path: '/goodsitem',
            name: 'goodsitem',
            component: () =>
                import ("@views/goodsitem")
        },
        {
            path: '/shopcart',
            name: 'shopcart',
            component: shopcart
        },
        {
            path: '/college',
            name: 'college',
            component: college,
        },
         {
            path: '/detail/:id',
            name: 'detail',
            component: detail,
        },
        {
            path: '/book',
            name: 'book',
            component: book,
        }
    ]

});





export default router;