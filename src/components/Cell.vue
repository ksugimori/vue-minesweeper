<template>
  <div
    class="cell"
    :class="[isOpen ? 'open' : '', colorClassName]"
    @click="flip"
  >
    {{ value }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "1",
      isOpen: false,
    };
  },
  computed: {
    colorClassName() {
      return `color-${this.value}`;
    },
  },
  methods: {
    flip() {
      // TODO: 裏から表へは戻せない方が良い？
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped>
.cell {
  width: 30px;
  height: 30px;
  border: 4px solid #000;
  background-color: #000;
  user-select: none;
  color: transparent;
  font-family: monospace;
  font-weight: bold;
  font-size: 28px;
  line-height: 30px;
  text-align: center;
}
.cell.open {
  background-color: #fff;
  color: #000;
}
.cell.open.color-1 {
  color: blue;
}
</style>