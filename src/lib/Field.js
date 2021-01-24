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
    this.rows = []

    for (let y = 0; y < height; y++) {
      let row = []
      for (let x = 0; x < width; x++) {
        row.push(new Cell())
      }
      this.rows.push(row)
    }
  }

  /**
   * すべての要素に関数を適用する。
   * @param {Function} callback 各要素に適用する関数
   */
  forEach (callback) {
    this.rows.flat().forEach(callback)
  }

  /**
   * 範囲内の座標すべてに関数を適用する。
   * @param {Function} callback 各座標に適用する関数
   */
  forEachPoint (callback) {
    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        callback(Point.of(x, y))
      }
    }
  }

  /**
   * フィルタリング関数が true を返す要素数をカウントする。
   * @param {Function} filter フィルタリング関数
   */
  count (filter) {
    return this.rows.flat().filter(filter).length
  }

  /**
   * 指定した座標のセルを取得する
   * @param {Point} point
   */
  at (point) {
    if (this.contains(point)) {
      return this.rows[point.y][point.x]
    }
  }

  /**
   * 周囲の座標を配列にして取得する。
   * @param {Point} center 座標
   * @param {Function} filter Cell を引数にとるフィルタリング関数
   */
  arround (center, filter) {
    let points = [
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

    if (filter) {
      return points.filter(p => filter(this.at(p)))
    } else {
      return points
    }
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
