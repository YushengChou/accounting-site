<template>
  <div class="page-list">
    <BackBtn></BackBtn>
    <h2 class="page-title">最新消息</h2>

    <div v-if="allArticles.length === 0" class="no-articles">
      目前沒有文章
    </div>

    <div v-else class="articles">
      <div
        v-for="article in pagedArticles"
        :key="article.id"
        class="article-card"
        @click="goDetail(article.id)"
      >
        <div>
          <h3 class="title">{{ article.title }}</h3>
          <p class="subtitle">{{ article.subTitle }}</p>
          <small class="time">
            {{ article.date || '時間不明' }}
          </small>
        </div>
        <div>
          <img v-if="article.imgUrl" :src="article.imgUrl" :alt="article.title">
        </div>
      </div>
    </div>

    <!-- 分頁控制 -->
    <div class="pagination" v-if="totalPages !== 1 && totalPages !== 0">
      <button @click="prevPage" :disabled="currentPage === 1">上一頁</button>
      <span>第 {{ currentPage }} / {{ totalPages }} 頁</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">
        下一頁
      </button>
    </div>
  </div>
</template>

<script setup>
import BackBtn from '../components/shared/BackBtn.vue'
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { collection, orderBy, query, onSnapshot } from 'firebase/firestore';
import { db } from '@/firebase';

const router = useRouter();

const allArticles = ref([]);
const pageLimit = 5;
const currentPage = ref(1);
const totalPages = ref(1);

const pagedArticles = computed(() => {
  const start = (currentPage.value - 1) * pageLimit;
  const end = start + pageLimit;
  return allArticles.value.slice(start, end);
});

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};

// 點卡片跳轉文章詳情頁
const goDetail = (id) => {
  router.push(`/articles/${id}`);
};

onMounted(async () => {
  const q = query(
    collection(db, 'articles'),
    orderBy('date', 'desc'),
    orderBy('createdAt', 'desc')
  );
  onSnapshot(q, (querySnapshot) => {
    allArticles.value = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    totalPages.value = Math.ceil(allArticles.value.length / pageLimit);
  })
});
</script>

<style lang="scss" scoped>
.page-list {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  .page-title {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    color: #333;
  }

  .no-articles {
    text-align: center;
    color: #888;
  }

  .articles {
    display: flex;
    flex-direction: column;
    gap: 16px;

    .article-card {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #fff;
      border-radius: 12px;
      padding: 16px 20px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
      transition: transform 0.2s, box-shadow 0.2s;
      cursor: pointer;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
      }

      .title {
        font-size: 1.25rem;
        font-weight: 600;
        margin: 0 0 6px 0;
        color: #222;
      }

      .subtitle {
        font-size: 1rem;
        color: #555;
        margin: 0 0 6px 0;
      }

      .time {
        font-size: 0.85rem;
        color: #999;
      }

      img {
        max-width: 130px;
        max-height: 130px;
      }
    }
  }

  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;

    button {
      padding: 6px 14px;
      border: none;
      background: #3498db;
      color: #fff;
      border-radius: 6px;
      cursor: pointer;
      transition: 0.2s;

      &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }

      &:hover:not(:disabled) {
        background: #2980b9;
      }
    }
  }
}
</style>

