import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import Post from '@/pages/Post.vue'
import UploadArticle from '@/pages/UploadArticle.vue'
import Login from '@/pages/Login.vue'
import ArticleList from '@/pages/ArticleList.vue'
import ArticleDetail from '@/pages/ArticleDetail.vue';

import { getAuth, onAuthStateChanged } from 'firebase/auth'

const routes = [
  { path: '/', component: Home },
  { path: '/news', component: News },
  { path: '/news/:id', component: Post },
  { 
    path: '/uploadArticle', 
    component: UploadArticle ,
    meta: { requiresAuth: true },
  },
  { path: '/login', component: Login },
  { path: '/articleList', component: ArticleList },
  { path: '/articles/:id', component: ArticleDetail },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const auth = getAuth()

const getCurrentUser = () => {
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe()
      resolve(user)
    })
  })
}

router.beforeEach(async (to) => {
  if (to.meta.requiresAuth) {
    const user = await getCurrentUser()

    if (!user) {
      return {
        path: '/login',
        query: { redirect: to.fullPath }, // 登入後跳回
      }
    }
  }
})
