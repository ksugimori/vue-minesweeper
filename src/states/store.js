import Game from '@/lib/Game.js'

let game = new Game()
game.initialize()

const store = {
  state: {
    game: game,
    setting: game.setting.clone()
  },
  mutations: {
    initialize (state) {
      state.game.initialize()
    },
    open (state, { x, y }) {
      state.game.open(x, y)
    },
    flag (state, { x, y }) {
      state.game.flag(x, y)
    },
    updateSetting (state) {
      state.game.setting = state.setting.clone()
    }
  }
}

export default store
