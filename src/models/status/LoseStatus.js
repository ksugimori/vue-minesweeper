import AbstractStatus from '@/models/status/AbstractStatus.js'

/**
 * ゲーム終了状態（負け）
 */
class LoseStatus extends AbstractStatus {
  constructor () {
    super('LOSE')
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

export default LoseStatus
