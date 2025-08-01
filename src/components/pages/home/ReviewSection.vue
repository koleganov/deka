<script setup>

import ReviewCard from "../../shared/ReviewCard.vue";
import {Swiper, SwiperSlide} from "swiper/vue";
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import {onMounted, ref} from "vue";
import ReviewAppCard from "../../shared/ReviewAppCard.vue";

const isMobile = ref(false)

const dataCardApps = ref([
  '/image/shared/yandex.png',
  '/image/shared/2gis.png',
  '/image/shared/zoon.png',
])

onMounted(() => {
  isMobile.value = window.innerWidth <= 768
})
</script>

<template>
  <div class="container">
    <p class="title max-md:text-[19px] max-md:mb-1">
      ОТЗЫВЫ КЛИЕНТОВ
    </p>
    <p class="text-center mb-4 max-md:text-[12px]">
      Что наши клиенты говорят о нас
    </p>
    <div class="review">
      <Swiper
        v-if="isMobile"
        :slides-per-view="1"
        :centered-slides="true"
        :modules="[Pagination]"
        :space-between="8"
        :pagination="{ clickable: true }"
        :breakpoints="{
          580: {
            slidesPerView: 2,
            centeredSlides: false
          },
        }"
        class="!pb-10"
      >
        <SwiperSlide
          v-for="item in 4"
          :key="item.id"
        >
          <div class="flex justify-center items-center">
            <ReviewCard />
          </div>
        </SwiperSlide>
      </Swiper>

      <ReviewCard
        v-else
        v-for="item in 4"
        :key="item.id"
      />
    </div>
    <div class="review-apps">
      <ReviewAppCard v-for="app in dataCardApps" :logo="app"/>
    </div>
  </div>
</template>

<style scoped>
  .review {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 80px;

    @media (max-width: 676px) {
      margin-bottom: 40px;
    }
  }

  .review-apps {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    row-gap: 30px;
    flex-wrap: wrap;
  }

  ::v-deep(.swiper-pagination-bullet) {
    border: 1px solid #909090;
    background-color: transparent;
  }

  /* активная точка */
  ::v-deep(.swiper-pagination-bullet-active) {
    background-color: #909090;
  }
</style>