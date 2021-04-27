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

