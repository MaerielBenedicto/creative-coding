

let stepSize = 5;
let x,y,col;
let moveX = 0; 
let moveY = 0;

//arrays
let optionsX = [-1,-1,0,1,1];
let optionsY = [-1,-1,0,1,1];
let colors = [0,0,0,0,0,0,0,1,2,3];


function setup() {
    createCanvas(900, 500);
    background(0);
    // noLoop();

    x = width/2;
    y = height/2;
    col = color(255,255,255);
}

function draw() {    
    
    let speed = map(mouseX, 0, width, 2, 5);
    for(let i = 0; i < speed; i++){
      moveX = optionsX[floor(random(0,optionsX.length))] * stepSize;
      moveY = optionsY[floor(random(0,optionsY.length))] * stepSize;

      x += moveX;
      y += moveY;

      noStroke();
      fill(col);
      ellipse(x,y, 5, 5);
      
      
      (x > width) ? (x = 0): null;
      (x  < 0) ? (x = width) : null;
      (y  > height) ? (y = 0) : null;
      (y < 0) ? y = height : null;

      //set random color of ellipse
      let randomColor = colors[floor(random(0,colors.length))];
      (randomColor == 0) ? (col = color(122, 122, 122)) : null;
      (randomColor == 1) ? (col = color(18, 237, 213)) : null;
      (randomColor == 2) ? (col = color(84, 171, 183)) : null;
      (randomColor == 3) ? (col = color(168, 87, 145)) : null;
    }    
}

//save canvas as an image function
function keyPressed(){
  if(key == 's' || key == 'S'){
    //saves canvas as an image - jpg or png
    // saveCanvas('image','png');
    saveCanvas(gd.timestamp(), 'png');
  }

  if(keyCode == DELETE || keyCode == BACKSPACE ) 
  { 
    clear();
    background(71, 71, 71);
  }
 
  if(key == '1'){
    stepSize = 5;
  }
  if(key == '2'){
    stepSize = 10;
  }
  if(key == '3'){
    stepSize = 15;
  }
}