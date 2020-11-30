import Point from '@/lib/Point'

describe('Point', () => {
  it("contains row and col", () => {
    let p = Point.of(1, 2);

    expect(p.row).toBe(1);
    expect(p.col).toBe(2);
    expect(p).toEqual({ row: 1, col: 2 });
  })

  it("plus rows and cols", () => {
    let p = Point.of(0, 0);

    // 初期値
    expect(p).toEqual({ row: 0, col: 0 });

    // 行の変更
    expect(p.plusRow(1)).toEqual({ row: 1, col: 0 });
    expect(p.plusRow(-2)).toEqual({ row: -2, col: 0 });

    // 列の変更
    expect(p.plusCol(10)).toEqual({ row: 0, col: 10 });
    expect(p.plusCol(-5)).toEqual({ row: 0, col: -5 });

    // チェインできること
    expect(p.plusRow(2).plusCol(3).plusRow(2)).toEqual({ row: 4, col: 3 });
  })
})
