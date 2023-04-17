import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home/Home')

  },
  {
    path: '/cartList',
    name: 'CartList',
    component: () => import(/* webpackChunkName: "cartList" */ '../views/cartList/CartList')

  },
  {
    path: '/orderConfirmation/:id',
    name: 'OrderConfirmation',
    component: () => import(/* webpackChunkName: "orderConfirmation" */ '../views/orderConfirmation/OrderConfirmation')

  },
  {
    path: '/orderList',
    name: 'OrderList',
    component: () => import(/* webpackChunkName: "orderList" */ '../views/orderList/OrderList')

  },
  {
    path: '/shop/:id',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "shop" */ '../views/shop/Shop')

  },
  {
    path: '/person',
    name: 'PersonalInfo',
    component: () => import(/* webpackChunkName: "person" */ '../views/personalInfo/PersonalInfo'),
  },
  {
    path: '/chooseAddressList/:shopId',
    name: 'ChooseAddressList',
    component: () => import(/* webpackChunkName: "chooseAddressList" */ '../views/chooseAddressList/ChooseAddressList'),
  },
  {
    path: '/myAddressList',
    name: 'MyAddressList',
    component: () => import(/* webpackChunkName: "myAddressList" */ '../views/myAddressList/MyAddressList'),
  },
  {
    path: '/upsertAddress/:id?',
    name: 'UpsertAddress',
    component: () => import(/* webpackChunkName: "upsertAddress" */ '../views/upsertAddress/UpsertAddress'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "rejister" */ '../views/register/Register'),
    beforeEnter(to, from, next) {
      const { isLogin } = localStorage
      isLogin ? next({ name: 'Home' }) : next();
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login_123123" */ '../views/login/Login'),

    //只有访问Login这个页面才会执行
    beforeEnter(to, from, next) {
      const { isLogin } = localStorage
      isLogin ? next({ name: 'Home' }) : next();
    }
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

//不管什么路由做切换都会执行
router.beforeEach((to, from, next) => {
  const { isLogin } = localStorage;
  if (!isLogin && (to.name !== "Login" && to.name !== 'Register')) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
