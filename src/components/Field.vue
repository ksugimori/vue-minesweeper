<template>
  <div class="field">
    <row
      v-for="(row, index) in game.field.rows"
      :key="index"
      :cells="row"
      :onClickCell="(x) => game.open(x, index)"
      :onRightClickCell="(x) => game.flag(x, index)"
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