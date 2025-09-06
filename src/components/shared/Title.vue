<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="title">
    <h3>{{ title }}</h3>
  </div>
</template>

<style lang="scss" scoped>
.title {
  color: var(--color-red);
  text-align: center;
  margin: 15px 0;
  h3 {
    font-size: 36px;
  }
}
</style>