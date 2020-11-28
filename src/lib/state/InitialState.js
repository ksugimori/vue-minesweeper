import AbstractState from './AbstractState';

/**
 * 初期状態
 */
class InitialState extends AbstractState {
  constructor() {
    super("INIT")
  }

  /**
   * セルを開く。
   * 
   * 初期状態では地雷のセットを行ったあとにセルを開く
   * @param {Game} game ゲーム
   * @param {Number} row 行番号
   * @param {Number} col 列番頭
   */
  open(game, row, col) {
    // 開始準備
    game.mine(row, col);
    game.startTimer();

    // セルを開く
    game.doOpen(row, col);

    // 終了判定
    let endState = game.judge();
    if (endState) {
      game.openAll();
      game.stopTimer();
      game.state = endState;
    }
  }

  /**
   * フラグを立てる。
   */
  flag() {
    // 何もしない
  }
}

export default InitialState;