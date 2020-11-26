// Directives:
//  1. construct card instances 
//  2. instance method to track visibility 
//  3. method to retrieve image/value 
//  4. method to change card status hidden/visible 
//  5. assign an image to each instance 

class Card {
  constructor(faceCard) {
    // this.value = value
    this.visible = false
    this.image = faceCard    
    // Our binded DOM element to have ease of reference in future method calls
    this.html = ''
  }


  // Below are our setters and getters for our instance variables

  html() {
    return this.html
  }

  setHtml(arg) {
    this.html = arg
  }

  image() {
    return this.image
  }

  setImage(arg) {
    this.image = arg
  }


  //  Below are our functional methods to change our instances' states.
  //  Check if the card is flipped.
  //  And check for equality with other instances!
  
  isVisible() {
    return this.visible
  }
  
  flip() {
    this.visible = !this.visible
  }

  isMatching(card) {
    return this.image === card.image
  }

}


export default Card