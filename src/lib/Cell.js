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
    this.isFlagged = false;

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

  /**
   * フラグを立てる
   */
  flag() {
    this.isFlagged = true;
  }

  /**
   * フラグを外す
   */
  unflag() {
    this.isFlagged = false;
  }
}

export default Cell;