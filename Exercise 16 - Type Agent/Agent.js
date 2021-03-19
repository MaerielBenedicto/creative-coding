class Agent{
    constructor(_x, _y){
        this.position = createVector(_x, _y);
        this.size = 5;
    }

    display(){ 
        fill(0);
        rect(this.position.x, this.position.y,  this.size,  this.size);
    }

    move(target, charIndex){
        // this.position.x = lerp(this.position.x, target.x, 0.05);
        // this.position.y = lerp(this.position.y, target.y, 0.05);
        push();
        translate(0 + (charIndex * 100), 0 + (charIndex * 100));
        this.position = p5.Vector.lerp(this.position, target, 0.08);
        pop();
    }

    scatter(target){
        // let scatterAgents = [];
        // for(let i = 0; i < agents.length; i++){
        //     scatterAgents.add(createVector(random(0,width), random(0,height)));
        // }
        // for(let j = 0; j < scatterAgents.length; j++){
            this.position = p5.Vector.lerp(this.position, dock, 0.08);
        // }
        // this.position.x = lerp(this.position.x, 0, 0.05);
        // this.position.y = lerp(this.position.y, height-5, 0.05);
    }
}