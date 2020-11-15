import Cell from '@/lib/Cell'

describe('Cell', () => {
  describe('#initialize', () => {
    it('初期状態では count=0, isOpen=false, isMine=false であること', () => {
      const cell = new Cell();

      expect(cell.count).toBe(0);
      expect(cell.isOpen).toBeFalsy();
      expect(cell.isMine).toBeFalsy();
    })

    it('パラメータを渡すと初期状態にマージされること', () => {
      const cell = new Cell({
        count: 999,
        isOpen: true,
        isMine: true
      });

      expect(cell.count).toBe(999);
      expect(cell.isOpen).toBeTruthy();
      expect(cell.isMine).toBeTruthy();
    })
  })

  describe('#open', () => {
    it('isOpen が true になること', () => {
      const cell = new Cell();

      cell.open();
      expect(cell.isOpen).toBeTruthy();

      // 複数回実行しても true のままであること
      cell.open();
      expect(cell.isOpen).toBeTruthy();
    })
  })

  describe('#mine', () => {
    it('isMine が true になること', () => {
      const cell = new Cell();

      cell.mine();
      expect(cell.isMine).toBeTruthy();

      // 複数回実行しても true のままであること
      cell.mine();
      expect(cell.isMine).toBeTruthy();
    })
  })
})
