<template>
    <div class="store-wrapper">
      <router-view></router-view>
    <!-- 
    <h2>Товаров в корзине: {{CART.length}}</h2>
    <h1>Корзина</h1>
    <store-cart 
      v-if="CART.length"
      :cart_data="CART"
    />  -->
    </div>

</template>

<script>

// import storeCatalog from "./store-catalog";
import {mapGetters} from "vuex";


    export default {
        name: 'store-wrapper',
        //  components: {
        //      storeCart
        //  },
        data() {
             return {}
        },
        computed:{ ...mapGetters(["CART"])},
        methods: {}
     
     }
</script>


<style>
  .store-wrapper {
    margin: 0 auto;
  }
</style>