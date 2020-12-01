import Cell from './Cell';

/**
 * 盤面
 * 
 * このクラスには幾何学的な情報、操作のみを持ち、ゲームに関する知識は極力持たないようにする。
 */
class Field {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.values = [];

    for (let i = 0; i < width * height; i++) {
      this.values.push(new Cell());
    }
  }

  /**
   * 行単位にまとめた配列を返す
   */
  get rows() {
    let result = [];
    for (let row = 0; row < this.height; row++) {
      let from = row * this.width;
      let to = from + this.width;
      result.push(this.values.slice(from, to));
    }
    return result;
  }

  /**
   * 指定した座標のセルを取得する
   * @param {Point} point 
   */
  get(point) {
    let index = point.y * this.width + point.x;
    return this.values[index];
  }

  /**
   * 周囲のセルを配列にして取得する。
   * @param {Point} center 座標
   */
  arround(center) {
    return [
      // ひとつ上の行
      center.plusY(-1).plusX(-1),
      center.plusY(-1),
      center.plusY(-1).plusX(1),
      // 同じ行
      center.plusX(-1),
      center.plusX(1),
      // ひとつ下の行
      center.plusY(1).plusX(-1),
      center.plusY(1),
      center.plusY(1).plusX(1)
    ].filter(p => this.contains(p));
  }

  /**
   * フィールド内の座標か？
   * @param {Point} p 座標
   */
  contains(p) {
    return (0 <= p.x && p.x < this.width) && (0 <= p.y && p.y < this.height);
  }
}

export default Field;