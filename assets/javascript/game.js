// create the variables
var wins = 0;
var loses = 0;
var guessesLeft = 10;
var guessesSoFar = [];
var computerGuess = [];

//make an array with all letters available to guess
var computerOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// have the computer generate a random letter
var compGuess = computerOptions[Math.floor(Math.random() * computerOptions.length)];


// create an onclick event that will recognize the letter the user enters

document.onkeyup = function(event) {



    //convert the letter to lowercase, to make sure it matches the computerOptions array
    var computerOptions = event.key.toLowerCase();

    // compare the user entered letters to the computer generated letters

    //if the letters are equal to eachother, add one point to wins
    
    // if the letters are not equal, add a point to loses

    //update the number of guesses left

    //display and update the letters already guessed
};