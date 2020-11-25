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
    this.cardMatchingLogic = this.cardMatchingLogic.bind(this)
    this.clickLogic = this.clickLogic.bind(this)
    this.applyLogic = this.applyLogic.bind(this)
    this.startGame = this.startGame.bind(this)
  }


  cardMatchingLogic(card1, card2) {
    const card1HTML = card1.html
    const card2HTML = card2.html

    // If matching 
    if ( (card1.isMatching(card2)) && (card1HTML.id != card2HTML.id) ) {

      // locked CSS, need to add class on top of revealed unique background to *darken* image
      card1HTML.classList.add('blocked')
      card2HTML.classList.add('blocked')

      // Store our cards
      this.revealedCards.push( [ card1.value, card2.value ] )
      console.log(this.revealedCards)
      this.cardToMatch = ''
      // win logic check call
    } else {
      // set css back
      card1HTML.className = 'shown-card'

      card1HTML.className = 'card'
      card2HTML.className = 'card'
      // flip (both)
      card1.flip()
      card2.flip()
      console.log(2, this.cardToMatch)
      this.cardToMatch = ''
      // lose logic check call
    }
  }


  clickLogic(target, domCard) {
    // let weHaveACard = this.cardToMatch.constructor.name == 'Card' ? this.cardToMatch : ''
    let that = this

    domCard.addEventListener('click', () => {
      that.moves++
      console.log( 1, that.cardToMatch )
      domCard.className = !target.isVisible() ? 'shown-card' : 'card'
      target.flip()

      if ( that.cardToMatch.constructor.name == "Card" ) { 
        that.cardMatchingLogic( target, that.cardToMatch )
      } else {
        that.cardToMatch = target
      }

    })
  }


  applyLogic() {
    // I want each html card to execute a function with the card whose value shares the element's id
    this.deck?.forEach( card => {
      let cardHTML = card?.html
      this.clickLogic( card, cardHTML )    
    })

  }



  startGame() {
    // create the layout (instantiation and rendering of each card instance.
    const newLayout = new Layout(4, 4) // <--- future feature, optional difficulty
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