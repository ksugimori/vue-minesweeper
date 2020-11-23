/**
 * ゲームの状態
 */
class State {
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
    // デフォルトでは何もしない
  }
}

/**
 * 初期状態
 */
class InitialState extends State {
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

/**
 * プレイ中の状態
 */
class PlayState extends State {
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

/**
 * ゲーム終了状態（勝利）
 */
class WinState extends State {
  constructor() {
    super("WIN")
  }
}

/**
 * ゲーム終了状態（負け）
 */
class LoseState extends State {
  constructor() {
    super("LOSE")
  }
}

export default {
  INIT: new InitialState(),
  PLAY: new PlayState(),
  WIN: new WinState(),
  LOSE: new LoseState(),
};