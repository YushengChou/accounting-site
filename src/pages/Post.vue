<template>
  <div>
    <BackBtn></BackBtn>
    <div class="container" v-if="post">
      <img v-if="post.img" :src="`/images/${post.img}`" width="200" />
      <h1>{{ post.title }}</h1>
      <p class="date">{{ post.date }}</p>
      <p>{{ post.content }}</p>
    </div>
  </div>
</template>

<script setup>
import BackBtn from '../components/shared/BackBtn.vue'

const route = useRoute()
const store = usePostsStore()

onMounted(() => {
  store.fetchPosts()
})
const post = computed(() =>
  store.posts.find(p => p.id === Number(route.params.id))
)

// function getImgUrl(fileName) {
//   // 假設所有圖都放在 src/assets/images
//   return new URL(`../assets/images/${fileName}`, import.meta.url).href
// }

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
