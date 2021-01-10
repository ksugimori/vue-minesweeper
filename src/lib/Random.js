import Point from './Point';

/**
 * ランダム処理
 */
class Random {

  /**
   * ランダムな Point の配列を生成する。
   * 
   * x座標は 0 から rangeX まで（rangeX は含まない）、
   * y座標は 0 から rangeY まで（rangeY は含まない）、
   * の範囲からランダムに選択します。
   * @param {Number} rangeX x座標の範囲
   * @param {Number} rangeY y座標の範囲
   * @param {Number} length 生成する配列の長さ
   * @param {Point} excludePoint 除外する座標
   */
  randomPoints(rangeX, rangeY, length, excludePoint) {
    let result = [];
    while (result.length < length) {
      let randomX = Math.floor(Math.random() * rangeX);
      let randomY = Math.floor(Math.random() * rangeY);
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