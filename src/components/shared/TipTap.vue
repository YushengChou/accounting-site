<template>
  <div class="editor-wrapper">
    <!-- Toolbar -->
    <div class="toolbar">
      <button @click="cmd('toggleBold')" :class="{ active: isActive('bold') }">B</button>
      <button @click="cmd('toggleItalic')" :class="{ active: isActive('italic') }">I</button>
      <button @click="cmd('toggleUnderline')" :class="{ active: isActive('underline') }">U</button>
      
      <input type="color" title="文字顏色" @input="editor.chain().focus().setColor($event.target.value).run()" />
      <input type="color" title="背景顏色" @input="editor.chain().focus().toggleHighlight({ color: $event.target.value }).run()" />

      <button @click="editor.chain().focus().setTextAlign('left').run()">左</button>
      <button @click="editor.chain().focus().setTextAlign('center').run()">中</button>
      <button @click="editor.chain().focus().setTextAlign('right').run()">右</button>

      <!-- 段落 / 標題 -->
      <select @change="changeBlock($event)">
        <option value="h1">大標題</option>
        <option value="h2">中標題</option>
        <option value="h3">小標題</option>
        <option value="paragraph">段落</option>
      </select>

      <!-- 表格行列數輸入 -->
      <input type="number" v-model.number="tableRows" placeholder="列" min="1" max="10"/>
      <input type="number" v-model.number="tableCols" placeholder="欄" min="1" max="10"/>
      <button @click="insertTable">插入表格</button>
    </div>

    <!-- Editor -->
    <EditorContent :editor="editor" class="editor" />
  </div>
</template>

<script setup>
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

import { Underline } from '@tiptap/extension-underline'
import { TextStyle } from '@tiptap/extension-text-style'
import { Color } from '@tiptap/extension-color'
import { Highlight } from '@tiptap/extension-highlight'
import { TextAlign } from '@tiptap/extension-text-align'

import { Table } from '@tiptap/extension-table'
import { TableRow } from '@tiptap/extension-table-row'
import { TableHeader } from '@tiptap/extension-table-header'
import { TableCell } from '@tiptap/extension-table-cell'

const editor = useEditor({
  extensions: [
    StarterKit,
    Underline,
    TextStyle,
    Color,
    Highlight.configure({ multicolor: true }),
    TextAlign.configure({ types: ['heading', 'paragraph'] }),
    Table.configure({ resizable: true }),
    TableRow,
    TableHeader,
    TableCell,
  ],
  content: '輸入內容',
})

defineExpose({
  getHTML: () => editor.value.getHTML(),
  getText: () => editor.value.getText(),
  clearContent: () => editor.value.commands.clearContent(),
})

const cmd = (name) => {
  editor.value.chain().focus()[name]().run()
}

const isActive = (name) => editor.value?.isActive(name)

const tableRows = ref()
const tableCols = ref()

const insertTable = () => {
  const rows = tableRows.value
  const cols = tableCols.value

  if (!rows || !cols) return

  editor.value
    .chain()
    .focus()
    .insertTable({ rows, cols, withHeaderRow: true })
    .run()
}

// 段落 / 標題
const changeBlock = (e) => {
  const val = e.target.value
  if (val === 'paragraph') editor.value.chain().focus().setParagraph().run()
  else editor.value.chain().focus().toggleHeading({ level: Number(val.replace('h', '')) }).run()
}

</script>

<style scoped lang="scss">
.editor-wrapper {
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;

  .toolbar {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    padding: 8px;
    background: #f8f9fa;
    border-bottom: 1px solid #ddd;

    // 統一所有按鈕、select、color input、number input 高度
    button,
    select,
    input[type='color'],
    input[type='number'] {
      padding: 6px 10px;
      border-radius: 6px;
      border: 1px solid #ccc;
      background: #fff;
      cursor: pointer;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    button.active {
      background: #4f46e5;
      color: #fff;
      border-color: #4f46e5;
    }
  }

  .editor {
    padding: 16px;
    min-height: 300px;

    :deep(table) {
      border-collapse: collapse;
    }

    :deep(td),
    :deep(th) {
      border: 1px solid #ccc;
      padding: 6px;
    }
  }
}
</style>
