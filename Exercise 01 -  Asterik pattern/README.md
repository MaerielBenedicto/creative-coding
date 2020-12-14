### Asterik Pattern

## Description
A circle with straight lines originating from the center that changes its number of segments, strokeWeight and strokeColor as mouse is moved around the canvas.

## Functions
## Variables
The numOfSegments variable is the number of segments on the circle. The stepAngle variable is the angle of where the point is drawn. The radius variable is the radius of the circle.
The `angleMode()` is set to its default which is RADIANS and the `colorMode()` is set to HSB.

## Circle Shape
Inside the for loop, different points/vertex are created. The `for()` loop function loops through the TWO_PI value and increments by the stepAngle variable. To get the points, the sine and cosine of the angle are obtained and is multiplied by the radius variable. These points are used for the `vertex()` parameters.

## Mapping and mouse interactivity
The numOfsegments is mapped to the y position of the mouse. The lines are scaled by mapping the radius variable to the x position of the mouse. The map function takes in negative 200 as the starting target range and  positive 200 as ending target range.

The hue of the starting color and ending color for the `lerpColor` function is also mapped to the x and y positions of the mouse. The third color created using the `lerpColor `is set as the stroke color of the lines.

The strokeWeight of the lines is mapped to the y position of the mouse. This changes the thickness of the lines depending where the mouse is.
