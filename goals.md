Create a method that unifies game logic performed on click
  this will be an instance method that checks game status



Create shuffle method that can be called on the return value of ##createDeck in Layout.js  

I need to implement logic that alters background of card to either save the image to the instance, or... (when i create the instance, I can assign an instance variable the img url. When I later write click logic, I can just reset/add to a class that has the image, i.e: #joker ) Use of classList maybe

^ 
transition css a must!

Comparing cards is a multiple step process
  1. I need to track card to compare against
  2. I need to return bool if card to match and clicked card values are same
    * If bool is true, 
      - lock cards (remove listeners and shade unique css)
      - Push both to revealed cards instance var
      - check for remaining pairs (method?)
        > if none
      - increment moves
    * If bool is false