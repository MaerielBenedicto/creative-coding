//Exercise 1 - 23/09/2020
// Create rectangle, ellipse, line and point

function setup(){
  createCanvas(700,600);
  background(255);
  // colorMode(MODE, range for the hue/red, range for the saturation/green, range for the brightness/blue)
  colorMode(HSB, width, height, 100);
  noStroke();
  // noLoop();
}

function draw(){
  // red rectangle
  // noStroke();
  // fill(255,0,0);
  // rect(50,50,200,100);
  //
  // //green ellipse
  // ellipseMode(CORNER);
  // fill(0,255,0);
  // ellipse(300, 50, 100, 100);
  //
  // //line
  // strokeWeight(5);
  // stroke(0);
  // line(450,100,600,100);
  //
  // //point
  // stroke(0, 0, 255);
  // strokeWeight(5);
  // point(650, 100);
  //
  // //set of rectangles - for loop
  // for (let i = 0; i < 15; i++) {
  //   fill(0);
  //   noStroke();
  //   rect(i*50, 300, 30, 30);
  // }

  //nested for loop to create a color range scale
  // add interaction with mouse
    let stepX = mouseX + 1;
    let stepY = mouseY + 1;

    for (let x = 0; x < width; x += stepX) {
      for (let y = 0; y < height;  y += stepY) {
        fill(x, height - y, 100);
        rect(x, y, stepX, stepY);
      }
    }

    // random shape using vertex
    // fill(50, 200, 50);
    // stroke(255);
    // beginShape();
    // vertex(50,50);
    // //use code to generate a number of points
    // for(let i=0; i<20; i++){
    //   let vx = i*20;
    //   let vy = random(0,height);
    //   vertex(vx,vy);
    // }
    // endShape(CLOSE); //close the shape
}

//save canvas as an image function
function keyPressed(){
  if(key == 's' || key == 'S'){
    //saves canvas as an image - jpg or png
    // saveCanvas('image','png');
    saveCanvas(gd.timestamp(), 'png');
  }
}
