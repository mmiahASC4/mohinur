funstion setup() {
    creatCanvas(// Draw a rectangle at location (30, 20) with a width and height of 55.
rect(30, 20, 55, 55);)


// Drag the mouse across the page
// to change its value

var value = 0;
function draw() {
  fill(value);
  rect(25, 25, 50, 50);
}
function mouseDragged() {
  value = value + 5;
  if (value > 255) {
    value = 0;
  }
function mouseDragged() {
  ellipse(mouseX, mouseY, 5, 5);
  // prevent default
  return false;


}

