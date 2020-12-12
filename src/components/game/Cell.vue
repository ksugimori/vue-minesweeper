<template>
  <div
    class="cell"
    :class="
      obj.isFlagged ? ['flagged'] : obj.isOpen ? ['open', colorClassName] : []
    "
    @click="onClick"
    @click.right.prevent="onRightClick"
    @touchstart="touchStart"
    @touchend="touchEnd"
    @contextmenu.prevent
  >
    <span>
      {{ valueString }}
    </span>
    <div class="bomb">
      <div class="circle"></div>
      <div class="bar-0"></div>
      <div class="bar-45"></div>
      <div class="bar-90"></div>
      <div class="bar-135"></div>
    </div>
    <div class="flag">
      <div class="pole"></div>
      <div class="field"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    obj: Object,
    onClick: Function,
    onRightClick: Function,
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
  width: 2.1rem;
  height: 2.1rem;
  line-height: 2.1rem;
  font-size: 1.5rem;
  margin: 0.15rem;
  background-color: #000;
  font-family: "Roboto Mono", monospace;
  font-weight: bold;
  text-align: center;
  position: relative;
}
.cell.open {
  background-color: #fff;
  color: #fff;
}

/**
 * 数字のカラー
 */
.cell.color-0 {
  background-color: #e3e3e3;
}
.cell.color-1 {
  background-color: #0200fb;
}
.cell.color-2 {
  background-color: #017e00;
}
.cell.color-3 {
  background-color: #fe0000;
}
.cell.color-4 {
  background-color: #010180;
}
.cell.color-5 {
  background-color: #7f0203;
}
.cell.color-6 {
  background-color: #027f80;
}
.cell.color-7 {
  background-color: #000;
}
.cell.color-8 {
  background-color: #808080;
}
/** 地雷 */
.cell.color-bomb {
  background-color: #e3e3e3;
}
.bomb {
  visibility: hidden;
}
.cell.color-bomb .bomb {
  visibility: initial;
}

.bomb > .circle,
.bomb > .bar-0,
.bomb > .bar-45,
.bomb > .bar-90,
.bomb > .bar-135 {
  background-color: #000;
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

/** フラグ */
.flag {
  position: relative;
  visibility: hidden;
}
.flagged .flag {
  visibility: initial;
}

.flag > .pole {
  position: absolute;
  background-color: #fff;
  width: 0.3rem;
  height: 0.7rem;
  top: 1rem;
  left: 0.6rem;
}
.flag > .field {
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0.6rem 0 0.6rem 1rem;
  border-color: transparent transparent transparent #fff;
  top: 0.3rem;
  left: 0.6rem;
}
</style>