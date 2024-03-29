
// All of our possible letter choices:
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Variables that hold wins, losses, guesses left, & already guessed letters. Wins & losses will increment. Guesses left will decrement.
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var yourGuesses = []; //contents of this array will be pushed in per user choices captured from their guesses.

// Variables that hold references to the places in the HTML. We'll display updated values here.
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var guessedLettersText = document.getElementById("guessProgress-text");

// Chooses a random letter from the alphabet array and assigns it to compChoice
var compChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

// Logs compChoice to console for testing purposes
console.log("comp Random Letter: " + compChoice);

//displays wins & losses
winsText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses: " + losses;

// displays guesses left and already guessed letters
guessesLeftText.textContent = "Remaining guesses: " + guessesLeft;
guessedLettersText.textContent = "You have guessed: " + yourGuesses;

//  
// Defines the reset function to be called later
function reset() {
    guessesLeft = 10;
    guessesLeftText.textContent = "Remaining guesses: " + guessesLeft;
    yourGuesses = [];
    guessedLettersText.textContent = "You have guessed: " + yourGuesses;
    compChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log("new random compChoice: " + compChoice);
};

// defines playAgain variable
var playAgain = true;

// This function is ran when a user presses a key. 
document.onkeyup = function(guess) {
    // sets userGuess to the key pressed
    var userGuess = guess.key;

    // log user keypress to console - for testing
    console.log("User pressed: " + userGuess);

    //pushes user input to yourGuesses array
    yourGuesses.push(userGuess);

    //log yourGuesses to the console - for testing
    console.log("array: " + yourGuesses);

    //displays user's guessed letters
    guessedLettersText.textContent = "You have guessed: " + yourGuesses;

    //logic to determine if player guessed correctly
    if (userGuess === compChoice) {
        wins++;
        winsText.textContent = "Wins: " + wins;
        guessesLeft--;
        guessesLeftText.textContent = "Remaining guesses: " + guessesLeft;
        playAgain = confirm("You've guessed the right letter! Play again?");
        if (playAgain) {
            reset();
        } else { 
            alert("That's too bad... Press 'Alt F4' to quit. Or 'Command Q' for you Mac guys...")
        };

    } else {
        guessesLeftText.textContent = "Remaining guesses: " + (guessesLeft-- - 1);
        console.log(guessesLeft);
    };

    console.log("guesses left: " + guessesLeft);

    if (guessesLeft === 0) {
        lossesText.textContent = "Losses: " + (1 + losses++);
        playAgain = confirm("You ran out of guesses. Play again?");
        if (playAgain) {
            reset();
        } else { 
            alert("That's too bad... Press 'Alt F4' to quit. Or 'Command Q' for you Mac guys...")
        };
    };

};

