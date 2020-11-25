import Card from './card.js'

// Directives for this class:
//  1. class method to render initial layout with inner html. Receives n*n cards
//  2. Store cards in instance variable
//  3. Shuffle order of cards in collection
//  4. Render board with randomized positioning (Shuffling deck)

class Layout {
  constructor(rows, columns) {
    this.size = Number(rows) * Number(columns)
    this.cards = []
  }

  // This solves our issue of not having matching cards(values)
  cleanCards(list) {
    let cleanDeck = []

    // We parse over our collection
    for ( let i = 1; i < this.size; i += 2 ) {
      const card = list[i]
      const prevCard = list[i - 1]
      const prevVal = prevCard?.value
      // We override the current card with the previous card value
      card.html.innerText = prevVal
      card.setValue( prevVal )
      cleanDeck.push( prevCard, card )
    }

    // We return our collection of pushed pairs.
    return cleanDeck
  }



  // This is our class method for instantiating a brand new deck
  //  I separated concerns to prevent instances from having un-needed access
  static createDeck = size => {
    let deck = []
    let currVal = 1
    // Future, create list of image strings to assign
    // We not only instantiate Cards, but we assign their respective DOM elements
    while ( deck.length < size ) {
      let card = new Card( currVal )
      let domEle = document.createElement( "article" )
        domEle.setAttribute("id", `card-${ currVal }`)
        domEle.setAttribute('class', "card")
        domEle.innerText = card.value // <---- to be image soon
      card.setHtml( domEle )

      deck.push( card )
      currVal++
    }
    // This overall function allows us to dynamically reference respective objects!
    return deck
  }

  
  // Our foundational method yet! This accepts our deck and shuffles it's order
  //  so that we may randomize pairs!
  shuffleDeck(deck) {
    return deck.sort(() => Math.random() - 0.5)
  }


  // After instantiation, we render our cards by parsing our deck and appending 
  //  their assigned DOM elements to a *root* container on our DOM.
  //  With regard to making calls to our deck creation.
  renderLayout() {
    let unCleanDeck  = Layout.createDeck( this.size ) 
    let unShuffledDeck = this.cleanCards( unCleanDeck )
    this.cards = this.shuffleDeck( unShuffledDeck )
    // First we want to target our root to hook into
    const container = document.getElementById('root')
    // We instantiate HTML to have a way of adding HTML each iteration of #cards
    let html = `
      <figure id="stats">
      
      </figure>
    `
    // Setting the innerHTML to blank ensures we can start from a clean slate
    container.innerHTML = html

    this.cards.forEach(card => {
      container.appendChild( card.html )
    })
    

  }

  getCards() {
    return this.cards
  }



}






export default Layout