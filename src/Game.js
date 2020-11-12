class Game {
  /**
   * 地雷を表す値
   */
  static MINE_VALUE = -1;

  /**
   * コンストラクタ
   */
  constructor() {
    this.field = [];
  }

  /**
   * 地雷が埋まっているか？
   * 
   * row, col が範囲外のときは常に false を返します。
   * @param {Number} row 座標
   * @param {Number} col 座標
   */
  isMine(row, col) {
    return (row in this.field) && (col in this.field[row])
      && this.field[row][col] === Game.MINE_VALUE;
  }

  /**
   * 盤面を初期化する。
   * @param {Number} numRows 
   * @param {Number} numCols 
   */
  initialize(numRows, numCols) {
    this.field = [];

    for (let row = 0; row < numRows; row++) {
      let row = new Array(numCols).fill(0);
      this.field.push(row);
    }

    // 地雷をランダムにセット
    // TODO これだと各行に１個になるのでロジック変更したい
    for (let row = 0; row < numRows; row++) {
      let index = Math.floor(Math.random() * numCols);
      this.field[row][index] = Game.MINE_VALUE;
    }

    // 各マスの周囲の地雷数をカウントし、value にセットする。
    for (let row = 0; row < this.field.length; row++) {
      for (let col = 0; col < this.field[row].length; col++) {
        if (this.isMine(row, col)) {
          continue;
        }

        let count = 0;

        count += this.isMine(row - 1, col - 1);
        count += this.isMine(row - 1, col);
        count += this.isMine(row - 1, col + 1);

        count += this.isMine(row, col - 1);
        count += this.isMine(row, col + 1);

        count += this.isMine(row + 1, col - 1);
        count += this.isMine(row + 1, col);
        count += this.isMine(row + 1, col + 1);

        this.field[row][col] = count;
      }
    }
  }
}

export default Game;