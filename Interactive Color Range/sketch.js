// Exercise 1 - 23/09/2020
// Create a color range scale


function setup(){
  createCanvas(700,500);
  background(255);
  // colorMode(MODE, range for the hue/red, range for the saturation/green, range for the brightness/blue)
  colorMode(HSB, width, height, 100);
  noStroke();
  // noLoop();
}

function draw(){

  //nested for loop to create a color range scale
  //add interaction with mouse
    let stepX = mouseX + 1;
    let stepY = mouseY + 1;

    for (let x = 0; x < width; x += stepX) {
      for (let y = 0; y < height;  y += stepY) {
        fill(x, height - y, 100);
        rect(x, y, stepX, stepY);
      }
    }
}

//save canvas as an image function
function keyPressed(){
  if(key == 's' || key == 'S'){
    //saves canvas as an image - jpg or png
    saveCanvas('image','png');
    saveCanvas(gd.timestamp(), 'png');
  }
}
