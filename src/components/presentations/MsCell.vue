<template>
  <div
    class="cell"
    :class="classArray"
    @click="$emit('click')"
    @click.right.prevent="$emit('right-click')"
    @touchstart="touchStart"
    @touchend="touchEnd"
    @contextmenu.prevent
  >
    <div v-if="open">
      {{ count }}
      <ms-icon-mine v-if="mine" />
      <ms-icon-miss v-if="miss" />
    </div>
    <div v-else>
      <ms-icon-flag v-if="flag" />
    </div>
  </div>
</template>

<script>
import MsIconMine from '@/components/presentations/icons/MsIconMine.vue'
import MsIconFlag from '@/components/presentations/icons/MsIconFlag.vue'
import MsIconMiss from '@/components/presentations/icons/MsIconMiss.vue'

export default {
  components: { MsIconMine, MsIconFlag, MsIconMiss },
  props: {
    count: {
      type: String,
      default: ''
    },
    mine: Boolean,
    flag: Boolean,
    open: Boolean,
    miss: Boolean
  },
  data: function () {
    return {
      longPressTimer: null
    }
  },
  computed: {
    classArray: function () {
      if (this.open) {
        return ['open', `color-${this.count}`]
      }
      if (this.flag) {
        return ['flag']
      }

      return []
    }
  },
  methods: {
    touchStart: function () {
      this.longPressTimer = window.setTimeout(
        () => this.$emit('right-click'),
        500
      )
    },
    touchEnd: function () {
      clearTimeout(this.longPressTimer)
    }
  }
}
</script>

<style scoped>
.cell {
  width: 2.1rem;
  height: 2.1rem;
  line-height: 2.1rem;
  font-size: 1.5rem;
  margin: 0.15rem;
  background-color: #35495e;
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
  background-color: #B6E4CE;
  color: #1f8255;
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
  color: #42b983;
}
.cell.color-8 {
  background-color: #b4b4b4;
  color: black;
}
</style>
