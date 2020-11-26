import Game from './gameComponents/game.js'

let welcomePopup = document.getElementById('welcome-popup')
let welcomePopupClose = document.getElementById('welcome-popup-close')

  welcomePopupClose.addEventListener( 'click', () => {
    welcomePopup.style.visibility = 'hidden'
  })

const game = new Game()
game.startGame()

console.log('Have Fun!!!')

