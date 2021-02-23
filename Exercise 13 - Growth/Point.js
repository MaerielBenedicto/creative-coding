class Point {
    constructor(_x, _y, _dia) {
        this.position = createVector(_x, _y);
        this.dia = _dia;
    }

    render() {
        fill(0);
        strokeWeight(1);
        stroke(col);
        ellipse(this.position.x, this.position.y, this.dia, this.dia);
    }

    dock(_newPoint) {

        //point we want to move
        let currentPoint = _newPoint;

        // This is where we want to dock it to
        let closestPoint = this;
    
        let distance = p5.Vector.sub(closestPoint.position, currentPoint.position);
        // let rHeading = distance.heading();

        //the distance between two points (not from center)
        let rDist = distance.mag() - (currentPoint.dia/2 + closestPoint.dia/2);

        //calculate the angle and the direction 
        let angle = atan2(currentPoint.position.y - closestPoint.position.y, currentPoint.position.x - closestPoint.position.x);

        // Here we take away the calculated distance from the current position
        let newPositionX = currentPoint.position.x - cos(angle) * rDist;
        let newPositionY = currentPoint.position.y - sin(angle) * rDist;

        // console.log(newPositionX);
        // console.log(newPositionY);

        //update new position of new point
        currentPoint.position.x = newPositionX;
        currentPoint.position.y = newPositionY;
        currentPoint.render();
    }

}