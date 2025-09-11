<template>
  <div>
    <p>網站瀏覽人次：{{ visitCount }}</p>
  </div>
</template>

<script setup>
const visitCount = ref(0)
const WEBAPP_URL = 'https://script.google.com/macros/s/AKfycbxJkvyjL1rGUgZAndedtQv-d4JxmlPqg0GBWglJTAGY3KxeU3X0G1HtdFrM81dSjj0Y/exec'

// 判斷今天是否已增加過
function hasVisitedToday() {
  const lastVisit = localStorage.getItem('lastVisitDate')
  // .toISOString()會把日期轉成 ISO 8601 字串，用 'T' 把字串切成兩段，取第一項
  const today = new Date().toISOString().split('T')[0]
  return lastVisit === today
}

function markVisitedToday() {
  const today = new Date().toISOString().split('T')[0]
  localStorage.setItem('lastVisitDate', today)
}

// 增加瀏覽人次
async function addVisit() {
  try {
    if (!hasVisitedToday()) {
      const res = await fetch(WEBAPP_URL, { method: 'POST' })
      const data = await res.json()
      visitCount.value = data.visitCount
      markVisitedToday()
    } else {
      // 已增加過，直接讀最新值
      const res = await fetch(WEBAPP_URL)
      const data = await res.json()
      visitCount.value = data.visitCount
    }
  } catch (err) {
    console.error('操作失敗', err)
  }
}

onMounted(() => {
  addVisit()
})
</script>
