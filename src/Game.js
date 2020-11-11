class Game {
  static MINE_VALUE = -1;

  constructor() {
    this.field = [];
    this.rows = 0;
    this.cols = 0;
  }

  /**
   * 地雷が埋まっているか？
   * @param {Integer}} x 座標
   * @param {Integer} y 座標
   */
  isMine(x, y) {
    return this.field[y][x] === Game.MINE_VALUE;
  }

  countMine(x, y) {
    if (y < 0 || this.rows <= y) {
      return 0;
    }

    let count = 0;

    if (x - 1 >= 0) {
      if (this.isMine(x - 1, y)) {
        count++;
      }
    }

    if (this.isMine(x, y)) {
      count++;
    }

    if (x + 1 < this.cols) {
      if (this.isMine(x + 1, y)) {
        count++;
      }
    }

    return count;
  }

  /**
   * 盤面を初期化する。
   */
  initialize(cols, rows, mines) {
    this.field = [];
    this.rows = rows;
    this.cols = cols;

    for (let y = 0; y < rows; y++) {
      let row = new Array(cols).fill(0);
      this.field.push(row);
    }

    // 地雷をランダムにセット
    // TODO これだと各行に１個になるのでロジック変更したい
    for (let y = 0; y < rows; y++) {
      let index = Math.floor(Math.random() * cols);
      this.field[y][index] = Game.MINE_VALUE; // TODO 地雷を表す値を定数に
    }

    // TODO 地雷をカウント
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        if (this.isMine(x, y)) {
          continue;
        }

        let count = 0;

        count += this.countMine(x, y - 1);
        count += this.countMine(x, y);
        count += this.countMine(x, y + 1);

        this.field[y][x] = count;
      }
    }
  }
}

export default Game;