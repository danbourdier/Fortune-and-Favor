import Card from './card.js'

// Directives for this class:
//  1. class method to render initial layout with inner html. Receives n*n cards
//  2. Shuffle order of cards in collection
//  3. Render board with randomized positioning

class Layout {
  constructor(rows, columns) {
    this.size = Number(rows) * Number(columns)
    this.cards = []

  }

  static createDeck = size => {
    let deck = []
    let currVal = 1
    // Future, create list of image strings to assign
    while (deck.length < size) {
      let card = new Card(currVal, currVal)
      deck.push(card)

      currVal++
    }

    return deck
  }

  // When we create our deck we dont have matching values yet, this solves that.
  cleanCards() {
    // our logic to pass over deck, reassign props to ensure we 
    // have duplicate vals
    let cleanDeck = []

    for ( let i = 1; i < this.cards.length; i += 2 ) {
      const curr = this.cards[i]
        let currVal = curr.value
      const prev = this.cards[i - 1]
        let prevVal = prev.value


    }

    return cleanDeck
  }

  shuffleDeck() {
    // shuffle deck logic
    // return
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

    this.cards.forEach( card => {
      let segment = `
        <article class="card" id="card-${ card.idx }">
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

  // This returns our deck
  getCards() {
    return this.shuffleDeck()
  }



}



export default Layout