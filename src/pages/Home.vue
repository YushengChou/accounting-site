<script setup>
import InfoSection from '../components/InfoSection.vue'
import AboutUs from '../components/AboutUs.vue'
import Contact from '../components/Contact.vue'
const coreValues = [
  {
    categories: [
      { title: '專業可靠', desc: '以專業知識與經驗，提供精準建議與服務。'},
      { title: '誠信正直', desc: '堅守職業道德，建立客戶信任基礎。' },
      { title: '高效迅速', desc: '迅速回應客戶需求，提供有效解決方案。' },
      { title: '貼心服務', desc: '心懷同理，矢志為中小企業提供貼心服務。' },
    ]
  }
]
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
]
</script>

<template>
  <div class="home">
    <section class="home-header">
      <div class="logo">
        <img class="img" src="@/assets/img/logo-name.png" />
      </div>
      <div class="logo-desc">
        <p><b>It is our moments of struggle that define us. How we handle them is what matters.</b> <br>— President Allan Trumbull<span>《Angel has Fallen》</span></p>
        <p>正是這種艱困的時刻定義了我們，而我們的處置更加重要。<br>艾倫特倫布爾總統，<span>《全面攻佔3：天使救援》</span></p>
      </div>
    </section>
    <AboutUs></AboutUs>
    <!-- 核心價值 -->
    <InfoSection title="核心價值" :infoList="coreValues" :twoCol="true"></InfoSection>
    <!-- 服務項目 -->
    <InfoSection title="服務項目" :infoList="groups"></InfoSection>
    <!-- 聯絡我們 -->
    <Contact title="聯絡我們"></Contact>
  </div>
</template>

<style scoped lang="scss">
.home {
  max-width: 1200px;
  margin: auto;
  padding: 20px;
  .home-header {
    display: flex;
    .logo {
      display: flex;
      justify-content: center;
      width: 50%;
      padding: 20px;
      img {
        object-fit: contain;
      }
    }
    .logo-desc {
      width: 50%;
      padding: 20px;
      p {
        font-size: 20px;
        color: var(--color-text-secondary);
        b {
          color: var(--color-red);
        }
        span {
          font-size: 14px;
        }
      }
    }
  }
  @media (max-width: 768px) {
    .home-header {
      align-items: center;
      flex-direction: column;
      .logo, .logo-desc {
        width: 100%;
      }
    }
  }
}
// 深色模式的地圖
.dark .map-container iframe {
  filter: invert(90%) hue-rotate(180deg);
}
</style>
