# Creative Computing - Year 4
## Creative Coding - Portfolio
- Maeriel Benedicto - N00150817

- A collection of p5 projects for Creating Coding module.
https://maerielbenedicto.github.io/creative-coding/
# Interactive Color Range

## Description
A color scale displaying all ranges of the HSB Color System.

## Function
`colorMode()` function accepts four parameters - the mode, the range for hue/red, range for the saturation/green and range for the brightness/blue.
The `colorMode()` is set to HSB with the range for hue and saturation set to the canvas width and height and its brightness to 100.

A nested `for()` loop is used to create the grid to display the color range.

### Mouse interactivity
The mouseX and mouseY variables are used to get the mouse position on the canvas. These are stored in the variables stepX and stepY. This variables control the size of the squares on the grid.

### Keyboard interactivity
`keyPressed()` is added for keyboard interactivity.
 If user pressed 's' or 'S', the function `saveCanvas()` saves the canvas as an image.
The function `gd.timestamp()` sets the name of the file as the date and time of when the image is saved.


# Asterik Pattern

## Description
A circle with straight lines originating from the center that changes its number of segments, strokeWeight and strokeColor as mouse is moved around the canvas.

## Functions
### Variables
The numOfSegments variable is the number of segments on the circle. The stepAngle variable is the angle of where the point is drawn. The radius variable is the radius of the circle.
The `angleMode()` is set to its default which is RADIANS and the `colorMode()` is set to HSB.

### Circle Shape
Inside the for loop, different points/vertex are created. The `for()` loop function loops through the TWO_PI value and increments by the stepAngle variable. To get the points, the sine and cosine of the angle are obtained and is multiplied by the radius variable. These points are used for the `vertex()` parameters.

### Mapping and mouse interactivity
The numOfsegments is mapped to the y position of the mouse. The lines are scaled by mapping the radius variable to the x position of the mouse. The map function takes in negative 200 as the starting target range and  positive 200 as ending target range.

The hue of the starting color and ending color for the `lerpColor` function is also mapped to the x and y positions of the mouse. The third color created using the `lerpColor `is set as the stroke color of the lines.

The strokeWeight of the lines is mapped to the y position of the mouse. This changes the thickness of the lines depending where the mouse is.

# Rotating Circle pattern

##  Description
Grid of circles that rotates towards the mouse and changes its size depending where the mouse is.

## Functions
### atan()
The exercise uses the `atan2()` method and the `rotate()` method to rotate the circle towards where the mouse is.

### dist()
The `dist()` method calculates the distance between 2 points. This method calculates the distance between the mouse position and the translated co-ordinates of the circles. This value is assigned to the variable d. The size of the circle is mapped to the calculated distance value.

# Rotating square pattern

## Description
A grid of squares in which rotates where the mouse is.

## Functions
### rectMode()
The `rectMode()` is set to CENTRE. This method interprets the x and y position set in the `rect()` method as the center position.

### atan2()
The `atan2()` method calculates the angle from a specified point to an origin. This method accepts two parameters: the y co-ordinate and the x co-ordinate.
As `translate()` method is used to place each square at its position, the y co-ordinate parameter is set to mouseY - transValueY, and the x co-ordinate parameter is set to mouseX - transValueX. The `atan2()` method calculates the angle between the squares and the mouse position. The squares are then rotated using this angle.

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

# Final Interactive Color wheel

## Description
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

## Functions
Custom shapes
The color wheel and the color markers are created using a `beginShape(), vertex()` and `endShape()` methods.

### Transformations
Transformations are used in this application: `translate()` to move objects at different place in the canvas and `rotate()` which rotates the color wheel. `push()` and `pop()` are also used for different elements created in the canvas.

### createButtons()
The buttons for the different color schemes are created using `createButton()`. The x and y positions are hard coded.

### Colors
The selected colors are displayed by using the `get()` function which returns the RGB color of the selected pixel. As the default return of the `get()` function, the `colorMode()` is set to RGB. The `color()` function is then used to create the colors and store it in variables. The `hue(), saturation(), brightness()` of the color is then taken. The `colorMode` is set back to HSB. The hue, saturation and brightness values are set as parameters for `color()` function, which then will return the color of the selected color in the color wheel.

### Displaying pattern
On the right side of the application, the color palette is displayed.
A main color is selected and if a user moves the mouse across the x-axis, different saturation levels of the selected color is displayed. A `for()` loop is used to get the different saturated levels of the selected color. These are then stored in an array called palettes. A `for()` loop is used to loop through the palettes array and fill the `rect()`. The size and the number of the color displayed on the screen is controlled by the mouse position. The size of each `rect()` is mapped to the x position of the mouse.

### User interface
There are different buttons for each color schemes. A lock button is located on the right side of the palette, for users to lock the pattern on the screen, the users will then be able to spin the color wheel again and watch as the palette changes colors. If the lock variable is false, only the selected color on the color wheel are displayed when the mouse is not on the palette area. A reset button is added for users to go back to selecting only one color.

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

# lerpColor()

## Description
Display colors between one color to another using `lerpColor' function.

## Functions
### color()
A set of rectangles across the canvas is drawn to demonstrate the color interpolation. </br> A `for()` loop is used to draw sets of squares (width is 20px and the height is the height of canvas) across the x axis.
The `colorMode()` is set to HSB color system. The `color()` function creates the color and stores it into a variable. The parameters of the functions are the HSB values. The colors to use for interpolation is stored in the startColor and endColor variables.

## #lerpColor()
The `lerpColor` function is used to find the third color between two colors interpolated with each other. The function accepts three parameters: a color which represents the starting color - startColor variable, a color which represents the ending color - endingColor variable and the amount of interpolation between 0 and 1.

# Square Pattern

## Description
Randomly generated square within a square in a grid that changes the size and strokeWeight of the squares. This uses the same methods as the 'line pattern' i.e. `random()`

## Functions
### Mapping and interactivity
The size of the squares are controlled by the x position of the mouse and is assigned to the variable r. The strokeWeight is controlled by the y position of the mouse and is assigned to the variable sw.

Using the `random()` method, a value of either 0 or 1 is generated. An if statement is used to check if the randomNum variable is 0 or 1.
If its 0, the squares is drawn with the r variable substracted from the width and height of the squares. If the randomNum value is 1, the squares is drawn with the r variable added to the width and height of the squares.

This created a many different outputs.

# Triangle and Line Pattern

## Description
Randomly generated triangles and lines in the canvas. Using the `random()` method as the other exercises, either a triangle or a line is drawn on the grid cell. `lerpColor()` method is also used to set the colors.

## Functions
### Triangles
To draw the triangles, `beginShape(), vertex() and endShape()` are used. The parameter passed in the `beginShape` method is TRIANGLES. This draws two triangles on a grid cell.

Using the `random()` method, a value of either 0 or 1 is generated. An if statement is used to check if the randomNum variable is 0 or 1.
If its 0, the triangles are drawn, and if the randomNum value is 1, a line is drawn.

# Cubic Pattern

## Description
A cube within a cube pattern. This is the original pattern I aimed to recreate for the wrapping pattern assignment.

## Functions
Using a nested `for()` loop, a grid of cubes within cubes are created.
The cubes are created using `beginShape(), vertex()` and `endShape()` methods. The four vertices are for each corner of the cube.

### Modulo
Modulo is a math operation which finds the remainder of a number divided by another number. Modulo is used to check if grid row is an even number. If 'j' is an even number, the cube's x position has a minus offset.

### Color
The color for each face of the cube are stored in an array.  

# Wrapping paper pattern

## Description
A set of inner and outer cubes generated in a canvas randomly using the `random()` method.

## Functions
### Classes
To create the objects, classes are used. There are two classes for this exercise - InnerCube and OuterCube classes. This class draws the cube object. Inside the class is a `constructor()` method which is used to create and initialize the object. The `render()` method is where the vertices that draws the cube are. The cubes are created using `beginShape(), vertex()` and `endShape()` methods. The four vertices are for each corner of the cube. Modulo is a math operation which finds the remainder of a number divided by another number. Modulo is used to check if grid row is an even number. If 'j' is an even number, the cube's x position has a minus offset.

To display and create the objects, a nested `for()` loop is used.

### random()
An array of 0s and 1s are created. This will give more a controlled randomness. Using the `random()` method, this retrieves a random value from the array. This will randomly generate the cubes on the canvas.

### Colors
The colors for each face of the cube are stored in an array. A function called `generateColor()` where it loops through these array as user click the 'generate colour' buttons, this works the same with the background.

### Control variables
User can change different variables:
- Resize inner cubes
- Change angle of outer cubes
- Change angle of inner cubes
- Change colour patterns
- Change background color

The user can change these values using the sliders and buttons which are created using the `createSlider()`, `createButton()` and createP() methods.

### createSlider(), createButton() and createP()
`createSlider()` are used to control the different variables. For example, to change position of four of the vertices, the  value is either subtracted or added to the x or y value of the vertices. `createButton()` method is used to create the buttons to generate the alternate inner and outer cubes. `createP()` method is used to create an element in the DOM.

### Mapping
The `map()` method is used to control whether to display the other inner cube or the outer cube. The vertices values of the cube are mapped to the vairable called input/ sc_input, which is either set to a 0 or width of the canvas.  


# Random Walker

## Description 
This sketch shows the path of a ‘dumb’ agent. The colour of the ellipse is randomly generated from an array of colors. 

## Functions
### Create the walker
The walker (ellipse) is placed in the center of the canvas, with its set diameter. The initial color of the ellipse is set in the set up() function. 

### Move the walker
Arrays called optionsX and optionsY are created. These have the values [-1,0,1]. These values indicates the direction of the walker. Using the random() function, the direction is generated and the walker is moved based on this value and the stepSize. 

### Check borders
To ensure that the walker stays on the canvas, a check is performed. These if statements check if the x and y positions of the walker is within the boundaries of the canvas. 

# Random angle

## Description
A Line bouncing off the edges at random angles. 

## Functions

### Create point 
A Point class is created, which creates a point object. Using the createVector() function, the x and y co-ordinates of the point is created. It also has the properties: angle, s (strokeWeight) and color.  

### createPoint() function 
createPoint function creates a new point object and pushes it into the points array. This function takes in xpos, ypos and _a (angle) arguments. In the set up() function, the first point is placed on (0,0) origin with a 45 degrees angle. 

The Point class have the update() method which updates the x and y co-ordinates of the point. The point is moved using the sin() and cos(). The background is not set at each draw therefore, as the point moves, this creates a line. 

### Check boundaries
In the Point class, a method called checkBorder() checks if a point hits the edge of the canvas. When it does, the point bounces off at a random angle. The randomAngle() function checks which edge of the canvas it hit and based on that returns an angle. 

# Curve Vertex

## Description 
Using curveVertex to draw a circle. 

## Functions
### Point and Curve Classes
A Point class is used to create an object with its x and y co-ordinates, using the function createVector(). A Curve class is also created which takes in the x and y position of the point objects. 

### drawPoints()
In the drawPoints() function, the objects are created. Using a for loop, a number of points is created. By varying the angle and using trigonometry to calculate each point for that angle. To get the (x,y) position, the cos(angle) and sin(angle) is used, with the radius multiplied to it. These x and y values are then used to created the points objects and is pushed into points array. The curves objects are also created which are pushed into the curves array. 

These points can be seen by drawing an ellipse at the x and y position. The circle() method in the Point class draw these ellipses. 

### curveVertex()
The curveVertex is used to specify the vertex coordinates used to draw a curve. This function can only be used between the beginShape and endShape().  In the draw() function, the curve() method of the first controlled point is called. The curve() method is where the curve vertices are drawn which forms the circle. The first and last vertices are used to guide the beginning and end of a curve.

To create a blob like circle, Perlin Noise is used. Each point of the circle moves by calculating a new x and y positions. Using map() function, the cos() and sin() values goes from -1 to 1 and is mapped to 0 to 3. 

The new x and y positions is then passed to the update() method of the curve and point objects. This updates the x and y position. 

To move the ‘blob’,  variables moveX and moveY is incremented by 0.5. To ensure that the object stays inside the canvas, a check is performed.

# Growth

## Description
A circle at the center of the canvas with random other circles created at random points and is reposition to the circle closest to it. 

## Functions
### Create the first point
A point object is created using the Point class. The point class has the x and y coordinates and diameter of the circle. The initial point in created in the initialPoint() function. The color of the stroke is set randomly, x and y position is set to the center of the canvas.  The point object is pushed into the points array.  The render() method draws the circle. 

### Create other points
The generateRandomPoint() function is where new point is created. The x and y position and the diameter is set randomly. 

### Find the closest point
To find the closest point, the dist() function is used. This calculates the distance between two points: the points in the array and the new point created. If the point has the lowest distance, that is set as the closest.  Once the closest point is identified, the point is stored in the closedPoint variable. 

The dock() method of closest point is then called passing the new point as parameter. 

### dock()
The dock() method accepts the new point object. This is set as the current point. The distances between the current point and closest point is calculated using the p5.Vector.sub. This returns the resultant vector of the two points. To calculate the length of the resultant vector, mag() is used. to calculate the angle and direction atan2() is used. The new x and y position is then updated by substracting the calculated distance from the current point position. The render() method is then called with the new x and y position. 

After docking the new point to its new position, the new point is then added to the points array. 

### Restart growth 
If the points array reached the set max number of points, the canvas is cleared and the initialPoint() function is called. 

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

### findMatch()
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

# Type with curve vertex
## Description
Using curveVertex to form the shape. 

This exercise uses the same functions as the type exercise. However, instead of using vertex(), curveVertex is used. 
Each points of the shape is moved using cos() and sin() to create the effect. 

# Generative Agency 

## Description
This simulation is an interactive generative time based program that explores agency. The idea is to build an autonomous systems by generating letters from autonomous agents.

##  Functions
### Load font
Fonts are loaded in the sketch using the `loadFont()` method in the `preload()` function. 

### Create Agents
An Agents class form each agent. An agent class have its position, size, and a target. 
If the agents needed to form the string is more than the created agents, agents are cloned. If the scattered option is true, the position of each agents are random, and if false, the new agents position is copied from the last agent. If the agents needed are less than the created agents, the remaining agents are removed from the array. 

### Graphics
A Graphic class creates a graphic object which is used for the text to draw into. The image is analysed and the positions of where the black value of the image is checked. This is stored in an array. This array is what will form the letter. Each agents are assigned a target positions from this array.

### getLetter()
The getLetter() function is called once the letters graphics are created. The getLetter() function loops through the letters array and create an array of the starting index and ending index of agents that will form individual letter. In this function is also where it checks if the agents are enough to form the string. 

### Controllable Variables
The users can control how fast the agents move to its position, the text that is being displayed on the canvas and the initial position of the agents. 

### setTimeout()
Using the setTimeout() method, the agents that form one character at a time moves towards its target. The agents move towards it target using the lerp() method. 



