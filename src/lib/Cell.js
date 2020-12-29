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
    if (this.isOpen) return;

    this.isFlagged = true;
  }

  /**
   * フラグを外す
   */
  unflag() {
    this.isFlagged = false;
  }

  /**
   * 数字文字列
   */
  get text() {
    return this.count === 0 ? "" : this.count.toString();
  }
}

export default Cell;