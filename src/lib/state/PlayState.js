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
   * @param {Point} point 座標
   */
  open(game, point) {
    game.doOpen(point);

    // 終了判定
    let endState = game.judge();
    if (endState) {
      game.endGame(endState);
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

export default PlayState;