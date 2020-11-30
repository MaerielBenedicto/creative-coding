### Exercise 09 - Wrapping paper pattern

A set of inner and outer cubes generated in a canvas randomly using the `random()` method.

Using a for loop, a grid is created.
There are two classes - InnerCube and OuterCube classes.
Inside these classes is a render function where  `beginShape(), vertex(), endShape()` functions are used to create the shape. The four vertices are for each corner of the cube.
Using a modulo, if 'j' is an even number, the cube's x position has a minus offset.

Using the `random()` method, this will generate a '0' or '1' which will randomly generate the cubes on the canvas.

Colors are stored in an array, and there's a function where it loops through these array as user click the 'generate colour' buttons, this works the same with the background.

User can change different variables:
- Resize inner cubes
- Change angle of outer cubes
- Change angle of inner cubes
- Change colour patterns
- Change background color

The user can change these values using the sliders and buttons which are created using the `createSlider()` and `createButton()` methods.
