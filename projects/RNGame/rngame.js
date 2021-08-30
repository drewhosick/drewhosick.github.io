const guessDisplay = document.querySelector('.theGuess');
const theResult = document.querySelector('.result');
const inputGuess = document.querySelector('.inputGuess');

document.getElementById("myBtn").onclick = check;

let chosenNumber = Math.round(Math.random() * 100);

function check()
{
    let guess = Number(inputGuess.value);
    guessDisplay.innerHTML = guess;
    
    if (chosenNumber == guess) {
        theResult.innerHTML = "That was right.  It was " + guess + ".";
    } else if (chosenNumber < guess) {
        theResult.innerHTML = "Too high. Try again.";
    } else {
        theResult.innerHTML = "Too low. Try again.";
    }
    return false;
}