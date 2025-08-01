<script setup>

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Grid } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/grid'

const dataValue = [
  {
    title: 'Ноу-хау',
    text: 'DEKA внесла решающий вклад в строительство парадигмы знаний лазерной техники: совокупность приобретенных ноу-хау в распоряжение всего научного сообщества для ускорения прогресса человечества.',
  },
  {
    title: 'Научные исследования',
    text: 'Исследователи DEKA постоянно принимают участие в важных национальных и международных научно-исследовательских проектах, сотрудничают со всемирно известными научными центрами и университетами.',
  },
  {
    title: 'Инновации',
    text: 'DEKA обеспечивает безопасные и эффективные методы лечения с существенным сокращением времени восстановления.',
  },
  {
    title: 'Люди',
    text: 'История компании DEKA это история великих людей и их идей, которые принесли огромную пользу для жизни пациентов и науки в целом.',
  },
  {
    title: 'Сертификация',
    text: 'Благодаря клиническим экспериментам в Италии, Европе, США, Латинской Америке и Японии, сертификаты DEKA удостоверяют терапевтическую эффективность лечения лазером.',
  },
  {
    title: 'Обучение',
    text: 'Встречи, семинары, мастер-классы и вебинары позволяют нам расширять знания врачей и деловых партнеров о лазерных технологиях DEKA.',
  },
  {
    title: 'Этика',
    text: 'Приняв этическую философию, ориентированную на здоровье, успехе и благосостоянии пациентов, DEKA разрабатывает свои системы для обеспечения максимальной эффективности лечения.',
  },
  {
    title: 'Сообщество',
    text: 'DEKA создала как реальное, так и виртуальное сообщество, где знания всегда доступны для всех.',
  },
  {
    title: 'Мультикультурность',
    text: 'DEKA разрушает географические и языковые барьеры, используя универсальные сообщения и коды.',
  },
  {
    title: 'Будущее',
    text: 'Инновации, знания и команда талантливых высококвалифицированных сотрудников - основа будущего компании DEKA.',
  },
]
</script>

<template>
  <div class="container">
    <b class="block text-[26px] mb-12 text-center text-indigo">
      Ключевые ценности DEKA отражают принципы и характеристики компании, а также ее уникальную идентичность во всем мире.
    </b>

    <!-- Для мобилы: Swiper -->
    <div class="block md:hidden">
      <Swiper
        :slides-per-view="1.2"
        space-between="12"
        class="!pb-8"
      >
        <SwiperSlide v-for="card in dataValue" :key="card.title">
          <div class="value-card">
            <b>{{ card.title }}</b>
            <span class="value-text">{{ card.text }}</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

    <!-- Для десктопа: статичная сетка -->
    <div class="hidden md:flex flex-wrap justify-center gap-4">
      <div v-for="card in dataValue" :key="card.title" class="value-card">
        <b>{{ card.title }}</b>
        <span class="value-text">{{ card.text }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>

.swiper-slide-equal-height {
  height: auto;
  display: flex;
}
.value-card {
  height: 280px;
  max-width: 370px;
  padding: 26px 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 26px;
  background: var(--color-indigo);
  color: white;

  b {
    font-size: 26px;
  }

  .value-text {
    font-size: 14px;
  }

}
</style>