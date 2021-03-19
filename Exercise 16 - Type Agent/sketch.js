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


let drawXpos = 0;
let drawYpos = 0;
let count = 0;

let Aletter, Lletter;
function preload() {
    //load images: L
    Lchar = loadImage('images/L.png');
    Achar = loadImage('images/A-copy2.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(220);
    rectMode(CORNER);
    guiControls();


    createAgents();

    dock = createVector(width/2, height/2);
}

function draw() {
    background(220);

    // for (let t = 0; t < chars.length; t++) {
    let index = chars.length - 1;



    let prevLetterLength;
    switch (chars[index]) {
        case 'A':
            for (let i = agentsUsed; i < agentsUsed + Aletter.arrayIndexes.length; i++) {
                agents[i].move(Aletter.arrayIndexes[i - agentsUsed], chars.length);
            }
            break;


        case 'L':
            for (let i = agentsUsed; i < agentsUsed + Lletter.arrayIndexes.length; i++) {
                agents[i].move(Lletter.arrayIndexes[i - agentsUsed], chars.length);
            }
            break;
         default: 
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
    
    // for(let i = 0; i < inputHistory.length; i++){
    //     console.log(inputHistory[i])
    //     agentsUsed = agentsUsed + inputHistory[i];
    // }

    displayMarker(drawXpos, drawYpos);
    //display agent
    agents.forEach(agent => {
        agent.display();
    });

}

function createAgents() {
    for (let i = 0; i < totalAgents; i++) {
        agents.push(new Agent(random(0, width), random(0, height)));
    }
}

function displayMarker(drawPosX, drawPosY) {
    let fillCol;

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

    if(key == 'A'){
       chars.push(key);
       Aletter = new A(Achar, chars.length, drawXpos, drawYpos);
       prevLet = Aletter;
       inputHistory.push(Aletter.arrayIndexes.length);
       agentsUsed = agentsUsed + Aletter.arrayIndexes.length;
       drawXpos = drawXpos + 50;
    }
    if(key == 'L'){
        chars.push(key);
        Lletter = new A(Lchar, chars.length, drawXpos, drawYpos);
        prevLet = Lletter;
        inputHistory.push(Lletter.arrayIndexes.length);
        agentsUsed = agentsUsed + Lletter.arrayIndexes.length;
        drawXpos = drawXpos + 50;
    }

    // drawXpos += 10;
}