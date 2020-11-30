//Exercise 3 - 30/09/2020
let numOfSegments;
let stepAngle;
let radius = 100;

function setup() {
  createCanvas(500, 500);
  background(255);
  // colorMode(MODE, range for the hue/red, range for the saturation/green, range for the brightness/blue)
  colorMode(HSB, 360, 100, 100);
  noStroke();
  angleMode(DEGREES);
}

function draw() {

  //mouse interactivity
  numOfSegments = map(mouseX,0,width,10,40);
  stepAngle = 360/numOfSegments;
  push();
  translate(250,250);
  // rotate(45);
  beginShape(TRIANGLE_FAN);
  vertex(0, 0);
  for (let i = 0; i <= 360; i += stepAngle) {
    let vx = radius * sin(i);
    let vy = radius * cos(i);
    fill(i, 100, 100);
    vertex(vx, vy);
  }
  endShape();
  pop();
}


//save canvas as an image function
function keyPressed() {
  if (key == 's' || key == 'S') {
    //saves canvas as an image - jpg or png
    // saveCanvas('image','png');
    saveCanvas(gd.timestamp(), 'png');
  }
}
