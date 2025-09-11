import { defineStore } from 'pinia'

export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: [],
    loaded: false
  }),
  actions: {
    async fetchPosts() {
      if (this.loaded) return
      const SPREADSHEET_ID = '1DNYhoy2vsUD8Q8ASWpyD4VcHCAcvq5SeLs0SPYu44es'
      const SHEET_NAME = 'sheet1'
      const API_KEY = 'AIzaSyDiTcvxQ6OQcpfP8RuWnJBSfO1DXpZn93c'
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`
      const res = await fetch(url)
      const data = await res.json()
      this.posts = data.values.slice(1).reverse().map((row, i) => ({
        id: i + 1,
        title: row[0],
        summary: row[1],
        content: row[2],
        date: row[3],
        // 預留圖片 必須為網址或是放在public內 暫定路徑 images/xxx
        // img: row[4]
      }))
      this.loaded = true
    }
  }
})
