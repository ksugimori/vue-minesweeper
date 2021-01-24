import Point from '@/lib/Point.js'
import PointQueue from '@/lib/PointQueue.js'

describe('PointQueue', () => {
  describe('#push, #shift', () => {
    it('キューに追加した Point が順番に取得できること', () => {
      let queue = new PointQueue()

      queue.push(Point.of(0, 1))
      queue.push(Point.of(0, 2))

      expect(queue.shift().equals(Point.of(0, 1))).toBeTruthy()
      expect(queue.shift().equals(Point.of(0, 2))).toBeTruthy()
    })

    it('要素が存在しない状態で shift すると undefined が返ること', () => {
      let queue = new PointQueue()

      queue.push(Point.of(0, 1))

      expect(queue.shift().equals(Point.of(0, 1))).toBeTruthy()
      expect(queue.shift()).toBeUndefined()
    })
  })

  describe('#merge', () => {
    it('複数の Point がまとめて push できること', () => {
      let from = new PointQueue()
      let to = new PointQueue()

      from.push(Point.of(1, 0))
      from.push(Point.of(2, 0))

      to.merge(from)

      expect(to.shift().equals(Point.of(1, 0))).toBeTruthy()
      expect(to.shift().equals(Point.of(2, 0))).toBeTruthy()
      expect(to.shift()).toBeUndefined()
    })
  })

  describe('#uniq', () => {
    it('重複する要素が取り除かれること', () => {
      let queue = new PointQueue()

      queue.push(Point.of(0, 1))
      queue.push(Point.of(0, 2))
      queue.push(Point.of(0, 1))

      queue.uniq()

      expect(queue.shift().equals(Point.of(0, 1))).toBeTruthy()
      expect(queue.shift().equals(Point.of(0, 2))).toBeTruthy()
      expect(queue.shift()).toBeUndefined()
    })
  })
})
