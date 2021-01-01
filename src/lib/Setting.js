class Setting {
  static EASY = new Setting(9, 9, 10);
  static NORMAL = new Setting(16, 16, 40);
  static HARD = new Setting(30, 16, 99);

  /**
   * コンストラクタ
   * @param {Number} width 幅
   * @param {Number} height 高さ
   * @param {Number} numMines 地雷数
   */
  constructor(width, height, numMines) {
    this.width = width || 9;
    this.height = height || 9;
    this.numMines = numMines || 10;
  }

  /**
   * 等価であるか判定する。
   * @param {Setting} other 比較するオブジェクト
   */
  equals(other) {
    if (!other) return false;

    return this.height === other.height
      && this.width === other.width
      && this.numMines === other.numMines;
  }

  /**
   * EASY と同じ状態か？
   */
  get isEasy() {
    return this.equals(Setting.EASY);
  }

  /**
   * NORMAL と同じ状態か？
   */
  get isNormal() {
    return this.equals(Setting.NORMAL);
  }

  /**
   * HARD と同じ状態か？
   */
  get isHard() {
    return this.equals(Setting.HARD);
  }
}

export default Setting;