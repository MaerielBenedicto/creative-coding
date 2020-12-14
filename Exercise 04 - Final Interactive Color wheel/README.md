###Interactive Color wheel

#Description
An interactive color wheel where user can choose a color scheme they would like and spin the color wheel. Once the user pick a color scheme, a marker will show in the color wheel. The user can then click the "SPIN" button.
Clicking the spin button will rotate the color wheel, the user can then stop at whichever color they want.
If for example, user chose the 'Complementary' color scheme, two markers will appear which shows two opposite colors on the color wheel.
The selected colors will then appear on the right side.

There are five color schemes in this interactive color wheel:
- Complementary
- Analogous
- Triadic
- Tetradic
- Square

#Functions
Custom shapes
The color wheel and the color markers are created using a beginShape(), vertex() and endShape() methods.

#Transformations
Transformations are used in this application: translate() to move objects at different place in the canvas and rotate() which rotates the color wheel. push() and pop() are also used for different elements created in the canvas.

#createButtons()
The buttons for the different color schemes are created using `createButton()`. The x and y positions are hard coded.

#Colors
The selected colors are displayed by using the `get()` function which returns the RGB color of the selected pixel. As the default return of the `get()` function, the `colorMode()` is set to RGB. The `color()` function is then used to create the colors and store it in variables. The `hue(), saturation(), brightness()` of the color is then taken. The `colorMode` is set back to HSB. The hue, saturation and brightness values are set as parameters for `color()` function, which then will return the color of the selected color in the color wheel.

#Displaying pattern
On the right side of the application, the color palette is displayed.
A main color is selected and if a user moves the mouse across the x-axis, different saturation levels of the selected color is displayed. A for() loop is used to get the different saturated levels of the selected color. These are then stored in an array called palettes. A for() loop is used to loop through the palettes array and fill the rect(). The size and the number of the color displayed on the screen is controlled by the mouse position. The size of each rect() is mapped to the x position of the mouse.

#User interface
There are different buttons for each color schemes. A lock button is located on the right side of the palette, for users to lock the pattern on the screen, the users will then be able to spin the color wheel again and watch as the palette changes colors. If the lock variable is false, only the selected color on the color wheel are displayed when the mouse is not on the palette area. A reset button is added for users to go back to selecting only one color.
