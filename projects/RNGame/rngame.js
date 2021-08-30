const guessDisplay = document.querySelector('.theGuess');
const theResult = document.querySelector('.result');
const inputGuess = document.querySelector('.inputGuess');
const myBtn = document.querySelector('#myBtn');
const reset = document.querySelector('#reset');

let chosenNumber = Math.round(Math.random() * 100);

myBtn.addEventListener("click", check);
reset.addEventListener("click", resetPage);
let guesses = 9;

function check()
{
    let guess = Number(inputGuess.value);
    guessDisplay.innerText = guess;
    
    if (chosenNumber == guess && guesses != 0) {
        theResult.innerText = "That was right.  It was " + guess + ".  You had " + guesses + " guesses left.";
    } else if (chosenNumber < guess && guesses > 0) {
        theResult.innerText = "Too high. You have " + guesses + " guesses left.  Try again.";
        guesses --;
    } else if (chosenNumber > guess && guesses > 0) {
        theResult.innerText = "Too low. You have " + guesses + " guesses left.  Try again.";
        guesses --;
    } else {
        theResult.innerText = "Sorry, you're out of guesses.";
    }

    return false;
}

function resetPage() {

    chosenNumber = Math.round(Math.random() * 100);
    theResult.innerText = 'Game reset.  New number chosen';
    theDisplay.innerText = '';
    guesses = 9;
    return false;
}



