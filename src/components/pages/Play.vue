<template>
  <div id="game">
    <div class="board">
      <ms-status-bar />
      <ms-field />
    </div>
  </div>
</template>

<script>
import MsStatusBar from '@/components/containers/MsStatusBar.vue'
import MsField from '@/components/containers/MsField.vue'

export default {
  components: {
    MsField,
    MsStatusBar
  }
}
</script>

<style scoped>
.board {
  padding: 0.5em;
  display: inline-grid;
}

</style>
