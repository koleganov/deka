<script setup>
import { ref } from 'vue'
import EquipmentCard from "../../shared/EquipmentCard.vue";
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Grid, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/pagination'

// Список фильтров
const filterItems = [
  'Все',
  'эпиляция',
  'омоложение',
  'лечение акне',
  'Доп. оборудование'
]
const activeFilter = ref('Все')

function setActiveFilter(item) {
  activeFilter.value = item
}
</script>

<template>
  <div class="container">
    <div class="filter">
      <ul class="filter-list">
        <li
          v-for="item in filterItems"
          :key="item"
          class="filter-item"
          :class="{ active: activeFilter === item }"
          @click="setActiveFilter(item)"
        >
          {{ item }}
        </li>
      </ul>
    </div>

    <div class="equipment">
      <Swiper
        :modules="[Grid, Pagination]"
        :slides-per-view="3"
        :grid="{ rows: 3, fill: 'row' }"
        space-between="12"
        :pagination="{
          clickable: true,
          type: 'fraction' // вместо точек будет 1/10
        }"
        :breakpoints="{
              320: {
            slidesPerView: 1,
            grid: { rows: 3 },
            spaceBetween: 8
          },
          640: {
            slidesPerView: 2,
            grid: { rows: 3 },
            spaceBetween: 12
          },
           1024: {
            slidesPerView: 3,
            grid: { rows: 3 },
            spaceBetween: 16
          }
        }"
        class="!pb-20"
      >
        <SwiperSlide v-for="card in 40" :key="card.id">
          <div class="flex justify-center items-center">
            <EquipmentCard :data="card" />

          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<style scoped>
  .filter {
    .filter-list {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 6px;

      .filter-item {
        padding: 16px 32px;
        border: 1px solid transparent;
        border-radius: 100px;
        font-size: 18px;
        text-transform: uppercase;
        color: var(--color-indigo);
        background: #EDECEE;
        transition: 0.3s;
        cursor: pointer;

        &:hover {
          border: 1px solid var(--color-indigo);
        }

        @media (max-width: 676px) {
          padding: 8px 16px;
          border-radius: 100px;
          font-size: 15px;
        }
      }

      .active {
        background-color: var(--color-indigo);
        color: white;
      }
    }
  }

  .equipment {
    padding: 42px 0;
  }
  :deep(.swiper-slide) {
    margin-bottom: 12px;
    align-items: flex-start;
  }

  ::v-deep(.swiper-pagination) {
    color: var(--color-indigo);
    font-size: 18px;
  }
</style>