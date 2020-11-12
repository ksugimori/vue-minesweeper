<template>
  <div class="row">
    <cell v-for="(cellObject, index) in cellObjects" :key="index" :obj="cellObject"></cell>
  </div>
</template>

<script>
import Cell from "./Cell";

export default {
  props: {
    cellObjects: Array,
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