import Card from './card.js'

// Directives for this class:
//  1. class method to render initial layout with inner html. Receives n*n cards
//  2. Shuffle order of cards in collection
//  3. Render board with randomized positioning

// class Layout {
//   constructor(rows, columns) {
//     this.size = Number(rows) * Number(columns)
//     this.cards = []

//   }

//   static createDeck = size => {
//     let deck = []
//     let currVal = 1
//     // Future, create list of image strings to assign
//     while (deck.length < size) {
//       let card = new Card(currVal, currVal)
//       deck.push(card)

//       currVal++
//     }

//     return deck
//   }

//   // When we create our deck we dont have matching values yet, this solves that.
//   cleanCards() {
//     // let cleanDeck = []
//     for ( let i = 1; i < this.cards.length; i += 2 ) {
//       const curr = this.cards[i]
//       const prevVal = this.cards[i - 1]?.value

//       curr.setValue(prevVal)
//     }
//   }

//   shuffleDeck() {
//     // let data = this.cleanCards()
//     this.cleanCards()
//     let shuffledData = this.cards.sort( () => Math.random() - 0.5 )
    
//     return shuffledData
//   }


//   renderLayout() {
//     this.cards = Layout.createDeck(this.size)
//     // First we want to target our root to hook into
//     const container = document.getElementById('root')
//     // Setting the innerHTML to blank ensures we can start from a clean slate
//     container.innerHTML = ''
//     // We instantiate HTML to have a way of adding HTML each iteration of #cards
//     let html = `
//       <figure id="stats">
      
//       </figure>
//     `

//     this.cards.forEach( card => {
//       let segment = `
//         <article class="card" id="card-${ card.idx }">
//           <h3> 
//             ${ card.value }
//           </h3>
//         </article>
//       `
//       html += segment
//     })
//     // Finally we change the HTML in our root to contain all our cards
//     container.innerHTML = html
//   }

//   getCards() {
//     // return this.shuffleDeck()
//     console.log( this.shuffleDeck())
//   }



// }

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

class Layout {
  constructor(rows, columns) {
    this.size = Number(rows) * Number(columns)
    this.cards = []
  }

  // When we create our deck we dont have matching values yet, this solves that.
  cleanCards(list) {
    let cleanDeck = []

    for ( let i = 1; i < this.size; i += 2 ) {
      const card = list[i]
      const prevCard = list[i - 1]
      const prevVal = prevCard?.value

      card.html.innerText = prevVal
      card.setValue( prevVal )
      cleanDeck.push( prevCard, card )
    }

    return cleanDeck
  }

  static createDeck = size => {
    let deck = []
    let currVal = 1
    // Future, create list of image strings to assign
    while (deck.length < size) {
      let card = new Card(currVal, currVal)
      let domEle = document.createElement("article")
        domEle.setAttribute("id", `card-${ currVal }`)
        domEle.setAttribute('class', "card")
        domEle.innerText = card.value // <---- to be image soon
      card.setHtml(domEle)

      deck.push(card)
      currVal++
    }

    return deck
  }

  

  shuffleDeck(deck) {
    return deck.sort(() => Math.random() - 0.5)
  }


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