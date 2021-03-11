<template>
  <div class="app-wrapper">
    <!-- 侧边栏 -->
    <div>layout</div>
    <!-- 右侧内容区 -->
    <div>
      <Navbar></Navbar>

      <AppMain></AppMain>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppMain from './components/AppMain.vue'
import Navbar from './components/Navbar.vue'
</script>

<style lang="scss" scoped>
@import 'styles/mixin.scss';

.app-wrapper {
  // @include clearfix;
  position: relative;
  height: 100%;
  width: 100px;
}
</style>
