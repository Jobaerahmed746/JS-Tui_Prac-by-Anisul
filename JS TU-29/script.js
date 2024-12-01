//1D Array
// Create a funtion called highestScore that will
// Receive a 1D array called score
//return the highest score

function highestScore(scores){

    var max = scores[0];

    for( var x=1; x<scores.length; x++){
        if(max<scores[x]){
            max = scores[x];
        }
    }
    return max;

}

var scores = [23,34,56,67,68];
var maxscores = highestScore(scores);
console.log(maxscores);
