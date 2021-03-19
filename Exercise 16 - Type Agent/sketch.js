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
function preload() {
    //load images: L
    Lchar = loadImage('images/L.png');
    Achar = loadImage('images/A.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(220);
    rectMode(CORNER);
    guiControls();


    for (let i = 0; i < totalAgents; i++) {
        agents.push(new Agent(random(0, width), random(0, height)));
    }

    dock = createVector(0, 0)
}

function draw() {
    background(220);

    // for (let t = 0; t < chars.length; t++) {
    let index = chars.length - 1;
    if (chars[index] == 'A') {
        Aletter = new A(Achar, chars.length);

        let prevLetterLength;
        if (prevLet == undefined) {
            prevLetterLength = 0;
        } else {
            prevLetterLength = prevLet.arrayIndexes.length;
        }

        // console.log("A");
        for (let i = prevLetterLength; i < prevLetterLength + Aletter.arrayIndexes.length; i++) {
            agents[i].move(Aletter.arrayIndexes[i - prevLetterLength], chars.length);
        }
        prevLet = Aletter;
        inputHistory.push(Aletter);
    }

    if (chars[index] == 'L') {
        Lletter = new A(Lchar, chars.length);

        // console.log("L");
        let prevLetterLength;
        if (prevLet == undefined) {
            prevLetterLength = 0;
        } else {
            prevLetterLength = prevLet.arrayIndexes.length;
        }

        for (let i = prevLetterLength; i < prevLetterLength + Lletter.arrayIndexes.length; i++) {
            agents[i].move(Lletter.arrayIndexes[i - prevLetterLength], chars.length);
        }
        prevLet = Lletter;
        inputHistory.push(Lletter);
    }

    if (chars.length == 0) {
        console.log("no letters");
        // for (let i = 0; i < agents.length; i++) {
            let scatterAgents = [];
            for (let i = 0; i < agents.length; i++) {
                let newTarget = createVector(random(0, width), random(0, height));
                agents[i].scatter(dock);
            }
    } 

   

    //display agent
    agents.forEach(agent => {
        agent.display();
    });

}



function guiControls() {

    //molecule variables
    var controlVar = {
        text: ""
    };

    var gui = new dat.GUI();

    gui.add(controlVar, 'text').onChange(function () {
        text = controlVar.text;
        chars = text.split('');
    });
}


//save canvas as an image function
function keyPressed() {
    if (key == 's' || key == 'S') {
        //saves canvas as an image - jpg or png
        // saveCanvas('image','png');
        saveCanvas(gd.timestamp(), 'png');
    }

}