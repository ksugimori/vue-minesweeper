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
  height: 1rem;
}
.btn {
  width: 6.15rem !important;
  height: 2.5rem !important;
  border: 0.3rem solid #000;
  background-color: #000;
  color: #fff;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 2.4rem;
  cursor: pointer;
}
.btn:hover {
  background-color: #fff;
  color: #000;
}
</style>