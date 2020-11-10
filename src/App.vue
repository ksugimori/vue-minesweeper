<template>
  <div id="app">
    <div style="display: flex; flex-direction: column">
      <row :values="[1, 2, 3, 4, 5, 6, 7, 8]"></row>
      <row :values="[1, 2, 3, 4, 5, 6, 7, 8]"></row>
      <row :values="[1, 2, 3, 4, 5, 6, 7, 8]"></row>
      <row :values="[1, 2, 3, 4, 5, 6, 7, 8]"></row>
      <row :values="[1, 2, 3, 4, 5, 6, 7, 8]"></row>
      <row :values="[1, 2, 3, 4, 5, 6, 7, 8]"></row>
      <row :values="[1, 2, 3, 4, 5, 6, 7, 8]"></row>
      <row :values="[1, 2, 3, 4, 5, 6, 7, 8]"></row>
    </div>
  </div>
</template>

<script>
import Row from "./components/Row";

export default {
  name: "app",
  components: {
    Row,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
