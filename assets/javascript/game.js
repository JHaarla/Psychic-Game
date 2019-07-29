
// All of our possible letter choices:
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Variables that hold wins, losses, guesses left, & already guessed letters. Wins & losses will increment. Guesses left will decrement.
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var yourGuesses = []; //contents of this array will be pushed in per user choices captured from their guesses.

// Variables that hold references to the places in the HTML. We'll display updated values here.
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeft = document.getElementById("guessesLeft-text");
var guessedLetters = document.getElementById("guessProgress-text");

// Chooses a random letter from the alphabet array and assigns it to compChoice
var compChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

// Logs compChoice to console for testing puroses
console.log(compChoice);

