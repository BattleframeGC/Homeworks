<template>
  <div class="store-catalog-item">
    <img :src="require('../assets/images/' + good_data.image)">
      <p>{{good_data.title}}</p>
      <p>Стоимость: {{good_data.price}}</p>
      <p>Количество: {{good_data.count > 0 ? good_data.count : "Нет в наличии"}}</p>
      <p>Описание: {{good_data.description.substr(0, 15)}}...</p>
      <router-link :to="'/product/' + good_data.id">
      <button>Подробнее</button>
      </router-link>
      <button @click="addToCart" :disabled="!good_data.count">В корзину</button>
  </div>
</template>

<script>

export default {
  name : "store-catalog-item",
  props: {
      good_data: {
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
      addToCart(){
        this.$emit('addToCart', this.good_data)
      }
  }
}
</script>


<style>
  button {
    margin: 0.5em;
  }
  .store-catalog-item {
    box-shadow: 0 0 2px 0 #707070;
    margin: 0,5em;
  }
  .store-catalog-item img{
      width: 200px;
      height: 200px;
  }
</style>