import random from '@/lib/random.js'
import Point from '@/lib/Point.js'

describe('random', () => {
  describe('#points', () => {
    it('指定した長さの配列が返されること', () => {
      let result = random.points(3, 3, 2, Point.of(0, 0))

      expect(result.length).toBe(2)
    })

    it('除外対象の座標が含まれないこと', () => {
      let exclude = Point.of(1, 1)

      for (let i = 0; i < 9; i++) {
        let result = random.points(3, 3, 8, exclude)
        expect(result.includes(exclude)).toBeFalsy()
      }
    })
  })
})
