<template>
  <div>Content: {{ data }}</div>
  <button @click="changeName">打个招呼!</button>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  name: 'Content',
  props: {
    msg: String,
  },
  setup(props, context) {
    const data = ref(props.msg)

    function changeName() {
      context.emit('change', 'Hello,齐尧!')
    }

    return { data, changeName }
  },
}
</script>

<style></style>
