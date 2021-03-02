//Growth

let points = [];
let pointsCount = 1;
let newPoint;

//radius
let min = 5;
let max = 15;

let closestPoint;
let closest;

//max number of points
let numPoints = 500;
let col;

function setup() {
  createCanvas(1000, 500);
  background(255);
  // noLoop();
  initialPoint();
}

//draw initial point
function initialPoint() {
  points = [];
  closest = width;

  //random stroke color 
  col = color(random(255), random(255), random(255));
  points.push(new Point(width / 2, height / 2, 20));
  points[0].render();
}


function draw() {
  background(255);

  //create new point
  newPoint = generateRandomPoint();
  newPoint.check();
  points.forEach(point => {
    point.render();
  });


  // reset
  if (points.length > numPoints) {
    clear();
    initialPoint();
  }

  // frameRate(10);
}


//create new point
function generateRandomPoint() {
  let xPos = random(0, width);
  let yPos = random(0, height);
  let diam = random(min, max);

  return new Point(xPos, yPos, diam);
}

//save canvas as an image function
function keyPressed() {
  if (key == 's' || key == 'S') {
    //saves canvas as an image - jpg or png
    // saveCanvas('image','png');
    saveCanvas(gd.timestamp(), 'png');
  }

  if (keyCode == DELETE || keyCode == BACKSPACE) {
    background(255);
    clear();
    initialPoint();
  }
}