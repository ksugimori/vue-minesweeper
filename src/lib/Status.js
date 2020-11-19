/**
 * ゲームのステータス
 */
class Status {
  constructor(name) {
    this.name = name;
  }

  /**
   * リセットして初期状態に戻る
   */
  reset() {
    return INIT;
  }
}

/**
 * 初期状態
 */
class Init extends Status {
  constructor() {
    super("INIT")
  }

  /**
   * プレイに遷移
   */
  play() {
    return PLAY;
  }
}

/**
 * プレイ
 */
class Play extends Status {
  constructor() {
    super("PLAY")
  }

  /**
   * 勝ちへ遷移
   */
  win() {
    return WIN;
  }

  /**
   * 負けに遷移
   */
  lose() {
    return LOSE;
  }
}

/**
 * 勝ち
 */
class Win extends Status {
  constructor() {
    super("WIN")
  }
}

/**
 * 負け
 */
class Lose extends Status {
  constructor() {
    super("LOSE")
  }
}

/**
 * インスタンスはここで作成したものだけ
 */
const INIT = new Init();
const PLAY = new Play();
const WIN = new Win();
const LOSE = new Lose();

export default {
  INIT, PLAY, WIN, LOSE
}