class A {
    constructor(_img, _index) {
        this.boxW = 7;
        this.box = 7;
        this.index = _index;
        // this.img = _img;
        this.arrayIndexes = A.imagepixels(_img);
    }

    display() {
        for (let y = 0; y < 200; y += 50) {
            for (let x = 0; x < 200; x += 50) {
                // noFill();
                // rect(x, y, 50, 50);
            }
        }
    }

    static imagepixels(img) {
        // let letter = createGraphics(0, 0);
        // letter.image(img, 0, 0);
        let indexes = [];
        image(img, 0, 0);
        push();
        translate(this.index * 50, 0);
        for (let y = 0; y < img.height; y+=5) {
            for (let x = 0; x < img.width; x+=5) {
                const [r, g, b] = get(x, y);
                // console.log([r, g, b]);
                // //if pixel color is black
                if (r == 0 && b == 0 && g == 0) {
                    indexes.push(createVector(x, y));
                }
            }
        }
        background(220);
        pop();
        // img.updatePixels();
        return indexes;
    }
}