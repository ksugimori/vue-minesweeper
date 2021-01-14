<template>
  <div>
    <div class="padding" />
    <div
      :class="['btn', 'box', color()]"
      @click="reset"
    >
      {{ text }}
    </div>
  </div>
</template>

<script>
import Status from '@/lib/status/Status.js'

export default {
  computed: {
    status: function () {
      return this.$store.state.game.status
    },
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
    color: function () {
      switch (this.status) {
        case Status.WIN:
          return 'color-win'
        case Status.LOSE:
          return 'color-lose'
        default:
          return ''
      }
    },
    reset: function () {
      this.$store.commit('initialize')
    }
  }
}
</script>

<style scoped>
.padding {
  content: "";
  display: block;
  height: 1rem;
}
.btn {
  width: 6.15rem !important;
  height: 2.5rem !important;
  border: 0.3rem solid #35495e;
  background-color: #35495e;
  color: #fff;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 2.4rem;
  cursor: pointer;
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
