class OuterCube {
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

    // let randomNum = round(random(0, 1));
    let randomNum = round(max(random(0, 1)));
    if (randomNum == 0) {
      beginShape();
      noStroke();
      fill(b);
      vertex(0, 0);
      vertex(dWidth_b1 / 2 , -dHeight_b1 / 2 + v4 );
      vertex(dWidth_b1 , 0 );
      vertex(dWidth_b1 / 2 , dHeight_b1 / 2 - v4);
      endShape(CLOSE);

      //bottom
      beginShape();
      noStroke();
      fill(b);
      vertex(0, bH1);
      vertex(dWidth_b1 / 2 , -dHeight_b1 / 2 + v4  + bH1);
      vertex(dWidth_b1 , 0  + bH1);
      vertex(dWidth_b1 / 2 , dHeight_b1 / 2 - v4 + bH1);
      endShape(CLOSE);

      // left side
      beginShape();
      noStroke();
      fill(c);
      vertex(0, 0);
      vertex(0, bH1);
      vertex(dWidth_b1 / 2 , bH1 + dHeight_b1 / 2 - v4);
      vertex(dWidth_b1 / 2 , dHeight_b1 / 2 - v4);
      endShape(CLOSE);

      //right side
      beginShape();
      noStroke();
      fill(a);
      vertex(dWidth_b1 / 2 , dHeight_b1 / 2 - v4);
      vertex(dWidth_b1 , 0 );
      vertex(dWidth_b1 , bH1 );
      vertex(dWidth_b1 / 2 , bH1 + dHeight_b1 / 2 - v4);
      endShape(CLOSE);

    }
     else {

      beginShape();
      fill(b);
      noStroke();
      vertex(0, 0);
      vertex(dWidth_b / 2 , -dHeight_b / 2 + v4 );
      vertex(dWidth_b , 0 );
      vertex(dWidth_b / 2 , dHeight_b / 2 - v4);
      endShape(CLOSE);

      //bottom
      beginShape();
      fill(b);
      noStroke();
      vertex(0, bH);
      vertex(dWidth_b / 2 , -dHeight_b / 2 + v4  + bH);
      vertex(dWidth_b , 0  + bH);
      vertex(dWidth_b / 2 , dHeight_b / 2 - v4 + bH);
      endShape(CLOSE);

      // left side
      beginShape();
      fill(c);
      noStroke();
      vertex(0, 0);
      vertex(0, bH);
      vertex(dWidth_b / 2 , bH + dHeight_b / 2 - v4);
      vertex(dWidth_b / 2 , dHeight_b / 2 - v4);
      endShape(CLOSE);

      //right side
      beginShape();
      fill(a);
      noStroke();
      vertex(dWidth_b / 2 , dHeight_b / 2 - v4);
      vertex(dWidth_b , 0 );
      vertex(dWidth_b , bH );
      vertex(dWidth_b / 2 , bH + dHeight_b / 2 - v4);
      endShape(CLOSE);
    }

    pop();
  }
}
