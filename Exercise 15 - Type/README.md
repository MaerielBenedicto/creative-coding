# Typography with opentype.js

## Description
Using opentype.js to display a typography. 

## Functions
### Load font
The font is loaded using the `opentype.load()` method. The font is stored in the data folder. When the font failed to load, an error is logged into the console.
If successfully loaded, the loop() is turned on and the font is stored in the font variable. 

### getPath()
In the `getPath()` function, the string, x and y position where the string should begin and its font size are passed as arguments.
Opentype.js have a method called `getPath()` which returns the path.commands array. 
This path.commands array are the x and y of each points that forms the typography.

### fintMatch()
The `findMatch()` function accepts the string as an argument. In the `findMath()` function, the spaces from the string are removed. 
There is an empty array called match, and `shapeIndex` initialised to 1. 
A loop through the string is performed, and if the character matches one of the characters that will have double shapes ie 'o',
it takes the position of the character in the string and add 1 to it and is pushed into the match array.
One is added so that the shape after the index that matched the character will be the inside shape. 
The match array will track which 'M''Z' in the pathArray.
Another if statement which checks if the character is 'B', because with B, that means the next two shapes after it will be the inner shapes.
The `findMatch()` function then returns the match array. 

### drawType()
In the drawType function, a loop through the path array commands. An if statement checks if its type is M and Z.
if its M, the index is stored as the startVertex and if its Z, it is the endVertex.
Then `beginShape()` is called which starts drawing the vertex. A loops through from the startVertex to the endVertex. 
Inside the for loop is another for loop which checks if the current position from the pathArray matches the positions in the match array.
So evertime it detects the beginning of the shape, the variable charPos is incremented. 
If they match, the color is set and it exits out of the loop.

If the shape has ended (type is Z), then it exits out of loop again. Then `endShape()` is called. 