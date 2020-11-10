<template>
  <div
    class="cell"
    :class="isOpen ? ['open', colorClassName] : []"
    @click="flip"
  >
    {{ isOpen ? value : "" }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  props: {
    value: Number,
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
  margin: 2px;
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

/**
 * 数字のカラー
 */
.cell.color-1 {
  color: #0200fb;
}
.cell.color-2 {
  color: #017e00;
}
.cell.color-3 {
  color: #fe0000;
}
.cell.color-4 {
  color: #010180;
}
.cell.color-5 {
  color: #7f0203;
}
.cell.color-6 {
  color: #027f80;
}
.cell.color-7 {
  color: #000;
}
.cell.color-8 {
  color: #808080;
}
</style>