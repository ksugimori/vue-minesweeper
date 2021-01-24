import Setting from '@/lib/Setting.js'

describe('Setting', () => {
  describe('#equals', () => {
    it('全項目が一致する場合のみ同値と判定されること', () => {
      let setting = new Setting(9, 9, 10)

      let same = new Setting(9, 9, 10)
      expect(setting.equals(same)).toBeTruthy()

      let diffWidth = new Setting(10, 9, 10)
      expect(setting.equals(diffWidth)).toBeFalsy()

      let diffHeight = new Setting(9, 10, 10)
      expect(setting.equals(diffHeight)).toBeFalsy()

      let diffMines = new Setting(9, 9, 11)
      expect(setting.equals(diffMines)).toBeFalsy()
    })
  })

  describe('#name', () => {
    it('EASY と等しい場合は EASY が返ること', () => {
      let setting = Setting.EASY.clone()
      expect(setting.name).toBe('EASY')
    })

    it('NORMAL と等しい場合は NORMAL が返ること', () => {
      let setting = Setting.NORMAL.clone()
      expect(setting.name).toBe('NORMAL')
    })

    it('HARD と等しい場合は HARD が返ること', () => {
      let setting = Setting.HARD.clone()
      expect(setting.name).toBe('HARD')
    })

    it('その他の場合は CUSTOM が返ること', () => {
      let setting = Setting.NORMAL.clone()
      setting.width++
      expect(setting.name).toBe('CUSTOM')
    })
  })
})
