<template>
  <div
    class="cell"
    :class="obj.isOpen ? ['open', colorClassName] : []"
    @click="flip"
  >
    {{ valueString }}
  </div>
</template>

<script>
export default {
  props: {
    obj: Object,
  },
  computed: {
    colorClassName() {
      return this.obj.isMine() ? "color-bomb" : `color-${this.obj.count}`;
    },
    valueString() {
      if (!this.obj.isOpen || this.obj.count === 0) {
        return "";
      }

      if (this.obj.count < 0) {
        return "＊"; // TODO これ見づらい
      }

      return this.obj.count.toString();
    },
  },
  methods: {
    flip() {
      // TODO: 裏から表へは戻せない方が良い？
      this.obj.isOpen = !this.obj.isOpen;
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
.cell.color-0 {
  color: #000;
  border-color: #000;
  border-style: dotted;
}
.cell.color-1 {
  color: #0200fb;
  border-color: #0200fb;
}
.cell.color-2 {
  color: #017e00;
  border-color: #017e00;
}
.cell.color-3 {
  color: #fe0000;
  border-color: #fe0000;
}
.cell.color-4 {
  color: #010180;
  border-color: #010180;
}
.cell.color-5 {
  color: #7f0203;
  border-color: #7f0203;
}
.cell.color-6 {
  color: #027f80;
  border-color: #027f80;
}
.cell.color-7 {
  color: #000;
  border-color: #000;
}
.cell.color-8 {
  color: #808080;
  border-color: #808080;
}
/** 地雷 */
.cell.color-bomb {
  background-color: red;
  color: #fff;
}
</style>