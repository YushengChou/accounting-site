<script setup>
import Title from '../components/shared/Title.vue'
import BackBtn from '../components/shared/BackBtn.vue'
</script>

<template>
  <div class="about-us">
    <BackBtn></BackBtn>
    <Title title="團隊介紹"></Title>
    <div class="container">
      <div class="img-inside">
        <img src="@/assets/img/james.png" alt="">
      </div>
      <div class="introduce">
        <h4 class="title">James</h4>
        <h5 class="sub-title">學歷</h5>
        <ul>
          <li>德明商專(五專部)會計統計科</li>
          <li>東吳大學會計學系學士</li>
          <li>政治大學經營管理學程會計組碩士</li>
          <li>安永會計師事務所 (DY致遠)</li>
        </ul>
        <h5 class="sub-title">經歷</h5>
        <ul>
          <li>儒鴻企業股份有限公司</li>
          <li>集盛實業股份有限公司</li>
          <li>多年中國、越南派駐工作經驗</li>
          <li>新北市都更推動師</li>
          <li>和得會計師事務所 會計師</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.about-us {
  .container {
    max-width: 1200px;
    padding: 20px;
    margin: 0 auto;
    display: flex;
    gap: 40px;
    .img-inside {
      max-width: 50%;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: var(--shadow-card);
    }
    .introduce {
      .title {
        margin-bottom: 20px;
        font-size: 32px;
      }
      .sub-title {
        font-size: 24px;
        margin: 20px 0;
      }
      ul {
        list-style-type: disc;
        padding-left: 20px;
        li {
          font-size: 20px;
        }
      }
    }
  }
  @media (max-width: 768px) {
    .container {
      align-items: center;
      flex-direction: column;
      gap: 20px;
      .img-inside {
        max-width: 80%;
      }
    }
  }
}
</style>