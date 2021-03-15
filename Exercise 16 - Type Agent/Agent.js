class Agent{
    constructor(_x, _y){
        this.position = createVector(_x, _y);
        this.velocity = createVector(random(-2, 2), random(-2, 2));
        this.size = 10;
    }

    display(){ 
        fill(0);
        rect(this.position.x, this.position.y,  this.size,  this.size);
    }

    move(target){
        this.position.x = lerp(this.position.x, target.x, 0.05);
        this.position.y = lerp(this.position.y, target.y, 0.05);
    }
}