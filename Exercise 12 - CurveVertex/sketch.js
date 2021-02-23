

let radius = 80;
let numOfSegments = 5;
let points = [];
let curves = [];

let angle, originX, originY;
let xoff = 0.0;
let yoff = 0.0;
let stepSize = 1;
let noiseValue = 1;

let t = 0;
let moveX = 0;
let moveY = 0;
let _xPos, _yPos;

let colors = [0, 0, 0, 0, 0, 0, 0, 1, 1];


function setup() {
    createCanvas(900, 500);
    background(255);
    originX = 0;
    originY = 0;
    col = color(0, 0, 0);
    angle = radians(360 / numOfSegments);
    drawPoints();
}

function drawPoints() {
    //empty arrays
    points = [];
    curves = [];

    //create different points and store in the array
    push();
    for (let i = 0; i < numOfSegments; i++) {
        let xPos = radius * cos(angle * i) * noiseValue;
        let yPos = radius * sin(angle * i) * noiseValue;
        points.push(new Point(xPos, yPos));
        curves.push(new Curve(xPos, yPos));
    }
    pop();
}


function draw() {
    let speed = map(mouseX, 0, width, 2, 10);
    for (let i = 0; i < speed; i++) {
        for (let j = 0; j < points.length; j++) {
            push();
            xoff = map(cos(j), -1, 1, 0, 1);
            yoff = map(sin(j), -1, 1, 0, 1);
            noiseValue = map(noise(xoff, yoff, t), 0, 1, 0, 1);

            _xPos = radius * cos(angle * j) * noiseValue;
            _yPos = radius * sin(angle * j) * noiseValue;

            //check boundaries
            if (originX + moveX + curves[j].x > width) {
                curves[j].x = 0;
                moveX = 0;
                centerX = 0;
            }

            if (originY + moveY + curves[j].y > height) {
                curves[j].y = 0;
                moveY = 0;
                centerY = 0;
            }

            curves[j].render(_xPos, _yPos);
            points[j].update(_xPos, _yPos);
            pop();
        }

        //move vertices
        moveX += 0.5;
        moveY += 0.5;

        let randomColor = colors[floor(random(0, colors.length))];
        (randomColor == 0) ? (col = color(0, 0, 0, 50)) : null;
        (randomColor == 1) ? (col = color(18, 237, 213, 50)) : null;

        push();
        translate(originX, originY);
        beginShape();
        stroke(col);
        noFill();
        // first controlled point
        curves[curves.length - 1].curve(moveX, moveY);
        endShape();
        pop();

        t += 0.01;
    }
}


//save canvas as an image function
function keyPressed() {
    if (key == 's' || key == 'S') {
        saveCanvas(gd.timestamp(), 'png');
    }

    if (keyCode == DELETE || keyCode == BACKSPACE) {
        clear();
        background(255);
    }

}

