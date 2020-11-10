class Game {
  constructor() {
    this.field = [];
  }

  /**
   * 盤面を初期化する。
   */
  initialize(cols, rows, mines) {
    this.field = [];
    for (let y = 0; y < rows; y++) {
      let row = new Array(cols).fill(0);
      this.field.push(row);
    }

    // 地雷をランダムにセット
    // TODO これだと各行に１個になるのでロジック変更したい
    for (let y = 0; y < rows; y++) {
      let index = Math.floor(Math.random() * cols);
      this.field[y][index] = -1; // TODO 地雷を表す値を定数に
    }

    // TODO 地雷をカウント
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        if (this.field[y][x] < 0) {
          continue;
        }


        let count = 0;

        // 上の行
        if (y - 1 >= 0) {
          if (x - 1 >= 0) {
            if (this.field[y - 1][x - 1] < 0) {
              count++;
            }
          }
          if (this.field[y - 1][x] < 0) {
            count++;
          }
          if (x + 1 < cols) {
            if (this.field[y - 1][x + 1] < 0) {
              count++;
            }
          }
        }

        // 同じ行
        if (x - 1 >= 0) {
          if (this.field[y][x - 1] < 0) {
            count++;
          }
        }
        if (this.field[y][x] < 0) {
          count++;
        }
        if (x + 1 < cols) {
          if (this.field[y][x + 1] < 0) {
            count++;
          }
        }

        // 下の行
        if (y + 1 < rows) {
          if (x - 1 >= 0) {
            if (this.field[y + 1][x - 1] < 0) {
              count++;
            }
          }
          if (this.field[y + 1][x] < 0) {
            count++;
          }
          if (x + 1 < cols) {
            if (this.field[y + 1][x + 1] < 0) {
              count++;
            }
          }
        }

        this.field[y][x] = count;
      }
    }
  }
}

export default Game;