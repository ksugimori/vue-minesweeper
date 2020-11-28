import AbstractState from './AbstractState';

/**
 * ゲーム終了状態（勝利）
 */
class WinState extends AbstractState {
  constructor() {
    super("WIN")
  }
}

export default WinState;