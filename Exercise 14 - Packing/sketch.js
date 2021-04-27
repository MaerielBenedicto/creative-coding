//Growth

let points = [];
let pointsCount = 1;
let newPoint;

//radius
let min = 2;
let max = 10;

let closestPoint;
let closest;
let midCircle, leftCircle;
let outside = [];

//max number of points
let numPoints = 500;
let col, color1, color2;

function setup() {
  createCanvas(1000, 500);
  smooth();
  let bg = color('#f7f6f3')
  background(bg);
  noFill();
  initialPoint();

}

//draw initial point
function initialPoint() {
  points = [];
  col = color(random(255), random(255), random(255));

  //middle circle
  midCircle = new Point(width / 2, height / 2, 200);
  midCircle.render();

  //first point
  points.push(new Point(width / 2, height / 2, 20));
}


function draw() {

  newPoint = generateRandomPoint();
  let check = newPoint.checkIfInside(midCircle);

  if (check) {
    let closest = newPoint.checkClosest();
    if (closest == null) {
      // console.log("null");
    } else {
      points.push(newPoint);
    }

    points.forEach(point => {
      if (point.rad > 20) {
        point.growing = false;
      }
      point.grow();
      point.pack();
      point.render();
    });
  } else {
    // console.log("null")
  }

}


//create new point
function generateRandomPoint() {
  let radius = round(random(min, max));
  let xPos = random(radius, width - radius);
  let yPos = random(radius, height - radius);

  return new Point(xPos, yPos, radius);
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