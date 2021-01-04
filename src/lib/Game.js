import Point from './Point';
import Status from './status/Status';
import Field from './Field';
import StopWatch from './StopWatch';
import Setting from './Setting';

/**
 * マインスイーパー全体を管理するクラス
 */
class Game {
  /**
   * コンストラクタ
   */
  constructor() {
    this.field = new Field();
    this.stopWatch = new StopWatch();
    this.setting = Setting.EASY;
    this.status = Status.INIT;
  }

  /**
   * フラグの数
   */
  get flagCount() {
    return this.field.values.map(cell => cell.isFlagged ? 1 : 0).reduce((sum, x) => sum + x);
  }

  /**
   * 閉じているセルの数
   */
  get closedCount() {
    return this.field.values.map(cell => cell.isOpen ? 0 : 1).reduce((sum, x) => sum + x);
  }

  /**
   * プレイ時間
   */
  get playTime() {
    return this.stopWatch.playTime;
  }

  /**
   * 盤面を初期化する。
   */
  initialize() {
    this.field = new Field(this.setting.width, this.setting.height);

    this.status = Status.INIT;
    this.stopWatch.reset();

    return this;
  }

  /**
   * ゲームを開始する。
   */
  startGame() {
    this.stopWatch.start();
    this.status = Status.PLAY;
  }

  /**
   * ゲームを終了する。
   */
  endGame(status) {
    this.field.values.forEach(cell => {
      cell.open();
      cell.unflag();
    });
    this.stopWatch.stop();
    this.status = status;
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
    while (mines.length < this.setting.numMines) {
      let mine = Point.of(Math.floor(Math.random() * this.setting.width), Math.floor(Math.random() * this.setting.height));

      if (exclude === mine || mines.some(p => p === mine)) {
        continue;
      }

      mines.push(mine);
    }

    mines.forEach(p => this.field.get(p).mine());

    // 各マスの周囲の地雷数をカウントし、value にセットする。
    for (let y = 0; y < this.field.height; y++) {
      for (let x = 0; x < this.field.width; x++) {
        let target = this.field.get(Point.of(x, y));
        if (target.isMine) {
          continue;
        }

        target.count = this.field.arround(Point.of(x, y))
          .map(p => this.field.get(p))
          .filter(cell => cell.isMine)
          .length;
      }
    }
  }

  /**
   * セルを開く
   * @param {Number} x x座標
   * @param {Number} y y座標
   */
  open(x, y) {
    this.status.open(this, Point.of(x, y));
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
   * @param {Number} x x座標
   * @param {Number} y y座標
   */
  flag(x, y) {
    this.status.flag(this, Point.of(x, y));
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
    if (this.field.values.filter(cell => cell.isMine).some(cell => cell.isOpen)) {
      return Status.LOSE;
    }

    if (this.closedCount === this.setting.numMines) {
      return Status.WIN;
    }
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