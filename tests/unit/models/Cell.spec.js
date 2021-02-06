import Cell from '@/models/Cell.js'

describe('Cell', () => {
  describe('#initialize', () => {
    test('初期状態では count=0, isOpen=false, isMine=false, isFlag=false であること', () => {
      const cell = new Cell()

      expect(cell.count).toBe(0)
      expect(cell.isOpen).toBe(false)
      expect(cell.isMine).toBe(false)
      expect(cell.isFlag).toBe(false)
    })

    test('パラメータを渡すと初期状態にマージされること', () => {
      const cell = new Cell({
        count: 999,
        isOpen: true,
        isMine: true,
        isFlag: true
      })

      expect(cell.count).toBe(999)
      expect(cell.isOpen).toBe(true)
      expect(cell.isMine).toBe(true)
      expect(cell.isFlag).toBe(true)
    })
  })

  describe('#open', () => {
    test('isOpen が true になること', () => {
      const cell = new Cell()

      cell.open()
      expect(cell.isOpen).toBe(true)

      // 複数回実行しても true のままであること
      cell.open()
      expect(cell.isOpen).toBe(true)
    })
  })

  describe('#mine', () => {
    test('isMine が true になること', () => {
      const cell = new Cell()

      cell.mine()
      expect(cell.isMine).toBe(true)

      // 複数回実行しても true のままであること
      cell.mine()
      expect(cell.isMine).toBe(true)
    })
  })

  describe('#flag', () => {
    test('isFlag が true になること', () => {
      const cell = new Cell()

      cell.flag()
      expect(cell.isFlag).toBe(true)

      // 複数回実行しても true のままであること
      cell.flag()
      expect(cell.isFlag).toBe(true)
    })

    test('open 済のセルに対してはフラグは付けられないこと', () => {
      const cell = new Cell()

      cell.open()
      cell.flag()
      expect(cell.isFlag).toBe(false)
    })

    test('isMine = false のセルにフラグをつけたら isMiss = true になること', () => {
      const cell = new Cell()

      cell.flag()

      expect(cell.isMiss).toBeTruthy()
    })
  })

  describe('#unflag', () => {
    test('isFlag が false になること', () => {
      const cell = new Cell()

      cell.unflag()
      expect(cell.isFlag).toBe(false)

      // 複数回実行しても true のままであること
      cell.unflag()
      expect(cell.isFlag).toBe(false)
    })
  })

  describe('#isEmpty', () => {
    test('count が 0 なら true を返し、それ以外なら false を返すこと', () => {
      const cell = new Cell()

      cell.count = 0
      expect(cell.isEmpty).toBeTruthy()

      cell.count = 1
      expect(cell.isEmpty).toBeFalsy()
    })

    test('count が 0 でも isMine = true なら false を返すこと', () => {
      const cell = new Cell()

      cell.count = 0
      cell.mine()
      expect(cell.isEmpty).toBeFalsy()
    })
  })
})
