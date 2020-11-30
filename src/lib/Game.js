import Point from './Point';
import State from './state/State';
import Field from './Field';

/**
 * マインスイーパー全体を管理するクラス
 */
class Game {
  /**
   * コンストラクタ
   */
  constructor() {
    this.field = new Field();
    this.numRows = 9;
    this.numCols = 9;
    this.numMines = 10;

    this.playTime = 0;
    this.startTime = null;
    this.timer = null;
    this.state = State.INIT;
  }

  /**
   * フラグの数
   */
  get flagCount() {
    return this.field.all().map(cell => cell.isFlagged ? 1 : 0).reduce((sum, x) => sum + x);
  }

  /**
   * 閉じているセルの数
   */
  get closedCount() {
    return this.field.all().map(cell => cell.isOpen ? 0 : 1).reduce((sum, x) => sum + x);
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

    this.field = new Field(this.numRows, this.numCols);

    this.state = State.INIT;
    this.stopTimer();
    this.playTime = 0;
    this.startTime = null;

    return this;
  }

  /**
   * 地雷を配置する。
   * 
   * 初手アウトを防ぐため、引数で渡された場所には配置しない。
   * @param {Point} exclude 除外する座標
   */
  mine(exclude) {
    // 地雷をランダムにセット
    let mines = [];
    while (mines.length < this.numMines) {
      let randomRow = Math.floor(Math.random() * this.numRows);
      let randomCol = Math.floor(Math.random() * this.numCols);
      if (exclude.row === randomRow && exclude.col === randomCol) continue;

      if (mines.some(x => x.row === randomRow && x.col === randomCol)) continue;

      mines.push({ row: randomRow, col: randomCol });
    }

    mines.forEach(p => this.field.get(p).mine());

    // 各マスの周囲の地雷数をカウントし、value にセットする。
    for (let row = 0; row < this.field.numRows; row++) {
      for (let col = 0; col < this.field.numCols; col++) {
        let target = this.field.get(Point.of(row, col));
        if (target.isMine) {
          continue;
        }

        target.count = this.field.arround(Point.of(row, col))
          .map(p => this.field.get(p))
          .filter(cell => cell.isMine)
          .length;
      }
    }

    this.state = State.PLAY;
  }

  /**
   * タイマーを起動する
   */
  startTimer() {
    this.startTime = Date.now();
    this.timer = setInterval(() => {
      this.playTime = Math.floor((Date.now() - this.startTime) / 1000);
    }, 1000);
  }

  /**
   * タイマーを停止する
   */
  stopTimer() {
    clearInterval(this.timer);
  }

  /**
   * セルを開く
   * @param {Number} row 行番号
   * @param {Number} col 列番号
   */
  open(row, col) {
    this.state.open(this, Point.of(row, col));
  }

  /**
   * 指定したセルを開く。
   * 
   * @param {Point} point 座標
   */
  doOpen(point) {
    const cell = this.field.get(point);

    if (cell.isFlagged) {
      return;
    }

    if (cell.isOpen) {
      let arroundFlagCount = this.field.arround(point)
        .map(p => this.field.get(p)) //
        .filter(c => c.isFlagged) //
        .length;

      if (cell.count === arroundFlagCount) {
        this.openNeighbors(point);
      }

      return;
    }

    cell.open();

    if (cell.count === 0) {
      this.openNeighbors(point);
    }
  }

  /**
   * フラグをつける。
   * @param {Number} row 行番号
   * @param {Number} col 列番号
   */
  flag(row, col) {
    this.state.flag(this, Point.of(row, col));
  }

  /**
   * フラグをつける。
   * @param {Point} point 座標
   */
  doFlag(point) {
    let cell = this.field.get(point);
    if (cell.isFlagged) {
      cell.unflag();
    } else {
      cell.flag();
    }
  }

  /**
   * ゲームの終了判定。
   * 
   * ゲームが終了していればそのステータスを返す。
   */
  judge() {
    if (this.field.all().filter(cell => cell.isMine).some(cell => cell.isOpen)) {
      return State.LOSE;
    }

    if (this.closedCount === this.numMines) {
      return State.WIN;
    }
  }

  /**
   * すべてのセルを開く
   */
  openAll() {
    this.field.all().forEach(c => c.open());
  }

  /**
   * 周囲のセルを再帰的に開く。
   * 
   * 数字、フラグ付きセルに到達したらそこで終了します。
   * @param {Point} point 座標
   */
  openNeighbors(point) {
    let targetList = this.field.arround(point)
      .filter(p => !this.field.get(p).isOpen)
      .filter(p => !this.field.get(p).isFlagged);

    while (targetList.length !== 0) {
      let p = targetList.pop();
      let targetCell = this.field.get(p);
      targetCell.open();
      if (targetCell.count === 0) {
        this.field.arround(p)
          .filter(s => !this.field.get(s).isOpen)
          .filter(s => !this.field.get(s).isFlagged)
          .forEach(s => targetList.push(s));
      }
    }
  }

}

export default Game;