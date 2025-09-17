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
      ],
      dirs: ['./src/router', './src/stores/**'], // 指定自動導入的目錄 /** 代表遞歸子目錄
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})