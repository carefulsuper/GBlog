<template>
  <div style="padding:100px">
    <el-button class="btn" type="danger" @click="goBack" round icon="el-icon-back">返回</el-button>
    <el-button class="btn" type="danger" @click="onSave" style="float:right" round plain icon="el-icon-check" >保存</el-button>
    <div style="border: 1px solid #ccc;margin-top: 20px">
      <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editor"
        :defaultConfig="toolbarConfig"
        :mode="mode"
        class="toolbar"
      />
      <Editor
        style="height: 500px; overflow-y: hidden;"
        v-model="html"
        :defaultConfig="editorConfig"
        :mode="mode"
        @onCreated="onCreated"
      />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

export default Vue.extend({
  name:'newPage',
  components: { Editor, Toolbar },
  data() {
    return {
      editor: null,
      html: '<p>hello</p>',
      toolbarConfig: { },
      editorConfig: { placeholder: '请输入内容...' },
      mode: 'default', // or 'simple'
    }
  },
  methods: {
    goBack(){
      this.$router.go(-1)
    },
    onSave(){
      console.log(this)
    },
    onCreated(editor) {
      this.editor = Object.seal(editor) // 一定要用 Object.seal() ，否则会报错
    },
  },
  mounted() {
    // 模拟 ajax 请求，异步渲染编辑器
    setTimeout(() => {
      this.html = '<p>模拟 Ajax 异步设置内容 HTML</p>'
    }, 1500)
  },
  beforeDestroy() {
    const editor = this.editor
    if (editor == null) return
    editor.destroy() // 组件销毁时，及时销毁编辑器
  }
})
</script>

<style>
@import '~@wangeditor/editor/dist/css/style.css';
@media (max-width: 750px) {
  .toolbar{
    display: none;
  }
  .btn{
    padding: 0;
    font-size: 0.5rem;
    width: 4.5rem;
    height: 2rem;
  }
}
</style>
