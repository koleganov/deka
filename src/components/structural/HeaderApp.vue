<script setup>
import { ref } from 'vue'
import WhatsAppLogo from "../../assets/logos/WhatsAppLogo.vue";
import TelegramLogo from "../../assets/logos/TelegramLogo.vue";
import YoutubeLogo from "../../assets/logos/YoutubeLogo.vue";
import FacebookLogo from "../../assets/logos/FacebookLogo.vue";
import InstagramLogo from "../../assets/logos/InstagramLogo.vue";
import BurgerApp from "../../assets/icons/BurgerIcon.vue";

const isSidebarOpen = ref(false)

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

const closeSidebar = () => {
  isSidebarOpen.value = false
}
</script>

<template>
  <header class="header">
    <div class="flex justify-between items-center gap-6 container">
      <BurgerApp class="header-burger" @click="toggleSidebar"/>
      <RouterLink to="/">
        <img class="header-logo" src="/logo.png" alt="">
      </RouterLink>
      <a class="header-callback" href="">Связаться с нами</a>
      <ul class="header-link">
        <li><router-link to="/catalogue">Каталог аппаратов</router-link></li>
        <li><router-link to="/calculator">Калькулятор окупаемости</router-link></li>
        <li><router-link to="/about-us">О компании</router-link></li>
        <li><router-link to="/services">Услуги</router-link></li>
<!--        <li><router-link to="">Новости</router-link></li>-->
        <li><router-link to="/map">Контакты</router-link></li>
      </ul>
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

      <div class="sidebar-overlay" :class="{ active: isSidebarOpen }" @click="closeSidebar"></div>
      <aside class="sidebar" :class="{ active: isSidebarOpen }">
        <div class="sidebar-header">
          <img class="sidebar-logo" src="/logo.png" alt="">
          <button class="sidebar-close" @click="closeSidebar">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
        </div>

        <nav class="sidebar-nav">
          <ul class="sidebar-links">
            <li><a href="" @click="closeSidebar">Каталог аппаратов</a></li>
            <li><a href="" @click="closeSidebar">Калькулятор окупаемости</a></li>
            <li><a href="" @click="closeSidebar">О компании</a></li>
            <li><a href="" @click="closeSidebar">Услуги</a></li>
            <li><a href="" @click="closeSidebar">Новости</a></li>
            <li><a href="" @click="closeSidebar">Контакты</a></li>
          </ul>
        </nav>

        <div class="sidebar-footer">
          <a class="sidebar-callback" href="">Связаться с нами</a>
          <ul class="sidebar-social">
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
      </aside>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: relative;
  padding-top: 40px;
  padding-bottom: 40px;
  background: white;

  @media (max-width: 676px) {
    padding-top: 16px;
    padding-bottom: 16px;
  }

  .header-logo {
    @media (max-width: 676px) {
      width: 90px;
    }
  }

  .header-link {
    display: flex;
    gap: 16px;

    a {
      padding: 8px 18px;
      border: 1px solid var(--color-indigo);
      border-radius: 32px;
      color: var(--color-indigo);
      font-size: 14px;
      line-height: 1;
      transition: 0.3s;
      cursor: pointer;

      &:hover {
        background-color: var(--color-indigo);
        color: white;
      }
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

  .header-burger {
    display: none;
    cursor: pointer;
  }

  .header-callback {
    display: none;
    color: var(--color-indigo);
    font-size: 14px;
  }

  /* Стили для бокового меню */
  .sidebar-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 998;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;

    &.active {
      opacity: 1;
      visibility: visible;
    }
  }

  .sidebar {
    position: fixed;
    top: 0;
    right: 0;
    width: 320px;
    height: 100%;
    background-color: white;
    z-index: 999;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    display: flex;
    flex-direction: column;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);

    &.active {
      transform: translateX(0);
    }

    .sidebar-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
      border-bottom: 1px solid #eee;

      .sidebar-logo {
        height: 40px;
      }

      .sidebar-close {
        background: none;
        border: none;
        cursor: pointer;
        padding: 5px;
        color: var(--color-indigo);
        transition: 0.3s;

        &:hover {
          transform: scale(1.1);
        }
      }
    }

    .sidebar-nav {
      flex: 1;
      padding: 20px;

      .sidebar-links {
        display: flex;
        flex-direction: column;
        gap: 15px;

        li {
          a {
            display: block;
            padding: 12px 16px;
            color: var(--color-indigo);
            text-decoration: none;
            border-radius: 8px;
            transition: 0.3s;
            font-size: 16px;

            &:hover {
              background-color: var(--color-indigo);
              color: white;
            }
          }
        }
      }
    }

    .sidebar-footer {
      padding: 20px;
      border-top: 1px solid #eee;

      .sidebar-callback {
        display: block;
        text-align: center;
        padding: 12px 16px;
        background-color: var(--color-indigo);
        color: white;
        text-decoration: none;
        border-radius: 8px;
        margin-bottom: 20px;
        transition: 0.3s;

        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
      }

      .sidebar-social {
        display: flex;
        justify-content: center;
        gap: 15px;

        li {
          transition: 0.3s;
          &:hover {
            transform: scale(1.2);
          }
        }
      }
    }
  }

  @media (max-width: 1230px) {
    .header-link {
      display: none;
    }
    .header-social {
      display: none
    }
    .header-logo {
      position: absolute;
      left: 50%;
      top: 25%;
      transform: translateX(-50%);
    }
    .header-burger {
      display: block;
    }
    .header-callback {
      display: block;
    }

    .sidebar {
      width: 70%;
    }
  }

  @media (max-width: 420px) {
    .header-callback {
      font-size: 12px;
    }

    .sidebar {
      width: 70%;
    }
  }
}
</style>