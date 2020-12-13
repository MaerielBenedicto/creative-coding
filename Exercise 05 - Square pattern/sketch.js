let cWidth = 800;
let cHeight = 500;
let numSquares = 15;
let squareSize = cWidth / numSquares;

function setup() {
  createCanvas(cWidth, cHeight);
  // colorMode(HSB, width, 100, 100);
  colorMode(RGB,numSquares,numSquares,numSquares )
  rectMode(CENTER);
}

function draw() {
  randomSeed(80);

  background(0);
  for (let j = 0; j < numSquares; j++) {
    for (let i = 0; i < numSquares; i++) {
      let transValueX = i * squareSize + squareSize / 2;
      let transValueY = j * squareSize + squareSize / 2;
      push();
      translate(transValueX, transValueY);

      noFill();
      stroke(i, numSquares-j,j);

      let r = map(mouseX, 0, cWidth, -(squareSize/2), (squareSize/2),true);
      let sw = map(mouseY, 0, cWidth, 0, 15,true)
        let randomNum = round(random(0, 1));
        if (randomNum == 0) {
          strokeWeight(sw);
          rect(0,0,squareSize-r, squareSize-r);
          rect(0,0,squareSize/2-r, squareSize/2-r);
          rect(0,0,squareSize/4-r, squareSize/4-r);
        } else {
          strokeWeight(3);
          rect(0,0,squareSize+r, squareSize+r);
          rect(0,0,squareSize/4+r, squareSize/4+r);
          rect(0,0,squareSize/2+r, squareSize/2+r);
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
