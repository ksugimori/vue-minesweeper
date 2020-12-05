<template>
  <div id="app">
    <div class="board">
      <status-bar :game="game"></status-bar>
      <field :game="game"></field>
    </div>
  </div>
</template>

<script>
import Game from "../src/lib/Game";
import StatusBar from "./components/StatusBar.vue";
import Field from "./components/Field";

export default {
  name: "app",
  components: {
    Field,
    StatusBar,
  },
  data() {
    let game = new Game();
    game.initialize(9, 9, 10);
    return {
      game: game,
    };
  },
};
</script>

<style>
#app {
  font-family: "Roboto Mono", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 1rem;
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
