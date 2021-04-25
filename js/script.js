
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

// Array will contain the letters the player guesses.
const guessedLetters = [];

//Update the paragraph's innerText for the "words-in-progress" element
const progress = function (word) {
    const placeHolders = [];
    for (const letter of word) {
        console.log(letter);
        placeHolders.push("●")
    }
    wordInProgress.innerText = placeHolders.join("");
};
progress(word);

// Add event listener for the button
guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    // Empty the text of the message element.
    message.innerText = "";
    const guess = inputGuess.value;
    const rightGuess = validateInput(guess);
//  console.log(rightGuess);
    if (rightGuess) {
        // We have a letter so guess!
        makeGuess(guess);
    }
    inputGuess.value = "";
    

});

// Validate player's input.
const validateInput = function (input) {
// Ensure the player inputs a letter.    
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
        //Did you leave input empty?
        message.innerText = "Please type one letter.";
    } else if (input.length > 1) {
        // Did you type more than one letter?
        message.innerText = "Please only enter one letter.";
    } else if (!input.match(acceptedLetter)) {
        // Please only type a valid letter (symbols numbers not accepted).
        message.innerText = "Please only type a letter from A to Z. No symbols or numbers.";
    } else {
        // They entered a letter!
        return input;
    }
    };
    
    
    const makeGuess = function (guess) {
        guess = guess.toUpperCase();
        console.log(guessedLetters);
        if (guessedLetters.includes(guess)) {
            message.innerText = "You've already tried this letter! Pick a new one.";
        } else { 
            guessedLetters.push(guess);
            console.log(guessedLetters);
        }
    };


