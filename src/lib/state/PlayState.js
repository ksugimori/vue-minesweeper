import AbstractState from './AbstractState';

/**
 * プレイ中の状態
 */
class PlayState extends AbstractState {
  constructor() {
    super("PLAY")
  }

  /**
   * セルを開く。
   * @param {Game} game ゲーム
   * @param {Number} row 行番号
   * @param {Number} col 列番頭
   */
  open(game, row, col) {
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
   * @param {Game} game ゲーム
   * @param {Number} row 行番号
   * @param {Number} col 列番頭
   */
  flag(game, row, col) {
    game.doFlag(row, col);
  }
}

export default PlayState;