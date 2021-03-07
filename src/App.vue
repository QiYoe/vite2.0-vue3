<template>
  <div id="app">
    <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
    <div id="nav">
      <router-link to="/">todoList</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/home">home</router-link> |
      <router-link to="/test">test</router-link>
    </div>
    <router-view />
  </div>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
</template>

<script lang="ts">
// import HelloWorld from './components/HelloWorld.vue'

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
export default {
  name: 'App',
  // components: {
  //   HelloWorld,
  // },
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
