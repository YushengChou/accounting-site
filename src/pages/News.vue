<template>
  <div class="container">
    <h1>最新消息</h1>
    <PostCard v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import PostCard from '../components/PostCard.vue'

const posts = ref([])

onMounted(async () => {
  const res = await fetch('/posts.json')
  posts.value = await res.json()
})
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: auto;
  padding: 2rem;
}
</style>
