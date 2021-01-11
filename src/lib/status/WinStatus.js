import AbstractStatus from '@/lib/status/AbstractStatus.js';

/**
 * ゲーム終了状態（勝利）
 */
class WinStatus extends AbstractStatus {
  constructor() {
    super("WIN")
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

export default WinStatus;