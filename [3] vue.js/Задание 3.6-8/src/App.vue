<template>
  <div id="app">
    <store-wrapper />
  </div>
</template>

<script>
import storeWrapper from "@/components/store-wrapper";

export default {
  name : 'app',
  components: {storeWrapper}
}
</script>



<style>
#app {
  text-align: center;
  color: #2c3e50;
}
</style>