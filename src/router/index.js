import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import Home from '../views/home/home.vue'
import college from '../views/college/college.vue'
import book from '../views/book/book.vue'


let router = new VueRouter({
  mode: 'history',
routes:[{
      path: '/home',
      name: 'home',
      component: Home,
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
}
]

});

export default router;