class InnerCube {
  constructor(i, j) {
    this.i = i;
    this.j = j;
  }

  render() {

    let transValueX;
    let transValueY;
    push();
    if (this.j % 2 == 0) {
      transValueX = this.i * cubeWidth - offsetX;
      transValueY = this.j * cubeHeight;
    } else {
      transValueX = this.i * cubeWidth;
      transValueY = this.j * cubeHeight;
    }
    translate(transValueX, transValueY);

    let arrayNum = [0,0,1,1,1,0,1,0,1,1];
    let randomNum = random(arrayNum);

    if (randomNum == 1) {
      beginShape();
      fill(a);
      noStroke();
      vertex(startPointX - sizeC, startPointY - sizeC/2);
      vertex(startPointX + dWidth_s1 / 2, 0 + sv4 - sizeC);
      vertex(startPointX + dWidth_s1 + sizeC , dHeight_s1 / 2 - sizeC/2);
      vertex(startPointX + dWidth_s1 / 2 , startPointY + dHeight_s1 / 2 - sv4);
      endShape(CLOSE);

      //bottom
      beginShape();
      fill(a);
      noStroke();
      vertex(startPointX - sizeC, sH1 + sizeC/2);
      vertex(startPointX + dWidth_s1 / 2, sH1 - startPointY + sv4 + sizeC/2);
      vertex(startPointX + dWidth_s1 + sizeC, sH1 + sizeC/2);
      vertex(startPointX + dWidth_s1 / 2 , sH1 + dHeight_s1 / 2 - sv4 + sizeC);
      endShape(CLOSE);

      // left
      beginShape();
      fill(b);
      noStroke();
      vertex(startPointX - sizeC, startPointY - sizeC/2);
      vertex(startPointX - sizeC, sH1 + sizeC/2);
      vertex(startPointX + dWidth_s1 / 2, sH1 + dHeight_s1 / 2 - sv4 + sizeC);
      vertex(startPointX + dWidth_s1 / 2 , startPointY + dHeight_s1 / 2 - sv4);
      endShape(CLOSE);

      //right
      beginShape();
      fill(c);
      noStroke();
      vertex(startPointX + dWidth_s1 / 2 , startPointY + dHeight_s1 / 2 - sv4);
      vertex(startPointX + dWidth_s1 + sizeC, startPointY - sizeC/2);
      vertex(startPointX + dWidth_s1 + sizeC, sH1 + sizeC/2 );
      vertex(startPointX + dWidth_s1 / 2 , sH1 + dHeight_s1 / 2 - sv4 + sizeC);
      endShape(CLOSE);
    }
    pop();
  }

}
