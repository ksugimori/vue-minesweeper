import Status from '@/models/status/Status.js'
import Point from '@/models/util/Point.js'
import Game from '@/models/Game.js'
jest.mock('@/models/Game.js')

beforeEach(() => {
  Game.mockClear()
})

describe('Status.INIT', () => {
  let game
  beforeEach(() => {
    game = new Game()
    game.status = Status.INIT
  })

  describe('#open', () => {
    test('mine, timerStart, doOpen が呼ばれること', () => {
      // テスト
      Status.INIT.open(game, Point.of(0, 0))

      // メソッド呼び出し
      expect(game.mine.mock.calls.length).toBe(1)
      expect(game.timerStart.mock.calls.length).toBe(1)
      expect(game.doOpen.mock.calls.length).toBe(1)

      // timerStop は呼ばれていないこと
      expect(game.timerStop.mock.calls.length).toBe(0)
    })

    test('game のステータスが PLAY に変わること', () => {
      // テスト
      Status.INIT.open(game, Point.of(0, 0))

      // ステータスの更新を確認
      expect(game.status).toBe(Status.PLAY)
    })

    test('クリアしていればステータスが WIN に変わること', () => {
      // クリア済ということにする
      game.isWin.mockReturnValue(true)

      // テスト
      Status.INIT.open(game, Point.of(0, 0))

      // ステータスの更新を確認
      expect(game.status).toBe(Status.WIN)

      // この場合は timerStop が呼ばれること
      expect(game.timerStop.mock.calls.length).toBe(1)
    })
  })

  describe('#flag', () => {
    test('doFlag が呼ばれないこと', () => {
      Status.INIT.flag(game, Point.of(0, 0))

      expect(game.doFlag.mock.calls.length).toBe(0)
    })
  })

  describe('#isEnd', () => {
    test('false であること', () => {
      expect(Status.INIT.isEnd).toBeFalsy()
    })
  })
})
