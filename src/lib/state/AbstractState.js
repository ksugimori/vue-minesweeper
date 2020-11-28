/**
 * ゲームの状態
 */
class AbstractState {
  constructor(name) {
    this.name = name;
  }

  /**
   * 指定した座標のセルを開く。
   * @param {Game} game ゲーム
   * @param {Number} row 行番号
   * @param {Number} col 列番頭
   */
  open(game, row, col) {
    throw new Error(`Method Unimplemented! (${game}, ${row}, ${col})`);
  }
}

export default AbstractState;