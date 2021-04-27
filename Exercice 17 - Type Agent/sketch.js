
let ctx;
let path;
let fontSize = 50;
let dubai;
let dubai_font = false;
let squareFont;
let square_font = true;
let zen;
let zenFont;

let font = "dubai";
let selectedFont;
let letterLen = 0;
let pointDensity = 2;

let positionX = 180;
let positionY = 200;
let initialpositionX = positionX - 10;


let inputHistories = [];
let inputHistory = [];
let iPositionX = 1687;
let iPositionY = 343;
let numUsed = 0;

let kerning = fontSize - 30;
let agentSize = 5;
let mod;
let prevLet;
let letters = [];

let message = "A world of dew,And within every dewdrop,A world of struggle.";

let indexes = [];
let indexPositions = [];

let agents = [];
let totalAgents = 600;
let agentsUsed = 0;

let arrayIndexes = [];
let start = 0;
let end = 0;
let total = 0;
let inputs = [];

let startSimulation = false;
let lerpSpeed = 0.3;
let circle = false;
let square = true;
let scattered = false;

let ind = 0;
let current;

let initial;

let boxWidth01 = 240;
let boxHeight01 = 200;

let boxWidth02 = 240;
let boxHeight02 = 40;

let startingPosX;
let startingPosY;;


//load fonts
function preload() {
    dubai = loadFont('data/DubaiSummer.otf');
    zen = loadFont('data/ZenDots-Regular.ttf');
    squareFont = loadFont('data/SquareOne-K10o.ttf');
}

function setup() {
    createCanvas(windowWidth, 700);
    ctx = canvas.getContext("2d");
    background('#e6e4e0');
    // selectedFont = dubai;
    startingPosX = width - boxWidth01 - 50;
    startingPosY = 223;

    guiControls();
    createAgents();
    setupText(message);
    // getLetter();
    displayGrid();
}

function setupText(text) {
    letters = [];
    message = text;
    console.log("this", startSimulation)
    if (font == "dubai") {
        selectedFont = dubai;
    } else if (font == "zen") {
        selectedFont = zen;
    } else if (font == 'square') {
        selectedFont = squareFont;
    }

    positionX = 180;
    positionY = 200;
    initialpositionX = positionX - 10;


    fontSize = fontSize;
    pointDensity = fontSize / 10;

    if (startSimulation) {
        // create a graphics object to draw the text into
        for (let i = 0; i < message.length; i++) {
            letters.push(new Graphic(i, message[i], Math.ceil(fontSize)));
        }

        getLetter();

        for (let i = 0; i < letters.length; i++) {
            inputs = [];
            //create new agents
            for (let j = 0; j < letters[i].history.length; j++) {
                inputs.push(new Agent(width - 60, height / 2 - 80, 10));
            }
            inputHistories.push(inputs);
        }

        for (let z = 0; z < letters.length; z++) {
            let index = 0;
            //set agents target
            for (let v = 0; v < inputHistories[z].length; v++) {
                inputHistories[z][v].target.x = letters[z].history[index].x;
                inputHistories[z][v].target.y = letters[z].history[index].y;
                index++;
            }
        }

    }
}

//count total agents that will be used
function countTotal() {
    let arr = [];
    let total = 0;
    for (let i = 0; i < letters.length; i++) {
        arr.push(letters[i].arrVectors.length);
    }

    total = arr.reduce((a, b) => a + b, 0)
    return total;
}


function draw() {
    if (!font) return
    background(230, 228, 224, 25);
    displayGrid();
    displayAgentsInfo();

    if (startSimulation == true) {
        for (let i = 0; i < arrayIndexes.length; i++) {
            update(arrayIndexes[i], i);
            input(i);
        }
    }

    //display agents
    agents.forEach((agent, i) => {
        agent.display();
    });
}

//move agents
function update(letter, i) {
    setTimeout(() => {
        for (let j = letter.start; j < letter.end; j++) {
            agents[j].move();
        }
    }, 1000 * i)
}

//display input history 
function input(i) {
    setTimeout(() => {
        for (let j = 0; j < inputHistories[i].length; j++) {
            inputHistories[i][j].move();
            inputHistories[i][j].display();
        }
        numUsed = inputHistories[i].length;
        push()
        fill(0)
        textFont(selectedFont);
        textSize(16);
        text("Agents used:  " + numUsed, startingPosX, startingPosY + boxHeight01 + 20);
        pop();
    }, 1000 * i)
}

function getLetter() {
    arrayIndexes = [];
    start = 0;
    let arrPos;
    let left;
    // console.log("get", letters)
    for (let m = 0; m < letters.length; m++) {
        arrPos = {
            start: start,
            end: start + letters[m].arrVectors.length,
            arr: letters[m].arrVectors.length,
            position: letters[m]
        }
        if (letters[m].length !== 0) {
            end = start + letters[m].arrVectors.length;
            start = start + letters[m].arrVectors.length;
        } else {
            end = start + letters[m].arrVectors.length;
            start = start + letters[m].arrVectors.length;
        }

        if ((arrPos.start + arrPos.arr) > totalAgents) {
            console.log(arrPos.start + arrPos.arr)
            arrPos.end = totalAgents;
            arrPos.arr = abs(arrPos.end - arrPos.start);
            start = 0;
            end = abs(totalAgents - end);

            let next = [];
            for (let i = 0; i < letters[m].length; i++) {
                next.push(letters[m][i]);
            }

            left = {
                start: 0,
                end: end,
                arr: end - start,
                position: next
            }

            start = left.end;
            end = letters[m].arrVectors.length;
        }

        arrayIndexes.push(arrPos);
        if (left != undefined) {
            arrayIndexes.push(left);
            left = undefined;
        }
    }

    let totalPoints = 0;
    let index = 0;
    totalPoints = countTotal();
    //if more agents than target
    if (totalPoints < agents.length) {
        let removeAgents = agents.length - totalPoints;
        agents.splice(removeAgents - 1, removeAgents);

        for (let i = 0; i < arrayIndexes.length; i++) {
            let letter = arrayIndexes[i];
            let index = 0;
            for (let j = letter.start; j < letter.end; j++) {
                agents[j].target.x = letters[i].arrVectors[index].x;
                agents[j].target.y = letters[i].arrVectors[index].y;
                index++;
            }
        }
    } 
    // else if(totalPoints > agents.length){
    //     for (let i = agents.length; i < totalPoints; i++) {
    //         let newAgent = agents[i - agents.length].clone();

    //         agents.push(newAgent);
    //     }
    // }
}

function createAgents() {
    agents = [];

    if (scattered) {
        for (let i = 0; i < totalAgents; i++) {
            agents.push(new Agent(random(0, width), random(0, height), agentSize));
        }
    } else {
        let ind = 0;
        let x = 5 * ind;
        let y = 20;
        let z = 2;
        for (let i = 0; i < totalAgents; i++) {
            x = 10 * ind;

            if (x > width / 2 - 300) {
                ind = 0;
                x = 5 * ind;
                y = 5 * z;
                z++;
            }

            agents.push(new Agent(x, y, agentSize));
            ind++;
        }
    }
}

function guiControls() {

    //molecule variables
    var controlVar = {
        // fontSize: 50,
        circle: false,
        color: 'black',
        // startSimulation: false,
        lerpSpeed: 0.8,
        kerning: 40,
        message: "A world of dew,And within every dewdrop,A world of struggle.",
        font: "dubai",
        scattered: false
    };

    var gui = new dat.GUI();

    //change font size
    // gui.add(controlVar, 'fontSize', 10, 90).onChange(function () {
    //     fontSize = controlVar.fontSize;
    //     setupText(controlVar.message);
    //     createAgents();
    // });

    //change agents initial position
    gui.add(controlVar, 'scattered').onChange(function () {
        scattered = controlVar.scattered;
        background(230, 228, 224, 20);
        setupText(message);
        createAgents();
    });

    //change lerp speed
    gui.add(controlVar, 'lerpSpeed', 0.05, 1).onChange(function () {
        lerpSpeed = controlVar.lerpSpeed;
    });

    //select type of font
    gui.add(controlVar, 'font', ['dubai', 'square', 'zen']).onChange(function () {
        font = controlVar.font;
        startSimulation = false;
        setupText(controlVar.message);
        createAgents();
    });

    gui.add(controlVar, 'message').onFinishChange(function () {
        message = controlVar.message
        startSimulation = false;
        setupText(message);
        createAgents();
    });



    //start simulation
    var button = {
        startSimulation: false,
        resetSimulation: false
    }

    var startButton1 = gui.add(button, 'startSimulation').listen();
    startButton1.onChange((value) => {
        button.startSimulation = true;
        button.resetSimulation = false;

        startSimulation = true;
        setupText(controlVar.message);
    });

    var startButton2 = gui.add(button, 'resetSimulation').listen();
    startButton2.onChange((value) => {
        button.startSimulation = false;
        button.resetSimulation = true;

        startSimulation = false;
        arrayIndexes = [];
        agents = [];
        letters = [];
        message = "";
        setupText(controlVar.message);
        createAgents();
    });





}

function reset() {
    startSimulation = false;
    lerpSpeed = 0;
    agents = [];

    setupText(message);
    createAgents();
    getLetter();
}

function displayGrid() {
    for (let x = 0; x < width; x += width / 13) {
        for (let y = 0; y < height; y += height / 10) {
            stroke('#dddbd9');
            strokeWeight(1);
            line(x, 0, x, height);
            line(0, y, width, y);
        }
    }
}

function displayAgentsInfo() {

    //box
    noFill();
    stroke('#817f7d');
    strokeWeight(1);
    rect(startingPosX, startingPosY, boxWidth01, boxHeight01);
    rect(startingPosX, startingPosY, boxWidth02, boxHeight02);

    //heading
    push()
    fill(0)
    textFont(selectedFont);
    textSize(20);
    text("Input History", startingPosX + 10, startingPosY + 25);
    pop();
}

function mousePressed() {
    console.log(mouseX, mouseY)
}