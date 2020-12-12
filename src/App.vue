<template>
  <div id="app">
    <div id="nav">
      test | 
      <router-link to="/play">Play</router-link> |
      <router-link to="/setting">Setting</router-link>
    </div>
    <router-view :game="game" />
  </div>
</template>

<script>
import "normalize.css";
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

* {
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

#nav {
  margin: 1rem 0;
}
</style>
