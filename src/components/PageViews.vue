<template>
  <div>
    <p>網站瀏覽人次：{{ pageViews }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { doc, onSnapshot, updateDoc, increment } from "firebase/firestore";
import { db } from "@/firebase";

const pageViews = ref(0);
let unsubscribe = null;

// Firestore document 路徑
const docRef = doc(db, "pageViews", "main");

// ⭐ 檢查今天是否已經算過一次
const hasViewedToday = () => {
  const last = localStorage.getItem("page_view_date");
  const today = new Date().toISOString().split("T")[0];
  return last === today;
};

// ⭐ 記錄今天已經加過一次
const markViewedToday = () => {
  const today = new Date().toISOString().split("T")[0];
  localStorage.setItem("page_view_date", today);
};

// ⭐ 畫面掛載時
onMounted(async () => {
  // ---- 1. 實時監聽 Firestore ----
  unsubscribe = onSnapshot(docRef, (docSnap) => {
    if (docSnap.exists()) {
      pageViews.value = docSnap.data().count ?? 0;
    }
  });

  // ---- 2. 每人每天僅 +1 次 ----
  if (!hasViewedToday()) {
    // Firestore 自動 +1
    await updateDoc(docRef, { count: increment(1) });
    markViewedToday();
  }
});

// 離開頁面時取消監聽
onUnmounted(() => {
  if (unsubscribe) unsubscribe();
});
</script>

<style scoped></style>
