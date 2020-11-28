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
    game.openCell(row, col);
  }
}

export default PlayState;