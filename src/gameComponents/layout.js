import Game from './game.js'
import Card from './card.js'

// Directives for this class:
//  1. class method to render initial layout with inner html. Receives n*n cards


class Layout extends Game {
  constructor(rows, columns) {
    this.size = Number(rows) * Number(columns)
    this.cards = []

  }

  static applyListeners(cards) {
    cards.forEach((card, idx) => {
      let cardHTML = document.getElementById(`card-${idx}`)

      try {
        cardHTML.addEventListener('click', () => {
          card.flip()
        })

      } catch (error) {
        console.log('error applying listeners to cards/elements')
      }

    })
  }

  static createDeck = size => {
    let deck = []
    let currVal = 1

    while (deck.length < size) {
      let card = new Card(currVal)
      deck.push(card)

      currVal++
    }

    return deck
  }


  renderLayout() {
    this.cards = Layout.createDeck(this.size)
    // First we want to target our root to hook into
    const container = document.getElementById('root')
    // Setting the innerHTML to blank ensures we can start from a clean slate
    container.innerHTML = ''
    // We instantiate HTML to have a way of adding HTML each iteration of #cards
    let html = `
      <figure id="stats">
      
      </figure>
    `

    this.cards.forEach( (card, idx) => {
      let segment = `
        <article class="card" id="card-${idx}">
          <h3> 
            ${ card.value }
          </h3>
        </article>
      `
      html += segment
    })
    // Finally we change the HTML in our root to contain all our cards
    container.innerHTML = html
  }

  // This returns our deck belonging to an instance of our board/layout
  getCards() {
    return this.cards
  }



}



export default Layout