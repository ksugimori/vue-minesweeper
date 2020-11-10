<template>
  <div class="field">
    <row v-for="(values, index) in field" :key="index" :values="values"></row>
  </div>
</template>

<script>
import Row from "./Row";

export default {
  data() {
    return {
      field: [
        [1, 1, 1, 0, 0, 0, 0, 0],
        [1, -1, 1, 1, 2, 2, 1, 0],
        [1, 1, 1, 1, -1, -1, 1, 0],
        [0, 0, 0, 1, 2, 2, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
      ],
    };
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