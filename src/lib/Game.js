import Cell from './Cell';
import State from './State';

/**
 * マインスイーパー全体を管理するクラス
 */
class Game {
  /**
   * コンストラクタ
   */
  constructor() {
    this.field = [];
    this.numRows = 9;
    this.numCols = 9;
    this.numMines = 10;

    this.state = State.INIT;
  }

  /**
   * 閉じているセルの数
   */
  get closedCount() {
    return this.field.flat().map(cell => cell.isOpen ? 0 : 1).reduce((sum, x) => sum + x);
  }

  /**
   * フラグの数
   */
  get flagCount() {
    return this.field.flat().map(cell => cell.isFlagged ? 1 : 0).reduce((sum, x) => sum + x);
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
    this.numRows = numRows || this.numRows;
    this.numCols = numCols || this.numCols;
    this.numMines = numMines || this.numMines;
    if (this.numRows * this.numCols < this.numMines) {
      this.numMines = Math.floor(this.numRows * this.numCols / 2);
    }

    this.field = [];

    for (let row = 0; row < this.numRows; row++) {
      let row = [];
      for (let i = 0; i < this.numCols; i++) {
        row.push(new Cell());
      }
      this.field.push(row);
    }

    this.state.transit(this, State.INIT);

    return this;
  }

  /**
   * ゲームを開始する。
   * 
   * 地雷の配置もここで行う。
   * 初手アウトを防ぐため引数で渡された場所には配置しない。
   * @param {Number} row 行番号
   * @param {Number} col 列番号
   */
  start(row, col) {
    // 地雷をランダムにセット
    let mines = [];
    while (mines.length < this.numMines) {
      let val = Math.floor(Math.random() * this.numCols * this.numRows);
      if (mines.includes(val)) continue;
      if (row === Math.floor(val / this.numCols)
        && col === val % this.numCols) continue;

      mines.push(val);
    }

    mines.forEach(i => {
      let row = Math.floor(i / this.numCols);
      let col = i % this.numCols;
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

    this.state.transit(this, State.PLAY);
  }

  /**
   * セルを開く
   * @param {Number} row 行番号
   * @param {Number} col 列番号
   */
  open(row, col, depth = 0) {
    if (this.state === State.INIT) {
      this.start(row, col);
    } else if (this.state !== State.PLAY) {
      return;
    }

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

      let arroundFlagCoun = this.arround(row, col) //
        .map(p => this.field[p.row][p.col]) //
        .filter(c => c.isFlagged) //
        .length;

      if (cell.count === arroundFlagCoun) {
        this.arround(row, col)
          .filter(p => !this.field[p.row][p.col].isOpen)
          .forEach(p => this.open(p.row, p.col, depth + 1));
      }

      return;
    }

    cell.open();

    // 地雷だったらすべて開いて終了
    if (cell.isMine) {
      for (row of this.field) {
        row.forEach(c => c.open());
      }

      this.state.transit(this, State.LOSE);
      return;
    }

    if (cell.count === 0) {
      let targetList = this.arround(row, col)
        .filter(p => !this.field[p.row][p.col].isOpen)
        .filter(p => !this.field[p.row][p.col].isFlagged);
      while (targetList.length !== 0) {
        let p = targetList.pop();
        let targetCell = this.field[p.row][p.col];
        targetCell.open();
        if (targetCell.count === 0) {
          this.arround(p.row, p.col)
            .filter(s => !this.field[s.row][s.col].isOpen)
            .filter(s => !this.field[s.row][s.col].isFlagged)
            .forEach(s => targetList.push(s));
        }
      }
    }

    if (this.closedCount === this.numMines) {
      this.state.transit(this, State.WIN);
    }
  }
}

export default Game;