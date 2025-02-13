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
  }

  getRandomPhrase() {
    let randomizedIndex = Math.ceil(Math.random() * this.phrases.length - 1);

    return this.phrases[randomizedIndex];
  }
  handleInteraction(element) {
    let elementText=element.innerText;
   
    
    
    console.log(elementText);

    //checks to see if the button clicked by the player matches a letter in the phrase,
  }

  //Disable the selected letter’s onscreen keyboard button.
  //If the phrase does not include the guessed letter, add the wrong CSS class to the selected letter's keyboard button and call the removeLife() method.
  //If the phrase includes the guessed letter, add the chosen CSS class to the selected letter's keyboard button, call the showMatchedLetter() method on the phrase, and then call the checkForWin() method. If the player has won the game, also call the gameOver() method.

  removeLife() {}
  checkForWin() {}
  gameOver() {}
}
