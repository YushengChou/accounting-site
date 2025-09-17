<template>
  <div>
    <BackBtn></BackBtn>
    <div class="post" v-if="post">
      <div class="container">
        <h1>{{ post.title }}</h1>
        <p class="date">{{ post.date }}</p>
        <div v-if="post.img" class="img-inside">
          <img :src="getImgUrl(post.img)" class="img" />
        </div>
        <p>{{ post.content }}</p>
      </div>
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

function getImgUrl(fileName) {
  // 假設所有圖都放在 src/assets/images
  return new URL(`../assets/images/${fileName}`, import.meta.url).href
}

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
.post {
  max-width: 1200px;
  margin: auto;
  padding: 2rem;
  color: var(--color-text-secondary);
  .container {
    text-align: left;
    .img-inside {
      display: flex;
      justify-content: center;
      .img {
        width: 80%;
      }
    }
    .date {
      font-size: 0.9rem;
      color: gray;
      margin-bottom: 1rem;
    }
  }
}
</style>
