<template>
  <div id="game">
    <div class="board">
      <status-bar :game="game"></status-bar>
      <field :game="game"></field>
    </div>
  </div>
</template>

<script>
import StatusBar from "@/components/layout/StatusBar";
import Field from "@/components/layout/Field";

export default {
  props: {
    game: Object
  },
  components: {
    Field,
    StatusBar,
  },
};
</script>

<style scoped>
.board {
  border: 0.3em solid #000;
  padding: 0.2em;
  display: inline-grid;
}
</style>
