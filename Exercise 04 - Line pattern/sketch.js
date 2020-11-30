let cWidth = 1400;
let cHeight = 750;
let numSquares = 50;
let squareSizeW = cWidth / numSquares;
let squareSizeH = cHeight / numSquares;

function setup() {
  createCanvas(cWidth, cHeight);
  // colorMode(HSB, width, 100, 100);
  colorMode(RGB,numSquares,numSquares,numSquares )
  rectMode(CENTER);
}

function draw() {
  randomSeed(50);

  background(0);


  for (let j = 0; j < numSquares; j++) {
    for (let i = 0; i < numSquares; i++) {
      let transValueX = i * squareSizeW + squareSizeW / 2;
      let transValueY = j * squareSizeH + squareSizeH / 2;
      push();
      translate(transValueX, transValueY);
      // let t = atan2(mouseY - transValueY, mouseX - transValueX);

      let startColor = color(60, 100, 100);
      let endColor = color(360, 100, 100);
      // let col = lerpColor(startColor, endColor, (i + (j * numSquares)) / width);
      noFill();

      let d = dist(mouseX, mouseY, i * squareSizeW, j * squareSizeH);
      let sw = map(d, 0, width, 5, 10);
      strokeWeight(sw);
      stroke(i, numSquares-j,j);

      let randomNum = round(random(0, 1));
      if (randomNum == 0) {
        line(0, squareSizeH, squareSizeW, 0);
      } else {
        line(0, 0, squareSizeW, squareSizeH);
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
