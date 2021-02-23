let stepSize = 1;
let angle = 45;
let angleCount = 2;
let points = [];
let xPos, yPos;
let colors = [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3];
let option = [0, 0, 0, 0, 0, 0, 1, 1, 1, 1];
let col, s;

function setup() {
    createCanvas(600, 500);
    background(0);
    // noLoop();
    xPos = width / 2;
    yPos = height / 2;

    createPoint(0, 0, 45);
}

function draw() {    
    let speed = map(mouseX, 0, width, 2, 10);
    for (let i = 0; i < speed; i++) {
        points.forEach(point => {
            point.update();
            point.checkBorder();
            point.draw();
        })
    }
}

//create another point
function createPoint(xPos, yPos, _a) {
    points.push(new Point(xPos, yPos, _a));
}


//get random angle 
function randomAngle(xpos, ypos) {
    let angle = 90 / angleCount;
    let dir = floor(random(-angleCount, angleCount)) + 0.5;
    let randomAngle = dir * angle;

    if (xpos < 0) return randomAngle;

    if (xpos > width) return randomAngle + 180;

    if (ypos < 0) return randomAngle + 90;
    
    if (ypos > height) return randomAngle - 90;
    
}


function keyPressed() {
    //save canvas as an image function
    if (key == 's' || key == 'S') {
        //saves canvas as an image - jpg or png
        // saveCanvas('image','png');
        saveCanvas(gd.timestamp(), 'png');
    }

    //clear canvas
    if (keyCode == DELETE || keyCode == BACKSPACE) {
        clear();
        background(0);
        points = [];
        createPoint(0,0, 45);
    }

    //create new point
    if (key == 'a') {
        let angle = 90 / angleCount;
        let dir = floor(random(-angleCount, angleCount)) + 0.5;
        let randAngle = dir * angle;
        createPoint(0, 0, randAngle);
    }
}

