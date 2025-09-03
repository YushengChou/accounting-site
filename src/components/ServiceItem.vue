<script setup>
const groups = [
  {
    target:
      "公司、商號、執行業務者、非營利組織、寺廟、宗親會歡迎醫師、護理機構、藥師、各項補習班、糼兒園、托幼機構、老人照顧中心、非營利組織、寺廟等洽詢",
    categories: [
      {
        name: "財務及稅務簽證",
        items: ["銀行融資簽證", "簽務申報簽證", "決算晝表簽證", "專案查核報告", "協議程序之執行"]
      },
      {
        name: "工商登記代辦",
        items: ["公司及商號設立登記", "資本額查核報告", "各項變更登記"]
      },
      {
        name: "代客帳務處理及制度設計",
        items: ["合規帳務處理", "內部制度設計規劃", "執行業務專門人士稅務服務", "非營利組織會計稅務"]
      }
    ]
  },
  {
    target: "個人及家族服務",
    categories: [
      {
        name: "個人財產信託及遺贈稅申報",
        items: ["一般財產信託", "遺囑信託", "遺產稅代理申報", "贈與稅代理申報"]
      },
      {
        name: "家族傳承規劃",
        items: ["家族辦公室規劃", "閉鎖型公司規劃"]
      },
      {
        name: "都市更新及危老諮詢",
        items: ["都市更新評估", "整建維護法規諮詢", "公寓大廈管理法規諮詢", "都更危老條例社區輔導"]
      }
    ]
  },
  {
    target: "其他",
    categories: [
      {
        name: "陸資來臺投資諮詢",
        items: ["大陸地區人民來臺投資業別項目—製造業", "大陸地區人民來臺投資業別項目—服務業"]
      },
      {
        name: "其他",
        items: ["財稅教育訓練", "其他簽證及認證", "其他諮詢服務"]
      }
    ]
  }
];
</script>

<template>
  <section class="service-section">
    <div class="container">
      <h2>服務項目</h2>

      <div 
        v-for="(group, gIndex) in groups" 
        :key="gIndex" 
        class="service-group"
      >
        <!-- 對象 -->
        <div class="target">
          <strong>服務對象：</strong>
          {{ group.target }}
        </div>

        <!-- 分類卡片 -->
        <div class="card-flex">
          <div
            v-for="(category, cIndex) in group.categories"
            :key="cIndex"
            class="card"
          >
            <h3>{{ category.name }}</h3>
            <ul>
              <li v-for="(item, i) in category.items" :key="i">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.service-section {
  padding: 1rem;
  background: var(--color-bg-secondary);
  border-radius: 8px;

  .container {
    max-width: 960px;
    margin: 0 auto;
  }

  h2 {
    color: var(--color-red);
    text-align: center;
    margin: 1.5rem 0;
    font-size: 2rem;
  }

  .service-group {
    margin-bottom: 2.5rem;

    .target {
      margin-bottom: 1.5rem;
      font-size: 1rem;
      line-height: 1.6;
      padding: 0.75rem 1rem;
      border-radius: 6px;
      color: var(--color-text-secondary);
    }

    .card-flex {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .card {
      flex: 1 1 250px; // 最小寬 250px，自動撐開
      max-width: 300px;
      background: var(--color-bg-secondary);
      border-radius: 8px;
      padding: 1.5rem;
      box-shadow: var(--shadow-card);
      text-align: left;

      h3 {
        margin-bottom: 0.75rem;
        color: var(--color-bg);
        font-size: 1.2rem;
      }

      ul {
        list-style: disc;
        padding-left: 1.2rem;
        li {
          margin-bottom: 0.5rem;
          color: var(--color-text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .card-flex {
      justify-content: center;
    }
  }
}
</style>