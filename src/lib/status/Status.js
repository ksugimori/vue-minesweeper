import InitialStatus from '@/lib/status/InitialStatus.js'
import PlayStatus from '@/lib/status/PlayStatus.js'
import WinStatus from '@/lib/status/WinStatus.js'
import LoseStatus from '@/lib/status/LoseStatus.js'

const INIT = new InitialStatus()
const PLAY = new PlayStatus()
const WIN = new WinStatus()
const LOSE = new LoseStatus()

export default { INIT, PLAY, WIN, LOSE }
