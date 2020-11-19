import Status from '@/lib/Status'

describe('Status', () => {
  it('INIT から PLAY に遷移できること', () => {
    let status = Status.INIT;

    expect(status.play()).toBe(Status.PLAY);
  })

  it('PLAY から INIT, WIN, LOSE に遷移できること', () => {
    let status = Status.PLAY;

    expect(status.reset()).toBe(Status.INIT);
    expect(status.win()).toBe(Status.WIN);
    expect(status.lose()).toBe(Status.LOSE);
  })

  it('WIN から INIT に遷移できること', () => {
    let status = Status.WIN;

    expect(status.reset()).toBe(Status.INIT);
  })

  it('LOSE から INIT に遷移できること', () => {
    let status = Status.LOSE;

    expect(status.reset()).toBe(Status.INIT);
  })
})
