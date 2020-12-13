import Point from './Point';
import State from './state/State';
import Field from './Field';
import StopWatch from './StopWatch';

/**
 * マインスイーパー全体を管理するクラス
 */
class Game {
  /**
   * コンストラクタ
   */
  constructor() {
    this.field = new Field();
    this.setting = {
      height: 9,
      width: 9,
      numMines: 10
    }

    this.stopWatch = new StopWatch();
    this.state = State.INIT;
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
   * @param {Number} width 
   * @param {Number} height 
   * @param {Number} nunmMines
   */
  initialize(width, height, numMines) {
    this.setting.height = height || this.setting.height;
    this.setting.width = width || this.setting.width;
    this.setting.numMines = numMines || this.setting.numMines;
    if (this.setting.height * this.setting.width < this.setting.numMines) {
      this.setting.numMines = Math.floor(this.setting.height * this.setting.width / 2);
    }

    this.field = new Field(this.setting.width, this.setting.height);

    this.state = State.INIT;
    this.stopWatch.reset();

    return this;
  }

  /**
   * ゲームを開始する。
   */
  startGame() {
    this.stopWatch.start();
    this.state = State.PLAY;
  }

  /**
   * ゲームを終了する。
   */
  endGame(state) {
    this.field.values.forEach(cell => {
      cell.open();
      cell.unflag();
    });
    this.stopWatch.stop();
    this.state = state;
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
    this.state.open(this, Point.of(x, y));
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
    this.state.flag(this, Point.of(x, y));
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
      return State.LOSE;
    }

    if (this.closedCount === this.setting.numMines) {
      return State.WIN;
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