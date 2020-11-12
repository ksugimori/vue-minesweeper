/**
 * セル
 */
class Cell {
  /**
   * 地雷を表す値
   */
  static MINE_VALUE = -1;

  /**
   * コンストラクタ
   */
  constructor() {
    this.count = 0;
    this.isOpen = false;
  }

  /**
   * セルを開く
   */
  open() {
    this.isOpen = true;
  }

  /**
   * 地雷をセットする
   */
  mine() {
    this.count = Cell.MINE_VALUE;
  }

  /**
   * 地雷がセットされているか？
   */
  isMine() {
    return this.count === Cell.MINE_VALUE;
  }
}

export default Cell;