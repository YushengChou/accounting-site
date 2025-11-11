<template>
  <div class="login">
    <div v-if="!user">
      帳號：<input v-model="email" placeholder="請輸入帳號" /><br>
      密碼：<input v-model="password" type="password" placeholder="請輸入密碼" /><br>
      <div class="btn-inside">
        <button @click="login" class="btn">登入</button>
      </div>
    </div>
    <div v-else>
      <p>目前登入中：{{ user.email }}</p>
      <div class="btn-inside">
        <button @click="logout" class="btn">登出</button>
        <router-link to="/test" class="btn">前往上傳文章</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
const user = ref(null);
const email = ref("");
const password = ref("");

// 監聽登入狀態
onMounted(() => {
  onAuthStateChanged(auth, (u) => {
    user.value = u;
  });
});

const login = async () => {
  console.log(email.value);
  if (!email.value || !password.value) {
    alert('帳號或密碼未輸入')
    return
  }
  if (email.value !== 'hedecpa@gmail.com' && email.value !== 'jameschunchin@gmail.com') {
    alert('此帳號無權限登入')
    return
  }
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
  } catch (e) {
    if (e.code === "auth/invalid-credential" || e.code === "auth/wrong-password") {
      alert("帳號或密碼錯誤，請重新輸入")
    } else {
      alert("登入失敗：" + e.message);
    }
  }
};

const logout = async () => {
  await signOut(auth);
};
</script>

<style scoped lang="scss">
.login {
  max-width: 1200px;
  padding: 20px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  > div {
    .btn-inside {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      gap: 20px;
      .btn,
      .btn:focus {
        position: relative;
        background: transparent;
        color: var(--color-red);
        font-size: 1rem;
        text-align: center;
        text-transform: uppercase;
        text-decoration: none;
        box-sizing: inherit;
        padding: 5px 10px;
        border: 1px solid;
        box-shadow: inset 0 0 20px rgba(225, 51, 45, 0);
        outline: 1px solid;
        outline-color: rgba(225, 51, 45, 0.5);
        outline-offset: 0px;
        text-shadow: none;
        transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
      }
      .btn:hover {
        color: var(--color-red);
        border: 1px solid;
        box-shadow: inset 0 0 20px rgba(225, 51, 45, 0.5), 0 0 20px rgba(225, 51, 45, 0.2);
        outline: 1px solid;
        outline-color: rgba(225, 51, 45, 0);
        outline-offset: 15px;
        text-shadow: 1px 1px 2px #427388;
      }
    }
  }
}
</style>
