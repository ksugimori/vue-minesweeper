import Point from '@/lib/util/Point.js'

/**
 * ランダムな Point の配列を生成する。
 *
 * x座標は 0 から setting.width まで（width は含まない）、
 * y座標は 0 から setting.height まで（height は含まない）、
 * の範囲からランダムに選択します。
 * @param {Setting} setting 設定情報
 * @param {Point} excludePoint 除外する座標
 */
function points (setting, excludePoint) {
  let result = []
  while (result.length < setting.numMines) {
    let randomX = Math.floor(Math.random() * setting.width)
    let randomY = Math.floor(Math.random() * setting.height)
    let point = Point.of(randomX, randomY)

    if (excludePoint.equals(point)) {
      continue
    }
    if (result.some(p => p.equals(point))) {
      continue
    }

    result.push(point)
  }

  return result
}

export default {
  points
}
