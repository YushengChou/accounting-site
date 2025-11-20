<template>
  <div class="login">
    <div class="card">
      <h2 class="title">會員登入</h2>

      <div v-if="!user">
        <div class="form-group">
          <label>帳號</label>
          <input v-model="email" placeholder="請輸入帳號" />
        </div>

        <div class="form-group">
          <label>密碼</label>
          <input v-model="password" type="password" placeholder="請輸入密碼" />
        </div>

        <button @click="login" class="btn primary">登入</button>
      </div>

      <div v-else class="logged-in">
        <p>目前登入中：<strong>{{ user.email }}</strong></p>
        <button @click="logout" class="btn danger">登出</button>
        <router-link to="/uploadarticle" class="btn link-btn">前往上傳文章</router-link>
      </div>
    </div>
    <Toast
      v-model:visible="toastVisible"
      :message="toastMessage"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import Toast from "@/components/shared/Toast.vue";

const toastVisible = ref(false);
const toastMessage = ref("");

const showToast = (msg) => {
  toastMessage.value = msg;
  toastVisible.value = true;
};

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
    showToast("帳號或密碼未輸入");
    return
  }
  if (email.value !== 'hedecpa@gmail.com' && email.value !== 'jameschunchin@gmail.com') {
    showToast('此帳號無權限登入')
    return
  }
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
  } catch (e) {
    if (e.code === "auth/invalid-credential" || e.code === "auth/wrong-password") {
      showToast("帳號或密碼錯誤，請重新輸入")
    } else {
      showToast("登入失敗：" + e.message);
    }
  }
};

const logout = async () => {
  await signOut(auth);
};
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  .card {
    background: white;
    padding: 30px 40px;
    border-radius: 14px;
    box-shadow: 0 8px 25px rgba(0,0,0,0.08);
    width: 100%;
    max-width: 380px;
    text-align: center;

    .title {
      margin-bottom: 25px;
      font-size: 22px;
      font-weight: 600;
    }

    .form-group {
      text-align: left;
      margin-bottom: 18px;

      label {
        display: block;
        font-size: 14px;
        margin-bottom: 6px;
        color: #333;
      }

      input {
        width: 100%;
        padding: 10px 12px;
        border: 1px solid #ccc;
        border-radius: 6px;
        font-size: 14px;
        transition: 0.2s;

        &:focus {
          border-color: #4c8bf5;
          box-shadow: 0 0 0 2px rgba(76, 139, 245, 0.15);
        }
      }
    }

    .btn {
      width: 100%;
      padding: 12px;
      border-radius: 6px;
      margin-top: 12px;
      cursor: pointer;
      font-size: 15px;
      font-weight: 500;
      transition: 0.2s;
      display: inline-block;
      text-align: center;
      border: none;

      &.primary {
        background: #4c8bf5;
        color: white;

        &:hover {
          background: #3a76d8;
        }
      }

      &.danger {
        background: #ff6161;
        color: white;

        &:hover {
          background: #e85353;
        }
      }

      &.link-btn {
        background: #4caf50;
        color: white;
        text-decoration: none;

        &:hover {
          background: #3e9641;
        }
      }
    }
  }
}
</style>
