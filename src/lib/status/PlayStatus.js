import AbstractStatus from './AbstractStatus';

/**
 * プレイ中の状態
 */
class PlayStatus extends AbstractStatus {
  constructor() {
    super("PLAY")
  }

  /**
   * セルを開く。
   * @param {Game} game ゲーム
   * @param {Point} point 座標
   */
  open(game, point) {
    game.doOpen(point);

    // 終了判定
    let endStatus = game.judge();
    if (endStatus) {
      game.endGame(endStatus);
    }
  }

  /**
   * フラグを立てる。
   * @param {Game} game ゲーム
   * @param {Point} point 座標
   */
  flag(game, point) {
    game.doFlag(point);
  }
}

export default PlayStatus;