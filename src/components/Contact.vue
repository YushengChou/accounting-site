<script setup>
import Title from '../components/shared/Title.vue'
defineProps({
  title: {
    type: String,
    required: true
  },
})
</script>

<template>
  <section class="contact">
    <Title title="聯絡我們"></Title>
    <div class="contact-phone">
      <div class="img-inside">
        <img class="img" src="@/assets/img/logo.png" />
      </div>
      <div class="img-inside">
        <img class="img" src="@/assets/img/line.jpg" width="275" height="275" />
      </div>
      <div class="phone">
        <div>
          <h3>和得會計師事務所</h3>
          <p>電話：02-29730059</p>
          <p>行動電話：0916973296</p>
          <p>電子郵件：hedecpa@gmail.com</p>
        </div>
      </div>
    </div>

    <div class="social-media">
      <div>
        <a href="https://line.me/ti/p/U_4YvEWa63" target="_blank" aria-label="Line">
          <img src="@/assets/svg/line.svg" />
        </a>
        <a href="https://www.facebook.com/share/1CJqK21w1v/" target="_blank" aria-label="Facebook">
          <img src="@/assets/svg/facebook.svg" />
        </a>
        <a href="https://www.instagram.com/cpa__james?igsh=dzl0OHY1ZzRxa2Zr" target="_blank" aria-label="Instagram">
          <img src="@/assets/svg/instagram.svg" />
        </a>
        <a href="" target="_blank" aria-label="Wechat">
          <img src="@/assets/svg/wechat.svg" />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/james-%E5%92%8C%E5%BE%97%E6%9C%83%E8%A8%88%E5%B8%AB%E4%BA%8B%E5%8B%99%E6%89%80-81bb8b380?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" aria-label="Linkedin">
          <img src="@/assets/svg/linkedin.svg" />
        </a>
        <a href="https://www.threads.com/@cpa__james" target="_blank" aria-label="Threads">
          <img src="@/assets/svg/threads.svg" />
        </a>
        <a href="https://www.xiaohongshu.com/user/profile/68b56b10000000001901070c?xsec_token=YBHIv8tlNZgFU5imoeubB_mxqexQACEO2sAACXE77OM1o%3D&xsec_source=app_share&xhsshare=CopyLink&appuid=68b56b10000000001901070c&apptime=1757127950&share_id=1e16c269fcb6448aad85c918189465ba&share_channel=copy_link" target="_blank" aria-label="小紅書">
          <img src="@/assets/svg/redbook.svg" />
        </a>
        <a href="https://www.tiktok.com/@user731550344?_t=ZS-8zUSJmLjIwB&_r=1" target="_blank" aria-label="Tiktok">
          <img src="@/assets/svg/tiktok.svg" />
        </a>
      </div>
    </div>
    <div class="map">
      <div>
        <p>地址：新北市三重區福德北路63號2樓</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.0715399841774!2d121.49964077557456!3d25.06556427779594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a93408f1c6cb%3A0x5bd6d9fafbbf6c8a!2z5ZKM5b6X5pyD6KiI5bir5LqL5YuZ5omA!5e0!3m2!1szh-TW!2stw!4v1756027824509!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div>
        <p>地址：桃園市桃園區春日路潤泰大家</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1379.626138302121!2d121.3100801219292!3d25.010171883055904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z5qGD5ZyS5biC5qGD5ZyS5Y2A5pil5pel6Lev5r2k5rOw5aSn5a62!5e0!3m2!1szh-TW!2stw!4v1757162027599!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.contact {
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  gap: 30px;
  .contact-phone, .social-media, .map {
    display: flex;
    justify-content: center;
  }
  .contact-phone {
    .img-inside, .phone {
      width: 33.33%;
      display: flex;
      justify-content: center;
      align-items: center;
      h3 {
        font-size: 28px;
        margin-bottom: 10px;
      }
      p {
        font-size: 24px;
      }
    }
  }
  .social-media {
    div {
      display: flex;
      gap: 30px;
    }
    gap: 30px;
    a img {
      transition: transform .3s ease, opacity .3s ease;
      width: 75px;
      height: 75px;
      &:hover {
        transform: scale(1.1);
        opacity: .8;
      }
    }
  }
  .map {
    max-width: 100%;
    justify-content: space-between;
    iframe {
      box-shadow: var(--shadow-card);
      border-radius: 8px;
      overflow: hidden;
      max-width: 500px;
    }
    p {
      margin-bottom: 10px;
      text-align: center;
      font-size: 24px;
    }
  }
  @media (max-width: 1024px) {
    .contact-phone, .map, .social-media {
      flex-direction: column;
      align-items: center;
      .img-inside, .phone {
        width: 100%;
      }
      iframe {
        max-width: 100%;
      }
    }
  }
}
</style>