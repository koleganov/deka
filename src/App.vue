<script setup>
import HeaderApp from "./components/structural/HeaderApp.vue";
import FooterApp from "./components/structural/FooterApp.vue";
</script>

<template>
  <HeaderApp/>

  <router-view />

  <FooterApp/>
</template>

<style scoped>
</style>
