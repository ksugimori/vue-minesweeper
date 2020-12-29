<template>
  <div>
    <div class="padding"></div>
    <div @click="game.initialize()" :class="['btn', 'box', color()]">
      {{ text }}
    </div>
  </div>
</template>

<script>
import Status from "@/lib/status/Status";

export default {
  props: {
    game: Object,
  },
  computed: {
    text: function () {
      switch (this.game.status) {
        case Status.WIN:
          return "Win!";
        case Status.LOSE:
          return "Lose";
        default:
          return "Reset";
      }
    },
  },
  methods: {
    color: function () {
      switch (this.game.status) {
        case Status.WIN:
          return "color-win";
        case Status.LOSE:
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
  background-color: #2E81E6;
  border-color: #2E81E6;
}
.btn.color-win:hover {
  color: #2E81E6;
  background-color: #fff;
}
.btn.color-lose {
  color: #fff;
  background-color: #E60067;
  border-color: #E60067;
}
.btn.color-lose:hover {
  color: #E60067;
  background-color: #fff;
}
</style>