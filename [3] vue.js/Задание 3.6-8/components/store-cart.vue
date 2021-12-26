<template>
<router-link :to="{name: 'catalog'}">
    <div class="store-catalog__menu"> В каталог</div>
</router-link>
    <h1>Корзина</h1>
    <p>Товаров в корзине: 1</p>
  <div class="store-cart">
    <store-cart-item  
    v-for="(item, index) in cart_data"
    :key="item.id"
    :cart_item_data="item"
    @deleteFromCart="deleteFromCart(index)"
    />
  </div>
</template>

<script>
import storeCartItem from "./store-catalog-item";
import {mapActions} from "vuex";

export default {
  name : "store-cart",
  components: {
    storeCartItem
  },
  data() {
      return {}
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return []
      }
     }
  },
  methods: {
      ...mapActions(["DELETE_FROM_CART"]),
      
      deleteFromCart(index){
        this.DELETE_FROM_CART(index);
      }
  }
}
</script>


<style>
  .store-cart {
	display: flex;
  flex-wrap: wrap;
  justify-content: center;
	gap: 1rem;
	height: auto;
    }
  .store-catalog__menu {
	position: absolute;
  top:10px;
  right:10px;
  padding: 8px;
  border: solid 1px #707070;
  border-radius: 5px;
    }
</style>