<template>
  <div class="item">
    <div class="title">
      {{ title }}
    </div>
    <div class="box">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.item {
  margin: 0.15rem;
  width: 6.9rem;
}
.item > .title {
  color: #35495e;
  height: 1rem;
  text-align: left;
  font-size: 0.8rem;
}
.item > .box {
  width: 6.9rem;
  height: 3.1rem;
  color: #fff;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 3.1rem;
}
</style>
