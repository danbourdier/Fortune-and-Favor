// Directives for this class:
//  1. class method to render initial layout with inner html. Receives n*n cards
//  2. 

class Layout {
  constructor(rows, columns, cards) {
    this.size = Number(rows) * Number(columns)
    this.cards = cards
  }

  static renderLayout() {
    const root = document.getElementById('root')
    
  }


}



export default Layout