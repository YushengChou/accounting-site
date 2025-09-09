<template>
  <div>
    <BackBtn></BackBtn>
    <div class="container" v-if="post">
      <h1>{{ post.title }}</h1>
      <p class="date">{{ post.date }}</p>
      <p>{{ post.content }}</p>
    </div>
  </div>
</template>

<script setup>
import BackBtn from '../components/shared/BackBtn.vue'
import { useRoute } from 'vue-router'
import { usePostsStore } from '@/stores/posts'

const route = useRoute()
const store = usePostsStore()

onMounted(() => {
  store.fetchPosts()
})
const post = computed(() =>
  store.posts.find(p => p.id === Number(route.params.id))
)

// const post = ref(null)
// const route = useRoute()
// const base = import.meta.env.DEV ? '/' : import.meta.env.BASE_URL
// onMounted(async () => {
//   const res = await fetch(base + 'posts.json')
//   const posts = await res.json()
//   post.value = posts.find(p => p.id === Number(route.params.id))
// })

</script>

<style scoped lang="scss">
.container {
  max-width: 1200px;
  margin: auto;
  padding: 2rem;
  color: var(--color-text-secondary);
}
.date {
  font-size: 0.9rem;
  color: gray;
  margin-bottom: 1rem;
}
</style>
