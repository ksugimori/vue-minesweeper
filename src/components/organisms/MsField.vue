<template>
  <div class="field">
    <ms-field-row
      v-for="(row, index) in rows"
      :key="index"
      :cells="row"
      @cellClick="(x) => open(x, index)"
      @cellRightClick="(x) => flag(x, index)"
    />
  </div>
</template>

<script>
import MsFieldRow from '@/components/organisms/MsFieldRow.vue'

export default {
  components: {
    MsFieldRow
  },
  computed: {
    rows: function () {
      return this.$store.state.game.field.rows
    }
  },
  methods: {
    open: function (x, y) {
      this.$store.commit('open', { x, y })
    },
    flag: function (x, y) {
      this.$store.commit('flag', { x, y })
    }
  }
}
</script>

<style scoped>
.field {
  display: inline-flex;
  flex-direction: column;
}
</style>
