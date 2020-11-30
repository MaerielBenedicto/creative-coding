//Exercise 02
let rects = [];
let numRect = 20;
let rSize;


function setup() {
  createCanvas(700, 700);
  // colorMode(RGB, numRect, numRect, numRect);
  colorMode(HSB);

  background(255);
  // noLoop();
  rSize =  width/numRect;
  for (let i = 0; i < numRect; i++) {
    for (let j = 0; j < numRect; j++) {
      rects.push(new Rectangle(i, j));
    }
  }
}

function draw() {
  background(0);

  rectMode(CENTER);
  push();

  for (let i = 0; i < rects.length; i++) {
    push();
    rects[i].render();
  }
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
