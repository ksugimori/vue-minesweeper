import Point from '@/lib/Point'

describe('Point', () => {
  it("contains y and x", () => {
    let p = Point.of(2, 1);

    expect(p.y).toBe(1);
    expect(p.x).toBe(2);
    expect(p).toEqual({ y: 1, x: 2 });
  })

  it("plus Ys and Xs", () => {
    let p = Point.of(0, 0);

    // 初期値
    expect(p).toEqual({ y: 0, x: 0 });

    // 行の変更
    expect(p.plusY(1)).toEqual({ y: 1, x: 0 });
    expect(p.plusY(-2)).toEqual({ y: -2, x: 0 });

    // 列の変更
    expect(p.plusX(10)).toEqual({ y: 0, x: 10 });
    expect(p.plusX(-5)).toEqual({ y: 0, x: -5 });

    // チェインできること
    expect(p.plusY(2).plusX(3).plusY(2)).toEqual({ y: 4, x: 3 });
  })
})
