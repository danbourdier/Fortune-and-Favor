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
  // reset moves, reset remaining Cards, in #playGame create the deck instead of passing as arg
  //  essentially resetting all instance variables


class Game {
  constructor() {
    this.moves = 0 // <--- optional game feature
    this.deck = []
    this.remainingCards = 0
    this.revealedCards = []

    this.startGame = this.startGame.bind(this)
  }


  startGame() {
    // create the layout (instantiation and rendering of each card instance.
    const newLayout = new Layout(3, 3) // <--- future feature, optional difficulty
    // #renderLayout renders our board
    newLayout.renderLayout()
    // #getCards returns a reference we assign to our instance variable this.deck
    this.deck = newLayout.getCards()
    Layout.applyListeners(this.deck)

    this.remainingCards = this.deck.length
    this.revealedCards = []
    
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

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// Directives for this class:
//  1. class method to render initial layout with inner html. Receives n*n cards
//  

// To externalize the ability to create multiple instances of cards for our
//  Layout class, we accept a size argument to determine how many instaces we create

// const createDeck = size => {
//   let deck = []
//   let currVal = 1

//   while (deck.length < size) {
//     let card = new Card(currVal)
//     deck.push(card)

//     currVal++
//   }

//   return deck
// }
 

// class Layout extends Game {
//   constructor(rows, columns) {
//     super()
//     this.size = Number(rows) * Number(columns)
//     this.cards = []
//   }


//   static applyListeners(cards) {

//     cards.forEach((card, idx) => {
//       let cardHTML = document.getElementById(`card-${idx}`)

//       try {

//         cardHTML.addEventListener('click', () => {
//           // console.log(card)
//           // console.log('line-break-test')
//           // console.log(card.value)

//           card.flip()
//         })

//       } catch (error) {
//         console.log('error applying listeners to cards/elements')
//       }
//     })
//   }


//   renderLayout() {
//     this.cards = createDeck(this.size)
//     // First we want to target our root to hook into
//     const container = document.getElementById('root')
//     // Setting the innerHTML to blank ensures we can start from a clean slate
//     container.innerHTML = ''
//     // We instantiate HTML to have a way of adding HTML each iteration of #cards
//     let html = `
//       <figure id="stats">
      
//       </figure>
//     `

//     this.cards.forEach((card, idx) => {
//       let segment = `
//         <article class="card" id="card-${idx}">
//           <h3> 
//             ${card.value}
//           </h3>
//         </article>
//       `
//       html += segment
//     })
//     // Finally we change the HTML in our root to contain all our cards
//     container.innerHTML = html
//   }



//   // This returns our deck belonging to an instance of our board/layout
//   getCards() {
//     return this.cards
//   }



// }

export default Game