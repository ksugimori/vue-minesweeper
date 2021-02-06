import AbstractStatus from '@/models/status/AbstractStatus.js'
import Status from '@/models/status/Status.js'

/**
 * プレイ中の状態
 */
class PlayStatus extends AbstractStatus {
  constructor () {
    super('PLAY')
  }

  /**
   * 終了状態か？
   */
  get isEnd () {
    return false
  }

  /**
   * セルを開く。
   * @param {Game} game ゲーム
   * @param {Point} point 座標
   */
  open (game, point) {
    game.doOpen(point)

    // 終了判定
    if (game.isWin()) {
      game.timerStop()
      game.status = Status.WIN
    } else if (game.isLose()) {
      game.timerStop()
      game.status = Status.LOSE
    }
  }

  /**
   * フラグを立てる。
   * @param {Game} game ゲーム
   * @param {Point} point 座標
   */
  flag (game, point) {
    game.doFlag(point)
  }
}

export default PlayStatus
