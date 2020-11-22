/**
 * インスタンス
 */
class Status {
  static INIT = 'INIT';
  static PLAY = 'PLAY';
  static WIN = 'WIN';
  static LOSE = 'LOSE';

  static TRANSITION_MAP = {
    INIT: [Status.PLAY],
    PLAY: [Status.INIT, Status.WIN, Status.LOSE],
    WIN: [Status.INIT],
    LOSE: [Status.INIT]
  }

  constructor(value) {
    this.value = value || Status.INIT;
  }

  /**
   * ステータスを進める
   * @param {Status} next 次のステータス
   */
  to(next) {
    if (this.value === next) {
      return;
    }

    if (Status.TRANSITION_MAP[this.value].includes(next)) {
      this.value = next;
    } else {
      throw Error(`cannot transit from ${this.value} to ${next}`);
    }
  }

  /**
   * ステータスの同値比較
   * @param {Status} other 比較するステータス
   */
  equals(other) {
    return this.value === other;
  }

  /**
   * 文字列として表現する
   */
  toString() {
    return this.value;
  }
}

export default Status;