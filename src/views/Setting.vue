<template>
  <div class="setting">
    <h1>Setting</h1>

    <form>
      <div class="form-item">
        <label>Height</label>
        <number-input
          v-model="game.setting.height"
          :min="0"
          :max="100"
        ></number-input>
      </div>

      <div class="form-item">
        <label>Width</label>
        <number-input
          v-model="game.setting.width"
          :min="0"
          :max="100"
        ></number-input>
      </div>

      <div class="form-item">
        <label>MINE</label>
        <number-input
          v-model="game.setting.numMines"
          :min="0"
          :max="100"
        ></number-input>
      </div>
    </form>

    <router-link to="/play" @click.native="back">Back</router-link>
  </div>
</template>

<script>
import NumberInput from "../components/NumberInput.vue";
export default {
  components: { NumberInput },
  props: {
    game: Object,
  },
  methods: {
    back: function () {
      this.game.initialize();
    },
  },
};
</script>

<style scoped>
.form-item {
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
  line-height: 2.6rem;
  font-weight: 700;
  font-size: 1.2rem;
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