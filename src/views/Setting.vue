<template>
  <div class="setting">
    <h1>Setting</h1>

    <form>
      <div class="form-item">
        <label>WIDTH</label>
        <number-input
          v-model="game.setting.width"
          :min="0"
          :max="100"
        ></number-input>
      </div>

      <div class="form-item">
        <label>HEIGHT</label>
        <number-input
          v-model="game.setting.height"
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

    <div class="btn-row">
      <button class="btn" @click="update(9, 9, 10)">EASY</button>
      <button class="btn" @click="update(16, 16, 40)">NORMAL</button>
      <button class="btn" @click="update(30, 16, 90)">HARD</button>
    </div>

    <div class="btn-row">
      <router-link to="/play" @click.native="back" :class="['btn', 'btn-text']"
        >Back</router-link
      >
    </div>
  </div>
</template>

<script>
import NumberInput from "../components/form/NumberInput.vue";
export default {
  components: { NumberInput },
  props: {
    game: Object,
  },
  methods: {
    back: function () {
      this.game.initialize();
    },
    update: function (w, h, m) {
      this.game.setting = {
        width: w,
        height: h,
        numMines: m,
      };
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

h1 {
  margin: 0;
  background-color: #000;
  color: #fff;
  padding: 0.5rem;
}

.btn {
  cursor: pointer;
  text-decoration: none;
  border: 0.3rem solid #000;
  width: 7rem;
  height: 3rem;
  font-size: 1.2rem;
  background-color: #000;
  color: #fff;
}

.btn:hover {
  background-color: #fff;
  color: #000;
}

.btn-text {
  border: none;
  padding: none;
  margin: 0;
  background-color: transparent;
  color: #000;
}

.btn-row {
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
}
</style>