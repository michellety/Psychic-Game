// create the variables
var wins = 0,
    losses = 0,
    guessesLeft = 10,
    guessesSoFar = [],
    computerGuess;

//make an array with all letters available to guess
var computerOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// have the computer generate and store a random letter
var compGuess = computerOptions[Math.floor(Math.random() * computerOptions.length)];
//set the random letter to the variable computerGuess
computerGuess = compGuess;
//test that the computer stored a letter
console.log(computerGuess);

document.onkeyup = function(event) {
    // create an onclick event that will recognize the letter the user enters
    //create a variable to store the user entered letter
    var userGuess = event.key;

    //test
    console.log(userGuess);

    // compare the user entered letters to the computer generated letters
    //if the letters are equal to eachother, add one point to wins
    if (userGuess === computerGuess){
        wins++;
        //reset the game to play again
        guessesLeft = 10;
        guessesSoFar = [];
        //computer chooses and stores a new random letter
        var compGuess = computerOptions[Math.floor(Math.random() * computerOptions.length)];
        computerGuess = compGuess;
        //test 
        console.log(computerGuess);
    }
    
    //if the letters are not equal
    else {
        //add the user guessed letter to the array for guesses
        guessesSoFar.push(userGuess);
        //subtract one from guesses left
        guessesLeft--;

        // if the letters are not equal after 10 guesses, add a point to losses
        //update the number of guesses left
        if (guessesLeft === 0) {
            losses++;
            //reset the game to play again
            guessesLeft = 10;
            guessesSoFar = [];
            // have the computer generate and store a random letter
            var compGuess = computerOptions[Math.floor(Math.random() * computerOptions.length)];
            computerGuess = compGuess;
            //test 
            console.log(computerGuess);
        }
    }
  
    //display the results to the browser
    var results = 
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses Left: " + guessesLeft + "</p>" +
    "<p>Your Guesses so far: " + guessesSoFar + "</p>";
    //set the inner HTML contents of the ID game to the results string
    document.getElementById("game").innerHTML = results;


};