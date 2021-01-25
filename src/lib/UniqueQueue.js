/**
 * 重複要素の存在しないキュー
 *
 * 同値判定には要素の equals メソッドを使います。
 */
class UniqueQueue {
  constructor () {
    this.elements = []
  }

  /**
   * Point を追加する。
   *
   * 同じ値の要素がキューに存在する場合は追加されません。
   * @param {Object} element 追加する要素
   */
  push (element) {
    if (this.elements.some(x => x.equals(element))) {
      return
    }

    this.elements.push(element)
  }

  /**
   * Point を取り出す
   */
  shift () {
    return this.elements.shift()
  }
}

export default UniqueQueue
