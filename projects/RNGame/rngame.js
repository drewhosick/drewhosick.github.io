const guessDisplay = document.querySelector('.theGuess');
const theResult = document.querySelector('.result');
const inputGuess = document.querySelector('.inputGuess');

document.getElementById("myBtn").onclick = check;

let chosenNumber = Math.round(Math.random() * 100);

function check()
{
    let guess = inputGuess.value;
    guessDisplay.innerHTML = guess;
}