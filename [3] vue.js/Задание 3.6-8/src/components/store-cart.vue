<template>
<router-link :to="{name: 'catalog'}">
    <div class="store-catalog__menu"> В каталог</div>
</router-link>
    <h1>Корзина</h1>
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
  <div class="store-cart__total">
    <p>Общая стоимость: {{cartTotalCost}}</p>
  </div>
</template>

<script>
import storeCartItem from "./store-cart-item";
import {mapGetters, mapActions} from "vuex";

export default {
  name : "store-cart",
  components: {
    storeCartItem
  },
  data() {
      return {}
  },
  computed: {
    ...mapGetters(["GOODS","CART"]),
    cart_data() {
        return this.$store.state.cart
     },
    cartTotalCost() {
       let result = []

       if(this.cart_data.length)
       {
          for(let item of this.cart_data){
            result.push(item.price * item.quantity);
          }
          result = result.reduce(function(sum,el){
            return sum + el;
          })
          return result;
       }
       else
       {
           return 0;
       }
     }
  },
  methods: {
      ...mapActions(["DELETE_FROM_CART","INCREASE_QUANTITY","DECREASE_QUANTITY"]),
      
      deleteFromCart(index){
        this.DELETE_FROM_CART(index);
      },
      increaseQuantity(index){
        this.INCREASE_QUANTITY(index);
      },
      decreaseQuantity(index){
        this.DECREASE_QUANTITY(index);
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
  .store-cart__total {
      position: fixed;
      bottom: 0;
      right: 0;
      left: 0;
      padding: 2px;
      display: flex;
      justify-content: center;
      background: #37a182;
      color: #ffffff;
      font-size: 20px;
    }
</style>