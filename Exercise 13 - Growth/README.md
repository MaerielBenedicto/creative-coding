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