<template>
  <div>
    <div class="padding"></div>
    <div @click="game.initialize()" :class="['btn', 'box']">Reset</div>
  </div>
</template>

<script>
export default {
  props: {
    game: Object,
  },
};
</script>

<style scoped>
.padding {
  content: '';
  display: block;
  height: 16px;
}
.btn {
  width: 84px !important;
  height: 40px !important;
  border: 3px solid #000;
  background-color: #000;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  line-height: 40px;
  cursor: pointer;
}
.btn:hover {
  background-color: #fff;
  color: #000;
}
</style>