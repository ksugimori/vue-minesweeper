import Status from '@/lib/status/Status.js'
import Point from '@/lib/Point.js'
import Game from '@/lib/Game.js'
jest.mock('@/lib/Game.js')

beforeEach(() => {
  Game.mockClear()
})

describe('Status', () => {
  test('INIT, PLAY, WIN, LOSE の４つのステータスが定義されていること', () => {
    expect(Status.INIT).not.toBeUndefined()
    expect(Status.PLAY).not.toBeUndefined()
    expect(Status.WIN).not.toBeUndefined()
    expect(Status.LOSE).not.toBeUndefined()
  })

  describe('INIT', () => {
    let game, status
    beforeEach(() => {
      game = new Game()
      game.status = Status.INIT
      status = Status.INIT
    })

    describe('#open', () => {
      test('mine, timerStart, doOpen が呼ばれること', () => {
        // テスト
        status.open(game, Point.of(0, 0))

        // メソッド呼び出し
        expect(game.mine.mock.calls.length).toBe(1)
        expect(game.timerStart.mock.calls.length).toBe(1)
        expect(game.doOpen.mock.calls.length).toBe(1)

        // timerStop は呼ばれていないこと
        expect(game.timerStop.mock.calls.length).toBe(0)
      })

      test('game のステータスが PLAY に変わること', () => {
        // テスト
        status.open(game, Point.of(0, 0))

        // ステータスの更新を確認
        expect(game.status).toBe(Status.PLAY)
      })

      test('クリアしていればステータスが WIN に変わること', () => {
        // クリア済ということにする
        game.isWin.mockReturnValue(true)

        // テスト
        status.open(game, Point.of(0, 0))

        // ステータスの更新を確認
        expect(game.status).toBe(Status.WIN)

        // この場合は timerStop が呼ばれること
        expect(game.timerStop.mock.calls.length).toBe(1)
      })
    })

    describe('#flag', () => {
      test('doFlag が呼ばれないこと', () => {
        status.flag(game, Point.of(0, 0))

        expect(game.doFlag.mock.calls.length).toBe(0)
      })
    })

    describe('#isEnd', () => {
      test('false であること', () => {
        expect(status.isEnd).toBeFalsy()
      })
    })
  })

  describe('PLAY', () => {
    let game, status
    beforeEach(() => {
      game = new Game()
      game.status = Status.PLAY
      status = Status.PLAY
    })

    describe('#open', () => {
      test('doOpen が呼ばれること', () => {
        // テスト
        status.open(game, Point.of(0, 0))

        // メソッド呼び出し
        expect(game.doOpen.mock.calls.length).toBe(1)
      })

      test('クリアしたらステータスが WIN になること', () => {
        game.isWin.mockReturnValue(true)

        // テスト
        status.open(game, Point.of(0, 0))

        // 検証
        expect(game.status).toBe(Status.WIN)
        expect(game.timerStop.mock.calls.length).toBe(1)
      })

      test('ミスしていたらステータスが LOSE になること', () => {
        game.isLose.mockReturnValue(true)

        // テスト
        status.open(game, Point.of(0, 0))

        // 検証
        expect(game.status).toBe(Status.LOSE)
        expect(game.timerStop.mock.calls.length).toBe(1)
      })
    })

    describe('#flag', () => {
      test('doFlag が呼ばれること', () => {
        // テスト
        status.flag(game, Point.of(0, 0))

        // メソッド呼び出し
        expect(game.doFlag.mock.calls.length).toBe(1)
      })
    })

    describe('#isEnd', () => {
      test('false であること', () => {
        expect(status.isEnd).toBeFalsy()
      })
    })
  })

  describe('WIN', () => {
    let game, status
    beforeEach(() => {
      game = new Game()
      game.status = Status.WIN
      status = Status.WIN
    })

    describe('#open', () => {
      test('doOpen が呼ばれないこと', () => {
        status.open(game, Point.of(0, 0))

        expect(game.doOpen.mock.calls.length).toBe(0)
      })
    })

    describe('#flag', () => {
      test('doFlag が呼ばれないこと', () => {
        status.open(game, Point.of(0, 0))

        expect(game.doFlag.mock.calls.length).toBe(0)
      })
    })

    describe('#isEnd', () => {
      test('false であること', () => {
        expect(status.isEnd).toBeTruthy()
      })
    })
  })

  describe('LOSE', () => {
    let game, status
    beforeEach(() => {
      game = new Game()
      game.status = Status.LOSE
      status = Status.LOSE
    })

    describe('#open', () => {
      test('doOpen が呼ばれないこと', () => {
        status.open(game, Point.of(0, 0))

        expect(game.doOpen.mock.calls.length).toBe(0)
      })
    })

    describe('#flag', () => {
      test('doFlag が呼ばれないこと', () => {
        status.open(game, Point.of(0, 0))

        expect(game.doFlag.mock.calls.length).toBe(0)
      })
    })

    describe('#isEnd', () => {
      test('false であること', () => {
        expect(status.isEnd).toBeTruthy()
      })
    })
  })
})
