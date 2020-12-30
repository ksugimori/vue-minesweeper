/**
 * 座標を表すクラス
 */
class Point {
  /**
   * コンストラクタ
   * @param {Number} x x座標
   * @param {Number} y y座標
   */
  constructor(x, y) {
    // 直接更新されたくないので x, y は Getter のみ公開
    this._x = x;
    this._y = y;
  }

  /**
   * x座標
   */
  get x() {
    return this._x;
  }

  /**
   * y座標
   */
  get y() {
    return this._y;
  }

  /**
   * インスタンスのキャッシュ
   */
  static _cache = {};

  /**
   * キャッシュのキー
   * @param {Number} x x座標
   * @param {Number} y y座標
   */
  static _cacheKey(x, y) {
    return `${x},${y}`;
  }

  /**
   * ファクトリーメソッド。
   * 
   * このメソッドでは、一度作成されたインスタンスはキャッシュされ、
   * 同じ座標の場合は必ず同じインスタンスを返します。
   * @param {Number} x x座標
   * @param {Number} y y座標
   */
  static of(x, y) {
    const cacheKey = Point._cacheKey(x, y);

    if (cacheKey in Point._cache) {
      return Point._cache[cacheKey];
    } else {
      let instance = new Point(x, y);
      Point._cache[cacheKey] = instance;
      return instance;
    }
  }

  /**
   * x に n 加えた座標を得る
   * @param {Number} n 移動量
   */
  addX(n) {
    return Point.of(this._x + n, this._y);
  }

  /**
   * y に n 加えた座標を得る
   * @param {Number} n 移動量
   */
  addY(n) {
    return Point.of(this._x, this._y + n);
  }
}

export default Point;