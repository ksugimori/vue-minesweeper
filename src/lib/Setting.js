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
  constructor (width, height, numMines) {
    this.width = width
    this.height = height
    this.numMines = numMines
  }

  /**
   * 名前。
   *
   * プリセットの難易度の場合はその名前、それ以外の場合は CUSTOM が返ります。
   */
  get name () {
    if (this.equals(Setting.EASY)) {
      return 'EASY'
    }
    if (this.equals(Setting.NORMAL)) {
      return 'NORMAL'
    }
    if (this.equals(Setting.HARD)) {
      return 'HARD'
    }

    return 'CUSTOM'
  }

  /**
   * 同値であるか判定する。
   * @param {Setting} other 比較するオブジェクト
   */
  equals (other) {
    if (!other) return false

    return this.height === other.height &&
      this.width === other.width &&
      this.numMines === other.numMines
  }

  /**
   * オブジェクトをコピーする。
   */
  clone () {
    let result = new Setting()

    result.merge(this)

    return result
  }

  /**
   * 他のオブジェクトをマージする。
   * @param {Setting} other
   */
  merge (other) {
    this.width = other.width
    this.height = other.height
    this.numMines = other.numMines
  }

  /**
   * 設定値を調節する。
   *
   * 地雷数が盤面のセル数より多い場合、セル数 - 1 を地雷数にします
   */
  adjustNumMines () {
    let total = this.width * this.height
    if (total <= this.numMines) {
      this.numMines = Math.max(0, total - 1)
    }
  }
}

export default Setting
