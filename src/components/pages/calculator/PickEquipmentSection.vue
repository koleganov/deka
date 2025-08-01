<script setup>

import DoneIcon from "../../../assets/icons/DoneIcon.vue";
</script>

<template>
  <div class="pick-equipment">
    <div class="text-center">
      <p class="title mb-6 !font-extralight">Выбор оборудования</p>
      <p class="max-w-[340px] mb-16 max-md:mb-8 mx-auto">Узнайте, почему диодный лазер - лучший выбор для долгосрочных результатов</p>
    </div>
    <div class="container">

        <div class="flex flex-col md:flex-row gap-6">
          <!-- Левая большая карточка -->
          <div class="flex flex-col md:flex-row bg-[#2A224A] text-white rounded-2xl py-12 px-6 flex-1 max-md:py-6 max-md:flex-col max-md:items-center">
            <div class="w-[40%] bg-center bg-no-repeat bg-contain mr-4 max-md:h-40 max-md:w-full"
                 style="background-image: url('/image/shared/item.png')">
            </div>
            <div class="flex flex-col justify-between items-stretch">
              <div>
                <h2 class="text-4xl font-semibold mb-6 max-md:text-[22px] max-md:mb-4">Название</h2>
                <p class="!text-white mb-6 text-sm max-md:mb-4">Оптимален для всех типов кожи и волос</p>
                <ul class="space-y-2 text-xs">
                  <li class="flex items-start gap-2 mb-6 max-md:mb-4"><DoneIcon class="flex-shrink-0" />Подходит для всех типов кожи, включая смуглую</li>
                  <li class="flex items-start gap-2 mb-6 max-md:mb-4"><DoneIcon class="flex-shrink-0" />Процедуры комфортные и практически безболезненные</li>
                  <li class="flex items-start gap-2 mb-6 max-md:mb-4"><DoneIcon class="flex-shrink-0" />Обеспечивает долговременные результаты</li>
                  <li class="flex items-start gap-2 mb-6 max-md:mb-4"><DoneIcon class="flex-shrink-0" />Требует профессиональных навыков для работы</li>
                </ul>
              </div>
              <RouterLink to="/catalogue" class="mt-6 bg-white text-[#2A224A] font-medium px-4 py-2 rounded-full self-start text-xs hover:bg-[#3D336B] hover:text-white transition">
                Перейти в каталог
              </RouterLink>
            </div>
          </div>

          <!-- Правая колонка с двумя карточками -->
          <div class="flex flex-col gap-6 flex-[0.9]">
            <div class="bg-[#2A224A] text-white rounded-2xl p-6 flex max-md:flex-col max-md:items-center">
              <div class="w-[35%] bg-center bg-no-repeat bg-contain mr-4 max-md:h-40 max-md:w-full"
                   style="background-image: url('/image/shared/item.png')">
              </div>
              <div>
                <h2 class="text-lg font-semibold mb-2 max-md:text-[22px] max-md:mb-4">Название</h2>
                <p class="!text-white mb-2 text-xs max-md:mb-4">Эффективно удаляет тёмные волосы, но ограничен типом кожи</p>
                <ul class="space-y-2 text-xs">
                  <li class="flex items-start gap-2 max-md:mb-4"><DoneIcon class="flex-shrink-0" />Эффективен на светлой коже с тёмными волосами</li>
                  <li class="flex items-start gap-2 max-md:mb-4"><DoneIcon class="flex-shrink-0" />Неприятные ощущения, особенно при интенсивных настройках</li>
                  <li class="flex items-start gap-2 max-md:mb-4"><DoneIcon class="flex-shrink-0" />Менее эффективен для смуглой или загорелой кожи</li>
                  <li class="flex items-start gap-2 max-md:mb-4"><DoneIcon class="flex-shrink-0" />Требует профессиональных навыков для работы</li>
                </ul>
              </div>
            </div>

            <div class="bg-[#2A224A] text-white rounded-2xl p-6 flex max-md:flex-col max-md:items-center">
              <div class="w-[35%] bg-center bg-no-repeat bg-contain mr-4 max-md:h-40 max-md:w-full"
                   style="background-image: url('/image/shared/item.png')">
              </div>
              <div>
                <h2 class="text-lg font-semibold mb-1 max-md:text-[22px] max-md:mb-4">Название</h2>
                <p class="!text-white mb-3 text-xs max-md:mb-4">Отличается доступностью, но результаты кратковременные</p>
                <ul class="space-y-2 text-xs">
                  <li class="flex items-start gap-2 max-md:mb-4"><DoneIcon class="flex-shrink-0" />Низкая стоимость</li>
                  <li class="flex items-start gap-2 max-md:mb-4"><DoneIcon class="flex-shrink-0" />Воздействует только на поверхность волос</li>
                  <li class="flex items-start gap-2 max-md:mb-4"><DoneIcon class="flex-shrink-0" />Не подходит для тёмной или загорелой кожи</li>
                  <li class="flex items-start gap-2 max-md:mb-4"><DoneIcon class="flex-shrink-0" />Требует частых повторных сеансов для эффективности</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<style scoped>

.equips {
  max-width: 1000px;
  display: flex;
  gap: 8px;

  .equips-large {
    .equip-item {
      display: flex;
      gap: 8px;
      padding: 48px 24px;
      border-radius: 22px;
      background-color: #2A224A;
      color: white;
      background-image: url("/image/shared/item.png");
      background-repeat: no-repeat;
      background-position: calc(0% - 40px) center;
      background-size: 66%;

      .equip-title {
        margin-bottom: 15px;
        font-size: 28px;
        font-weight: 700;
        color: white;
      }

      .equip-description {
        display: inline-block;
        margin-bottom: 20px;
        font-size: 14px;
      }

      .equip-list {
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin-bottom: 60px;
        font-size: 12px;

        .equip-points {
          display: flex;
          align-items: center;
          gap: 8px;
        }
      }

      .equip-button {
        display: inline-block;
        padding: 8px 18px;
        background: white;
        border-radius: 60px;
        color: var(--color-indigo);
        transition: 0.3s;
        font-size: 13px;
        font-weight: 600;

        &:hover {
          background: var(--color-indigo);
          color: white;
        }
      }
    }
  }
  .equips-small {
    .equip-item {
      display: flex;
      gap: 8px;
      padding: 48px 24px;
      border-radius: 22px;
      background-color: #2A224A;
      color: white;
      background-image: url("/image/shared/item.png");
      background-repeat: no-repeat;
      background-position: calc(0% - 40px) center;
      background-size: 66%;

      .equip-title {
        margin-bottom: 15px;
        font-size: 18px;
        font-weight: 700;
        color: white;
      }

      .equip-description {
        display: inline-block;
        margin-bottom: 20px;
        font-size: 11px;
      }

      .equip-list {
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin-bottom: 60px;
        font-size: 12px;

        .equip-points {
          display: flex;
          align-items: center;
          gap: 8px;
        }
      }
    }
  }
}
.bg-image {
  height: 100%;
  width: 35%;
  background-image: url("/image/shared/item.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>