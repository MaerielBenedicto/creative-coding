class Letter {
    constructor(_letter, _letter2, _xpos, _ypos) {
        this.arrayIndexes = Letter.imagepixels(_letter, _letter2, _xpos, _ypos);
    }

    static imagepixels(letter, letter2, xpos, ypos) {
        let indexes = [];
        let I;
        let Xlen, Ylen;
        Xlen = fontSize + 10;
        Ylen = fontSize + 10;

        //IF I
        if (letter == "I" || letter == 'i') {
            // xpos = xpos + 15;
            Xlen = 15;
        }

        //after I
        if (letter2 == 'I' || letter2 == 'i') {
            xpos = xpos - 35;
            Xlen = fontSize + 20;
            // console.log('xs',xpos, xpos+Xlen);
        }


        push();
        for (let y = ypos; y < ypos + Ylen; y += 10) {
            for (let x = xpos; x < xpos + Xlen; x += 10) {
                const [r, g, b] = get(x, y);
                // //if pixel color is black
                if (r == 0 && b == 0 && g == 0) {
                    indexes.push(createVector(x - 10, y));
                }
            }
        }
        pop();
        // background(220);
        return indexes;
    }
}