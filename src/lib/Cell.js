/**
 * セル
 */
class Cell {
  /**
   * コンストラクタ
   */
  constructor(params) {
    this.count = 0;
    this.isOpen = false;
    this.isMine = false;

    Object.assign(this, params);
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
    this.isMine = true;
  }
}

export default Cell;