let cWidth = 1400;
let cHeight = 1300;
let numCubeWidth = 7;
let numCubeHeight = 10;
let cubeWidth = cWidth / numCubeWidth;
let cubeHeight = cHeight / numCubeHeight;

let offsetX = 100;
let offsetY = 50;

//big cube
let dWidth_b = 200;
let dHeight_b = 100;
let bH = 130;

let startPointX = 50;
let startPointY = 25;

//small cube
let dWidth_s = 100;
let dHeight_s = 50;
let sH = 95;

let v4 = 0;
let v5 = 0;
let v6 = 0;
let v7 = 0;


let sv4 = 0;
let sv5 = 0;
let sv6 = 0;
let sv7 = 0;

let t = 25;
let y = 15;
let HSB01;
// 49, 4, 99
// let HSB02 = [{120, 12, 33}, {89, 32, 62}, {49, 4, 99}, {25, 70, 100}];
// let HSB03 = [{180, 89, 24}, {20, 87, 76},{344, 40, 97},{29, 19, 97}];

let slider01;
let slider02;

function setup() {
  createCanvas(500, 500);
  colorMode(HSB);
  // colorMode(RGB);
  rectMode(CENTER);
  // noStroke();

  // slider01
  slider01 = createSlider(0, 100, 0, 5);
  slider01.position(500, 10);
  slider01.style('width', '100px');

  // slider01
  slider02 = createSlider(0, 50, 0, 5);
  slider02.position(500, 30);
  slider02.style('width', '100px');

  HSB01 = [color(150,18,22),color(189,100,40),color(47,4,95),color(37, 79, 100)];

}

function draw() {
  background(255);
  v4 = slider01.value();
  b = slider02.value();


  t = map(mouseX, 0, cWidth, 45, -45);
  y = map(mouseX, 0, cWidth, -30, 20);

  push();
  translate(width / 2, height / 2);

  //big cube
  // right side
  beginShape();
  // strokeWeight(10);
  fill(HSB01[0]);
  vertex(dWidth_b / 2 + v6, -dHeight_b / 2 + v4 + v6);
  vertex(dWidth_b - v6, 0 + v6);
  vertex(dWidth_b - v6, 0 + v6 + bH);
  vertex(dWidth_b / 2 + v6, -dHeight_b / 2 + v4 + v6 + bH);
  endShape();

  //top
  beginShape();
  fill(HSB01[1]);
  vertex(0, 0 - v7);
  vertex(dWidth_b / 2 + v6, -dHeight_b / 2 + v4 + v6);
  vertex(dWidth_b - v6, 0 + v6);
  vertex(dWidth_b / 2 - v5, dHeight_b / 2 - v4);
  endShape();

  //bottom
  beginShape();
  fill(HSB01[1]);
  vertex(0, bH - v7);
  vertex(dWidth_b / 2 + v6, -dHeight_b / 2 + v4 + v6 + bH);
  vertex(dWidth_b - v6, 0 + v6 + bH);
  vertex(dWidth_b / 2 - v5, dHeight_b / 2 - v4 + bH);
  endShape();


  // left side
  beginShape();
  fill(HSB01[3]);
  vertex(0, 0 - v7);
  vertex(0, bH - v7);
  vertex(dWidth_b / 2 - v5, bH + dHeight_b / 2 - v4);
  vertex(dWidth_b / 2 - v5, dHeight_b / 2 - v4);
  endShape();


  //right side
  beginShape();
  fill(HSB01[0]);
  vertex(dWidth_b / 2 - v5, dHeight_b / 2 - v4);
  vertex(dWidth_b - v6, 0 + v6);
  vertex(dWidth_b - v6, bH + v6);
  vertex(dWidth_b / 2 - v5, bH + dHeight_b / 2 - v4);
  endShape();
  //
  //
  //
  // // small cube
  //
  // //top
  beginShape();
  fill(HSB01[0]);
  vertex(startPointX - t - b, startPointY - sv7 - y -b/2);
  vertex(startPointX + dWidth_s / 2 + sv6 - t, 0 + sv4 + sv6 - y - b);
  vertex(startPointX + dWidth_s - sv6 - t + b, dHeight_s / 2 + sv6 - y - b/2);
  vertex(startPointX + dWidth_s / 2 - sv5 - t, startPointY + dHeight_s / 2 - sv4 - y) ;
  endShape();

  //bottom
  beginShape();
  fill(HSB01[0]);
  vertex(startPointX - t - b, sH - sv7 - y + b/2);
  vertex(startPointX + dWidth_s / 2 + sv6 - t, sH - startPointY + sv4 + sv6 - y + b/2);
  vertex(startPointX + dWidth_s - sv6 - t + b, sH + sv6 - y + b/2);
  vertex(startPointX + dWidth_s / 2 - sv5 - t, sH + dHeight_s / 2 - sv4 - y + b);
  endShape();
  //
  //
  // // left
  beginShape();
  fill(HSB01[1]);
  vertex(startPointX -t - b, startPointY - sv7 -y -b/2);
  vertex(startPointX -t -b, sH - sv7 -y + b/2);
  vertex(startPointX + dWidth_s / 2 - sv5 -t, sH + dHeight_s / 2 - sv4 -y + b);
  vertex(startPointX + dWidth_s / 2 - sv5 -t, startPointY + dHeight_s / 2 - sv4 -y);
  endShape();
  //
  // //right
  beginShape();
  fill(HSB01[3]);
  vertex(startPointX + dWidth_s / 2 - sv5 -t, startPointY + dHeight_s / 2 - sv4 -y);
  vertex(startPointX + dWidth_s - sv6 -t + b, startPointY + sv6 -y -b/2);
  vertex(startPointX + dWidth_s - sv6 -t + b, sH + sv6 -y + b/2);
  vertex(startPointX + dWidth_s / 2 - sv5 -t, sH + dHeight_s / 2 - sv4 -y + b);
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
