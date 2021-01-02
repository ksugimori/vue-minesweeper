import Setting from '@/lib/Setting'

describe('Setting', () => {

  it("(9, 9, 10) のときだけ isEasy = true になること", () => {
    let setting = new Setting(9, 9, 10);
    expect(setting.isEasy).toBeTruthy();

    setting = new Setting(10, 9, 10);
    expect(setting.isEasy).toBeFalsy();

    setting = new Setting(9, 10, 10);
    expect(setting.isEasy).toBeFalsy();

    setting = new Setting(9, 9, 11);
    expect(setting.isEasy).toBeFalsy();
  })

  it("(16, 16, 40) のときだけ isNormal = true になること", () => {
    let setting = new Setting(16, 16, 40);
    expect(setting.isNormal).toBeTruthy();

    setting = new Setting(17, 16, 40);
    expect(setting.isNormal).toBeFalsy();

    setting = new Setting(16, 17, 40);
    expect(setting.isNormal).toBeFalsy();

    setting = new Setting(16, 16, 41);
    expect(setting.isNormal).toBeFalsy();
  })

  it("(30, 16, 99) のときだけ isHard = true になること", () => {
    let setting = new Setting(30, 16, 99);
    expect(setting.isHard).toBeTruthy();

    setting = new Setting(29, 16, 99);
    expect(setting.isHard).toBeFalsy();

    setting = new Setting(30, 17, 99);
    expect(setting.isHard).toBeFalsy();

    setting = new Setting(30, 16, 100);
    expect(setting.isHard).toBeFalsy();
  })

})
