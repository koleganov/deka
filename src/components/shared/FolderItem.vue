<template>
  <div class="folder">
    <div class="folder-content">
      <p class="folder-badge">
        Информация
      </p>
      <p class="folder-text">
        Компания DEKA Laser ориентирована на широкий круг профессионалов в области медицины и эстетики, предлагая высокотехнологичное лазерное оборудование для различных медицинских и косметологических процедур.
      </p>
    </div>
  </div>
</template>

<style scoped>
.folder {
  max-width: 570px;
  height: 310px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/image/shared/folder.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;

  @media (max-width: 676px) {
    max-width: 350px;
    height: 200px;
    background-size: 95% 95%;
  }

  .folder-content {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 44px 65px;
    position: relative;
    top: 30px;

    @media (max-width: 676px) {
      padding: 22px 20px;
      gap: 8px;
      top: 10px;
    }

    .folder-badge {
      max-width: 167px;
      padding: 8px 22px;
      background: var(--color-indigo);
      border-radius: 90px;
      font-weight: 500;
      font-size: 17px;
      color: white;
      text-align: center;

      @media (max-width: 676px) {
        max-width: 104px;
        padding: 6px 16px;
        font-size: 10px;
        border-radius: 56px;
      }
    }

    .folder-text {
      color: #29282A;

      @media (max-width: 676px) {
        font-size: 10px;
      }
    }
  }
}
</style>