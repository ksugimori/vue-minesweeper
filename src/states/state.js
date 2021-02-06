import Game from '@/models/Game.js'

let game = new Game()
game.initialize()

const state = {
  game: game,
  setting: game.setting.clone()
}

export default state
