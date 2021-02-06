import InitialStatus from '@/models/status/InitialStatus.js'
import PlayStatus from '@/models/status/PlayStatus.js'
import WinStatus from '@/models/status/WinStatus.js'
import LoseStatus from '@/models/status/LoseStatus.js'

const INIT = new InitialStatus()
const PLAY = new PlayStatus()
const WIN = new WinStatus()
const LOSE = new LoseStatus()

export default { INIT, PLAY, WIN, LOSE }
