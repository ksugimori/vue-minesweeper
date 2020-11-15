import Cell from '@/lib/Cell'

describe('Cell', () => {
  it('初期状態では count=0, isOpen=false, isMine=false であること', () => {
    const cell = new Cell();

    expect(cell.count).toBe(0);
    expect(cell.isOpen).toBeFalsy();
    expect(cell.isMine).toBeFalsy();
  })

  it('open() で isOpen が true になること', () => {
    const cell = new Cell();

    cell.open();
    expect(cell.isOpen).toBeTruthy();

    // 複数回実行しても true のままであること
    cell.open();
    expect(cell.isOpen).toBeTruthy();
  })

  it('mine() で isMine が true になること', () => {
    const cell = new Cell();

    cell.mine();
    expect(cell.isMine).toBeTruthy();

    // 複数回実行しても true のままであること
    cell.mine();
    expect(cell.isMine).toBeTruthy();
  })
})
