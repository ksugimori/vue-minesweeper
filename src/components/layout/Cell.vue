<template>
  <div
    class="cell"
    :class="classArray"
    @click="$emit('cellClick')"
    @click.right.prevent="$emit('cellRightClick')"
    @touchstart="touchStart"
    @touchend="touchEnd"
    @contextmenu.prevent
  >
    {{ opened ? text : "" }}
    <mine v-if="hasMine && opened"></mine>
    <flag v-if="flagged && !opened"></flag>
  </div>
</template>

<script>
import Mine from "../icon/Mine.vue";
import Flag from "../icon/Flag.vue";
export default {
  components: { Mine, Flag },
  props: {
    text: String,
    hasMine: Boolean,
    flagged: Boolean,
    opened: Boolean,
  },
  computed: {
    classArray: function () {
      if (this.opened) {
        return ["open", `color-${this.text}`];
      }
      if (this.flagged) {
        return ["flagged"];
      }

      return [];
    },
  },
  data: function () {
    return {
      longPressTimer: null,
    };
  },
  methods: {
    touchStart: function () {
      this.longPressTimer = window.setTimeout(
        () => this.$emit("cellRightClick"),
        500
      );
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
.cell.open {
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
</style>