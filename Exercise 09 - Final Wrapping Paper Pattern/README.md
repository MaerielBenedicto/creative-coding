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
