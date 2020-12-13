<template>
  <div>
    <div class="padding"></div>
    <div @click="game.initialize()" :class="['btn', 'box', color()]">
      {{ text }}
    </div>
  </div>
</template>

<script>
import State from "@/lib/state/State";

export default {
  props: {
    game: Object,
  },
  computed: {
    text: function () {
      switch (this.game.state) {
        case State.WIN:
          return "Win!";
        case State.LOSE:
          return "Lose";
        default:
          return "Reset";
      }
    },
  },
  methods: {
    color: function () {
      switch (this.game.state) {
        case State.WIN:
          return "color-win";
        case State.LOSE:
          return "color-lose";
        default:
          return "";
      }
    },
  },
};
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
  border: 0.3rem solid #000;
  background-color: #000;
  color: #fff;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 2.4rem;
  cursor: pointer;
}
.btn:hover {
  background-color: #fff;
  color: #000;
}
.btn.color-win {
  color: #fff;
  background-color: #0200fb;
  border-color: #0200fb;
}
.btn.color-win:hover {
  color: #0200fb;
  background-color: #fff;
}
.btn.color-lose {
  color: #fff;
  background-color: #fe0000;
  border-color: #fe0000;
}
.btn.color-lose:hover {
  color: #fe0000;
  background-color: #fff;
}
</style>