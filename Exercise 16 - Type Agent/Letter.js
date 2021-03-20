class Letter {
    constructor(_img, _index, _xpos, _ypos) {
        this.arrayIndexes = Letter.imagepixels(_img, _xpos, _ypos);
    }

    static imagepixels(img,xpos, ypos) {
        let indexes = [];
        image(img, xpos, ypos);
        push();
        for (let y = ypos; y < ypos + img.height; y+=5) {
            for (let x = xpos; x < xpos + img.width; x+=5) {
                const [r, g, b] = get(x, y);
                // //if pixel color is black
                if (r == 0 && b == 0 && g == 0) {
                    indexes.push(createVector(x, y));
                }
            }
        }
        // background(220);
        pop();
        return indexes;
    }
}