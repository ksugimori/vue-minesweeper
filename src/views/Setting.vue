<template>
  <div class="setting">
    <h1>Setting</h1>

    <form>
      <div class="form-item">
        <label>行</label>
        <input type="number" v-model.number="game.setting.height" />
      </div>

      <div class="form-item">
        <label>列</label>
        <input type="number" v-model.number="game.setting.width" />
      </div>

      <div class="form-item">
        <label>地雷数</label>
        <input type="number" v-model.number="game.setting.numMines" />
      </div>
    </form>

    <router-link to="/play" @click.native="back">Back</router-link>
  </div>
</template>

<script>
export default {
  props: {
    game: Object,
  },
  methods: {
    back: function() {
      this.game.initialize();
    }
  }
};
</script>

<style scoped>
.form-item {
  display: flex;
  margin-top: 1rem;
}

.form-item label {
  width: 10em;
  text-align: right;
  padding: 0 0.5rem;
}

.form-item input[type="number"] {
  padding: 0.5rem;
}

.setting {
  width: 22rem;
  display: block;
  margin: 0 auto;
  text-align: left;
}

.setting h1 {
  margin: 0;
  background-color: #000;
  color: #fff;
  padding: 0.5rem;
}

.setting a {
  text-decoration: none;
  border: 0.3rem solid #000;
  padding: 0.2rem;
  color: #000;
}
</style>