<template>
  <div class="container" v-if="post">
    <button class="back-btn" @click="goBack">
      ← 返回
    </button>
    <h1>{{ post.title }}</h1>
    <p class="date">{{ post.date }}</p>
    <p>{{ post.content }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const post = ref(null)
const route = useRoute()
const base = import.meta.env.DEV ? '/' : import.meta.env.BASE_URL
onMounted(async () => {
  const res = await fetch(base + 'posts.json')
  const posts = await res.json()
  post.value = posts.find(p => p.id === Number(route.params.id))
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
  color: var(--color-text-secondary);
  .back-btn {
    color: var(--color-bg);
    font-size: 14px;
    cursor: pointer;
  
    &:hover {
      color: var(--color-red);
    }
  }
}
.date {
  font-size: 0.9rem;
  color: gray;
  margin-bottom: 1rem;
}
</style>
