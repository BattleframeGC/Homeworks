<template>
    <div class="store-wrapper">
      <router-view></router-view>
    </div>

</template>

<script>


    export default {
        name: 'store-wrapper',
        data() {
             return {}
        }
     }
</script>


<style>
  .store-wrapper {
    margin: 0 auto;
  }
</style>