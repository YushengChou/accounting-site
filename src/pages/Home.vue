<template>
  <div class="container">
    <h1 class="title">和得會計師事務所</h1>
    <p>提供財務、稅務、工商登記、財務顧問、企業管理顧問服務</p>

    <section>
      <h2>核心價值</h2>
      <p>專業、誠信、效率，讓您的財務無後顧之憂。</p>
    </section>

    <section>
      <h2>服務項目</h2>
      <ul>
        <li>會計帳務處理</li>
        <li>稅務申報與規劃</li>
        <li>公司設立與工商登記</li>
        <li>財務簽證與審計</li>
        <li>企業內部控制顧問</li>
      </ul>
    </section>

    <section class="contact">
      <h2>聯絡我們</h2>
      <p>地址：新北市三重區福德北路63號2樓</p>
      <p>電話：02-1234-5678</p>
      <div class="map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.0715399841774!2d121.49964077557456!3d25.06556427779594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a93408f1c6cb%3A0x5bd6d9fafbbf6c8a!2z5ZKM5b6X5pyD6KiI5bir5LqL5YuZ5omA!5e0!3m2!1szh-TW!2stw!4v1756027824509!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: auto;
  padding: 2rem;
}
.title {
  color: var(--color-red);
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
section {
  margin-top: 2rem;
}
.contact {
  margin-top: 3rem;
  padding: 1rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}
.map-container {
  margin-top: 1rem;
  width: 100%;
  max-width: 600px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
}
</style>
