<template>
  <div class="status-bar">
    <counter title="mines" :value="mines"></counter>
    <reset-button></reset-button>
    <counter title="time" :value="playTime"></counter>
  </div>
</template>

<script>
import Counter from '../form/Counter.vue';
import ResetButton from "../form/ResetButton";

export default {
  components: {
    ResetButton,
    Counter,
  },
  computed: {
    mines: function() {
      return this.$store.state.game.setting.numMines - this.$store.state.game.flagCount;
    },
    playTime: function() {
      return this.$store.state.game.playTime;
    }
  }
};
</script>

<style scoped>
.status-bar {
  display: inline-flex;
  justify-content: space-between;
}
.status-bar >>> .box {
  margin: 0.15rem;
  width: 6.9rem;
}

</style>