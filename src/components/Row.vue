<template>
  <div class="row">
    <cell v-for="(value, index) in values" :key="index" :value="value"></cell>
  </div>
</template>

<script>
import Cell from "./Cell";

export default {
  props: {
    values: Array,
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