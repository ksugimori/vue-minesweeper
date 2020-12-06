<template>
  <div class="status-bar">
    <counter title="mines" :value="game.settings.numMines - game.flagCount"></counter>
    <reset-button :game="game"></reset-button>
    <counter title="time" :value="game.playTime"></counter>
  </div>
</template>

<script>
import Counter from './Counter.vue';
import ResetButton from "./ResetButton";

export default {
  props: {
    game: Object,
  },
  components: {
    ResetButton,
    Counter,
  },
};
</script>

<style scoped>
.status-bar {
  display: inline-flex;
  justify-content: space-between;
}
.status-bar >>> .box {
  margin: 0.15rem;
  width: 6.75rem;
}

</style>