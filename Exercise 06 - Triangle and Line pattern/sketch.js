let cWidth = 800;
let cHeight = 800;
let numSquares = 15;
let squareSize = cWidth / numSquares;

function setup() {
  createCanvas(cWidth, cHeight);
  // colorMode(HSB, width, 100, 100);
  colorMode(HSB);
  rectMode(CENTER);
}

function draw() {
  randomSeed(50);

  background(0);

  for (let j = 0; j < numSquares; j++) {
    for (let i = 0; i < numSquares; i++) {
      let transValueX = i * squareSize ;
      let transValueY = j * squareSize;
      push();
      translate(transValueX, transValueY);

      let from = color(215, 165, 218);
      let to = color(75, 205, 245);

      let startColor = color(200, 150, 203);
      let endColor = color(60, 190, 230);

      let col = lerpColor(from, to, (i+j*(numSquares))/width);
      let col2 = lerpColor(startColor, endColor, (i+j*(numSquares))/width);

      let randomNum = round(random(0, 1));
      if (randomNum == 0) {

        beginShape(TRIANGLES);
        stroke(col);
        fill(col);
        vertex(0, 0);
        vertex(0, squareSize);
        vertex(squareSize, 0);
        endShape();

        beginShape(TRIANGLES);
        fill(col2);
        stroke(col2);
        vertex(squareSize, squareSize);
        vertex(0, squareSize);
        vertex(squareSize, 0);
        endShape();
      } else {
        stroke(col);
        fill(col);
        line(0, 0, squareSize, squareSize);
      }
      pop();
    }
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
