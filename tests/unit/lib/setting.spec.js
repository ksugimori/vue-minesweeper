import Setting from '@/lib/Setting'

describe('Setting', () => {

  it("全項目が一致する場合のみ同値と判定されること", () => {
    let setting = new Setting("original", 9, 9, 10);

    let same = new Setting("same", 9, 9, 10);
    expect(setting.equals(same)).toBeTruthy();

    let diffWidth = new Setting("different width", 10, 9, 10);
    expect(setting.equals(diffWidth)).toBeFalsy();

    let diffHeight = new Setting("different height", 9, 10, 10);
    expect(setting.equals(diffHeight)).toBeFalsy();

    let diffMines = new Setting("different numMines", 9, 9, 11);
    expect(setting.equals(diffMines)).toBeFalsy();
  })

})
