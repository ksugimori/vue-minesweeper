<template>
  <div class="counter">
    {{ value }}
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped>
.counter {
  background-color: #35495e;
  text-align: right;
  padding: 0 0.6rem;
}
</style>
