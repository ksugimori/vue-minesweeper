/**
 * セル
 */
class Cell {
  /**
   * コンストラクタ
   */
  constructor (params) {
    this.count = 0
    this.isOpen = false
    this.isMine = false
    this.isFlagged = false
    this.isMistake = false

    Object.assign(this, params)
  }

  /**
   * セルを開く
   */
  open () {
    this.isOpen = true
  }

  /**
   * 地雷をセットする
   */
  mine () {
    this.isMine = true
  }

  /**
   * フラグを立てる
   */
  flag () {
    if (this.isOpen) return

    this.isFlagged = true
  }

  /**
   * フラグを外す
   */
  unflag () {
    this.isFlagged = false
  }

  /**
   * ミスであるか判定します。
   *
   * 次の条件に合致する場合は isMistake = true に更新します。
   * ・地雷ではないセルにフラグを立てている
   * ・地雷のセルを開いている
   */
  judge () {
    if (this.isMine && this.isOpen) {
      this.isMistake = true
    } else if (!this.isMine && this.isFlagged) {
      this.isMistake = true
    } else {
      this.isMistake = false
    }
  }

  /**
   * 数字文字列
   */
  get text () {
    return this.isEmpty ? '' : this.count.toString()
  }

  /**
   * 空のセルであるか？
   */
  get isEmpty () {
    return this.count === 0 && !this.isMine
  }
}

export default Cell
