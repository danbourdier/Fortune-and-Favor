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
    // Our flag to *await* user interaction
    this.gapTime = 0

    // Due to asynchronous nature of event listeners, I wanted to ensure scope remains
    //  predictable. I binded my methods in addition to encapsulating context through
    //    let that = this
    this.startGame = this.startGame.bind(this)
    this.cardMatchingLogic = this.cardMatchingLogic.bind(this)
    this.clickLogic = this.clickLogic.bind(this)
    this.applyLogic = this.applyLogic.bind(this)
    this.startGame = this.startGame.bind(this)
  }

  // Our final check in our process for endless fun! This executes all our logic
  //   for checking matches and acting upon certain conditions met!
  cardMatchingLogic(card1, card2) {
    const card1HTML = card1.html
    const card2HTML = card2.html

    // If matching and not the same card, we perform our block.
    if ( ( card1.isMatching(card2) ) && ( card1HTML.id != card2HTML.id ) ) {
      // On satisfying the above, we dynamically change the visualization of our 
      //  card and render click events obsolete!

        // card1HTML.classList.add('blocked')
        // card2HTML.classList.add('blocked')
        // this.gapTime = 0

      setTimeout( () => {
        card1HTML.classList.add('blocked')
        card2HTML.classList.add('blocked')
        this.gapTime = 0
      }, 600)

      // Store our pair for future winning checks. And reset our card to check against
      this.revealedCards.push( card1.value, card2.value )
      this.cardToMatch = ''
      // win logic check call

    } else {
      // We reset our initial CSS shortly after a periodic exposure of our card
      card1HTML.className = 'shown-card'
      setTimeout( () => { 
        card1HTML.className = 'card'
        card2HTML.className = 'card'
        this.gapTime = 0
      }, 600)

      // Second to last we flip our cards again to track visibility while resetting
      //  our tracked card.
      card1.flip()
      card2.flip()

      this.cardToMatch = ''

      // lose logic check call
    }
  }

  // Our embedded helper function to #applyLogic enables us to utilize an event
  //   listener to execute logic on click events. Logic to increment moves, changing CSS,
  //    and more above.
  clickLogic(target, domCard) {
    let that = this

    domCard.addEventListener('click', () => {
      that.moves++

      // This flag forces the user to pause before interacting with another card.
      if (that.gapTime === 0) {
        that.gapTime = 1

        domCard.className = !target.isVisible() ? 'shown-card' : 'card'
        target.flip()
        // Because ES6 cannot validate class instances to truthyness, I had to check 
        //  for equality of the variable's constructor to the desired comparator.
        if (that.cardToMatch.constructor.name == "Card") {
          that.cardMatchingLogic(target, that.cardToMatch)
        } else {
          setTimeout(() => {
            that.gapTime = 0
          }, 600)
          // If no card yet, we assign our target to our instance variable for reference
          that.cardToMatch = target
        }
      }

    })
  }


  // This does exactly what the name implies, it applies click logic to each instance
  //  in our deck of cards. Along with their respective html elements.
  applyLogic() {
    this.deck?.forEach( card => {   // Conditional operator for optional chaining.
      let cardHTML = card?.html
      this.clickLogic( card, cardHTML )    
    })

  }



  // Every call to startGame not only wipes our node tree, but also deletes instances
  //  through a browser's garbage collector. Can be viewed through the performance tab (Chrome)
  startGame() {
    const wipeContainer = document.getElementById('root').innerHTML = ""
    wipeContainer
    // Where we reset our instance vars
    this.moves = 0
    this.deck = []
    this.revealedCards = []
    this.cardToMatch = ''
    this.gapTime = 0

    // create the layout (instantiation and rendering of each card instance)
    const newLayout = new Layout(4, 4) // <--- future feature, optional difficulty
    // #renderLayout renders our board
    newLayout.renderLayout()
    // #getCards returns a reference we assign to our var this.deck
    this.deck = newLayout.getCards()
    this.applyLogic()

    // Of course we need a score board!
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


}



export default Game