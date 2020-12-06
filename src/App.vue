<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/play">Play</router-link> |
      <router-link to="/settings">Settings</router-link> |
    </div>
    <router-view :game="game" />
  </div>
</template>

<script>
import Game from "@/lib/Game";

export default {
  name: "app",
  data() {
    let game = new Game();
    game.initialize();
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
}

#nav {
  margin: 1rem 0;
}
</style>
