import InitialState from './InitialState';
import PlayState from './PlayState';
import WinState from './WinState';
import LoseState from './LoseState';

// enum っぽい使い方をするためにインスタンスをまとめたオブジェクトを export する
export default {
  INIT: new InitialState(),
  PLAY: new PlayState(),
  WIN: new WinState(),
  LOSE: new LoseState(),
};