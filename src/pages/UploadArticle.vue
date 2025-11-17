<template>
  <div class="container">
    <h2 class="form-title">上傳文章</h2>

    <div class="form-card">
      <input v-model="title" placeholder="標題" />
      <input v-model="subTitle" placeholder="副標題" />
      <input v-model="imgUrl" placeholder="圖片網址" />
      <input v-model="date" type="date" />
      <textarea v-model="content" placeholder="內文"></textarea>
      <button @click="uploadArticle">發布文章</button>
      <p v-if="msg" class="msg">{{ msg }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { db } from "@/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const title = ref("")
const subTitle = ref("")
const imgUrl = ref("")
const date = ref("")
const content = ref("")
const msg = ref("")

const uploadArticle = async () => {
  if(!title.value){ msg.value="標題或內容不可空白"; return; }
  try {
    await addDoc(collection(db, "articles"), {
      title: title.value,
      subTitle: subTitle.value,
      imgUrl: imgUrl.value,

      content: content.value,
      createdAt: serverTimestamp(),
      createdAtClient: new Date(),
    });

    msg.value = "文章上傳成功！";
    title.value = "";
    subTitle.value = "";
    content.value = "";
    imgUrl.value = "";
  } catch (e) {
    msg.value = e.message;
  }
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .form-title {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    color: #333;
  }

  .form-card {
    background: #fff;
    padding: 24px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    display: flex;
    flex-direction: column;
    gap: 16px;

    input,
    textarea {
      padding: 12px;
      border-radius: 8px;
      border: 1px solid #ccc;
      font-size: 1rem;
      outline: none;
      transition: border 0.2s, box-shadow 0.2s;

      &:focus {
        border-color: #3498db;
        box-shadow: 0 0 5px rgba(52, 152, 219, 0.3);
      }
    }

    textarea {
      resize: vertical;
      min-height: 300px;
    }

    button {
      padding: 12px;
      background-color: #3498db;
      color: #fff;
      font-size: 1rem;
      font-weight: bold;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: 0.2s;

      &:hover {
        background-color: #2980b9;
      }
    }

    .msg {
      color: red;
      font-weight: 500;
      margin-top: 8px;
      text-align: center;
    }
  }
}
</style>
