import Cell from './Cell';

/**
 * マインスイーパー全体を管理するクラス
 */
class Game {
  /**
   * コンストラクタ
   */
  constructor() {
    this.field = [];
  }

  /**
   * フィールド内の座標か？
   * @param {Number} row 行番号
   * @param {Number} col 列番号
   */
  contains(row, col) {
    return (row in this.field) && (col in this.field[row])
  }

  /**
   * 周囲のセルを配列にして取得する。
   * @param {Number} row 行番号
   * @param {Number} col 列番号
   */
  arround(row, col) {
    let result = [];

    if (this.contains(row - 1, col - 1)) {
      result.push({ row: row - 1, col: col - 1 });
    }
    if (this.contains(row - 1, col)) {
      result.push({ row: row - 1, col: col });
    }
    if (this.contains(row - 1, col + 1)) {
      result.push({ row: row - 1, col: col + 1 });
    }

    if (this.contains(row, col - 1)) {
      result.push({ row: row, col: col - 1 });
    }
    if (this.contains(row, col + 1)) {
      result.push({ row: row, col: col + 1 });
    }

    if (this.contains(row + 1, col - 1)) {
      result.push({ row: row + 1, col: col - 1 });
    }
    if (this.contains(row + 1, col)) {
      result.push({ row: row + 1, col: col });
    }
    if (this.contains(row + 1, col + 1)) {
      result.push({ row: row + 1, col: col + 1 });
    }

    return result;
  }

  /**
   * 盤面を初期化する。
   * @param {Number} numRows 
   * @param {Number} numCols 
   */
  initialize(numRows, numCols) {
    this.field = [];

    for (let row = 0; row < numRows; row++) {
      let row = [];
      for (let i = 0; i < numCols; i++) {
        row.push(new Cell());
      }
      this.field.push(row);
    }

    // 地雷をランダムにセット
    // TODO これだと各行に１個になるのでロジック変更したい
    for (let row = 0; row < numRows; row++) {
      let index = Math.floor(Math.random() * numCols);
      this.field[row][index].mine();
    }

    // 各マスの周囲の地雷数をカウントし、value にセットする。
    for (let row = 0; row < this.field.length; row++) {
      for (let col = 0; col < this.field[row].length; col++) {
        if (this.field[row][col].isMine) {
          continue;
        }

        this.field[row][col].count = this.arround(row, col) //
          .map(p => this.field[p.row][p.col]) //
          .filter(cell => cell.isMine)
          .length;
      }
    }
  }

  /**
   * セルを開く
   * @param {Number} row 行番号
   * @param {Number} col 列番号
   */
  open(row, col, depth = 0) {
    if (!this.contains(row, col)) {
      return;
    }

    const cell = this.field[row][col];

    if (cell.isOpen) {
      if (depth > 0) {
        return;
      }

      let openedMineCount = this.arround(row, col) //
        .map(p => this.field[p.row][p.col]) //
        .filter(c => c.isMine) //
        .filter(c => c.isOpen) //
        .length;

      if (cell.count === openedMineCount) {
        this.arround(row, col)
          .filter(p => !this.field[p.row][p.col].isOpen)
          .forEach(p => this.open(p.row, p.col, depth + 1));
      }

      return;
    }

    cell.open();

    if (cell.count === 0) {
      this.arround(row, col).forEach(p => this.open(p.row, p.col, depth + 1));
    }

  }
}

export default Game;