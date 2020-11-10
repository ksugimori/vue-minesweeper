<template>
  <div id="app">
    <field></field>
  </div>
</template>

<script>
import Field from "./components/Field";

export default {
  name: "app",
  components: {
    Field,
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
