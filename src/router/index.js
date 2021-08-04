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
    path: '/stores',
    name: 'Stores',
    component: () => import( /* webpackChunkName: "partners" */ '../views/StoresPage.vue')
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: () => import( /* webpackChunkName: "partners" */ '../views/Catalog.vue')
  },
  {
    path: '/orders',
    name: 'Orders',
    component: () => import( /* webpackChunkName: "partners" */ '../views/ClientsOrders.vue')
  },
  {
    path: '/new-product',
    name: 'NewProduct',
    component: () => import( /* webpackChunkName: "categories" */ '../views/AddProduct.vue')
  },
  {
    path: '/product-detail',
    name: 'ProductDetail',
    component: () => import( /* webpackChunkName: "product-detail" */ '../views/ProductDetail.vue')
  },
  {
    path: '/store-detail',
    name: 'StoreDetail',
    component: () => import( /* webpackChunkName: "product-detail" */ '../views/StoreDetail.vue')
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
    path: '/new-supplier',
    name: 'NewSupplier',
    component: () => import( /* webpackChunkName: "product-detail" */ '../views/NewSupplier.vue')
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