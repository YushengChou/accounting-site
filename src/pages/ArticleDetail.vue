<template>
  <div class="container" v-if="article">
    <BackBtn></BackBtn>
    <h2 class="title">{{ article.title }}</h2>
    <p class="subtitle">{{ article.subTitle }}</p>
    <small class="time">
      {{ article.date || '時間不明' }}
    </small>
    <div class="content" v-html="article.content"></div>
    <div class="video" v-html="article.videoLink"></div>
    <img v-if="article.imgUrl" :src="article.imgUrl" class="image" />
    <button class="back-btn" @click="goBack">返回列表</button>
  </div>
  <div v-else class="loading">
    <div class="spinner"></div>
    <p>載入中...</p>
  </div>
</template>

<script setup>
import BackBtn from '../components/shared/BackBtn.vue'
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/firebase';

const route = useRoute();
const router = useRouter();
const article = ref(null);

const goBack = () => {
  router.back();
};

onMounted(async () => {
  const id = route.params.id;
  if (!id) return;

  const docRef = doc(db, 'articles', id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    article.value = { id: docSnap.id, ...docSnap.data() };
  } else {
    console.warn('文章不存在');
    router.replace('/articles'); // 文章不存在則回列表
  }
});
</script>

<style lang="scss" scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .title {
    font-size: 2rem;
    font-weight: bold;
    color: #222;
  }

  .subtitle {
    font-size: 1.2rem;
    color: #555;
  }

  .time {
    font-size: 0.85rem;
    color: #999;
  }

  .image {
    width: 100%;
    object-fit: cover;
    border-radius: 12px;
    margin: 16px 0;
  }

  .content {
    white-space: pre-wrap;
    overflow-wrap: break-word;
    font-size: 16px;
    margin-bottom: 10px;
    line-height: 2;

    :deep(table) {
      border-collapse: collapse;
      margin: 1em 0;
    }

    :deep(th),
    :deep(td) {
      border: 1px solid #ccc;
      padding: 6px;
      text-align: left;
    }

    /* 粗斜底線字 */
    :deep(strong) {
      font-weight: bold;
    }

    :deep(em) {
      font-style: italic;
    }

    :deep(u) {
      text-decoration: underline;
    }

  }

  .back-btn {
    align-self: flex-start;
    padding: 8px 16px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      background-color: #2980b9;
    }
  }
}
.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 40px 0;
  color: #555;
  font-size: 1rem;

  .spinner {
    width: 40px;
    height: 40px;
    border: 4px solid rgba(219, 52, 52, 0.2);
    border-top-color: var(--color-red);
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>

