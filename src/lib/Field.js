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
  at(point) {
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
   * @param {Number} row 行番号
   * @param {Number} col 列番号
   */
  arround(row, col) {
    let result = [];

    const pushIfContains = (r, c) => {
      if (this.contains(r, c)) result.push({ row: r, col: c });
    }

    pushIfContains(row - 1, col - 1);
    pushIfContains(row - 1, col);
    pushIfContains(row - 1, col + 1);

    pushIfContains(row, col - 1);
    pushIfContains(row, col + 1);

    pushIfContains(row + 1, col - 1);
    pushIfContains(row + 1, col);
    pushIfContains(row + 1, col + 1);

    return result;
  }

  /**
   * フィールド内の座標か？
   * @param {Number} row 行番号
   * @param {Number} col 列番号
   */
  contains(row, col) {
    return (row in this.table) && (col in this.table[row])
  }
}

export default Field;