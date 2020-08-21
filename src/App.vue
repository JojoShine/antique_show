<template>
  <div id="app">
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AntiqueList from "./views/AntiqueList";
export default {
  components: {
    AntiqueList
  }
};
</script>

<style scoped>
</style>
