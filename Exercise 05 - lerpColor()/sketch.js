//Exercise 05  -- lerpColor()

let numOfSegments = 12;
let stepAngle = 360 / numOfSegments;
let radius = 100;

function setup() {
  createCanvas(500, 500);
  background(255);
  // colorMode(MODE, range for the hue/red, range for the saturation/green, range for the brightness/blue)
  colorMode(HSB, 360, 100, 100);
  noStroke();
  // noLoop();
  angleMode(DEGREES); // Change the mode to DEGREES

}

function draw() {
  push();
  beginShape(TRIANGLE_FAN);
  translate(250, 250);
  vertex(0, 0);
  for (let i = 0; i <= 360; i += stepAngle) {
    let vx = radius * sin(i);
    let vy = radius * cos(i);
    fill(i, 100, 100);
    vertex(vx, vy);
  }
  endShape();
  pop();

  for (let a = 0; a < 10; a++) {
    let startColor = color(255, 100, 100);
    let endColor = color(170, 100, 100);
    let col = lerpColor(startColor, endColor, a / 10);
    fill(col);
    rect(a * 50, 30, 20, 20);
  }

  for (let b = 0; b < 10; b++) {
    let startColor = color(100, 100, 100);
    let endColor = color(40, 100, 100);
    let col = lerpColor(startColor, endColor, b / 10);
    fill(col);
    rect(b * 50, 400, 20, 20);
  }

}

//save canvas as an image function
function keyPressed() {
  if (key == 's' || key == 'S') {
    //saves canvas as an image - jpg or png
    // saveCanvas('image','png');
    saveCanvas(gd.timestamp(), 'png');
  }
}
