class Curve{
    constructor(_x, _y){
        this.x = _x;
        this.y = _y;
    }

    update(_x,_y){
        //update x and y
        this.x = _x;
        this.y = _y;
    }

    curve() {
        push();
        beginShape();
        stroke(col);
        noFill();
        //first controlled point
        curveVertex(this.x + moveX, this.y + moveY);
        curveVertex(this.x + moveX, this.y + moveY);
        for(let i = 0; i < curves.length; i++){
            curveVertex(curves[i].x + moveX, curves[i].y + moveY);
        }
        // last controlled point
        curveVertex(curves[0].x + moveX, curves[0].y + moveY);
        endShape();
        pop();
    }
}