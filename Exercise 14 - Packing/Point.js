class Point {
    constructor(_x, _y, _rad) {
        this.position = createVector(_x, _y);
        this.rad = _rad;
        this.growing = true;
        this.col = color('#c4e9ef');
        this.outside = false;
    }

    render() {
        if(this.rad < 5){
            this.col = color('#868f97');
        } else if(this.rad < 10){
            this.col = color('#a1a9b6');
        } else if(this.rad < 15){
            this.col = color('#acdee7');
        } else if(this.rad < 20){
            this.col = color('#778ba3');
        } else if(this.rad < 30){
            this.col = color('#9ca6b2');
        }
    
        fill(this.col);
        stroke(0);
        // noStroke();
        ellipse(this.position.x, this.position.y, this.rad * 2, this.rad * 2);
    }

    grow() {
        if (this.growing) {
            this.rad += 0.5;
        }
    }

    checkClosest() {
        let closest = 1000;
        let closestPoint;
        for (let i = 0; i < points.length; i++) {
            // check distance between points
            let newDist = dist(this.position.x, this.position.y, points[i].position.x, points[i].position.y) - this.rad - points[i].rad;

            if (newDist < 0) {
                // console.log("null");
                return null;
            }

            // //get the closest point
            if (newDist < closest) {
                closest = newDist;
                closestPoint = i;
            }
        }
        
        return closestPoint;
    }

    checkIfInside(_circle){
        for (let i = 0; i < points.length; i++) {
            // check distance between points
            let distance = dist(this.position.x, this.position.y, _circle.position.x, _circle.position.y);
            if(distance + this.rad == _circle.rad){
                // console.log("inside but touching");
                return true;
            } else if(distance + this.rad < _circle.rad){
                // console.log("inside but not touching")
                return true;
            } else if(distance + this.rad > _circle.rad){
                // console.log("not inside");
                return false;
            }
        }
    }

    // Check edges
    checkEdges() {
        return (
            this.position.x - this.rad <= 0 ||
            this.position.x + this.rad >= width ||
            this.position.y - this.rad <= 0 ||
            this.position.y + this.rad >= height);
    }


    pack() {
        if (this.growing) {
            if(this.checkEdges()){
                this.growing = false;
            } 

            for(let j = 0; j < points.length; j++){
                let other = points[j];

                if(other != this){
                    let distance = p5.Vector.sub(this.position, other.position);
                    let rDist = distance.mag();
                    if (rDist < this.rad + other.rad){
                        this.growing = false;
                    } 
                }
            }
        }
    }
}