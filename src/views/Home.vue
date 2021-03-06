<template>
  <div>Home</div>
</template>

<script>
export default {
  mounted() {
    console.log('这个男人是谁:>> ', this.$store.state.author)
    console.log('他怎么样:>> ', this.$store.state.describe)
  },
}
</script>

<style></style>
