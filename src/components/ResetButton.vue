<template>
  <div>
    <button @click="game.initialize(9, 9, 1)" :class="['btn', 'btn-reset']">
      Reset
    </button>
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
.btn {
  padding: 0.5em;
  border: 4px solid #000;
}
.btn-reset {
  margin: 1em;
}
</style>