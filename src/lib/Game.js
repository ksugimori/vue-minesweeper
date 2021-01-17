import Point from '@/lib/Point.js'
import Status from '@/lib/status/Status.js'
import Field from '@/lib/Field.js'
import StopWatch from '@/lib/StopWatch.js'
import Setting from '@/lib/Setting.js'
import Random from '@/lib/Random.js'

/**
 * マインスイーパー全体を管理するクラス
 */
class Game {
  /**
   * コンストラクタ
   */
  constructor () {
    this.random = new Random()
    this.field = new Field()
    this.stopWatch = new StopWatch()
    this.setting = Setting.EASY
    this.status = Status.INIT
  }

  /**
   * フラグの数
   */
  get flagCount () {
    return this.field.count(cell => cell.isFlagged)
  }

  /**
   * 閉じているセルの数
   */
  get closedCount () {
    return this.field.count(cell => !cell.isOpen)
  }

  /**
   * プレイ時間
   */
  get playTime () {
    return this.stopWatch.playTime
  }

  /**
   * 盤面を初期化する。
   */
  initialize () {
    this.field = new Field(this.setting.width, this.setting.height)

    this.stopWatch.reset()
    this.status = Status.INIT

    return this
  }

  /**
   * ゲームを開始する。
   */
  startGame () {
    this.stopWatch.start()
    this.status = Status.PLAY
  }

  /**
   * ゲームを終了する。
   */
  endGame (status) {
    this.field.forEach(cell => {
      cell.open()
      cell.unflag()
    })
    this.stopWatch.stop()
    this.status = status
  }

  /**
   * 地雷を配置する。
   *
   * 初手アウトを防ぐため、引数で渡された場所には配置しない。
   * @param {Point} exclude 除外する座標
   */
  mine (exclude) {
    // 地雷をランダムにセット
    this.random.randomPoints(this.setting.width, this.setting.height, this.setting.numMines, exclude)
      .forEach(p => this.field.at(p).mine())

    // 各マスの周囲の地雷数をカウントし、value にセットする。
    this.field.forEachPoint(p => {
      let cell = this.field.at(p)
      if (!cell.isMine) {
        cell.count = this.field.arround(p, c => c.isMine).length
      }
    })
  }

  /**
   * セルを開く
   * @param {Number} x x座標
   * @param {Number} y y座標
   */
  open (x, y) {
    this.status.open(this, Point.of(x, y))
  }

  /**
   * 指定したセルを開く。
   *
   * @param {Point} point 座標
   */
  doOpen (point) {
    const cell = this.field.at(point)

    if (cell.isFlagged) {
      return
    }

    if (cell.isOpen) {
      let arroundFlagCount = this.field.arround(point, c => c.isFlagged).length

      if (cell.count === arroundFlagCount) {
        this.openRecursive(point)
      }
    } else {
      cell.open()

      if (cell.isEmpty) {
        this.openRecursive(point)
      }
    }
  }

  /**
   * フラグをつける。
   * @param {Number} x x座標
   * @param {Number} y y座標
   */
  flag (x, y) {
    this.status.flag(this, Point.of(x, y))
  }

  /**
   * フラグをつける。
   * @param {Point} point 座標
   */
  doFlag (point) {
    let cell = this.field.at(point)
    if (cell.isFlagged) {
      cell.unflag()
    } else {
      cell.flag()
    }
  }

  /**
   * ゲームの終了判定。
   *
   * ゲームが終了していればそのステータスを返す。
   */
  judge () {
    if (this.field.count(cell => cell.isMine && cell.isOpen) > 0) {
      return Status.LOSE
    }

    if (this.closedCount === this.setting.numMines) {
      return Status.WIN
    }
  }

  /**
   * 周囲のセルを再帰的に開く。
   *
   * 数字、フラグ付きセルに到達したらそこで終了します。
   * @param {Point} point 座標
   */
  openRecursive (point) {
    const isNotOpenOrFlagged = (cell) => !cell.isOpen && !cell.isFlagged

    let queue = this.field.arround(point, isNotOpenOrFlagged)

    let target
    while ((target = queue.shift()) !== undefined) {
      let cell = this.field.at(target)

      cell.open()

      // 開いたセルが空白なら、その周囲を再帰的に開く
      if (cell.isEmpty) {
        this.field.arround(target, isNotOpenOrFlagged).filter(p => queue.includes(p)).forEach(p => queue.push(p))
      }
    }
  }
}

export default Game
