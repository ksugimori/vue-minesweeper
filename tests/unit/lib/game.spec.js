import Game from '@/lib/Game'
import Cell from '@/lib/Cell'
import State from '@/lib/state/State'
import StopWatch from '@/lib/StopWatch';
jest.mock('@/lib/StopWatch');

beforeEach(() => {
  StopWatch.mockClear();
})

describe('Game', () => {
  describe('#initialize', () => {
    it("行数、列数が引数で渡された値に一致すること", () => {
      const game = new Game();
      game.initialize(2, 3, 2);

      expect(game.field.width).toBe(2); // 2列
      expect(game.field.height).toBe(3); // ３行
    });

    it("ステータスは INIT になること", () => {
      const game = new Game();
      game.initialize(2, 3, 2);
      game.open(0, 0); // ここで PLAY になっている
      game.initialize(2, 3, 2); // 再度 initialize を呼ぶと INIT になっていること

      expect(game.state).toBe(State.INIT);
    });

    it("すべてのセルが isOpen=false となっていること", () => {
      const game = new Game();
      game.initialize(3, 3, 2);

      // 一箇所だけ開いておく
      game.open(0, 0);

      // initialize が呼ばれるとクリアされることを確認
      game.initialize(3, 3, 2);

      expect(game.field.rows[0].map(c => c.isOpen)).toEqual([false, false, false]);
      expect(game.field.rows[1].map(c => c.isOpen)).toEqual([false, false, false]);
      expect(game.field.rows[2].map(c => c.isOpen)).toEqual([false, false, false]);
    })

    it("すべてのセルが isFlagged=false となっていること", () => {
      const game = new Game();
      game.initialize(3, 3, 2);

      // フラグを立てておくが、
      game.open(0, 0);
      game.flag(2, 2);

      // initialize が呼ばれるとクリアされることを確認
      game.initialize(3, 3, 2);

      expect(game.field.rows[0].map(c => c.isFlagged)).toEqual([false, false, false]);
      expect(game.field.rows[1].map(c => c.isFlagged)).toEqual([false, false, false]);
      expect(game.field.rows[2].map(c => c.isFlagged)).toEqual([false, false, false]);
    })

    it("closedCount がセル数と一致すること", () => {
      const game = new Game();

      game.initialize(4, 3, 10);

      expect(game.closedCount).toBe(12);
    })
  })

  describe('#start', () => {
    it("地雷が指定した数だけ埋まっていること", () => {
      const game = new Game();

      // 9 * 9 = 81 マスのうち 10 個
      game.initialize(9, 9, 10).open(0, 0);

      const count = game.field.rows.flat().filter(c => c.isMine).length;

      expect(count).toBe(10);
    })

    it("ステータスが PLAY になっていること", () => {
      const game = new Game();

      game.initialize(9, 9, 10).open(0, 0);

      expect(game.state).toBe(State.PLAY);
    })
  })

  describe('#open', () => {
    it("指定したセルが数字の場合、そのセルの isOpen フラグが立つこと", () => {
      const game = new Game();

      game.initialize(2, 2).open(0, 0);

      // open メソッドでランダムに地雷がセットされるので、強制的に上書きする
      game.field.values = [
        new Cell({ count: 0, isOpen: false }), new Cell({ count: 1, isOpen: false }),
        new Cell({ count: 2, isOpen: false }), new Cell({ count: 3, isOpen: false }),
      ];

      // テスト実行
      game.open(0, 1);

      // 検証
      expect(game.field.rows).toEqual([
        [new Cell({ count: 0, isOpen: false }), new Cell({ count: 1, isOpen: false })],
        [new Cell({ count: 2, isOpen: true }), new Cell({ count: 3, isOpen: false })],
      ]);
    });

    it("指定したセルが空の場合、そのセルの周囲８セルに isOpen フラグが立つこと", () => {
      const game = new Game();

      game.initialize(3, 3).open(0, 0);

      // open メソッドでランダムに地雷がセットされるので、強制的に上書きする
      // 中央だけ 0 
      game.field.values = [
        new Cell({ count: 1, isOpen: false }), new Cell({ count: 1, isOpen: false }), new Cell({ count: 1, isOpen: false }),
        new Cell({ count: 1, isOpen: false }), new Cell({ count: 0, isOpen: false }), new Cell({ count: 1, isOpen: false }),
        new Cell({ count: 1, isOpen: false }), new Cell({ count: 1, isOpen: false }), new Cell({ count: 1, isOpen: false }),
      ];

      // テスト実行
      game.open(1, 1);

      // 検証
      expect(game.field.rows).toEqual([
        [new Cell({ count: 1, isOpen: true }), new Cell({ count: 1, isOpen: true }), new Cell({ count: 1, isOpen: true })],
        [new Cell({ count: 1, isOpen: true }), new Cell({ count: 0, isOpen: true }), new Cell({ count: 1, isOpen: true })],
        [new Cell({ count: 1, isOpen: true }), new Cell({ count: 1, isOpen: true }), new Cell({ count: 1, isOpen: true })],
      ]);
    });

    it("指定したセルが空の場合、そのセルの周囲８セルに isOpen フラグが立つが、isFlagged=true となっているセルは変更されないこと", () => {
      const game = new Game();

      game.initialize(3, 3).open(0, 0);

      // open メソッドでランダムに地雷がセットされるので、強制的に上書きする
      // 中央だけ 0, 左上だけ isFlagged=true
      game.field.values = [
        new Cell({ count: 1, isOpen: false, isFlagged: true }), new Cell({ count: 1, isOpen: false }), new Cell({ count: 1, isOpen: false }),
        new Cell({ count: 1, isOpen: false }), new Cell({ count: 0, isOpen: false }), new Cell({ count: 1, isOpen: false }),
        new Cell({ count: 1, isOpen: false }), new Cell({ count: 1, isOpen: false }), new Cell({ count: 1, isOpen: false }),
      ];

      // テスト実行
      game.open(1, 1);

      // 検証（左上は isOpen=false のまま）
      expect(game.field.rows).toEqual([
        [new Cell({ count: 1, isOpen: false, isFlagged: true }), new Cell({ count: 1, isOpen: true }), new Cell({ count: 1, isOpen: true })],
        [new Cell({ count: 1, isOpen: true }), new Cell({ count: 0, isOpen: true }), new Cell({ count: 1, isOpen: true })],
        [new Cell({ count: 1, isOpen: true }), new Cell({ count: 1, isOpen: true }), new Cell({ count: 1, isOpen: true })],
      ]);
    });

    it("指定したセルに地雷がある場合、ステータスが LOSE になること", () => {
      const game = new Game();

      game.initialize(2, 2).open(0, 0);

      // open メソッドでランダムに地雷がセットされるので、強制的に上書きする
      game.field.values = [
        new Cell({ count: 1, isOpen: false }), new Cell({ count: 1, isOpen: false }),
        new Cell({ count: 1, isOpen: false }), new Cell({ count: 0, isOpen: false, isMine: true }),
      ];

      // テスト実行
      game.open(1, 1);

      // 検証
      // すべて開かれること
      expect(game.field.rows).toEqual([
        [new Cell({ count: 1, isOpen: true }), new Cell({ count: 1, isOpen: true })],
        [new Cell({ count: 1, isOpen: true }), new Cell({ count: 0, isOpen: true, isMine: true })],
      ]);

      // ステータスは LOSE になること
      expect(game.state).toBe(State.LOSE);
    });

    it("開いたセルの数だけ closedCount が減ること", () => {
      const game = new Game();

      game.initialize(3, 3, 3).open(0, 0);

      // open メソッドでランダムに地雷がセットされるので、強制的に上書きする
      // ２列目に地雷が埋まっている
      game.field.values = [
        new Cell({ count: 2, isOpen: false }), new Cell({ count: 0, isOpen: false, isMine: true }), new Cell({ count: 2, isOpen: false }),
        new Cell({ count: 3, isOpen: false }), new Cell({ count: 0, isOpen: false, isMine: true }), new Cell({ count: 3, isOpen: false }),
        new Cell({ count: 2, isOpen: false }), new Cell({ count: 0, isOpen: false, isMine: true }), new Cell({ count: 2, isOpen: false }),
      ];

      // この時点では全て閉じている
      expect(game.closedCount).toBe(9);

      // テスト実行
      game.open(0, 0);
      expect(game.closedCount).toBe(8);

      game.open(0, 1);
      expect(game.closedCount).toBe(7);

      game.open(0, 2);
      expect(game.closedCount).toBe(6);

      // のこりすべてを開く
      game.open(2, 0);
      game.open(2, 1);
      game.open(2, 2);

      // ゲーム終了したので自動的にすべて開く
      expect(game.closedCount).toBe(0);
      expect(game.state).toBe(State.WIN);
    });

  })

  describe('#flag', () => {
    it("選択したセルのフラグが立つこと", () => {
      const game = new Game();

      game.initialize(2, 2, 1).open(0, 0);

      // open メソッドでランダムに地雷がセットされるので、強制的に上書きする
      game.field.values = [
        new Cell({ count: 0, isOpen: false }), new Cell({ count: 0, isOpen: false }),
        new Cell({ count: 0, isOpen: false }), new Cell({ count: 0, isOpen: false }),
      ];

      // この時点では 0 個
      expect(game.flagCount).toBe(0);

      game.flag(0, 0);
      expect(game.flagCount).toBe(1);

      game.flag(0, 1);
      expect(game.flagCount).toBe(2);

      // フラグがついたセルを再び呼ぶとフラグが外れること
      game.flag(0, 0);
      expect(game.flagCount).toBe(1);
    });

    it("ゲーム終了時はフラグが立てられないこと", () => {
      const game = new Game();

      game.initialize(2, 2, 1).open(0, 0);

      // open メソッドでランダムに地雷がセットされるので、強制的に上書きする
      game.field.values = [
        new Cell({ count: 0, isOpen: false, isMine: true }), new Cell({ count: 1, isOpen: false }),
        new Cell({ count: 1, isOpen: false }), new Cell({ count: 1, isOpen: false }),
      ];

      // 地雷以外を開く
      game.open(1, 0);
      game.open(0, 1);
      game.open(1, 1);

      // この時点で WIN
      expect(game.state).toBe(State.WIN);
      expect(game.flagCount).toBe(0);

      // フラグを立てられないこと
      game.flag(0, 0);
      expect(game.flagCount).toBe(0);
    });
  });

  describe('#startGame', () => {
    it("PLAYステートに移行すること", () => {
      const game = new Game();

      game.initialize().startGame();

      expect(game.state).toBe(State.PLAY);
    });

    it("ストップウォッチが開始されること", () => {
      const game = new Game();

      game.initialize().startGame();

      expect(StopWatch.mock.instances[0].start).toHaveBeenCalledTimes(1);
    });
  });

  describe('#endGame', () => {
    it("渡した state に変更されること", () => {
      const game = new Game();

      // WIN
      game.initialize().endGame(State.WIN);
      expect(game.state).toBe(State.WIN);

      // LOSE
      game.initialize().endGame(State.LOSE);
      expect(game.state).toBe(State.LOSE);
    });

    it("ストップウォッチが停止されること", () => {
      const game = new Game();

      game.initialize().endGame(State.WIN);

      expect(StopWatch.mock.instances[0].stop).toHaveBeenCalledTimes(1);
    });

    it("すべてのセルが開かれ、フラグが外されること", () => {
      const game = new Game();

      game.initialize(2, 2, 1);

      game.field.values = [
        new Cell({ count: 0, isOpen: false, isMine: true }), new Cell({ count: 1, isOpen: true }),
        new Cell({ count: 1, isOpen: false, isFlagged: true }), new Cell({ count: 1, isOpen: false }),
      ];

      game.endGame(State.WIN);

      expect(game.flagCount).toBe(0);
      expect(game.closedCount).toBe(0);
    });
  });
})