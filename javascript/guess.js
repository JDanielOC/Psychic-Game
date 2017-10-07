/* ISSUES
	guessesRemain does not reset. (if else analysis)  for loop with break for when/if correct answer is given
	playerGuess should also clear at this point. FIXED: add multiple elses depending on if to effect game play (guessesRemain resets if game win AND if you run out of guesses.)
	playerGuess does not append... DOM appendChild()? FIXED: .join(', ');
    cpuLetter does not re-choose a random letter when game is won or lost. FIXED.
	I think I'm close here.
    One more issue: 
    alert if key pressed is not in the alphabet array.
    And another:
    if gameWins is 5 reset game/if gameLosses is 5 reset game both with alerts. Seems to go to 5, require a key event and then alerts. need it to perform the alert before the key event.
*/

//var for all letters in the alphabet

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


//var for wins, losses, remaining guesses


var gameWins = 0;
var gameLosses = 0;
var guessesRemain = 10;
var guessedLetters = [];

/*var for computer letter choice 
choose a random letter from the length*/
var alphabetLength = alphabet.length;

var cpuLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

//show what letter was chosen by computer in console
console.log(cpuLetter);

//player guesses by pressing a key - onkeyup
document.onkeyup = function(event) {

    //determine which key was chosen
    var guess = event.key;
    //guessedLetters.innerHTML = guess;
        guessedLetters.push(guess);

    //apply game rules

    // if (gameWins === 5) {
    //     alert("You Win! Success."),
    //     gameWins = 0,
    //     gameLosses = 0,
    //     guessesRemain = 10, 
    //     guessedLetters = [], 
    //     cpuLetter = alphabet[Math.floor(Math.random() * alphabet.length)]
    //     console.log(cpuLetter);

    // }

    // if (gameLosses === 5) {
    //     alert("CPU Wins! Agony."),
    //     gameWins = 0,
    //     gameLosses = 0,
    //     guessesRemain = 10, 
    //     guessedLetters = [], 
    //     cpuLetter = alphabet[Math.floor(Math.random() * alphabet.length)]
    //     console.log(cpuLetter);

    // }

    if (guess === cpuLetter) {
        gameWins++, 
        guessesRemain = 10, 
        guessedLetters = [], 
        cpuLetter = alphabet[Math.floor(Math.random() * alphabet.length)]
        console.log(cpuLetter);

    } else {
        guessesRemain--;
    }

    if (guessesRemain === 0) {
        gameLosses++, 
        guessesRemain = 10, 
        guessedLetters = [], 
        cpuLetter = alphabet[Math.floor(Math.random() * alphabet.length)]
        console.log(cpuLetter);
    }

    // if (guess !== alphabet[i]) {
    //     alert("Invalid Entry. Try a letter.")
    // }
    


    //getElementbyID + innerHTML for html to show guesses/wins/losses/remainder


    document.getElementById('gameWins').innerHTML = gameWins;

    document.getElementById('gameLosses').innerHTML = gameLosses;

    document.getElementById('guessesRemain').innerHTML = guessesRemain;

    document.getElementById('playerGuess').innerHTML = guessedLetters.join(', ');

};