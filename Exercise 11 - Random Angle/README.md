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