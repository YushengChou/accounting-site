<script setup>
defineProps({
  target: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="service-target">
    {{ target }}
  </div>
</template>

<style scoped lang="scss">
.service-target {
  position: relative;
  padding: 20px;
  font-size: 22px;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 5px;
    height: 16px;
    background-color: var(--color-red);
    border-radius: 2px;
  }
}
</style>