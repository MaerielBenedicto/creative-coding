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
function preload() {
    //load image: L
    l_img = loadImage('images/L.png');
}

function setup() {
    createCanvas(500, 500);
    background(220);
    rectMode(CORNER);

    //agent
    agents.push(new Agent(0, 0));

    //target
    agents.push(new Agent(width / 2, height / 2));

    for (let i = 0; i < 10; i++) {
        agents.push(new Agent(random(0, width), random(height / 2, height)));
    }

    agent = agents[0];
    target = agents[1];

    //check image
    image(l_img, 0, 0);
    l_img.loadPixels();
    for (let i = 0; i < l_img.width; i += 10) {
        for (let j = 0; j < l_img.height; j += 10) {
            const [r, g, b] = get(i, j);
            // console.log([r,g,b]);
            //if pixel color is black
            if (r == 0 && b == 0 && g == 0) {
                arrayPos.push(createVector(i, j));
            }
        }
    }
    l_img.updatePixels();
}

function draw() {
    background(220);

    // agent.position.x = lerp(agent.position.x, target.position.x, 0.05);
    // agent.position.y = lerp(agent.position.y, target.position.y, 0.05);

    //display agent
    agents.forEach(agent => {
        agent.display();
    });

    agents[2].position.x = lerp(agents[2].position.x, arrayPos[0].x, 0.05);
    agents[2].position.y = lerp(agents[2].position.y, arrayPos[0].y, 0.05);

    agents[3].position.x = lerp(agents[3].position.x, arrayPos[1].x, 0.05);
    agents[3].position.y = lerp(agents[3].position.y, arrayPos[1].y, 0.05);

    agents[4].position.x = lerp(agents[4].position.x, arrayPos[2].x, 0.05);
    agents[4].position.y = lerp(agents[4].position.y, arrayPos[2].y, 0.05);

    agents[5].position.x = lerp(agents[5].position.x, arrayPos[3].x, 0.05);
    agents[5].position.y = lerp(agents[5].position.y, arrayPos[3].y, 0.05);

    agents[6].position.x = lerp(agents[6].position.x, arrayPos[4].x, 0.05);
    agents[6].position.y = lerp(agents[6].position.y, arrayPos[4].y, 0.05);

    agents[7].position.x = lerp(agents[7].position.x, arrayPos[5].x, 0.05);
    agents[7].position.y = lerp(agents[7].position.y, arrayPos[5].y, 0.05);

    agents[8].position.x = lerp(agents[8].position.x, arrayPos[6].x, 0.05);
    agents[8].position.y = lerp(agents[8].position.y, arrayPos[6].y, 0.05);

}

function mousePressed() {
    // target.position.x = mouseX;
    // target.position.y = mouseY;

    console.log(mouseX, mouseY, get(mouseX, mouseY));
}


