/**
 * Point のキュー
 */
class PointQueue {
  constructor () {
    this.elements = []
  }

  /**
   * キューの長さ
   */
  get length () {
    return this.elements.length
  }

  /**
   * Point を追加する。
   * @param {Point} point 座標
   */
  push (point) {
    this.elements.push(point)
  }

  /**
   * Point を取り出す
   */
  shift () {
    return this.elements.shift()
  }

  /**
   * キューをマージする
   * @param {PointQueue} マージするキュー
   */
  merge (other) {
    other.elements.forEach(p => this.push(p))
  }

  /**
   * 重複を取り除く
   *
   * 重複している場合は先に push された方が残されます。
   */
  uniq () {
    let newElements = []

    for (let elem of this.elements) {
      if (newElements.some(p => elem.equals(p))) {
        continue
      } else {
        newElements.push(elem)
      }
    }

    this.elements = newElements
  }

  /**
   * 配列に変換する
   */
  toArray () {
    return this.elements.slice()
  }
}

export default PointQueue
