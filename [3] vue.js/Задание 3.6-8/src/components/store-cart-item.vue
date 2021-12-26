<template>
  <div class="store-cart-item">
    <img :src="require('../assets/images/' + cart_item_data.image)" alt="">
    <div class="store-cart-item__info">
      <p>{{cart_item_data.title}}</p>
      <p>Стоимость: {{cart_item_data.price}}</p>
    </div>
    <div class="store-cart-item__count">
      <span>
        <button @click="decreaseQuantity">-</button>
        {{cart_item_data.quantity}}
        <span></span>
        <button @click="increaseQuantity">+</button>
      </span>
      </div>
    <button @click="deleteFromCart">Удалить из корзины</button>
  </div>
</template>

<script>

export default {
  name : "store-cart-item",
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {}
      }
     }
  },
  data() {
      return {}
  },
  methods: {
      deleteFromCart(){
        this.$emit('deleteFromCart')
      },
      decreaseQuantity(){
        this.$emit('decreaseQuantity')
      },
      increaseQuantity(){
        this.$emit('increaseQuantity')
      }
  }
}
</script>


<style>
  .store-cart-item {
    box-shadow: 0 0 2px 0 #707070;
    margin: 0,5em;
  }
  .store-cart-item img{
      width: 200px;
      height: 200px;
  }
</style>