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
   * 地雷が埋まっているか？
   * 
   * row, col が範囲外のときは常に false を返します。
   * @param {Number} row 行番号
   * @param {Number} col 列番号
   */
  isMine(row, col) {
    return (row in this.field) && (col in this.field[row])
      && this.field[row][col].isMine();
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

        this.field[row][col].count = count;
      }
    }
  }

  /**
   * セルを開く
   * @param {Number} row 行番号
   * @param {Number} col 列番号
   */
  open(row, col) {
    this.field[row][col].open();
  }
}

export default Game;