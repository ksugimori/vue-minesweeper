<template>
  <div id="app">
    <reset-button :game="game"></reset-button>
    <field :game="game"></field>
  </div>
</template>

<script>
import Game from "../src/classes/Game";
import Field from "./components/Field";
import ResetButton from "./components/ResetButton";

export default {
  name: "app",
  components: {
    Field,
    ResetButton
  },
  data() {
    let game = new Game();
    game.initialize(9, 9, 2);
    return {
      game: game,
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
