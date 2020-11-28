import Game from '@/lib/Game'
import Cell from '@/lib/Cell'
import State from '@/lib/state/State'

describe('Game', () => {
  describe('#contains', () => {
    it('範囲内にあるときのみ true が返ること', () => {
      const game = new Game();

      // ２行、３列で初期化
      game.initialize(2, 3);

      expect(game.contains(-1, 0)).toBeFalsy();

      expect(game.contains(0, 0)).toBeTruthy();
      expect(game.contains(0, 1)).toBeTruthy();
      expect(game.contains(0, 2)).toBeTruthy();
      expect(game.contains(0, 3)).toBeFalsy();

      expect(game.contains(1, 2)).toBeTruthy();

      expect(game.contains(2, 2)).toBeFalsy();
    })
  })

  describe('#arround', () => {
    it("周囲の 8 セルが返ってくること", () => {
      const game = new Game();

      // ３行、３列で初期化
      game.initialize(3, 3);

      const result = game.arround(1, 1);

      expect(result.length).toBe(8);

      expect(result).toContainEqual({ row: 0, col: 0 });
      expect(result).toContainEqual({ row: 0, col: 1 });
      expect(result).toContainEqual({ row: 0, col: 2 });

      expect(result).toContainEqual({ row: 1, col: 0 });
      // row: 1, col: 1 が引数なのでこれは返ってこない
      expect(result).toContainEqual({ row: 1, col: 2 });

      expect(result).toContainEqual({ row: 2, col: 0 });
      expect(result).toContainEqual({ row: 2, col: 1 });
      expect(result).toContainEqual({ row: 2, col: 2 });
    })

    it("範囲外のセルは除外されていること", () => {
      const game = new Game();

      // １行、３列で初期化
      game.initialize(1, 3);

      const result = game.arround(0, 0);

      expect(result).toEqual([{ row: 0, col: 1 }]);
    })
  })

  describe('#initialize', () => {
    it("行数、列数が引数で渡された値に一致すること", () => {
      const game = new Game();
      game.initialize(3, 2, 2);

      expect(game.field.length).toBe(3); // ３行
      expect(game.field[0].length).toBe(2); // 2列
      expect(game.field[1].length).toBe(2); // 2列
    });

    it("ステータスは INIT になること", () => {
      const game = new Game();
      game.initialize(3, 2, 2);
      game.open(0, 0); // ここで PLAY になっている
      game.initialize(3, 2, 2); // 再度 initialize を呼ぶと INIT になっていること

      expect(game.state).toBe(State.INIT);
    });

    it("すべてのセルが isOpen=false となっていること", () => {
      const game = new Game();
      game.initialize(3, 3, 2);

      // 一箇所だけ開いておく
      game.field[0][0].open();

      // initialize が呼ばれるとクリアされることを確認
      game.initialize(3, 3, 2);

      expect(game.field[0].map(c => c.isOpen)).toStrictEqual([false, false, false]);
      expect(game.field[1].map(c => c.isOpen)).toStrictEqual([false, false, false]);
      expect(game.field[2].map(c => c.isOpen)).toStrictEqual([false, false, false]);
    })

    it("すべてのセルが isFlagged=false となっていること", () => {
      const game = new Game();
      game.initialize(3, 3, 2);

      // フラグを立てておくが、
      game.field[0][0].flag();

      // initialize が呼ばれるとクリアされることを確認
      game.initialize(3, 3, 2);

      expect(game.field[0].map(c => c.isFlagged)).toStrictEqual([false, false, false]);
      expect(game.field[1].map(c => c.isFlagged)).toStrictEqual([false, false, false]);
      expect(game.field[2].map(c => c.isFlagged)).toStrictEqual([false, false, false]);
    })

    it("closedCount がセル数と一致すること", () => {
      const game = new Game();

      game.initialize(3, 4, 10);

      expect(game.closedCount).toBe(12);
    })
  })

  describe('#start', () => {
    it("地雷が指定した数だけ埋まっていること", () => {
      const game = new Game();

      // 9 * 9 = 81 マスのうち 10 個
      game.initialize(9, 9, 10).open(0, 0);

      const count = game.field.flat().filter(c => c.isMine).length;

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

      // initialize メソッドでランダムに地雷がセットされるので、強制的に上書きする
      game.field = [
        [new Cell({ count: 0, isOpen: false }), new Cell({ count: 1, isOpen: false })],
        [new Cell({ count: 2, isOpen: false }), new Cell({ count: 3, isOpen: false })],
      ];

      // テスト実行
      game.open(1, 0);

      // 検証
      expect(game.field).toEqual([
        [new Cell({ count: 0, isOpen: false }), new Cell({ count: 1, isOpen: false })],
        [new Cell({ count: 2, isOpen: true }), new Cell({ count: 3, isOpen: false })],
      ]);
    });

    it("指定したセルが空の場合、そのセルの周囲８セルに isOpen フラグが立つこと", () => {
      const game = new Game();

      game.initialize(3, 3).open(0, 0);

      // initialize メソッドでランダムに地雷がセットされるので、強制的に上書きする
      // 中央だけ 0 
      game.field = [
        [new Cell({ count: 1, isOpen: false }), new Cell({ count: 1, isOpen: false }), new Cell({ count: 1, isOpen: false })],
        [new Cell({ count: 1, isOpen: false }), new Cell({ count: 0, isOpen: false }), new Cell({ count: 1, isOpen: false })],
        [new Cell({ count: 1, isOpen: false }), new Cell({ count: 1, isOpen: false }), new Cell({ count: 1, isOpen: false })],
      ];

      // テスト実行
      game.open(1, 1);

      // 検証
      expect(game.field).toEqual([
        [new Cell({ count: 1, isOpen: true }), new Cell({ count: 1, isOpen: true }), new Cell({ count: 1, isOpen: true })],
        [new Cell({ count: 1, isOpen: true }), new Cell({ count: 0, isOpen: true }), new Cell({ count: 1, isOpen: true })],
        [new Cell({ count: 1, isOpen: true }), new Cell({ count: 1, isOpen: true }), new Cell({ count: 1, isOpen: true })],
      ]);
    });

    it("指定したセルが空の場合、そのセルの周囲８セルに isOpen フラグが立つが、isFlagged=true となっているセルは変更されないこと", () => {
      const game = new Game();

      game.initialize(3, 3).open(0, 0);

      // initialize メソッドでランダムに地雷がセットされるので、強制的に上書きする
      // 中央だけ 0, 左上だけ isFlagged=true
      game.field = [
        [new Cell({ count: 1, isOpen: false, isFlagged: true }), new Cell({ count: 1, isOpen: false }), new Cell({ count: 1, isOpen: false })],
        [new Cell({ count: 1, isOpen: false }), new Cell({ count: 0, isOpen: false }), new Cell({ count: 1, isOpen: false })],
        [new Cell({ count: 1, isOpen: false }), new Cell({ count: 1, isOpen: false }), new Cell({ count: 1, isOpen: false })],
      ];

      // テスト実行
      game.open(1, 1);

      // 検証（左上は isOpen=false のまま）
      expect(game.field).toEqual([
        [new Cell({ count: 1, isOpen: false, isFlagged: true }), new Cell({ count: 1, isOpen: true }), new Cell({ count: 1, isOpen: true })],
        [new Cell({ count: 1, isOpen: true }), new Cell({ count: 0, isOpen: true }), new Cell({ count: 1, isOpen: true })],
        [new Cell({ count: 1, isOpen: true }), new Cell({ count: 1, isOpen: true }), new Cell({ count: 1, isOpen: true })],
      ]);
    });

    it("指定したセルに地雷がある場合、ステータスが LOSE になること", () => {
      const game = new Game();

      game.initialize(2, 2).open(0, 0);

      // initialize メソッドでランダムに地雷がセットされるので、強制的に上書きする
      game.field = [
        [new Cell({ count: 1, isOpen: false }), new Cell({ count: 1, isOpen: false })],
        [new Cell({ count: 1, isOpen: false }), new Cell({ count: 0, isOpen: false, isMine: true })],
      ];

      // テスト実行
      game.open(1, 1);

      // 検証
      // すべて開かれること
      expect(game.field).toEqual([
        [new Cell({ count: 1, isOpen: true }), new Cell({ count: 1, isOpen: true })],
        [new Cell({ count: 1, isOpen: true }), new Cell({ count: 0, isOpen: true, isMine: true })],
      ]);

      // ステータスは LOSE になること
      expect(game.state).toBe(State.LOSE);
    });

    it("開いたセルの数だけ closedCount が減ること", () => {
      const game = new Game();

      game.initialize(3, 3, 3).open(0, 0);

      // initialize メソッドでランダムに地雷がセットされるので、強制的に上書きする
      // ３列目に地雷が埋まっている
      game.field = [
        [new Cell({ count: 0, isOpen: false }), new Cell({ count: 2, isOpen: false }), new Cell({ count: 0, isOpen: false, isMine: true })],
        [new Cell({ count: 0, isOpen: false }), new Cell({ count: 3, isOpen: false }), new Cell({ count: 0, isOpen: false, isMine: true })],
        [new Cell({ count: 0, isOpen: false }), new Cell({ count: 2, isOpen: false }), new Cell({ count: 0, isOpen: false, isMine: true })],
      ];

      // この時点では全て閉じている
      expect(game.closedCount).toBe(9);

      // テスト実行
      game.open(0, 0);

      // 検証（空白セルとそれに隣接するセルは開かれるので６個開く）
      expect(game.closedCount).toBe(3);
      // 地雷以外のセルをすべて開いたので勝利
      expect(game.state).toBe(State.WIN);
    });

  })
})
