function setup(){
   
   createCanvas(windowWidth,windowHeight);
   var grid = [
   [rect(100,100,50,50),
   rect(100,150,50,50),
   rect(100,200,50,50),
   rect(100,250,50,50),],
   // ^ column 1
   [rect(150,100,50,50),
   rect(150,150,50,50),
   rect(150,200,50,50),
   rect(150,250,50,50),],
   // ^ column 2
     [rect(200,100,50,50),
   rect(200,150,50,50),
   rect(200,200,50,50),
   rect(200,250,50,50),],
   //^ column 3
   [rect(250,100,50,50),
   rect(250,150,50,50),
   rect(250,200,50,50),
   rect(250,250,50,50),]]
   // column
   
var battleshipplacement = random(grid[random])
console.log( battleshipplacement)

function mouseCLicked() {
   if  ( battleshipplacement.mouseCLicked === battleshipplacement)
   {
alert("You sunk the ship!")
   }
   else{
       alert("Try again!")
   }
}


}
