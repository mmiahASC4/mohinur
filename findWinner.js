// Declare an array with two cool Nick entries to increase his odds
var people = ["Chris", "Cool Nick", "Will", "Edgar", "Faisal", "Cool Nick"];

function getRandomWinner(index) {
    var randomIndex = Math.random() * index;
    // var randomIndex = Math.random() * index;
    // var result = Math.floor(randomIndex);
    var result = Math.floor(randomIndex);
    return result;
}

// Prints out a random name based to the function 
console.log(people.[getRandomWinner(people.length)])