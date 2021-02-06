<template>
  <div class="setting">
    <section>
      <h1>Preset</h1>

      <div class="btn-row">
        <ms-button
          v-for="preset in presets"
          :key="preset.name"
          :active="setting.equals(preset)"
          @click="
            setting.merge(preset);
            confirm();
          "
        >
          {{ preset.name }}
        </ms-button>
      </div>
    </section>

    <section>
      <h1>Manual</h1>
      <form>
        <div class="form-item">
          <label>WIDTH</label>
          <ms-input-number
            v-model="setting.width"
            :min="1"
            :max="30"
            @complete="confirm"
          />
        </div>

        <div class="form-item">
          <label>HEIGHT</label>
          <ms-input-number
            v-model="setting.height"
            :min="1"
            :max="16"
            @complete="confirm"
          />
        </div>

        <div class="form-item">
          <label>MINE</label>
          <ms-input-number
            v-model="setting.numMines"
            :min="0"
            :max="99"
            @complete="confirm"
          />
        </div>
      </form>
    </section>
  </div>
</template>

<script>
import MsInputNumber from '@/components/presentations/MsInputNumber.vue'
import MsButton from '@/components/presentations/MsButton.vue'
import Setting from '@/models/Setting.js'

export default {
  components: { MsInputNumber, MsButton },
  data: function () {
    return {
      presets: [Setting.EASY, Setting.NORMAL, Setting.HARD]
    }
  },
  computed: {
    setting: function () {
      return this.$store.state.setting
    }
  },
  methods: {
    confirm: function () {
      this.setting.adjustNumMines()
      this.$store.commit('updateSetting')
      this.$store.commit('initialize')
    }
  }
}
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

.btn-row {
  display: flex;
  justify-content: space-between;
}
</style>
