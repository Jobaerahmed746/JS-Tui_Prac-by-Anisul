//2D Array
// Create a function called highestRunScrorer that will
// Receive a 2d array called playersInfo
// Based on highest score, return the name of the player

/*function highestRunScrorer(playersInfo){
    
    var highestScrorer = playersInfo[0][0];
    var highestScrore = playersInfo[0][1];

    for(var x=1; x<playersInfo.length; x++){

        if(highestScrore < playersInfo[x][1]){
            highestScrore = playersInfo[x][1];
            highestScrorer = playersInfo[x][0];
        }
    }

    return highestScrorer;
}

var playersInfo =[
    ["Jobaer", 78],
    ["Hamim", 67],
    ["Salin", 79],
    ["Riad", 45],

];

var name = highestRunScrorer(playersInfo);
console.log(name);*/

function highestRunScrorer(playersInfo){

    var highestScrorer= playersInfo[0][0];
    var highestScrore= playersInfo[0][1];

    for(x=1; x<playersInfo.length; x++){

        if(highestScrore<playersInfo[x][1]){
            highestScrore = playersInfo[x][1];
            highestScrorer= playersInfo[x][0]
        }
    }
    return highestScrorer;
}

var playersInfo= [
    ["joba",123],
    ["rahul",98],
    ["rahu",76],
    ["rah",89],
    
];

var name = highestRunScrorer(playersInfo);
console.log(name);