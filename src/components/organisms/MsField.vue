<template>
  <div class="field">
    <div
      v-for="(row, y) in field.rows"
      :key="y"
      class="row"
    >
      <ms-cell
        v-for="(cell, x) in row"
        :key="x"
        :text="cell.text"
        :has-mine="cell.isMine"
        :flagged="cell.isFlagged"
        :opened="cell.isOpen"
        :mistake="cell.isMistake"
        @cellClick="open(x, y)"
        @cellRightClick="flag(x, y)"
      />
    </div>
  </div>
</template>

<script>
import MsCell from '@/components/molecules/MsCell.vue'

export default {
  components: {
    MsCell
  },
  computed: {
    field: function () {
      return this.$store.state.game.field
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
.row {
  display: inline-flex;
  flex-direction: row;
}
</style>
