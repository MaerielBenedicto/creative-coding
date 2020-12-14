###Rotating square pattern

#Description
A grid of squares in which rotates where the mouse is.

#Functions
#rectMode()
The rectMode() is set to CENTRE. This method interprets the x and y position set in the rect() method as the center position.

#atan2()
The atan2() method calculates the angle from a specified point to an origin. This method accepts two parameters: the y co-ordinate and the x co-ordinate.
As translate() method is used to place each square at its position, the y co-ordinate parameter is set to mouseY - transValueY, and the x co-ordinate parameter is set to mouseX - transValueX. The atan2() method calculates the angle between the squares and the mouse position. The squares are then rotated using this angle.
