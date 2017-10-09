/* ISSUES
     - guessesRemain does not reset. (if else analysis)  for loop with break for when/if correct answer is given
    playerGuess should also clear at this point. FIXED: add multiple elses depending on if to effect game play (guessesRemain resets if game win AND if you run out of guesses.)
     - playerGuess does not append... DOM appendChild()? FIXED: .join(', ');
     - cpuLetter does not re-choose a random letter when game is won or lost. FIXED: tell the computer to choose a random letter in the if/else statements.
    I think I'm close here.
    if gameWins is 5 reset game/if gameLosses is 5 reset game both with alerts. 
    Seems to go to 5, require a key event and then alerts. need it to perform the alert before the key event.
    FIXED: it all came down to the order of the if/else statements. 
    alert if key pressed is not in the alphabet array. FIXED: convoluted solution using indexOf that makes sense in most ways, but
    i'd like to master this logic.
*/

//var for all letters in the alphabet

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//var for wins, losses, remaining guesses

var gameWins = 0;
var gameLosses = 0;
var guessesRemain = 10;
var guessedLetters = [];
var guess = null;


/*var for computer letter choice 
choose a random letter from the length*/

var letterGetter = function() {
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}

var cpuLetter = letterGetter()
//show what letter was chosen by computer in console
console.log(cpuLetter);

//player guesses by pressing a key - onkeyup
document.onkeyup = function(event) {

    var guess = String.fromCharCode(event.keyCode).toLowerCase();

    if (guessedLetters.indexOf(guess) < 0 && alphabet.indexOf(guess) >= 0) {
        guessedLetters[guessedLetters.length] = guess;
        // if it is a new letter then decrease remaining guesses by 1
        guessesRemain--;
    } else {
        alert("Your powers are disappointing. Choose a letter and choose one you haven't chosen.")

    }

    //apply game logic ---found out order of operations is very important here. wins and losses would not work if they were placed before guess logic.

    if (guess === cpuLetter) {
        gameWins++;
        guessesRemain = 10;
        guessedLetters = [];
        cpuLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log(cpuLetter);

    }

    if (guessesRemain === 0) {
        gameLosses++;
        guessesRemain = 10;
        guessedLetters = [];
        cpuLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log(cpuLetter);
    }

    if (gameWins === 5) {
        alert("You Win! My powers have made your success possible.");
        gameWins = 0;
        gameLosses = 0;
        guessesRemain = 10;
        guessedLetters = [];
        cpuLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log(cpuLetter);

    }

    if (gameLosses === 5) {
        alert("Unfortunate. Try again, if you must."),
            gameWins = 0;
        gameLosses = 0;
        guessesRemain = 10;
        guessedLetters = [];
        cpuLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log(cpuLetter);

    }

    //getElementbyID + innerHTML for html to show guesses/wins/losses/remainder


    document.getElementById('gameWins').innerHTML = gameWins;

    document.getElementById('gameLosses').innerHTML = gameLosses;

    document.getElementById('guessesRemain').innerHTML = guessesRemain;

    document.getElementById('playerGuess').innerHTML = guessedLetters.join(', ');

};