import Status from '@/models/status/Status.js'
import Point from '@/models/util/Point.js'
import Game from '@/models/Game.js'
jest.mock('@/models/Game.js')

beforeEach(() => {
  Game.mockClear()
})

describe('Status.PLAY', () => {
  let game
  beforeEach(() => {
    game = new Game()
    game.status = Status.PLAY
  })

  describe('#open', () => {
    test('doOpen が呼ばれること', () => {
      // テスト
      Status.PLAY.open(game, Point.of(0, 0))

      // メソッド呼び出し
      expect(game.doOpen.mock.calls.length).toBe(1)
    })

    test('クリアしたらステータスが WIN になること', () => {
      game.isWin.mockReturnValue(true)

      // テスト
      Status.PLAY.open(game, Point.of(0, 0))

      // 検証
      expect(game.status).toBe(Status.WIN)
      expect(game.timerStop.mock.calls.length).toBe(1)
    })

    test('ミスしていたらステータスが LOSE になること', () => {
      game.isLose.mockReturnValue(true)

      // テスト
      Status.PLAY.open(game, Point.of(0, 0))

      // 検証
      expect(game.status).toBe(Status.LOSE)
      expect(game.timerStop.mock.calls.length).toBe(1)
    })
  })

  describe('#flag', () => {
    test('doFlag が呼ばれること', () => {
      // テスト
      Status.PLAY.flag(game, Point.of(0, 0))

      // メソッド呼び出し
      expect(game.doFlag.mock.calls.length).toBe(1)
    })
  })

  describe('#isEnd', () => {
    test('false であること', () => {
      expect(Status.PLAY.isEnd).toBeFalsy()
    })
  })
})
