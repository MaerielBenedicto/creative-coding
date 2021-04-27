class Agent {
    constructor(_x, _y, _agentSize) {
        this.position = createVector(_x, _y);
        this.size = _agentSize;
        this.target = createVector(_x, _y);
    }

    display() {
        fill(0);
        if (circle) ellipse(this.position.x, this.position.y, this.size, this.size);
        else rect(this.position.x, this.position.y, this.size, this.size);

    }

    move() {
        //move agents to its target positions 
        this.position = p5.Vector.lerp(this.position, this.target, lerpSpeed);
    }

    clone() {
        let agent = new Agent(this.position.x, this.position.y, agentSize);

        if (scattered) {
            agent.position.x = random(0,width);
            agent.position.y = random(0, height);
        } else {
            agent.position.x = this.position.x;
            agent.position.y = this.position.y;
        }

        return agent;
    }
}