import Game from "@/lib/Game";

let game = new Game();
game.initialize();

const store = {
  state: {
    game
  },
  mutations: {
    initialize(state) {
      state.game.initialize();
    },
    open(state, { x, y }) {
      state.game.open(x, y);
    },
    flag(state, { x, y }) {
      state.game.flag(x, y);
    },
    updateSetting(state, { setting }) {
      state.game.setting = { ...setting };
    }
  }
}

export default store;