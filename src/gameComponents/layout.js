import Card from './card.js'

// Directives:
//  1. class method to render initial layout with inner html. Receives n*n cards
//  2. Store cards in instance variable
//  3. Shuffle order of cards in collection
//  4. Render board with randomized positioning (Shuffling deck)

class Layout {
  constructor(rows, columns) {
    this.size = Number(rows) * Number(columns)
    this.cards = []
    this.cardImageUrls = []
  }

  static getCardImages() {
    let images = [
      'Death.jpg',
      'Devil.jpg',
      'Emperor.jpg',
      'Fool.jpg',
      'Hangman.jpg',
      'Hermit.jpg',
      'Hierophant.jpg',
      'Judgement.jpg',
      'Justice.jpg',
      'Moon.jpg',
      'Strength.jpg',
      'Sun.jpg',
      'Temperance.jpg',
      'Tower.jpg',
      'Wheel.jpg',
      'World.jpg'
    ]

    return images
  }

  // This solves our issue of not having matching cards(values)
  cleanCards( list ) {
    let cleanDeck = []

    // We parse over our collection
    for ( let i = 1; i < this.size; i += 2 ) {
      const card = list[i]
      const prevCard = list[i - 1]
      const prevImg = prevCard?.image
      // We override the current card with the prev card comparator (img string)
      card?.setImage( prevImg )
      cleanDeck.push( prevCard, card )
    }

    // We return our collection of pushed pairs.
    return cleanDeck
  }


  // This is our class method for instantiating a brand new deck
  //  I separated concerns to prevent instances from having un-needed access
  static createDeck = (size, images) => {
    // We instantiate Cards, assign their DOM elements, and construct them by passing
    //   unique img urls to compare and use as CSS img urls!
    let deck = []
    let i = 0

    while ( deck.length < size ) {
      let card = new Card( images[ i ] )

      let domEle = document.createElement( "img" )
        domEle.setAttribute("id", `card-${ i }`)
        domEle.setAttribute('class', "card")
        domEle.src = 'rear.jpeg'
      
      card.setHtml( domEle )
      deck.push( card )
      i++
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
    this.cardImageUrls = Layout.getCardImages()

    let unCleanDeck  = Layout.createDeck( this.size, this.cardImageUrls ) 
    let unShuffledDeck = this.cleanCards( unCleanDeck )
    this.cards = this.shuffleDeck( unShuffledDeck )
    // First we want to target our root to hook into
    const container = document.getElementById('root')
    // We instantiate HTML to have a way of adding HTML each iteration of #cards
    let html = `
      <figure id="stats"> </figure>
    `
    // Setting the innerHTML to blank ensures we can start from a clean slate
    container.innerHTML = html

    this.cards.forEach(card => {
      container.appendChild( card.html )
    })
  }

  // Finally, our getter to return our deck!
  getCards() {
    return this.cards
  }


}


export default Layout