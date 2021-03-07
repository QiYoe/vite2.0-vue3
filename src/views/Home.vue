<template>
  <div>Home</div>
  <div>{{ msg }}的年龄为{{ age }}</div>
  <div>{{ double }}</div>
  <button @click="add">+</button>
</template>

<script lang="ts">
import { ref, toRefs, toRef, reactive, computed } from 'vue'

// toRefs 用于将响应式对象变成普通对象
// reactive 它主要是处理你的对象让它经过 Proxy 的加工变为一个响应式的对象，
// ref 使用数据需要return

export default {
  name: 'Home',
  //   setup() {
  //     const person = reactive({
  //         msg: '李飞宇',
  //         age: 18,
  //         double : computed(() =>{
  //           return person.age * 3
  //         })
  //     })
  // ​
  //     function add() {
  //       person.age += 1
  //     }
  //     return { ...toRefs(person), add }

  //   },
  mounted() {
    // console.log('这个男人是谁:>> ', this.$store.state.author)
    // console.log('他怎么样:>> ', this.$store.state.describe)
  },
}
</script>

<style></style>
