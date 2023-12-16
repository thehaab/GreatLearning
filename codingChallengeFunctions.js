/* Description

Write a program which consists of four methods –

    Method 1 (print Method):

    This method will take two parameters and print those parameter values on console.
    The parameters will be –
        A string
        A number.

Method 2 (square method):

    This method should calculate the area of a square.
    It will take two parameters –
        The value of edge of the square
        The print method we created in the first step.
    Once the area is calculated it should call the print method which is passed as a second parameter such that –
        The first parameter of the print method should be "Area of square is: ".
        The calculated area of the square should be passed as the second parameter to the print method.
        The final output should be in the form "Area of square is: calculatedArea".


Method 3 (rectangle method):

    The third method should calculate the area of a rectangle.
    It will have three parameters –
        Length of the rectangle
        Width of the rectangle
        The print method we created in the first step.
    Once the area is calculated it should call the print method which is passed as a second parameter such that –
        The first parameter of the print method should be "Area of rectangle is: ".
        The calculated area of the rectangle should be passed as the second parameter to the print method.
        The final output should be in the form "Area of rectangle is: calculatedArea".

Method 4 (circle method):

    This method should calculate the area of a circle.
    It will have two parameters –
        Radius of circle
        The print method we created in the first step.
    Once the area is calculated it should call the print method which is passed as a second parameter such that –
        The first parameter of the print method should be "Area of circle is: ".
        The calculated area of the circle should be passed as the second parameter to the print method.
        The final output should be in the form "Area of circle is: calculatedArea". 

Finally, we need to call each method for a square, rectangle, and circle and call the print method inside each method with the appropriate input parameters. */


function printMethod(message, number) {
  console.log(message, number);
}

function squareMethod(edge, printMethod) {
  area = edge * edge;
  printMethod("Area of square is: ", area);
}

function rectangleMethod(length, width, printMethod) {
  area = length * width;
  printMethod("Area of rectangle is: ", area);
}

function circleMethod(radius, printMethod) {
  area = 3.14 * radius * radius;
  printMethod("Area of circle is: ", area);
}

squareMethod(5, printMethod);
rectangleMethod(10, 5, printMethod);
circleMethod(2, printMethod);