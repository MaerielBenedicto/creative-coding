class Rectangle {
  constructor(i,j){
    this.i = i;
    this.j = j;
  }

  render(){
    push();
    rectMode(CENTER);
    let transValueX = this.i*rSize + rSize/2;
    let transValueY = this.j*rSize + rSize/2;
    let startColor = color(9,100,100);
    let endColor = color(360,100,100);
    translate(transValueX, transValueY);
    let t = atan2(mouseY - transValueY, mouseX - transValueX);
    rotate(t);
    let col = lerpColor(startColor, endColor, (this.i+(this.j*numRect))/width);
    fill(this.i, 0, numRect-this.j);
    rect(0, 0, rSize, rSize);


    noFill();
    stroke(this.i, 0, numRect-this.j);
    let d = dist(mouseX, mouseY, transValueX, transValueY);
    // if(d < rSize/2){
      // ellipse(0, 0, rSize/0.5, rSize/0.5);
      // noStroke();
      // fill(180);
      // ellipse(10,0,rSize/4, rSize/4);
    // } else {
      // ellipse(0, 0, rSize/2, rSize/2);
      // noStroke();
      // fill(180);
      // ellipse(10,0,rSize/4, rSize/4);
    // }
    pop();
  }
}
