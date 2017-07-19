// Just cALLED ONCE AND DONE
var x = 0;
var y = 10;
function setup () {
    createCanvas(windowWidth,windowHeight);
    background("purple");
    ellipse(0,o,200,200)
}

// draw runs over and over again
function draw () {
    background("purple");
    fill(200,120,3)
    ellipse(x,0,200)
x = x + 10;
y = y + 10;
if (x > width) {
x = 0;


    }
}

