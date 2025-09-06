<script setup>
import Title from '../components/shared/Title.vue'
import ServiceTarget from '../components/shared/ServiceTarget.vue'
defineProps({
  title: {
    type: String,
    required: true
  },
  infoList: {
    type: Array,
    required: true
  },
  twoCol: {
    type: Boolean,
  }
})
</script>

<template>
  <section class="info-section">
    <div class="container">
      <Title :title="title"></Title>
      <div v-for="(infoItem, index) in infoList" :key="index" class="card-container">
        <ServiceTarget v-if="infoItem.target" :target="infoItem.target"></ServiceTarget>
        <div class="card-inside">
          <div v-for="(category, i) in infoItem.categories" :key="i" :class="{twoCard: twoCol}" class="card">
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
      margin-bottom: 40px;
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
          h3 {
            font-size: 28px;
          }
          p {
            font-size: 24px;
          }
          ul {
            list-style-type: disc;
            padding-left: 20px;
            li {
              font-size: 24px;
            }
          }
        }
        .twoCard.card {
          flex: 1 1 calc((100% - 30px)/2);
        }
        @media (max-width: 1024px) {
          .card {
            flex: 1 1 calc((100% - 30px) / 2);
          }
        }
        @media (max-width: 600px) {
          .card, .twoCard.card {
            flex: 1 1 100%;
          }
        }
      }
    }
  }
}
</style>