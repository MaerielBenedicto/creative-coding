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