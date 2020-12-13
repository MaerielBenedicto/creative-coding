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

    let startColor = color(215, 165, 218);
    let endColor = color(75, 205, 245);

    translate(transValueX, transValueY);
    let t = atan2(mouseY - transValueY, mouseX - transValueX);
    rotate(t);
    let col = lerpColor(startColor, endColor, (this.i+this.j*numRect)/width);
    fill(col);

    noFill();
    stroke(this.i, 0, numRect-this.j);
    let d = dist(mouseX, mouseY, transValueX, transValueY);
    let s = map(d, 0, width, 1, 20,true);

    if(d < rSize/2){
      ellipse(0, 0, rSize/2, rSize/2);
      noStroke();
      fill(col);
      ellipse(10,0,rSize/s, rSize/s);
    } else {
      ellipse(0, 0, rSize/2, rSize/2);
      noStroke();
      fill(col);
      ellipse(10,0,rSize/s, rSize/s);
    }
    pop();
  }
}
