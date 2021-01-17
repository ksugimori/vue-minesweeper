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
import MsResetButton from '@/components/atoms/MsResetButton.vue'
import MsStatusBarItem from '@/components/organisms/MsStatusBarItem.vue'
import MsCounter from '@/components/atoms/MsCounter.vue'

export default {
  components: {
    MsResetButton,
    MsStatusBarItem,
    MsCounter
  },
  computed: {
    mines: function () {
      return (
        this.$store.state.game.setting.numMines -
        this.$store.state.game.flagCount
      )
    },
    playTime: function () {
      return this.$store.state.game.playTime
    },
    status: function () {
      return this.$store.state.game.status
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
