<script setup>

import CalculatorBlock from "../../shared/CalculatorBlock.vue";
</script>

<template>
  <div class="container">
    <div class="md:flex md:justify-center md:items-center gap-[100px] mb-6">
      <p class="title inline-block w-1/2">ОКУПАЕМОСТЬ</p>
      <span class="w-1/2 text-indigo max-md:hidden max-w-[381px]">
        Узнайте, когда бизнес начнет приносить прибыль
        и получите подробный чек-лист
      </span>
    </div>
    <CalculatorBlock/>
  </div>
</template>

<style scoped>

</style>