# Line pattern

## Description
Randomly generated lines in a grid that changes its stroke weight depending where the mouse is.

## Functions
### random()
The random method takes in two parameters which defines the range of the random value the method will output. As the `random()` returns a float, the rounded value is calculated. The return value of the `random()` method is passed as a parameter in the `round()` method which calculates the closest integer to the value. The value this returned is assigned to the randomNum variable.

An if statement is used to check if the randomNum variable is 0 or 1.
If its 0, a line is drawn from one point to another and if its 1, the line is drawn in reversed. This creates an interesting pattern.

### Translation
The nested `for()` loop creates the grid for the line pattern to be drawn on. The variables transValueX and transValueY are the translated values for each line. These are then set as the parameters for `translate()` function.

### dist()
The `dist()` method calculates the distance between 2 points. This method calculates the distance between the mouse position and the line which is assigned to the variable d. The strokeWeight of the line is mapped to the d value, with the target value 2 to 6.
