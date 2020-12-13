<template>
  <div class="row">
    <cell
      v-for="(cell, index) in cells"
      :key="index"
      :text="cell.text"
      :hasMine="cell.isMine"
      :flagged="cell.isFlagged"
      :opened="cell.isOpen"
      @cellClick="$emit('cellClick', index)"
      @cellRightClick="$emit('cellRightClick', index)"
    ></cell>
  </div>
</template>

<script>
import Cell from "./Cell";

export default {
  props: {
    cells: Array,
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