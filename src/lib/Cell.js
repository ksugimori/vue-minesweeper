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
    this.isFlag = false

    Object.assign(this, params)
  }

  /**
   * 数字文字列
   */
  get countString () {
    return this.isEmpty ? '' : this.count.toString()
  }

  /**
   * 空のセルであるか？
   */
  get isEmpty () {
    return this.count === 0 && !this.isMine
  }

  /**
   * ミスしたセルか？
   *
   * 以下いずれかに当てはまる場合は true を返します
   * ・地雷なのに開いてしまった
   * ・フラグを立てたのに地雷じゃなかった
   */
  get isMiss () {
    if (!this.isMine && this.isFlag) {
      return true
    }

    if (this.isMine && this.isOpen) {
      return true
    }

    return false
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

    this.isFlag = true
  }

  /**
   * フラグを外す
   */
  unflag () {
    this.isFlag = false
  }
}

export default Cell
