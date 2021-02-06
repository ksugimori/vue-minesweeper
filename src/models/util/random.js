import Point from '@/models/util/Point.js'

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
  let excludeIndex = toIndex(excludePoint, setting.width)
  return randomInts(setting.width * setting.height)
    .filter(i => i !== excludeIndex)
    .slice(0, setting.numMines)
    .map(i => toPoint(i, setting.width))
}

/**
 * 0 から length - 1 までの数字をランダムに並べ替えた配列を生成する。
 * @param {Number} length 長さ
 */
function randomInts (length) {
  let result = new Array(length)
  for (let i = 0; i < length; i++) {
    result[i] = i
  }

  shuffle(result)

  return result
}

/**
 * Point から インデックス に変換する
 * @param {Point} point 座標
 * @param {Number} width 横幅
 */
function toIndex (point, width) {
  return point.y * width + point.x
}

/**
 * インデックスから Point に変換する
 * @param {Number} index インデックス
 * @param {Number} width 横幅
 */
function toPoint (index, width) {
  let x = index % width
  let y = Math.floor(index / width)
  return Point.of(x, y)
}

/**
 * 配列をランダムに並べ替える
 * @param {Array} array 配列
 */
function shuffle (array) {
  for (let i = 0; i < array.length; i++) {
    let j = Math.floor(Math.random() * array.length)
    let tmp = array[i]
    array[i] = array[j]
    array[j] = tmp
  }
}

export default { points }
