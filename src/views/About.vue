<template>
  <div class="about">
    <h1>{{ name }}</h1>

    ​
  </div>
</template>
​
<script lang="ts">
import { ref, watch } from 'vue'
export default {
  name: 'about',
  setup() {
    const name = ref('齐尧出品')
    return {
      name,
    }
  },
}
</script>
​
