//Sets up the canvas, background, and static text
var inp; 
var points = 0


function setup(){
   createCanvas(windowWidth, windowHeight);
   background('purple');
 inp = createInput();
var width = 500
var height = 100
inp.position(width, height);
      background('purple');
       fill('white');
       text('Please type the sentence below: ', width/10, height/5, width/2, height/4);
       text('Current Points: ' + x, width, height/1.5);
       text ("All Star COde", width, height/3);
         
}


//Array for the sentences
var strings = ["I have failed!", "All Star Code", "Success is key", "Ball is life"];
var answer = ("Pokemon")

//Will be used for score
var x = 0;

//Main function that runs the program

function keyTyped(){
   
       if (keyCode === ENTER){
 if (inp.value().trim() === answer.trim()) {
               points+=10;
               alert("You win! You have"+points);
           }else if(inp.value().trim() !== answer.trim()) {
               points-=10;                
               fill('white');
      alert('You need to work on your typing!');
           }
       }
   }




