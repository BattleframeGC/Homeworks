import { createRouter, createWebHistory } from 'vue-router'

import storeCatalog from "../components/store-catalog.vue";
import storeCart from "../components/store-cart.vue";
import storeProduct from "../components/store-product.vue";
const routes = [
  {
    path: '/',
    name: 'catalog',
    component: storeCatalog
  },
  {
    path: '/cart',
    name: 'cart',
    props: true,
    component: storeCart
  },
  {
    path: '/product/:id',
    name: 'product',
    component: storeProduct
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
