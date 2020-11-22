import State from '@/lib/State'

describe('State', () => {
  it('INIT から INIT に遷移できること', () => {
    expect(State.INIT.canTransitTo(State.INIT)).toBeTruthy();
  })

  it('INIT から PLAY に遷移できること', () => {
    expect(State.INIT.canTransitTo(State.PLAY)).toBeTruthy();
  })

  it('INIT から PLAY 以外には遷移できないこと', () => {
    expect(State.INIT.canTransitTo(State.WIN)).toBeFalsy();
    expect(State.INIT.canTransitTo(State.LOSE)).toBeFalsy();
  })

  it('PLAY から INIT に遷移できること', () => {
    expect(State.PLAY.canTransitTo(State.INIT)).toBeTruthy();
  })

  it('PLAY から WIN に遷移できること', () => {
    expect(State.PLAY.canTransitTo(State.WIN)).toBeTruthy();
  })

  it('PLAY から LOSE に遷移できること', () => {
    expect(State.PLAY.canTransitTo(State.LOSE)).toBeTruthy();
  })

  it('WIN から INIT に遷移できること', () => {
    expect(State.WIN.canTransitTo(State.INIT)).toBeTruthy();
  })

  it('WIN から INIT 以外には遷移できないこと', () => {
    expect(State.WIN.canTransitTo(State.PLAY)).toBeFalsy();
    expect(State.WIN.canTransitTo(State.LOSE)).toBeFalsy();
  })

  it('LOSE から INIT に遷移できること', () => {
    expect(State.LOSE.canTransitTo(State.INIT)).toBeTruthy();
  })

  it('LOSE から INIT 以外には遷移できないこと', () => {
    expect(State.LOSE.canTransitTo(State.PLAY)).toBeFalsy();
    expect(State.LOSE.canTransitTo(State.WIN)).toBeFalsy();
  })
})
