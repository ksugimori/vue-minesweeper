import Status from '@/lib/Status'

describe('Status', () => {
  it('初期状態では INIT であること', () => {
    const status = new Status();

    expect(status.value).toBe(Status.INIT);
  })

  it('INIT から INIT に遷移できること', () => {
    const status = new Status(Status.INIT);

    status.to(Status.INIT);

    expect(status.value).toBe(Status.INIT);
  })

  it('INIT から PLAY に遷移できること', () => {
    const status = new Status(Status.INIT);

    status.to(Status.PLAY);

    expect(status.value).toBe(Status.PLAY);
  })

  it('INIT から PLAY 以外には遷移できないこと', () => {
    expect(() => {
      const status = new Status(Status.INIT);
      status.to(Status.WIN);
    }).toThrow();

    expect(() => {
      const status = new Status(Status.INIT);
      status.to(Status.LOSE);
    }).toThrow();
  })

  it('PLAY から INIT に遷移できること', () => {
    const status = new Status(Status.PLAY);

    status.to(Status.INIT);

    expect(status.value).toBe(Status.INIT);
  })

  it('PLAY から WIN に遷移できること', () => {
    const status = new Status(Status.PLAY);

    status.to(Status.WIN);

    expect(status.value).toBe(Status.WIN);
  })

  it('PLAY から LOSE に遷移できること', () => {
    const status = new Status(Status.PLAY);

    status.to(Status.LOSE);

    expect(status.value).toBe(Status.LOSE);
  })

  it('WIN から INIT に遷移できること', () => {
    const status = new Status(Status.WIN);

    status.to(Status.INIT);

    expect(status.value).toBe(Status.INIT);
  })

  it('WIN から INIT 以外には遷移できないこと', () => {
    expect(() => {
      const status = new Status(Status.WIN);
      status.to(Status.PLAY);
    }).toThrow();

    expect(() => {
      const status = new Status(Status.WIN);
      status.to(Status.LOSE);
    }).toThrow();
  })

  it('LOSE から INIT に遷移できること', () => {
    const status = new Status(Status.LOSE);

    status.to(Status.INIT);

    expect(status.value).toBe(Status.INIT);
  })

  it('LOSE から INIT 以外には遷移できないこと', () => {
    expect(() => {
      const status = new Status(Status.LOSE);
      status.to(Status.PLAY);
    }).toThrow();

    expect(() => {
      const status = new Status(Status.LOSE);
      status.to(Status.WIN);
    }).toThrow();
  })

  it('INIT と PLAY は異なること', () => {
    const status = new Status();

    expect(status.equals(Status.PLAY)).toBeFalsy();
  });
})
