<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const data = [
  {
    id: 1,
    srcImg: '/image/home/hero.png'
  },
  {
    id: 2,
    srcImg: '/image/home/hero.png'
  },
  {
    id: 3,
    srcImg: '/image/home/hero.png'
  },
  {
    id: 4,
    srcImg: '/image/home/hero.png'
  },
]
</script>

<template>
  <div class="space-section !pt-0">

    <Swiper
      :slides-per-view="1"
      :modules="[Pagination]"
      :pagination="{ clickable: true }"
    >
      <SwiperSlide
        v-for="item in data"
        :key="item.id"
      >
        <div class="w-full h-[60vh] bg-no-repeat bg-cover bg-center" style="background-image: url('/image/home/hero.png');"></div>
      </SwiperSlide>
      <div class="custom-pagination" />
    </Swiper>

    <div class="container mt-10 max-md:mt-6">
      <p class="title mb-5 max-md:!text-left">
        СОВРЕМЕННОЕ ЛАЗЕРНОЕ ОБОРУДОВАНИЕ ДЛЯ КРАСОТЫ И ЖЕНСКОГО ЗДОРОВЬЯ
      </p>
      <p class="subtitle">
        Уже 30 лет DEKA создает новые медицинские лазерные системы и новые методы лечения. Улучшение работы врачей и улучшение самочувствия их пациентов – это, как и прежде, главная забота компании. История DEKA начинается в начале 90-х. Это история трех десятилетий исследований и инноваций с участием ведуших специалистов, которые принесли реальную пользу врачам и пациентам во всем мире. Присутствуя более чем в 120 странах, DEKA всегда была эпицентром инноваций для всего мирового медицинского сектора: беспрецедентные приложения и системы для медицины, хирургии и эстетической дерматологии.
      </p>
    </div>
  </div>
</template>

<style scoped>

::v-deep(.swiper-pagination-bullet) {
  border: 1px solid white;
  background-color: transparent;
}

/* активная точка */
::v-deep(.swiper-pagination-bullet-active) {
  background-color: white;
}
</style>