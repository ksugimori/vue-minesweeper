<template>
  <div class="mine">
    <div class="circle" />
    <div class="bar" />
    <div
      class="bar"
      style="transform: rotate(45deg)"
    />
    <div
      class="bar"
      style="transform: rotate(90deg)"
    />
    <div
      class="bar"
      style="transform: rotate(135deg)"
    />
  </div>
</template>

<script>
</script>

<style scoped>
.mine > .circle {
  background-color: #35495e;
  position: absolute;
  width: 1.2rem;
  height: 1.2rem;
  top: 0.45rem;
  left: 0.45rem;
  border-radius: 0.6rem;
}
.mine > .bar {
  background-color: #35495e;
  position: absolute;
  width: 1.7rem;
  height: 0.3rem;
  top: 0.9rem;
  left: 0.2rem;
  border-radius: 0.15rem;
}
</style>
