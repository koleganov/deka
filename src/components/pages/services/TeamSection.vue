<script setup>

</script>

<template>
  <div class="container">

    <p class="title2 ">
      Команда сервиса
    </p>
    <p class="mb-20 text-center text-indigo max-md:text-left max-md:mb-10">
      Всегда рядом, чтобы Ваш бизнес работал без перебоев и хлопот
    </p>
    <div class="team">
      <div v-for="card in 6" class="employee-card">
        <div class="employee-image">
          <img src="" alt="">
        </div>
        <div class="employee-info">
          <p>ФИО</p>
          <p>Должность</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .team {
    max-width: 990px;
    margin: 0 auto;
    display: grid;
    place-items: center;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 30px;

    @media (max-width: 676px) {
      grid-template-columns: 1fr;
      place-items: flex-start;
    }

    .employee-card {
      width: 200px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 30px;

      @media (max-width: 676px) {
        flex-direction: row;
        gap: 25px;
      }

      .employee-image {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        background: var(--color-indigo);


        @media (max-width: 676px) {
          width: 90px;
          height: 90px;
        }
      }

      p {
        text-align: center;

        @media (max-width: 676px) {
          text-align: left;
        }
      }
    }
  }
</style>