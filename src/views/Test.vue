<template>
  <div>Test</div>
  <p>{{ msg }}的年龄为{{ age }}</p>
  <div>{{ double }}</div>
  <Content :msg="msg" @change="showName" />
  <button @click="add">+</button>
</template>

<script lang="ts">
import { ref, toRefs, toRef, reactive, computed, defineProps } from 'vue'
import Content from 'comps/Content.vue'

export default {
  name: 'Test',
  components: {
    Content,
  },
  props: {
    title: String,
  },
  setup(props, { attrs, slots, emit }) {
    const msg = ref('齐尧')
    const age = ref(18)
    const double = computed(() => {
      return age.value * 2
    })
    function add() {
      age.value += 1
    }
    function showName(params: any) {
      alert(params)
    }

    const title = toRef(props, 'title')
    console.log(title.value)
    // Attributes (Non-reactive object)
    console.log(attrs, slots, emit)

    // watch(msg, (newVal, oldVal, clean) => {
    //   // 使用clean时候是处理重复性的watch监听事件
    //   console.log(age.value)
    //   clean(() => {
    //     console.log('clean')
    //   })
    // })

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

    return { msg, age, add, double, showName }
  },
}
</script>

<style></style>
