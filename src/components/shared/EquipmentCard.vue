<script setup>

import TradeInIcon from "../../assets/icons/TradeInIcon.vue";
import RubleIcon from "../../assets/icons/RubleIcon.vue";
</script>

<template>
  <li class="equipment-item">
    <div class="equipment-head">
      <span class="text-[#ABAEB9]">Категория</span>
      <span class="text-[#25262B]">Гарантия</span>
    </div>
    <div class="equipment-body">
      <p class="equipment-name">
        Название
      </p>
      <p class="equipment-price">
        10000 ЦЕНА
      </p>
      <div class="equipment-info">
        <div class="flex items-center font-bold text-[12px] text-[#999999] gap-2">
          <TradeInIcon/>
          <span>TRADE-IN</span>
        </div>
        <div class="flex items-center font-bold text-[12px] text-[#999999] gap-2">
          <RubleIcon/>
          <span>РАССРОЧКА</span>
        </div>
      </div>
    </div>
    <div class="equipment-button">
      Подробнее
    </div>
  </li>
</template>

<style scoped>
  .equipment-item {
    min-height: 396px;
    width: 351px;
    padding: 22px;
    display: flex;
    flex-direction: column;
    gap: 22px;
    background-color: #fff;
    border-radius: 10px;
    background-image: url("/image/shared/item.png");
    background-repeat: no-repeat;
    background-size: 60%;
    background-position: bottom right;

    .equipment-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 13px;
    }

    .equipment-body {
      flex: 1 1 auto;

      .equipment-name {
        font-size: 32px;
        color: #25262B;
      }

      .equipment-price {
        font-size: 22px;
        color: #25262B;
      }

      .equipment-info {
        margin-top: 23px;
      }
    }

    .equipment-button {
      padding: 16px 22px;
      font-size: 15px;
      background: var(--color-indigo);
      border: 1px solid transparent;
      border-radius: 54px;
      transition: 0.3s;
      cursor: pointer;
      color: white;
      align-self: flex-start;

      &:hover {
        border: 1px solid var(--color-indigo);
        background: #EDECEE;
        color: var(--color-indigo);
      }
    }
  }
</style>