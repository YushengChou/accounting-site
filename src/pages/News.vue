<template>
  <div class="container">
    <button class="back-btn" @click="goBack">
      ← 返回
    </button>
    <h1>最新消息</h1>
    <PostCard v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import PostCard from '../components/PostCard.vue'

const posts = ref([])
const base = import.meta.env.DEV ? '/' : import.meta.env.BASE_URL
onMounted(async () => {
  const res = await fetch(base + 'posts.json')
  posts.value = await res.json()
})
const router = useRouter()
const goBack = () => {
  router.back()
}
</script>

<style scoped lang="scss">
.container {
  max-width: 1200px;
  margin: auto;
  padding: 2rem;
  color: var(--color-bg);
  h1 {
    text-align: center;
  }
  .back-btn {
    color: var(--color-bg);
    font-size: 14px;
    cursor: pointer;
  
    &:hover {
      color: var(--color-red);
    }
  }
}
</style>
