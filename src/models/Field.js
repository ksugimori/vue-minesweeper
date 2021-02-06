import Cell from '@/models/Cell.js'
import Point from '@/models/util/Point.js'

/**
 * 盤面
 *
 * このクラスには幾何学的な情報、操作のみを持ち、ゲームに関する知識は極力持たないようにする。
 */
class Field {
  /**
   * コンストラクタ
   * @param {Number} width 幅
   * @param {Number} height 高さ
   */
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
   * 指定した座標のセルを取得する
   * @param {Point} point
   */
  cellAt (point) {
    if (contains(this, point)) {
      return this.rows[point.y][point.x]
    }
  }

  /**
   * 範囲内の座標すべてを配列として取得する
   * @param {Function} filterFunc Cell を引数にとるフィルタリング関数
   */
  points (filterFunc) {
    let result = []
    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        result.push(Point.of(x, y))
      }
    }

    return filterByCell(this, result, filterFunc)
  }

  /**
   * 周囲の座標を配列にして取得する。
   * @param {Point} center 座標
   * @param {Function} filterFunc Cell を引数にとるフィルタリング関数
   */
  pointsArround (center, filterFunc) {
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
    ].filter(p => contains(this, p))

    return filterByCell(this, points, filterFunc)
  }
}

// -----------------------------------------------------
// private
// -----------------------------------------------------

/**
 * フィールド内の座標か？
 * @param {Field} field フィールド
 * @param {Point} p 座標
 */
function contains (field, p) {
  return (p.x >= 0 && p.x < field.width) && (p.y >= 0 && p.y < field.height)
}

/**
 * 配列をセルに対する条件でフィルタリングする
 * @param {Field} field フィールド
 * @param {Array} points Point の配列
 * @param {Function} filterFunc Cell を引数にとるフィルタリング関数
 */
function filterByCell (field, points, filterFunc) {
  if (filterFunc) {
    return points.filter(p => filterFunc(field.cellAt(p)))
  } else {
    return points
  }
}

export default Field
