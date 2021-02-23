class Curve{
    constructor(_x, _y){
        this.x = _x;
        this.y = _y;
    }

    render(_x,_y){
        //update x and y
        this.x = _x;
        this.y = _y;
    }

    curve(_mouseX, _mouseY) {
        curveVertex(this.x + moveX, this.y + moveY);
        for(let i = 0; i < curves.length; i++){
            curveVertex(curves[i].x + _mouseX, curves[i].y + _mouseY);
        }
        // last controlled point
        curveVertex(curves[0].x + moveX, curves[0].y + moveY);
        curveVertex(curves[1].x + moveX, curves[1].y + moveY);
    }
}