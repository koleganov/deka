<script setup>

import BreadCrumbs from "../../shared/BreadCrumbs.vue";
</script>

<template>
  <div class="container">
    <BreadCrumbs :first-crumb="'Главная'" :second-crumb="'Услуги'"/>
    <div class="head-text">
      <p class="title mb-4">
        Наши услуги
      </p>
      <p class="max-w-[500px] mb-[45px] mx-auto text-center max-md:max-w-[365px] max-md:mb-[0]">
        Ваше оборудование всегда готово к использованию,
        без простоев и непредвиденных ситуаций
      </p>
    </div>
  </div>
</template>

<style scoped>
  .head-text {
    color: var(--color-indigo);
  }
</style>