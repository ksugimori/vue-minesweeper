import Cell from './Cell';
import Status from './Status';

/**
 * マインスイーパー全体を管理するクラス
 */
class Game {
  /**
   * コンストラクタ
   */
  constructor() {
    this.field = [];
    this.status = Status.INIT;
    this.closedCount = 0;
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
   * 盤面を初期化する。
   * @param {Number} numRows 
   * @param {Number} numCols 
   * @param {Number} nunmMines
   */
  initialize(numRows, numCols, numMines) {
    numMines = numMines || this.numMines;

    this.field = [];
    this.closedCount = 0;
    this.mineCount = 0;

    for (let row = 0; row < numRows; row++) {
      let row = [];
      for (let i = 0; i < numCols; i++) {
        row.push(new Cell());
        this.closedCount = this.closedCount + 1;
      }
      this.field.push(row);
    }

    // 地雷をランダムにセット
    let mines = [];
    while (mines.length < numMines) {
      let val = Math.floor(Math.random() * numCols * numRows);
      if (mines.includes(val)) continue;

      mines.push(val);
    }

    mines.forEach(i => {
      let row = Math.floor(i / numCols);
      let col = i % numCols;
      this.field[row][col].mine();
      this.mineCount = this.mineCount + 1;
    });

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

    this.status = Status.PLAY;
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

    if (cell.isFlagged) {
      return;
    }

    if (cell.isOpen) {
      if (depth > 0) {
        return;
      }

      let flagCount = this.arround(row, col) //
        .map(p => this.field[p.row][p.col]) //
        .filter(c => c.isFlagged) //
        .length;

      if (cell.count === flagCount) {
        this.arround(row, col)
          .filter(p => !this.field[p.row][p.col].isOpen)
          .forEach(p => this.open(p.row, p.col, depth + 1));
      }

      return;
    }

    cell.open();
    this.closedCount = this.closedCount - 1;

    // 地雷だったらすべて開いて終了
    if (cell.isMine) {
      for (row of this.field) {
        row.forEach(c => c.open());
      }

      this.status = Status.LOSE;
      return;
    }

    if (!cell.isMine && cell.count === 0) {
      this.arround(row, col).forEach(p => this.open(p.row, p.col, depth + 1));
    }

    if (this.closedCount === this.mineCount) {
      this.status = Status.WIN;
    }
  }
}

export default Game;