import Point from '@/lib/Point.js'

describe('Point', () => {

  it("同じ座標なら同じインスタンスであること", () => {
    expect(Point.of(1, 2)).toEqual(Point.of(1, 2));
  })

  it("x, y どちらか一方でも異なるなら異なるインスタンスであること", () => {
    // x 座標が異なる
    expect(Point.of(1, 1)).not.toEqual(Point.of(9, 1));

    // y 座標が異なる
    expect(Point.of(1, 1)).not.toEqual(Point.of(1, 9));
  })

  it("x座標、y座標が保持されていること", () => {
    let p = Point.of(2, 1);

    expect(p.y).toBe(1);
    expect(p.x).toBe(2);
  })

  it("x座標、y座標に加算したPointが取得できること", () => {
    let p = Point.of(0, 0);

    // 初期値
    expect(p).toEqual(Point.of(0, 0));

    // 行の変更
    expect(p.addY(1)).toEqual(Point.of(0, 1));
    expect(p.addY(-2)).toEqual(Point.of(0, -2));

    // 列の変更
    expect(p.addX(10)).toEqual(Point.of(10, 0));
    expect(p.addX(-5)).toEqual(Point.of(-5, 0));

    // チェインできること
    expect(p.addY(2).addX(3).addY(2)).toEqual(Point.of(3, 4));
  })
})
