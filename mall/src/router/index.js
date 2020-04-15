import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../page/home/Home')
const Category = () => import('../page/category/Category')
const Cart = () => import('../page/cart/Cart')
const Profile = () => import('../page/profile/Profile')

Vue.use(Router)

// 创建router
const routes = [{
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }
]
const router = new Router({
  routes,
  mode: 'history' //去掉url地址中的#号
})


export default router
