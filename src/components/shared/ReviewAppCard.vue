<script setup>
defineProps({
  logo: String
})
</script>

<template>
  <div class="card">
    <img :src="logo" alt="" class="card-logo">
    <div class="card-stars">
      <img src="/image/shared/stars.png" alt="">
    </div>
    <div class="card-button">
      Читать
    </div>
  </div>
</template>

<style scoped>
  .card {
    position: relative;
    width: 180px;
    height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 13px 40px;
    background: white;
    border-radius: 45px;

    @media (max-width: 676px) {
      width: 150px;
      height: 90px;
      padding: 10px 30px;
      border-radius: 24px;
    }

    .card-logo {
      position: absolute;
      top: -23px;
    }

    .card-stars {
      margin-top: 20px;
      margin-bottom: 15px;

      @media (max-width: 676px) {
        margin: 15px 0 10px
      }
    }

    .card-button {
      padding: 8px 19px;
      border: 1px solid var(--color-indigo);
      border-radius: 60px;
      font-size: 13px;
      cursor: pointer;

      @media (max-width: 676px) {
        padding: 4px 12px;
      }
    }
  }
</style>