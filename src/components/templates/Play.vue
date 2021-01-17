<template>
  <div id="game">
    <div class="board">
      <ms-status-bar />
      <ms-field />
    </div>
  </div>
</template>

<script>
import MsStatusBar from '@/components/organisms/MsStatusBar.vue'
import MsField from '@/components/organisms/MsField.vue'

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
