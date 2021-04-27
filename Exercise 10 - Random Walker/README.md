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