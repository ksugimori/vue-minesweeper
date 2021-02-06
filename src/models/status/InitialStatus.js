import AbstractStatus from '@/models/status/AbstractStatus.js'
import Status from '@/models/status/Status.js'

/**
 * 初期状態
 */
class InitialStatus extends AbstractStatus {
  constructor () {
    super('INIT')
  }

  /**
   * 終了状態か？
   */
  get isEnd () {
    return false
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
    game.timerStart()
    game.status = Status.PLAY

    // セルを開く
    game.doOpen(point)

    // 終了判定
    if (game.isWin()) {
      game.timerStop()
      game.status = Status.WIN
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
