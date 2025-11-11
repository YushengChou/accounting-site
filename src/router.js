import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './pages/Home.vue'
import News from './pages/News.vue'
import Post from './pages/Post.vue'
import Test from './pages/Test.vue'
import Login from './pages/Login.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/news', component: News },
  { path: '/news/:id', component: Post },
  { path: '/test', component: Test },
  { path: '/login', component: Login },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})
