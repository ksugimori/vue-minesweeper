/**
 * インスタンス
 */
class State {
  constructor(name) {
    this.name = name;
  }

  /**
   * ステータスを進める
   * @param {State} next 次のステータス
   */
  canTransitTo(next) {
    if (this === next) {
      return true;
    }

    return this.nextStateList().includes(next);
  }

  transit(context, nextState) {
    if (this.canTransitTo(nextState)) {
      context.state = nextState;
    } else {
      throw new Error(`${this.toString()} から ${nextState.toString()} へは遷移できません`);
    }
  }

  /**
   * 文字列として表現する
   */
  toString() {
    return this.name;
  }
}

class InitialState extends State {
  constructor() {
    super("INIT")
  }
}


class PlayState extends State {
  constructor() {
    super("PLAY")
  }
}

class WinState extends State {
  constructor() {
    super("WIN")
  }
}

class LoseState extends State {
  constructor() {
    super("LOSE")
  }
}

const instances = {
  INIT: new InitialState(),
  PLAY: new PlayState(),
  WIN: new WinState(),
  LOSE: new LoseState(),
};

InitialState.prototype.nextStateList = function () {
  return [instances.PLAY];
}

PlayState.prototype.nextStateList = function () {
  return [instances.INIT, instances.WIN, instances.LOSE];
}

WinState.prototype.nextStateList = function () {
  return [instances.INIT];
}

LoseState.prototype.nextStateList = function () {
  return [instances.INIT];
}

export default instances;