class Setting {
  static EASY = new Setting("EASY", 9, 9, 10);
  static NORMAL = new Setting("NORMAL", 16, 16, 40);
  static HARD = new Setting("HARD", 30, 16, 99);

  /**
   * コンストラクタ
   * @param {String} name 名前
   * @param {Number} width 幅
   * @param {Number} height 高さ
   * @param {Number} numMines 地雷数
   */
  constructor(name, width, height, numMines) {
    this.name = name;
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

    result.name = this.name;
    result.merge(this);

    return result;
  }

  /**
   * 他のオブジェクトをマージする。
   * 
   * このメソッドでは name は反映しません。
   * @param {Setting} other 
   */
  merge(other) {
    this.width = other.width;
    this.height = other.height;
    this.numMines = other.numMines;
  }

}

export default Setting;