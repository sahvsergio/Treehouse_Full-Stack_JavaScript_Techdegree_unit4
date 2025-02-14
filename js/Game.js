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
      this.activePhrase.showMatchedLetter()
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
    this.missed += 1;
    //removes a life from the scoreboard, 
   if (this.missed<=scoreboard.length+1) {
       
      
      for (let i = 0;i<=scoreboard.length; i++) {
        scoreboard[this.missed].src='images/lostHeart.png';
        
    
      }
    } else {
      
      console.log("you lost");
    }
  }
  
    
   
    
    //removes a life from the scoreboard, 
    //by replacing one of the liveHeart.png images with a 
    //lostHeart.png image (found in the images folder) 
    
     //If the player has five missed guesses (i.e they're out of lives), then end the game by calling the g


  


  checkForWin() {}
  gameOver() {}
}
