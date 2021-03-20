class Agent{
    constructor(_x, _y){
        this.position = createVector(_x, _y);
        this.size = 5;
    }

    display(){ 
        fill(0);
        rect(this.position.x, this.position.y,  this.size,  this.size);
    }

    move(target){    
        this.position = p5.Vector.lerp(this.position, target, 0.5);
    }

    scatter(target){
        this.position = p5.Vector.lerp(this.position, target, 0.5);
    }
}