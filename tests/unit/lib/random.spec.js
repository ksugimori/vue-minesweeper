import Random from '@/lib/Random'
import Point from '@/lib/Point'

describe('Random', () => {
  describe('#randomPoints', () => {
    it('指定した長さの配列が返されること', () => {
      let random = new Random();

      let result = random.randomPoints(3, 3, 2, Point.of(0, 0));

      expect(result.length).toBe(2);
    })

    it('除外対象の座標が含まれないこと', () => {
      let random = new Random();

      let exclude = Point.of(1, 1);

      for (let i = 0; i < 9; i++) {
        let result = random.randomPoints(3, 3, 8, exclude);
        expect(result.includes(exclude)).toBeFalsy();
      }
    })
  })
})