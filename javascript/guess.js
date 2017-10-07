/* ISSUES
	guessesRemain does not reset. (if else analysis)  for loop with break for when/if correct answer is given
	playerGuess should also clear at this point. FIXED: add multiple elses depending on if to effect game play (guessesRemain resets if game win AND if you run out of guesses.)
	playerGuess does not append... DOM appendChild()? FIXED: .join(', ');
	I think I'm close here.
    TWO more issues: 
    cpuLetter does not re-choose a random letter when game is won or lost.
    alert if key pressed is not in the alphabet array.
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

    if (guessedLetters !== alphabet) {
        alert("Invalid Entry. Try a letter.")
    }
    
    // if (userInput === questionsArray[questionIndex][1]) {
    
    //         alert("Correct!");
    //         score++;
    //         updateScore();
    //       }

    //getElementbyID + innerHTML for html to show guesses/wins/losses/remainder


    document.getElementById('gameWins').innerHTML = gameWins;

    document.getElementById('gameLosses').innerHTML = gameLosses;

    document.getElementById('guessesRemain').innerHTML = guessesRemain;

    document.getElementById('playerGuess').innerHTML = guessedLetters.join(', ');

};