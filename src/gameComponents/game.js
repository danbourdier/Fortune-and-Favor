import Layout from './layout.js'
import Card from './card.js'

// Directives:
//  1. method to start game
//  2. method to end game
//  3. method to compare two cards
//  4. track revealed cards
//  5. track number of moves 
//  6. reset game
//  7. track when 2/2 cards are toggled

// OPTIONS FOR FLOW
//  Hard refresh, 
//  resetting instance variables by wiping layout
  // reset moves, reset remaining Cards, in #startGame create the deck instead of passing as arg
  //  essentially resetting all instance variables


class Game {
  constructor() {
    this.moves = 0 // <--- optional game feature
    this.deck = []
    this.cardToMatch = ''
    this.revealedCards = []

    this.startGame = this.startGame.bind(this)
  }


  cardMatchingLogic(card1, card2) {
    const card1Html = document.getElementById( `card-${ card1.value }` )
    const card2Html = document.getElementById( `card-${ card2.value }` )

    if (card1.isMatching(card2)) {
      // If matching 
      card1Html.removeEventListener('click', clicker)
      card2Html.removeEventListener('click', clicker)

      this.revealedCards.push( [ card1.value, card2.value ] )

      // remove listeners
      // set css to locked img
      // win logic check call
    } else {
      // set css back
      // flip (!both?)
      // lose logic check call
    }
  }



  clickLogic(target, cardHTML) {
    let weHaveACard = this.cardToMatch ? this.cardToMatch : ''

    cardHTML.addEventListener('click', function clicker() {
      this.moves++
      cardHTML.className = !target.isVisible() ? 'shown-card' : 'card'
      target.flip()
      // have setTimeout to give transition time?
      if ( weHaveACard ) { 
        this.cardMatchingLogic( target, this.cardToMatch )
      } else {
        this.cardToMatch = target
      }

    })
  }


  applyLogic() {
    // I want each html card to execute a function with the card whose value shares the element's id
    this.deck.forEach( card => {
      let cardHTML = document.getElementById(`card-${ card.value }`)
      this.clickLogic(card, cardHTML)  
    })
  }



  startGame() {
    // create the layout (instantiation and rendering of each card instance.
    const newLayout = new Layout(3, 3) // <--- future feature, optional difficulty
    // #renderLayout renders our board
    newLayout.renderLayout()
    // #getCards returns a reference we assign to our instance variable this.deck
    this.deck = newLayout.getCards()
    this.applyLogic()

    // Where we reset our instance vars
    this.revealedCards = []
    this.cardToMatch = ''

    const scoreBoard = document.getElementById('stats')
    scoreBoard.innerHTML = `
      <section>
        <span>
          Moves made: ${ this.moves }
        </span>

        <span>
          Revealed Cards: ${ this.revealedCards }
        </span>
      </section>
    `
  }

  // isGameOver() {
  //   // This is what is called everytime we call click on a card
  //   // We check each of our game instance vars to see if they evaluate to a halting condition

  //   // document.getElementById('game-over-text').className('visible')
  //   // call to resetGame()
  // }

  // resetGame() {
  //   //  reset variables here
  //   // change class of popupwindow UI (with modal)
  // }


}



export default Game