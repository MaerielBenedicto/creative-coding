
class Point {
    constructor(_x, _y, _a) {
        this.position = createVector(_x, _y);
        this.angle = _a;
        this.s = 5;
        this.col = color(255, 255, 255);
    }

    draw() {
        stroke(this.col);
        strokeWeight(this.s);
        point(this.position.x, this.position.y);
    }

    update() {
        this.position.x  += cos(radians(this.angle) * stepSize);
        this.position.y += sin(radians(this.angle) * stepSize);

    }

    checkBorder() {
        if (this.position.x < 0 || this.position.x > width || this.position.y < 0 || this.position.y > height) {
            this.angle = randomAngle(this.position.x, this.position.y);
            let randomColor = colors[floor(random(0, colors.length))];
            (randomColor == 0) ? (this.col = color(255, 255, 255)) : null;
            (randomColor == 1) ? (this.col = color(18, 237, 213)) : null;
            (randomColor == 2) ? (this.col = color(84, 171, 183)) : null;
            (randomColor == 3) ? (this.col = color(168, 87, 145)) : null;

            let randomStroke = option[floor(random(0, option.length))];
            (randomStroke == 0) ? (this.s = 3) : null;
            (randomStroke == 1) ? (this.s = 5) : null;
        }    
    }

}
