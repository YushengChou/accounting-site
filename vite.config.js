import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'  // ← 必須加上這行

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/accounting-site/' : '/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})