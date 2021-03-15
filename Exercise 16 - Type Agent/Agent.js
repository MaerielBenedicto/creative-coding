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

    move(){
        this.position.add(this.velocity);
    }
}