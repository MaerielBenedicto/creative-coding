/*
**  Interactive Typography using Agents
**  
**
*/


let agents = [];
let target;
let agent;

function setup() {
    createCanvas(500, 500);
    background(220);
    rectMode(CORNER);

    //agent
    agents.push(new Agent(0, 0));

    //target
    agents.push(new Agent(width / 2, height / 2));

    agent = agents[0];
    target = agents[1];
}

function draw() {
    background(220);

    agent.position.x = lerp(agent.position.x, target.position.x, 0.05);
    agent.position.y = lerp(agent.position.y, target.position.y, 0.05);


    //display agent
    agents.forEach(agent => {
        agent.display();
    });
}

function mousePressed(){
    target.position.x = mouseX;
    target.position.y = mouseY;
}


