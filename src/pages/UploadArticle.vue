<template>
  <div class="upload">
    <BackBtn></BackBtn>
    <h2 class="form-title">上傳文章</h2>
    <p v-if="msg" class="msg">{{ msg }}</p>
    <div class="form-card">
      <input v-model="title" placeholder="標題" />
      <input v-model="subTitle" placeholder="副標題" />
      <!-- <input v-model="imgUrl" placeholder="圖片網址" /> -->
      <input type="file" accept="image/*" @change="uploadImage" ref="fileInput" />
      <input v-model="imgUrl" placeholder="圖片網址（上傳成功自動產生）" readonly />
      <input v-model="date" type="date" min="2025-01-01" />
      <textarea v-model="content" placeholder="內文"></textarea>
      <button @click="uploadArticle">發布文章</button>
    </div>
     <img
      v-if="imgUrl" :src="imgUrl" class="previewImg" alt="預覽圖片"
    />
  </div>
</template>

<script setup>
import BackBtn from '../components/shared/BackBtn.vue'
import { ref } from "vue";
import { db } from "@/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const title = ref("")
const subTitle = ref("")
const fileInput = ref(null);
const imgUrl = ref("")
const date = ref("")
const content = ref("")
const msg = ref("")

const API_KEY = '0c60c52ce46382fde56330eba5f303b2'

// 上傳圖片 → ImgBB → 拿網址
const uploadImage = async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  msg.value = "圖片上傳中...";

  const formData = new FormData();
  formData.append("image", file);

  const res = await fetch(`https://api.imgbb.com/1/upload?key=${API_KEY}`, {
    method: 'POST',
    body: formData
  });

  const data = await res.json()
  if (data.success) {
    imgUrl.value = data.data.url;
    msg.value = "圖片上傳成功！";
  } else {
    msg.value = "圖片上傳失敗，請再試一次";
  }

};

const uploadArticle = async () => {
  if(!title.value || !subTitle.value || !date.value || !content.value ){ msg.value="內容尚未填寫完整"; return; }
  try {
    await addDoc(collection(db, "articles"), {
      title: title.value,
      subTitle: subTitle.value,
      imgUrl: imgUrl.value,
      date: date.value,
      content: content.value,
      createdAt: serverTimestamp(),
    });

    msg.value = "文章上傳成功！"
    title.value = ""
    subTitle.value = ""
    fileInput.value.value = "";
    imgUrl.value = ""
    date.value = ""
    content.value = ""
  } catch (e) {
    msg.value = e.message;
  }
}
</script>

<style lang="scss" scoped>
.upload {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .msg {
    color: red;
    font-weight: 500;
    margin-top: 8px;
    text-align: center;
  }
  .previewImg {
    max-width: 800px;
    margin-top: 20px;
  }
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
  }
}
</style>
