<template>
  <div
    :class="['btn', colorClass()]"
    @click="$emit('click')"
  >
    {{ text }}
  </div>
</template>

<script>
import Status from '@/models/status/Status.js'

export default {
  props: {
    status: {
      type: Object,
      default: Status.INIT
    }
  },
  computed: {
    text: function () {
      switch (this.status) {
        case Status.WIN:
          return 'Win!'
        case Status.LOSE:
          return 'Lose'
        default:
          return 'Reset'
      }
    }
  },
  methods: {
    colorClass: function () {
      switch (this.status) {
        case Status.WIN:
          return 'color-win'
        case Status.LOSE:
          return 'color-lose'
        default:
          return ''
      }
    }
  }
}
</script>

<style scoped>
.btn {
  cursor: pointer;
  text-align: center;
  height: 2.5rem;
  line-height: 2.5rem;
  background-color: #35495e;
  border: 0.3rem solid #35495e;
}
.btn:hover {
  background-color: #fff;
  color: #35495e;
}
.btn.color-win {
  color: #fff;
  background-color: #2e81e6;
  border-color: #2e81e6;
}
.btn.color-win:hover {
  color: #2e81e6;
  background-color: #fff;
}
.btn.color-lose {
  color: #fff;
  background-color: #e60067;
  border-color: #e60067;
}
.btn.color-lose:hover {
  color: #e60067;
  background-color: #fff;
}
</style>
