var player1 = ["rock", "paper", "scissor"]
var computer = ["rock", "paper", "scisso"]

function rock(){
    $("body").append("<p><center> You selected rock. Good luck! </center></p>")
}

function updateDB(){
    var name = $("#name").val();
    var message = $("#message").val();
    console.log(name + " welcome " + message);
}

/* var value = {
    "NAME": name,
    "MESSAGE": message,
} */



var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();

if (player1 === "paper") {
    if (computer === "rock") {
        return "Player 1 wins";
    }
    else {
        if (computer === "")
    }
}




/*if (choice1 === "paper") {
    if (choice2 === "rock") {
        return "paper wins";
    } 
    else {
        if (choice2 === "scissors") {
            return "scissors wins";
        }
    }
    if (choice1 === "scissors") {
        if (choice2 === "rock") {
            return "rock wins";
        } else {
            if (choice2 === "paper") {
                return "scissors wins";
            }
        }
    }
} 
