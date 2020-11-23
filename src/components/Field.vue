<template>
  <div class="field">
    <status-bar :game="game"></status-bar>
    <row
      v-for="(cells, index) in game.field"
      :key="index"
      :cells="cells"
      :onClickCell="col => game.open(index, col)"
    ></row>
  </div>
</template>

<script>
import Row from "./Row";
import StatusBar from './StatusBar.vue';

export default {
  props: {
    game: Object,
  },
  components: {
    Row,
    StatusBar,
  },
};
</script>

<style scoped>
.field {
  display: inline-flex;
  flex-direction: column;
  border: 0.3em solid #000;
  padding: 0.2em;
}
</style>