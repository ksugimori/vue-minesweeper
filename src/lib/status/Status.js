import InitialStatus from './InitialStatus';
import PlayStatus from './PlayStatus';
import WinStatus from './WinStatus';
import LoseStatus from './LoseStatus';

// enum っぽい使い方をするためにインスタンスをまとめたオブジェクトを export する
export default {
  INIT: new InitialStatus(),
  PLAY: new PlayStatus(),
  WIN: new WinStatus(),
  LOSE: new LoseStatus(),
};