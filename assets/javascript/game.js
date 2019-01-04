// create the variables
var wins = 0,
    losses = 0,
    guessesLeft = 10,
    guessesSoFar = [],
    computerGuess = [];

//make an array with all letters available to guess
var computerOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// have the computer generate and store a random letter
var compGuess = computerOptions[Math.floor(Math.random() * computerOptions.length)];
//add the letter to the array
computerGuess.push(compGuess);

document.onkeyup = function(event) {
    // create an onclick event that will recognize the letter the user enters
    //create a variable to store the user entered letter
    var userGuess = event.key;

    // compare the user entered letters to the computer generated letters
    //if the letters are equal to eachother, add one point to wins
    if (userGuess === computerGuess){
        wins++;
    
    }
    
    
    //if the letters are not equal
    else {
        //add the user guessed letter to the array
        guessesSoFar.push(userGuess);
        guessesLeft--;

        // if the letters are not equal after 10 guesses, add a point to loses
        //update the number of guesses left
        if (guessesLeft == 0) {
            losses++;
            
    }

    //display and update the letters already guessed
    //modify the innerHTML
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("guessesSoFar").innerHTML = guessesSoFar;
}


};