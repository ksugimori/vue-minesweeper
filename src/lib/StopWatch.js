/**
 * 時間計測用のクラス
 */
class StopWatch {
  constructor () {
    this.playTime = 0
    this.startTime = null
    this.timer = null
  }

  /**
   * 計測を開始する。
   *
   * １秒ごとに playTime の値を更新します。
   */
  start () {
    this.startTime = Date.now()
    this.timer = setInterval(() => {
      this.playTime = Math.floor((Date.now() - this.startTime) / 1000)
    }, 1000)
  }

  /**
   * 計測を停止する。
   *
   * このメソッドでは playTime はリセットされません。
   */
  stop () {
    clearInterval(this.timer)
  }

  /**
   * 初期状態に戻す
   */
  reset () {
    this.stop()
    this.playTime = 0
    this.startTime = null
  }
}

export default StopWatch
