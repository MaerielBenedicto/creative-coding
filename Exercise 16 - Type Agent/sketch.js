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
let prevLet;
let dock;
let inputHistory = [];
let agentsUsed = 0;
let timer = 0;


let drawXpos = 20;
let drawYpos = 20;
let count = 0;

let Aletter, Lletter, Bletter;
function preload() {
    //load images
    Achar = loadImage('images/A-copy2.png');
    Bchar = loadImage('images/B.png');
    Cchar = loadImage('images/C.png');
    Dchar = loadImage('images/D.png');
    Echar = loadImage('images/E.png');
    Lchar = loadImage('images/L.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(220);
    rectMode(CORNER);
    guiControls();


    createAgents();

    dock = createVector(width / 2, height / 2);
}

function draw() {
    background(220);

    // for (let t = 0; t < chars.length; t++) {
    let index = chars.length - 1;



    let prevLetterLength;
    switch (chars[index]) {
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
        case 'L':
            updateAgents(Lletter);
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
        agents[i].move(letter.arrayIndexes[i - agentsUsed], chars.length);
    }
}

function createAgents() {
    for (let i = 0; i < totalAgents; i++) {
        agents.push(new Agent(random(0, width), random(height / 2, height)));
    }
}

function displayMarker(drawPosX, drawPosY) {
    let fillCol;
    //blinking cursor effect
    if (frameCount % 80 > 40) {
        fillCol = color(220);
    }
    else {
        fillCol = color(0);
    }

    noStroke();
    fill(fillCol);
    rect(drawPosX, drawPosY, 5, 45);
}



function guiControls() {

    //molecule variables
    var controlVar = {
        text: ""
    };

    var gui = new dat.GUI();

    // gui.add(controlVar, 'text').onChange(function () {
    //     text = controlVar.text;
    //     chars = text.split('');
    // });
}


//save canvas as an image function
function keyPressed() {
    if (key == 's' || key == 'S') {
        //saves canvas as an image - jpg or png
        // saveCanvas('image','png');
        saveCanvas(gd.timestamp(), 'png');
    }
    if (keyCode == DELETE || keyCode == BACKSPACE) {
        console.log(chars.length);
        let ind = chars.length - 1;
        console.log(chars[0]);
    }

    if (key == 'A') {
        Aletter = getLetterInfo(Achar);
        //move cursor
        drawXpos = drawXpos + 50;
    }
    if (key == 'L') {
        Lletter = getLetterInfo(Lchar);
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

}

function getLetterInfo(character){
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
    
    //set letter as the previous letter
    prevLet = letter;

    inputHistory.push(letter.arrayIndexes.length);
    //return letter object
    return letter;
}