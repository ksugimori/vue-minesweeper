<template>
  <div class="row">
    <ms-cell
      v-for="(cell, index) in cells"
      :key="index"
      :text="cell.text"
      :has-mine="cell.isMine"
      :flagged="cell.isFlagged"
      :opened="cell.isOpen"
      @cellClick="$emit('cellClick', index)"
      @cellRightClick="$emit('cellRightClick', index)"
    />
  </div>
</template>

<script>
import MsCell from '@/components/molecules/MsCell.vue'

export default {
  components: {
    MsCell
  },
  props: {
    cells: Array
  }
}
</script>

<style scoped>
.row {
  display: inline-flex;
}
</style>
