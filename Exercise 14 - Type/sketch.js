//type
let font;
let fontPath1, fontPath2;
let path1, path2;
let message1 = "Creative Coding";
let message2 = "Maeriel Benedicto";
let pathArray1, pathArray2;
let newArray;

let startVertex = 0;
let endVertex = 0;

// let col;
let match;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  rectMode(CENTER)
  //loading a font
  opentype.load('data/DubaiSummer.otf', function (err, f) {
    if (err) {
      console.log(err);
    } else {
      font = f;
      loop();
    }
  })
}

function draw() {
  if (!font) return
  background('#fbcd8f');

  //shadow effect
  push();
  translate(205, 304);
  let pathArray3 = getPath(message1,0,0,110);
  let match3 = findMatch(message1);
  let shapeColour3 = color('#e48d2f');
  let innerColour3 = color('#e48d2f');
  drawType(pathArray3, match3, shapeColour3,innerColour3);
  pop();

  //string 1
  push();
  translate(200, 300);
  let pathArray = getPath(message1,0,0,110);
  let match1 = findMatch(message1);
  let shapeColour1 = color('#fef8ea');
  let innerColour1 = color('#fbcd8f');
  drawType(pathArray, match1, shapeColour1, innerColour1);
  pop();

  //shadow effect 2
  push();
  translate(205, 404);
  let pathArray4 = getPath(message2,0,0,90);
  let match4 = findMatch(message2);
  let shapeColour4 = color('#e48d2f');
  let innerColour4 = color('#e48d2f');
  drawType(pathArray4, match4, shapeColour4, innerColour4);
  pop();

  //string 2
  push();
  translate(200, 400);
  let pathArray2 = getPath(message2,0,0,90);
  let match2 = findMatch(message2);
  let shapeColour2 = color('#fef8ea');
  let innerColour2 = color('#fbcd8f');
  drawType(pathArray2,match2, shapeColour2, innerColour2);
  pop();
}

function getPath(message, xPos, yPos, fontSize){
  //params: X, Y and Font size
  fontPath = font.getPath(message, xPos, yPos, fontSize);
  path = new g.Path(fontPath.commands);
  // path = g.resampleByAmount(path, 600);
  path = g.resampleByLength(path, 1);
  pathArray = path.commands;
  return pathArray;
}

function drawType(pathArray, match, shapeColour, innerColour){
  let charPos = -1;
  //using vertex
  for (let i = 0; i < pathArray.length; i++) {
    //get the index start and end of shape
    if (pathArray[i].type == "M") {
      startVertex = i;
      charPos++;
    }
    if (pathArray[i].type == "Z") {
      endVertex = i;
    }

    let col = shapeColour;

    beginShape();
    for (let z = startVertex; z < endVertex; z++) {
      //check if character position matches
      for (let h = 0; h < match.length; h++) {
        if (charPos == match[h]) {
          col = innerColour;
          break;
        }
      }
      fill(col);
      strokeWeight(2);
      stroke('#e48d2f');
      //if end of shape, exit loop   
      if (pathArray[z].type == "Z") {
        break;
      }
      vertex(pathArray[z].x, pathArray[z].y);
    }
    endShape(CLOSE);
  }
}

function findMatch(message) {
  //remove space from string
  msgNoSpace = message.replace(/\s/g, '');

  match = [];
  let shapeIndex = 1;
  for (let i = 0; i < msgNoSpace.length; i++) {
    if (msgNoSpace[i].match(/[abedgijopqADOPQR690]/g)) {
      match.push(i + shapeIndex);
      shapeIndex++;
    }

    if (msgNoSpace[i].match(/[B8]/g)) {
      match.push(i + shapeIndex);
      shapeIndex++;
      match.push(i + shapeIndex);
      shapeIndex++;
    }
  }

  return match;
}

//save canvas as an image function
function keyPressed() {
  if (key == 's' || key == 'S') {
    //saves canvas as an image - jpg or png
    // saveCanvas('image','png');
    saveCanvas(gd.timestamp(), 'png');
  }
}
