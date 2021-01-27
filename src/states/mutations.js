const mutations = {
  // 盤面の初期化
  initialize (state) {
    state.game.initialize()
  },

  // セルを開く
  open (state, { x, y }) {
    state.game.open(x, y)
  },

  // フラグを立てる
  flag (state, { x, y }) {
    state.game.flag(x, y)
  },

  // setting の内容を game に反映する
  updateSetting (state) {
    state.game.setting = state.setting.clone()
  }
}

export default mutations
