import Cell from './Cell';

/**
 * 盤面
 */
class Field {
  constructor(numRows, numCols) {
    this.table = [];
    this.numRows = numRows;
    this.numCols = numCols;

    for (let row = 0; row < numRows; row++) {
      let row = [];
      for (let i = 0; i < numCols; i++) {
        row.push(new Cell());
      }
      this.table.push(row);
    }
  }

  /**
   * 指定した座標のセルを取得する
   * @param {Point} point 
   */
  get(point) {
    return this.table[point.row][point.col];
  }

  /**
   * すべてのセル
   */
  all() {
    return this.table.flat();
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

    let above = center.plusRow(-1);
    pushIfContains(above.plusCol(-1));
    pushIfContains(above);
    pushIfContains(above.plusCol(1));

    pushIfContains(center.plusCol(-1));
    pushIfContains(center.plusCol(1));

    let below = center.plusRow(1);
    pushIfContains(below.plusCol(-1));
    pushIfContains(below);
    pushIfContains(below.plusCol(1));

    return result;
  }

  /**
   * フィールド内の座標か？
   * @param {Point} p 座標
   */
  contains(p) {
    return (p.row in this.table) && (p.col in this.table[p.row])
  }
}

export default Field;