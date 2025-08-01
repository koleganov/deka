<script setup>
import { ref } from 'vue'


const form = ref({
  name: '',
  phone: '',
  email: '',
})
</script>

<template>
  <div class="feedback">
    <div class="feedback-text">
      <p class="feedback-title">Остались вопросы?</p>
      <p class="feedback-subtitle">
        Оставьте свои контакты и мы свяжемся с вами
        в течение 5 минут в рабочее время
      </p>
    </div>
    <form class="feedback-form">
      <div class="flex gap-2">
        <input
          v-model="form.name"
          type="text"
          placeholder="Ваше имя"
          class="w-1/2"
        />
        <input
          v-model="form.phone"
          type="text"
          placeholder="Ваш телефон"
          class="w-1/2"
        />
      </div>
      <input
        v-model="form.email"
        type="email"
        placeholder="Email"
      />
    </form>
    <button class="feedback-button">
      Отправить
    </button>
  </div>
</template>

<style scoped>
  .feedback {
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    align-items: flex-end;
    gap: 54px;

    @media (max-width: 676px) {
      max-width: 400px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
    }

    .feedback-text {
      color: var(--color-indigo);

      @media (max-width: 676px) {
        text-align: center;
      }

      .feedback-title {
        font-size: 35px;
        font-weight: 500;
        line-height: 45px;
        margin-bottom: 6px;
        
        @media (max-width: 676px) {
          font-size: 19px;
          line-height: 1.2;
        }
      }

      .feedback-subtitle {
        font-size: 13px;
        line-height: 1.2;

        @media (max-width: 676px) {
          font-size: 12px;
          max-width: 300px;
        }
      }
    }

    .feedback-form {
      max-width: 337px;
      display: flex;
      flex-direction: column;
      gap: 12px;

      input {
        padding: 5px 16px;
        border: 1px solid var(--color-indigo);
        border-radius: 60px;
        font-size: 14px;

        &::placeholder {
          text-align: center;
        }

        @media (max-width: 676px) {
          font-size: 12px;
        }
      }
    }

    .feedback-button {
      height: 33px;
      padding: 7px 18px;
      background: var(--color-indigo);
      border: 2px solid var(--color-indigo);
      border-radius: 60px;
      font-size: 14px;
      font-weight: 500;
      line-height: 1;
      color: white;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        background: transparent;
        color: var(--color-indigo);
      }
    }
  }
</style>