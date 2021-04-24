
//unordered list where the player's guessed letters will be
const guesses = document.querySelector(".guessed-letters");

//the button with the text "Guess!" in it.
const guessButton = document.querySelector(".guess");

//the text input where the player will guess a letter
const inputGuess = document.querySelector(".letter");

//the empty paragraph where the word in progress will appear
const wordInProgress = document.querySelector(".word-in-progress");

//the paragraph where the remeaining guesses will display
const remainingGuesses = document.querySelector(".remaining");

//the span inside the paragraph where the remaining guesses will display
const remainingGuessesSpan = document.querySelector(".remaining span");

//the empty paragraph where messages will appear when the player guesses a letter
const message = document.querySelector(".message");

//the hidden button that will appear prompting the player to play again
const playAgain = document.querySelector(".play-again");

//Magnolia is starting word to test out the game until you fetch words from a hosted file in a later step
const word = "magnolia";

console.log(word);

const progress = function () {
    wordInProgress.innerText = "●";
}

progress(word);


guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = inputGuess.value;
    console.log(guess); 

})