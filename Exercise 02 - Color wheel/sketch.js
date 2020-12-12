
//Exercise 2 - 30/09/2020
// Create a circle using vertex

let numOfSegments = 360;
let stepAngle = 360/numOfSegments;
let radius = 100;

function setup(){
  createCanvas(300,300);
  background(255);
  // colorMode(MODE, range for the hue/red, range for the saturation/green, range for the brightness/blue)
  colorMode(HSB, 360, 100, 100);
  noStroke();
  // noLoop();
  angleMode(DEGREES); // Change the mode to DEGREES

}

function draw(){
 beginShape(TRIANGLE_FAN);
 vertex(150,150);
 for(let i=0; i<=360; i+=stepAngle){
   let vx = radius*sin(i)+150;
   let vy = radius*cos(i)+150;
   fill(i,100,100);
   vertex(vx,vy);
 }
 endShape();
}

//save canvas as an image function
function keyPressed(){
  if(key == 's' || key == 'S'){
    //saves canvas as an image - jpg or png
    // saveCanvas('image','png');
    saveCanvas(gd.timestamp(), 'png');
  }
}
