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
    console.log(splitPhrase)
    
    
    for(let i=0;i<splitPhrase.length;i++){
     
      if (splitPhrase[i] === ' ') {
        liHtml += `<li class="space"></li>`;
      } else {
        liHtml += `<li class="hide letter ${splitPhrase[i]}"></li>`;



}
  }
  phraseUL.innerHTML=liHtml;
  return splitPhrase;
}
checkLetter(text) {
  if (this.phrase.includes(text)){
    return true;  }
  else{
    return false;
  }
  }
  //


  

showMatchedLetter(element) {
  let elementText=element.innerText;
  
  for(let i=0;i<phraseLi.length;i++){
    if (phraseLi[i].classList.contains(elementText)){
      phraseLi[i].innerText=elementText;
      phraseLi[i].classList.add('show');
      phraseLi[i].classList.remove('hide');


      
    }


  }
}
}







