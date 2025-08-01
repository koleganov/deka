<script setup>

const data = [
  {title: 'Обучение', subtitle: 'Информация', srcImg: '/image/services/service1.png',},
  {title: 'Сервисное обслуживание', subtitle: 'ИнформацияИнформацияИнформацияИнформацияИнформацияИнформацияИнформацияИнформация', srcImg: '/image/services/service2.png',},
  {title: 'Консультации по выбору оборудования', subtitle: 'Информация', srcImg: '/image/services/service3.png',},
]

</script>

<template>
  <div class="container">
    <div class="info">
      <div class="info-main-block">
        <img src="/image/services/hero.png" alt="service-photo">
      </div>
      <div class="info-service-blocks">
        <div v-for="block in data" class="service-block">
          <div class="service-block-image">
            <img :src="block.srcImg" alt="catalogue-items">
          </div>
          <div class="flex flex-col">
            <b>
              {{ block.title }}
            </b>
            <p>
            {{ block.subtitle }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .info {
    .info-main-block {
      margin-bottom: 52px;
    }

    .info-service-blocks {
      display: flex;
      justify-content: space-between;
      gap: 16px;
      color: var(--color-indigo);

      @media (max-width: 676px) {
        justify-content: center;
        flex-wrap: wrap;
      }

      .service-block {
        flex: 0 1 400px;
        max-width: 400px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        padding: 18px 18px 36px 18px;
        border-radius: 14px;
        background: white;
        word-break: break-word;
        white-space: normal;

        .service-block-image {
          overflow: hidden;
          border-radius: 7px;
          img {
            width: 100%;
            min-height: 200px;
            object-fit: cover;
            transition: 0.3s;

            &:hover {
              transform: scale(1.1);
            }
          }
        }
      }
    }
  }
</style>