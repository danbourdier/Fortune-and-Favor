import Card from './card.js'

// Directives for this class:
//  1. class method to render initial layout with inner html. Receives n*n cards
//  

// To externalize the ability to create multiple instances of cards for our
//  Layout class, we accept a size argument to determine how many instaces we create

const createDeck = size => {
  let deck = []
  let currVal = 1

  while (deck.length < size) {
    let card = new Card( currVal )
    deck.push( card )

    currVal++
  }

  return deck
}


class Layout {
  constructor(rows, columns) {
    this.size = Number(rows) * Number(columns)
    this.cards = []

    // Ensure that context is bound to an instance of Layout
  }


  static applyListeners(cards) {
    
    cards.forEach( (card, idx) => {
      let cardHTML = document.getElementById(`card-${idx}`)

      try {

        cardHTML.addEventListener('click', () => {
          console.log(card)
          console.log('line-break-test')
          console.log(card.value)
        })

      } catch(error) {
        console.log('error applying listeners to cards/elements')
      }
    })
  }


  renderLayout() {
    this.cards = createDeck(this.size)
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