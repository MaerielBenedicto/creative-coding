# Interactive Color Wheel

## Description
An interactive color wheel that changes the number of segments depending where the mouse is.

## Function

### Variables
The numOfSegments variable is the number of segments on the color wheel. The stepAngle variable is the angle of where the point is drawn. The radius variable is the radius of the circle.
The `angleMode()` is set to DEGREES and the `colorMode()` is set to HSB.

### Custom Shape
A HSB Color Wheel is created using the function `beginShape, vertex and endShape`.
The `beginShape()` allows for creating custom shapes. This function accepts different kind of shapes as a parameter i.e. TRIANGLE_FAN, LINES, POINTS, QUADS etc. The `endShape()` stops the drawing of the shape.

Inside the for loop, different points/vertex are created. The for() loop function loops through 360 and increments by the stepAngle variable. To get the points, the sine and cosine of the angle are obtained and is multiplied by the radius variable.

The color of the segment is set to the 'i'.

### Transformations
The `push() `is used to save the drawing state and `pop()` function restores the settings. The `translate()` is used to move the color wheel to the center of the canvas. The parameters is set to width/2 and height/2.

### Mouse interactivity
For mouse interactivity, the numOfsegments is mapped to the x position of the mouse.
