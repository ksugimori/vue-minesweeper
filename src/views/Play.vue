<template>
  <div id="game">
    <div class="board">
      <status-bar :game="game"></status-bar>
      <field :game="game"></field>
    </div>
  </div>
</template>

<script>
import StatusBar from "@/components/game/StatusBar";
import Field from "@/components/game/Field";

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

<style>
.game {
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>

<style scoped>
.board {
  border: 0.3em solid #000;
  padding: 0.2em;
  display: inline-grid;
}
</style>
