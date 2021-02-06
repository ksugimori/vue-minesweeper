import AbstractStatus from '@/models/status/AbstractStatus.js'

/**
 * ゲーム終了状態（勝利）
 */
class WinStatus extends AbstractStatus {
  constructor () {
    super('WIN')
  }

  /**
   * 終了状態か？
   */
  get isEnd () {
    return true
  }

  /**
   * セルを開く。
   */
  open () {
    // 何もしない
  }

  /**
   * フラグを立てる。
   */
  flag () {
    // 何もしない
  }
}

export default WinStatus
