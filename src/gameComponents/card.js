// Directives:
//  1. construct card instances 
//  2. instance method to track visibility 
//  3. method to retrieve value 
//  4. method to change card status hidden/visible 
//  5. assign an image to each instance

class Card {
  constructor(value, idx) {
    this.value = value
    this.visible = false
    this.image = ''    

    this.idx = idx
  }


  idx() {
    return this.idx
  }

  value() {
    return this.value
  }

  setValue(arg) {
    this.value = arg
  }

  isVisible() {
    return this.visible
  }

  flip() {
    this.visible = !this.visible
  }

  isMatching(card) {
    return this.value === card.value
  }


}


export default Card