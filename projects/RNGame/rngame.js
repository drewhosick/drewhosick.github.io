const guessDisplay = document.querySelector('.theGuess');
const theResult = document.querySelector('.result');
const inputGuess = document.querySelector('.inputGuess');
const myBtn = document.querySelector('#myBtn');
const reset = document.querySelector('#reset');

let chosenNumber = Math.round(Math.random() * 100);

myBtn.addEventListener("click", check);
// reset.addEventListener("click", resetPage);

function check()
{
    let guess = Number(inputGuess.value);
    guessDisplay.innerText = guess;
    
    if (chosenNumber == guess) {
        theResult.innerText = "That was right.  It was " + guess + ".";
    } else if (chosenNumber < guess) {
        theResult.innerText = "Too high. Try again.";
    } else {
        theResult.innerText = "Too low. Try again.";
    }
    return false;
}

// function resetPage() {

//     let chosenNumber = Math.round(Math.random() * 100);
//     theResult.innerText = 'Game reset.  New number chosen';
//     theDisplay.innerText = '';
//     return false;
// }



