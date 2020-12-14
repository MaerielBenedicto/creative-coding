//Exercise 02
let rects = [];
let numRect = 20;
let rSize;

function setup() {
  createCanvas(700, 600);
  // colorMode(RGB, numRect, numRect, numRect);
  colorMode(HSB);

  background(255);
  // noLoop();
}

function draw() {
  background(0);
  rSize = width / numRect;
  for (let i = 0; i < numRect; i++) {
    for (let j = 0; j < numRect; j++) {
      push();
      let transValueX = i * rSize + rSize / 2;
      let transValueY = j * rSize + rSize / 2;

      let startColor = color(215, 165, 218);
      let endColor = color(75, 205, 245);

      translate(transValueX, transValueY);
      let t = atan2(mouseY - transValueY, mouseX - transValueX);
      rotate(t);
      let col = lerpColor(startColor, endColor, (i + j * numRect) / width);
      fill(col);

      noFill();
      stroke(i, 0, numRect - j);
      let d = dist(mouseX, mouseY, transValueX, transValueY);
      let s = map(d, 0, width, 1, 10, true);

      ellipse(0, 0, rSize / 2, rSize / 2);
      noStroke();
      fill(col);
      ellipse(10, 0, rSize / s, rSize / s);
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
