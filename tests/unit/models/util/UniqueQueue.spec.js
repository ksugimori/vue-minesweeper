import Point from '@/models/util/Point.js'
import UniqueQueue from '@/models/util/UniqueQueue.js'

describe('UniqueQueue', () => {
  test('キューに追加した Point が順番に取得できること', () => {
    let queue = new UniqueQueue()

    queue.push(Point.of(0, 1))
    queue.push(Point.of(0, 2))

    expect(queue.shift().equals(Point.of(0, 1))).toBeTruthy()
    expect(queue.shift().equals(Point.of(0, 2))).toBeTruthy()
  })

  test('要素が存在しない状態で shift すると undefined が返ること', () => {
    let queue = new UniqueQueue()

    queue.push(Point.of(0, 1))

    expect(queue.shift().equals(Point.of(0, 1))).toBeTruthy()
    expect(queue.shift()).toBeUndefined()
  })

  test('すでに存在するものは追加されないこと', () => {
    let queue = new UniqueQueue()

    queue.push(Point.of(0, 1))
    queue.push(Point.of(0, 2))
    queue.push(Point.of(0, 1)) // これは重複するので追加されない

    expect(queue.shift().equals(Point.of(0, 1))).toBeTruthy()
    expect(queue.shift().equals(Point.of(0, 2))).toBeTruthy()
    expect(queue.shift()).toBeUndefined()
  })
})
