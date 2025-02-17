/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      new Phrase("The years teach much which the days never know"),
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
      this.activePhrase.showMatchedLetter(element);
      
      
  
      if (this.checkForWin()) {
        outcome='won'
        this.gameOver(outcome);
      }
    } else {
      //otherwise add the wrong class
      element.classList.add("wrong");
      element.classList.remove("chosen");
      // call the remove life method
      this.removeLife();
    }
  }

  removeLife() {
    //if the player has five missed guesses
    if (this.missed < scoreBoard.length - 1) {
      for (let i = 0; i < scoreBoard.length; i++) {
        // replacing one of the liveHeart.png images with a
        //lostHeart.png image
        scoreBoard[this.missed].src = "images/lostHeart.png";
      }
    } else {
      outcome='lost'
      this.gameOver(outcome);
    }
    this.missed += 1;
  }

  checkForWin() {
    let shownLetters = document.querySelectorAll(".show");
    let letters = document.querySelectorAll(".letter");
    
    let shownLength=shownLetters.length;   

   
    let lettersLength=letters.length;
    if (shownLength===lettersLength){
      return true
    }
    else{
      return false;
    }
    

    
    

  }

  gameOver(outcome) {
    //displays the original start screen overlay
    let gameMessage=document.querySelector('h1');

    overlay.style.display = "block";
    
    if (outcome==='won'){

      
      overlay.classList.add('win');
      overlay.classList.remove('lose');
      gameMessage.textContent='Congratulations, you have won the game, want to play again?';
      

    }
    else if(outcome==='lost'){
      overlay.classList.add('lose');
      overlay.classList.remove('win');
      gameMessage.textContent='You have lost the game, Better luck next time, want to try again?';

    }
    let oldLetters = document.querySelectorAll(".key");
    oldLetters.forEach(letter=>{
      letter.classList.remove("chosen");
      letter.classList.remove("wrong");
      letter.disabled=false;
    

    })
    
   scoreBoard.forEach(score=>{
    score.src = "images/liveHeart.png";
   })
    
    
  }

    //and depending on the outcome of the game,
    //updates the overlay h1 element with a friendly
    //win or loss message, and replaces the overlay’s //
    //start CSS class with either the win or lose CSS class.
  
}
