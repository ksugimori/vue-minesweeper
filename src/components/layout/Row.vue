<template>
  <div class="row">
    <ms-cell
      v-for="(cell, index) in cells"
      :key="index"
      :text="cell.text"
      :hasMine="cell.isMine"
      :flagged="cell.isFlagged"
      :opened="cell.isOpen"
      @cellClick="$emit('cellClick', index)"
      @cellRightClick="$emit('cellRightClick', index)"
    ></ms-cell>
  </div>
</template>

<script>
import MsCell from "./MsCell";

export default {
  props: {
    cells: Array,
  },
  components: {
    MsCell,
  },
};
</script>

<style scoped>
.row {
  display: inline-flex;
}
</style>