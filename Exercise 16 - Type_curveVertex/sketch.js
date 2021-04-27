//type
let font, fontPath, path, pathArray;
let message = "NO SIGNAL";

let startVertex = 0;
let endVertex = 0;

let match;
let vectors = [];
function setup() {
  createCanvas(1000, 500);
  background(255);
  noLoop();
  angle = radians(360 / 12);

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
  // background('#ffe767');
  background(255);

  push();
  translate(200, 300);
  let pathArray = getPath(message, 0, 0, 120);
  let match = findMatch(message);
  let shapeColour = color(0,0,0);
  let innerColour = color('#881327');
  drawType(pathArray, match, shapeColour, innerColour);
  pop();
}

function getPath(message, xPos, yPos, fontSize) {
  //params: String, X, Y and Font size
  fontPath = font.getPath(message, xPos, yPos, fontSize);
  path = new g.Path(fontPath.commands);
  // path = g.resampleByAmount(path, 100);
  path = g.resampleByLength(path, 5);
  pathArray = path.commands;
  return pathArray;
}

function drawType(pathArray, match, shapeColour, innerColour) {
  let charPos = -1;

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

    //first controlled point 
    curveVertex(pathArray[startVertex].x, pathArray[startVertex].y);
    for (let z = startVertex; z < endVertex; z++) {
      //check if character position matches
      for (let h = 0; h < match.length; h++) {
        if (charPos == match[h]) {
          col = innerColour;
          break;
        }
      }

      fill(col);
      // strokeWeight(2);
      // stroke(0);
      //if end of shape, exit loop   
      if (pathArray[z].type == "Z") {
        break;
      }
      curveVertex(pathArray[z].x, pathArray[z].y);
      // ellipse(pathArray[z].x,pathArray[z].y, 5,5);
    }
    //last controlled points
    // curveVertex(pathArray[startVertex].x, pathArray[startVertex].y);
    // curveVertex(pathArray[startVertex + 1].x, pathArray[startVertex + 1].y);
    
    // move points 
    let off = frameCount * 0.1 + (pathArray[i].x + pathArray[i].y);

    pathArray[i].x = pathArray[i].x + cos(off) * 5;
    pathArray[i].y = pathArray[i].y + sin(off) * 5;
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
