import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import Post from '@/pages/Post.vue'
import UploadArticle from '@/pages/UploadArticle.vue'
import Login from '@/pages/Login.vue'
import ArticleList from '@/pages/ArticleList.vue'
import ArticleDetail from '@/pages/ArticleDetail.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/news', component: News },
  { path: '/news/:id', component: Post },
  { path: '/uploadArticle', component: UploadArticle },
  { path: '/login', component: Login },
  { path: '/articleList', component: ArticleList },
  { path: '/articles/:id', component: ArticleDetail },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})
