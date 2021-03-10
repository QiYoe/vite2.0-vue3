<template>
  <div id="app">
    <HelloWorld msg="Hello Vue 3 + Vite" @myclick="onmyclick" ref="hw" />
    {{ num }}
    <div id="nav">
      <router-link to="/">todoList</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/home">home</router-link> |
      <router-link to="/test">test</router-link> |
      <!-- <router-link to="/helloWorld">HelloWorld</router-link> -->
    </div>
    <router-view />
  </div>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
</template>

<script lang="ts" setup>
import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue'

const num = ref(0)
const hw = ref(null)

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
const onmyclick = () => {
  console.log('myclick from helloWorld')
  num.value++
  hw.value.someMethod()
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#nav {
  padding: 30px;
  ​ a {
    font-weight: bold;
    color: #2c3e50;
    ​ &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
