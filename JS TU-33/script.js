//Guessing Game 
// Guess a number from a 1 to 5
// Genarate a random number between 1 to 5
// If the guess numher matches random number; then show messeage  won else lost
// Run the game for 5 times
// show the numbers of wons and losts

var numOfWon = 0;
var numOfLost = 0;


for(var i=0; i<=5 ; i++){
    var guessNumber = parseInt(prompt("Enter  a number from 1 to 5: "));

    var randomNumber = Math.floor(Math.random()*5) + 1;

    if(guessNumber == randomNumber){
    console.log("You have won");
    numOfWon++;
    }
    else{
    console.log("You have lost. Random number was " + randomNumber);
    numOfLost++;
    }
}
document.write("Total Number of won = " + numOfWon + "<br>" );
document.write("Total Number of Lost = " + numOfLost + "<br>");