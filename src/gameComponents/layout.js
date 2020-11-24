// Directives for this class:
//  1. class method to render initial layout with inner html. Receives n*n cards
//  2. 

class Layout {
  constructor(rows, columns, cards) {
    this.size = Number(rows) * Number(columns)
    this.cards = cards
  }
  // We create a class method unavailable to child objects
  static renderLayout() {
    // First we want to target our root to hook into
    const container = document.getElementById('root')
    // We instantiate HTML to have a way of adding HTML each iteration of #cards
    let html = ''

    this.cards.forEach(card => {
      let segment = `
        <article>
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


}



export default Layout