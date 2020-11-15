import Cell from '@/lib/Cell'

describe('Cell', () => {
  describe('#initialize', () => {
    it('初期状態では count=0, isOpen=false, isMine=false, isFlagged=false であること', () => {
      const cell = new Cell();

      expect(cell.count).toBe(0);
      expect(cell.isOpen).toBe(false);
      expect(cell.isMine).toBe(false);
      expect(cell.isFlagged).toBe(false);
    })

    it('パラメータを渡すと初期状態にマージされること', () => {
      const cell = new Cell({
        count: 999,
        isOpen: true,
        isMine: true,
        isFlagged: true,
      });

      expect(cell.count).toBe(999);
      expect(cell.isOpen).toBe(true);
      expect(cell.isMine).toBe(true);
      expect(cell.isFlagged).toBe(true);
    })
  })

  describe('#open', () => {
    it('isOpen が true になること', () => {
      const cell = new Cell();

      cell.open();
      expect(cell.isOpen).toBe(true);

      // 複数回実行しても true のままであること
      cell.open();
      expect(cell.isOpen).toBe(true);
    })
  })

  describe('#mine', () => {
    it('isMine が true になること', () => {
      const cell = new Cell();

      cell.mine();
      expect(cell.isMine).toBe(true);

      // 複数回実行しても true のままであること
      cell.mine();
      expect(cell.isMine).toBe(true);
    })
  })

  describe('#flag', () => {
    it('isFlagged が true になること', () => {
      const cell = new Cell();

      cell.flag();
      expect(cell.isFlagged).toBe(true);

      // 複数回実行しても true のままであること
      cell.flag();
      expect(cell.isFlagged).toBe(true);
    })
  })

  describe('#unflag', () => {
    it('isFlagged が false になること', () => {
      const cell = new Cell();

      cell.unflag();
      expect(cell.isFlagged).toBe(false);

      // 複数回実行しても true のままであること
      cell.unflag();
      expect(cell.isFlagged).toBe(false);
    })
  })
})
