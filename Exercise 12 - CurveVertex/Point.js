class Point {
    constructor(_x, _y) {
        this.position = createVector(_x, _y);
    }

    circle() {
        push();
        translate(originX, originY);        
        //for each point draw circle
        fill(0);
        ellipse(this.position.x, this.position.y, 10, 10);
        pop();
    }

    update(xPos, yPos) {
        this.position.x = xPos;
        this.position.y = yPos;
    }
}