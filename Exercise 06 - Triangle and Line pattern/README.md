# Triangle and Line Pattern

## Description
Randomly generated triangles and lines in the canvas. Using the `random()` method as the other exercises, either a triangle or a line is drawn on the grid cell. `lerpColor()` method is also used to set the colors.

## Functions
### Triangles
To draw the triangles, `beginShape(), vertex() and endShape()` are used. The parameter passed in the `beginShape` method is TRIANGLES. This draws two triangles on a grid cell.

Using the `random()` method, a value of either 0 or 1 is generated. An if statement is used to check if the randomNum variable is 0 or 1.
If its 0, the triangles are drawn, and if the randomNum value is 1, a line is drawn.
