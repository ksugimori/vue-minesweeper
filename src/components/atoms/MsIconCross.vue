<template>
  <div class="cross">
    <div
      class="bar"
      style="transform: rotate(-45deg)"
    />
    <div
      class="bar"
      style="transform: rotate(45deg)"
    />
  </div>
</template>

<style scoped>
.bar {
  content: "";
  display: block;
  position: absolute;
  background-color: #e60067;
  width: 0.3rem;
  height: 2.97rem;
  border-radius: 0.2rem;
  top: -0.435rem;
  left: 0.9rem;
}
</style>
