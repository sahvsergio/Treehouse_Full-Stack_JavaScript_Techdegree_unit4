/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }
  addPhraseToDisplay(phrase) {
    //adds letter placeholders to the display
    //when the game starts. Each letter is presented by an empty box,
    //one li element for each letter.
    
    let splitPhrase = this.phrase.split('');
    let liHtml='';
    let phraseUL=document.querySelector("#phrase>ul")
    
    for(let i=0;i<splitPhrase.length;i++){
     
      if (splitPhrase[i] === ' ') {
        liHtml += `<li class="space"></li>`;
      } else {
        liHtml += `<li class="hide letter ${splitPhrase[i]}"></li>`;



}
  }
  phraseUL.innerHTML=liHtml;
}
checkLetter() {}
showMatchedLetter() {}
}
   
    

    
    
    

    



    
    //Each letter is presented by an empty box,
     //one li element for each letter. See the  
    
     
     
  
    

 


