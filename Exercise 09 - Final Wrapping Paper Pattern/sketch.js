let cWidth = 800;
let cHeight = 700;
let cnv;
let numCubeWidth = 8;
let numCubeHeight = 8;
let cubeWidth = cWidth / numCubeWidth;
let cubeHeight = cHeight / numCubeHeight;

//big cube
let dWidth_b = cubeWidth;
let dHeight_b = cubeWidth/2;
let bH = cubeHeight;

//small cube
let startPointX = dHeight_b/2;
let startPointY = dHeight_b / 4;

let dWidth_s1 = cubeWidth/2;
let dHeight_s1 = cubeWidth/4;
let sH1 = dHeight_s1 + 15;

let offsetX = cubeWidth;

//color arrays
let HSB01;
let HSB02;
let HSB03;
let bg;
let backgroundColor;
let a, b, c;
//index variables for colors
let i = 1;
let index = 1;

/**
 ** Control variables
 ** change sizes/rotation variables
 **/
let v4 = 0;
let sv4 = 0;
let input = 0;
let sc_input = 0;
let sizeC = 0;
//empty arrays
let outer_cubes = [];
let inner_cubes = [];
let sw = 0;

function setup() {
   cnv = createCanvas(cWidth, cHeight);
  cnv.position(80,100);
  colorMode(HSB);
  rectMode(CENTER);
  noStroke();
  // noLoop();

  // slider01
  slider01 = createSlider(0, 75, 0, 1);
  slider01.position(cWidth + 150, 220);
  slider01.style('width', '100px');

  // slider02
  slider02 = createSlider(0, 50, 0, 1);
  slider02.position(cWidth + 150, 280);
  slider02.style('width', '100px');

  // slider03
  slider03 = createSlider(0, 20, 0, 1);
  slider03.position(cWidth + 150, 160);
  slider03.style('width', '100px');

  //change number of cube in row
  slider04 = createSlider(5, 10, 5, 1);
  slider04.position(cWidth + 150, 615);
  slider04.style('width', '100px');

  //change number of cube in col
  slider05 = createSlider(5, 10, 5, 1);
  slider05.position(cWidth + 150, 685);
  slider05.style('width', '100px');

  //colors array
  HSB01 = [color(150, 18, 22), color(180, 89, 24), color(199,82,49), color(205, 47, 53)];
  HSB02 = [color(189, 100, 40), color(20, 87, 76), color(11, 64, 95), color(39, 78, 100)];
  HSB03 = [color(37, 79, 100), color(29, 19, 97), color(18, 24, 100), color(43, 35, 100)];
  bg = [color(150, 18, 22), color(180, 89, 24), color(199,82,49), color(205, 47, 53), color(189, 100, 40), color(20, 87, 76), color(11, 64, 95), color(39, 78, 100), color(37, 79, 100), color(29, 19, 97), color(18, 24, 100), color(43, 35, 100)];

  //set colours with 0 index
  a = HSB01[index];
  b = HSB02[index];
  c = HSB03[index];
  backgroundColor = bg[i];

  numCubeWidth = slider01.value();
  //create outer cubes
  for (let j = 0; j < numCubeHeight + 1; j++) {
    for (let i = 0; i < numCubeWidth + 1; i++) {
      outer_cubes.push(new OuterCube(i, j));
    }
  }

  //create inner cubes
  for (let j = 0; j < numCubeHeight + 1; j++) {
    for (let i = 0; i < numCubeWidth + 1; i++) {
      inner_cubes.push(new InnerCube(i, j));
    }
  }
}

function createCubes(){
  //empty arrays
  outer_cubes = [];
  inner_cubes = [];

  cubeWidth = cWidth / numCubeWidth;
  cubeHeight = cHeight / numCubeHeight;
  offsetX = cubeWidth/2;


  //create outer cubes
  for (let j = 0; j < numCubeHeight + 1; j++) {
    for (let i = 0; i < numCubeWidth + 1; i++) {
      outer_cubes.push(new OuterCube(i, j));
    }
  }

  //create inner cubes
  for (let j = 0; j < numCubeHeight + 1; j++) {
    for (let i = 0; i < numCubeWidth + 1; i++) {
      inner_cubes.push(new InnerCube(i, j));
    }
  }
}

function draw() {
  randomSeed(10);
  background(backgroundColor);

  numCubeWidth = slider04.value();
  numCubeHeight = slider05.value();

  createCubes();

  //big cube
  dWidth_b = cubeWidth;
  dHeight_b = cubeWidth/2;
  bH = dHeight_b + 30;

  dWidth_b1 = cubeWidth;
  dHeight_b1 = cubeWidth/2;
  bH1 = dHeight_b + 30;

   dWidth_s1 = cubeWidth/2;
   dHeight_s1 = cubeWidth/4;
   sH1 = dHeight_s1 + 30;

   startPointX = dHeight_b/2;
   startPointY = dHeight_b/4;

  //change angle of cubes
  v4 = slider01.value();
  sv4 = slider02.value();

  //big cubes values
  dWidth_b1 = map(input, 0, cWidth, 0, cubeWidth);
  dHeight_b1 = map(input, 0, cWidth, 0, cubeWidth/2);
  bH1 = map(input, 0, cWidth, 0, dHeight_b1+ 15);

  dWidth_b = map(input, 0, cWidth, cubeWidth, 0);
  dHeight_b = map(input, 0, cWidth, cubeWidth/2, 0);
  bH = map(input, 0, cWidth, dHeight_b + 15, 0);

  //control size of inner cube
  sizeC = slider03.value();

  //display big cubes
  push();
  for (let i = 0; i < outer_cubes.length; i++) {
    outer_cubes[i].render();
  }
  pop();

  // display small cubes
  push();
  for (let i = 0; i < inner_cubes.length; i++) {
    inner_cubes[i].render();
  }
  pop();

  displayButton();
}


//generate cube colors
function generateColor() {
  a = HSB01[index];
  b = HSB02[index];
  c = HSB03[index];
  index++;
  if (index > HSB01.length-1) {
    index = 0;
  }
}

//generate background colors
function generateBGColor() {
  backgroundColor = bg[i];
  i++;
  if (i > bg.length - 1) {
    i = 0;
  }
}

/*
** change map input value
** if value = 0; changes the size of the other outer cubes to 0
** therefore, hiding the other outer cubes
** if value = cWidth; changes the size of the other outer cubes to original size
** therefore, displaying the other outer cubes
*/
function generateOuterPattern() {
  if (input == 0) {
    input = cWidth;
  } else {
    input = 0;
  }
}

/*
** change map input value
** if value = 0; changes the size of the other inner cubes to 0
** therefore, hiding the other inner cubes
** if value = cWidth; changes the size of the other inner cubes to original size
** therefore, displaying the other inner cubes
*/
function generateInnerPattern() {
  if (sc_input == 0) {
    sc_input = cWidth;
  } else {
    sc_input = 0;
  }
}

/*
**  Control buttons for the application
*/
function displayButton() {

  let msg03 = createP('Resize inner cube');
  msg03.position(cWidth + 150, 120);
  msg03.style('font-family','Poppins');
  msg03.style('font-size','14px');

  let msg = createP('Change angle of outer cube');
  msg.position(cWidth + 150,180);
  msg.style('font-family','Poppins');
  msg.style('font-size','14px');

  let msg02 = createP('Change angle of inner cube');
  msg02.position(cWidth + 150,240);
  msg02.style('font-family','Poppins');
  msg02.style('font-size','14px');

  let msg4 = createP('Change number of cubes in row');
  msg4.position(cWidth + 150,580);
  msg4.style('font-family','Poppins');
  msg4.style('font-size','14px');

  let msg05 = createP('Change number of cubes in column');
  msg05.position(cWidth + 150,650);
  msg05.style('font-family','Poppins');
  msg05.style('font-size','14px');

  bcPattern = createButton('Generate outer cube pattern');
  bcPattern.position(cWidth + 150, 350);
  bcPattern.mousePressed(generateOuterPattern);
  bcPattern.style('background-color', color(200, 69, 90));
  bcPattern.style('border-style', 'none');
  bcPattern.style('width', '150px');
  bcPattern.style('height', '50px');

  genColbutton = createButton('Generate Color');
  genColbutton.position(cWidth + 150, 420);
  genColbutton.mousePressed(generateColor);
  genColbutton.style('background-color', color(200, 69, 90));
  genColbutton.style('border-style', 'none');
  genColbutton.style('width', '150px');
  genColbutton.style('height', '50px');

  bgButton = createButton('Generate Background');
  bgButton.position(cWidth + 150, 500);
  bgButton.mousePressed(generateBGColor);
  bgButton.style('background-color', color(200, 69, 90));
  bgButton.style('border-style', 'none');
  bgButton.style('width', '150px');
  bgButton.style('height', '50px');


}

//save canvas as an image function
function keyPressed() {
  if (key == 's' || key == 'S') {
    //saves canvas as an image - jpg or png
    // saveCanvas('image','png');
    saveCanvas(gd.timestamp(), 'png');
  }
}
