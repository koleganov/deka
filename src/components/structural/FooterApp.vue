<script setup lang="ts">
import TelegramLogo from "../../assets/logos/TelegramLogoWhite.vue";
import YoutubeLogo from "../../assets/logos/YoutubeLogoWhite.vue";
import FacebookLogo from "../../assets/logos/FacebookLogoWhite.vue";
import WhatsAppLogo from "../../assets/logos/WhatsAppLogoWhite.vue";
import InstagramLogo from "../../assets/logos/InstagramLogoWhite.vue";
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-logo">
        <img src="/logo-footer.png" alt="logo">
      </div>
      <div class="footer-content">
        <div class="footer-info">
          <ul>
            <li>
              <div class="info-block">
                email:
              </div>
              <a href="">info@dekalaser.kz</a>
            </li>
            <li>
              <div class="info-block">
                address:
              </div>
              <a href="">050058 Казахстан, ул. Амангельды 23/137</a>
            </li>
            <li>
              <div class="info-block">
                contact us:
              </div>
              <a href="">+7 701 0373777</a>
            </li>
          </ul>
        </div>
        <div class="footer-links">
          <div class="flex gap-14 max-md:hidden">
            <ul>
              <li>
                <a href="">Информация</a>
              </li>
              <li>
                <a href="">Информация</a>
              </li>
              <li>
                <a href="">Информация</a>
              </li>
              <li>
                <a href="">Информация</a>
              </li>
              <li>
                <a href="">Информация</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="">Информация</a>
              </li>
              <li>
                <a href="">Информация</a>
              </li>
              <li>
                <a href="">F.A.Q</a>
              </li>
              <li>
                <a href="">Политика конфиденциальности</a>
              </li>
              <li>
                <a href="">Информация</a>
              </li>
            </ul>
          </div>
          <div class="footer-social">
            <ul class="">
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
                  <FacebookLogo color="red"/>
                </a>
              </li>
              <li>
                <a href="">
                  <InstagramLogo/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <span>ООО «Deka». 2025 год</span>
    </div>
  </footer>
</template>

<style scoped>
  .footer {
    padding: 40px 0;
    background: #2A224A;
    border-top-left-radius:32px;
    border-top-right-radius:32px;
    font-size: 12px;
    color: white;

    .footer-logo {
      margin-bottom: 32px;
    }

    .footer-content {
      display: flex;
      gap: 111px;
      margin-bottom: 32px;
      flex-wrap: wrap;

      @media (max-width: 676px) {
        gap: 32px;
        align-items: center;
      }
      .footer-info {
        ul {
          width: 328px;
          display: flex;
          flex-direction: column;
          gap: 20px;

          .info-block {
            padding: 7px 17px;
            margin-bottom: 10px;
            display: inline-block;
            border: 1px solid white;
            border-radius: 90px;
          }

          a {
            display: block;
          }
        }
      }

      .footer-links {
        margin-top: 32px;
        ul {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-bottom: 20px;

          a {
            transition: 0.3s;

            &:hover {
              text-decoration: underline;
            }
          }
        }

        .footer-social {
          width: 190%;
          border-top: 1px solid white;
          ul {
            margin-top: 12px;
            flex-direction: row;
            gap: 8px;

            li {
              transition: 0.3s;

              &:hover {
                transform: scale(1.2);
              }
            }
          }
        }
      }
    }
  }
</style>