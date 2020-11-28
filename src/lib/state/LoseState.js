import AbstractState from './AbstractState';

/**
 * ゲーム終了状態（負け）
 */
class LoseState extends AbstractState {
  constructor() {
    super("LOSE")
  }
}

export default LoseState;