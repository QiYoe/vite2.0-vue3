<template>
  <div id="app">
    <HelloWorld msg="Hello Vue 3 + Vite" @myclick="onmyclick" ref="hw" />
    {{ num }}
    <div id="nav">
      <router-link to="/">todoList</router-link> |
      <router-link to="/test">Test</router-link>
    </div>
    <el-button type="success">el-button</el-button>
    <el-input type="info" />
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import HelloWorld from 'comps/HelloWorld.vue'
import { ref } from 'vue'

const num = ref(0)
const hw = ref()

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
const onmyclick = () => {
  console.log('myclick from helloWorld')
  num.value++
  hw.value.someMethod()
}
</script>

<style lang="scss"></style>
