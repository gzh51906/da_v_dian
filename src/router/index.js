import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import Home from '../views/home/home.vue'
import college from '../views/college/college.vue'
import book from '../views/book/book.vue'
import shopcart from '../views/shopcart'
import goodslist from '../views/goodslist'
import maishu from '../views/book/pages/maishu.vue'
import jianshu from '../views/book/pages/jianshu.vue'
import dushu from '../views/book/pages/dushu.vue'
import tingshu from '../views/book/pages/tingshu.vue'
import detail from '../views/college/coll_lq/rou/detail.vue'


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
                  import("../views/goodsitem")
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
            path: '/book',
            name: 'book',
            component: book,
      },
      {
            path: '/maishu',
            name: 'maishu',
            component: maishu,
      },
      {
            path: '/dushu',
            name: 'dushu',
            component: dushu,
      },
      {
            path: '/jianshu',
            name: 'jianshu',
            component: jianshu,
      },
      {
            path: '/tingshu',
            name: 'tingshu',
            component: tingshu,
      },
      {
            path: '/detail',
            name: 'detail',
            component: detail,
      }
      ]
})


// router.beforeEach(function (to, from, next) {
//       // console.log('beforeEach', to, from);
//       // if(已登录)
//       next();

//       // else
//       // next({
//       // path:'/login',
//       // query:{target:to.fullPath}
//       // })
// })

export default router;