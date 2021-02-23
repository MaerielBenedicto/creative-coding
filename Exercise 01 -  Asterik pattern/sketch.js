//Exercise 01

let numOfSegments;
let stepAngle;
let radius;

function setup() {
  createCanvas(500, 500);
  colorMode(HSB, 360, 100,100);
  background(255);
  // noLoop();
}

function draw() {
  background(255);
  numOfSegments = map(mouseX, 0, height, 12, 36, true);
  stepAngle = TWO_PI/numOfSegments;
  radius = map(mouseX, 0, width, -200, 200);

  push();
  beginShape();
  translate(width / 2, height / 2);
  for (let i = 0; i <= TWO_PI; i += stepAngle) {

    let col01 = map(mouseX, 0, width, 0, 360 );
    let col02 = map(mouseY, 0, width, 0, 360 );

    let startColor = color(col01, 100, 100);
    let endColor = color(col02, 100, 100);
    let col = lerpColor(startColor, endColor, i / height);

    let vx = (radius * sin(i));
    let vy = (radius * cos(i));
    strokeWeight(map(mouseY, 0, height, 1, 10,true));
    stroke(col);
    line(0, 0, vx, vy);
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
