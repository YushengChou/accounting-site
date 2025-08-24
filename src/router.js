import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './pages/Home.vue'
import News from './pages/News.vue'
import Post from './pages/Post.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/news', component: News },
  { path: '/news/:id', component: Post }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})
