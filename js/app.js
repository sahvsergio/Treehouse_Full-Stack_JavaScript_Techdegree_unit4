/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let startButton = document.querySelector('#btn__reset');
let qwertyKeyboard=document.querySelector("#qwerty");
let scoreboard = document.querySelector('#scoreboard');
let heartsList =scoreboard.children;
console.log(heartsList);
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
 
       











