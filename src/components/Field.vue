<template>
  <div class="field">
    <row v-for="(values, index) in game.field" :key="index" :values="values"></row>
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
  border: 4px solid #000;
  padding: 2px;
}
</style>