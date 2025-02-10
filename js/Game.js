/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      new Phrase(
        "The waste of life occasioned by trying to do too many things at once is appalling. No one is large enough to be split up into many parts; and the sooner a man can stamp this truth upon his mind, the better his chances for being a profitable member of society."
      ),
      new Phrase(
        "That man is the richest whose pleasures are the cheapest. ~Henry David Thoreau"
      ),
      new Phrase("If at first you do succeed, try something harder."),
      new Phrase(
        "A man of talent has a good Working Consciousness, a man of genius a good Working Sub-Consciousness. Hence the frequent mental instability of genius"
      ),
      new Phrase(
        "I have known no man of genius who had not to pay, in some affliction or defect either physical or spiritual, for what the gods had given him."
      ),
    ];


    this.activePhrase = null;
  }

  startGame() {

    /*hides the start screen overlay, 
    calls the getRandomPhrase() method, and sets the
     activePhrase property with the chosen phrase.
      It also adds that phrase to the board by calling
       the addPhraseToDisplay() method on the activePhrase property.*/
  let overlay=document.querySelector('#overlay');
  overlay.style.display='none';

  }

  getRandomPhrase() {
    console.log(this.phrases);
    
   

  }
  handleInteraction() {}
  removeLife() {}
  checkForWin() {}
  gameOver() {}
}
