/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      new Phrase("The years teach much which the days never know."),
      new Phrase("A true friend is for ever a friend"),
      new Phrase("Hold a true friend with both your hands"),
      new Phrase("To good eating belongs good drinking"),
      new Phrase("Friendship is a sheltering tree"),
    ];

    this.activePhrase = null;
  }

  startGame() {
    /*
    
      It also*/

    //hides the start screen overlay
    let overlay = document.querySelector("#overlay");
    overlay.style.display = "none";
    //calls the getRandomPhrase() method, and sets the
    //activePhrase property with the chosen phrase.
    this.activePhrase = this.getRandomPhrase();
    //adds that phrase to the board by calling
    //the addPhraseToDisplay() method on the activePhrase property.
    this.activePhrase.addPhraseToDisplay();
    return this.activePhrase;
  }

  getRandomPhrase() {
    let randomizedIndex = Math.ceil(Math.random() * this.phrases.length - 1);

    return this.phrases[randomizedIndex];
  }
  handleInteraction(element) {
    //gets the element's innerText for comparison
    let elementText = element.innerText;
    

    //the player matches a letter in the phrase,

    //disables button

    element.disabled = true;
    //checks to see if the button clicked by
    if (this.activePhrase.checkLetter(elementText)) {
      //if letter in original phrase add chosen class
      element.classList.add("chosen");
      //call the showMatchedLetter() method on the phrase,
      this.activePhrase.showMatchedLetter(element)
    } else {
      //otherwise add the wrong class
      element.classList.add("wrong");
      // call the remove life method
      this.removeLife();
    }
  }

  //

 //call the showMatchedLetter() method on the phrase, and then call the checkForWin() method. If the player has won the game, also call the gameOver() method.

  removeLife(){
    
    //if the player has five missed guesses
   if (this.missed<scoreboard.length-1) {
       
      
      for (let i = 0;i<scoreboard.length; i++) {
       // replacing one of the liveHeart.png images with a 
    //lostHeart.png image
        scoreboard[this.missed].src='images/lostHeart.png';
       
        
    
      }
    } else {
      
      this.gameOver();
    }
     this.missed += 1;
  }
  checkForWin() {}
  gameOver() {
     //displays the original start screen overlay
    
    overlay.style.display='block';
    
    



    //and depending on the outcome of the game, 
    //updates the overlay h1 element with a friendly 
    //win or loss message, and replaces the overlay’s //
    //start CSS class with either the win or lose CSS class. 
  }
}
