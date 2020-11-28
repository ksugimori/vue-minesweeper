import AbstractState from './AbstractState';

/**
 * ゲーム終了状態（勝利）
 */
class WinState extends AbstractState {
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

export default WinState;