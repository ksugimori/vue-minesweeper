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
    this.width = width;
    this.height = height;
    this.numMines = numMines;
  }

  /**
   * 同値であるか判定する。
   * @param {Setting} other 比較するオブジェクト
   */
  equals(other) {
    if (!other) return false;

    return this.height === other.height
      && this.width === other.width
      && this.numMines === other.numMines;
  }

  /**
   * オブジェクトをコピーする。
   */
  clone() {
    let result = new Setting();

    result.width = this.width;
    result.height = this.height;
    result.numMines = this.numMines;

    return result;
  }

  /**
   * 設定値を EASY のものにする。
   */
  setEasy() {
    Object.assign(this, Setting.EASY);
  }

  /**
   * 設定値を NORMAL のものにする。
   */
  setNormal() {
    Object.assign(this, Setting.NORMAL);
  }

  /**
   * 設定値を HARD のものにする。
   */
  setHard() {
    Object.assign(this, Setting.HARD);
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