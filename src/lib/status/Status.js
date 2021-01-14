import InitialStatus from '@/lib/status/InitialStatus.js'
import PlayStatus from '@/lib/status/PlayStatus.js'
import WinStatus from '@/lib/status/WinStatus.js'
import LoseStatus from '@/lib/status/LoseStatus.js'

// enum っぽい使い方をするためにインスタンスをまとめたオブジェクトを export する
export default {
  INIT: new InitialStatus(),
  PLAY: new PlayStatus(),
  WIN: new WinStatus(),
  LOSE: new LoseStatus()
}
