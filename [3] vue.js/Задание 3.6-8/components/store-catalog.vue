<template>
<router-link :to="{name: 'cart', params: {cart_data: CART}}">
    <div class="store-catalog__menu">Товаров в корзине: {{CART.length}}</div>
</router-link>
    <h1>Каталог товаров</h1>
  <div class="store-catalog">
    <store-catalog-item 
    v-for="good in GOODS"
    :key="good.id"
    :good_data="good"
    @addToCart="addToCart"
    />
  </div>
</template>

<script>
import storeCatalogItem from "./store-catalog-item";
import {mapActions, mapGetters} from "vuex";

export default {
  name : "store-catalog",
  components: {
    storeCatalogItem
  },
  data() {
      return {}
  },
  computed:{ ...mapGetters(["GOODS","CART"])},
  methods: {
      ...mapActions(["ADD_TO_CART"]),
      
      addToCart(data){
        this.ADD_TO_CART(data);
      }
  }
}
</script>


<style>
  .store-catalog {
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