import AbstractStatus from '@/lib/status/AbstractStatus.js'

/**
 * ゲーム終了状態（負け）
 */
class LoseStatus extends AbstractStatus {
  constructor () {
    super('LOSE')
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

  /**
   * 終了状態か？
   */
  get isEnd () {
    return true
  }
}

export default LoseStatus
