<template>
  <button
    :class="['btn', active ? 'btn-active' : '']"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script>

export default {
  props: {
    active: Boolean,
    setting: {
      type: Object,
      default: null
    }
  }
}
</script>

<style scoped>
.btn {
  cursor: pointer;
  text-decoration: none;
  border: 0.3rem solid #35495e;
  width: 7rem;
  height: 3rem;
  font-size: 1.2rem;
  background-color: #35495e;
  color: #fff;
}

.btn:hover,
.btn-active {
  background-color: #fff;
  color: #35495e;
}

.btn-active {
  pointer-events: none;
}

.btn-text {
  border: none;
  padding: none;
  margin: 0;
  background-color: transparent;
  color: #35495e;
}
</style>
