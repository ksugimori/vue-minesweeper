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
    {{ valueString }}
    <mine v-if="obj.isMine && obj.isOpen"></mine>
    <flag v-if="obj.isFlagged && !obj.isOpen"></flag>
  </div>
</template>

<script>
import Mine from "./icon/Mine.vue";
import Flag from "./icon/Flag.vue";
export default {
  components: { Mine, Flag },
  props: {
    obj: Object,
    onClick: Function,
    onRightClick: Function,
  },
  computed: {
    colorClassName() {
      return this.obj.isMine ? "color-mine" : `color-${this.obj.count}`;
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
  background-color: #babafe;
  color: #0200fb;
}
.cell.color-2 {
  background-color: #a8d3a8;
  color: #017e00;
}
.cell.color-3 {
  background-color: #ffadad;
  color: #fe0000;
}
.cell.color-4 {
  background-color: #9292d0;
  color: #010180;
}
.cell.color-5 {
  background-color: #c78f90;
  color: #7f0203;
}
.cell.color-6 {
  background-color: #82c0c1;
  color: #027f80;
}
.cell.color-7 {
  background-color: #cbcbcb;
  color: #000;
}
.cell.color-8 {
  background-color: #b4b4b4;
  color: black;
}
/** 地雷 */
.cell.color-mine {
  background-color: #e3e3e3;
}
</style>