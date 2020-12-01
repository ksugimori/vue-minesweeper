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
    let result = [];

    const pushIfContains = (p) => {
      this.contains(p) && result.push(p);
    }

    let above = center.plusY(-1);
    pushIfContains(above.plusX(-1));
    pushIfContains(above);
    pushIfContains(above.plusX(1));

    pushIfContains(center.plusX(-1));
    pushIfContains(center.plusX(1));

    let below = center.plusY(1);
    pushIfContains(below.plusX(-1));
    pushIfContains(below);
    pushIfContains(below.plusX(1));

    return result;
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