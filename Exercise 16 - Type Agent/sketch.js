/*
**  Interactive Typography using Agents
**  
**
*/


let agents = [];
let target;
let agent;
let arrayPos = [];
let c;
let imgSizeW = 99;
let imgSizeH = 96;
let text = "";
let stringText = [];
let p;
let totalAgents = 200;
let chars = [];
let track = 0;
let prevLet, nextLet;
let dock;
let inputHistory = [];
let agentsUsed = 0;
let timer = 0;


let drawXpos = 20;
let drawYpos = 20;
let count = 0;
let done = false;
let targets = [];

let Aletter, Lletter, Bletter;
function preload() {

    /*
    **  35 x 35 dimensions
    **  load images
    */
    Achar = loadImage('images/A-copy2.png');
    Bchar = loadImage('images/B.png');
    Cchar = loadImage('images/C.png');
    Dchar = loadImage('images/D.png');
    Echar = loadImage('images/E.png');
    Fchar = loadImage('images/F.png');
    Gchar = loadImage('images/G.png');
    Hchar = loadImage('images/H.png');
    Ichar = loadImage('images/I.png');
    Jchar = loadImage('images/J-2.png');
    Kchar = loadImage('images/K.png');
    Lchar = loadImage('images/L.png');
    Mchar = loadImage('images/M.png');
    Nchar = loadImage('images/N.png');
    Ochar = loadImage('images/O.png');
    Pchar = loadImage('images/P.png');
    Qchar = loadImage('images/Q.png');
    Rchar = loadImage('images/R.png');
    Schar = loadImage('images/S.png');
    Tchar = loadImage('images/T.png');
    Uchar = loadImage('images/U.png');
    Vchar = loadImage('images/V.png');
    Wchar = loadImage('images/W.png');
    Xchar = loadImage('images/X-copy.png');
    Ychar = loadImage('images/Y.png');
    Zchar = loadImage('images/Z.png');

}

function setup() {
    createCanvas(windowWidth, 500);
    background(220);
    rectMode(CORNER);
    // guiControls();


    createAgents();

    dock = createVector(width / 2, height / 2);
}

function draw() {
    background(220);

    // for (let t = 0; t < chars.length; t++) {
    let index = chars.length - 1;



    let prevLetterLength;
    switch (key) {
        case 'A':
            updateAgents(Aletter);
            break;
        case 'B':
            updateAgents(Bletter);
            break;
        case 'C':
            updateAgents(Cletter);
            break;
        case 'D':
            updateAgents(Dletter);
            break;
        case 'E':
            updateAgents(Eletter);
            break;
        case 'F':
            updateAgents(Fletter);
            break;
        case 'G':
            updateAgents(Gletter);
            break;
        case 'H':
            updateAgents(Hletter);
            break;
        case 'I':
            updateAgents(Iletter);
            break;
        case 'J':
            updateAgents(Jletter);
            break;
        case 'K':
            updateAgents(Kletter);
            break;
        case 'L':
            updateAgents(Lletter);
            break;
        case 'M':
            updateAgents(Mletter);
            break;
        case 'N':
            updateAgents(Nletter);
            break;
        case 'O':
            updateAgents(Oletter);
            break;
        case 'P':
            updateAgents(Pletter);
            break;
        case 'Q':
            updateAgents(Qletter);
            break;
        case 'R':
            updateAgents(Rletter);
            break;
        case 'S':
            updateAgents(Sletter);
            break;
        case 'T':
            updateAgents(Tletter);
            break;
        case 'U':
            updateAgents(Uletter);
            break;
        case 'V':
            updateAgents(Vletter);
            break;
        case 'W':
            updateAgents(Wletter);
            break;
        case 'X':
            updateAgents(Xletter);
            break;
        case 'Y':
            updateAgents(Yletter);
            break;
        case 'Z':
            updateAgents(Zletter);
            break;
    }

    switch (keyCode) {
        case 8:
            updateDeletedChar();
            break;
    }


    // if (chars.length == 0) {
    //     // console.log("no letters");
    //     // for (let i = 0; i < agents.length; i++) {
    //     let scatterAgents = [];
    //     for (let i = 0; i < agents.length; i++) {
    //         let newTarget = createVector(random(0, width), random(0, height));
    //         agents[i].scatter(dock);
    //     }
    // }
    if (prevLet !== undefined) {
        // let prev = prevLet.arrayIndexes.length;
        if (agentsUsed + prevLet.arrayIndexes.length >= totalAgents) {
            agentsUsed = totalAgents - agentsUsed - prevLet.arrayIndexes.length;
            console.log("DELETE");
            //BACK TO 0
            // agentsUsed = 0;
        }
    }


    //cursor
    displayMarker(drawXpos, drawYpos);

    //display agents
    agents.forEach(agent => {
        agent.display();
    });

}

function updateAgents(letter) {
    let letterlength = letter.arrayIndexes.length;
    for (let i = agentsUsed; i < agentsUsed + letterlength; i++) {
        agents[i].move(letter.arrayIndexes[i - agentsUsed]);
    }
}

function createAgents() {
    // while (done == false) {
    for (let i = 0; i < totalAgents; i++) {
        agents.push(new Agent(random(0, width), random(height / 2, height)));
    }
    // }
}

function displayMarker(drawPosX, drawPosY) {
    let fillCol;
    //blinking cursor effect
    if (frameCount % 80 > 40) {
        fillCol = color(220);
    }
    else {
        fillCol = color(255, 0, 0);
    }

    noStroke();
    fill(fillCol);
    rect(drawPosX, drawPosY, 5, 45);
}

function updateDeletedChar() {
    let letterLength = prevLet.arrayIndexes.length;
    console.log(agentsUsed,letterLength);
    // let targets = [];
    // console.log(targets);
    for (let i = agentsUsed; i < letterLength; i++) {
        for (let x = 0; x < targets.length; x++) {
            agents[i].move(targets[x]);
        }
    }
}

// function guiControls() {

//     //molecule variables
//     var controlVar = {
//         text: ""
//     };

//     var gui = new dat.GUI();

// }


//save canvas as an image function
function keyPressed() {

    // if (key == 's' || key == 'S') {
    //     //saves canvas as an image - jpg or png
    //     // saveCanvas('image','png');
    //     saveCanvas(gd.timestamp(), 'png');
    // }

    if (keyCode == DELETE || keyCode == BACKSPACE) {
        // console.log(agentsUsed, prevLet);
        // let ind = chars.length - 1;
        // console.log(chars[ind]);
        // console.log('d',agentsUsed);
        // agentsUsed = agentsUsed - prevLet.arrayIndexes.length;
        // console.log('b',agentsUsed);
        
        for(let i = 0; i < prevLet.arrayIndexes.length; i++){
             targets.push(createVector(random(0,width), random(0, height)));
        }
        // updateDeletedChar();
        //remove last letter
        chars.pop();
        drawXpos = drawXpos - 50;
    }

    if (key == 'A') {
        Aletter = getLetterInfo(Achar);
        //move cursor
        drawXpos = drawXpos + 50;
    }

    if (key == 'B') {
        Bletter = getLetterInfo(Bchar);
        drawXpos = drawXpos + 50;
    }
    if (key == 'C') {
        Cletter = getLetterInfo(Cchar);
        drawXpos = drawXpos + 50;
    }
    if (key == 'D') {
        Dletter = getLetterInfo(Dchar);
        drawXpos = drawXpos + 50;
    }
    if (key == 'E') {
        Eletter = getLetterInfo(Echar);
        drawXpos = drawXpos + 50;
    }
    if (key == 'F') {
        Fletter = getLetterInfo(Fchar);
        drawXpos = drawXpos + 50;
    }
    if (key == 'G') {
        Gletter = getLetterInfo(Gchar);
        drawXpos = drawXpos + 50;
    }
    if (key == 'H') {
        Hletter = getLetterInfo(Hchar);
        drawXpos = drawXpos + 50;
    }
    if (key == 'I') {
        Iletter = getLetterInfo(Ichar);
        drawXpos = drawXpos + 50;
    }
    if (key == 'J') {
        Jletter = getLetterInfo(Jchar);
        drawXpos = drawXpos + 50;
    }
    if (key == 'K') {
        Kletter = getLetterInfo(Kchar);
        drawXpos = drawXpos + 50;
    }
    if (key == 'L') {
        Lletter = getLetterInfo(Lchar);
        drawXpos = drawXpos + 50;
    }
    if (key == 'M') {
        Mletter = getLetterInfo(Mchar);
        drawXpos = drawXpos + 50;
    }
    if (key == 'N') {
        Nletter = getLetterInfo(Nchar);
        drawXpos = drawXpos + 50;
    }
    if (key == 'O') {
        Oletter = getLetterInfo(Ochar);
        drawXpos = drawXpos + 50;
    }
    if (key == 'P') {
        Pletter = getLetterInfo(Pchar);
        drawXpos = drawXpos + 50;
    }
    if (key == 'Q') {
        Qletter = getLetterInfo(Qchar);
        drawXpos = drawXpos + 50;
    }
    if (key == 'R') {
        Rletter = getLetterInfo(Rchar);
        drawXpos = drawXpos + 50;
    }
    if (key == 'S') {
        Sletter = getLetterInfo(Schar);
        drawXpos = drawXpos + 50;
    }
    if (key == 'T') {
        Tletter = getLetterInfo(Tchar);
        drawXpos = drawXpos + 50;
    }
    if (key == 'U') {
        Uletter = getLetterInfo(Uchar);
        drawXpos = drawXpos + 50;
    }
    if (key == 'V') {
        Vletter = getLetterInfo(Vchar);
        drawXpos = drawXpos + 50;
    }
    if (key == 'W') {
        Wletter = getLetterInfo(Wchar);
        drawXpos = drawXpos + 50;
    }
    if (key == 'X') {
        Xletter = getLetterInfo(Xchar);
        drawXpos = drawXpos + 50;
    }
    if (key == 'Y') {
        Yletter = getLetterInfo(Ychar);
        drawXpos = drawXpos + 50;
    }
    if (key == 'Z') {
        Zletter = getLetterInfo(Zchar);
        drawXpos = drawXpos + 50;
    }


    //SPACE
    if (keyCode === 32) {
        console.log("space");
        drawXpos = drawXpos + 50;
    }
    if (keyCode === 13) {
        console.log("space");
        drawXpos = 20;
        drawYpos = drawYpos + 50;
    }

}

function getLetterInfo(character) {
    if (prevLet == undefined) {
        prevLet = 0;
    } else {
        //get the amount of agents the previous letter used
        prevLet = prevLet.arrayIndexes.length;
    }

    //add previous letter agents used to get total
    agentsUsed = agentsUsed + prevLet;
    chars.push(key);
    //create letter object
    letter = new Letter(character, chars.length, drawXpos, drawYpos);
    nextLet = letter;
    //set letter as the previous letter
    prevLet = letter;

    inputHistory.push(letter.arrayIndexes.length);
    //return letter object
    return letter;
}