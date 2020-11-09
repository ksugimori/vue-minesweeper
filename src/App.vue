<template>
  <div id="app">
    <cell></cell>
  </div>
</template>

<script>
import Cell from './components/Cell'

export default {
  name: 'app',
  components: {
    Cell
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
