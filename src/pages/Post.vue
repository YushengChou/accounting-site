<template>
  <div class="container" v-if="post">
    <h1>{{ post.title }}</h1>
    <p class="date">{{ post.date }}</p>
    <p>{{ post.content }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const post = ref(null)
const route = useRoute()

onMounted(async () => {
  const base = import.meta.env.BASE_URL
  const res = await fetch(base + 'posts.json')
  const posts = await res.json()
  post.value = posts.find(p => p.id === Number(route.params.id))
})
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: auto;
  padding: 2rem;
}
.date {
  font-size: 0.9rem;
  color: gray;
  margin-bottom: 1rem;
}
</style>
