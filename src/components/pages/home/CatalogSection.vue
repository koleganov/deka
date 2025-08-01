<script setup>

import PreviewCard from "../../shared/PreviewCard.vue";
</script>

<template>
  <div class="container">
    <div class="catalog">
      <PreviewCard :large="true"/>
      <PreviewCard v-for="item in 6"/>
    </div>
    <div class="flex justify-center">
      <a
        href=""
        class="catalog-link"
      >
        Получить сравнение лазеров на WhatsApp
      </a>
    </div>
  </div>
</template>

<style scoped>
  .catalog {
    margin-bottom: 60px;
    display: flex;
    justify-content: space-between;
    gap: 15px;
    flex-wrap: wrap;

    @media (max-width: 676px) {
      margin-bottom: 38px;
    }
  }

  .catalog-link {
    padding: 8px 18px;
    font-size: 14px;
    font-weight: 500;
    color: white;
    border: 2px solid var(--color-indigo);
    border-radius: 60px;
    background-color: var(--color-indigo);
    transition: 0.3s ease;

    &:hover {
      background-color: transparent;
      color: var(--color-indigo);
    }

    @media (max-width: 676px) {
      font-size: 9px;
    }
  }
</style>