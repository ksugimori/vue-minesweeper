<template>
  <div class="field">
    <row
      v-for="(row, index) in rows"
      :key="index"
      :cells="row"
      @cellClick="(x) => open(x, index)"
      @cellRightClick="(x) => flag(x, index)"
    ></row>
  </div>
</template>

<script>
import Row from "./Row";

export default {
  components: {
    Row,
  },
  computed: {
    rows: function () {
      return this.$store.state.game.field.rows;
    },
  },
  methods: {
    open: function (x, y) {
      this.$store.commit("open", { x, y });
    },
    flag: function (x, y) {
      this.$store.commit("flag", { x, y });
    },
  },
};
</script>

<style scoped>
.field {
  display: inline-flex;
  flex-direction: column;
}
</style>