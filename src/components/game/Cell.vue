<template>
  <div
    class="cell"
    :class="
      obj.isFlagged ? ['flag'] : obj.isOpen ? ['open', colorClassName] : []
    "
    @click="onClick"
    @click.right.prevent="onRightClick"
    @touchstart="touchStart"
    @touchend="touchEnd"
    @contextmenu.prevent
  >
    {{ valueString }}
  </div>
</template>

<script>
export default {
  props: {
    obj: Object,
    onClick: Function,
    onRightClick: Function
  },
  computed: {
    colorClassName() {
      return this.obj.isMine ? "color-bomb" : `color-${this.obj.count}`;
    },
    valueString() {
      if (!this.obj.isOpen || this.obj.count === 0) {
        return "";
      }

      if (this.obj.isMine) {
        return "＊"; // TODO これ見づらい
      }

      return this.obj.count.toString();
    },
  },
  data: function () {
    return {
      longPressTimer: null,
    };
  },
  methods: {
    touchStart: function () {
      this.longPressTimer = window.setTimeout(this.onRightClick, 500);
    },
    touchEnd: function () {
      clearTimeout(this.longPressTimer);
    },
  },
};
</script>

<style scoped>
.cell {
  width: 1.5rem;
  height: 1.5rem;
  border: 0.3rem solid #000;
  margin: 0.15rem;
  background-color: #000;
  color: transparent;
  font-family: monospace;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 1.5rem;
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
/** フラグ */
.flag {
  background-color: yellow;
}
</style>