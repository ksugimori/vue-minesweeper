/**
 * 座標を表すクラス
 */
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  /**
   * ファクトリーメソッド。
   * @param {Number} x x座標
   * @param {Number} y y座標
   */
  static of(x, y) {
    return new Point(x, y);
  }

  /**
   * y に n 加えた座標を得る
   * @param {Number} n 移動量
   */
  plusY(n) {
    return new Point(this.x, this.y + n);
  }

  /**
   * x に n 加えた座標を得る
   * @param {Number} n 移動量
   */
  plusX(n) {
    return new Point(this.x + n, this.y);
  }
}

export default Point;