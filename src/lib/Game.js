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
      let randomX = Math.floor(Math.random() * this.setting.width);
      let randomY = Math.floor(Math.random() * this.setting.height);
      let mine = Point.of(randomX, randomY);

      if (exclude === mine) {
        continue;
      }
      if (mines.includes(mine)) {
        continue;
      }

      mines.push(mine);
    }

    mines.forEach(p => this.cellAt(p).mine());

    // 各マスの周囲の地雷数をカウントし、value にセットする。
    for (let y = 0; y < this.field.height; y++) {
      for (let x = 0; x < this.field.width; x++) {
        let target = this.cellAt(Point.of(x, y));
        if (target.isMine) {
          continue;
        }

        target.count = this.field.arround(Point.of(x, y))
          .filter(p => this.cellAt(p).isMine)
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
    const cell = this.cellAt(point);

    if (cell.isFlagged) {
      return;
    }

    if (cell.isOpen) {
      let arroundFlagCount = this.field.arround(point)
        .map(p => this.cellAt(p)) //
        .filter(c => c.isFlagged) //
        .length;

      if (cell.count === arroundFlagCount) {
        this.openNeighbors(point);
      }

      return;
    }

    cell.open();

    if (cell.isEmpty) {
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
    let cell = this.cellAt(point);
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
    let queue = this.field.arround(point)
      .filter(p => !this.cellAt(p).isOpen)
      .filter(p => !this.cellAt(p).isFlagged);

    while ((point = queue.shift()) !== undefined) {
      this.cellAt(point).open();

      // 開いたセルが空白なら、その周囲を再帰的に開く
      if (this.cellAt(point).isEmpty) {
        this.field.arround(point)
          .filter(p => !this.cellAt(p).isOpen)
          .filter(p => !this.cellAt(p).isFlagged)
          .forEach(p => queue.push(p));
      }
    }
  }

  /**
   * 指定した座標のセルを取得する
   * @param {Point} point 座標
   */
  cellAt(point) {
    return this.field.get(point);
  }
}

export default Game;