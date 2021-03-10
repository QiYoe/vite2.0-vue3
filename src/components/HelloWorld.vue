<template>
  <h1>{{ msg }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank"
      >Vite Documentation</a
    >
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button @click="state.count++">count is: {{ state.count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <!-- <button @click="emit('myclick')">emit</button> -->
  <button @click="onclick">emit</button>
</template>

<script setup lang="ts">
import Comp from 'comps/Comp.vue'
import { defineProps, reactive, defineEmit, useContext } from 'vue'

// 定义属性(同时暴露)
const props = defineProps({
  msg: String,
})
console.log(props)

// 获取上下文
const ctx = useContext()
console.log(ctx)
ctx.expose({
  // 外部可以获取此方法
  someMethod() {
    console.log('我是helloworld里面的方法')
  },
})

// 定义事件
const emit = defineEmit(['myclick'])
const onclick = () => {
  // emit('myclick')
  ctx.emit('myclick')
}

const state = reactive({ count: 0 })

// 请求mock api
fetch('/api/getUsers')
  .then((data) => data.json())
  .then((res) => {
    console.log(111, res)
  })
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
