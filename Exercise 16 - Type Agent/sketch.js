/*
**  Interactive Typography using Agents
**  
**
*/


let agents = [];

function setup() {
    createCanvas(500, 500);
    background(220);
    rectMode(CORNER);

    //agent
    agents.push(new Agent(0, 0));

    //target
    agents.push(new Agent(width / 2, height / 2));
}

function draw() {
    background(220);

    agents[0].position.x = lerp(agents[0].position.x, agents[1].position.x, 0.05);
    agents[0].position.y = lerp(agents[0].position.y, agents[1].position.y , 0.05);


    //display agent
    agents.forEach(agent => {
        agent.display();
    });

}
