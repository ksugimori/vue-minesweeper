<template>
  <div id="game">
    <div class="board">
      <status-bar></status-bar>
      <ms-field></ms-field>
    </div>
  </div>
</template>

<script>
import StatusBar from "@/components/layout/StatusBar";
import MsField from "@/components/layout/MsField";

export default {
  components: {
    MsField,
    StatusBar,
  },
};
</script>

<style scoped>
.board {
  padding: 0.5em;
  display: inline-grid;
}

* {
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

</style>
