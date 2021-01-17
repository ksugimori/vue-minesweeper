import Point from '@/lib/Point.js'
import Field from '@/lib/Field.js'

describe('Field', () => {
  describe('#contains', () => {
    it('範囲内にあるときのみ true が返ること', () => {
      // ２行、３列で初期化
      const field = new Field(3, 2)

      // -1 行目
      expect(field.contains(Point.of(0, -1))).toBeFalsy()

      // １行目
      expect(field.contains(Point.of(0, 0))).toBeTruthy()
      expect(field.contains(Point.of(1, 0))).toBeTruthy()
      expect(field.contains(Point.of(2, 0))).toBeTruthy()
      expect(field.contains(Point.of(3, 0))).toBeFalsy()

      // ２行目
      expect(field.contains(Point.of(2, 1))).toBeTruthy()

      // ３行目
      expect(field.contains(Point.of(2, 2))).toBeFalsy()
    })
  })

  describe('#arround', () => {
    it('周囲の 8 セルが返ってくること', () => {
      // ３行、３列で初期化
      const field = new Field(3, 3)

      const result = field.arround(Point.of(1, 1))

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

    it('範囲外のセルは除外されていること', () => {
      // １行、３列で初期化
      const field = new Field(3, 1)

      const result = field.arround(Point.of(0, 0))

      expect(result).toEqual([Point.of(1, 0)])
    })
  })

  describe('#forEachPoint', () => {
    it('範囲内の座標がすべて返されること', () => {
      const field = new Field(2, 2)

      let result = []
      field.forEachPoint(p => result.push(p))
      expect(result.sort()).toEqual([
        Point.of(0, 0), Point.of(0, 1),
        Point.of(1, 0), Point.of(1, 1)
      ].sort())
    })
  })

  describe('#at', () => {
    it('範囲外なら undefined が返ること', () => {
      const field = new Field(2, 2)

      let p = Point.of(9, 9)
      expect(field.at(p)).toBeUndefined()
    })

    it('範囲内ならその座標のセルが取得できること', () => {
      const field = new Field(2, 2)

      // (x, y) = (0, 1) の count を更新
      let p = Point.of(0, 1)
      field.at(p).count = 8

      expect(field.at(p).count).toBe(8)
    })
  })

  describe('#count', () => {
    it('指定した条件でカウントできること', () => {
      const field = new Field(2, 2)

      field.at(Point.of(0, 0)).isOpen = true
      field.at(Point.of(0, 1)).isOpen = false
      field.at(Point.of(1, 0)).isOpen = false
      field.at(Point.of(1, 1)).isOpen = false

      expect(field.count(cell => cell.isOpen === false)).toBe(3)
    })

    it('条件に合致するものがなければ 0 が返ること', () => {
      const field = new Field(2, 2)

      field.at(Point.of(0, 0)).isOpen = false
      field.at(Point.of(0, 1)).isOpen = false
      field.at(Point.of(1, 0)).isOpen = false
      field.at(Point.of(1, 1)).isOpen = false

      expect(field.count(cell => cell.isOpen)).toBe(0)
    })
  })

  describe('#forEach', () => {
    it('全項目に対して操作が行われること', () => {
      const field = new Field(2, 2)

      // 初期状態ではフラグは 0 件
      expect(field.count(cell => cell.isFlagged)).toBe(0)

      // 全てのセルにフラグをセット
      field.forEach(cell => cell.flag())

      // フラグは 4 件になっていること
      expect(field.count(cell => cell.isFlagged)).toBe(4)
    })
  })
})
