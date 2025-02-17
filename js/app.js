/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let body = document.querySelector("body");
let startButton = document.querySelector("#btn__reset");
let qwertyKeyboard = document.querySelector("#qwerty");
let scoreBoard = document.querySelectorAll(".tries img");
let phraseUL = document.querySelector("#phrase>ul");
let phraseLi = phraseUL.children;
let outcome;
let splitPhrase;
let game;



///
startButton.addEventListener("click", (e) => {
  let oldLetters = document.querySelectorAll(".key");
  oldLetters.forEach((letter) => {
    letter.classList.remove("chosen");
    letter.classList.remove("wrong");
    letter.disabled = false;
  });

  scoreBoard.forEach((score) => {
    score.src = "images/liveHeart.png";
  });
   
  game = new Game();

  game.startGame();
});

body.addEventListener("keyup", (e) => {
  //if they hit enter, then the game starts
  if (e.code === "Enter") {
    let oldLetters = document.querySelectorAll(".key");
    oldLetters.forEach((letter) => {
      letter.classList.remove("chosen");
      letter.classList.remove("wrong");
      letter.disabled = false;
    });

    scoreBoard.forEach((score) => {
      score.src = "images/liveHeart.png";
    });
    game = new Game();
    game.startGame();
  }
});

qwertyKeyboard.addEventListener("click", (e) => {
  let targetButton = e.target;
  //
  //compare if it contains the class key -->note to self, classList is an object
  if (targetButton.classList.contains("key")) {
    game.handleInteraction(targetButton);
  }
});

body.addEventListener("keyup", (e) => {
  //get the e.code instead of e.key to prevent issues with keyboard layouts
  if (e.code.startsWith("Key")) {
    let letter = e.key.toLowerCase();

    // Convert NodeList to Array and search for the button
    let buttons = [...qwertyKeyboard.querySelectorAll("button.key")];
    let button = buttons.find((btn) => btn.textContent === letter);

    // Check if a button was found

    if (button) {
      game.handleInteraction(button);
    }
  }
});
