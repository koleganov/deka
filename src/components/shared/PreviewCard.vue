<script setup>

import InfinityIcon from "../../assets/icons/InfinityIcon.vue";
import ShareIcon from "../../assets/icons/ShareIcon.vue";
import ModeIcon from "../../assets/icons/ModeIcon.vue";

defineProps({
  large: Boolean,
})
</script>

<template>
  <div class="card">
    <div class="card-content">
      <p class="card-title">
        SMARTXIDE <br> PUNTO
      </p>
      <p
        v-if="!large"
        class="card-subtitle"
      >
        Краткое описание
      </p>
      <div
        v-if="!large"
        class="card-info"
      >
        <InfinityIcon/>
        <span>
          количество вспышек
        </span>
      </div>
      <div
        v-if="large"
        class="card-large"
      >
        <p class="large-title">
          Информация
        </p>
        <div
          class="flex gap-4 mb-6"
        >
          <div
            v-for="item in 2"
            :key="item"
            class="flex flex-col gap-2"
          >
            <div class="flex gap-2">
              <ModeIcon/>
              <span class="text-xs font-medium">Режим</span>
            </div>
            <p class="!text-gray text-xs">
              Информация
            </p>
            <div class="card-info">
              <InfinityIcon/>
              <span>
                количество вспышек
              </span>
            </div>
          </div>
        </div>
        <div class="large-buttons">
          <div
            v-for="item in 4"
            class="large-button"
          >
            Информация
          </div>
        </div>
      </div>
      <img v-if="large" src="/garant.png" alt="garant" class="garant">
      <ShareIcon class="share-icon"/>
    </div>
    <div class="card-button">
      <a href="">
        Подробнее
      </a>
    </div>
  </div>
</template>

<style scoped>
  .card {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 370px;
    min-width: 287px;
    padding: 8px;
    border-radius: 67px;
    background: white;

    @media (max-width: 676px) {
      min-width: 187px;
      min-height: 283px;
      flex: 1 1 auto;
      border-radius: 42px;
    }

    .card-content {
      position: relative;
      flex: 1 1 auto;
      width: 100%;
      padding: 16px 38px;
      border-radius: 62px;
      background-color: #EEEEEE;
      background-image: url("/image/shared/item.png");
      background-repeat: no-repeat;
      background-size: 60%;
      background-position: calc(100% + 20px) center;

      @media (max-width: 676px) {
        padding: 11px 24px;
        background-size: 110%;
        background-position: calc(100% + 50px) bottom;
        border-radius: 40px;
      }

      .card-title {
        margin-bottom: 8px;
        font-size: 18px;
        line-height: 1.1;
        font-weight: 900;

        @media (max-width: 676px) {
          font-size: 12px;
        }
      }

      .card-subtitle {
        margin-bottom: 8px;
        font-size: 11px;
        color: var(--color-gray);

        @media (max-width: 676px) {
          font-size: 8px;
        }
      }

      .card-info {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 11px;
        color: var(--color-gray);

        @media (max-width: 676px) {
          font-size: 8px;
        }
      }
      
      .share-icon {
        position: absolute;
        right: -5px;
        bottom: -5px;
        transition: 0.2s ease;
        cursor: pointer;

        &:hover {
          transform: rotate(45deg);
        }

        @media (max-width: 676px) {
          transform: scale(0.8);
        }
      }

      .card-large {
        min-width: 450px;
        margin-top: 32px;
        margin-bottom: 32px;
        color: var(--color-gray);

        @media (max-width: 676px) {
          min-width: 300px;
        }

        .large-title {
          margin-bottom: 12px;
          text-transform: uppercase;
          color: var(--color-gray);
        }

        .large-buttons {
          max-width: 280px;
          display: flex;
          flex-wrap: wrap;
          column-gap: 6px;
          row-gap: 10px;
          font-size: 12px;

          .large-button {
            width: 100px;
            padding: 4px 10px;
            text-align: center;
            border: 1px solid #909090;
            border-radius: 100px;

            @media (max-width: 676px) {
              width: 40%;
            }
          }

          @media (max-width: 676px) {
            max-width: 190px;
            font-size: 8px;
          }
        }
      }

      .garant {
        position: absolute;
        bottom: -50px;
      }
    }
    .card-button {
      margin-top: 34px;
      margin-bottom: 12px;

      @media (max-width: 676px) {
        margin-top: 20px;
        margin-bottom: 8px;
      }

      a {
        padding: 8px 18px;
        border: 2px solid var(--color-indigo);
        border-radius: 60px;
        font-size: 15px;
        font-weight: 500;
        color: #fff;
        background: var(--color-indigo);
        transition: 0.3s;

        &:hover {
          border: 2px solid var(--color-indigo);
          background: transparent;
          color: var(--color-indigo);
        }
        @media (max-width: 676px) {
          padding: 4px 12px;
          font-size: 8px;
        }
      }
    }
  }
</style>