<template>
  <div id="app">
    <header>
      <div class="contents">
        <h1>vue-minesweeper</h1>
        <nav>
          <router-link to="/">Top</router-link>
          <router-link to="/play">Play</router-link>
          <router-link to="/setting">Setting</router-link>
        </nav>
      </div>
    </header>
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

.contents {
  width: 23rem;
  margin: 0 auto;
}

body {
  margin: 0;
}

header {
  margin-bottom: 1rem;
  background-color: #000;
  color: #fff;
}

header h1 {
  padding: 0.5em 0;
  margin: 0;
  text-align: left;
}

nav {
  display: flex;
}

nav a {
  text-decoration: none;
  color: #fff;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  width: 6.3rem;
  display: inline-block;
}

nav .router-link-exact-active {
  background-color: #fff;
  color: #000;
}
</style>
