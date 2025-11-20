<template>
  <transition name="fade">
    <div v-if="show" class="toast-overlay">
      <div class="toast-modal">
        <p>{{ message }}</p>
        <button @click="close">OK</button>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  message: { type: String, required: true },
  visible: { type: Boolean, default: false }
});

const emit = defineEmits(["update:visible"]);

const show = ref(props.visible);

watch(() => props.visible, (val) => {
  show.value = val;
});

const close = () => {
  show.value = false;
  emit("update:visible", false);
};
</script>

<style scoped lang="scss">
.toast-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.35);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.toast-modal {
  min-width: 240px;
  background: white;
  padding: 20px 32px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 6px 20px rgba(0,0,0,0.2);

  p {
    margin: 20px 0;
    font-size: 16px;
    color: #333;
  }

  button {
    padding: 8px 18px;
    margin-top: 20px;
    border: none;
    border-radius: 6px;
    background: #4c8bf5;
    color: white;
    font-size: 14px;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      background: #3a76d8;
    }
  }
}

/* 淡入淡出動畫 */
.fade-enter-active, .fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
