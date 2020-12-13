<template>
  <div class="bomb">
    <div class="circle"></div>
    <div class="bar-0"></div>
    <div class="bar-45"></div>
    <div class="bar-90"></div>
    <div class="bar-135"></div>
  </div>
</template>

<script>
</script>

<style scoped>
.bomb > .circle,
.bomb > .bar-0,
.bomb > .bar-45,
.bomb > .bar-90,
.bomb > .bar-135 {
  background-color: #35495e;
  position: absolute;
}
.bomb > .circle {
  width: 1.2rem;
  height: 1.2rem;
  top: 0.45rem;
  left: 0.45rem;
  border-radius: 0.6rem;
}
.bomb > .bar-0,
.bomb > .bar-45,
.bomb > .bar-90,
.bomb > .bar-135 {
  width: 1.7rem;
  height: 0.3rem;
  top: 0.9rem;
  left: 0.2rem;
  border-radius: 0.15rem;
}
.bomb > .bar-45 {
  transform: rotate(45deg);
}
.bomb > .bar-90 {
  transform: rotate(90deg);
}
.bomb > .bar-135 {
  transform: rotate(135deg);
}
</style>