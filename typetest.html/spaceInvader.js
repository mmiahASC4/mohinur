var x;
var y;
var alienx;
var alieny;
var xIncrement = -2;

function setup(){
    createCanvas(windowWidth,windowHeight);
    textSize(20);
    var a = 100;
    var b = 100;

x = (width/2);
y = (5/6) * height
alienx = width/2;
    alieny = (1/10)*height;
    
}

function draw() {
  if (keyIsDown(LEFT_ARROW))
    x-=5;

  if (keyIsDown(RIGHT_ARROW))
    x+=5;
 clear();
  fill(255, 0, 0);
  ellipse(x, y, 50, 50);

fill(255,0,0);


    rect(alienx, alieny, 100, 100);
    //alien automatic movement from side to side, if reaches border, goes oopposite way
    alienx += xIncrement;
    if (((alienx+100) >= width) || ((alienx)<=0)){
        xIncrement = xIncrement*(-1)
    }
}






