<script setup>

import YoutubeLogo from "../../../assets/logos/YoutubeLogo.vue";
import InstagramLogo from "../../../assets/logos/InstagramLogo.vue";
import FacebookLogo from "../../../assets/logos/FacebookLogo.vue";
import WhatsAppLogo from "../../../assets/logos/WhatsAppLogo.vue";
import TelegramLogo from "../../../assets/logos/TelegramLogo.vue";
</script>

<template>
  <div class="container">
    <div class="footer">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 text-[#1A1A1A] text-sm items-start">

        <!-- Колонка 1 -->
        <div class="flex flex-col">
          <!-- Адрес -->
          <div class="flex flex-col mb-6 md:h-20">
            <b class="mb-2">АДРЕС</b>
            <span>050058 Казахстан, ул.<br>Амангельды 23/137</span>
          </div>

          <!-- Связаться с нами -->
          <div class="flex flex-col mb-6 md:mb-6">
            <b class="mb-2">СВЯЗАТЬСЯ С НАМИ</b>
            <span>+7 701 0373777</span>
            <span>info@dekalaser.kz</span>
          </div>
        </div>

        <!-- Колонка 2 -->
        <div class="flex flex-col">
          <!-- Сервис -->
          <div class="flex flex-col mb-6 md:h-20">
            <b class="mb-2">СЕРВИС</b>
            <span>Номер телефона</span>
          </div>

          <!-- Отдел контроля качества -->
          <div class="flex flex-col mb-6">
            <b class="mb-2">ОТДЕЛ КОНТРОЛЯ КАЧЕСТВА</b>
            <span>Номер телефона</span>
          </div>
        </div>

        <!-- Колонка 3 -->
        <div class="flex flex-col">
          <!-- Отдел продаж -->
          <div class="flex flex-col mb-6">
            <b class="mb-2">ОТДЕЛ ПРОДАЖ</b>
            <div class="grid grid-cols-1 md:grid-cols-1 gap-2">
              <div>
                <div><span>Номер телефона</span></div>
                <div><span>Фио</span></div>
              </div>
              <div>
                <div><span>Номер телефона</span></div>
                <div><span>Фио</span></div>
              </div>
              <div>
                <div><span>Номер телефона</span></div>
                <div><span>Фио</span></div>
              </div>
              <div>
                <div><span>Номер телефона</span></div>
                <div><span>Фио</span></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Колонка 4 -->
        <div class="flex flex-col">
          <!-- Соцсети -->
          <div class="flex flex-col mb-6">
            <b class="mb-2">СОЦСЕТИ</b>
            <ul class="header-social">
              <li>
                <a href="">
                  <WhatsAppLogo/>
                </a>
              </li>
              <li>
                <a href="">
                  <TelegramLogo/>
                </a>
              </li>
              <li>
                <a href="">
                  <YoutubeLogo/>
                </a>
              </li>
              <li>
                <a href="">
                  <FacebookLogo/>
                </a>
              </li>
              <li>
                <a href="">
                  <InstagramLogo/>
                </a>
              </li>
            </ul>
          </div>

          <!-- Юридические данные -->
          <div class="flex flex-col mb-6">
            <b class="mb-2">ЮРИДИЧЕСКИЕ ДАННЫЕ</b>
            <span>ООО «Deka». 2025 год</span>
            <span>ИНН</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .footer {
    b {
      color: var(--color-indigo);
    }
    span {
      color: var(--color-indigo);
    }
  }

  .header-social {
    display: flex;
    gap: 8px;

    li {
      transition: 0.3s;
      &:hover {
        transform: scale(1.2)
      }
    }
  }
</style>