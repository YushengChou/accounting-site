<template>
  <div>
    <p>網站瀏覽人次：{{ visitCount }}</p>
  </div>
</template>

<script setup>
const visitCount = ref(0)
const WEBAPP_URL = 'https://script.google.com/macros/s/AKfycbxJkvyjL1rGUgZAndedtQv-d4JxmlPqg0GBWglJTAGY3KxeU3X0G1HtdFrM81dSjj0Y/exec'

// 先從 localStorage 讀上一次數字
const cachedCount = localStorage.getItem('visitCount')
if (cachedCount) {
  visitCount.value = Number(cachedCount)
}

// 判斷今天是否已增加過
function hasVisitedToday() {
  const lastVisit = localStorage.getItem('lastVisitDate')
  const today = new Date().toISOString().split('T')[0]
  return lastVisit === today
}
// 今天沒訪問過會儲存日期
function markVisitedToday() {
  const today = new Date().toISOString().split('T')[0]
  localStorage.setItem('lastVisitDate', today)
}
// 更新 Web App
async function updateVisit() {
  try {
    let data
    if (!hasVisitedToday()) {
      const res = await fetch(WEBAPP_URL, { method: 'POST' })
      data = await res.json()
      markVisitedToday()
    } else {
      const res = await fetch(WEBAPP_URL)
      data = await res.json()
    }
    visitCount.value = data.visitCount
    // 更新 localStorage 快取
    localStorage.setItem('visitCount', data.visitCount)
  } catch (err) {
    console.error('更新失敗', err)
  }
}

onMounted(() => {
  updateVisit()
})
</script>
