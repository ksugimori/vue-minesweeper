<template>
  <div class="field">
    <row
      v-for="(row, index) in game.field.table"
      :key="index"
      :cells="row"
      :onClickCell="(col) => game.open(index, col)"
      :onRightClickCell="(col) => game.flag(index, col)"
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
};
</script>

<style scoped>
.field {
  display: inline-flex;
  flex-direction: column;
}
</style>