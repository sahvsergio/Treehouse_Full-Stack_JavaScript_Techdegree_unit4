/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  addPhraseToDisplay(phrase) {
    splitPhrase = this.phrase.split("");
    let liHtml = "";
   
    //adds letter placeholders to the display
    for (let i = 0; i < splitPhrase.length; i++) {
      if (splitPhrase[i] === " ") {
        //when the game starts. Each letter is presented by an empty box,
        //one li element for each letter.
        liHtml += `<li class="space"></li>`;
      } else {
        liHtml += `<li class="hide letter ${splitPhrase[i]}"></li>`;
      }
    }
    phraseUL.innerHTML = liHtml;
    return splitPhrase;
  }

  checkLetter(text) {
    if (this.phrase.includes(text)) {
      return true;
    } else {
      return false;
    }
  }
  //

  showMatchedLetter(element) {
    let elementText = element.innerText;

    for (let i = 0; i < phraseLi.length; i++) {
      if (phraseLi[i].classList.contains(elementText)) {
       
        phraseLi[i].innerText = elementText;
        phraseLi[i].classList.add("show");
        phraseLi[i].classList.remove("hide");
      }
    }
  }
}
