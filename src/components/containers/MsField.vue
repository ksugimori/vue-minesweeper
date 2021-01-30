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
        :count="cell.countString"
        :mine="cell.isMine"
        :flag="cell.isFlag"
        :miss="status.isEnd && cell.isMiss"
        :open="status.isEnd || cell.isOpen"
        @click="open(x, y)"
        @right-click="flag(x, y)"
      />
    </div>
  </div>
</template>

<script>
import MsCell from '@/components/presentations/MsCell.vue'

export default {
  components: {
    MsCell
  },
  computed: {
    game: function () {
      return this.$store.state.game
    },
    field: function () {
      return this.game.field
    },
    status: function () {
      return this.game.status
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
