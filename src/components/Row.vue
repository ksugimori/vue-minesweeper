<template>
  <div class="row">
    <cell
      v-for="(cell, index) in cells"
      :key="index"
      :obj="cell"
      :onClick="() => onClickCell(index)"
      :onRightClick="() => onRightClickCell(index)"
    ></cell>
  </div>
</template>

<script>
import Cell from "./Cell";

export default {
  props: {
    cells: Array,
    onClickCell: Function,
    onRightClickCell: Function,
  },
  components: {
    Cell,
  },
};
</script>

<style scoped>
.row {
  display: inline-flex;
}
</style>