import Point from '@/models/util/Point.js'
import Field from '@/models/Field.js'

describe('Field', () => {
  describe('#pointsArround', () => {
    test('周囲の 8 座標が返ってくること', () => {
      // ３行、３列で初期化
      const field = new Field(3, 3)

      const result = field.pointsArround(Point.of(1, 1))

      expect(result.length).toBe(8)

      expect(result).toContainEqual(Point.of(0, 0))
      expect(result).toContainEqual(Point.of(0, 1))
      expect(result).toContainEqual(Point.of(0, 2))

      expect(result).toContainEqual(Point.of(1, 0))
      // x: 1, y: 1 が引数なのでこれは返ってこない
      expect(result).toContainEqual(Point.of(1, 2))

      expect(result).toContainEqual(Point.of(2, 0))
      expect(result).toContainEqual(Point.of(2, 1))
      expect(result).toContainEqual(Point.of(2, 2))
    })

    test('範囲外の座標は除外されていること', () => {
      // １行、３列で初期化
      const field = new Field(3, 1)

      const result = field.pointsArround(Point.of(0, 0))

      expect(result).toEqual([Point.of(1, 0)])
    })

    test('セルに対する条件で絞り込めること', () => {
      const field = new Field(3, 3)

      // T T T
      // T T F
      // T F F
      field.cellAt(Point.of(0, 0)).isOpen = true
      field.cellAt(Point.of(1, 0)).isOpen = true
      field.cellAt(Point.of(2, 0)).isOpen = true
      field.cellAt(Point.of(0, 1)).isOpen = true
      field.cellAt(Point.of(1, 1)).isOpen = true
      field.cellAt(Point.of(2, 1)).isOpen = false
      field.cellAt(Point.of(0, 2)).isOpen = true
      field.cellAt(Point.of(1, 2)).isOpen = false
      field.cellAt(Point.of(2, 2)).isOpen = false

      let result = field.pointsArround(Point.of(1, 1), c => c.isOpen)
      expect(result.sort()).toEqual([
        Point.of(0, 0), Point.of(1, 0), Point.of(2, 0),
        Point.of(0, 1),
        Point.of(0, 2)
      ].sort())
    })
  })

  describe('#points', () => {
    test('範囲内の座標がすべて返されること', () => {
      const field = new Field(2, 2)

      expect(field.points().sort()).toEqual([
        Point.of(0, 0), Point.of(0, 1),
        Point.of(1, 0), Point.of(1, 1)
      ].sort())
    })

    test('セルに対する条件で絞り込めること', () => {
      const field = new Field(2, 2)

      field.cellAt(Point.of(0, 0)).isOpen = true
      field.cellAt(Point.of(0, 1)).isOpen = true
      field.cellAt(Point.of(1, 0)).isOpen = false
      field.cellAt(Point.of(1, 1)).isOpen = true

      let result = field.points(cell => cell.isOpen)
      expect(result.sort()).toEqual([
        Point.of(0, 0), Point.of(0, 1), Point.of(1, 1)
      ].sort())
    })
  })

  describe('#cellAt', () => {
    test('範囲外なら undefined が返ること', () => {
      const field = new Field(2, 2)

      let p = Point.of(9, 9)
      expect(field.cellAt(p)).toBeUndefined()
    })

    test('範囲内ならその座標のセルが取得できること', () => {
      const field = new Field(2, 2)

      // (x, y) = (0, 1) の count を更新
      let p = Point.of(0, 1)
      field.cellAt(p).count = 8

      expect(field.cellAt(p).count).toBe(8)
    })
  })
})
