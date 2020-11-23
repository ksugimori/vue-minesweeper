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
  height: 16px;
  text-align: left;
  font-size: 12px;
}
.counter > .value {
  text-align: right;
  height: 34px;
  line-height: 34px;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  background-color: #000;
  padding: 6px;
}
</style>