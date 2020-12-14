### lerpColor()

#Description
Display colors between one color to another using `lerpColor' function.

#Functions
#color()
A set of rectangles across the canvas is drawn to demonstrate the color interpolation. </br> A for() loop is used to draw sets of squares (width is 20px and the height is the height of canvas) across the x axis.
The colorMode() is set to HSB color system. The color() function creates the color and stores it into a variable. The parameters of the functions are the HSB values. The colors to use for interpolation is stored in the startColor and endColor variables.

#lerpColor()
The lerpColor function is used to find the third color between two colors interpolated with each other. The function accepts three parameters: a color which represents the starting color - startColor variable, a color which represents the ending color - endingColor variable and the amount of interpolation between 0 and 1.
