//references to HTML elements
const questionElement = document.getElementById("question");
const wordInputElement = document.getElementById("word-input");
const remainedLettersElement = document.getElementById("letters-remained");
const letterInputElement = document.getElementById("letter-input");
const wordElement = document.querySelector(".word");
const resultMessageElement = document.getElementById("result-message");
const playAgain = document.getElementById("play-again");
const guessButtonElement = document.getElementById("guess-button");
let wordLettersElement;
//global variables
const questionsWords = [["reasons for a new wave of moving to Israel", "war"],
["the capital of Israel", "Jerusalem"],
["favorite blodo, quite strange and round", "falafel"],
["meaning of Shabbat", "rest"],
["fresh lake, sea", "kineret"],
["name of the football team, same as the name of the health insurance fund", "macabee"],
["young Israelis' favorite travel country", "india"],
["terrible winter disaster", "snow"]];
let currentIndex = 0;
let word;
let initialLettersNumber;
let remainedLettersNumber;
let resultMessage; 
//functions
function startGame(){
    wordInputElement.value = '';
    wordInputElement.readOnly = true;
    guessButtonElement.hidden = false;
    letterInputElement.readOnly = false;
    questionElement.innerHTML = questionsWords[currentIndex][0];
    playAgain.style.display='none'
    resultMessageElement.innerHTML='';
    word = questionsWords[currentIndex][1];
    wordElement.innerHTML = getWordDivs();
    wordLettersElement = document.querySelectorAll(".letter");
    remainedLettersNumber = Math.ceil(word.length * 0.25);
    initialLettersNumber = remainedLettersElement;
   fillRemainedTrials();

}
function fillRemainedTrials() {
    remainedLettersElement.innerHTML = `remained ${remainedLettersNumber} trials for letters entering`
}
function getWordDivs() {
    const wordAr = Array.from(word);
    const divs = wordAr.map(function(letter) {
        return `<div class="letter">${letter}</div>`
    })
    return divs.join('');
}
function checkWord() {
  wordLettersElement.forEach(function(div) {
    div.style.background = "white";
  })
 resultMessage = "Sorry, but you have failed with guess"
  if (word === wordInputElement.value) {
    resultMessage = "Congratulations, you are winner"
  }
  
  finishGame();

}
function processLetter() {
  remainedLettersNumber--;
  fillRemainedTrials();
  const letter = letterInputElement.value;
  letterInputElement.value =''
  wordLettersElement.forEach(function(div, index) {
    if(word[index] === letter) {
        div.style.background = "white"
    }
  })
  if (remainedLettersNumber === 0) {
    takeChance();
  }
}
function takeChance() {
   wordInputElement.readOnly = false;
   letterInputElement.readOnly = true;
}
function finishGame() {
    currentIndex++;
    if(currentIndex === questionsWords.length) {
        currentIndex = 0;
    }
    resultMessageElement.innerHTML = resultMessage;
    playAgain.style.display='block'
    wordInputElement.readOnly = true;
    letterInputElement.readOnly = true;
    guessButtonElement.hidden = true;
}
//actions
startGame();