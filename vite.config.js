import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/accounting-site/' : '/',
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue', // 引入 ref、reactive、computed、watch...
        'pinia', // defineStore、storeToRefs...
        'vue-router', // useRouter、useRoute...
        '@vueuse/core', // 引入 VueUse 函數
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})