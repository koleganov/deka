<script setup>

defineProps({
  firstCrumb: String,
  secondCrumb: String,
  firstLink: String
})

</script>

<template>
  <div class="breadcrumbs">
    <router-link class="hover:underline" :to="firstLink || '/'">
      {{ firstCrumb }}
    </router-link>
    >
    <p>
      {{ secondCrumb }}
    </p>
  </div>
</template>

<style scoped>
  .breadcrumbs {
    max-width: 400px;
    padding: 0 0 32px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    gap: 8px;
    font-size: 14px;
    color: var(--color-indigo);

    p {
      color: inherit;
    }
  }
</style>