// Directives:
//  1. method to start game
//  2. method to end game
//  3. method to compare two cards
//  4. track revealed cards
//  5. track number of moves 
//  6. reset game
//  7. track when 2/2 cards are toggled


class Game {
  constructor(deck) {
    this.moves = 0
    this.deck = deck
    this.remainingCards = deck.length
    this.revealedCards = []
  }

  playGame() {
    const newLayout = new Layout(3, 3)
    newLayout.renderLayout()
    
    while( this.remainingCards > 1 ) {

    }
  }

  gameover() {
    document.getElementById('game-over-text').className('visible');
  }



}

export default Game