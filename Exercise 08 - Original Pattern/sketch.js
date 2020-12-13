let cWidth = 900;
let cHeight = 650;
let numCubeWidth = 6;
let numCubeHeight = 5;
let cubeWidth = cWidth / numCubeWidth;
let cubeHeight = cHeight / numCubeHeight;

let offsetX = cubeWidth/2;

let dWidth_b = cubeWidth;
let dHeight_b = cubeWidth/2;
let bH = dHeight_b + 30;

//small cube
let startPointX = dHeight_b/2;
let startPointY = dHeight_b / 4;

let dWidth_s = cubeWidth/2;
let dHeight_s = cubeWidth/4;
let sH = dHeight_s + 30;

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
  for (let j = 0; j < numCubeHeight + 1; j++) {
    for (let i = 0; i < numCubeWidth + 1; i++) {
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
