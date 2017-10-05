/* ISSUES
	guessesRemain does not reset. for loop with break for when/if correct answer is given
	playerGuess should also clear at this point.
	playerGuess does not append... DOM appendChild()?
	I think I'm close here.
*/





//var for all letters in the alphabet

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


//var for wins, losses, remaining guesses


var gameWins = 0;
var gameLosses = 0;
var guessesRemain = 10;
var guessedElem = [];

//var for computer letter choice 
//define length of alphabet
var alphbetLength = alphabet.length;

//choose a random letter from the length
var cpuLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

//show what letter was chosen by computer in console
console.log(cpuLetter);

//player guesses by pressing a key - onkeyup
document.onkeyup = function(event) {

    //determine which key was chosen
    var playerGuess = event.key;
    guessedElem.innerHTML = playerGuess;



    //apply game rules
    if (playerGuess === cpuLetter) {
        gameWins++;

    } else {
        guessesRemain--;
    }

    if (guessesRemain === 0) {
        gameLosses++;
    }



    //getElementbyID + innerHTML for html to show guesses/wins/losses/remainder

    // function event() {}

    // document.getElementById('playerGuess').innerHTML = playerGuess;


    document.getElementById('gameWins').innerHTML = gameWins;

    document.getElementById('gameLosses').innerHTML = gameLosses;

    document.getElementById('guessesRemain').innerHTML = guessesRemain;

    document.getElementById('guessedLetters').innerHTML = guessesSoFar;


    // var alphbetLength = alphabet.length;

    // for (i = 0; i < alphabet.length; i++) {

};