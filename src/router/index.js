import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import( /* webpackChunkName: "contact" */ '../views/Contact.vue')
  },
  {
    path: '/account-page',
    name: 'Account',
    component: () => import( /* webpackChunkName: "contact" */ '../views/AccountPage.vue')
  },

  {
    path: '/products',
    name: 'Products',
    component: () => import( /* webpackChunkName: "products" */ '../views/ProductsPage.vue')
  },
  {
    path: '/product-detail',
    name: 'ProductDetail',
    component: () => import( /* webpackChunkName: "product-detail" */ '../views/ProductDetail.vue')
  },
  {
    path: '/category-detail',
    name: 'CategoryDetail',
    component: () => import( /* webpackChunkName: "product-detail" */ '../views/CategoryDetail.vue')
  },
  {
    path: '/shopping-cart',
    name: 'ShoppingCart',
    component: () => import( /* webpackChunkName: "product-detail" */ '../views/ShoppingCart.vue')
  },
  {
    path: '/payment',
    name: 'Payment',
    component: () => import( /* webpackChunkName: "product-detail" */ '../views/Payment.vue')
  },
  {
    path: '/new-user',
    name: 'NewUser',
    component: () => import( /* webpackChunkName: "product-detail" */ '../views/NewUser.vue')
  },
  {
    path: '/categories',
    name: 'Categories',
    component: () => import( /* webpackChunkName: "product-detail" */ '../views/CategoriesPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  history.scrollRestoration = "manual";
  window.scrollTo(0, 0);
  next()
})

export default router