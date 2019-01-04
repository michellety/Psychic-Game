// create the variables
var wins = 0,
    loses = 0,
    guessesLeft = 10,
    guessesSoFar = [],
    computerGuess = [];

//make an array with all letters available to guess
var computerOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


//push the generated letter into the computerGuess array
computerGuess.push(compGuess);



document.onkeyup = function(event) {
    // have the computer generate a random letter
    var compGuess = computerOptions[Math.floor(Math.random() * computerOptions.length)];

    // create an onclick event that will recognize the letter the user enters
    //create a variable to store the user entered letter
    var userGuess = event.key;
    // compare the user entered letters to the computer generated letters

    //if the letters are equal to eachother, add one point to wins
    
    // if the letters are not equal, add a point to loses

    //update the number of guesses left

    //display and update the letters already guessed
};