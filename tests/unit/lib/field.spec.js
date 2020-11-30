import Point from '@/lib/Point'
import Field from '@/lib/Field'

describe('Field', () => {
  describe('#contains', () => {
    it('範囲内にあるときのみ true が返ること', () => {
      // ２行、３列で初期化
      const field = new Field(2, 3);

      // -1 行目
      expect(field.contains(Point.of(-1, 0))).toBeFalsy();

      // １行目
      expect(field.contains(Point.of(0, 0))).toBeTruthy();
      expect(field.contains(Point.of(0, 1))).toBeTruthy();
      expect(field.contains(Point.of(0, 2))).toBeTruthy();
      expect(field.contains(Point.of(0, 3))).toBeFalsy();

      // ２行目
      expect(field.contains(Point.of(1, 2))).toBeTruthy();

      // ３行目
      expect(field.contains(Point.of(2, 2))).toBeFalsy();
    })
  })

  describe('#arround', () => {
    it("周囲の 8 セルが返ってくること", () => {
      // ３行、３列で初期化
      const field = new Field(3, 3);

      const result = field.arround(1, 1);

      expect(result.length).toBe(8);

      expect(result).toContainEqual({ row: 0, col: 0 });
      expect(result).toContainEqual({ row: 0, col: 1 });
      expect(result).toContainEqual({ row: 0, col: 2 });

      expect(result).toContainEqual({ row: 1, col: 0 });
      // row: 1, col: 1 が引数なのでこれは返ってこない
      expect(result).toContainEqual({ row: 1, col: 2 });

      expect(result).toContainEqual({ row: 2, col: 0 });
      expect(result).toContainEqual({ row: 2, col: 1 });
      expect(result).toContainEqual({ row: 2, col: 2 });
    })

    it("範囲外のセルは除外されていること", () => {
      // １行、３列で初期化
      const field = new Field(1, 3);

      const result = field.arround(0, 0);

      expect(result).toEqual([{ row: 0, col: 1 }]);
    })
  })

})
