<template>
  <div class="box counter">
    <div class="title">{{ title }}</div>
    <div class="value">{{ value }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    value: Number,
  },
};
</script>

<style scoped>
.counter > .title {
  color: #000;
  height: 1rem;
  text-align: left;
  font-size: 0.8rem;
}
.counter > .value {
  text-align: right;
  height: 1.9rem;
  line-height: 1.9rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  background-color: #000;
  padding: 0.6rem;
}
</style>