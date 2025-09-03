<template>
  <header class="navbar">
    <div class="logo">和得會計師事務所</div>

    <button class="hamburger" @click="toggleMenu">
      <span></span><span></span><span></span>
    </button>

    <!-- 遮罩 -->
    <div v-if="menuOpen" class="overlay" @click="menuOpen = false"></div>

    <!-- 導覽選單 -->
    <transition name="slide">
      <nav v-show="menuOpen || isDesktop" class="nav-links">
        <router-link to="/" @click="menuOpen = false">首頁</router-link>
        <router-link to="/news" @click="menuOpen = false">最新消息</router-link>
        <!-- 亮暗色切換按鈕 -->
        <!-- <a @click="toggleDark" class="theme-toggle">
          {{ isDark ? '☀️' : '🌙' }}
        </a> -->
      </nav>
    </transition>
  </header>

  <main class="main">
    <router-view />
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const menuOpen = ref(false)
const isDesktop = ref(window.innerWidth >= 769)

const handleResize = () => {
  isDesktop.value = window.innerWidth >= 769
  if (isDesktop.value) {
    menuOpen.value = false
  }
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  if (localStorage.getItem('theme') === 'dark') {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }
})
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

const isDark = ref(false)

// 切換亮暗色
const toggleDark = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}
</script>

<style>
:root {
  --color-bg: #111;
  --color-bg-secondary: #fff;
  --color-red: #c8102e;
  --color-text-secondary: #333;
  --shadow-card: 0 2px 6px rgba(0, 0, 0, 0.1);
}
/* 暗色模式覆蓋變數 */
.dark {
  --color-bg: #f3f4f6;
  --color-bg-secondary: #1f2937;
  --color-text-secondary: #e5e7eb;
  --shadow-card: 0 2px 6px rgba(255, 255, 255, 0.1);
}
</style>
<style scoped lang="scss">
/* Navbar 樣式 */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: var(--color-bg-secondary);
  border-bottom: 2px solid var(--color-red);
  position: relative;
  .logo {
    font-weight: bold;
    font-size: 1.3rem;
    color: var(--color-bg);
  }
  .hamburger {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 24px;
    height: 18px;
    background: none;
    border: none;
    cursor: pointer;
    span {
      display: block;
      height: 3px;
      background: var(--color-bg);
      border-radius: 2px;
    }
    &:hover {
      span {
        background: var(--color-red);
      }
    }
  }
  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 5;
  }
  .nav-links {
    display: flex;
    gap: 1.5rem;
    a {
      text-decoration: none;
      color: var(--color-bg);
      font-weight: 500;
      cursor: pointer;
    }
    a:hover {
      color: var(--color-red);
    }
  }
}

/* 手機版 RWD */
@media (max-width: 768px) {
  .navbar {
    .nav-links {
      position: absolute;
      top: 100%;
      right: 0;
      background: var(--color-bg-secondary);
      flex-direction: column;
      width: 100%;
      padding: 1rem;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      z-index: 10;
    }
  
    .hamburger {
      display: flex;
      z-index: 11;
    }
  }
}

/* 調整進場與離場為上下方向 */
.slide-enter-from {
  opacity: 0;
  transform: translateY(100%);
}
.slide-enter-to, .slide-leave-from {
  opacity: 1;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}
.slide-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}
.slide-enter-to,
.slide-leave-from {
  transform: translateY(0);
}
</style>
