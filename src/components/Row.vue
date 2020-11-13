<template>
  <div class="row">
    <cell
      v-for="(cell, index) in cells"
      @cell-click="open"
      :key="index"
      :obj="cell"
      :point="{ row: row, col: index }"
    ></cell>
  </div>
</template>

<script>
import Cell from "./Cell";

export default {
  props: {
    cells: Array,
    row: Number,
  },
  components: {
    Cell,
  },
  methods: {
    open: function (point) {
      this.$emit('cell-click', point);
    },
  },
};
</script>

<style scoped>
.row {
  display: inline-flex;
}
</style>