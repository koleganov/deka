<script setup lang="ts">
import { ref } from 'vue'
import ArrowUp from "../../assets/icons/ArrowUp.vue";

const openIndex = ref<number | null>(null)

const toggle = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}

const items = [
  {
    title: 'Чем отличаются лазеры с регистрационным удостоверением (РУ) и без него?',
    content: 'Текст ответа на вопрос о РУ...',
  },
  {
    title: 'Для чего нужен Ultra Dez?',
    content: 'Описание назначения Ultra Dez...',
  },
  {
    title: 'Почему диодный лазер Genesis приравнивают к александритовому?',
    content: 'Причины и аргументы сравнения...',
  },
]
</script>

<template>
  <div class="space-y-2">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="border-b border-gray-200"
    >
      <button
        class="w-full text-left py-4 px-2 font-medium flex justify-between items-center"
        @click="toggle(index)"
      >
        <p class="font-semibold max-md:text-[12px]">
          {{ item.title }}
        </p>
        <ArrowUp
          class="flex-shrink-0 transition-transform duration-300"
          :class="{ 'rotate-180': openIndex === index }"
        />
      </button>

      <div
        :class="[
          'px-2 text-gray-600 overflow-hidden transition-all duration-400 max-md:text-[12px]',
          openIndex === index ? 'max-h-40 pb-4 opacity-100' : 'max-h-0 opacity-0'
        ]"
      >
        {{ item.content }}
      </div>
    </div>
  </div>
</template>