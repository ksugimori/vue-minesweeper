<template>
  <div class="status-bar">
    <ms-status-bar-item title="mines">
      <ms-counter :value="mines" />
    </ms-status-bar-item>
    <ms-status-bar-item>
      <ms-reset-button
        :status="status"
        @click="reset"
      />
    </ms-status-bar-item>
    <ms-status-bar-item title="time">
      <ms-counter :value="playTime" />
    </ms-status-bar-item>
  </div>
</template>

<script>
import MsStatusBarItem from '@/components/containers/MsStatusBarItem.vue'
import MsCounter from '@/components/presentations/MsCounter.vue'
import MsResetButton from '@/components/presentations/MsResetButton.vue'

export default {
  components: {
    MsStatusBarItem,
    MsCounter,
    MsResetButton
  },
  computed: {
    game: function () {
      return this.$store.state.game
    },
    mines: function () {
      if (this.status.isEnd) {
        return 0
      } else {
        return this.game.setting.numMines - this.game.flagCount
      }
    },
    playTime: function () {
      return this.game.playTime
    },
    status: function () {
      return this.game.status
    }
  },
  methods: {
    reset: function () {
      this.$store.commit('initialize')
    }
  }
}
</script>

<style scoped>
.status-bar {
  display: inline-flex;
  justify-content: space-between;
}
</style>
