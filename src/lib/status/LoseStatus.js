import AbstractStatus from './AbstractStatus';

/**
 * ゲーム終了状態（負け）
 */
class LoseStatus extends AbstractStatus {
  constructor() {
    super("LOSE")
  }

  /**
   * セルを開く。
   */
  open() {
    // 何もしない
  }

  /**
   * フラグを立てる。
   */
  flag() {
    // 何もしない
  }
}

export default LoseStatus;