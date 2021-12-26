import { createRouter, createWebHistory } from 'vue-router'

import storeCatalog from "../components/store-catalog.vue";
import storeCart from "../components/store-cart.vue";
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
