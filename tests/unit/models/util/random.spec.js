import random from '@/models/util/random.js'
import Point from '@/models/util/Point.js'

describe('random', () => {
  describe('#points', () => {
    test('指定した長さの配列が返されること', () => {
      let setting = { width: 3, height: 3, numMines: 2 }
      let result = random.points(setting, Point.of(0, 0))

      expect(result.length).toBe(2)
    })

    test('除外対象の座標が含まれないこと', () => {
      let exclude = Point.of(1, 1)

      for (let i = 0; i < 9; i++) {
        let setting = { width: 3, height: 3, numMines: 8 }
        let result = random.points(setting, exclude)
        expect(result.includes(exclude)).toBeFalsy()
      }
    })
  })
})
