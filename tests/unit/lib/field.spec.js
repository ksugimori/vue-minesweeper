import Point from '@/lib/Point'
import Field from '@/lib/Field'

describe('Field', () => {
  describe('#contains', () => {
    it('範囲内にあるときのみ true が返ること', () => {
      // ２行、３列で初期化
      const field = new Field(3, 2);

      // -1 行目
      expect(field.contains(Point.of(0, -1))).toBeFalsy();

      // １行目
      expect(field.contains(Point.of(0, 0))).toBeTruthy();
      expect(field.contains(Point.of(1, 0))).toBeTruthy();
      expect(field.contains(Point.of(2, 0))).toBeTruthy();
      expect(field.contains(Point.of(3, 0))).toBeFalsy();

      // ２行目
      expect(field.contains(Point.of(2, 1))).toBeTruthy();

      // ３行目
      expect(field.contains(Point.of(2, 2))).toBeFalsy();
    })
  })

  describe('#arround', () => {
    it("周囲の 8 セルが返ってくること", () => {
      // ３行、３列で初期化
      const field = new Field(3, 3);

      const result = field.arround(Point.of(1, 1));

      expect(result.length).toBe(8);

      expect(result).toContainEqual({ y: 0, x: 0 });
      expect(result).toContainEqual({ y: 0, x: 1 });
      expect(result).toContainEqual({ y: 0, x: 2 });

      expect(result).toContainEqual({ y: 1, x: 0 });
      // y: 1, x: 1 が引数なのでこれは返ってこない
      expect(result).toContainEqual({ y: 1, x: 2 });

      expect(result).toContainEqual({ y: 2, x: 0 });
      expect(result).toContainEqual({ y: 2, x: 1 });
      expect(result).toContainEqual({ y: 2, x: 2 });
    })

    it("範囲外のセルは除外されていること", () => {
      // １行、３列で初期化
      const field = new Field(3, 1);

      const result = field.arround(Point.of(0, 0));

      expect(result).toEqual([{ y: 0, x: 1 }]);
    })
  })

})
