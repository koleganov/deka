<script setup>

import BreadCrumbs from "../../shared/BreadCrumbs.vue";
</script>

<template>
  <div class="head-section">
    <div class="container">
      <div class="pt-11">
        <BreadCrumbs class="!text-white" :first-crumb="'Главная'" :second-crumb="'Калькулятор окупаемости'"/>
        <p class="head-title">Калькулятор окупаемости</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .head-section {
    height: 60vh;
    background-image: url("/image/calculator/head.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;

    .head-title {
      font-size: 54px;
      font-weight: 500;
      color: white;
      text-align: center;

      @media (max-width: 676px) {
        font-size: 27px;
      }
    }
    @media (max-width: 676px) {
      height: 50vh;
    }
  }
</style>