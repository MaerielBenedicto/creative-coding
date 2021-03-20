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
    //load images: L
    Lchar = loadImage('images/L.png');
    Achar = loadImage('images/A-copy2.png');
    Bchar = loadImage('images/B.png');
    Cchar = loadImage('images/C.png');
    Dchar = loadImage('images/D.png');
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
            let alength = Aletter.arrayIndexes.length;
            for (let i = agentsUsed; i < agentsUsed + alength; i++) {
                agents[i].move(Aletter.arrayIndexes[i - agentsUsed], chars.length);
            }
           
            break;
        case 'B':
            let blength = Bletter.arrayIndexes.length;

            for (let i = agentsUsed; i < agentsUsed + blength; i++) {
                agents[i].move(Bletter.arrayIndexes[i - agentsUsed], chars.length);
            }
            break;
        case 'C':
            let clength = Cletter.arrayIndexes.length;
            for (let i = agentsUsed; i < agentsUsed + clength; i++) {
                agents[i].move(Cletter.arrayIndexes[i - agentsUsed], chars.length);
            }
            break;
        case 'D':
            let Dlength = Dletter.arrayIndexes.length;
            for (let i = agentsUsed; i < agentsUsed + Dlength; i++) {
                agents[i].move(Dletter.arrayIndexes[i - agentsUsed], chars.length);
            }
            break;
        case 'L':
            let llength = Lletter.arrayIndexes.length;
            for (let i = agentsUsed; i < agentsUsed + llength; i++) {
                agents[i].move(Lletter.arrayIndexes[i - agentsUsed], chars.length);
            }
            break;
    }

    // console.log(prevLet);

    //first letter
   
    
    // if (chars.length == 0) {
    //     // console.log("no letters");
    //     // for (let i = 0; i < agents.length; i++) {
    //     let scatterAgents = [];
    //     for (let i = 0; i < agents.length; i++) {
    //         let newTarget = createVector(random(0, width), random(0, height));
    //         agents[i].scatter(dock);
    //     }
    // }


    displayMarker(drawXpos, drawYpos);
    //display agent
    agents.forEach(agent => {
        agent.display();
    });

}

function createAgents() {
    for (let i = 0; i < totalAgents; i++) {
        agents.push(new Agent(random(0, width), random(height / 2, height)));
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
    if (keyCode == DELETE || keyCode == BACKSPACE) {
        console.log(chars.length);
        let ind = chars.length - 1;
        console.log(chars[0]);
    }

    if (key == 'A') {
        if(prevLet == undefined){
            prevLet = 0;
        } else {
            //get the amount of agents the previous letter used
            prevLet = prevLet.arrayIndexes.length;
        }

        //add previous letter agents used to get total
        agentsUsed = agentsUsed + prevLet;
        chars.push(key);
        //create A 
        Aletter = new Letter(Achar, chars.length, drawXpos, drawYpos);
        //set A as the previous letter
        prevLet = Aletter;

        inputHistory.push(Aletter.arrayIndexes.length);
        
        //move cursor
        drawXpos = drawXpos + 50;
    }
    if (key == 'L') {
        if(prevLet == undefined){
            prevLet = 0;
        } else {
            prevLet = prevLet.arrayIndexes.length;
        }
        agentsUsed = agentsUsed + prevLet;
        chars.push(key);
        Lletter = new Letter(Lchar, chars.length, drawXpos, drawYpos);
        
        prevLet = Lletter;
        inputHistory.push(Lletter.arrayIndexes.length);
       
        drawXpos = drawXpos + 50;
    }
    if (key == 'B') {
        if(prevLet == undefined){
            prevLet = 0;
        } else {
            prevLet = prevLet.arrayIndexes.length;
        }
        agentsUsed = agentsUsed + prevLet;
        chars.push(key);
        Bletter = new Letter(Bchar, chars.length, drawXpos, drawYpos);
        prevLet = Bletter;
        inputHistory.push(Bletter.arrayIndexes.length);
        drawXpos = drawXpos + 50;
    }
    if (key == 'C') {
        if(prevLet == undefined){
            prevLet = 0;
        } else {
            prevLet = prevLet.arrayIndexes.length;
        }
        agentsUsed = agentsUsed + prevLet;
        chars.push(key);
        Cletter = new Letter(Cchar, chars.length, drawXpos, drawYpos);
        prevLet = Cletter;
        inputHistory.push(Cletter.arrayIndexes.length);
        drawXpos = drawXpos + 50;
    }
    if (key == 'D') {
        if(prevLet == undefined){
            prevLet = 0;
        } else {
            prevLet = prevLet.arrayIndexes.length;
        }
        agentsUsed = agentsUsed + prevLet;
        chars.push(key);
        Dletter = new Letter(Dchar, chars.length, drawXpos, drawYpos);
        prevLet = Dletter;
        inputHistory.push(Dletter.arrayIndexes.length);
        drawXpos = drawXpos + 50;
    }

}