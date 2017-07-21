var x = 20
var y = 30
var HP = 100


var a = 600
var b = 50
var oHP = 100


function setup(){
    createCanvas(windowWidth,windowHeight);
    textSize(20);
    button = createButton ("Attack Opponent");
    button.position(20,150);
    button.mousePressed(fight)
}
function fight (){
    alert("fight")

}
function draw(){
    background(255, 204, 0);
    if (oHP > 0) {
        
        //you
        fill(204, 102, 0)
        rect(x, y, 100, 100);
        if (x < 280) {
            x = x + 1
        } else {
            x = 20
        }

        //opponent
        fill(50, 55, 100)
        ellipse(a, b, 55, 55);
        if (a > 350) {
            a = a - 1
        } else {
            a = 600
        }

        if (x == 279){
            HP = HP + 10
            oHP = oHP - 10
        }

        var score = "rectangle has "+ HP 
        text(score, 30,200)
        var Oscore = "ellipse has "+ oHP
        text(Oscore, 40,350)
   
    } else{
        text("game over! rectangle wins!",100,100)
    }
}




