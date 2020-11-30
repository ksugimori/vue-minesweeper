/**
 * 座標を表すクラス
 */
class Point {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }

  /**
   * ファクトリーメソッド。
   * @param {Number} row 行番号
   * @param {Number} col 列番号
   */
  static of(row, col) {
    return new Point(row, col);
  }

  /**
   * row に n 加えた座標を得る
   * @param {Number} n 移動量
   */
  plusRow(n) {
    return new Point(this.row + n, this.col);
  }

  /**
   * col に n 加えた座標を得る
   * @param {Number} n 移動量
   */
  plusCol(n) {
    return new Point(this.row, this.col + n);
  }
}

export default Point;