### Interactive Color Range

##Description
A color scale displaying all ranges of the HSB Color System.

##Function
colorMode() function accepts four parameters - the mode, the range for hue/red, range for the saturation/green and range for the brightness/blue.
The colorMode() is set to HSB with the range for hue and saturation set to the canvas width and height and its brightness to 100.

A nested for() loop is used to create the grid to display the color range.

##Mouse interactivity
The mouseX and mouseY variables are used to get the mouse position on the canvas. These are stored in the variables stepX and stepY. This variables control the size of the squares on the grid.

##Keyboard interactivity
keyPressed() is added for keyboard interactivity.
 If user pressed 's' or 'S', the function saveCanvas() saves the canvas as an image.
The function `gd.timestamp()` sets the name of the file as the date and time of when the image is saved.
