<template>
  <div class="settings">
    <h1>Settings</h1>

    <form>
      <div class="form-item">
        <label>行</label>
        <input type="number" v-model.number="game.settings.height" />
      </div>

      <div class="form-item">
        <label>列</label>
        <input type="number" v-model.number="game.settings.width" />
      </div>

      <div class="form-item">
        <label>地雷数</label>
        <input type="number" v-model.number="game.settings.numMines" />
      </div>
    </form>
    <router-link to="/play">戻る</router-link>
  </div>
</template>

<script>
export default {
  props: {
    game: Object,
  },
};
</script>

<style scoped>
.form-item {
  display: flex;
  margin-top: 1em;
}

.form-item label {
  width: 10em;
  text-align: right;
  padding: 0 0.5em;
}

.form-item input[type="number"] {
  padding: 0.5em;
}

.settings {
  border: 0.3em solid #000;
  padding: 0.2em;
  width: 21rem;
  display: block;
  margin: 0 auto;
  text-align: left;
  background-color: #000;
  color: #fff;
}

.settings h1 {
  margin: 0;
}

.settings a {
  color: #fff;
}
</style>