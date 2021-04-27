class Graphic {
    constructor(_i, _letter, _fontSize) {
        this.graphic = Graphic.makeGraphic(_i, _fontSize);
        this.letter = _letter;
        this.arrVectors = Graphic.indexes(this.graphic, this.letter);
        this.history = Graphic.history(this.letter);
    }

    static makeGraphic(i, fontsize) {
        let img = createGraphics(fontsize + 20, fontSize + 20);

        img.pixelDensity(1);
        img.background(255);
        img.textFont(selectedFont);
        img.textSize(fontSize);
        img.text(message[i], 0, fontSize);
        img.loadPixels();

        return img;
    }

    static indexes(textImg, letter) {
        let pointDensityP = 5;
        indexes = [];
        for (let x = 0; x < textImg.width; x += pointDensityP) {
            for (let y = 0; y < textImg.height; y += pointDensityP) {
                // Calculate the index for the pixels array from x and y
                let index = (x + y * textImg.width) * 4;

                let b = textImg.pixels[index];
                if (b == 0) indexes.push(createVector(x + positionX, y + positionY));
            }
        }

        if (letter.match(/[Iil]/g)) positionX = positionX + 15;
        else positionX = positionX + kerning;

        if (letter.match(/[,]/g)) {
            positionX = initialpositionX;
            positionY = positionY + 80;
        }

        if (selectedFont == squareFont) {
            kerning = kerning;
            positionX = positionX + kerning;
        }
        
        if ((letter.match(/[Iil]/g)) && selectedFont == squareFont) {
            positionX = positionX;
        }

        return indexes;
    }

    static history(letter) {
        let pointDensityH = 15;

        let img2 = createGraphics(150, 150);
        img2.pixelDensity(1);
        img2.background(225);
        img2.textFont(selectedFont);
        img2.textSize(150);
        img2.text(letter, 0, 150);
        img2.loadPixels();

        indexes = [];
        for (let x = 0; x < img2.width; x += pointDensityH) {
            for (let y = 0; y < img2.height; y += pointDensityH) {
                // Calculate the index for the pixels array from x and y
                let index = (x + y * img2.width) * 4;

                let b = img2.pixels[index];
                if (b == 0) indexes.push(createVector(x + width - 210, y + height - 220));
            }
        }

        if (letter.match(/[Iil]/g)) positionX = positionX + 15;
        else positionX = positionX + kerning;

        return indexes;
    }


}