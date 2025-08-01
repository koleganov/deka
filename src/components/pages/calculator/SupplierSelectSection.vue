<script setup>

import LayerIcon from "../../../assets/icons/LayerIcon.vue";
import SettingsIcon from "../../../assets/icons/SettingsIcon.vue";
import SettingLargeIcon from "../../../assets/icons/SettingLargeIcon.vue";
</script>

<template>
  <div class="container">
    <div class="supplier-section">
      <div class="supplier-head">
        <p class="title2 !font-extralight">Выбор поставщика</p>
        <p class="subtitle mb-8">Или почему стоит работать с DEKA</p>
      </div>
      <div class="supplier-content">
        <div class="supplier-features">
          <div class="supplier-feature">
            <b>Сервис <br> 24/7</b>
            <span>
              Всегда на связи. Оперативная
              поддержка и быстрые выезды - мы
              решаем любые вопросы, чтобы ваш
              бизнес работал без задержек и
              простоев
            </span>
            <RouterLink to="/">Подробнее</RouterLink>
            <SettingsIcon class="absolute bottom-6 right-6"/>
          </div>
          <div class="supplier-feature">
            <b>Юридическая <br> поддержка</b>
            <span>
              От помощи с проверками до решения
              споров. Наша команда опытных
              юристов защищает бизнес клиентов
              по всей России, обеспечивая
              безопасность в любых ситуациях
            </span>
            <RouterLink to="/">Подробнее</RouterLink>
            <LayerIcon class="absolute bottom-6 right-6"/>
          </div>
        </div>
        <div class="supplier-garant">
          <div class="supplier-garant-bg"></div>
          <div class="supplier-garant-info">
            <SettingLargeIcon/>
            <div class="garant-title">
              <p>
                Гарантия и обслуживание,
                которые экономят ваше
                время и ресурсы
              </p>
              <RouterLink to="/" class="garant-link">Узнать подробности</RouterLink>
            </div>
            <div class="garant-list">
              <div class="garant-item">
                <span class="point"></span>
                <div>
                  <b>Гарантия от DEKA</b>
                  <p>покрывает все расходы на ремонт и транспортировку</p>
                </div>
              </div>
              <div class="garant-item">
                <span class="point"></span>
                <div>
                  <b>Минимум расходных материалов:</b>
                  <p>только замена охлаждающей жидкости 1 раз в год</p>
                </div>
              </div>
              <div class="garant-item">
                <span class="point"></span>
                <div>
                  <b>Техническая поддержка 24/7:</b>
                  <p>всегда на связи для быстрого решения любых вопросов</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .supplier-section {
    .supplier-content {
      max-width: 1000px;
      margin: 0 auto;

      .supplier-features {
        display: flex;
        justify-content: center;
        align-items: stretch;
        flex-wrap: wrap;
        gap: 8px;

        .supplier-feature {
          position: relative;
          width: 320px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding: 24px;
          border-radius: 22px;
          background: var(--color-indigo);
          color: var(--color-white);

          @media (max-width: 676px) {
            width: 100%;
          }

          b {
            font-size: 22px;
          }

          span {
            font-size: 15px;
            flex: 1 1 auto;
          }

          a {
            padding: 8px 18px;
            font-size: 14px;
            background: white;
            border-radius: 60px;
            font-weight: 600;
            align-self: flex-start;
            color: var(--color-indigo);
          }
        }
      }

      .supplier-garant {
        padding-top: 50px;
        max-width: 850px;
        margin: 0 auto;

        .supplier-garant-bg {
          height: 85px;
          width: 100%;
          background: var(--color-indigo);
          border-radius: 22px;

          @media (max-width: 676px) {
            display: none;
          }
        }

        .supplier-garant-info {
          margin-top: -40px;
          padding: 22px;
          display: flex;
          justify-content: space-between;
          gap: 18px;
          border-radius: 22px;
          background: white;

          @media (max-width: 676px) {
            flex-direction: column;
          }

          .garant-title {
            flex: 1 1 40%;

            p {
              font-size: 22px;
              font-weight: 700;
              margin-bottom: 24px;
            }

            a {
              padding: 8px 18px;
              font-size: 12px;
              color: white;
              font-weight: 500;
              text-decoration: none;
              background: var(--color-indigo);
              border-radius: 60px;
              transition: 0.3s;
              border: 1px solid var(--color-indigo);

              &:hover {
                background: var(--color-white);
                color: var(--color-indigo);
              }
            }
          }

          .garant-list {
            flex: 1 1 40%;
            font-size: 12px;
            display: flex;
            flex-direction: column;
            gap: 8px;

            .garant-item {
              display: flex;
              gap: 8px;

              .point {
                margin-top: 8px;
                display: inline-block;
                height: 6px;
                width: 6px;
                background: var(--color-indigo);
              }
            }
          }
        }
      }
    }
  }
</style>