<script setup>
const router = useRouter()
const goBack = () => {
  router.back()
}
</script>

<template>
  <div class="btn">
    <button class="back-btn" @click="goBack">
      ← 返回
    </button>
  </div>
</template>

<style scoped lang="scss">
.btn {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
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