import Point from '@/lib/Point.js';
import Status from '@/lib/status/Status.js';
import Field from '@/lib/Field.js';
import StopWatch from '@/lib/StopWatch.js';
import Setting from '@/lib/Setting.js';
import Random from '@/lib/Random.js';

/**
 * マインスイーパー全体を管理するクラス
 */
class Game {
  /**
   * コンストラクタ
   */
  constructor() {
    this.random = new Random();
    this.field = new Field();
    this.stopWatch = new StopWatch();
    this.setting = Setting.EASY;
    this.status = Status.INIT;
  }

  /**
   * フラグの数
   */
  get flagCount() {
    return this.field.values.filter(cell => cell.isFlagged).length;
  }

  /**
   * 閉じているセルの数
   */
  get closedCount() {
    return this.field.values.filter(cell => !cell.isOpen).length;
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

    this.stopWatch.reset();
    this.status = Status.INIT;

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
    this.random.randomPoints(this.setting.width, this.setting.height, this.setting.numMines, exclude)
      .forEach(p => this.cellAt(p).mine());

    // 各マスの周囲の地雷数をカウントし、value にセットする。
    this.field.points.forEach(p => {
      let cell = this.cellAt(p);
      if (!cell.isMine) {
        cell.count = this.field.arround(p).filter(q => this.cellAt(q).isMine).length;
      }
    })
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
      let arroundFlagCount = this.field.arround(point).filter(p => this.cellAt(p).isFlagged).length;

      if (cell.count === arroundFlagCount) {
        this.openNeighbors(point);
      }
    } else {
      cell.open();

      if (cell.isEmpty) {
        this.openNeighbors(point);
      }
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
    const canOpen = (p) => {
      let cell = this.field.get(p);
      return !cell.isOpen && !cell.isFlagged;
    };

    let queue = this.field.arround(point).filter(p => canOpen(p));

    let target;
    while ((target = queue.shift()) !== undefined) {
      let cell = this.cellAt(target);

      cell.open();

      // 開いたセルが空白なら、その周囲を再帰的に開く
      if (cell.isEmpty) {
        this.field.arround(target).filter(p => canOpen(p))
          .filter(p => !queue.includes(p))
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