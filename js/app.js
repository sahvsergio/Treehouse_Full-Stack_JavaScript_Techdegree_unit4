/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let startButton = document.querySelector('#btn__reset');
let qwertyKeyboard=document.querySelector("#qwerty");
let scoreboard = document.querySelectorAll('.tries img');
let phraseUL = document.querySelector("#phrase>ul");
let phraseLi=phraseUL.children;

let shownLetters = document.querySelectorAll(".show");
let chosenCounter=0;
let spaces=document.querySelectorAll('.spaces');
let splitPhrase;
let game;

startButton.addEventListener('click',(e)=>{
   
 game = new Game();

game.startGame();



});




qwertyKeyboard.addEventListener('click',(e)=>{
   let targetButton=e.target;
   //
   //compare if it contains the class key -->note to self, classList is an object
   if (targetButton.classList.contains('key')){
   
   game.handleInteraction(targetButton);
   
   }
}
);
 











