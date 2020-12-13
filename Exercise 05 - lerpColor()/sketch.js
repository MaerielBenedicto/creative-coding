//Exercise 05  -- lerpColor()

function setup() {
  createCanvas(700, 600);
  background(255);
  // colorMode(MODE, range for the hue/red, range for the saturation/green, range for the brightness/blue)
  colorMode(HSB, 360, 100, 100);
  noStroke();
  angleMode(DEGREES); // Change the mode to DEGREES

}

function draw() {
  for(let x = 0; x <= width; x++){
      let startColor = color(180, 100, 100);
      let endColor = color(360, 100, 100);
      let col = lerpColor(startColor, endColor, x / 10);
      fill(col);
      rect(x * 50 + 15, 0, 20, height);
  }
}

//save canvas as an image function
function keyPressed() {
  if (key == 's' || key == 'S') {
    //saves canvas as an image - jpg or png
    // saveCanvas('image','png');
    saveCanvas(gd.timestamp(), 'png');
  }
}
