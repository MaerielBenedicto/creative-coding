//Exercise 04 -- Interactive color wheel


//color wheel variable
let numOfSegments = 36;
let stepAngle = 360 / numOfSegments;
let radius = 200;
let centerX = 350;
let centerY = 375;

let bg;
let selector01;
let selector02;
let t = 0;
let rotateMode = false;
let stopRotation = false;
let currentT;

let innerDia = 180;
let outerRadius = 400;

//color colorSchemes
let main = true; //main color
let complementaryMode = false;
let analogousMode = false;
let triadicMode = false;
let tetradicMode = false;
let squareMode = false;

//color palettes
let palettes;
let canvasCenter;
let lock = false;

function setup() {
  createCanvas(1400, 785);
  // colorMode(MODE, range for the hue/red, range for the saturation/green, range for the brightness/blue)
  colorMode(HSB, 360, 100, 100);
  bg = color(0, 0, 100);
  noStroke();
  // noLoop();
  angleMode(DEGREES); // Change the mode to DEGREES
  canvasCenter = width / 2;
}

function draw() {
  background(bg);
  //BUTTONS - color schemes
  colorSchemes();

  //COLOR WHEEL
  push();
  noStroke();
  translate(centerX, centerY);
  //if spin button is clicked
  if (rotateMode) {
    rotate(t);
    if (t >= 360) {
      t = 0;
    }
    t += 1;
    currentT = t;
  }
  //if stop button is clicked
  if (stopRotation) {
    if (currentT % 10 == 0) {
      t = currentT;
    } else {
      let value = currentT % 10;
      // console.log(value);
      if (value <= 5) {
        t = currentT - value;
      } else {
        t = currentT + (10 - value);
      }
    }
    rotate(t);
  }

  beginShape(TRIANGLE_FAN);
  rotate(5);
  vertex(0, 0);
  for (let i = 0; i <= 360; i += stepAngle) {
    let vx = radius * sin(i);
    let vy = radius * cos(i);
    fill(i, 100, 100);
    vertex(vx, vy);
  }
  endShape();
  pop();

  //reset ellipse
  push();
  noFill();
  ellipseMode(CENTER);
  strokeWeight(2);
  stroke(0);
  ellipse(500, 615, 30, 30);
  pop();

  colorMarkers();
  colorWheelCircles();

  //display texts
  detectColor();

  if (mouseX > canvasCenter) {
    //lock ellipse
    push();
    noFill();
    ellipseMode(CENTER);
    strokeWeight(2);
    stroke(0);
    ellipse(width - 15, height / 2, 30, 30);
    pop();

    if(!lock){
      noStroke();
      fill(0);
      textSize(20);
      textFont('Poppins');
      textStyle(NORMAL);
      text("⤻", width - 25, height/2 + 5 );
    } else{
      noStroke();
      fill(0);
      textSize(20);
      textFont('Poppins');
      textStyle(NORMAL);
      text("⤺", width - 25, height/2 + 5 );
    }

  }

  displayTexts();


}

function colorMarkers() {
  //MAIN COLOR -- NO COLOR SCHEME
  if (main) {
    push();
    translate(centerX, centerY);
    beginShape(TRIANGLE_FAN);
    vertex(0, 0);
    vertex(radius * sin(185), radius * cos(185));
    vertex(radius * sin(175), radius * cos(175));
    noFill();
    strokeWeight(3);
    stroke(0, 0, 100);
    endShape();
    pop();
  }

  //MARK for COMPLEMENTARY
  if (complementaryMode) {
    push();
    translate(centerX, centerY);
    beginShape(TRIANGLE_FAN);
    vertex(0, 0);
    vertex(radius * sin(185), radius * cos(185));
    vertex(radius * sin(175), radius * cos(175));
    noFill();
    strokeWeight(3);
    stroke(0, 0, 100);
    endShape();
    pop();

    push();
    translate(centerX, centerY);
    beginShape(TRIANGLE_FAN);
    vertex(0, 0);
    vertex(radius * sin(355), radius * cos(355));
    vertex(radius * sin(5), radius * cos(5));
    noFill();
    strokeWeight(3);
    stroke(0, 0, 100);
    endShape();
    pop();
  }

  //MARK for ANALOGOUS
  if (analogousMode) {
    push();
    translate(centerX, centerY);
    beginShape(TRIANGLE_FAN);
    vertex(0, 0);
    vertex(radius * sin(325), radius * cos(325));
    vertex(radius * sin(315), radius * cos(315));
    noFill();
    strokeWeight(2);
    stroke(0, 0, 100);
    endShape();
    pop();


    push();
    translate(centerX, centerY);
    beginShape(TRIANGLE_FAN);
    vertex(0, 0);
    vertex(radius * sin(355), radius * cos(355));
    vertex(radius * sin(5), radius * cos(5));
    noFill();
    strokeWeight(2);
    stroke(0, 0, 100);
    endShape();
    pop();


    push();
    translate(centerX, centerY);
    beginShape(TRIANGLE_FAN);
    vertex(0, 0);
    vertex(radius * sin(35), radius * cos(35));
    vertex(radius * sin(45), radius * cos(45));
    noFill();
    strokeWeight(2);
    stroke(0, 0, 100);
    endShape();
    pop();
  }

  //MARK for TRIADIC
  if (triadicMode) {
    push();
    translate(centerX, centerY);
    beginShape(TRIANGLE_FAN);
    vertex(0, 0);
    vertex(radius * sin(185), radius * cos(185));
    vertex(radius * sin(175), radius * cos(175));
    noFill();
    strokeWeight(2);
    stroke(0, 0, 100);
    endShape();
    pop();


    push();
    translate(centerX, centerY);
    beginShape(TRIANGLE_FAN);
    vertex(0, 0);
    vertex(radius * sin(295), radius * cos(295));
    vertex(radius * sin(305), radius * cos(305));
    noFill();
    strokeWeight(2);
    stroke(0, 0, 100);
    endShape();
    pop();


    push();
    translate(centerX, centerY);
    beginShape(TRIANGLE_FAN);
    vertex(0, 0);
    vertex(radius * sin(65), radius * cos(65));
    vertex(radius * sin(55), radius * cos(55));
    noFill();
    strokeWeight(2);
    stroke(0, 0, 100);
    endShape();
    pop();
  }

  //MARK for TETRADIC
  if (tetradicMode) {
    push();
    translate(centerX, centerY);
    beginShape(TRIANGLE_FAN);
    vertex(0, 0);
    vertex(radius * sin(215), radius * cos(215));
    vertex(radius * sin(205), radius * cos(205));
    noFill();
    strokeWeight(2);
    stroke(0, 0, 100);
    endShape();
    pop();


    push();
    translate(centerX, centerY);
    beginShape(TRIANGLE_FAN);
    vertex(0, 0);
    vertex(radius * sin(155), radius * cos(155));
    vertex(radius * sin(145), radius * cos(145));
    noFill();
    strokeWeight(2);
    stroke(0, 0, 100);
    endShape();
    pop();


    push();
    translate(centerX, centerY);
    beginShape(TRIANGLE_FAN);
    vertex(0, 0);
    vertex(radius * sin(325), radius * cos(325));
    vertex(radius * sin(335), radius * cos(335));
    noFill();
    strokeWeight(2);
    stroke(0, 0, 100);
    endShape();
    pop();

    push();
    translate(centerX, centerY);
    beginShape(TRIANGLE_FAN);
    vertex(0, 0);
    vertex(radius * sin(25), radius * cos(25));
    vertex(radius * sin(35), radius * cos(35));
    noFill();
    strokeWeight(2);
    stroke(0, 0, 100);
    endShape();
    pop();
  }

  //MARK for TETRADIC
  if (squareMode) {
    push();
    translate(centerX, centerY);
    beginShape(TRIANGLE_FAN);
    vertex(0, 0);
    vertex(radius * sin(185), radius * cos(185));
    vertex(radius * sin(175), radius * cos(175));
    noFill();
    strokeWeight(2);
    stroke(0, 0, 100);
    endShape();
    pop();


    push();
    translate(centerX, centerY);
    beginShape(TRIANGLE_FAN);
    vertex(0, 0);
    vertex(radius * sin(355), radius * cos(355));
    vertex(radius * sin(5), radius * cos(5));
    noFill();
    strokeWeight(2);
    stroke(0, 0, 100);
    endShape();
    pop();


    push();
    translate(centerX, centerY);
    beginShape(TRIANGLE_FAN);
    vertex(0, 0);
    vertex(radius * sin(95), radius * cos(95));
    vertex(radius * sin(85), radius * cos(85));
    noFill();
    strokeWeight(2);
    stroke(0, 0, 100);
    endShape();
    pop();

    push();
    translate(centerX, centerY);
    beginShape(TRIANGLE_FAN);
    vertex(0, 0);
    vertex(radius * sin(275), radius * cos(275));
    vertex(radius * sin(265), radius * cos(265));
    noFill();
    strokeWeight(2);
    stroke(0, 0, 100);
    endShape();
    pop();
  }
}

function colorWheelCircles() {
  //INNER CIRCLE
  push();
  fill(0, 0, 100);
  translate(centerX, centerY);
  noStroke();
  ellipse(0, 0, innerDia, innerDia);
  pop();

  // OUTER CIRCLE
  push();
  noFill();
  translate(centerX, centerY);
  strokeWeight(3);
  stroke(0);
  ellipse(0, 0, outerRadius, outerRadius);
  pop();
}

//Display selected color
function detectColor() {
  if (main) {
    palettes = [];
    //NO COLOR SCHEME SELECTED
    push();
    // complementary
    colorMode(RGB);
    let detectA = get(centerX, centerY - 100);
    let colA = color(detectA);
    colorMode(HSB);
    let selectedColor01 = color(hue(colA), saturation(colA), brightness(colA));
    let sc = selectedColor01;

    //add selected colors to palette
    palettes.push(sc);
    let numColor = 1;

    //loop through different saturations and push to palettes array
    for (let s = 75; s >= 25; s -= 25) {
      palettes.push(color(hue(selectedColor01), s, brightness(selectedColor01)));
    }

    //loop through palettes array
    for (let a = 0; a < palettes.length; a++) {
      fill(palettes[a]);

      if (mouseX > canvasCenter) {
        rect(a * (canvasCenter / map(mouseX, canvasCenter, width, numColor, palettes.length)) + canvasCenter, 0, canvasCenter / map(mouseX, canvasCenter, width, numColor, palettes.length), height);
      }
      if (lock) {
        rect(a * (canvasCenter / palettes.length) + canvasCenter, 0, canvasCenter / palettes.length, height);
      } else if (!lock) {
        rect(a * (canvasCenter / numColor) + canvasCenter, 0, canvasCenter / numColor, height);
      }
    }
    pop();

  }


  if (complementaryMode) {
    push();
    //empty array
    palettes = [];
    // complementary
    colorMode(RGB);
    let detectA = get(centerX, centerY - 100);
    let colA = color(detectA);
    colorMode(HSB);
    let selectedColor01 = color(hue(colA), saturation(colA), brightness(colA));
    //selected color
    let sc = selectedColor01;

    colorMode(RGB);
    let detectB = get(centerX, centerY + 100);
    let colB = color(detectB);
    colorMode(HSB);
    let selectedColor02 = color(hue(colB), saturation(colB), brightness(colB));
    let sc2 = selectedColor02;

    //add selected colors to palette
    palettes.push(sc, sc2);
    let numColor = 2;

    //loop through different saturations and push to palettes array
    for (let s = 75; s >= 25; s -= 25) {
      palettes.push(color(hue(selectedColor01), s, brightness(selectedColor01)));
    }
    for (let s = 75; s >= 25; s -= 25) {
      palettes.push(color(hue(selectedColor02), s, brightness(selectedColor02)));
    }

    //loop through palettes array
    for (let a = 0; a < palettes.length; a++) {
      fill(palettes[a]);
      // rect(a * ((width/2) / palettes.length) + (width/2), 0, (width/2)/ palettes.length, height);
      if (mouseX >= canvasCenter) {
        rect(a * (canvasCenter / map(mouseX, canvasCenter, width, numColor, palettes.length)) + canvasCenter, 0, canvasCenter / map(mouseX, canvasCenter, width, numColor, palettes.length), height);
      }
      if (lock) {
        rect(a * (canvasCenter / palettes.length) + canvasCenter, 0, canvasCenter / palettes.length, height);
      } else if (!lock) {
        rect(a * (canvasCenter / numColor) + canvasCenter, 0, canvasCenter / numColor, height);
      }
    }
    pop();
  }

  if (analogousMode) {
    push();
    palettes = [];
    // analogous
    colorMode(RGB);
    let detectA = get(centerX - 100, centerY + 100);
    let colA = color(detectA);
    colorMode(HSB);
    let selectedColor01 = color(hue(colA), saturation(colA), brightness(colA));
    let sc = selectedColor01;


    colorMode(RGB);
    let detectB = get(centerX, centerY + 150);
    let colB = color(detectB);
    colorMode(HSB);
    let selectedColor02 = color(hue(colB), saturation(colB), brightness(colB));
    let sc2 = selectedColor02;


    colorMode(RGB);
    let detectC = get(centerX + 125, centerY + 150);
    let colC = color(detectC);
    colorMode(HSB);
    let selectedColor03 = color(hue(colC), saturation(colC), brightness(colC));
    let sc3 = selectedColor03;

    //add selected colors to palette
    palettes.push(sc, sc2, sc3);
    let numColor = 3;
    //loop through different saturations and push to palettes array
    for (let s = 75; s >= 25; s -= 25) {
      palettes.push(color(hue(selectedColor01), s, brightness(selectedColor01)));
    }
    for (let s = 75; s >= 25; s -= 25) {
      palettes.push(color(hue(selectedColor02), s, brightness(selectedColor02)));
    }
    for (let s = 75; s >= 25; s -= 25) {
      palettes.push(color(hue(selectedColor03), s, brightness(selectedColor03)));
    }

    //loop through palettes array
    for (let a = 0; a < palettes.length; a++) {
      fill(palettes[a]);
      if (mouseX >= canvasCenter) {
        rect(a * (canvasCenter / map(mouseX, canvasCenter, width, numColor, palettes.length)) + canvasCenter, 0, canvasCenter / map(mouseX, canvasCenter, width, numColor, palettes.length), height);
      }
      if (lock) {
        rect(a * (canvasCenter / palettes.length) + canvasCenter, 0, canvasCenter / palettes.length, height);
      } else if (!lock) {
        rect(a * (canvasCenter / numColor) + canvasCenter, 0, canvasCenter / numColor, height);
      }
    }
    pop();
  }

  if (triadicMode) {
    push();
    palettes = [];
    // triadic
    colorMode(RGB);
    let detectA = get(centerX, centerY - 100);
    let colA = color(detectA);
    colorMode(HSB);
    let selectedColor01 = color(hue(colA), saturation(colA), brightness(colA));
    let sc = selectedColor01;


    colorMode(RGB);
    let detectB = get(centerX - 100, centerY + 50);
    let colB = color(detectB);
    colorMode(HSB);
    let selectedColor02 = color(hue(colB), saturation(colB), brightness(colB));
    let sc2 = selectedColor02;


    colorMode(RGB);
    let detectC = get(centerX + 100, centerY + 50);
    let colC = color(detectC);
    colorMode(HSB);
    let selectedColor03 = color(hue(colC), saturation(colC), brightness(colC));
    let sc3 = selectedColor03;

    //add selected colors to palette
    palettes.push(sc, sc2, sc3);
    let numColor = 3;
    //loop through different saturations and push to palettes array
    for (let s = 75; s >= 25; s -= 25) {
      palettes.push(color(hue(selectedColor01), s, brightness(selectedColor01)));
    }
    for (let s = 75; s >= 25; s -= 25) {
      palettes.push(color(hue(selectedColor02), s, brightness(selectedColor02)));
    }
    for (let s = 75; s >= 25; s -= 25) {
      palettes.push(color(hue(selectedColor03), s, brightness(selectedColor03)));
    }

    //loop through palettes array
    for (let a = 0; a < palettes.length; a++) {
      fill(palettes[a]);
      if (mouseX >= canvasCenter) {
        rect(a * (canvasCenter / map(mouseX, canvasCenter, width, numColor, palettes.length)) + canvasCenter, 0, canvasCenter / map(mouseX, canvasCenter, width, numColor, palettes.length), height);
      }
      if (lock) {
        rect(a * (canvasCenter / palettes.length) + canvasCenter, 0, canvasCenter / palettes.length, height);
      } else if (!lock) {
        rect(a * (canvasCenter / numColor) + canvasCenter, 0, canvasCenter / numColor, height);
      }
    }
    pop();
  }

  if (tetradicMode) {
    push();
    palettes = [];
    // tetdradic
    colorMode(RGB);
    let detectA = get(centerX - 50, centerY - 100);
    let colA = color(detectA);
    colorMode(HSB);
    let selectedColor01 = color(hue(colA), saturation(colA), brightness(colA));
    let sc = selectedColor01;


    colorMode(RGB);
    let detectB = get(centerX + 50, centerY - 100);
    let colB = color(detectB);
    colorMode(HSB);
    let selectedColor02 = color(hue(colB), saturation(colB), brightness(colB));
    let sc2 = selectedColor02;


    colorMode(RGB);
    let detectC = get(centerX - 50, centerY + 100);
    let colC = color(detectC);
    colorMode(HSB);
    let selectedColor03 = color(hue(colC), saturation(colC), brightness(colC));
    let sc3 = selectedColor03;

    colorMode(RGB);
    let detectD = get(centerX + 50, centerY + 100);
    let colD = color(detectD);
    colorMode(HSB);
    let selectedColor04 = color(hue(colD), saturation(colD), brightness(colD));
    let sc4 = selectedColor04;

    //add selected colors to palette
    palettes.push(sc, sc2, sc3, sc4);
    let numColor = 4;
    //loop through different saturations and push to palettes array
    for (let s = 75; s >= 25; s -= 25) {
      palettes.push(color(hue(selectedColor01), s, brightness(selectedColor01)));
    }
    for (let s = 75; s >= 25; s -= 25) {
      palettes.push(color(hue(selectedColor02), s, brightness(selectedColor02)));
    }
    for (let s = 75; s >= 25; s -= 25) {
      palettes.push(color(hue(selectedColor03), s, brightness(selectedColor03)));
    }
    for (let s = 75; s >= 25; s -= 25) {
      palettes.push(color(hue(selectedColor04), s, brightness(selectedColor04)));
    }

    //loop through palettes array
    for (let a = 0; a < palettes.length; a++) {
      fill(palettes[a]);
      if (mouseX >= canvasCenter) {
        rect(a * (canvasCenter / map(mouseX, canvasCenter, width, numColor, palettes.length)) + canvasCenter, 0, canvasCenter / map(mouseX, canvasCenter, width, numColor, palettes.length), height);
      }
      if (lock) {
        rect(a * (canvasCenter / palettes.length) + canvasCenter, 0, canvasCenter / palettes.length, height);
      } else if (!lock) {
        rect(a * (canvasCenter / numColor) + canvasCenter, 0, canvasCenter / numColor, height);
      }
    }
    pop();
  }


  if (squareMode) {
    push();
    palettes = [];
    // square
    colorMode(RGB);
    let detectA = get(centerX, centerY - 100);
    let colA = color(detectA);
    colorMode(HSB);
    let selectedColor01 = color(hue(colA), saturation(colA), brightness(colA));
    let sc = selectedColor01;


    colorMode(RGB);
    let detectB = get(centerX - 100, centerY);
    let colB = color(detectB);
    colorMode(HSB);
    let selectedColor02 = color(hue(colB), saturation(colB), brightness(colB));
    let sc2 = selectedColor02;


    colorMode(RGB);
    let detectC = get(centerX + 100, centerY);
    let colC = color(detectC);
    colorMode(HSB);
    let selectedColor03 = color(hue(colC), saturation(colC), brightness(colC));
    let sc3 = selectedColor03;


    colorMode(RGB);
    let detectD = get(centerX, centerY + 100);
    let colD = color(detectD);
    colorMode(HSB);
    let selectedColor04 = color(hue(colD), saturation(colD), brightness(colD));
    let sc4 = selectedColor04;

    //add selected colors to palette
    palettes.push(sc, sc2, sc3, sc4);
    let numColor = 4;

    //loop through different saturations and push to palettes array
    for (let s = 75; s >= 25; s -= 25) {
      palettes.push(color(hue(selectedColor01), s, brightness(selectedColor01)));
    }
    for (let s = 75; s >= 25; s -= 25) {
      palettes.push(color(hue(selectedColor02), s, brightness(selectedColor02)));
    }
    for (let s = 75; s >= 25; s -= 25) {
      palettes.push(color(hue(selectedColor03), s, brightness(selectedColor03)));
    }
    for (let s = 75; s >= 25; s -= 25) {
      palettes.push(color(hue(selectedColor04), s, brightness(selectedColor04)));
    }

    //loop through palettes array
    for (let a = 0; a < palettes.length; a++) {
      fill(palettes[a]);
      if (mouseX >= canvasCenter) {
        rect(a * (canvasCenter / map(mouseX, canvasCenter, width, numColor, palettes.length)) + canvasCenter, 0, canvasCenter / map(mouseX, canvasCenter, width, numColor, palettes.length), height);
      }
      if (lock) {
        rect(a * (canvasCenter / palettes.length) + canvasCenter, 0, canvasCenter / palettes.length, height);
      } else if (!lock) {
        rect(a * (canvasCenter / numColor) + canvasCenter, 0, canvasCenter / numColor, height);
      }
    }
    pop();
  }

}

function mousePressed() {
  //spin and stop button
  let d = dist(mouseX, mouseY, centerX, centerY);
  if (d < innerDia / 2) {
    // console.log("Circle is clicked");
    if (!rotateMode) {
      // console.log("Rotate wheel");
      rotateMode = true;
      stopRotation = false;
    } else {
      stopRotation = true;
      rotateMode = false;
      // console.log("Stop rotation");
    }
  }


  //if reset button is pressed
  let r = dist(mouseX, mouseY, 500, 615);
  if (r < 30 / 2) {
    main = true;
    squareMode = false;
    tetradicMode = false;
    triadicMode = false;
    complementaryMode = false;
    analogousMode = false;
    lock = false;
  }

  //lock button
  let l = dist(mouseX, mouseY, width - 15, height / 2);

  if (l < 30 / 2) {
    if(lock){
      lock = false;
    } else {
      // console.log("LOCK");
      lock = true;
    }
  }

  // console.log("MX,MY", mouseX, mouseY);
}

function displayTexts() {

  noStroke();
  fill(0);
  textSize(30);
  textFont('Poppins');
  textStyle(NORMAL);
  text("Spin the Wheel‼️", centerX - 120, 100);


  noStroke();
  fill(0);
  textSize(20);
  textFont('Poppins');
  textStyle(NORMAL);
  text("Choose a Color Scheme", 230, 625);

  noStroke();
  fill(0);
  textSize(20);
  textFont('Poppins');
  textStyle(NORMAL);
  text("⟲", 490, 620);


  //ROTATE AND STOP BUTTONS
  if (!rotateMode) {
    noStroke();
    fill(0);
    textSize(30);
    textFont('Poppins');
    textStyle(BOLD);
    text("SPIN", centerX - 40, centerY + 10);
  } else {
    noStroke();
    fill(0);
    textSize(30);
    textFont('Poppins');
    textStyle(BOLD);
    text("STOP", centerX - 40, centerY + 10);
  }

  push();
  noStroke();
  fill(0);
  textSize(16);
  textFont('Poppins');
  textStyle(NORMAL);
  if (complementaryMode) {
    text("Complementary color schemes use two opposite colors on the color wheel.", 50, 725);
  } else if (analogousMode) {
    text("Analogous color schemes use three adjacent colors on the color wheel.", 50, 725);
  } else if (triadicMode) {
    text("Triadic color schemes use three evenly spaced colors on the color wheel.", 50, 725);
  } else if (tetradicMode) {
    text("Tetradic color schemes use two complementary pairs.", 50, 725);
  } else if (squareMode) {
    text("The square color scheme is similar to the rectangle, but with all four colors \n spaced evenly around the color circle.", 50, 725);
  }

  pop();

}

function colorSchemes() {
  complementary = createButton('Complementary');
  complementary.position(60, 650);
  complementary.mousePressed(complementaryScheme);
  complementary.style('font-size', '18px');
  complementary.style("font-family", "Poppins");


  analogous = createButton('Analogous');
  analogous.position(240, 650);
  analogous.mousePressed(analogousScheme);
  analogous.style('font-size', '18px');
  analogous.style("font-family", "Poppins");


  triadic = createButton('Triadic');
  triadic.position(370, 650);
  triadic.mousePressed(triadicScheme);
  triadic.style('font-size', '18px');
  triadic.style("font-family", "Poppins");

  tetradic = createButton('Tetradic');
  tetradic.position(460, 650);
  tetradic.mousePressed(tetradicScheme);
  tetradic.style('font-size', '18px');
  tetradic.style("font-family", "Poppins");

  square = createButton('Square');
  square.position(560, 650);
  square.mousePressed(squareScheme);
  square.style('font-size', '18px');
  square.style("font-family", "Poppins");

}

function complementaryScheme() {
  console.log("SELECTED Complementary");
  complementaryMode = true;
  analogousMode = false;
  triadicMode = false;
  tetradicMode = false;
  squareMode = false;
  main = false;
  lock = false;
}

function analogousScheme() {
  console.log("SELECTED Analogous");
  analogousMode = true;
  complementaryMode = false;
  triadicMode = false;
  tetradicMode = false;
  squareMode = false;
  main = false;
  lock = false;
}

function triadicScheme() {
  console.log("SELECTED Triadic");
  analogousMode = false;
  complementaryMode = false;
  triadicMode = true;
  tetradicMode = false;
  squareMode = false;
  main = false;
  lock = false;
}

function tetradicScheme() {
  console.log("SELECTED Tetradic");
  analogousMode = false;
  complementaryMode = false;
  triadicMode = false;
  tetradicMode = true;
  squareMode = false;
  main = false;
  lock = false;
}

function squareScheme() {
  console.log("SELECTED square");
  squareMode = true;
  tetradicMode = false;
  triadicMode = false;
  complementaryMode = false;
  analogousMode = false;
  main = false;
  lock = false;
}

//save canvas as an image function
function keyPressed() {
  if (key == 's' || key == 'S') {
    //saves canvas as an image - jpg or png
    // saveCanvas('image','png');
    saveCanvas(gd.timestamp(), 'png');
  }
}
