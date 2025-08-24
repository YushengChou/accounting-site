<template>
  <div class="post-card">
    <h2>
      <router-link :to="`/news/${post.id}`" class="title">{{ post.title }}</router-link>
    </h2>
    <p class="date">{{ post.date }}</p>
    <p>{{ post.summary }}</p>
  </div>
</template>

<script setup>
defineProps({ post: Object })
</script>

<style scoped lang="scss">
.post-card {
  border-bottom: 1px solid #ccc;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  .title:hover {
    color: var(--color-red);
  }
  .date {
    font-size: 0.9rem;
    color: gray;
  }
}
</style>
