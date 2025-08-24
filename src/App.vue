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
      </nav>
    </transition>
  </header>

  <main>
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
})
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style>
:root {
  --color-black: #111;
  --color-white: #fff;
  --color-red: #c8102e;
}
</style>
<style scoped>
/* Navbar 樣式 */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: var(--color-white);
  border-bottom: 2px solid var(--color-red);
  position: relative;
}
.logo {
  font-weight: bold;
  font-size: 1.3rem;
  color: var(--color-black);
}
.nav-links {
  display: flex;
  gap: 1.5rem;
}
.nav-links a {
  text-decoration: none;
  color: var(--color-black);
  font-weight: 500;
}
.nav-links a:hover {
  color: var(--color-red);
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
}
.hamburger span {
  display: block;
  height: 3px;
  background: var(--color-black);
  border-radius: 2px;
}

.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 5;
}

/* 手機版 RWD */
@media (max-width: 768px) {
  .nav-links {
    position: absolute;
    top: 100%;
    right: 0;
    background: var(--color-white);
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

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
