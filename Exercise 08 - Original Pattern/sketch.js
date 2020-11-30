let cWidth = 1400;
let cHeight = 900;
let numCubeWidth = 7;
let numCubeHeight = 5;
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

let HSB01;

function setup() {
  createCanvas(cWidth, cHeight);
  colorMode(HSB);
  // colorMode(RGB);
  noStroke();
  noLoop();

  HSB01 = [color(150,18,22),color(189,100,40),color(47,4,95),color(37, 79, 100)];
}

function draw() {
  background(255);
  for (let j = 0; j < cHeight; j++) {
    for (let i = 0; i < cWidth; i++) {
      let transValueX;
      let transValueY;

      push();
      if(j%2 == 0){
         transValueX = i * cubeWidth - offsetX;
         transValueY = j * cubeHeight;
      } else {
         transValueX = i * cubeWidth;
         transValueY = j * cubeHeight;
      }
      translate(transValueX, transValueY);

      //big cube

      //top
      beginShape();
      fill(HSB01[1]);
      vertex(0, 0);
      vertex(dWidth_b / 2 , -dHeight_b / 2 );
      vertex(dWidth_b , 0);
      vertex(dWidth_b / 2 , dHeight_b / 2 );
      endShape();

      // left side
      beginShape();
      fill(HSB01[3]);
      vertex(0, 0 );
      vertex(0, bH );
      vertex(dWidth_b / 2 , bH + dHeight_b / 2 );
      vertex(dWidth_b / 2 , dHeight_b / 2 );
      endShape();

      //right side
      beginShape();
      fill(HSB01[0]);
      vertex(dWidth_b / 2, dHeight_b / 2);
      vertex(dWidth_b , 0);
      vertex(dWidth_b, bH);
      vertex(dWidth_b / 2 , bH + dHeight_b / 2);
      endShape();


      // small cube
      beginShape();
      fill(HSB01[0]);
      vertex(startPointX, startPointY);
      vertex(startPointX + dWidth_s / 2, 0);
      vertex(startPointX + dWidth_s, dHeight_s / 2);
      vertex(startPointX + dWidth_s / 2, startPointY + dHeight_s / 2);
      endShape();

      beginShape();
      fill(HSB01[1]);
      vertex(startPointX, startPointY);
      vertex(startPointX, sH);
      vertex(startPointX + dWidth_s / 2, sH + dHeight_s / 2);
      vertex(startPointX + dWidth_s / 2, startPointY + dHeight_s / 2);
      endShape();

      beginShape();
      fill(HSB01[3]);
      vertex(startPointX + dWidth_s / 2, startPointY + dHeight_s / 2);
      vertex(startPointX + dWidth_s, startPointY);
      vertex(startPointX + dWidth_s, sH);
      vertex(startPointX + dWidth_s / 2, sH + dHeight_s / 2);
      endShape();
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
