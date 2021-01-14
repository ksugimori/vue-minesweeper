<template>
  <div class="flag">
    <div class="pole" />
    <div class="field" />
  </div>
</template>

<script>
</script>

<style scoped>
.flag > .pole {
  position: absolute;
  background-color: #fff;
  width: 0.2rem;
  height: 1.3rem;
  top: 0.4rem;
  left: 0.6rem;
}
.flag > .field {
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0.45rem 0 0.45rem 0.9rem;
  border-color: transparent transparent transparent #fff;
  top: 0.4rem;
  left: 0.8rem;
}
</style>
