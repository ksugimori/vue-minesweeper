import AbstractState from './AbstractState';

/**
 * ゲーム終了状態（負け）
 */
class LoseState extends AbstractState {
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

export default LoseState;