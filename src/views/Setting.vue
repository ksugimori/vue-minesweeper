<template>
  <div class="setting">
    <section>
      <h1>Preset</h1>

      <div class="btn-row">
        <button class="btn" @click="update(9, 9, 10)">EASY</button>
        <button class="btn" @click="update(16, 16, 40)">NORMAL</button>
        <button class="btn" @click="update(30, 16, 90)">HARD</button>
      </div>
    </section>

    <section>
      <h1>Manual</h1>
      <form>
        <div class="form-item">
          <label>WIDTH</label>
          <number-input
            v-model="setting.width"
            @complete="confirm"
            :min="0"
            :max="100"
          ></number-input>
        </div>

        <div class="form-item">
          <label>HEIGHT</label>
          <number-input
            v-model="setting.height"
            @complete="confirm"
            :min="0"
            :max="100"
          ></number-input>
        </div>

        <div class="form-item">
          <label>MINE</label>
          <number-input
            v-model="setting.numMines"
            @complete="confirm"
            :min="0"
            :max="100"
          ></number-input>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
import NumberInput from "../components/form/NumberInput.vue";
export default {
  components: { NumberInput },
  data: function () {
    return {
      setting: { ...this.$store.state.game.setting },
    };
  },
  methods: {
    update: function (w, h, m) {
      this.setting = {
        width: w,
        height: h,
        numMines: m,
      };
      this.confirm();
    },
    confirm: function () {
      this.$store.commit("updateSetting", { setting: this.setting });
      this.$store.commit("initialize");
    },
  },
};
</script>

<style scoped>
section {
  margin-bottom: 2rem;
}

section > h1 {
  margin: 0.6rem 0;
  font-weight: bold;
}

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

.btn {
  cursor: pointer;
  text-decoration: none;
  border: 0.3rem solid #35495e;
  width: 7rem;
  height: 3rem;
  font-size: 1.2rem;
  background-color: #35495e;
  color: #fff;
}

.btn:hover {
  background-color: #fff;
  color: #35495e;
}

.btn-text {
  border: none;
  padding: none;
  margin: 0;
  background-color: transparent;
  color: #35495e;
}

.btn-row {
  display: flex;
  justify-content: space-between;
}
</style>