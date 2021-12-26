<template>
<router-link :to="{name: 'cart', params: {cart_data: CART}}">
    <div class="store-catalog__menu">Товаров в корзине: {{CART.length}}</div>
</router-link>
<router-link :to="{name: 'catalog'}">
    <div class="store-catalog__menu cat"> В каталог</div>
</router-link>


    <h1>{{good_data.title}}</h1>
  <div class="store-catalog-item">
    <img :src="require('../assets/images/' + good_data.image)">
      <p>{{good_data.title}}</p>
      <p>Стоимость: {{good_data.price}}</p>
      <p>Количество: {{good_data.count > 0 ? good_data.count : "Нет в наличии"}}</p>
      <p>Описание: {{good_data.description}}...</p>
  </div>

    
  <div class="store-cart">
    <store-cart-item  
    v-for="(item, index) in cart_data"
    :key="item.id"
    :cart_item_data="item"
    @deleteFromCart="deleteFromCart(index)"
    @increaseQuantity="increaseQuantity(index)"
    @decreaseQuantity="decreaseQuantity(index)"
    />
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  computed: { 
    ...mapGetters(["CART"]),
    good_data() {
      return this.$store.state.goods.find(obj => obj.id == this.$route.params.id)
    }
  }
}
</script>


<style>
  .cat {
	right:11rem;
    }
</style>