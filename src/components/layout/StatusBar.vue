<template>
  <div class="status-bar">
    <ms-counter title="mines" :value="mines"></ms-counter>
    <reset-button></reset-button>
    <ms-counter title="time" :value="playTime"></ms-counter>
  </div>
</template>

<script>
import MsCounter from "../form/MsCounter.vue";
import ResetButton from "../form/ResetButton";

export default {
  components: {
    ResetButton,
    MsCounter,
  },
  computed: {
    mines: function () {
      return (
        this.$store.state.game.setting.numMines -
        this.$store.state.game.flagCount
      );
    },
    playTime: function () {
      return this.$store.state.game.playTime;
    },
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
  width: 6.9rem;
}
</style>