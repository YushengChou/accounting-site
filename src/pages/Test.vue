<template>
  <div>
    <div>
      <h2>上傳文章</h2>
      <input v-model="title" placeholder="標題" />
      <input v-model="subTitle" placeholder="副標題" />
      <textarea v-model="content" placeholder="內文"></textarea>
      <!-- <input type="file" @change="handleFile" /> -->
      <button @click="uploadArticle">發布文章</button>
      <p v-if="msg">{{ msg }}</p>
    </div>
    <br /><hr><br />
    <div>
      <h2>文章列表</h2>
      <div v-for="item in articles" :key="item.id" class="article">
        <h3>{{ item.title }}</h3>
        <p>{{ item.subtitle }}</p>
        <img v-if="item.imageUrl" :src="item.imageUrl" style="max-width:300px;" />
        <p>{{ item.content }}</p>
        <small>{{ item.createdAt?.toDate().toLocaleString() }}</small>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { db, storage } from "@/firebase";
import { collection, addDoc, serverTimestamp, getDocs, orderBy, query } from "firebase/firestore";
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";

const title = ref("");
const subTitle = ref("");
const content = ref("");
const file = ref(null);
const msg = ref("");
const handleFile = (e) => {
  file.value = e.target.files[0];
};

const uploadArticle = async () => {
  if(!title.value){ msg.value="標題或內容不可空白"; return; }
  try {
    let imageUrl = "";
    if (file.value) {
      const fileReference = storageRef(storage, `articles/${Date.now()}_${file.value.name}`);
      await uploadBytes(fileReference, file.value);
      imageUrl = await getDownloadURL(fileReference);
    }

    await addDoc(collection(db, "articles"), {
      title: title.value,
      subTitle: subTitle.value,
      content: content.value,
      imageUrl,
      createdAt: serverTimestamp()
    });

    msg.value = "文章上傳成功！";
    title.value = "";
    subTitle.value = "";
    content.value = "";
    file.value = null;
  } catch (e) {
    msg.value = e.message;
  }
}

const articles = ref([]);

onMounted(async () => {
  const q = query(collection(db, "articles"), orderBy("createdAt", "desc"));
  const querySnapshot = await getDocs(q);

  articles.value = querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
});
</script>