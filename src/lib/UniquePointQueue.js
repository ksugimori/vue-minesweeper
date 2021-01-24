/**
 * Point のキュー
 */
class UniquePointQueue {
  constructor () {
    this.elements = []
  }

  /**
   * Point を追加する。
   *
   * すでにキューに存在する場合は追加されません。
   * @param {Point} point 座標
   */
  push (point) {
    if (this.elements.some(e => e.equals(point))) {
      return
    }

    this.elements.push(point)
  }

  /**
   * Point を取り出す
   */
  shift () {
    return this.elements.shift()
  }
}

export default UniquePointQueue
