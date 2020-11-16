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

    for (let row = 0; row < numRows; row++) {
      let row = [];
      for (let i = 0; i < numCols; i++) {
        row.push(new Cell());
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

    if (!cell.isMine && cell.count === 0) { // TODO isMine ならゲームオーバーにする
      this.arround(row, col).forEach(p => this.open(p.row, p.col, depth + 1));
    }

  }
}

export default Game;