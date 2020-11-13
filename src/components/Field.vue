<template>
  <div class="field">
    <row
      v-for="(cells, index) in game.field"
      @cell-click="open"
      :key="index"
      :cells="cells"
      :row="index"
    ></row>
  </div>
</template>

<script>
import Row from "./Row";

export default {
  props: {
    game: Object,
  },
  components: {
    Row,
  },
  methods: {
    open: function (point) {
      this.game.open(point.row, point.col);
    },
  },
};
</script>

<style scoped>
.field {
  display: inline-flex;
  flex-direction: column;
  border: 4px solid #000;
  padding: 2px;
}
</style>