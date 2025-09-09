<template>
  <div>
    <BackBtn></BackBtn>
    <div class="container">
      <h1>最新消息</h1>
      <PostCard v-for="post in store.posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script setup>
import BackBtn from '../components/shared/BackBtn.vue'
import PostCard from '../components/PostCard.vue'
import { usePostsStore } from '@/stores/posts'

const store = usePostsStore()

onMounted(() => {
  store.fetchPosts()
})

// const posts = ref([])
// const base = import.meta.env.DEV ? '/' : import.meta.env.BASE_URL
// onMounted(async () => {
//   const res = await fetch(base + 'posts.json')
//   const data = await res.json()
//   // 最新的放前面
//   posts.value = data.reverse()
// })
</script>

<style scoped lang="scss">
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  color: var(--color-bg);
  h1 {
    text-align: center;
  }
}
</style>
