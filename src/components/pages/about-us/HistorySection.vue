<script setup>

import { Swiper, SwiperSlide } from "swiper/vue";
import 'swiper/css';

const dataFacts = [
  {
    year: '1983 год',
    text: 'на рынке появился первый CO2-лазер производства DEKA. С этого момента компания проводит активную исследовательскую работу, открывая свои институты и лаборатории по всему миру и принимая активное участие в клинических исследованиях.',
  },
  {
    year: '1998 год',
    text: 'DEKA первой в мире предложила технологию использования длинноимпульсных Nd:YAG-лазеров.',
  },
  {
    year: '1999 год',
    text: 'была разработана и запатентована световая методика UPL.2000 год – специалисты DEKA создали и запатентовали технологию SmartLipo (лазерный липолиз – секрет «голливудской фигуры»).',
  },
]
</script>

<template>
  <div class="container">
    <div class="history-content">
      <div class="history-title">
        <b>
          DEKA M.E.L.A. s.r.l. Italy – это медицинская группа, которая входит в концерн El.En. Group. Основана во Флоренции (Италия) в 1981 году.
        </b>
      </div>
      <div class="history-description">
        <span>
          Такое название компании было выбрано не случайно. «Дека» в переводе с греческого означает число 10, которое, как считал Пифагор, является числом совершенства. Называя таким образом свой бренд, компания DEKA подчеркнула свое стремление к совершенству, как концептуальную основу деятельности.
          Корпоративная культура знаменитой флорентийской компании основывается на глобальных ценностях: DEKA стремится, чтобы каждое научное открытие было полезным для человечества, внедряя все технологические инновации в свои продукты и услуги. Такое глубокое культурное наполнение бренда отобразилось во всем дальнейшем его развитии. Высокая внутренняя идея и применение инновационных научных подходов позволили компании стать мировым лидером в области лазерных технологий.
          История лазерных технологий неразрывно связана с компанией DEKA, которая начала свою деятельность с разработки электроники для лазерных систем.
        </span>
      </div>
    </div>

    <div class="my-12">
      <Swiper
        :slides-per-view="1.2"
        space-between="32"
        :centered-slides="false"
        :breakpoints="{
          800: {
            slidesPerView: 3,
          }
        }"
      >
        <SwiperSlide v-for="card in dataFacts" class="swiper-slide-equal-height">
          <div class="history-fact">
            <b>
              {{ card.year }}
            </b>
            <div>
              <span class="history-text">
                {{ card.text }}
              </span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

    <div class="text-center ">
      <span>
        Спустя некоторое время были разработаны лазеры Er:YAG и Ho:YAG, александритовый лазер, лазер на красителях, светодиодный лазер, а также эксимерная система. Наладив собственное производство электроники и оптики, DEKA создала широкую линейку высокотехнологичных лазеров, благодаря чему стала мировым лидером в производстве систем импульсного света и лазеров.
      </span>
    </div>
  </div>
</template>

<style scoped>
.history-content {
  display: flex;
  justify-content: space-between;
  gap: 32px;
  color: var(--color-indigo);

  .history-title {
    width: 35%;
    font-size: 26px;
    text-align: end;
  }
  .history-description {
    width: 65%;
  }

  @media (max-width: 676px) {
    flex-direction: column;

    .history-title {
      width: 100%;
      text-align: left;
    }

    .history-description {
      width: 100%;
    }
  }
}

.swiper-slide-equal-height {
  height: auto;
  display: flex;
}

.history-fact {
  max-width: 400px;
  padding: 26px 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 26px;
  background: white;
  color: var(--color-indigo);
  height: 100%;

  b {
    font-size: 26px;
  }

  .history-text {
    font-size: 14px;
  }
}
</style>