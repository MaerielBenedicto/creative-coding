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
    rect(0, 0, rSize, rSize);
    pop();
  }
}
