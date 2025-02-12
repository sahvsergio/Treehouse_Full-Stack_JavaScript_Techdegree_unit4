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
  let overlay=document.querySelector('#overlay');
  overlay.style.display='none';
  //calls the getRandomPhrase() method, and sets the 
  //activePhrase property with the chosen phrase.
  this.activePhrase=this.getRandomPhrase()
   //adds that phrase to the board by calling
  //the addPhraseToDisplay() method on the activePhrase property.
  this.activePhrase.addPhraseToDisplay();
  

  
 

  }

  getRandomPhrase() {
    let randomizedIndex = Math.ceil(Math.random()*(this.phrases.length)-1);
    
    return this.phrases[randomizedIndex];
   
  }
  handleInteraction() {}
  removeLife() {}
  checkForWin() {}
  gameOver() {}
}
