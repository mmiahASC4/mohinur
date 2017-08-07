var HP = 100;
var gold = 0;
var orgesDefeated = 0;
var ogres = true;


function displayStats() {
    $('#stats').text('It works!');
}
function attack() {
    alert('You killed an orge.')
}


function setup() {
$('body').append("<h1>Welcome to Ogre Game</h1>");
$('body').append
('<div><h3>Stats</h3><p
id="stats"></p></div>');

$('body').append("<button onclick='attack()'(>Attack</button>");
$('body').('<div id="orge'></div>)



}





//wait until document is ready!
$(document).ready(setup);