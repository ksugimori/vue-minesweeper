import Cell from '@/lib/Cell.js'
import Point from '@/lib/Point.js'

/**
 * 盤面
 *
 * このクラスには幾何学的な情報、操作のみを持ち、ゲームに関する知識は極力持たないようにする。
 */
class Field {
  constructor (width, height) {
    this.width = width
    this.height = height
    this.values = []

    for (let i = 0; i < width * height; i++) {
      this.values.push(new Cell())
    }
  }

  /**
   * 範囲内の座標
   */
  get points () {
    let result = []

    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        result.push(Point.of(x, y))
      }
    }

    return result
  }

  /**
   * 行単位にまとめた配列を返す
   */
  get rows () {
    let result = []
    for (let row = 0; row < this.height; row++) {
      let from = row * this.width
      let to = from + this.width
      result.push(this.values.slice(from, to))
    }
    return result
  }

  /**
   * 指定した座標のセルを取得する
   * @param {Point} point
   */
  get (point) {
    let index = point.y * this.width + point.x
    return this.values[index]
  }

  /**
   * 周囲のセルを配列にして取得する。
   * @param {Point} center 座標
   */
  arround (center) {
    return [
      // ひとつ上の行
      center.addY(-1).addX(-1),
      center.addY(-1),
      center.addY(-1).addX(1),
      // 同じ行
      center.addX(-1),
      center.addX(1),
      // ひとつ下の行
      center.addY(1).addX(-1),
      center.addY(1),
      center.addY(1).addX(1)
    ].filter(p => this.contains(p))
  }

  /**
   * フィールド内の座標か？
   * @param {Point} p 座標
   */
  contains (p) {
    return (p.x >= 0 && p.x < this.width) && (p.y >= 0 && p.y < this.height)
  }
}

export default Field
