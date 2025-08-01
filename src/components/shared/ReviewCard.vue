<script setup>

import PlayIcon from "../../assets/icons/PlayIcon.vue";
</script>

<template>
  <div class="review-card">
    <PlayIcon class="card-icon"/>
    <div class="card-info">
      <b>Фио</b>
      <p>Должность</p>
    </div>
  </div>
</template>

<style scoped>
  .review-card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 370px;
    min-width: 270px;
    max-width: 370px;
    background-image: url("/image/shared/review-card-bg.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center center;

    .card-icon {
      flex: 1 1 auto;
      position: relative;
      top: 40px;
      cursor: pointer;

      @media (max-width: 676px) {
        top: 0;
      }
    }

    .card-info {
      width: 100%;
      padding-left: 40px;
      padding-bottom: 40px;
      color: white;

      b {
        font-size: 19px;
        font-weight: 500;
      }

      p {
        font-size: 12px;
        color: white;
      }
    }

    @media (max-width: 676px) {
      .card-info {
        display: none;
      }
    }
  }
</style>