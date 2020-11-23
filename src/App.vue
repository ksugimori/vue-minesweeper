<template>
  <div id="app">
    <field :game="game"></field>
  </div>
</template>

<script>
import Game from "../src/lib/Game";
import Field from "./components/Field";

export default {
  name: "app",
  components: {
    Field,
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
  font-family: 'Roboto Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
