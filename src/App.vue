<template>
  <div id="app">
    <field :game="game"></field>
  </div>
</template>

<script>
import Field from "./components/Field";
import Game from "../src/classes/Game";

export default {
  name: "app",
  components: {
    Field,
  },
  data() {
    let game = new Game();
    game.initialize(9, 9, 2);
    return {
      game: game
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
