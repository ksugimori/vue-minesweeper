import AbstractStatus from '@/lib/status/AbstractStatus.js'

/**
 * 初期状態
 */
class InitialStatus extends AbstractStatus {
  constructor () {
    super('INIT')
  }

  /**
   * セルを開く。
   *
   * 初期状態では地雷のセットを行ったあとにセルを開く
   * @param {Game} game ゲーム
   * @param {Point} point 座標
   */
  open (game, point) {
    // 開始準備
    game.mine(point)
    game.startGame()

    // セルを開く
    game.doOpen(point)

    // 終了判定
    let endStatus = game.judge()
    if (endStatus) {
      game.endGame(endStatus)
    }
  }

  /**
   * フラグを立てる。
   */
  flag () {
    // 何もしない
  }
}

export default InitialStatus
