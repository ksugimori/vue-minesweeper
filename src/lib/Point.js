/**
 * 座標を表すクラス
 */
class Point {
  /**
   * コンストラクタ
   * @param {Number} x x座標
   * @param {Number} y y座標
   */
  constructor (x, y) {
    // 直接更新されたくないので x, y は Getter のみ公開
    this._x = x
    this._y = y
  }

  /**
   * ファクトリーメソッド。
   *
   * 現状はコンストラクタと同じです。
   * あくまでも読みやすさのためだけに使います。
   * @param {Number} x x座標
   * @param {Number} y y座標
   */
  static of (x, y) {
    return new Point(x, y)
  }

  /**
   * x座標
   */
  get x () {
    return this._x
  }

  /**
   * y座標
   */
  get y () {
    return this._y
  }

  /**
   * オブジェクトの同値比較。
   * @param {Point} other 比較対象のオブジェクト
   */
  equals (other) {
    return this._x === other._x && this._y === other._y
  }

  /**
   * x に n 加えた座標を得る
   * @param {Number} n 移動量
   */
  addX (n) {
    return Point.of(this._x + n, this._y)
  }

  /**
   * y に n 加えた座標を得る
   * @param {Number} n 移動量
   */
  addY (n) {
    return Point.of(this._x, this._y + n)
  }
}

export default Point
