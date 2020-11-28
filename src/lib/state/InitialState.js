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
    let point = { row: row, col: col };
    game.mine(point);
    game.startTimer();
    game.openCell(row, col);
  }
}

export default InitialState;