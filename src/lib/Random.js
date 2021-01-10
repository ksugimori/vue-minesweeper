import Point from './Point';

/**
 * ランダム処理
 */
class Random {

  /**
   * ランダムな Point の配列を生成する。
   * 
   * x座標は 0 から maxX まで（maxX は含まない）、
   * y座標は 0 から maxY まで（maxY は含まない）、
   * の範囲からランダムに選択します。
   * @param {Number} maxX x座標の上限
   * @param {Number} maxY y座標の上限
   * @param {Number} length 生成する配列の長さ
   * @param {Point} excludePoint 除外する座標
   */
  randomPoints(maxX, maxY, length, excludePoint) {
    let result = [];
    while (result.length < length) {
      let randomX = Math.floor(Math.random() * maxX);
      let randomY = Math.floor(Math.random() * maxY);
      let point = Point.of(randomX, randomY);

      if (excludePoint === point) {
        continue;
      }
      if (result.includes(point)) {
        continue;
      }

      result.push(point);
    }

    return result;
  }

}

export default Random;