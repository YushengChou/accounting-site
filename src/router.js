import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './pages/Home.vue'
import News from './pages/News.vue'
import Post from './pages/Post.vue'
import AboutUs from './pages/AboutUs.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/news', component: News },
  { path: '/news/:id', component: Post },
  { path: '/AboutUs', component: AboutUs }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})
