<script setup>

import FolderItem from "../../shared/FolderItem.vue";
</script>

<template>
  <div>
    <p class="title mb-17 max-md:mb-8">
      ДЛЯ КОГО МЫ
    </p>
    <div class="folders container">
      <FolderItem
        v-for="item in 2"
        class="container"
      />
    </div>
  </div>
</template>

<style scoped>
  .folders {
    display: flex;
    flex-wrap: wrap;
    gap: 33px;

    @media (max-width: 676px) {
      gap: 12px;
    }
  }
</style>