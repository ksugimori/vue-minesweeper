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
   * @param {Point} point 座標
   */
  open(game, point) {
    throw new Error(`Method Unimplemented! open(${game}, ${point})`);
  }

  /**
   * 指定した座標のセルにフラグを立てる。
   * @param {Game} game ゲーム
   * @param {Point} point 座標
   */
  flag(game, point) {
    throw new Error(`Method Unimplemented! flag(${game}, ${point}`);
  }
}

export default AbstractState;