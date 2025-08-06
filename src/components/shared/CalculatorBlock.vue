<script setup lang="ts">
import { ref } from 'vue'

const equipment = ref('')
const proceduresPerDay = ref(3)

const rent = ref(30000)
const salary = ref(60000)
const sessionCost = ref(3000)
const masterPercent = ref(3)

// Диапазоны
const rentRange = { min: 10000, max: 100000, step: 1000 }
const salaryRange = { min: 20000, max: 200000, step: 1000 }
const sessionCostRange = { min: 500, max: 10000, step: 100 }
const percentRange = { min: 0, max: 100, step: 1 }

const increment = () => proceduresPerDay.value++
const decrement = () => {
  if (proceduresPerDay.value > 1) proceduresPerDay.value--
}
</script>

<template>
  <div class="p-6 sm:p-24 w-full min-h-[435px] mx-auto relative 
  bg-[url('/image/calculator/mobile.png')] bg-no-repeat bg-cover bg-center 
  md:bg-[url('/image/calculator/background.svg')]">

    <div class="grid grid-cols-2 sm:grid-cols-3 gap-6">
      <!-- Оборудование -->
      <div class="order-1">
        <label class="block mb-2 text-sm max-md:text-[10px] text-gray-700 max-md:max-w-[15ch]">Выберите оборудование</label>
        <input
          v-model="equipment"
          placeholder="Название"
          class="w-full bg-[#EEF1F7] rounded-full px-4 py-4 max-md:px-2 max-md:py-2 text-center text-sm focus:outline-none"
        />
      </div>

      <!-- Кол-во процедур -->
      <div class="order-2">
        <label class="block mb-2 text-sm max-md:text-[10px] text-gray-700 max-md:max-w-[15ch]">Количество процедур в день</label>
        <div class="flex items-center justify-between bg-[#EEF1F7] rounded-full px-4 py-4 max-md:px-2 max-md:py-2 ">
          <span class="text-sm font-medium">{{ proceduresPerDay }}</span>
          <div class="flex space-x-2">
            <button
              @click="decrement"
              class="bg-[#1C1C3F] text-white w-6 h-6 flex items-center justify-center rounded"
            >-</button>
            <button
              @click="increment"
              class="bg-[#1C1C3F] text-white w-6 h-6 flex items-center justify-center rounded"
            >+</button>
          </div>
        </div>
      </div>

      <!-- Аренда -->
      <div class="order-3">
        <label class="block mb-2 text-sm max-md:text-[10px] text-gray-700 max-md:max-w-[16ch]">Аренда помещения в месяц</label>
        <div class="bg-[#EEF1F7] rounded-full px-4 py-4 max-md:px-2 max-md:py-2 text-center text-sm font-medium mb-2">
          {{ rent.toLocaleString('ru-RU') }} ₽
        </div>
        <input type="range" v-model="rent" v-bind="rentRange" class="w-full accent-indigo border-none outline-none" />
      </div>

      <!-- Зарплата -->
      <div class="order-4">
        <label class="block mb-2 text-sm max-md:text-[10px] text-gray-700 max-md:max-w-[12ch]">Зарплатный фонд в месяц</label>
        <div class="bg-[#EEF1F7] rounded-full px-4 py-4 max-md:px-2 max-md:py-2 text-center text-sm font-medium mb-2">
          {{ salary.toLocaleString('ru-RU') }} ₽
        </div>
        <input type="range" v-model="salary" v-bind="salaryRange" class="w-full accent-[#1C1C3F]" />
      </div>

      <!-- Стоимость сессии -->
      <div class="order-5">
        <label class="block mb-2 text-sm max-md:text-[10px] text-gray-700 max-md:max-w-[15ch]">Средняя стоимость сессии</label>
        <div class="bg-[#EEF1F7] rounded-full px-4 py-4 max-md:px-2 max-md:py-2 text-center text-sm font-medium mb-2">
          {{ sessionCost.toLocaleString('ru-RU') }} ₽
        </div>
        <input type="range" v-model="sessionCost" v-bind="sessionCostRange" class="w-full accent-[#1C1C3F]" />
      </div>

      <!-- Процент мастера -->
      <div class="order-6">
        <label class="block mb-2 text-sm max-md:text-[10px] text-gray-700 max-md:max-w-[5ch]">Процент мастера</label>
        <div class="bg-[#EEF1F7] rounded-full px-4 py-4 max-md:px-2 max-md:py-2 text-center text-sm font-medium mb-2">
          {{ masterPercent }}%
        </div>
        <input type="range" v-model="masterPercent" v-bind="percentRange" class="w-full accent-[#1C1C3F]" />
      </div>
    </div>

    <!-- Кнопка -->
    <div class="absolute bottom-0 right-[100px] max-md:right-0 max-md:left-0 text-center">
      <a
        href="#"
        class="inline-block bg-[#1C1C3F] text-white rounded-full px-6 py-3 text-sm font-medium hover:opacity-90 transition max-md:py-1.5 max-md:text-xs"
      >
        Получить расчёт окупаемости
      </a>
    </div>
  </div>
</template>