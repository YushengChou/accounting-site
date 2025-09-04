<script setup>
import Title from '../components/shared/Title.vue'
defineProps({
  title: {
    type: String,
    required: true
  },
  infoList: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <section class="info-section">
    <div class="container">
      <Title :title="title"></Title>
      <div v-for="(infoItem, index) in infoList" :key="index" class="card-container">
        <div v-if="infoItem.target" class="target">
          <strong>服務對象： </strong>{{ infoItem.target }}
        </div>
        <div class="card-inside">
          <div v-for="(category, i) in infoItem.categories" :key="i" class="card">
            <h3>{{ category.name || category.title }}</h3>
            <p>{{ category.desc }}</p>
            <ul>
              <li v-for="(item, j) in category.items" :key="j">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.info-section {
  margin: 30px 0;
  .container {
    max-width: 1200px;
    margin: 0 auto;
    .card-container {
      color: var(--color-bg);
      margin-bottom: 20px;
      .target {
        margin-bottom: 20px;
      }
      .card-inside {
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        width: 100%;
        .card {
          flex: 1 1 calc((100% - 60px)/3);
          padding: 20px;
          border-radius: 8px;
          box-shadow: var(--shadow-card);
          ul {
            list-style-type: disc;
            padding-left: 20px;
          }
        }
        @media (max-width: 1024px) {
          .card {
            flex: 1 1 calc((100% - 30px) / 2);
          }
        }
        @media (max-width: 600px) {
          .card {
            flex: 1 1 100%;
          }
        }
      }
    }
  }
}
</style>