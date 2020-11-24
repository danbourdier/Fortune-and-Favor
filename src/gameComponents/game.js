// Directives:
//  1. method to start game
//  2. method to end game
//  3. method to compare two cards
//  4. track revealed cards
//  5. track number of moves 
//  6. reset game
//  7. track when 2/2 cards are toggled


// Have a base state, loading page at a loaded game
// Restart state on click
// Win or lose condition, if winner display etc.

// OPTIONS FOR FLOW
//  Hard refresh, 
//  deleting instance of game,   overkill
//  restetting instance variables by wiping layout
  // reset moves, reset remaining Cards, in #playGame create the deck instead of passing as arg
  //  essentially resetting all instance variables


class Game {
  constructor() {
    this.moves = 0
    this.deck = []
    this.remainingCards = deck.length
    this.revealedCards = []
  }

  startGame() {
    // create the layout (instantiation and rendering of each card instance. (with elements))
    const newLayout = new Layout(3, 3)
    newLayout.renderLayout()

    // while( this.remainingCards > 1 ) {

    // }
  }

  gameover() {
    // This is what is called everytime we call click on a card
    document.getElementById('game-over-text').className('visible');
    // call to resetGame()
  }

  resetGame() {
    //  reset variables here
    // change class of popupwindow UI (with modal)
  }



}

export default Game